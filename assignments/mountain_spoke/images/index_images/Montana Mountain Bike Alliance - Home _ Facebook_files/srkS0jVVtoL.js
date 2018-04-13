if (self.CavalryLogger) { CavalryLogger.start_js(["RumBn"]); }

__d("SphericalMediaViewportAnimation",["easeInOutInterpolate","requestAnimationFrame","SphericalMediaViewActions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("SphericalMediaViewActions").updateViewportAndFOV,i=c("SphericalMediaViewActions").startAnimating,j=c("SphericalMediaViewActions").stopAnimating,k=1e3,l={moveTo:function m(n){__p&&__p();return function(o,p){__p&&__p();var q=p(),r=q.view;if(r.isAnimating)return;o(i());var s=Date.now(),t=n.yaw-r.yaw;if(Math.abs(t)>180)t+=t>0?-360:360;var u=null,v=null,w=null,x=function x(y){__p&&__p();var z=p(),r=z.view;if(!r.isAnimating)return;var A=Date.now();if(A-s>k||u!=null&&u!=r.pitch||v!=null&&v!=r.yaw||w!=null&&w!=r.fov){o(j());return}c("requestAnimationFrame")(function(){x(y)});var B=c("easeInOutInterpolate")((A-s)/k),C=y.deltaPitch*B+y.startPitch,D=y.deltaYaw*B+y.startYaw,E=y.deltaFov*B+y.startFov;o(h(D,C,E));u=C;v=D;w=E};c("requestAnimationFrame")(function(){x({startYaw:r.yaw,deltaYaw:t,startPitch:r.pitch,deltaPitch:n.pitch-r.pitch,startFov:r.fov,deltaFov:n.fov-r.fov})})}}};f.exports=l}),null);
__d("SphericalPhotoHeadingIndicator.redux",["FullScreen","SphericalMediaHeadingIndicator.react","SphericalPhotoConfig","SphericalPhotoPartialLimits","SphericalPhotoProjectionUtils","ReactRedux","SphericalMediaBaseActions","SphericalMediaViewportAnimation"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("SphericalPhotoPartialLimits").makePartialLimits,k=c("ReactRedux").connect,l=c("SphericalMediaBaseActions").tapHeadingIndicator,m=c("SphericalMediaViewportAnimation").moveTo;h=babelHelpers.inherits(n,c("SphericalMediaHeadingIndicator.react"));i=h&&h.prototype;function n(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=i.constructor).call.apply(p,[this].concat(s)),this.$SphericalPhotoHeadingIndicator1=function(){this.draw(this.__getDrawData())}.bind(this),q}n.prototype.componentDidMount=function(){i.componentDidMount.call(this);this.props.viewStore.subscribe(this.$SphericalPhotoHeadingIndicator1)};n.prototype.__onClick=function(event){this.props.dispatch(l());var p=this.props.initialFov;if(this.props.showNewPhotoRenderer&&p>179){var q=this.props,r=q.aspectRatio,s=q.partialLimits;if(s)p=c("SphericalPhotoProjectionUtils").getMaxVfov(s,r)}this.props.viewStore.dispatch(m({fov:p,pitch:this.props.initialPitch,yaw:this.props.initialYaw}));event.stopPropagation()};n.prototype.__getDrawData=function(){var p=this.props.viewStore.getState(),q=p.view;return{fov:q.fov,initialYaw:this.props.initialYaw,yaw:q.yaw}};n.__subClassMethods={__onClick:true,__getDrawData:true};var o=function o(p){return{aspectRatio:p.base.aspectRatio,initialFov:p.base.initialFov,initialPitch:p.base.initialPitch,initialYaw:p.base.initialYaw,isActive:p.base.isRendererActive&&p.base.isRendererSetup||p.base.showFallbackUI,viewStore:p.base.viewStore,useLargeHeadingIndicator:p.base.useLargeHeadingIndicator||c("FullScreen").isFullScreen(),isPanning:p.base.isPanning,partialLimits:p.base.partialLimits,showNewPhotoRenderer:p.base.tiledSphericalConfig.useTiledRenderer&&c("SphericalPhotoConfig").show_new_renderer}};f.exports=k(o)(n)}),null);