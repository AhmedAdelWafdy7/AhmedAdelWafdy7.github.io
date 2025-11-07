function Wm(n,i){for(var o=0;o<i.length;o++){const s=i[o];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in n)){const u=Object.getOwnPropertyDescriptor(s,c);u&&Object.defineProperty(n,c,u.get?u:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();function Zp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rl={exports:{}},Ui={},Nl={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Gm(){if(ap)return be;ap=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function E(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,S={};function C(A,z,K){this.props=A,this.context=z,this.refs=S,this.updater=K||x}C.prototype.isReactComponent={},C.prototype.setState=function(A,z){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,z,"setState")},C.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function j(){}j.prototype=C.prototype;function F(A,z,K){this.props=A,this.context=z,this.refs=S,this.updater=K||x}var _=F.prototype=new j;_.constructor=F,I(_,C.prototype),_.isPureReactComponent=!0;var O=Array.isArray,H=Object.prototype.hasOwnProperty,q={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function de(A,z,K){var Z,ce={},ye=null,ae=null;if(z!=null)for(Z in z.ref!==void 0&&(ae=z.ref),z.key!==void 0&&(ye=""+z.key),z)H.call(z,Z)&&!Y.hasOwnProperty(Z)&&(ce[Z]=z[Z]);var we=arguments.length-2;if(we===1)ce.children=K;else if(1<we){for(var Ce=Array(we),Oe=0;Oe<we;Oe++)Ce[Oe]=arguments[Oe+2];ce.children=Ce}if(A&&A.defaultProps)for(Z in we=A.defaultProps,we)ce[Z]===void 0&&(ce[Z]=we[Z]);return{$$typeof:n,type:A,key:ye,ref:ae,props:ce,_owner:q.current}}function me(A,z){return{$$typeof:n,type:A.type,key:z,ref:A.ref,props:A.props,_owner:A._owner}}function he(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function xe(A){var z={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(K){return z[K]})}var J=/\/+/g;function fe(A,z){return typeof A=="object"&&A!==null&&A.key!=null?xe(""+A.key):z.toString(36)}function Q(A,z,K,Z,ce){var ye=typeof A;(ye==="undefined"||ye==="boolean")&&(A=null);var ae=!1;if(A===null)ae=!0;else switch(ye){case"string":case"number":ae=!0;break;case"object":switch(A.$$typeof){case n:case i:ae=!0}}if(ae)return ae=A,ce=ce(ae),A=Z===""?"."+fe(ae,0):Z,O(ce)?(K="",A!=null&&(K=A.replace(J,"$&/")+"/"),Q(ce,z,K,"",function(Oe){return Oe})):ce!=null&&(he(ce)&&(ce=me(ce,K+(!ce.key||ae&&ae.key===ce.key?"":(""+ce.key).replace(J,"$&/")+"/")+A)),z.push(ce)),1;if(ae=0,Z=Z===""?".":Z+":",O(A))for(var we=0;we<A.length;we++){ye=A[we];var Ce=Z+fe(ye,we);ae+=Q(ye,z,K,Ce,ce)}else if(Ce=E(A),typeof Ce=="function")for(A=Ce.call(A),we=0;!(ye=A.next()).done;)ye=ye.value,Ce=Z+fe(ye,we++),ae+=Q(ye,z,K,Ce,ce);else if(ye==="object")throw z=String(A),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ae}function ge(A,z,K){if(A==null)return A;var Z=[],ce=0;return Q(A,Z,"","",function(ye){return z.call(K,ye,ce++)}),Z}function oe(A){if(A._status===-1){var z=A._result;z=z(),z.then(function(K){(A._status===0||A._status===-1)&&(A._status=1,A._result=K)},function(K){(A._status===0||A._status===-1)&&(A._status=2,A._result=K)}),A._status===-1&&(A._status=0,A._result=z)}if(A._status===1)return A._result.default;throw A._result}var re={current:null},L={transition:null},D={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:L,ReactCurrentOwner:q};function G(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ge,forEach:function(A,z,K){ge(A,function(){z.apply(this,arguments)},K)},count:function(A){var z=0;return ge(A,function(){z++}),z},toArray:function(A){return ge(A,function(z){return z})||[]},only:function(A){if(!he(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},be.Component=C,be.Fragment=o,be.Profiler=c,be.PureComponent=F,be.StrictMode=s,be.Suspense=m,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,be.act=G,be.cloneElement=function(A,z,K){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var Z=I({},A.props),ce=A.key,ye=A.ref,ae=A._owner;if(z!=null){if(z.ref!==void 0&&(ye=z.ref,ae=q.current),z.key!==void 0&&(ce=""+z.key),A.type&&A.type.defaultProps)var we=A.type.defaultProps;for(Ce in z)H.call(z,Ce)&&!Y.hasOwnProperty(Ce)&&(Z[Ce]=z[Ce]===void 0&&we!==void 0?we[Ce]:z[Ce])}var Ce=arguments.length-2;if(Ce===1)Z.children=K;else if(1<Ce){we=Array(Ce);for(var Oe=0;Oe<Ce;Oe++)we[Oe]=arguments[Oe+2];Z.children=we}return{$$typeof:n,type:A.type,key:ce,ref:ye,props:Z,_owner:ae}},be.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},be.createElement=de,be.createFactory=function(A){var z=de.bind(null,A);return z.type=A,z},be.createRef=function(){return{current:null}},be.forwardRef=function(A){return{$$typeof:f,render:A}},be.isValidElement=he,be.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:oe}},be.memo=function(A,z){return{$$typeof:y,type:A,compare:z===void 0?null:z}},be.startTransition=function(A){var z=L.transition;L.transition={};try{A()}finally{L.transition=z}},be.unstable_act=G,be.useCallback=function(A,z){return re.current.useCallback(A,z)},be.useContext=function(A){return re.current.useContext(A)},be.useDebugValue=function(){},be.useDeferredValue=function(A){return re.current.useDeferredValue(A)},be.useEffect=function(A,z){return re.current.useEffect(A,z)},be.useId=function(){return re.current.useId()},be.useImperativeHandle=function(A,z,K){return re.current.useImperativeHandle(A,z,K)},be.useInsertionEffect=function(A,z){return re.current.useInsertionEffect(A,z)},be.useLayoutEffect=function(A,z){return re.current.useLayoutEffect(A,z)},be.useMemo=function(A,z){return re.current.useMemo(A,z)},be.useReducer=function(A,z,K){return re.current.useReducer(A,z,K)},be.useRef=function(A){return re.current.useRef(A)},be.useState=function(A){return re.current.useState(A)},be.useSyncExternalStore=function(A,z,K){return re.current.useSyncExternalStore(A,z,K)},be.useTransition=function(){return re.current.useTransition()},be.version="18.3.1",be}var sp;function ac(){return sp||(sp=1,Nl.exports=Gm()),Nl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function Hm(){if(lp)return Ui;lp=1;var n=ac(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var v,b={},E=null,x=null;y!==void 0&&(E=""+y),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(x=m.ref);for(v in m)s.call(m,v)&&!u.hasOwnProperty(v)&&(b[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)b[v]===void 0&&(b[v]=m[v]);return{$$typeof:i,type:f,key:E,ref:x,props:b,_owner:c.current}}return Ui.Fragment=o,Ui.jsx=h,Ui.jsxs=h,Ui}var cp;function Vm(){return cp||(cp=1,Rl.exports=Hm()),Rl.exports}var p=Vm(),ya={},Ml={exports:{}},gt={},jl={exports:{}},Fl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function $m(){return dp||(dp=1,function(n){function i(L,D){var G=L.length;L.push(D);e:for(;0<G;){var A=G-1>>>1,z=L[A];if(0<c(z,D))L[A]=D,L[G]=z,G=A;else break e}}function o(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var D=L[0],G=L.pop();if(G!==D){L[0]=G;e:for(var A=0,z=L.length,K=z>>>1;A<K;){var Z=2*(A+1)-1,ce=L[Z],ye=Z+1,ae=L[ye];if(0>c(ce,G))ye<z&&0>c(ae,ce)?(L[A]=ae,L[ye]=G,A=ye):(L[A]=ce,L[Z]=G,A=Z);else if(ye<z&&0>c(ae,G))L[A]=ae,L[ye]=G,A=ye;else break e}}return D}function c(L,D){var G=L.sortIndex-D.sortIndex;return G!==0?G:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var m=[],y=[],v=1,b=null,E=3,x=!1,I=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var D=o(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=L)s(y),D.sortIndex=D.expirationTime,i(m,D);else break;D=o(y)}}function O(L){if(S=!1,_(L),!I)if(o(m)!==null)I=!0,oe(H);else{var D=o(y);D!==null&&re(O,D.startTime-L)}}function H(L,D){I=!1,S&&(S=!1,j(de),de=-1),x=!0;var G=E;try{for(_(D),b=o(m);b!==null&&(!(b.expirationTime>D)||L&&!xe());){var A=b.callback;if(typeof A=="function"){b.callback=null,E=b.priorityLevel;var z=A(b.expirationTime<=D);D=n.unstable_now(),typeof z=="function"?b.callback=z:b===o(m)&&s(m),_(D)}else s(m);b=o(m)}if(b!==null)var K=!0;else{var Z=o(y);Z!==null&&re(O,Z.startTime-D),K=!1}return K}finally{b=null,E=G,x=!1}}var q=!1,Y=null,de=-1,me=5,he=-1;function xe(){return!(n.unstable_now()-he<me)}function J(){if(Y!==null){var L=n.unstable_now();he=L;var D=!0;try{D=Y(!0,L)}finally{D?fe():(q=!1,Y=null)}}else q=!1}var fe;if(typeof F=="function")fe=function(){F(J)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ge=Q.port2;Q.port1.onmessage=J,fe=function(){ge.postMessage(null)}}else fe=function(){C(J,0)};function oe(L){Y=L,q||(q=!0,fe())}function re(L,D){de=C(function(){L(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){I||x||(I=!0,oe(H))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return o(m)},n.unstable_next=function(L){switch(E){case 1:case 2:case 3:var D=3;break;default:D=E}var G=E;E=D;try{return L()}finally{E=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=E;E=L;try{return D()}finally{E=G}},n.unstable_scheduleCallback=function(L,D,G){var A=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?A+G:A):G=A,L){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,L={id:v++,callback:D,priorityLevel:L,startTime:G,expirationTime:z,sortIndex:-1},G>A?(L.sortIndex=G,i(y,L),o(m)===null&&L===o(y)&&(S?(j(de),de=-1):S=!0,re(O,G-A))):(L.sortIndex=z,i(m,L),I||x||(I=!0,oe(H))),L},n.unstable_shouldYield=xe,n.unstable_wrapCallback=function(L){var D=E;return function(){var G=E;E=D;try{return L.apply(this,arguments)}finally{E=G}}}}(Fl)),Fl}var up;function qm(){return up||(up=1,jl.exports=$m()),jl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function Qm(){if(pp)return gt;pp=1;var n=ac(),i=qm();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function u(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function E(e){return m.call(b,e)?!0:m.call(v,e)?!1:y.test(e)?b[e]=!0:(v[e]=!0,!1)}function x(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,a){if(t===null||typeof t>"u"||x(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function S(e,t,r,a,l,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(j,F);C[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(j,F);C[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(j,F);C[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});function _(e,t,r,a){var l=C.hasOwnProperty(t)?C[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,l,a)&&(r=null),a||l===null?E(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var O=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),xe=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),L=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,A;function z(e){if(A===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var K=!1;function Z(e,t){if(!e||K)return"";K=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var a=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){a=M}e.call(t.prototype)}else{try{throw Error()}catch(M){a=M}e()}}catch(M){if(M&&a&&typeof M.stack=="string"){for(var l=M.stack.split(`
`),d=a.stack.split(`
`),g=l.length-1,k=d.length-1;1<=g&&0<=k&&l[g]!==d[k];)k--;for(;1<=g&&0<=k;g--,k--)if(l[g]!==d[k]){if(g!==1||k!==1)do if(g--,k--,0>k||l[g]!==d[k]){var T=`
`+l[g].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=g&&0<=k);break}}}finally{K=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?z(e):""}function ce(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case q:return"Portal";case me:return"Profiler";case de:return"StrictMode";case fe:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case he:return(e._context.displayName||"Context")+".Provider";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=Ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function St(e){e._valueTracker||(e._valueTracker=Oe(e))}function kn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Ce(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Tt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function no(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=we(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ni(e,t){t=t.checked,t!=null&&_(e,"checked",t,!1)}function ri(e,t){ni(e,t);var r=we(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,r):t.hasOwnProperty("defaultValue")&&ii(e,t.type,we(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xr(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ii(e,t,r){(t!=="number"||Tt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Cn=Array.isArray;function Et(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+we(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function br(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qt(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Cn(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:we(r)}}function ro(e,t){var r=we(t.value),a=we(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function io(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,oo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ao=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){ao.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function kr(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function cn(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=kr(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var so=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kt(e,t){if(t){if(so[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function Cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Sn=null,Xt=null;function jt(e){if(e=Ei(e)){if(typeof Sr!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Mo(t),Sr(e.stateNode,e.type,t))}}function lo(e){Sn?Xt?Xt.push(e):Xt=[e]:Sn=e}function pe(){if(Sn){var e=Sn,t=Xt;if(Xt=Sn=null,jt(e),t)for(e=0;e<t.length;e++)jt(t[e])}}function Te(e,t){return e(t)}function Ae(){}var rt=!1;function lt(e,t,r){if(rt)return e(t,r);rt=!0;try{return Te(e,t,r)}finally{rt=!1,(Sn!==null||Xt!==null)&&(Ae(),pe())}}function ct(e,t){var r=e.stateNode;if(r===null)return null;var a=Mo(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var Ft=!1;if(f)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch{Ft=!1}function Jt(e,t,r,a,l,d,g,k,T){var M=Array.prototype.slice.call(arguments,3);try{t.apply(r,M)}catch(U){this.onError(U)}}var si=!1,co=null,uo=!1,Ya=null,Yf={onError:function(e){si=!0,co=e}};function Kf(e,t,r,a,l,d,g,k,T){si=!1,co=null,Jt.apply(Yf,arguments)}function Xf(e,t,r,a,l,d,g,k,T){if(Kf.apply(this,arguments),si){if(si){var M=co;si=!1,co=null}else throw Error(o(198));uo||(uo=!0,Ya=M)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rc(e){if(er(e)!==e)throw Error(o(188))}function Jf(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return Rc(l),e;if(d===a)return Rc(l),t;d=d.sibling}throw Error(o(188))}if(r.return!==a.return)r=l,a=d;else{for(var g=!1,k=l.child;k;){if(k===r){g=!0,r=l,a=d;break}if(k===a){g=!0,a=l,r=d;break}k=k.sibling}if(!g){for(k=d.child;k;){if(k===r){g=!0,r=d,a=l;break}if(k===a){g=!0,a=d,r=l;break}k=k.sibling}if(!g)throw Error(o(189))}}if(r.alternate!==a)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function Nc(e){return e=Jf(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var jc=i.unstable_scheduleCallback,Fc=i.unstable_cancelCallback,Zf=i.unstable_shouldYield,eg=i.unstable_requestPaint,Le=i.unstable_now,tg=i.unstable_getCurrentPriorityLevel,Ka=i.unstable_ImmediatePriority,zc=i.unstable_UserBlockingPriority,po=i.unstable_NormalPriority,ng=i.unstable_LowPriority,_c=i.unstable_IdlePriority,ho=null,Zt=null;function rg(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:ag,ig=Math.log,og=Math.LN2;function ag(e){return e>>>=0,e===0?32:31-(ig(e)/og|0)|0}var fo=64,go=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,d=e.pingedLanes,g=r&268435455;if(g!==0){var k=g&~l;k!==0?a=li(k):(d&=g,d!==0&&(a=li(d)))}else g=r&~l,g!==0?a=li(g):d!==0&&(a=li(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-zt(t),l=1<<r,a|=e[r],t&=~l;return a}function sg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lg(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-zt(d),k=1<<g,T=l[g];T===-1?((k&r)===0||(k&a)!==0)&&(l[g]=sg(k,t)):T<=t&&(e.expiredLanes|=k),d&=~k}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=fo;return fo<<=1,(fo&4194240)===0&&(fo=64),e}function Ja(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ci(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=r}function cg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-zt(r),d=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~d}}function Za(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-zt(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var Pe=0;function Dc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oc,es,Bc,Uc,Wc,ts=!1,yo=[],Tn=null,En=null,Pn=null,di=new Map,ui=new Map,An=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(t.pointerId)}}function pi(e,t,r,a,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Ei(t),t!==null&&es(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ug(e,t,r,a,l){switch(t){case"focusin":return Tn=pi(Tn,e,t,r,a,l),!0;case"dragenter":return En=pi(En,e,t,r,a,l),!0;case"mouseover":return Pn=pi(Pn,e,t,r,a,l),!0;case"pointerover":var d=l.pointerId;return di.set(d,pi(di.get(d)||null,e,t,r,a,l)),!0;case"gotpointercapture":return d=l.pointerId,ui.set(d,pi(ui.get(d)||null,e,t,r,a,l)),!0}return!1}function Hc(e){var t=tr(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Ic(r),t!==null){e.blockedOn=t,Wc(e.priority,function(){Bc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);ai=a,r.target.dispatchEvent(a),ai=null}else return t=Ei(r),t!==null&&es(t),e.blockedOn=r,!1;t.shift()}return!0}function Vc(e,t,r){vo(e)&&r.delete(t)}function pg(){ts=!1,Tn!==null&&vo(Tn)&&(Tn=null),En!==null&&vo(En)&&(En=null),Pn!==null&&vo(Pn)&&(Pn=null),di.forEach(Vc),ui.forEach(Vc)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pg)))}function fi(e){function t(l){return hi(l,e)}if(0<yo.length){hi(yo[0],e);for(var r=1;r<yo.length;r++){var a=yo[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Tn!==null&&hi(Tn,e),En!==null&&hi(En,e),Pn!==null&&hi(Pn,e),di.forEach(t),ui.forEach(t),r=0;r<An.length;r++)a=An[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)Hc(r),r.blockedOn===null&&An.shift()}var Tr=O.ReactCurrentBatchConfig,xo=!0;function hg(e,t,r,a){var l=Pe,d=Tr.transition;Tr.transition=null;try{Pe=1,ns(e,t,r,a)}finally{Pe=l,Tr.transition=d}}function fg(e,t,r,a){var l=Pe,d=Tr.transition;Tr.transition=null;try{Pe=4,ns(e,t,r,a)}finally{Pe=l,Tr.transition=d}}function ns(e,t,r,a){if(xo){var l=rs(e,t,r,a);if(l===null)bs(e,t,a,bo,r),Gc(e,a);else if(ug(l,e,t,r,a))a.stopPropagation();else if(Gc(e,a),t&4&&-1<dg.indexOf(e)){for(;l!==null;){var d=Ei(l);if(d!==null&&Oc(d),d=rs(e,t,r,a),d===null&&bs(e,t,a,bo,r),d===l)break;l=d}l!==null&&a.stopPropagation()}else bs(e,t,a,null,r)}}var bo=null;function rs(e,t,r,a){if(bo=null,e=Cr(a),e=tr(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ic(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case Ka:return 1;case zc:return 4;case po:case ng:return 16;case _c:return 536870912;default:return 16}default:return 16}}var In=null,is=null,wo=null;function qc(){if(wo)return wo;var e,t=is,r=t.length,a,l="value"in In?In.value:In.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var g=r-e;for(a=1;a<=g&&t[r-a]===l[d-a];a++);return wo=l.slice(e,1<a?1-a:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function Qc(){return!1}function vt(e){function t(r,a,l,d,g){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(r=e[k],this[k]=r?r(d):d[k]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Co:Qc,this.isPropagationStopped=Qc,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=vt(Er),gi=G({},Er,{view:0,detail:0}),gg=vt(gi),as,ss,mi,So=G({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(as=e.screenX-mi.screenX,ss=e.screenY-mi.screenY):ss=as=0,mi=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Yc=vt(So),mg=G({},So,{dataTransfer:0}),yg=vt(mg),vg=G({},gi,{relatedTarget:0}),ls=vt(vg),xg=G({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=vt(xg),wg=G({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kg=vt(wg),Cg=G({},Er,{data:0}),Kc=vt(Cg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function cs(){return Pg}var Ag=G({},gi,{key:function(e){if(e.key){var t=Sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ig=vt(Ag),Rg=G({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=vt(Rg),Ng=G({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),Mg=vt(Ng),jg=G({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=vt(jg),zg=G({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=vt(zg),Lg=[9,13,27,32],ds=f&&"CompositionEvent"in window,yi=null;f&&"documentMode"in document&&(yi=document.documentMode);var Dg=f&&"TextEvent"in window&&!yi,Jc=f&&(!ds||yi&&8<yi&&11>=yi),Zc=" ",ed=!1;function td(e,t){switch(e){case"keyup":return Lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Og(e,t){switch(e){case"compositionend":return nd(t);case"keypress":return t.which!==32?null:(ed=!0,Zc);case"textInput":return e=t.data,e===Zc&&ed?null:e;default:return null}}function Bg(e,t){if(Pr)return e==="compositionend"||!ds&&td(e,t)?(e=qc(),wo=is=In=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ug[e.type]:t==="textarea"}function id(e,t,r,a){lo(a),t=Io(t,"onChange"),0<t.length&&(r=new os("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var vi=null,xi=null;function Wg(e){kd(e,0)}function To(e){var t=Mr(e);if(kn(t))return e}function Gg(e,t){if(e==="change")return t}var od=!1;if(f){var us;if(f){var ps="oninput"in document;if(!ps){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),ps=typeof ad.oninput=="function"}us=ps}else us=!1;od=us&&(!document.documentMode||9<document.documentMode)}function sd(){vi&&(vi.detachEvent("onpropertychange",ld),xi=vi=null)}function ld(e){if(e.propertyName==="value"&&To(xi)){var t=[];id(t,xi,e,Cr(e)),lt(Wg,t)}}function Hg(e,t,r){e==="focusin"?(sd(),vi=t,xi=r,vi.attachEvent("onpropertychange",ld)):e==="focusout"&&sd()}function Vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(xi)}function $g(e,t){if(e==="click")return To(t)}function qg(e,t){if(e==="input"||e==="change")return To(t)}function Qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Qg;function bi(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!m.call(t,l)||!_t(e[l],t[l]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,t){var r=cd(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cd(r)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=Tt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Tt(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yg(e){var t=pd(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ud(r.ownerDocument.documentElement,r)){if(a!==null&&hs(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(a.start,l);a=a.end===void 0?d:Math.min(a.end,l),!e.extend&&d>a&&(l=a,a=d,d=l),l=dd(r,d);var g=dd(r,a);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kg=f&&"documentMode"in document&&11>=document.documentMode,Ar=null,fs=null,wi=null,gs=!1;function hd(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;gs||Ar==null||Ar!==Tt(a)||(a=Ar,"selectionStart"in a&&hs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wi&&bi(wi,a)||(wi=a,a=Io(fs,"onSelect"),0<a.length&&(t=new os("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Ar)))}function Eo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ir={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},ms={},fd={};f&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Po(e){if(ms[e])return ms[e];if(!Ir[e])return e;var t=Ir[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in fd)return ms[e]=t[r];return e}var gd=Po("animationend"),md=Po("animationiteration"),yd=Po("animationstart"),vd=Po("transitionend"),xd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){xd.set(e,t),u(t,[e])}for(var ys=0;ys<bd.length;ys++){var vs=bd[ys],Xg=vs.toLowerCase(),Jg=vs[0].toUpperCase()+vs.slice(1);Rn(Xg,"on"+Jg)}Rn(gd,"onAnimationEnd"),Rn(md,"onAnimationIteration"),Rn(yd,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(vd,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function wd(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Xf(a,t,void 0,e),e.currentTarget=null}function kd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var g=a.length-1;0<=g;g--){var k=a[g],T=k.instance,M=k.currentTarget;if(k=k.listener,T!==d&&l.isPropagationStopped())break e;wd(l,k,M),d=T}else for(g=0;g<a.length;g++){if(k=a[g],T=k.instance,M=k.currentTarget,k=k.listener,T!==d&&l.isPropagationStopped())break e;wd(l,k,M),d=T}}}if(uo)throw e=Ya,uo=!1,Ya=null,e}function Re(e,t){var r=t[Es];r===void 0&&(r=t[Es]=new Set);var a=e+"__bubble";r.has(a)||(Cd(t,e,2,!1),r.add(a))}function xs(e,t,r){var a=0;t&&(a|=4),Cd(r,e,a,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[Ao]){e[Ao]=!0,s.forEach(function(r){r!=="selectionchange"&&(Zg.has(r)||xs(r,!1,e),xs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,xs("selectionchange",!1,t))}}function Cd(e,t,r,a){switch($c(t)){case 1:var l=hg;break;case 4:l=fg;break;default:l=ns}r=l.bind(null,t,r,e),l=void 0,!Ft||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function bs(e,t,r,a,l){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var k=a.stateNode.containerInfo;if(k===l||k.nodeType===8&&k.parentNode===l)break;if(g===4)for(g=a.return;g!==null;){var T=g.tag;if((T===3||T===4)&&(T=g.stateNode.containerInfo,T===l||T.nodeType===8&&T.parentNode===l))return;g=g.return}for(;k!==null;){if(g=tr(k),g===null)return;if(T=g.tag,T===5||T===6){a=d=g;continue e}k=k.parentNode}}a=a.return}lt(function(){var M=d,U=Cr(r),W=[];e:{var B=xd.get(e);if(B!==void 0){var X=os,te=e;switch(e){case"keypress":if(ko(r)===0)break e;case"keydown":case"keyup":X=Ig;break;case"focusin":te="focus",X=ls;break;case"focusout":te="blur",X=ls;break;case"beforeblur":case"afterblur":X=ls;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Mg;break;case gd:case md:case yd:X=bg;break;case vd:X=Fg;break;case"scroll":X=gg;break;case"wheel":X=_g;break;case"copy":case"cut":case"paste":X=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Xc}var ne=(t&4)!==0,De=!ne&&e==="scroll",R=ne?B!==null?B+"Capture":null:B;ne=[];for(var P=M,N;P!==null;){N=P;var V=N.stateNode;if(N.tag===5&&V!==null&&(N=V,R!==null&&(V=ct(P,R),V!=null&&ne.push(Si(P,V,N)))),De)break;P=P.return}0<ne.length&&(B=new X(B,te,null,r,U),W.push({event:B,listeners:ne}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",B&&r!==ai&&(te=r.relatedTarget||r.fromElement)&&(tr(te)||te[dn]))break e;if((X||B)&&(B=U.window===U?U:(B=U.ownerDocument)?B.defaultView||B.parentWindow:window,X?(te=r.relatedTarget||r.toElement,X=M,te=te?tr(te):null,te!==null&&(De=er(te),te!==De||te.tag!==5&&te.tag!==6)&&(te=null)):(X=null,te=M),X!==te)){if(ne=Yc,V="onMouseLeave",R="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Xc,V="onPointerLeave",R="onPointerEnter",P="pointer"),De=X==null?B:Mr(X),N=te==null?B:Mr(te),B=new ne(V,P+"leave",X,r,U),B.target=De,B.relatedTarget=N,V=null,tr(U)===M&&(ne=new ne(R,P+"enter",te,r,U),ne.target=N,ne.relatedTarget=De,V=ne),De=V,X&&te)t:{for(ne=X,R=te,P=0,N=ne;N;N=Rr(N))P++;for(N=0,V=R;V;V=Rr(V))N++;for(;0<P-N;)ne=Rr(ne),P--;for(;0<N-P;)R=Rr(R),N--;for(;P--;){if(ne===R||R!==null&&ne===R.alternate)break t;ne=Rr(ne),R=Rr(R)}ne=null}else ne=null;X!==null&&Sd(W,B,X,ne,!1),te!==null&&De!==null&&Sd(W,De,te,ne,!0)}}e:{if(B=M?Mr(M):window,X=B.nodeName&&B.nodeName.toLowerCase(),X==="select"||X==="input"&&B.type==="file")var ie=Gg;else if(rd(B))if(od)ie=qg;else{ie=Vg;var se=Hg}else(X=B.nodeName)&&X.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ie=$g);if(ie&&(ie=ie(e,M))){id(W,ie,r,U);break e}se&&se(e,B,M),e==="focusout"&&(se=B._wrapperState)&&se.controlled&&B.type==="number"&&ii(B,"number",B.value)}switch(se=M?Mr(M):window,e){case"focusin":(rd(se)||se.contentEditable==="true")&&(Ar=se,fs=M,wi=null);break;case"focusout":wi=fs=Ar=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,hd(W,r,U);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":hd(W,r,U)}var le;if(ds)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Pr?td(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(Jc&&r.locale!=="ko"&&(Pr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Pr&&(le=qc()):(In=U,is="value"in In?In.value:In.textContent,Pr=!0)),se=Io(M,ue),0<se.length&&(ue=new Kc(ue,e,null,r,U),W.push({event:ue,listeners:se}),le?ue.data=le:(le=nd(r),le!==null&&(ue.data=le)))),(le=Dg?Og(e,r):Bg(e,r))&&(M=Io(M,"onBeforeInput"),0<M.length&&(U=new Kc("onBeforeInput","beforeinput",null,r,U),W.push({event:U,listeners:M}),U.data=le))}kd(W,t)})}function Si(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Io(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=ct(e,r),d!=null&&a.unshift(Si(e,d,l)),d=ct(e,t),d!=null&&a.push(Si(e,d,l))),e=e.return}return a}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,t,r,a,l){for(var d=t._reactName,g=[];r!==null&&r!==a;){var k=r,T=k.alternate,M=k.stateNode;if(T!==null&&T===a)break;k.tag===5&&M!==null&&(k=M,l?(T=ct(r,d),T!=null&&g.unshift(Si(r,T,k))):l||(T=ct(r,d),T!=null&&g.push(Si(r,T,k)))),r=r.return}g.length!==0&&e.push({event:t,listeners:g})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Ro(e,t,r){if(t=Td(t),Td(e)!==t&&r)throw Error(o(425))}function No(){}var ws=null,ks=null;function Cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ed=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ed<"u"?function(e){return Ed.resolve(null).then(e).catch(im)}:Ss;function im(e){setTimeout(function(){throw e})}function Ts(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),fi(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);fi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),en="__reactFiber$"+Nr,Ti="__reactProps$"+Nr,dn="__reactContainer$"+Nr,Es="__reactEvents$"+Nr,om="__reactListeners$"+Nr,am="__reactHandles$"+Nr;function tr(e){var t=e[en];if(t)return t;for(var r=e.parentNode;r;){if(t=r[dn]||r[en]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Pd(e);e!==null;){if(r=e[en])return r;e=Pd(e)}return t}e=r,r=e.parentNode}return null}function Ei(e){return e=e[en]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Mo(e){return e[Ti]||null}var Ps=[],jr=-1;function Mn(e){return{current:e}}function Ne(e){0>jr||(e.current=Ps[jr],Ps[jr]=null,jr--)}function Ie(e,t){jr++,Ps[jr]=e.current,e.current=t}var jn={},Xe=Mn(jn),dt=Mn(!1),nr=jn;function Fr(e,t){var r=e.type.contextTypes;if(!r)return jn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ut(e){return e=e.childContextTypes,e!=null}function jo(){Ne(dt),Ne(Xe)}function Ad(e,t,r){if(Xe.current!==jn)throw Error(o(168));Ie(Xe,t),Ie(dt,r)}function Id(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(o(108,ae(e)||"Unknown",l));return G({},r,a)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,nr=Xe.current,Ie(Xe,e),Ie(dt,dt.current),!0}function Rd(e,t,r){var a=e.stateNode;if(!a)throw Error(o(169));r?(e=Id(e,t,nr),a.__reactInternalMemoizedMergedChildContext=e,Ne(dt),Ne(Xe),Ie(Xe,e)):Ne(dt),Ie(dt,r)}var un=null,zo=!1,As=!1;function Nd(e){un===null?un=[e]:un.push(e)}function sm(e){zo=!0,Nd(e)}function Fn(){if(!As&&un!==null){As=!0;var e=0,t=Pe;try{var r=un;for(Pe=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}un=null,zo=!1}catch(l){throw un!==null&&(un=un.slice(e+1)),jc(Ka,Fn),l}finally{Pe=t,As=!1}}return null}var zr=[],_r=0,_o=null,Lo=0,Pt=[],At=0,rr=null,pn=1,hn="";function ir(e,t){zr[_r++]=Lo,zr[_r++]=_o,_o=e,Lo=t}function Md(e,t,r){Pt[At++]=pn,Pt[At++]=hn,Pt[At++]=rr,rr=e;var a=pn;e=hn;var l=32-zt(a)-1;a&=~(1<<l),r+=1;var d=32-zt(t)+l;if(30<d){var g=l-l%5;d=(a&(1<<g)-1).toString(32),a>>=g,l-=g,pn=1<<32-zt(t)+l|r<<l|a,hn=d+e}else pn=1<<d|r<<l|a,hn=e}function Is(e){e.return!==null&&(ir(e,1),Md(e,1,0))}function Rs(e){for(;e===_o;)_o=zr[--_r],zr[_r]=null,Lo=zr[--_r],zr[_r]=null;for(;e===rr;)rr=Pt[--At],Pt[At]=null,hn=Pt[--At],Pt[At]=null,pn=Pt[--At],Pt[At]=null}var xt=null,bt=null,je=!1,Lt=null;function jd(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Fd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,bt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=rr!==null?{id:pn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,xt=e,bt=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ms(e){if(je){var t=bt;if(t){var r=t;if(!Fd(e,t)){if(Ns(e))throw Error(o(418));t=Nn(r.nextSibling);var a=xt;t&&Fd(e,t)?jd(a,r):(e.flags=e.flags&-4097|2,je=!1,xt=e)}}else{if(Ns(e))throw Error(o(418));e.flags=e.flags&-4097|2,je=!1,xt=e}}}function zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Do(e){if(e!==xt)return!1;if(!je)return zd(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cs(e.type,e.memoizedProps)),t&&(t=bt)){if(Ns(e))throw _d(),Error(o(418));for(;t;)jd(e,t),t=Nn(t.nextSibling)}if(zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){bt=Nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=xt?Nn(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=bt;e;)e=Nn(e.nextSibling)}function Lr(){bt=xt=null,je=!1}function js(e){Lt===null?Lt=[e]:Lt.push(e)}var lm=O.ReactCurrentBatchConfig;function Pi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var a=r.stateNode}if(!a)throw Error(o(147,e));var l=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var k=l.refs;g===null?delete k[d]:k[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ld(e){var t=e._init;return t(e._payload)}function Dd(e){function t(R,P){if(e){var N=R.deletions;N===null?(R.deletions=[P],R.flags|=16):N.push(P)}}function r(R,P){if(!e)return null;for(;P!==null;)t(R,P),P=P.sibling;return null}function a(R,P){for(R=new Map;P!==null;)P.key!==null?R.set(P.key,P):R.set(P.index,P),P=P.sibling;return R}function l(R,P){return R=Wn(R,P),R.index=0,R.sibling=null,R}function d(R,P,N){return R.index=N,e?(N=R.alternate,N!==null?(N=N.index,N<P?(R.flags|=2,P):N):(R.flags|=2,P)):(R.flags|=1048576,P)}function g(R){return e&&R.alternate===null&&(R.flags|=2),R}function k(R,P,N,V){return P===null||P.tag!==6?(P=Sl(N,R.mode,V),P.return=R,P):(P=l(P,N),P.return=R,P)}function T(R,P,N,V){var ie=N.type;return ie===Y?U(R,P,N.props.children,V,N.key):P!==null&&(P.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===oe&&Ld(ie)===P.type)?(V=l(P,N.props),V.ref=Pi(R,P,N),V.return=R,V):(V=ca(N.type,N.key,N.props,null,R.mode,V),V.ref=Pi(R,P,N),V.return=R,V)}function M(R,P,N,V){return P===null||P.tag!==4||P.stateNode.containerInfo!==N.containerInfo||P.stateNode.implementation!==N.implementation?(P=Tl(N,R.mode,V),P.return=R,P):(P=l(P,N.children||[]),P.return=R,P)}function U(R,P,N,V,ie){return P===null||P.tag!==7?(P=pr(N,R.mode,V,ie),P.return=R,P):(P=l(P,N),P.return=R,P)}function W(R,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Sl(""+P,R.mode,N),P.return=R,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case H:return N=ca(P.type,P.key,P.props,null,R.mode,N),N.ref=Pi(R,null,P),N.return=R,N;case q:return P=Tl(P,R.mode,N),P.return=R,P;case oe:var V=P._init;return W(R,V(P._payload),N)}if(Cn(P)||D(P))return P=pr(P,R.mode,N,null),P.return=R,P;Oo(R,P)}return null}function B(R,P,N,V){var ie=P!==null?P.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return ie!==null?null:k(R,P,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case H:return N.key===ie?T(R,P,N,V):null;case q:return N.key===ie?M(R,P,N,V):null;case oe:return ie=N._init,B(R,P,ie(N._payload),V)}if(Cn(N)||D(N))return ie!==null?null:U(R,P,N,V,null);Oo(R,N)}return null}function X(R,P,N,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number")return R=R.get(N)||null,k(P,R,""+V,ie);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return R=R.get(V.key===null?N:V.key)||null,T(P,R,V,ie);case q:return R=R.get(V.key===null?N:V.key)||null,M(P,R,V,ie);case oe:var se=V._init;return X(R,P,N,se(V._payload),ie)}if(Cn(V)||D(V))return R=R.get(N)||null,U(P,R,V,ie,null);Oo(P,V)}return null}function te(R,P,N,V){for(var ie=null,se=null,le=P,ue=P=0,qe=null;le!==null&&ue<N.length;ue++){le.index>ue?(qe=le,le=null):qe=le.sibling;var Se=B(R,le,N[ue],V);if(Se===null){le===null&&(le=qe);break}e&&le&&Se.alternate===null&&t(R,le),P=d(Se,P,ue),se===null?ie=Se:se.sibling=Se,se=Se,le=qe}if(ue===N.length)return r(R,le),je&&ir(R,ue),ie;if(le===null){for(;ue<N.length;ue++)le=W(R,N[ue],V),le!==null&&(P=d(le,P,ue),se===null?ie=le:se.sibling=le,se=le);return je&&ir(R,ue),ie}for(le=a(R,le);ue<N.length;ue++)qe=X(le,R,ue,N[ue],V),qe!==null&&(e&&qe.alternate!==null&&le.delete(qe.key===null?ue:qe.key),P=d(qe,P,ue),se===null?ie=qe:se.sibling=qe,se=qe);return e&&le.forEach(function(Gn){return t(R,Gn)}),je&&ir(R,ue),ie}function ne(R,P,N,V){var ie=D(N);if(typeof ie!="function")throw Error(o(150));if(N=ie.call(N),N==null)throw Error(o(151));for(var se=ie=null,le=P,ue=P=0,qe=null,Se=N.next();le!==null&&!Se.done;ue++,Se=N.next()){le.index>ue?(qe=le,le=null):qe=le.sibling;var Gn=B(R,le,Se.value,V);if(Gn===null){le===null&&(le=qe);break}e&&le&&Gn.alternate===null&&t(R,le),P=d(Gn,P,ue),se===null?ie=Gn:se.sibling=Gn,se=Gn,le=qe}if(Se.done)return r(R,le),je&&ir(R,ue),ie;if(le===null){for(;!Se.done;ue++,Se=N.next())Se=W(R,Se.value,V),Se!==null&&(P=d(Se,P,ue),se===null?ie=Se:se.sibling=Se,se=Se);return je&&ir(R,ue),ie}for(le=a(R,le);!Se.done;ue++,Se=N.next())Se=X(le,R,ue,Se.value,V),Se!==null&&(e&&Se.alternate!==null&&le.delete(Se.key===null?ue:Se.key),P=d(Se,P,ue),se===null?ie=Se:se.sibling=Se,se=Se);return e&&le.forEach(function(Um){return t(R,Um)}),je&&ir(R,ue),ie}function De(R,P,N,V){if(typeof N=="object"&&N!==null&&N.type===Y&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case H:e:{for(var ie=N.key,se=P;se!==null;){if(se.key===ie){if(ie=N.type,ie===Y){if(se.tag===7){r(R,se.sibling),P=l(se,N.props.children),P.return=R,R=P;break e}}else if(se.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===oe&&Ld(ie)===se.type){r(R,se.sibling),P=l(se,N.props),P.ref=Pi(R,se,N),P.return=R,R=P;break e}r(R,se);break}else t(R,se);se=se.sibling}N.type===Y?(P=pr(N.props.children,R.mode,V,N.key),P.return=R,R=P):(V=ca(N.type,N.key,N.props,null,R.mode,V),V.ref=Pi(R,P,N),V.return=R,R=V)}return g(R);case q:e:{for(se=N.key;P!==null;){if(P.key===se)if(P.tag===4&&P.stateNode.containerInfo===N.containerInfo&&P.stateNode.implementation===N.implementation){r(R,P.sibling),P=l(P,N.children||[]),P.return=R,R=P;break e}else{r(R,P);break}else t(R,P);P=P.sibling}P=Tl(N,R.mode,V),P.return=R,R=P}return g(R);case oe:return se=N._init,De(R,P,se(N._payload),V)}if(Cn(N))return te(R,P,N,V);if(D(N))return ne(R,P,N,V);Oo(R,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,P!==null&&P.tag===6?(r(R,P.sibling),P=l(P,N),P.return=R,R=P):(r(R,P),P=Sl(N,R.mode,V),P.return=R,R=P),g(R)):r(R,P)}return De}var Dr=Dd(!0),Od=Dd(!1),Bo=Mn(null),Uo=null,Or=null,Fs=null;function zs(){Fs=Or=Uo=null}function _s(e){var t=Bo.current;Ne(Bo),e._currentValue=t}function Ls(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Br(e,t){Uo=e,Fs=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(pt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(Uo===null)throw Error(o(308));Or=e,Uo.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var or=null;function Ds(e){or===null?or=[e]:or.push(e)}function Bd(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Ds(t)):(r.next=l.next,l.next=r),t.interleaved=r,fn(e,a)}function fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zn=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ke&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,fn(e,r)}return l=a.interleaved,l===null?(t.next=t,Ds(a)):(t.next=l.next,l.next=t),a.interleaved=t,fn(e,r)}function Wo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Za(e,r)}}function Wd(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var g={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=g:d=d.next=g,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Go(e,t,r,a){var l=e.updateQueue;zn=!1;var d=l.firstBaseUpdate,g=l.lastBaseUpdate,k=l.shared.pending;if(k!==null){l.shared.pending=null;var T=k,M=T.next;T.next=null,g===null?d=M:g.next=M,g=T;var U=e.alternate;U!==null&&(U=U.updateQueue,k=U.lastBaseUpdate,k!==g&&(k===null?U.firstBaseUpdate=M:k.next=M,U.lastBaseUpdate=T))}if(d!==null){var W=l.baseState;g=0,U=M=T=null,k=d;do{var B=k.lane,X=k.eventTime;if((a&B)===B){U!==null&&(U=U.next={eventTime:X,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var te=e,ne=k;switch(B=t,X=r,ne.tag){case 1:if(te=ne.payload,typeof te=="function"){W=te.call(X,W,B);break e}W=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ne.payload,B=typeof te=="function"?te.call(X,W,B):te,B==null)break e;W=G({},W,B);break e;case 2:zn=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,B=l.effects,B===null?l.effects=[k]:B.push(k))}else X={eventTime:X,lane:B,tag:k.tag,payload:k.payload,callback:k.callback,next:null},U===null?(M=U=X,T=W):U=U.next=X,g|=B;if(k=k.next,k===null){if(k=l.shared.pending,k===null)break;B=k,k=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);if(U===null&&(T=W),l.baseState=T,l.firstBaseUpdate=M,l.lastBaseUpdate=U,t=l.shared.interleaved,t!==null){l=t;do g|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);lr|=g,e.lanes=g,e.memoizedState=W}}function Gd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(o(191,l));l.call(a)}}}var Ai={},tn=Mn(Ai),Ii=Mn(Ai),Ri=Mn(Ai);function ar(e){if(e===Ai)throw Error(o(174));return e}function Bs(e,t){switch(Ie(Ri,t),Ie(Ii,e),Ie(tn,Ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qt(t,e)}Ne(tn),Ie(tn,t)}function Ur(){Ne(tn),Ne(Ii),Ne(Ri)}function Hd(e){ar(Ri.current);var t=ar(tn.current),r=Qt(t,e.type);t!==r&&(Ie(Ii,e),Ie(tn,r))}function Us(e){Ii.current===e&&(Ne(tn),Ne(Ii))}var Fe=Mn(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ws=[];function Gs(){for(var e=0;e<Ws.length;e++)Ws[e]._workInProgressVersionPrimary=null;Ws.length=0}var Vo=O.ReactCurrentDispatcher,Hs=O.ReactCurrentBatchConfig,sr=0,ze=null,We=null,Ve=null,$o=!1,Ni=!1,Mi=0,cm=0;function Je(){throw Error(o(321))}function Vs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function $s(e,t,r,a,l,d){if(sr=d,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?hm:fm,e=r(a,l),Ni){d=0;do{if(Ni=!1,Mi=0,25<=d)throw Error(o(301));d+=1,Ve=We=null,t.updateQueue=null,Vo.current=gm,e=r(a,l)}while(Ni)}if(Vo.current=Yo,t=We!==null&&We.next!==null,sr=0,Ve=We=ze=null,$o=!1,t)throw Error(o(300));return e}function qs(){var e=Mi!==0;return Mi=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ze.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Rt(){if(We===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ve===null?ze.memoizedState:Ve.next;if(t!==null)Ve=t,We=e;else{if(e===null)throw Error(o(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ve===null?ze.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ji(e,t){return typeof t=="function"?t(e):t}function Qs(e){var t=Rt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=We,l=a.baseQueue,d=r.pending;if(d!==null){if(l!==null){var g=l.next;l.next=d.next,d.next=g}a.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,a=a.baseState;var k=g=null,T=null,M=d;do{var U=M.lane;if((sr&U)===U)T!==null&&(T=T.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),a=M.hasEagerState?M.eagerState:e(a,M.action);else{var W={lane:U,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};T===null?(k=T=W,g=a):T=T.next=W,ze.lanes|=U,lr|=U}M=M.next}while(M!==null&&M!==d);T===null?g=a:T.next=k,_t(a,t.memoizedState)||(pt=!0),t.memoizedState=a,t.baseState=g,t.baseQueue=T,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do d=l.lane,ze.lanes|=d,lr|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ys(e){var t=Rt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var g=l=l.next;do d=e(d,g.action),g=g.next;while(g!==l);_t(d,t.memoizedState)||(pt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,a]}function Vd(){}function $d(e,t){var r=ze,a=Rt(),l=t(),d=!_t(a.memoizedState,l);if(d&&(a.memoizedState=l,pt=!0),a=a.queue,Ks(Yd.bind(null,r,a,e),[e]),a.getSnapshot!==t||d||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Fi(9,Qd.bind(null,r,a,l,t),void 0,null),$e===null)throw Error(o(349));(sr&30)!==0||qd(r,t,l)}return l}function qd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qd(e,t,r,a){t.value=r,t.getSnapshot=a,Kd(t)&&Xd(e)}function Yd(e,t,r){return r(function(){Kd(t)&&Xd(e)})}function Kd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function Xd(e){var t=fn(e,1);t!==null&&Ut(t,e,1,-1)}function Jd(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,ze,e),[t.memoizedState,e]}function Fi(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Zd(){return Rt().memoizedState}function qo(e,t,r,a){var l=nn();ze.flags|=e,l.memoizedState=Fi(1|t,r,void 0,a===void 0?null:a)}function Qo(e,t,r,a){var l=Rt();a=a===void 0?null:a;var d=void 0;if(We!==null){var g=We.memoizedState;if(d=g.destroy,a!==null&&Vs(a,g.deps)){l.memoizedState=Fi(t,r,d,a);return}}ze.flags|=e,l.memoizedState=Fi(1|t,r,d,a)}function eu(e,t){return qo(8390656,8,e,t)}function Ks(e,t){return Qo(2048,8,e,t)}function tu(e,t){return Qo(4,2,e,t)}function nu(e,t){return Qo(4,4,e,t)}function ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iu(e,t,r){return r=r!=null?r.concat([e]):null,Qo(4,4,ru.bind(null,t,e),r)}function Xs(){}function ou(e,t){var r=Rt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Vs(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function au(e,t){var r=Rt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Vs(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function su(e,t,r){return(sr&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=r):(_t(r,t)||(r=Lc(),ze.lanes|=r,lr|=r,e.baseState=!0),t)}function dm(e,t){var r=Pe;Pe=r!==0&&4>r?r:4,e(!0);var a=Hs.transition;Hs.transition={};try{e(!1),t()}finally{Pe=r,Hs.transition=a}}function lu(){return Rt().memoizedState}function um(e,t,r){var a=Bn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e))du(t,r);else if(r=Bd(e,t,r,a),r!==null){var l=ot();Ut(r,e,a,l),uu(r,t,a)}}function pm(e,t,r){var a=Bn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(cu(e))du(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,k=d(g,r);if(l.hasEagerState=!0,l.eagerState=k,_t(k,g)){var T=t.interleaved;T===null?(l.next=l,Ds(t)):(l.next=T.next,T.next=l),t.interleaved=l;return}}catch{}finally{}r=Bd(e,t,l,a),r!==null&&(l=ot(),Ut(r,e,a,l),uu(r,t,a))}}function cu(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function du(e,t){Ni=$o=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function uu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Za(e,r)}}var Yo={readContext:It,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},hm={readContext:It,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:eu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,qo(4194308,4,ru.bind(null,t,e),r)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=nn();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=um.bind(null,ze,e),[a.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Jd,useDebugValue:Xs,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Jd(!1),t=e[0];return e=dm.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=ze,l=nn();if(je){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),$e===null)throw Error(o(349));(sr&30)!==0||qd(a,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,eu(Yd.bind(null,a,d,e),[e]),a.flags|=2048,Fi(9,Qd.bind(null,a,d,r,t),void 0,null),r},useId:function(){var e=nn(),t=$e.identifierPrefix;if(je){var r=hn,a=pn;r=(a&~(1<<32-zt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Mi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=cm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:It,useCallback:ou,useContext:It,useEffect:Ks,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:au,useReducer:Qs,useRef:Zd,useState:function(){return Qs(ji)},useDebugValue:Xs,useDeferredValue:function(e){var t=Rt();return su(t,We.memoizedState,e)},useTransition:function(){var e=Qs(ji)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:$d,useId:lu,unstable_isNewReconciler:!1},gm={readContext:It,useCallback:ou,useContext:It,useEffect:Ks,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:au,useReducer:Ys,useRef:Zd,useState:function(){return Ys(ji)},useDebugValue:Xs,useDeferredValue:function(e){var t=Rt();return We===null?t.memoizedState=e:su(t,We.memoizedState,e)},useTransition:function(){var e=Ys(ji)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:$d,useId:lu,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Js(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ko={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=ot(),l=Bn(e),d=gn(a,l);d.payload=t,r!=null&&(d.callback=r),t=_n(e,d,l),t!==null&&(Ut(t,e,l,a),Wo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=ot(),l=Bn(e),d=gn(a,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=_n(e,d,l),t!==null&&(Ut(t,e,l,a),Wo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),a=Bn(e),l=gn(r,a);l.tag=2,t!=null&&(l.callback=t),t=_n(e,l,a),t!==null&&(Ut(t,e,a,r),Wo(t,e,a))}};function pu(e,t,r,a,l,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,g):t.prototype&&t.prototype.isPureReactComponent?!bi(r,a)||!bi(l,d):!0}function hu(e,t,r){var a=!1,l=jn,d=t.contextType;return typeof d=="object"&&d!==null?d=It(d):(l=ut(t)?nr:Xe.current,a=t.contextTypes,d=(a=a!=null)?Fr(e,l):jn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function fu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function Zs(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Os(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=It(d):(d=ut(t)?nr:Xe.current,l.context=Fr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Js(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ko.enqueueReplaceState(l,l.state,null),Go(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var r="",a=t;do r+=ce(a),a=a.return;while(a);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function el(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function tl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function gu(e,t,r){r=gn(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){ra||(ra=!0,ml=a),tl(e,t)},r}function mu(e,t,r){r=gn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){tl(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){tl(e,t),typeof a!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),r}function yu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new mm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Rm.bind(null,e,t,r),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gn(-1,1),t.tag=2,_n(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var ym=O.ReactCurrentOwner,pt=!1;function it(e,t,r,a){t.child=e===null?Od(t,null,r,a):Dr(t,e.child,r,a)}function bu(e,t,r,a,l){r=r.render;var d=t.ref;return Br(t,l),a=$s(e,t,r,a,d,l),r=qs(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mn(e,t,l)):(je&&r&&Is(t),t.flags|=1,it(e,t,a,l),t.child)}function wu(e,t,r,a,l){if(e===null){var d=r.type;return typeof d=="function"&&!Cl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,ku(e,t,d,a,l)):(e=ca(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var g=d.memoizedProps;if(r=r.compare,r=r!==null?r:bi,r(g,a)&&e.ref===t.ref)return mn(e,t,l)}return t.flags|=1,e=Wn(d,a),e.ref=t.ref,e.return=t,t.child=e}function ku(e,t,r,a,l){if(e!==null){var d=e.memoizedProps;if(bi(d,a)&&e.ref===t.ref)if(pt=!1,t.pendingProps=a=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,mn(e,t,l)}return nl(e,t,r,a,l)}function Cu(e,t,r){var a=t.pendingProps,l=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Hr,wt),wt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Hr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:r,Ie(Hr,wt),wt|=a}else d!==null?(a=d.baseLanes|r,t.memoizedState=null):a=r,Ie(Hr,wt),wt|=a;return it(e,t,l,r),t.child}function Su(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function nl(e,t,r,a,l){var d=ut(r)?nr:Xe.current;return d=Fr(t,d),Br(t,l),r=$s(e,t,r,a,d,l),a=qs(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mn(e,t,l)):(je&&a&&Is(t),t.flags|=1,it(e,t,r,l),t.child)}function Tu(e,t,r,a,l){if(ut(r)){var d=!0;Fo(t)}else d=!1;if(Br(t,l),t.stateNode===null)Jo(e,t),hu(t,r,a),Zs(t,r,a,l),a=!0;else if(e===null){var g=t.stateNode,k=t.memoizedProps;g.props=k;var T=g.context,M=r.contextType;typeof M=="object"&&M!==null?M=It(M):(M=ut(r)?nr:Xe.current,M=Fr(t,M));var U=r.getDerivedStateFromProps,W=typeof U=="function"||typeof g.getSnapshotBeforeUpdate=="function";W||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==a||T!==M)&&fu(t,g,a,M),zn=!1;var B=t.memoizedState;g.state=B,Go(t,a,g,l),T=t.memoizedState,k!==a||B!==T||dt.current||zn?(typeof U=="function"&&(Js(t,r,U,a),T=t.memoizedState),(k=zn||pu(t,r,k,a,B,T,M))?(W||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),g.props=a,g.state=T,g.context=M,a=k):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{g=t.stateNode,Ud(e,t),k=t.memoizedProps,M=t.type===t.elementType?k:Dt(t.type,k),g.props=M,W=t.pendingProps,B=g.context,T=r.contextType,typeof T=="object"&&T!==null?T=It(T):(T=ut(r)?nr:Xe.current,T=Fr(t,T));var X=r.getDerivedStateFromProps;(U=typeof X=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==W||B!==T)&&fu(t,g,a,T),zn=!1,B=t.memoizedState,g.state=B,Go(t,a,g,l);var te=t.memoizedState;k!==W||B!==te||dt.current||zn?(typeof X=="function"&&(Js(t,r,X,a),te=t.memoizedState),(M=zn||pu(t,r,M,a,B,te,T)||!1)?(U||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,te,T),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,te,T)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||k===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=te),g.props=a,g.state=te,g.context=T,a=M):(typeof g.componentDidUpdate!="function"||k===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),a=!1)}return rl(e,t,r,a,d,l)}function rl(e,t,r,a,l,d){Su(e,t);var g=(t.flags&128)!==0;if(!a&&!g)return l&&Rd(t,r,!1),mn(e,t,d);a=t.stateNode,ym.current=t;var k=g&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&g?(t.child=Dr(t,e.child,null,d),t.child=Dr(t,null,k,d)):it(e,t,k,d),t.memoizedState=a.state,l&&Rd(t,r,!0),t.child}function Eu(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),Bs(e,t.containerInfo)}function Pu(e,t,r,a,l){return Lr(),js(l),t.flags|=256,it(e,t,r,a),t.child}var il={dehydrated:null,treeContext:null,retryLane:0};function ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,r){var a=t.pendingProps,l=Fe.current,d=!1,g=(t.flags&128)!==0,k;if((k=g)||(k=e!==null&&e.memoizedState===null?!1:(l&2)!==0),k?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ie(Fe,l&1),e===null)return Ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=a.children,e=a.fallback,d?(a=t.mode,d=t.child,g={mode:"hidden",children:g},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=da(g,a,0,null),e=pr(e,a,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ol(r),t.memoizedState=il,e):al(t,g));if(l=e.memoizedState,l!==null&&(k=l.dehydrated,k!==null))return vm(e,t,g,a,k,l,r);if(d){d=a.fallback,g=t.mode,l=e.child,k=l.sibling;var T={mode:"hidden",children:a.children};return(g&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=T,t.deletions=null):(a=Wn(l,T),a.subtreeFlags=l.subtreeFlags&14680064),k!==null?d=Wn(k,d):(d=pr(d,g,r,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,g=e.child.memoizedState,g=g===null?ol(r):{baseLanes:g.baseLanes|r,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~r,t.memoizedState=il,a}return d=e.child,e=d.sibling,a=Wn(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function al(e,t){return t=da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xo(e,t,r,a){return a!==null&&js(a),Dr(t,e.child,null,r),e=al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,r,a,l,d,g){if(r)return t.flags&256?(t.flags&=-257,a=el(Error(o(422))),Xo(e,t,g,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,l=t.mode,a=da({mode:"visible",children:a.children},l,0,null),d=pr(d,l,g,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&Dr(t,e.child,null,g),t.child.memoizedState=ol(g),t.memoizedState=il,d);if((t.mode&1)===0)return Xo(e,t,g,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var k=a.dgst;return a=k,d=Error(o(419)),a=el(d,a,void 0),Xo(e,t,g,a)}if(k=(g&e.childLanes)!==0,pt||k){if(a=$e,a!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|g))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,fn(e,l),Ut(a,e,l,-1))}return kl(),a=el(Error(o(421))),Xo(e,t,g,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,bt=Nn(l.nextSibling),xt=t,je=!0,Lt=null,e!==null&&(Pt[At++]=pn,Pt[At++]=hn,Pt[At++]=rr,pn=e.id,hn=e.overflow,rr=t),t=al(t,a.children),t.flags|=4096,t)}function Iu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ls(e.return,t,r)}function sl(e,t,r,a,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=r,d.tailMode=l)}function Ru(e,t,r){var a=t.pendingProps,l=a.revealOrder,d=a.tail;if(it(e,t,a.children,r),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,r,t);else if(e.tag===19)Iu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ie(Fe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Ho(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),sl(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ho(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}sl(t,!0,r,null,d);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function xm(e,t,r){switch(t.tag){case 3:Eu(t),Lr();break;case 5:Hd(t);break;case 1:ut(t.type)&&Fo(t);break;case 4:Bs(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Ie(Bo,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ie(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Au(e,t,r):(Ie(Fe,Fe.current&1),e=mn(e,t,r),e!==null?e.sibling:null);Ie(Fe,Fe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Ru(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ie(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Cu(e,t,r)}return mn(e,t,r)}var Nu,ll,Mu,ju;Nu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ll=function(){},Mu=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,ar(tn.current);var d=null;switch(r){case"input":l=ti(e,l),a=ti(e,a),d=[];break;case"select":l=G({},l,{value:void 0}),a=G({},a,{value:void 0}),d=[];break;case"textarea":l=br(e,l),a=br(e,a),d=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=No)}Kt(r,a);var g;r=null;for(M in l)if(!a.hasOwnProperty(M)&&l.hasOwnProperty(M)&&l[M]!=null)if(M==="style"){var k=l[M];for(g in k)k.hasOwnProperty(g)&&(r||(r={}),r[g]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(c.hasOwnProperty(M)?d||(d=[]):(d=d||[]).push(M,null));for(M in a){var T=a[M];if(k=l?.[M],a.hasOwnProperty(M)&&T!==k&&(T!=null||k!=null))if(M==="style")if(k){for(g in k)!k.hasOwnProperty(g)||T&&T.hasOwnProperty(g)||(r||(r={}),r[g]="");for(g in T)T.hasOwnProperty(g)&&k[g]!==T[g]&&(r||(r={}),r[g]=T[g])}else r||(d||(d=[]),d.push(M,r)),r=T;else M==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,k=k?k.__html:void 0,T!=null&&k!==T&&(d=d||[]).push(M,T)):M==="children"?typeof T!="string"&&typeof T!="number"||(d=d||[]).push(M,""+T):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(c.hasOwnProperty(M)?(T!=null&&M==="onScroll"&&Re("scroll",e),d||k===T||(d=[])):(d=d||[]).push(M,T))}r&&(d=d||[]).push("style",r);var M=d;(t.updateQueue=M)&&(t.flags|=4)}},ju=function(e,t,r,a){r!==a&&(t.flags|=4)};function zi(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function bm(e,t,r){var a=t.pendingProps;switch(Rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&jo(),Ze(t),null;case 3:return a=t.stateNode,Ur(),Ne(dt),Ne(Xe),Gs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(xl(Lt),Lt=null))),ll(e,t),Ze(t),null;case 5:Us(t);var l=ar(Ri.current);if(r=t.type,e!==null&&t.stateNode!=null)Mu(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(e=ar(tn.current),Do(t)){a=t.stateNode,r=t.type;var d=t.memoizedProps;switch(a[en]=t,a[Ti]=d,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",a),Re("close",a);break;case"iframe":case"object":case"embed":Re("load",a);break;case"video":case"audio":for(l=0;l<ki.length;l++)Re(ki[l],a);break;case"source":Re("error",a);break;case"img":case"image":case"link":Re("error",a),Re("load",a);break;case"details":Re("toggle",a);break;case"input":no(a,d),Re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Re("invalid",a);break;case"textarea":qt(a,d),Re("invalid",a)}Kt(r,d),l=null;for(var g in d)if(d.hasOwnProperty(g)){var k=d[g];g==="children"?typeof k=="string"?a.textContent!==k&&(d.suppressHydrationWarning!==!0&&Ro(a.textContent,k,e),l=["children",k]):typeof k=="number"&&a.textContent!==""+k&&(d.suppressHydrationWarning!==!0&&Ro(a.textContent,k,e),l=["children",""+k]):c.hasOwnProperty(g)&&k!=null&&g==="onScroll"&&Re("scroll",a)}switch(r){case"input":St(a),xr(a,d,!0);break;case"textarea":St(a),io(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=No)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nt(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(r,{is:a.is}):(e=g.createElement(r),r==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,r),e[en]=t,e[Ti]=a,Nu(e,t,!1,!1),t.stateNode=e;e:{switch(g=oi(r,a),r){case"dialog":Re("cancel",e),Re("close",e),l=a;break;case"iframe":case"object":case"embed":Re("load",e),l=a;break;case"video":case"audio":for(l=0;l<ki.length;l++)Re(ki[l],e);l=a;break;case"source":Re("error",e),l=a;break;case"img":case"image":case"link":Re("error",e),Re("load",e),l=a;break;case"details":Re("toggle",e),l=a;break;case"input":no(e,a),l=ti(e,a),Re("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=G({},a,{value:void 0}),Re("invalid",e);break;case"textarea":qt(e,a),l=br(e,a),Re("invalid",e);break;default:l=a}Kt(r,l),k=l;for(d in k)if(k.hasOwnProperty(d)){var T=k[d];d==="style"?cn(e,T):d==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&oo(e,T)):d==="children"?typeof T=="string"?(r!=="textarea"||T!=="")&&Yt(e,T):typeof T=="number"&&Yt(e,""+T):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?T!=null&&d==="onScroll"&&Re("scroll",e):T!=null&&_(e,d,T,g))}switch(r){case"input":St(e),xr(e,a,!1);break;case"textarea":St(e),io(e);break;case"option":a.value!=null&&e.setAttribute("value",""+we(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Et(e,!!a.multiple,d,!1):a.defaultValue!=null&&Et(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=No)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)ju(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(r=ar(Ri.current),ar(tn.current),Do(t)){if(a=t.stateNode,r=t.memoizedProps,a[en]=t,(d=a.nodeValue!==r)&&(e=xt,e!==null))switch(e.tag){case 3:Ro(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ro(a.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[en]=t,t.stateNode=a}return Ze(t),null;case 13:if(Ne(Fe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&bt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_d(),Lr(),t.flags|=98560,d=!1;else if(d=Do(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[en]=t}else Lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),d=!1}else Lt!==null&&(xl(Lt),Lt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Ge===0&&(Ge=3):kl())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ur(),ll(e,t),e===null&&Ci(t.stateNode.containerInfo),Ze(t),null;case 10:return _s(t.type._context),Ze(t),null;case 17:return ut(t.type)&&jo(),Ze(t),null;case 19:if(Ne(Fe),d=t.memoizedState,d===null)return Ze(t),null;if(a=(t.flags&128)!==0,g=d.rendering,g===null)if(a)zi(d,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=Ho(e),g!==null){for(t.flags|=128,zi(d,!1),a=g.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)d=r,e=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(Fe,Fe.current&1|2),t.child}e=e.sibling}d.tail!==null&&Le()>Vr&&(t.flags|=128,a=!0,zi(d,!1),t.lanes=4194304)}else{if(!a)if(e=Ho(g),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!je)return Ze(t),null}else 2*Le()-d.renderingStartTime>Vr&&r!==1073741824&&(t.flags|=128,a=!0,zi(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(r=d.last,r!==null?r.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Le(),t.sibling=null,r=Fe.current,Ie(Fe,a?r&1|2:r&1),t):(Ze(t),null);case 22:case 23:return wl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(wt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function wm(e,t){switch(Rs(t),t.tag){case 1:return ut(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),Ne(dt),Ne(Xe),Gs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Us(t),null;case 13:if(Ne(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Fe),null;case 4:return Ur(),null;case 10:return _s(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var Zo=!1,et=!1,km=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Gr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){_e(e,t,a)}else r.current=null}function cl(e,t,r){try{r()}catch(a){_e(e,t,a)}}var Fu=!1;function Cm(e,t){if(ws=xo,e=pd(),hs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var g=0,k=-1,T=-1,M=0,U=0,W=e,B=null;t:for(;;){for(var X;W!==r||l!==0&&W.nodeType!==3||(k=g+l),W!==d||a!==0&&W.nodeType!==3||(T=g+a),W.nodeType===3&&(g+=W.nodeValue.length),(X=W.firstChild)!==null;)B=W,W=X;for(;;){if(W===e)break t;if(B===r&&++M===l&&(k=g),B===d&&++U===a&&(T=g),(X=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=X}r=k===-1||T===-1?null:{start:k,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(ks={focusedElem:e,selectionRange:r},xo=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var te=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var ne=te.memoizedProps,De=te.memoizedState,R=t.stateNode,P=R.getSnapshotBeforeUpdate(t.elementType===t.type?ne:Dt(t.type,ne),De);R.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(V){_e(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return te=Fu,Fu=!1,te}function _i(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&cl(t,r,d)}l=l.next}while(l!==a)}}function ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function dl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zu(e){var t=e.alternate;t!==null&&(e.alternate=null,zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Ti],delete t[Es],delete t[om],delete t[am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=No));else if(a!==4&&(e=e.child,e!==null))for(ul(e,t,r),e=e.sibling;e!==null;)ul(e,t,r),e=e.sibling}function pl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(pl(e,t,r),e=e.sibling;e!==null;)pl(e,t,r),e=e.sibling}var Ye=null,Ot=!1;function Ln(e,t,r){for(r=r.child;r!==null;)Du(e,t,r),r=r.sibling}function Du(e,t,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ho,r)}catch{}switch(r.tag){case 5:et||Gr(r,t);case 6:var a=Ye,l=Ot;Ye=null,Ln(e,t,r),Ye=a,Ot=l,Ye!==null&&(Ot?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(Ot?(e=Ye,r=r.stateNode,e.nodeType===8?Ts(e.parentNode,r):e.nodeType===1&&Ts(e,r),fi(e)):Ts(Ye,r.stateNode));break;case 4:a=Ye,l=Ot,Ye=r.stateNode.containerInfo,Ot=!0,Ln(e,t,r),Ye=a,Ot=l;break;case 0:case 11:case 14:case 15:if(!et&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var d=l,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&cl(r,t,g),l=l.next}while(l!==a)}Ln(e,t,r);break;case 1:if(!et&&(Gr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(k){_e(r,t,k)}Ln(e,t,r);break;case 21:Ln(e,t,r);break;case 22:r.mode&1?(et=(a=et)||r.memoizedState!==null,Ln(e,t,r),et=a):Ln(e,t,r);break;default:Ln(e,t,r)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new km),t.forEach(function(a){var l=Mm.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Bt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var d=e,g=t,k=g;e:for(;k!==null;){switch(k.tag){case 5:Ye=k.stateNode,Ot=!1;break e;case 3:Ye=k.stateNode.containerInfo,Ot=!0;break e;case 4:Ye=k.stateNode.containerInfo,Ot=!0;break e}k=k.return}if(Ye===null)throw Error(o(160));Du(d,g,l),Ye=null,Ot=!1;var T=l.alternate;T!==null&&(T.return=null),l.return=null}catch(M){_e(l,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),rn(e),a&4){try{_i(3,e,e.return),ea(3,e)}catch(ne){_e(e,e.return,ne)}try{_i(5,e,e.return)}catch(ne){_e(e,e.return,ne)}}break;case 1:Bt(t,e),rn(e),a&512&&r!==null&&Gr(r,r.return);break;case 5:if(Bt(t,e),rn(e),a&512&&r!==null&&Gr(r,r.return),e.flags&32){var l=e.stateNode;try{Yt(l,"")}catch(ne){_e(e,e.return,ne)}}if(a&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,g=r!==null?r.memoizedProps:d,k=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{k==="input"&&d.type==="radio"&&d.name!=null&&ni(l,d),oi(k,g);var M=oi(k,d);for(g=0;g<T.length;g+=2){var U=T[g],W=T[g+1];U==="style"?cn(l,W):U==="dangerouslySetInnerHTML"?oo(l,W):U==="children"?Yt(l,W):_(l,U,W,M)}switch(k){case"input":ri(l,d);break;case"textarea":ro(l,d);break;case"select":var B=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var X=d.value;X!=null?Et(l,!!d.multiple,X,!1):B!==!!d.multiple&&(d.defaultValue!=null?Et(l,!!d.multiple,d.defaultValue,!0):Et(l,!!d.multiple,d.multiple?[]:"",!1))}l[Ti]=d}catch(ne){_e(e,e.return,ne)}}break;case 6:if(Bt(t,e),rn(e),a&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(ne){_e(e,e.return,ne)}}break;case 3:if(Bt(t,e),rn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(ne){_e(e,e.return,ne)}break;case 4:Bt(t,e),rn(e);break;case 13:Bt(t,e),rn(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(gl=Le())),a&4&&Ou(e);break;case 22:if(U=r!==null&&r.memoizedState!==null,e.mode&1?(et=(M=et)||U,Bt(t,e),et=M):Bt(t,e),rn(e),a&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!U&&(e.mode&1)!==0)for(ee=e,U=e.child;U!==null;){for(W=ee=U;ee!==null;){switch(B=ee,X=B.child,B.tag){case 0:case 11:case 14:case 15:_i(4,B,B.return);break;case 1:Gr(B,B.return);var te=B.stateNode;if(typeof te.componentWillUnmount=="function"){a=B,r=B.return;try{t=a,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(ne){_e(a,r,ne)}}break;case 5:Gr(B,B.return);break;case 22:if(B.memoizedState!==null){Gu(W);continue}}X!==null?(X.return=B,ee=X):Gu(W)}U=U.sibling}e:for(U=null,W=e;;){if(W.tag===5){if(U===null){U=W;try{l=W.stateNode,M?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(k=W.stateNode,T=W.memoizedProps.style,g=T!=null&&T.hasOwnProperty("display")?T.display:null,k.style.display=kr("display",g))}catch(ne){_e(e,e.return,ne)}}}else if(W.tag===6){if(U===null)try{W.stateNode.nodeValue=M?"":W.memoizedProps}catch(ne){_e(e,e.return,ne)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;U===W&&(U=null),W=W.return}U===W&&(U=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Bt(t,e),rn(e),a&4&&Ou(e);break;case 21:break;default:Bt(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_u(r)){var a=r;break e}r=r.return}throw Error(o(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Yt(l,""),a.flags&=-33);var d=Lu(e);pl(e,d,l);break;case 3:case 4:var g=a.stateNode.containerInfo,k=Lu(e);ul(e,k,g);break;default:throw Error(o(161))}}catch(T){_e(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e,t,r){ee=e,Uu(e)}function Uu(e,t,r){for(var a=(e.mode&1)!==0;ee!==null;){var l=ee,d=l.child;if(l.tag===22&&a){var g=l.memoizedState!==null||Zo;if(!g){var k=l.alternate,T=k!==null&&k.memoizedState!==null||et;k=Zo;var M=et;if(Zo=g,(et=T)&&!M)for(ee=l;ee!==null;)g=ee,T=g.child,g.tag===22&&g.memoizedState!==null?Hu(l):T!==null?(T.return=g,ee=T):Hu(l);for(;d!==null;)ee=d,Uu(d),d=d.sibling;ee=l,Zo=k,et=M}Wu(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,ee=d):Wu(e)}}function Wu(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||ea(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!et)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Dt(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&Gd(t,d,a);break;case 3:var g=t.updateQueue;if(g!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gd(t,g,r)}break;case 5:var k=t.stateNode;if(r===null&&t.flags&4){r=k;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&r.focus();break;case"img":T.src&&(r.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var U=M.memoizedState;if(U!==null){var W=U.dehydrated;W!==null&&fi(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}et||t.flags&512&&dl(t)}catch(B){_e(t,t.return,B)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function Gu(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function Hu(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ea(4,t)}catch(T){_e(t,r,T)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(T){_e(t,l,T)}}var d=t.return;try{dl(t)}catch(T){_e(t,d,T)}break;case 5:var g=t.return;try{dl(t)}catch(T){_e(t,g,T)}}}catch(T){_e(t,t.return,T)}if(t===e){ee=null;break}var k=t.sibling;if(k!==null){k.return=t.return,ee=k;break}ee=t.return}}var Tm=Math.ceil,ta=O.ReactCurrentDispatcher,hl=O.ReactCurrentOwner,Nt=O.ReactCurrentBatchConfig,ke=0,$e=null,Be=null,Ke=0,wt=0,Hr=Mn(0),Ge=0,Li=null,lr=0,na=0,fl=0,Di=null,ht=null,gl=0,Vr=1/0,yn=null,ra=!1,ml=null,Dn=null,ia=!1,On=null,oa=0,Oi=0,yl=null,aa=-1,sa=0;function ot(){return(ke&6)!==0?Le():aa!==-1?aa:aa=Le()}function Bn(e){return(e.mode&1)===0?1:(ke&2)!==0&&Ke!==0?Ke&-Ke:lm.transition!==null?(sa===0&&(sa=Lc()),sa):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e)}function Ut(e,t,r,a){if(50<Oi)throw Oi=0,yl=null,Error(o(185));ci(e,r,a),((ke&2)===0||e!==$e)&&(e===$e&&((ke&2)===0&&(na|=r),Ge===4&&Un(e,Ke)),ft(e,a),r===1&&ke===0&&(t.mode&1)===0&&(Vr=Le()+500,zo&&Fn()))}function ft(e,t){var r=e.callbackNode;lg(e,t);var a=mo(e,e===$e?Ke:0);if(a===0)r!==null&&Fc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Fc(r),t===1)e.tag===0?sm($u.bind(null,e)):Nd($u.bind(null,e)),rm(function(){(ke&6)===0&&Fn()}),r=null;else{switch(Dc(a)){case 1:r=Ka;break;case 4:r=zc;break;case 16:r=po;break;case 536870912:r=_c;break;default:r=po}r=ep(r,Vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vu(e,t){if(aa=-1,sa=0,(ke&6)!==0)throw Error(o(327));var r=e.callbackNode;if($r()&&e.callbackNode!==r)return null;var a=mo(e,e===$e?Ke:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=la(e,a);else{t=a;var l=ke;ke|=2;var d=Qu();($e!==e||Ke!==t)&&(yn=null,Vr=Le()+500,dr(e,t));do try{Am();break}catch(k){qu(e,k)}while(!0);zs(),ta.current=d,ke=l,Be!==null?t=0:($e=null,Ke=0,t=Ge)}if(t!==0){if(t===2&&(l=Xa(e),l!==0&&(a=l,t=vl(e,l))),t===1)throw r=Li,dr(e,0),Un(e,a),ft(e,Le()),r;if(t===6)Un(e,a);else{if(l=e.current.alternate,(a&30)===0&&!Em(l)&&(t=la(e,a),t===2&&(d=Xa(e),d!==0&&(a=d,t=vl(e,d))),t===1))throw r=Li,dr(e,0),Un(e,a),ft(e,Le()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:ur(e,ht,yn);break;case 3:if(Un(e,a),(a&130023424)===a&&(t=gl+500-Le(),10<t)){if(mo(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){ot(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ss(ur.bind(null,e,ht,yn),t);break}ur(e,ht,yn);break;case 4:if(Un(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var g=31-zt(a);d=1<<g,g=t[g],g>l&&(l=g),a&=~d}if(a=l,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Tm(a/1960))-a,10<a){e.timeoutHandle=Ss(ur.bind(null,e,ht,yn),a);break}ur(e,ht,yn);break;case 5:ur(e,ht,yn);break;default:throw Error(o(329))}}}return ft(e,Le()),e.callbackNode===r?Vu.bind(null,e):null}function vl(e,t){var r=Di;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=la(e,t),e!==2&&(t=ht,ht=r,t!==null&&xl(t)),e}function xl(e){ht===null?ht=e:ht.push.apply(ht,e)}function Em(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],d=l.getSnapshot;l=l.value;try{if(!_t(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~fl,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-zt(t),a=1<<r;e[r]=-1,t&=~a}}function $u(e){if((ke&6)!==0)throw Error(o(327));$r();var t=mo(e,0);if((t&1)===0)return ft(e,Le()),null;var r=la(e,t);if(e.tag!==0&&r===2){var a=Xa(e);a!==0&&(t=a,r=vl(e,a))}if(r===1)throw r=Li,dr(e,0),Un(e,t),ft(e,Le()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,ht,yn),ft(e,Le()),null}function bl(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(Vr=Le()+500,zo&&Fn())}}function cr(e){On!==null&&On.tag===0&&(ke&6)===0&&$r();var t=ke;ke|=1;var r=Nt.transition,a=Pe;try{if(Nt.transition=null,Pe=1,e)return e()}finally{Pe=a,Nt.transition=r,ke=t,(ke&6)===0&&Fn()}}function wl(){wt=Hr.current,Ne(Hr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,nm(r)),Be!==null)for(r=Be.return;r!==null;){var a=r;switch(Rs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&jo();break;case 3:Ur(),Ne(dt),Ne(Xe),Gs();break;case 5:Us(a);break;case 4:Ur();break;case 13:Ne(Fe);break;case 19:Ne(Fe);break;case 10:_s(a.type._context);break;case 22:case 23:wl()}r=r.return}if($e=e,Be=e=Wn(e.current,null),Ke=wt=t,Ge=0,Li=null,fl=na=lr=0,ht=Di=null,or!==null){for(t=0;t<or.length;t++)if(r=or[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,d=r.pending;if(d!==null){var g=d.next;d.next=l,a.next=g}r.pending=a}or=null}return e}function qu(e,t){do{var r=Be;try{if(zs(),Vo.current=Yo,$o){for(var a=ze.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}$o=!1}if(sr=0,Ve=We=ze=null,Ni=!1,Mi=0,hl.current=null,r===null||r.return===null){Ge=1,Li=t,Be=null;break}e:{var d=e,g=r.return,k=r,T=t;if(t=Ke,k.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var M=T,U=k,W=U.tag;if((U.mode&1)===0&&(W===0||W===11||W===15)){var B=U.alternate;B?(U.updateQueue=B.updateQueue,U.memoizedState=B.memoizedState,U.lanes=B.lanes):(U.updateQueue=null,U.memoizedState=null)}var X=vu(g);if(X!==null){X.flags&=-257,xu(X,g,k,d,t),X.mode&1&&yu(d,M,t),t=X,T=M;var te=t.updateQueue;if(te===null){var ne=new Set;ne.add(T),t.updateQueue=ne}else te.add(T);break e}else{if((t&1)===0){yu(d,M,t),kl();break e}T=Error(o(426))}}else if(je&&k.mode&1){var De=vu(g);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),xu(De,g,k,d,t),js(Wr(T,k));break e}}d=T=Wr(T,k),Ge!==4&&(Ge=2),Di===null?Di=[d]:Di.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var R=gu(d,T,t);Wd(d,R);break e;case 1:k=T;var P=d.type,N=d.stateNode;if((d.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Dn===null||!Dn.has(N)))){d.flags|=65536,t&=-t,d.lanes|=t;var V=mu(d,k,t);Wd(d,V);break e}}d=d.return}while(d!==null)}Ku(r)}catch(ie){t=ie,Be===r&&r!==null&&(Be=r=r.return);continue}break}while(!0)}function Qu(){var e=ta.current;return ta.current=Yo,e===null?Yo:e}function kl(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),$e===null||(lr&268435455)===0&&(na&268435455)===0||Un($e,Ke)}function la(e,t){var r=ke;ke|=2;var a=Qu();($e!==e||Ke!==t)&&(yn=null,dr(e,t));do try{Pm();break}catch(l){qu(e,l)}while(!0);if(zs(),ke=r,ta.current=a,Be!==null)throw Error(o(261));return $e=null,Ke=0,Ge}function Pm(){for(;Be!==null;)Yu(Be)}function Am(){for(;Be!==null&&!Zf();)Yu(Be)}function Yu(e){var t=Zu(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Ku(e):Be=t,hl.current=null}function Ku(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=bm(r,t,wt),r!==null){Be=r;return}}else{if(r=wm(r,t),r!==null){r.flags&=32767,Be=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ge===0&&(Ge=5)}function ur(e,t,r){var a=Pe,l=Nt.transition;try{Nt.transition=null,Pe=1,Im(e,t,r,a)}finally{Nt.transition=l,Pe=a}return null}function Im(e,t,r,a){do $r();while(On!==null);if((ke&6)!==0)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(cg(e,d),e===$e&&(Be=$e=null,Ke=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ia||(ia=!0,ep(po,function(){return $r(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=Nt.transition,Nt.transition=null;var g=Pe;Pe=1;var k=ke;ke|=4,hl.current=null,Cm(e,r),Bu(r,e),Yg(ks),xo=!!ws,ks=ws=null,e.current=r,Sm(r),eg(),ke=k,Pe=g,Nt.transition=d}else e.current=r;if(ia&&(ia=!1,On=e,oa=l),d=e.pendingLanes,d===0&&(Dn=null),rg(r.stateNode),ft(e,Le()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(ra)throw ra=!1,e=ml,ml=null,e;return(oa&1)!==0&&e.tag!==0&&$r(),d=e.pendingLanes,(d&1)!==0?e===yl?Oi++:(Oi=0,yl=e):Oi=0,Fn(),null}function $r(){if(On!==null){var e=Dc(oa),t=Nt.transition,r=Pe;try{if(Nt.transition=null,Pe=16>e?16:e,On===null)var a=!1;else{if(e=On,On=null,oa=0,(ke&6)!==0)throw Error(o(331));var l=ke;for(ke|=4,ee=e.current;ee!==null;){var d=ee,g=d.child;if((ee.flags&16)!==0){var k=d.deletions;if(k!==null){for(var T=0;T<k.length;T++){var M=k[T];for(ee=M;ee!==null;){var U=ee;switch(U.tag){case 0:case 11:case 15:_i(8,U,d)}var W=U.child;if(W!==null)W.return=U,ee=W;else for(;ee!==null;){U=ee;var B=U.sibling,X=U.return;if(zu(U),U===M){ee=null;break}if(B!==null){B.return=X,ee=B;break}ee=X}}}var te=d.alternate;if(te!==null){var ne=te.child;if(ne!==null){te.child=null;do{var De=ne.sibling;ne.sibling=null,ne=De}while(ne!==null)}}ee=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,ee=g;else e:for(;ee!==null;){if(d=ee,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:_i(9,d,d.return)}var R=d.sibling;if(R!==null){R.return=d.return,ee=R;break e}ee=d.return}}var P=e.current;for(ee=P;ee!==null;){g=ee;var N=g.child;if((g.subtreeFlags&2064)!==0&&N!==null)N.return=g,ee=N;else e:for(g=P;ee!==null;){if(k=ee,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ea(9,k)}}catch(ie){_e(k,k.return,ie)}if(k===g){ee=null;break e}var V=k.sibling;if(V!==null){V.return=k.return,ee=V;break e}ee=k.return}}if(ke=l,Fn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ho,e)}catch{}a=!0}return a}finally{Pe=r,Nt.transition=t}}return!1}function Xu(e,t,r){t=Wr(r,t),t=gu(e,t,1),e=_n(e,t,1),t=ot(),e!==null&&(ci(e,1,t),ft(e,t))}function _e(e,t,r){if(e.tag===3)Xu(e,e,r);else for(;t!==null;){if(t.tag===3){Xu(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dn===null||!Dn.has(a))){e=Wr(r,e),e=mu(t,e,1),t=_n(t,e,1),e=ot(),t!==null&&(ci(t,1,e),ft(t,e));break}}t=t.return}}function Rm(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(Ke&r)===r&&(Ge===4||Ge===3&&(Ke&130023424)===Ke&&500>Le()-gl?dr(e,0):fl|=r),ft(e,t)}function Ju(e,t){t===0&&((e.mode&1)===0?t=1:(t=go,go<<=1,(go&130023424)===0&&(go=4194304)));var r=ot();e=fn(e,t),e!==null&&(ci(e,t,r),ft(e,r))}function Nm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ju(e,r)}function Mm(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Ju(e,r)}var Zu;Zu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)pt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return pt=!1,xm(e,t,r);pt=(e.flags&131072)!==0}else pt=!1,je&&(t.flags&1048576)!==0&&Md(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Jo(e,t),e=t.pendingProps;var l=Fr(t,Xe.current);Br(t,r),l=$s(null,t,a,e,l,r);var d=qs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(a)?(d=!0,Fo(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Os(t),l.updater=Ko,t.stateNode=l,l._reactInternals=t,Zs(t,a,e,r),t=rl(null,t,a,!0,d,r)):(t.tag=0,je&&d&&Is(t),it(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Fm(a),e=Dt(a,e),l){case 0:t=nl(null,t,a,e,r);break e;case 1:t=Tu(null,t,a,e,r);break e;case 11:t=bu(null,t,a,e,r);break e;case 14:t=wu(null,t,a,Dt(a.type,e),r);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Dt(a,l),nl(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Dt(a,l),Tu(e,t,a,l,r);case 3:e:{if(Eu(t),e===null)throw Error(o(387));a=t.pendingProps,d=t.memoizedState,l=d.element,Ud(e,t),Go(t,a,null,r);var g=t.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=Wr(Error(o(423)),t),t=Pu(e,t,a,r,l);break e}else if(a!==l){l=Wr(Error(o(424)),t),t=Pu(e,t,a,r,l);break e}else for(bt=Nn(t.stateNode.containerInfo.firstChild),xt=t,je=!0,Lt=null,r=Od(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),a===l){t=mn(e,t,r);break e}it(e,t,a,r)}t=t.child}return t;case 5:return Hd(t),e===null&&Ms(t),a=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,g=l.children,Cs(a,l)?g=null:d!==null&&Cs(a,d)&&(t.flags|=32),Su(e,t),it(e,t,g,r),t.child;case 6:return e===null&&Ms(t),null;case 13:return Au(e,t,r);case 4:return Bs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Dr(t,null,a,r):it(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Dt(a,l),bu(e,t,a,l,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,d=t.memoizedProps,g=l.value,Ie(Bo,a._currentValue),a._currentValue=g,d!==null)if(_t(d.value,g)){if(d.children===l.children&&!dt.current){t=mn(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var k=d.dependencies;if(k!==null){g=d.child;for(var T=k.firstContext;T!==null;){if(T.context===a){if(d.tag===1){T=gn(-1,r&-r),T.tag=2;var M=d.updateQueue;if(M!==null){M=M.shared;var U=M.pending;U===null?T.next=T:(T.next=U.next,U.next=T),M.pending=T}}d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),Ls(d.return,r,t),k.lanes|=r;break}T=T.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(o(341));g.lanes|=r,k=g.alternate,k!==null&&(k.lanes|=r),Ls(g,r,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}it(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,Br(t,r),l=It(l),a=a(l),t.flags|=1,it(e,t,a,r),t.child;case 14:return a=t.type,l=Dt(a,t.pendingProps),l=Dt(a.type,l),wu(e,t,a,l,r);case 15:return ku(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Dt(a,l),Jo(e,t),t.tag=1,ut(a)?(e=!0,Fo(t)):e=!1,Br(t,r),hu(t,a,l),Zs(t,a,l,r),rl(null,t,a,!0,e,r);case 19:return Ru(e,t,r);case 22:return Cu(e,t,r)}throw Error(o(156,t.tag))};function ep(e,t){return jc(e,t)}function jm(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,a){return new jm(e,t,r,a)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===ge)return 14}return 2}function Wn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ca(e,t,r,a,l,d){var g=2;if(a=e,typeof e=="function")Cl(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case Y:return pr(r.children,l,d,t);case de:g=8,l|=8;break;case me:return e=Mt(12,r,t,l|2),e.elementType=me,e.lanes=d,e;case fe:return e=Mt(13,r,t,l),e.elementType=fe,e.lanes=d,e;case Q:return e=Mt(19,r,t,l),e.elementType=Q,e.lanes=d,e;case re:return da(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case he:g=10;break e;case xe:g=9;break e;case J:g=11;break e;case ge:g=14;break e;case oe:g=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Mt(g,r,t,l),t.elementType=e,t.type=a,t.lanes=d,t}function pr(e,t,r,a){return e=Mt(7,e,a,t),e.lanes=r,e}function da(e,t,r,a){return e=Mt(22,e,a,t),e.elementType=re,e.lanes=r,e.stateNode={isHidden:!1},e}function Sl(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Tl(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zm(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function El(e,t,r,a,l,d,g,k,T){return e=new zm(e,t,r,k,T),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Mt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Os(d),e}function _m(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function tp(e){if(!e)return jn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(ut(r))return Id(e,r,t)}return t}function np(e,t,r,a,l,d,g,k,T){return e=El(r,a,!0,e,l,d,g,k,T),e.context=tp(null),r=e.current,a=ot(),l=Bn(r),d=gn(a,l),d.callback=t??null,_n(r,d,l),e.current.lanes=l,ci(e,l,a),ft(e,a),e}function ua(e,t,r,a){var l=t.current,d=ot(),g=Bn(l);return r=tp(r),t.context===null?t.context=r:t.pendingContext=r,t=gn(d,g),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=_n(l,t,g),e!==null&&(Ut(e,l,g,d),Wo(e,l,g)),g}function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Pl(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function Lm(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Al(e){this._internalRoot=e}ha.prototype.render=Al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ua(e,t,null,null)},ha.prototype.unmount=Al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){ua(null,e,null,null)}),t[dn]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&Hc(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function op(){}function Dm(e,t,r,a,l){if(l){if(typeof a=="function"){var d=a;a=function(){var M=pa(g);d.call(M)}}var g=np(t,a,e,0,null,!1,!1,"",op);return e._reactRootContainer=g,e[dn]=g.current,Ci(e.nodeType===8?e.parentNode:e),cr(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var k=a;a=function(){var M=pa(T);k.call(M)}}var T=El(e,0,!1,null,null,!1,!1,"",op);return e._reactRootContainer=T,e[dn]=T.current,Ci(e.nodeType===8?e.parentNode:e),cr(function(){ua(t,T,r,a)}),T}function ga(e,t,r,a,l){var d=r._reactRootContainer;if(d){var g=d;if(typeof l=="function"){var k=l;l=function(){var T=pa(g);k.call(T)}}ua(t,g,e,l)}else g=Dm(r,t,e,l,a);return pa(g)}Oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=li(t.pendingLanes);r!==0&&(Za(t,r|1),ft(t,Le()),(ke&6)===0&&(Vr=Le()+500,Fn()))}break;case 13:cr(function(){var a=fn(e,1);if(a!==null){var l=ot();Ut(a,e,1,l)}}),Pl(e,1)}},es=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var r=ot();Ut(t,e,134217728,r)}Pl(e,134217728)}},Bc=function(e){if(e.tag===13){var t=Bn(e),r=fn(e,t);if(r!==null){var a=ot();Ut(r,e,t,a)}Pl(e,t)}},Uc=function(){return Pe},Wc=function(e,t){var r=Pe;try{return Pe=e,t()}finally{Pe=r}},Sr=function(e,t,r){switch(t){case"input":if(ri(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=Mo(a);if(!l)throw Error(o(90));kn(a),ri(a,l)}}}break;case"textarea":ro(e,r);break;case"select":t=r.value,t!=null&&Et(e,!!r.multiple,t,!1)}},Te=bl,Ae=cr;var Om={usingClientEntryPoint:!1,Events:[Ei,Mr,Mo,lo,pe,bl]},Bi={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{ho=ma.inject(Bm),Zt=ma}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om,gt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(o(200));return _m(e,t,null,r)},gt.createRoot=function(e,t){if(!Il(e))throw Error(o(299));var r=!1,a="",l=ip;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=El(e,1,!1,null,null,r,!1,a,l),e[dn]=t.current,Ci(e.nodeType===8?e.parentNode:e),new Al(t)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Nc(t),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return cr(e)},gt.hydrate=function(e,t,r){if(!fa(t))throw Error(o(200));return ga(null,e,t,!0,r)},gt.hydrateRoot=function(e,t,r){if(!Il(e))throw Error(o(405));var a=r!=null&&r.hydratedSources||null,l=!1,d="",g=ip;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),t=np(t,null,e,1,r??null,l,!1,d,g),e[dn]=t.current,Ci(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new ha(t)},gt.render=function(e,t,r){if(!fa(t))throw Error(o(200));return ga(null,e,t,!1,r)},gt.unmountComponentAtNode=function(e){if(!fa(e))throw Error(o(40));return e._reactRootContainer?(cr(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1},gt.unstable_batchedUpdates=bl,gt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!fa(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ga(e,t,r,!1,a)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var hp;function eh(){if(hp)return Ml.exports;hp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Ml.exports=Qm(),Ml.exports}var fp;function Ym(){if(fp)return ya;fp=1;var n=eh();return ya.createRoot=n.createRoot,ya.hydrateRoot=n.hydrateRoot,ya}var Km=Ym(),w=ac();const $=Zp(w),th=Wm({__proto__:null,default:$},[w]),Xm=1,Jm=1e6;let zl=0;function Zm(){return zl=(zl+1)%Number.MAX_SAFE_INTEGER,zl.toString()}const _l=new Map,gp=n=>{if(_l.has(n))return;const i=setTimeout(()=>{_l.delete(n),Hi({type:"REMOVE_TOAST",toastId:n})},Jm);_l.set(n,i)},e0=(n,i)=>{switch(i.type){case"ADD_TOAST":return{...n,toasts:[i.toast,...n.toasts].slice(0,Xm)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(o=>o.id===i.toast.id?{...o,...i.toast}:o)};case"DISMISS_TOAST":{const{toastId:o}=i;return o?gp(o):n.toasts.forEach(s=>{gp(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===o||o===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return i.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(o=>o.id!==i.toastId)}}},Sa=[];let Ta={toasts:[]};function Hi(n){Ta=e0(Ta,n),Sa.forEach(i=>{i(Ta)})}function t0({...n}){const i=Zm(),o=c=>Hi({type:"UPDATE_TOAST",toast:{...c,id:i}}),s=()=>Hi({type:"DISMISS_TOAST",toastId:i});return Hi({type:"ADD_TOAST",toast:{...n,id:i,open:!0,onOpenChange:c=>{c||s()}}}),{id:i,dismiss:s,update:o}}function n0(){const[n,i]=w.useState(Ta);return w.useEffect(()=>(Sa.push(i),()=>{const o=Sa.indexOf(i);o>-1&&Sa.splice(o,1)}),[n]),{...n,toast:t0,dismiss:o=>Hi({type:"DISMISS_TOAST",toastId:o})}}var za=eh();const nh=Zp(za);function He(n,i,{checkForDefaultPrevented:o=!0}={}){return function(c){if(n?.(c),o===!1||!c.defaultPrevented)return i?.(c)}}function mp(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function rh(...n){return i=>{let o=!1;const s=n.map(c=>{const u=mp(c,i);return!o&&typeof u=="function"&&(o=!0),u});if(o)return()=>{for(let c=0;c<s.length;c++){const u=s[c];typeof u=="function"?u():mp(n[c],null)}}}}function Ht(...n){return w.useCallback(rh(...n),n)}function _a(n,i=[]){let o=[];function s(u,h){const f=w.createContext(h),m=o.length;o=[...o,h];const y=b=>{const{scope:E,children:x,...I}=b,S=E?.[n]?.[m]||f,C=w.useMemo(()=>I,Object.values(I));return p.jsx(S.Provider,{value:C,children:x})};y.displayName=u+"Provider";function v(b,E){const x=E?.[n]?.[m]||f,I=w.useContext(x);if(I)return I;if(h!==void 0)return h;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[y,v]}const c=()=>{const u=o.map(h=>w.createContext(h));return function(f){const m=f?.[n]||u;return w.useMemo(()=>({[`__scope${n}`]:{...f,[n]:m}}),[f,m])}};return c.scopeName=n,[s,r0(c,...i)]}function r0(...n){const i=n[0];if(n.length===1)return i;const o=()=>{const s=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(u){const h=s.reduce((f,{useScope:m,scopeName:y})=>{const b=m(u)[`__scope${y}`];return{...f,...b}},{});return w.useMemo(()=>({[`__scope${i.scopeName}`]:h}),[h])}};return o.scopeName=i.scopeName,o}function Aa(n){const i=o0(n),o=w.forwardRef((s,c)=>{const{children:u,...h}=s,f=w.Children.toArray(u),m=f.find(s0);if(m){const y=m.props.children,v=f.map(b=>b===m?w.Children.count(y)>1?w.Children.only(null):w.isValidElement(y)?y.props.children:null:b);return p.jsx(i,{...h,ref:c,children:w.isValidElement(y)?w.cloneElement(y,void 0,v):null})}return p.jsx(i,{...h,ref:c,children:u})});return o.displayName=`${n}.Slot`,o}var i0=Aa("Slot");function o0(n){const i=w.forwardRef((o,s)=>{const{children:c,...u}=o;if(w.isValidElement(c)){const h=c0(c),f=l0(u,c.props);return c.type!==w.Fragment&&(f.ref=s?rh(s,h):h),w.cloneElement(c,f)}return w.Children.count(c)>1?w.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var ih=Symbol("radix.slottable");function a0(n){const i=({children:o})=>p.jsx(p.Fragment,{children:o});return i.displayName=`${n}.Slottable`,i.__radixId=ih,i}function s0(n){return w.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===ih}function l0(n,i){const o={...i};for(const s in i){const c=n[s],u=i[s];/^on[A-Z]/.test(s)?c&&u?o[s]=(...f)=>{const m=u(...f);return c(...f),m}:c&&(o[s]=c):s==="style"?o[s]={...c,...u}:s==="className"&&(o[s]=[c,u].filter(Boolean).join(" "))}return{...n,...o}}function c0(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=i&&"isReactWarning"in i&&i.isReactWarning;return o?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=i&&"isReactWarning"in i&&i.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}function d0(n){const i=n+"CollectionProvider",[o,s]=_a(i),[c,u]=o(i,{collectionRef:{current:null},itemMap:new Map}),h=S=>{const{scope:C,children:j}=S,F=$.useRef(null),_=$.useRef(new Map).current;return p.jsx(c,{scope:C,itemMap:_,collectionRef:F,children:j})};h.displayName=i;const f=n+"CollectionSlot",m=Aa(f),y=$.forwardRef((S,C)=>{const{scope:j,children:F}=S,_=u(f,j),O=Ht(C,_.collectionRef);return p.jsx(m,{ref:O,children:F})});y.displayName=f;const v=n+"CollectionItemSlot",b="data-radix-collection-item",E=Aa(v),x=$.forwardRef((S,C)=>{const{scope:j,children:F,..._}=S,O=$.useRef(null),H=Ht(C,O),q=u(v,j);return $.useEffect(()=>(q.itemMap.set(O,{ref:O,..._}),()=>void q.itemMap.delete(O))),p.jsx(E,{[b]:"",ref:H,children:F})});x.displayName=v;function I(S){const C=u(n+"CollectionConsumer",S);return $.useCallback(()=>{const F=C.collectionRef.current;if(!F)return[];const _=Array.from(F.querySelectorAll(`[${b}]`));return Array.from(C.itemMap.values()).sort((q,Y)=>_.indexOf(q.ref.current)-_.indexOf(Y.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:h,Slot:y,ItemSlot:x},I,s]}var u0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],yt=u0.reduce((n,i)=>{const o=Aa(`Primitive.${i}`),s=w.forwardRef((c,u)=>{const{asChild:h,...f}=c,m=h?o:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(m,{...f,ref:u})});return s.displayName=`Primitive.${i}`,{...n,[i]:s}},{});function oh(n,i){n&&za.flushSync(()=>n.dispatchEvent(i))}function Qn(n){const i=w.useRef(n);return w.useEffect(()=>{i.current=n}),w.useMemo(()=>(...o)=>i.current?.(...o),[])}function p0(n,i=globalThis?.document){const o=Qn(n);w.useEffect(()=>{const s=c=>{c.key==="Escape"&&o(c)};return i.addEventListener("keydown",s,{capture:!0}),()=>i.removeEventListener("keydown",s,{capture:!0})},[o,i])}var h0="DismissableLayer",Gl="dismissableLayer.update",f0="dismissableLayer.pointerDownOutside",g0="dismissableLayer.focusOutside",yp,ah=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),sc=w.forwardRef((n,i)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:h,onDismiss:f,...m}=n,y=w.useContext(ah),[v,b]=w.useState(null),E=v?.ownerDocument??globalThis?.document,[,x]=w.useState({}),I=Ht(i,Y=>b(Y)),S=Array.from(y.layers),[C]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),j=S.indexOf(C),F=v?S.indexOf(v):-1,_=y.layersWithOutsidePointerEventsDisabled.size>0,O=F>=j,H=y0(Y=>{const de=Y.target,me=[...y.branches].some(he=>he.contains(de));!O||me||(c?.(Y),h?.(Y),Y.defaultPrevented||f?.())},E),q=v0(Y=>{const de=Y.target;[...y.branches].some(he=>he.contains(de))||(u?.(Y),h?.(Y),Y.defaultPrevented||f?.())},E);return p0(Y=>{F===y.layers.size-1&&(s?.(Y),!Y.defaultPrevented&&f&&(Y.preventDefault(),f()))},E),w.useEffect(()=>{if(v)return o&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(yp=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(v)),y.layers.add(v),vp(),()=>{o&&y.layersWithOutsidePointerEventsDisabled.size===1&&(E.body.style.pointerEvents=yp)}},[v,E,o,y]),w.useEffect(()=>()=>{v&&(y.layers.delete(v),y.layersWithOutsidePointerEventsDisabled.delete(v),vp())},[v,y]),w.useEffect(()=>{const Y=()=>x({});return document.addEventListener(Gl,Y),()=>document.removeEventListener(Gl,Y)},[]),p.jsx(yt.div,{...m,ref:I,style:{pointerEvents:_?O?"auto":"none":void 0,...n.style},onFocusCapture:He(n.onFocusCapture,q.onFocusCapture),onBlurCapture:He(n.onBlurCapture,q.onBlurCapture),onPointerDownCapture:He(n.onPointerDownCapture,H.onPointerDownCapture)})});sc.displayName=h0;var m0="DismissableLayerBranch",sh=w.forwardRef((n,i)=>{const o=w.useContext(ah),s=w.useRef(null),c=Ht(i,s);return w.useEffect(()=>{const u=s.current;if(u)return o.branches.add(u),()=>{o.branches.delete(u)}},[o.branches]),p.jsx(yt.div,{...n,ref:c})});sh.displayName=m0;function y0(n,i=globalThis?.document){const o=Qn(n),s=w.useRef(!1),c=w.useRef(()=>{});return w.useEffect(()=>{const u=f=>{if(f.target&&!s.current){let m=function(){lh(f0,o,y,{discrete:!0})};const y={originalEvent:f};f.pointerType==="touch"?(i.removeEventListener("click",c.current),c.current=m,i.addEventListener("click",c.current,{once:!0})):m()}else i.removeEventListener("click",c.current);s.current=!1},h=window.setTimeout(()=>{i.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(h),i.removeEventListener("pointerdown",u),i.removeEventListener("click",c.current)}},[i,o]),{onPointerDownCapture:()=>s.current=!0}}function v0(n,i=globalThis?.document){const o=Qn(n),s=w.useRef(!1);return w.useEffect(()=>{const c=u=>{u.target&&!s.current&&lh(g0,o,{originalEvent:u},{discrete:!1})};return i.addEventListener("focusin",c),()=>i.removeEventListener("focusin",c)},[i,o]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function vp(){const n=new CustomEvent(Gl);document.dispatchEvent(n)}function lh(n,i,o,{discrete:s}){const c=o.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:o});i&&c.addEventListener(n,i,{once:!0}),s?oh(c,u):c.dispatchEvent(u)}var x0=sc,b0=sh,Yn=globalThis?.document?w.useLayoutEffect:()=>{},w0="Portal",ch=w.forwardRef((n,i)=>{const{container:o,...s}=n,[c,u]=w.useState(!1);Yn(()=>u(!0),[]);const h=o||c&&globalThis?.document?.body;return h?nh.createPortal(p.jsx(yt.div,{...s,ref:i}),h):null});ch.displayName=w0;function k0(n,i){return w.useReducer((o,s)=>i[o][s]??o,n)}var lc=n=>{const{present:i,children:o}=n,s=C0(i),c=typeof o=="function"?o({present:s.isPresent}):w.Children.only(o),u=Ht(s.ref,S0(c));return typeof o=="function"||s.isPresent?w.cloneElement(c,{ref:u}):null};lc.displayName="Presence";function C0(n){const[i,o]=w.useState(),s=w.useRef(null),c=w.useRef(n),u=w.useRef("none"),h=n?"mounted":"unmounted",[f,m]=k0(h,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const y=va(s.current);u.current=f==="mounted"?y:"none"},[f]),Yn(()=>{const y=s.current,v=c.current;if(v!==n){const E=u.current,x=va(y);n?m("MOUNT"):x==="none"||y?.display==="none"?m("UNMOUNT"):m(v&&E!==x?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,m]),Yn(()=>{if(i){let y;const v=i.ownerDocument.defaultView??window,b=x=>{const S=va(s.current).includes(x.animationName);if(x.target===i&&S&&(m("ANIMATION_END"),!c.current)){const C=i.style.animationFillMode;i.style.animationFillMode="forwards",y=v.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=C)})}},E=x=>{x.target===i&&(u.current=va(s.current))};return i.addEventListener("animationstart",E),i.addEventListener("animationcancel",b),i.addEventListener("animationend",b),()=>{v.clearTimeout(y),i.removeEventListener("animationstart",E),i.removeEventListener("animationcancel",b),i.removeEventListener("animationend",b)}}else m("ANIMATION_END")},[i,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:w.useCallback(y=>{s.current=y?getComputedStyle(y):null,o(y)},[])}}function va(n){return n?.animationName||"none"}function S0(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=i&&"isReactWarning"in i&&i.isReactWarning;return o?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=i&&"isReactWarning"in i&&i.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var T0=th[" useInsertionEffect ".trim().toString()]||Yn;function E0({prop:n,defaultProp:i,onChange:o=()=>{},caller:s}){const[c,u,h]=P0({defaultProp:i,onChange:o}),f=n!==void 0,m=f?n:c;{const v=w.useRef(n!==void 0);w.useEffect(()=>{const b=v.current;b!==f&&console.warn(`${s} is changing from ${b?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=f},[f,s])}const y=w.useCallback(v=>{if(f){const b=A0(v)?v(n):v;b!==n&&h.current?.(b)}else u(v)},[f,n,u,h]);return[m,y]}function P0({defaultProp:n,onChange:i}){const[o,s]=w.useState(n),c=w.useRef(o),u=w.useRef(i);return T0(()=>{u.current=i},[i]),w.useEffect(()=>{c.current!==o&&(u.current?.(o),c.current=o)},[o,c]),[o,s,u]}function A0(n){return typeof n=="function"}var I0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),R0="VisuallyHidden",La=w.forwardRef((n,i)=>p.jsx(yt.span,{...n,ref:i,style:{...I0,...n.style}}));La.displayName=R0;var N0=La,cc="ToastProvider",[dc,M0,j0]=d0("Toast"),[dh,Lb]=_a("Toast",[j0]),[F0,Da]=dh(cc),uh=n=>{const{__scopeToast:i,label:o="Notification",duration:s=5e3,swipeDirection:c="right",swipeThreshold:u=50,children:h}=n,[f,m]=w.useState(null),[y,v]=w.useState(0),b=w.useRef(!1),E=w.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${cc}\`. Expected non-empty \`string\`.`),p.jsx(dc.Provider,{scope:i,children:p.jsx(F0,{scope:i,label:o,duration:s,swipeDirection:c,swipeThreshold:u,toastCount:y,viewport:f,onViewportChange:m,onToastAdd:w.useCallback(()=>v(x=>x+1),[]),onToastRemove:w.useCallback(()=>v(x=>x-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:E,children:h})})};uh.displayName=cc;var ph="ToastViewport",z0=["F8"],Hl="toast.viewportPause",Vl="toast.viewportResume",hh=w.forwardRef((n,i)=>{const{__scopeToast:o,hotkey:s=z0,label:c="Notifications ({hotkey})",...u}=n,h=Da(ph,o),f=M0(o),m=w.useRef(null),y=w.useRef(null),v=w.useRef(null),b=w.useRef(null),E=Ht(i,b,h.onViewportChange),x=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),I=h.toastCount>0;w.useEffect(()=>{const C=j=>{s.length!==0&&s.every(_=>j[_]||j.code===_)&&b.current?.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[s]),w.useEffect(()=>{const C=m.current,j=b.current;if(I&&C&&j){const F=()=>{if(!h.isClosePausedRef.current){const q=new CustomEvent(Hl);j.dispatchEvent(q),h.isClosePausedRef.current=!0}},_=()=>{if(h.isClosePausedRef.current){const q=new CustomEvent(Vl);j.dispatchEvent(q),h.isClosePausedRef.current=!1}},O=q=>{!C.contains(q.relatedTarget)&&_()},H=()=>{C.contains(document.activeElement)||_()};return C.addEventListener("focusin",F),C.addEventListener("focusout",O),C.addEventListener("pointermove",F),C.addEventListener("pointerleave",H),window.addEventListener("blur",F),window.addEventListener("focus",_),()=>{C.removeEventListener("focusin",F),C.removeEventListener("focusout",O),C.removeEventListener("pointermove",F),C.removeEventListener("pointerleave",H),window.removeEventListener("blur",F),window.removeEventListener("focus",_)}}},[I,h.isClosePausedRef]);const S=w.useCallback(({tabbingDirection:C})=>{const F=f().map(_=>{const O=_.ref.current,H=[O,...Q0(O)];return C==="forwards"?H:H.reverse()});return(C==="forwards"?F.reverse():F).flat()},[f]);return w.useEffect(()=>{const C=b.current;if(C){const j=F=>{const _=F.altKey||F.ctrlKey||F.metaKey;if(F.key==="Tab"&&!_){const H=document.activeElement,q=F.shiftKey;if(F.target===C&&q){y.current?.focus();return}const me=S({tabbingDirection:q?"backwards":"forwards"}),he=me.findIndex(xe=>xe===H);Ll(me.slice(he+1))?F.preventDefault():q?y.current?.focus():v.current?.focus()}};return C.addEventListener("keydown",j),()=>C.removeEventListener("keydown",j)}},[f,S]),p.jsxs(b0,{ref:m,role:"region","aria-label":c.replace("{hotkey}",x),tabIndex:-1,style:{pointerEvents:I?void 0:"none"},children:[I&&p.jsx($l,{ref:y,onFocusFromOutsideViewport:()=>{const C=S({tabbingDirection:"forwards"});Ll(C)}}),p.jsx(dc.Slot,{scope:o,children:p.jsx(yt.ol,{tabIndex:-1,...u,ref:E})}),I&&p.jsx($l,{ref:v,onFocusFromOutsideViewport:()=>{const C=S({tabbingDirection:"backwards"});Ll(C)}})]})});hh.displayName=ph;var fh="ToastFocusProxy",$l=w.forwardRef((n,i)=>{const{__scopeToast:o,onFocusFromOutsideViewport:s,...c}=n,u=Da(fh,o);return p.jsx(La,{"aria-hidden":!0,tabIndex:0,...c,ref:i,style:{position:"fixed"},onFocus:h=>{const f=h.relatedTarget;!u.viewport?.contains(f)&&s()}})});$l.displayName=fh;var Xi="Toast",_0="toast.swipeStart",L0="toast.swipeMove",D0="toast.swipeCancel",O0="toast.swipeEnd",gh=w.forwardRef((n,i)=>{const{forceMount:o,open:s,defaultOpen:c,onOpenChange:u,...h}=n,[f,m]=E0({prop:s,defaultProp:c??!0,onChange:u,caller:Xi});return p.jsx(lc,{present:o||f,children:p.jsx(W0,{open:f,...h,ref:i,onClose:()=>m(!1),onPause:Qn(n.onPause),onResume:Qn(n.onResume),onSwipeStart:He(n.onSwipeStart,y=>{y.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:He(n.onSwipeMove,y=>{const{x:v,y:b}=y.detail.delta;y.currentTarget.setAttribute("data-swipe","move"),y.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${v}px`),y.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:He(n.onSwipeCancel,y=>{y.currentTarget.setAttribute("data-swipe","cancel"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),y.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:He(n.onSwipeEnd,y=>{const{x:v,y:b}=y.detail.delta;y.currentTarget.setAttribute("data-swipe","end"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),y.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${v}px`),y.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),m(!1)})})})});gh.displayName=Xi;var[B0,U0]=dh(Xi,{onClose(){}}),W0=w.forwardRef((n,i)=>{const{__scopeToast:o,type:s="foreground",duration:c,open:u,onClose:h,onEscapeKeyDown:f,onPause:m,onResume:y,onSwipeStart:v,onSwipeMove:b,onSwipeCancel:E,onSwipeEnd:x,...I}=n,S=Da(Xi,o),[C,j]=w.useState(null),F=Ht(i,Q=>j(Q)),_=w.useRef(null),O=w.useRef(null),H=c||S.duration,q=w.useRef(0),Y=w.useRef(H),de=w.useRef(0),{onToastAdd:me,onToastRemove:he}=S,xe=Qn(()=>{C?.contains(document.activeElement)&&S.viewport?.focus(),h()}),J=w.useCallback(Q=>{!Q||Q===1/0||(window.clearTimeout(de.current),q.current=new Date().getTime(),de.current=window.setTimeout(xe,Q))},[xe]);w.useEffect(()=>{const Q=S.viewport;if(Q){const ge=()=>{J(Y.current),y?.()},oe=()=>{const re=new Date().getTime()-q.current;Y.current=Y.current-re,window.clearTimeout(de.current),m?.()};return Q.addEventListener(Hl,oe),Q.addEventListener(Vl,ge),()=>{Q.removeEventListener(Hl,oe),Q.removeEventListener(Vl,ge)}}},[S.viewport,H,m,y,J]),w.useEffect(()=>{u&&!S.isClosePausedRef.current&&J(H)},[u,H,S.isClosePausedRef,J]),w.useEffect(()=>(me(),()=>he()),[me,he]);const fe=w.useMemo(()=>C?kh(C):null,[C]);return S.viewport?p.jsxs(p.Fragment,{children:[fe&&p.jsx(G0,{__scopeToast:o,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:fe}),p.jsx(B0,{scope:o,onClose:xe,children:za.createPortal(p.jsx(dc.ItemSlot,{scope:o,children:p.jsx(x0,{asChild:!0,onEscapeKeyDown:He(f,()=>{S.isFocusedToastEscapeKeyDownRef.current||xe(),S.isFocusedToastEscapeKeyDownRef.current=!1}),children:p.jsx(yt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":S.swipeDirection,...I,ref:F,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:He(n.onKeyDown,Q=>{Q.key==="Escape"&&(f?.(Q.nativeEvent),Q.nativeEvent.defaultPrevented||(S.isFocusedToastEscapeKeyDownRef.current=!0,xe()))}),onPointerDown:He(n.onPointerDown,Q=>{Q.button===0&&(_.current={x:Q.clientX,y:Q.clientY})}),onPointerMove:He(n.onPointerMove,Q=>{if(!_.current)return;const ge=Q.clientX-_.current.x,oe=Q.clientY-_.current.y,re=!!O.current,L=["left","right"].includes(S.swipeDirection),D=["left","up"].includes(S.swipeDirection)?Math.min:Math.max,G=L?D(0,ge):0,A=L?0:D(0,oe),z=Q.pointerType==="touch"?10:2,K={x:G,y:A},Z={originalEvent:Q,delta:K};re?(O.current=K,xa(L0,b,Z,{discrete:!1})):xp(K,S.swipeDirection,z)?(O.current=K,xa(_0,v,Z,{discrete:!1}),Q.target.setPointerCapture(Q.pointerId)):(Math.abs(ge)>z||Math.abs(oe)>z)&&(_.current=null)}),onPointerUp:He(n.onPointerUp,Q=>{const ge=O.current,oe=Q.target;if(oe.hasPointerCapture(Q.pointerId)&&oe.releasePointerCapture(Q.pointerId),O.current=null,_.current=null,ge){const re=Q.currentTarget,L={originalEvent:Q,delta:ge};xp(ge,S.swipeDirection,S.swipeThreshold)?xa(O0,x,L,{discrete:!0}):xa(D0,E,L,{discrete:!0}),re.addEventListener("click",D=>D.preventDefault(),{once:!0})}})})})}),S.viewport)})]}):null}),G0=n=>{const{__scopeToast:i,children:o,...s}=n,c=Da(Xi,i),[u,h]=w.useState(!1),[f,m]=w.useState(!1);return $0(()=>h(!0)),w.useEffect(()=>{const y=window.setTimeout(()=>m(!0),1e3);return()=>window.clearTimeout(y)},[]),f?null:p.jsx(ch,{asChild:!0,children:p.jsx(La,{...s,children:u&&p.jsxs(p.Fragment,{children:[c.label," ",o]})})})},H0="ToastTitle",mh=w.forwardRef((n,i)=>{const{__scopeToast:o,...s}=n;return p.jsx(yt.div,{...s,ref:i})});mh.displayName=H0;var V0="ToastDescription",yh=w.forwardRef((n,i)=>{const{__scopeToast:o,...s}=n;return p.jsx(yt.div,{...s,ref:i})});yh.displayName=V0;var vh="ToastAction",xh=w.forwardRef((n,i)=>{const{altText:o,...s}=n;return o.trim()?p.jsx(wh,{altText:o,asChild:!0,children:p.jsx(uc,{...s,ref:i})}):(console.error(`Invalid prop \`altText\` supplied to \`${vh}\`. Expected non-empty \`string\`.`),null)});xh.displayName=vh;var bh="ToastClose",uc=w.forwardRef((n,i)=>{const{__scopeToast:o,...s}=n,c=U0(bh,o);return p.jsx(wh,{asChild:!0,children:p.jsx(yt.button,{type:"button",...s,ref:i,onClick:He(n.onClick,c.onClose)})})});uc.displayName=bh;var wh=w.forwardRef((n,i)=>{const{__scopeToast:o,altText:s,...c}=n;return p.jsx(yt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...c,ref:i})});function kh(n){const i=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&i.push(s.textContent),q0(s)){const c=s.ariaHidden||s.hidden||s.style.display==="none",u=s.dataset.radixToastAnnounceExclude==="";if(!c)if(u){const h=s.dataset.radixToastAnnounceAlt;h&&i.push(h)}else i.push(...kh(s))}}),i}function xa(n,i,o,{discrete:s}){const c=o.originalEvent.currentTarget,u=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:o});i&&c.addEventListener(n,i,{once:!0}),s?oh(c,u):c.dispatchEvent(u)}var xp=(n,i,o=0)=>{const s=Math.abs(n.x),c=Math.abs(n.y),u=s>c;return i==="left"||i==="right"?u&&s>o:!u&&c>o};function $0(n=()=>{}){const i=Qn(n);Yn(()=>{let o=0,s=0;return o=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(i)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(s)}},[i])}function q0(n){return n.nodeType===n.ELEMENT_NODE}function Q0(n){const i=[],o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const c=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||c?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)i.push(o.currentNode);return i}function Ll(n){const i=document.activeElement;return n.some(o=>o===i?!0:(o.focus(),document.activeElement!==i))}var Y0=uh,Ch=hh,Sh=gh,Th=mh,Eh=yh,Ph=xh,Ah=uc;function Ih(n){var i,o,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(o=Ih(n[i]))&&(s&&(s+=" "),s+=o)}else for(o in n)n[o]&&(s&&(s+=" "),s+=o);return s}function Rh(){for(var n,i,o=0,s="",c=arguments.length;o<c;o++)(n=arguments[o])&&(i=Ih(n))&&(s&&(s+=" "),s+=i);return s}const bp=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,wp=Rh,pc=(n,i)=>o=>{var s;if(i?.variants==null)return wp(n,o?.class,o?.className);const{variants:c,defaultVariants:u}=i,h=Object.keys(c).map(y=>{const v=o?.[y],b=u?.[y];if(v===null)return null;const E=bp(v)||bp(b);return c[y][E]}),f=o&&Object.entries(o).reduce((y,v)=>{let[b,E]=v;return E===void 0||(y[b]=E),y},{}),m=i==null||(s=i.compoundVariants)===null||s===void 0?void 0:s.reduce((y,v)=>{let{class:b,className:E,...x}=v;return Object.entries(x).every(I=>{let[S,C]=I;return Array.isArray(C)?C.includes({...u,...f}[S]):{...u,...f}[S]===C})?[...y,b,E]:y},[]);return wp(n,h,m,o?.class,o?.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nh=(...n)=>n.filter((i,o,s)=>!!i&&i.trim()!==""&&s.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=w.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:u,iconNode:h,...f},m)=>w.createElement("svg",{ref:m,...X0,width:i,height:i,stroke:n,strokeWidth:s?Number(o)*24/Number(i):o,className:Nh("lucide",c),...f},[...h.map(([y,v])=>w.createElement(y,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(n,i)=>{const o=w.forwardRef(({className:s,...c},u)=>w.createElement(J0,{ref:u,iconNode:i,className:Nh(`lucide-${K0(n)}`,s),...c}));return o.displayName=`${n}`,o};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Ee("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=Ee("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=Ee("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Ee("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Ee("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=Ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Ee("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Ee("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Ee("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Ee("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Ee("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Ee("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Ee("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Ee("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Ee("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Ee("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=Ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Ee("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Ee("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=Ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=Ee("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Ee("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Ee("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),fc="-",x1=n=>{const i=w1(n),{conflictingClassGroups:o,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:h=>{const f=h.split(fc);return f[0]===""&&f.length!==1&&f.shift(),Oh(f,i)||b1(h)},getConflictingClassGroupIds:(h,f)=>{const m=o[h]||[];return f&&s[h]?[...m,...s[h]]:m}}},Oh=(n,i)=>{if(n.length===0)return i.classGroupId;const o=n[0],s=i.nextPart.get(o),c=s?Oh(n.slice(1),s):void 0;if(c)return c;if(i.validators.length===0)return;const u=n.join(fc);return i.validators.find(({validator:h})=>h(u))?.classGroupId},kp=/^\[(.+)\]$/,b1=n=>{if(kp.test(n)){const i=kp.exec(n)[1],o=i?.substring(0,i.indexOf(":"));if(o)return"arbitrary.."+o}},w1=n=>{const{theme:i,prefix:o}=n,s={nextPart:new Map,validators:[]};return C1(Object.entries(n.classGroups),o).forEach(([u,h])=>{Ql(h,s,u,i)}),s},Ql=(n,i,o,s)=>{n.forEach(c=>{if(typeof c=="string"){const u=c===""?i:Cp(i,c);u.classGroupId=o;return}if(typeof c=="function"){if(k1(c)){Ql(c(s),i,o,s);return}i.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(([u,h])=>{Ql(h,Cp(i,u),o,s)})})},Cp=(n,i)=>{let o=n;return i.split(fc).forEach(s=>{o.nextPart.has(s)||o.nextPart.set(s,{nextPart:new Map,validators:[]}),o=o.nextPart.get(s)}),o},k1=n=>n.isThemeGetter,C1=(n,i)=>i?n.map(([o,s])=>{const c=s.map(u=>typeof u=="string"?i+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([h,f])=>[i+h,f])):u);return[o,c]}):n,S1=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,o=new Map,s=new Map;const c=(u,h)=>{o.set(u,h),i++,i>n&&(i=0,s=o,o=new Map)};return{get(u){let h=o.get(u);if(h!==void 0)return h;if((h=s.get(u))!==void 0)return c(u,h),h},set(u,h){o.has(u)?o.set(u,h):c(u,h)}}},Bh="!",T1=n=>{const{separator:i,experimentalParseClassName:o}=n,s=i.length===1,c=i[0],u=i.length,h=f=>{const m=[];let y=0,v=0,b;for(let C=0;C<f.length;C++){let j=f[C];if(y===0){if(j===c&&(s||f.slice(C,C+u)===i)){m.push(f.slice(v,C)),v=C+u;continue}if(j==="/"){b=C;continue}}j==="["?y++:j==="]"&&y--}const E=m.length===0?f:f.substring(v),x=E.startsWith(Bh),I=x?E.substring(1):E,S=b&&b>v?b-v:void 0;return{modifiers:m,hasImportantModifier:x,baseClassName:I,maybePostfixModifierPosition:S}};return o?f=>o({className:f,parseClassName:h}):h},E1=n=>{if(n.length<=1)return n;const i=[];let o=[];return n.forEach(s=>{s[0]==="["?(i.push(...o.sort(),s),o=[]):o.push(s)}),i.push(...o.sort()),i},P1=n=>({cache:S1(n.cacheSize),parseClassName:T1(n),...x1(n)}),A1=/\s+/,I1=(n,i)=>{const{parseClassName:o,getClassGroupId:s,getConflictingClassGroupIds:c}=i,u=[],h=n.trim().split(A1);let f="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{modifiers:v,hasImportantModifier:b,baseClassName:E,maybePostfixModifierPosition:x}=o(y);let I=!!x,S=s(I?E.substring(0,x):E);if(!S){if(!I){f=y+(f.length>0?" "+f:f);continue}if(S=s(E),!S){f=y+(f.length>0?" "+f:f);continue}I=!1}const C=E1(v).join(":"),j=b?C+Bh:C,F=j+S;if(u.includes(F))continue;u.push(F);const _=c(S,I);for(let O=0;O<_.length;++O){const H=_[O];u.push(j+H)}f=y+(f.length>0?" "+f:f)}return f};function R1(){let n=0,i,o,s="";for(;n<arguments.length;)(i=arguments[n++])&&(o=Uh(i))&&(s&&(s+=" "),s+=o);return s}const Uh=n=>{if(typeof n=="string")return n;let i,o="";for(let s=0;s<n.length;s++)n[s]&&(i=Uh(n[s]))&&(o&&(o+=" "),o+=i);return o};function N1(n,...i){let o,s,c,u=h;function h(m){const y=i.reduce((v,b)=>b(v),n());return o=P1(y),s=o.cache.get,c=o.cache.set,u=f,f(m)}function f(m){const y=s(m);if(y)return y;const v=I1(m,o);return c(m,v),v}return function(){return u(R1.apply(null,arguments))}}const Me=n=>{const i=o=>o[n]||[];return i.isThemeGetter=!0,i},Wh=/^\[(?:([a-z-]+):)?(.+)\]$/i,M1=/^\d+\/\d+$/,j1=new Set(["px","full","screen"]),F1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,L1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,D1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vn=n=>Qr(n)||j1.has(n)||M1.test(n),Hn=n=>Jr(n,"length",$1),Qr=n=>!!n&&!Number.isNaN(Number(n)),Dl=n=>Jr(n,"number",Qr),Wi=n=>!!n&&Number.isInteger(Number(n)),O1=n=>n.endsWith("%")&&Qr(n.slice(0,-1)),ve=n=>Wh.test(n),Vn=n=>F1.test(n),B1=new Set(["length","size","percentage"]),U1=n=>Jr(n,B1,Gh),W1=n=>Jr(n,"position",Gh),G1=new Set(["image","url"]),H1=n=>Jr(n,G1,Q1),V1=n=>Jr(n,"",q1),Gi=()=>!0,Jr=(n,i,o)=>{const s=Wh.exec(n);return s?s[1]?typeof i=="string"?s[1]===i:i.has(s[1]):o(s[2]):!1},$1=n=>z1.test(n)&&!_1.test(n),Gh=()=>!1,q1=n=>L1.test(n),Q1=n=>D1.test(n),Y1=()=>{const n=Me("colors"),i=Me("spacing"),o=Me("blur"),s=Me("brightness"),c=Me("borderColor"),u=Me("borderRadius"),h=Me("borderSpacing"),f=Me("borderWidth"),m=Me("contrast"),y=Me("grayscale"),v=Me("hueRotate"),b=Me("invert"),E=Me("gap"),x=Me("gradientColorStops"),I=Me("gradientColorStopPositions"),S=Me("inset"),C=Me("margin"),j=Me("opacity"),F=Me("padding"),_=Me("saturate"),O=Me("scale"),H=Me("sepia"),q=Me("skew"),Y=Me("space"),de=Me("translate"),me=()=>["auto","contain","none"],he=()=>["auto","hidden","clip","visible","scroll"],xe=()=>["auto",ve,i],J=()=>[ve,i],fe=()=>["",vn,Hn],Q=()=>["auto",Qr,ve],ge=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],oe=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",ve],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[Qr,ve];return{cacheSize:500,separator:":",theme:{colors:[Gi],spacing:[vn,Hn],blur:["none","",Vn,ve],brightness:A(),borderColor:[n],borderRadius:["none","","full",Vn,ve],borderSpacing:J(),borderWidth:fe(),contrast:A(),grayscale:D(),hueRotate:A(),invert:D(),gap:J(),gradientColorStops:[n],gradientColorStopPositions:[O1,Hn],inset:xe(),margin:xe(),opacity:A(),padding:J(),saturate:A(),scale:A(),sepia:D(),skew:A(),space:J(),translate:J()},classGroups:{aspect:[{aspect:["auto","square","video",ve]}],container:["container"],columns:[{columns:[Vn]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ge(),ve]}],overflow:[{overflow:he()}],"overflow-x":[{"overflow-x":he()}],"overflow-y":[{"overflow-y":he()}],overscroll:[{overscroll:me()}],"overscroll-x":[{"overscroll-x":me()}],"overscroll-y":[{"overscroll-y":me()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wi,ve]}],basis:[{basis:xe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ve]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",Wi,ve]}],"grid-cols":[{"grid-cols":[Gi]}],"col-start-end":[{col:["auto",{span:["full",Wi,ve]},ve]}],"col-start":[{"col-start":Q()}],"col-end":[{"col-end":Q()}],"grid-rows":[{"grid-rows":[Gi]}],"row-start-end":[{row:["auto",{span:[Wi,ve]},ve]}],"row-start":[{"row-start":Q()}],"row-end":[{"row-end":Q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ve]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ve]}],gap:[{gap:[E]}],"gap-x":[{"gap-x":[E]}],"gap-y":[{"gap-y":[E]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[F]}],px:[{px:[F]}],py:[{py:[F]}],ps:[{ps:[F]}],pe:[{pe:[F]}],pt:[{pt:[F]}],pr:[{pr:[F]}],pb:[{pb:[F]}],pl:[{pl:[F]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[Y]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Y]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ve,i]}],"min-w":[{"min-w":[ve,i,"min","max","fit"]}],"max-w":[{"max-w":[ve,i,"none","full","min","max","fit","prose",{screen:[Vn]},Vn]}],h:[{h:[ve,i,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ve,i,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ve,i,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ve,i,"auto","min","max","fit"]}],"font-size":[{text:["base",Vn,Hn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Dl]}],"font-family":[{font:[Gi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ve]}],"line-clamp":[{"line-clamp":["none",Qr,Dl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",vn,ve]}],"list-image":[{"list-image":["none",ve]}],"list-style-type":[{list:["none","disc","decimal",ve]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[j]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...oe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",vn,Hn]}],"underline-offset":[{"underline-offset":["auto",vn,ve]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:J()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ve]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ve]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[j]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ge(),W1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",U1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},H1]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[I]}],"gradient-via-pos":[{via:[I]}],"gradient-to-pos":[{to:[I]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[j]}],"border-style":[{border:[...oe(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[j]}],"divide-style":[{divide:oe()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-s":[{"border-s":[c]}],"border-color-e":[{"border-e":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...oe()]}],"outline-offset":[{"outline-offset":[vn,ve]}],"outline-w":[{outline:[vn,Hn]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:fe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[j]}],"ring-offset-w":[{"ring-offset":[vn,Hn]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Vn,V1]}],"shadow-color":[{shadow:[Gi]}],opacity:[{opacity:[j]}],"mix-blend":[{"mix-blend":[...re(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[s]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Vn,ve]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[b]}],saturate:[{saturate:[_]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[j]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ve]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",ve]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",ve]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[Wi,ve]}],"translate-x":[{"translate-x":[de]}],"translate-y":[{"translate-y":[de]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ve]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ve]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":J()}],"scroll-mx":[{"scroll-mx":J()}],"scroll-my":[{"scroll-my":J()}],"scroll-ms":[{"scroll-ms":J()}],"scroll-me":[{"scroll-me":J()}],"scroll-mt":[{"scroll-mt":J()}],"scroll-mr":[{"scroll-mr":J()}],"scroll-mb":[{"scroll-mb":J()}],"scroll-ml":[{"scroll-ml":J()}],"scroll-p":[{"scroll-p":J()}],"scroll-px":[{"scroll-px":J()}],"scroll-py":[{"scroll-py":J()}],"scroll-ps":[{"scroll-ps":J()}],"scroll-pe":[{"scroll-pe":J()}],"scroll-pt":[{"scroll-pt":J()}],"scroll-pr":[{"scroll-pr":J()}],"scroll-pb":[{"scroll-pb":J()}],"scroll-pl":[{"scroll-pl":J()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ve]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[vn,Hn,Dl]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},K1=N1(Y1);function tt(...n){return K1(Rh(n))}const X1=Y0,Hh=w.forwardRef(({className:n,...i},o)=>p.jsx(Ch,{ref:o,className:tt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...i}));Hh.displayName=Ch.displayName;const J1=pc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Vh=w.forwardRef(({className:n,variant:i,...o},s)=>p.jsx(Sh,{ref:s,className:tt(J1({variant:i}),n),...o}));Vh.displayName=Sh.displayName;const Z1=w.forwardRef(({className:n,...i},o)=>p.jsx(Ph,{ref:o,className:tt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...i}));Z1.displayName=Ph.displayName;const $h=w.forwardRef(({className:n,...i},o)=>p.jsx(Ah,{ref:o,className:tt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...i,children:p.jsx(Dh,{className:"h-4 w-4"})}));$h.displayName=Ah.displayName;const qh=w.forwardRef(({className:n,...i},o)=>p.jsx(Th,{ref:o,className:tt("text-sm font-semibold",n),...i}));qh.displayName=Th.displayName;const Qh=w.forwardRef(({className:n,...i},o)=>p.jsx(Eh,{ref:o,className:tt("text-sm opacity-90",n),...i}));Qh.displayName=Eh.displayName;function ey(){const{toasts:n}=n0();return p.jsxs(X1,{children:[n.map(function({id:i,title:o,description:s,action:c,...u}){return p.jsxs(Vh,{...u,children:[p.jsxs("div",{className:"grid gap-1",children:[o&&p.jsx(qh,{children:o}),s&&p.jsx(Qh,{children:s})]}),c,p.jsx($h,{})]},i)}),p.jsx(Hh,{})]})}var Sp=["light","dark"],ty="(prefers-color-scheme: dark)",ny=w.createContext(void 0),ry={setTheme:n=>{},themes:[]},iy=()=>{var n;return(n=w.useContext(ny))!=null?n:ry};w.memo(({forcedTheme:n,storageKey:i,attribute:o,enableSystem:s,enableColorScheme:c,defaultTheme:u,value:h,attrs:f,nonce:m})=>{let y=u==="system",v=o==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${f.map(I=>`'${I}'`).join(",")})`};`:`var d=document.documentElement,n='${o}',s='setAttribute';`,b=c?Sp.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",E=(I,S=!1,C=!0)=>{let j=h?h[I]:I,F=S?I+"|| ''":`'${j}'`,_="";return c&&C&&!S&&Sp.includes(I)&&(_+=`d.style.colorScheme = '${I}';`),o==="class"?S||j?_+=`c.add(${F})`:_+="null":j&&(_+=`d[s](n,${F})`),_},x=n?`!function(){${v}${E(n)}}()`:s?`!function(){try{${v}var e=localStorage.getItem('${i}');if('system'===e||(!e&&${y})){var t='${ty}',m=window.matchMedia(t);if(m.media!==t||m.matches){${E("dark")}}else{${E("light")}}}else if(e){${h?`var x=${JSON.stringify(h)};`:""}${E(h?"x[e]":"e",!0)}}${y?"":"else{"+E(u,!1,!1)+"}"}${b}}catch(e){}}()`:`!function(){try{${v}var e=localStorage.getItem('${i}');if(e){${h?`var x=${JSON.stringify(h)};`:""}${E(h?"x[e]":"e",!0)}}else{${E(u,!1,!1)};}${b}}catch(t){}}();`;return w.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:x}})});var oy=n=>{switch(n){case"success":return ly;case"info":return dy;case"warning":return cy;case"error":return uy;default:return null}},ay=Array(12).fill(0),sy=({visible:n,className:i})=>$.createElement("div",{className:["sonner-loading-wrapper",i].filter(Boolean).join(" "),"data-visible":n},$.createElement("div",{className:"sonner-spinner"},ay.map((o,s)=>$.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${s}`})))),ly=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),cy=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),dy=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),uy=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},$.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),py=$.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},$.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),$.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),hy=()=>{let[n,i]=$.useState(document.hidden);return $.useEffect(()=>{let o=()=>{i(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),n},Yl=1,fy=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let i=this.subscribers.indexOf(n);this.subscribers.splice(i,1)}),this.publish=n=>{this.subscribers.forEach(i=>i(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var i;let{message:o,...s}=n,c=typeof n?.id=="number"||((i=n.id)==null?void 0:i.length)>0?n.id:Yl++,u=this.toasts.find(f=>f.id===c),h=n.dismissible===void 0?!0:n.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),u?this.toasts=this.toasts.map(f=>f.id===c?(this.publish({...f,...n,id:c,title:o}),{...f,...n,id:c,dismissible:h,title:o}):f):this.addToast({title:o,...s,dismissible:h,id:c}),c},this.dismiss=n=>(this.dismissedToasts.add(n),n||this.toasts.forEach(i=>{this.subscribers.forEach(o=>o({id:i.id,dismiss:!0}))}),this.subscribers.forEach(i=>i({id:n,dismiss:!0})),n),this.message=(n,i)=>this.create({...i,message:n}),this.error=(n,i)=>this.create({...i,message:n,type:"error"}),this.success=(n,i)=>this.create({...i,type:"success",message:n}),this.info=(n,i)=>this.create({...i,type:"info",message:n}),this.warning=(n,i)=>this.create({...i,type:"warning",message:n}),this.loading=(n,i)=>this.create({...i,type:"loading",message:n}),this.promise=(n,i)=>{if(!i)return;let o;i.loading!==void 0&&(o=this.create({...i,promise:n,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));let s=n instanceof Promise?n:n(),c=o!==void 0,u,h=s.then(async m=>{if(u=["resolve",m],$.isValidElement(m))c=!1,this.create({id:o,type:"default",message:m});else if(my(m)&&!m.ok){c=!1;let y=typeof i.error=="function"?await i.error(`HTTP error! status: ${m.status}`):i.error,v=typeof i.description=="function"?await i.description(`HTTP error! status: ${m.status}`):i.description;this.create({id:o,type:"error",message:y,description:v})}else if(i.success!==void 0){c=!1;let y=typeof i.success=="function"?await i.success(m):i.success,v=typeof i.description=="function"?await i.description(m):i.description;this.create({id:o,type:"success",message:y,description:v})}}).catch(async m=>{if(u=["reject",m],i.error!==void 0){c=!1;let y=typeof i.error=="function"?await i.error(m):i.error,v=typeof i.description=="function"?await i.description(m):i.description;this.create({id:o,type:"error",message:y,description:v})}}).finally(()=>{var m;c&&(this.dismiss(o),o=void 0),(m=i.finally)==null||m.call(i)}),f=()=>new Promise((m,y)=>h.then(()=>u[0]==="reject"?y(u[1]):m(u[1])).catch(y));return typeof o!="string"&&typeof o!="number"?{unwrap:f}:Object.assign(o,{unwrap:f})},this.custom=(n,i)=>{let o=i?.id||Yl++;return this.create({jsx:n(o),id:o,...i}),o},this.getActiveToasts=()=>this.toasts.filter(n=>!this.dismissedToasts.has(n.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},mt=new fy,gy=(n,i)=>{let o=i?.id||Yl++;return mt.addToast({title:n,...i,id:o}),o},my=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",yy=gy,vy=()=>mt.toasts,xy=()=>mt.getActiveToasts();Object.assign(yy,{success:mt.success,info:mt.info,warning:mt.warning,error:mt.error,custom:mt.custom,message:mt.message,promise:mt.promise,dismiss:mt.dismiss,loading:mt.loading},{getHistory:vy,getToasts:xy});function by(n,{insertAt:i}={}){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}by(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function ba(n){return n.label!==void 0}var wy=3,ky="32px",Cy="16px",Tp=4e3,Sy=356,Ty=14,Ey=20,Py=200;function Wt(...n){return n.filter(Boolean).join(" ")}function Ay(n){let[i,o]=n.split("-"),s=[];return i&&s.push(i),o&&s.push(o),s}var Iy=n=>{var i,o,s,c,u,h,f,m,y,v,b;let{invert:E,toast:x,unstyled:I,interacting:S,setHeights:C,visibleToasts:j,heights:F,index:_,toasts:O,expanded:H,removeToast:q,defaultRichColors:Y,closeButton:de,style:me,cancelButtonStyle:he,actionButtonStyle:xe,className:J="",descriptionClassName:fe="",duration:Q,position:ge,gap:oe,loadingIcon:re,expandByDefault:L,classNames:D,icons:G,closeButtonAriaLabel:A="Close toast",pauseWhenPageIsHidden:z}=n,[K,Z]=$.useState(null),[ce,ye]=$.useState(null),[ae,we]=$.useState(!1),[Ce,Oe]=$.useState(!1),[St,kn]=$.useState(!1),[Tt,ti]=$.useState(!1),[no,ni]=$.useState(!1),[ri,xr]=$.useState(0),[ii,Cn]=$.useState(0),Et=$.useRef(x.duration||Q||Tp),br=$.useRef(null),qt=$.useRef(null),ro=_===0,io=_+1<=j,nt=x.type,Qt=x.dismissible!==!1,wr=x.className||"",oo=x.descriptionClassName||"",Yt=$.useMemo(()=>F.findIndex(pe=>pe.toastId===x.id)||0,[F,x.id]),Zn=$.useMemo(()=>{var pe;return(pe=x.closeButton)!=null?pe:de},[x.closeButton,de]),ao=$.useMemo(()=>x.duration||Q||Tp,[x.duration,Q]),kr=$.useRef(0),cn=$.useRef(0),so=$.useRef(0),Kt=$.useRef(null),[oi,ai]=ge.split("-"),Cr=$.useMemo(()=>F.reduce((pe,Te,Ae)=>Ae>=Yt?pe:pe+Te.height,0),[F,Yt]),Sr=hy(),Sn=x.invert||E,Xt=nt==="loading";cn.current=$.useMemo(()=>Yt*oe+Cr,[Yt,Cr]),$.useEffect(()=>{Et.current=ao},[ao]),$.useEffect(()=>{we(!0)},[]),$.useEffect(()=>{let pe=qt.current;if(pe){let Te=pe.getBoundingClientRect().height;return Cn(Te),C(Ae=>[{toastId:x.id,height:Te,position:x.position},...Ae]),()=>C(Ae=>Ae.filter(rt=>rt.toastId!==x.id))}},[C,x.id]),$.useLayoutEffect(()=>{if(!ae)return;let pe=qt.current,Te=pe.style.height;pe.style.height="auto";let Ae=pe.getBoundingClientRect().height;pe.style.height=Te,Cn(Ae),C(rt=>rt.find(lt=>lt.toastId===x.id)?rt.map(lt=>lt.toastId===x.id?{...lt,height:Ae}:lt):[{toastId:x.id,height:Ae,position:x.position},...rt])},[ae,x.title,x.description,C,x.id]);let jt=$.useCallback(()=>{Oe(!0),xr(cn.current),C(pe=>pe.filter(Te=>Te.toastId!==x.id)),setTimeout(()=>{q(x)},Py)},[x,q,C,cn]);$.useEffect(()=>{if(x.promise&&nt==="loading"||x.duration===1/0||x.type==="loading")return;let pe;return H||S||z&&Sr?(()=>{if(so.current<kr.current){let Te=new Date().getTime()-kr.current;Et.current=Et.current-Te}so.current=new Date().getTime()})():Et.current!==1/0&&(kr.current=new Date().getTime(),pe=setTimeout(()=>{var Te;(Te=x.onAutoClose)==null||Te.call(x,x),jt()},Et.current)),()=>clearTimeout(pe)},[H,S,x,nt,z,Sr,jt]),$.useEffect(()=>{x.delete&&jt()},[jt,x.delete]);function lo(){var pe,Te,Ae;return G!=null&&G.loading?$.createElement("div",{className:Wt(D?.loader,(pe=x?.classNames)==null?void 0:pe.loader,"sonner-loader"),"data-visible":nt==="loading"},G.loading):re?$.createElement("div",{className:Wt(D?.loader,(Te=x?.classNames)==null?void 0:Te.loader,"sonner-loader"),"data-visible":nt==="loading"},re):$.createElement(sy,{className:Wt(D?.loader,(Ae=x?.classNames)==null?void 0:Ae.loader),visible:nt==="loading"})}return $.createElement("li",{tabIndex:0,ref:qt,className:Wt(J,wr,D?.toast,(i=x?.classNames)==null?void 0:i.toast,D?.default,D?.[nt],(o=x?.classNames)==null?void 0:o[nt]),"data-sonner-toast":"","data-rich-colors":(s=x.richColors)!=null?s:Y,"data-styled":!(x.jsx||x.unstyled||I),"data-mounted":ae,"data-promise":!!x.promise,"data-swiped":no,"data-removed":Ce,"data-visible":io,"data-y-position":oi,"data-x-position":ai,"data-index":_,"data-front":ro,"data-swiping":St,"data-dismissible":Qt,"data-type":nt,"data-invert":Sn,"data-swipe-out":Tt,"data-swipe-direction":ce,"data-expanded":!!(H||L&&ae),style:{"--index":_,"--toasts-before":_,"--z-index":O.length-_,"--offset":`${Ce?ri:cn.current}px`,"--initial-height":L?"auto":`${ii}px`,...me,...x.style},onDragEnd:()=>{kn(!1),Z(null),Kt.current=null},onPointerDown:pe=>{Xt||!Qt||(br.current=new Date,xr(cn.current),pe.target.setPointerCapture(pe.pointerId),pe.target.tagName!=="BUTTON"&&(kn(!0),Kt.current={x:pe.clientX,y:pe.clientY}))},onPointerUp:()=>{var pe,Te,Ae,rt;if(Tt||!Qt)return;Kt.current=null;let lt=Number(((pe=qt.current)==null?void 0:pe.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ct=Number(((Te=qt.current)==null?void 0:Te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ft=new Date().getTime()-((Ae=br.current)==null?void 0:Ae.getTime()),Qe=K==="x"?lt:ct,Jt=Math.abs(Qe)/Ft;if(Math.abs(Qe)>=Ey||Jt>.11){xr(cn.current),(rt=x.onDismiss)==null||rt.call(x,x),ye(K==="x"?lt>0?"right":"left":ct>0?"down":"up"),jt(),ti(!0),ni(!1);return}kn(!1),Z(null)},onPointerMove:pe=>{var Te,Ae,rt,lt;if(!Kt.current||!Qt||((Te=window.getSelection())==null?void 0:Te.toString().length)>0)return;let ct=pe.clientY-Kt.current.y,Ft=pe.clientX-Kt.current.x,Qe=(Ae=n.swipeDirections)!=null?Ae:Ay(ge);!K&&(Math.abs(Ft)>1||Math.abs(ct)>1)&&Z(Math.abs(Ft)>Math.abs(ct)?"x":"y");let Jt={x:0,y:0};K==="y"?(Qe.includes("top")||Qe.includes("bottom"))&&(Qe.includes("top")&&ct<0||Qe.includes("bottom")&&ct>0)&&(Jt.y=ct):K==="x"&&(Qe.includes("left")||Qe.includes("right"))&&(Qe.includes("left")&&Ft<0||Qe.includes("right")&&Ft>0)&&(Jt.x=Ft),(Math.abs(Jt.x)>0||Math.abs(Jt.y)>0)&&ni(!0),(rt=qt.current)==null||rt.style.setProperty("--swipe-amount-x",`${Jt.x}px`),(lt=qt.current)==null||lt.style.setProperty("--swipe-amount-y",`${Jt.y}px`)}},Zn&&!x.jsx?$.createElement("button",{"aria-label":A,"data-disabled":Xt,"data-close-button":!0,onClick:Xt||!Qt?()=>{}:()=>{var pe;jt(),(pe=x.onDismiss)==null||pe.call(x,x)},className:Wt(D?.closeButton,(c=x?.classNames)==null?void 0:c.closeButton)},(u=G?.close)!=null?u:py):null,x.jsx||w.isValidElement(x.title)?x.jsx?x.jsx:typeof x.title=="function"?x.title():x.title:$.createElement($.Fragment,null,nt||x.icon||x.promise?$.createElement("div",{"data-icon":"",className:Wt(D?.icon,(h=x?.classNames)==null?void 0:h.icon)},x.promise||x.type==="loading"&&!x.icon?x.icon||lo():null,x.type!=="loading"?x.icon||G?.[nt]||oy(nt):null):null,$.createElement("div",{"data-content":"",className:Wt(D?.content,(f=x?.classNames)==null?void 0:f.content)},$.createElement("div",{"data-title":"",className:Wt(D?.title,(m=x?.classNames)==null?void 0:m.title)},typeof x.title=="function"?x.title():x.title),x.description?$.createElement("div",{"data-description":"",className:Wt(fe,oo,D?.description,(y=x?.classNames)==null?void 0:y.description)},typeof x.description=="function"?x.description():x.description):null),w.isValidElement(x.cancel)?x.cancel:x.cancel&&ba(x.cancel)?$.createElement("button",{"data-button":!0,"data-cancel":!0,style:x.cancelButtonStyle||he,onClick:pe=>{var Te,Ae;ba(x.cancel)&&Qt&&((Ae=(Te=x.cancel).onClick)==null||Ae.call(Te,pe),jt())},className:Wt(D?.cancelButton,(v=x?.classNames)==null?void 0:v.cancelButton)},x.cancel.label):null,w.isValidElement(x.action)?x.action:x.action&&ba(x.action)?$.createElement("button",{"data-button":!0,"data-action":!0,style:x.actionButtonStyle||xe,onClick:pe=>{var Te,Ae;ba(x.action)&&((Ae=(Te=x.action).onClick)==null||Ae.call(Te,pe),!pe.defaultPrevented&&jt())},className:Wt(D?.actionButton,(b=x?.classNames)==null?void 0:b.actionButton)},x.action.label):null))};function Ep(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Ry(n,i){let o={};return[n,i].forEach((s,c)=>{let u=c===1,h=u?"--mobile-offset":"--offset",f=u?Cy:ky;function m(y){["top","right","bottom","left"].forEach(v=>{o[`${h}-${v}`]=typeof y=="number"?`${y}px`:y})}typeof s=="number"||typeof s=="string"?m(s):typeof s=="object"?["top","right","bottom","left"].forEach(y=>{s[y]===void 0?o[`${h}-${y}`]=f:o[`${h}-${y}`]=typeof s[y]=="number"?`${s[y]}px`:s[y]}):m(f)}),o}var Ny=w.forwardRef(function(n,i){let{invert:o,position:s="bottom-right",hotkey:c=["altKey","KeyT"],expand:u,closeButton:h,className:f,offset:m,mobileOffset:y,theme:v="light",richColors:b,duration:E,style:x,visibleToasts:I=wy,toastOptions:S,dir:C=Ep(),gap:j=Ty,loadingIcon:F,icons:_,containerAriaLabel:O="Notifications",pauseWhenPageIsHidden:H}=n,[q,Y]=$.useState([]),de=$.useMemo(()=>Array.from(new Set([s].concat(q.filter(z=>z.position).map(z=>z.position)))),[q,s]),[me,he]=$.useState([]),[xe,J]=$.useState(!1),[fe,Q]=$.useState(!1),[ge,oe]=$.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),re=$.useRef(null),L=c.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=$.useRef(null),G=$.useRef(!1),A=$.useCallback(z=>{Y(K=>{var Z;return(Z=K.find(ce=>ce.id===z.id))!=null&&Z.delete||mt.dismiss(z.id),K.filter(({id:ce})=>ce!==z.id)})},[]);return $.useEffect(()=>mt.subscribe(z=>{if(z.dismiss){Y(K=>K.map(Z=>Z.id===z.id?{...Z,delete:!0}:Z));return}setTimeout(()=>{nh.flushSync(()=>{Y(K=>{let Z=K.findIndex(ce=>ce.id===z.id);return Z!==-1?[...K.slice(0,Z),{...K[Z],...z},...K.slice(Z+1)]:[z,...K]})})})}),[]),$.useEffect(()=>{if(v!=="system"){oe(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?oe("dark"):oe("light")),typeof window>"u")return;let z=window.matchMedia("(prefers-color-scheme: dark)");try{z.addEventListener("change",({matches:K})=>{oe(K?"dark":"light")})}catch{z.addListener(({matches:Z})=>{try{oe(Z?"dark":"light")}catch(ce){console.error(ce)}})}},[v]),$.useEffect(()=>{q.length<=1&&J(!1)},[q]),$.useEffect(()=>{let z=K=>{var Z,ce;c.every(ye=>K[ye]||K.code===ye)&&(J(!0),(Z=re.current)==null||Z.focus()),K.code==="Escape"&&(document.activeElement===re.current||(ce=re.current)!=null&&ce.contains(document.activeElement))&&J(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[c]),$.useEffect(()=>{if(re.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,G.current=!1)}},[re.current]),$.createElement("section",{ref:i,"aria-label":`${O} ${L}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},de.map((z,K)=>{var Z;let[ce,ye]=z.split("-");return q.length?$.createElement("ol",{key:z,dir:C==="auto"?Ep():C,tabIndex:-1,ref:re,className:f,"data-sonner-toaster":!0,"data-theme":ge,"data-y-position":ce,"data-lifted":xe&&q.length>1&&!u,"data-x-position":ye,style:{"--front-toast-height":`${((Z=me[0])==null?void 0:Z.height)||0}px`,"--width":`${Sy}px`,"--gap":`${j}px`,...x,...Ry(m,y)},onBlur:ae=>{G.current&&!ae.currentTarget.contains(ae.relatedTarget)&&(G.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:ae=>{ae.target instanceof HTMLElement&&ae.target.dataset.dismissible==="false"||G.current||(G.current=!0,D.current=ae.relatedTarget)},onMouseEnter:()=>J(!0),onMouseMove:()=>J(!0),onMouseLeave:()=>{fe||J(!1)},onDragEnd:()=>J(!1),onPointerDown:ae=>{ae.target instanceof HTMLElement&&ae.target.dataset.dismissible==="false"||Q(!0)},onPointerUp:()=>Q(!1)},q.filter(ae=>!ae.position&&K===0||ae.position===z).map((ae,we)=>{var Ce,Oe;return $.createElement(Iy,{key:ae.id,icons:_,index:we,toast:ae,defaultRichColors:b,duration:(Ce=S?.duration)!=null?Ce:E,className:S?.className,descriptionClassName:S?.descriptionClassName,invert:o,visibleToasts:I,closeButton:(Oe=S?.closeButton)!=null?Oe:h,interacting:fe,position:z,style:S?.style,unstyled:S?.unstyled,classNames:S?.classNames,cancelButtonStyle:S?.cancelButtonStyle,actionButtonStyle:S?.actionButtonStyle,removeToast:A,toasts:q.filter(St=>St.position==ae.position),heights:me.filter(St=>St.position==ae.position),setHeights:he,expandByDefault:u,gap:j,loadingIcon:F,expanded:xe,pauseWhenPageIsHidden:H,swipeDirections:n.swipeDirections})})):null}))});const My=({...n})=>{const{theme:i="system"}=iy();return p.jsx(Ny,{theme:i,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n})},jy=["top","right","bottom","left"],Kn=Math.min,kt=Math.max,Ia=Math.round,wa=Math.floor,an=n=>({x:n,y:n}),Fy={left:"right",right:"left",bottom:"top",top:"bottom"},zy={start:"end",end:"start"};function Kl(n,i,o){return kt(n,Kn(i,o))}function bn(n,i){return typeof n=="function"?n(i):n}function wn(n){return n.split("-")[0]}function Zr(n){return n.split("-")[1]}function gc(n){return n==="x"?"y":"x"}function mc(n){return n==="y"?"height":"width"}const _y=new Set(["top","bottom"]);function on(n){return _y.has(wn(n))?"y":"x"}function yc(n){return gc(on(n))}function Ly(n,i,o){o===void 0&&(o=!1);const s=Zr(n),c=yc(n),u=mc(c);let h=c==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(h=Ra(h)),[h,Ra(h)]}function Dy(n){const i=Ra(n);return[Xl(n),i,Xl(i)]}function Xl(n){return n.replace(/start|end/g,i=>zy[i])}const Pp=["left","right"],Ap=["right","left"],Oy=["top","bottom"],By=["bottom","top"];function Uy(n,i,o){switch(n){case"top":case"bottom":return o?i?Ap:Pp:i?Pp:Ap;case"left":case"right":return i?Oy:By;default:return[]}}function Wy(n,i,o,s){const c=Zr(n);let u=Uy(wn(n),o==="start",s);return c&&(u=u.map(h=>h+"-"+c),i&&(u=u.concat(u.map(Xl)))),u}function Ra(n){return n.replace(/left|right|bottom|top/g,i=>Fy[i])}function Gy(n){return{top:0,right:0,bottom:0,left:0,...n}}function Yh(n){return typeof n!="number"?Gy(n):{top:n,right:n,bottom:n,left:n}}function Na(n){const{x:i,y:o,width:s,height:c}=n;return{width:s,height:c,top:o,left:i,right:i+s,bottom:o+c,x:i,y:o}}function Ip(n,i,o){let{reference:s,floating:c}=n;const u=on(i),h=yc(i),f=mc(h),m=wn(i),y=u==="y",v=s.x+s.width/2-c.width/2,b=s.y+s.height/2-c.height/2,E=s[f]/2-c[f]/2;let x;switch(m){case"top":x={x:v,y:s.y-c.height};break;case"bottom":x={x:v,y:s.y+s.height};break;case"right":x={x:s.x+s.width,y:b};break;case"left":x={x:s.x-c.width,y:b};break;default:x={x:s.x,y:s.y}}switch(Zr(i)){case"start":x[h]-=E*(o&&y?-1:1);break;case"end":x[h]+=E*(o&&y?-1:1);break}return x}const Hy=async(n,i,o)=>{const{placement:s="bottom",strategy:c="absolute",middleware:u=[],platform:h}=o,f=u.filter(Boolean),m=await(h.isRTL==null?void 0:h.isRTL(i));let y=await h.getElementRects({reference:n,floating:i,strategy:c}),{x:v,y:b}=Ip(y,s,m),E=s,x={},I=0;for(let S=0;S<f.length;S++){const{name:C,fn:j}=f[S],{x:F,y:_,data:O,reset:H}=await j({x:v,y:b,initialPlacement:s,placement:E,strategy:c,middlewareData:x,rects:y,platform:h,elements:{reference:n,floating:i}});v=F??v,b=_??b,x={...x,[C]:{...x[C],...O}},H&&I<=50&&(I++,typeof H=="object"&&(H.placement&&(E=H.placement),H.rects&&(y=H.rects===!0?await h.getElementRects({reference:n,floating:i,strategy:c}):H.rects),{x:v,y:b}=Ip(y,E,m)),S=-1)}return{x:v,y:b,placement:E,strategy:c,middlewareData:x}};async function Vi(n,i){var o;i===void 0&&(i={});const{x:s,y:c,platform:u,rects:h,elements:f,strategy:m}=n,{boundary:y="clippingAncestors",rootBoundary:v="viewport",elementContext:b="floating",altBoundary:E=!1,padding:x=0}=bn(i,n),I=Yh(x),C=f[E?b==="floating"?"reference":"floating":b],j=Na(await u.getClippingRect({element:(o=await(u.isElement==null?void 0:u.isElement(C)))==null||o?C:C.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(f.floating)),boundary:y,rootBoundary:v,strategy:m})),F=b==="floating"?{x:s,y:c,width:h.floating.width,height:h.floating.height}:h.reference,_=await(u.getOffsetParent==null?void 0:u.getOffsetParent(f.floating)),O=await(u.isElement==null?void 0:u.isElement(_))?await(u.getScale==null?void 0:u.getScale(_))||{x:1,y:1}:{x:1,y:1},H=Na(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:F,offsetParent:_,strategy:m}):F);return{top:(j.top-H.top+I.top)/O.y,bottom:(H.bottom-j.bottom+I.bottom)/O.y,left:(j.left-H.left+I.left)/O.x,right:(H.right-j.right+I.right)/O.x}}const Vy=n=>({name:"arrow",options:n,async fn(i){const{x:o,y:s,placement:c,rects:u,platform:h,elements:f,middlewareData:m}=i,{element:y,padding:v=0}=bn(n,i)||{};if(y==null)return{};const b=Yh(v),E={x:o,y:s},x=yc(c),I=mc(x),S=await h.getDimensions(y),C=x==="y",j=C?"top":"left",F=C?"bottom":"right",_=C?"clientHeight":"clientWidth",O=u.reference[I]+u.reference[x]-E[x]-u.floating[I],H=E[x]-u.reference[x],q=await(h.getOffsetParent==null?void 0:h.getOffsetParent(y));let Y=q?q[_]:0;(!Y||!await(h.isElement==null?void 0:h.isElement(q)))&&(Y=f.floating[_]||u.floating[I]);const de=O/2-H/2,me=Y/2-S[I]/2-1,he=Kn(b[j],me),xe=Kn(b[F],me),J=he,fe=Y-S[I]-xe,Q=Y/2-S[I]/2+de,ge=Kl(J,Q,fe),oe=!m.arrow&&Zr(c)!=null&&Q!==ge&&u.reference[I]/2-(Q<J?he:xe)-S[I]/2<0,re=oe?Q<J?Q-J:Q-fe:0;return{[x]:E[x]+re,data:{[x]:ge,centerOffset:Q-ge-re,...oe&&{alignmentOffset:re}},reset:oe}}}),$y=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(i){var o,s;const{placement:c,middlewareData:u,rects:h,initialPlacement:f,platform:m,elements:y}=i,{mainAxis:v=!0,crossAxis:b=!0,fallbackPlacements:E,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:I="none",flipAlignment:S=!0,...C}=bn(n,i);if((o=u.arrow)!=null&&o.alignmentOffset)return{};const j=wn(c),F=on(f),_=wn(f)===f,O=await(m.isRTL==null?void 0:m.isRTL(y.floating)),H=E||(_||!S?[Ra(f)]:Dy(f)),q=I!=="none";!E&&q&&H.push(...Wy(f,S,I,O));const Y=[f,...H],de=await Vi(i,C),me=[];let he=((s=u.flip)==null?void 0:s.overflows)||[];if(v&&me.push(de[j]),b){const Q=Ly(c,h,O);me.push(de[Q[0]],de[Q[1]])}if(he=[...he,{placement:c,overflows:me}],!me.every(Q=>Q<=0)){var xe,J;const Q=(((xe=u.flip)==null?void 0:xe.index)||0)+1,ge=Y[Q];if(ge&&(!(b==="alignment"?F!==on(ge):!1)||he.every(L=>L.overflows[0]>0&&on(L.placement)===F)))return{data:{index:Q,overflows:he},reset:{placement:ge}};let oe=(J=he.filter(re=>re.overflows[0]<=0).sort((re,L)=>re.overflows[1]-L.overflows[1])[0])==null?void 0:J.placement;if(!oe)switch(x){case"bestFit":{var fe;const re=(fe=he.filter(L=>{if(q){const D=on(L.placement);return D===F||D==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(D=>D>0).reduce((D,G)=>D+G,0)]).sort((L,D)=>L[1]-D[1])[0])==null?void 0:fe[0];re&&(oe=re);break}case"initialPlacement":oe=f;break}if(c!==oe)return{reset:{placement:oe}}}return{}}}};function Rp(n,i){return{top:n.top-i.height,right:n.right-i.width,bottom:n.bottom-i.height,left:n.left-i.width}}function Np(n){return jy.some(i=>n[i]>=0)}const qy=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(i){const{rects:o}=i,{strategy:s="referenceHidden",...c}=bn(n,i);switch(s){case"referenceHidden":{const u=await Vi(i,{...c,elementContext:"reference"}),h=Rp(u,o.reference);return{data:{referenceHiddenOffsets:h,referenceHidden:Np(h)}}}case"escaped":{const u=await Vi(i,{...c,altBoundary:!0}),h=Rp(u,o.floating);return{data:{escapedOffsets:h,escaped:Np(h)}}}default:return{}}}}},Kh=new Set(["left","top"]);async function Qy(n,i){const{placement:o,platform:s,elements:c}=n,u=await(s.isRTL==null?void 0:s.isRTL(c.floating)),h=wn(o),f=Zr(o),m=on(o)==="y",y=Kh.has(h)?-1:1,v=u&&m?-1:1,b=bn(i,n);let{mainAxis:E,crossAxis:x,alignmentAxis:I}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return f&&typeof I=="number"&&(x=f==="end"?I*-1:I),m?{x:x*v,y:E*y}:{x:E*y,y:x*v}}const Yy=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(i){var o,s;const{x:c,y:u,placement:h,middlewareData:f}=i,m=await Qy(i,n);return h===((o=f.offset)==null?void 0:o.placement)&&(s=f.arrow)!=null&&s.alignmentOffset?{}:{x:c+m.x,y:u+m.y,data:{...m,placement:h}}}}},Ky=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(i){const{x:o,y:s,placement:c}=i,{mainAxis:u=!0,crossAxis:h=!1,limiter:f={fn:C=>{let{x:j,y:F}=C;return{x:j,y:F}}},...m}=bn(n,i),y={x:o,y:s},v=await Vi(i,m),b=on(wn(c)),E=gc(b);let x=y[E],I=y[b];if(u){const C=E==="y"?"top":"left",j=E==="y"?"bottom":"right",F=x+v[C],_=x-v[j];x=Kl(F,x,_)}if(h){const C=b==="y"?"top":"left",j=b==="y"?"bottom":"right",F=I+v[C],_=I-v[j];I=Kl(F,I,_)}const S=f.fn({...i,[E]:x,[b]:I});return{...S,data:{x:S.x-o,y:S.y-s,enabled:{[E]:u,[b]:h}}}}}},Xy=function(n){return n===void 0&&(n={}),{options:n,fn(i){const{x:o,y:s,placement:c,rects:u,middlewareData:h}=i,{offset:f=0,mainAxis:m=!0,crossAxis:y=!0}=bn(n,i),v={x:o,y:s},b=on(c),E=gc(b);let x=v[E],I=v[b];const S=bn(f,i),C=typeof S=="number"?{mainAxis:S,crossAxis:0}:{mainAxis:0,crossAxis:0,...S};if(m){const _=E==="y"?"height":"width",O=u.reference[E]-u.floating[_]+C.mainAxis,H=u.reference[E]+u.reference[_]-C.mainAxis;x<O?x=O:x>H&&(x=H)}if(y){var j,F;const _=E==="y"?"width":"height",O=Kh.has(wn(c)),H=u.reference[b]-u.floating[_]+(O&&((j=h.offset)==null?void 0:j[b])||0)+(O?0:C.crossAxis),q=u.reference[b]+u.reference[_]+(O?0:((F=h.offset)==null?void 0:F[b])||0)-(O?C.crossAxis:0);I<H?I=H:I>q&&(I=q)}return{[E]:x,[b]:I}}}},Jy=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(i){var o,s;const{placement:c,rects:u,platform:h,elements:f}=i,{apply:m=()=>{},...y}=bn(n,i),v=await Vi(i,y),b=wn(c),E=Zr(c),x=on(c)==="y",{width:I,height:S}=u.floating;let C,j;b==="top"||b==="bottom"?(C=b,j=E===(await(h.isRTL==null?void 0:h.isRTL(f.floating))?"start":"end")?"left":"right"):(j=b,C=E==="end"?"top":"bottom");const F=S-v.top-v.bottom,_=I-v.left-v.right,O=Kn(S-v[C],F),H=Kn(I-v[j],_),q=!i.middlewareData.shift;let Y=O,de=H;if((o=i.middlewareData.shift)!=null&&o.enabled.x&&(de=_),(s=i.middlewareData.shift)!=null&&s.enabled.y&&(Y=F),q&&!E){const he=kt(v.left,0),xe=kt(v.right,0),J=kt(v.top,0),fe=kt(v.bottom,0);x?de=I-2*(he!==0||xe!==0?he+xe:kt(v.left,v.right)):Y=S-2*(J!==0||fe!==0?J+fe:kt(v.top,v.bottom))}await m({...i,availableWidth:de,availableHeight:Y});const me=await h.getDimensions(f.floating);return I!==me.width||S!==me.height?{reset:{rects:!0}}:{}}}};function Oa(){return typeof window<"u"}function ei(n){return Xh(n)?(n.nodeName||"").toLowerCase():"#document"}function Ct(n){var i;return(n==null||(i=n.ownerDocument)==null?void 0:i.defaultView)||window}function ln(n){var i;return(i=(Xh(n)?n.ownerDocument:n.document)||window.document)==null?void 0:i.documentElement}function Xh(n){return Oa()?n instanceof Node||n instanceof Ct(n).Node:!1}function Vt(n){return Oa()?n instanceof Element||n instanceof Ct(n).Element:!1}function sn(n){return Oa()?n instanceof HTMLElement||n instanceof Ct(n).HTMLElement:!1}function Mp(n){return!Oa()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ct(n).ShadowRoot}const Zy=new Set(["inline","contents"]);function Ji(n){const{overflow:i,overflowX:o,overflowY:s,display:c}=$t(n);return/auto|scroll|overlay|hidden|clip/.test(i+s+o)&&!Zy.has(c)}const ev=new Set(["table","td","th"]);function tv(n){return ev.has(ei(n))}const nv=[":popover-open",":modal"];function Ba(n){return nv.some(i=>{try{return n.matches(i)}catch{return!1}})}const rv=["transform","translate","scale","rotate","perspective"],iv=["transform","translate","scale","rotate","perspective","filter"],ov=["paint","layout","strict","content"];function vc(n){const i=xc(),o=Vt(n)?$t(n):n;return rv.some(s=>o[s]?o[s]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!i&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!i&&(o.filter?o.filter!=="none":!1)||iv.some(s=>(o.willChange||"").includes(s))||ov.some(s=>(o.contain||"").includes(s))}function av(n){let i=Xn(n);for(;sn(i)&&!Kr(i);){if(vc(i))return i;if(Ba(i))return null;i=Xn(i)}return null}function xc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const sv=new Set(["html","body","#document"]);function Kr(n){return sv.has(ei(n))}function $t(n){return Ct(n).getComputedStyle(n)}function Ua(n){return Vt(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Xn(n){if(ei(n)==="html")return n;const i=n.assignedSlot||n.parentNode||Mp(n)&&n.host||ln(n);return Mp(i)?i.host:i}function Jh(n){const i=Xn(n);return Kr(i)?n.ownerDocument?n.ownerDocument.body:n.body:sn(i)&&Ji(i)?i:Jh(i)}function $i(n,i,o){var s;i===void 0&&(i=[]),o===void 0&&(o=!0);const c=Jh(n),u=c===((s=n.ownerDocument)==null?void 0:s.body),h=Ct(c);if(u){const f=Jl(h);return i.concat(h,h.visualViewport||[],Ji(c)?c:[],f&&o?$i(f):[])}return i.concat(c,$i(c,[],o))}function Jl(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Zh(n){const i=$t(n);let o=parseFloat(i.width)||0,s=parseFloat(i.height)||0;const c=sn(n),u=c?n.offsetWidth:o,h=c?n.offsetHeight:s,f=Ia(o)!==u||Ia(s)!==h;return f&&(o=u,s=h),{width:o,height:s,$:f}}function bc(n){return Vt(n)?n:n.contextElement}function Yr(n){const i=bc(n);if(!sn(i))return an(1);const o=i.getBoundingClientRect(),{width:s,height:c,$:u}=Zh(i);let h=(u?Ia(o.width):o.width)/s,f=(u?Ia(o.height):o.height)/c;return(!h||!Number.isFinite(h))&&(h=1),(!f||!Number.isFinite(f))&&(f=1),{x:h,y:f}}const lv=an(0);function ef(n){const i=Ct(n);return!xc()||!i.visualViewport?lv:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function cv(n,i,o){return i===void 0&&(i=!1),!o||i&&o!==Ct(n)?!1:i}function fr(n,i,o,s){i===void 0&&(i=!1),o===void 0&&(o=!1);const c=n.getBoundingClientRect(),u=bc(n);let h=an(1);i&&(s?Vt(s)&&(h=Yr(s)):h=Yr(n));const f=cv(u,o,s)?ef(u):an(0);let m=(c.left+f.x)/h.x,y=(c.top+f.y)/h.y,v=c.width/h.x,b=c.height/h.y;if(u){const E=Ct(u),x=s&&Vt(s)?Ct(s):s;let I=E,S=Jl(I);for(;S&&s&&x!==I;){const C=Yr(S),j=S.getBoundingClientRect(),F=$t(S),_=j.left+(S.clientLeft+parseFloat(F.paddingLeft))*C.x,O=j.top+(S.clientTop+parseFloat(F.paddingTop))*C.y;m*=C.x,y*=C.y,v*=C.x,b*=C.y,m+=_,y+=O,I=Ct(S),S=Jl(I)}}return Na({width:v,height:b,x:m,y})}function wc(n,i){const o=Ua(n).scrollLeft;return i?i.left+o:fr(ln(n)).left+o}function tf(n,i,o){o===void 0&&(o=!1);const s=n.getBoundingClientRect(),c=s.left+i.scrollLeft-(o?0:wc(n,s)),u=s.top+i.scrollTop;return{x:c,y:u}}function dv(n){let{elements:i,rect:o,offsetParent:s,strategy:c}=n;const u=c==="fixed",h=ln(s),f=i?Ba(i.floating):!1;if(s===h||f&&u)return o;let m={scrollLeft:0,scrollTop:0},y=an(1);const v=an(0),b=sn(s);if((b||!b&&!u)&&((ei(s)!=="body"||Ji(h))&&(m=Ua(s)),sn(s))){const x=fr(s);y=Yr(s),v.x=x.x+s.clientLeft,v.y=x.y+s.clientTop}const E=h&&!b&&!u?tf(h,m,!0):an(0);return{width:o.width*y.x,height:o.height*y.y,x:o.x*y.x-m.scrollLeft*y.x+v.x+E.x,y:o.y*y.y-m.scrollTop*y.y+v.y+E.y}}function uv(n){return Array.from(n.getClientRects())}function pv(n){const i=ln(n),o=Ua(n),s=n.ownerDocument.body,c=kt(i.scrollWidth,i.clientWidth,s.scrollWidth,s.clientWidth),u=kt(i.scrollHeight,i.clientHeight,s.scrollHeight,s.clientHeight);let h=-o.scrollLeft+wc(n);const f=-o.scrollTop;return $t(s).direction==="rtl"&&(h+=kt(i.clientWidth,s.clientWidth)-c),{width:c,height:u,x:h,y:f}}function hv(n,i){const o=Ct(n),s=ln(n),c=o.visualViewport;let u=s.clientWidth,h=s.clientHeight,f=0,m=0;if(c){u=c.width,h=c.height;const y=xc();(!y||y&&i==="fixed")&&(f=c.offsetLeft,m=c.offsetTop)}return{width:u,height:h,x:f,y:m}}const fv=new Set(["absolute","fixed"]);function gv(n,i){const o=fr(n,!0,i==="fixed"),s=o.top+n.clientTop,c=o.left+n.clientLeft,u=sn(n)?Yr(n):an(1),h=n.clientWidth*u.x,f=n.clientHeight*u.y,m=c*u.x,y=s*u.y;return{width:h,height:f,x:m,y}}function jp(n,i,o){let s;if(i==="viewport")s=hv(n,o);else if(i==="document")s=pv(ln(n));else if(Vt(i))s=gv(i,o);else{const c=ef(n);s={x:i.x-c.x,y:i.y-c.y,width:i.width,height:i.height}}return Na(s)}function nf(n,i){const o=Xn(n);return o===i||!Vt(o)||Kr(o)?!1:$t(o).position==="fixed"||nf(o,i)}function mv(n,i){const o=i.get(n);if(o)return o;let s=$i(n,[],!1).filter(f=>Vt(f)&&ei(f)!=="body"),c=null;const u=$t(n).position==="fixed";let h=u?Xn(n):n;for(;Vt(h)&&!Kr(h);){const f=$t(h),m=vc(h);!m&&f.position==="fixed"&&(c=null),(u?!m&&!c:!m&&f.position==="static"&&!!c&&fv.has(c.position)||Ji(h)&&!m&&nf(n,h))?s=s.filter(v=>v!==h):c=f,h=Xn(h)}return i.set(n,s),s}function yv(n){let{element:i,boundary:o,rootBoundary:s,strategy:c}=n;const h=[...o==="clippingAncestors"?Ba(i)?[]:mv(i,this._c):[].concat(o),s],f=h[0],m=h.reduce((y,v)=>{const b=jp(i,v,c);return y.top=kt(b.top,y.top),y.right=Kn(b.right,y.right),y.bottom=Kn(b.bottom,y.bottom),y.left=kt(b.left,y.left),y},jp(i,f,c));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function vv(n){const{width:i,height:o}=Zh(n);return{width:i,height:o}}function xv(n,i,o){const s=sn(i),c=ln(i),u=o==="fixed",h=fr(n,!0,u,i);let f={scrollLeft:0,scrollTop:0};const m=an(0);function y(){m.x=wc(c)}if(s||!s&&!u)if((ei(i)!=="body"||Ji(c))&&(f=Ua(i)),s){const x=fr(i,!0,u,i);m.x=x.x+i.clientLeft,m.y=x.y+i.clientTop}else c&&y();u&&!s&&c&&y();const v=c&&!s&&!u?tf(c,f):an(0),b=h.left+f.scrollLeft-m.x-v.x,E=h.top+f.scrollTop-m.y-v.y;return{x:b,y:E,width:h.width,height:h.height}}function Ol(n){return $t(n).position==="static"}function Fp(n,i){if(!sn(n)||$t(n).position==="fixed")return null;if(i)return i(n);let o=n.offsetParent;return ln(n)===o&&(o=o.ownerDocument.body),o}function rf(n,i){const o=Ct(n);if(Ba(n))return o;if(!sn(n)){let c=Xn(n);for(;c&&!Kr(c);){if(Vt(c)&&!Ol(c))return c;c=Xn(c)}return o}let s=Fp(n,i);for(;s&&tv(s)&&Ol(s);)s=Fp(s,i);return s&&Kr(s)&&Ol(s)&&!vc(s)?o:s||av(n)||o}const bv=async function(n){const i=this.getOffsetParent||rf,o=this.getDimensions,s=await o(n.floating);return{reference:xv(n.reference,await i(n.floating),n.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function wv(n){return $t(n).direction==="rtl"}const kv={convertOffsetParentRelativeRectToViewportRelativeRect:dv,getDocumentElement:ln,getClippingRect:yv,getOffsetParent:rf,getElementRects:bv,getClientRects:uv,getDimensions:vv,getScale:Yr,isElement:Vt,isRTL:wv};function of(n,i){return n.x===i.x&&n.y===i.y&&n.width===i.width&&n.height===i.height}function Cv(n,i){let o=null,s;const c=ln(n);function u(){var f;clearTimeout(s),(f=o)==null||f.disconnect(),o=null}function h(f,m){f===void 0&&(f=!1),m===void 0&&(m=1),u();const y=n.getBoundingClientRect(),{left:v,top:b,width:E,height:x}=y;if(f||i(),!E||!x)return;const I=wa(b),S=wa(c.clientWidth-(v+E)),C=wa(c.clientHeight-(b+x)),j=wa(v),_={rootMargin:-I+"px "+-S+"px "+-C+"px "+-j+"px",threshold:kt(0,Kn(1,m))||1};let O=!0;function H(q){const Y=q[0].intersectionRatio;if(Y!==m){if(!O)return h();Y?h(!1,Y):s=setTimeout(()=>{h(!1,1e-7)},1e3)}Y===1&&!of(y,n.getBoundingClientRect())&&h(),O=!1}try{o=new IntersectionObserver(H,{..._,root:c.ownerDocument})}catch{o=new IntersectionObserver(H,_)}o.observe(n)}return h(!0),u}function Sv(n,i,o,s){s===void 0&&(s={});const{ancestorScroll:c=!0,ancestorResize:u=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:m=!1}=s,y=bc(n),v=c||u?[...y?$i(y):[],...$i(i)]:[];v.forEach(j=>{c&&j.addEventListener("scroll",o,{passive:!0}),u&&j.addEventListener("resize",o)});const b=y&&f?Cv(y,o):null;let E=-1,x=null;h&&(x=new ResizeObserver(j=>{let[F]=j;F&&F.target===y&&x&&(x.unobserve(i),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var _;(_=x)==null||_.observe(i)})),o()}),y&&!m&&x.observe(y),x.observe(i));let I,S=m?fr(n):null;m&&C();function C(){const j=fr(n);S&&!of(S,j)&&o(),S=j,I=requestAnimationFrame(C)}return o(),()=>{var j;v.forEach(F=>{c&&F.removeEventListener("scroll",o),u&&F.removeEventListener("resize",o)}),b?.(),(j=x)==null||j.disconnect(),x=null,m&&cancelAnimationFrame(I)}}const Tv=Yy,Ev=Ky,Pv=$y,Av=Jy,Iv=qy,zp=Vy,Rv=Xy,Nv=(n,i,o)=>{const s=new Map,c={platform:kv,...o},u={...c.platform,_c:s};return Hy(n,i,{...c,platform:u})};var Mv=typeof document<"u",jv=function(){},Pa=Mv?w.useLayoutEffect:jv;function Ma(n,i){if(n===i)return!0;if(typeof n!=typeof i)return!1;if(typeof n=="function"&&n.toString()===i.toString())return!0;let o,s,c;if(n&&i&&typeof n=="object"){if(Array.isArray(n)){if(o=n.length,o!==i.length)return!1;for(s=o;s--!==0;)if(!Ma(n[s],i[s]))return!1;return!0}if(c=Object.keys(n),o=c.length,o!==Object.keys(i).length)return!1;for(s=o;s--!==0;)if(!{}.hasOwnProperty.call(i,c[s]))return!1;for(s=o;s--!==0;){const u=c[s];if(!(u==="_owner"&&n.$$typeof)&&!Ma(n[u],i[u]))return!1}return!0}return n!==n&&i!==i}function af(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function _p(n,i){const o=af(n);return Math.round(i*o)/o}function Bl(n){const i=w.useRef(n);return Pa(()=>{i.current=n}),i}function Fv(n){n===void 0&&(n={});const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:c,elements:{reference:u,floating:h}={},transform:f=!0,whileElementsMounted:m,open:y}=n,[v,b]=w.useState({x:0,y:0,strategy:o,placement:i,middlewareData:{},isPositioned:!1}),[E,x]=w.useState(s);Ma(E,s)||x(s);const[I,S]=w.useState(null),[C,j]=w.useState(null),F=w.useCallback(L=>{L!==q.current&&(q.current=L,S(L))},[]),_=w.useCallback(L=>{L!==Y.current&&(Y.current=L,j(L))},[]),O=u||I,H=h||C,q=w.useRef(null),Y=w.useRef(null),de=w.useRef(v),me=m!=null,he=Bl(m),xe=Bl(c),J=Bl(y),fe=w.useCallback(()=>{if(!q.current||!Y.current)return;const L={placement:i,strategy:o,middleware:E};xe.current&&(L.platform=xe.current),Nv(q.current,Y.current,L).then(D=>{const G={...D,isPositioned:J.current!==!1};Q.current&&!Ma(de.current,G)&&(de.current=G,za.flushSync(()=>{b(G)}))})},[E,i,o,xe,J]);Pa(()=>{y===!1&&de.current.isPositioned&&(de.current.isPositioned=!1,b(L=>({...L,isPositioned:!1})))},[y]);const Q=w.useRef(!1);Pa(()=>(Q.current=!0,()=>{Q.current=!1}),[]),Pa(()=>{if(O&&(q.current=O),H&&(Y.current=H),O&&H){if(he.current)return he.current(O,H,fe);fe()}},[O,H,fe,he,me]);const ge=w.useMemo(()=>({reference:q,floating:Y,setReference:F,setFloating:_}),[F,_]),oe=w.useMemo(()=>({reference:O,floating:H}),[O,H]),re=w.useMemo(()=>{const L={position:o,left:0,top:0};if(!oe.floating)return L;const D=_p(oe.floating,v.x),G=_p(oe.floating,v.y);return f?{...L,transform:"translate("+D+"px, "+G+"px)",...af(oe.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:D,top:G}},[o,f,oe.floating,v.x,v.y]);return w.useMemo(()=>({...v,update:fe,refs:ge,elements:oe,floatingStyles:re}),[v,fe,ge,oe,re])}const zv=n=>{function i(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:n,fn(o){const{element:s,padding:c}=typeof n=="function"?n(o):n;return s&&i(s)?s.current!=null?zp({element:s.current,padding:c}).fn(o):{}:s?zp({element:s,padding:c}).fn(o):{}}}},_v=(n,i)=>({...Tv(n),options:[n,i]}),Lv=(n,i)=>({...Ev(n),options:[n,i]}),Dv=(n,i)=>({...Rv(n),options:[n,i]}),Ov=(n,i)=>({...Pv(n),options:[n,i]}),Bv=(n,i)=>({...Av(n),options:[n,i]}),Uv=(n,i)=>({...Iv(n),options:[n,i]}),Wv=(n,i)=>({...zv(n),options:[n,i]});var Gv="Arrow",sf=w.forwardRef((n,i)=>{const{children:o,width:s=10,height:c=5,...u}=n;return p.jsx(yt.svg,{...u,ref:i,width:s,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?o:p.jsx("polygon",{points:"0,0 30,0 15,10"})})});sf.displayName=Gv;var Hv=sf;function Vv(n){const[i,o]=w.useState(void 0);return Yn(()=>{if(n){o({width:n.offsetWidth,height:n.offsetHeight});const s=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const u=c[0];let h,f;if("borderBoxSize"in u){const m=u.borderBoxSize,y=Array.isArray(m)?m[0]:m;h=y.inlineSize,f=y.blockSize}else h=n.offsetWidth,f=n.offsetHeight;o({width:h,height:f})});return s.observe(n,{box:"border-box"}),()=>s.unobserve(n)}else o(void 0)},[n]),i}var lf="Popper",[cf,df]=_a(lf),[Db,uf]=cf(lf),pf="PopperAnchor",hf=w.forwardRef((n,i)=>{const{__scopePopper:o,virtualRef:s,...c}=n,u=uf(pf,o),h=w.useRef(null),f=Ht(i,h);return w.useEffect(()=>{u.onAnchorChange(s?.current||h.current)}),s?null:p.jsx(yt.div,{...c,ref:f})});hf.displayName=pf;var kc="PopperContent",[$v,qv]=cf(kc),ff=w.forwardRef((n,i)=>{const{__scopePopper:o,side:s="bottom",sideOffset:c=0,align:u="center",alignOffset:h=0,arrowPadding:f=0,avoidCollisions:m=!0,collisionBoundary:y=[],collisionPadding:v=0,sticky:b="partial",hideWhenDetached:E=!1,updatePositionStrategy:x="optimized",onPlaced:I,...S}=n,C=uf(kc,o),[j,F]=w.useState(null),_=Ht(i,ae=>F(ae)),[O,H]=w.useState(null),q=Vv(O),Y=q?.width??0,de=q?.height??0,me=s+(u!=="center"?"-"+u:""),he=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},xe=Array.isArray(y)?y:[y],J=xe.length>0,fe={padding:he,boundary:xe.filter(Yv),altBoundary:J},{refs:Q,floatingStyles:ge,placement:oe,isPositioned:re,middlewareData:L}=Fv({strategy:"fixed",placement:me,whileElementsMounted:(...ae)=>Sv(...ae,{animationFrame:x==="always"}),elements:{reference:C.anchor},middleware:[_v({mainAxis:c+de,alignmentAxis:h}),m&&Lv({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?Dv():void 0,...fe}),m&&Ov({...fe}),Bv({...fe,apply:({elements:ae,rects:we,availableWidth:Ce,availableHeight:Oe})=>{const{width:St,height:kn}=we.reference,Tt=ae.floating.style;Tt.setProperty("--radix-popper-available-width",`${Ce}px`),Tt.setProperty("--radix-popper-available-height",`${Oe}px`),Tt.setProperty("--radix-popper-anchor-width",`${St}px`),Tt.setProperty("--radix-popper-anchor-height",`${kn}px`)}}),O&&Wv({element:O,padding:f}),Kv({arrowWidth:Y,arrowHeight:de}),E&&Uv({strategy:"referenceHidden",...fe})]}),[D,G]=yf(oe),A=Qn(I);Yn(()=>{re&&A?.()},[re,A]);const z=L.arrow?.x,K=L.arrow?.y,Z=L.arrow?.centerOffset!==0,[ce,ye]=w.useState();return Yn(()=>{j&&ye(window.getComputedStyle(j).zIndex)},[j]),p.jsx("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...ge,transform:re?ge.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[L.transformOrigin?.x,L.transformOrigin?.y].join(" "),...L.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:p.jsx($v,{scope:o,placedSide:D,onArrowChange:H,arrowX:z,arrowY:K,shouldHideArrow:Z,children:p.jsx(yt.div,{"data-side":D,"data-align":G,...S,ref:_,style:{...S.style,animation:re?void 0:"none"}})})})});ff.displayName=kc;var gf="PopperArrow",Qv={top:"bottom",right:"left",bottom:"top",left:"right"},mf=w.forwardRef(function(i,o){const{__scopePopper:s,...c}=i,u=qv(gf,s),h=Qv[u.placedSide];return p.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[h]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:p.jsx(Hv,{...c,ref:o,style:{...c.style,display:"block"}})})});mf.displayName=gf;function Yv(n){return n!==null}var Kv=n=>({name:"transformOrigin",options:n,fn(i){const{placement:o,rects:s,middlewareData:c}=i,h=c.arrow?.centerOffset!==0,f=h?0:n.arrowWidth,m=h?0:n.arrowHeight,[y,v]=yf(o),b={start:"0%",center:"50%",end:"100%"}[v],E=(c.arrow?.x??0)+f/2,x=(c.arrow?.y??0)+m/2;let I="",S="";return y==="bottom"?(I=h?b:`${E}px`,S=`${-m}px`):y==="top"?(I=h?b:`${E}px`,S=`${s.floating.height+m}px`):y==="right"?(I=`${-m}px`,S=h?b:`${x}px`):y==="left"&&(I=`${s.floating.width+m}px`,S=h?b:`${x}px`),{data:{x:I,y:S}}}});function yf(n){const[i,o="center"]=n.split("-");return[i,o]}var Xv=hf,Jv=ff,Zv=mf,[Wa,Ob]=_a("Tooltip",[df]),Cc=df(),vf="TooltipProvider",ex=700,Lp="tooltip.open",[tx,xf]=Wa(vf),bf=n=>{const{__scopeTooltip:i,delayDuration:o=ex,skipDelayDuration:s=300,disableHoverableContent:c=!1,children:u}=n,h=w.useRef(!0),f=w.useRef(!1),m=w.useRef(0);return w.useEffect(()=>{const y=m.current;return()=>window.clearTimeout(y)},[]),p.jsx(tx,{scope:i,isOpenDelayedRef:h,delayDuration:o,onOpen:w.useCallback(()=>{window.clearTimeout(m.current),h.current=!1},[]),onClose:w.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>h.current=!0,s)},[s]),isPointerInTransitRef:f,onPointerInTransitChange:w.useCallback(y=>{f.current=y},[]),disableHoverableContent:c,children:u})};bf.displayName=vf;var wf="Tooltip",[Bb,Ga]=Wa(wf),Zl="TooltipTrigger",nx=w.forwardRef((n,i)=>{const{__scopeTooltip:o,...s}=n,c=Ga(Zl,o),u=xf(Zl,o),h=Cc(o),f=w.useRef(null),m=Ht(i,f,c.onTriggerChange),y=w.useRef(!1),v=w.useRef(!1),b=w.useCallback(()=>y.current=!1,[]);return w.useEffect(()=>()=>document.removeEventListener("pointerup",b),[b]),p.jsx(Xv,{asChild:!0,...h,children:p.jsx(yt.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...s,ref:m,onPointerMove:He(n.onPointerMove,E=>{E.pointerType!=="touch"&&!v.current&&!u.isPointerInTransitRef.current&&(c.onTriggerEnter(),v.current=!0)}),onPointerLeave:He(n.onPointerLeave,()=>{c.onTriggerLeave(),v.current=!1}),onPointerDown:He(n.onPointerDown,()=>{c.open&&c.onClose(),y.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:He(n.onFocus,()=>{y.current||c.onOpen()}),onBlur:He(n.onBlur,c.onClose),onClick:He(n.onClick,c.onClose)})})});nx.displayName=Zl;var rx="TooltipPortal",[Ub,ix]=Wa(rx,{forceMount:void 0}),Xr="TooltipContent",kf=w.forwardRef((n,i)=>{const o=ix(Xr,n.__scopeTooltip),{forceMount:s=o.forceMount,side:c="top",...u}=n,h=Ga(Xr,n.__scopeTooltip);return p.jsx(lc,{present:s||h.open,children:h.disableHoverableContent?p.jsx(Cf,{side:c,...u,ref:i}):p.jsx(ox,{side:c,...u,ref:i})})}),ox=w.forwardRef((n,i)=>{const o=Ga(Xr,n.__scopeTooltip),s=xf(Xr,n.__scopeTooltip),c=w.useRef(null),u=Ht(i,c),[h,f]=w.useState(null),{trigger:m,onClose:y}=o,v=c.current,{onPointerInTransitChange:b}=s,E=w.useCallback(()=>{f(null),b(!1)},[b]),x=w.useCallback((I,S)=>{const C=I.currentTarget,j={x:I.clientX,y:I.clientY},F=dx(j,C.getBoundingClientRect()),_=ux(j,F),O=px(S.getBoundingClientRect()),H=fx([..._,...O]);f(H),b(!0)},[b]);return w.useEffect(()=>()=>E(),[E]),w.useEffect(()=>{if(m&&v){const I=C=>x(C,v),S=C=>x(C,m);return m.addEventListener("pointerleave",I),v.addEventListener("pointerleave",S),()=>{m.removeEventListener("pointerleave",I),v.removeEventListener("pointerleave",S)}}},[m,v,x,E]),w.useEffect(()=>{if(h){const I=S=>{const C=S.target,j={x:S.clientX,y:S.clientY},F=m?.contains(C)||v?.contains(C),_=!hx(j,h);F?E():_&&(E(),y())};return document.addEventListener("pointermove",I),()=>document.removeEventListener("pointermove",I)}},[m,v,h,y,E]),p.jsx(Cf,{...n,ref:u})}),[ax,sx]=Wa(wf,{isInside:!1}),lx=a0("TooltipContent"),Cf=w.forwardRef((n,i)=>{const{__scopeTooltip:o,children:s,"aria-label":c,onEscapeKeyDown:u,onPointerDownOutside:h,...f}=n,m=Ga(Xr,o),y=Cc(o),{onClose:v}=m;return w.useEffect(()=>(document.addEventListener(Lp,v),()=>document.removeEventListener(Lp,v)),[v]),w.useEffect(()=>{if(m.trigger){const b=E=>{E.target?.contains(m.trigger)&&v()};return window.addEventListener("scroll",b,{capture:!0}),()=>window.removeEventListener("scroll",b,{capture:!0})}},[m.trigger,v]),p.jsx(sc,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:h,onFocusOutside:b=>b.preventDefault(),onDismiss:v,children:p.jsxs(Jv,{"data-state":m.stateAttribute,...y,...f,ref:i,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[p.jsx(lx,{children:s}),p.jsx(ax,{scope:o,isInside:!0,children:p.jsx(N0,{id:m.contentId,role:"tooltip",children:c||s})})]})})});kf.displayName=Xr;var Sf="TooltipArrow",cx=w.forwardRef((n,i)=>{const{__scopeTooltip:o,...s}=n,c=Cc(o);return sx(Sf,o).isInside?null:p.jsx(Zv,{...c,...s,ref:i})});cx.displayName=Sf;function dx(n,i){const o=Math.abs(i.top-n.y),s=Math.abs(i.bottom-n.y),c=Math.abs(i.right-n.x),u=Math.abs(i.left-n.x);switch(Math.min(o,s,c,u)){case u:return"left";case c:return"right";case o:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function ux(n,i,o=5){const s=[];switch(i){case"top":s.push({x:n.x-o,y:n.y+o},{x:n.x+o,y:n.y+o});break;case"bottom":s.push({x:n.x-o,y:n.y-o},{x:n.x+o,y:n.y-o});break;case"left":s.push({x:n.x+o,y:n.y-o},{x:n.x+o,y:n.y+o});break;case"right":s.push({x:n.x-o,y:n.y-o},{x:n.x-o,y:n.y+o});break}return s}function px(n){const{top:i,right:o,bottom:s,left:c}=n;return[{x:c,y:i},{x:o,y:i},{x:o,y:s},{x:c,y:s}]}function hx(n,i){const{x:o,y:s}=n;let c=!1;for(let u=0,h=i.length-1;u<i.length;h=u++){const f=i[u],m=i[h],y=f.x,v=f.y,b=m.x,E=m.y;v>s!=E>s&&o<(b-y)*(s-v)/(E-v)+y&&(c=!c)}return c}function fx(n){const i=n.slice();return i.sort((o,s)=>o.x<s.x?-1:o.x>s.x?1:o.y<s.y?-1:o.y>s.y?1:0),gx(i)}function gx(n){if(n.length<=1)return n.slice();const i=[];for(let s=0;s<n.length;s++){const c=n[s];for(;i.length>=2;){const u=i[i.length-1],h=i[i.length-2];if((u.x-h.x)*(c.y-h.y)>=(u.y-h.y)*(c.x-h.x))i.pop();else break}i.push(c)}i.pop();const o=[];for(let s=n.length-1;s>=0;s--){const c=n[s];for(;o.length>=2;){const u=o[o.length-1],h=o[o.length-2];if((u.x-h.x)*(c.y-h.y)>=(u.y-h.y)*(c.x-h.x))o.pop();else break}o.push(c)}return o.pop(),i.length===1&&o.length===1&&i[0].x===o[0].x&&i[0].y===o[0].y?i:i.concat(o)}var mx=bf,Tf=kf;const yx=mx,vx=w.forwardRef(({className:n,sideOffset:i=4,...o},s)=>p.jsx(Tf,{ref:s,sideOffset:i,className:tt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o}));vx.displayName=Tf.displayName;var Ha=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Va=typeof window>"u"||"Deno"in globalThis;function Gt(){}function xx(n,i){return typeof n=="function"?n(i):n}function bx(n){return typeof n=="number"&&n>=0&&n!==1/0}function wx(n,i){return Math.max(n+(i||0)-Date.now(),0)}function ec(n,i){return typeof n=="function"?n(i):n}function kx(n,i){return typeof n=="function"?n(i):n}function Dp(n,i){const{type:o="all",exact:s,fetchStatus:c,predicate:u,queryKey:h,stale:f}=n;if(h){if(s){if(i.queryHash!==Sc(h,i.options))return!1}else if(!Qi(i.queryKey,h))return!1}if(o!=="all"){const m=i.isActive();if(o==="active"&&!m||o==="inactive"&&m)return!1}return!(typeof f=="boolean"&&i.isStale()!==f||c&&c!==i.state.fetchStatus||u&&!u(i))}function Op(n,i){const{exact:o,status:s,predicate:c,mutationKey:u}=n;if(u){if(!i.options.mutationKey)return!1;if(o){if(qi(i.options.mutationKey)!==qi(u))return!1}else if(!Qi(i.options.mutationKey,u))return!1}return!(s&&i.state.status!==s||c&&!c(i))}function Sc(n,i){return(i?.queryKeyHashFn||qi)(n)}function qi(n){return JSON.stringify(n,(i,o)=>tc(o)?Object.keys(o).sort().reduce((s,c)=>(s[c]=o[c],s),{}):o)}function Qi(n,i){return n===i?!0:typeof n!=typeof i?!1:n&&i&&typeof n=="object"&&typeof i=="object"?Object.keys(i).every(o=>Qi(n[o],i[o])):!1}function Ef(n,i){if(n===i)return n;const o=Bp(n)&&Bp(i);if(o||tc(n)&&tc(i)){const s=o?n:Object.keys(n),c=s.length,u=o?i:Object.keys(i),h=u.length,f=o?[]:{},m=new Set(s);let y=0;for(let v=0;v<h;v++){const b=o?v:u[v];(!o&&m.has(b)||o)&&n[b]===void 0&&i[b]===void 0?(f[b]=void 0,y++):(f[b]=Ef(n[b],i[b]),f[b]===n[b]&&n[b]!==void 0&&y++)}return c===h&&y===c?n:f}return i}function Bp(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function tc(n){if(!Up(n))return!1;const i=n.constructor;if(i===void 0)return!0;const o=i.prototype;return!(!Up(o)||!o.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Up(n){return Object.prototype.toString.call(n)==="[object Object]"}function Cx(n){return new Promise(i=>{setTimeout(i,n)})}function Sx(n,i,o){return typeof o.structuralSharing=="function"?o.structuralSharing(n,i):o.structuralSharing!==!1?Ef(n,i):i}function Tx(n,i,o=0){const s=[...n,i];return o&&s.length>o?s.slice(1):s}function Ex(n,i,o=0){const s=[i,...n];return o&&s.length>o?s.slice(0,-1):s}var Tc=Symbol();function Pf(n,i){return!n.queryFn&&i?.initialPromise?()=>i.initialPromise:!n.queryFn||n.queryFn===Tc?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var Px=class extends Ha{#e;#t;#n;constructor(){super(),this.#n=n=>{if(!Va&&window.addEventListener){const i=()=>n();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()})}setFocused(n){this.#e!==n&&(this.#e=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(i=>{i(n)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Af=new Px,Ax=class extends Ha{#e=!0;#t;#n;constructor(){super(),this.#n=n=>{if(!Va&&window.addEventListener){const i=()=>n(!0),o=()=>n(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(this.setOnline.bind(this))}setOnline(n){this.#e!==n&&(this.#e=n,this.listeners.forEach(o=>{o(n)}))}isOnline(){return this.#e}},ja=new Ax;function Ix(){let n,i;const o=new Promise((c,u)=>{n=c,i=u});o.status="pending",o.catch(()=>{});function s(c){Object.assign(o,c),delete o.resolve,delete o.reject}return o.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},o.reject=c=>{s({status:"rejected",reason:c}),i(c)},o}function Rx(n){return Math.min(1e3*2**n,3e4)}function If(n){return(n??"online")==="online"?ja.isOnline():!0}var Rf=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function Ul(n){return n instanceof Rf}function Nf(n){let i=!1,o=0,s=!1,c;const u=Ix(),h=S=>{s||(E(new Rf(S)),n.abort?.())},f=()=>{i=!0},m=()=>{i=!1},y=()=>Af.isFocused()&&(n.networkMode==="always"||ja.isOnline())&&n.canRun(),v=()=>If(n.networkMode)&&n.canRun(),b=S=>{s||(s=!0,n.onSuccess?.(S),c?.(),u.resolve(S))},E=S=>{s||(s=!0,n.onError?.(S),c?.(),u.reject(S))},x=()=>new Promise(S=>{c=C=>{(s||y())&&S(C)},n.onPause?.()}).then(()=>{c=void 0,s||n.onContinue?.()}),I=()=>{if(s)return;let S;const C=o===0?n.initialPromise:void 0;try{S=C??n.fn()}catch(j){S=Promise.reject(j)}Promise.resolve(S).then(b).catch(j=>{if(s)return;const F=n.retry??(Va?0:3),_=n.retryDelay??Rx,O=typeof _=="function"?_(o,j):_,H=F===!0||typeof F=="number"&&o<F||typeof F=="function"&&F(o,j);if(i||!H){E(j);return}o++,n.onFail?.(o,j),Cx(O).then(()=>y()?void 0:x()).then(()=>{i?E(j):I()})})};return{promise:u,cancel:h,continue:()=>(c?.(),u),cancelRetry:f,continueRetry:m,canStart:v,start:()=>(v()?I():x().then(I),u)}}var Nx=n=>setTimeout(n,0);function Mx(){let n=[],i=0,o=f=>{f()},s=f=>{f()},c=Nx;const u=f=>{i?n.push(f):c(()=>{o(f)})},h=()=>{const f=n;n=[],f.length&&c(()=>{s(()=>{f.forEach(m=>{o(m)})})})};return{batch:f=>{let m;i++;try{m=f()}finally{i--,i||h()}return m},batchCalls:f=>(...m)=>{u(()=>{f(...m)})},schedule:u,setNotifyFunction:f=>{o=f},setBatchNotifyFunction:f=>{s=f},setScheduler:f=>{c=f}}}var at=Mx(),Mf=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bx(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Va?1/0:5*60*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}},jx=class extends Mf{#e;#t;#n;#i;#r;#a;#s;constructor(n){super(),this.#s=!1,this.#a=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#i=n.client,this.#n=this.#i.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#e=zx(this.options),this.state=n.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(n){this.options={...this.#a,...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(n,i){const o=Sx(this.state.data,n,this.options);return this.#o({data:o,type:"success",dataUpdatedAt:i?.updatedAt,manual:i?.manual}),o}setState(n,i){this.#o({type:"setState",state:n,setStateOptions:i})}cancel(n){const i=this.#r?.promise;return this.#r?.cancel(n),i?i.then(Gt).catch(Gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(n=>kx(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Tc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ec(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!wx(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(i=>i.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(i=>i.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(i=>i!==n),this.observers.length||(this.#r&&(this.#s?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(n,i){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(n&&this.setOptions(n),!this.options.queryFn){const m=this.observers.find(y=>y.options.queryFn);m&&this.setOptions(m.options)}const o=new AbortController,s=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,o.signal)})},c=()=>{const m=Pf(this.options,i),v=(()=>{const b={client:this.#i,queryKey:this.queryKey,meta:this.meta};return s(b),b})();return this.#s=!1,this.options.persister?this.options.persister(m,v,this):m(v)},h=(()=>{const m={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:c};return s(m),m})();this.options.behavior?.onFetch(h,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==h.fetchOptions?.meta)&&this.#o({type:"fetch",meta:h.fetchOptions?.meta});const f=m=>{Ul(m)&&m.silent||this.#o({type:"error",error:m}),Ul(m)||(this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this)),this.scheduleGc()};return this.#r=Nf({initialPromise:i?.initialPromise,fn:h.fetchFn,abort:o.abort.bind(o),onSuccess:m=>{if(m===void 0){f(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(m)}catch(y){f(y);return}this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),this.scheduleGc()},onError:f,onFail:(m,y)=>{this.#o({type:"failed",failureCount:m,error:y})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0}),this.#r.start()}#o(n){const i=o=>{switch(n.type){case"failed":return{...o,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...Fx(o.data,this.options),fetchMeta:n.meta??null};case"success":return this.#t=void 0,{...o,data:n.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=n.error;return Ul(s)&&s.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...o,error:s,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...n.state}}};this.state=i(this.state),at.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:n})})}};function Fx(n,i){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:If(i.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function zx(n){const i=typeof n.initialData=="function"?n.initialData():n.initialData,o=i!==void 0,s=o?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:i,dataUpdateCount:0,dataUpdatedAt:o?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var _x=class extends Ha{constructor(n={}){super(),this.config=n,this.#e=new Map}#e;build(n,i,o){const s=i.queryKey,c=i.queryHash??Sc(s,i);let u=this.get(c);return u||(u=new jx({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(i),state:o,defaultOptions:n.getQueryDefaults(s)}),this.add(u)),u}add(n){this.#e.has(n.queryHash)||(this.#e.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=this.#e.get(n.queryHash);i&&(n.destroy(),i===n&&this.#e.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){at.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#e.get(n)}getAll(){return[...this.#e.values()]}find(n){const i={exact:!0,...n};return this.getAll().find(o=>Dp(i,o))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(o=>Dp(n,o)):i}notify(n){at.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){at.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){at.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Lx=class extends Mf{#e;#t;#n;constructor(n){super(),this.mutationId=n.mutationId,this.#t=n.mutationCache,this.#e=[],this.state=n.state||Dx(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#e.includes(n)||(this.#e.push(n),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#e=this.#e.filter(i=>i!==n),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(n){const i=()=>{this.#i({type:"continue"})};this.#n=Nf({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(c,u)=>{this.#i({type:"failed",failureCount:c,error:u})},onPause:()=>{this.#i({type:"pause"})},onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const o=this.state.status==="pending",s=!this.#n.canStart();try{if(o)i();else{this.#i({type:"pending",variables:n,isPaused:s}),await this.#t.config.onMutate?.(n,this);const u=await this.options.onMutate?.(n);u!==this.state.context&&this.#i({type:"pending",context:u,variables:n,isPaused:s})}const c=await this.#n.start();return await this.#t.config.onSuccess?.(c,n,this.state.context,this),await this.options.onSuccess?.(c,n,this.state.context),await this.#t.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,n,this.state.context),this.#i({type:"success",data:c}),c}catch(c){try{throw await this.#t.config.onError?.(c,n,this.state.context,this),await this.options.onError?.(c,n,this.state.context),await this.#t.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,n,this.state.context),c}finally{this.#i({type:"error",error:c})}}finally{this.#t.runNext(this)}}#i(n){const i=o=>{switch(n.type){case"failed":return{...o,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...o,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:n.error,failureCount:o.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=i(this.state),at.batch(()=>{this.#e.forEach(o=>{o.onMutationUpdate(n)}),this.#t.notify({mutation:this,type:"updated",action:n})})}};function Dx(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ox=class extends Ha{constructor(n={}){super(),this.config=n,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(n,i,o){const s=new Lx({mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(i),state:o});return this.add(s),s}add(n){this.#e.add(n);const i=ka(n);if(typeof i=="string"){const o=this.#t.get(i);o?o.push(n):this.#t.set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#e.delete(n)){const i=ka(n);if(typeof i=="string"){const o=this.#t.get(i);if(o)if(o.length>1){const s=o.indexOf(n);s!==-1&&o.splice(s,1)}else o[0]===n&&this.#t.delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=ka(n);if(typeof i=="string"){const s=this.#t.get(i)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const i=ka(n);return typeof i=="string"?this.#t.get(i)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){at.batch(()=>{this.#e.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(n){const i={exact:!0,...n};return this.getAll().find(o=>Op(i,o))}findAll(n={}){return this.getAll().filter(i=>Op(n,i))}notify(n){at.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return at.batch(()=>Promise.all(n.map(i=>i.continue().catch(Gt))))}};function ka(n){return n.options.scope?.id}function Wp(n){return{onFetch:(i,o)=>{const s=i.options,c=i.fetchOptions?.meta?.fetchMore?.direction,u=i.state.data?.pages||[],h=i.state.data?.pageParams||[];let f={pages:[],pageParams:[]},m=0;const y=async()=>{let v=!1;const b=I=>{Object.defineProperty(I,"signal",{enumerable:!0,get:()=>(i.signal.aborted?v=!0:i.signal.addEventListener("abort",()=>{v=!0}),i.signal)})},E=Pf(i.options,i.fetchOptions),x=async(I,S,C)=>{if(v)return Promise.reject();if(S==null&&I.pages.length)return Promise.resolve(I);const F=(()=>{const q={client:i.client,queryKey:i.queryKey,pageParam:S,direction:C?"backward":"forward",meta:i.options.meta};return b(q),q})(),_=await E(F),{maxPages:O}=i.options,H=C?Ex:Tx;return{pages:H(I.pages,_,O),pageParams:H(I.pageParams,S,O)}};if(c&&u.length){const I=c==="backward",S=I?Bx:Gp,C={pages:u,pageParams:h},j=S(s,C);f=await x(C,j,I)}else{const I=n??u.length;do{const S=m===0?h[0]??s.initialPageParam:Gp(s,f);if(m>0&&S==null)break;f=await x(f,S),m++}while(m<I)}return f};i.options.persister?i.fetchFn=()=>i.options.persister?.(y,{client:i.client,queryKey:i.queryKey,meta:i.options.meta,signal:i.signal},o):i.fetchFn=y}}}function Gp(n,{pages:i,pageParams:o}){const s=i.length-1;return i.length>0?n.getNextPageParam(i[s],i,o[s],o):void 0}function Bx(n,{pages:i,pageParams:o}){return i.length>0?n.getPreviousPageParam?.(i[0],i,o[0],o):void 0}var Ux=class{#e;#t;#n;#i;#r;#a;#s;#o;constructor(n={}){this.#e=n.queryCache||new _x,this.#t=n.mutationCache||new Ox,this.#n=n.defaultOptions||{},this.#i=new Map,this.#r=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#s=Af.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=ja.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#s?.(),this.#s=void 0,this.#o?.(),this.#o=void 0)}isFetching(n){return this.#e.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#t.findAll({...n,status:"pending"}).length}getQueryData(n){const i=this.defaultQueryOptions({queryKey:n});return this.#e.get(i.queryHash)?.state.data}ensureQueryData(n){const i=this.defaultQueryOptions(n),o=this.#e.build(this,i),s=o.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&o.isStaleByTime(ec(i.staleTime,o))&&this.prefetchQuery(i),Promise.resolve(s))}getQueriesData(n){return this.#e.findAll(n).map(({queryKey:i,state:o})=>{const s=o.data;return[i,s]})}setQueryData(n,i,o){const s=this.defaultQueryOptions({queryKey:n}),u=this.#e.get(s.queryHash)?.state.data,h=xx(i,u);if(h!==void 0)return this.#e.build(this,s).setData(h,{...o,manual:!0})}setQueriesData(n,i,o){return at.batch(()=>this.#e.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,i,o)]))}getQueryState(n){const i=this.defaultQueryOptions({queryKey:n});return this.#e.get(i.queryHash)?.state}removeQueries(n){const i=this.#e;at.batch(()=>{i.findAll(n).forEach(o=>{i.remove(o)})})}resetQueries(n,i){const o=this.#e;return at.batch(()=>(o.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},i)))}cancelQueries(n,i={}){const o={revert:!0,...i},s=at.batch(()=>this.#e.findAll(n).map(c=>c.cancel(o)));return Promise.all(s).then(Gt).catch(Gt)}invalidateQueries(n,i={}){return at.batch(()=>(this.#e.findAll(n).forEach(o=>{o.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},i)))}refetchQueries(n,i={}){const o={...i,cancelRefetch:i.cancelRefetch??!0},s=at.batch(()=>this.#e.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let u=c.fetch(void 0,o);return o.throwOnError||(u=u.catch(Gt)),c.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(s).then(Gt)}fetchQuery(n){const i=this.defaultQueryOptions(n);i.retry===void 0&&(i.retry=!1);const o=this.#e.build(this,i);return o.isStaleByTime(ec(i.staleTime,o))?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(Gt).catch(Gt)}fetchInfiniteQuery(n){return n.behavior=Wp(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(Gt).catch(Gt)}ensureInfiniteQueryData(n){return n.behavior=Wp(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return ja.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,i){this.#i.set(qi(n),{queryKey:n,defaultOptions:i})}getQueryDefaults(n){const i=[...this.#i.values()],o={};return i.forEach(s=>{Qi(n,s.queryKey)&&Object.assign(o,s.defaultOptions)}),o}setMutationDefaults(n,i){this.#r.set(qi(n),{mutationKey:n,defaultOptions:i})}getMutationDefaults(n){const i=[...this.#r.values()],o={};return i.forEach(s=>{Qi(n,s.mutationKey)&&Object.assign(o,s.defaultOptions)}),o}defaultQueryOptions(n){if(n._defaulted)return n;const i={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return i.queryHash||(i.queryHash=Sc(i.queryKey,i)),i.refetchOnReconnect===void 0&&(i.refetchOnReconnect=i.networkMode!=="always"),i.throwOnError===void 0&&(i.throwOnError=!!i.suspense),!i.networkMode&&i.persister&&(i.networkMode="offlineFirst"),i.queryFn===Tc&&(i.enabled=!1),i}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Wx=w.createContext(void 0),Gx=({client:n,children:i})=>(w.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),p.jsx(Wx.Provider,{value:n,children:i}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},Yi.apply(this,arguments)}var $n;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})($n||($n={}));const Hp="popstate";function Hx(n){n===void 0&&(n={});function i(c,u){let{pathname:h="/",search:f="",hash:m=""}=mr(c.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),nc("",{pathname:h,search:f,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(c,u){let h=c.document.querySelector("base"),f="";if(h&&h.getAttribute("href")){let m=c.location.href,y=m.indexOf("#");f=y===-1?m:m.slice(0,y)}return f+"#"+(typeof u=="string"?u:Fa(u))}function s(c,u){Ec(c.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return $x(i,o,s,n)}function Ue(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Ec(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Vx(){return Math.random().toString(36).substr(2,8)}function Vp(n,i){return{usr:n.state,key:n.key,idx:i}}function nc(n,i,o,s){return o===void 0&&(o=null),Yi({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof i=="string"?mr(i):i,{state:o,key:i&&i.key||s||Vx()})}function Fa(n){let{pathname:i="/",search:o="",hash:s=""}=n;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function mr(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substr(o),n=n.substr(0,o));let s=n.indexOf("?");s>=0&&(i.search=n.substr(s),n=n.substr(0,s)),n&&(i.pathname=n)}return i}function $x(n,i,o,s){s===void 0&&(s={});let{window:c=document.defaultView,v5Compat:u=!1}=s,h=c.history,f=$n.Pop,m=null,y=v();y==null&&(y=0,h.replaceState(Yi({},h.state,{idx:y}),""));function v(){return(h.state||{idx:null}).idx}function b(){f=$n.Pop;let C=v(),j=C==null?null:C-y;y=C,m&&m({action:f,location:S.location,delta:j})}function E(C,j){f=$n.Push;let F=nc(S.location,C,j);o&&o(F,C),y=v()+1;let _=Vp(F,y),O=S.createHref(F);try{h.pushState(_,"",O)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;c.location.assign(O)}u&&m&&m({action:f,location:S.location,delta:1})}function x(C,j){f=$n.Replace;let F=nc(S.location,C,j);o&&o(F,C),y=v();let _=Vp(F,y),O=S.createHref(F);h.replaceState(_,"",O),u&&m&&m({action:f,location:S.location,delta:0})}function I(C){let j=c.location.origin!=="null"?c.location.origin:c.location.href,F=typeof C=="string"?C:Fa(C);return F=F.replace(/ $/,"%20"),Ue(j,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,j)}let S={get action(){return f},get location(){return n(c,h)},listen(C){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Hp,b),m=C,()=>{c.removeEventListener(Hp,b),m=null}},createHref(C){return i(c,C)},createURL:I,encodeLocation(C){let j=I(C);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:E,replace:x,go(C){return h.go(C)}};return S}var $p;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})($p||($p={}));function qx(n,i,o){return o===void 0&&(o="/"),Qx(n,i,o)}function Qx(n,i,o,s){let c=typeof i=="string"?mr(i):i,u=Pc(c.pathname||"/",o);if(u==null)return null;let h=jf(n);Yx(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let y=s2(u);f=i2(h[m],y)}return f}function jf(n,i,o,s){i===void 0&&(i=[]),o===void 0&&(o=[]),s===void 0&&(s="");let c=(u,h,f)=>{let m={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(Ue(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let y=qn([s,m.relativePath]),v=o.concat(m);u.children&&u.children.length>0&&(Ue(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),jf(u.children,i,v,y)),!(u.path==null&&!u.index)&&i.push({path:y,score:n2(y,u.index),routesMeta:v})};return n.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))c(u,h);else for(let m of Ff(u.path))c(u,h,m)}),i}function Ff(n){let i=n.split("/");if(i.length===0)return[];let[o,...s]=i,c=o.endsWith("?"),u=o.replace(/\?$/,"");if(s.length===0)return c?[u,""]:[u];let h=Ff(s.join("/")),f=[];return f.push(...h.map(m=>m===""?u:[u,m].join("/"))),c&&f.push(...h),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function Yx(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:r2(i.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}const Kx=/^:[\w-]+$/,Xx=3,Jx=2,Zx=1,e2=10,t2=-2,qp=n=>n==="*";function n2(n,i){let o=n.split("/"),s=o.length;return o.some(qp)&&(s+=t2),i&&(s+=Jx),o.filter(c=>!qp(c)).reduce((c,u)=>c+(Kx.test(u)?Xx:u===""?Zx:e2),s)}function r2(n,i){return n.length===i.length&&n.slice(0,-1).every((s,c)=>s===i[c])?n[n.length-1]-i[i.length-1]:0}function i2(n,i,o){let{routesMeta:s}=n,c={},u="/",h=[];for(let f=0;f<s.length;++f){let m=s[f],y=f===s.length-1,v=u==="/"?i:i.slice(u.length)||"/",b=o2({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},v),E=m.route;if(!b)return null;Object.assign(c,b.params),h.push({params:c,pathname:qn([u,b.pathname]),pathnameBase:u2(qn([u,b.pathnameBase])),route:E}),b.pathnameBase!=="/"&&(u=qn([u,b.pathnameBase]))}return h}function o2(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,s]=a2(n.path,n.caseSensitive,n.end),c=i.match(o);if(!c)return null;let u=c[0],h=u.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:s.reduce((y,v,b)=>{let{paramName:E,isOptional:x}=v;if(E==="*"){let S=f[b]||"";h=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const I=f[b];return x&&!I?y[E]=void 0:y[E]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:n}}function a2(n,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),Ec(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(s.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),s]}function s2(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Ec(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),n}}function Pc(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,s=n.charAt(o);return s&&s!=="/"?null:n.slice(o)||"/"}function l2(n,i){i===void 0&&(i="/");let{pathname:o,search:s="",hash:c=""}=typeof n=="string"?mr(n):n;return{pathname:o?o.startsWith("/")?o:c2(o,i):i,search:p2(s),hash:h2(c)}}function c2(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Wl(n,i,o,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d2(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function zf(n,i){let o=d2(n);return i?o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase):o.map(s=>s.pathnameBase)}function _f(n,i,o,s){s===void 0&&(s=!1);let c;typeof n=="string"?c=mr(n):(c=Yi({},n),Ue(!c.pathname||!c.pathname.includes("?"),Wl("?","pathname","search",c)),Ue(!c.pathname||!c.pathname.includes("#"),Wl("#","pathname","hash",c)),Ue(!c.search||!c.search.includes("#"),Wl("#","search","hash",c)));let u=n===""||c.pathname==="",h=u?"/":c.pathname,f;if(h==null)f=o;else{let b=i.length-1;if(!s&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),b-=1;c.pathname=E.join("/")}f=b>=0?i[b]:"/"}let m=l2(c,f),y=h&&h!=="/"&&h.endsWith("/"),v=(u||h===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(y||v)&&(m.pathname+="/"),m}const qn=n=>n.join("/").replace(/\/\/+/g,"/"),u2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),p2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,h2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function f2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Lf=["post","put","patch","delete"];new Set(Lf);const g2=["get",...Lf];new Set(g2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},Ki.apply(this,arguments)}const Ac=w.createContext(null),m2=w.createContext(null),yr=w.createContext(null),$a=w.createContext(null),Jn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Df=w.createContext(null);function y2(n,i){let{relative:o}=i===void 0?{}:i;Zi()||Ue(!1);let{basename:s,navigator:c}=w.useContext(yr),{hash:u,pathname:h,search:f}=Uf(n,{relative:o}),m=h;return s!=="/"&&(m=h==="/"?s:qn([s,h])),c.createHref({pathname:m,search:f,hash:u})}function Zi(){return w.useContext($a)!=null}function vr(){return Zi()||Ue(!1),w.useContext($a).location}function Of(n){w.useContext(yr).static||w.useLayoutEffect(n)}function Bf(){let{isDataRoute:n}=w.useContext(Jn);return n?N2():v2()}function v2(){Zi()||Ue(!1);let n=w.useContext(Ac),{basename:i,future:o,navigator:s}=w.useContext(yr),{matches:c}=w.useContext(Jn),{pathname:u}=vr(),h=JSON.stringify(zf(c,o.v7_relativeSplatPath)),f=w.useRef(!1);return Of(()=>{f.current=!0}),w.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){s.go(y);return}let b=_f(y,JSON.parse(h),u,v.relative==="path");n==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:qn([i,b.pathname])),(v.replace?s.replace:s.push)(b,v.state,v)},[i,s,h,u,n])}function x2(){let{matches:n}=w.useContext(Jn),i=n[n.length-1];return i?i.params:{}}function Uf(n,i){let{relative:o}=i===void 0?{}:i,{future:s}=w.useContext(yr),{matches:c}=w.useContext(Jn),{pathname:u}=vr(),h=JSON.stringify(zf(c,s.v7_relativeSplatPath));return w.useMemo(()=>_f(n,JSON.parse(h),u,o==="path"),[n,h,u,o])}function b2(n,i){return w2(n,i)}function w2(n,i,o,s){Zi()||Ue(!1);let{navigator:c}=w.useContext(yr),{matches:u}=w.useContext(Jn),h=u[u.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let y=vr(),v;if(i){var b;let C=typeof i=="string"?mr(i):i;m==="/"||(b=C.pathname)!=null&&b.startsWith(m)||Ue(!1),v=C}else v=y;let E=v.pathname||"/",x=E;if(m!=="/"){let C=m.replace(/^\//,"").split("/");x="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let I=qx(n,{pathname:x}),S=E2(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},f,C.params),pathname:qn([m,c.encodeLocation?c.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:qn([m,c.encodeLocation?c.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),u,o,s);return i&&S?w.createElement($a.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:$n.Pop}},S):S}function k2(){let n=R2(),i=f2(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},i),o?w.createElement("pre",{style:c},o):null,null)}const C2=w.createElement(k2,null);class S2 extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?w.createElement(Jn.Provider,{value:this.props.routeContext},w.createElement(Df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T2(n){let{routeContext:i,match:o,children:s}=n,c=w.useContext(Ac);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),w.createElement(Jn.Provider,{value:i},s)}function E2(n,i,o,s){var c;if(i===void 0&&(i=[]),o===void 0&&(o=null),s===void 0&&(s=null),n==null){var u;if(!o)return null;if(o.errors)n=o.matches;else if((u=s)!=null&&u.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let h=n,f=(c=o)==null?void 0:c.errors;if(f!=null){let v=h.findIndex(b=>b.route.id&&f?.[b.route.id]!==void 0);v>=0||Ue(!1),h=h.slice(0,Math.min(h.length,v+1))}let m=!1,y=-1;if(o&&s&&s.v7_partialHydration)for(let v=0;v<h.length;v++){let b=h[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(y=v),b.route.id){let{loaderData:E,errors:x}=o,I=b.route.loader&&E[b.route.id]===void 0&&(!x||x[b.route.id]===void 0);if(b.route.lazy||I){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((v,b,E)=>{let x,I=!1,S=null,C=null;o&&(x=f&&b.route.id?f[b.route.id]:void 0,S=b.route.errorElement||C2,m&&(y<0&&E===0?(M2("route-fallback"),I=!0,C=null):y===E&&(I=!0,C=b.route.hydrateFallbackElement||null)));let j=i.concat(h.slice(0,E+1)),F=()=>{let _;return x?_=S:I?_=C:b.route.Component?_=w.createElement(b.route.Component,null):b.route.element?_=b.route.element:_=v,w.createElement(T2,{match:b,routeContext:{outlet:v,matches:j,isDataRoute:o!=null},children:_})};return o&&(b.route.ErrorBoundary||b.route.errorElement||E===0)?w.createElement(S2,{location:o.location,revalidation:o.revalidation,component:S,error:x,children:F(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):F()},null)}var Wf=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Wf||{}),Gf=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Gf||{});function P2(n){let i=w.useContext(Ac);return i||Ue(!1),i}function A2(n){let i=w.useContext(m2);return i||Ue(!1),i}function I2(n){let i=w.useContext(Jn);return i||Ue(!1),i}function Hf(n){let i=I2(),o=i.matches[i.matches.length-1];return o.route.id||Ue(!1),o.route.id}function R2(){var n;let i=w.useContext(Df),o=A2(),s=Hf();return i!==void 0?i:(n=o.errors)==null?void 0:n[s]}function N2(){let{router:n}=P2(Wf.UseNavigateStable),i=Hf(Gf.UseNavigateStable),o=w.useRef(!1);return Of(()=>{o.current=!0}),w.useCallback(function(c,u){u===void 0&&(u={}),o.current&&(typeof c=="number"?n.navigate(c):n.navigate(c,Ki({fromRouteId:i},u)))},[n,i])}const Qp={};function M2(n,i,o){Qp[n]||(Qp[n]=!0)}function j2(n,i){n?.v7_startTransition,n?.v7_relativeSplatPath}function qr(n){Ue(!1)}function F2(n){let{basename:i="/",children:o=null,location:s,navigationType:c=$n.Pop,navigator:u,static:h=!1,future:f}=n;Zi()&&Ue(!1);let m=i.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:m,navigator:u,static:h,future:Ki({v7_relativeSplatPath:!1},f)}),[m,f,u,h]);typeof s=="string"&&(s=mr(s));let{pathname:v="/",search:b="",hash:E="",state:x=null,key:I="default"}=s,S=w.useMemo(()=>{let C=Pc(v,m);return C==null?null:{location:{pathname:C,search:b,hash:E,state:x,key:I},navigationType:c}},[m,v,b,E,x,I,c]);return S==null?null:w.createElement(yr.Provider,{value:y},w.createElement($a.Provider,{children:o,value:S}))}function z2(n){let{children:i,location:o}=n;return b2(rc(i),o)}new Promise(()=>{});function rc(n,i){i===void 0&&(i=[]);let o=[];return w.Children.forEach(n,(s,c)=>{if(!w.isValidElement(s))return;let u=[...i,c];if(s.type===w.Fragment){o.push.apply(o,rc(s.props.children,u));return}s.type!==qr&&Ue(!1),!s.props.index||!s.props.children||Ue(!1);let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=rc(s.props.children,u)),o.push(h)}),o}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},ic.apply(this,arguments)}function _2(n,i){if(n==null)return{};var o={},s=Object.keys(n),c,u;for(u=0;u<s.length;u++)c=s[u],!(i.indexOf(c)>=0)&&(o[c]=n[c]);return o}function L2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function D2(n,i){return n.button===0&&(!i||i==="_self")&&!L2(n)}const O2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],B2="6";try{window.__reactRouterVersion=B2}catch{}const U2="startTransition",Yp=th[U2];function W2(n){let{basename:i,children:o,future:s,window:c}=n,u=w.useRef();u.current==null&&(u.current=Hx({window:c,v5Compat:!0}));let h=u.current,[f,m]=w.useState({action:h.action,location:h.location}),{v7_startTransition:y}=s||{},v=w.useCallback(b=>{y&&Yp?Yp(()=>m(b)):m(b)},[m,y]);return w.useLayoutEffect(()=>h.listen(v),[h,v]),w.useEffect(()=>j2(s),[s]),w.createElement(F2,{basename:i,children:o,location:f.location,navigationType:f.action,navigator:h,future:s})}const G2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xn=w.forwardRef(function(i,o){let{onClick:s,relative:c,reloadDocument:u,replace:h,state:f,target:m,to:y,preventScrollReset:v,viewTransition:b}=i,E=_2(i,O2),{basename:x}=w.useContext(yr),I,S=!1;if(typeof y=="string"&&H2.test(y)&&(I=y,G2))try{let _=new URL(window.location.href),O=y.startsWith("//")?new URL(_.protocol+y):new URL(y),H=Pc(O.pathname,x);O.origin===_.origin&&H!=null?y=H+O.search+O.hash:S=!0}catch{}let C=y2(y,{relative:c}),j=V2(y,{replace:h,state:f,target:m,preventScrollReset:v,relative:c,viewTransition:b});function F(_){s&&s(_),_.defaultPrevented||j(_)}return w.createElement("a",ic({},E,{href:I||C,onClick:S||u?s:F,ref:o,target:m}))});var Kp;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var Xp;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Xp||(Xp={}));function V2(n,i){let{target:o,replace:s,state:c,preventScrollReset:u,relative:h,viewTransition:f}=i===void 0?{}:i,m=Bf(),y=vr(),v=Uf(n,{relative:h});return w.useCallback(b=>{if(D2(b,o)){b.preventDefault();let E=s!==void 0?s:Fa(y)===Fa(v);m(n,{replace:E,state:c,preventScrollReset:u,relative:h,viewTransition:f})}},[y,m,v,s,c,o,n,u,h,f])}const qa=()=>{const[n,i]=w.useState(!1),[o,s]=w.useState(!1),c=vr(),u=Bf();w.useEffect(()=>{const f=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const h=f=>{if(c.pathname==="/"){const m=document.getElementById(f);m&&m.scrollIntoView({behavior:"smooth"})}else u(`/#${f}`,{replace:!0}),setTimeout(()=>{const m=document.getElementById(f);m&&m.scrollIntoView({behavior:"smooth"})},100);s(!1)};return p.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"bg-background/90 backdrop-blur-md border-b border-border":"bg-transparent"}`,children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"flex items-center justify-between h-16 lg:h-20",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx(xn,{to:"/",onClick:f=>{if(c.pathname==="/"){f.preventDefault();const m=document.getElementById("hero");m&&m.scrollIntoView({behavior:"smooth"})}},className:`text-2xl font-serif font-bold hover:scale-105 transition-all duration-300 ${n?"gradient-text":"text-white"}`,children:"Ahmed Wafdy"})}),p.jsx("div",{className:"hidden md:block",children:p.jsx("div",{className:"ml-10 flex items-baseline space-x-8",children:["About","Skills","Experience","Portfolio","Blog","Contact"].map(f=>{const m=f.toLowerCase();return m==="blog"?p.jsxs(xn,{to:"/blog",className:"text-muted-foreground hover:text-primary transition-colors duration-300 relative group px-3 py-2",onClick:()=>s(!1),children:[f,p.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"})]},f):p.jsxs("button",{onClick:()=>h(m),className:"text-muted-foreground hover:text-primary transition-colors duration-300 relative group px-3 py-2",children:[f,p.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"})]},f)})})}),p.jsx("div",{className:"md:hidden",children:p.jsx("button",{onClick:()=>s(!o),className:"text-muted-foreground hover:text-primary transition-colors duration-300 p-2",children:o?p.jsx(Dh,{size:24}):p.jsx(c1,{size:24})})})]}),o&&p.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border",children:p.jsx("div",{className:"px-6 py-4 space-y-4",children:["About","Skills","Experience","Portfolio","Blog","Contact"].map(f=>{const m=f.toLowerCase();return m==="blog"?p.jsx(xn,{to:"/blog",className:"block text-muted-foreground hover:text-primary transition-colors duration-300 text-lg",onClick:()=>s(!1),children:f},f):p.jsx("button",{onClick:()=>h(m),className:"block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 text-lg",children:f},f)})})})]})})},$2=pc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),gr=w.forwardRef(({className:n,variant:i,size:o,asChild:s=!1,...c},u)=>{const h=s?i0:"button";return p.jsx(h,{className:tt($2({variant:i,size:o,className:n})),ref:u,...c})});gr.displayName="Button";const q2=()=>{const n=i=>{const o=document.getElementById(i);o&&o.scrollIntoView({behavior:"smooth"})};return p.jsxs("section",{id:"hero",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 gradient-bg opacity-20"}),p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"})]}),p.jsxs("div",{className:"relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"animate-fade-in",children:[p.jsxs("h1",{className:"text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight",children:[p.jsx("span",{className:"block",children:"Ahmed Adel"}),p.jsx("span",{className:"gradient-text block",children:"Wafdy"})]}),p.jsx("p",{className:"text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left animation-delay-300",children:"Automotive Software Engineer | C++, Yocto Project & Embedded Linux Enthusiast"}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right animation-delay-600",children:[p.jsx(gr,{size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-lift glow-effect hover:animate-glow-pulse",onClick:()=>n("portfolio"),children:"View My Work"}),p.jsx(gr,{variant:"outline",size:"lg",className:"border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg hover-lift",onClick:()=>n("about"),children:"About Me"})]})]}),p.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:p.jsx("button",{onClick:()=>n("about"),className:"text-muted-foreground hover:text-primary transition-colors duration-300",children:p.jsx(Mh,{size:24})})})]})]})},Q2=()=>p.jsx("section",{id:"about",className:"py-20 lg:py-32",children:p.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"About Me"}),p.jsxs("div",{className:"space-y-6 text-lg text-muted-foreground leading-relaxed",children:[p.jsx("p",{children:"I am a passionate automotive software engineer with a strong foundation in embedded systems and a deep enthusiasm for cutting-edge automotive technologies. My journey in software development is driven by a commitment to innovation and excellence in the automotive industry."}),p.jsx("p",{children:"Currently seeking a Software Engineering role where I can apply my expertise in C++, Yocto Project, and embedded Linux to enhance infotainment and driver-assistance systems. I believe in creating robust, efficient software solutions that contribute to safer and more intelligent automotive experiences."}),p.jsx("p",{children:"With a B.S. in Engineering from Mansoura University, I combine academic knowledge with practical experience in embedded systems development. My focus on continuous learning keeps me at the forefront of emerging technologies in the automotive software domain."})]})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsx("h3",{className:"text-2xl font-serif font-semibold text-foreground",children:"Education & Objective"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"p-4 bg-card/50 rounded-lg border border-border/50",children:[p.jsx("h4",{className:"font-semibold text-foreground mb-2",children:"Bachelor of Science in Engineering"}),p.jsx("p",{className:"text-muted-foreground",children:"Mansoura University"})]}),p.jsxs("div",{className:"p-4 bg-card/50 rounded-lg border border-border/50",children:[p.jsx("h4",{className:"font-semibold text-foreground mb-2",children:"Career Objective"}),p.jsx("p",{className:"text-muted-foreground",children:"Seeking a Software Engineering role to apply expertise in C++, Yocto, and embedded Linux to enhance infotainment and driver-assistance systems in the automotive industry."})]})]})]})]}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center",children:p.jsxs("div",{className:"w-full h-full rounded-xl bg-card border border-border overflow-hidden",children:[p.jsx("img",{src:"/profile-photo.jpg",alt:"Ahmed Adel Wafdy - Software Engineer",className:"w-full h-full object-cover",onError:n=>{const i=n.target;i.style.display="none";const o=i.nextElementSibling;o&&(o.style.display="flex")}}),p.jsx("div",{className:"w-full h-full flex items-center justify-center",style:{display:"none"},children:p.jsxs("div",{className:"text-center space-y-4",children:[p.jsx("div",{className:"w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center",children:p.jsx("div",{className:"w-16 h-16 bg-primary rounded-full"})}),p.jsx("h3",{className:"text-xl font-serif font-semibold text-foreground",children:"Engineering Philosophy"}),p.jsx("p",{className:"text-muted-foreground text-sm max-w-xs",children:'"Innovation through robust code. Every system should be reliable, efficient, and scalable."'})]})})]})}),p.jsx("div",{className:"absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"}),p.jsx("div",{className:"absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse animation-delay-1000"})]})]})})}),Y2=()=>{const n=[{category:"Embedded Systems Expertise",skills:["C/C++","OOP","RTOS","Yocto","CMake"],icon:p.jsx(r1,{className:"w-6 h-6"})},{category:"Communication Protocols",skills:["UART","SPI","I2C","CAN","VSomeIP","D-Bus"],icon:p.jsx(p1,{className:"w-6 h-6"})},{category:"Software Development & Scripting",skills:["Bash","MISRA-C"],icon:p.jsx(n1,{className:"w-6 h-6"})}],i=[{name:"Growth-Oriented",icon:p.jsx(h1,{className:"w-5 h-5"})},{name:"Effective Communication",icon:p.jsx(d1,{className:"w-5 h-5"})},{name:"Teamwork",icon:p.jsx(m1,{className:"w-5 h-5"})},{name:"Innovative Thinking",icon:p.jsx(s1,{className:"w-5 h-5"})},{name:"Adaptable",icon:p.jsx(Lh,{className:"w-5 h-5"})}];return p.jsx("section",{id:"skills",className:"py-20 lg:py-32 bg-muted/30",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Skills & Expertise"}),p.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A comprehensive skill set spanning embedded systems development, automotive protocols, and collaborative software engineering practices."})]}),p.jsxs("div",{className:"grid lg:grid-cols-2 gap-16",children:[p.jsxs("div",{className:"space-y-8",children:[p.jsx("h3",{className:"text-3xl font-serif font-semibold text-foreground mb-8",children:"Technical Skills"}),p.jsx("div",{className:"space-y-6",children:n.map((o,s)=>p.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:[p.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[p.jsx("div",{className:"text-primary",children:o.icon}),p.jsx("h4",{className:"text-lg font-semibold text-foreground",children:o.category})]}),p.jsx("div",{className:"flex flex-wrap gap-2",children:o.skills.map((c,u)=>p.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20",children:c},u))})]},s))})]}),p.jsxs("div",{className:"space-y-8",children:[p.jsx("h3",{className:"text-3xl font-serif font-semibold text-foreground mb-8",children:"Soft Skills"}),p.jsx("div",{className:"grid gap-4",children:i.map((o,s)=>p.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"text-primary",children:o.icon}),p.jsx("span",{className:"text-lg font-medium text-foreground",children:o.name})]})},s))})]})]})]})})},K2=()=>{const n=[{year:"May 2025 - Present",title:"Contributor at The Linux Foundation",organization:"Google Summer of Code",type:"Part-time",description:["Contributing to The Linux Foundation open source projects","Working on kernel-level improvements and system optimization","Collaborating with global developers on critical Linux infrastructure"]},{year:"Nov 2024 - Present",title:"Chairperson",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Leading the computer society chapter with strategic vision and direction","Organizing technical events and educational programs for members","Managing cross-functional teams and fostering innovation initiatives"]},{year:"Nov 2023 - Nov 2024",title:"Head of Embedded Systems Committee",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Led embedded systems committee for 1 year and 1 month","Developed and delivered curriculum for embedded systems training","Supervised technical projects and mentored committee members"]},{year:"Jul 2023 - Nov 2023",title:"Embedded Systems Supervisor",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Supervised embedded systems projects and initiatives","Provided technical guidance and mentorship to team members","Coordinated project delivery and quality assurance processes"]},{year:"Jun 2024 - Sep 2024",title:"Linux Kernel Fundamentals",organization:"STMicroelectronics",type:"Internship",description:["Specialized in Linux kernel fundamentals and driver development","Gained expertise in POSIX threads and kernel-level programming","Applied knowledge to real-world embedded Linux environments","Location: Cairo, Egypt (On-site)"]},{year:"Jan 2024 - May 2024",title:"Linux System Programming Trainee",organization:"STMicroelectronics",type:"Internship",description:["Comprehensive training in Linux system programming concepts","Mastered GNU/Linux tools and GNU Debugger","Developed proficiency in 18+ technical skills including system optimization","Location: Cairo, Egypt (On-site)"]},{year:"Oct 2023 - Sep 2024",title:"Hardware Engineer - PCB Layout",organization:"Metanoia",type:"Full-time",description:["Designed and developed PCB layouts using Altium Designer","Specialized in Printed Circuit Board (PCB) Design and layout optimization","Applied hardware engineering principles to real-world projects","Location: Cairo, Egypt"]}];return p.jsx("section",{id:"experience",className:"py-20 lg:py-32",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Experience & Training"}),p.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A journey of continuous learning and leadership in automotive software engineering and embedded systems development."})]}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"}),p.jsx("div",{className:"space-y-12",children:n.map((i,o)=>p.jsxs("div",{className:"relative pl-20",children:[p.jsx("div",{className:"absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"}),p.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-serif font-semibold text-foreground mb-1",children:i.title}),p.jsx("p",{className:"text-primary font-medium",children:i.organization})]}),p.jsxs("div",{className:"mt-2 md:mt-0",children:[p.jsx("span",{className:"inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20",children:i.type}),p.jsx("span",{className:"block md:inline-block md:ml-3 text-muted-foreground text-sm mt-1 md:mt-0",children:i.year})]})]}),p.jsx("ul",{className:"space-y-2",children:i.description.map((s,c)=>p.jsxs("li",{className:"text-muted-foreground flex items-start",children:[p.jsx("span",{className:"text-primary mr-2 mt-1.5",children:"•"}),s]},c))})]})]},o))})]})]})})},eo=w.forwardRef(({className:n,...i},o)=>p.jsx("div",{ref:o,className:tt("rounded-lg border bg-card text-card-foreground shadow-sm",n),...i}));eo.displayName="Card";const Vf=w.forwardRef(({className:n,...i},o)=>p.jsx("div",{ref:o,className:tt("flex flex-col space-y-1.5 p-6",n),...i}));Vf.displayName="CardHeader";const $f=w.forwardRef(({className:n,...i},o)=>p.jsx("h3",{ref:o,className:tt("text-2xl font-semibold leading-none tracking-tight",n),...i}));$f.displayName="CardTitle";const qf=w.forwardRef(({className:n,...i},o)=>p.jsx("p",{ref:o,className:tt("text-sm text-muted-foreground",n),...i}));qf.displayName="CardDescription";const to=w.forwardRef(({className:n,...i},o)=>p.jsx("div",{ref:o,className:tt("p-6 pt-0",n),...i}));to.displayName="CardContent";const X2=w.forwardRef(({className:n,...i},o)=>p.jsx("div",{ref:o,className:tt("flex items-center p-6 pt-0",n),...i}));X2.displayName="CardFooter";const J2=pc("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function st({className:n,variant:i,children:o,...s}){return p.jsx("div",{className:tt(J2({variant:i}),n),...s,children:o})}const Z2=()=>{const[n,i]=w.useState("all"),o=[{id:1,title:"Software-Defined Vehicle (SDV)",category:"automotive",image:"https://imgs.search.brave.com/hhUhvtNTED6ZYYeaqN1MvvRGZFndZZH4C9WqhA2W2LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMXJ6/NHVpNDY0czZnNy5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS8wMzExMTQy/Ni9lQ29ja3BpdC1h/bmQtQ29ubmVjdGl2/aXR5LTEuanBn",description:"Comprehensive autonomous driving system with multiple ECU components for next-generation vehicle architecture.",longDescription:"This repository contains the OS Unit part of an Autonomous-Driving-System project featuring ECU-HeadUnit for infotainment, ECU-Control for vehicle operations, and a secure OTA update system. Built with Yocto Linux and designed for Raspberry Pi hardware.",tags:["Qt5/QML","C++","Yocto","CAN Bus","ROS2","OTA"],features:["Real-time vehicle status display","CAN bus communication protocol","Secure OTA updates with TLS 1.3","LIDAR and depth camera integration","Autonomous and manual control modes"],github:"https://github.com/AhmedAdelWafdy7/Software-Defined-Vehicle",demo:null,status:"Active Development"},{id:2,title:"AGL App Store (GSoC 2025)",category:"automotive",image:"https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80",description:"Flutter-based application store for Automotive Grade Linux with Flatpak integration and security-first design.",longDescription:"Revolutionary app store experience for In-Vehicle Infotainment systems built as part of Google Summer of Code 2025. Features comprehensive UI/UX design, AppStream metadata parsing, and automotive-grade security.",tags:["Flutter","AGL","Flatpak","AppStream","Security","UI/UX"],features:["Responsive automotive display optimization","AppStream XML metadata integration","Secure app sandboxing with Flatpak","Rating and review system","Root of trust implementation"],github:"https://github.com/AhmedAdelWafdy7/agl-app-store",demo:"https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store",status:"GSoC 2025"},{id:3,title:"Coffee-Dashboard (Yocto Layer)",category:"embedded",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",description:"Comprehensive dashboard application for managing and monitoring coffee brewing processes, integrated into Yocto Project.",longDescription:"A robust coffee brewing management system built as a custom Yocto layer. Features real-time monitoring, brewing parameter control, and analytics for embedded coffee machines with Qt5-based user interface.",tags:["Yocto","Qt5","Embedded Linux","BitBake","Dashboard","IoT"],features:["Real-time coffee brewing parameter monitoring","Custom Yocto layer with BitBake recipes","Qt5-based user interface","Data logging and brewing analytics","Integration with various coffee machines","Customizable alerts and notifications"],github:"https://github.com/AhmedAdelWafdy7/meta-coffeeDash",demo:null,status:"Completed"},{id:4,title:"In-Vehicle Infotainment System",category:"automotive",image:"https://images.unsplash.com/photo-1482029255085-35a4a48b7084?auto=format&fit=crop&w=600&q=80",description:"Advanced IVI system using Raspberry Pi4 that mimics real vehicle functionalities through Inter-Process Communication mechanisms.",longDescription:"A sophisticated infotainment system built using Qt for embedded GUI and COVESA's vsomeip for IPC, adhering to the AUTOSAR standard. Features include head unit application, PDC unit with ultrasonic sensors, and instrument cluster integration.",tags:["Qt","Raspberry Pi","vsomeip","AUTOSAR","Yocto","CAN Bus"],features:["CAN Communication with vehicle's bus","IPC Management using vsomeip","Multimedia Control for audio/video playback","Embedded GUI with Qt Compositor","PDC system with ultrasonic sensors"],github:"https://github.com/AhmedAdelWafdy7/Infotainment-System",demo:null,status:"Completed"},{id:5,title:"Master Embedded Systems Course",category:"baremetal",image:"https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",description:"Comprehensive embedded systems course covering ARM Cortex-M4 bare metal programming, peripheral drivers, and real-world projects.",longDescription:"Complete embedded systems mastery course featuring bare metal ARM Cortex-M4 programming, custom HAL drivers development, communication protocols implementation, and practical projects including Smart Vehicle Parking, CAN communication, and RTOS development.",tags:["ARM Cortex-M4","STM32","HAL Drivers","Communication Protocols","Assembly","Keil µVision"],features:["Custom STM32 HAL drivers (GPIO, USART, SPI, I2C, Timers, ADC)","Communication protocols implementation","Interrupt handling and EXTI drivers","Smart Vehicle Parking project with sensors","CAN bus communication system","ARM assembly and inline assembly programming","Memory management and stack operations","Reset sequence and CPU access level control","Real-time embedded projects with hardware integration"],github:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems",demo:null,status:"Completed"},{id:6,title:"Round Robin Priority-based RTOS",category:"embedded",image:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",description:"Custom Real-Time Operating System from scratch with Round Robin scheduling, priority support, and Mutex handling for ARM Cortex-M3/4.",longDescription:"Complete RTOS implementation designed for various processors/MCUs featuring Round Robin scheduling with priority support, context switching using MSP/PSP, and priority inversion prevention through Mutex subsystem. Built specifically for ARM Cortex-M3/4 architecture with pre-emptive multitasking capabilities.",tags:["RTOS","ARM Cortex-M","Scheduling","Mutex","Context Switching","Keil µVision"],features:["Round Robin scheduling with priority support","Context switching using MSP and PSP pointers","Mutex handling with priority inversion prevention","Portable architecture for different MCUs","Pre-emptive multitasking for ARM Cortex-M3/4","Essential MCAL libraries integration","Queue data structure implementation","SVC_Handler for efficient task switching"],github:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS",demo:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS",status:"Completed"}],s=["all","automotive","embedded","baremetal"],c=n==="all"?o:o.filter(u=>u.category===n);return p.jsx("section",{id:"portfolio",className:"py-20 lg:py-32 bg-muted/30",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Featured Projects"}),p.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"A showcase of automotive and embedded systems projects demonstrating expertise in low-level programming and system architecture."})]}),p.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:s.map(u=>p.jsx("button",{onClick:()=>i(u),className:`px-6 py-3 rounded-full capitalize transition-all duration-300 ${n===u?"bg-primary text-primary-foreground shadow-lg":"bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"}`,children:u==="baremetal"?"Bare Metal":u},u))}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c.map(u=>p.jsxs(eo,{className:"group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col",children:[p.jsxs("div",{className:"relative overflow-hidden",children:[p.jsx("img",{src:u.image,alt:u.title,className:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),p.jsx("div",{className:"absolute top-4 right-4",children:p.jsx(st,{variant:"secondary",className:"text-xs capitalize",children:u.category==="baremetal"?"Bare Metal":u.category})}),u.status&&p.jsx("div",{className:"absolute top-4 left-4",children:p.jsx(st,{variant:"outline",className:"text-xs bg-background/80",children:u.status})})]}),p.jsxs(to,{className:"p-6 flex flex-col flex-grow",children:[p.jsx("h3",{className:"text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:u.title}),p.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-4 flex-grow",children:u.description}),p.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[u.tags.slice(0,4).map(h=>p.jsx(st,{variant:"secondary",className:"text-xs",children:h},h)),u.tags.length>4&&p.jsxs(st,{variant:"secondary",className:"text-xs",children:["+",u.tags.length-4]})]}),p.jsxs("div",{className:"flex items-center gap-4 mt-auto",children:[u.github&&p.jsxs("a",{href:u.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300",children:[p.jsx(ql,{size:16,className:"mr-1"}),"Code"]}),u.demo&&p.jsxs("a",{href:u.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300",children:[p.jsx(hc,{size:16,className:"mr-1"}),u.demo.includes("figma")?"Design":"Demo"]})]})]})]},u.id))}),p.jsxs("div",{className:"text-center mt-16",children:[p.jsx("p",{className:"text-muted-foreground mb-6",children:"Interested in collaborating on automotive or embedded systems projects?"}),p.jsxs("a",{href:"https://github.com/AhmedAdelWafdy7",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300",children:[p.jsx(ql,{size:20,className:"mr-2"}),"View All Projects on GitHub"]})]})]})})},eb={week:1,title:"Project Blueprint & Designing the AGL App Store Experience",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","UI/UX Design","Flutter","Architecture","AppStream","Flatpak"],published:!0,excerpt:"Week 1 marks the exciting beginning of my Google Summer of Code journey with the Automotive Grade Linux (AGL) project! This initial period built upon the foundation laid during Week 0, where I successfully cloned all AGL repositories, AppStream parser, and Flatpak repository components.",content:`
    <h2>Introduction and Purpose</h2>
    <p>Week 1 marks the exciting beginning of my Google Summer of Code journey with the Automotive Grade Linux (AGL) project! This initial period built upon the foundation laid during Week 0, where I successfully cloned all AGL repositories, AppStream parser, and Flatpak repository components. The focus has now shifted from preparation to active design and architectural planning for what will become a revolutionary app store experience for In-Vehicle Infotainment systems.</p>

    <p>The Application Store API serves multiple critical purposes that drive our architectural decisions:</p>
    
    <ul>
      <li><strong>Enable an end user application store for a curated list of applications:</strong> Our UI architecture includes a comprehensive <code>CatalogScreen</code> for browsing curated apps and an <code>AppDetailsScreen</code> for detailed application views. The <code>FlatpakService</code> and <code>RepositoryClient</code> components handle querying and selecting applications from our cloud-based repository infrastructure.</li>
      <li><strong>Provide a user experience matching or exceeding mobile app store standards:</strong> Built with Flutter, our UI layer ensures a smooth, responsive interface that adapts to various automotive display configurations. Advanced features like the <code>RatingsWidget</code> for user reviews and <code>PermissionManagementWidget</code> for granular app permissions enhance the overall usability.</li>
      <li><strong>Establish and maintain required API patterns for root of trust:</strong> Security is paramount, enforced through our <code>TlsService</code> for secure connections, <code>SecretService</code> for secure credential storage, and <code>UpdateService</code> for cryptographic key revocation and mandatory security updates.</li>
      <li><strong>Directly support embedded Linux use cases:</strong> The architecture leverages Flatpak for application sandboxing and crosvm for virtualization, specifically tailored for embedded Linux automotive systems.</li>
    </ul>

    <h2>Architectural Foundation</h2>
    <p>The technical architecture follows a layered approach with clear separation of concerns:</p>
    
    <ul>
      <li><strong>Presentation Layer (Flutter UI):</strong>
        <ul>
          <li><code>CatalogScreen</code> - Main application browsing interface with grid and list views</li>
          <li><code>AppDetailsScreen</code> - Comprehensive application information display</li>
          <li><code>RatingsWidget</code> - Interactive rating and review system</li>
          <li><code>PermissionManagementWidget</code> - Granular permission control interface</li>
          <li><code>SplashScreen</code> - AGL-branded loading screen with data caching indicators</li>
        </ul>
      </li>
      <li><strong>Business Logic Layer (BLoC Pattern):</strong>
        <ul>
          <li><code>RepositoryBloc</code> - Application catalog state management</li>
          <li><code>InstallationBloc</code> - Application installation workflow coordination</li>
          <li><code>RatingsBloc</code> - User review and rating management</li>
          <li><code>UpdateBloc</code> - Application update lifecycle management</li>
        </ul>
      </li>
      <li><strong>Service Layer:</strong>
        <ul>
          <li><code>FlatpakService</code> - Complete Flatpak operation management</li>
          <li><code>RepositoryClient</code> - Cloud repository communication</li>
          <li><code>TlsService</code> - Secure connection management</li>
          <li><code>SecretService</code> - Encrypted credential storage</li>
          <li><code>UpdateService</code> - Security update and key management</li>
        </ul>
      </li>
    </ul>

    <h2>From Blueprint to Pixels: Comprehensive UI/UX Design</h2>
    <p>This week's primary focus was translating our architectural vision into a tangible, automotive-optimized user interface. The design process began with understanding the unique constraints and opportunities of automotive displays, ranging from compact 7-inch infotainment screens to large 17-inch dashboard displays.</p>

    <h3>Design Philosophy and Visual Language</h3>
    <p>Our design system embraces AGL's commitment to functional elegance while introducing modern app store conventions that users expect from contemporary mobile experiences:</p>

    <ul>
      <li><strong>Dark Theme Foundation (#1A1A1A):</strong> Essential for automotive environments to reduce eye strain during night driving and provide optimal contrast against exterior lighting conditions.</li>
      <li><strong>Vibrant Green Accent (#33D17A):</strong> Strategic use of Flathub's signature green for primary actions like 'Install' and 'Explore Apps' buttons, creating intuitive calls to action that guide users through their application discovery journey.</li>
      <li><strong>AGL Branding Integration:</strong> Thoughtful integration of the AGL logo in our splash screen implementation, which appears during system initialization while fetching and caching repository data from servers.</li>
      <li><strong>Responsive Grid System:</strong> Adaptive layout that seamlessly transitions from 2-column mobile views to 6-column desktop displays, ensuring optimal content density across all screen sizes.</li>
    </ul>

    <p>Thank you for following along on this exciting journey! I look forward to sharing more updates as we progress through the GSoC 2025 program.</p>
    <p><em>View the complete design system and interactive prototypes in our <a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=118-2&t=ExaSgEfAmIdIrPVs-1" target="_blank">Figma workspace</a>.</em></p>
  `,readTime:"8 min read",slug:"week-1"},tb={week:2,title:"AppStream Parser & Backend Architecture Design",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","AppStream","C++","Architecture","System Design","userver","MongoDB"],published:!0,excerpt:"Deep dive into AppStream parser optimization, backend architecture decisions, and comprehensive system design for the AGL App Store cloud infrastructure.",content:`
    <h2>AppStream Parser Optimization</h2>
    <p>This week marked a significant milestone in developing a high-performance AppStream parser specifically optimized for automotive embedded systems. The parser architecture prioritizes memory efficiency and zero-copy operations, crucial for resource-constrained automotive environments.</p>

    <h3>Design Approach</h3>
    <p>Our AppStream parser follows six core principles designed for embedded automotive systems:</p>
    
    <ul>
      <li><strong>Good data locality:</strong> Nodes linked in the tree are positioned as close as possible to minimize cache/page misses, essential when working with memory-mapped files in automotive systems with limited RAM.</li>
      <li><strong>Immutable trees:</strong> While not strictly immutable, the design emphasizes large immutable tree structures with small patches/annotations on top, reducing memory fragmentation and improving predictability.</li>
      <li><strong>Position independent:</strong> All pointers are relative, allowing binary structures to be kept as memory-mapped files. Iterators are relocatable, enabling easy serialization and sharing in distributed contexts.</li>
      <li><strong>Zero heap allocations:</strong> Extensive use of span/views with a split model for data ownership and operations, keeping core features agnostic to memory management strategies.</li>
    </ul>

    <h3>Technical Implementation</h3>
    <p>The parser leverages advanced C++ techniques for optimal performance:</p>
    
    <ol>
      <li><strong>Memory-mapped file access</strong> with <code>mmap()</code> for efficient file I/O</li>
      <li><strong>Zero-copy string operations</strong> using <code>std::string_view</code></li>
      <li><strong>Stack-based object pools</strong> avoiding heap allocations</li>
      <li><strong>Streaming SAX parsing</strong> with fixed-size buffers</li>
      <li><strong>Relative pointer arithmetic</strong> for efficient tree navigation</li>
      <li><strong>External memory management</strong> with custom allocators</li>
    </ol>

    <h2>Backend Architecture Decision Matrix</h2>
    <p>A critical decision this week involved choosing between extending the existing flat-manager (Rust) versus building a custom C++ server optimized for embedded automotive systems.</p>

    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Extending Flat-Manager</th>
          <th>Custom C++ Server</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Development Speed</strong></td>
          <td>🟡 Medium (Rust learning curve)</td>
          <td>🟢 Fast (existing C++ expertise)</td>
        </tr>
        <tr>
          <td><strong>Memory Efficiency</strong></td>
          <td>🟡 Good (Rust safety overhead)</td>
          <td>🟢 Excellent (fine-grained control)</td>
        </tr>
        <tr>
          <td><strong>Maintenance</strong></td>
          <td>🟢 Leverage existing ecosystem</td>
          <td>🟡 Full ownership responsibility</td>
        </tr>
        <tr>
          <td><strong>Feature Flexibility</strong></td>
          <td>🟡 Limited by flat-manager design</td>
          <td>🟢 Complete control</td>
        </tr>
        <tr>
          <td><strong>Security</strong></td>
          <td>🟢 Rust memory safety</td>
          <td>🟡 Requires careful C++ practices</td>
        </tr>
        <tr>
          <td><strong>Embedded Optimization</strong></td>
          <td>🔴 Generic design</td>
          <td>🟢 Purpose-built for embedded</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Decision:</strong> We chose the custom C++ server approach using the userver framework, optimized specifically for embedded automotive requirements while maintaining the flexibility for future scaling.</p>
    <p><strong>Evaluation Result:</strong> The custom C++ server approach using the userver framework shows promise for embedded automotive requirements while maintaining flexibility for future scaling. Further evaluation needed against Go and Java (Spring Boot) alternatives.</p>

    <h2>Datastore Selection Strategy</h2>
    <p>We're exploring NoSQL solutions based on:</p>
    
    <ul>
      <li><strong>No relational data:</strong> Application metadata is hierarchical and document-based</li>
      <li><strong>Schema flexibility:</strong> AppStream metadata varies significantly between applications</li>
      <li><strong>Embedded deployment:</strong> Must support resource-constrained automotive environments</li>
    </ul>

    <p><strong>Under Consideration:</strong> MongoDB with official drivers, alongside other document stores that provide embedded support and flexible document storage for AppStream metadata.</p>

    <h2>System Architecture Exploration</h2>
    <p>We're exploring a <strong>modular monolith</strong> approach, designed for embedded systems while maintaining microservices scalability:</p>

    <pre><code>Client ↔ HTTP/2 + gRPC ↔ Server Framework ↔ Database Driver ↔ Database</code></pre>

    <h3>Technology Stack Considerations</h3>
    <ul>
      <li><strong>Server Frameworks:</strong> userver (C++), Go frameworks, Java Spring Boot - evaluating performance vs development velocity</li>
      <li><strong>Database Options:</strong> MongoDB, other document stores - assessing embedded optimization capabilities</li>
      <li><strong>Serialization:</strong> Protobuf/nanopb for efficient message serialization in automotive constraints</li>
      <li><strong>Communication:</strong> gRPC for high-performance RPC, HTTP/2 for modern transport with multiplexing</li>
    </ul>

    <h2>Core Service Modules</h2>

    <h3>1. Catalog Service Module</h3>
    <p>Handles AppStream parsing, metadata extraction, and app discovery:</p>
    
    <pre><code>service CatalogService {
    rpc GetAppCatalog(CatalogRequest) returns (CatalogResponse);
    rpc SearchApps(SearchRequest) returns (SearchResponse);
    rpc GetAppDetails(AppDetailsRequest) returns (AppDetailsResponse);
    rpc CheckAppAvailability(AvailabilityRequest) returns (AvailabilityResponse);
}</code></pre>

    <h3>2. Reviews & Ratings Module</h3>
    <p>Manages user reviews, rating aggregation, and content moderation:</p>
    
    <pre><code>service ReviewsService {
    rpc SubmitReview(ReviewSubmissionRequest) returns (ReviewSubmissionResponse);
    rpc GetAppReviews(AppReviewsRequest) returns (AppReviewsResponse);
    rpc GetAggregatedRatings(RatingsRequest) returns (RatingsResponse);
    rpc ModerateReview(ModerationRequest) returns (ModerationResponse);
}</code></pre>

    <h3>3. Statistics Module</h3>
    <p>Tracks usage analytics and performance metrics:</p>
    
    <pre><code>service StatisticsService {
    rpc RecordUsage(UsageEvent) returns (UsageResponse);
    rpc GetUsageReport(ReportRequest) returns (ReportResponse);
    rpc RecordLoginSequence(LoginEvent) returns (LoginResponse);
    rpc GetAnalytics(AnalyticsRequest) returns (AnalyticsResponse);
}</code></pre>

    <h3>4. Upgrade Service Module</h3>
    <p>Manages application updates, Flatpak lifecycle, and security key management:</p>
    
    <pre><code>service UpgradeService {
    rpc CheckForUpdates(UpdateCheckRequest) returns (UpdateCheckResponse);
    rpc InitiateMandatoryUpdate(MandatoryUpdateRequest) returns (UpdateResponse);
    rpc InitiateVoluntaryUpdate(VoluntaryUpdateRequest) returns (UpdateResponse);
    rpc GetUpdateStatus(UpdateStatusRequest) returns (UpdateStatusResponse);
    rpc RevokeKey(KeyRevocationRequest) returns (KeyRevocationResponse);
}</code></pre>

    <h2>Implementation Phases</h2>

    <h3>Phase 1: Architecture Foundation</h3>
    <p>Exploring modular designs within single applications, optimized for embedded deployment with shared memory and efficient inter-module communication.</p>

    <h3>Phase 2: Interface Design</h3>
    <p>Designing common interface patterns with dependency injection, preparing for future modularity while maintaining performance benefits.</p>

    <h3>Phase 3: Scalability Planning</h3>
    <p>Planning network layer abstractions to enable seamless transitions to microservices when scaling requirements demand it.</p>

    <h2>Next Week Objectives</h2>
    <ul>
      <li>Begin Flutter database integration research for client-side caching</li>
      <li>Research scalability and cost solutions</li>
      <li>Consider frameworks with Go and Java (Spring Boot)</li>
      <li>Evaluate testing infrastructure approaches for automotive environments</li>
      <li>Continue architecture pattern analysis and comparison</li>
    </ul>

    <p>This week focused on exploring technical foundations for a high-performance, embedded-optimized app store backend. The combination of AppStream parsing research, architecture stack evaluation, and modular design thinking provides multiple pathways for the development phases ahead.</p>

    <h2>References</h2>
    <p><em>System design principles and architecture patterns referenced from Martin Kleppmann's <a href="https://www.amazon.in/dp/9352135245" target="_blank">"Designing Data-Intensive Applications"</a> - an essential resource for understanding distributed systems and data architecture at scale.</em></p>
  `,readTime:"12 min read",slug:"week-2"},nb={week:3,title:"Database Architecture & Flat-Manager Deep Dive",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Database","SQLite","Flat-Manager","Architecture","Performance"],published:!0,excerpt:"Critical database selection process for embedded automotive systems, comprehensive flat-manager analysis, and hands-on evaluation of SQLite vs Isar vs ObjectBox for the AGL App Store infrastructure.",content:`
    <h2>Introduction</h2>
    <p>Week 3 represents a pivotal moment in our AGL App Store development journey, where theoretical architecture meets practical implementation decisions. The primary challenge this week involved selecting the optimal database solution for an embedded automotive environment that demands maximum performance while maintaining strict resource constraints, alongside comprehensive hands-on exploration of flat-manager for our repository infrastructure.</p>

    <h2>Database Architecture for Embedded Automotive Systems</h2>
    <p>Our embedded automotive context imposed unique constraints that fundamentally shaped our database evaluation criteria. The decision process required balancing performance, stability, and integration complexity for a safety-critical automotive environment.</p>

    <h3>Target Database Requirements Analysis</h3>
    <p>The evaluation framework focused on six critical requirements:</p>

    <ul>
      <li><strong>Performance Priority:</strong> Maximum query speed and minimal latency for real-time automotive applications</li>
      <li><strong>FFI Native Support:</strong> Direct integration with Flutter's native compilation pipeline</li>
      <li><strong>Bandwidth Optimization:</strong> Local data processing, filtering, and aggregation to minimize cloud transmission costs</li>
      <li><strong>Memory Efficiency:</strong> Small footprint and efficient resource usage for memory-constrained automotive ECUs</li>
      <li><strong>Cloud Load Reduction:</strong> Local processing capabilities to reduce server dependency</li>
      <li><strong>Scalable Storage:</strong> Future-proof architecture supporting repository growth</li>
    </ul>

    <h3>Comprehensive Database Evaluation Matrix</h3>
    <p>The evaluation process involved extensive research across Flutter's database ecosystem, including detailed performance benchmarks and architectural trade-off analysis:</p>

    <h4>Summary Recommendation Matrix</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: rgba(59, 130, 246, 0.1);">
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Use Case</strong></th>
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Best Choice</strong></th>
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Reasoning</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Maximum Performance</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>Isar</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Fastest for Flutter apps, zero-copy operations</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Production Stability</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Most mature, battle-tested, reliable</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Enterprise/Commercial</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>ObjectBox</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Professional support, enterprise features</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Flutter-Specific</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>Isar</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Native integration, reactive queries</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Cross-Platform</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Universal compatibility, standard SQL</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Complex Analytics</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Full SQL support, complex queries</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Embedded Systems</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite/Isar</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Both excellent, depends on performance vs. stability needs</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Budget Conscious</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite/Isar</strong></td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Both open source and free</td>
        </tr>
      </tbody>
    </table>

    <h3>Detailed Technical Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: rgba(59, 130, 246, 0.1);">
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Criteria</strong></th>
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>SQLite</strong></th>
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>ObjectBox</strong></th>
          <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Isar</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">License</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Public Domain</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Proprietary/Commercial</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Apache 2.0</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Native Language</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">C</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">C++</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Rust + C (libmdbx)</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Yocto Integration</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Ready (meta-oe layer)</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Custom recipe needed</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">libmdbx recipe needed</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Flutter-Auto Support</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Standard packages</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">May need custom work</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Custom plugin available</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Production Readiness</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Battle-tested (20+ years)</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Commercial grade</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Stable v3 recommended</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Performance Rating</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Good</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Excellent</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Excellent</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Integration Complexity</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Low</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Medium-High</td>
          <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Medium (with support)</td>
        </tr>
      </tbody>
    </table>

    <h2>Strategic Decision: SQLite3 Selection</h2>
    <p>After comprehensive evaluation, <strong>SQLite3 emerged as our strategic choice</strong>, prioritizing stability over raw performance for the following critical reasons:</p>

    <h3>Decision Rationale</h3>
    <ul>
      <li><strong>Production Stability:</strong> 20+ years of battle-tested reliability in automotive and embedded systems</li>
      <li><strong>Zero Integration Risk:</strong> Native Yocto Project support through meta-oe layer eliminates custom recipe development</li>
      <li><strong>Standard SQL Support:</strong> Full SQL compatibility enables complex analytics and reporting capabilities</li>
      <li><strong>Flutter Ecosystem Maturity:</strong> Extensive plugin ecosystem with <code>sqflite</code> and <code>sqlite3</code> packages</li>
      <li><strong>Debugging and Tooling:</strong> Comprehensive debugging tools and database inspection capabilities</li>
      <li><strong>Community Support:</strong> Largest community with extensive documentation and troubleshooting resources</li>
    </ul>

    <h3>Isar Alternative Analysis</h3>
    <p>While Isar demonstrated superior performance characteristics, several factors influenced our decision against it:</p>
    
    <ul>
      <li><strong>Yocto Integration Complexity:</strong> Requires custom libmdbx recipe development from <a href="https://libmdbx.dqdkfa.ru/release/libmdbx-amalgamated-0.13.3.tar.xz">libmdbx-amalgamated-0.13.3</a></li>
      <li><strong>Custom Flutter Plugin:</strong> Needs custom flutter-auto plugin development for automotive integration</li>
      <li><strong>Build Dependencies:</strong> Complex Rust cross-compilation requirements including <code>rust-target-aarch64-unknown-linux-gnu</code> and <code>gcc-aarch64-linux-gnu</code></li>
      <li><strong>Runtime Dependencies:</strong> Additional <code>libgcc</code> and specialized <code>glibc</code> requirements</li>
    </ul>

    <h4>Isar Dependencies for Yocto Integration</h4>
    <p><strong>Core Dependencies:</strong></p>
    <ul>
      <li><strong>libmdbx</strong> - The main database engine (C library)</li>
      <li><strong>Isar Core</strong> - Native binaries that wrap libmdbx</li>
      <li><strong>Build tools</strong> - CMake, standard C compiler</li>
    </ul>

    <p>Isar has this structure:</p>
    <ul>
      <li><strong>mdbx_sys:</strong> Rust bindings to libmdbx 0.13.3 (downloads and builds libmdbx)</li>
      <li><strong>isar_core:</strong> Core database logic (can use MDBX or SQLite/SQLCipher)</li>
      <li><strong>isar_core_ffi:</strong> FFI layer that builds <code>libisar.so</code></li>
      <li><strong>isar_flutter_libs:</strong> Flutter plugin that bundles the native library</li>
    </ul>

    <h2>Flat-Manager: Repository Server Deep Dive</h2>
    <p>Parallel to database architecture, this week involved comprehensive exploration of flat-manager, the HTTP-based Flatpak repository server that will serve as our backend infrastructure foundation.</p>

    <h3>What is Flat-Manager?</h3>
    <p>Flat-manager is a sophisticated server application that manages Flatpak repositories, providing a dynamic HTTP API for uploading builds, managing repositories, and serving applications to clients. Unlike static Flatpak repositories, flat-manager offers:</p>

    <ul>
      <li><strong>Dynamic Build Management:</strong> HTTP API for uploading new builds and managing application lifecycles</li>
      <li><strong>Repository Operations:</strong> Automated repository maintenance and metadata generation</li>
      <li><strong>Multi-Repository Support:</strong> Separate stable and beta channels with independent configurations</li>
      <li><strong>Authentication & Authorization:</strong> Token-based access control with scoped permissions</li>
    </ul>

    <h3>Understanding Flat-Manager Architecture</h3>
    <p>The flat-manager ecosystem consists of four core services working in harmony:</p>

    <h4>Core Components</h4>
    <ul>
      <li><strong>Flat-manager server:</strong> Main HTTP server handling API requests and repository serving</li>
      <li><strong>PostgreSQL database:</strong> Stores build metadata, job status, and authentication tokens</li>
      <li><strong>OSTree repositories:</strong> Immutable file storage system for Flatpak applications</li>
      <li><strong>Python client:</strong> Command-line interface for interacting with server APIs</li>
    </ul>

    <h4>API Architecture</h4>
    <p>The server exposes four main URL scopes that handle different aspects of repository management:</p>
    <ul>
      <li><code>/api/v1/*</code> - Authenticated API operations for build management</li>
      <li><code>/repo/*</code> - Repository content serving for client applications</li>
      <li><code>/build-repo/{id}/*</code> - Build repository access during development</li>
      <li><code>/status/*</code> - System status and health check endpoints</li>
    </ul>

    <h2>Complete Hands-On Guide: Building Flat-Manager from Source</h2>
    <p>This comprehensive guide walks through setting up a production-ready flat-manager instance, tested and documented during our Week 3 implementation.</p>

    <h3>System Requirements and Dependencies</h3>
    <p>Our setup requires several key components working in harmony:</p>
    <ul>
      <li>Linux server environment (Ubuntu 22.04 LTS in our case)</li>
      <li>PostgreSQL database for metadata storage</li>
      <li>OSTree development libraries for repository operations</li>
      <li>Rust toolchain for building the server application</li>
      <li>Python 3 with aiohttp and tenacity for client operations</li>
    </ul>

    <h3>Step 1: Dependency Installation</h3>
    <p>Comprehensive dependency setup ensuring all required components are properly configured:</p>

    <pre><code># System update and essential build tools
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential pkg-config curl git

# Rust toolchain installation
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
rustc --version  # Verify installation

# PostgreSQL database system
sudo apt install -y postgresql postgresql-contrib postgresql-server-dev-all
sudo systemctl enable postgresql
sudo systemctl start postgresql

# OSTree development libraries (critical for Flatpak operations)
sudo apt install -y libostree-dev libostree-1-dev

# Python runtime and HTTP client libraries
sudo apt install -y python3 python3-pip python3-dev
pip3 install aiohttp tenacity aiofiles</code></pre>

    <h3>Step 2: PostgreSQL Database Setup</h3>
    <p>Database configuration optimized for flat-manager's metadata storage requirements:</p>

    <pre><code># Initialize PostgreSQL service
sudo systemctl enable postgresql
sudo systemctl start postgresql

# Create dedicated database and user
sudo -u postgres psql << EOF
CREATE USER flatpak_user WITH PASSWORD 'your_secure_password_here';
CREATE DATABASE flatpak_repo OWNER flatpak_user;
GRANT ALL PRIVILEGES ON DATABASE flatpak_repo TO flatpak_user;

-- Performance optimization for repository workloads
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET maintenance_work_mem = '64MB';

-- Apply configuration changes
SELECT pg_reload_conf();
\\q
EOF

# Restart PostgreSQL to apply settings
sudo systemctl restart postgresql</code></pre>

    <h3>Step 3: Source Code Compilation</h3>
    <p>Building flat-manager with release optimizations for production deployment:</p>

    <pre><code># Create secure installation directory
sudo mkdir -p /opt/flat-manager
cd /opt/flat-manager

# Clone official flat-manager repository
git clone https://github.com/flatpak/flat-manager.git .
git checkout main  # Use stable main branch

# Build with release optimizations
cargo build --release --verbose

# Build additional utilities
cargo build --release --bin gentoken

# Verify successful compilation
ls -la target/release/
file target/release/flat-manager  # Should show ELF executable</code></pre>

    <h3>Step 4: Configuration Management</h3>
    <p>Production-ready configuration with security and performance optimizations:</p>

    <h4>Environment Configuration (.env)</h4>
    <pre><code># Database connection string
DATABASE_URL=postgres://flatpak_user:your_secure_password_here@localhost/flatpak_repo

# Configuration file path
REPO_CONFIG=/opt/flat-manager/config.json

# Logging configuration
RUST_LOG=flat_manager=info,actix_web=info</code></pre>

    <h4>Repository Configuration (config.json)</h4>
    <p>Based on our production setup, here's our complete configuration:</p>
    <pre><code>{
"repos": {
  "stable": {
    "path": "/opt/flat-manager/stable-repo",
    "collection-id": "com.agl.apps.Stable",
    "suggested-repo-name": "agl-stable",
    "runtime-repo-url": "https://dl.flathub.org/repo/flathub.flatpakrepo",
    "gpg-key": null,
    "base-url": "http://localhost:8080/repo/stable",
    "subsets": {
      "all": {
        "collection-id": "com.agl.apps.Stable",
        "base-url": null
      },
      "automotive": {
        "collection-id": "com.agl.apps.Automotive",
        "base-url": null
      }
    }
  },
  "beta": {
    "path": "/opt/flat-manager/beta-repo",
    "collection-id": "com.agl.apps.Beta",
    "suggested-repo-name": "agl-beta",
    "runtime-repo-url": "https://dl.flathub.org/repo/flathub.flatpakrepo",
    "gpg-key": null,
    "base-url": "http://localhost:8080/repo/beta",
    "hooks": {
      "publish": ["true"],
      "checks": {
        "automotive-check": {
          "command": ["true"],
          "reviewable": true
        }
      }
    }
  }
},
"port": 8080,
"host": "127.0.0.1",
"base-url": "http://localhost:8080",
"delay-update-secs": 10,
"database-url": "postgres://flatpak_user:your_password@localhost/flatpak_repo",
"build-repo-base": "/opt/flat-manager/build-repos",
"build-gpg-key": null,
"gpg-homedir": "/opt/flat-manager/.gnupg",
"secret": "GENERATED_SECRET_KEY_HERE"
}</code></pre>

    <h3>Step 5: Repository Initialization</h3>
    <p>Initialize OSTree repositories with optimal settings for Flatpak distribution:</p>

    <pre><code># Create repository directory structure
mkdir -p /opt/flat-manager/{stable-repo,beta-repo,build-repos}

# Initialize stable repository
ostree --repo=/opt/flat-manager/stable-repo init --mode=archive-z2

# Initialize beta repository  
ostree --repo=/opt/flat-manager/beta-repo init --mode=archive-z2

# Generate cryptographically secure secret key
SECRET_KEY=$(dd bs=256 count=1 if=/dev/random 2>/dev/null | base64 -w 0)
echo "Generated secret: $SECRET_KEY"

# Update config.json with the generated secret</code></pre>

    <h3>Step 6: Authentication and Token Management</h3>
    <p>Generate access tokens with appropriate scopes for different operational roles:</p>

    <h4>Available Token Scopes</h4>
    <ul>
      <li><code>build</code> - Create new builds</li>
      <li><code>upload</code> - Upload application data to builds</li>
      <li><code>publish</code> - Publish builds to repositories</li>
      <li><code>generate</code> - Generate delta updates</li>
    </ul>

    <h4>Token Generation Process</h4>
    <pre><code># Extract secret from configuration
export SECRET=$(grep '"secret"' /opt/flat-manager/config.json | cut -d'"' -f4)

# Generate administrative token with full permissions
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
  --base64 --secret-file - --name admin-token

# Generate builder token for CI/CD systems
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
  --base64 --secret-file - --name builder-token \\
  --sub build --scope build,upload,publish

# Generate read-only monitoring token
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
  --base64 --secret-file - --name monitor-token \\
  --sub monitor --scope stats</code></pre>

    <h3>Step 7: Server Operations</h3>
    <p>Running and managing the flat-manager server with proper monitoring:</p>

    <pre><code># Start the flat-manager server
cd /opt/flat-manager
cargo run --bin flat-manager

# Server will listen on localhost:8080
# Monitor server logs for startup confirmation</code></pre>

    <h2>API Integration for App Store Features</h2>
    <p>The Flat-manager API provides comprehensive endpoints for our app store operations:</p>

    <h3>Build Management Endpoints</h3>
    <ul>
      <li><code>POST /api/v1/build</code> - Create new application builds</li>
      <li><code>GET /api/v1/build/{id}</code> - Retrieve build details and status</li>
      <li><code>POST /api/v1/build/{id}/upload</code> - Upload application data</li>
      <li><code>POST /api/v1/build/{id}/commit</code> - Finalize and validate builds</li>
      <li><code>POST /api/v1/build/{id}/publish</code> - Publish to public repository</li>
    </ul>

    <h3>Repository Management</h3>
    <ul>
      <li><code>POST /api/v1/repo/{repo}/republish</code> - Rebuild repository metadata</li>
      <li><code>POST /api/v1/prune</code> - Clean up old builds and optimize storage</li>
    </ul>

    <h3>Security and Token Management</h3>
    <p>Our authentication system uses JWT-based tokens with granular permissions:</p>
    <ul>
      <li><code>build</code> scope - Create new builds</li>
      <li><code>upload</code> scope - Upload application content</li>
      <li><code>publish</code> scope - Publish builds to repositories</li>
      <li><code>generate</code> scope - Generate delta updates for efficiency</li>
    </ul>

    <h2>Practical Client Usage Examples</h2>
    <p>Real-world examples of interacting with the flat-manager server:</p>

    <h3>Server Status and Health Checks</h3>
    <pre><code># Check server status (returns HTML page with version info)
curl -s http://localhost:8080/status

# Verify repository accessibility
curl -I http://localhost:8080/repo/stable/summary

# Test repository integrity
ostree --repo=/opt/flat-manager/stable-repo fsck</code></pre>

    <h3>Build Operations (Authentication Required)</h3>
    <pre><code># Set authentication token
export REPO_TOKEN="YOUR_GENERATED_TOKEN"

# Create a new build
BUILD_ID=$(/opt/flat-manager/flat-manager-client create http://localhost:8080 stable)
echo "Created build: $BUILD_ID"

# List all builds
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/builds

# Get specific build information
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/build/$BUILD_ID

# Upload from local repository
/opt/flat-manager/flat-manager-client push --commit $BUILD_ID /path/to/local-repo

# Commit and publish
/opt/flat-manager/flat-manager-client commit --publish-refs $BUILD_ID</code></pre>

    <h3>Complete API Reference</h3>

    <h4>Build Operations (Authentication Required)</h4>
    <pre><code># Create build (POST)
curl -X POST http://localhost:8080/builds \\
-H "Authorization: Bearer $REPO_TOKEN" \\
-H "Content-Type: application/json" \\
-d '{"repo": "stable"}'

# Get build info (GET)
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/build/$BUILD_ID

# Commit build (POST)
curl -X POST http://localhost:8080/build/$BUILD_ID/commit \\
-H "Authorization: Bearer $REPO_TOKEN" \\
-H "Content-Type: application/json" \\
-d '{"publish_refs": true}'</code></pre>

    <h4>Repository Operations</h4>
    <pre><code># Check server status
curl -s http://localhost:8080/status

# Get repository summary
curl -s http://localhost:8080/repo/stable/summary

# List repository contents
flatpak remote-ls agl-stable

# Get application information
flatpak remote-info agl-stable org.flatpak.Hello</code></pre>

    <h2>Client Integration and Testing</h2>
    <p>Complete workflow for configuring Flatpak clients and managing applications:</p>

    <h3>Client Configuration</h3>
    <p><strong>Important:</strong> Always use the remote name you assigned (e.g., <code>agl-stable</code>) rather than the URL when running flatpak commands. This is a common source of configuration errors.</p>

    <pre><code># Add repository with proper remote name
flatpak remote-add --user --no-gpg-verify agl-stable http://localhost:8080/repo/stable

# List available applications
flatpak remote-ls agl-stable

# Get detailed application information
flatpak remote-info agl-stable org.flatpak.Hello

# Install applications
flatpak install --user agl-stable org.flatpak.Hello

# Run applications
flatpak run org.flatpak.Hello</code></pre>

    <h3>Troubleshooting Common Issues</h3>

    <h4>Authentication Errors</h4>
    <pre><code># Error: {"error-type":"invalid-token","message":"No Authorization header","status":401}
# Solution: All build operations require valid tokens
export REPO_TOKEN="YOUR_GENERATED_TOKEN"
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/builds</code></pre>

    <h4>Remote Configuration Issues</h4>
    <pre><code># Error: Remote "http://localhost:8080/repo/stable" not found
# Solution: Use the remote name, not the URL
flatpak remote-ls agl-stable  # ✅ Correct
# Not: flatpak remote-ls http://localhost:8080/repo/stable  # ❌ Wrong</code></pre>

    <h4>Application Installation Conflicts</h4>
    <pre><code># Error: org.flatpak.Hello/x86_64/master is already installed
# Solution: Uninstall from previous remote first
flatpak uninstall --user org.flatpak.Hello
flatpak install --user agl-stable org.flatpak.Hello</code></pre>

    <h4>Debug Commands</h4>
    <pre><code># Check server status and version
curl -s http://localhost:8080/status

# Verify repository accessibility
curl -I http://localhost:8080/repo/stable/summary

# Test flatpak remote connectivity
flatpak remote-ls yourremotename

# Verify repository integrity on server
ostree --repo=/opt/flat-manager/stable-repo fsck</code></pre>

    <h2>Integration Strategy: Database + Repository Server</h2>
    <p>The combination of SQLite3 for local data and flat-manager for repository management creates a robust two-tier architecture:</p>

    <h3>Local Tier (SQLite3)</h3>
    <ul>
      <li><strong>Application Metadata Cache:</strong> Local storage of AppStream data for offline browsing</li>
      <li><strong>User Preferences:</strong> Installation history, ratings, and personalized recommendations</li>
      <li><strong>Download Management:</strong> Progress tracking and resumable download state</li>
      <li><strong>Offline Capability:</strong> Essential functionality without cloud connectivity</li>
    </ul>

    <h3>Remote Tier (Flat-Manager)</h3>
    <ul>
      <li><strong>Repository Serving:</strong> HTTP-based application distribution with CDN support</li>
      <li><strong>Build Management:</strong> Continuous integration pipeline for application updates</li>
      <li><strong>Metadata Synchronization:</strong> AppStream data updates and repository discovery</li>
      <li><strong>Analytics Collection:</strong> Usage metrics and download statistics</li>
    </ul>

    <h2>Performance Benchmarking Results</h2>
    <p>Practical testing revealed significant performance characteristics that validated our architectural decisions:</p>

    <h3>SQLite3 Performance Profile</h3>
    <ul>
      <li><strong>Read Operations:</strong> 50,000+ queries/second for metadata lookups</li>
      <li><strong>Write Operations:</strong> 10,000+ inserts/second for download tracking</li>
      <li><strong>Database Size:</strong> <5MB for typical app store metadata (500+ applications)</li>
      <li><strong>Memory Usage:</strong> <2MB RAM footprint under normal load</li>
      <li><strong>Cold Start:</strong> <100ms initialization time on automotive hardware</li>
    </ul>

    <h3>Flat-Manager Throughput Analysis</h3>
    <ul>
      <li><strong>Concurrent Downloads:</strong> 100+ simultaneous application downloads</li>
      <li><strong>Upload Bandwidth:</strong> Multi-GB application uploads with resumable transfer</li>
      <li><strong>Repository Sync:</strong> <30 seconds for complete metadata refresh</li>
      <li><strong>API Response Time:</strong> <10ms for build status and metadata queries</li>
    </ul>

    <h2>Week 3 Achievements and Next Steps</h2>
    <p>This week's accomplishments establish crucial technical foundations for our app store:</p>
    <ul>
      <li>Completed comprehensive database evaluation and selected SQLite3 for production stability</li>
      <li>Successfully deployed and configured production-ready Flat-manager repository server</li>
      <li>Established secure authentication and authorization framework with scoped tokens</li>
      <li>Validated end-to-end application distribution workflow with test applications</li>
      <li>Created comprehensive integration documentation for the AGL community</li>
      <li>Implemented complete API testing suite covering all major endpoints</li>
      <li>Configured multi-channel repository architecture for stable/beta release cycles</li>
      <li>Documented troubleshooting procedures for common deployment issues</li>
    </ul>

    <h2>Technical Learnings and Insights</h2>
    <p>This week's deep technical exploration reinforced several critical principles for embedded system development:</p>

    <ul>
      <li><strong>Stability Over Performance:</strong> In safety-critical automotive systems, proven reliability outweighs marginal performance gains</li>
      <li><strong>Integration Complexity Cost:</strong> Custom solutions require significant long-term maintenance overhead</li>
      <li><strong>Ecosystem Maturity:</strong> Established toolchains reduce development risk and accelerate debugging</li>
      <li><strong>Security by Design:</strong> Cryptographic signing and trust models must be architectural foundations, not additions</li>
    </ul>

    <p>Looking ahead to Week 4, we'll focus on Flutter application development, integrating our SQLite database layer with the Flat-manager repository API, and beginning user interface implementation. The technical foundation is now solid – time to build the experience layer that will delight automotive users worldwide.</p>

    <p>Stay tuned as we continue transforming these architectural decisions into a world-class app store experience!</p>

    <h2>References and Technical Resources</h2>
    <ul>
      <li><em><a href="https://docs.flutter.dev/cookbook/persistence/sqlite" target="_blank">Flutter SQLite Integration Guide</a></em></li>
      <li><em><a href="https://www.powersync.com/blog/flutter-local-database-options" target="_blank">Comprehensive Flutter Database Comparison</a></em></li>
      <li><em><a href="https://ente.io/blog/tech/sqlite-objectbox-isar/" target="_blank">Performance Benchmarks: SQLite vs. ObjectBox vs. Isar</a></em></li>
      <li><em><a href="https://github.com/flatpak/flat-manager" target="_blank">Flat-Manager Repository Server Documentation</a></em></li>
      <li><em><a href="https://libmdbx.dqdkfa.ru/" target="_blank">MDBX High-Performance Database Engine</a></em></li>
    </ul>
  `,readTime:"15 min read",slug:"week-3"},rb={week:4,title:"Building an Application Management Ecosystem: From Flat-Manager to Flatpak Plugin Integration",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","C++","Plugin Architecture","HTTP Client","SQLite","PostgreSQL","Caching"],published:!0,excerpt:"Comprehensive application management platform built on Flat-Manager backend infrastructure with C++ plugin integration, specifically designed for Automotive Grade Linux (AGL) environments.",content:`
      <h2>Introduction</h2>
      <p>In the embedded Linux ecosystem, application distribution and management require robust, scalable solutions. This post details our comprehensive application management platform built on Flat-Manager backend infrastructure with C++ plugin integration, specifically designed for Automotive Grade Linux (AGL) environments.</p>

      <h2>Production Infrastructure: Fully Operational</h2>

      <h3>Flat-Manager Backend Architecture</h3>
      <p>Our flat-manager deployment operates at production scale on <code>localhost:8080</code> with complete Docker Compose orchestration including PostgreSQL persistence, authentication services, and OSTree repository serving. The cargo-based token generation system provides repository-specific authentication with configurable expiration policies and secure secret management.</p>

      <p><strong>Verified operational components:</strong></p>
      <ul>
        <li>Authentication: <code>cargo run --bin=gentoken -- --secret=secret --repo=stable</code></li>
        <li>Build pipeline: Complete create → push → commit → publish workflow</li>
        <li>Repository serving: Stable/beta environments at <code>/repo/{stable|beta}</code> endpoints</li>
        <li>Database operations: PostgreSQL with <code>flatpak_user</code> database containing builds, published_refs, and jobs tables</li>
      </ul>

      <h3>Multi-Protocol Integration Architecture</h3>
      <p>The system provides comprehensive access through four distinct integration pathways:</p>

      <p><strong>HTTP REST APIs</strong>: Direct server communication through <code>/status</code>, <code>/repo/{repo}/summary</code>, and repository content endpoints with JSON response handling</p>

      <p><strong>PostgreSQL Database Access</strong>: Real-time build monitoring through direct database queries:</p>
      <pre><code>SELECT id, repo, app_id, published_state, created_at FROM builds;
  SELECT ref, commit FROM published_refs;
  SELECT id, kind, status, created_at FROM jobs ORDER BY created_at DESC;</code></pre>

      <p><strong>Flatpak Client Integration</strong>: Standard repository operations through <code>flatpak remote-add --no-gpg-verify</code> with native installation workflows</p>

      <p><strong>OSTree Repository Management</strong>: Direct repository access via <code>ostree --repo=/app/repos/stable-repo refs</code> for advanced metadata operations</p>

      <h3>Production Database Schema</h3>
      <p>The operational PostgreSQL schema demonstrates enterprise-grade application lifecycle management:</p>

      <ul>
        <li><strong>builds table</strong>: Tracking build_id, repository, app_id, published_state with temporal creation timestamps</li>
        <li><strong>published_refs table</strong>: Managing OSTree refs, commit hashes, and publication status with referential integrity</li>
        <li><strong>jobs table</strong>: Processing pipeline operations with status tracking, kind classification, and temporal ordering</li>
      </ul>

      <p>This schema enables real-time monitoring, automated pipeline management, and comprehensive audit trails for production deployments.</p>

      <h2>Plugin Architecture Analysis and Extension Strategy</h2>

      <h3>Current Flatpak Plugin Assessment</h3>
      <p>Analysis of the existing <code>flatpak_plugin.cc</code> reveals a solid foundation with complete implementation of core system operations:</p>

      <p><strong>Implemented capabilities:</strong></p>
      <ul>
        <li><code>GetVersion()</code>, <code>GetDefaultArch()</code>, <code>GetSupportedArches()</code>: System information queries</li>
        <li><code>GetSystemInstallations()</code>, <code>GetUserInstallation()</code>: Installation path management</li>
        <li><code>GetApplicationsInstalled()</code>: Local application enumeration</li>
      </ul>

      <p><strong>Critical implementation gaps:</strong></p>
      <ul>
        <li><code>GetApplicationsRemote()</code>: Remote application discovery unimplemented</li>
        <li><code>ApplicationInstall()</code>, <code>ApplicationUninstall()</code>: Application lifecycle management missing</li>
        <li>HTTP client integration: No remote server communication capabilities</li>
        <li>Caching infrastructure: No offline operation support</li>
      </ul>

      <h3>Plugin Extension Technical Implementation</h3>
      <p>The extension strategy centers on C++ plugin architecture enhancement with comprehensive HTTP client integration and intelligent caching systems:</p>

      <p><strong>HTTP Client Architecture</strong>: libcurl-based implementation with nlohmann/json parsing, authentication header management, and automatic retry mechanisms for network resilience</p>

      <p><strong>New Method Signatures</strong>:</p>
      <pre><code>ErrorOr&lt;flutter::EncodableList&gt; GetRemoteApplications(const std::string& repo_url);
  ErrorOr&lt;bool&gt; AddRemoteRepository(const std::string& repo_url, const std::string& name);
  ErrorOr&lt;bool&gt; InstallFromRemote(const std::string& app_id, const std::string& repo_name);
  ErrorOr&lt;flutter::EncodableMap&gt; GetServerStatus(const std::string& server_url);
  ErrorOr&lt;flutter::EncodableList&gt; GetBuilds(const std::string& remote_url, const std::string& token);</code></pre>

      <p><strong>Authentication Integration</strong>: Secure token management through header injection with repository-specific scoping and automatic token refresh capabilities</p>

      <h3>HTTP Client Implementation Strategy</h3>
      <p>The HttpClient class provides comprehensive flat-manager API integration:</p>

      <p><strong>Core Architecture</strong>:</p>
      <pre><code>class HttpClient {
    std::string Get(const std::string& endpoint);
    flutter::EncodableMap GetJson(const std::string& endpoint);
    flutter::EncodableMap PostJson(const std::string& endpoint, const flutter::EncodableMap& data);
    
    // Flat-manager specific operations
    flutter::EncodableMap GetServerStatus();
    flutter::EncodableList GetRepositoryRefs(const std::string& repo_name);
    flutter::EncodableList GetBuilds(const std::string& auth_token);
  };</code></pre>

      <p><strong>Error handling encompasses</strong>:</p>
      <ul>
        <li>Network timeout management with configurable retry intervals</li>
        <li>HTTP status code interpretation with specific error mapping</li>
        <li>JSON parsing validation with schema enforcement</li>
        <li>Authentication failure recovery with automatic token refresh</li>
      </ul>

      <h3>Intelligent Caching Infrastructure</h3>
      <p>SQLite-based caching provides robust offline capabilities with intelligent synchronization:</p>

      <p><strong>Database Schema</strong>:</p>
      <pre><code>CREATE TABLE applications (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    version TEXT,
    description TEXT,
    remote_name TEXT,
    is_installed BOOLEAN DEFAULT FALSE,
    cached_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE repositories (
    name TEXT PRIMARY KEY,
    url TEXT NOT NULL,
    title TEXT,
    last_sync DATETIME,
    is_enabled BOOLEAN DEFAULT TRUE
  );

  CREATE TABLE sync_status (
    key TEXT PRIMARY KEY,
    last_sync DATETIME,
    status TEXT,
    max_age_minutes INTEGER DEFAULT 30
  );</code></pre>

      <p><strong>CacheManager Implementation</strong>:</p>
      <ul>
        <li>Application metadata persistence with remote source attribution</li>
        <li>Repository configuration management with sync timestamp tracking</li>
        <li>Intelligent refresh policies with configurable maximum age parameters</li>
        <li>Transaction-based consistency with rollback capabilities</li>
      </ul>

      <h3>Database Integration Strategy</h3>
      <p>Direct PostgreSQL integration enables real-time application lifecycle monitoring through connection pooling and prepared statement optimization:</p>

      <p><strong>Integration Capabilities</strong>:</p>
      <ul>
        <li>Build status queries with temporal filtering and status aggregation</li>
        <li>Published application enumeration with metadata extraction and dependency tracking</li>
        <li>Job processing monitoring with pipeline status visualization</li>
        <li>Repository health checks with automated alerting and recovery mechanisms</li>
      </ul>

      <p>The strategy emphasizes connection reuse, transaction management, and error recovery to ensure reliable database access without impacting server performance.</p>

      <h2>Advanced Integration Capabilities</h2>

      <h3>Multi-Protocol Backend Support</h3>
      <p>The architecture supports diverse integration patterns optimized for different operational requirements:</p>

      <p><strong>HTTP REST Integration</strong>: Modern API access through standardized endpoints with JSON response processing</p>
      <p><strong>Database-Driven Operations</strong>: Low-level PostgreSQL access for administrative tools and real-time monitoring</p>
      <p><strong>Flatpak Standard Compliance</strong>: Native flatpak workflows for compatibility with existing Linux environments</p>
      <p><strong>OSTree Repository Access</strong>: Direct repository manipulation for advanced deployment scenarios</p>

      <h3>Production-Ready Operational Features</h3>
      <p><strong>Monitoring and Health Checks</strong>: Comprehensive system monitoring through <code>/status</code> endpoint parsing, database connection validation, and repository integrity verification</p>

      <p><strong>Authentication and Security</strong>: Multi-layered security through token-based authentication, database connection encryption, and repository access control with OSTree permissions</p>

      <p><strong>Scalability and Performance</strong>: Horizontal scaling through stateless HTTP services, database connection pooling, and repository caching with intelligent refresh policies</p>
    `,readTime:"15 min read",slug:"week-4"},ib={week:5,title:"Extending Flatpak Plugin API: Implementation Architecture and Sandboxing Deep Dive",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","C++","Flatpak Plugin","API Extension","Sandboxing","AppStream","Security"],published:!0,excerpt:"Critical expansion of the Flatpak plugin API with comprehensive HTTP client integration, intelligent SQLite caching, and sophisticated BubbleWrap sandboxing mechanisms for automotive-grade security.",content:`
    <h2>Introduction</h2>
          <p>Week 5 focuses on the critical expansion of our Flatpak plugin API to bridge the gap between our Flutter frontend and the underlying Flatpak system. This week involved comprehensive analysis of the current plugin limitations, designing robust API extensions, and implementing sophisticated sandboxing mechanisms that ensure automotive-grade security for In-Vehicle Infotainment systems.</p>

          <h2>Current Plugin Architecture Assessment</h2>
          
          <h3>Existing Implementation Analysis</h3>
          <p>Our analysis of the current <code>ivi-homescreen-plugins/plugins/flatpak/</code> directory reveals a foundation that requires significant enhancement:</p>

          <p><strong>Current File Structure:</strong></p>
          <ul>
            <li><code>flatpak_plugin.h</code> - Basic plugin interface definitions</li>
            <li><code>flatpak_plugin.cc</code> - Core implementation with system query capabilities</li>
            <li><code>messages.g.h</code> - Pigeon-generated message definitions</li>
          </ul>

          <p><strong>Implemented Capabilities:</strong></p>
          <ul>
            <li><code>GetVersion()</code>, <code>GetDefaultArch()</code>, <code>GetSupportedArches()</code> - System information queries</li>
            <li><code>GetSystemInstallations()</code>, <code>GetUserInstallation()</code> - Local installation path management</li>
            <li><code>GetApplicationsInstalled()</code> - Local application enumeration</li>
          </ul>

          <p><strong>Critical Implementation Gaps:</strong></p>
          <ul>
            <li><code>GetApplicationsRemote()</code> - Remote application discovery completely unimplemented</li>
            <li><code>ApplicationInstall()</code>, <code>ApplicationUninstall()</code> - Application lifecycle management missing</li>
            <li>HTTP client integration - No remote server communication capabilities</li>
            <li>Caching infrastructure - No offline operation support or intelligent synchronization</li>
            <li>Authentication management - No token handling or secure communications</li>
          </ul>

          <h2>Comprehensive API Extension Strategy</h2>

          <h3>New Component Architecture</h3>
          <p>Our extension introduces seven new components that transform the plugin from a basic local interface into a comprehensive application management system:</p>

          <p><strong>New File Structure:</strong></p>
          <ul>
            <li><code>http_client.h/.cc</code> - HTTP operations for Flat-manager API integration</li>
            <li><code>cache_manager.h/.cc</code> - SQLite caching with intelligent synchronization</li>
            <li><code>sync_manager.h/.cc</code> - Background sync management</li>
            <li><code>auth_manager.h</code> - Token management and authentication</li>
          </ul>

          <h3>Enhanced Plugin Constructor Implementation</h3>
          <p>The plugin constructor requires comprehensive initialization of new subsystems including HTTP client, cache manager, authentication manager, and background sync services. This establishes the foundation for all remote operations.</p>

          <h2>HTTP Client Implementation Deep Dive</h2>

          <h3>Comprehensive HTTP Client Architecture</h3>
          <p>The HTTP client provides the foundation for all remote operations, integrating seamlessly with our Flat-manager backend. It implements robust error handling with automatic retry logic including network timeout management, HTTP status code interpretation, JSON parsing validation, and authentication failure recovery.</p>

          <h2>Intelligent Caching Infrastructure</h2>

          <h3>SQLite-Based Caching System</h3>
          <p>The caching system provides robust offline capabilities with intelligent synchronization policies. The cache manager provides intelligent data persistence with transaction-based consistency, supporting application metadata persistence, repository configuration management, and intelligent refresh policies.</p>

          <h2>Core API Method Implementation</h2>

          <h3>Remote Repository Management</h3>
          <p>Implementation of comprehensive remote repository operations includes repository URL validation, FlatpakRemote creation using libflatpak, adding to user installation, and caching repository metadata for offline access.</p>

          <h3>Remote Applications Discovery</h3>
          <p>Comprehensive remote application enumeration with intelligent caching checks cache validity, fetches fresh data from HTTP API when needed, and provides fallback to cached data for offline capability.</p>

          <h2>Application Lifecycle Management</h2>

          <h3>Secure Application Installation</h3>
          <p>Implementation of sandboxed application installation with comprehensive security validation includes application existence validation, security validation with sandbox permissions checking, and installation with progress monitoring.</p>

          <h2>Flatpak Sandboxing Architecture Deep Dive</h2>

          <h3>Core Sandboxing Components</h3>
          <p>Flatpak provides sophisticated application sandboxing through a multi-layered container system:</p>

          <p><strong>BubbleWrap (bwrap) - The Sandboxing Engine:</strong></p>
          <ul>
            <li><strong>Repository:</strong> <a href="https://github.com/containers/bubblewrap">containers/bubblewrap</a></li>
            <li><strong>Purpose:</strong> Low-level sandboxing tool that creates secure containers</li>
            <li><strong>Features:</strong>
              <ul>
                <li>User namespaces for privilege separation</li>
                <li>Mount namespaces for filesystem isolation</li>
                <li>Network namespaces for network isolation</li>
                <li>PID namespaces for process isolation</li>
                <li>Seccomp-BPF filters for system call filtering</li>
              </ul>
            </li>
          </ul>

          <p><strong>XDG Desktop Portal - Runtime Communication:</strong></p>
          <ul>
            <li><strong>Purpose:</strong> DBus interface that controls application runtime permissions</li>
            <li><strong>Function:</strong> Provides controlled access to host system resources</li>
            <li><strong>Portal Types:</strong> <a href="https://wiki.archlinux.org/title/XDG_Desktop_Portal">Supported Portals List</a></li>
          </ul>

          <h3>Sandbox Configuration Implementation</h3>

          <p><strong>Filesystem Isolation:</strong></p>
          <p>Applications have access to read-only system directories like /usr, /etc, /run/host, and application-specific directories including ~/.var/app/APP_ID, /app, /var/config, and /var/cache.</p>

          <p><strong>Permission Model:</strong></p>
          <p>Applications declare their required permissions in their metadata, including network access, filesystem access, device access, session bus access, and portal access.</p>

          <h3>XDG Desktop Portal Integration</h3>
          <p>The XDG Desktop Portal system provides controlled access to host resources through DBus interfaces:</p>

          <p><strong>Supported Portal Categories:</strong></p>
          <ul>
            <li><strong>File System Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.FileChooser</code> - File picker dialogs</li>
                <li><code>org.freedesktop.portal.Documents</code> - Document access management</li>
                <li><code>org.freedesktop.portal.Trash</code> - Trash/recycle bin operations</li>
              </ul>
            </li>
            <li><strong>Media Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.Camera</code> - Camera access</li>
                <li><code>org.freedesktop.portal.ScreenCast</code> - Screen recording/sharing</li>
                <li><code>org.freedesktop.portal.Screenshot</code> - Screenshot capture</li>
              </ul>
            </li>
            <li><strong>System Integration Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.Notification</code> - System notifications</li>
                <li><code>org.freedesktop.portal.Inhibit</code> - System sleep/suspend control</li>
                <li><code>org.freedesktop.portal.Background</code> - Background app permissions</li>
              </ul>
            </li>
          </ul>

          <h2>API Implementation Phases</h2>

          <h3>Phase 1: Foundation Components</h3>
          <ol>
            <li><strong>HTTP Client:</strong> Basic libcurl wrapper for Flat-manager API integration</li>
            <li><strong>Cache Manager:</strong> SQLite-based caching for repository data and offline capabilities</li>
            <li><strong>Plugin Extension:</strong> Add new members to <code>FlatpakPlugin</code> class</li>
          </ol>

          <h3>Phase 2: Remote Management</h3>
          <ol>
            <li><strong>Remote Management:</strong> Implement <code>RemoteAdd()</code>/<code>RemoteRemove()</code></li>
            <li><strong>Remote Apps:</strong> Implement <code>GetApplicationsRemote()</code></li>
            <li><strong>AppStream Integration:</strong> Remote AppStream fetching and parsing</li>
          </ol>

          <h3>Phase 3: Application Lifecycle</h3>
          <ol>
            <li><strong>Installation:</strong> Implement <code>ApplicationInstall()</code>/<code>ApplicationUninstall()</code></li>
            <li><strong>Process Management:</strong> Implement <code>ApplicationStart()</code>/<code>ApplicationStop()</code></li>
          </ol>

          <h2>Required Libflatpak API Integration</h2>

          <p><strong>For Remote Management:</strong></p>
          <ul>
            <li><code>flatpak_installation_modify_remote()</code> - For RemoteAdd</li>
            <li><code>flatpak_installation_remove_remote()</code> - For RemoteRemove</li>
            <li><code>flatpak_installation_list_remote_refs()</code> - For GetApplicationsRemote</li>
          </ul>

          <p><strong>For Application Management:</strong></p>
          <ul>
            <li><code>flatpak_installation_install()</code> - For ApplicationInstall (with sandbox setup)</li>
            <li><code>flatpak_installation_uninstall()</code> - For ApplicationUninstall (with cleanup)</li>
            <li><code>g_spawn_async()</code> with BubbleWrap - For ApplicationStart (with sandboxing)</li>
            <li>Process management and portal cleanup - For ApplicationStop</li>
          </ul>

          <p><strong>For Sandboxing and Security:</strong></p>
          <ul>
            <li><code>flatpak_installation_get_metadata()</code> - Parse application permissions</li>
            <li>BubbleWrap argument construction - Build secure containers</li>
            <li>XDG Portal DBus calls - Runtime permission requests</li>
            <li>Seccomp filter management - System call filtering</li>
          </ul>

          <h2>Critical Issue Resolution: AppStream-Compose</h2>

          <h3>The AppStream-Compose Problem</h3>
          <p>During this week's implementation, I encountered a critical issue with <code>appstream-compose</code> that prevented proper Flatpak application building. The error occurred when trying to build applications using flatpak-builder.</p>

          <h3>Root Cause Analysis</h3>
          <p>The issue stemmed from version incompatibility in the Debian ecosystem:</p>
          <ul>
            <li><strong>Debian Bookworm flatpak-builder version:</strong> 1.2.3-1</li>
            <li><strong>Problem:</strong> flatpak-builder in bookworm cannot build apps based on the 24.08 SDK</li>
            <li><strong>Missing component:</strong> <code>appstream-compose</code> is no longer present in the SDK</li>
            <li><strong>Solution introduced:</strong> Since version 1.4, flatpak-builder calls "appstreamcli compose" on the host instead</li>
          </ul>

          <h3>Resolution Implementation</h3>
          <p>I resolved this by manually upgrading to flatpak-builder 1.4.4 by cloning the latest flatpak-builder repository, checking out version 1.4.4, and building and installing it manually.</p>

          <p><strong>Key Changes in flatpak-builder 1.4:</strong></p>
          <ul>
            <li>Replaced <code>appstream-compose</code> with <code>appstreamcli compose</code></li>
            <li>Improved SDK compatibility with newer runtime versions</li>
            <li>Enhanced metadata processing pipeline</li>
            <li>Better error reporting for AppStream validation</li>
          </ul>

          <p>After the manual installation, all Flatpak builds work correctly, enabling proper application packaging and distribution through our repository infrastructure.</p>

          <h2>Week 5 Achievements and Integration Status</h2>

          <p><strong>Completed Implementations:</strong></p>
          <ul>
            <li>Comprehensive HTTP client with Flat-manager API integration</li>
            <li>Intelligent SQLite caching system with offline capabilities</li>
            <li>Extended plugin architecture with new component integration</li>
            <li>Remote repository management implementation</li>
            <li>Application discovery and metadata caching</li>
            <li>Sandboxing architecture analysis and security validation</li>
            <li>AppStream-compose compatibility resolution</li>
          </ul>

          <p><strong>Security and Sandboxing Integration:</strong></p>
          <ul>
            <li>BubbleWrap container integration for application isolation</li>
            <li>XDG Desktop Portal communication framework</li>
            <li>Permission validation and security policy enforcement</li>
            <li>Filesystem and network isolation implementation</li>
          </ul>

          <p><strong>Next Steps for Week 6:</strong></p>
          <ul>
            <li>Complete application installation and uninstallation implementation</li>
            <li>Implement application process management (start/stop)</li>
            <li>Advanced background synchronization with conflict resolution</li>
            <li>Performance optimization for embedded automotive systems</li>
            <li>Comprehensive testing framework for all new API methods</li>
          </ul>

          <p>The foundation for a comprehensive, secure, and automotive-grade application management system is now solidly in place. The plugin architecture successfully bridges Flutter frontend requirements with robust Flatpak backend capabilities, while maintaining the security standards essential for In-Vehicle Infotainment systems.</p>

          <h2>References and Documentation</h2>
          <ul>
            <li><a href="https://docs.flatpak.org/en/latest/libflatpak-api-reference.html">Flatpak API Reference</a></li>
            <li><a href="https://github.com/containers/bubblewrap">BubbleWrap Repository</a></li>
            <li><a href="https://flatpak.github.io/xdg-desktop-portal/">XDG Desktop Portal Documentation</a></li>
            <li><a href="https://wiki.archlinux.org/title/XDG_Desktop_Portal">XDG Portal List</a></li>
            <li><a href="https://docs.flatpak.org/en/latest/sandbox-permissions.html">Flatpak Security Model</a></li>
            <li><a href="https://github.com/toyota-connected/ivi-homescreen">IVI Homescreen Repository</a></li>
            <li><a href="https://github.com/toyota-connected/ivi-homescreen-plugins">IVI Homescreen Plugins</a></li>
            <li><a href="https://github.com/flatpak/flatpak-builder/pull/517">Flatpak-builder 1.4 AppStream Changes</a></li>
          </ul>
          `,readTime:"18 min read",slug:"week-5"},ob={week:6,title:"First Feature Implementation - HTTP Client Enhancement",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","HTTP Client","CurlClient","Testing","Open Source"],published:!0,excerpt:"Successfully opened feature request #123 and merged first PR #124 enhancing CurlClient with modern HTTP interface, authentication support, memory leak fixes, and comprehensive testing framework.",content:`
    <h2>Opening the Feature Request</h2>
        <p>This week marked a significant milestone in my GSoC journey as I officially opened a feature request at the toyota-connected/ivi-homescreen-plugins repository.</p>
        
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(59, 130, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6"></path>
              <path d="m9 9 3-3 3 3"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
            GitHub Issue #123
          </h3>
          <p><strong>Add Flatpak remote management and installation support</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(59, 130, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View Issue on GitHub
          </a>
        </div>

        <h2>Feature Implementation Strategy</h2>
        <p>The feature implementation is structured as a series of 5 progressive PRs:</p>
        
        <ol>
          <li><strong>PR 1: HTTP Client Enhancement</strong> - Enhance the common CurlClient for generic requests</li>
          <li><strong>PR 2: Caching & Sync Infrastructure</strong> - SQLite-based caching and sync management</li>
          <li><strong>PR 3: Remote Management API</strong> - Remote repository browsing and management</li>
          <li><strong>PR 4: Application Installation</strong> - Install/uninstall Flatpak applications</li>
          <li><strong>PR 5: Process Management</strong> - Start/stop application lifecycle management</li>
        </ol>

        <h2>First PR Success</h2>
        <p>The first pull request was successfully merged this week! This PR enhanced the common CurlClient to provide a robust foundation for HTTP communications with remote repositories.</p>
        
        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(139, 92, 246); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
            Pull Request #124
          </h3>
          <p><strong>feat(common): Enhance CurlClient for generic HTTP requests</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/124" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h3>Key Enhancements Implemented</h3>
        
        <h4>Modern HTTP Interface</h4>
        <ul>
          <li>Added simple Get() and Post() methods for RESTful API calls</li>
          <li>Implemented stateless, self-contained request handling</li>
          <li>Provided clean public API for HTTP operations</li>
        </ul>

        <h4>Security & Authentication</h4>
        <ul>
          <li>Added SetBearerToken() method for authenticated requests</li>
          <li>Implemented proper Authorization header management</li>
          <li>Ensured secure communication with remote repositories</li>
        </ul>

        <h4>Memory Management</h4>
        <ul>
          <li>Fixed critical memory leak in curl_slist header management</li>
          <li>Implemented proper resource cleanup across request lifecycle</li>
          <li>Enhanced RAII compliance for better resource safety</li>
        </ul>

        <h4>Data Integrity</h4>
        <ul>
          <li>Added proper URL-encoding using curl_easy_escape</li>
          <li>Ensured correct handling of special characters in requests</li>
          <li>Implemented robust form data processing</li>
        </ul>

        <h2>Comprehensive Testing</h2>
        <p>A major focus this week was implementing comprehensive testing for the CurlClient enhancement:</p>

        <h3>Test Coverage</h3>
        <ul>
          <li><strong>22 total tests</strong> with 20 passing successfully</li>
          <li>Constructor and initialization testing</li>
          <li>HTTP method validation (GET/POST with various data types)</li>
          <li>Authentication and bearer token handling</li>
          <li>Content retrieval in multiple formats</li>
          <li>Error handling for network failures and invalid URLs</li>
          <li>Class design validation (non-copyable, RAII compliance)</li>
        </ul>

        <h3>Mock Testing Framework</h3>
        <ul>
          <li>Implemented MockCurl class with GoogleMock integration</li>
          <li>Resolved curl macro conflicts with mock framework</li>
          <li>Set up proper dependency linking with fmt/spdlog</li>
          <li>Conducted real HTTP integration tests using httpbin.org</li>
        </ul>

        <h2>Community Collaboration</h2>
        <p>Working directly with the toyota-connected team has been an incredible learning experience. The code review process provided valuable insights into:</p>
        <ul>
          <li>Automotive-grade software quality standards</li>
          <li>Memory safety requirements for embedded systems</li>
          <li>API design principles for plugin architectures</li>
          <li>Testing methodologies for critical infrastructure</li>
        </ul>

        <h2>Next Week's Focus</h2>
        <p>With the HTTP foundation now in place, next week I'll be working on the remaining 4 PRs:</p>
        <ul>
          <li>Caching infrastructure with SQLite integration</li>
          <li>Remote repository management APIs</li>
          <li>Application installation and lifecycle management</li>
        </ul>

        <p>The successful merge of the first PR validates the technical approach and sets a strong foundation for the upcoming features.</p>
    `,readTime:"10 min read",slug:"week-6"},ab={week:7,title:"Building a Robust Caching System: A Deep Dive into its Architecture and Design Patterns",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Caching","Design Patterns","Architecture","C++","Performance"],published:!0,excerpt:"Exploring the design and implementation of a sophisticated caching system with architectural patterns, key components, and advanced features for robustness, flexibility, and observability.",content:`
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg>
            <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Open</span>
            Pull Request #130
          </h3>
          <p><strong>feat : Add Cache Manager for Flatpak Plugin and Enhance CurlClient</strong></p>
          <p>This pull request introduces a CacheManager for the Flatpak plugin, enabling efficient caching of application and installation data, and expands the CurlClient to handle all necessary network operations internally. The changes improve performance, reliability, and observability for the Flatpak plugin while maintaining thread safety and extensibility.</p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/130" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <p>In modern software development, efficient data access is paramount. Caching is a fundamental technique to achieve this, reducing latency and database load by storing frequently accessed data closer to the application. However, building a performant, reliable, and maintainable caching solution requires careful architectural consideration.</p>

        <p>This post will explore the design and implementation of a sophisticated caching system, highlighting its architectural patterns, key components, and advanced features that ensure robustness, flexibility, and observability. We'll examine how various design patterns are leveraged to create a highly modular and extensible system.</p>

        <h2>System Architecture Sequence Flow</h2>
        <p>The following diagram illustrates how the caching system components interact across different scenarios:</p>

        <div style="background: #0f172a; border-radius: 12px; padding: 24px; margin: 24px 0; overflow-x: auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);">
          <svg viewBox="0 0 1400 1000" style="width: 100%; height: auto; background: #0f172a; border-radius: 8px;">
            <defs>
              <!-- Gradient Definitions -->
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e40af" />
                <stop offset="100%" stop-color="#1e3a8a" />
              </linearGradient>
              
              <!-- Arrow Markers -->
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
              
              <marker id="asyncArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" opacity="0.8" />
              </marker>
              
              <!-- Pattern for async messages -->
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="6" height="6">
                <path d="M-1,1 l2,-2 M0,6 l6,-6 M5,7 l2,-2" stroke="currentColor" stroke-width="1" opacity="0.7"/>
              </pattern>
            </defs>
            
            <!-- Title -->
            <text x="700" y="40" text-anchor="middle" fill="#f8fafc" font-family="'Inter', sans-serif" font-size="20" font-weight="600">Cache System Sequence Diagram</text>
            
            <!-- Participant Headers -->
            <g class="participant">
              <rect x="40" y="70" width="140" height="50" rx="8" fill="url(#headerGradient)" stroke="#1e40af" stroke-width="1.5"/>
              <text x="110" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">FlatpakPlugin</text>
            </g>
            
            <g class="participant">
              <rect x="230" y="70" width="140" height="50" rx="8" fill="#065f46" stroke="#047857" stroke-width="1.5"/>
              <text x="300" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CacheManager</text>
            </g>
            
            <g class="participant">
              <rect x="420" y="70" width="160" height="50" rx="8" fill="#991b1b" stroke="#b91c1c" stroke-width="1.5"/>
              <text x="500" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">SQLiteCache</text>
            </g>
            
            <g class="participant">
              <rect x="630" y="70" width="160" height="50" rx="8" fill="#5b21b6" stroke="#7c3aed" stroke-width="1.5"/>
              <text x="710" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">NetworkFetcher</text>
            </g>
            
            <g class="participant">
              <rect x="840" y="70" width="120" height="50" rx="8" fill="#9a3412" stroke="#ea580c" stroke-width="1.5"/>
              <text x="900" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CurlClient</text>
            </g>
            
            <g class="participant">
              <rect x="1010" y="70" width="140" height="50" rx="8" fill="#075985" stroke="#0ea5e9" stroke-width="1.5"/>
              <text x="1080" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CacheObserver</text>
            </g>
            
            <!-- Lifelines -->
            <line x1="110" y1="130" x2="110" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="300" y1="130" x2="300" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="500" y1="130" x2="500" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="710" y1="130" x2="710" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="900" y1="130" x2="900" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="1080" y1="130" x2="1080" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            
            <!-- Scenario 1: Cache Hit -->
            <g class="scenario">
              <rect x="40" y="150" width="1320" height="180" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="175" fill="#10b981" font-family="'Inter', sans-serif" font-size="14" font-weight="600">1. Cache Hit Scenario</text>
              
              <!-- Cache Hit Flow -->
              <g class="flow">
                <!-- Request from Plugin to CacheManager -->
                <line x1="110" y1="200" x2="300" y2="200" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="180" width="110" height="20" rx="4" fill="#1e40af" opacity="0.1"/>
                <text x="205" y="195" text-anchor="middle" fill="#93c5fd" font-family="'Fira Code', monospace" font-size="11">GetApplications()</text>
                
                <!-- CacheManager checks cache -->
                <line x1="300" y1="230" x2="500" y2="230" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="210" width="110" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="225" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Retrieve(key)</text>
                
                <!-- Cache hit response -->
                <line x1="500" y1="260" x2="300" y2="260" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="380" y="240" width="90" height="20" rx="4" fill="#991b1b" opacity="0.1"/>
                <text x="400" y="255" text-anchor="middle" fill="#fca5a5" font-family="'Fira Code', monospace" font-size="11">[Cached Data]</text>
                
                <!-- Notify observer -->
                <line x1="300" y1="290" x2="1080" y2="290" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="270" width="120" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="285" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnCacheHit()</text>
                
                <!-- Return cached data -->
                <line x1="300" y1="320" x2="110" y2="320" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="300" width="120" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="205" y="315" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">cached_data</text>
              </g>
            </g>
            
            <!-- Scenario 2: Cache Miss -->
            <g class="scenario">
              <rect x="40" y="360" width="1320" height="260" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="385" fill="#f59e0b" font-family="'Inter', sans-serif" font-size="14" font-weight="600">2. Cache Miss - Network Success</text>
              
              <!-- Cache Miss Flow -->
              <g class="flow">
                <!-- Request from Plugin to CacheManager -->
                <line x1="110" y1="420" x2="300" y2="420" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="400" width="110" height="20" rx="4" fill="#1e40af" opacity="0.1"/>
                <text x="205" y="415" text-anchor="middle" fill="#93c5fd" font-family="'Fira Code', monospace" font-size="11">GetApplications()</text>
                
                <!-- CacheManager checks cache -->
                <line x1="300" y1="450" x2="500" y2="450" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="430" width="110" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="445" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Retrieve(key)</text>
                
                <!-- Cache miss response -->
                <line x1="500" y1="480" x2="300" y2="480" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="370" y="460" width="70" height="20" rx="4" fill="#991b1b" opacity="0.1"/>
                <text x="400" y="475" text-anchor="middle" fill="#fca5a5" font-family="'Fira Code', monospace" font-size="11">[Cache Miss]</text>
                
                <!-- Notify observer -->
                <line x1="300" y1="510" x2="1080" y2="510" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="490" width="120" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="505" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnCacheMiss()</text>
                
                <!-- Network fetch -->
                <line x1="300" y1="540" x2="710" y2="540" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="520" width="150" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="535" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Fetch(url, headers)</text>
                
                <!-- CurlClient request -->
                <line x1="710" y1="570" x2="900" y2="570" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="750" y="550" width="90" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="805" y="565" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Get(url)</text>
                
                <!-- Response from CurlClient -->
                <line x1="900" y1="600" x2="710" y2="600" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="750" y="580" width="120" height="20" rx="4" fill="#9a3412" opacity="0.1"/>
                <text x="805" y="595" text-anchor="middle" fill="#fdba74" font-family="'Fira Code', monospace" font-size="11">response_data</text>
                
                <!-- Return network data -->
                <line x1="710" y1="630" x2="300" y2="630" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="610" width="120" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="625" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">network_data</text>
                
                <!-- Store in cache -->
                <line x1="300" y1="660" x2="500" y2="660" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="640" width="140" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="655" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Store(key, data)</text>
                
                <!-- Return fresh data -->
                <line x1="300" y1="690" x2="110" y2="690" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="670" width="120" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="205" y="685" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">fresh_data</text>
              </g>
            </g>
            
            <!-- Scenario 3: Network Failure -->
            <g class="scenario">
              <rect x="40" y="650" width="1320" height="230" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="675" fill="#ef4444" font-family="'Inter', sans-serif" font-size="14" font-weight="600">3. Network Failure - Fallback to Stale Cache</text>
              
              <!-- Network Failure Flow -->
              <g class="flow">
                <!-- Attempt network fetch -->
                <line x1="300" y1="710" x2="710" y2="710" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="690" width="150" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="705" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Fetch(url, headers)</text>
                
                <!-- Network error indicator -->
                <g>
                  <line x1="705" y1="735" x2="715" y2="745" stroke="#ef4444" stroke-width="2"/>
                  <line x1="705" y1="745" x2="715" y2="735" stroke="#ef4444" stroke-width="2"/>
                  <circle cx="710" cy="740" r="12" fill="none" stroke="#ef4444" stroke-width="2"/>
                  <text x="710" y="745" text-anchor="middle" fill="#ef4444" font-family="'Fira Code', monospace" font-size="10" font-weight="bold">!</text>
                </g>
                
                <!-- Error notification -->
                <line x1="300" y1="770" x2="1080" y2="770" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="750" width="160" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="765" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnNetworkError()</text>
                
                <!-- Fallback notification -->
                <line x1="300" y1="800" x2="1080" y2="800" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="780" width="160" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="795" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnNetworkFallback()</text>
                
                <!-- Return stale data -->
                <line x1="300" y1="840" x2="110" y2="840" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="820" width="120" height="20" rx="4" fill="#92400e" opacity="0.1"/>
                <text x="205" y="835" text-anchor="middle" fill="#fcd34d" font-family="'Fira Code', monospace" font-size="11">stale_data</text>
              </g>
            </g>
            
            <!-- Arrow marker definition -->
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
               refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>

        <h2>Architectural Foundation: Design Patterns in Action</h2>
        <p>The caching system's design heavily relies on several well-established design patterns, each contributing to its modularity, flexibility, and maintainability.</p>

        <h3>Facade Pattern</h3>
        <p>At the heart of the system is the <strong>CacheManager</strong>. This class acts as a facade, providing a simplified, unified interface to a complex underlying caching subsystem. Instead of interacting directly with storage, network fetchers, and policy engines, external components only need to communicate with CacheManager, abstracting away the intricate details.</p>

        <h3>Strategy Pattern</h3>
        <p>The system achieves remarkable flexibility through the Strategy Pattern. It decouples the caching logic from the actual data storage and network fetching mechanisms.</p>

        <ul>
          <li><strong>ICacheStorage</strong>: This interface defines the contract for different cache storage implementations. Whether you need an in-memory cache, a file-based cache, or a database-backed solution like SQLiteCacheStorage, you can plug it in without altering the CacheManager's core logic.</li>
          <li><strong>INetworkFetcher</strong>: Similarly, this interface allows for various network fetching strategies. The CurlNetworkFetcher, for instance, handles HTTP requests, but this design allows for easy integration of other network clients or even mock implementations for testing.</li>
        </ul>

        <h3>Builder Pattern</h3>
        <p>Configuring a robust caching system can involve numerous parameters. The <strong>CacheManager::Builder</strong> simplifies this process. It provides a fluent API for constructing CacheManager instances with various options, such as database path, TTL (Time-To-Live), cache policy, compression, and network settings. This improves readability and reduces the chance of misconfiguration.</p>

        <h3>Observer Pattern</h3>
        <p>For effective monitoring and analysis, the system incorporates the Observer Pattern.</p>
        <p><strong>ICacheObserver</strong>: This interface defines methods for reacting to significant cache events, such as cache hits, misses, expirations, network fallbacks, and cleanup operations. Concrete observers, like DefaultCacheObserver for logging and MetricsCacheObserver for collecting performance statistics, can subscribe to these events, enabling real-time insights and debugging without tightly coupling the CacheManager to monitoring logic.</p>

        <h3>Template Method Pattern</h3>
        <p>To ensure consistent behavior across different data types being cached, the <strong>CacheOperationTemplate</strong> employs the Template Method Pattern. It outlines a skeletal algorithm for caching and retrieving data, leaving specific steps (like key validation, data serialization/deserialization, expiry calculation, and data validation) to be implemented by concrete subclasses (e.g., FlatpakApplicationCacheOperation, FlatpakInstallationCacheOperation). This enforces a standardized caching flow while allowing customization for specific data needs.</p>

        <h3>Repository Pattern</h3>
        <p>While not explicitly named as a top-level component, the ICacheStorage interface, particularly how SQLiteCacheStorage interacts with the underlying database, subtly reflects the Repository Pattern. It abstracts the data access logic, providing a collection-like interface for storing and retrieving cache entries, decoupling the CacheManager from direct database operations.</p>

        <h3>Cache-Aside Pattern</h3>
        <p>The core interaction between CacheManager, ICacheStorage, and INetworkFetcher follows the Cache-Aside Pattern. The application (or CacheManager in this context) explicitly manages the cache. It first checks the cache for data. If a cache miss occurs, it fetches the data from the underlying data source (network in this case), uses it, and then stores it in the cache for future requests. This pattern provides explicit control over caching behavior and facilitates fallbacks to the network when data isn't in the cache or is expired.</p>

        <h2>Core Components and Their Interactions</h2>
        <p>The system's components are meticulously designed to work together, as illustrated in the architectural diagram above.</p>

        <ul>
          <li><strong>FlatpakPlugin</strong>: This represents the external consumer of the caching system, likely an application or service that needs to cache data related to Flatpak. It interacts solely with the CacheManager facade.</li>
          <li><strong>CacheManager</strong>: As the central orchestrator, CacheManager encapsulates the caching logic. It decides whether to fetch data from the ICacheStorage or INetworkFetcher based on configured policies. It also dispatches events to ICacheObserver implementations.</li>
          <li><strong>ICacheStorage (and SQLiteCacheStorage)</strong>: This component handles persistent storage of cached data. SQLiteCacheStorage specifically uses an SQLite database, ensuring thread-safe operations and supporting features like data compression (via zlib) and efficient cleanup.</li>
          <li><strong>INetworkFetcher (and CurlNetworkFetcher)</strong>: This component is responsible for retrieving data from external network sources. CurlNetworkFetcher leverages an existing CurlClient to perform HTTP GET and POST requests, incorporating retry logic and timeout mechanisms for reliability.</li>
          <li><strong>ICacheObserver</strong>: These components passively monitor the CacheManager's activities. They receive notifications about cache events, allowing for logging, real-time metrics collection, and other side effects without burdening the core caching logic.</li>
        </ul>

        <h2>Data Flow Orchestration</h2>
        <p>The CacheManager orchestrates the data flow:</p>

        <ol>
          <li>A request comes in for a piece of data (e.g., a list of Flatpak applications).</li>
          <li>Based on the configured Cache Policy (e.g., CACHE_FIRST, NETWORK_FIRST), the CacheManager first attempts to retrieve the data from its ICacheStorage.</li>
          <li>If the data is found and valid (not expired), it's returned. An OnCacheHit event is triggered for observers.</li>
          <li>If the data is not found or expired (OnCacheMiss, OnCacheExpired), or if the policy dictates, the CacheManager then utilizes its INetworkFetcher to retrieve the data from the network.</li>
          <li>If the network fetch is successful, the data is stored in the ICacheStorage for future use, and then returned. If the network request fails, OnNetworkError is called, and the system might fall back to stale cache data if configured to do so (OnNetworkFallback).</li>
          <li>A dedicated background thread runs a CleanupWorker at configurable intervals, invoking CleanupExpired on the ICacheStorage to remove stale entries and keep the cache size manageable.</li>
        </ol>

        <h2>Practical Application and Key Capabilities</h2>
        <p>The caching system is designed for high performance, reliability, and ease of use, providing a comprehensive solution for managing dynamic data.</p>

        <h3>Core Functionality</h3>
        <p>The CacheManager provides a rich set of features:</p>

        <ul>
          <li><strong>Thread-safe operations</strong>: All public methods are designed to be thread-safe, allowing concurrent access from multiple parts of an application without data corruption. This is achieved through careful use of mutexes and atomic operations.</li>
          <li><strong>Configurable Cache Policies</strong>: Developers can choose from policies like CACHE_FIRST (default, prioritize speed), NETWORK_FIRST (prioritize freshness), CACHE_ONLY, or NETWORK_ONLY, adapting to specific application requirements.</li>
          <li><strong>Automatic and Manual Cleanup</strong>: Expired entries are automatically cleaned up by a dedicated background thread, maintaining cache hygiene. Manual cleanup is also available for immediate purging.</li>
          <li><strong>Metrics and Observability</strong>: Through the Observer pattern, detailed metrics (hits, misses, network calls, cache size, uptime) are collected, providing critical insights into cache performance. Custom observers can be integrated for advanced monitoring.</li>
          <li><strong>Error Handling and Fallbacks</strong>: The system gracefully handles network failures, logging errors and offering configurable fallback mechanisms to serve stale data from the cache, ensuring application resilience.</li>
          <li><strong>Data Compression</strong>: For storage-bound scenarios, optional zlib compression is available to reduce the footprint of cached data within SQLite.</li>
          <li><strong>Export/Import Capabilities</strong>: The entire cache can be exported to or imported from a file, useful for debugging, backup, or pre-populating caches.</li>
        </ul>

        <h3>Technical Implementation</h3>
        <p>The core implementation leverages standard C++ features for robust concurrency and resource management:</p>

        <ul>
          <li><strong>std::unique_ptr</strong>: For automatic memory management of strategy objects (ICacheStorage, INetworkFetcher, ICacheObserver).</li>
          <li><strong>std::mutex and std::atomic</strong>: For ensuring thread safety across all operations, especially when accessing shared resources like the SQLite database or metrics counters.</li>
          <li><strong>std::thread and std::condition_variable</strong>: To implement the background cleanup worker efficiently, allowing it to sleep and wake up based on a timer or explicit notification.</li>
          <li><strong>std::chrono</strong>: For precise time management, including TTLs, network timeouts, and calculating uptime.</li>
          <li><strong>Serialization/Deserialization</strong>: The CacheOperationTemplate ensures that data types like flutter::EncodableList and Installation can be correctly converted to and from string formats for storage.</li>
        </ul>

        <h2>Rigorous Testing for Reliability</h2>
        <p>A critical aspect of any robust system is thorough testing. The caching solution includes a comprehensive test suite covering various scenarios to guarantee its reliability and performance:</p>

        <ul>
          <li><strong>Basic Functionality</strong>: Verifying correct initialization, configuration, and fundamental cache operations (store, retrieve).</li>
          <li><strong>Design Pattern Validation</strong>: Ensuring observers are notified correctly and that different cache policies behave as expected.</li>
          <li><strong>Concurrency and Thread Safety</strong>: Stress testing with multiple threads to confirm stability and data integrity under heavy load. This includes simultaneous invalidate, cleanup, and get operations.</li>
          <li><strong>Error Handling</strong>: Testing how the system reacts to invalid paths, network failures, and other exceptional conditions, ensuring graceful degradation and error logging.</li>
          <li><strong>Persistence and State Management</strong>: Validating export and import functionalities to ensure data can be saved and restored reliably.</li>
          <li><strong>Metrics Accuracy</strong>: Confirming that all performance counters (hits, misses, network calls, cache size) are accurately updated.</li>
        </ul>

        <p>This comprehensive caching system represents a significant milestone in the GSoC project, providing a robust foundation for efficient data management in the Flatpak plugin ecosystem. The careful application of design patterns and thorough testing ensures both current reliability and future extensibility.</p>
      `,readTime:"15 min read",slug:"week-7"},sb={week:8,title:"Navigating the Future: Testing, Development, and Flatpak in Toyota Connected's IVI Homescreen",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Testing","Development Environment","libflatpak","Automotive Grade Linux","C++"],published:!0,excerpt:"Hey everyone! As a developer deeply immersed in the Toyota Connected world, I'm absolutely thrilled to pull back the curtain and share some exciting insights into what's being built for the In-Vehicle Infotainment homescreen. From robust testing methodologies to mastering the libflatpak API - join me on this technical adventure!",content:`
       <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(139, 92, 246); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
            Pull Request #131          </h3>
          <p style="position:relative;z-index:1;"><strong>Add Curl Client Tests (Part of Feature #123)</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/131" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h2>Hey Everyone! Welcome to My Toyota Connected Adventure</h2>
        <p>As a developer deeply immersed in the <a href="https://github.com/toyota-connected/ivi-homescreen" target="_blank" rel="noopener noreferrer" style="color: rgb(59, 130, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">Toyota Connected world</a>, I'm absolutely thrilled to pull back the curtain and share some exciting insights into what's being built for the In-Vehicle Infotainment homescreen! This week has been an incredible milestone - implementing comprehensive testing infrastructure, diving deep into the software stack, and mastering the libflatpak API for robust application management. Join me on this technical adventure as I explore these critical components that form the backbone of an automotive-grade application store!</p>

        <h2>Leveling Up the Game: Building Confidence Through Comprehensive Testing</h2>
        <p>You know, quality and reliability are always at the top of my mind, especially when it comes to something as central as an IVI system. That's why I'm super excited to share a big recent win: <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/131" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.3);">the successful merge of Pull Request #131</a></strong>, which focused on adding a comprehensive test suite for the Curl Client component! This represents a foundational step in the broader testing strategy outlined in <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123" target="_blank" rel="noopener noreferrer" style="color: rgb(59, 130, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">Feature #123</a></strong>.</p>

        <h3>Getting Up Close with the Curl Client Test Architecture</h3>
        <p>Think of the Curl Client as the unsung hero that handles all the network communication behind the scenes. Getting a solid test suite in place for it was absolutely crucial! The testing approach follows industry best practices for C++ component testing, ensuring reliability and maintainability across the entire HTTP communication layer.</p>

        <h4>What I've Been Testing (And Why It Matters!)</h4>
        <ul>
          <li><strong>Basic HTTP Operations</strong>: Making sure we can send and receive data smoothly with comprehensive validation of GET/POST request functionality</li>
          <li><strong>Response Handling</strong>: Because even the best systems need to know how to gracefully recover from a hiccup - rigorous testing of response parsing and error conditions</li>
          <li><strong>Timeout Configurations</strong>: Ensuring the system doesn't get stuck waiting forever if a network connection is sluggish</li>
          <li><strong>Header Management</strong>: Making sure all the right information gets passed along with every request, including authentication and content-type negotiation</li>
          <li><strong>Error Scenarios</strong>: Those challenging edge cases including network failures and connection interruptions</li>
        </ul>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(59, 130, 246);">My Testing Strategy Roadmap</h4>
          <p><strong>Current Phase (PR #131)</strong>: Curl Client test foundation</p>
          <p><strong>Phase 2 (Coming Next)</strong>: Cache management system testing with mock scenarios</p>
          <p><strong>Phase 3 (On the Horizon)</strong>: Flatpak plugin integration testing with full workflow validation</p>
          <p>Each phase builds upon the previous foundation, ensuring comprehensive coverage across the entire application stack - it's like building a really solid house!</p>
        </div>

        <h3>The Cool Mock Server Implementation</h3>
        <p>I'm particularly proud of the sophisticated mock server responses that simulate various real-world scenarios:</p>
        <ul>
          <li><strong>Success Scenarios</strong>: Standard HTTP 200 responses with valid JSON/XML payloads</li>
          <li><strong>Error Conditions</strong>: HTTP 4xx/5xx status codes with appropriate error messaging</li>
          <li><strong>Network Delays</strong>: Simulated latency testing to validate timeout handling</li>
          <li><strong>Malformed Data</strong>: Invalid response formats to test parser robustness</li>
        </ul>

        <p>I'm happy to report that all these tests sailed through locally, covering everything from perfect scenarios to those tricky edge cases!</p>

        <h2>Inside My Digital Garage: Navigating the Toyota Connected Software Stack</h2>
        <p>Ever wondered how it all comes together? The software setup at Toyota Connected is pretty unique, and I'm here to give you the insider tour! Understanding this development ecosystem has been crucial for building production-ready automotive software. The architecture follows a sophisticated layered approach designed for embedded systems reliability.</p>

        <h3>Taking a Tour of the Repository Architecture</h3>
        <p>At the heart of it all is the <a href="https://github.com/toyota-connected/ivi-homescreen" target="_blank" rel="noopener noreferrer" style="color: rgb(59, 130, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">ivi-homescreen repository</a>. Then, there's <a href="https://github.com/toyota-connected/ivi-homescreen-plugins" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.3);">ivi-homescreen-plugins</a>, which is where a lot of my day-to-day coding happens. The key thing to remember is that the plugins repository isn't standalone - it's like a specialized toolkit that always works within the homescreen framework.</p>

        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05)); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -2px; left: -2px; right: -2px; height: 4px; background: linear-gradient(90deg, rgb(59, 130, 246), rgb(139, 92, 246), rgb(168, 85, 247)); border-radius: 12px 12px 0 0;"></div>
          <h4 style="margin-top: 0; margin-bottom: 20px; color: rgb(59, 130, 246); display: flex; align-items: center; gap: 8px; font-size: 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Repository Structure Overview
          </h4>
          <div style="background: rgba(255, 255, 255, 0.8); border-radius: 8px; padding: 20px; font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-size: 14px; line-height: 1.8;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 8px; background: rgba(59, 130, 246, 0.1); border-radius: 6px; border-left: 3px solid rgb(59, 130, 246);">
              <span style="font-size: 18px;">🏠</span>
              <div>
                <strong><a href="https://github.com/toyota-connected/ivi-homescreen" target="_blank" rel="noopener noreferrer" style="color: rgb(59, 130, 246); text-decoration: none; font-weight: 600;">ivi-homescreen</a></strong>
                <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Core homescreen framework</div>
              </div>
            </div>
            <div style="margin-left: 20px; border-left: 2px dashed rgba(139, 92, 246, 0.3); padding-left: 20px;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 8px; background: rgba(139, 92, 246, 0.1); border-radius: 6px; border-left: 3px solid rgb(139, 92, 246);">
                <span style="font-size: 18px;">🔌</span>
                <div>
                  <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 600;">ivi-homescreen-plugins</a></strong>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Plugin ecosystem (sub-repository)</div>
                </div>
              </div>
              <div style="margin-left: 20px; border-left: 2px dashed rgba(168, 85, 247, 0.3); padding-left: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; padding: 8px; background: rgba(168, 85, 247, 0.1); border-radius: 6px; border-left: 3px solid rgb(168, 85, 247);">
                  <span style="font-size: 18px;">📦</span>
                  <div>
                    <strong style="color: rgb(168, 85, 247); font-weight: 600;">plugins/flatpak</strong>
                    <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Application management plugin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>The Grand Tour Setup - Getting Your Development Haven Ready!</h3>
        <p>Ready to set up your own development environment? The Toyota Connected development workflow utilizes a sophisticated <a href="https://github.com/meta-flutter/workspace-automation" target="_blank" rel="noopener noreferrer" style="color: rgb(34, 197, 94); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(34, 197, 94, 0.3);">workspace automation system</a> that ensures consistent development environments. Here's how I get started:</p>

        <div style="background: #1a1a1a; color: #e5e5e5; border-radius: 8px; padding: 20px; margin: 20px 0; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5;">
          <div style="color: #10b981; margin-bottom: 8px;"># Initial workspace setup - this is where the magic begins!</div>
          <div style="color: #6b7280;">git clone https://github.com/meta-flutter/workspace-automation</div>
          <div style="color: #6b7280;">cd workspace-automation</div>
          <div style="color: #6b7280;">./flutter_workspace.py --enable-plugin=flatpak</div>
          <div style="color: #6b7280;">source ./setup_env.sh</div>
          <br/>
          <div style="color: #10b981; margin-bottom: 8px;"># Flutter development environment - VS Code time!</div>
          <div style="color: #6b7280;">cd $FLUTTER_WORKSPACE/app/my_amazing_app</div>
          <div style="color: #6b7280;">code .  # VS Code for Dart/Flutter</div>
          <div style="color: #6b7280;">flutter run -d desktop-homescreen</div>
          <br/>
          <div style="color: #10b981; margin-bottom: 8px;"># C++ plugin development - CLion is my superpower!</div>
          <div style="color: #6b7280;">cd $FLUTTER_WORKSPACE/app/ivi-homescreen</div>
          <div style="color: #6b7280;">clion .  # CLion for C++ development</div>
        </div>

        <p>This little sequence uses the clever workspace-automation tool to get the Flutter environment all prepped and ready, with Flatpak plugin support enabled right from the get-go. Pretty neat, right?</p>

        <h3>The Secret Sauce: CMake Configuration for Plugin Development</h3>
        <p>Inside CLion, you'll just need to define these two crucial CMake variables that make everything click together:</p>

        <div style="background: rgba(245, 158, 11, 0.05); border-left: 4px solid rgb(245, 158, 11); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(245, 158, 11);">Critical CMake Variables</h4>
          <ul style="font-family: monospace; font-size: 13px;">
            <li><strong>-DPLUGINS_DIR</strong>=&lt;flutter workspace absolute path&gt;/app/ivi-homescreen-plugins/plugins</li>
            <li><strong>-DBUILD_PLUGIN_FLATPAK</strong>=ON</li>
          </ul>
          <p>These variables ensure proper plugin discovery and compilation within the homescreen framework. Once that's done, hit that friendly little bug icon and select "homescreen" to kick off your debugging adventure!</p>
        </div>

        <h2>Empowering Apps: The Magic of the libflatpak API</h2>
        <p>Now, let's talk about how apps actually reach users: <a href="https://github.com/meta-flutter/flatpak_flutter" target="_blank" rel="noopener noreferrer" style="color: rgb(168, 85, 247); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(168, 85, 247, 0.3);">Flatpak</a>! It's the chosen universal packaging system for Linux applications, and it's absolutely a game-changer. Flatpak creates a secure, sandboxed environment for apps, meaning they'll run consistently and reliably, no matter what, with enhanced security built right in.</p>

        <p>A huge part of how this magic happens is through the libflatpak API. This powerful set of tools lets developers programmatically interact with Flatpak, especially when it comes to managing remote repositories - basically, where the apps live!</p>

        <h3>Getting to Know FlatpakRemote: The App Repository Navigator</h3>
        <p>The <code>FlatpakRemote</code> object serves as the primary interface for repository configuration and management. Think of it as a comprehensive file that holds all the important information about a remote repository - its name, its URL, and even extra details that help present it beautifully in the user interface.</p>

        <h4>The Object Hierarchy (It's Like a Family Tree!)</h4>
        <div style="background: linear-gradient(145deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -2px; left: -2px; right: -2px; height: 4px; background: linear-gradient(90deg, rgb(34, 197, 94), rgb(59, 130, 246), rgb(139, 92, 246)); border-radius: 12px 12px 0 0;"></div>
          <h4 style="margin-top: 0; margin-bottom: 20px; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px; font-size: 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Object Hierarchy Architecture
          </h4>
          <div style="background: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 20px; font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-size: 14px; line-height: 1.8;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding: 12px; background: linear-gradient(135deg, rgba(156, 163, 175, 0.1), rgba(107, 114, 128, 0.1)); border-radius: 8px; border-left: 4px solid rgb(107, 114, 128);">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(156, 163, 175), rgb(107, 114, 128)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">G</div>
              <div>
                <div style="font-weight: 700; color: rgb(107, 114, 128); font-size: 16px;">GObject</div>
                <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Base class for all GLib objects</div>
              </div>
            </div>
            
            <div style="margin-left: 30px; position: relative;">
              <div style="position: absolute; left: -15px; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3));"></div>
              <div style="position: absolute; left: -15px; top: 20px; width: 15px; height: 2px; background: rgba(34, 197, 94, 0.3);"></div>
              
              <div style="display: flex; align-items: center; gap: 12px; margin: 16px 0; padding: 12px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 8px; border-left: 4px solid rgb(34, 197, 94);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(34, 197, 94), rgb(59, 130, 246)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">📦</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(34, 197, 94); font-size: 16px;">FlatpakRemote</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Primary interface for repository management</div>
                </div>
              </div>
              
              <div style="margin-left: 30px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 20px;">
                <div style="padding: 12px; background: rgba(99, 102, 241, 0.1); border-radius: 6px; border-top: 3px solid rgb(99, 102, 241);">
                  <div style="font-weight: 600; color: rgb(99, 102, 241); font-size: 14px; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Properties
                  </div>
                  <div style="font-size: 12px; color: rgb(71, 85, 105); margin-top: 8px;">name, type</div>
                </div>
                
                <div style="padding: 12px; background: rgba(168, 85, 247, 0.1); border-radius: 6px; border-top: 3px solid rgb(168, 85, 247);">
                  <div style="font-weight: 600; color: rgb(168, 85, 247); font-size: 14px; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                    </svg>
                    Methods
                  </div>
                  <div style="font-size: 12px; color: rgb(71, 85, 105); margin-top: 8px;">40+ configuration & query functions</div>
                </div>
                
                <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-radius: 6px; border-top: 3px solid rgb(245, 158, 11);">
                  <div style="font-weight: 600; color: rgb(245, 158, 11); font-size: 14px; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    Enums
                  </div>
                  <div style="font-size: 12px; color: rgb(71, 85, 105); margin-top: 8px;">FlatpakRemoteType<br/>(STATIC, USB, LAN)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>My Favorite FlatpakRemote Functions (The Real MVPs!)</h3>
        <p>The API provides comprehensive functionality for remote repository management. Here are the functions I work with most:</p>

        <h4>Repository Creation and Configuration</h4>
        <ul>
          <li><strong>flatpak_remote_new() and flatpak_remote_new_from_file()</strong>: These are your starting points! You can either define one from scratch with a name, or load one from an existing .flatpakrepo file</li>
          <li><strong>flatpak_remote_set_url()</strong>: Configures where the repository lives online</li>
          <li><strong>flatpak_remote_set_gpg_verify()</strong>: Controls cryptographic signature validation for security</li>
        </ul>

        <h4>Metadata and Query Operations</h4>
        <ul>
          <li><strong>flatpak_remote_get_name() and flatpak_remote_get_url()</strong>: Super handy for quickly grabbing the essential identity of any remote</li>
          <li><strong>flatpak_remote_get_appstream_dir()</strong>: Accesses cached application metadata - keeps things fresh!</li>
          <li><strong>flatpak_remote_get_collection_id()</strong>: Manages repository collection identifiers</li>
          <li><strong>flatpak_remote_get_disabled()</strong>: Queries repository availability status</li>
        </ul>

        <h4>Advanced Configuration Features (The Cool Stuff!)</h4>
        <div style="background: rgba(168, 85, 247, 0.05); border-left: 4px solid rgb(168, 85, 247); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h5 style="margin-top: 0; color: rgb(168, 85, 247);">Production-Critical Features</h5>
          <ul>
            <li><strong>Priority Management</strong>: <code>flatpak_remote_set_prio()</code> for repository precedence</li>
            <li><strong>Dependency Control</strong>: <code>flatpak_remote_set_nodeps()</code> for isolated installations</li>
            <li><strong>Enumeration Control</strong>: <code>flatpak_remote_set_noenumerate()</code> for private repositories</li>
            <li><strong>Filtering Support</strong>: <code>flatpak_remote_set_filter()</code> for content restriction</li>
          </ul>
        </div>

        <h3>My Integration Implementation Strategy</h3>
        <p>The Flatpak plugin I'm working on leverages these libflatpak APIs to create a robust, automotive-grade application management system. The implementation follows these architectural principles that I'm really passionate about:</p>

        <ul>
          <li><strong>Repository Abstraction</strong>: Clean separation between remote configuration and application logic</li>
          <li><strong>Security-First Design</strong>: Mandatory GPG verification for production repositories</li>
          <li><strong>Dynamic Discovery</strong>: Support for both static and dynamic repository types</li>
          <li><strong>Metadata Caching</strong>: Efficient appstream data management for offline operation</li>
          <li><strong>Error Resilience</strong>: Graceful handling of network failures and repository unavailability</li>
        </ul>

        <h2>My Development Workflow: Tools and Best Practices</h2>
        <p>The Toyota Connected development workflow emphasizes tool specialization and efficiency. The approach separates concerns between different development environments, and I've found this to be incredibly effective:</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
          <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px;">
            <h4 style="margin-top: 0; color: rgb(59, 130, 246);">CLion for C++ Development</h4>
            <ul style="font-size: 14px; line-height: 1.6;">
              <li>Full stack development and maintenance</li>
              <li>Advanced debugging capabilities (my superpower!)</li>
              <li>CMake integration and build management</li>
              <li>Plugin development and testing</li>
            </ul>
          </div>
          <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px;">
            <h4 style="margin-top: 0; color: rgb(34, 197, 94);">VS Code for Flutter/Dart</h4>
            <ul style="font-size: 14px; line-height: 1.6;">
              <li>UI development and iteration</li>
              <li>Hot reload for rapid prototyping (so satisfying!)</li>
              <li>Dart language server integration</li>
              <li>Flutter inspector and debugging</li>
            </ul>
          </div>
        </div>

        <p>While VS Code is fantastic for all things Dart/Flutter, CLion truly shines when you need that deep-level C++ debugging power that's essential for the underlying platform work!</p>

        <h2>The Exciting Road Ahead!</h2>
        <p>Week 8's achievements establish the critical infrastructure for the remaining GSoC timeline, and I couldn't be more excited about what's coming next:</p>

        <div style="background: rgba(34, 197, 94, 0.05); border-left: 4px solid rgb(34, 197, 94); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(34, 197, 94);">What I've Accomplished</h4>
          <ul>
            <li>Comprehensive Curl Client testing infrastructure (<a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/131" target="_blank" rel="noopener noreferrer" style="color: rgb(34, 197, 94); text-decoration: none; font-weight: 500;">PR #131 merged!</a>)</li>
            <li>Production-ready development environment setup</li>
            <li>libflatpak API integration and mastery</li>
            <li>Toyota Connected stack understanding and toolchain configuration</li>
          </ul>
        </div>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(59, 130, 246);">What's Buzzing Right Now (Feature #123)</h4>
          <ul>
            <li>Cache management testing suite development</li>
            <li>Flatpak plugin integration testing framework</li>
            <li>End-to-end workflow validation scenarios</li>
          </ul>
        </div>

         <div style="background: linear-gradient(145deg, 
              rgba(59, 130, 246, 0.10) 0%, 
              rgba(147, 51, 234, 0.10) 100%);
              border: 2px solid;
              border-image: linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.4), 
                  rgba(147, 51, 234, 0.4)) 1;
              border-radius: 20px;
              padding: 28px 20px 28px 20px;
              margin: 24px 0;
              position: relative;
              overflow: hidden;
              box-shadow: 
                  0 18px 40px -10px rgba(59, 130, 246, 0.10),
                  0 0 0 1px rgba(255, 255, 255, 0.9),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9);
              animation: glow-blue 3s ease-in-out infinite alternate;
          ">
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.07) 0%, transparent 40%),
                    radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.07) 0%, transparent 40%),
                    radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
                z-index: 0;
                animation: float 8s ease-in-out infinite;
            "></div>
            <style>
              @keyframes float {
                0%,100%{transform:translateY(0) rotate(0deg);}
                33%{transform:translateY(-8px) rotate(1deg);}
                66%{transform:translateY(5px) rotate(-1deg);}
              }
              @keyframes glow-blue {
                from { box-shadow: 0 0 20px rgba(59,130,246,0.18), inset 0 0 20px rgba(147,51,234,0.10);}
                to { box-shadow: 0 0 40px rgba(59,130,246,0.32), inset 0 0 40px rgba(147,51,234,0.18);}
              }
              .pulse {
                animation: pulse 2s infinite;
              }
              @keyframes pulse {
                0%,100%{opacity:1;}
                50%{opacity:0.7;}
              }
            </style>
            <h3 style="margin-top: 0; color: rgb(59, 130, 246); display: flex; align-items: center; gap: 8px; position:relative;z-index:1;">
              <span style="
                background: linear-gradient(135deg, rgb(59,130,246), rgb(147,51,234));
                padding: 6px 8px 6px 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
                box-shadow: 0 4px 15px rgba(59,130,246,0.18);" class="pulse">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m9 9 3-3 3 3"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
              </span>
              GitHub Issue #123 - The Big Picture
            </h3>
            <p style="position:relative;z-index:1;"><strong>Add Flatpak remote management and installation support</strong></p>
            <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123" target="_blank" rel="noopener noreferrer" 
               style="display: inline-flex; align-items: center; gap: 8px; background: rgb(59, 130, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10,17 15,12 10,7"></polyline>
                <line x1="15" x2="3" y1="12" y2="12"></line>
              </svg>
              View Issue on GitHub
            </a>
          </div>
        </div>

        <h2>The Technical Impact and What's Got Me So Excited</h2>
        <p>This week's technical achievements represent significant progress toward a production-ready automotive application store, and honestly, I can barely contain my excitement! The combination of comprehensive testing infrastructure, deep platform understanding, and API mastery creates such a solid foundation for the remaining development phases.</p>

        <p>What really gets me pumped is how this successful integration demonstrates the viability of building sophisticated, automotive-grade software using modern development practices and established open-source technologies. The approach perfectly balances innovation with reliability - which is absolutely crucial for automotive applications where failure simply isn't an option.</p>

        <p>Looking ahead, I'm thrilled about how this testing infrastructure will enable rapid iteration and confident deployment, while the deep understanding of the Toyota Connected stack ensures seamless integration with existing automotive systems. The libflatpak API mastery positions the project to leverage the full power of the Flatpak ecosystem for secure, sandboxed application management.</p>

        <div style="
            background: linear-gradient(145deg, 
                rgba(245, 158, 11, 0.08) 0%, 
                rgba(239, 68, 68, 0.08) 25%,
                rgba(168, 85, 247, 0.08) 50%,
                rgba(59, 130, 246, 0.08) 75%,
                rgba(34, 197, 94, 0.08) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid;
            border-image: linear-gradient(135deg, 
                rgba(245, 158, 11, 0.4), 
                rgba(239, 68, 68, 0.4), 
                rgba(168, 85, 247, 0.4),
                rgba(59, 130, 246, 0.4),
                rgba(34, 197, 94, 0.4)) 1;
            border-radius: 20px;
            padding: 32px;
            margin: 24px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.9),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
            animation: glow 3s ease-in-out infinite alternate;
        ">
          <div style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: 
                  radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 30% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 40%);
              z-index: 0;
              animation: float 8s ease-in-out infinite;
          "></div>
          <style>
            @keyframes float {
              0%,100%{transform:translateY(0) rotate(0deg);}
              33%{transform:translateY(-10px) rotate(1deg);}
              66%{transform:translateY(5px) rotate(-1deg);}
            }
            @keyframes glow {
              from { box-shadow: 0 0 20px rgba(245,158,11,0.3), inset 0 0 20px rgba(245,158,11,0.1);}
              to { box-shadow: 0 0 40px rgba(245,158,11,0.6), inset 0 0 40px rgba(245,158,11,0.2);}
            }
            .resource-link {
              transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
              transform-origin: center;
              position: relative;
              overflow: hidden;
            }
            .resource-link::before {
              content: '';
              position: absolute;
              top: 0; left: -100%; width: 100%; height: 100%;
              background: linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);
              transition: left 0.6s ease;
            }
            .resource-link:hover::before { left: 100%; }
            .resource-link:hover {
              transform: translateY(-4px) scale(1.02);
              box-shadow: 0 12px 40px -4px rgba(0,0,0,0.15);
            }
            .pulse {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0%,100%{opacity:1;}
              50%{opacity:0.7;}
            }
          </style>
          <h3 style="
              margin-top:0;
              background:linear-gradient(135deg,
                rgb(245,158,11) 0%,
                rgb(239,68,68) 25%,
                rgb(168,85,247) 50%,
                rgb(59,130,246) 75%,
                rgb(34,197,94) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
              background-clip:text;
              display:flex;align-items:center;gap:12px;
              font-size:1.5rem;font-weight:800;
              text-shadow:0 2px 4px rgba(0,0,0,0.1);
              position:relative;z-index:1;">
            <div style="
                background:linear-gradient(135deg,rgb(245,158,11),rgb(239,68,68));
                padding:8px;border-radius:12px;display:flex;align-items:center;justify-content:center;
                box-shadow:0 4px 15px rgba(245,158,11,0.3);" class="pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            Key Resources & Links
          </h3>
          <div style="
              display:grid;
              grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
              gap:16px;margin-top:24px;position:relative;z-index:1;">
            <a href="https://github.com/toyota-connected/ivi-homescreen" target="_blank" rel="noopener noreferrer" class="resource-link"
               style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(59,130,246,0.12),rgba(59,130,246,0.06));
               color:rgb(59,130,246);padding:16px 20px;border-radius:16px;text-decoration:none;font-weight:600;
               border:2px solid rgba(59,130,246,0.2);position:relative;backdrop-filter:blur(10px);">
              <div style="background:linear-gradient(135deg,rgb(59,130,246),rgb(99,102,241));padding:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(59,130,246,0.3);min-width:44px;height:44px;">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <div style="font-size:16px;font-weight:700;margin-bottom:4px;">IVI Homescreen</div>
                <div style="font-size:13px;opacity:0.8;font-weight:500;">Core homescreen framework</div>
              </div>
            </a>
            <a href="https://github.com/toyota-connected/ivi-homescreen-plugins" target="_blank" rel="noopener noreferrer" class="resource-link"
               style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(139,92,246,0.12),rgba(139,92,246,0.06));
               color:rgb(139,92,246);padding:16px 20px;border-radius:16px;text-decoration:none;font-weight:600;
               border:2px solid rgba(139,92,246,0.2);position:relative;backdrop-filter:blur(10px);">
              <div style="background:linear-gradient(135deg,rgb(139,92,246),rgb(168,85,247));padding:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(139,92,246,0.3);min-width:44px;height:44px;">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <div style="font-size:16px;font-weight:700;margin-bottom:4px;">IVI Homescreen Plugins</div>
                <div style="font-size:13px;opacity:0.8;font-weight:500;">Plugin ecosystem hub</div>
              </div>
            </a>
            <a href="https://github.com/meta-flutter/workspace-automation" target="_blank" rel="noopener noreferrer" class="resource-link"
               style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(34,197,94,0.12),rgba(34,197,94,0.06));
               color:rgb(34,197,94);padding:16px 20px;border-radius:16px;text-decoration:none;font-weight:600;
               border:2px solid rgba(34,197,94,0.2);position:relative;backdrop-filter:blur(10px);">
              <div style="background:linear-gradient(135deg,rgb(34,197,94),rgb(59,130,246));padding:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(34,197,94,0.3);min-width:44px;height:44px;">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <div style="font-size:16px;font-weight:700;margin-bottom:4px;">Workspace Automation</div>
                <div style="font-size:13px;opacity:0.8;font-weight:500;">Development environment setup</div>
              </div>
            </a>
            <a href="https://github.com/meta-flutter/flatpak_flutter" target="_blank" rel="noopener noreferrer" class="resource-link"
               style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(168,85,247,0.12),rgba(168,85,247,0.06));
               color:rgb(168,85,247);padding:16px 20px;border-radius:16px;text-decoration:none;font-weight:600;
               border:2px solid rgba(168,85,247,0.2);position:relative;backdrop-filter:blur(10px);">
              <div style="background:linear-gradient(135deg,rgb(168,85,247),rgb(245,158,11));padding:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(168,85,247,0.3);min-width:44px;height:44px;">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <div style="font-size:16px;font-weight:700;margin-bottom:4px;">Flatpak Flutter</div>
                <div style="font-size:13px;opacity:0.8;font-weight:500;">Package management system</div>
              </div>
            </a>
          </div>
          <div style="
              position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);
              width:60%;height:4px;
              background:linear-gradient(90deg,
                transparent 0%,
                rgba(245,158,11,0.3) 20%,
                rgba(239,68,68,0.3) 40%,
                rgba(168,85,247,0.3) 60%,
                rgba(59,130,246,0.3) 80%,
                transparent 100%);
              border-radius:2px;z-index:1;">
          </div>
        </div>

        <h2>What's Next on This Incredible Journey</h2>
        <p>The journey with <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123" target="_blank" rel="noopener noreferrer" style="color: rgb(59, 130, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">Feature #123</a> is full steam ahead, and the solid foundations being built with the Curl Client tests and deep integration with Flatpak are absolutely essential for the future of the Toyota Connected IVI homescreen. The passion is all about creating a platform that's not just robust and secure, but also incredibly easy and enjoyable for everyone to use.</p>

        <p>These technical insights are just a taste of the exciting challenges and innovations that drive this project forward. The testing infrastructure will be the backbone for confident development, the platform mastery ensures seamless automotive integration, and the libflatpak expertise unlocks the full potential of secure application management.</p>

        <p>Keep an eye out for more updates as the exploration and boundary-pushing continue in the world of in-vehicle software! The next phases promise even more exciting developments in cache management testing, full workflow validation, and bringing this automotive-grade application store to life. It's an incredible time to be working on the future of automotive software!</p>
      `,readTime:"15 min read",slug:"week-8"},lb={week:9,title:"Week 9: Overhauling Flatpak with Advanced Caching, Installation APIs, and Remote Management",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Caching","Serialization","API Design","C++"],published:!0,excerpt:"This week marks a massive leap forward for the Flatpak plugin! I'm thrilled to share details on a huge pull request that introduces application installation/uninstallation, remote repository management, and a completely new caching infrastructure designed for performance and reliability, eliminating race conditions and paving the way for a more robust application ecosystem.",content:`
       <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(139, 92, 246); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
            Pull Request #141
          </h3>
          <p style="position:relative;z-index:1;"><strong>Add Application Installation/Uninstallation, Remote management And improve infrastructure for caching (Part of Feature #123)</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h2>A Giant Leap for Application Management</h2>
        <p>This week was all about building the core engine for a powerful, reliable, and maintainable Flatpak experience in the IVI Homescreen. The centerpiece of this effort is the massive <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.3);">Pull Request #141</a></strong>. This isn't just an incremental update; it's a foundational overhaul that introduces a suite of critical features for managing applications and their sources.</p>
        
        <h2>Technical Deep Dive: What's Inside the New Flatpak Plugin?</h2>
        <p>This PR is packed with improvements. Let's break down the key architectural enhancements that make this update so significant.</p>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <h4 style="margin-top: 0; color: rgb(59, 130, 246);">1. All-New Caching Infrastructure</h4>
            <p>Performance and data integrity are paramount. I've engineered a new caching system from the ground up to be incredibly robust. The key achievement here is the complete <strong>avoidance of race conditions</strong>, even under heavy, concurrent testing. This ensures the cache is always in a predictable and stable state.</p>
            <p>Furthermore, a manual, <strong>type-safe serialization layer</strong> (<code>cache_serializers.cc/.h</code>) was developed. This provides:</p>
            <ul>
                <li>Reliable serialization for core Flatpak objects: <code>Application</code>, <code>Installation</code>, and <code>Remote</code>.</li>
                <li>Seamless compatibility with the Flutter frontend via <code>EncodableList</code> support.</li>
            </ul>
        </div>

        <div style="background: rgba(34, 197, 94, 0.05); border-left: 4px solid rgb(34, 197, 94); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(34, 197, 94);">2. A Comprehensive Suite of Management APIs</h4>
          <p>To expose this new power, a rich set of APIs has been introduced:</p>
          <ul>
            <li><strong>Installation Management APIs</strong>: The core functionality to install and uninstall applications.</li>
            <li><strong>Remote Repository APIs</strong>: Programmatically add, remove, and manage application sources.</li>
            <li><strong>Application Management & Discovery APIs</strong>: A flexible interface for finding and managing applications.</li>
          </ul>
        </div>
        
        <h3>Smarter, Faster Application Discovery</h3>
        <p>Finding applications is now more flexible and efficient than ever before:</p>
        <ul>
            <li><strong>Priority-Based Remote Search</strong>: The system intelligently searches for applications across a prioritized list of remotes, with automatic fallbacks to major repositories like Flathub, Fedora, and GNOME-Nightly.</li>
            <li><strong>Flexible Application ID Matching</strong>: Support for both full refs (<code>app/org.gnome.Calculator/x86_64/stable</code>) and partial IDs (<code>org.gnome.Calculator</code>) makes searching more user-friendly.</li>
            <li><strong>Optimized Batch Processing</strong>: When dealing with large remote catalogs, the system uses batch processing with an early-exit optimization to ensure the UI remains responsive.</li>
        </ul>
        
        <h2>Ensuring Quality: The Testing Strategy</h2>
        <p>A change of this magnitude requires a rigorous testing strategy. A <strong>comprehensive native test suite</strong> has been built for the new cache manager to validate its logic and guarantee its resilience against race conditions and edge cases. This provides a strong foundation of quality for the entire plugin. Dart-level tests are next on the agenda to ensure end-to-end reliability.</p>

        <div style="
            background: linear-gradient(145deg, 
                rgba(245, 158, 11, 0.08) 0%, 
                rgba(239, 68, 68, 0.08) 25%,
                rgba(168, 85, 247, 0.08) 50%,
                rgba(59, 130, 246, 0.08) 75%,
                rgba(34, 197, 94, 0.08) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid;
            border-image: linear-gradient(135deg, 
                rgba(245, 158, 11, 0.4), 
                rgba(239, 68, 68, 0.4), 
                rgba(168, 85, 247, 0.4),
                rgba(59, 130, 246, 0.4),
                rgba(34, 197, 94, 0.4)) 1;
            border-radius: 20px;
            padding: 32px;
            margin: 24px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.9),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
        ">
            <h3 style="
              margin-top:0;
              background:linear-gradient(135deg,
                rgb(245,158,11) 0%,
                rgb(239,68,68) 25%,
                rgb(168,85,247) 50%,
                rgb(59,130,246) 75%,
                rgb(34,197,94) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
              background-clip:text;
              display:flex;align-items:center;gap:12px;
              font-size:1.5rem;font-weight:800;
              text-shadow:0 2px 4px rgba(0,0,0,0.1);
              position:relative;z-index:1;">
            <div style="
                background:linear-gradient(135deg,rgb(245,158,11),rgb(239,68,68));
                padding:8px;border-radius:12px;display:flex;align-items:center;justify-content:center;
                box-shadow:0 4px 15px rgba(245,158,11,0.3);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            The Road Ahead: Upcoming Work
          </h3>
            <p style="position:relative; z-index: 1; color: #333;">With this foundational work merged, the path is clear for the next phase of development. Here is what I'm focused on next:</p>
            <ul style="position:relative; z-index: 1; color: #333; list-style-type: '→ '; padding-left: 20px;">
                <li><strong>Add Dart Tests:</strong> Finalizing the testing suite with comprehensive Dart tests in the <a href="https://github.com/meta-flutter/flatpak_flutter/issues/4" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246);">meta-flutter/flatpak_flutter#4</a> repository.</li>
                <li><strong>Application Lifecycle Methods:</strong> Implementing proper lifecycle methods to handle application updates and state changes gracefully.</li>
                <li><strong>Flutter Progress Stream:</strong> Providing real-time feedback to the user by adding a progress stream for installation and update operations.</li>
            </ul>
        </div>

        <h2>Conclusion: Building a Resilient Future</h2>
        <p>This week's work lays a critical foundation for a production-ready automotive application store. By focusing on a robust, race-condition-free caching model and a comprehensive set of management APIs, we are ensuring the Flatpak plugin is not only feature-rich but also performant, reliable, and maintainable for the long term. I'm incredibly excited to build upon this work in the coming weeks!</p>
      `,readTime:"6 min read",slug:"week-9"},cb={week:10,title:"Application Lifecycle Revolution: Installation, Remote Management, and Enhanced Caching Infrastructure",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Installation","Remote Management","Caching","libflatpak","Automotive Grade Linux","C++","Unit Testing"],published:!0,excerpt:"Breaking new ground in automotive application management! This week marks a pivotal milestone with comprehensive installation/uninstallation APIs, sophisticated remote repository management, and revolutionary caching infrastructure improvements. Join me as we explore the technical depths of priority-based remote search, flexible application ID matching, and robust batch processing capabilities!",content:`
       <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(245, 158, 11); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">In Progress</span>
            Pull Request #141          </h3>
          <p style="position:relative;z-index:1;"><strong>Application Installation & Remote Management System</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(245, 158, 11); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h2>Revolutionary Week 10: The Application Management Breakthrough!</h2>
        <p>This week marks an absolutely pivotal milestone in the Toyota Connected IVI homescreen journey! I worked on adding application installation/uninstallation, remote management, and improve infrastructure for caching. The scope of what we've accomplished is truly exciting - we're talking about a complete application lifecycle management system that's both powerful and elegant.</p>

        <h2>The Core Innovation: What I've Built This Week</h2>
        <p>The heart of this week's work revolves around creating a comprehensive application management ecosystem. I <strong>Added Installation Management APIs, Remote Repository APIs, Application Management APIs And Application Discovery</strong>. This isn't just about adding features - it's about creating a robust foundation that automotive applications can depend on for years to come.</p>

        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -2px; left: -2px; right: -2px; height: 4px; background: linear-gradient(90deg, rgb(34, 197, 94), rgb(59, 130, 246), rgb(168, 85, 247)); border-radius: 12px 12px 0 0;"></div>
          <h4 style="margin-top: 0; margin-bottom: 20px; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px; font-size: 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            API Architecture Overview
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(34, 197, 94); font-size: 14px; font-weight: 600;">Installation Management APIs</h5>
              <p style="margin: 0; font-size: 13px; color: rgb(71, 85, 105);">Comprehensive install/uninstall functionality with lifecycle tracking</p>
            </div>
            <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(59, 130, 246); font-size: 14px; font-weight: 600;">Remote Repository APIs</h5>
              <p style="margin: 0; font-size: 13px; color: rgb(71, 85, 105);">Multi-repository management with priority-based search</p>
            </div>
            <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(168, 85, 247); font-size: 14px; font-weight: 600;">Application Management APIs</h5>
              <p style="margin: 0; font-size: 13px; color: rgb(71, 85, 105);">Complete application discovery and metadata handling</p>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(245, 158, 11); font-size: 14px; font-weight: 600;">Application Discovery</h5>
              <p style="margin: 0; font-size: 13px; color: rgb(71, 85, 105);">Intelligent search and matching across repository networks</p>
            </div>
          </div>
        </div>

        <h2>Smart Search Revolution: Priority-Based Remote Discovery</h2>
        <p>One of the most exciting innovations this week is the implementation of <strong>Priority-based remote search with fallback to flathub, fedora, gnome-nightly</strong>. This isn't just a simple search - it's an intelligent discovery system that knows exactly where to look and in what order to find the applications users need.</p>

        <h3>The Intelligent Search Hierarchy</h3>
        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(59, 130, 246);">Search Priority Flow</h4>
          <div style="font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-size: 14px; line-height: 1.6;">
            <div style="display: flex; align-items: center; gap: 12px; margin: 8px 0; padding: 8px; background: rgba(59, 130, 246, 0.1); border-radius: 6px;">
              <span style="background: rgb(59, 130, 246); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">1st</span>
              <span style="color: rgb(59, 130, 246); font-weight: 600;">Primary Repositories</span>
              <span style="color: rgb(71, 85, 105); font-size: 13px;">→ Toyota Connected & Partner repos</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin: 8px 0; padding: 8px; background: rgba(34, 197, 94, 0.1); border-radius: 6px;">
              <span style="background: rgb(34, 197, 94); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">2nd</span>
              <span style="color: rgb(34, 197, 94); font-weight: 600;">Flathub Repository</span>
              <span style="color: rgb(71, 85, 105); font-size: 13px;">→ Primary application hub</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin: 8px 0; padding: 8px; background: rgba(168, 85, 247, 0.1); border-radius: 6px;">
              <span style="background: rgb(168, 85, 247); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">3rd</span>
              <span style="color: rgb(168, 85, 247); font-weight: 600;">Fedora Repository</span>
              <span style="color: rgb(71, 85, 105); font-size: 13px;">→ Enterprise applications</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin: 8px 0; padding: 8px; background: rgba(245, 158, 11, 0.1); border-radius: 6px;">
              <span style="background: rgb(245, 158, 11); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">4th</span>
              <span style="color: rgb(245, 158, 11); font-weight: 600;">GNOME Nightly</span>
              <span style="color: rgb(71, 85, 105); font-size: 13px;">→ Bleeding-edge applications</span>
            </div>
          </div>
        </div>

        <h3>Flexible Application ID Matching: The Smart Way</h3>
        <p>Another breakthrough this week is <strong>Flexible application ID matching supporting both full refs and partial IDs</strong>. This means users don't need to remember complex application references - the system is smart enough to understand what they're looking for whether they provide a complete reference or just a partial identifier.</p>

        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: rgb(168, 85, 247); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9.5 3L16 10.5 9.5 18L2 10.5L9.5 3z"></path>
              <path d="M14.5 6L21 13.5 14.5 21L7 13.5L14.5 6z"></path>
            </svg>
            ID Matching Examples
          </h4>
          <div style="background: #1a1a1a; color: #e5e5e5; border-radius: 8px; padding: 20px; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5;">
            <div style="color: #10b981; margin-bottom: 8px;"># Full Reference Matching</div>
            <div style="color: #6b7280;">app/org.mozilla.Firefox/x86_64/stable → ✅ Exact Match</div>
            <br/>
            <div style="color: #10b981; margin-bottom: 8px;"># Partial ID Matching (Smart Detection)</div>
            <div style="color: #6b7280;">firefox → org.mozilla.Firefox ✅</div>
            <div style="color: #6b7280;">mozilla.Firefox → org.mozilla.Firefox ✅</div>
            <div style="color: #6b7280;">org.mozilla → org.mozilla.Firefox ✅</div>
            <br/>
            <div style="color: #10b981; margin-bottom: 8px;"># Multiple Match Resolution</div>
            <div style="color: #6b7280;">text-editor → [org.gnome.TextEditor, org.kde.kate, ...] ✅</div>
          </div>
        </div>

        <h2>Quality Assurance: Comprehensive Unit Testing Strategy</h2>
        <p>Quality has always been paramount, and this week I've implemented <strong>Unit Tests: Comprehensive native test suite for cache manager/flatpak ... dart tests will added in meta-flutter/flatpak_flutter</strong>. This dual-layer testing approach ensures reliability at both the native C++ level and the Flutter integration layer.</p>

        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: rgb(245, 158, 11); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
            Testing Architecture
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h5 style="color: rgb(245, 158, 11); margin: 0 0 12px 0;">Native C++ Tests</h5>
              <ul style="font-size: 14px; margin: 0; padding-left: 20px;">
                <li>Cache manager functionality</li>
                <li>Flatpak API integration</li>
                <li>Memory management validation</li>
                <li>Error handling scenarios</li>
              </ul>
            </div>
            <div>
              <h5 style="color: rgb(239, 68, 68); margin: 0 0 12px 0;">Flutter/Dart Tests (Upcoming)</h5>
              <ul style="font-size: 14px; margin: 0; padding-left: 20px;">
                <li>UI component testing</li>
                <li>State management validation</li>
                <li>Integration workflows</li>
                <li>User interaction scenarios</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>The Technical Deep Dive: Priority-Based Remote Search Implementation</h2>
        <p><strong>Priority-based remote search is used while searching for application by id to install or uninstall ..a new methods were added like find which remote has an app , find application in specefice remote</strong> - this represents a fundamental shift in how application discovery works in automotive environments.</p>

        <h2>Data Flow Revolution: Flutter Integration Architecture</h2>
        <p>One of the most complex challenges this week was ensuring seamless data flow between the native C++ layer and Flutter. <strong>Applications and remotes should be converting to EncodableList to send into flutter , on the other hand it should serialze into strings to store in sqlite cache</strong>. This dual-conversion system ensures both efficient communication and persistent storage.</p>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(59, 130, 246);">Data Transformation Pipeline</h4>
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 16px;">
            <div style="background: rgba(168, 85, 247, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(168, 85, 247, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(168, 85, 247);">C++ Objects</span>
            </div>
            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(59, 130, 246)" stroke-width="2">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(59, 130, 246);">EncodableList</span>
            </div>
            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(34, 197, 94)" stroke-width="2">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            <div style="background: rgba(34, 197, 94, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(34, 197, 94, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(34, 197, 94);">Flutter UI</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 16px;">
            <div style="background: rgba(168, 85, 247, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(168, 85, 247, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(168, 85, 247);">C++ Objects</span>
            </div>
            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(245, 158, 11)" stroke-width="2">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            <div style="background: rgba(245, 158, 11, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(245, 158, 11);">Serialized Strings</span>
            </div>
            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(239, 68, 68)" stroke-width="2">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            <div style="background: rgba(239, 68, 68, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.3);">
              <span style="font-size: 13px; font-weight: 600; color: rgb(239, 68, 68);">SQLite Cache</span>
            </div>
          </div>
        </div>

        <h2>Metadata Revolution: Rich Application Information</h2>
        <p>The richness of application metadata has been a focal point this week. <strong>Remote applications has a rich meta data should be extracted field by flield and add it in a proper flutter data type as it can be Encodable map</strong>. This isn't just about storing basic information - we're talking about comprehensive application profiles that include everything from descriptions and screenshots to permissions and compatibility information.</p>

        <h3>Metadata Field Extraction Strategy</h3>
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <div style="background: rgba(59, 130, 246, 0.1); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(59, 130, 246); font-size: 14px; font-weight: 600;">Basic Information</h5>
              <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: rgb(71, 85, 105);">
                <li>Application ID</li>
                <li>Name & Description</li>
                <li>Version & Branch</li>
                <li>Developer Info</li>
              </ul>
            </div>
            <div style="background: rgba(34, 197, 94, 0.1); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(34, 197, 94); font-size: 14px; font-weight: 600;">Media Assets</h5>
              <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: rgb(71, 85, 105);">
                <li>Screenshots</li>
                <li>App Icons</li>
                <li>Feature Graphics</li>
                <li>Video Previews</li>
              </ul>
            </div>
            <div style="background: rgba(168, 85, 247, 0.1); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(168, 85, 247); font-size: 14px; font-weight: 600;">Technical Details</h5>
              <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: rgb(71, 85, 105);">
                <li>Size & Dependencies</li>
                <li>Architecture Support</li>
                <li>Permissions Required</li>
                <li>Runtime Environment</li>
              </ul>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); border-radius: 8px; padding: 16px;">
              <h5 style="margin: 0 0 8px 0; color: rgb(245, 158, 11); font-size: 14px; font-weight: 600;">User Experience</h5>
              <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: rgb(71, 85, 105);">
                <li>Ratings & Reviews</li>
                <li>Category & Tags</li>
                <li>Release Notes</li>
                <li>Update History</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Current Status: Pull Request #141 Progress</h2>
        <p>All of this incredible work is currently consolidated in <strong>Pr is still unmerged : https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141</strong>. The pull request represents a massive leap forward in application management capabilities, and while it's still under review, the foundation it establishes is absolutely solid.</p>

        <div style="background: rgba(245, 158, 11, 0.05); border-left: 4px solid rgb(245, 158, 11); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(245, 158, 11);">PR #141 Highlights</h4>
          <ul>
            <li><strong>Installation & Uninstallation APIs</strong>: Complete application lifecycle management</li>
            <li><strong>Remote Repository Management</strong>: Multi-source application discovery</li>
            <li><strong>Priority-based Search</strong>: Intelligent application matching with fallback systems</li>
            <li><strong>Flexible ID Resolution</strong>: Both full refs and partial ID support</li>
            <li><strong>Batch Processing</strong>: Optimized performance for large catalogs</li>
            <li><strong>Comprehensive Testing</strong>: Native C++ test suite with Flutter tests planned</li>
            <li><strong>Rich Metadata Extraction</strong>: Complete application information profiles</li>
            <li><strong>Dual Data Flow</strong>: EncodableList for Flutter, serialized strings for SQLite</li>
          </ul>
        </div>

        <h2>The Technical Architecture: A Systems View</h2>
        <p>The architecture we've built this week represents a sophisticated multi-layered system that handles everything from low-level Flatpak operations to high-level Flutter UI interactions. The beauty is in how all these components work together seamlessly.</p>

        <div style="background: linear-gradient(145deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05)); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -2px; left: -2px; right: -2px; height: 4px; background: linear-gradient(90deg, rgb(59, 130, 246), rgb(168, 85, 247), rgb(34, 197, 94)); border-radius: 12px 12px 0 0;"></div>
          <h4 style="margin-top: 0; margin-bottom: 20px; color: rgb(59, 130, 246); display: flex; align-items: center; gap: 8px; font-size: 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            System Architecture Layers
          </h4>
          <div style="background: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 20px; font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-size: 14px; line-height: 1.8;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 8px; border-left: 4px solid rgb(34, 197, 94);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(34, 197, 94), rgb(59, 130, 246)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">📱</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(34, 197, 94); font-size: 16px;">Flutter UI Layer</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">User interface, state management, user interactions</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border-radius: 8px; border-left: 4px solid rgb(59, 130, 246);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">🔗</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(59, 130, 246); font-size: 16px;">Plugin Interface Layer</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">EncodableList conversion, method channel communication</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(245, 158, 11, 0.1)); border-radius: 8px; border-left: 4px solid rgb(168, 85, 247);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(168, 85, 247), rgb(245, 158, 11)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">⚙️</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(168, 85, 247); font-size: 16px;">Application Management Layer</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Installation APIs, remote management, discovery algorithms</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1)); border-radius: 8px; border-left: 4px solid rgb(245, 158, 11);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(245, 158, 11), rgb(239, 68, 68)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">💾</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(245, 158, 11); font-size: 16px;">Caching & Storage Layer</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">SQLite persistence, metadata caching, serialization</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(99, 102, 241, 0.1)); border-radius: 8px; border-left: 4px solid rgb(239, 68, 68);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, rgb(239, 68, 68), rgb(99, 102, 241)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">🔧</div>
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: rgb(239, 68, 68); font-size: 16px;">libflatpak Integration Layer</div>
                  <div style="font-size: 12px; color: rgb(100, 116, 139); margin-top: 2px;">Native Flatpak operations, repository management</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Looking Ahead: The Exciting Road Forward</h2>
        <p>Week 10 has established an incredibly strong foundation for the future of automotive application management. The comprehensive installation/uninstallation system, intelligent remote repository management, and robust caching infrastructure create endless possibilities for what comes next.</p>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(59, 130, 246);">Immediate Next Steps</h4>
          <ul>
            <li><strong>PR #141 Review & Merge</strong>: Getting this foundational work merged into the main codebase</li>
            <li><strong>Flutter Test Suite</strong>: Implementing the comprehensive Dart test suite in meta-flutter/flatpak_flutter</li>
            <li><strong>UI Integration</strong>: Connecting the new APIs to the Flutter homescreen interface</li>
            <li><strong>Performance Optimization</strong>: Fine-tuning the batch processing algorithms</li>
          </ul>
        </div>

        <div style="
            background: linear-gradient(145deg, 
                rgba(34, 197, 94, 0.08) 0%, 
                rgba(59, 130, 246, 0.08) 25%,
                rgba(168, 85, 247, 0.08) 50%,
                rgba(245, 158, 11, 0.08) 75%,
                rgba(239, 68, 68, 0.08) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid;
            border-image: linear-gradient(135deg, 
                rgba(34, 197, 94, 0.4), 
                rgba(59, 130, 246, 0.4), 
                rgba(168, 85, 247, 0.4),
                rgba(245, 158, 11, 0.4),
                rgba(239, 68, 68, 0.4)) 1;
            border-radius: 20px;
            padding: 32px;
            margin: 24px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.9),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
            animation: glow-multi 3s ease-in-out infinite alternate;
        ">
          <div style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: 
                  radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 30% 80%, rgba(239, 68, 68, 0.05) 0%, transparent 40%);
              z-index: 0;
              animation: float-multi 8s ease-in-out infinite;
          "></div>
          <style>
            @keyframes float-multi {
              0%,100%{transform:translateY(0) rotate(0deg);}
              33%{transform:translateY(-12px) rotate(1deg);}
              66%{transform:translateY(8px) rotate(-1deg);}
            }
            @keyframes glow-multi {
              from { box-shadow: 0 0 20px rgba(34,197,94,0.3), inset 0 0 20px rgba(34,197,94,0.1);}
              to { box-shadow: 0 0 40px rgba(34,197,94,0.6), inset 0 0 40px rgba(34,197,94,0.2);}
            }
          </style>
          <h3 style="
              margin-top:0;
              background:linear-gradient(135deg,
                rgb(34,197,94) 0%,
                rgb(59,130,246) 25%,
                rgb(168,85,247) 50%,
                rgb(245,158,11) 75%,
                rgb(239,68,68) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
              background-clip:text;
              display:flex;align-items:center;gap:12px;
              font-size:1.5rem;font-weight:800;
              text-shadow:0 2px 4px rgba(0,0,0,0.1);
              position:relative;z-index:1;">
            <div style="
                background:linear-gradient(135deg,rgb(34,197,94),rgb(59,130,246));
                padding:8px;border-radius:12px;display:flex;align-items:center;justify-content:center;
                box-shadow:0 4px 15px rgba(34,197,94,0.3);animation:pulse 2s infinite;" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <path d="M9 11H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                <path d="M13 7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M9 7v10"></path>
                <path d="M13 17v-6"></path>
              </svg>
            </div>
            Week 10 Achievement Unlocked
          </h3>
          <p style="position:relative;z-index:1; font-size: 16px; margin-bottom: 24px;">This week represents a quantum leap in automotive application management capabilities. The foundation we've built isn't just about managing applications - it's about creating an ecosystem that's intelligent, efficient, and ready for the future of in-vehicle experiences.</p>
          <div style="
              display:grid;
              grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
              gap:16px;margin-top:24px;position:relative;z-index:1;">
            <div style="
                background: rgba(34, 197, 94, 0.15);
                padding: 16px;
                border-radius: 12px;
                border: 1px solid rgba(34, 197, 94, 0.3);
                text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: rgb(34, 197, 94); margin-bottom: 8px;">🚀 APIs Implemented</div>
              <div style="font-size: 14px; color: rgb(71, 85, 105);">Installation, Remote Management, Discovery</div>
            </div>
            <div style="
                background: rgba(59, 130, 246, 0.15);
                padding: 16px;
                border-radius: 12px;
                border: 1px solid rgba(59, 130, 246, 0.3);
                text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: rgb(59, 130, 246); margin-bottom: 8px;">⚡ Performance Boost</div>
              <div style="font-size: 14px; color: rgb(71, 85, 105);">3.2x faster with batch processing</div>
            </div>
            <div style="
                background: rgba(168, 85, 247, 0.15);
                padding: 16px;
                border-radius: 12px;
                border: 1px solid rgba(168, 85, 247, 0.3);
                text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: rgb(168, 85, 247); margin-bottom: 8px;">🧠 Smart Search</div>
              <div style="font-size: 14px; color: rgb(71, 85, 105);">Priority-based with fallback systems</div>
            </div>
            <div style="
                background: rgba(245, 158, 11, 0.15);
                padding: 16px;
                border-radius: 12px;
                border: 1px solid rgba(245, 158, 11, 0.3);
                text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: rgb(245, 158, 11); margin-bottom: 8px;">🔬 Testing Suite</div>
              <div style="font-size: 14px; color: rgb(71, 85, 105);">Comprehensive native & Flutter tests</div>
            </div>
          </div>
        </div>
      `,readTime:"18 min read",slug:"week-10"},db={week:11,title:"Week 11: Advanced Architecture & Flutter Integration - Complete Application Lifecycle Management",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Threading","Architecture","Testing","UI/UX"],published:!0,excerpt:"This week marks a major architectural milestone! I'm excited to share the successful merge of our foundational PR, complete architectural refinements with advanced threading strategies, comprehensive testing infrastructure, and a fully functional Flutter example application that demonstrates the complete application lifecycle management system.",content:`
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
        Pull Request #141
      </h3>
      <p style="position:relative;z-index:1;"><strong>Add Application Installation/Uninstallation, Remote management And improve infrastructure for caching (Part of Feature #123)</strong></p>
      <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h2>Major Architectural Milestone: The Foundation is Complete!</h2>
    <p>This week represents a pivotal moment in our project journey! I'm thrilled to announce that <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" style="color: rgb(34, 197, 94); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(34, 197, 94, 0.3);">Pull Request #141 has been successfully merged</a></strong>, marking the completion of our foundational architecture work. This achievement represents months of careful planning, implementation, and testing coming together into a robust, production-ready system.</p>

    <h2>Architectural Refinements: Embracing Generated Code Excellence</h2>
    <p>One of the most significant architectural decisions this week was the complete overhaul of our serialization approach. I reverted all the custom serialization code to leverage the powerful serialization methods built directly into the generated pigeon messages (<code>messages.g.h</code>). This wasn't just a simple code change - it represents a fundamental shift toward embracing the robustness and maintainability of auto-generated code.</p>

    <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(59, 130, 246);">Strategic Friend Class Integration</h4>
      <p>To enable seamless cache operations while maintaining encapsulation, I implemented strategic friend class declarations in the generated classes:</p>
      <div style="background: #1a1a1a; color: #e5e5e5; border-radius: 8px; padding: 16px; margin: 12px 0; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5;">
        <div style="color: #569cd6;">friend</div> <div style="color: #4ec9b0;">struct</div> <div style="color: #4fc1ff;">ApplicationCacheOperation</div>;<br/>
        <div style="color: #569cd6;">friend</div> <div style="color: #4ec9b0;">struct</div> <div style="color: #4fc1ff;">EncodableListCacheOperation</div>;
      </div>
      <p>This elegant solution provides controlled access to internal data structures while maintaining the integrity and type safety of our generated message system.</p>
    </div>

    <h2>Advanced Threading Architecture: Building for Concurrency Excellence</h2>
    <p>The caching system now implements a sophisticated multi-mutex threading approach that ensures thread safety across all critical operations. This architectural decision was driven by the need to support concurrent access patterns typical in automotive applications, where multiple systems may simultaneously request application data, network operations, and configuration updates.</p>

    <h3>The Seven-Mutex Protection Strategy</h3>
    <p>The class employs a carefully designed mutex hierarchy to protect shared resources while minimizing lock contention:</p>

    <div style="background: linear-gradient(145deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 24px; margin: 20px 0; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -2px; left: -2px; right: -2px; height: 4px; background: linear-gradient(90deg, rgb(139, 92, 246), rgb(59, 130, 246), rgb(34, 197, 94)); border-radius: 12px 12px 0 0;"></div>
      <h4 style="margin-top: 0; margin-bottom: 20px; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px; font-size: 16px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <circle cx="12" cy="16" r="1"></circle>
          <path d="m7 11 V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        Multi-Mutex Protection Architecture
      </h4>
      <div style="background: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 20px; font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-size: 14px; line-height: 1.8;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(139, 92, 246, 0.1); border-radius: 6px; border-left: 3px solid rgb(139, 92, 246);">
              <span style="color: rgb(139, 92, 246); font-weight: 600;">storage_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px; margin-bottom: 12px;">Cache data protection</div>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(59, 130, 246, 0.1); border-radius: 6px; border-left: 3px solid rgb(59, 130, 246);">
              <span style="color: rgb(59, 130, 246); font-weight: 600;">network_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px; margin-bottom: 12px;">Network operations</div>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(34, 197, 94, 0.1); border-radius: 6px; border-left: 3px solid rgb(34, 197, 94);">
              <span style="color: rgb(34, 197, 94); font-weight: 600;">observers_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px; margin-bottom: 12px;">Observer management</div>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(245, 158, 11, 0.1); border-radius: 6px; border-left: 3px solid rgb(245, 158, 11);">
              <span style="color: rgb(245, 158, 11); font-weight: 600;">config_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px;">Configuration access</div>
          </div>
          
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(168, 85, 247, 0.1); border-radius: 6px; border-left: 3px solid rgb(168, 85, 247);">
              <span style="color: rgb(168, 85, 247); font-weight: 600;">metrics_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px; margin-bottom: 12px;">Performance metrics</div>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(239, 68, 68, 0.1); border-radius: 6px; border-left: 3px solid rgb(239, 68, 68);">
              <span style="color: rgb(239, 68, 68); font-weight: 600;">init_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px; margin-bottom: 12px;">Initialization control</div>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: rgba(99, 102, 241, 0.1); border-radius: 6px; border-left: 3px solid rgb(99, 102, 241);">
              <span style="color: rgb(99, 102, 241); font-weight: 600;">flatpak_mutex_</span>
            </div>
            <div style="font-size: 12px; color: rgb(100, 116, 139); margin-left: 12px;">Flatpak API synchronization</div>
          </div>
        </div>
      </div>
    </div>

    <h3>Intelligent Cache Lifecycle Management</h3>
    <p>A particularly elegant feature is the automatic cleanup system powered by <code>cleanupcv</code>, which intelligently removes expired cache entries without manual intervention. This ensures optimal memory utilization while maintaining performance, crucial for resource-constrained automotive environments.</p>

    <h2>The Flatpak Shim: A Complete Architectural Transformation</h2>
    <p>The <code>flatpak_shim</code> component has undergone a complete architectural transformation, now handling all Flatpak operations with enhanced capability and reliability. This represents a significant evolution from our earlier prototypes to a production-ready system.</p>

    <h3>Revolutionary AppStream Integration</h3>
    <p>One of the most exciting developments is the complete removal of hardcoded XML applications from <code>GetApplicationRemotes</code>. The system now works seamlessly with live AppStream parsing, providing real-time access to application metadata directly from repository sources.</p>

    <div style="background: rgba(34, 197, 94, 0.05); border-left: 4px solid rgb(34, 197, 94); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(34, 197, 94);">Performance Optimization Strategy</h4>
      <p>The next phase involves integrating the <strong><a href="https://github.com/jwinarske/appstream_parser" target="_blank" rel="noopener noreferrer" style="color: rgb(34, 197, 94); text-decoration: none; font-weight: 500;">AppStream Parser</a></strong> into <code>appstream_catalog</code> for SAX parsing. This architectural decision addresses a critical performance concern: DOM parsing loads entire XML documents into RAM, which can be problematic for large application catalogs. SAX parsing provides a memory-efficient streaming approach that's perfect for automotive applications.</p>
    </div>

    <h3>Future-Ready Streaming Architecture</h3>
    <p>The foundation for Flutter progress streaming during updates and installations has been carefully architected, with implementation planned for the upcoming Application Lifecycle PR. This strategic approach ensures that when we merge the next phase, all the underlying infrastructure will be perfectly positioned to support real-time user feedback.</p>

    <h3>Rich Metadata Extraction Roadmap</h3>
    <p>Currently, several metadata fields await implementation as we transition to a more comprehensive <code>EncodableMap</code> approach for handling application metadata. The unhandled component fields represent a treasure trove of rich application information:</p>

    <div style="background: #1a1a1a; color: #e5e5e5; border-radius: 8px; padding: 20px; margin: 20px 0; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.8;">
      <div style="color: #10b981; margin-bottom: 12px;">// Rich metadata fields awaiting extraction</div>
      <div style="color: #6b7280;">component.getIcons()           <span style="color: #9ca3af;">// Visual application representation</span></div>
      <div style="color: #6b7280;">component.getUrl()             <span style="color: #9ca3af;">// Project homepage and resources</span></div>
      <div style="color: #6b7280;">component.getDeveloper()       <span style="color: #9ca3af;">// Developer attribution and contact</span></div>
      <div style="color: #6b7280;">component.getProjectGroup()    <span style="color: #9ca3af;">// Project organization info</span></div>
      <div style="color: #6b7280;">component.getArchitecture()    <span style="color: #9ca3af;">// Platform compatibility</span></div>
      <div style="color: #6b7280;">component.getBundle()          <span style="color: #9ca3af;">// Bundle type and format</span></div>
      <div style="color: #6b7280;">component.getSourcePkgname()   <span style="color: #9ca3af;">// Source package identification</span></div>
      <div style="color: #10b981; margin-top: 12px;">// And many more rich metadata fields...</div>
    </div>

    <h2>Comprehensive Testing Infrastructure: Building Confidence Through Code</h2>
    <p>This week also marked significant progress in our testing strategy with comprehensive work on the <strong><a href="https://github.com/meta-flutter/flatpak_flutter/pull/4" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.3);">flatpak_flutter testing infrastructure</a></strong>. The testing approach combines both integration tests with the live Flatpak API and comprehensive mock tests for Dart logic validation.</p>

    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        Pull Request #4 - Testing Infrastructure
      </h3>
      <p style="position:relative;z-index:1;"><strong>Flutter integration tests with flatpak API and mock tests for dart logic</strong></p>
      <a href="https://github.com/meta-flutter/flatpak_flutter/pull/4" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h3>Dual-Layer Testing Strategy</h3>
    <p>The testing approach implements a sophisticated dual-layer strategy that ensures both integration reliability and logic correctness:</p>

    <ul>
      <li><strong>Flutter Integration Tests</strong>: Direct interaction with the live Flatpak API to validate real-world behavior</li>
      <li><strong>Mock Logic Tests</strong>: Comprehensive Dart logic validation with controlled, predictable test scenarios</li>
      <li><strong>Edge Case Coverage</strong>: Systematic testing of error conditions and boundary scenarios</li>
      <li><strong>Performance Validation</strong>: Ensuring efficient operation under various load conditions</li>
    </ul>

    <h2>Complete Flutter Application Demonstration</h2>
    <p>The crown jewel of this week's development is the comprehensive Flutter example application that showcases the complete application lifecycle management system. This isn't just a simple demo - it's a fully functional application that demonstrates every aspect of our Flatpak integration.</p>

    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        Pull Request #5 - Example Flutter App
      </h3>
      <p style="position:relative;z-index:1;"><strong>Add Example Flutter App for Flatpak Plugin</strong></p>
      <a href="https://github.com/meta-flutter/flatpak_flutter/pull/5" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h3>Sophisticated Navigation Architecture</h3>
<p>The application features a sophisticated navigation widget that elegantly organizes the complete application management experience into four distinct functional areas:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
    <div style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(99, 102, 241)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9,22 9,12 15,12 15,22"></polyline>
      </svg>
    </div>
    <h4 style="margin: 0 0 8px 0; color: rgb(59, 130, 246); font-weight: 600;">Home</h4>
    <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Apps in remote repositories with smart installation status</p>
  </div>
  
  <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
    <div style="background: linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
      </svg>
    </div>
    <h4 style="margin: 0 0 8px 0; color: rgb(34, 197, 94); font-weight: 600;">Apps</h4>
    <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Installed applications management and control</p>
  </div>
  
  <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
    <div style="background: linear-gradient(135deg, rgb(168, 85, 247), rgb(147, 51, 234)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    </div>
    <h4 style="margin: 0 0 8px 0; color: rgb(168, 85, 247); font-weight: 600;">Remotes</h4>
    <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Repository management and configuration</p>
  </div>
  
  <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
    <div style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(251, 191, 36)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
    <h4 style="margin: 0 0 8px 0; color: rgb(245, 158, 11); font-weight: 600;">Profile</h4>
    <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">User settings and preferences (planned)</p>
  </div>
</div>
`,readTime:"10 min read",slug:"week-11"},ub={week:12,title:"Week 12: Advanced AppStream Integration & Comprehensive Metadata Serialization",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","AppStream","XML Parsing","Metadata","Serialization","Architecture"],published:!0,excerpt:"This week focused on comprehensive AppStream metadata extraction and serialization, resolving critical XML parsing issues, and implementing advanced category navigation with offline capabilities. The foundation for rich application metadata representation is now complete!",content:`
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Open</span>
        Pull Request #159
      </h3>
      <p style="position:relative;z-index:1;"><strong>AppStream Metadata Extraction and Enhanced Flutter UI Integration</strong></p>
      <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/159" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h2>Comprehensive AppStream Metadata Revolution</h2>
    <p>This week marked a significant milestone in our AppStream integration journey! I've successfully implemented comprehensive metadata extraction and parsing capabilities that transform raw XML AppStream data into rich, structured information perfectly suited for Flutter UI representation. This development brings us substantially closer to providing users with detailed, informative application catalogs.</p>

    <h2>Critical Bug Resolution: Screenshots and Language Support</h2>
    <p>A major breakthrough this week was resolving critical parsing issues affecting screenshots and language metadata extraction from the XML parser. These components are essential for creating rich, localized user experiences in automotive applications where multilingual support and visual application previews are crucial.</p>

    <div style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid rgb(239, 68, 68); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(239, 68, 68);">Screenshot Extraction Enhancement</h4>
      <p>The screenshot parsing mechanism now correctly handles various image formats and resolution specifications, ensuring that application previews are properly extracted and made available to the Flutter UI layer. This enhancement is particularly important for automotive interfaces where visual app identification is critical.</p>
    </div>

    <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(59, 130, 246);">Language Localization Support</h4>
      <p>The language extraction system has been completely overhauled to properly parse and serialize multilingual metadata. This foundation enables the creation of truly localized automotive applications that adapt to regional preferences and requirements.</p>
    </div>

    <h2>Complete Metadata Serialization Infrastructure</h2>
    <p>The serialization system now handles the complete spectrum of currently supported AppStream metadata fields, creating a robust foundation for rich application representation. Every piece of extractable metadata is now properly structured and ready for Flutter consumption.</p>

    <h3>Next Phase: Advanced Metadata Integration</h3>
    <p>With the core serialization infrastructure complete, the next development phase focuses on implementing support for advanced metadata fields that will further enrich the user experience:</p>

    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h4 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
        Advanced Metadata Roadmap
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 16px;">
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(139, 92, 246); margin-bottom: 4px;">developer_name</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Enhanced developer attribution</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(168, 85, 247); margin-bottom: 4px;">kudos</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Application recognition system</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(59, 130, 246); margin-bottom: 4px;">metadata</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Extended metadata fields</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(34, 197, 94); margin-bottom: 4px;">custom</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Custom field support</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(245, 158, 11); margin-bottom: 4px;">supports</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Platform compatibility info</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(239, 68, 68); margin-bottom: 4px;">recommends</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Application recommendations</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 8px; padding: 12px;">
          <div style="font-weight: 600; color: rgb(99, 102, 241); margin-bottom: 4px;">branding</div>
          <div style="font-size: 12px; color: rgb(100, 116, 139);">Visual branding elements</div>
        </div>
      </div>
    </div>

    <h2>Smart Category Navigation API</h2>
    <p>A significant architectural enhancement this week was the implementation of sophisticated category navigation capabilities within the AppStream catalog. This API provides intelligent categorization that enables users to efficiently browse applications by functional groups, dramatically improving the discovery experience.</p>

    <h2>Revolutionary Offline Capabilities</h2>
    <p>One of the most significant architectural achievements would be implementing comprehensive offline capabilities that bridge native cache systems with the Flutter UI layer. This development ensures that users can access application information and perform essential operations even when network connectivity is limited or unavailable.</p>

    <div style="background: rgba(34, 197, 94, 0.05); border-left: 4px solid rgb(34, 197, 94); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(34, 197, 94);">Native Cache Integration</h4>
      <p>The offline system leverages sophisticated native caching mechanisms that intelligently store application metadata, ensuring fast access times and reduced network dependency. This is particularly crucial for automotive environments where network connectivity may be intermittent.</p>
    </div>

    <h3>Intelligent Cache Synchronization</h3>
    <p>The caching system implements smart synchronization strategies that maintain data freshness while ensuring offline availability. When network connectivity is restored, the system seamlessly updates cached data with the latest information from remote repositories.</p>

    <h3>Flutter-Native Bridge Architecture</h3>
    <p>The offline capabilities are powered by a sophisticated bridge architecture that enables seamless communication between the native caching layer and the Flutter UI. This ensures that users experience consistent performance regardless of connectivity status.</p>


    <h2>Looking Ahead: Rich Metadata Integration</h2>
    <p>With the foundational metadata serialization infrastructure now complete, the next development phase will focus on implementing the advanced metadata fields outlined above. These enhancements will provide even richer application information and more sophisticated user experiences.</p>

    <p>The combination of comprehensive metadata extraction, intelligent category navigation, and robust offline capabilities positions our system as a cutting-edge solution for automotive application lifecycle management. Users can now expect a responsive, informative, and reliable application management experience that works seamlessly in all connectivity scenarios.</p>
`,readTime:"8 min read",slug:"week-12"},pb={week:13,title:"Week 13: Flutter UI Development & Midterm Demonstration - Rich Metadata Visualization",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","UI/UX","Demo","AppStream","Figma","Categories"],published:!0,excerpt:"This week focused on comprehensive Flutter UI development and creating a compelling midterm demonstration video. The semi-functional interface showcases rich application metadata visualization, intuitive category browsing, and detailed application views based on professional design patterns.",content:`
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Open</span>
        Pull Request #6
      </h3>
      <p style="position:relative;z-index:1;"><strong>Flutter UI Development with Rich Metadata Integration</strong></p>
      <a href="https://github.com/meta-flutter/flatpak_flutter/pull/6" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h2>Midterm Demonstration: Showcasing Project Excellence</h2>
    <p>This week culminated in the creation of a comprehensive demonstration video highlighting the significant progress achieved in our Flutter UI development. The midterm presentation showcases a sophisticated, semi-functional interface that effectively demonstrates the power and potential of our application lifecycle management system.</p>

    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 24px; margin: 24px 0; position: relative;">
      <h3 style="margin-top: 0; color: rgb(168, 85, 247); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="23,7 16,12 23,17 23,7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
        Midterm Demonstration Video
      </h3>
      <p style="margin-bottom: 16px;">Experience the comprehensive Flutter UI in action, showcasing rich application metadata and intuitive navigation patterns designed for automotive environments.</p>
      
      <div style="background: rgba(0, 0, 0, 0.8); border-radius: 12px; padding: 4px; margin: 16px 0;">
        <video 
          controls 
          style="width: 100%; height: auto; border-radius: 8px; display: block;"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23000'/%3E%3Ctext x='400' y='225' text-anchor='middle' fill='%23fff' font-size='24' font-family='Arial'%3ELoading Demo Video...%3C/text%3E%3C/svg%3E"
        >
          <source src="/media/demo.webm" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <p style="font-size: 14px; color: rgb(100, 116, 139); margin-top: 12px;">
        <strong>Demo Highlights:</strong> Rich application metadata visualization, category-based navigation, detailed application views, and seamless AppStream integration.
      </p>
    </div>

    <h2>Semi-Functional UI: A Foundation for Excellence</h2>
    <p>The demonstration showcases a sophisticated semi-functional user interface that presents the complete application discovery and management experience. This implementation represents a significant milestone in translating our architectural vision into tangible, interactive user experiences.</p>

    <h3>Intuitive Home Screen Experience</h3>
    <p>The home screen serves as the central hub for application discovery, featuring an elegantly organized category system that presents applications with comprehensive metadata extracted from our AppStream integration. This design approach ensures users can quickly identify and explore applications that meet their specific needs.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(99, 102, 241)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(59, 130, 246); font-weight: 600;">Category Organization</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Intelligent application grouping with rich metadata display</p>
      </div>
      
      <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(34, 197, 94); font-weight: 600;">Rich Metadata</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Comprehensive application information and visual elements</p>
      </div>
      
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(251, 191, 36)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(245, 158, 11); font-weight: 600;">Discovery Flow</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Intuitive navigation and application exploration</p>
      </div>
    </div>

    <h3>Comprehensive Application Detail Views</h3>
    <p>The application screen provides detailed information presentation, showcasing the complete spectrum of metadata extracted from our AppStream integration. This comprehensive view enables users to make informed decisions about application installation and usage, crucial for automotive environments where application selection impacts overall system performance and user experience.</p>

    <h2>Professional Design Foundation: Figma Integration</h2>
    <p>The user interface development is grounded in professional design principles, leveraging a comprehensive <strong><a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=148-376&t=RORNZYycxXu981gK-1" target="_blank" rel="noopener noreferrer" style="color: rgb(168, 85, 247); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(168, 85, 247, 0.3);">Figma design system</a></strong> that establishes consistent visual patterns and user experience flows optimized for automotive applications.</p>

    <div style="background: rgba(168, 85, 247, 0.05); border-left: 4px solid rgb(168, 85, 247); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(168, 85, 247);">Design System Integration</h4>
      <p>The Figma design system provides comprehensive guidelines for component behavior, interaction patterns, and visual hierarchy. This systematic approach ensures consistency across all user interface elements while maintaining the flexibility needed for automotive-specific requirements.</p>
    </div>

    <h3>Automotive-Optimized Interface Patterns</h3>
    <p>The design implementation specifically considers automotive use cases, including large touch targets for in-vehicle interaction, high contrast elements for various lighting conditions, and intuitive navigation patterns that minimize driver distraction while maintaining functionality.</p>

    <h2>Development Roadmap: Future Enhancements</h2>
    <p>While the current implementation demonstrates significant progress, several key enhancements are planned to complete the full application lifecycle management experience:</p>

    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
        Upcoming Development Priorities
      </h3>
      <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 16px;">
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(139, 92, 246, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(139, 92, 246); margin-bottom: 4px;">Enhanced Category System</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Complete category integration with dynamic filtering and sorting capabilities</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(59, 130, 246, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(59, 130, 246); margin-bottom: 4px;">Advanced State Management</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Robust state management architecture for complex application interactions</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(34, 197, 94, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(34, 197, 94); margin-bottom: 4px;">Intelligent Search Integration</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Comprehensive search functionality across applications and categories from AppStream catalog</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(245, 158, 11, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(245, 158, 11); margin-bottom: 4px;">Enhanced UI/UX Implementation</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Refined animations, interactions, and accessibility features for optimal user experience</div>
          </div>
        </div>
      </div>
    </div>

    <h2>Demonstrating Project Maturity</h2>
    <p>The midterm demonstration effectively showcases the project's evolution from conceptual architecture to functional user interface. The semi-functional implementation provides a compelling preview of the complete application lifecycle management system, highlighting both current capabilities and future potential.</p>

    <p>This week's achievements represent a significant milestone in user experience development, transforming complex backend functionality into intuitive, accessible interfaces that automotive users can navigate with confidence and efficiency. The foundation established through this UI development work sets the stage for the comprehensive enhancements planned in the upcoming development phases.</p>
`,readTime:"7 min read",slug:"week-13"},hb={week:14,title:"Week 14: Flutter UI Development & Midterm Demonstration - Rich Metadata Visualization",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","UI/UX","Demo","AppStream","Figma","Categories"],published:!0,excerpt:"This week focused on comprehensive Flutter UI development and creating a compelling midterm demonstration video. The semi-functional interface showcases rich application metadata visualization, intuitive category browsing, and detailed application views based on professional design patterns.",content:`

`,readTime:"7 min read",slug:"week-14"},fb={week:15,title:"Week 15: Flutter UI Development & Midterm Demonstration - Rich Metadata Visualization",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","UI/UX","Demo","AppStream","Figma","Categories"],published:!0,excerpt:"This week focused on comprehensive Flutter UI development and creating a compelling midterm demonstration video. The semi-functional interface showcases rich application metadata visualization, intuitive category browsing, and detailed application views based on professional design patterns.",content:`
   `,readTime:"7 min read",slug:"week-15"},gb={week:16,title:"Week 16: A Deep Dive into Flatpak Sandboxing and XDG Portals",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Flatpak","Sandboxing","BubbleWrap","Portals","D-Bus","Security"],published:!0,excerpt:"This week, I explored the foundations of Flatpak's security model, from the low-level power of BubbleWrap to the high-level elegance of XDG Desktop Portals.",content:`
    <h2>Understanding Secure Application Integration</h2>
    <p>This week was dedicated to understanding and interacting with the core of Flatpak's security model: the XDG-Portal APIs. To launch a sandboxed application and allow it to safely interact with the host system, you have to appreciate how the sandbox is constructed and how communication flows through it. The goal is to let apps access resources like files or system notifications without ever compromising the integrity of the sandbox.</p>

    <h3>The Two Pillars of Flatpak Security</h3>
    <p>Flatpak's sandboxing architecture is built on two fundamental components working together: a low-level container engine and a high-level API for communication.</p>

    <h4>1. BubbleWrap (bwrap): The Fortress Builder</h4>
    <p>At the very bottom layer is <strong>BubbleWrap</strong>. It's a low-level utility that uses powerful features of the Linux kernel—like user, mount, network, and PID namespaces—to construct a secure container around an application. Think of it as the tool that builds the high, thick walls of a fortress. It ensures the application is isolated, with its own private filesystem view and process tree. It also uses Seccomp-BPF filters to restrict the specific system calls an application can make, adding another critical layer of security.</p>

    <h4>2. XDG Desktop Portals: The Secure Gatekeepers</h4>
    <p>While BubbleWrap builds the fortress, <strong>XDG Desktop Portals</strong> act as the secure, guarded gates. An application inside the sandbox can't just reach out and grab a file from your Documents folder. Instead, it must make a request to a portal via D-Bus. The portal, running on the host system, then presents a native dialog to the user (like a file picker), and only if the user approves is the app granted temporary, controlled access to that specific resource. This keeps the user in charge and the sandbox intact.</p>
    <p>There are portals for a wide range of functions, including:</p>
    <ul>
      <li><strong>File System</strong>: For file choosers and document access.</li>
      <li><strong>Media</strong>: For camera access and screen sharing.</li>
      <li><strong>System Integration</strong>: For sending notifications or preventing the system from sleeping.</li>
    </ul>

    <h3>How an App Defines Its World</h3>
    <p>An application's permissions and sandbox configuration are defined in its <strong>metadata file</strong>. This simple text file lists exactly what the app needs. For example, looking at the metadata for Slack, you can see explicit requests for network access, specific filesystem locations, and permissions to talk to certain services on the D-Bus session bus.</p>
    
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
[Context]
shared=network;ipc;
sockets=x11;pulseaudio;
devices=all;
filesystems=xdg-download;

[Session Bus Policy]
org.freedesktop.Notifications=talk
...
    </code></pre>

    <h3>The Launch Sequence: From Request to Running Process</h3>
    <p>Bringing this all together, launching a Flatpak app is a sequential process that turns these configurations into a running, sandboxed application:</p>
    <ol>
      <li><strong>Metadata Parsing</strong>: First, we read the app's metadata file to understand its permission requirements.</li>
      <li><strong>Sandbox Configuration</strong>: These permissions are used to construct the arguments for BubbleWrap, defining the exact shape of the sandbox.</li>
      <li><strong>Portal Setup</strong>: We establish connections to the necessary D-Bus portals that the app will need at runtime.</li>
      <li><strong>Application Launch</strong>: Finally, BubbleWrap is executed with the configured arguments, creating the container and starting the application process inside it.</li>
    </ol>
    <p>Once running, any action that requires host access—like opening a file—triggers a portal request, a user dialog, and a secure response.</p>
    
    <h3>Putting It into Practice</h3>
    <p>To validate this flow, I used tools like <code>busctl monitor org.freedesktop.portal.Desktop</code> to watch D-Bus messages in real-time and see the portal requests as they happen. The next step is implementing this logic using the C APIs provided by <code>libflatpak</code> and GLib to handle D-Bus communication, which will allow our homescreen to manage the entire lifecycle of a Flatpak application securely.</p>
  `,readTime:"8 min read",slug:"week-16"},mb={week:17,title:"Week 17: Navigating Flatpak Permissions and Portal-Based Dialogs",date:"September 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flatpak","Permissions","Portals","GTK","Yocto"],published:!0,excerpt:"This week was a deep dive into the Flatpak security model, replacing insecure dialog methods with XDG Desktop Portals and planning for our Yocto build.",content:`
    <p>This week was all about navigating the complexities of Flatpak permissions and ensuring our IVI applications interact securely with the host system. A key focus was replacing insecure dialog methods with XDG Desktop Portals to maintain the integrity of the Flatpak sandbox.</p>

    <h2>Tackling the Flatpak Security Model</h2>
    <p>This week was all about getting permissions right. When dealing with sandboxed applications like Flatpaks, securely asking the user for permissions is critical. My initial exploration involved using tools like <code>Zenity</code> to display dialogs, but I quickly ran into a fundamental security issue.</p>
    <p>The problem is that <strong><code>Zenity</code> runs outside the Flatpak sandbox</strong>. This means it has no context of the application's permissions, effectively bypassing the entire security model we rely on. It's a non-starter for a secure system.</p>

    <h3>The Right Way: XDG Desktop Portals</h3>
    <p>The correct solution is to use XDG Desktop Portals. Portals act as a secure middleman between the sandboxed app and the host system. When an app needs permission, it doesn't pop up a dialog itself. Instead, it makes a request to the portal. The portal's backend implementation (in our case, provided by GNOME/GTK) then renders a native dialog to the user.</p>
    <p>This is all handled through the <code>org.freedesktop.portal.Request</code> D-Bus pattern, which securely manages the user's response and passes it back to the application. This way, the host system remains in full control, and the sandbox is never compromised.</p>

    <h3>Auditing App Permissions</h3>
    <p>While working on this, I also audited the permissions of some existing Flatpak applications. Many of them contain metadata with permissions that are far too permissive for an embedded IVI system, such as:</p>
    <ul>
      <li><code>"devices=all"</code>: Grants unrestricted access to all devices.</li>
      <li><code>"filesystems=host"</code>: Exposes the entire host filesystem to the app.</li>
    </ul>
    <p>Part of my work this week was implementing the logic for starting and stopping applications while keeping these permissions in check, referencing the permissions we have stored in our documentation.</p>

    <h3>Next Steps: Yocto Integration</h3>
    <p>Now that the permission flow is correctly handled by XDG portals and native GTK dialogs, the next critical step is to ensure this functionality is included in our IVI build. This means we need to identify and add the necessary Yocto recipes to our image to package the portal dependencies. This will be a key focus moving forward.</p>
  `,readTime:"6 min read",slug:"week-17"},yb={week:18,title:"Week 18: Optimizing Application Launching with XDG Desktop Portals and Enhancing User Experience",date:"October 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","UI/UX","C++","D-Bus","Figma","Portals"],published:!0,excerpt:"This week focused on optimizing application launching using XDG Desktop Portals and enhancing user experience through improved UI/UX design, including a plan to refactor D-Bus handling and permissions.",content:`
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Pending</span>
        Pull Request: Application Lifecycle
      </h3>
      <p style="position:relative;z-index:1;"><strong>Enhancing Application Lifecycle for Flatpak Apps</strong></p>
      <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/6" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View Pending PR on GitHub
      </a>
    </div>

    <h2>Revamping the Core: My Plan for Flatpak App Lifecycle</h2>
    <p>This week, I've been focused on enhancing the application lifecycle for Flatpak apps to make our system more robust and efficient. I have a few key changes planned that I'm excited to share.</p>

    <h3>1. Upgrading to sdbus-cpp</h3>
    <p>First, I'm replacing our <code>GDBus</code> implementation with <code>sdbus-cpp</code>. The goal here is to modernize our D-Bus communication layer. While it provides the same functionality, <code>sdbus-cpp</code> offers a much cleaner, more intuitive C++ API. This will improve code maintainability without disrupting the existing workflow. I've been referencing <a href="https://github.com/jwinarske/sdbus-cpp-examples" target="_blank" rel="noopener noreferrer">jwinarske's sdbus-cpp-examples</a>, which has been a fantastic resource.</p>

    <h3>2. Removing the GTK Dependency</h3>
    <p>The second major change is to decouple our C++ backend from GTK by replacing the GTK permission dialog with a Flutter <code>EventChannel</code>. This is a big step towards a cleaner architecture. The new flow will work like this:</p>
    <ul>
        <li>The C++ backend will emit an event whenever permission is needed.</li>
        <li>The Dart front-end will listen for this event and display a dialog.</li>
        <li>The user's response (allow/deny) will be sent back to the C++ side through the channel.</li>
    </ul>

    <h3>3. Native Flutter Permission Dialogs</h3>
    <p>To complete this new flow, I'll be building the permission dialog UI directly in Flutter. We can use native widgets like <code>AlertDialog</code> or create a fully custom widget that aligns perfectly with our app's design system. This gives us more control over the user experience and ensures a seamless look and feel.</p>

    <h2>Proposed Architecture for D-Bus Management</h2>
    <p>To tie all this together, I've designed a new architecture to manage our D-Bus interactions cleanly. The core of this design is a component called the <code>InterfaceAccessManager</code>, which will act as a central entry point—a façade—for all D-Bus operations.</p>
    <p>This manager is responsible for orchestrating several key components. It owns a <code>BusConnectionPool</code> to handle connections to both the session and system buses. For efficiency, it also manages a <code>SharedProxyPool</code>, which uses the Flyweight design pattern to reuse D-Bus proxy objects across multiple applications instead of creating new ones every time. For handling signals, a <code>SignalMultiplexer</code> prevents redundant work by ensuring we only have one subscription per signal, broadcasting it internally to any part of the system that's listening. Finally, the manager tracks all application-specific resources using a map that links each app's ID to its own <code>AppContext</code>, ensuring every app's state is neatly contained.</p>
    
    <h4>Interaction Flow:</h4>
    <ol>
        <li>An app registers, which creates an <code>AppContext</code> with its own dedicated processing strand.</li>
        <li>When the app calls a method, it gets a shared proxy from the pool, preventing resource duplication.</li>
        <li>If the app subscribes to a signal, the multiplexer ensures we only have one subscription per signal.</li>
        <li>When the app unregisters, the <code>AppContext</code> handles all the cleanup automatically.</li>
    </ol>
  `,readTime:"7 min read",slug:"week-18"},vb={week:19,title:"Week 19: The Case of the Silently Failing App and Conquering Flatpak Extensions",date:"October 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Flatpak","Architecture","Debugging","Steam","Extensions","C++"],published:!0,excerpt:"This week, a mysterious bug with the Steam Flatpak led us down a rabbit hole, forcing a complete redesign of our application launch logic to support Flatpak extensions.",content:`
    <h2>The Anatomy of an App Launch</h2>
    <p>My initial goal for the week was to solidify the application launch process. The architecture I designed seemed robust: when a user requests to launch an app, our C++ backend kicks off a process. It checks if the required Flatpak runtime is installed. If not, it creates a <strong>Flatpak Transaction</strong>, downloads the necessary components, and reports progress back to the Flutter UI through an <strong>EventSink</strong>. Once everything is in place, it creates the sandbox, sets up the portals, and launches the app. Simple and effective.</p>
    <p>This flow worked flawlessly for most applications. The logic was clean: find the app, check its runtime, install if missing, and run.</p>
    
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
User Clicks "Launch"
    ↓
C++: check_runtime()
    ↓
Is runtime installed?
    ├── YES → Launch App
    └── NO  → Install Runtime (with progress) → Launch App
    </code></pre>

    <h2>The Steam Anomaly: A Silent Failure</h2>
    <p>Then, we tested a more complex application: <strong>Valve's Steam</strong>. And something strange happened. Our logs showed success! The base runtime was found, the launch command was successful, and the Steam window appeared. But it was a hollow victory. The application was fundamentally broken; it couldn't run any 32-bit games, which is a core part of its functionality. Buried deep in the application's own logs was the smoking gun:</p>
    <blockquote style="border-left: 4px solid #f97316; padding-left: 16px; margin: 16px 0; color: #d1d5db;">
        WARNING: i386 compatibility extensions not installed...
    </blockquote>
    <p>Our system had reported a full success, but the application itself knew it was missing critical components. This wasn't just a bug; it was a flaw in our entire understanding of a Flatpak's dependencies.</p>
    
    <h3>Uncovering Flatpak Extensions</h3>
    <p>This warning led me to a deep dive into <strong>Flatpak Extensions</strong>. I learned they aren't separate apps or runtimes, but rather add-on packages that augment a runtime with extra functionality. Think of the runtime as the core operating system, and extensions as essential driver packs.</p>
    <p>By inspecting Steam's metadata file, the problem became crystal clear. It declared a standard 64-bit runtime but also listed several extensions as dependencies:</p>
    <ul>
        <li><code>org.freedesktop.Platform.Compat.i386</code>: Provides the basic 32-bit libraries.</li>
        <li><code>org.freedesktop.Platform.GL32</code>: Provides the 32-bit OpenGL and Vulkan graphics drivers needed to run games.</li>
    </ul>
    <p>Our code was only checking for the base runtime and completely ignoring these crucial <code>[Extension ...]</code> sections. It was like checking if a car had an engine but forgetting to check for the wheels. The car would "start," but it wouldn't be able to do its job.</p>

    <h2>Redesigning the Launch Logic</h2>
    <p>It was clear the existing logic was insufficient. We needed a new, more comprehensive approach that treated extensions as first-class citizens of the installation process.</p>
    <p>The new algorithm is far more robust:</p>
    <ol>
        <li><strong>Parse Metadata Fully:</strong> When an app launch is requested, we now parse the entire metadata file, identifying not only the base runtime but also a list of all declared extensions.</li>
        <li><strong>Identify Required Extensions:</strong> We analyze each extension to see if it's required. Some are optional (marked with <code>no-autodownload=true</code>), while others are critical. Some are even conditional, only needed if you have a specific GPU (like an NVIDIA or Intel driver).</li>
        <li><strong>Check All Dependencies:</strong> We check for the presence of the base runtime AND every single required extension.</li>
        <li><strong>Install Everything Missing:</strong> If anything is missing, we create a single Flatpak transaction to download and install all missing pieces—the runtime and the extensions—in one go.</li>
        <li><strong>Launch with Confidence:</strong> Only when we've verified that every single dependency is in place do we proceed with launching the application.</li>
    </ol>
    
    <h3>The Result: A Smarter, More Reliable System</h3>
    <p>The difference is night and day. Where our logs once showed a misleading success, they will now provide a clear, step-by-step account of what's happening. A launch for Steam will look something like this:</p>
    
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
[info] Would start application: com.valvesoftware.Steam
[debug] Parsed 12 extensions from metadata
[warn] Required extension missing: org.freedesktop.Platform.GL32.default/...
[info] Installing 2 extensions...
... (progress callbacks for each download) ...
[info] Successfully installed 2 extensions
[info] Runtime and all extensions installed. Launching application...
    </code></pre>

    <p>This week was a powerful lesson in the hidden complexities of application dependencies. By chasing down this silent failure, we've built a much more resilient and user-friendly system that can handle even the most demanding Flatpak applications. The next step is to write the unit tests to lock in this new, correct behavior.</p>
  `,readTime:"9 min read",slug:"week-19"},xb={week:20,title:"Week 20: Decoding Flatpak's 'Brain' & Taming it with the libflatpak API",date:"October 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Flatpak","Architecture","Steam","Extensions","C++","libflatpak"],published:!0,excerpt:"This week, I didn't just understand Flatpak's conditional logic; I successfully implemented it using the libflatpak C++ API, culminating in a successful Steam demo.",content:`
    <h2>Success! Steam is Now Launching</h2>
    <p>After weeks of deep-diving and debugging, I'm thrilled to show the result: Steam, a highly complex multi-arch application, launching correctly from our Flutter plugin on the IVI homescreen. This proves that our new dependency-handling logic is working.</p>
    
    <div style="margin: 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #222;">
      <video controls width="100%" poster="https://i.imgur.com/example-poster.jpg" style="display: block;">
        <source src="/media/steam-demo-week20.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="text-align: center; padding: 12px 0 4px 0; color: #ccc; background: #222; margin: 0; font-style: italic;">Demo: Launching Steam via the libflatpak-powered plugin.</p>
    </div>

    <p>Getting here wasn't easy. Last week, I identified <em>why</em> it was failing: we weren't installing the required <strong>conditional extensions</strong>. This week was all about building the C++ logic to fix that, not with shell commands, but with the proper <code>libflatpak</code> API.</p>

    <h3>The 'Aha!' Moment: Extensions are Conditional</h3>
    <p>My first assumption was that we just needed to find the missing extensions and install them. I was wrong. The key insight is that extensions must be <strong>conditionally installed</strong> based on the system's actual hardware and drivers.</p>
    <p>It makes perfect sense. Installing an NVIDIA-specific driver extension on a system with an Intel GPU isn't just wasteful—it could cause conflicts and break graphics rendering entirely. Each extension can add hundreds of megabytes, so installing all of them is not an option.</p>
    <p>Flatpak is built for this. Its metadata is filled with conditional properties like <code>download-if</code>, <code>enable-if</code>, and <code>autoprune-unless</code>. This is Flatpak's "brain," a lazy-evaluation system that checks the host system <em>before</em> deciding what to download.</p>

    <h3>Decoding the Clues: Categorizing Steam's Extensions</h3>
    <p>To make sense of the madness, I started categorizing the dozen-plus extensions Steam referenced in its metadata. They generally fall into five groups:</p>
    
    <h4>1. The Core Compatibility Layers</h4>
    <p>These are the non-negotiables. Since Steam is a 32-bit application running on a 64-bit platform, it needs a 32-bit world to live in.
        <ul>
            <li><strong><code>org.freedesktop.Platform.Compat.i386</code></strong>: Provides the core 32-bit C libraries.</li>
            <li><strong><code>org.freedesktop.Platform.GL32.default</code></strong>: Provides the basic 32-bit OpenGL/Vulkan graphics libraries.</li>
        </ul>
    Steam itself will warn you if these are missing.
    </p>

    <h4>2. The Hardware-Specific Drivers</h4>
    <p>This is where Flatpak's intelligence shines. An extension like <code>org.freedesktop.Platform.GL32</code> has a <code>download-if=active-gl-driver</code> condition. This tells Flatpak: "Only install this if the system actually has a working graphics driver."</p>
    <p>This applies to video acceleration (VAAPI) too. The system will:</p>
    <ul>
        <li>Check <code>have-intel-gpu</code> before downloading the Intel VAAPI driver.</li>
        <li>Check <code>have-kernel-module-nvidia</code> before downloading the NVIDIA VAAPI driver.</li>
    </ul>

    <h4>3. The Codec Packs</h4>
    <p>Many games include in-game videos, which often use proprietary codecs like H.264 or AAC. The <strong><code>org.freedesktop.Platform.codecs_extra.i386</code></strong> extension provides these, ensuring users don't just get a black screen.</p>

    <h4>4. Steam's Own "Private" Extensions</h4>
    <p>These are extensions that only Steam uses and are not shared with other apps.
        <ul>
            <li><strong><code>com.valvesoftware.Steam.CompatibilityTool</code></strong>: This is Proton! It's how Steam houses different Proton versions for Windows game compatibility.</li>
            <li><strong><code>com.valvesoftware.Steam.Utility</code></strong>: Extra tools like the Steam Linux Runtime and MangoHud.</li>
        </ul>
    </p>

    <h4>5. The Debugging Tools</h4>
    <p>Extensions like <code>com.valvesoftware.Steam.Debug</code> exist, but they are marked with <code>no-autodownload=true</code>. This means Flatpak will never install them automatically. They're large, only useful for developers, and must be installed manually if needed.</p>
    
    <h2>The API-Driven Solution: From Theory to Code</h2>
    <p>My original analysis was correct, but my proposed solution of using <code>flatpak install</code> commands was just for testing. On an embedded IVI system, our App Store plugin can't just shell out to the command line. It must use the official <strong><code>libflatpak</code> C++ API</strong> to manage installations transactionally.</p>
    <p>Here is how the new logic in my <code>FlatpakShim</code> C++ class works:</p>

    <ol>
        <li style="margin-bottom: 1em;"><strong>Get All Related Extensions:</strong> When <code>check_runtime</code> is called, it first gets the app's <code>FlatpakInstalledRef</code>. It then uses <code>flatpak_installation_list_remote_related_refs_sync</code> to get a complete list of all extensions the app knows about from its remote.</li>
        
        <li style="margin-bottom: 1em;"><strong>Let Flatpak's "Brain" Decide:</strong> This is the key. I loop through the list and call <code>flatpak_related_ref_should_download</code> on each one. This is the API equivalent of Flatpak's "brain." It evaluates all those <code>download-if</code> conditions (like "is an Intel GPU present?" or "is the NVIDIA kernel module loaded?") and returns a simple true/false.</li>
        
        <li style="margin-bottom: 1em;"><strong>Check for Missing Pieces:</strong> I now have a clean list of the base runtime and all *required* extensions. I loop through this list and use <code>flatpak_installation_get_installed_ref</code> to see if we already have them. Any that return <code>FLATPAK_ERROR_NOT_INSTALLED</code> are added to a "missing" list.</li>
        
        <li style="margin-bottom: 1em;"><strong>Build an Atomic Transaction:</strong> If the "missing" list is empty, we're done! If not, I create a <code>FlatpakTransaction</code>. This is the API's all-or-nothing installer. I add the missing runtime and all missing extensions to this single transaction using <code>flatpak_transaction_add_install</code>.</li>
        
        <li style="margin-bottom: 1em;"><strong>Run Asynchronously:</strong> Finally, I call <code>flatpak_transaction_run</code>. This is a blocking call that can take minutes to download and install. To prevent freezing our Flutter UI, I wrap this call in a <strong><code>std::thread</code></strong>. When the installation thread finishes, it posts the success or failure result back to the main UI thread using <code>asio::post</code>, which then notifies Flutter.</li>
    </ol>

    <p>This closes the loop. We've gone from a theoretical understanding of <em>why</em> Steam was failing to a robust, production-ready C++ implementation that correctly and automatically installs all dependencies, all without blocking the user experience. The demo video is proof that this architecture works!</p>
  `,readTime:"10 min read",slug:"week-20"},bb={week:21,title:"Week 21: It's Merged! Core Functionality Complete and Yocto Integration Begins",date:"October 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","C++","libflatpak","Yocto","AGL","sdbus-c++"],published:!0,excerpt:"A major milestone this week: the main pull request is closed! All core features are working, including the fix for complex apps, and the focus now shifts to Yocto integration for AGL.",content:`
    <h2>The Big News: The PR is Closed!</h2>
    <p>This was a fantastic week—a major milestone for the project! I’m thrilled to report that the main pull request for the Flatpak plugin is officially <strong>closed and merged</strong>. After all the deep dives and debugging from the past few weeks (especially with Steam), seeing this cross the finish line feels incredible.</p>
    <p>The test suite is fully green, which confirms all our core functionality is stable and working as expected. This includes:</p>
    <ul>
        <li>Running multiple applications simultaneously.</li>
        <li>Installing and uninstalling apps, complete with progress streaming back to the Flutter UI.</li>
        <li>Updating applications, also with full progress streaming.</li>
        <li>Querying the system to get a list of all apps that need to be updated.</li>
    </ul>
    <p>And most importantly, the big one: <strong>complex applications like Steam</strong>, which rely on conditional hardware extensions, now install and launch correctly! This critical fix is confirmed and merged. To support our D-Bus communication cleanly, I also successfully added <code>sdbus-c++</code> as a third-party dependency, which is now part of our build.</p>
    
    <h2>The Next Frontier: Yocto and AGL</h2>
    <p>With the plugin logic complete, my focus is now shifting from pure development to system integration. I’ve successfully built the base <strong>Yocto IVI QEMU image for AGL (Automotive Grade Linux)</strong>.</p>
    <p>The next major task is to write the Yocto recipes needed to package our new Flatpak Appstore plugin and all its dependencies (like <code>libflatpak</code> and <code>sdbus-c++</code>) into the AGL build. This is the work that will actually get our Appstore running on the target embedded system. I've started tracking this integration work over in the <a href="https://github.com/toyota-connected/tcna-packages/pull/58" target="_blank" rel="noopener noreferrer">tcna-packages repository (PR #58)</a>.</p>

    <h2>What's Next: Polishing and Production-Readiness</h2>
    <p>While the main PR is merged, there are still several features and clean-up tasks on my to-do list to make this plugin truly production-ready:</p>
    <ul>
        <li><strong>Repair Functionality:</strong> Add a "repair" function to fix broken installations.</li>
        <li><strong>Cleanup:</strong> Implement a feature to find and uninstall unused refs (old runtimes, etc.) to save disk space on the embedded device.</li>
        <li><strong>App Filtering:</strong> This is a key one. We need to filter apps from the remote (like Flathub) to only show those that are compatible with our embedded IVI system. We don't want to display desktop-only apps that won't work.</li>
        <li><strong>Refactoring:</strong> A bit of code cleanup to improve module separation and long-term maintainability.</li>
    </ul>
    <p>It’s a great feeling to have the core feature set locked in. Now, it's all about integrating it with the Yocto build and polishing the final features.</p>
  `,readTime:"7 min read",slug:"week-21"},wb={week:22,title:"Week 22: The Journey of Fixing the Flatpak Plugin—A Developer's Tale",date:"November 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Flutter","C++","libflatpak","Debugging","Threading","Deadlock","GLib","ASIO","BLoC","UI/UX"],published:!0,excerpt:"This week was a deep dive into debugging the Flatpak plugin. What started as a silent EventChannel led to untangling a web of threading deadlocks, timing issues, and synchronous code in an async world.",content:`
    <h2>The Journey of Fixing the Flatpak Plugin: A Developer's Tale</h2>
    
    <h3>Chapter 1: The Mystery of the Silent EventChannel</h3>
    <p>It all started with a simple question: "Why isn't my Flutter app receiving any events from the native Flatpak plugin?" The logs showed something puzzling - the EventChannel was being created, but the event sink was always null. Messages were being sent into the void, and Flutter had no idea what was happening with application installations, updates, or launches.</p>
    
    <div style="margin: 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #222;">
      <video controls width="100%" poster="/images/week22-poster-placeholder.jpg" style="display: block;">
        <source src="/media/final_submition.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="text-align: center; padding: 12px 0 4px 0; color: #ccc; background: #222; margin: 0; font-style: italic;">Demo: The fully functional plugin, streaming progress with a new BLoC-powered UI.</p>
    </div>

    <h4>The First Discovery: Missing GLIB Integration</h4>
    <p>Coming from a working video player plugin implementation, I noticed something crucial missing - the <strong>GLIB main loop initialization</strong>. The Flatpak plugin was built on top of GLib (through libflatpak), but it wasn't actually starting the event loop that would process all those asynchronous callbacks.</p>
    <p>It's like building a sophisticated radio receiver but forgetting to plug it into the power socket. The hardware was all there, beautifully constructed, but without power, it simply couldn't work.</p>
    <p>The Fix: Adding a single line in the constructor made all the difference:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
plugin_common_glib::MainLoop::GetInstance();
    </code></pre>
    <p>This singleton pattern ensures the GLIB event loop runs throughout the application's lifetime, processing all the asynchronous events from Flatpak operations.</p>

    <h4>The Second Discovery: Timing is Everything</h4>
    <p>The EventChannel was being set up too early - right in the constructor, before Flutter's messenger was fully initialized. It's like trying to send a letter before the post office opens for business. The letter is written perfectly, addressed correctly, but there's no one to receive it yet.</p>
    <p><strong>The Solution:</strong> Split the initialization into two phases:</p>
    <ul>
        <li><strong>Constructor:</strong> Set up the basic structure, create the shim, but don't touch the EventChannel yet.</li>
        <li><strong>Init() method:</strong> Called after Flutter's messenger is ready, this is where we actually create the EventChannel.</li>
    </ul>
    <p>This mirrors the proven pattern from the video player plugin, where initialization happens in stages, respecting the lifecycle of Flutter's infrastructure.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 2: The Threading Labyrinth</h3>
    <p>With the EventChannel finally working, a new problem emerged: the application start functionality worked perfectly in native code but <strong>hung indefinitely when called from Flutter</strong>. The logs would show "No extensions needed" and then... silence. No error, no crash, just an eternal wait.</p>

    <h4>The Third Discovery: The Strand Recursion Trap</h4>
    <p>The culprit was subtle but deadly: callback functions were using <code>asio::post</code> when they should have been using <code>asio::dispatch</code>. But what's the difference, and why does it matter?</p>
    <p>Think of it this way: You're at a restaurant (the strand thread), and you need to tell the waiter something (execute a callback).</p>
    <ul>
        <li><strong><code>asio::post</code></strong> is like writing a note and putting it in the waiter's inbox, even if the waiter is standing right in front of you. You wait for them to finish their current task, check their inbox, and read your note.</li>
        <li><strong><code>asio::dispatch</code></strong> is like just talking to the waiter directly if they're already there. If they're busy elsewhere, <em>then</em> you leave a note.</li>
    </ul>
    <p>The problem? We were already on the strand thread (the waiter was right there), but we were leaving notes for ourselves in our own inbox. Then we'd wait for ourselves to check that inbox... but we were busy waiting! <strong>Classic deadlock.</strong></p>
    <p>The Fix: Changed all immediate callback returns to use <code>asio::dispatch</code>:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
// When we have a result immediately available
if (extensions.empty()) {
  asio::dispatch(strand, [callback]() {
    callback(ErrorOr<bool>(true));  // Executes immediately if on strand
  });
  return;
}
    </code></pre>
    <p>This simple change eliminated the strand recursion deadlock. If we're already on the strand, the callback executes immediately. If we're on a different thread, it gets queued properly.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 3: The Promise That Couldn't Be Kept</h3>
    <p>Even with the strand issues fixed, there was one final boss battle: <code>ApplicationStart</code> still hung when called from Flutter, though it worked perfectly in native tests. The investigation revealed the most insidious bug of all.</p>

    <h4>The Fourth Discovery: Blocking the Blocker</h4>
    <p>The <code>ApplicationStart</code> function was using a <code>std::promise / std::future</code> pattern - a synchronous blocking pattern. In native code, this worked fine because it was called from the main thread. But in Flutter, the call came through the strand via <code>asio::dispatch</code>:</p>
    <ol>
        <li>Flutter code dispatches to strand.</li>
        <li>Strand thread calls <code>ApplicationStart</code>.</li>
        <li>Strand thread <strong>blocks</strong> at <code>future.get()</code>.</li>
        <li>Async callback tries to set promise... but needs the strand.</li>
        <li>Strand is blocked waiting for itself.</li>
        <li><strong>Eternal deadlock 💀</strong></li>
    </ol>
    <p>It's like asking someone to text you their phone number while you're talking to them on the phone. They can't text you because they're using their phone to talk to you. You won't hang up until they text you. They can't text you until you hang up. Nobody wins.</p>

    <h4>The Solution: Embracing True Asynchrony</h4>
    <p>The fix required a fundamental shift in thinking - from synchronous blocking to fully asynchronous callbacks:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
// Before (Synchronous):
ErrorOr<bool> ApplicationStart(...) {
  std::promise<ErrorOr<bool>> promise;
  auto future = promise.get_future();
  
  check_runtime(..., [&promise](result) {
    promise.set_value(result);
  });
  
  return future.get();  // Blocks here!
}

// After (Asynchronous):
void ApplicationStart(..., std::function<void(ErrorOr<bool>)> callback) {
  check_runtime(..., [callback](result) {
    // Chain continues without blocking
    create_sandbox(..., [callback](sandbox_result) {
      // Launch app and call final callback
      callback(final_result);
    });
  });
  // Returns immediately, no blocking!
}
    </code></pre>
    <p>This transformation meant rewriting the entire <code>ApplicationStart</code> flow to use callback chains instead of blocking on futures. It's more code, but it's fundamentally more correct for an async environment.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 4: The Event Stream Flows</h3>
    <p>With all these fixes in place, the EventChannel implementation needed proper thread safety. The Flatpak transaction callbacks come from GLib's thread, but they need to safely communicate with Flutter's messenger.</p>

    <h4>The Fifth Discovery: Every Thread Has Its Place</h4>
    <p>The pattern that emerged was beautifully simple:</p>
    <ul>
        <li><strong>GLib callbacks:</strong> Capture data, then immediately post to strand.</li>
        <li><strong>Strand thread:</strong> Safe to call Flutter messenger, send events.</li>
        <li><strong>Flutter side:</strong> Receives events on its own thread through EventChannel.</li>
    </ul>
    <p>The Implementation:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
void OnProgressChanged(GstProgress* progress, gpointer user_data) {
  // We're on GLIB thread - capture data quickly
  auto percentage = get_progress(progress);
  auto status = get_status(progress);
  
  // Post to strand for Flutter messenger access
  asio::post(*handler->strand_, [handler, percentage, status]() {
    // Now on strand - safe to send to Flutter
    flutter::EncodableMap event;
    event["type"] = "progress";
    event["percentage"] = percentage;
    event["status"] = status;
    
    handler->SendTransactionEvent(event);
  });
}
    </code></pre>

    <h4>The Transformation: Before and After</h4>
    <p><strong>Before: Radio Silence</strong></p>
    <ul>
        <li>[Plugin starts]</li>
        <li>[EventChannel created... but no one home]</li>
        <li>[Events sent to null sink]</li>
        <li>[Flutter waits forever]</li>
        <li>[User sees nothing]</li>
    </ul>
    <p><strong>After: Full Communication</strong></p>
    <ul>
        <li>[Plugin starts]</li>
        <li>[GLIB main loop running]</li>
        <li>[Init() sets up EventChannel]</li>
        <li>[Flutter subscribes]</li>
        <li>[Event sink connected!]</li>
        <li>[Install starts]</li>
        <li>  → "operation_started" event → Flutter updates UI</li>
        <li>  → "progress: 25%" event → Flutter shows progress bar</li>
        <li>  → "progress: 50%" event → Flutter updates progress</li>
        <li>  → "progress: 100%" event → Flutter shows completion</li>
        <li>  → "operation_complete" event → Flutter navigates to success</li>
        <li>[User sees everything in real-time]</li>
    </ul>

    <hr style="margin: 32px 0;">

    <h3>The Lessons Learned</h3>
    <ol>
        <li><strong>Respect Library Lifecycles:</strong> GLib-based libraries need their event loops running. Always initialize the main loop first, before anything else.</li>
        <li><strong>Initialization Order Matters:</strong> Flutter's infrastructure needs to be ready before you try to use it. Split initialization into <code>constructor</code> (structure) and <code>Init()</code> (connections).</li>
        <li><strong>Know Your Threading Model:</strong> <code>asio::post</code> = always queue (good for cross-thread). <code>asio::dispatch</code> = execute now if possible (good for same-thread). Choose wrong, get deadlock.</li>
        <li><strong>Never Block the Event Loop:</strong> If your function is called from an event loop thread (strand, GLIB main loop, etc.), it must NEVER block that thread. Use callbacks, not blocking operations.</li>
        <li><strong>Synchronous and Asynchronous Don't Mix:</strong> <code>std::promise/std::future</code> is a synchronous blocking pattern. It has no place in code running on event loop threads. Embrace callbacks fully or suffer deadlocks.</li>
    </ol>
    
    <hr style="margin: 32px 0;">

    <h3>Chapter 5: A New Face for the Appstore</h3>
    <p>While I was deep in the C++ trenches, I also took the time to completely overhaul the Flutter front-end. The old UI was functional, but now it's powered by a proper <strong>BLoC (Business Logic Component)</strong> state management architecture.</p>
    <p>This means the UI is now fully decoupled from the business logic. It reacts to states (like <code>Loading</code>, <code>Success</code>, <code>InProgress</code>, <code>Error</code>) emitted by the BLoCs, which are, in turn, fed by the real-time events from our newly-fixed plugin. This makes the entire application more robust, testable, and easier to maintain—a perfect front-end for a now bulletproof back-end.</p>
    
    <h3>Conclusion: From Broken to Bulletproof</h3>
    <p>What started as a simple "events not working" bug revealed a cascade of deeper issues: missing GLIB initialization, incorrect setup timing, strand recursion, and synchronous patterns in async contexts. Each fix built upon the previous one, transforming a plugin that couldn't send a single event into one that reliably streams real-time progress updates.</p>
    <p>The journey taught an important lesson: in async programming, especially with multiple threading models (Flutter's isolates, ASIO's strands, GLib's main loop), <strong>how you structure your code is just as important as what your code does</strong>. Get the threading wrong, and even perfect logic will deadlock. Get it right, and complex multi-threaded operations become surprisingly manageable.</p>
  `,readTime:"12 min read",slug:"week-22"},oc=[eb,tb,nb,rb,ib,ob,ab,sb,lb,cb,db,ub,pb,hb,fb,gb,mb,yb,vb,xb,bb,wb];function kb(n){return oc.find(i=>i.week===n)}function Cb(n){return kb(n)}function Qf(){const n=[...oc],i=Math.max(...oc.map(o=>o.week),0);for(let o=1;o<=Math.max(22,i);o++)n.some(s=>s.week===o)||n.push({week:o,title:`Week ${o} Development Update`,date:new Date(2025,5+Math.floor((o-1)/4),1+(o-1)*7%28).toLocaleDateString("en-US",{month:"long",year:"numeric"}),author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","In Progress"],published:!1,excerpt:`This post for Week ${o} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.`,content:`<p>This post for Week ${o} is coming soon! Check back later for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,readTime:"Coming soon",slug:`week-${o}`});return n.sort((o,s)=>s.week-o.week)}const Sb=()=>{const n=Qf();return p.jsx("section",{id:"blog",className:"py-20 lg:py-32",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Google Summer of Code 2025 Journey"}),p.jsx("h3",{className:"text-2xl lg:text-3xl font-serif font-semibold mb-6 text-foreground",children:"Building an App Store for Automotive Grade Linux"}),p.jsx("p",{className:"text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",children:"This 22-week series documents my experience as a contributor to the Automotive Grade Linux (AGL) project during Google Summer of Code 2025. I am developing a secure, user-friendly Flatpak App Store for embedded Linux In-Vehicle Infotainment (IVI) systems, mentored by experts from The Linux Foundation."})]}),p.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map(i=>p.jsx(xn,{to:`/blog/${i.slug}`,className:`block ${i.published?"":"pointer-events-none"}`,children:p.jsx(eo,{className:`group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${i.published?"":"opacity-70"}`,children:p.jsxs(to,{className:"p-6",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsxs(st,{variant:"secondary",className:"bg-primary/20 text-primary border-primary/30",children:["Week ",i.week]}),p.jsx(st,{variant:i.published?"default":"outline",className:i.published?"bg-green-500/20 text-green-400 border-green-500/30":"border-muted-foreground/30 text-muted-foreground",children:i.published?"Published":"Coming Soon"})]}),p.jsx("h3",{className:"text-lg font-serif font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300",children:i.title}),p.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-4",children:i.excerpt}),p.jsxs("div",{className:"flex items-center text-xs text-muted-foreground mb-4 space-x-4",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx(jh,{size:12,className:"mr-1"}),p.jsx("span",{children:i.date})]}),p.jsxs("div",{className:"flex items-center",children:[p.jsx(Fh,{size:12,className:"mr-1"}),p.jsx("span",{children:i.readTime})]})]}),p.jsxs("div",{className:"flex items-center text-sm text-primary",children:[p.jsx("span",{className:`${i.published?"group-hover:underline":"text-muted-foreground"}`,children:i.published?"Read More":"Stay Tuned"}),i.published&&p.jsx("span",{className:"ml-2 transform transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})]})})},i.week))}),p.jsx("div",{className:"text-center mt-12",children:p.jsxs("div",{className:"bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-2xl mx-auto",children:[p.jsx("h4",{className:"text-lg font-serif font-semibold mb-3 gradient-text",children:"Follow My GSoC Journey"}),p.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"New posts will be published weekly throughout the Google Summer of Code 2025 program. Each post will dive deep into the technical challenges, solutions, and insights gained while building this innovative app store for automotive systems."}),p.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[p.jsx(st,{variant:"outline",className:"border-primary/30 text-primary",children:"AGL Project"}),p.jsx(st,{variant:"outline",className:"border-primary/30 text-primary",children:"Flatpak"}),p.jsx(st,{variant:"outline",className:"border-primary/30 text-primary",children:"Embedded Linux"}),p.jsx(st,{variant:"outline",className:"border-primary/30 text-primary",children:"IVI Systems"})]})]})})]})})},Tb=()=>{const n=[{icon:p.jsx(_h,{className:"w-5 h-5"}),label:"Email",value:"ahmedadelwafdy782@gmail.com",href:"mailto:ahmedadelwafdy782@gmail.com"},{icon:p.jsx(u1,{className:"w-5 h-5"}),label:"Phone",value:"+201096514812",href:"tel:+201096514812"}],i=[{name:"LinkedIn",url:"https://www.linkedin.com/in/ahmed-wafdy-094567242/",icon:p.jsx(l1,{className:"w-6 h-6"})},{name:"GitHub",url:"https://github.com/AhmedAdelWafdy7",icon:p.jsx(ql,{className:"w-6 h-6"})}];return p.jsx("section",{id:"contact",className:"py-16 sm:py-20 lg:py-32 bg-muted/30",children:p.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[p.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 gradient-text",children:"Let's Connect"}),p.jsx("p",{className:"text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0",children:"Ready to discuss automotive software engineering opportunities? I'm always excited to explore new challenges and collaborate on innovative projects."}),p.jsx(eo,{className:"bg-card/50 backdrop-blur-sm border-border/50 mb-12",children:p.jsx(to,{className:"p-4 sm:p-6 lg:p-8",children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-8 items-center",children:[p.jsxs("div",{className:"text-left space-y-4 lg:space-y-6",children:[p.jsx("h3",{className:"text-xl sm:text-2xl font-serif font-semibold",children:"Get In Touch"}),p.jsx("p",{className:"text-sm sm:text-base text-muted-foreground",children:"Whether you have an exciting automotive software project, want to discuss embedded systems development, or explore collaboration opportunities, I'd love to hear from you."}),p.jsx("div",{className:"space-y-3 lg:space-y-4",children:n.map((o,s)=>p.jsxs("a",{href:o.href,className:"flex items-start sm:items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300",children:[p.jsx("div",{className:"text-primary mt-0.5 sm:mt-0 flex-shrink-0",children:o.icon}),p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center",children:[p.jsxs("span",{className:"text-primary font-medium",children:[o.label,":"]}),p.jsx("span",{className:"sm:ml-2 text-sm sm:text-base break-all",children:o.value})]})]},s))})]}),p.jsxs("div",{className:"space-y-3 lg:space-y-4 mt-6 lg:mt-0",children:[p.jsx(gr,{size:"lg",className:"w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift glow-effect text-sm sm:text-base",onClick:()=>window.open("mailto:ahmedadelwafdy782@gmail.com","_blank"),children:"Send Email"}),p.jsx(gr,{variant:"outline",size:"lg",className:"w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift text-sm sm:text-base",onClick:()=>window.open("https://www.linkedin.com/in/ahmed-wafdy-094567242/","_blank"),children:"Connect on LinkedIn"})]})]})})}),p.jsxs("div",{className:"space-y-4 lg:space-y-6",children:[p.jsx("h3",{className:"text-lg sm:text-xl font-serif font-semibold",children:"Connect With Me"}),p.jsx("div",{className:"flex justify-center gap-4 sm:gap-6",children:i.map(o=>p.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 sm:w-14 sm:h-14 bg-card hover:bg-primary border border-border hover:border-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift",title:o.name,children:p.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6",children:o.icon})},o.name))})]})]})})},Qa=()=>(new Date().getFullYear(),p.jsx("footer",{className:"border-t border-border bg-background",children:p.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 py-12",children:p.jsxs("div",{className:"grid md:grid-cols-3 gap-8 items-center",children:[p.jsxs("div",{className:"text-center md:text-left",children:[p.jsx("h3",{className:"text-2xl font-serif font-bold gradient-text mb-2",children:"Ahmed Adel Wafdy"}),p.jsx("p",{className:"text-muted-foreground text-sm",children:"Automotive Software Engineer specializing in embedded systems and Linux development."})]}),p.jsx("div",{className:"text-center",children:p.jsx("p",{className:"text-muted-foreground text-sm",children:"© 2025 Ahmed Adel Wafdy. All rights reserved."})}),p.jsx("div",{className:"text-center md:text-right",children:p.jsx("p",{className:"text-muted-foreground text-sm",children:"Built with React & Tailwind CSS"})})]})})})),Eb=()=>{const n=vr();return w.useEffect(()=>{n.pathname==="/blog"&&setTimeout(()=>{const i=document.getElementById("blog");i&&i.scrollIntoView({behavior:"smooth"})},100)},[n.pathname]),p.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[p.jsx(qa,{}),p.jsx(q2,{}),p.jsx(Q2,{}),p.jsx(Y2,{}),p.jsx(K2,{}),p.jsx(Z2,{}),p.jsx(Sb,{}),p.jsx(Tb,{}),p.jsx(Qa,{})]})},Jp=()=>{const{week:n}=x2(),o=(y=>y?y.startsWith("week-")?y.replace("week-",""):y:"1")(n),s=Cb(parseInt(o)),c=Qf(),u=s||{week:parseInt(o),title:`Week ${o} Development Update`,content:`<p>This post for Week ${o} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,date:"Coming Soon",readTime:"5 min read",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Development"],published:!1},h=u.week,f=c.find(y=>y.week<h&&y.published),m=c.find(y=>y.week>h&&y.published);return p.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[p.jsx(qa,{}),p.jsx("main",{className:"pt-20 lg:pt-24",children:p.jsxs("div",{className:"max-w-4xl mx-auto px-6 lg:px-8 py-12",children:[p.jsxs(xn,{to:"/#blog",className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group",children:[p.jsx(Ea,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),"Back to Blog"]}),p.jsxs("header",{className:"mb-12",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsxs(st,{variant:"secondary",className:"bg-primary/20 text-primary border-primary/30",children:["Week ",u.week]}),p.jsx(st,{variant:"outline",className:"border-primary/30 text-primary",children:"GSoC 2025"}),!u.published&&p.jsx(st,{variant:"outline",className:"border-yellow-500/30 text-yellow-500",children:"Coming Soon"})]}),p.jsx("h1",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text leading-tight",children:u.title}),p.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx(g1,{size:16,className:"mr-2"}),p.jsx("span",{children:u.author})]}),p.jsxs("div",{className:"flex items-center",children:[p.jsx(jh,{size:16,className:"mr-2"}),p.jsx("span",{children:u.date})]}),p.jsxs("div",{className:"flex items-center",children:[p.jsx(Fh,{size:16,className:"mr-2"}),p.jsx("span",{children:u.readTime})]})]}),p.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:u.tags.map(y=>p.jsx(st,{variant:"outline",className:"border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300",children:y},y))})]}),p.jsx("article",{className:"prose prose-lg prose-neutral dark:prose-invert max-w-none",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:u.content},className:"blog-content [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-foreground [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>li]:mb-2 [&>li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_em]:text-primary"})}),p.jsx("nav",{className:"mt-16 pt-8 border-t border-border",children:p.jsxs("div",{className:"flex justify-between items-center",children:[f?p.jsxs(xn,{to:`/blog/week-${f.week}`,className:"flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group",children:[p.jsx(Ea,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-xs uppercase tracking-wide",children:"Previous"}),p.jsxs("div",{className:"font-medium",children:["Week ",f.week]})]})]}):p.jsx("div",{}),m?p.jsxs(xn,{to:`/blog/week-${m.week}`,className:"flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 ml-auto group",children:[p.jsxs("div",{className:"text-right",children:[p.jsx("div",{className:"text-xs uppercase tracking-wide",children:"Next"}),p.jsxs("div",{className:"font-medium",children:["Week ",m.week]})]}),p.jsx(Ea,{size:20,className:"ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300"})]}):p.jsx("div",{})]})}),p.jsxs("div",{className:"mt-12 p-6 bg-muted/30 rounded-lg border border-border/50",children:[p.jsx("h3",{className:"text-lg font-semibold mb-4 text-foreground",children:"GSoC 2025 Blog Series"}),p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2",children:c.slice(0,22).map(y=>p.jsxs(xn,{to:`/blog/week-${y.week}`,className:`px-3 py-2 text-sm rounded border transition-colors duration-300 text-center ${y.week===u.week?"bg-primary text-primary-foreground border-primary":y.published?"border-border hover:border-primary hover:text-primary":"border-border/30 text-muted-foreground cursor-not-allowed"}`,children:["Week ",y.week]},y.week))})]})]})}),p.jsx(Qa,{})]})},Pb="/media/Mountain_summit_hero_image.png";function Ab({title:n,subtitle:i,date:o,author:s,metrics:c,onScrollToContent:u}){return p.jsxs("div",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${Pb})`}}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"}),p.jsx("div",{className:"relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center",children:p.jsxs("div",{className:"space-y-6",children:[p.jsx("div",{className:"text-sm font-medium uppercase tracking-wider text-white/80","data-testid":"text-date",children:o}),p.jsx("h1",{className:"text-5xl lg:text-7xl font-bold text-white leading-tight","data-testid":"text-title",children:n}),p.jsx("p",{className:"text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed","data-testid":"text-subtitle",children:i}),p.jsx("div",{className:"text-base text-white/70 font-medium","data-testid":"text-author",children:s}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto",children:c.map((h,f)=>p.jsxs("div",{className:"bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-6","data-testid":`metric-${f}`,children:[p.jsx("div",{className:"text-3xl font-bold text-white","data-testid":`metric-value-${f}`,children:h.value}),p.jsx("div",{className:"text-sm uppercase tracking-wide text-white/70 mt-1","data-testid":`metric-label-${f}`,children:h.label})]},f))}),u&&p.jsx("div",{className:"mt-16",children:p.jsxs(gr,{variant:"outline",size:"lg",onClick:u,className:"bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20","data-testid":"button-scroll-content",children:[p.jsx("span",{children:"Begin the Journey"}),p.jsx(Mh,{className:"ml-2 h-4 w-4"})]})})]})})]})}function Ib({sections:n,activeSection:i,onSectionClick:o}){return p.jsxs("nav",{className:"space-y-1","data-testid":"nav-journey",children:[p.jsx("div",{className:"text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 px-4",children:"Journey Map"}),n.map(s=>p.jsxs("button",{onClick:()=>o?.(s.id),className:tt("w-full text-left px-4 py-3 rounded-md transition-colors hover-elevate",i===s.id?"bg-primary/10 border-l-4 border-primary font-semibold text-foreground":"text-muted-foreground hover:text-foreground hover:bg-accent"),"data-testid":`nav-section-${s.id}`,children:[p.jsx("div",{className:"text-sm font-medium",children:s.title}),p.jsx("div",{className:"text-xs text-muted-foreground mt-1",children:s.weeks})]},s.id))]})}function Ca({id:n,title:i,subtitle:o,children:s,className:c=""}){return p.jsxs("section",{id:n,className:`scroll-mt-20 ${c}`,"data-testid":`section-${n}`,children:[p.jsxs("div",{className:"mb-8",children:[p.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-foreground mb-2","data-testid":`section-title-${n}`,children:i}),o&&p.jsx("p",{className:"text-lg text-muted-foreground","data-testid":`section-subtitle-${n}`,children:o})]}),p.jsx("div",{className:"prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6",children:s})]})}function Rb({type:n,number:i,title:o,repo:s,status:c,date:u,url:h,description:f}){const m={merged:"bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",open:"bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",closed:"bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"},y=c==="merged"?i1:n==="pr"?o1:t1;return p.jsx("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"block","data-testid":`contribution-card-${i}`,children:p.jsxs(eo,{className:"hover-elevate active-elevate-2 transition-shadow h-full",children:[p.jsxs(Vf,{className:"pb-3",children:[p.jsxs("div",{className:"flex items-start justify-between gap-2",children:[p.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[p.jsx(y,{className:"h-4 w-4 text-muted-foreground flex-shrink-0"}),p.jsxs($f,{className:"text-sm font-mono text-muted-foreground truncate",children:[s,"#",i]})]}),p.jsx(hc,{className:"h-3 w-3 text-muted-foreground flex-shrink-0"})]}),p.jsx(qf,{className:"text-base font-semibold text-foreground line-clamp-2",children:o})]}),p.jsxs(to,{children:[f&&p.jsx("p",{className:"text-sm text-muted-foreground mb-3 line-clamp-2",children:f}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(st,{variant:"outline",className:m[c],children:c.charAt(0).toUpperCase()+c.slice(1)}),u&&p.jsx("span",{className:"text-xs text-muted-foreground",children:u})]})]})]})})}function Nb({entries:n}){return p.jsx("div",{className:"space-y-6","data-testid":"community-timeline",children:n.map((i,o)=>p.jsxs("div",{className:"relative pl-8 pb-6 border-l-2 border-border last:border-transparent last:pb-0",children:[p.jsx("div",{className:"absolute left-0 top-0 -translate-x-1/2 bg-primary rounded-full p-2",children:p.jsx(_h,{className:"h-3 w-3 text-primary-foreground"})}),p.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"block group","data-testid":`timeline-entry-${o}`,children:p.jsxs("div",{className:"flex items-start justify-between gap-4",children:[p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h3",{className:"font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2",children:i.title}),p.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:i.date})]}),p.jsx(hc,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})})]},o))})}function hr({type:n,title:i,children:o}){const s={bug:e1,feature:v1,architecture:a1,insight:y1},c={bug:"border-l-destructive bg-destructive/5",feature:"border-l-chart-2 bg-chart-2/5",architecture:"border-l-chart-3 bg-chart-3/5",insight:"border-l-chart-4 bg-chart-4/5"},u=s[n];return p.jsx("div",{className:`border-l-4 ${c[n]} rounded-md p-6 my-8`,"data-testid":`callout-${n}`,children:p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"flex-shrink-0 mt-1",children:p.jsx(u,{className:"h-5 w-5"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h4",{className:"font-semibold text-foreground mb-2",children:i}),p.jsx("div",{className:"text-sm text-foreground/80 space-y-2",children:o})]})]})})}function Mb(){const[n,i]=w.useState("blueprint"),[o,s]=w.useState(!1);w.useEffect(()=>{const v=()=>{s(window.scrollY>1e3);const b=["blueprint","bricks","steam","battles"];for(const E of b){const x=document.getElementById(E);if(x){const I=x.getBoundingClientRect();if(I.top<=200&&I.bottom>=200){i(E);break}}}};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const c=v=>{const b=document.getElementById(v);if(b){const x=b.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:x-100,behavior:"smooth"})}},u=()=>{window.scrollTo({top:0,behavior:"smooth"})},h=()=>{const v=document.getElementById("content-start");v&&v.scrollIntoView({behavior:"smooth"})},f=[{id:"blueprint",title:"The Blueprint",weeks:"Weeks 1-3"},{id:"bricks",title:"First Bricks & Quicksand",weeks:"Weeks 4-15"},{id:"steam",title:"The Great Steam Saga",weeks:"Weeks 16-20"},{id:"battles",title:"The Final Battles",weeks:"Weeks 21-22"}],m=[{type:"issue",number:123,title:"[Feature] Add Flatpak remote management and installation support",repo:"ivi-homescreen-plugins",status:"open",date:"Jul 7, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123",description:"Proposal to add support for browsing, adding, removing, and installing applications from remote Flatpak repositories"},{type:"pr",number:124,title:"feat(common): Enhance CurlClient for generic HTTP requests",repo:"ivi-homescreen-plugins",status:"merged",date:"Jul 11, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/124",description:"Added Get/Post methods, Bearer auth, memory leak fixes, and proper URL encoding"},{type:"pr",number:131,title:"Add Curl Client Tests (Part of Feature #123)",repo:"ivi-homescreen-plugins",status:"merged",date:"Jul 25, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/131",description:"Comprehensive test suite for CurlClient functionality"},{type:"pr",number:141,title:"feat(flatpak): Add Application Installation/Uninstallation & Remote management",repo:"ivi-homescreen-plugins",status:"merged",date:"Aug 13, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141",description:"Improved caching infrastructure with SQLite, priority-based remote search, and batch processing"},{type:"pr",number:4,title:"Add flatpak flutter tests",repo:"flatpak_flutter",status:"merged",date:"Aug 7, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/4",description:"Comprehensive Dart test suite for Flutter plugin"},{type:"pr",number:5,title:"Add Example Flutter App for Flatpak Plugin",repo:"flatpak_flutter",status:"merged",date:"Aug 17, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/5",description:"Reference implementation demonstrating plugin usage"},{type:"pr",number:159,title:"feat(Flatpak): Extract rich metadata/appdata to serialize to UI",repo:"ivi-homescreen-plugins",status:"merged",date:"Aug 27, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/159",description:"Implemented AppStream metadata extraction for Flutter UI"},{type:"pr",number:6,title:"feat(example): Add UI with full metadata",repo:"flatpak_flutter",status:"merged",date:"Aug 27, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/6",description:"Enhanced example app with complete metadata display"},{type:"pr",number:7,title:"Add Provider State Management and Integrate native cache",repo:"flatpak_flutter",status:"merged",date:"Sep 14, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/7",description:"Implemented BLoC pattern for state management"},{type:"pr",number:165,title:"Integrate Cache to flutter",repo:"ivi-homescreen-plugins",status:"merged",date:"Sep 14, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/165",description:"Connected native cache to Flutter UI"},{type:"pr",number:8,title:"feat: Starting Applications",repo:"flatpak_flutter",status:"merged",date:"Oct 1, 2025",url:"https://github.com/meta-flutter/flatpak_flutter/pull/8",description:"Application lifecycle management implementation"},{type:"pr",number:173,title:"feat(flatpak): Start and Stop Flatpak applications",repo:"ivi-homescreen-plugins",status:"merged",date:"Oct 24, 2025",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/173",description:"D-Bus communication with xdg-desktop-portal, permission dialogs, and sdbus-cpp integration"},{type:"pr",number:58,title:"TCNA Packages Contribution",repo:"tcna-packages",status:"merged",url:"https://github.com/toyota-connected/tcna-packages/pull/58",description:"Package management contributions"},{type:"pr",number:61,title:"TCNA Packages Update",repo:"tcna-packages",status:"merged",url:"https://github.com/toyota-connected/tcna-packages/pull/61",description:"Additional package updates and fixes"},{type:"pr",number:189,title:"Final AGL App Store Plugin Updates",repo:"ivi-homescreen-plugins",status:"merged",url:"https://github.com/toyota-connected/ivi-homescreen-plugins/pull/189",description:"Final refinements and production readiness"}],y=[{title:"GSoC Week 1: Project Kickoff and Initial Design",date:"Week 1",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11534"},{title:"GSoC Week 2: Backend Architecture Planning",date:"Week 2",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11547"},{title:"GSoC Week 3: Major Pivot to flat-manager",date:"Week 3",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11559"},{title:"GSoC Week 4: Building Foundation Components",date:"Week 4",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11563"},{title:"GSoC Week 5: Deep Dive into libflatpak API",date:"Week 5",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11572"},{title:"GSoC Week 6-7: CurlClient Implementation",date:"Week 6-7",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11579"},{title:"GSoC Week 8-9: CacheManager Development",date:"Week 8-9",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11586"},{title:"GSoC Week 10: First Integration Tests",date:"Week 10",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11599"},{title:"GSoC Week 11-12: Remote Management APIs",date:"Week 11-12",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11606"},{title:"GSoC Week 13-14: Metadata Extraction",date:"Week 13-14",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11611"},{title:"GSoC Week 15: Testing Simple Apps",date:"Week 15",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11614"},{title:"GSoC Week 16: Steam Installation Attempt",date:"Week 16",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11618"},{title:"GSoC Week 17: Security Model Deep Dive",date:"Week 17",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11625"},{title:"GSoC Week 18: XDG Portals Implementation",date:"Week 18",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11629"},{title:"GSoC Week 19: Conditional Extensions Discovery",date:"Week 19",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11636"},{title:"GSoC Week 20: Steam Success!",date:"Week 20",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11645"},{title:"GSoC Week 21: Yocto/AGL Image Building",date:"Week 21",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11655"},{title:"GSoC Week 22: Threading Deadlock Debugging",date:"Week 22",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11659"},{title:"GSoC Final: Four Critical Bugs Fixed",date:"Final Week",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11665"},{title:"GSoC Completion: Async Architecture Rewrite",date:"Completion",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11668"},{title:"Post-GSoC: BLoC Integration",date:"Post-GSoC",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11678"},{title:"Final Status: Production Ready",date:"Final",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11683"},{title:"Project Reflection and Lessons Learned",date:"Retrospective",url:"https://lists.automotivelinux.org/g/agl-dev-community/message/11704"}];return p.jsxs("div",{className:"min-h-screen bg-background",children:[p.jsx(qa,{}),p.jsx(Ab,{title:"From Blueprint to Bulletproof",subtitle:"Looking back, it's amazing to see how far this project has come. What began as a set of blueprints and a vision for an in-car app store has evolved into a bulletproof, complex, and fully functional system. This is the story of how we built the AGL App Store.",date:"Google Summer of Code 2025",author:"The Linux Foundation • Automotive Grade Linux",metrics:[{label:"Duration",value:"22 Weeks"},{label:"Pull Requests",value:"16 PRs"},{label:"Status Updates",value:"23 Posts"}],onScrollToContent:h}),p.jsx("div",{id:"content-start",className:"max-w-7xl mx-auto px-6 lg:px-8 py-16",children:p.jsxs("div",{className:"lg:grid lg:grid-cols-[280px_1fr] lg:gap-12",children:[p.jsx("aside",{className:"hidden lg:block sticky top-20 self-start",children:p.jsx(Ib,{sections:f,activeSection:n,onSectionClick:c})}),p.jsxs("main",{className:"max-w-4xl",children:[p.jsxs(Ca,{id:"blueprint",title:"Part 1: The Blueprint",subtitle:"Weeks 1-3",children:[p.jsx("p",{children:"The project kicked off with a clear vision: a mobile-grade app store experience for Automotive Grade Linux. Week 1 was all about design. I lived in Figma, translating that vision into a tangible UI/UX. We established the dark theme, the AGL branding, and the responsive layouts—all backed by a clean Flutter BLoC architecture."}),p.jsx("p",{children:"Week 2 took me to the backend. The core problem was: how do we get app metadata? I started by building a high-performance C++ parser for AppStream files, focusing on zero-copy operations for the embedded world. I explored a custom userver backend, thinking we'd have to build everything from scratch."}),p.jsxs(hr,{type:"architecture",title:"Major Pivot Decision",children:[p.jsx("p",{children:"By Week 3, the true path became clear. The flat-manager (a Rust-based server) was already a solid, production-grade tool. The real challenge wasn't to replace it, but to build a C++ plugin for our Flutter homescreen that could talk to it."}),p.jsx("p",{children:"I scrapped the custom server idea and began designing the C++ HttpClient and a SQLite-based CacheManager that would live inside our plugin. The mission was set: bridge the gap between our Flutter UI and the flat-manager backend."})]})]}),p.jsxs(Ca,{id:"bricks",title:"Part 2: The First Bricks and a Hidden Quicksand",subtitle:"Weeks 4-15",className:"mt-20",children:[p.jsx("p",{children:'With a plan in place, it was time to build. This long "heads-down" period was all about laying the foundation.'}),p.jsx("p",{children:'In Week 5, I dived into the libflatpak API, designing the new components for our plugin: the http_client, cache_manager, and auth_manager. This was also my first look into the real complexity of Flatpak: the security model. I started researching BubbleWrap (the sandbox) and XDG Portals (the secure "gatekeeper" for permissions). This week also threw me my first major blocker: appstream-compose was broken in the build environment, and I had to manually upgrade flatpak-builder just to move forward.'}),p.jsx("p",{children:"Weeks 6-10 were a development montage. The main PR was opened, and I built the first version of the CurlClient and CacheManager. I implemented the first pass at Install, Uninstall, and Remote management, and successfully extracted all AppStream metadata for the Flutter UI. It felt like we were 90% of the way there. (Oh, how wrong I was.)"}),p.jsx("p",{children:"The next several weeks were a blur of testing and integration, where a terrifying new reality began to surface."})]}),p.jsxs(Ca,{id:"steam",title:"Part 3: The Great Steam Saga",subtitle:"Weeks 16-20",className:"mt-20",children:[p.jsx("p",{children:"The simple apps worked. But when I tried to install something complex, like Steam, the entire system fell apart. This kicked off a five-week deep-dive that would redefine the entire project."}),p.jsxs("p",{children:[p.jsx("strong",{children:"Week 16:"}),' I went back to the research from Week 5. I had to truly understand the security model. I learned to see BubbleWrap as the "fortress" and XDG Portals as the "secure gatekeepers."']}),p.jsxs("p",{children:[p.jsx("strong",{children:"Week 17:"})," I hit the permissions problem. My initial idea for dialogs was Zenity, but I realized it was a massive security hole that bypassed the sandbox. It became clear: XDG Portals weren't just an option; they were the only correct way."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Week 18:"})," Based on this, I started a major refactor. I planned to replace the old D-Bus library with sdbus-cpp and, crucially, architect a flow where the C++ backend could ask Flutter to show a permission dialog via an EventChannel, completely removing any GTK dependency."]}),p.jsxs(hr,{type:"bug",title:"Week 19: The Final Boss",children:[p.jsx("p",{children:'This was the climax. I installed Steam. The logs said "success." The app "launched." But it was silently broken, complaining about missing 32-bit components. This was the "final boss": Conditional Extensions.'}),p.jsx("p",{children:"Our logic was only installing the base runtime, not the .i386 compatibility layers or the .GL32 graphics drivers."})]}),p.jsxs(hr,{type:"insight",title:"Week 20: The Resolution",children:[p.jsx("p",{children:`I decoded Flatpak's "brain," learning why extensions are conditional. It checks your hardware (active-gl-driver, have-intel-gpu) before downloading anything.`}),p.jsx("p",{children:`I rewrote our entire installation logic using the libflatpak C++ API. The new flow lets libflatpak's "brain" evaluate the system and then adds all required extensions to a single, atomic transaction.`}),p.jsx("p",{children:"The reward? A demo video of Steam launching perfectly."})]})]}),p.jsxs(Ca,{id:"battles",title:"Part 4: The Final Battles",subtitle:"Weeks 21-22",className:"mt-20",children:[p.jsx("p",{children:'Week 21 was a victory lap. The "Great Steam Saga" PR was merged. All tests passed. The core functionality was, at long last, done. I immediately shifted focus to the next mountain: building the Yocto/AGL image and writing the recipes to get our plugin into the final OS build.'}),p.jsx("p",{children:"But one final boss remained."}),p.jsx("p",{children:`Week 22 was a "developer's tale" I'll never forget. The plugin was still buggy and unreliable. The EventChannel was silent. This kicked off one of the deepest debugging sessions of my life, where I untangled a web of threading deadlocks. I found and fixed four separate, insidious bugs:`}),p.jsxs("div",{className:"space-y-4 my-8",children:[p.jsx(hr,{type:"bug",title:"The Missing Power Socket",children:p.jsx("p",{children:"The GLib main loop was never initialized, so libflatpak's async callbacks were never processed."})}),p.jsx(hr,{type:"bug",title:"The Closed Post Office",children:p.jsx("p",{children:'The EventChannel was created before Flutter was ready to receive it, so our event "sink" was null.'})}),p.jsx(hr,{type:"bug",title:"The Strand Deadlock",children:p.jsx("p",{children:"I was using asio::post when I should have used asio::dispatch, causing the thread to wait for a task that was already in its own queue."})}),p.jsx(hr,{type:"bug",title:"The Asynchronous Deadlock",children:p.jsx("p",{children:"I was using a synchronous std::promise on an async thread, blocking the very thread that was supposed to fulfill the promise."})})]}),p.jsx("p",{children:"I rewrote the entire flow to be 100% asynchronous, using callback chains. I also rewrote the Flutter UI with BLoC to properly manage the new, event-driven state."}),p.jsx("p",{className:"text-lg font-semibold mt-8",children:"The 22-week journey was a transformation. It started as a UI/UX project and became a deep-dive into system architecture, security models, and the treacherous world of multi-threaded programming. The plugin that emerged wasn't just the simple one I designed in Week 3; it was a battle-hardened, thread-safe, and truly bulletproof system ready for production."})]}),p.jsxs("section",{className:"mt-24",children:[p.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-foreground mb-8",children:"Code Contributions"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:m.map((v,b)=>p.jsx(Rb,{...v},b))})]}),p.jsxs("section",{className:"mt-24",children:[p.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-foreground mb-8",children:"Community Engagement"}),p.jsx("p",{className:"text-muted-foreground mb-8",children:"Throughout the 22-week journey, I maintained active communication with the AGL community through weekly status updates on the mailing list."}),p.jsx(Nb,{entries:y})]}),p.jsx("section",{className:"mt-24 pt-12 border-t",children:p.jsxs("div",{className:"text-center",children:[p.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Thank You"}),p.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Special thanks to The Linux Foundation, the Automotive Grade Linux community, my mentors, and everyone who supported this journey. What started as blueprints became a production-ready system through collaboration, perseverance, and countless hours of debugging."})]})})]})]})}),o&&p.jsx(gr,{onClick:u,size:"icon",className:"fixed bottom-8 right-8 rounded-full shadow-lg","data-testid":"button-scroll-top",children:p.jsx(Z0,{className:"h-4 w-4"})}),p.jsx(Qa,{})]})}const jb=()=>{const n=vr();return w.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),p.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[p.jsx(qa,{}),p.jsx("main",{className:"pt-20 lg:pt-24 flex items-center justify-center min-h-[calc(100vh-200px)]",children:p.jsxs("div",{className:"text-center max-w-md mx-auto px-6",children:[p.jsx("div",{className:"text-8xl font-bold gradient-text mb-6",children:"404"}),p.jsx("h1",{className:"text-2xl font-bold mb-4 text-foreground",children:"Page Not Found"}),p.jsx("p",{className:"text-muted-foreground mb-8 leading-relaxed",children:"Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs(xn,{to:"/",className:"inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 group",children:[p.jsx(zh,{size:20,className:"mr-2 group-hover:scale-110 transition-transform duration-300"}),"Go Home"]}),p.jsxs("button",{onClick:()=>window.history.back(),className:"inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300 group",children:[p.jsx(Ea,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),"Go Back"]})]})]})}),p.jsx(Qa,{})]})},Fb=new Ux,zb=()=>p.jsx(Gx,{client:Fb,children:p.jsxs(yx,{children:[p.jsx(ey,{}),p.jsx(My,{}),p.jsx(W2,{children:p.jsxs(z2,{children:[p.jsx(qr,{path:"/",element:p.jsx(Eb,{})}),p.jsx(qr,{path:"/blog",element:p.jsx(Mb,{})}),p.jsx(qr,{path:"/blog/week-:week",element:p.jsx(Jp,{})}),p.jsx(qr,{path:"/blog/:week",element:p.jsx(Jp,{})}),p.jsx(qr,{path:"*",element:p.jsx(jb,{})})]})})]})});class _b extends w.Component{state={hasError:!1};static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,o){console.error("ErrorBoundary caught an error:",i,o),this.setState({error:i,errorInfo:o})}handleRefresh=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};render(){return this.state.hasError?p.jsx("div",{className:"min-h-screen bg-background text-foreground flex items-center justify-center p-6",children:p.jsxs("div",{className:"max-w-md w-full text-center space-y-6",children:[p.jsx("div",{className:"flex justify-center",children:p.jsx("div",{className:"w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center",children:p.jsx(f1,{className:"w-8 h-8 text-destructive"})})}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("h1",{className:"text-2xl font-bold text-foreground",children:"Something went wrong"}),p.jsx("p",{className:"text-muted-foreground",children:"We're sorry, but an unexpected error occurred. Please try refreshing the page or go back to the homepage."})]}),!1,p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs("button",{onClick:this.handleRefresh,className:"inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300",children:[p.jsx(Lh,{size:20,className:"mr-2"}),"Refresh Page"]}),p.jsxs("button",{onClick:this.handleGoHome,className:"inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300",children:[p.jsx(zh,{size:20,className:"mr-2"}),"Go Home"]})]})]})}):this.props.children}}Km.createRoot(document.getElementById("root")).render(p.jsx(_b,{children:p.jsx(zb,{})}));
