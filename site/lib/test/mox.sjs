var mf = acre.require("MANIFEST").mf;
var apis = mf.require("promise/apis");
var h = mf.require("core/helpers");

var self = this;

/**
 * Mock record phase.
 *
 * Usage:
 *
 *   acre.require("/test/lib").enable(this);
 *   var mf = acre.require("MANIFEST").mf;
 *   mf.require("test/mox").record(this);
 *   test(...);
 *   acre.test.report();
 *
 * 1. This will wrap all promise api calls (i.e. freebase.mqlread, freebase.mqlwrite, urlfetch.)
 * 2. Record all requests/responses made through the promise apis.
 * 3. Output the playback data as JSON at the end of acre.test.report().
 * 4. You can then just copy and paste the JSON for the mock playback phase.
 */
function record(scope) {

  var test_data = [];
  var playback_data = {};

  function wrapper(api_name, api) {
    return function() {
      var args = arguments_array.apply(null, arguments);
      var p = api.apply(this, args)
        .then(function(response) {
                test_data.push([api_name, args, response]);
                return response;
              },
              function (error) {
                test_data.push([api_name, args, error]);
                return error;
              });
      acre.async.wait_on_results();
      return p;
    };
  };

  // Override async apis.freebase.* methods to record response
  var freebase_apis = apis.freebase;
  for (var api_name in freebase_apis) {
    (function() {
      var api = apis.freebase[api_name];
      apis.freebase[api_name] = wrapper("freebase." + api_name, api);
    })();
  }

  // Override async apis.urlfetch to record response
  var urlfetch = apis.urlfetch;
  apis.urlfetch = wrapper("urlfetch", urlfetch);

  // Override test() to reset response array
  var acre_test = scope.test;
  scope.test = function(name) {
    test_data.length = 0;
    acre_test.apply(scope, arguments);
    playback_data[name] = [].concat(test_data);
  };

  // Override acre.test.report() to serialize playback JSON
  var acre_test_report = scope.acre.test.report;
  scope.acre.test.report = function(name) {
    acre_test_report.apply(scope, arguments);
    acre.write(JSON.stringify(playback_data));
  };
};

/**
 * Mock playback phase.
 *
 * Usage:
 *
 *   acre.require("/test/lib").enable(this);
 *   var mf = acre.require("MANIFEST").mf;
 *   mf.require("test/mox").playback(this, "playback_file.json");
 *   test(...);
 *   acre.test.report();
 *
 * 1. This will wrap all promise api calls (i.e. freebase.mqlread, freebase.mqlwrite, urlfetch.)
 * 2. Match each test's promise api call (request/response) to what's in the JSON playback file.
 * 3. Mock the response and return it without making an actual (live http) request.
 * 4. Your tests should no longer be dependent on "live" api calls.
 */
function playback(scope, playback_file) {
  var playback_data = JSON.parse(scope.acre.require(playback_file).body);

  var test_info;

  function wrapper(api_name, api) {
    return function() {
      var test_data = playback_data[test_info.name];
      // Assert playback data exist for current test (name)
      if (!test_data) {
        throw(h.sprintf("Playback data does not exist: %s", test_info.name));
      }
      // Assert playback data exists for current index in the api callstack
      var current;
      try {
        current = test_data[test_info.index++];
        if (!current) {
          throw(test_info.index - 1);
        }
      }
      catch(ex) {
        throw(h.sprintf("Playback data IndexOutOfBoundsException: %s", ex));
      }

      var api_args = arguments_array.apply(null, arguments);
      var recorded_api_name = current[0];
      var recorded_args = current[1];
      var recorded_response = current[2];

      // Assert current api callstack is the same as api_name
      if (recorded_api_name !== api_name) {
        throw(h.sprintf("Playback data api: %s, expected: %s", api_name, recorded_api_name));
      }

      // Assert api_args == recorded_args (deep equals)
      if (!scope.QUnit.equiv(api_args, recorded_args)) {
        throw(h.sprintf("Playback data arguments: %s, expected: %s", JSON.stringify(api_args), JSON.stringify(recorded_args)));
      }

      return deferred.resolved(recorded_response);
    };
  };

  // Override async apis.freebase.* methods to playback response
  var freebase_apis = apis.freebase;
  for(var api_name in freebase_apis) {
    (function() {
       var api = apis.freebase[api_name];
       apis.freebase[api_name] = wrapper("freebase." + api_name, api);
     })();
  }

  // Override async apis.urlfetch to playback response
  var urlfetch = apis.urlfetch;
  apis.urlfetch = wrapper("urlfetch", urlfetch);

  // Override test() to reset current playback response
  var acre_test = scope.test;
  scope.test = function(name) {
    test_info = {name:name, index:0};
    acre_test.apply(scope, arguments);
  };
};

/**
 * Convert arguments object into a proper Array
 */
function arguments_array() {
  var args = [];
  for (var i=0,l=arguments.length; i<l; i++) {
    args[i] = arguments[i];
  }
  return args;
};

