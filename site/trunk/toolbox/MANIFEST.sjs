
var MF = {
  "apps" : {
    "core": "//4.core.site.freebase.dev",
    "promise": "//4.promise.site.freebase.dev",
    "template": "//4.template.site.freebase.dev",

    // external apps
    "appeditor" : "//appeditor.apps.freebase.dev"
  }
};

if (/^https?\:\/\/devel\.(freebase|sandbox\-freebase|branch\.qa\.metaweb|trunk\.qa\.metaweb)\.com(\:\d+)?/.test(acre.request.app_url)) {
  MF.apps.core = "//core.site.freebase.dev";
}
acre.require(MF.apps.core + "/MANIFEST").init(MF, this);
