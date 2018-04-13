if (self.CavalryLogger) { CavalryLogger.start_js(["fHANF"]); }

__d("Keyframes",["Promise","Bootloader","Deferred","NavigationMetrics","XHRRequest","emptyFunction","gkx"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="::",i={},j={},k="tti";c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED,function(A,B){var event=B.event;k=event});function l(){if(c("gkx")("AT6Vv20qMy8DxdjWgiNqDMhFCTkpeSXrJATgbVvA7K9nA-jW4ZaQslHzMCtzmxLRpTcNZfRb6w8nVTadlA1D7e_w"))return new(c("Promise"))(function(A){c("Bootloader").loadModules(["KeyframesRendererDeserialized"],function(B){return A(B)},"Keyframes")});return new(c("Promise"))(function(A){c("Bootloader").loadModules(["KeyframesRenderer"],function(B){return A(B)},"Keyframes")})}function m(){return new(c("Promise"))(function(A){c("Bootloader").loadModules(["FBKeyframesLoggedSession"],function(B){return A(B)},"Keyframes")})}function n(){if(c("gkx")("AT6Vv20qMy8DxdjWgiNqDMhFCTkpeSXrJATgbVvA7K9nA-jW4ZaQslHzMCtzmxLRpTcNZfRb6w8nVTadlA1D7e_w"))return new(c("Promise"))(function(A){c("Bootloader").loadModules(["KeyframesAssetDecoderDeserialized"],function(B){return A(B)},"Keyframes")});return new(c("Promise"))(function(A){c("Bootloader").loadModules(["KeyframesAssetDecoder"],function(B){return A(B)},"Keyframes")})}function o(){return c("Promise").all([m(),n(),l()]).then(c("emptyFunction"))}function p(A){if(!A||typeof A!=="string")return c("Promise").reject("Request: invalid uri "+A);return new(c("Promise"))(function(B,C){new(c("XHRRequest"))(A).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(D){return C(D)}).setAbortHandler(function(D){return C(D)}).setResponseHandler(function(D){return B(D)}).send()})}function q(A){return i[A]!=null}function r(A){if(i[A]==null)i[A]=new x(A);return i[A]}function s(A){return j[A]!=null}function t(A){if(j[A]==null)j[A]=new y(A);return j[A]}function u(){return v(Date.now(),k)}function v(A,B){return{value:A,phase:B}}function w(A,B){this.$SessionStub1={start:B||u(),"package":false,utilized:false};this.$SessionStub3=m().then(function(C){var D=new C("network",A,this.$SessionStub1.start);this.$SessionStub4(D);return D}.bind(this))}w.prototype.getSession=function(){return this.$SessionStub3};w.prototype.$SessionStub4=function(A){__p&&__p();this.$SessionStub2=A;if(this.$SessionStub1.assetRequest!=null){var B=A.startAssetRequest(this.$SessionStub1.assetRequest);if(this.$SessionStub1.assetRequestError!=null){B.error(this.$SessionStub1.assetRequestError);return}if(this.$SessionStub1.assetResponse!=null)B.loadedFromNetwork(this.$SessionStub1.assetResponse)}if(this.$SessionStub1.assetDecode!=null){var C=A.startAssetDecode(this.$SessionStub1.assetDecode);if(this.$SessionStub1.assetDecodeError!=null){C.error(this.$SessionStub1.assetDecodeError);return}if(this.$SessionStub1.finish!=null)C.finish(this.$SessionStub1.finish)}if(this.$SessionStub1.utilized)A.utilizeAsset();if(this.$SessionStub1["package"])A.markAsPackage()};w.prototype.startAssetDecode=function(A){__p&&__p();if(this.$SessionStub2)return this.$SessionStub2.startAssetDecode(A);else{this.$SessionStub1.assetDecode=A||u();return{finish:function(B){if(this.$SessionStub2)this.$SessionStub2.startAssetDecode(this.$SessionStub1.assetDecode).finish(B);else this.$SessionStub1.finish=B||u()}.bind(this),error:function(B){if(this.$SessionStub2)this.$SessionStub2.startAssetDecode(this.$SessionStub1.assetDecode).error(B);else this.$SessionStub1.assetDecodeError=B||u()}.bind(this)}}};w.prototype.startAssetRequest=function(A){__p&&__p();if(this.$SessionStub2)return this.$SessionStub2.startAssetRequest(A);else{this.$SessionStub1.assetRequest=A||u();var B=function(D){if(this.$SessionStub2)return this.$SessionStub2.startAssetRequest(this.$SessionStub1.assetRequest).loadedFromNetwork(D);else{this.$SessionStub1.assetResponse=D||u();return{startAssetDecode:this.startAssetDecode.bind(this)}}}.bind(this),C=function(D){if(this.$SessionStub2)this.$SessionStub2.startAssetRequest(this.$SessionStub1.assetRequest).error(D);else this.$SessionStub1.assetRequestError=D||u()}.bind(this);return{loadedFromCache:B,loadedFromNetwork:B,cancel:C,error:C}}};w.prototype.utilizeAsset=function(){if(this.$SessionStub2)this.$SessionStub2.utilizeAsset();else this.$SessionStub1.utilized=true};w.prototype.markAsPackage=function(){if(this.$SessionStub2)this.$SessionStub2.markAsPackage();else this.$SessionStub1["package"]=true};function x(A,B){__p&&__p();var C,D=this;this.$DecodedAssetRequest1=[];this.$DecodedAssetRequest3=[];this.$DecodedAssetRequest4=[];this.$DecodedAssetRequest5="requesting";this.$DecodedAssetRequest7=false;this.$DecodedAssetRequest6=A;if(B)(function(){var E=B.stubs,F=B.bytes;D.$DecodedAssetRequest5="decoding";D.$DecodedAssetRequest2=n().then(function(G){this.$DecodedAssetRequest1.push.apply(this.$DecodedAssetRequest1,E.map(function(H){return H.startAssetDecode()}));return this.$DecodedAssetRequest8(F,G)}.bind(D))})()}x.prototype.isLoaded=function(){return this.$DecodedAssetRequest5==="done"};x.prototype.getAsset=function(A){return this.$DecodedAssetRequest9(A)};x.prototype.getRenderer=function(A){return c("Promise").all([this.$DecodedAssetRequest9(A),A.getSession(),l()]).then(function(B){var C=B[0],D=B[1],E=B[2];this.$DecodedAssetRequest10();return new E(C,D.getPerformanceLogIfEnabled())}.bind(this))};x.prototype.$DecodedAssetRequest10=function(){if(!this.$DecodedAssetRequest7){this.$DecodedAssetRequest4.forEach(function(A){return A.utilizeAsset()});this.$DecodedAssetRequest7=true}};x.prototype.$DecodedAssetRequest9=function(A){__p&&__p();this.$DecodedAssetRequest4.push(A);if(this.$DecodedAssetRequest7)A.utilizeAsset();switch(this.$DecodedAssetRequest5){case"requesting":this.$DecodedAssetRequest3.push(A.startAssetRequest());break;case"decoding":this.$DecodedAssetRequest1.push(A.startAssetDecode());break}if(!this.$DecodedAssetRequest2){o();var B=c("Promise").all([p(this.$DecodedAssetRequest6),n()]).then(function(C){var D=C[0],E=C[1];while(this.$DecodedAssetRequest3.length)this.$DecodedAssetRequest1.push(this.$DecodedAssetRequest3.pop().loadedFromNetwork().startAssetDecode());return this.$DecodedAssetRequest8(D,E)}.bind(this));B["catch"](function(C){this.$DecodedAssetRequest3.forEach(function(D){return D.error()});this.$DecodedAssetRequest5="error"}.bind(this));this.$DecodedAssetRequest2=B}return this.$DecodedAssetRequest2};x.prototype.$DecodedAssetRequest8=function(A,B){__p&&__p();this.$DecodedAssetRequest5="decoding";var C=B.fromDocumentBytes(A);C.done(function(){this.$DecodedAssetRequest5="done";this.$DecodedAssetRequest1.forEach(function(D){return D.finish()});this.$DecodedAssetRequest11()}.bind(this),function(){this.$DecodedAssetRequest5="error";this.$DecodedAssetRequest1.forEach(function(D){return D.error()})}.bind(this));return C};x.prototype.$DecodedAssetRequest11=function(){this.$DecodedAssetRequest3.length=0;this.$DecodedAssetRequest1.length=0};function y(A){this.$PackageRequest1=[];this.$PackageRequest2=[];this.$PackageRequest4="requesting";o();this.$PackageRequest3=this.$PackageRequest5(A)}y.prototype.isLoaded=function(){return this.$PackageRequest4==="done"};y.prototype.getDecodedAssetRequests=function(A){this.$PackageRequest6(A).getSession();return this.$PackageRequest3};y.prototype.getRenderer=function(A,B){__p&&__p();if(A<0)return c("Promise").reject("Package request: out of bounds index "+A+" "+("for "+B.projectName+" "+B.packageName));var C=this.$PackageRequest6(B),D=this.$PackageRequest7(A,B);l();C.getSession();return c("Promise").all([this.$PackageRequest3,D]).then(function(E){var F=E[0],G=E[1],H=F[A].getRenderer(G);H.done(function(){return C.utilizeAsset()});return H})};y.prototype.$PackageRequest6=function(A){var B=u(),C=new w({projectName:A.projectName,assetName:A.packageName},B);C.markAsPackage();if(this.$PackageRequest4==="requesting")this.$PackageRequest2.push({log:C.startAssetRequest(B),timestamp:B});if(this.$PackageRequest4==="error")C.startAssetRequest(B).error();return C};y.prototype.$PackageRequest7=function(A,B){__p&&__p();var C=u(),D={projectName:B.projectName,assetName:B.packageName+h+B.assetName};if(this.$PackageRequest4==="requesting"){var E={metadata:D,timestamp:C,deferredSessionStub:new(c("Deferred"))()};if(!this.$PackageRequest1[A])this.$PackageRequest1[A]=[];this.$PackageRequest1[A].push(E);return E.deferredSessionStub.getPromise()}var F=new w(D,C);if(this.$PackageRequest4==="error")F.startAssetRequest(C).error();return c("Promise").resolve(F)};y.prototype.$PackageRequest5=function(A){__p&&__p();var B=c("Promise").all([n(),this.$PackageRequest8(A)]).then(function(C){__p&&__p();var D=C[0],E=C[1],F=E.endTime.value-E.startTime.value,G=E.documentSlices.map(function(K){return K.byteLength/E.byteLength}).map(function(K){return K*F}),H=G.map(function(K){return K/F}),I=F-G.reduce(function(K,L){return K+=L},0),J=I/F;this.$PackageRequest9(J,E.endTime);this.$PackageRequest10(E.documentSlices.length);return E.documentSlices.map(function(K,L){var M=this.$PackageRequest11(L,H[L],E.endTime);return new x("",{bytes:K,stubs:M})}.bind(this))}.bind(this));B["catch"](function(C){this.$PackageRequest4="error";this.$PackageRequest1.forEach(function(D){D.forEach(function(E){return E.deferredSessionStub.reject("Package decode error: "+C)})})}.bind(this)).done(function(){this.$PackageRequest4="done";this.$PackageRequest12()}.bind(this));return B};y.prototype.$PackageRequest8=function(A){__p&&__p();var B=u(),C=p(A),D=C.then(function(G){return{startTime:B,endTime:u(),byteLength:G.byteLength}}),E=c("Promise").all([n(),C]).then(function(G){var H=G[0],I=G[1];return H.getDocumentByteSlicesFromPackage(I)}),F=c("Promise").all([D,E]).then(function(G){var H=G[0],I=G[1];return babelHelpers["extends"]({},H,{documentSlices:I})});F["catch"](function(G){this.$PackageRequest4="error";this.$PackageRequest2.forEach(function(H){return H.log.error()});this.$PackageRequest1.forEach(function(H){H.forEach(function(I){return I.deferredSessionStub.reject("Package request error: "+G)})});this.$PackageRequest12()}.bind(this));return F};y.prototype.$PackageRequest9=function(A,B){this.$PackageRequest2.forEach(function(C){var D=B.value-C.timestamp.value,E=A*D+C.timestamp.value;C.log.loadedFromNetwork(v(E,B.phase)).startAssetDecode(B).finish(u())})};y.prototype.$PackageRequest11=function(A,B,C){return(this.$PackageRequest1[A]||[]).map(function(D){var E=C.value-D.timestamp.value,F=B*E,G=new w(D.metadata,D.timestamp);G.startAssetRequest(D.timestamp).loadedFromNetwork(v(D.timestamp.value+F,D.timestamp.phase));D.deferredSessionStub.resolve(G);return G})};y.prototype.$PackageRequest10=function(A){this.$PackageRequest1.slice(A).forEach(function(B){B.forEach(function(C,D){var E=C.deferredSessionStub,F=C.metadata;E.reject("Package decode: out of bounds index "+D+" "+("for "+F.projectName+" "+F.assetName))})})};y.prototype.$PackageRequest12=function(){this.$PackageRequest1=[];this.$PackageRequest2=[]};var z={requestDecodedAssetOnly:function A(B,C){return r(B).getAsset(new w(C))},requestRenderer:function A(B,C){return r(B).getRenderer(new w(C))},requestRendererFromBytes:function A(B,C){var D=new w(C);return new x("",{bytes:new Uint8Array(B),stubs:[D]}).getRenderer(D)},requestRendererFromPackage:function A(B,C,D){return t(B).getRenderer(C,D)},preloadPackage:function A(B,C){return t(B).getDecodedAssetRequests(C).then(c("emptyFunction"))},hasLoaded:function A(B){return q(B)&&r(B).isLoaded()||s(B)&&t(B).isLoaded()},clearCache:function A(){i={};j={}}};f.exports=z}),null);