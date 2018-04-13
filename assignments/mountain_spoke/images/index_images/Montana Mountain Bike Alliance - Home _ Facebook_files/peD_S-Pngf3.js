if (self.CavalryLogger) { CavalryLogger.start_js(["rORHv"]); }

__d("TabBar",["ArbiterMixin","ReactDOM","mixin"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function j(k,l,m){"use strict";i.constructor.call(this);l.props=babelHelpers["extends"]({},l.props,{onTabClick:function(n){return this.inform(j.TAB_CLICK,n)}.bind(this)});c("ReactDOM").render(k(l),m)}j.TAB_CLICK="onTabClick";f.exports=j}),null);
__d("ImageUtils",["UserAgent_DEPRECATED"],(function a(b,c,d,e,f,g){__p&&__p();var h={hasLoaded:function i(j){__p&&__p();if(j.naturalWidth!==undefined)return j.complete&&j.width!==0;else if(j.height==20&&j.width==20&&j.complete)return false;else if(j.complete===undefined&&c("UserAgent_DEPRECATED").webkit()<500){var k=new Image();k.src=j.src;return k.complete}return j.complete}};f.exports=h}),null);
__d("SpotlightViewerLoggingEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LOADED:"loaded",LOADING:"loading",ERROR:"error",ABORT:"abort",OPEN_BEGIN:"open_begin",OPEN_COMPLETE:"open_complete",CLOSE_BEGIN:"close_begin",CLOSE_COMPLETE:"close_complete",PAGE_BEGIN:"page_begin",PAGE_COMPLETE:"page_complete",PHOTO_CHANGE_BEGIN:"photo_change_begin",PHOTO_CHANGE_COMPLETE:"photo_change_complete",DATA_FETCH_BEGIN:"data_fetch_begin",DATA_FETCH_COMPLETE:"data_fetch_complete",PHOTO_FETCH:"photo_fetch"})}),null);
__d("PhotoLogger",["Event","Banzai","BanzaiScuba","SpotlightViewerLoggingEvents","SubscriptionsHandler"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$PhotoLogger1=i;this.$PhotoLogger2={}}h.prototype.log=function(i,j,k,l){"use strict";c("Banzai").post("profile_photos_view",{photo_fbid:j,source:k,profile_id:l});if(!this.$PhotoLogger2[i]){this.$PhotoLogger3(i);this.$PhotoLogger2[i]=true}};h.prototype.$PhotoLogger3=function(i){"use strict";__p&&__p();this.$PhotoLogger4(c("SpotlightViewerLoggingEvents").LOADING,{uri:i});var j=new(c("SubscriptionsHandler"))(),k=new Image();j.addSubscriptions(c("Event").listen(k,"load",function(){this.$PhotoLogger4(c("SpotlightViewerLoggingEvents").LOADED,{uri:i});j.release()}.bind(this)),c("Event").listen(k,"error",function(){this.$PhotoLogger4(c("SpotlightViewerLoggingEvents").ERROR,{uri:i});j.release()}.bind(this)),c("Event").listen(k,"abort",function(){this.$PhotoLogger4(c("SpotlightViewerLoggingEvents").ABORT,{uri:i});j.release()}.bind(this)));k.src=i};h.prototype.logEvent=function(i){"use strict";this.$PhotoLogger4(i)};h.prototype.$PhotoLogger4=function(i,j){"use strict";var k=new(c("BanzaiScuba"))("photos_client_loading",null,{addBrowserFields:true});k.addNormal("event",i);k.addNormal("viewer",this.$PhotoLogger1);for(var l in j)k.addNormal(l,j[l]);k.post()};f.exports=h}),null);
__d("PhotosConst",[],(function a(b,c,d,e,f,g){var h={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_SPHERICAL:20,VIEWER_PERMALINK_STRING:"permalink",VIEWER_SNOWLIFT_STRING:"snowlift",VIEWER_VAULTBOX_STRING:"vaultbox",VIEWER_CAROUSEL_STRING:"carousel",BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:"n",PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};f.exports=h}),null);
__d("PhotosUtils",["Vector"],(function a(b,c,d,e,f,g){__p&&__p();function h(){}Object.assign(h,{getNearestBox:function i(j,k){__p&&__p();var l=Infinity,m=null;for(var n in j){var o=j[n];if(o.contains(k)){var p=k.distanceTo(o.getCenter());if(p<l){l=p;m=n}}}return m},absoluteToNormalizedPosition:function i(j,k){var l=c("Vector").getElementPosition(j),m=c("Vector").getElementDimensions(j),n=k.sub(l).mul(100/m.x,100/m.y);n.domain="pure";return n},normalizedToAbsolutePosition:function i(j,k){var l=c("Vector").getElementPosition(j),m=c("Vector").getElementDimensions(j),n=k.mul(m.x/100,m.y/100).add(l);n.domain="document";return n},isFacebox:function i(j){return j.match(/^face:/)},isTag:function i(j){return j.match(/^tag:/)}});f.exports=h}),null);
__d("PhotoPermalinkURI",[],(function a(b,c,d,e,f,g){__p&&__p();var h={isValid:function i(j){return h.parse(j)!==null},parse:function i(j){__p&&__p();if(this.isValidLegacy(j)){var k=j.getQueryData();if(k.fbid)return{photo_id:k.fbid,set_token:k.set};if(k.id&&k.pid)return{photo_id:k.id+":"+k.pid,set_token:k.set};return null}var l=j.getPath();if(l[l.length-1]==="/")l=l.substring(0,l.length-1);var m=l.split("/");if(m.length>=3&&m[2]==="photos")if(m.length===4&&/^\d+$/.exec(m[3])!==null)return{photo_id:m[3],set_token:null};else if(m.length===5&&/^\d+$/.exec(m[4])!==null)return{photo_id:m[4],set_token:m[3]};return null},isValidLegacy:function i(j){var k=j.getPath();if(k[k.length-1]==="/")k=k.substring(0,k.length-1);if(k==="/photo.php"||k==="/force_photo/photo.php"||k==="/photo"||k==="/force_photo/photo/index.php"||k==="/photo/index.php"||k==="/force_photo/photo"||k==="/video.php"||k==="/video/video.php")return true;return false}};f.exports=h}),null);
__d("SphericalMediaActionNamespaces",[],(function a(b,c,d,e,f,g){"use strict";f.exports={BASE:"BASE",CORE:"CORE",PHOTO:"PHOTO",PHOTO_EDIT:"PHOTO_EDIT",VIEW:"VIEW"}}),null);
__d("SphericalMediaActions",[],(function a(b,c,d,e,f,g){"use strict";f.exports={TURN_ON:"TURN_ON",TURN_OFF:"TURN_OFF",ENABLE_SPHERICAL:"ENABLE_SPHERICAL",DISABLE_SPHERICAL:"DISABLE_SPHERICAL",REQUEST_PHOTO_FAILED:"REQUEST_PHOTO_FAILED",REQUEST_PHOTO:"REQUEST_PHOTO",RECEIVE_PHOTO:"RECEIVE_PHOTO",UPDATE_BASE:"UPDATE_BASE",DRAG_START:"DRAG_START",GYRO_START:"GYRO_START",ZOOM_START:"ZOOM_START",SIGNIFICANT_MOVE:"SIGNIFICANT_MOVE",MOUSE_ANIMATION_START:"MOUSE_ANIMATION_START",MOUSE_ENTER:"MOUSE_ENTER",TAP_HEADING_INDICATOR:"TAP_HEADING_INDICATOR",VIEWPORT_CLICKED:"VIEWPORT_CLICKED",VISIBILITY_CHANGED:"VISIBILITY_CHANGED",UPDATE_DIMENSION:"UPDATE_DIMENSION",UPDATE_INITIAL_FOV:"UPDATE_INITIAL_FOV",UPDATE_INITIAL_VIEWPORT:"UPDATE_INITIAL_VIEWPORT",SETUP_RENDERER:"SETUP_RENDERER",WEBGL_CONTEXT_LOST:"WEBGL_CONTEXT_LOST",WEBGL_INIT_FAILED:"WEBGL_INIT_FAILED",WEBGL_RENDER_FAILED:"WEBGL_RENDER_FAILED",SOURCE_ONLOAD:"SOURCE_ONLOAD",REPLACE_BASE_STATE:"REPLACE_BASE_STATE",UPDATE_CTR_ELEM:"UPDATE_CTR_ELEM",SHOW_FALLBACK:"SHOW_FALLBACK",FALLBACK_MOUSE_OVER:"FALLBACK_MOUSE_OVER",FALLBACK_MOUSE_OUT:"FALLBACK_MOUSE_OUT",FALLBACK_INDICATOR_MOUSE_OVER:"FALLBACK_INDICATOR_MOUSE_OVER",FALLBACK_INDICATOR_MOUSE_OUT:"FALLBACK_INDICATOR_MOUSE_OUT",UPDATE_PARTIAL_LIMITS:"UPDATE_PARTIAL_LIMITS",USE_FALLBACK:"USE_FALLBACK",UPDATE_VIEW:"UPDATE_VIEW",UPDATE_VIEWPORT:"UPDATE_VIEWPORT",UPDATE_FOV:"UPDATE_FOV",UPDATE_YAW:"UPDATE_YAW",UPDATE_VIEWPORT_AND_FOV:"UPDATE_VIEWPORT_AND_FOV",START_ANIMATING:"START_ANIMATING",STOP_ANIMATING:"STOP_ANIMATING",UPDATE_FEED_ROOT_ELEMENT:"UPDATE_FEED_ROOT_ELEMENT",UPDATE_PHOTO_EDIT:"UPDATE_PHOTO_EDIT",CANCEL_EDITING:"CANCEL_EDITING",START_EDITING:"START_EDITING",STOP_EDITING:"STOP_EDITING",UPDATE_PHOTO:"UPDATE_PHOTO",UPDATE_PHOTO_FAILED:"UPDATE_PHOTO_FAILED",UPDATE_PHOTO_DONE:"UPDATE_PHOTO_DONE",UPDATE_RENDERER_PROJECTION_TYPE:108,UPDATE_RENDERER_PROJECTION_TYPE_FAILED:109,UPDATE_RENDERER_PROJECTION_TYPE_DONE:110,RESET_MOUSE_ANIMATION:"RESET_MOUSE_ANIMATION",START_MOUSE_ANIMATION:"START_MOUSE_ANIMATION",STOP_MOUSE_ANIMATION:"STOP_MOUSE_ANIMATION",DISABLE_SPHERICAL_ON_SAVE:"DISABLE_SPHERICAL_ON_SAVE",ENABLE_SPHERICAL_ON_SAVE:"ENABLE_SPHERICAL_ON_SAVE",ENABLE_EDITING:"ENABLE_EDITING",DISABLE_EDITING:"DISABLE_EDITING",TAKE_STATE_SNAPSHOT:"TAKE_STATE_SNAPSHOT",RESTORE_EDIT_STATE_FROM_SNAPSHOT:"RESTORE_EDIT_STATE_FROM_SNAPSHOT",RESTORE_TAGS_STATE_FROM_SNAPSHOT:"RESTORE_TAGS_STATE_FROM_SNAPSHOT",REMOVE_STATE_SNAPSHOT:"REMOVE_STATE_SNAPSHOT",PHOTO_REMOVED:"PHOTO_REMOVED",UPDATE_FILE_URL:"UPDATE_FILE_URL",CANVAS_RESIZE_START:"CANVAS_RESIZE_START",CANVAS_RESIZE_IMG_LOADED:"CANVAS_RESIZE_IMG_LOADED",CANVAS_RESIZE_SUCCESS:"CANVAS_RESIZE_SUCCESS",CANVAS_RESIZE_FAILED:"CANVAS_RESIZE_FAILED",OPEN_TAG_DIALOG:"OPEN_TAG_DIALOG",CLOSE_TAG_DIALOG:"CLOSE_TAG_DIALOG",SAVE_DIALOG_TAGS:"SAVE_DIALOG_TAGS",CANCEL_DIALOG_TAG_CHANGES:"CANCEL_DIALOG_TAG_CHANGES",PHOTO_RENDERER_STATS:"PHOTO_RENDERER_STATS",ENABLE_TAGGING:"ENABLE_TAGGING",DISABLE_TAGGING:"DISABLE_TAGGING",UPDATE_SPATIAL_TAGS:"UPDATE_SPATIAL_TAGS",UPDATE_SPATIAL_TAGS_FROM_COMPOSER:"UPDATE_SPATIAL_TAGS_FROM_COMPOSER",UPDATE_TAG_UNDER_MOUSE:"UPDATE_TAG_UNDER_MOUSE",TAGGING_START:"TAGGING_START",TAGGING_STOP:"TAGGING_STOP",UPDATE_TAG_CLICKED:"UPDATE_TAG_CLICKED",UPDATE_TAGGER:"UPDATE_TAGGER",ENTER_TAGGING_MODE:"ENTER_TAGGING_MODE",EXIT_TAGGING_MODE:"EXIT_TAGGING_MODE",UPDATE_TARGETED_TAG:"UPDATE_TARGETED_TAG",REDIRECT_FROM_CLICKED_TAG:"REDIRECT_FROM_CLICKED_TAG",DELETED_SPATIAL_TAG:"DELETED_SPATIAL_TAG",ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER:"ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER"}}),null);
__d("SphericalMediaBaseActions",["SphericalMediaActionNamespaces","SphericalMediaActions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports={updateBase:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_BASE,data:i}},dragStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").DRAG_START}},gyroStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").GYRO_START}},mouseAnimationStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").MOUSE_ANIMATION_START}},mouseEnter:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").MOUSE_ENTER}},tapHeadingIndicator:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").TAP_HEADING_INDICATOR}},significantMove:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").SIGNIFICANT_MOVE,data:{view:i}}},viewportClicked:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").VIEWPORT_CLICKED}},visibilityChanged:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").VISIBILITY_CHANGED,data:i}},zoomStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").ZOOM_START}},updateDimension:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_DIMENSION,data:{width:i,height:j}}},updateInitialViewport:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_INITIAL_VIEWPORT,data:{initialYaw:i,initialPitch:j}}},updateInitialFOV:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_INITIAL_FOV,data:{initialFov:i}}},setupRenderer:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").SETUP_RENDERER,data:{renderer:i,dt:j}}},webGlInitFailed:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").WEBGL_INIT_FAILED,data:{error:i}}},webGlRenderFailed:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").WEBGL_RENDER_FAILED,data:{error:i,view:j}}},webGlContextLost:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").WEBGL_CONTEXT_LOST}},sourceOnLoad:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").SOURCE_ONLOAD}},replaceBaseState:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").REPLACE_BASE_STATE,data:i}},updateSpatialTags:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_SPATIAL_TAGS,data:i}},updateSpatialTagsFromComposer:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_SPATIAL_TAGS_FROM_COMPOSER,data:i}},updateTagUnderMouse:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_TAG_UNDER_MOUSE,data:i}},updateFileURL:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_FILE_URL,data:i}},canvasResizeStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").CANVAS_RESIZE_START}},canvasResizeImgLoaded:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").CANVAS_RESIZE_IMG_LOADED,data:{width:i,height:j}}},canvasResizeSuccess:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").CANVAS_RESIZE_SUCCESS,data:i}},canvasResizeFailed:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").CANVAS_RESIZE_FAILED,data:i}},enableTagging:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").ENABLE_TAGGING}},disableTagging:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").DISABLE_TAGGING}},taggingStart:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").TAGGING_START}},taggingStop:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").TAGGING_STOP}},updateTagClicked:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_TAG_CLICKED,data:i}},updateTagger:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_TAGGER,data:i}},enterTaggingMode:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").ENTER_TAGGING_MODE}},exitTaggingMode:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").EXIT_TAGGING_MODE}},updateTargetedTag:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_TARGETED_TAG,data:i}},redirectFromClickedTag:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").REDIRECT_FROM_CLICKED_TAG}},deletedSpatialTag:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").DELETED_SPATIAL_TAG}},addSpatialTagFromPhotoTagger:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER}},updateCtrElem:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_CTR_ELEM,data:{element:i}}},showFallbackUI:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").SHOW_FALLBACK}},requestPhoto:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").REQUEST_PHOTO}},requestPhotoFailed:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").REQUEST_PHOTO_FAILED,data:{id:i,error:j}}},receivePhoto:function h(i,j){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").RECEIVE_PHOTO,data:j}},updatePartialLimits:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_PARTIAL_LIMITS,data:i}},useFallbackUI:function h(){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").USE_FALLBACK}},updateFeedRootElement:function h(i){return{namespace:c("SphericalMediaActionNamespaces").BASE,type:c("SphericalMediaActions").UPDATE_FEED_ROOT_ELEMENT,data:i}}}}),null);
__d("TabBarShim",["DOMContainer.react","React","isNode"],(function a(b,c,d,e,f,g){__p&&__p();var h=function h(i){__p&&__p();var j;if(i.children){j=i.children.map(function(l,m){if(typeof l==="object"&&typeof l.ctor==="function")return h(l);else if(c("isNode")(l)){var n=c("React").createElement(c("DOMContainer.react"),{key:"TabBarShim-"+m},l);return n}else return l});if(j.length===1)j=j[0]}var k=i.ctor;return c("React").createElement(k,i.props,j)};f.exports=h}),null);
__d("ResizeListener",["EventListener","SubscriptionList","requestAnimationFrame"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=void 0,i=false,j=new(c("SubscriptionList"))(function(){h=c("EventListener").listen(window,"resize",k)},function(){h.remove()});function k(){if(!i){i=true;c("requestAnimationFrame")(function(){j.fireCallbacks();i=false})}}f.exports=j}),null);
__d("ReactComponentRenderer",["React","ReactDOM","warning"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j)};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c("React").createElement(this.klass,this.props),l=this;c("ReactDOM").render(k,this.container,function(){l.component=this;if(j)j.call(this)})};h.prototype.unmount=function(){c("ReactDOM").unmountComponentAtNode(this.container);this.klass=null};f.exports=h}),null);