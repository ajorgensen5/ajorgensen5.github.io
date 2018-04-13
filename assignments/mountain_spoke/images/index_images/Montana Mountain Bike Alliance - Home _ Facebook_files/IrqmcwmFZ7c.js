if (self.CavalryLogger) { CavalryLogger.start_js(["QiTN\/"]); }

__d("ArtilleryStringDictionary",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=0,i=1,j=window.TextEncoder&&typeof window.TextEncoder.prototype.encode==="function"?TextEncoder.prototype.encode.bind(new TextEncoder()):function j(l){var m=new Uint16Array(l.length);for(var n=0,o=l.length;n<o;n++)m[n]=l.charCodeAt(n);return m};function k(){this.$ArtilleryStringDictionary1=0;this.$ArtilleryStringDictionary2=[0,0];this.$ArtilleryStringDictionary3={};this.$ArtilleryStringDictionary4=["",""]}k.prototype.add=function(l){__p&&__p();if(l==null||l==="")return l==null?h:i;if(this.$ArtilleryStringDictionary3[l]==null){var m=this.$ArtilleryStringDictionary1,n=this.$ArtilleryStringDictionary2.length;this.$ArtilleryStringDictionary1+=l.length;this.$ArtilleryStringDictionary2[n]=m;this.$ArtilleryStringDictionary3[l]=n;this.$ArtilleryStringDictionary4[n]=l;return n}return this.$ArtilleryStringDictionary3[l]};k.prototype.get=function(l){return this.$ArtilleryStringDictionary4[l]};k.prototype.pack=function(){var l=this.$ArtilleryStringDictionary2[this.$ArtilleryStringDictionary2.length-1]>65535?Uint32Array:Uint16Array,m=new l(this.$ArtilleryStringDictionary2),n=j(this.$ArtilleryStringDictionary4.join(""));return[m,n]};k.prototype.size=function(){return this.$ArtilleryStringDictionary4.length};f.exports=k}),null);
__d("GeneratedPackerUtils",["invariant","ArtilleryStringDictionary"],(function a(b,c,aa,ba,d,ca,e){__p&&__p();function f(F,G){__p&&__p();var H=true;for(var I=F,J=Array.isArray(I),K=0,I=J?I:I[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var L;if(J){if(K>=I.length)break;L=I[K++]}else{K=I.next();if(K.done)break;L=K.value}var M=L;if(!(M instanceof G)){H=false;break}}if(H)return F;var N=s(F),O=new G(N/G.BYTES_PER_ELEMENT),P=0;for(var Q=F,R=Array.isArray(Q),S=0,Q=R?Q:Q[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var T;if(R){if(S>=Q.length)break;T=Q[S++]}else{S=Q.next();if(S.done)break;T=S.value}var U=T;O.set(U,P);P+=U.length}return[O]}var g=[Uint8Array,Uint16Array,Uint32Array,Int8Array,Int16Array,Int32Array,Float32Array,Float64Array,"string[]"],h={"float32[]":Float32Array,"float64[]":Float64Array,"int8[]":Int8Array,"int16[]":Int16Array,"int32[]":Int32Array,"uint8[]":Uint8Array,"uint16[]":Uint16Array,"uint32[]":Uint32Array,"float[]":Float32Array,"double[]":Float64Array,"int[]":Int32Array,"uint[]":Uint32Array,"number[]":Float64Array},i={number:u,uint32:w,"boolean":v,float64:x,"float32[]":r,"float64[]":r,"int8[]":r,"int16[]":r,"int32[]":r,"uint8[]":r,"uint16[]":r,"uint32[]":r,"float[]":r,"double[]":r,"int[]":r,"uint[]":r,"number[]":r,"string[]":q},j={float64:8,number:8,uint32:4,"boolean":1},k=new Set(Object.keys(i));function l(F){__p&&__p();var G,H={},I=function I(N){__p&&__p();var O=F[N];k.has(O)||e(0);if(O==="string[]")H[N]=function(P){__p&&__p();var Q,R=P.strings,S=P.indexes,T=S.reduce(function(X,Y){return X+Y.length},0);if(R.size()>T)(function(){var X=new(c("ArtilleryStringDictionary"))(),Y=S.map(function(Z){return Z.map(function($){return X.add(R.get($))})});R=X;S=Y})();var U=R.pack(),V=U[0],W=U[1];return{type:O,offsets:V,data:W,indexes:S}};else if(O==="uint32"||O==="number"||O==="boolean"||O==="float64")H[N]=function(P){return{type:O,value:P}};else H[N]=function(P){return{type:O,data:f(P,h[O])}}};for(var J=Object.keys(F),K=Array.isArray(J),L=0,J=K?J:J[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var M;if(K){if(L>=J.length)break;M=J[L++]}else{L=J.next();if(L.done)break;M=L.value}var N=M;I(N)}return function(O){__p&&__p();var P=[];for(var Q=Object.keys(F),R=Array.isArray(Q),S=0,Q=R?Q:Q[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var T;if(R){if(S>=Q.length)break;T=Q[S++]}else{S=Q.next();if(S.done)break;T=S.value}var U=T;O[U]!=null||e(0);P.push(H[U](O[U]))}return P}}function m(F){__p&&__p();var G=n(F),H=[];for(var I=Object.keys(F),J=Array.isArray(I),K=0,I=J?I:I[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var L;if(J){if(K>=I.length)break;L=I[K++]}else{K=I.next();if(K.done)break;L=K.value}var M=L,N=F[M];if(N==="string[]")H.push(function(O,P,Q){O.type==="string[]"||e(0);q(O,P,Q)});else H.push(i[N])}return function(O){__p&&__p();var P=G(O),Q=P.offsets,R=P.totalSize,S=new Uint8Array(R);for(var T=H.entries(),U=Array.isArray(T),V=0,T=U?T:T[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var W;if(U){if(V>=T.length)break;W=T[V++]}else{V=T.next();if(V.done)break;W=V.value}var X=W,Y=X[0],Z=X[1];Z(O[Y],S,Q[Y])}return S}}function n(F){__p&&__p();var G,H=[],I=function I(N){var O=F[N];if(O==="string[]")H.push(o);else if(O==="uint32"||O==="number"||O==="boolean"||O==="float64")H.push(function(){return j[O]});else if(O)H.push(function(P){return p(P.data)})};for(var J=Object.keys(F),K=Array.isArray(J),L=0,J=K?J:J[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var M;if(K){if(L>=J.length)break;M=J[L++]}else{L=J.next();if(L.done)break;M=L.value}var N=M;I(N)}return function(O){__p&&__p();var P=[],Q=0;for(var R=H.entries(),S=Array.isArray(R),T=0,R=S?R:R[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var U;if(S){if(T>=R.length)break;U=R[T++]}else{T=R.next();if(T.done)break;U=T.value}var V=U,W=V[0],X=V[1];P[W]=Q;Q+=X(O[W])}return{offsets:P,totalSize:Q}}}function o(F){var G=F.offsets,H=F.data,I=F.indexes;return p([G])+p([H])+p(I)}function p(F){return 1+4+s(F)}function q(F,G,H){var I=F.offsets,J=F.data,K=F.indexes,L=H;t([I],G,L);L+=p([I]);t([J],G,L);L+=p([J]);t(K,G,L)}function r(F,G,H){var I=F.type,J=F.data;J.reduce(function(K,L){return K&&L instanceof h[I]},true)||e(0);t(J,G,H)}function s(F){return F.reduce(function(G,H){return G+H.byteLength},0)}function t(F,G,H){var I=new DataView(G.buffer);I.setUint8(H,g.indexOf(F[0].constructor));I.setUint32(H+1,s(F),true);var J=H+5;F.forEach(function(K){G.set(new Uint8Array(K.buffer,K.byteOffset,K.byteLength),J);J+=K.byteLength})}function u(F,G,H){F.type==="number"||e(0);var I=new DataView(G.buffer);I.setFloat64(H,F.value,true)}function v(F,G,H){F.type==="boolean"||e(0);var I=new DataView(G.buffer);I.setUint8(H,F.value?1:0)}function w(F,G,H){F.type==="uint32"||e(0);var I=new DataView(G.buffer);I.setUint32(H,F.value,true)}function x(F,G,H){F.type==="float64"||e(0);var I=new DataView(G.buffer);I.setFloat64(H,F.value,true)}function y(F){var G=l(F),H=m(F);return function(I){return H(G(I))}}function z(F){return babelHelpers["extends"]({count:"uint32",hasOverflown:"boolean"},F.scalars,A(F.entries))}function A(F){__p&&__p();var G={};for(var H=Object.keys(F),I=Array.isArray(H),J=0,H=I?H:H[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var K;if(I){if(J>=H.length)break;K=H[J++]}else{J=H.next();if(J.done)break;K=J.value}var L=K;G[L]=F[L]+"[]"}return G}function B(F,G){__p&&__p();var H=[];for(var I=G,J=Array.isArray(I),K=0,I=J?I:I[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var L;if(J){if(K>=I.length)break;L=I[K++]}else{K=I.next();if(K.done)break;L=K.value}var M=L;H.push(F.subarray(M[0],M[1]))}return H}function C(F,G){__p&&__p();var H={};for(var I=Object.keys(F),J=Array.isArray(I),K=0,I=J?I:I[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var L;if(J){if(K>=I.length)break;L=I[K++]}else{K=I.next();if(K.done)break;L=K.value}var M=L,N=F[M];switch(N.type){case"arrayBuffer":H[M]=B(N.array,G);break;case"stringBuffer":H[M]={strings:N.strings,indexes:B(N.stringIndexes,G)};break;case"scalarBuffer":H[M]=N.value;break}}return H}function D(F){return F.reduce(function(G,H){return G+(H[1]-H[0])},0)}function E(F){var G=z(F),H=y(G);return function(I,J,K){var L=babelHelpers["extends"]({},C(I,J),{count:D(J),hasOverflown:K});return H(L)}}d.exports={composePacker:y,composePackerForSink:E}}),null);
__d("GeneratedSinkReliability",["ifRequired"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="generated_sink",i=true,j=new Map();function k(m,n){return n+":"+m}function l(m,n){__p&&__p();var o=k(m,n),p=c("ifRequired")("BanzaiODS",function(f){return f});if(!p){var q=j.get(o)||0;j.set(o,q+1)}else{if(i){j.forEach(function(r,s){return p.bumpEntityKey(h,s,r)});i=false}p.bumpEntityKey(h,o,1)}}f.exports={bumpCounter:l}}),null);
__d("GeneratedSinkUtils",["invariant","ArtilleryStringDictionary","Bootloader","GeneratedSinkReliability"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=void 0,j=false;function k(){if(i!=null||j)return;j=true;c("Bootloader").loadModules(["GeneratedPackerUtils"],function(o){var p=o.composePackerForSink;i=p;j=false},"GeneratedSinkUtils")}function l(o,p){switch(o){case"float64":return{type:"arrayBuffer",array:new Float64Array(p)};case"string":return{type:"stringBuffer",strings:new(c("ArtilleryStringDictionary"))(),stringIndexes:new Uint32Array(p)};default:throw new Error("Unsupported entry property type ("+o+")")}}function m(o,p,q){__p&&__p();var r,s;switch(o){case"float64":var r=function(){q.type==="arrayBuffer"||h(0);var t=q;return{v:function u(v,w){t.array[w]=v[p]}}}();if(typeof r==="object")return r.v;case"string":var s=function(){q.type==="stringBuffer"||h(0);var t=q;return{v:function u(v,w){t.stringIndexes[w]=t.strings.add(v[p])}}}();if(typeof s==="object")return s.v;default:throw new Error("Unknown pusher type ("+o+")")}}function n(o,p,q,r){__p&&__p();return function(){__p&&__p();function s(){"use strict";__p&&__p();this.$GeneratedSink1=0;this.$GeneratedSink2={};this.$GeneratedSink4=[];this.$GeneratedSink5=0;var t=o.scalars,u=o.entries;for(var v=Object.keys(t),w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var y;if(w){if(x>=v.length)break;y=v[x++]}else{x=v.next();if(x.done)break;y=x.value}var z=y;this.$GeneratedSink2[z]={type:"scalarBuffer",value:null}}for(var A=Object.keys(u),B=Array.isArray(A),C=0,A=B?A:A[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var D;if(B){if(C>=A.length)break;D=A[C++]}else{C=A.next();if(C.done)break;D=C.value}var E=D;this.$GeneratedSink2[E]=l(u[E],q);this.$GeneratedSink4.push(m(u[E],E,this.$GeneratedSink2[E]))}}s.prototype.addEntry=function(t){"use strict";if(this.isActive()){this.$GeneratedSink4.forEach(function(u){u(t,this.$GeneratedSink6(this.$GeneratedSink1))}.bind(this));this.$GeneratedSink1+=1}};s.prototype.isActive=function(){"use strict";return this.$GeneratedSink5>0};s.prototype.open=function(){"use strict";__p&&__p();c("GeneratedSinkReliability").bumpCounter("open",r);k();var t=this.$GeneratedSink1;this.$GeneratedSink5+=1;var u={close:function(){var v=arguments.length<=0||arguments[0]===undefined?false:arguments[0];c("GeneratedSinkReliability").bumpCounter("close",r);this.$GeneratedSink5-=1;if(v)return null;return this.$GeneratedSink7(t,this.$GeneratedSink1)}.bind(this)};return u};s.prototype.setScalar=function(t,u){"use strict";var v=this.$GeneratedSink2[t];v!=null&&v.type==="scalarBuffer"||h(0);v.value=u};s.prototype.$GeneratedSink6=function(t){"use strict";return t%q};s.prototype.$GeneratedSink8=function(t,u){"use strict";__p&&__p();var v=Math.max(0,this.$GeneratedSink1-q),w=v>t,x=[];if(t===u||w&&v>=u)x.push([0,0]);else{var y=w?v:t,z=this.$GeneratedSink6(y),A=this.$GeneratedSink6(u);if(A>z)x.push([z,A]);else{x.push([z,q]);if(A>0)x.push([0,A])}}return{hasOverflown:w,segments:x}};s.prototype.$GeneratedSink7=function(t,u){"use strict";__p&&__p();if(i==null){c("GeneratedSinkReliability").bumpCounter("packer_not_loaded",r);return null}var v=this.$GeneratedSink8(t,u),w=v.hasOverflown,x=v.segments,y=null;try{y=i(o)(this.$GeneratedSink2,x,w);c("GeneratedSinkReliability").bumpCounter("pack_success",r)}catch(z){c("GeneratedSinkReliability").bumpCounter("pack_failed_exception",r)}return y};return s}()}f.exports={createSink:n}}),null);
__d("GeneratedArtilleryUserTimingSink",["GeneratedSinkUtils"],(function a(b,c,d,e,f,g){"use strict";var h=c("GeneratedSinkUtils").createSink,i=8192,j=function j(k){return k};f.exports=h({scalars:{navStart:"float64"},entries:{startTime:"float64",duration:"float64",name:"string"}},j,i,"GeneratedArtilleryUserTimingSink")}),null);