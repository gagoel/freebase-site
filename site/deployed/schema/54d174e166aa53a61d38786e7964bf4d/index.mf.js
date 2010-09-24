/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
jQuery.cookie=function(a,g,j){if(typeof g!="undefined"){j=j||{};if(g===null){g="";j=$.extend({},j);j.expires=-1}var d="";if(j.expires&&(typeof j.expires=="number"||j.expires.toUTCString)){if(typeof j.expires=="number"){d=new Date;d.setTime(d.getTime()+j.expires*24*60*60*1E3)}else d=j.expires;d="; expires="+d.toUTCString()}var c=j.path?"; path="+j.path:"",b=j.domain?"; domain="+j.domain:"";j=j.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(g),d,c,b,j].join("")}else{g=null;if(document.cookie&&
document.cookie!=""){j=document.cookie.split(";");for(d=0;d<j.length;d++){c=jQuery.trim(j[d]);if(c.substring(0,a.length+1)==a+"="){g=decodeURIComponent(c.substring(a.length+1));break}}}return g}};
jQuery.fn.textPlaceholder=function(a){a=a||"#AAA";return this.each(function(){var g=this;if(!(g.placeholder&&"placeholder"in document.createElement(g.tagName))){var j=g.style.color,d=g.getAttribute("placeholder"),c=$(g);if(g.value===""||g.value==d){g.value=d;g.style.color=a;c.data("placeholder-visible",true)}c.focus(function(){this.style.color=j;if(c.data("placeholder-visible")){c.data("placeholder-visible",false);this.value=""}});c.blur(function(){if(this.value===""){c.data("placeholder-visible",
true);this.value=d;this.style.color=a}else{this.style.color=j;c.data("placeholder-visible",false)}});g.form&&$(g.form).submit(function(){if(c.data("placeholder-visible"))g.value=""})}})};
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(g,j){this.defaults.type=g;this.defaults.name=j},get:function(g,j){var d=a.extend({},this.defaults,j);if(!d.single.length)d.single="metadata";var c=a.data(g,d.single);if(c)return c;c="{}";var b=function(h){if(typeof h!="string")return h;return h=eval("("+h+")")};if(d.type=="html5"){var e={};a(g.attributes).each(function(){var h=this.nodeName;if(h.match(/^data-/))h=h.replace(/^data-/,
"");else return true;e[h]=b(this.nodeValue)})}else{if(d.type=="class"){var f=d.cre.exec(g.className);if(f)c=f[1]}else if(d.type=="elem"){if(!g.getElementsByTagName)return;f=g.getElementsByTagName(d.name);if(f.length)c=a.trim(f[0].innerHTML)}else if(g.getAttribute!=undefined)if(f=g.getAttribute(d.name))c=f;e=b(c.indexOf("{")<0?"{"+c+"}":c)}a.data(g,d.single,e);return e}}});a.fn.metadata=function(g){return a.metadata.get(this[0],g)}})(jQuery);
(function(a,g){function j(d){return!a(d).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.4",plugin:{add:function(d,c,b){d=a.ui[d].prototype;for(var e in b){d.plugins[e]=d.plugins[e]||[];d.plugins[e].push([c,b[e]])}},call:function(d,c,b){if((c=d.plugins[c])&&d.element[0].parentNode)for(var e=0;e<c.length;e++)d.options[c[e][0]]&&c[e][1].apply(d.element,b)}},contains:function(d,
c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)},hasScroll:function(d,c){if(a(d).css("overflow")==="hidden")return false;var b=c&&c==="left"?"scrollLeft":"scrollTop",e=false;if(d[b]>0)return true;d[b]=1;e=d[b]>0;d[b]=0;return e},isOverAxis:function(d,c,b){return d>c&&d<c+b},isOver:function(d,c,b,e,f,h){return a.ui.isOverAxis(d,b,f)&&a.ui.isOverAxis(c,e,h)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,
CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(d,c){return typeof d==="number"?this.each(function(){var b=this;setTimeout(function(){a(b).focus();c&&c.call(b)},d)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable",
"off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var d;d=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,
"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!d.length?a(document):d},zIndex:function(d){if(d!==g)return this.css("zIndex",d);if(this.length){d=a(this[0]);for(var c;d.length&&d[0]!==document;){c=d.css("position");if(c==="absolute"||c==="relative"||c==="fixed"){c=parseInt(d.css("zIndex"));if(!isNaN(c)&&c!=0)return c}d=d.parent()}}return 0}});a.each(["Width","Height"],function(d,c){function b(i,k,n,l){a.each(e,function(){k-=
parseFloat(a.curCSS(i,"padding"+this,true))||0;if(n)k-=parseFloat(a.curCSS(i,"border"+this+"Width",true))||0;if(l)k-=parseFloat(a.curCSS(i,"margin"+this,true))||0});return k}var e=c==="Width"?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(i){if(i===g)return h["inner"+c].call(this);return this.each(function(){a.style(this,f,b(this,i)+"px")})};a.fn["outer"+
c]=function(i,k){if(typeof i!=="number")return h["outer"+c].call(this,i);return this.each(function(){a.style(this,f,b(this,i,true,k)+"px")})}});a.extend(a.expr[":"],{data:function(d,c,b){return!!a.data(d,b[3])},focusable:function(d){var c=d.nodeName.toLowerCase(),b=a.attr(d,"tabindex");if("area"===c){c=d.parentNode;b=c.name;if(!d.href||!b||c.nodeName.toLowerCase()!=="map")return false;d=a("img[usemap=#"+b+"]")[0];return!!d&&j(d)}return(/input|select|textarea|button|object/.test(c)?!d.disabled:"a"==
c?d.href||!isNaN(b):!isNaN(b))&&j(d)},tabbable:function(d){var c=a.attr(d,"tabindex");return(isNaN(c)||c>=0)&&a(d).is(":focusable")}})}})(jQuery);
(function(a,g){var j=a.fn.remove;a.fn.remove=function(d,c){return this.each(function(){if(!c)if(!d||a.filter(d,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return j.call(a(this),d,c)})};a.widget=function(d,c,b){var e=d.split(".")[0],f;d=d.split(".")[1];f=e+"-"+d;if(!b){b=c;c=a.Widget}a.expr[":"][f]=function(h){return!!a.data(h,d)};a[e]=a[e]||{};a[e][d]=function(h,i){arguments.length&&this._createWidget(h,i)};c=new c;c.options=a.extend(true,{},c.options);
a[e][d].prototype=a.extend(true,c,{namespace:e,widgetName:d,widgetEventPrefix:a[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:f},b);a.widget.bridge(d,a[e][d])};a.widget.bridge=function(d,c){a.fn[d]=function(b){var e=typeof b==="string",f=Array.prototype.slice.call(arguments,1),h=this;b=!e&&f.length?a.extend.apply(null,[true,b].concat(f)):b;if(e&&b.substring(0,1)==="_")return h;e?this.each(function(){var i=a.data(this,d),k=i&&a.isFunction(i[b])?i[b].apply(i,f):i;if(k!==i&&k!==g){h=k;return false}}):
this.each(function(){var i=a.data(this,d);if(i){b&&i.option(b);i._init()}else a.data(this,d,new c(b,this))});return h}};a.Widget=function(d,c){arguments.length&&this._createWidget(d,c)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,a.metadata&&a.metadata.get(c)[this.widgetName],d);var b=this;this.element.bind("remove."+this.widgetName,function(){b.destroy()});
this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(d,c){var b=d,e=this;if(arguments.length===0)return a.extend({},e.options);if(typeof d==="string"){if(c===g)return this.options[d];b={};b[d]=c}a.each(b,function(f,
h){e._setOption(f,h)});return e},_setOption:function(d,c){this.options[d]=c;if(d==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,c,b){var e=this.options[d];c=a.Event(c);c.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();b=b||{};if(c.originalEvent){d=
a.event.props.length;for(var f;d;){f=a.event.props[--d];c[f]=c.originalEvent[f]}}this.element.trigger(c,b);return!(a.isFunction(e)&&e.call(this.element[0],c,b)===false||c.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var g=this;this.element.bind("mousedown."+this.widgetName,function(j){return g._mouseDown(j)}).bind("click."+this.widgetName,function(j){if(g._preventClickEvent){g._preventClickEvent=false;j.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(g){g.originalEvent=g.originalEvent||{};if(!g.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(g);this._mouseDownEvent=g;var j=this,d=g.which==1,c=typeof this.options.cancel=="string"?a(g.target).parents().add(g.target).filter(this.options.cancel).length:false;if(!d||c||!this._mouseCapture(g))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){j.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g)){this._mouseStarted=this._mouseStart(g)!==false;if(!this._mouseStarted){g.preventDefault();
return true}}this._mouseMoveDelegate=function(b){return j._mouseMove(b)};this._mouseUpDelegate=function(b){return j._mouseUp(b)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.browser.safari||g.preventDefault();return g.originalEvent.mouseHandled=true}},_mouseMove:function(g){if(a.browser.msie&&!g.button)return this._mouseUp(g);if(this._mouseStarted){this._mouseDrag(g);return g.preventDefault()}if(this._mouseDistanceMet(g)&&
this._mouseDelayMet(g))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,g)!==false)?this._mouseDrag(g):this._mouseUp(g);return!this._mouseStarted},_mouseUp:function(g){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=g.target==this._mouseDownEvent.target;this._mouseStop(g)}return false},_mouseDistanceMet:function(g){return Math.max(Math.abs(this._mouseDownEvent.pageX-
g.pageX),Math.abs(this._mouseDownEvent.pageY-g.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var g=/left|center|right/,j=/top|center|bottom/,d=a.fn.position,c=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return d.apply(this,arguments);b=a.extend({},b);var e=a(b.of),f=(b.collision||"flip").split(" "),h=b.offset?b.offset.split(" "):[0,0],i,k,n;if(b.of.nodeType===9){i=e.width();k=e.height();n={top:0,left:0}}else if(b.of.scrollTo&&b.of.document){i=e.width();k=e.height();n={top:e.scrollTop(),left:e.scrollLeft()}}else if(b.of.preventDefault){b.at="left top";i=k=
0;n={top:b.of.pageY,left:b.of.pageX}}else{i=e.outerWidth();k=e.outerHeight();n=e.offset()}a.each(["my","at"],function(){var l=(b[this]||"").split(" ");if(l.length===1)l=g.test(l[0])?l.concat(["center"]):j.test(l[0])?["center"].concat(l):["center","center"];l[0]=g.test(l[0])?l[0]:"center";l[1]=j.test(l[1])?l[1]:"center";b[this]=l});if(f.length===1)f[1]=f[0];h[0]=parseInt(h[0],10)||0;if(h.length===1)h[1]=h[0];h[1]=parseInt(h[1],10)||0;if(b.at[0]==="right")n.left+=i;else if(b.at[0]==="center")n.left+=
i/2;if(b.at[1]==="bottom")n.top+=k;else if(b.at[1]==="center")n.top+=k/2;n.left+=h[0];n.top+=h[1];return this.each(function(){var l=a(this),m=l.outerWidth(),q=l.outerHeight(),p=a.extend({},n);if(b.my[0]==="right")p.left-=m;else if(b.my[0]==="center")p.left-=m/2;if(b.my[1]==="bottom")p.top-=q;else if(b.my[1]==="center")p.top-=q/2;p.left=parseInt(p.left);p.top=parseInt(p.top);a.each(["left","top"],function(t,s){a.ui.position[f[t]]&&a.ui.position[f[t]][s](p,{targetWidth:i,targetHeight:k,elemWidth:m,
elemHeight:q,offset:h,my:b.my,at:b.at})});a.fn.bgiframe&&l.bgiframe();l.offset(a.extend(p,{using:b.using}))})};a.ui.position={fit:{left:function(b,e){var f=a(window);f=b.left+e.elemWidth-f.width()-f.scrollLeft();b.left=f>0?b.left-f:Math.max(0,b.left)},top:function(b,e){var f=a(window);f=b.top+e.elemHeight-f.height()-f.scrollTop();b.top=f>0?b.top-f:Math.max(0,b.top)}},flip:{left:function(b,e){if(e.at[0]!=="center"){var f=a(window);f=b.left+e.elemWidth-f.width()-f.scrollLeft();var h=e.my[0]==="left"?
-e.elemWidth:e.my[0]==="right"?e.elemWidth:0,i=-2*e.offset[0];b.left+=b.left<0?h+e.targetWidth+i:f>0?h-e.targetWidth+i:0}},top:function(b,e){if(e.at[1]!=="center"){var f=a(window);f=b.top+e.elemHeight-f.height()-f.scrollTop();var h=e.my[1]==="top"?-e.elemHeight:e.my[1]==="bottom"?e.elemHeight:0,i=e.at[1]==="top"?e.targetHeight:-e.targetHeight,k=-2*e.offset[1];b.top+=b.top<0?h+e.targetHeight+k:f>0?h+i+k:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(b,e){if(/static/.test(a.curCSS(b,"position")))b.style.position=
"relative";var f=a(b),h=f.offset(),i=parseInt(a.curCSS(b,"top",true),10)||0,k=parseInt(a.curCSS(b,"left",true),10)||0;h={top:e.top-h.top+i,left:e.left-h.left+k};"using"in e?e.using.call(b,h):f.css(h)};a.fn.offset=function(b){var e=this[0];if(!e||!e.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return c.call(this)}}})(jQuery);window.freebase=window.fb={mwLWTReloading:false};
(function(a,g){if(a.cookie("mwLWTReloaded"))a.cookie("mwLWTReloaded",null,{path:"/"});else{var j=0,d=0;if(typeof acre==="object"&&acre&&acre.request&&acre.request.cookies)d=acre.request.cookies.mwLastWriteTime||0;if(document.cookie&&document.cookie!="")for(var c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){var f=a.trim(c[b]);if(f.indexOf("mwLastWriteTime=")===0){f=decodeURIComponent(f.substring(16)).split("|");if(f.length)j=f[0]}}c=j?parseInt(j,10):-1;b=d?parseInt(d,10):-1;if(j&&d&&b<c){a.cookie("mwLWTReloaded",
"true",{path:"/"});g.mwLWTReloading=true;window.location.reload(true)}}})(jQuery,window.freebase);
(function(a,g){if(!g.mwLWTReloading){if(!window.console)window.console={log:a.noop,info:a.noop,debug:a.noop,warn:a.noop,error:a.noop};g.dispatch=function(f,h,i,k){if(typeof h!=="function")return false;f=a.event.fix(f||window.event);i||(i=[]);k||(k=this);return h.apply(k,[f].concat(i))};g.get_script=function(f,h){var i=g.get_script.cache,k=i[f];if(k)if(k.state===1)k.callbacks.push(h);else k.state===4&&h();else{k=i[f]={state:0,callbacks:[h]};a.ajax({url:f,dataType:"script",beforeSend:function(){k.state=
1},success:function(){k.state=4;a.each(k.callbacks,function(n,l){l()})},error:function(){k.state=-1}})}};g.get_script.cache={};a(window).bind("fb.user.signedin",function(f,h){console.log("fb.user.signnedin");g.user=h;var i=a("#nav-username a:first");if(i.length){i[0].href+=g.user.id;i.text(g.user.name)}a("#signedin").show()}).bind("fb.user.signedout",function(){console.log("fb.user.signedout");a("#signedout").show()});if(/^https?\:\/\/((www|devel)\.)?(freebase|sandbox\-freebase|branch\.qa\.metaweb|trunk\.qa\.metaweb)\.com(\:\d+)?/.test(acre.request.app_url)){var j=
function(f,h){var i=f.indexOf("|"+h+"_");if(i!=-1){i=i+2+h.length;var k=f.indexOf("|",i);if(k!=-1)return decodeURIComponent(f.substr(i,k-i))}return null},d=a.cookie("metaweb-user-info");if(d){var c=j(d,"g"),b=j(d,"u"),e=j(d,"p");e||(e="/user/"+this.name);setTimeout(function(){a(window).trigger("fb.user.signedin",{guid:c,name:b,id:e})},0)}else setTimeout(function(){a(window).trigger("fb.user.signedout")},0)}else a.ajax({url:"/acre/account/user_info",dataType:"json",success:function(f){f&&f.code===
"/api/status/ok"?a(window).trigger("fb.user.signedin",{id:f.id,guid:f.guid,name:f.username}):a(window).trigger("fb.user.signedout")},error:function(){a(window).trigger("fb.user.signedout")}});a(function(){var f=a("#SearchBox .SearchBox-input,#global-search-input"),h=acre.freebase.site_host;f.suggest({service_url:h,soft:true,category:"object",parent:"#site-search-box",align:"right",status:null});var i=a("#site-search-label"),k=a("#site-search-box .fbs-pane");f.bind("fb-select",function(n,l){window.location=
h+"/view"+l.id;return false}).bind("fb-pane-show",function(){i.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",function(){a.trim(f.val())===""?i.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):i.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){i.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){i.is(":visible")||a("#site-search-label").slideDown("fast")}).blur(function(){!k.is(":visible")&&
i.is(":visible")&&a("#site-search-label").slideUp("fast")});a(".SearchBox-form").submit(function(){return a.trim(a("#global-search-input").val()).length==0?false:true});a("input, textarea").textPlaceholder()});g.disable=function(f){a(f).attr("disabled","disabled").addClass("disabled")};g.enable=function(f){a(f).removeAttr("disabled").removeClass("disabled")}}})(jQuery,window.freebase);
(function(a,g){var j=g.permission={init:function(){if(g.user)if(!(typeof acre==="undefined"||typeof acre.c==="undefined")){var d=acre.c;if(d&&d.id){var c=g.permission={jsonp:function(b){c.has_permission=b.result===true;a(window).trigger("fb.permission.has_permission",c.has_permission)}};a.ajax({url:acre.request.app_url+"/permission/service/has_permission",data:{id:d.id,user_id:g.user.id},dataType:"jsonp",jsonpCallback:"window.freebase.permission.jsonp"})}}}};a(window).bind("fb.user.signedin",j.init)})(jQuery,
window.freebase);
(function(a){a.fn.showRow=function(g,j,d){j=j==="fadeIn"?"fadeIn":"slideDown";var c=this;return this.each(function(){var b=a(this).hide(),e=a("> td, > th",b).wrapInner('<div class="wrapInner" style="display: block;">');e=a(".wrapInner",e).hide();b.show();e[j](d,function(){a(this).each(function(){a(this).replaceWith(a(this).contents())});g&&g.call(c)})})};a.fn.hideRow=function(g,j,d){j=j==="fadeOut"?"fadeOut":"slideUp";var c=this;return this.each(function(){var b=a(this).show(),e=a("> td, > th",b).wrapInner('<div class="wrapInner" style="display: block;">');
a(".wrapInner",e)[j](d,function(){a(this).each(function(){a(this).replaceWith(a(this).contents())});b.hide();g&&g.call(c)})})}})(jQuery);
(function(a){function g(c,b,e){var f=this,h=c.add(this),i=c.find(e.tabs),k=b.jquery?b:c.children(b),n;i.length||(i=c.children());k.length||(k=c.parent().find(b));k.length||(k=a(b));a.extend(this,{click:function(l,m){var q=i.eq(l);if(typeof l=="string"&&l.replace("#","")){q=i.filter("[href*="+l.replace("#","")+"]");l=Math.max(i.index(q),0)}if(e.rotate){var p=i.length-1;if(l<0)return f.click(p,m);if(l>p)return f.click(0,m)}if(!q.length){if(n>=0)return f;l=e.initialIndex;q=i.eq(l)}if(l===n)return f;
m=m||a.Event();m.type="onBeforeClick";h.trigger(m,[l]);if(!m.isDefaultPrevented()){j[e.effect].call(f,l,function(){m.type="onClick";h.trigger(m,[l])});n=l;i.removeClass(e.current);q.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return i},getPanes:function(){return k},getCurrentPane:function(){return k.eq(n)},getCurrentTab:function(){return i.eq(n)},getIndex:function(){return n},next:function(){return f.click(n+1)},prev:function(){return f.click(n-1)},destroy:function(){i.unbind(e.event).removeClass(e.current);
k.find("a[href^=#]").unbind("click.T");return f}});a.each("onBeforeClick,onClick".split(","),function(l,m){a.isFunction(e[m])&&a(f).bind(m,e[m]);f[m]=function(q){a(f).bind(m,q);return f}});if(e.history&&a.fn.history){a.tools.history.init(i);e.event="history"}i.each(function(l){a(this).bind(e.event,function(m){f.click(l,m);return m.preventDefault()})});k.find("a[href^=#]").bind("click.T",function(l){f.click(a(this).attr("href"),l)});if(location.hash)f.click(location.hash);else if(e.initialIndex===
0||e.initialIndex>0)f.click(e.initialIndex)}a.tools=a.tools||{version:"@VERSION"};a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(c,b){j[c]=b}};var j={"default":function(c,b){this.getPanes().hide().eq(c).show();b.call()},fade:function(c,b){var e=this.getConf(),f=e.fadeOutSpeed,h=this.getPanes();f?h.fadeOut(f):h.hide();h.eq(c).fadeIn(e.fadeInSpeed,b)},slide:function(c,b){this.getPanes().slideUp(200);
this.getPanes().eq(c).slideDown(400,b)},ajax:function(c,b){this.getPanes().eq(0).load(this.getTabs().eq(c).attr("href"),b)}},d;a.tools.tabs.addEffect("horizontal",function(c,b){d||(d=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){a(this).hide()});this.getPanes().eq(c).animate({width:d},function(){a(this).show();b.call()})});a.fn.tabs=function(c,b){var e=this.data("tabs");if(e){e.destroy();this.removeData("tabs")}if(a.isFunction(b))b={onBeforeClick:b};b=a.extend({},
a.tools.tabs.conf,b);this.each(function(){e=new g(a(this),c,b);a(this).data("tabs",e)});return b.api?e:this}})(jQuery);
(function(a){function g(c,b,e){var f=e.relative?c.position().top:c.offset().top,h=e.relative?c.position().left:c.offset().left,i=e.position[0];f-=b.outerHeight()-e.offset[0];h+=c.outerWidth()+e.offset[1];var k=b.outerHeight()+c.outerHeight();if(i=="center")f+=k/2;if(i=="bottom")f+=k;i=e.position[1];c=b.outerWidth()+c.outerWidth();if(i=="center")h-=c/2;if(i=="left")h-=c;return{top:f,left:h}}function j(c,b){var e=this,f=c.add(e),h,i=0,k=0,n=c.attr("title"),l=d[b.effect],m,q=c.is(":input"),p=q&&c.is(":checkbox, :radio, select, :button, :submit"),
t=c.attr("type"),s=b.events[t]||b.events[q?p?"widget":"input":"def"];if(!l)throw'Nonexistent effect "'+b.effect+'"';s=s.split(/,\s*/);if(s.length!=2)throw"Tooltip: bad events configuration for "+t;c.bind(s[0],function(o){clearTimeout(i);if(b.predelay)k=setTimeout(function(){e.show(o)},b.predelay);else e.show(o)}).bind(s[1],function(o){clearTimeout(k);if(b.delay)i=setTimeout(function(){e.hide(o)},b.delay);else e.hide(o)});if(n&&b.cancelDefault){c.removeAttr("title");c.data("title",n)}a.extend(e,{show:function(o){if(!h){if(n)h=
a(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(n);else if(b.tip)h=a(b.tip).eq(0);else{h=c.next();h.length||(h=c.parent().next())}if(!h.length)throw"Cannot find tooltip for "+c;}if(e.isShown())return e;h.stop(true,true);var r=g(c,h,b);o=o||a.Event();o.type="onBeforeShow";f.trigger(o,[r]);if(o.isDefaultPrevented())return e;r=g(c,h,b);h.css({position:"absolute",top:r.top,left:r.left});m=true;l[0].call(e,function(){o.type="onShow";m="full";f.trigger(o)});r=b.events.tooltip.split(/,\s*/);
h.bind(r[0],function(){clearTimeout(i);clearTimeout(k)});r[1]&&!c.is("input:not(:checkbox, :radio), textarea")&&h.bind(r[1],function(u){u.relatedTarget!=c[0]&&c.trigger(s[1].split(" ")[0])});return e},hide:function(o){if(!h||!e.isShown())return e;o=o||a.Event();o.type="onBeforeHide";f.trigger(o);if(!o.isDefaultPrevented()){m=false;d[b.effect][1].call(e,function(){o.type="onHide";m=false;f.trigger(o)});return e}},isShown:function(o){return o?m=="full":m},getConf:function(){return b},getTip:function(){return h},
getTrigger:function(){return c}});a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(o,r){a.isFunction(b[r])&&a(e).bind(r,b[r]);e[r]=function(u){a(e).bind(r,u);return e}})}a.tools=a.tools||{version:"@VERSION"};a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(c,b,e){d[c]=[b,e]}};var d={toggle:[function(c){var b=this.getConf(),e=this.getTip();b=b.opacity;b<1&&e.css({opacity:b});e.show();c.call()},function(c){this.getTip().hide();c.call()}],fade:[function(c){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,c)},function(c){this.getTip().fadeOut(this.getConf().fadeOutSpeed,c)}]};a.fn.tooltip=function(c){var b=this.data("tooltip");if(b)return b;c=a.extend(true,{},a.tools.tooltip.conf,c);
if(typeof c.position=="string")c.position=c.position.split(/,?\s/);this.each(function(){b=new j(a(this),c);a(this).data("tooltip",b)});return c.api?b:this}})(jQuery);
(function(a,g){var j=g.schema={init_row_menu:function(d){a(".row-menu-trigger",d).each(function(){var c=a(this);c.tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-10,-10],effect:"fade",delay:300});c.parents("tr:first").hover(j.row_menu_hoverover,j.row_menu_hoverout)})},row_menu_hoverover:function(){var d=a(this);d.addClass("row-hover");a(".row-menu-trigger",d).css("visibility","visible")},row_menu_hoverout:function(){var d=a(this);a(".row-menu-trigger",d).css("visibility","hidden");
d.removeClass("row-hover")},close_message:function(d,c){var b=a(this).parents(c);b.is("tr")?b.hideRow(function(){b.remove()}):b.slideUp(function(){b.remove()});return false}};a(function(){a.tablesorter.addParser({id:"schemaName",is:function(){return false},format:function(c){return a(c).text().toLowerCase()},type:"text"});a.tablesorter.addParser({id:"commaDigit",is:function(){return false},format:function(c){return parseInt(c.replace(/\,/g,""))},type:"numeric"});a.tablesorter.defaults.cssAsc="column-header-asc";
a.tablesorter.defaults.cssDesc="column-header-desc";a.tablesorter.defaults.cssHeader="column-header";j.init_row_menu();a(".blurb-trigger").click(function(){var c=a(this),b=c.siblings(".blurb"),e=c.siblings(".blob");if(e.is(":hidden")){e.show();b.hide();c.text("Less")}else{e.hide();b.show();c.text("More")}});var d=a(".breadcrumb-sibling-trigger").outerWidth();a(".breadcrumb-sibling-trigger").tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-5,-d],effect:"fade",delay:300,onBeforeShow:function(){this.getTrigger().addClass("active")},
onHide:function(){this.getTrigger().removeClass("active")}})})})(jQuery,window.freebase);
(function(a){a(function(){var g=a(".table-sortable").tablesorter();a("thead th:nth-child(1)",g)[0].count=1;a("thead th:nth-child(3)",g)[0].count=1;a("thead th:nth-child(4)",g)[0].count=1;a("#schema-search > .section-tabset").tabs("#schema-search > .search-box",{initialIndex:1});var j={domain:[{key:[{namespace:"/"}]}],type:[{"/type/type/domain":[{key:[{namespace:"/"}]}],"a:/type/type/domain":{id:"/freebase",optional:"forbidden"}}],property:[{"/type/property/schema":{type:"/type/type",domain:[{key:[{namespace:"/"}]}],
"a:domain":{id:"/freebase",optional:"forbidden"}}}]};a.fn.placeholder=a.noop;var d=a("#domain-search-input"),c=d.closest("form");c.submit(function(){return false});var b={type:"/type/domain"};if(a("#domain-search-toggle-commons").is(":checked"))b.mql_filter=j.domain;d.suggest(b).bind("fb-select",function(l,m){window.location.href=acre.request.app_url+"/schema"+m.id}).focus(function(){this.select()});var e=a("#type-search-input"),f=e.closest("form");f.submit(function(){return false});var h={type:"/type/type"};
if(a("#type-search-toggle-commons").is(":checked"))h.mql_filter=j.type;e.suggest(h).bind("fb-select",function(l,m){window.location.href=acre.request.app_url+"/schema"+m.id}).focus(function(){this.select()});var i=a("#property-search-input"),k=i.closest("form");k.submit(function(){return false});var n={type:"/type/property"};if(a("#property-search-toggle-commons").is(":checked"))n.mql_filter=j.property;i.suggest(n).bind("fb-select",function(l,m){window.location.href=acre.request.app_url+"/schema"+
m.id}).focus(function(){this.select()});a(".search-toggle").click(function(){var l=a(this),m=a(this).parent().siblings("form");l=l.attr("id").split("-");if(m.attr("id")===c.attr("id")){if(l[l.length-1]==="commons")b.mql_filter=j.domain;else delete b.mql_filter;d.suggest(b)}else if(m.attr("id")===f.attr("id")){if(l[l.length-1]==="commons")h.mql_filter=j.type;else delete h.mql_filter;e.suggest(h)}else if(m.attr("id")===k.attr("id")){if(l[l.length-1]==="commons")n.mql_filter=j.property;else delete n.mql_filter;
i.suggest(n)}m=m.find(".text-input");l=m.val();m.val(l).focus().trigger(jQuery.Event("keyup"))})})})(jQuery,window.freebase);
