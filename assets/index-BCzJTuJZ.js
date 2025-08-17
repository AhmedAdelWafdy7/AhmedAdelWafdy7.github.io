var qm=Object.defineProperty;var jd=e=>{throw TypeError(e)};var Km=(e,t,r)=>t in e?qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var So=(e,t,r)=>Km(e,typeof t!="symbol"?t+"":t,r),bs=(e,t,r)=>t.has(e)||jd("Cannot "+r);var E=(e,t,r)=>(bs(e,t,"read from private field"),r?r.call(e):t.get(e)),J=(e,t,r)=>t.has(e)?jd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),$=(e,t,r,n)=>(bs(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Pe=(e,t,r)=>(bs(e,t,"access private method"),r);var To=(e,t,r,n)=>({set _(i){$(e,t,i,r)},get _(){return E(e,t,n)}});function Ym(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fp={exports:{}},Ua={},Op={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Xm=Symbol.for("react.portal"),Jm=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),e0=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),n0=Symbol.for("react.forward_ref"),i0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),_d=Symbol.iterator;function s0(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Up={};function si(e,t,r){this.props=e,this.context=t,this.refs=Up,this.updater=r||Dp}si.prototype.isReactComponent={};si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $p(){}$p.prototype=si.prototype;function dc(e,t,r){this.props=e,this.context=t,this.refs=Up,this.updater=r||Dp}var uc=dc.prototype=new $p;uc.constructor=dc;Bp(uc,si.prototype);uc.isPureReactComponent=!0;var zd=Array.isArray,Hp=Object.prototype.hasOwnProperty,pc={current:null},Wp={key:!0,ref:!0,__self:!0,__source:!0};function Gp(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Hp.call(t,n)&&!Wp.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:po,type:e,key:o,ref:a,props:i,_owner:pc.current}}function l0(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function c0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ld=/\/+/g;function ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c0(""+e.key):t.toString(36)}function qo(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case po:case Xm:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+ws(a,0):n,zd(i)?(r="",e!=null&&(r=e.replace(Ld,"$&/")+"/"),qo(i,t,r,"",function(c){return c})):i!=null&&(fc(i)&&(i=l0(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ld,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",zd(e))for(var s=0;s<e.length;s++){o=e[s];var l=n+ws(o,s);a+=qo(o,t,r,l,i)}else if(l=s0(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=n+ws(o,s++),a+=qo(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Eo(e,t,r){if(e==null)return e;var n=[],i=0;return qo(e,n,"","",function(o){return t.call(r,o,i++)}),n}function d0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ko={transition:null},u0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:pc};function Vp(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Eo,forEach:function(e,t,r){Eo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Eo(e,function(){t++}),t},toArray:function(e){return Eo(e,function(t){return t})||[]},only:function(e){if(!fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=si;q.Fragment=Jm;q.Profiler=e0;q.PureComponent=dc;q.StrictMode=Zm;q.Suspense=i0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;q.act=Vp;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Bp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Hp.call(t,l)&&!Wp.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:po,type:e.type,key:i,ref:o,props:n,_owner:a}};q.createContext=function(e){return e={$$typeof:r0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t0,_context:e},e.Consumer=e};q.createElement=Gp;q.createFactory=function(e){var t=Gp.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:n0,render:e}};q.isValidElement=fc;q.lazy=function(e){return{$$typeof:a0,_payload:{_status:-1,_result:e},_init:d0}};q.memo=function(e,t){return{$$typeof:o0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};q.unstable_act=Vp;q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};q.useContext=function(e){return Fe.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};q.useId=function(){return Fe.current.useId()};q.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};q.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};q.useRef=function(e){return Fe.current.useRef(e)};q.useState=function(e){return Fe.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return Fe.current.useTransition()};q.version="18.3.1";Op.exports=q;var x=Op.exports;const I=Lp(x),Qp=Ym({__proto__:null,default:I},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=x,f0=Symbol.for("react.element"),h0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,m0=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)g0.call(t,n)&&!y0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:f0,type:e,key:o,ref:a,props:i,_owner:m0.current}}Ua.Fragment=h0;Ua.jsx=qp;Ua.jsxs=qp;Fp.exports=Ua;var d=Fp.exports,Kp={exports:{}},et={},Yp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var z=P.length;P.push(A);e:for(;0<z;){var W=z-1>>>1,O=P[W];if(0<i(O,A))P[W]=A,P[z]=O,z=W;else break e}}function r(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var A=P[0],z=P.pop();if(z!==A){P[0]=z;e:for(var W=0,O=P.length,Q=O>>>1;W<Q;){var Y=2*(W+1)-1,ge=P[Y],Ee=Y+1,Z=P[Ee];if(0>i(ge,z))Ee<O&&0>i(Z,ge)?(P[W]=Z,P[Ee]=z,W=Ee):(P[W]=ge,P[Y]=z,W=Y);else if(Ee<O&&0>i(Z,z))P[W]=Z,P[Ee]=z,W=Ee;else break e}}return A}function i(P,A){var z=P.sortIndex-A.sortIndex;return z!==0?z:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,g=3,p=!1,w=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var A=r(c);A!==null;){if(A.callback===null)n(c);else if(A.startTime<=P)n(c),A.sortIndex=A.expirationTime,t(l,A);else break;A=r(c)}}function k(P){if(v=!1,y(P),!w)if(r(l)!==null)w=!0,B(C);else{var A=r(c);A!==null&&H(k,A.startTime-P)}}function C(P,A){w=!1,v&&(v=!1,m(R),R=-1),p=!0;var z=g;try{for(y(A),f=r(l);f!==null&&(!(f.expirationTime>A)||P&&!D());){var W=f.callback;if(typeof W=="function"){f.callback=null,g=f.priorityLevel;var O=W(f.expirationTime<=A);A=e.unstable_now(),typeof O=="function"?f.callback=O:f===r(l)&&n(l),y(A)}else n(l);f=r(l)}if(f!==null)var Q=!0;else{var Y=r(c);Y!==null&&H(k,Y.startTime-A),Q=!1}return Q}finally{f=null,g=z,p=!1}}var S=!1,T=null,R=-1,j=5,M=-1;function D(){return!(e.unstable_now()-M<j)}function F(){if(T!==null){var P=e.unstable_now();M=P;var A=!0;try{A=T(!0,P)}finally{A?V():(S=!1,T=null)}}else S=!1}var V;if(typeof h=="function")V=function(){h(F)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,K=_.port2;_.port1.onmessage=F,V=function(){K.postMessage(null)}}else V=function(){b(F,0)};function B(P){T=P,S||(S=!0,V())}function H(P,A){R=b(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,B(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var z=g;g=A;try{return P()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=g;g=P;try{return A()}finally{g=z}},e.unstable_scheduleCallback=function(P,A,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,P={id:u++,callback:A,priorityLevel:P,startTime:z,expirationTime:O,sortIndex:-1},z>W?(P.sortIndex=z,t(c,P),r(l)===null&&P===r(c)&&(v?(m(R),R=-1):v=!0,H(k,z-W))):(P.sortIndex=O,t(l,P),w||p||(w=!0,B(C))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var A=g;return function(){var z=g;g=A;try{return P.apply(this,arguments)}finally{g=z}}}})(Xp);Yp.exports=Xp;var v0=Yp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0=x,Ze=v0;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,Di={};function un(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Di[e]=t,e=0;e<t.length;e++)Jp.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},Od={};function w0(e){return tl.call(Od,e)?!0:tl.call(Fd,e)?!1:b0.test(e)?Od[e]=!0:(Fd[e]=!0,!1)}function k0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C0(e,t,r,n){if(t===null||typeof t>"u"||k0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hc,gc);Te[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hc,gc);Te[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hc,gc);Te[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mc(e,t,r,n){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C0(t,r,i,n)&&(r=null),n||i===null?w0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var er=x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),ef=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),tf=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=Dd&&e[Dd]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,ks;function Ti(e){if(ks===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var Cs=!1;function Ss(e,t){if(!e||Cs)return"";Cs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Cs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ti(e):""}function S0(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=Ss(e.type,!1),e;case 11:return e=Ss(e.type.render,!1),e;case 1:return e=Ss(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Sn:return"Portal";case rl:return"Profiler";case yc:return"StrictMode";case nl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ef:return(e.displayName||"Context")+".Consumer";case Zp:return(e._context.displayName||"Context")+".Provider";case vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function T0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E0(e){var t=rf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){e._valueTracker||(e._valueTracker=E0(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=rf(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var r=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bd(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Mr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function of(e,t){t=t.checked,t!=null&&mc(e,"checked",t,!1)}function sl(e,t){of(e,t);var r=Mr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,r):t.hasOwnProperty("defaultValue")&&ll(e,t.type,Mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ud(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ll(e,t,r){(t!=="number"||da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ei=Array.isArray;function Ln(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Mr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $d(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Ei(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Mr(r)}}function af(e,t){var r=Mr(t.value),n=Mr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Hd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ro,lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bi(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function cf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function df(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=cf(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var A0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Fn=null,On=null;function Wd(e){if(e=go(e)){if(typeof hl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Va(t),hl(e.stateNode,e.type,t))}}function uf(e){Fn?On?On.push(e):On=[e]:Fn=e}function pf(){if(Fn){var e=Fn,t=On;if(On=Fn=null,Wd(e),t)for(e=0;e<t.length;e++)Wd(t[e])}}function ff(e,t){return e(t)}function hf(){}var Ts=!1;function gf(e,t,r){if(Ts)return e(t,r);Ts=!0;try{return ff(e,t,r)}finally{Ts=!1,(Fn!==null||On!==null)&&(hf(),pf())}}function Ui(e,t){var r=e.stateNode;if(r===null)return null;var n=Va(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var gl=!1;if(qt)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){gl=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{gl=!1}function R0(e,t,r,n,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ni=!1,ua=null,pa=!1,ml=null,N0={onError:function(e){Ni=!0,ua=e}};function I0(e,t,r,n,i,o,a,s,l){Ni=!1,ua=null,R0.apply(N0,arguments)}function M0(e,t,r,n,i,o,a,s,l){if(I0.apply(this,arguments),Ni){if(Ni){var c=ua;Ni=!1,ua=null}else throw Error(N(198));pa||(pa=!0,ml=c)}}function pn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gd(e){if(pn(e)!==e)throw Error(N(188))}function j0(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Gd(i),e;if(o===n)return Gd(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function yf(e){return e=j0(e),e!==null?vf(e):null}function vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vf(e);if(t!==null)return t;e=e.sibling}return null}var xf=Ze.unstable_scheduleCallback,Vd=Ze.unstable_cancelCallback,_0=Ze.unstable_shouldYield,z0=Ze.unstable_requestPaint,he=Ze.unstable_now,L0=Ze.unstable_getCurrentPriorityLevel,wc=Ze.unstable_ImmediatePriority,bf=Ze.unstable_UserBlockingPriority,fa=Ze.unstable_NormalPriority,F0=Ze.unstable_LowPriority,wf=Ze.unstable_IdlePriority,$a=null,_t=null;function O0(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:U0,D0=Math.log,B0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(D0(e)/B0|0)|0}var No=64,Io=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=Pi(s):(o&=a,o!==0&&(n=Pi(o)))}else a=r&~i,a!==0?n=Pi(a):o!==0&&(n=Pi(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-wt(t),i=1<<r,n|=e[r],t&=~i;return n}function $0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-wt(o),s=1<<a,l=i[a];l===-1?(!(s&r)||s&n)&&(i[a]=$0(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function Es(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function fo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=r}function W0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-wt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function kc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-wt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ee=0;function Cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sf,Cc,Tf,Ef,Pf,vl=!1,Mo=[],Cr=null,Sr=null,Tr=null,$i=new Map,Hi=new Map,fr=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":$i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function yi(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=go(t),t!==null&&Cc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function V0(e,t,r,n,i){switch(t){case"focusin":return Cr=yi(Cr,e,t,r,n,i),!0;case"dragenter":return Sr=yi(Sr,e,t,r,n,i),!0;case"mouseover":return Tr=yi(Tr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return $i.set(o,yi($i.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Hi.set(o,yi(Hi.get(o)||null,e,t,r,n,i)),!0}return!1}function Af(e){var t=Qr(e.target);if(t!==null){var r=pn(t);if(r!==null){if(t=r.tag,t===13){if(t=mf(r),t!==null){e.blockedOn=t,Pf(e.priority,function(){Tf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);fl=n,r.target.dispatchEvent(n),fl=null}else return t=go(r),t!==null&&Cc(t),e.blockedOn=r,!1;t.shift()}return!0}function qd(e,t,r){Yo(e)&&r.delete(t)}function Q0(){vl=!1,Cr!==null&&Yo(Cr)&&(Cr=null),Sr!==null&&Yo(Sr)&&(Sr=null),Tr!==null&&Yo(Tr)&&(Tr=null),$i.forEach(qd),Hi.forEach(qd)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Q0)))}function Wi(e){function t(i){return vi(i,e)}if(0<Mo.length){vi(Mo[0],e);for(var r=1;r<Mo.length;r++){var n=Mo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Cr!==null&&vi(Cr,e),Sr!==null&&vi(Sr,e),Tr!==null&&vi(Tr,e),$i.forEach(t),Hi.forEach(t),r=0;r<fr.length;r++)n=fr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<fr.length&&(r=fr[0],r.blockedOn===null);)Af(r),r.blockedOn===null&&fr.shift()}var Dn=er.ReactCurrentBatchConfig,ga=!0;function q0(e,t,r,n){var i=ee,o=Dn.transition;Dn.transition=null;try{ee=1,Sc(e,t,r,n)}finally{ee=i,Dn.transition=o}}function K0(e,t,r,n){var i=ee,o=Dn.transition;Dn.transition=null;try{ee=4,Sc(e,t,r,n)}finally{ee=i,Dn.transition=o}}function Sc(e,t,r,n){if(ga){var i=xl(e,t,r,n);if(i===null)Ls(e,t,n,ma,r),Qd(e,n);else if(V0(i,e,t,r,n))n.stopPropagation();else if(Qd(e,n),t&4&&-1<G0.indexOf(e)){for(;i!==null;){var o=go(i);if(o!==null&&Sf(o),o=xl(e,t,r,n),o===null&&Ls(e,t,n,ma,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ls(e,t,n,null,r)}}var ma=null;function xl(e,t,r,n){if(ma=null,e=bc(n),e=Qr(e),e!==null)if(t=pn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=mf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case wc:return 1;case bf:return 4;case fa:case F0:return 16;case wf:return 536870912;default:return 16}default:return 16}}var br=null,Tc=null,Xo=null;function Nf(){if(Xo)return Xo;var e,t=Tc,r=t.length,n,i="value"in br?br.value:br.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Xo=i.slice(e,1<n?1-n:void 0)}function Jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Kd(){return!1}function tt(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jo:Kd,this.isPropagationStopped=Kd,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=tt(li),ho=de({},li,{view:0,detail:0}),Y0=tt(ho),Ps,As,xi,Ha=de({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Ps=e.screenX-xi.screenX,As=e.screenY-xi.screenY):As=Ps=0,xi=e),Ps)},movementY:function(e){return"movementY"in e?e.movementY:As}}),Yd=tt(Ha),X0=de({},Ha,{dataTransfer:0}),J0=tt(X0),Z0=de({},ho,{relatedTarget:0}),Rs=tt(Z0),e1=de({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=tt(e1),r1=de({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n1=tt(r1),i1=de({},li,{data:0}),Xd=tt(i1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s1[e])?!!t[e]:!1}function Pc(){return l1}var c1=de({},ho,{key:function(e){if(e.key){var t=o1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d1=tt(c1),u1=de({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=tt(u1),p1=de({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),f1=tt(p1),h1=de({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=tt(h1),m1=de({},Ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=tt(m1),v1=[9,13,27,32],Ac=qt&&"CompositionEvent"in window,Ii=null;qt&&"documentMode"in document&&(Ii=document.documentMode);var x1=qt&&"TextEvent"in window&&!Ii,If=qt&&(!Ac||Ii&&8<Ii&&11>=Ii),Zd=" ",eu=!1;function Mf(e,t){switch(e){case"keyup":return v1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function b1(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(eu=!0,Zd);case"textInput":return e=t.data,e===Zd&&eu?null:e;default:return null}}function w1(e,t){if(En)return e==="compositionend"||!Ac&&Mf(e,t)?(e=Nf(),Xo=Tc=br=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k1[e.type]:t==="textarea"}function _f(e,t,r,n){uf(n),t=ya(t,"onChange"),0<t.length&&(r=new Ec("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mi=null,Gi=null;function C1(e){Gf(e,0)}function Wa(e){var t=Rn(e);if(nf(t))return e}function S1(e,t){if(e==="change")return t}var zf=!1;if(qt){var Ns;if(qt){var Is="oninput"in document;if(!Is){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Is=typeof ru.oninput=="function"}Ns=Is}else Ns=!1;zf=Ns&&(!document.documentMode||9<document.documentMode)}function nu(){Mi&&(Mi.detachEvent("onpropertychange",Lf),Gi=Mi=null)}function Lf(e){if(e.propertyName==="value"&&Wa(Gi)){var t=[];_f(t,Gi,e,bc(e)),gf(C1,t)}}function T1(e,t,r){e==="focusin"?(nu(),Mi=t,Gi=r,Mi.attachEvent("onpropertychange",Lf)):e==="focusout"&&nu()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(Gi)}function P1(e,t){if(e==="click")return Wa(t)}function A1(e,t){if(e==="input"||e==="change")return Wa(t)}function R1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:R1;function Vi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!tl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var r=iu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=iu(r)}}function Ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(){for(var e=window,t=da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=da(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N1(e){var t=Of(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ff(r.ownerDocument.documentElement,r)){if(n!==null&&Rc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=ou(r,o);var a=ou(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I1=qt&&"documentMode"in document&&11>=document.documentMode,Pn=null,bl=null,ji=null,wl=!1;function au(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wl||Pn==null||Pn!==da(n)||(n=Pn,"selectionStart"in n&&Rc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ji&&Vi(ji,n)||(ji=n,n=ya(bl,"onSelect"),0<n.length&&(t=new Ec("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Pn)))}function _o(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var An={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ms={},Df={};qt&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Ga(e){if(Ms[e])return Ms[e];if(!An[e])return e;var t=An[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Df)return Ms[e]=t[r];return e}var Bf=Ga("animationend"),Uf=Ga("animationiteration"),$f=Ga("animationstart"),Hf=Ga("transitionend"),Wf=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Wf.set(e,t),un(t,[e])}for(var js=0;js<su.length;js++){var _s=su[js],M1=_s.toLowerCase(),j1=_s[0].toUpperCase()+_s.slice(1);Or(M1,"on"+j1)}Or(Bf,"onAnimationEnd");Or(Uf,"onAnimationIteration");Or($f,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Hf,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function lu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,M0(n,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;lu(i,s,c),o=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;lu(i,s,c),o=l}}}if(pa)throw e=ml,pa=!1,ml=null,e}function ie(e,t){var r=t[El];r===void 0&&(r=t[El]=new Set);var n=e+"__bubble";r.has(n)||(Vf(t,e,2,!1),r.add(n))}function zs(e,t,r){var n=0;t&&(n|=4),Vf(r,e,n,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[zo]){e[zo]=!0,Jp.forEach(function(r){r!=="selectionchange"&&(_1.has(r)||zs(r,!1,e),zs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,zs("selectionchange",!1,t))}}function Vf(e,t,r,n){switch(Rf(t)){case 1:var i=q0;break;case 4:i=K0;break;default:i=Sc}r=i.bind(null,t,r,e),i=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ls(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Qr(s),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}s=s.parentNode}}n=n.return}gf(function(){var c=o,u=bc(r),f=[];e:{var g=Wf.get(e);if(g!==void 0){var p=Ec,w=e;switch(e){case"keypress":if(Jo(r)===0)break e;case"keydown":case"keyup":p=d1;break;case"focusin":w="focus",p=Rs;break;case"focusout":w="blur",p=Rs;break;case"beforeblur":case"afterblur":p=Rs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=f1;break;case Bf:case Uf:case $f:p=t1;break;case Hf:p=g1;break;case"scroll":p=Y0;break;case"wheel":p=y1;break;case"copy":case"cut":case"paste":p=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jd}var v=(t&4)!==0,b=!v&&e==="scroll",m=v?g!==null?g+"Capture":null:g;v=[];for(var h=c,y;h!==null;){y=h;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,m!==null&&(k=Ui(h,m),k!=null&&v.push(qi(h,k,y)))),b)break;h=h.return}0<v.length&&(g=new p(g,w,null,r,u),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&r!==fl&&(w=r.relatedTarget||r.fromElement)&&(Qr(w)||w[Kt]))break e;if((p||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,p?(w=r.relatedTarget||r.toElement,p=c,w=w?Qr(w):null,w!==null&&(b=pn(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=c),p!==w)){if(v=Yd,k="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Jd,k="onPointerLeave",m="onPointerEnter",h="pointer"),b=p==null?g:Rn(p),y=w==null?g:Rn(w),g=new v(k,h+"leave",p,r,u),g.target=b,g.relatedTarget=y,k=null,Qr(u)===c&&(v=new v(m,h+"enter",w,r,u),v.target=y,v.relatedTarget=b,k=v),b=k,p&&w)t:{for(v=p,m=w,h=0,y=v;y;y=kn(y))h++;for(y=0,k=m;k;k=kn(k))y++;for(;0<h-y;)v=kn(v),h--;for(;0<y-h;)m=kn(m),y--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=kn(v),m=kn(m)}v=null}else v=null;p!==null&&cu(f,g,p,v,!1),w!==null&&b!==null&&cu(f,b,w,v,!0)}}e:{if(g=c?Rn(c):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var C=S1;else if(tu(g))if(zf)C=A1;else{C=E1;var S=T1}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=P1);if(C&&(C=C(e,c))){_f(f,C,r,u);break e}S&&S(e,g,c),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&ll(g,"number",g.value)}switch(S=c?Rn(c):window,e){case"focusin":(tu(S)||S.contentEditable==="true")&&(Pn=S,bl=c,ji=null);break;case"focusout":ji=bl=Pn=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,au(f,r,u);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":au(f,r,u)}var T;if(Ac)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else En?Mf(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(If&&r.locale!=="ko"&&(En||R!=="onCompositionStart"?R==="onCompositionEnd"&&En&&(T=Nf()):(br=u,Tc="value"in br?br.value:br.textContent,En=!0)),S=ya(c,R),0<S.length&&(R=new Xd(R,e,null,r,u),f.push({event:R,listeners:S}),T?R.data=T:(T=jf(r),T!==null&&(R.data=T)))),(T=x1?b1(e,r):w1(e,r))&&(c=ya(c,"onBeforeInput"),0<c.length&&(u=new Xd("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=T))}Gf(f,t)})}function qi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ya(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ui(e,r),o!=null&&n.unshift(qi(e,o,i)),o=Ui(e,t),o!=null&&n.push(qi(e,o,i))),e=e.return}return n}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&c!==null&&(s=c,i?(l=Ui(r,o),l!=null&&a.unshift(qi(r,l,s))):i||(l=Ui(r,o),l!=null&&a.push(qi(r,l,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var z1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(z1,`
`).replace(L1,"")}function Lo(e,t,r){if(t=du(t),du(e)!==t&&r)throw Error(N(425))}function va(){}var kl=null,Cl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(D1)}:Tl;function D1(e){setTimeout(function(){throw e})}function Fs(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Wi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Wi(t)}function Er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ci=Math.random().toString(36).slice(2),Mt="__reactFiber$"+ci,Ki="__reactProps$"+ci,Kt="__reactContainer$"+ci,El="__reactEvents$"+ci,B1="__reactListeners$"+ci,U1="__reactHandles$"+ci;function Qr(e){var t=e[Mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Kt]||r[Mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pu(e);e!==null;){if(r=e[Mt])return r;e=pu(e)}return t}e=r,r=e.parentNode}return null}function go(e){return e=e[Mt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Va(e){return e[Ki]||null}var Pl=[],Nn=-1;function Dr(e){return{current:e}}function oe(e){0>Nn||(e.current=Pl[Nn],Pl[Nn]=null,Nn--)}function re(e,t){Nn++,Pl[Nn]=e.current,e.current=t}var jr={},Me=Dr(jr),We=Dr(!1),on=jr;function Zn(e,t){var r=e.type.contextTypes;if(!r)return jr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function xa(){oe(We),oe(Me)}function fu(e,t,r){if(Me.current!==jr)throw Error(N(168));re(Me,t),re(We,r)}function Qf(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(N(108,T0(e)||"Unknown",i));return de({},r,n)}function ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,on=Me.current,re(Me,e),re(We,We.current),!0}function hu(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Qf(e,t,on),n.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(Me),re(Me,e)):oe(We),re(We,r)}var $t=null,Qa=!1,Os=!1;function qf(e){$t===null?$t=[e]:$t.push(e)}function $1(e){Qa=!0,qf(e)}function Br(){if(!Os&&$t!==null){Os=!0;var e=0,t=ee;try{var r=$t;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}$t=null,Qa=!1}catch(i){throw $t!==null&&($t=$t.slice(e+1)),xf(wc,Br),i}finally{ee=t,Os=!1}}return null}var In=[],Mn=0,wa=null,ka=0,it=[],ot=0,an=null,Wt=1,Gt="";function Gr(e,t){In[Mn++]=ka,In[Mn++]=wa,wa=e,ka=t}function Kf(e,t,r){it[ot++]=Wt,it[ot++]=Gt,it[ot++]=an,an=e;var n=Wt;e=Gt;var i=32-wt(n)-1;n&=~(1<<i),r+=1;var o=32-wt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Wt=1<<32-wt(t)+i|r<<i|n,Gt=o+e}else Wt=1<<o|r<<i|n,Gt=e}function Nc(e){e.return!==null&&(Gr(e,1),Kf(e,1,0))}function Ic(e){for(;e===wa;)wa=In[--Mn],In[Mn]=null,ka=In[--Mn],In[Mn]=null;for(;e===an;)an=it[--ot],it[ot]=null,Gt=it[--ot],it[ot]=null,Wt=it[--ot],it[ot]=null}var Xe=null,Ye=null,se=!1,bt=null;function Yf(e,t){var r=at(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function gu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=Er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=an!==null?{id:Wt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=at(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Xe=e,Ye=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(se){var t=Ye;if(t){var r=t;if(!gu(e,t)){if(Al(e))throw Error(N(418));t=Er(r.nextSibling);var n=Xe;t&&gu(e,t)?Yf(n,r):(e.flags=e.flags&-4097|2,se=!1,Xe=e)}}else{if(Al(e))throw Error(N(418));e.flags=e.flags&-4097|2,se=!1,Xe=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Fo(e){if(e!==Xe)return!1;if(!se)return mu(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=Ye)){if(Al(e))throw Xf(),Error(N(418));for(;t;)Yf(e,t),t=Er(t.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ye=Er(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?Er(e.stateNode.nextSibling):null;return!0}function Xf(){for(var e=Ye;e;)e=Er(e.nextSibling)}function ei(){Ye=Xe=null,se=!1}function Mc(e){bt===null?bt=[e]:bt.push(e)}var H1=er.ReactCurrentBatchConfig;function bi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Jf(e){function t(m,h){if(e){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function r(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function n(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Nr(m,h),m.index=0,m.sibling=null,m}function o(m,h,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,y,k){return h===null||h.tag!==6?(h=Gs(y,m.mode,k),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,k){var C=y.type;return C===Tn?u(m,h,y.props.children,k,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&yu(C)===h.type)?(k=i(h,y.props),k.ref=bi(m,h,y),k.return=m,k):(k=oa(y.type,y.key,y.props,null,m.mode,k),k.ref=bi(m,h,y),k.return=m,k)}function c(m,h,y,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Vs(y,m.mode,k),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function u(m,h,y,k,C){return h===null||h.tag!==7?(h=nn(y,m.mode,k,C),h.return=m,h):(h=i(h,y),h.return=m,h)}function f(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Gs(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Po:return y=oa(h.type,h.key,h.props,null,m.mode,y),y.ref=bi(m,null,h),y.return=m,y;case Sn:return h=Vs(h,m.mode,y),h.return=m,h;case ur:var k=h._init;return f(m,k(h._payload),y)}if(Ei(h)||gi(h))return h=nn(h,m.mode,y,null),h.return=m,h;Oo(m,h)}return null}function g(m,h,y,k){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:s(m,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return y.key===C?l(m,h,y,k):null;case Sn:return y.key===C?c(m,h,y,k):null;case ur:return C=y._init,g(m,h,C(y._payload),k)}if(Ei(y)||gi(y))return C!==null?null:u(m,h,y,k,null);Oo(m,y)}return null}function p(m,h,y,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(y)||null,s(h,m,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Po:return m=m.get(k.key===null?y:k.key)||null,l(h,m,k,C);case Sn:return m=m.get(k.key===null?y:k.key)||null,c(h,m,k,C);case ur:var S=k._init;return p(m,h,y,S(k._payload),C)}if(Ei(k)||gi(k))return m=m.get(y)||null,u(h,m,k,C,null);Oo(h,k)}return null}function w(m,h,y,k){for(var C=null,S=null,T=h,R=h=0,j=null;T!==null&&R<y.length;R++){T.index>R?(j=T,T=null):j=T.sibling;var M=g(m,T,y[R],k);if(M===null){T===null&&(T=j);break}e&&T&&M.alternate===null&&t(m,T),h=o(M,h,R),S===null?C=M:S.sibling=M,S=M,T=j}if(R===y.length)return r(m,T),se&&Gr(m,R),C;if(T===null){for(;R<y.length;R++)T=f(m,y[R],k),T!==null&&(h=o(T,h,R),S===null?C=T:S.sibling=T,S=T);return se&&Gr(m,R),C}for(T=n(m,T);R<y.length;R++)j=p(T,m,R,y[R],k),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?R:j.key),h=o(j,h,R),S===null?C=j:S.sibling=j,S=j);return e&&T.forEach(function(D){return t(m,D)}),se&&Gr(m,R),C}function v(m,h,y,k){var C=gi(y);if(typeof C!="function")throw Error(N(150));if(y=C.call(y),y==null)throw Error(N(151));for(var S=C=null,T=h,R=h=0,j=null,M=y.next();T!==null&&!M.done;R++,M=y.next()){T.index>R?(j=T,T=null):j=T.sibling;var D=g(m,T,M.value,k);if(D===null){T===null&&(T=j);break}e&&T&&D.alternate===null&&t(m,T),h=o(D,h,R),S===null?C=D:S.sibling=D,S=D,T=j}if(M.done)return r(m,T),se&&Gr(m,R),C;if(T===null){for(;!M.done;R++,M=y.next())M=f(m,M.value,k),M!==null&&(h=o(M,h,R),S===null?C=M:S.sibling=M,S=M);return se&&Gr(m,R),C}for(T=n(m,T);!M.done;R++,M=y.next())M=p(T,m,R,M.value,k),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?R:M.key),h=o(M,h,R),S===null?C=M:S.sibling=M,S=M);return e&&T.forEach(function(F){return t(m,F)}),se&&Gr(m,R),C}function b(m,h,y,k){if(typeof y=="object"&&y!==null&&y.type===Tn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:e:{for(var C=y.key,S=h;S!==null;){if(S.key===C){if(C=y.type,C===Tn){if(S.tag===7){r(m,S.sibling),h=i(S,y.props.children),h.return=m,m=h;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&yu(C)===S.type){r(m,S.sibling),h=i(S,y.props),h.ref=bi(m,S,y),h.return=m,m=h;break e}r(m,S);break}else t(m,S);S=S.sibling}y.type===Tn?(h=nn(y.props.children,m.mode,k,y.key),h.return=m,m=h):(k=oa(y.type,y.key,y.props,null,m.mode,k),k.ref=bi(m,h,y),k.return=m,m=k)}return a(m);case Sn:e:{for(S=y.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){r(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{r(m,h);break}else t(m,h);h=h.sibling}h=Vs(y,m.mode,k),h.return=m,m=h}return a(m);case ur:return S=y._init,b(m,h,S(y._payload),k)}if(Ei(y))return w(m,h,y,k);if(gi(y))return v(m,h,y,k);Oo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(r(m,h.sibling),h=i(h,y),h.return=m,m=h):(r(m,h),h=Gs(y,m.mode,k),h.return=m,m=h),a(m)):r(m,h)}return b}var ti=Jf(!0),Zf=Jf(!1),Ca=Dr(null),Sa=null,jn=null,jc=null;function _c(){jc=jn=Sa=null}function zc(e){var t=Ca.current;oe(Ca),e._currentValue=t}function Nl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Bn(e,t){Sa=e,jc=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(jc!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(Sa===null)throw Error(N(308));jn=e,Sa.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var qr=null;function Lc(e){qr===null?qr=[e]:qr.push(e)}function eh(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Lc(t)):(r.next=i.next,i.next=r),t.interleaved=r,Yt(e,n)}function Yt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pr=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Yt(e,r)}return i=n.interleaved,i===null?(t.next=t,Lc(n)):(t.next=i.next,i.next=t),n.interleaved=t,Yt(e,r)}function Zo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,kc(e,r)}}function vu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ta(e,t,r,n){var i=e.updateQueue;pr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=c=l=null,s=o;do{var g=s.lane,p=s.eventTime;if((n&g)===g){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,p=r,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(p,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(p,f,g):w,g==null)break e;f=de({},f,g);break e;case 2:pr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else p={eventTime:p,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ln|=a,e.lanes=a,e.memoizedState=f}}function xu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var mo={},zt=Dr(mo),Yi=Dr(mo),Xi=Dr(mo);function Kr(e){if(e===mo)throw Error(N(174));return e}function Oc(e,t){switch(re(Xi,t),re(Yi,e),re(zt,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}oe(zt),re(zt,t)}function ri(){oe(zt),oe(Yi),oe(Xi)}function rh(e){Kr(Xi.current);var t=Kr(zt.current),r=dl(t,e.type);t!==r&&(re(Yi,e),re(zt,r))}function Dc(e){Yi.current===e&&(oe(zt),oe(Yi))}var le=Dr(0);function Ea(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ds=[];function Bc(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var ea=er.ReactCurrentDispatcher,Bs=er.ReactCurrentBatchConfig,sn=0,ce=null,ve=null,we=null,Pa=!1,_i=!1,Ji=0,W1=0;function Ae(){throw Error(N(321))}function Uc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function $c(e,t,r,n,i,o){if(sn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ea.current=e===null||e.memoizedState===null?q1:K1,e=r(n,i),_i){o=0;do{if(_i=!1,Ji=0,25<=o)throw Error(N(301));o+=1,we=ve=null,t.updateQueue=null,ea.current=Y1,e=r(n,i)}while(_i)}if(ea.current=Aa,t=ve!==null&&ve.next!==null,sn=0,we=ve=ce=null,Pa=!1,t)throw Error(N(300));return e}function Hc(){var e=Ji!==0;return Ji=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function ct(){if(ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(N(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function Zi(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=ct(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=ve,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((sn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=n):l=l.next=f,ce.lanes|=u,ln|=u}c=c.next}while(c!==null&&c!==o);l===null?a=n:l.next=s,Ct(n,t.memoizedState)||(He=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,ln|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $s(e){var t=ct(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ct(o,t.memoizedState)||(He=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function nh(){}function ih(e,t){var r=ce,n=ct(),i=t(),o=!Ct(n.memoizedState,i);if(o&&(n.memoizedState=i,He=!0),n=n.queue,Wc(sh.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,eo(9,ah.bind(null,r,n,i,t),void 0,null),ke===null)throw Error(N(349));sn&30||oh(r,t,i)}return i}function oh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ah(e,t,r,n){t.value=r,t.getSnapshot=n,lh(t)&&ch(e)}function sh(e,t,r){return r(function(){lh(t)&&ch(e)})}function lh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function ch(e){var t=Yt(e,1);t!==null&&kt(t,e,1,-1)}function bu(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Q1.bind(null,ce,e),[t.memoizedState,e]}function eo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function dh(){return ct().memoizedState}function ta(e,t,r,n){var i=At();ce.flags|=e,i.memoizedState=eo(1|t,r,void 0,n===void 0?null:n)}function qa(e,t,r,n){var i=ct();n=n===void 0?null:n;var o=void 0;if(ve!==null){var a=ve.memoizedState;if(o=a.destroy,n!==null&&Uc(n,a.deps)){i.memoizedState=eo(t,r,o,n);return}}ce.flags|=e,i.memoizedState=eo(1|t,r,o,n)}function wu(e,t){return ta(8390656,8,e,t)}function Wc(e,t){return qa(2048,8,e,t)}function uh(e,t){return qa(4,2,e,t)}function ph(e,t){return qa(4,4,e,t)}function fh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hh(e,t,r){return r=r!=null?r.concat([e]):null,qa(4,4,fh.bind(null,t,e),r)}function Gc(){}function gh(e,t){var r=ct();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Uc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function mh(e,t){var r=ct();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Uc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function yh(e,t,r){return sn&21?(Ct(r,t)||(r=kf(),ce.lanes|=r,ln|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=r)}function G1(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=Bs.transition;Bs.transition={};try{e(!1),t()}finally{ee=r,Bs.transition=n}}function vh(){return ct().memoizedState}function V1(e,t,r){var n=Rr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},xh(e))bh(t,r);else if(r=eh(e,t,r,n),r!==null){var i=Le();kt(r,e,n,i),wh(r,t,n)}}function Q1(e,t,r){var n=Rr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(xh(e))bh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,Ct(s,a)){var l=t.interleaved;l===null?(i.next=i,Lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=eh(e,t,i,n),r!==null&&(i=Le(),kt(r,e,n,i),wh(r,t,n))}}function xh(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function bh(e,t){_i=Pa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function wh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,kc(e,r)}}var Aa={readContext:lt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},q1={readContext:lt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:wu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ta(4194308,4,fh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return ta(4,2,e,t)},useMemo:function(e,t){var r=At();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=At();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=V1.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:Gc,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=G1.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ce,i=At();if(se){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),ke===null)throw Error(N(349));sn&30||oh(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,wu(sh.bind(null,n,o,e),[e]),n.flags|=2048,eo(9,ah.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=At(),t=ke.identifierPrefix;if(se){var r=Gt,n=Wt;r=(n&~(1<<32-wt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ji++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=W1++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},K1={readContext:lt,useCallback:gh,useContext:lt,useEffect:Wc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:ph,useMemo:mh,useReducer:Us,useRef:dh,useState:function(){return Us(Zi)},useDebugValue:Gc,useDeferredValue:function(e){var t=ct();return yh(t,ve.memoizedState,e)},useTransition:function(){var e=Us(Zi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:nh,useSyncExternalStore:ih,useId:vh,unstable_isNewReconciler:!1},Y1={readContext:lt,useCallback:gh,useContext:lt,useEffect:Wc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:ph,useMemo:mh,useReducer:$s,useRef:dh,useState:function(){return $s(Zi)},useDebugValue:Gc,useDeferredValue:function(e){var t=ct();return ve===null?t.memoizedState=e:yh(t,ve.memoizedState,e)},useTransition:function(){var e=$s(Zi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:nh,useSyncExternalStore:ih,useId:vh,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Il(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:de({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ka={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Le(),i=Rr(e),o=Qt(n,i);o.payload=t,r!=null&&(o.callback=r),t=Pr(e,o,i),t!==null&&(kt(t,e,i,n),Zo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Le(),i=Rr(e),o=Qt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Pr(e,o,i),t!==null&&(kt(t,e,i,n),Zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Le(),n=Rr(e),i=Qt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Pr(e,i,n),t!==null&&(kt(t,e,n,r),Zo(t,e,n))}};function ku(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Vi(r,n)||!Vi(i,o):!0}function kh(e,t,r){var n=!1,i=jr,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Ge(t)?on:Me.current,n=t.contextTypes,o=(n=n!=null)?Zn(e,i):jr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function Ml(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Fc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Ge(t)?on:Me.current,i.context=Zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Il(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ka.enqueueReplaceState(i,i.state,null),Ta(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t){try{var r="",n=t;do r+=S0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var X1=typeof WeakMap=="function"?WeakMap:Map;function Ch(e,t,r){r=Qt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Na||(Na=!0,Hl=n),jl(e,t)},r}function Sh(e,t,r){r=Qt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){jl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){jl(e,t),typeof n!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Su(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new X1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=uy.bind(null,e,t,r),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Qt(-1,1),t.tag=2,Pr(r,t,1))),r.lanes|=1),e)}var J1=er.ReactCurrentOwner,He=!1;function _e(e,t,r,n){t.child=e===null?Zf(t,null,r,n):ti(t,e.child,r,n)}function Pu(e,t,r,n,i){r=r.render;var o=t.ref;return Bn(t,i),n=$c(e,t,r,n,o,i),r=Hc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(se&&r&&Nc(t),t.flags|=1,_e(e,t,n,i),t.child)}function Au(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Zc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Th(e,t,o,n,i)):(e=oa(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Vi,r(a,n)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=Nr(o,n),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return _l(e,t,r,n,i)}function Eh(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(zn,qe),qe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(zn,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,re(zn,qe),qe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,re(zn,qe),qe|=n;return _e(e,t,i,r),t.child}function Ph(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,r,n,i){var o=Ge(r)?on:Me.current;return o=Zn(t,o),Bn(t,i),r=$c(e,t,r,n,o,i),n=Hc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(se&&n&&Nc(t),t.flags|=1,_e(e,t,r,i),t.child)}function Ru(e,t,r,n,i){if(Ge(r)){var o=!0;ba(t)}else o=!1;if(Bn(t,i),t.stateNode===null)ra(e,t),kh(t,r,n),Ml(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Ge(r)?on:Me.current,c=Zn(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==c)&&Cu(t,a,n,c),pr=!1;var g=t.memoizedState;a.state=g,Ta(t,n,a,i),l=t.memoizedState,s!==n||g!==l||We.current||pr?(typeof u=="function"&&(Il(t,r,u,n),l=t.memoizedState),(s=pr||ku(t,r,s,n,g,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=c,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,th(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:gt(t.type,s),a.props=c,f=t.pendingProps,g=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Ge(r)?on:Me.current,l=Zn(t,l));var p=r.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||g!==l)&&Cu(t,a,n,l),pr=!1,g=t.memoizedState,a.state=g,Ta(t,n,a,i);var w=t.memoizedState;s!==f||g!==w||We.current||pr?(typeof p=="function"&&(Il(t,r,p,n),w=t.memoizedState),(c=pr||ku(t,r,c,n,g,w,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,w,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),a.props=n,a.state=w,a.context=l,n=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return zl(e,t,r,n,o,i)}function zl(e,t,r,n,i,o){Ph(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&hu(t,r,!1),Xt(e,t,o);n=t.stateNode,J1.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=ti(t,e.child,null,o),t.child=ti(t,null,s,o)):_e(e,t,s,o),t.memoizedState=n.state,i&&hu(t,r,!0),t.child}function Ah(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),Oc(e,t.containerInfo)}function Nu(e,t,r,n,i){return ei(),Mc(i),t.flags|=256,_e(e,t,r,n),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rh(e,t,r){var n=t.pendingProps,i=le.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(le,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ja(a,n,0,null),e=nn(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fl(r),t.memoizedState=Ll,e):Vc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Z1(e,t,a,n,s,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Nr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Nr(s,o):(o=nn(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Fl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Ll,n}return o=e.child,e=o.sibling,n=Nr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Vc(e,t){return t=Ja({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,r,n){return n!==null&&Mc(n),ti(t,e.child,null,r),e=Vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z1(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Hs(Error(N(422))),Do(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ja({mode:"visible",children:n.children},i,0,null),o=nn(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&ti(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Ll,o);if(!(t.mode&1))return Do(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(N(419)),n=Hs(o,n,void 0),Do(e,t,a,n)}if(s=(a&e.childLanes)!==0,He||s){if(n=ke,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),kt(n,e,i,-1))}return Jc(),n=Hs(Error(N(421))),Do(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=py.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=Er(i.nextSibling),Xe=t,se=!0,bt=null,e!==null&&(it[ot++]=Wt,it[ot++]=Gt,it[ot++]=an,Wt=e.id,Gt=e.overflow,an=t),t=Vc(t,n.children),t.flags|=4096,t)}function Iu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Nl(e.return,t,r)}function Ws(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Nh(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(_e(e,t,n.children,r),n=le.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,r,t);else if(e.tag===19)Iu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(re(le,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ea(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ws(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ea(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ws(t,!0,r,null,o);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=Nr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Nr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ey(e,t,r){switch(t.tag){case 3:Ah(t),ei();break;case 5:rh(t);break;case 1:Ge(t.type)&&ba(t);break;case 4:Oc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;re(Ca,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(re(le,le.current&1),t.flags|=128,null):r&t.child.childLanes?Rh(e,t,r):(re(le,le.current&1),e=Xt(e,t,r),e!==null?e.sibling:null);re(le,le.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Nh(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(le,le.current),n)break;return null;case 22:case 23:return t.lanes=0,Eh(e,t,r)}return Xt(e,t,r)}var Ih,Ol,Mh,jh;Ih=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ol=function(){};Mh=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Kr(zt.current);var o=null;switch(r){case"input":i=al(e,i),n=al(e,n),o=[];break;case"select":i=de({},i,{value:void 0}),n=de({},n,{value:void 0}),o=[];break;case"textarea":i=cl(e,i),n=cl(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=va)}ul(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Di.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var l=n[c];if(s=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Di.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ie("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};jh=function(e,t,r,n){r!==n&&(t.flags|=4)};function wi(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ty(e,t,r){var n=t.pendingProps;switch(Ic(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ge(t.type)&&xa(),Re(t),null;case 3:return n=t.stateNode,ri(),oe(We),oe(Me),Bc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Vl(bt),bt=null))),Ol(e,t),Re(t),null;case 5:Dc(t);var i=Kr(Xi.current);if(r=t.type,e!==null&&t.stateNode!=null)Mh(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return Re(t),null}if(e=Kr(zt.current),Fo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Mt]=t,n[Ki]=o,e=(t.mode&1)!==0,r){case"dialog":ie("cancel",n),ie("close",n);break;case"iframe":case"object":case"embed":ie("load",n);break;case"video":case"audio":for(i=0;i<Ai.length;i++)ie(Ai[i],n);break;case"source":ie("error",n);break;case"img":case"image":case"link":ie("error",n),ie("load",n);break;case"details":ie("toggle",n);break;case"input":Bd(n,o),ie("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ie("invalid",n);break;case"textarea":$d(n,o),ie("invalid",n)}ul(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Lo(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Lo(n.textContent,s,e),i=["children",""+s]):Di.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ie("scroll",n)}switch(r){case"input":Ao(n),Ud(n,o,!0);break;case"textarea":Ao(n),Hd(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=va)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Mt]=t,e[Ki]=n,Ih(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(r,n),r){case"dialog":ie("cancel",e),ie("close",e),i=n;break;case"iframe":case"object":case"embed":ie("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ai.length;i++)ie(Ai[i],e);i=n;break;case"source":ie("error",e),i=n;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=n;break;case"details":ie("toggle",e),i=n;break;case"input":Bd(e,n),i=al(e,n),ie("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=de({},n,{value:void 0}),ie("invalid",e);break;case"textarea":$d(e,n),i=cl(e,n),ie("invalid",e);break;default:i=n}ul(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?df(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Bi(e,l):typeof l=="number"&&Bi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Di.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ie("scroll",e):l!=null&&mc(e,o,l,a))}switch(r){case"input":Ao(e),Ud(e,n,!1);break;case"textarea":Ao(e),Hd(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Mr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Ln(e,!!n.multiple,o,!1):n.defaultValue!=null&&Ln(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=va)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)jh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Kr(Xi.current),Kr(zt.current),Fo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Mt]=t,(o=n.nodeValue!==r)&&(e=Xe,e!==null))switch(e.tag){case 3:Lo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Mt]=t,t.stateNode=n}return Re(t),null;case 13:if(oe(le),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ye!==null&&t.mode&1&&!(t.flags&128))Xf(),ei(),t.flags|=98560,o=!1;else if(o=Fo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Mt]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else bt!==null&&(Vl(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?be===0&&(be=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return ri(),Ol(e,t),e===null&&Qi(t.stateNode.containerInfo),Re(t),null;case 10:return zc(t.type._context),Re(t),null;case 17:return Ge(t.type)&&xa(),Re(t),null;case 19:if(oe(le),o=t.memoizedState,o===null)return Re(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)wi(o,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ea(e),a!==null){for(t.flags|=128,wi(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ii&&(t.flags|=128,n=!0,wi(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ea(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),wi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!se)return Re(t),null}else 2*he()-o.renderingStartTime>ii&&r!==1073741824&&(t.flags|=128,n=!0,wi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,r=le.current,re(le,n?r&1|2:r&1),t):(Re(t),null);case 22:case 23:return Xc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?qe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function ry(e,t){switch(Ic(t),t.tag){case 1:return Ge(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),oe(We),oe(Me),Bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dc(t),null;case 13:if(oe(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(le),null;case 4:return ri(),null;case 10:return zc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Bo=!1,Ie=!1,ny=typeof WeakSet=="function"?WeakSet:Set,L=null;function _n(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){pe(e,t,n)}else r.current=null}function Dl(e,t,r){try{r()}catch(n){pe(e,t,n)}}var Mu=!1;function iy(e,t){if(kl=ga,e=Of(),Rc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=e,g=null;t:for(;;){for(var p;f!==r||i!==0&&f.nodeType!==3||(s=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)g=f,f=p;for(;;){if(f===e)break t;if(g===r&&++c===i&&(s=a),g===o&&++u===n&&(l=a),(p=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=p}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cl={focusedElem:e,selectionRange:r},ga=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,b=w.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:gt(t.type,v),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Mu,Mu=!1,w}function zi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dl(t,r,o)}i=i.next}while(i!==n)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _h(e){var t=e.alternate;t!==null&&(e.alternate=null,_h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Ki],delete t[El],delete t[B1],delete t[U1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zh(e){return e.tag===5||e.tag===3||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=va));else if(n!==4&&(e=e.child,e!==null))for(Ul(e,t,r),e=e.sibling;e!==null;)Ul(e,t,r),e=e.sibling}function $l(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for($l(e,t,r),e=e.sibling;e!==null;)$l(e,t,r),e=e.sibling}var Ce=null,xt=!1;function sr(e,t,r){for(r=r.child;r!==null;)Lh(e,t,r),r=r.sibling}function Lh(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount($a,r)}catch{}switch(r.tag){case 5:Ie||_n(r,t);case 6:var n=Ce,i=xt;Ce=null,sr(e,t,r),Ce=n,xt=i,Ce!==null&&(xt?(e=Ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(xt?(e=Ce,r=r.stateNode,e.nodeType===8?Fs(e.parentNode,r):e.nodeType===1&&Fs(e,r),Wi(e)):Fs(Ce,r.stateNode));break;case 4:n=Ce,i=xt,Ce=r.stateNode.containerInfo,xt=!0,sr(e,t,r),Ce=n,xt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Dl(r,t,a),i=i.next}while(i!==n)}sr(e,t,r);break;case 1:if(!Ie&&(_n(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){pe(r,t,s)}sr(e,t,r);break;case 21:sr(e,t,r);break;case 22:r.mode&1?(Ie=(n=Ie)||r.memoizedState!==null,sr(e,t,r),Ie=n):sr(e,t,r);break;default:sr(e,t,r)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ny),t.forEach(function(n){var i=fy.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ft(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,xt=!1;break e;case 3:Ce=s.stateNode.containerInfo,xt=!0;break e;case 4:Ce=s.stateNode.containerInfo,xt=!0;break e}s=s.return}if(Ce===null)throw Error(N(160));Lh(o,a,i),Ce=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){pe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}function Fh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Pt(e),n&4){try{zi(3,e,e.return),Ya(3,e)}catch(v){pe(e,e.return,v)}try{zi(5,e,e.return)}catch(v){pe(e,e.return,v)}}break;case 1:ft(t,e),Pt(e),n&512&&r!==null&&_n(r,r.return);break;case 5:if(ft(t,e),Pt(e),n&512&&r!==null&&_n(r,r.return),e.flags&32){var i=e.stateNode;try{Bi(i,"")}catch(v){pe(e,e.return,v)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&of(i,o),pl(s,a);var c=pl(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?df(i,f):u==="dangerouslySetInnerHTML"?lf(i,f):u==="children"?Bi(i,f):mc(i,u,f,c)}switch(s){case"input":sl(i,o);break;case"textarea":af(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ln(i,!!o.multiple,p,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ki]=o}catch(v){pe(e,e.return,v)}}break;case 6:if(ft(t,e),Pt(e),n&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){pe(e,e.return,v)}}break;case 3:if(ft(t,e),Pt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(v){pe(e,e.return,v)}break;case 4:ft(t,e),Pt(e);break;case 13:ft(t,e),Pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kc=he())),n&4&&_u(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Ie=(c=Ie)||u,ft(t,e),Ie=c):ft(t,e),Pt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(L=e,u=e.child;u!==null;){for(f=L=u;L!==null;){switch(g=L,p=g.child,g.tag){case 0:case 11:case 14:case 15:zi(4,g,g.return);break;case 1:_n(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){pe(n,r,v)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){Lu(f);continue}}p!==null?(p.return=g,L=p):Lu(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cf("display",a))}catch(v){pe(e,e.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){pe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ft(t,e),Pt(e),n&4&&_u(e);break;case 21:break;default:ft(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(zh(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Bi(i,""),n.flags&=-33);var o=ju(e);$l(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=ju(e);Ul(e,s,a);break;default:throw Error(N(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oy(e,t,r){L=e,Oh(e)}function Oh(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Bo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ie;s=Bo;var c=Ie;if(Bo=a,(Ie=l)&&!c)for(L=i;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?Fu(i):l!==null?(l.return=a,L=l):Fu(i);for(;o!==null;)L=o,Oh(o),o=o.sibling;L=i,Bo=s,Ie=c}zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):zu(e)}}function zu(e){for(;L!==null;){var t=L;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ya(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ie)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:gt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xu(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xu(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ie||t.flags&512&&Bl(t)}catch(g){pe(t,t.return,g)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function Lu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function Fu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ya(4,t)}catch(l){pe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){pe(t,i,l)}}var o=t.return;try{Bl(t)}catch(l){pe(t,o,l)}break;case 5:var a=t.return;try{Bl(t)}catch(l){pe(t,a,l)}}}catch(l){pe(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var ay=Math.ceil,Ra=er.ReactCurrentDispatcher,Qc=er.ReactCurrentOwner,st=er.ReactCurrentBatchConfig,X=0,ke=null,me=null,Se=0,qe=0,zn=Dr(0),be=0,to=null,ln=0,Xa=0,qc=0,Li=null,Ue=null,Kc=0,ii=1/0,Ut=null,Na=!1,Hl=null,Ar=null,Uo=!1,wr=null,Ia=0,Fi=0,Wl=null,na=-1,ia=0;function Le(){return X&6?he():na!==-1?na:na=he()}function Rr(e){return e.mode&1?X&2&&Se!==0?Se&-Se:H1.transition!==null?(ia===0&&(ia=kf()),ia):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function kt(e,t,r,n){if(50<Fi)throw Fi=0,Wl=null,Error(N(185));fo(e,r,n),(!(X&2)||e!==ke)&&(e===ke&&(!(X&2)&&(Xa|=r),be===4&&hr(e,Se)),Ve(e,n),r===1&&X===0&&!(t.mode&1)&&(ii=he()+500,Qa&&Br()))}function Ve(e,t){var r=e.callbackNode;H0(e,t);var n=ha(e,e===ke?Se:0);if(n===0)r!==null&&Vd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Vd(r),t===1)e.tag===0?$1(Ou.bind(null,e)):qf(Ou.bind(null,e)),O1(function(){!(X&6)&&Br()}),r=null;else{switch(Cf(n)){case 1:r=wc;break;case 4:r=bf;break;case 16:r=fa;break;case 536870912:r=wf;break;default:r=fa}r=Vh(r,Dh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Dh(e,t){if(na=-1,ia=0,X&6)throw Error(N(327));var r=e.callbackNode;if(Un()&&e.callbackNode!==r)return null;var n=ha(e,e===ke?Se:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ma(e,n);else{t=n;var i=X;X|=2;var o=Uh();(ke!==e||Se!==t)&&(Ut=null,ii=he()+500,rn(e,t));do try{cy();break}catch(s){Bh(e,s)}while(!0);_c(),Ra.current=o,X=i,me!==null?t=0:(ke=null,Se=0,t=be)}if(t!==0){if(t===2&&(i=yl(e),i!==0&&(n=i,t=Gl(e,i))),t===1)throw r=to,rn(e,0),hr(e,n),Ve(e,he()),r;if(t===6)hr(e,n);else{if(i=e.current.alternate,!(n&30)&&!sy(i)&&(t=Ma(e,n),t===2&&(o=yl(e),o!==0&&(n=o,t=Gl(e,o))),t===1))throw r=to,rn(e,0),hr(e,n),Ve(e,he()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Vr(e,Ue,Ut);break;case 3:if(hr(e,n),(n&130023424)===n&&(t=Kc+500-he(),10<t)){if(ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tl(Vr.bind(null,e,Ue,Ut),t);break}Vr(e,Ue,Ut);break;case 4:if(hr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-wt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=he()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ay(n/1960))-n,10<n){e.timeoutHandle=Tl(Vr.bind(null,e,Ue,Ut),n);break}Vr(e,Ue,Ut);break;case 5:Vr(e,Ue,Ut);break;default:throw Error(N(329))}}}return Ve(e,he()),e.callbackNode===r?Dh.bind(null,e):null}function Gl(e,t){var r=Li;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Ma(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&Vl(t)),e}function Vl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function sy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hr(e,t){for(t&=~qc,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wt(t),n=1<<r;e[r]=-1,t&=~n}}function Ou(e){if(X&6)throw Error(N(327));Un();var t=ha(e,0);if(!(t&1))return Ve(e,he()),null;var r=Ma(e,t);if(e.tag!==0&&r===2){var n=yl(e);n!==0&&(t=n,r=Gl(e,n))}if(r===1)throw r=to,rn(e,0),hr(e,t),Ve(e,he()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,Ue,Ut),Ve(e,he()),null}function Yc(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(ii=he()+500,Qa&&Br())}}function cn(e){wr!==null&&wr.tag===0&&!(X&6)&&Un();var t=X;X|=1;var r=st.transition,n=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=n,st.transition=r,X=t,!(X&6)&&Br()}}function Xc(){qe=zn.current,oe(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,F1(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(Ic(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xa();break;case 3:ri(),oe(We),oe(Me),Bc();break;case 5:Dc(n);break;case 4:ri();break;case 13:oe(le);break;case 19:oe(le);break;case 10:zc(n.type._context);break;case 22:case 23:Xc()}r=r.return}if(ke=e,me=e=Nr(e.current,null),Se=qe=t,be=0,to=null,qc=Xa=ln=0,Ue=Li=null,qr!==null){for(t=0;t<qr.length;t++)if(r=qr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}qr=null}return e}function Bh(e,t){do{var r=me;try{if(_c(),ea.current=Aa,Pa){for(var n=ce.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pa=!1}if(sn=0,we=ve=ce=null,_i=!1,Ji=0,Qc.current=null,r===null||r.return===null){be=1,to=t,me=null;break}e:{var o=e,a=r.return,s=r,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tu(a);if(p!==null){p.flags&=-257,Eu(p,a,s,o,t),p.mode&1&&Su(o,c,t),t=p,l=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){Su(o,c,t),Jc();break e}l=Error(N(426))}}else if(se&&s.mode&1){var b=Tu(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Eu(b,a,s,o,t),Mc(ni(l,s));break e}}o=l=ni(l,s),be!==4&&(be=2),Li===null?Li=[o]:Li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Ch(o,l,t);vu(o,m);break e;case 1:s=l;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ar===null||!Ar.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Sh(o,s,t);vu(o,k);break e}}o=o.return}while(o!==null)}Hh(r)}catch(C){t=C,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function Uh(){var e=Ra.current;return Ra.current=Aa,e===null?Aa:e}function Jc(){(be===0||be===3||be===2)&&(be=4),ke===null||!(ln&268435455)&&!(Xa&268435455)||hr(ke,Se)}function Ma(e,t){var r=X;X|=2;var n=Uh();(ke!==e||Se!==t)&&(Ut=null,rn(e,t));do try{ly();break}catch(i){Bh(e,i)}while(!0);if(_c(),X=r,Ra.current=n,me!==null)throw Error(N(261));return ke=null,Se=0,be}function ly(){for(;me!==null;)$h(me)}function cy(){for(;me!==null&&!_0();)$h(me)}function $h(e){var t=Gh(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Hh(e):me=t,Qc.current=null}function Hh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ry(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,me=null;return}}else if(r=ty(r,t,qe),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);be===0&&(be=5)}function Vr(e,t,r){var n=ee,i=st.transition;try{st.transition=null,ee=1,dy(e,t,r,n)}finally{st.transition=i,ee=n}return null}function dy(e,t,r,n){do Un();while(wr!==null);if(X&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(W0(e,o),e===ke&&(me=ke=null,Se=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Uo||(Uo=!0,Vh(fa,function(){return Un(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=st.transition,st.transition=null;var a=ee;ee=1;var s=X;X|=4,Qc.current=null,iy(e,r),Fh(r,e),N1(Cl),ga=!!kl,Cl=kl=null,e.current=r,oy(r),z0(),X=s,ee=a,st.transition=o}else e.current=r;if(Uo&&(Uo=!1,wr=e,Ia=i),o=e.pendingLanes,o===0&&(Ar=null),O0(r.stateNode),Ve(e,he()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=Hl,Hl=null,e;return Ia&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===Wl?Fi++:(Fi=0,Wl=e):Fi=0,Br(),null}function Un(){if(wr!==null){var e=Cf(Ia),t=st.transition,r=ee;try{if(st.transition=null,ee=16>e?16:e,wr===null)var n=!1;else{if(e=wr,wr=null,Ia=0,X&6)throw Error(N(331));var i=X;for(X|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(L=c;L!==null;){var u=L;switch(u.tag){case 0:case 11:case 15:zi(8,u,o)}var f=u.child;if(f!==null)f.return=u,L=f;else for(;L!==null;){u=L;var g=u.sibling,p=u.return;if(_h(u),u===c){L=null;break}if(g!==null){g.return=p,L=g;break}L=p}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,L=m;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){a=L;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,L=y;else e:for(a=h;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ya(9,s)}}catch(C){pe(s,s.return,C)}if(s===a){L=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,L=k;break e}L=s.return}}if(X=i,Br(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot($a,e)}catch{}n=!0}return n}finally{ee=r,st.transition=t}}return!1}function Du(e,t,r){t=ni(r,t),t=Ch(e,t,1),e=Pr(e,t,1),t=Le(),e!==null&&(fo(e,1,t),Ve(e,t))}function pe(e,t,r){if(e.tag===3)Du(e,e,r);else for(;t!==null;){if(t.tag===3){Du(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ar===null||!Ar.has(n))){e=ni(r,e),e=Sh(t,e,1),t=Pr(t,e,1),e=Le(),t!==null&&(fo(t,1,e),Ve(t,e));break}}t=t.return}}function uy(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(Se&r)===r&&(be===4||be===3&&(Se&130023424)===Se&&500>he()-Kc?rn(e,0):qc|=r),Ve(e,t)}function Wh(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var r=Le();e=Yt(e,t),e!==null&&(fo(e,t,r),Ve(e,r))}function py(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Wh(e,r)}function fy(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Wh(e,r)}var Gh;Gh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return He=!1,ey(e,t,r);He=!!(e.flags&131072)}else He=!1,se&&t.flags&1048576&&Kf(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ra(e,t),e=t.pendingProps;var i=Zn(t,Me.current);Bn(t,r),i=$c(null,t,n,e,i,r);var o=Hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(n)?(o=!0,ba(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fc(t),i.updater=Ka,t.stateNode=i,i._reactInternals=t,Ml(t,n,e,r),t=zl(null,t,n,!0,o,r)):(t.tag=0,se&&o&&Nc(t),_e(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ra(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=gy(n),e=gt(n,e),i){case 0:t=_l(null,t,n,e,r);break e;case 1:t=Ru(null,t,n,e,r);break e;case 11:t=Pu(null,t,n,e,r);break e;case 14:t=Au(null,t,n,gt(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:gt(n,i),_l(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:gt(n,i),Ru(e,t,n,i,r);case 3:e:{if(Ah(t),e===null)throw Error(N(387));n=t.pendingProps,o=t.memoizedState,i=o.element,th(e,t),Ta(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ni(Error(N(423)),t),t=Nu(e,t,n,r,i);break e}else if(n!==i){i=ni(Error(N(424)),t),t=Nu(e,t,n,r,i);break e}else for(Ye=Er(t.stateNode.containerInfo.firstChild),Xe=t,se=!0,bt=null,r=Zf(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ei(),n===i){t=Xt(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return rh(t),e===null&&Rl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Sl(n,i)?a=null:o!==null&&Sl(n,o)&&(t.flags|=32),Ph(e,t),_e(e,t,a,r),t.child;case 6:return e===null&&Rl(t),null;case 13:return Rh(e,t,r);case 4:return Oc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ti(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:gt(n,i),Pu(e,t,n,i,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,re(Ca,n._currentValue),n._currentValue=a,o!==null)if(Ct(o.value,a)){if(o.children===i.children&&!We.current){t=Xt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Qt(-1,r&-r),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Nl(o.return,r,t),s.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(N(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Nl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}_e(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Bn(t,r),i=lt(i),n=n(i),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,i=gt(n,t.pendingProps),i=gt(n.type,i),Au(e,t,n,i,r);case 15:return Th(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:gt(n,i),ra(e,t),t.tag=1,Ge(n)?(e=!0,ba(t)):e=!1,Bn(t,r),kh(t,n,i),Ml(t,n,i,r),zl(null,t,n,!0,e,r);case 19:return Nh(e,t,r);case 22:return Eh(e,t,r)}throw Error(N(156,t.tag))};function Vh(e,t){return xf(e,t)}function hy(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,r,n){return new hy(e,t,r,n)}function Zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return Zc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===xc)return 14}return 2}function Nr(e,t){var r=e.alternate;return r===null?(r=at(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function oa(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Zc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tn:return nn(r.children,i,o,t);case yc:a=8,i|=8;break;case rl:return e=at(12,r,t,i|2),e.elementType=rl,e.lanes=o,e;case nl:return e=at(13,r,t,i),e.elementType=nl,e.lanes=o,e;case il:return e=at(19,r,t,i),e.elementType=il,e.lanes=o,e;case tf:return Ja(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zp:a=10;break e;case ef:a=9;break e;case vc:a=11;break e;case xc:a=14;break e;case ur:a=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=at(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function nn(e,t,r,n){return e=at(7,e,n,t),e.lanes=r,e}function Ja(e,t,r,n){return e=at(22,e,n,t),e.elementType=tf,e.lanes=r,e.stateNode={isHidden:!1},e}function Gs(e,t,r){return e=at(6,e,null,t),e.lanes=r,e}function Vs(e,t,r){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function my(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ed(e,t,r,n,i,o,a,s,l){return e=new my(e,t,r,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(o),e}function yy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Qh(e){if(!e)return jr;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(Ge(r))return Qf(e,r,t)}return t}function qh(e,t,r,n,i,o,a,s,l){return e=ed(r,n,!0,e,i,o,a,s,l),e.context=Qh(null),r=e.current,n=Le(),i=Rr(r),o=Qt(n,i),o.callback=t??null,Pr(r,o,i),e.current.lanes=i,fo(e,i,n),Ve(e,n),e}function Za(e,t,r,n){var i=t.current,o=Le(),a=Rr(i);return r=Qh(r),t.context===null?t.context=r:t.pendingContext=r,t=Qt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Pr(i,t,a),e!==null&&(kt(e,i,a,o),Zo(e,i,a)),a}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function td(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function vy(){return null}var Kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function rd(e){this._internalRoot=e}es.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Za(e,t,null,null)};es.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Za(null,e,null,null)}),t[Kt]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ef();e={blockedOn:null,target:e,priority:t};for(var r=0;r<fr.length&&t!==0&&t<fr[r].priority;r++);fr.splice(r,0,e),r===0&&Af(e)}};function nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function xy(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=ja(a);o.call(c)}}var a=qh(t,n,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[Kt]=a.current,Qi(e.nodeType===8?e.parentNode:e),cn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var c=ja(l);s.call(c)}}var l=ed(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=l,e[Kt]=l.current,Qi(e.nodeType===8?e.parentNode:e),cn(function(){Za(t,l,r,n)}),l}function rs(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ja(a);s.call(l)}}Za(t,a,e,i)}else a=xy(r,t,e,i,n);return ja(a)}Sf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Pi(t.pendingLanes);r!==0&&(kc(t,r|1),Ve(t,he()),!(X&6)&&(ii=he()+500,Br()))}break;case 13:cn(function(){var n=Yt(e,1);if(n!==null){var i=Le();kt(n,e,1,i)}}),td(e,1)}};Cc=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var r=Le();kt(t,e,134217728,r)}td(e,134217728)}};Tf=function(e){if(e.tag===13){var t=Rr(e),r=Yt(e,t);if(r!==null){var n=Le();kt(r,e,t,n)}td(e,t)}};Ef=function(){return ee};Pf=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};hl=function(e,t,r){switch(t){case"input":if(sl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Va(n);if(!i)throw Error(N(90));nf(n),sl(n,i)}}}break;case"textarea":af(e,r);break;case"select":t=r.value,t!=null&&Ln(e,!!r.multiple,t,!1)}};ff=Yc;hf=cn;var by={usingClientEntryPoint:!1,Events:[go,Rn,Va,uf,pf,Yc]},ki={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yf(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{$a=$o.inject(wy),_t=$o}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(t))throw Error(N(200));return yy(e,t,null,r)};et.createRoot=function(e,t){if(!nd(e))throw Error(N(299));var r=!1,n="",i=Kh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ed(e,1,!1,null,null,r,!1,n,i),e[Kt]=t.current,Qi(e.nodeType===8?e.parentNode:e),new rd(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=yf(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return cn(e)};et.hydrate=function(e,t,r){if(!ts(t))throw Error(N(200));return rs(null,e,t,!0,r)};et.hydrateRoot=function(e,t,r){if(!nd(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=Kh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=qh(t,null,e,1,r??null,i,!1,o,a),e[Kt]=t.current,Qi(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new es(t)};et.render=function(e,t,r){if(!ts(t))throw Error(N(200));return rs(null,e,t,!1,r)};et.unmountComponentAtNode=function(e){if(!ts(e))throw Error(N(40));return e._reactRootContainer?(cn(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};et.unstable_batchedUpdates=Yc;et.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ts(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return rs(e,t,r,!1,n)};et.version="18.3.1-next-f1338f8080-20240426";function Yh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yh)}catch(e){console.error(e)}}Yh(),Kp.exports=et;var yo=Kp.exports;const Xh=Lp(yo);var Jh,$u=yo;Jh=$u.createRoot,$u.hydrateRoot;const ky=1,Cy=1e6;let Qs=0;function Sy(){return Qs=(Qs+1)%Number.MAX_SAFE_INTEGER,Qs.toString()}const qs=new Map,Hu=e=>{if(qs.has(e))return;const t=setTimeout(()=>{qs.delete(e),Oi({type:"REMOVE_TOAST",toastId:e})},Cy);qs.set(e,t)},Ty=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,ky)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=t;return r?Hu(r):e.toasts.forEach(n=>{Hu(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===r||r===void 0?{...n,open:!1}:n)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)}}},aa=[];let sa={toasts:[]};function Oi(e){sa=Ty(sa,e),aa.forEach(t=>{t(sa)})}function Ey({...e}){const t=Sy(),r=i=>Oi({type:"UPDATE_TOAST",toast:{...i,id:t}}),n=()=>Oi({type:"DISMISS_TOAST",toastId:t});return Oi({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||n()}}}),{id:t,dismiss:n,update:r}}function Py(){const[e,t]=x.useState(sa);return x.useEffect(()=>(aa.push(t),()=>{const r=aa.indexOf(t);r>-1&&aa.splice(r,1)}),[e]),{...e,toast:Ey,dismiss:r=>Oi({type:"DISMISS_TOAST",toastId:r})}}function xe(e,t,{checkForDefaultPrevented:r=!0}={}){return function(i){if(e==null||e(i),r===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Wu(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Zh(...e){return t=>{let r=!1;const n=e.map(i=>{const o=Wu(i,t);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let i=0;i<n.length;i++){const o=n[i];typeof o=="function"?o():Wu(e[i],null)}}}}function St(...e){return x.useCallback(Zh(...e),e)}function ns(e,t=[]){let r=[];function n(o,a){const s=x.createContext(a),l=r.length;r=[...r,a];const c=f=>{var m;const{scope:g,children:p,...w}=f,v=((m=g==null?void 0:g[e])==null?void 0:m[l])||s,b=x.useMemo(()=>w,Object.values(w));return d.jsx(v.Provider,{value:b,children:p})};c.displayName=o+"Provider";function u(f,g){var v;const p=((v=g==null?void 0:g[e])==null?void 0:v[l])||s,w=x.useContext(p);if(w)return w;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[c,u]}const i=()=>{const o=r.map(a=>x.createContext(a));return function(s){const l=(s==null?void 0:s[e])||o;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return i.scopeName=e,[n,Ay(i,...t)]}function Ay(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=n.reduce((s,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...s,...f}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}function _a(e){const t=Ny(e),r=x.forwardRef((n,i)=>{const{children:o,...a}=n,s=x.Children.toArray(o),l=s.find(My);if(l){const c=l.props.children,u=s.map(f=>f===l?x.Children.count(c)>1?x.Children.only(null):x.isValidElement(c)?c.props.children:null:f);return d.jsx(t,{...a,ref:i,children:x.isValidElement(c)?x.cloneElement(c,void 0,u):null})}return d.jsx(t,{...a,ref:i,children:o})});return r.displayName=`${e}.Slot`,r}var Ry=_a("Slot");function Ny(e){const t=x.forwardRef((r,n)=>{const{children:i,...o}=r;if(x.isValidElement(i)){const a=_y(i),s=jy(o,i.props);return i.type!==x.Fragment&&(s.ref=n?Zh(n,a):a),x.cloneElement(i,s)}return x.Children.count(i)>1?x.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var eg=Symbol("radix.slottable");function Iy(e){const t=({children:r})=>d.jsx(d.Fragment,{children:r});return t.displayName=`${e}.Slottable`,t.__radixId=eg,t}function My(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===eg}function jy(e,t){const r={...t};for(const n in t){const i=e[n],o=t[n];/^on[A-Z]/.test(n)?i&&o?r[n]=(...s)=>{const l=o(...s);return i(...s),l}:i&&(r[n]=i):n==="style"?r[n]={...i,...o}:n==="className"&&(r[n]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}function _y(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function zy(e){const t=e+"CollectionProvider",[r,n]=ns(t),[i,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:b,children:m}=v,h=I.useRef(null),y=I.useRef(new Map).current;return d.jsx(i,{scope:b,itemMap:y,collectionRef:h,children:m})};a.displayName=t;const s=e+"CollectionSlot",l=_a(s),c=I.forwardRef((v,b)=>{const{scope:m,children:h}=v,y=o(s,m),k=St(b,y.collectionRef);return d.jsx(l,{ref:k,children:h})});c.displayName=s;const u=e+"CollectionItemSlot",f="data-radix-collection-item",g=_a(u),p=I.forwardRef((v,b)=>{const{scope:m,children:h,...y}=v,k=I.useRef(null),C=St(b,k),S=o(u,m);return I.useEffect(()=>(S.itemMap.set(k,{ref:k,...y}),()=>void S.itemMap.delete(k))),d.jsx(g,{[f]:"",ref:C,children:h})});p.displayName=u;function w(v){const b=o(e+"CollectionConsumer",v);return I.useCallback(()=>{const h=b.collectionRef.current;if(!h)return[];const y=Array.from(h.querySelectorAll(`[${f}]`));return Array.from(b.itemMap.values()).sort((S,T)=>y.indexOf(S.ref.current)-y.indexOf(T.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:a,Slot:c,ItemSlot:p},w,n]}var Ly=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Qe=Ly.reduce((e,t)=>{const r=_a(`Primitive.${t}`),n=x.forwardRef((i,o)=>{const{asChild:a,...s}=i,l=a?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(l,{...s,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function tg(e,t){e&&yo.flushSync(()=>e.dispatchEvent(t))}function _r(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function Fy(e,t=globalThis==null?void 0:globalThis.document){const r=_r(e);x.useEffect(()=>{const n=i=>{i.key==="Escape"&&r(i)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[r,t])}var Oy="DismissableLayer",Ql="dismissableLayer.update",Dy="dismissableLayer.pointerDownOutside",By="dismissableLayer.focusOutside",Gu,rg=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),id=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:a,onDismiss:s,...l}=e,c=x.useContext(rg),[u,f]=x.useState(null),g=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=x.useState({}),w=St(t,T=>f(T)),v=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),m=v.indexOf(b),h=u?v.indexOf(u):-1,y=c.layersWithOutsidePointerEventsDisabled.size>0,k=h>=m,C=$y(T=>{const R=T.target,j=[...c.branches].some(M=>M.contains(R));!k||j||(i==null||i(T),a==null||a(T),T.defaultPrevented||s==null||s())},g),S=Hy(T=>{const R=T.target;[...c.branches].some(M=>M.contains(R))||(o==null||o(T),a==null||a(T),T.defaultPrevented||s==null||s())},g);return Fy(T=>{h===c.layers.size-1&&(n==null||n(T),!T.defaultPrevented&&s&&(T.preventDefault(),s()))},g),x.useEffect(()=>{if(u)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Gu=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Vu(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Gu)}},[u,g,r,c]),x.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Vu())},[u,c]),x.useEffect(()=>{const T=()=>p({});return document.addEventListener(Ql,T),()=>document.removeEventListener(Ql,T)},[]),d.jsx(Qe.div,{...l,ref:w,style:{pointerEvents:y?k?"auto":"none":void 0,...e.style},onFocusCapture:xe(e.onFocusCapture,S.onFocusCapture),onBlurCapture:xe(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:xe(e.onPointerDownCapture,C.onPointerDownCapture)})});id.displayName=Oy;var Uy="DismissableLayerBranch",ng=x.forwardRef((e,t)=>{const r=x.useContext(rg),n=x.useRef(null),i=St(t,n);return x.useEffect(()=>{const o=n.current;if(o)return r.branches.add(o),()=>{r.branches.delete(o)}},[r.branches]),d.jsx(Qe.div,{...e,ref:i})});ng.displayName=Uy;function $y(e,t=globalThis==null?void 0:globalThis.document){const r=_r(e),n=x.useRef(!1),i=x.useRef(()=>{});return x.useEffect(()=>{const o=s=>{if(s.target&&!n.current){let l=function(){ig(Dy,r,c,{discrete:!0})};const c={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);n.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}function Hy(e,t=globalThis==null?void 0:globalThis.document){const r=_r(e),n=x.useRef(!1);return x.useEffect(()=>{const i=o=>{o.target&&!n.current&&ig(By,r,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Vu(){const e=new CustomEvent(Ql);document.dispatchEvent(e)}function ig(e,t,r,{discrete:n}){const i=r.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?tg(i,o):i.dispatchEvent(o)}var Wy=id,Gy=ng,zr=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},Vy="Portal",og=x.forwardRef((e,t)=>{var s;const{container:r,...n}=e,[i,o]=x.useState(!1);zr(()=>o(!0),[]);const a=r||i&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return a?Xh.createPortal(d.jsx(Qe.div,{...n,ref:t}),a):null});og.displayName=Vy;function Qy(e,t){return x.useReducer((r,n)=>t[r][n]??r,e)}var od=e=>{const{present:t,children:r}=e,n=qy(t),i=typeof r=="function"?r({present:n.isPresent}):x.Children.only(r),o=St(n.ref,Ky(i));return typeof r=="function"||n.isPresent?x.cloneElement(i,{ref:o}):null};od.displayName="Presence";function qy(e){const[t,r]=x.useState(),n=x.useRef(null),i=x.useRef(e),o=x.useRef("none"),a=e?"mounted":"unmounted",[s,l]=Qy(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const c=Ho(n.current);o.current=s==="mounted"?c:"none"},[s]),zr(()=>{const c=n.current,u=i.current;if(u!==e){const g=o.current,p=Ho(c);e?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&g!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),zr(()=>{if(t){let c;const u=t.ownerDocument.defaultView??window,f=p=>{const v=Ho(n.current).includes(p.animationName);if(p.target===t&&v&&(l("ANIMATION_END"),!i.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},g=p=>{p.target===t&&(o.current=Ho(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{u.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.useCallback(c=>{n.current=c?getComputedStyle(c):null,r(c)},[])}}function Ho(e){return(e==null?void 0:e.animationName)||"none"}function Ky(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Yy=Qp[" useInsertionEffect ".trim().toString()]||zr;function Xy({prop:e,defaultProp:t,onChange:r=()=>{},caller:n}){const[i,o,a]=Jy({defaultProp:t,onChange:r}),s=e!==void 0,l=s?e:i;{const u=x.useRef(e!==void 0);x.useEffect(()=>{const f=u.current;f!==s&&console.warn(`${n} is changing from ${f?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=s},[s,n])}const c=x.useCallback(u=>{var f;if(s){const g=Zy(u)?u(e):u;g!==e&&((f=a.current)==null||f.call(a,g))}else o(u)},[s,e,o,a]);return[l,c]}function Jy({defaultProp:e,onChange:t}){const[r,n]=x.useState(e),i=x.useRef(r),o=x.useRef(t);return Yy(()=>{o.current=t},[t]),x.useEffect(()=>{var a;i.current!==r&&((a=o.current)==null||a.call(o,r),i.current=r)},[r,i]),[r,n,o]}function Zy(e){return typeof e=="function"}var ev=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),tv="VisuallyHidden",is=x.forwardRef((e,t)=>d.jsx(Qe.span,{...e,ref:t,style:{...ev,...e.style}}));is.displayName=tv;var rv=is,ad="ToastProvider",[sd,nv,iv]=zy("Toast"),[ag,H3]=ns("Toast",[iv]),[ov,os]=ag(ad),sg=e=>{const{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:a}=e,[s,l]=x.useState(null),[c,u]=x.useState(0),f=x.useRef(!1),g=x.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${ad}\`. Expected non-empty \`string\`.`),d.jsx(sd.Provider,{scope:t,children:d.jsx(ov,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:o,toastCount:c,viewport:s,onViewportChange:l,onToastAdd:x.useCallback(()=>u(p=>p+1),[]),onToastRemove:x.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:g,children:a})})};sg.displayName=ad;var lg="ToastViewport",av=["F8"],ql="toast.viewportPause",Kl="toast.viewportResume",cg=x.forwardRef((e,t)=>{const{__scopeToast:r,hotkey:n=av,label:i="Notifications ({hotkey})",...o}=e,a=os(lg,r),s=nv(r),l=x.useRef(null),c=x.useRef(null),u=x.useRef(null),f=x.useRef(null),g=St(t,f,a.onViewportChange),p=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=a.toastCount>0;x.useEffect(()=>{const b=m=>{var y;n.length!==0&&n.every(k=>m[k]||m.code===k)&&((y=f.current)==null||y.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[n]),x.useEffect(()=>{const b=l.current,m=f.current;if(w&&b&&m){const h=()=>{if(!a.isClosePausedRef.current){const S=new CustomEvent(ql);m.dispatchEvent(S),a.isClosePausedRef.current=!0}},y=()=>{if(a.isClosePausedRef.current){const S=new CustomEvent(Kl);m.dispatchEvent(S),a.isClosePausedRef.current=!1}},k=S=>{!b.contains(S.relatedTarget)&&y()},C=()=>{b.contains(document.activeElement)||y()};return b.addEventListener("focusin",h),b.addEventListener("focusout",k),b.addEventListener("pointermove",h),b.addEventListener("pointerleave",C),window.addEventListener("blur",h),window.addEventListener("focus",y),()=>{b.removeEventListener("focusin",h),b.removeEventListener("focusout",k),b.removeEventListener("pointermove",h),b.removeEventListener("pointerleave",C),window.removeEventListener("blur",h),window.removeEventListener("focus",y)}}},[w,a.isClosePausedRef]);const v=x.useCallback(({tabbingDirection:b})=>{const h=s().map(y=>{const k=y.ref.current,C=[k,...xv(k)];return b==="forwards"?C:C.reverse()});return(b==="forwards"?h.reverse():h).flat()},[s]);return x.useEffect(()=>{const b=f.current;if(b){const m=h=>{var C,S,T;const y=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!y){const R=document.activeElement,j=h.shiftKey;if(h.target===b&&j){(C=c.current)==null||C.focus();return}const F=v({tabbingDirection:j?"backwards":"forwards"}),V=F.findIndex(_=>_===R);Ks(F.slice(V+1))?h.preventDefault():j?(S=c.current)==null||S.focus():(T=u.current)==null||T.focus()}};return b.addEventListener("keydown",m),()=>b.removeEventListener("keydown",m)}},[s,v]),d.jsxs(Gy,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&d.jsx(Yl,{ref:c,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"forwards"});Ks(b)}}),d.jsx(sd.Slot,{scope:r,children:d.jsx(Qe.ol,{tabIndex:-1,...o,ref:g})}),w&&d.jsx(Yl,{ref:u,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"backwards"});Ks(b)}})]})});cg.displayName=lg;var dg="ToastFocusProxy",Yl=x.forwardRef((e,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,o=os(dg,r);return d.jsx(is,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:a=>{var c;const s=a.relatedTarget;!((c=o.viewport)!=null&&c.contains(s))&&n()}})});Yl.displayName=dg;var vo="Toast",sv="toast.swipeStart",lv="toast.swipeMove",cv="toast.swipeCancel",dv="toast.swipeEnd",ug=x.forwardRef((e,t)=>{const{forceMount:r,open:n,defaultOpen:i,onOpenChange:o,...a}=e,[s,l]=Xy({prop:n,defaultProp:i??!0,onChange:o,caller:vo});return d.jsx(od,{present:r||s,children:d.jsx(fv,{open:s,...a,ref:t,onClose:()=>l(!1),onPause:_r(e.onPause),onResume:_r(e.onResume),onSwipeStart:xe(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:xe(e.onSwipeMove,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:xe(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:xe(e.onSwipeEnd,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});ug.displayName=vo;var[uv,pv]=ag(vo,{onClose(){}}),fv=x.forwardRef((e,t)=>{const{__scopeToast:r,type:n="foreground",duration:i,open:o,onClose:a,onEscapeKeyDown:s,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:f,onSwipeCancel:g,onSwipeEnd:p,...w}=e,v=os(vo,r),[b,m]=x.useState(null),h=St(t,_=>m(_)),y=x.useRef(null),k=x.useRef(null),C=i||v.duration,S=x.useRef(0),T=x.useRef(C),R=x.useRef(0),{onToastAdd:j,onToastRemove:M}=v,D=_r(()=>{var K;(b==null?void 0:b.contains(document.activeElement))&&((K=v.viewport)==null||K.focus()),a()}),F=x.useCallback(_=>{!_||_===1/0||(window.clearTimeout(R.current),S.current=new Date().getTime(),R.current=window.setTimeout(D,_))},[D]);x.useEffect(()=>{const _=v.viewport;if(_){const K=()=>{F(T.current),c==null||c()},B=()=>{const H=new Date().getTime()-S.current;T.current=T.current-H,window.clearTimeout(R.current),l==null||l()};return _.addEventListener(ql,B),_.addEventListener(Kl,K),()=>{_.removeEventListener(ql,B),_.removeEventListener(Kl,K)}}},[v.viewport,C,l,c,F]),x.useEffect(()=>{o&&!v.isClosePausedRef.current&&F(C)},[o,C,v.isClosePausedRef,F]),x.useEffect(()=>(j(),()=>M()),[j,M]);const V=x.useMemo(()=>b?vg(b):null,[b]);return v.viewport?d.jsxs(d.Fragment,{children:[V&&d.jsx(hv,{__scopeToast:r,role:"status","aria-live":n==="foreground"?"assertive":"polite","aria-atomic":!0,children:V}),d.jsx(uv,{scope:r,onClose:D,children:yo.createPortal(d.jsx(sd.ItemSlot,{scope:r,children:d.jsx(Wy,{asChild:!0,onEscapeKeyDown:xe(s,()=>{v.isFocusedToastEscapeKeyDownRef.current||D(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:d.jsx(Qe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...w,ref:h,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:xe(e.onKeyDown,_=>{_.key==="Escape"&&(s==null||s(_.nativeEvent),_.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:xe(e.onPointerDown,_=>{_.button===0&&(y.current={x:_.clientX,y:_.clientY})}),onPointerMove:xe(e.onPointerMove,_=>{if(!y.current)return;const K=_.clientX-y.current.x,B=_.clientY-y.current.y,H=!!k.current,P=["left","right"].includes(v.swipeDirection),A=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,z=P?A(0,K):0,W=P?0:A(0,B),O=_.pointerType==="touch"?10:2,Q={x:z,y:W},Y={originalEvent:_,delta:Q};H?(k.current=Q,Wo(lv,f,Y,{discrete:!1})):Qu(Q,v.swipeDirection,O)?(k.current=Q,Wo(sv,u,Y,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(K)>O||Math.abs(B)>O)&&(y.current=null)}),onPointerUp:xe(e.onPointerUp,_=>{const K=k.current,B=_.target;if(B.hasPointerCapture(_.pointerId)&&B.releasePointerCapture(_.pointerId),k.current=null,y.current=null,K){const H=_.currentTarget,P={originalEvent:_,delta:K};Qu(K,v.swipeDirection,v.swipeThreshold)?Wo(dv,p,P,{discrete:!0}):Wo(cv,g,P,{discrete:!0}),H.addEventListener("click",A=>A.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),hv=e=>{const{__scopeToast:t,children:r,...n}=e,i=os(vo,t),[o,a]=x.useState(!1),[s,l]=x.useState(!1);return yv(()=>a(!0)),x.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),s?null:d.jsx(og,{asChild:!0,children:d.jsx(is,{...n,children:o&&d.jsxs(d.Fragment,{children:[i.label," ",r]})})})},gv="ToastTitle",pg=x.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return d.jsx(Qe.div,{...n,ref:t})});pg.displayName=gv;var mv="ToastDescription",fg=x.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return d.jsx(Qe.div,{...n,ref:t})});fg.displayName=mv;var hg="ToastAction",gg=x.forwardRef((e,t)=>{const{altText:r,...n}=e;return r.trim()?d.jsx(yg,{altText:r,asChild:!0,children:d.jsx(ld,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${hg}\`. Expected non-empty \`string\`.`),null)});gg.displayName=hg;var mg="ToastClose",ld=x.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e,i=pv(mg,r);return d.jsx(yg,{asChild:!0,children:d.jsx(Qe.button,{type:"button",...n,ref:t,onClick:xe(e.onClick,i.onClose)})})});ld.displayName=mg;var yg=x.forwardRef((e,t)=>{const{__scopeToast:r,altText:n,...i}=e;return d.jsx(Qe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function vg(e){const t=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&t.push(n.textContent),vv(n)){const i=n.ariaHidden||n.hidden||n.style.display==="none",o=n.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const a=n.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...vg(n))}}),t}function Wo(e,t,r,{discrete:n}){const i=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?tg(i,o):i.dispatchEvent(o)}var Qu=(e,t,r=0)=>{const n=Math.abs(e.x),i=Math.abs(e.y),o=n>i;return t==="left"||t==="right"?o&&n>r:!o&&i>r};function yv(e=()=>{}){const t=_r(e);zr(()=>{let r=0,n=0;return r=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(n)}},[t])}function vv(e){return e.nodeType===e.ELEMENT_NODE}function xv(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const i=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||i?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function Ks(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var bv=sg,xg=cg,bg=ug,wg=pg,kg=fg,Cg=gg,Sg=ld;function Tg(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Tg(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Eg(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Tg(e))&&(n&&(n+=" "),n+=t);return n}const qu=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ku=Eg,cd=(e,t)=>r=>{var n;if((t==null?void 0:t.variants)==null)return Ku(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:i,defaultVariants:o}=t,a=Object.keys(i).map(c=>{const u=r==null?void 0:r[c],f=o==null?void 0:o[c];if(u===null)return null;const g=qu(u)||qu(f);return i[c][g]}),s=r&&Object.entries(r).reduce((c,u)=>{let[f,g]=u;return g===void 0||(c[f]=g),c},{}),l=t==null||(n=t.compoundVariants)===null||n===void 0?void 0:n.reduce((c,u)=>{let{class:f,className:g,...p}=u;return Object.entries(p).every(w=>{let[v,b]=w;return Array.isArray(b)?b.includes({...o,...s}[v]):{...o,...s}[v]===b})?[...c,f,g]:c},[]);return Ku(e,a,l,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pg=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...s},l)=>x.createElement("svg",{ref:l,...kv,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Pg("lucide",i),...s},[...a.map(([c,u])=>x.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(e,t)=>{const r=x.forwardRef(({className:n,...i},o)=>x.createElement(Cv,{ref:o,iconNode:t,className:Pg(`lucide-${wv(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=fe("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=fe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=fe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=fe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=fe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=fe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=fe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=fe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=fe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=fe("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=fe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=fe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dd="-",Dv=e=>{const t=Uv(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:a=>{const s=a.split(dd);return s[0]===""&&s.length!==1&&s.shift(),jg(s,t)||Bv(a)},getConflictingClassGroupIds:(a,s)=>{const l=r[a]||[];return s&&n[a]?[...l,...n[a]]:l}}},jg=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),i=n?jg(e.slice(1),n):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(dd);return(a=t.validators.find(({validator:s})=>s(o)))==null?void 0:a.classGroupId},Yu=/^\[(.+)\]$/,Bv=e=>{if(Yu.test(e)){const t=Yu.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Uv=e=>{const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Hv(Object.entries(e.classGroups),r).forEach(([o,a])=>{Jl(a,n,o,t)}),n},Jl=(e,t,r,n)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Xu(t,i);o.classGroupId=r;return}if(typeof i=="function"){if($v(i)){Jl(i(n),t,r,n);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([o,a])=>{Jl(a,Xu(t,o),r,n)})})},Xu=(e,t)=>{let r=e;return t.split(dd).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},$v=e=>e.isThemeGetter,Hv=(e,t)=>t?e.map(([r,n])=>{const i=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,s])=>[t+a,s])):o);return[r,i]}):e,Wv=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const i=(o,a)=>{r.set(o,a),t++,t>e&&(t=0,n=r,r=new Map)};return{get(o){let a=r.get(o);if(a!==void 0)return a;if((a=n.get(o))!==void 0)return i(o,a),a},set(o,a){r.has(o)?r.set(o,a):i(o,a)}}},_g="!",Gv=e=>{const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,i=t[0],o=t.length,a=s=>{const l=[];let c=0,u=0,f;for(let b=0;b<s.length;b++){let m=s[b];if(c===0){if(m===i&&(n||s.slice(b,b+o)===t)){l.push(s.slice(u,b)),u=b+o;continue}if(m==="/"){f=b;continue}}m==="["?c++:m==="]"&&c--}const g=l.length===0?s:s.substring(u),p=g.startsWith(_g),w=p?g.substring(1):g,v=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:v}};return r?s=>r({className:s,parseClassName:a}):a},Vv=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t},Qv=e=>({cache:Wv(e.cacheSize),parseClassName:Gv(e),...Dv(e)}),qv=/\s+/,Kv=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i}=t,o=[],a=e.trim().split(qv);let s="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:u,hasImportantModifier:f,baseClassName:g,maybePostfixModifierPosition:p}=r(c);let w=!!p,v=n(w?g.substring(0,p):g);if(!v){if(!w){s=c+(s.length>0?" "+s:s);continue}if(v=n(g),!v){s=c+(s.length>0?" "+s:s);continue}w=!1}const b=Vv(u).join(":"),m=f?b+_g:b,h=m+v;if(o.includes(h))continue;o.push(h);const y=i(v,w);for(let k=0;k<y.length;++k){const C=y[k];o.push(m+C)}s=c+(s.length>0?" "+s:s)}return s};function Yv(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=zg(t))&&(n&&(n+=" "),n+=r);return n}const zg=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=zg(e[n]))&&(r&&(r+=" "),r+=t);return r};function Xv(e,...t){let r,n,i,o=a;function a(l){const c=t.reduce((u,f)=>f(u),e());return r=Qv(c),n=r.cache.get,i=r.cache.set,o=s,s(l)}function s(l){const c=n(l);if(c)return c;const u=Kv(l,r);return i(l,u),u}return function(){return o(Yv.apply(null,arguments))}}const ne=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Lg=/^\[(?:([a-z-]+):)?(.+)\]$/i,Jv=/^\d+\/\d+$/,Zv=new Set(["px","full","screen"]),ex=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,rx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,nx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ix=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Dt=e=>$n(e)||Zv.has(e)||Jv.test(e),lr=e=>di(e,"length",px),$n=e=>!!e&&!Number.isNaN(Number(e)),Ys=e=>di(e,"number",$n),Ci=e=>!!e&&Number.isInteger(Number(e)),ox=e=>e.endsWith("%")&&$n(e.slice(0,-1)),G=e=>Lg.test(e),cr=e=>ex.test(e),ax=new Set(["length","size","percentage"]),sx=e=>di(e,ax,Fg),lx=e=>di(e,"position",Fg),cx=new Set(["image","url"]),dx=e=>di(e,cx,hx),ux=e=>di(e,"",fx),Si=()=>!0,di=(e,t,r)=>{const n=Lg.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1},px=e=>tx.test(e)&&!rx.test(e),Fg=()=>!1,fx=e=>nx.test(e),hx=e=>ix.test(e),gx=()=>{const e=ne("colors"),t=ne("spacing"),r=ne("blur"),n=ne("brightness"),i=ne("borderColor"),o=ne("borderRadius"),a=ne("borderSpacing"),s=ne("borderWidth"),l=ne("contrast"),c=ne("grayscale"),u=ne("hueRotate"),f=ne("invert"),g=ne("gap"),p=ne("gradientColorStops"),w=ne("gradientColorStopPositions"),v=ne("inset"),b=ne("margin"),m=ne("opacity"),h=ne("padding"),y=ne("saturate"),k=ne("scale"),C=ne("sepia"),S=ne("skew"),T=ne("space"),R=ne("translate"),j=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",G,t],F=()=>[G,t],V=()=>["",Dt,lr],_=()=>["auto",$n,G],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",G],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>[$n,G];return{cacheSize:500,separator:":",theme:{colors:[Si],spacing:[Dt,lr],blur:["none","",cr,G],brightness:W(),borderColor:[e],borderRadius:["none","","full",cr,G],borderSpacing:F(),borderWidth:V(),contrast:W(),grayscale:A(),hueRotate:W(),invert:A(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[ox,lr],inset:D(),margin:D(),opacity:W(),padding:F(),saturate:W(),scale:W(),sepia:A(),skew:W(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[cr]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),G]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ci,G]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",Ci,G]}],"grid-cols":[{"grid-cols":[Si]}],"col-start-end":[{col:["auto",{span:["full",Ci,G]},G]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[Si]}],"row-start-end":[{row:["auto",{span:[Ci,G]},G]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,t]}],"min-w":[{"min-w":[G,t,"min","max","fit"]}],"max-w":[{"max-w":[G,t,"none","full","min","max","fit","prose",{screen:[cr]},cr]}],h:[{h:[G,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,t,"auto","min","max","fit"]}],"font-size":[{text:["base",cr,lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ys]}],"font-family":[{font:[Si]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",$n,Ys]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Dt,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Dt,lr]}],"underline-offset":[{"underline-offset":["auto",Dt,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),lx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",sx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},dx]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:B()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[Dt,G]}],"outline-w":[{outline:[Dt,lr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Dt,lr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",cr,ux]}],"shadow-color":[{shadow:[Si]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",cr,G]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[y]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:W()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:W()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Ci,G]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Dt,lr,Ys]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},mx=Xv(gx);function De(...e){return mx(Eg(e))}const yx=bv,Og=x.forwardRef(({className:e,...t},r)=>d.jsx(xg,{ref:r,className:De("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Og.displayName=xg.displayName;const vx=cd("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Dg=x.forwardRef(({className:e,variant:t,...r},n)=>d.jsx(bg,{ref:n,className:De(vx({variant:t}),e),...r}));Dg.displayName=bg.displayName;const xx=x.forwardRef(({className:e,...t},r)=>d.jsx(Cg,{ref:r,className:De("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));xx.displayName=Cg.displayName;const Bg=x.forwardRef(({className:e,...t},r)=>d.jsx(Sg,{ref:r,className:De("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:d.jsx(Mg,{className:"h-4 w-4"})}));Bg.displayName=Sg.displayName;const Ug=x.forwardRef(({className:e,...t},r)=>d.jsx(wg,{ref:r,className:De("text-sm font-semibold",e),...t}));Ug.displayName=wg.displayName;const $g=x.forwardRef(({className:e,...t},r)=>d.jsx(kg,{ref:r,className:De("text-sm opacity-90",e),...t}));$g.displayName=kg.displayName;function bx(){const{toasts:e}=Py();return d.jsxs(yx,{children:[e.map(function({id:t,title:r,description:n,action:i,...o}){return d.jsxs(Dg,{...o,children:[d.jsxs("div",{className:"grid gap-1",children:[r&&d.jsx(Ug,{children:r}),n&&d.jsx($g,{children:n})]}),i,d.jsx(Bg,{})]},t)}),d.jsx(Og,{})]})}var Ju=["light","dark"],wx="(prefers-color-scheme: dark)",kx=x.createContext(void 0),Cx={setTheme:e=>{},themes:[]},Sx=()=>{var e;return(e=x.useContext(kx))!=null?e:Cx};x.memo(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:i,defaultTheme:o,value:a,attrs:s,nonce:l})=>{let c=o==="system",u=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${s.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=i?Ju.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(w,v=!1,b=!0)=>{let m=a?a[w]:w,h=v?w+"|| ''":`'${m}'`,y="";return i&&b&&!v&&Ju.includes(w)&&(y+=`d.style.colorScheme = '${w}';`),r==="class"?v||m?y+=`c.add(${h})`:y+="null":m&&(y+=`d[s](n,${h})`),y},p=e?`!function(){${u}${g(e)}}()`:n?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${wx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${g(a?"x[e]":"e",!0)}}${c?"":"else{"+g(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${g(a?"x[e]":"e",!0)}}else{${g(o,!1,!1)};}${f}}catch(t){}}();`;return x.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var Tx=e=>{switch(e){case"success":return Ax;case"info":return Nx;case"warning":return Rx;case"error":return Ix;default:return null}},Ex=Array(12).fill(0),Px=({visible:e,className:t})=>I.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},I.createElement("div",{className:"sonner-spinner"},Ex.map((r,n)=>I.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),Ax=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Rx=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Nx=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ix=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Mx=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},I.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),jx=()=>{let[e,t]=I.useState(document.hidden);return I.useEffect(()=>{let r=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),e},Zl=1,_x=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:r,...n}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Zl++,o=this.toasts.find(s=>s.id===i),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(s=>s.id===i?(this.publish({...s,...e,id:i,title:r}),{...s,...e,id:i,dismissible:a,title:r}):s):this.addToast({title:r,...n,dismissible:a,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let n=e instanceof Promise?e:e(),i=r!==void 0,o,a=n.then(async l=>{if(o=["resolve",l],I.isValidElement(l))i=!1,this.create({id:r,type:"default",message:l});else if(Lx(l)&&!l.ok){i=!1;let c=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,u=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:r,type:"error",message:c,description:u})}else if(t.success!==void 0){i=!1;let c=typeof t.success=="function"?await t.success(l):t.success,u=typeof t.description=="function"?await t.description(l):t.description;this.create({id:r,type:"success",message:c,description:u})}}).catch(async l=>{if(o=["reject",l],t.error!==void 0){i=!1;let c=typeof t.error=="function"?await t.error(l):t.error,u=typeof t.description=="function"?await t.description(l):t.description;this.create({id:r,type:"error",message:c,description:u})}}).finally(()=>{var l;i&&(this.dismiss(r),r=void 0),(l=t.finally)==null||l.call(t)}),s=()=>new Promise((l,c)=>a.then(()=>o[0]==="reject"?c(o[1]):l(o[1])).catch(c));return typeof r!="string"&&typeof r!="number"?{unwrap:s}:Object.assign(r,{unwrap:s})},this.custom=(e,t)=>{let r=(t==null?void 0:t.id)||Zl++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Be=new _x,zx=(e,t)=>{let r=(t==null?void 0:t.id)||Zl++;return Be.addToast({title:e,...t,id:r}),r},Lx=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Fx=zx,Ox=()=>Be.toasts,Dx=()=>Be.getActiveToasts();Object.assign(Fx,{success:Be.success,info:Be.info,warning:Be.warning,error:Be.error,custom:Be.custom,message:Be.message,promise:Be.promise,dismiss:Be.dismiss,loading:Be.loading},{getHistory:Ox,getToasts:Dx});function Bx(e,{insertAt:t}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Bx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Go(e){return e.label!==void 0}var Ux=3,$x="32px",Hx="16px",Zu=4e3,Wx=356,Gx=14,Vx=20,Qx=200;function ht(...e){return e.filter(Boolean).join(" ")}function qx(e){let[t,r]=e.split("-"),n=[];return t&&n.push(t),r&&n.push(r),n}var Kx=e=>{var t,r,n,i,o,a,s,l,c,u,f;let{invert:g,toast:p,unstyled:w,interacting:v,setHeights:b,visibleToasts:m,heights:h,index:y,toasts:k,expanded:C,removeToast:S,defaultRichColors:T,closeButton:R,style:j,cancelButtonStyle:M,actionButtonStyle:D,className:F="",descriptionClassName:V="",duration:_,position:K,gap:B,loadingIcon:H,expandByDefault:P,classNames:A,icons:z,closeButtonAriaLabel:W="Close toast",pauseWhenPageIsHidden:O}=e,[Q,Y]=I.useState(null),[ge,Ee]=I.useState(null),[Z,mn]=I.useState(!1),[tr,$r]=I.useState(!1),[rr,yn]=I.useState(!1),[nr,wo]=I.useState(!1),[ms,ko]=I.useState(!1),[ys,fi]=I.useState(0),[vn,Pd]=I.useState(0),hi=I.useRef(p.duration||_||Zu),Ad=I.useRef(null),Hr=I.useRef(null),Dm=y===0,Bm=y+1<=m,rt=p.type,xn=p.dismissible!==!1,Um=p.className||"",$m=p.descriptionClassName||"",Co=I.useMemo(()=>h.findIndex(U=>U.toastId===p.id)||0,[h,p.id]),Hm=I.useMemo(()=>{var U;return(U=p.closeButton)!=null?U:R},[p.closeButton,R]),Rd=I.useMemo(()=>p.duration||_||Zu,[p.duration,_]),vs=I.useRef(0),bn=I.useRef(0),Nd=I.useRef(0),wn=I.useRef(null),[Wm,Gm]=K.split("-"),Id=I.useMemo(()=>h.reduce((U,te,ae)=>ae>=Co?U:U+te.height,0),[h,Co]),Md=jx(),Vm=p.invert||g,xs=rt==="loading";bn.current=I.useMemo(()=>Co*B+Id,[Co,Id]),I.useEffect(()=>{hi.current=Rd},[Rd]),I.useEffect(()=>{mn(!0)},[]),I.useEffect(()=>{let U=Hr.current;if(U){let te=U.getBoundingClientRect().height;return Pd(te),b(ae=>[{toastId:p.id,height:te,position:p.position},...ae]),()=>b(ae=>ae.filter(dt=>dt.toastId!==p.id))}},[b,p.id]),I.useLayoutEffect(()=>{if(!Z)return;let U=Hr.current,te=U.style.height;U.style.height="auto";let ae=U.getBoundingClientRect().height;U.style.height=te,Pd(ae),b(dt=>dt.find(ut=>ut.toastId===p.id)?dt.map(ut=>ut.toastId===p.id?{...ut,height:ae}:ut):[{toastId:p.id,height:ae,position:p.position},...dt])},[Z,p.title,p.description,b,p.id]);let ir=I.useCallback(()=>{$r(!0),fi(bn.current),b(U=>U.filter(te=>te.toastId!==p.id)),setTimeout(()=>{S(p)},Qx)},[p,S,b,bn]);I.useEffect(()=>{if(p.promise&&rt==="loading"||p.duration===1/0||p.type==="loading")return;let U;return C||v||O&&Md?(()=>{if(Nd.current<vs.current){let te=new Date().getTime()-vs.current;hi.current=hi.current-te}Nd.current=new Date().getTime()})():hi.current!==1/0&&(vs.current=new Date().getTime(),U=setTimeout(()=>{var te;(te=p.onAutoClose)==null||te.call(p,p),ir()},hi.current)),()=>clearTimeout(U)},[C,v,p,rt,O,Md,ir]),I.useEffect(()=>{p.delete&&ir()},[ir,p.delete]);function Qm(){var U,te,ae;return z!=null&&z.loading?I.createElement("div",{className:ht(A==null?void 0:A.loader,(U=p==null?void 0:p.classNames)==null?void 0:U.loader,"sonner-loader"),"data-visible":rt==="loading"},z.loading):H?I.createElement("div",{className:ht(A==null?void 0:A.loader,(te=p==null?void 0:p.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":rt==="loading"},H):I.createElement(Px,{className:ht(A==null?void 0:A.loader,(ae=p==null?void 0:p.classNames)==null?void 0:ae.loader),visible:rt==="loading"})}return I.createElement("li",{tabIndex:0,ref:Hr,className:ht(F,Um,A==null?void 0:A.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,A==null?void 0:A.default,A==null?void 0:A[rt],(r=p==null?void 0:p.classNames)==null?void 0:r[rt]),"data-sonner-toast":"","data-rich-colors":(n=p.richColors)!=null?n:T,"data-styled":!(p.jsx||p.unstyled||w),"data-mounted":Z,"data-promise":!!p.promise,"data-swiped":ms,"data-removed":tr,"data-visible":Bm,"data-y-position":Wm,"data-x-position":Gm,"data-index":y,"data-front":Dm,"data-swiping":rr,"data-dismissible":xn,"data-type":rt,"data-invert":Vm,"data-swipe-out":nr,"data-swipe-direction":ge,"data-expanded":!!(C||P&&Z),style:{"--index":y,"--toasts-before":y,"--z-index":k.length-y,"--offset":`${tr?ys:bn.current}px`,"--initial-height":P?"auto":`${vn}px`,...j,...p.style},onDragEnd:()=>{yn(!1),Y(null),wn.current=null},onPointerDown:U=>{xs||!xn||(Ad.current=new Date,fi(bn.current),U.target.setPointerCapture(U.pointerId),U.target.tagName!=="BUTTON"&&(yn(!0),wn.current={x:U.clientX,y:U.clientY}))},onPointerUp:()=>{var U,te,ae,dt;if(nr||!xn)return;wn.current=null;let ut=Number(((U=Hr.current)==null?void 0:U.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),or=Number(((te=Hr.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Wr=new Date().getTime()-((ae=Ad.current)==null?void 0:ae.getTime()),pt=Q==="x"?ut:or,ar=Math.abs(pt)/Wr;if(Math.abs(pt)>=Vx||ar>.11){fi(bn.current),(dt=p.onDismiss)==null||dt.call(p,p),Ee(Q==="x"?ut>0?"right":"left":or>0?"down":"up"),ir(),wo(!0),ko(!1);return}yn(!1),Y(null)},onPointerMove:U=>{var te,ae,dt,ut;if(!wn.current||!xn||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let or=U.clientY-wn.current.y,Wr=U.clientX-wn.current.x,pt=(ae=e.swipeDirections)!=null?ae:qx(K);!Q&&(Math.abs(Wr)>1||Math.abs(or)>1)&&Y(Math.abs(Wr)>Math.abs(or)?"x":"y");let ar={x:0,y:0};Q==="y"?(pt.includes("top")||pt.includes("bottom"))&&(pt.includes("top")&&or<0||pt.includes("bottom")&&or>0)&&(ar.y=or):Q==="x"&&(pt.includes("left")||pt.includes("right"))&&(pt.includes("left")&&Wr<0||pt.includes("right")&&Wr>0)&&(ar.x=Wr),(Math.abs(ar.x)>0||Math.abs(ar.y)>0)&&ko(!0),(dt=Hr.current)==null||dt.style.setProperty("--swipe-amount-x",`${ar.x}px`),(ut=Hr.current)==null||ut.style.setProperty("--swipe-amount-y",`${ar.y}px`)}},Hm&&!p.jsx?I.createElement("button",{"aria-label":W,"data-disabled":xs,"data-close-button":!0,onClick:xs||!xn?()=>{}:()=>{var U;ir(),(U=p.onDismiss)==null||U.call(p,p)},className:ht(A==null?void 0:A.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(o=z==null?void 0:z.close)!=null?o:Mx):null,p.jsx||x.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:I.createElement(I.Fragment,null,rt||p.icon||p.promise?I.createElement("div",{"data-icon":"",className:ht(A==null?void 0:A.icon,(a=p==null?void 0:p.classNames)==null?void 0:a.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Qm():null,p.type!=="loading"?p.icon||(z==null?void 0:z[rt])||Tx(rt):null):null,I.createElement("div",{"data-content":"",className:ht(A==null?void 0:A.content,(s=p==null?void 0:p.classNames)==null?void 0:s.content)},I.createElement("div",{"data-title":"",className:ht(A==null?void 0:A.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?I.createElement("div",{"data-description":"",className:ht(V,$m,A==null?void 0:A.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),x.isValidElement(p.cancel)?p.cancel:p.cancel&&Go(p.cancel)?I.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||M,onClick:U=>{var te,ae;Go(p.cancel)&&xn&&((ae=(te=p.cancel).onClick)==null||ae.call(te,U),ir())},className:ht(A==null?void 0:A.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,x.isValidElement(p.action)?p.action:p.action&&Go(p.action)?I.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||D,onClick:U=>{var te,ae;Go(p.action)&&((ae=(te=p.action).onClick)==null||ae.call(te,U),!U.defaultPrevented&&ir())},className:ht(A==null?void 0:A.actionButton,(f=p==null?void 0:p.classNames)==null?void 0:f.actionButton)},p.action.label):null))};function ep(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Yx(e,t){let r={};return[e,t].forEach((n,i)=>{let o=i===1,a=o?"--mobile-offset":"--offset",s=o?Hx:$x;function l(c){["top","right","bottom","left"].forEach(u=>{r[`${a}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof n=="number"||typeof n=="string"?l(n):typeof n=="object"?["top","right","bottom","left"].forEach(c=>{n[c]===void 0?r[`${a}-${c}`]=s:r[`${a}-${c}`]=typeof n[c]=="number"?`${n[c]}px`:n[c]}):l(s)}),r}var Xx=x.forwardRef(function(e,t){let{invert:r,position:n="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:a,className:s,offset:l,mobileOffset:c,theme:u="light",richColors:f,duration:g,style:p,visibleToasts:w=Ux,toastOptions:v,dir:b=ep(),gap:m=Gx,loadingIcon:h,icons:y,containerAriaLabel:k="Notifications",pauseWhenPageIsHidden:C}=e,[S,T]=I.useState([]),R=I.useMemo(()=>Array.from(new Set([n].concat(S.filter(O=>O.position).map(O=>O.position)))),[S,n]),[j,M]=I.useState([]),[D,F]=I.useState(!1),[V,_]=I.useState(!1),[K,B]=I.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=I.useRef(null),P=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),A=I.useRef(null),z=I.useRef(!1),W=I.useCallback(O=>{T(Q=>{var Y;return(Y=Q.find(ge=>ge.id===O.id))!=null&&Y.delete||Be.dismiss(O.id),Q.filter(({id:ge})=>ge!==O.id)})},[]);return I.useEffect(()=>Be.subscribe(O=>{if(O.dismiss){T(Q=>Q.map(Y=>Y.id===O.id?{...Y,delete:!0}:Y));return}setTimeout(()=>{Xh.flushSync(()=>{T(Q=>{let Y=Q.findIndex(ge=>ge.id===O.id);return Y!==-1?[...Q.slice(0,Y),{...Q[Y],...O},...Q.slice(Y+1)]:[O,...Q]})})})}),[]),I.useEffect(()=>{if(u!=="system"){B(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?B("dark"):B("light")),typeof window>"u")return;let O=window.matchMedia("(prefers-color-scheme: dark)");try{O.addEventListener("change",({matches:Q})=>{B(Q?"dark":"light")})}catch{O.addListener(({matches:Y})=>{try{B(Y?"dark":"light")}catch(ge){console.error(ge)}})}},[u]),I.useEffect(()=>{S.length<=1&&F(!1)},[S]),I.useEffect(()=>{let O=Q=>{var Y,ge;i.every(Ee=>Q[Ee]||Q.code===Ee)&&(F(!0),(Y=H.current)==null||Y.focus()),Q.code==="Escape"&&(document.activeElement===H.current||(ge=H.current)!=null&&ge.contains(document.activeElement))&&F(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[i]),I.useEffect(()=>{if(H.current)return()=>{A.current&&(A.current.focus({preventScroll:!0}),A.current=null,z.current=!1)}},[H.current]),I.createElement("section",{ref:t,"aria-label":`${k} ${P}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},R.map((O,Q)=>{var Y;let[ge,Ee]=O.split("-");return S.length?I.createElement("ol",{key:O,dir:b==="auto"?ep():b,tabIndex:-1,ref:H,className:s,"data-sonner-toaster":!0,"data-theme":K,"data-y-position":ge,"data-lifted":D&&S.length>1&&!o,"data-x-position":Ee,style:{"--front-toast-height":`${((Y=j[0])==null?void 0:Y.height)||0}px`,"--width":`${Wx}px`,"--gap":`${m}px`,...p,...Yx(l,c)},onBlur:Z=>{z.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(z.current=!1,A.current&&(A.current.focus({preventScroll:!0}),A.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||z.current||(z.current=!0,A.current=Z.relatedTarget)},onMouseEnter:()=>F(!0),onMouseMove:()=>F(!0),onMouseLeave:()=>{V||F(!1)},onDragEnd:()=>F(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},S.filter(Z=>!Z.position&&Q===0||Z.position===O).map((Z,mn)=>{var tr,$r;return I.createElement(Kx,{key:Z.id,icons:y,index:mn,toast:Z,defaultRichColors:f,duration:(tr=v==null?void 0:v.duration)!=null?tr:g,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:r,visibleToasts:w,closeButton:($r=v==null?void 0:v.closeButton)!=null?$r:a,interacting:V,position:O,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:W,toasts:S.filter(rr=>rr.position==Z.position),heights:j.filter(rr=>rr.position==Z.position),setHeights:M,expandByDefault:o,gap:m,loadingIcon:h,expanded:D,pauseWhenPageIsHidden:C,swipeDirections:e.swipeDirections})})):null}))});const Jx=({...e})=>{const{theme:t="system"}=Sx();return d.jsx(Xx,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Zx=["top","right","bottom","left"],Lr=Math.min,Ke=Math.max,za=Math.round,Vo=Math.floor,Lt=e=>({x:e,y:e}),e2={left:"right",right:"left",bottom:"top",top:"bottom"},t2={start:"end",end:"start"};function ec(e,t,r){return Ke(e,Lr(t,r))}function Jt(e,t){return typeof e=="function"?e(t):e}function Zt(e){return e.split("-")[0]}function ui(e){return e.split("-")[1]}function ud(e){return e==="x"?"y":"x"}function pd(e){return e==="y"?"height":"width"}const r2=new Set(["top","bottom"]);function jt(e){return r2.has(Zt(e))?"y":"x"}function fd(e){return ud(jt(e))}function n2(e,t,r){r===void 0&&(r=!1);const n=ui(e),i=fd(e),o=pd(i);let a=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=La(a)),[a,La(a)]}function i2(e){const t=La(e);return[tc(e),t,tc(t)]}function tc(e){return e.replace(/start|end/g,t=>t2[t])}const tp=["left","right"],rp=["right","left"],o2=["top","bottom"],a2=["bottom","top"];function s2(e,t,r){switch(e){case"top":case"bottom":return r?t?rp:tp:t?tp:rp;case"left":case"right":return t?o2:a2;default:return[]}}function l2(e,t,r,n){const i=ui(e);let o=s2(Zt(e),r==="start",n);return i&&(o=o.map(a=>a+"-"+i),t&&(o=o.concat(o.map(tc)))),o}function La(e){return e.replace(/left|right|bottom|top/g,t=>e2[t])}function c2(e){return{top:0,right:0,bottom:0,left:0,...e}}function Hg(e){return typeof e!="number"?c2(e):{top:e,right:e,bottom:e,left:e}}function Fa(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function np(e,t,r){let{reference:n,floating:i}=e;const o=jt(t),a=fd(t),s=pd(a),l=Zt(t),c=o==="y",u=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,g=n[s]/2-i[s]/2;let p;switch(l){case"top":p={x:u,y:n.y-i.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:f};break;case"left":p={x:n.x-i.width,y:f};break;default:p={x:n.x,y:n.y}}switch(ui(t)){case"start":p[a]-=g*(r&&c?-1:1);break;case"end":p[a]+=g*(r&&c?-1:1);break}return p}const d2=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:a}=r,s=o.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=np(c,n,l),g=n,p={},w=0;for(let v=0;v<s.length;v++){const{name:b,fn:m}=s[v],{x:h,y,data:k,reset:C}=await m({x:u,y:f,initialPlacement:n,placement:g,strategy:i,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=h??u,f=y??f,p={...p,[b]:{...p[b],...k}},C&&w<=50&&(w++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(c=C.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:u,y:f}=np(c,g,l)),v=-1)}return{x:u,y:f,placement:g,strategy:i,middlewareData:p}};async function ro(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=Jt(t,e),w=Hg(p),b=s[g?f==="floating"?"reference":"floating":f],m=Fa(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),h=f==="floating"?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(s.floating)),k=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},C=Fa(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:y,strategy:l}):h);return{top:(m.top-C.top+w.top)/k.y,bottom:(C.bottom-m.bottom+w.bottom)/k.y,left:(m.left-C.left+w.left)/k.x,right:(C.right-m.right+w.right)/k.x}}const u2=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:o,platform:a,elements:s,middlewareData:l}=t,{element:c,padding:u=0}=Jt(e,t)||{};if(c==null)return{};const f=Hg(u),g={x:r,y:n},p=fd(i),w=pd(p),v=await a.getDimensions(c),b=p==="y",m=b?"top":"left",h=b?"bottom":"right",y=b?"clientHeight":"clientWidth",k=o.reference[w]+o.reference[p]-g[p]-o.floating[w],C=g[p]-o.reference[p],S=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let T=S?S[y]:0;(!T||!await(a.isElement==null?void 0:a.isElement(S)))&&(T=s.floating[y]||o.floating[w]);const R=k/2-C/2,j=T/2-v[w]/2-1,M=Lr(f[m],j),D=Lr(f[h],j),F=M,V=T-v[w]-D,_=T/2-v[w]/2+R,K=ec(F,_,V),B=!l.arrow&&ui(i)!=null&&_!==K&&o.reference[w]/2-(_<F?M:D)-v[w]/2<0,H=B?_<F?_-F:_-V:0;return{[p]:g[p]+H,data:{[p]:K,centerOffset:_-K-H,...B&&{alignmentOffset:H}},reset:B}}}),p2=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:i,middlewareData:o,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...b}=Jt(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const m=Zt(i),h=jt(s),y=Zt(s)===s,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=g||(y||!v?[La(s)]:i2(s)),S=w!=="none";!g&&S&&C.push(...l2(s,v,w,k));const T=[s,...C],R=await ro(t,b),j=[];let M=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&j.push(R[m]),f){const _=n2(i,a,k);j.push(R[_[0]],R[_[1]])}if(M=[...M,{placement:i,overflows:j}],!j.every(_=>_<=0)){var D,F;const _=(((D=o.flip)==null?void 0:D.index)||0)+1,K=T[_];if(K&&(!(f==="alignment"?h!==jt(K):!1)||M.every(P=>P.overflows[0]>0&&jt(P.placement)===h)))return{data:{index:_,overflows:M},reset:{placement:K}};let B=(F=M.filter(H=>H.overflows[0]<=0).sort((H,P)=>H.overflows[1]-P.overflows[1])[0])==null?void 0:F.placement;if(!B)switch(p){case"bestFit":{var V;const H=(V=M.filter(P=>{if(S){const A=jt(P.placement);return A===h||A==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(A=>A>0).reduce((A,z)=>A+z,0)]).sort((P,A)=>P[1]-A[1])[0])==null?void 0:V[0];H&&(B=H);break}case"initialPlacement":B=s;break}if(i!==B)return{reset:{placement:B}}}return{}}}};function ip(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function op(e){return Zx.some(t=>e[t]>=0)}const f2=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:n="referenceHidden",...i}=Jt(e,t);switch(n){case"referenceHidden":{const o=await ro(t,{...i,elementContext:"reference"}),a=ip(o,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:op(a)}}}case"escaped":{const o=await ro(t,{...i,altBoundary:!0}),a=ip(o,r.floating);return{data:{escapedOffsets:a,escaped:op(a)}}}default:return{}}}}},Wg=new Set(["left","top"]);async function h2(e,t){const{placement:r,platform:n,elements:i}=e,o=await(n.isRTL==null?void 0:n.isRTL(i.floating)),a=Zt(r),s=ui(r),l=jt(r)==="y",c=Wg.has(a)?-1:1,u=o&&l?-1:1,f=Jt(t,e);let{mainAxis:g,crossAxis:p,alignmentAxis:w}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return s&&typeof w=="number"&&(p=s==="end"?w*-1:w),l?{x:p*u,y:g*c}:{x:g*c,y:p*u}}const g2=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:i,y:o,placement:a,middlewareData:s}=t,l=await h2(t,e);return a===((r=s.offset)==null?void 0:r.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:a}}}}},m2=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:s={fn:b=>{let{x:m,y:h}=b;return{x:m,y:h}}},...l}=Jt(e,t),c={x:r,y:n},u=await ro(t,l),f=jt(Zt(i)),g=ud(f);let p=c[g],w=c[f];if(o){const b=g==="y"?"top":"left",m=g==="y"?"bottom":"right",h=p+u[b],y=p-u[m];p=ec(h,p,y)}if(a){const b=f==="y"?"top":"left",m=f==="y"?"bottom":"right",h=w+u[b],y=w-u[m];w=ec(h,w,y)}const v=s.fn({...t,[g]:p,[f]:w});return{...v,data:{x:v.x-r,y:v.y-n,enabled:{[g]:o,[f]:a}}}}}},y2=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:r,y:n,placement:i,rects:o,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=Jt(e,t),u={x:r,y:n},f=jt(i),g=ud(f);let p=u[g],w=u[f];const v=Jt(s,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const y=g==="y"?"height":"width",k=o.reference[g]-o.floating[y]+b.mainAxis,C=o.reference[g]+o.reference[y]-b.mainAxis;p<k?p=k:p>C&&(p=C)}if(c){var m,h;const y=g==="y"?"width":"height",k=Wg.has(Zt(i)),C=o.reference[f]-o.floating[y]+(k&&((m=a.offset)==null?void 0:m[f])||0)+(k?0:b.crossAxis),S=o.reference[f]+o.reference[y]+(k?0:((h=a.offset)==null?void 0:h[f])||0)-(k?b.crossAxis:0);w<C?w=C:w>S&&(w=S)}return{[g]:p,[f]:w}}}},v2=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,n;const{placement:i,rects:o,platform:a,elements:s}=t,{apply:l=()=>{},...c}=Jt(e,t),u=await ro(t,c),f=Zt(i),g=ui(i),p=jt(i)==="y",{width:w,height:v}=o.floating;let b,m;f==="top"||f==="bottom"?(b=f,m=g===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(m=f,b=g==="end"?"top":"bottom");const h=v-u.top-u.bottom,y=w-u.left-u.right,k=Lr(v-u[b],h),C=Lr(w-u[m],y),S=!t.middlewareData.shift;let T=k,R=C;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(R=y),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(T=h),S&&!g){const M=Ke(u.left,0),D=Ke(u.right,0),F=Ke(u.top,0),V=Ke(u.bottom,0);p?R=w-2*(M!==0||D!==0?M+D:Ke(u.left,u.right)):T=v-2*(F!==0||V!==0?F+V:Ke(u.top,u.bottom))}await l({...t,availableWidth:R,availableHeight:T});const j=await a.getDimensions(s.floating);return w!==j.width||v!==j.height?{reset:{rects:!0}}:{}}}};function as(){return typeof window<"u"}function pi(e){return Gg(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ot(e){var t;return(t=(Gg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gg(e){return as()?e instanceof Node||e instanceof Je(e).Node:!1}function Tt(e){return as()?e instanceof Element||e instanceof Je(e).Element:!1}function Ft(e){return as()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function ap(e){return!as()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}const x2=new Set(["inline","contents"]);function xo(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=Et(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!x2.has(i)}const b2=new Set(["table","td","th"]);function w2(e){return b2.has(pi(e))}const k2=[":popover-open",":modal"];function ss(e){return k2.some(t=>{try{return e.matches(t)}catch{return!1}})}const C2=["transform","translate","scale","rotate","perspective"],S2=["transform","translate","scale","rotate","perspective","filter"],T2=["paint","layout","strict","content"];function hd(e){const t=gd(),r=Tt(e)?Et(e):e;return C2.some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||S2.some(n=>(r.willChange||"").includes(n))||T2.some(n=>(r.contain||"").includes(n))}function E2(e){let t=Fr(e);for(;Ft(t)&&!oi(t);){if(hd(t))return t;if(ss(t))return null;t=Fr(t)}return null}function gd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const P2=new Set(["html","body","#document"]);function oi(e){return P2.has(pi(e))}function Et(e){return Je(e).getComputedStyle(e)}function ls(e){return Tt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fr(e){if(pi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ap(e)&&e.host||Ot(e);return ap(t)?t.host:t}function Vg(e){const t=Fr(e);return oi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ft(t)&&xo(t)?t:Vg(t)}function no(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Vg(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),a=Je(i);if(o){const s=rc(a);return t.concat(a,a.visualViewport||[],xo(i)?i:[],s&&r?no(s):[])}return t.concat(i,no(i,[],r))}function rc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qg(e){const t=Et(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Ft(e),o=i?e.offsetWidth:r,a=i?e.offsetHeight:n,s=za(r)!==o||za(n)!==a;return s&&(r=o,n=a),{width:r,height:n,$:s}}function md(e){return Tt(e)?e:e.contextElement}function Hn(e){const t=md(e);if(!Ft(t))return Lt(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:o}=Qg(t);let a=(o?za(r.width):r.width)/n,s=(o?za(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const A2=Lt(0);function qg(e){const t=Je(e);return!gd()||!t.visualViewport?A2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function R2(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Je(e)?!1:t}function dn(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=md(e);let a=Lt(1);t&&(n?Tt(n)&&(a=Hn(n)):a=Hn(e));const s=R2(o,r,n)?qg(o):Lt(0);let l=(i.left+s.x)/a.x,c=(i.top+s.y)/a.y,u=i.width/a.x,f=i.height/a.y;if(o){const g=Je(o),p=n&&Tt(n)?Je(n):n;let w=g,v=rc(w);for(;v&&n&&p!==w;){const b=Hn(v),m=v.getBoundingClientRect(),h=Et(v),y=m.left+(v.clientLeft+parseFloat(h.paddingLeft))*b.x,k=m.top+(v.clientTop+parseFloat(h.paddingTop))*b.y;l*=b.x,c*=b.y,u*=b.x,f*=b.y,l+=y,c+=k,w=Je(v),v=rc(w)}}return Fa({width:u,height:f,x:l,y:c})}function yd(e,t){const r=ls(e).scrollLeft;return t?t.left+r:dn(Ot(e)).left+r}function Kg(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(r?0:yd(e,n)),o=n.top+t.scrollTop;return{x:i,y:o}}function N2(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const o=i==="fixed",a=Ot(n),s=t?ss(t.floating):!1;if(n===a||s&&o)return r;let l={scrollLeft:0,scrollTop:0},c=Lt(1);const u=Lt(0),f=Ft(n);if((f||!f&&!o)&&((pi(n)!=="body"||xo(a))&&(l=ls(n)),Ft(n))){const p=dn(n);c=Hn(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const g=a&&!f&&!o?Kg(a,l,!0):Lt(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+u.x+g.x,y:r.y*c.y-l.scrollTop*c.y+u.y+g.y}}function I2(e){return Array.from(e.getClientRects())}function M2(e){const t=Ot(e),r=ls(e),n=e.ownerDocument.body,i=Ke(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=Ke(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-r.scrollLeft+yd(e);const s=-r.scrollTop;return Et(n).direction==="rtl"&&(a+=Ke(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:a,y:s}}function j2(e,t){const r=Je(e),n=Ot(e),i=r.visualViewport;let o=n.clientWidth,a=n.clientHeight,s=0,l=0;if(i){o=i.width,a=i.height;const c=gd();(!c||c&&t==="fixed")&&(s=i.offsetLeft,l=i.offsetTop)}return{width:o,height:a,x:s,y:l}}const _2=new Set(["absolute","fixed"]);function z2(e,t){const r=dn(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,o=Ft(e)?Hn(e):Lt(1),a=e.clientWidth*o.x,s=e.clientHeight*o.y,l=i*o.x,c=n*o.y;return{width:a,height:s,x:l,y:c}}function sp(e,t,r){let n;if(t==="viewport")n=j2(e,r);else if(t==="document")n=M2(Ot(e));else if(Tt(t))n=z2(t,r);else{const i=qg(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Fa(n)}function Yg(e,t){const r=Fr(e);return r===t||!Tt(r)||oi(r)?!1:Et(r).position==="fixed"||Yg(r,t)}function L2(e,t){const r=t.get(e);if(r)return r;let n=no(e,[],!1).filter(s=>Tt(s)&&pi(s)!=="body"),i=null;const o=Et(e).position==="fixed";let a=o?Fr(e):e;for(;Tt(a)&&!oi(a);){const s=Et(a),l=hd(a);!l&&s.position==="fixed"&&(i=null),(o?!l&&!i:!l&&s.position==="static"&&!!i&&_2.has(i.position)||xo(a)&&!l&&Yg(e,a))?n=n.filter(u=>u!==a):i=s,a=Fr(a)}return t.set(e,n),n}function F2(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const a=[...r==="clippingAncestors"?ss(t)?[]:L2(t,this._c):[].concat(r),n],s=a[0],l=a.reduce((c,u)=>{const f=sp(t,u,i);return c.top=Ke(f.top,c.top),c.right=Lr(f.right,c.right),c.bottom=Lr(f.bottom,c.bottom),c.left=Ke(f.left,c.left),c},sp(t,s,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function O2(e){const{width:t,height:r}=Qg(e);return{width:t,height:r}}function D2(e,t,r){const n=Ft(t),i=Ot(t),o=r==="fixed",a=dn(e,!0,o,t);let s={scrollLeft:0,scrollTop:0};const l=Lt(0);function c(){l.x=yd(i)}if(n||!n&&!o)if((pi(t)!=="body"||xo(i))&&(s=ls(t)),n){const p=dn(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else i&&c();o&&!n&&i&&c();const u=i&&!n&&!o?Kg(i,s):Lt(0),f=a.left+s.scrollLeft-l.x-u.x,g=a.top+s.scrollTop-l.y-u.y;return{x:f,y:g,width:a.width,height:a.height}}function Xs(e){return Et(e).position==="static"}function lp(e,t){if(!Ft(e)||Et(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ot(e)===r&&(r=r.ownerDocument.body),r}function Xg(e,t){const r=Je(e);if(ss(e))return r;if(!Ft(e)){let i=Fr(e);for(;i&&!oi(i);){if(Tt(i)&&!Xs(i))return i;i=Fr(i)}return r}let n=lp(e,t);for(;n&&w2(n)&&Xs(n);)n=lp(n,t);return n&&oi(n)&&Xs(n)&&!hd(n)?r:n||E2(e)||r}const B2=async function(e){const t=this.getOffsetParent||Xg,r=this.getDimensions,n=await r(e.floating);return{reference:D2(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function U2(e){return Et(e).direction==="rtl"}const $2={convertOffsetParentRelativeRectToViewportRelativeRect:N2,getDocumentElement:Ot,getClippingRect:F2,getOffsetParent:Xg,getElementRects:B2,getClientRects:I2,getDimensions:O2,getScale:Hn,isElement:Tt,isRTL:U2};function Jg(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function H2(e,t){let r=null,n;const i=Ot(e);function o(){var s;clearTimeout(n),(s=r)==null||s.disconnect(),r=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:u,top:f,width:g,height:p}=c;if(s||t(),!g||!p)return;const w=Vo(f),v=Vo(i.clientWidth-(u+g)),b=Vo(i.clientHeight-(f+p)),m=Vo(u),y={rootMargin:-w+"px "+-v+"px "+-b+"px "+-m+"px",threshold:Ke(0,Lr(1,l))||1};let k=!0;function C(S){const T=S[0].intersectionRatio;if(T!==l){if(!k)return a();T?a(!1,T):n=setTimeout(()=>{a(!1,1e-7)},1e3)}T===1&&!Jg(c,e.getBoundingClientRect())&&a(),k=!1}try{r=new IntersectionObserver(C,{...y,root:i.ownerDocument})}catch{r=new IntersectionObserver(C,y)}r.observe(e)}return a(!0),o}function W2(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=md(e),u=i||o?[...c?no(c):[],...no(t)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",r,{passive:!0}),o&&m.addEventListener("resize",r)});const f=c&&s?H2(c,r):null;let g=-1,p=null;a&&(p=new ResizeObserver(m=>{let[h]=m;h&&h.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(t)})),r()}),c&&!l&&p.observe(c),p.observe(t));let w,v=l?dn(e):null;l&&b();function b(){const m=dn(e);v&&!Jg(v,m)&&r(),v=m,w=requestAnimationFrame(b)}return r(),()=>{var m;u.forEach(h=>{i&&h.removeEventListener("scroll",r),o&&h.removeEventListener("resize",r)}),f==null||f(),(m=p)==null||m.disconnect(),p=null,l&&cancelAnimationFrame(w)}}const G2=g2,V2=m2,Q2=p2,q2=v2,K2=f2,cp=u2,Y2=y2,X2=(e,t,r)=>{const n=new Map,i={platform:$2,...r},o={...i.platform,_c:n};return d2(e,t,{...i,platform:o})};var J2=typeof document<"u",Z2=function(){},ca=J2?x.useLayoutEffect:Z2;function Oa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!Oa(e[n],t[n]))return!1;return!0}if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,i[n]))return!1;for(n=r;n--!==0;){const o=i[n];if(!(o==="_owner"&&e.$$typeof)&&!Oa(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Zg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function dp(e,t){const r=Zg(e);return Math.round(t*r)/r}function Js(e){const t=x.useRef(e);return ca(()=>{t.current=e}),t}function eb(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:i,elements:{reference:o,floating:a}={},transform:s=!0,whileElementsMounted:l,open:c}=e,[u,f]=x.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[g,p]=x.useState(n);Oa(g,n)||p(n);const[w,v]=x.useState(null),[b,m]=x.useState(null),h=x.useCallback(P=>{P!==S.current&&(S.current=P,v(P))},[]),y=x.useCallback(P=>{P!==T.current&&(T.current=P,m(P))},[]),k=o||w,C=a||b,S=x.useRef(null),T=x.useRef(null),R=x.useRef(u),j=l!=null,M=Js(l),D=Js(i),F=Js(c),V=x.useCallback(()=>{if(!S.current||!T.current)return;const P={placement:t,strategy:r,middleware:g};D.current&&(P.platform=D.current),X2(S.current,T.current,P).then(A=>{const z={...A,isPositioned:F.current!==!1};_.current&&!Oa(R.current,z)&&(R.current=z,yo.flushSync(()=>{f(z)}))})},[g,t,r,D,F]);ca(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[c]);const _=x.useRef(!1);ca(()=>(_.current=!0,()=>{_.current=!1}),[]),ca(()=>{if(k&&(S.current=k),C&&(T.current=C),k&&C){if(M.current)return M.current(k,C,V);V()}},[k,C,V,M,j]);const K=x.useMemo(()=>({reference:S,floating:T,setReference:h,setFloating:y}),[h,y]),B=x.useMemo(()=>({reference:k,floating:C}),[k,C]),H=x.useMemo(()=>{const P={position:r,left:0,top:0};if(!B.floating)return P;const A=dp(B.floating,u.x),z=dp(B.floating,u.y);return s?{...P,transform:"translate("+A+"px, "+z+"px)",...Zg(B.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:A,top:z}},[r,s,B.floating,u.x,u.y]);return x.useMemo(()=>({...u,update:V,refs:K,elements:B,floatingStyles:H}),[u,V,K,B,H])}const tb=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:i}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?cp({element:n.current,padding:i}).fn(r):{}:n?cp({element:n,padding:i}).fn(r):{}}}},rb=(e,t)=>({...G2(e),options:[e,t]}),nb=(e,t)=>({...V2(e),options:[e,t]}),ib=(e,t)=>({...Y2(e),options:[e,t]}),ob=(e,t)=>({...Q2(e),options:[e,t]}),ab=(e,t)=>({...q2(e),options:[e,t]}),sb=(e,t)=>({...K2(e),options:[e,t]}),lb=(e,t)=>({...tb(e),options:[e,t]});var cb="Arrow",em=x.forwardRef((e,t)=>{const{children:r,width:n=10,height:i=5,...o}=e;return d.jsx(Qe.svg,{...o,ref:t,width:n,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:d.jsx("polygon",{points:"0,0 30,0 15,10"})})});em.displayName=cb;var db=em;function ub(e){const[t,r]=x.useState(void 0);return zr(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let a,s;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;a=c.inlineSize,s=c.blockSize}else a=e.offsetWidth,s=e.offsetHeight;r({width:a,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}var tm="Popper",[rm,nm]=ns(tm),[W3,im]=rm(tm),om="PopperAnchor",am=x.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:n,...i}=e,o=im(om,r),a=x.useRef(null),s=St(t,a);return x.useEffect(()=>{o.onAnchorChange((n==null?void 0:n.current)||a.current)}),n?null:d.jsx(Qe.div,{...i,ref:s})});am.displayName=om;var vd="PopperContent",[pb,fb]=rm(vd),sm=x.forwardRef((e,t)=>{var Z,mn,tr,$r,rr,yn;const{__scopePopper:r,side:n="bottom",sideOffset:i=0,align:o="center",alignOffset:a=0,arrowPadding:s=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:p="optimized",onPlaced:w,...v}=e,b=im(vd,r),[m,h]=x.useState(null),y=St(t,nr=>h(nr)),[k,C]=x.useState(null),S=ub(k),T=(S==null?void 0:S.width)??0,R=(S==null?void 0:S.height)??0,j=n+(o!=="center"?"-"+o:""),M=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},D=Array.isArray(c)?c:[c],F=D.length>0,V={padding:M,boundary:D.filter(gb),altBoundary:F},{refs:_,floatingStyles:K,placement:B,isPositioned:H,middlewareData:P}=eb({strategy:"fixed",placement:j,whileElementsMounted:(...nr)=>W2(...nr,{animationFrame:p==="always"}),elements:{reference:b.anchor},middleware:[rb({mainAxis:i+R,alignmentAxis:a}),l&&nb({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?ib():void 0,...V}),l&&ob({...V}),ab({...V,apply:({elements:nr,rects:wo,availableWidth:ms,availableHeight:ko})=>{const{width:ys,height:fi}=wo.reference,vn=nr.floating.style;vn.setProperty("--radix-popper-available-width",`${ms}px`),vn.setProperty("--radix-popper-available-height",`${ko}px`),vn.setProperty("--radix-popper-anchor-width",`${ys}px`),vn.setProperty("--radix-popper-anchor-height",`${fi}px`)}}),k&&lb({element:k,padding:s}),mb({arrowWidth:T,arrowHeight:R}),g&&sb({strategy:"referenceHidden",...V})]}),[A,z]=dm(B),W=_r(w);zr(()=>{H&&(W==null||W())},[H,W]);const O=(Z=P.arrow)==null?void 0:Z.x,Q=(mn=P.arrow)==null?void 0:mn.y,Y=((tr=P.arrow)==null?void 0:tr.centerOffset)!==0,[ge,Ee]=x.useState();return zr(()=>{m&&Ee(window.getComputedStyle(m).zIndex)},[m]),d.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:H?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ge,"--radix-popper-transform-origin":[($r=P.transformOrigin)==null?void 0:$r.x,(rr=P.transformOrigin)==null?void 0:rr.y].join(" "),...((yn=P.hide)==null?void 0:yn.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:d.jsx(pb,{scope:r,placedSide:A,onArrowChange:C,arrowX:O,arrowY:Q,shouldHideArrow:Y,children:d.jsx(Qe.div,{"data-side":A,"data-align":z,...v,ref:y,style:{...v.style,animation:H?void 0:"none"}})})})});sm.displayName=vd;var lm="PopperArrow",hb={top:"bottom",right:"left",bottom:"top",left:"right"},cm=x.forwardRef(function(t,r){const{__scopePopper:n,...i}=t,o=fb(lm,n),a=hb[o.placedSide];return d.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:d.jsx(db,{...i,ref:r,style:{...i.style,display:"block"}})})});cm.displayName=lm;function gb(e){return e!==null}var mb=e=>({name:"transformOrigin",options:e,fn(t){var b,m,h;const{placement:r,rects:n,middlewareData:i}=t,a=((b=i.arrow)==null?void 0:b.centerOffset)!==0,s=a?0:e.arrowWidth,l=a?0:e.arrowHeight,[c,u]=dm(r),f={start:"0%",center:"50%",end:"100%"}[u],g=(((m=i.arrow)==null?void 0:m.x)??0)+s/2,p=(((h=i.arrow)==null?void 0:h.y)??0)+l/2;let w="",v="";return c==="bottom"?(w=a?f:`${g}px`,v=`${-l}px`):c==="top"?(w=a?f:`${g}px`,v=`${n.floating.height+l}px`):c==="right"?(w=`${-l}px`,v=a?f:`${p}px`):c==="left"&&(w=`${n.floating.width+l}px`,v=a?f:`${p}px`),{data:{x:w,y:v}}}});function dm(e){const[t,r="center"]=e.split("-");return[t,r]}var yb=am,vb=sm,xb=cm,[cs,G3]=ns("Tooltip",[nm]),xd=nm(),um="TooltipProvider",bb=700,up="tooltip.open",[wb,pm]=cs(um),fm=e=>{const{__scopeTooltip:t,delayDuration:r=bb,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:o}=e,a=x.useRef(!0),s=x.useRef(!1),l=x.useRef(0);return x.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),d.jsx(wb,{scope:t,isOpenDelayedRef:a,delayDuration:r,onOpen:x.useCallback(()=>{window.clearTimeout(l.current),a.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>a.current=!0,n)},[n]),isPointerInTransitRef:s,onPointerInTransitChange:x.useCallback(c=>{s.current=c},[]),disableHoverableContent:i,children:o})};fm.displayName=um;var hm="Tooltip",[V3,ds]=cs(hm),nc="TooltipTrigger",kb=x.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,i=ds(nc,r),o=pm(nc,r),a=xd(r),s=x.useRef(null),l=St(t,s,i.onTriggerChange),c=x.useRef(!1),u=x.useRef(!1),f=x.useCallback(()=>c.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),d.jsx(yb,{asChild:!0,...a,children:d.jsx(Qe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:l,onPointerMove:xe(e.onPointerMove,g=>{g.pointerType!=="touch"&&!u.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:xe(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:xe(e.onPointerDown,()=>{i.open&&i.onClose(),c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:xe(e.onFocus,()=>{c.current||i.onOpen()}),onBlur:xe(e.onBlur,i.onClose),onClick:xe(e.onClick,i.onClose)})})});kb.displayName=nc;var Cb="TooltipPortal",[Q3,Sb]=cs(Cb,{forceMount:void 0}),ai="TooltipContent",gm=x.forwardRef((e,t)=>{const r=Sb(ai,e.__scopeTooltip),{forceMount:n=r.forceMount,side:i="top",...o}=e,a=ds(ai,e.__scopeTooltip);return d.jsx(od,{present:n||a.open,children:a.disableHoverableContent?d.jsx(mm,{side:i,...o,ref:t}):d.jsx(Tb,{side:i,...o,ref:t})})}),Tb=x.forwardRef((e,t)=>{const r=ds(ai,e.__scopeTooltip),n=pm(ai,e.__scopeTooltip),i=x.useRef(null),o=St(t,i),[a,s]=x.useState(null),{trigger:l,onClose:c}=r,u=i.current,{onPointerInTransitChange:f}=n,g=x.useCallback(()=>{s(null),f(!1)},[f]),p=x.useCallback((w,v)=>{const b=w.currentTarget,m={x:w.clientX,y:w.clientY},h=Nb(m,b.getBoundingClientRect()),y=Ib(m,h),k=Mb(v.getBoundingClientRect()),C=_b([...y,...k]);s(C),f(!0)},[f]);return x.useEffect(()=>()=>g(),[g]),x.useEffect(()=>{if(l&&u){const w=b=>p(b,u),v=b=>p(b,l);return l.addEventListener("pointerleave",w),u.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",w),u.removeEventListener("pointerleave",v)}}},[l,u,p,g]),x.useEffect(()=>{if(a){const w=v=>{const b=v.target,m={x:v.clientX,y:v.clientY},h=(l==null?void 0:l.contains(b))||(u==null?void 0:u.contains(b)),y=!jb(m,a);h?g():y&&(g(),c())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[l,u,a,c,g]),d.jsx(mm,{...e,ref:o})}),[Eb,Pb]=cs(hm,{isInside:!1}),Ab=Iy("TooltipContent"),mm=x.forwardRef((e,t)=>{const{__scopeTooltip:r,children:n,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:a,...s}=e,l=ds(ai,r),c=xd(r),{onClose:u}=l;return x.useEffect(()=>(document.addEventListener(up,u),()=>document.removeEventListener(up,u)),[u]),x.useEffect(()=>{if(l.trigger){const f=g=>{const p=g.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,u]),d.jsx(id,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:f=>f.preventDefault(),onDismiss:u,children:d.jsxs(vb,{"data-state":l.stateAttribute,...c,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[d.jsx(Ab,{children:n}),d.jsx(Eb,{scope:r,isInside:!0,children:d.jsx(rv,{id:l.contentId,role:"tooltip",children:i||n})})]})})});gm.displayName=ai;var ym="TooltipArrow",Rb=x.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,i=xd(r);return Pb(ym,r).isInside?null:d.jsx(xb,{...i,...n,ref:t})});Rb.displayName=ym;function Nb(e,t){const r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(r,n,i,o)){case o:return"left";case i:return"right";case r:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ib(e,t,r=5){const n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return n}function Mb(e){const{top:t,right:r,bottom:n,left:i}=e;return[{x:i,y:t},{x:r,y:t},{x:r,y:n},{x:i,y:n}]}function jb(e,t){const{x:r,y:n}=e;let i=!1;for(let o=0,a=t.length-1;o<t.length;a=o++){const s=t[o],l=t[a],c=s.x,u=s.y,f=l.x,g=l.y;u>n!=g>n&&r<(f-c)*(n-u)/(g-u)+c&&(i=!i)}return i}function _b(e){const t=e.slice();return t.sort((r,n)=>r.x<n.x?-1:r.x>n.x?1:r.y<n.y?-1:r.y>n.y?1:0),zb(t)}function zb(e){if(e.length<=1)return e.slice();const t=[];for(let n=0;n<e.length;n++){const i=e[n];for(;t.length>=2;){const o=t[t.length-1],a=t[t.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))t.pop();else break}t.push(i)}t.pop();const r=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;r.length>=2;){const o=r[r.length-1],a=r[r.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))r.pop();else break}r.push(i)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var Lb=fm,vm=gm;const Fb=Lb,Ob=x.forwardRef(({className:e,sideOffset:t=4,...r},n)=>d.jsx(vm,{ref:n,sideOffset:t,className:De("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r}));Ob.displayName=vm.displayName;var us=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ps=typeof window>"u"||"Deno"in globalThis;function mt(){}function Db(e,t){return typeof e=="function"?e(t):e}function Bb(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ub(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ic(e,t){return typeof e=="function"?e(t):e}function $b(e,t){return typeof e=="function"?e(t):e}function pp(e,t){const{type:r="all",exact:n,fetchStatus:i,predicate:o,queryKey:a,stale:s}=e;if(a){if(n){if(t.queryHash!==bd(a,t.options))return!1}else if(!oo(t.queryKey,a))return!1}if(r!=="all"){const l=t.isActive();if(r==="active"&&!l||r==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||i&&i!==t.state.fetchStatus||o&&!o(t))}function fp(e,t){const{exact:r,status:n,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(io(t.options.mutationKey)!==io(o))return!1}else if(!oo(t.options.mutationKey,o))return!1}return!(n&&t.state.status!==n||i&&!i(t))}function bd(e,t){return((t==null?void 0:t.queryKeyHashFn)||io)(e)}function io(e){return JSON.stringify(e,(t,r)=>oc(r)?Object.keys(r).sort().reduce((n,i)=>(n[i]=r[i],n),{}):r)}function oo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(r=>oo(e[r],t[r])):!1}function xm(e,t){if(e===t)return e;const r=hp(e)&&hp(t);if(r||oc(e)&&oc(t)){const n=r?e:Object.keys(e),i=n.length,o=r?t:Object.keys(t),a=o.length,s=r?[]:{},l=new Set(n);let c=0;for(let u=0;u<a;u++){const f=r?u:o[u];(!r&&l.has(f)||r)&&e[f]===void 0&&t[f]===void 0?(s[f]=void 0,c++):(s[f]=xm(e[f],t[f]),s[f]===e[f]&&e[f]!==void 0&&c++)}return i===a&&c===i?e:s}return t}function hp(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function oc(e){if(!gp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const r=t.prototype;return!(!gp(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function gp(e){return Object.prototype.toString.call(e)==="[object Object]"}function Hb(e){return new Promise(t=>{setTimeout(t,e)})}function Wb(e,t,r){return typeof r.structuralSharing=="function"?r.structuralSharing(e,t):r.structuralSharing!==!1?xm(e,t):t}function Gb(e,t,r=0){const n=[...e,t];return r&&n.length>r?n.slice(1):n}function Vb(e,t,r=0){const n=[t,...e];return r&&n.length>r?n.slice(0,-1):n}var wd=Symbol();function bm(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===wd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Yr,gr,Wn,Ap,Qb=(Ap=class extends us{constructor(){super();J(this,Yr);J(this,gr);J(this,Wn);$(this,Wn,t=>{if(!ps&&window.addEventListener){const r=()=>t();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){E(this,gr)||this.setEventListener(E(this,Wn))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,gr))==null||t.call(this),$(this,gr,void 0))}setEventListener(t){var r;$(this,Wn,t),(r=E(this,gr))==null||r.call(this),$(this,gr,t(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()}))}setFocused(t){E(this,Yr)!==t&&($(this,Yr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(r=>{r(t)})}isFocused(){var t;return typeof E(this,Yr)=="boolean"?E(this,Yr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Yr=new WeakMap,gr=new WeakMap,Wn=new WeakMap,Ap),wm=new Qb,Gn,mr,Vn,Rp,qb=(Rp=class extends us{constructor(){super();J(this,Gn,!0);J(this,mr);J(this,Vn);$(this,Vn,t=>{if(!ps&&window.addEventListener){const r=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}}})}onSubscribe(){E(this,mr)||this.setEventListener(E(this,Vn))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,mr))==null||t.call(this),$(this,mr,void 0))}setEventListener(t){var r;$(this,Vn,t),(r=E(this,mr))==null||r.call(this),$(this,mr,t(this.setOnline.bind(this)))}setOnline(t){E(this,Gn)!==t&&($(this,Gn,t),this.listeners.forEach(n=>{n(t)}))}isOnline(){return E(this,Gn)}},Gn=new WeakMap,mr=new WeakMap,Vn=new WeakMap,Rp),Da=new qb;function Kb(){let e,t;const r=new Promise((i,o)=>{e=i,t=o});r.status="pending",r.catch(()=>{});function n(i){Object.assign(r,i),delete r.resolve,delete r.reject}return r.resolve=i=>{n({status:"fulfilled",value:i}),e(i)},r.reject=i=>{n({status:"rejected",reason:i}),t(i)},r}function Yb(e){return Math.min(1e3*2**e,3e4)}function km(e){return(e??"online")==="online"?Da.isOnline():!0}var Cm=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Zs(e){return e instanceof Cm}function Sm(e){let t=!1,r=0,n=!1,i;const o=Kb(),a=v=>{var b;n||(g(new Cm(v)),(b=e.abort)==null||b.call(e))},s=()=>{t=!0},l=()=>{t=!1},c=()=>wm.isFocused()&&(e.networkMode==="always"||Da.isOnline())&&e.canRun(),u=()=>km(e.networkMode)&&e.canRun(),f=v=>{var b;n||(n=!0,(b=e.onSuccess)==null||b.call(e,v),i==null||i(),o.resolve(v))},g=v=>{var b;n||(n=!0,(b=e.onError)==null||b.call(e,v),i==null||i(),o.reject(v))},p=()=>new Promise(v=>{var b;i=m=>{(n||c())&&v(m)},(b=e.onPause)==null||b.call(e)}).then(()=>{var v;i=void 0,n||(v=e.onContinue)==null||v.call(e)}),w=()=>{if(n)return;let v;const b=r===0?e.initialPromise:void 0;try{v=b??e.fn()}catch(m){v=Promise.reject(m)}Promise.resolve(v).then(f).catch(m=>{var S;if(n)return;const h=e.retry??(ps?0:3),y=e.retryDelay??Yb,k=typeof y=="function"?y(r,m):y,C=h===!0||typeof h=="number"&&r<h||typeof h=="function"&&h(r,m);if(t||!C){g(m);return}r++,(S=e.onFail)==null||S.call(e,r,m),Hb(k).then(()=>c()?void 0:p()).then(()=>{t?g(m):w()})})};return{promise:o,cancel:a,continue:()=>(i==null||i(),o),cancelRetry:s,continueRetry:l,canStart:u,start:()=>(u()?w():p().then(w),o)}}var Xb=e=>setTimeout(e,0);function Jb(){let e=[],t=0,r=s=>{s()},n=s=>{s()},i=Xb;const o=s=>{t?e.push(s):i(()=>{r(s)})},a=()=>{const s=e;e=[],s.length&&i(()=>{n(()=>{s.forEach(l=>{r(l)})})})};return{batch:s=>{let l;t++;try{l=s()}finally{t--,t||a()}return l},batchCalls:s=>(...l)=>{o(()=>{s(...l)})},schedule:o,setNotifyFunction:s=>{r=s},setBatchNotifyFunction:s=>{n=s},setScheduler:s=>{i=s}}}var ze=Jb(),Xr,Np,Tm=(Np=class{constructor(){J(this,Xr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Bb(this.gcTime)&&$(this,Xr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ps?1/0:5*60*1e3))}clearGcTimeout(){E(this,Xr)&&(clearTimeout(E(this,Xr)),$(this,Xr,void 0))}},Xr=new WeakMap,Np),Qn,Jr,nt,Zr,Ne,co,en,yt,Bt,Ip,Zb=(Ip=class extends Tm{constructor(t){super();J(this,yt);J(this,Qn);J(this,Jr);J(this,nt);J(this,Zr);J(this,Ne);J(this,co);J(this,en);$(this,en,!1),$(this,co,t.defaultOptions),this.setOptions(t.options),this.observers=[],$(this,Zr,t.client),$(this,nt,E(this,Zr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,$(this,Qn,tw(this.options)),this.state=t.state??E(this,Qn),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,Ne))==null?void 0:t.promise}setOptions(t){this.options={...E(this,co),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,nt).remove(this)}setData(t,r){const n=Wb(this.state.data,t,this.options);return Pe(this,yt,Bt).call(this,{data:n,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),n}setState(t,r){Pe(this,yt,Bt).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var n,i;const r=(n=E(this,Ne))==null?void 0:n.promise;return(i=E(this,Ne))==null||i.cancel(t),r?r.then(mt).catch(mt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,Qn))}isActive(){return this.observers.some(t=>$b(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===wd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>ic(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Ub(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(n=>n.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=E(this,Ne))==null||r.continue()}onOnline(){var r;const t=this.observers.find(n=>n.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=E(this,Ne))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(E(this,Ne)&&(E(this,en)?E(this,Ne).cancel({revert:!0}):E(this,Ne).cancelRetry()),this.scheduleGc()),E(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Pe(this,yt,Bt).call(this,{type:"invalidate"})}fetch(t,r){var c,u,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(E(this,Ne))return E(this,Ne).continueRetry(),E(this,Ne).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(p=>p.options.queryFn);g&&this.setOptions(g.options)}const n=new AbortController,i=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>($(this,en,!0),n.signal)})},o=()=>{const g=bm(this.options,r),w=(()=>{const v={client:E(this,Zr),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return $(this,en,!1),this.options.persister?this.options.persister(g,w,this):g(w)},s=(()=>{const g={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:E(this,Zr),state:this.state,fetchFn:o};return i(g),g})();(c=this.options.behavior)==null||c.onFetch(s,this),$(this,Jr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=s.fetchOptions)==null?void 0:u.meta))&&Pe(this,yt,Bt).call(this,{type:"fetch",meta:(f=s.fetchOptions)==null?void 0:f.meta});const l=g=>{var p,w,v,b;Zs(g)&&g.silent||Pe(this,yt,Bt).call(this,{type:"error",error:g}),Zs(g)||((w=(p=E(this,nt).config).onError)==null||w.call(p,g,this),(b=(v=E(this,nt).config).onSettled)==null||b.call(v,this.state.data,g,this)),this.scheduleGc()};return $(this,Ne,Sm({initialPromise:r==null?void 0:r.initialPromise,fn:s.fetchFn,abort:n.abort.bind(n),onSuccess:g=>{var p,w,v,b;if(g===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(m){l(m);return}(w=(p=E(this,nt).config).onSuccess)==null||w.call(p,g,this),(b=(v=E(this,nt).config).onSettled)==null||b.call(v,g,this.state.error,this),this.scheduleGc()},onError:l,onFail:(g,p)=>{Pe(this,yt,Bt).call(this,{type:"failed",failureCount:g,error:p})},onPause:()=>{Pe(this,yt,Bt).call(this,{type:"pause"})},onContinue:()=>{Pe(this,yt,Bt).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),E(this,Ne).start()}},Qn=new WeakMap,Jr=new WeakMap,nt=new WeakMap,Zr=new WeakMap,Ne=new WeakMap,co=new WeakMap,en=new WeakMap,yt=new WeakSet,Bt=function(t){const r=n=>{switch(t.type){case"failed":return{...n,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...ew(n.data,this.options),fetchMeta:t.meta??null};case"success":return $(this,Jr,void 0),{...n,data:t.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Zs(i)&&i.revert&&E(this,Jr)?{...E(this,Jr),fetchStatus:"idle"}:{...n,error:i,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...t.state}}};this.state=r(this.state),ze.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),E(this,nt).notify({query:this,type:"updated",action:t})})},Ip);function ew(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:km(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function tw(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,r=t!==void 0,n=r?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Rt,Mp,rw=(Mp=class extends us{constructor(t={}){super();J(this,Rt);this.config=t,$(this,Rt,new Map)}build(t,r,n){const i=r.queryKey,o=r.queryHash??bd(i,r);let a=this.get(o);return a||(a=new Zb({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(r),state:n,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){E(this,Rt).has(t.queryHash)||(E(this,Rt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const r=E(this,Rt).get(t.queryHash);r&&(t.destroy(),r===t&&E(this,Rt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ze.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Rt).get(t)}getAll(){return[...E(this,Rt).values()]}find(t){const r={exact:!0,...t};return this.getAll().find(n=>pp(r,n))}findAll(t={}){const r=this.getAll();return Object.keys(t).length>0?r.filter(n=>pp(t,n)):r}notify(t){ze.batch(()=>{this.listeners.forEach(r=>{r(t)})})}onFocus(){ze.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ze.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Rt=new WeakMap,Mp),Nt,je,tn,It,dr,jp,nw=(jp=class extends Tm{constructor(t){super();J(this,It);J(this,Nt);J(this,je);J(this,tn);this.mutationId=t.mutationId,$(this,je,t.mutationCache),$(this,Nt,[]),this.state=t.state||iw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,Nt).includes(t)||(E(this,Nt).push(t),this.clearGcTimeout(),E(this,je).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){$(this,Nt,E(this,Nt).filter(r=>r!==t)),this.scheduleGc(),E(this,je).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,Nt).length||(this.state.status==="pending"?this.scheduleGc():E(this,je).remove(this))}continue(){var t;return((t=E(this,tn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,a,s,l,c,u,f,g,p,w,v,b,m,h,y,k,C,S,T,R;const r=()=>{Pe(this,It,dr).call(this,{type:"continue"})};$(this,tn,Sm({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(j,M)=>{Pe(this,It,dr).call(this,{type:"failed",failureCount:j,error:M})},onPause:()=>{Pe(this,It,dr).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,je).canRun(this)}));const n=this.state.status==="pending",i=!E(this,tn).canStart();try{if(n)r();else{Pe(this,It,dr).call(this,{type:"pending",variables:t,isPaused:i}),await((a=(o=E(this,je).config).onMutate)==null?void 0:a.call(o,t,this));const M=await((l=(s=this.options).onMutate)==null?void 0:l.call(s,t));M!==this.state.context&&Pe(this,It,dr).call(this,{type:"pending",context:M,variables:t,isPaused:i})}const j=await E(this,tn).start();return await((u=(c=E(this,je).config).onSuccess)==null?void 0:u.call(c,j,t,this.state.context,this)),await((g=(f=this.options).onSuccess)==null?void 0:g.call(f,j,t,this.state.context)),await((w=(p=E(this,je).config).onSettled)==null?void 0:w.call(p,j,null,this.state.variables,this.state.context,this)),await((b=(v=this.options).onSettled)==null?void 0:b.call(v,j,null,t,this.state.context)),Pe(this,It,dr).call(this,{type:"success",data:j}),j}catch(j){try{throw await((h=(m=E(this,je).config).onError)==null?void 0:h.call(m,j,t,this.state.context,this)),await((k=(y=this.options).onError)==null?void 0:k.call(y,j,t,this.state.context)),await((S=(C=E(this,je).config).onSettled)==null?void 0:S.call(C,void 0,j,this.state.variables,this.state.context,this)),await((R=(T=this.options).onSettled)==null?void 0:R.call(T,void 0,j,t,this.state.context)),j}finally{Pe(this,It,dr).call(this,{type:"error",error:j})}}finally{E(this,je).runNext(this)}}},Nt=new WeakMap,je=new WeakMap,tn=new WeakMap,It=new WeakSet,dr=function(t){const r=n=>{switch(t.type){case"failed":return{...n,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...n,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:t.error,failureCount:n.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),ze.batch(()=>{E(this,Nt).forEach(n=>{n.onMutationUpdate(t)}),E(this,je).notify({mutation:this,type:"updated",action:t})})},jp);function iw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ht,vt,uo,_p,ow=(_p=class extends us{constructor(t={}){super();J(this,Ht);J(this,vt);J(this,uo);this.config=t,$(this,Ht,new Set),$(this,vt,new Map),$(this,uo,0)}build(t,r,n){const i=new nw({mutationCache:this,mutationId:++To(this,uo)._,options:t.defaultMutationOptions(r),state:n});return this.add(i),i}add(t){E(this,Ht).add(t);const r=Qo(t);if(typeof r=="string"){const n=E(this,vt).get(r);n?n.push(t):E(this,vt).set(r,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,Ht).delete(t)){const r=Qo(t);if(typeof r=="string"){const n=E(this,vt).get(r);if(n)if(n.length>1){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}else n[0]===t&&E(this,vt).delete(r)}}this.notify({type:"removed",mutation:t})}canRun(t){const r=Qo(t);if(typeof r=="string"){const n=E(this,vt).get(r),i=n==null?void 0:n.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var n;const r=Qo(t);if(typeof r=="string"){const i=(n=E(this,vt).get(r))==null?void 0:n.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ze.batch(()=>{E(this,Ht).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,Ht).clear(),E(this,vt).clear()})}getAll(){return Array.from(E(this,Ht))}find(t){const r={exact:!0,...t};return this.getAll().find(n=>fp(r,n))}findAll(t={}){return this.getAll().filter(r=>fp(t,r))}notify(t){ze.batch(()=>{this.listeners.forEach(r=>{r(t)})})}resumePausedMutations(){const t=this.getAll().filter(r=>r.state.isPaused);return ze.batch(()=>Promise.all(t.map(r=>r.continue().catch(mt))))}},Ht=new WeakMap,vt=new WeakMap,uo=new WeakMap,_p);function Qo(e){var t;return(t=e.options.scope)==null?void 0:t.id}function mp(e){return{onFetch:(t,r)=>{var u,f,g,p,w;const n=t.options,i=(g=(f=(u=t.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:g.direction,o=((p=t.state.data)==null?void 0:p.pages)||[],a=((w=t.state.data)==null?void 0:w.pageParams)||[];let s={pages:[],pageParams:[]},l=0;const c=async()=>{let v=!1;const b=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},m=bm(t.options,t.fetchOptions),h=async(y,k,C)=>{if(v)return Promise.reject();if(k==null&&y.pages.length)return Promise.resolve(y);const T=(()=>{const D={client:t.client,queryKey:t.queryKey,pageParam:k,direction:C?"backward":"forward",meta:t.options.meta};return b(D),D})(),R=await m(T),{maxPages:j}=t.options,M=C?Vb:Gb;return{pages:M(y.pages,R,j),pageParams:M(y.pageParams,k,j)}};if(i&&o.length){const y=i==="backward",k=y?aw:yp,C={pages:o,pageParams:a},S=k(n,C);s=await h(C,S,y)}else{const y=e??o.length;do{const k=l===0?a[0]??n.initialPageParam:yp(n,s);if(l>0&&k==null)break;s=await h(s,k),l++}while(l<y)}return s};t.options.persister?t.fetchFn=()=>{var v,b;return(b=(v=t.options).persister)==null?void 0:b.call(v,c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r)}:t.fetchFn=c}}}function yp(e,{pages:t,pageParams:r}){const n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}function aw(e,{pages:t,pageParams:r}){var n;return t.length>0?(n=e.getPreviousPageParam)==null?void 0:n.call(e,t[0],t,r[0],r):void 0}var ue,yr,vr,qn,Kn,xr,Yn,Xn,zp,sw=(zp=class{constructor(e={}){J(this,ue);J(this,yr);J(this,vr);J(this,qn);J(this,Kn);J(this,xr);J(this,Yn);J(this,Xn);$(this,ue,e.queryCache||new rw),$(this,yr,e.mutationCache||new ow),$(this,vr,e.defaultOptions||{}),$(this,qn,new Map),$(this,Kn,new Map),$(this,xr,0)}mount(){To(this,xr)._++,E(this,xr)===1&&($(this,Yn,wm.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onFocus())})),$(this,Xn,Da.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onOnline())})))}unmount(){var e,t;To(this,xr)._--,E(this,xr)===0&&((e=E(this,Yn))==null||e.call(this),$(this,Yn,void 0),(t=E(this,Xn))==null||t.call(this),$(this,Xn,void 0))}isFetching(e){return E(this,ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,yr).findAll({...e,status:"pending"}).length}getQueryData(e){var r;const t=this.defaultQueryOptions({queryKey:e});return(r=E(this,ue).get(t.queryHash))==null?void 0:r.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),r=E(this,ue).build(this,t),n=r.state.data;return n===void 0?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime(ic(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(n))}getQueriesData(e){return E(this,ue).findAll(e).map(({queryKey:t,state:r})=>{const n=r.data;return[t,n]})}setQueryData(e,t,r){const n=this.defaultQueryOptions({queryKey:e}),i=E(this,ue).get(n.queryHash),o=i==null?void 0:i.state.data,a=Db(t,o);if(a!==void 0)return E(this,ue).build(this,n).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return ze.batch(()=>E(this,ue).findAll(e).map(({queryKey:n})=>[n,this.setQueryData(n,t,r)]))}getQueryState(e){var r;const t=this.defaultQueryOptions({queryKey:e});return(r=E(this,ue).get(t.queryHash))==null?void 0:r.state}removeQueries(e){const t=E(this,ue);ze.batch(()=>{t.findAll(e).forEach(r=>{t.remove(r)})})}resetQueries(e,t){const r=E(this,ue);return ze.batch(()=>(r.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const r={revert:!0,...t},n=ze.batch(()=>E(this,ue).findAll(e).map(i=>i.cancel(r)));return Promise.all(n).then(mt).catch(mt)}invalidateQueries(e,t={}){return ze.batch(()=>(E(this,ue).findAll(e).forEach(r=>{r.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const r={...t,cancelRefetch:t.cancelRefetch??!0},n=ze.batch(()=>E(this,ue).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,r);return r.throwOnError||(o=o.catch(mt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(n).then(mt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const r=E(this,ue).build(this,t);return r.isStaleByTime(ic(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(mt).catch(mt)}fetchInfiniteQuery(e){return e.behavior=mp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(mt).catch(mt)}ensureInfiniteQueryData(e){return e.behavior=mp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Da.isOnline()?E(this,yr).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,ue)}getMutationCache(){return E(this,yr)}getDefaultOptions(){return E(this,vr)}setDefaultOptions(e){$(this,vr,e)}setQueryDefaults(e,t){E(this,qn).set(io(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,qn).values()],r={};return t.forEach(n=>{oo(e,n.queryKey)&&Object.assign(r,n.defaultOptions)}),r}setMutationDefaults(e,t){E(this,Kn).set(io(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Kn).values()],r={};return t.forEach(n=>{oo(e,n.mutationKey)&&Object.assign(r,n.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,vr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=bd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===wd&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,vr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,ue).clear(),E(this,yr).clear()}},ue=new WeakMap,yr=new WeakMap,vr=new WeakMap,qn=new WeakMap,Kn=new WeakMap,xr=new WeakMap,Yn=new WeakMap,Xn=new WeakMap,zp),lw=x.createContext(void 0),cw=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),d.jsx(lw.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ao.apply(this,arguments)}var kr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kr||(kr={}));const vp="popstate";function dw(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=fn(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ac("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof o=="string"?o:Ba(o))}function n(i,o){kd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return pw(t,r,n,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uw(){return Math.random().toString(36).substr(2,8)}function xp(e,t){return{usr:e.state,key:e.key,idx:t}}function ac(e,t,r,n){return r===void 0&&(r=null),ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fn(t):t,{state:r,key:t&&t.key||n||uw()})}function Ba(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function pw(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s=kr.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(ao({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=kr.Pop;let b=u(),m=b==null?null:b-c;c=b,l&&l({action:s,location:v.location,delta:m})}function g(b,m){s=kr.Push;let h=ac(v.location,b,m);r&&r(h,b),c=u()+1;let y=xp(h,c),k=v.createHref(h);try{a.pushState(y,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}o&&l&&l({action:s,location:v.location,delta:1})}function p(b,m){s=kr.Replace;let h=ac(v.location,b,m);r&&r(h,b),c=u();let y=xp(h,c),k=v.createHref(h);a.replaceState(y,"",k),o&&l&&l({action:s,location:v.location,delta:0})}function w(b){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ba(b);return h=h.replace(/ $/,"%20"),ye(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vp,f),l=b,()=>{i.removeEventListener(vp,f),l=null}},createHref(b){return t(i,b)},createURL:w,encodeLocation(b){let m=w(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:p,go(b){return a.go(b)}};return v}var bp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bp||(bp={}));function fw(e,t,r){return r===void 0&&(r="/"),hw(e,t,r)}function hw(e,t,r,n){let i=typeof t=="string"?fn(t):t,o=Cd(i.pathname||"/",r);if(o==null)return null;let a=Em(e);gw(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=Pw(o);s=Sw(a[l],c)}return s}function Em(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=Ir([n,l.relativePath]),u=r.concat(l);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Em(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:kw(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Pm(o.path))i(o,a,l)}),t}function Pm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=Pm(n.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function gw(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cw(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const mw=/^:[\w-]+$/,yw=3,vw=2,xw=1,bw=10,ww=-2,wp=e=>e==="*";function kw(e,t){let r=e.split("/"),n=r.length;return r.some(wp)&&(n+=ww),t&&(n+=vw),r.filter(i=>!wp(i)).reduce((i,o)=>i+(mw.test(o)?yw:o===""?xw:bw),n)}function Cw(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function Sw(e,t,r){let{routesMeta:n}=e,i={},o="/",a=[];for(let s=0;s<n.length;++s){let l=n[s],c=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=Tw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),g=l.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Ir([o,f.pathname]),pathnameBase:Iw(Ir([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Ir([o,f.pathnameBase]))}return a}function Tw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ew(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((c,u,f)=>{let{paramName:g,isOptional:p}=u;if(g==="*"){let v=s[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[f];return p&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function Ew(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),kd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(n.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function Pw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Aw(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?fn(e):e;return{pathname:r?r.startsWith("/")?r:Rw(r,t):t,search:Mw(n),hash:jw(i)}}function Rw(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function el(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nw(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Am(e,t){let r=Nw(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Rm(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=fn(e):(i=ao({},e),ye(!i.pathname||!i.pathname.includes("?"),el("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),el("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),el("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=r;else{let f=t.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?t[f]:"/"}let l=Aw(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ir=e=>e.join("/").replace(/\/\/+/g,"/"),Iw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _w(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nm=["post","put","patch","delete"];new Set(Nm);const zw=["get",...Nm];new Set(zw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},so.apply(this,arguments)}const Sd=x.createContext(null),Lw=x.createContext(null),hn=x.createContext(null),fs=x.createContext(null),Ur=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=x.createContext(null);function Fw(e,t){let{relative:r}=t===void 0?{}:t;bo()||ye(!1);let{basename:n,navigator:i}=x.useContext(hn),{hash:o,pathname:a,search:s}=_m(e,{relative:r}),l=a;return n!=="/"&&(l=a==="/"?n:Ir([n,a])),i.createHref({pathname:l,search:s,hash:o})}function bo(){return x.useContext(fs)!=null}function gn(){return bo()||ye(!1),x.useContext(fs).location}function Mm(e){x.useContext(hn).static||x.useLayoutEffect(e)}function jm(){let{isDataRoute:e}=x.useContext(Ur);return e?Xw():Ow()}function Ow(){bo()||ye(!1);let e=x.useContext(Sd),{basename:t,future:r,navigator:n}=x.useContext(hn),{matches:i}=x.useContext(Ur),{pathname:o}=gn(),a=JSON.stringify(Am(i,r.v7_relativeSplatPath)),s=x.useRef(!1);return Mm(()=>{s.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let f=Rm(c,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ir([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,o,e])}function Dw(){let{matches:e}=x.useContext(Ur),t=e[e.length-1];return t?t.params:{}}function _m(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=x.useContext(hn),{matches:i}=x.useContext(Ur),{pathname:o}=gn(),a=JSON.stringify(Am(i,n.v7_relativeSplatPath));return x.useMemo(()=>Rm(e,JSON.parse(a),o,r==="path"),[e,a,o,r])}function Bw(e,t){return Uw(e,t)}function Uw(e,t,r,n){bo()||ye(!1);let{navigator:i}=x.useContext(hn),{matches:o}=x.useContext(Ur),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=gn(),u;if(t){var f;let b=typeof t=="string"?fn(t):t;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||ye(!1),u=b}else u=c;let g=u.pathname||"/",p=g;if(l!=="/"){let b=l.replace(/^\//,"").split("/");p="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=fw(e,{pathname:p}),v=Vw(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,r,n);return t&&v?x.createElement(fs.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kr.Pop}},v):v}function $w(){let e=Yw(),t=_w(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:i},r):null,null)}const Hw=x.createElement($w,null);class Ww extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?x.createElement(Ur.Provider,{value:this.props.routeContext},x.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gw(e){let{routeContext:t,match:r,children:n}=e,i=x.useContext(Sd);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Ur.Provider,{value:t},n)}function Vw(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,s=(i=r)==null?void 0:i.errors;if(s!=null){let u=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||ye(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:g,errors:p}=r,w=f.route.loader&&g[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,g)=>{let p,w=!1,v=null,b=null;r&&(p=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||Hw,l&&(c<0&&g===0?(Jw("route-fallback"),w=!0,b=null):c===g&&(w=!0,b=f.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,g+1)),h=()=>{let y;return p?y=v:w?y=b:f.route.Component?y=x.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,x.createElement(Gw,{match:f,routeContext:{outlet:u,matches:m,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?x.createElement(Ww,{location:r.location,revalidation:r.revalidation,component:v,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var zm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zm||{}),Lm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Lm||{});function Qw(e){let t=x.useContext(Sd);return t||ye(!1),t}function qw(e){let t=x.useContext(Lw);return t||ye(!1),t}function Kw(e){let t=x.useContext(Ur);return t||ye(!1),t}function Fm(e){let t=Kw(),r=t.matches[t.matches.length-1];return r.route.id||ye(!1),r.route.id}function Yw(){var e;let t=x.useContext(Im),r=qw(),n=Fm();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Xw(){let{router:e}=Qw(zm.UseNavigateStable),t=Fm(Lm.UseNavigateStable),r=x.useRef(!1);return Mm(()=>{r.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,so({fromRouteId:t},o)))},[e,t])}const kp={};function Jw(e,t,r){kp[e]||(kp[e]=!0)}function Zw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Cn(e){ye(!1)}function e3(e){let{basename:t="/",children:r=null,location:n,navigationType:i=kr.Pop,navigator:o,static:a=!1,future:s}=e;bo()&&ye(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:o,static:a,future:so({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof n=="string"&&(n=fn(n));let{pathname:u="/",search:f="",hash:g="",state:p=null,key:w="default"}=n,v=x.useMemo(()=>{let b=Cd(u,l);return b==null?null:{location:{pathname:b,search:f,hash:g,state:p,key:w},navigationType:i}},[l,u,f,g,p,w,i]);return v==null?null:x.createElement(hn.Provider,{value:c},x.createElement(fs.Provider,{children:r,value:v}))}function t3(e){let{children:t,location:r}=e;return Bw(sc(t),r)}new Promise(()=>{});function sc(e,t){t===void 0&&(t=[]);let r=[];return x.Children.forEach(e,(n,i)=>{if(!x.isValidElement(n))return;let o=[...t,i];if(n.type===x.Fragment){r.push.apply(r,sc(n.props.children,o));return}n.type!==Cn&&ye(!1),!n.props.index||!n.props.children||ye(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=sc(n.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},lc.apply(this,arguments)}function r3(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function n3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i3(e,t){return e.button===0&&(!t||t==="_self")&&!n3(e)}const o3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a3="6";try{window.__reactRouterVersion=a3}catch{}const s3="startTransition",Cp=Qp[s3];function l3(e){let{basename:t,children:r,future:n,window:i}=e,o=x.useRef();o.current==null&&(o.current=dw({window:i,v5Compat:!0}));let a=o.current,[s,l]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},u=x.useCallback(f=>{c&&Cp?Cp(()=>l(f)):l(f)},[l,c]);return x.useLayoutEffect(()=>a.listen(u),[a,u]),x.useEffect(()=>Zw(n),[n]),x.createElement(e3,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a,future:n})}const c3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vt=x.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:u,viewTransition:f}=t,g=r3(t,o3),{basename:p}=x.useContext(hn),w,v=!1;if(typeof c=="string"&&d3.test(c)&&(w=c,c3))try{let y=new URL(window.location.href),k=c.startsWith("//")?new URL(y.protocol+c):new URL(c),C=Cd(k.pathname,p);k.origin===y.origin&&C!=null?c=C+k.search+k.hash:v=!0}catch{}let b=Fw(c,{relative:i}),m=u3(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:f});function h(y){n&&n(y),y.defaultPrevented||m(y)}return x.createElement("a",lc({},g,{href:w||b,onClick:v||o?n:h,ref:r,target:l}))});var Sp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sp||(Sp={}));var Tp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tp||(Tp={}));function u3(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=jm(),c=gn(),u=_m(e,{relative:a});return x.useCallback(f=>{if(i3(f,r)){f.preventDefault();let g=n!==void 0?n:Ba(c)===Ba(u);l(e,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[c,l,u,n,i,r,e,o,a,s])}const Td=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(!1),i=gn(),o=jm();x.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const a=s=>{if(i.pathname==="/"){const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})}else o(`/#${s}`,{replace:!0}),setTimeout(()=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})},100);n(!1)};return d.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-background/90 backdrop-blur-md border-b border-border":"bg-transparent"}`,children:d.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"flex items-center justify-between h-16 lg:h-20",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx(Vt,{to:"/",onClick:s=>{if(i.pathname==="/"){s.preventDefault();const l=document.getElementById("hero");l&&l.scrollIntoView({behavior:"smooth"})}},className:"text-2xl font-serif font-bold gradient-text hover:scale-105 transition-transform duration-300",children:"Ahmed Wafdy"})}),d.jsx("div",{className:"hidden md:block",children:d.jsx("div",{className:"ml-10 flex items-baseline space-x-8",children:["About","Skills","Experience","Portfolio","Blog","Contact"].map(s=>{const l=s.toLowerCase();return l==="blog"?d.jsxs(Vt,{to:"/blog",className:"text-muted-foreground hover:text-primary transition-colors duration-300 relative group px-3 py-2",onClick:()=>n(!1),children:[s,d.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"})]},s):d.jsxs("button",{onClick:()=>a(l),className:"text-muted-foreground hover:text-primary transition-colors duration-300 relative group px-3 py-2",children:[s,d.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"})]},s)})})}),d.jsx("div",{className:"md:hidden",children:d.jsx("button",{onClick:()=>n(!r),className:"text-muted-foreground hover:text-primary transition-colors duration-300 p-2",children:r?d.jsx(Mg,{size:24}):d.jsx(Iv,{size:24})})})]}),r&&d.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border",children:d.jsx("div",{className:"px-6 py-4 space-y-4",children:["About","Skills","Experience","Portfolio","Blog","Contact"].map(s=>{const l=s.toLowerCase();return l==="blog"?d.jsx(Vt,{to:"/blog",className:"block text-muted-foreground hover:text-primary transition-colors duration-300 text-lg",onClick:()=>n(!1),children:s},s):d.jsx("button",{onClick:()=>a(l),className:"block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 text-lg",children:s},s)})})})]})})},p3=cd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),lo=x.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...i},o)=>{const a=n?Ry:"button";return d.jsx(a,{className:De(p3({variant:t,size:r,className:e})),ref:o,...i})});lo.displayName="Button";const f3=()=>{const e=t=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})};return d.jsxs("section",{id:"hero",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 gradient-bg opacity-20"}),d.jsxs("div",{className:"absolute inset-0",children:[d.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"}),d.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"})]}),d.jsxs("div",{className:"relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("h1",{className:"text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight",children:[d.jsx("span",{className:"block",children:"Ahmed Adel"}),d.jsx("span",{className:"gradient-text block",children:"Wafdy"})]}),d.jsx("p",{className:"text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left animation-delay-300",children:"Automotive Software Engineer | C++, Yocto Project & Embedded Linux Enthusiast"}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right animation-delay-600",children:[d.jsx(lo,{size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-lift glow-effect hover:animate-glow-pulse",onClick:()=>e("portfolio"),children:"View My Work"}),d.jsx(lo,{variant:"outline",size:"lg",className:"border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg hover-lift",onClick:()=>e("about"),children:"About Me"})]})]}),d.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:d.jsx("button",{onClick:()=>e("about"),className:"text-muted-foreground hover:text-primary transition-colors duration-300",children:d.jsx(Sv,{size:24})})})]})]})},h3=()=>d.jsx("section",{id:"about",className:"py-20 lg:py-32",children:d.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:d.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"About Me"}),d.jsxs("div",{className:"space-y-6 text-lg text-muted-foreground leading-relaxed",children:[d.jsx("p",{children:"I am a passionate automotive software engineer with a strong foundation in embedded systems and a deep enthusiasm for cutting-edge automotive technologies. My journey in software development is driven by a commitment to innovation and excellence in the automotive industry."}),d.jsx("p",{children:"Currently seeking a Software Engineering role where I can apply my expertise in C++, Yocto Project, and embedded Linux to enhance infotainment and driver-assistance systems. I believe in creating robust, efficient software solutions that contribute to safer and more intelligent automotive experiences."}),d.jsx("p",{children:"With a B.S. in Engineering from Mansoura University, I combine academic knowledge with practical experience in embedded systems development. My focus on continuous learning keeps me at the forefront of emerging technologies in the automotive software domain."})]})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx("h3",{className:"text-2xl font-serif font-semibold text-foreground",children:"Education & Objective"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"p-4 bg-card/50 rounded-lg border border-border/50",children:[d.jsx("h4",{className:"font-semibold text-foreground mb-2",children:"Bachelor of Science in Engineering"}),d.jsx("p",{className:"text-muted-foreground",children:"Mansoura University"})]}),d.jsxs("div",{className:"p-4 bg-card/50 rounded-lg border border-border/50",children:[d.jsx("h4",{className:"font-semibold text-foreground mb-2",children:"Career Objective"}),d.jsx("p",{className:"text-muted-foreground",children:"Seeking a Software Engineering role to apply expertise in C++, Yocto, and embedded Linux to enhance infotainment and driver-assistance systems in the automotive industry."})]})]})]})]}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center",children:d.jsxs("div",{className:"w-full h-full rounded-xl bg-card border border-border overflow-hidden",children:[d.jsx("img",{src:"/profile-photo.jpg",alt:"Ahmed Adel Wafdy - Software Engineer",className:"w-full h-full object-cover",onError:e=>{const t=e.target;t.style.display="none";const r=t.nextElementSibling;r&&(r.style.display="flex")}}),d.jsx("div",{className:"w-full h-full flex items-center justify-center",style:{display:"none"},children:d.jsxs("div",{className:"text-center space-y-4",children:[d.jsx("div",{className:"w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center",children:d.jsx("div",{className:"w-16 h-16 bg-primary rounded-full"})}),d.jsx("h3",{className:"text-xl font-serif font-semibold text-foreground",children:"Engineering Philosophy"}),d.jsx("p",{className:"text-muted-foreground text-sm max-w-xs",children:'"Innovation through robust code. Every system should be reliable, efficient, and scalable."'})]})})]})}),d.jsx("div",{className:"absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"}),d.jsx("div",{className:"absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse animation-delay-1000"})]})]})})}),g3=()=>{const e=[{category:"Embedded Systems Expertise",skills:["C/C++","OOP","RTOS","Yocto","CMake"],icon:d.jsx(Ev,{className:"w-6 h-6"})},{category:"Communication Protocols",skills:["UART","SPI","I2C","CAN","VSomeIP","D-Bus"],icon:d.jsx(_v,{className:"w-6 h-6"})},{category:"Software Development & Scripting",skills:["Bash","MISRA-C"],icon:d.jsx(Tv,{className:"w-6 h-6"})}],t=[{name:"Growth-Oriented",icon:d.jsx(zv,{className:"w-5 h-5"})},{name:"Effective Communication",icon:d.jsx(Mv,{className:"w-5 h-5"})},{name:"Teamwork",icon:d.jsx(Ov,{className:"w-5 h-5"})},{name:"Innovative Thinking",icon:d.jsx(Av,{className:"w-5 h-5"})},{name:"Adaptable",icon:d.jsx(Ig,{className:"w-5 h-5"})}];return d.jsx("section",{id:"skills",className:"py-20 lg:py-32 bg-muted/30",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Skills & Expertise"}),d.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A comprehensive skill set spanning embedded systems development, automotive protocols, and collaborative software engineering practices."})]}),d.jsxs("div",{className:"grid lg:grid-cols-2 gap-16",children:[d.jsxs("div",{className:"space-y-8",children:[d.jsx("h3",{className:"text-3xl font-serif font-semibold text-foreground mb-8",children:"Technical Skills"}),d.jsx("div",{className:"space-y-6",children:e.map((r,n)=>d.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"text-primary",children:r.icon}),d.jsx("h4",{className:"text-lg font-semibold text-foreground",children:r.category})]}),d.jsx("div",{className:"flex flex-wrap gap-2",children:r.skills.map((i,o)=>d.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20",children:i},o))})]},n))})]}),d.jsxs("div",{className:"space-y-8",children:[d.jsx("h3",{className:"text-3xl font-serif font-semibold text-foreground mb-8",children:"Soft Skills"}),d.jsx("div",{className:"grid gap-4",children:t.map((r,n)=>d.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"text-primary",children:r.icon}),d.jsx("span",{className:"text-lg font-medium text-foreground",children:r.name})]})},n))})]})]})]})})},m3=()=>{const e=[{year:"May 2025 - Present",title:"Contributor at The Linux Foundation",organization:"Google Summer of Code",type:"Part-time",description:["Contributing to The Linux Foundation open source projects","Working on kernel-level improvements and system optimization","Collaborating with global developers on critical Linux infrastructure"]},{year:"Nov 2024 - Present",title:"Chairperson",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Leading the computer society chapter with strategic vision and direction","Organizing technical events and educational programs for members","Managing cross-functional teams and fostering innovation initiatives"]},{year:"Nov 2023 - Nov 2024",title:"Head of Embedded Systems Committee",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Led embedded systems committee for 1 year and 1 month","Developed and delivered curriculum for embedded systems training","Supervised technical projects and mentored committee members"]},{year:"Jul 2023 - Nov 2023",title:"Embedded Systems Supervisor",organization:"IEEE Mansoura Computer Society Chapter",type:"Leadership Role",description:["Supervised embedded systems projects and initiatives","Provided technical guidance and mentorship to team members","Coordinated project delivery and quality assurance processes"]},{year:"Jun 2024 - Sep 2024",title:"Linux Kernel Fundamentals",organization:"STMicroelectronics",type:"Internship",description:["Specialized in Linux kernel fundamentals and driver development","Gained expertise in POSIX threads and kernel-level programming","Applied knowledge to real-world embedded Linux environments","Location: Cairo, Egypt (On-site)"]},{year:"Jan 2024 - May 2024",title:"Linux System Programming Trainee",organization:"STMicroelectronics",type:"Internship",description:["Comprehensive training in Linux system programming concepts","Mastered GNU/Linux tools and GNU Debugger","Developed proficiency in 18+ technical skills including system optimization","Location: Cairo, Egypt (On-site)"]},{year:"Oct 2023 - Sep 2024",title:"Hardware Engineer - PCB Layout",organization:"Metanoia",type:"Full-time",description:["Designed and developed PCB layouts using Altium Designer","Specialized in Printed Circuit Board (PCB) Design and layout optimization","Applied hardware engineering principles to real-world projects","Location: Cairo, Egypt"]}];return d.jsx("section",{id:"experience",className:"py-20 lg:py-32",children:d.jsxs("div",{className:"max-w-5xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Experience & Training"}),d.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A journey of continuous learning and leadership in automotive software engineering and embedded systems development."})]}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"}),d.jsx("div",{className:"space-y-12",children:e.map((t,r)=>d.jsxs("div",{className:"relative pl-20",children:[d.jsx("div",{className:"absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"}),d.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift",children:[d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-xl font-serif font-semibold text-foreground mb-1",children:t.title}),d.jsx("p",{className:"text-primary font-medium",children:t.organization})]}),d.jsxs("div",{className:"mt-2 md:mt-0",children:[d.jsx("span",{className:"inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20",children:t.type}),d.jsx("span",{className:"block md:inline-block md:ml-3 text-muted-foreground text-sm mt-1 md:mt-0",children:t.year})]})]}),d.jsx("ul",{className:"space-y-2",children:t.description.map((n,i)=>d.jsxs("li",{className:"text-muted-foreground flex items-start",children:[d.jsx("span",{className:"text-primary mr-2 mt-1.5",children:"•"}),n]},i))})]})]},r))})]})]})})},hs=x.forwardRef(({className:e,...t},r)=>d.jsx("div",{ref:r,className:De("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));hs.displayName="Card";const y3=x.forwardRef(({className:e,...t},r)=>d.jsx("div",{ref:r,className:De("flex flex-col space-y-1.5 p-6",e),...t}));y3.displayName="CardHeader";const v3=x.forwardRef(({className:e,...t},r)=>d.jsx("h3",{ref:r,className:De("text-2xl font-semibold leading-none tracking-tight",e),...t}));v3.displayName="CardTitle";const x3=x.forwardRef(({className:e,...t},r)=>d.jsx("p",{ref:r,className:De("text-sm text-muted-foreground",e),...t}));x3.displayName="CardDescription";const gs=x.forwardRef(({className:e,...t},r)=>d.jsx("div",{ref:r,className:De("p-6 pt-0",e),...t}));gs.displayName="CardContent";const b3=x.forwardRef(({className:e,...t},r)=>d.jsx("div",{ref:r,className:De("flex items-center p-6 pt-0",e),...t}));b3.displayName="CardFooter";const w3=cd("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $e({className:e,variant:t,children:r,...n}){return d.jsx("div",{className:De(w3({variant:t}),e),...n,children:r})}const k3=()=>{const[e,t]=x.useState("all"),r=[{id:1,title:"Software-Defined Vehicle (SDV)",category:"automotive",image:"https://imgs.search.brave.com/hhUhvtNTED6ZYYeaqN1MvvRGZFndZZH4C9WqhA2W2LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMXJ6/NHVpNDY0czZnNy5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS8wMzExMTQy/Ni9lQ29ja3BpdC1h/bmQtQ29ubmVjdGl2/aXR5LTEuanBn",description:"Comprehensive autonomous driving system with multiple ECU components for next-generation vehicle architecture.",longDescription:"This repository contains the OS Unit part of an Autonomous-Driving-System project featuring ECU-HeadUnit for infotainment, ECU-Control for vehicle operations, and a secure OTA update system. Built with Yocto Linux and designed for Raspberry Pi hardware.",tags:["Qt5/QML","C++","Yocto","CAN Bus","ROS2","OTA"],features:["Real-time vehicle status display","CAN bus communication protocol","Secure OTA updates with TLS 1.3","LIDAR and depth camera integration","Autonomous and manual control modes"],github:"https://github.com/AhmedAdelWafdy7/Software-Defined-Vehicle",demo:null,status:"Active Development"},{id:2,title:"AGL App Store (GSoC 2025)",category:"automotive",image:"https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80",description:"Flutter-based application store for Automotive Grade Linux with Flatpak integration and security-first design.",longDescription:"Revolutionary app store experience for In-Vehicle Infotainment systems built as part of Google Summer of Code 2025. Features comprehensive UI/UX design, AppStream metadata parsing, and automotive-grade security.",tags:["Flutter","AGL","Flatpak","AppStream","Security","UI/UX"],features:["Responsive automotive display optimization","AppStream XML metadata integration","Secure app sandboxing with Flatpak","Rating and review system","Root of trust implementation"],github:"https://github.com/AhmedAdelWafdy7/agl-app-store",demo:"https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store",status:"GSoC 2025"},{id:3,title:"Coffee-Dashboard (Yocto Layer)",category:"embedded",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",description:"Comprehensive dashboard application for managing and monitoring coffee brewing processes, integrated into Yocto Project.",longDescription:"A robust coffee brewing management system built as a custom Yocto layer. Features real-time monitoring, brewing parameter control, and analytics for embedded coffee machines with Qt5-based user interface.",tags:["Yocto","Qt5","Embedded Linux","BitBake","Dashboard","IoT"],features:["Real-time coffee brewing parameter monitoring","Custom Yocto layer with BitBake recipes","Qt5-based user interface","Data logging and brewing analytics","Integration with various coffee machines","Customizable alerts and notifications"],github:"https://github.com/AhmedAdelWafdy7/meta-coffeeDash",demo:null,status:"Completed"},{id:4,title:"In-Vehicle Infotainment System",category:"automotive",image:"https://images.unsplash.com/photo-1482029255085-35a4a48b7084?auto=format&fit=crop&w=600&q=80",description:"Advanced IVI system using Raspberry Pi4 that mimics real vehicle functionalities through Inter-Process Communication mechanisms.",longDescription:"A sophisticated infotainment system built using Qt for embedded GUI and COVESA's vsomeip for IPC, adhering to the AUTOSAR standard. Features include head unit application, PDC unit with ultrasonic sensors, and instrument cluster integration.",tags:["Qt","Raspberry Pi","vsomeip","AUTOSAR","Yocto","CAN Bus"],features:["CAN Communication with vehicle's bus","IPC Management using vsomeip","Multimedia Control for audio/video playback","Embedded GUI with Qt Compositor","PDC system with ultrasonic sensors"],github:"https://github.com/AhmedAdelWafdy7/Infotainment-System",demo:null,status:"Completed"},{id:5,title:"Master Embedded Systems Course",category:"baremetal",image:"https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",description:"Comprehensive embedded systems course covering ARM Cortex-M4 bare metal programming, peripheral drivers, and real-world projects.",longDescription:"Complete embedded systems mastery course featuring bare metal ARM Cortex-M4 programming, custom HAL drivers development, communication protocols implementation, and practical projects including Smart Vehicle Parking, CAN communication, and RTOS development.",tags:["ARM Cortex-M4","STM32","HAL Drivers","Communication Protocols","Assembly","Keil µVision"],features:["Custom STM32 HAL drivers (GPIO, USART, SPI, I2C, Timers, ADC)","Communication protocols implementation","Interrupt handling and EXTI drivers","Smart Vehicle Parking project with sensors","CAN bus communication system","ARM assembly and inline assembly programming","Memory management and stack operations","Reset sequence and CPU access level control","Real-time embedded projects with hardware integration"],github:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems",demo:null,status:"Completed"},{id:6,title:"Round Robin Priority-based RTOS",category:"embedded",image:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",description:"Custom Real-Time Operating System from scratch with Round Robin scheduling, priority support, and Mutex handling for ARM Cortex-M3/4.",longDescription:"Complete RTOS implementation designed for various processors/MCUs featuring Round Robin scheduling with priority support, context switching using MSP/PSP, and priority inversion prevention through Mutex subsystem. Built specifically for ARM Cortex-M3/4 architecture with pre-emptive multitasking capabilities.",tags:["RTOS","ARM Cortex-M","Scheduling","Mutex","Context Switching","Keil µVision"],features:["Round Robin scheduling with priority support","Context switching using MSP and PSP pointers","Mutex handling with priority inversion prevention","Portable architecture for different MCUs","Pre-emptive multitasking for ARM Cortex-M3/4","Essential MCAL libraries integration","Queue data structure implementation","SVC_Handler for efficient task switching"],github:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS",demo:"https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS",status:"Completed"}],n=["all","automotive","embedded","baremetal"],i=e==="all"?r:r.filter(o=>o.category===e);return d.jsx("section",{id:"portfolio",className:"py-20 lg:py-32 bg-muted/30",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Featured Projects"}),d.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"A showcase of automotive and embedded systems projects demonstrating expertise in low-level programming and system architecture."})]}),d.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:n.map(o=>d.jsx("button",{onClick:()=>t(o),className:`px-6 py-3 rounded-full capitalize transition-all duration-300 ${e===o?"bg-primary text-primary-foreground shadow-lg":"bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"}`,children:o==="baremetal"?"Bare Metal":o},o))}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(o=>d.jsxs(hs,{className:"group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col",children:[d.jsxs("div",{className:"relative overflow-hidden",children:[d.jsx("img",{src:o.image,alt:o.title,className:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),d.jsx("div",{className:"absolute top-4 right-4",children:d.jsx($e,{variant:"secondary",className:"text-xs capitalize",children:o.category==="baremetal"?"Bare Metal":o.category})}),o.status&&d.jsx("div",{className:"absolute top-4 left-4",children:d.jsx($e,{variant:"outline",className:"text-xs bg-background/80",children:o.status})})]}),d.jsxs(gs,{className:"p-6 flex flex-col flex-grow",children:[d.jsx("h3",{className:"text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:o.title}),d.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-4 flex-grow",children:o.description}),d.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[o.tags.slice(0,4).map(a=>d.jsx($e,{variant:"secondary",className:"text-xs",children:a},a)),o.tags.length>4&&d.jsxs($e,{variant:"secondary",className:"text-xs",children:["+",o.tags.length-4]})]}),d.jsxs("div",{className:"flex items-center gap-4 mt-auto",children:[o.github&&d.jsxs("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300",children:[d.jsx(Xl,{size:16,className:"mr-1"}),"Code"]}),o.demo&&d.jsxs("a",{href:o.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300",children:[d.jsx(Pv,{size:16,className:"mr-1"}),o.demo.includes("figma")?"Design":"Demo"]})]})]})]},o.id))}),d.jsxs("div",{className:"text-center mt-16",children:[d.jsx("p",{className:"text-muted-foreground mb-6",children:"Interested in collaborating on automotive or embedded systems projects?"}),d.jsxs("a",{href:"https://github.com/AhmedAdelWafdy7",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300",children:[d.jsx(Xl,{size:20,className:"mr-2"}),"View All Projects on GitHub"]})]})]})})},C3={week:1,title:"Project Blueprint & Designing the AGL App Store Experience",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","UI/UX Design","Flutter","Architecture","AppStream","Flatpak"],published:!0,excerpt:"Week 1 marks the exciting beginning of my Google Summer of Code journey with the Automotive Grade Linux (AGL) project! This initial period built upon the foundation laid during Week 0, where I successfully cloned all AGL repositories, AppStream parser, and Flatpak repository components.",content:`
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
  `,readTime:"8 min read",slug:"week-1"},S3={week:2,title:"AppStream Parser & Backend Architecture Design",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","AppStream","C++","Architecture","System Design","userver","MongoDB"],published:!0,excerpt:"Deep dive into AppStream parser optimization, backend architecture decisions, and comprehensive system design for the AGL App Store cloud infrastructure.",content:`
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
  `,readTime:"12 min read",slug:"week-2"},T3={week:3,title:"Database Architecture & Flat-Manager Deep Dive",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Database","SQLite","Flat-Manager","Architecture","Performance"],published:!0,excerpt:"Critical database selection process for embedded automotive systems, comprehensive flat-manager analysis, and hands-on evaluation of SQLite vs Isar vs ObjectBox for the AGL App Store infrastructure.",content:`
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
  `,readTime:"15 min read",slug:"week-3"},E3={week:4,title:"Building an Application Management Ecosystem: From Flat-Manager to Flatpak Plugin Integration",date:"June 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","C++","Plugin Architecture","HTTP Client","SQLite","PostgreSQL","Caching"],published:!0,excerpt:"Comprehensive application management platform built on Flat-Manager backend infrastructure with C++ plugin integration, specifically designed for Automotive Grade Linux (AGL) environments.",content:`
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
    `,readTime:"15 min read",slug:"week-4"},P3={week:5,title:"Extending Flatpak Plugin API: Implementation Architecture and Sandboxing Deep Dive",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","C++","Flatpak Plugin","API Extension","Sandboxing","AppStream","Security"],published:!0,excerpt:"Critical expansion of the Flatpak plugin API with comprehensive HTTP client integration, intelligent SQLite caching, and sophisticated BubbleWrap sandboxing mechanisms for automotive-grade security.",content:`
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
          `,readTime:"18 min read",slug:"week-5"},A3={week:6,title:"First Feature Implementation - HTTP Client Enhancement",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","HTTP Client","CurlClient","Testing","Open Source"],published:!0,excerpt:"Successfully opened feature request #123 and merged first PR #124 enhancing CurlClient with modern HTTP interface, authentication support, memory leak fixes, and comprehensive testing framework.",content:`
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
    `,readTime:"10 min read",slug:"week-6"},R3={week:7,title:"Building a Robust Caching System: A Deep Dive into its Architecture and Design Patterns",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Caching","Design Patterns","Architecture","C++","Performance"],published:!0,excerpt:"Exploring the design and implementation of a sophisticated caching system with architectural patterns, key components, and advanced features for robustness, flexibility, and observability.",content:`
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
      `,readTime:"15 min read",slug:"week-7"},N3={week:8,title:"Navigating the Future: Testing, Development, and Flatpak in Toyota Connected's IVI Homescreen",date:"July 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Testing","Development Environment","libflatpak","Automotive Grade Linux","C++"],published:!0,excerpt:"Hey everyone! As a developer deeply immersed in the Toyota Connected world, I'm absolutely thrilled to pull back the curtain and share some exciting insights into what's being built for the In-Vehicle Infotainment homescreen. From robust testing methodologies to mastering the libflatpak API - join me on this technical adventure!",content:`
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
      `,readTime:"15 min read",slug:"week-8"},I3={week:9,title:"Week 9: Overhauling Flatpak with Advanced Caching, Installation APIs, and Remote Management",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Caching","Serialization","API Design","C++"],published:!0,excerpt:"This week marks a massive leap forward for the Flatpak plugin! I'm thrilled to share details on a huge pull request that introduces application installation/uninstallation, remote repository management, and a completely new caching infrastructure designed for performance and reliability, eliminating race conditions and paving the way for a more robust application ecosystem.",content:`
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
      `,readTime:"6 min read",slug:"week-9"},M3={week:10,title:"Application Lifecycle Revolution: Installation, Remote Management, and Enhanced Caching Infrastructure",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Installation","Remote Management","Caching","libflatpak","Automotive Grade Linux","C++","Unit Testing"],published:!0,excerpt:"Breaking new ground in automotive application management! This week marks a pivotal milestone with comprehensive installation/uninstallation APIs, sophisticated remote repository management, and revolutionary caching infrastructure improvements. Join me as we explore the technical depths of priority-based remote search, flexible application ID matching, and robust batch processing capabilities!",content:`
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
      `,readTime:"18 min read",slug:"week-10"},j3={week:11,title:"Week 11: Advanced Architecture & Flutter Integration - Complete Application Lifecycle Management",date:"August 2025",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","Toyota Connected","IVI","Homescreen","Flutter","Flatpak","Threading","Architecture","Testing","UI/UX"],published:!0,excerpt:"This week marks a major architectural milestone! I'm excited to share the successful merge of our foundational PR, complete architectural refinements with advanced threading strategies, comprehensive testing infrastructure, and a fully functional Flutter example application that demonstrates the complete application lifecycle management system.",content:`
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
`,readTime:"10 min read",slug:"week-11"},cc=[C3,S3,T3,E3,P3,A3,R3,N3,I3,M3,j3];function _3(e){return cc.find(t=>t.week===e)}function z3(e){return _3(e)}function Om(){const e=[...cc],t=Math.max(...cc.map(r=>r.week),0);for(let r=1;r<=Math.max(22,t);r++)e.some(n=>n.week===r)||e.push({week:r,title:`Week ${r} Development Update`,date:new Date(2025,5+Math.floor((r-1)/4),1+(r-1)*7%28).toLocaleDateString("en-US",{month:"long",year:"numeric"}),author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","In Progress"],published:!1,excerpt:`This post for Week ${r} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.`,content:`<p>This post for Week ${r} is coming soon! Check back later for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,readTime:"Coming soon",slug:`week-${r}`});return e.sort((r,n)=>n.week-r.week)}const L3=()=>{const e=Om();return d.jsx("section",{id:"blog",className:"py-20 lg:py-32",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h2",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text",children:"Google Summer of Code 2025 Journey"}),d.jsx("h3",{className:"text-2xl lg:text-3xl font-serif font-semibold mb-6 text-foreground",children:"Building an App Store for Automotive Grade Linux"}),d.jsx("p",{className:"text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",children:"This 22-week series documents my experience as a contributor to the Automotive Grade Linux (AGL) project during Google Summer of Code 2025. I am developing a secure, user-friendly Flatpak App Store for embedded Linux In-Vehicle Infotainment (IVI) systems, mentored by experts from The Linux Foundation."})]}),d.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(t=>d.jsx(Vt,{to:`/blog/${t.slug}`,className:`block ${t.published?"":"pointer-events-none"}`,children:d.jsx(hs,{className:`group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${t.published?"":"opacity-70"}`,children:d.jsxs(gs,{className:"p-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs($e,{variant:"secondary",className:"bg-primary/20 text-primary border-primary/30",children:["Week ",t.week]}),d.jsx($e,{variant:t.published?"default":"outline",className:t.published?"bg-green-500/20 text-green-400 border-green-500/30":"border-muted-foreground/30 text-muted-foreground",children:t.published?"Published":"Coming Soon"})]}),d.jsx("h3",{className:"text-lg font-serif font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300",children:t.title}),d.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-4",children:t.excerpt}),d.jsxs("div",{className:"flex items-center text-xs text-muted-foreground mb-4 space-x-4",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx(Ag,{size:12,className:"mr-1"}),d.jsx("span",{children:t.date})]}),d.jsxs("div",{className:"flex items-center",children:[d.jsx(Rg,{size:12,className:"mr-1"}),d.jsx("span",{children:t.readTime})]})]}),d.jsxs("div",{className:"flex items-center text-sm text-primary",children:[d.jsx("span",{className:`${t.published?"group-hover:underline":"text-muted-foreground"}`,children:t.published?"Read More":"Stay Tuned"}),t.published&&d.jsx("span",{className:"ml-2 transform transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})]})})},t.week))}),d.jsx("div",{className:"text-center mt-12",children:d.jsxs("div",{className:"bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-2xl mx-auto",children:[d.jsx("h4",{className:"text-lg font-serif font-semibold mb-3 gradient-text",children:"Follow My GSoC Journey"}),d.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"New posts will be published weekly throughout the Google Summer of Code 2025 program. Each post will dive deep into the technical challenges, solutions, and insights gained while building this innovative app store for automotive systems."}),d.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[d.jsx($e,{variant:"outline",className:"border-primary/30 text-primary",children:"AGL Project"}),d.jsx($e,{variant:"outline",className:"border-primary/30 text-primary",children:"Flatpak"}),d.jsx($e,{variant:"outline",className:"border-primary/30 text-primary",children:"Embedded Linux"}),d.jsx($e,{variant:"outline",className:"border-primary/30 text-primary",children:"IVI Systems"})]})]})})]})})},F3=()=>{const e=[{icon:d.jsx(Nv,{className:"w-5 h-5"}),label:"Email",value:"ahmedadelwafdy782@gmail.com",href:"mailto:ahmedadelwafdy782@gmail.com"},{icon:d.jsx(jv,{className:"w-5 h-5"}),label:"Phone",value:"+201096514812",href:"tel:+201096514812"}],t=[{name:"LinkedIn",url:"https://www.linkedin.com/in/ahmed-wafdy-094567242/",icon:d.jsx(Rv,{className:"w-6 h-6"})},{name:"GitHub",url:"https://github.com/AhmedAdelWafdy7",icon:d.jsx(Xl,{className:"w-6 h-6"})}];return d.jsx("section",{id:"contact",className:"py-16 sm:py-20 lg:py-32 bg-muted/30",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 gradient-text",children:"Let's Connect"}),d.jsx("p",{className:"text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0",children:"Ready to discuss automotive software engineering opportunities? I'm always excited to explore new challenges and collaborate on innovative projects."}),d.jsx(hs,{className:"bg-card/50 backdrop-blur-sm border-border/50 mb-12",children:d.jsx(gs,{className:"p-4 sm:p-6 lg:p-8",children:d.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-8 items-center",children:[d.jsxs("div",{className:"text-left space-y-4 lg:space-y-6",children:[d.jsx("h3",{className:"text-xl sm:text-2xl font-serif font-semibold",children:"Get In Touch"}),d.jsx("p",{className:"text-sm sm:text-base text-muted-foreground",children:"Whether you have an exciting automotive software project, want to discuss embedded systems development, or explore collaboration opportunities, I'd love to hear from you."}),d.jsx("div",{className:"space-y-3 lg:space-y-4",children:e.map((r,n)=>d.jsxs("a",{href:r.href,className:"flex items-start sm:items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300",children:[d.jsx("div",{className:"text-primary mt-0.5 sm:mt-0 flex-shrink-0",children:r.icon}),d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center",children:[d.jsxs("span",{className:"text-primary font-medium",children:[r.label,":"]}),d.jsx("span",{className:"sm:ml-2 text-sm sm:text-base break-all",children:r.value})]})]},n))})]}),d.jsxs("div",{className:"space-y-3 lg:space-y-4 mt-6 lg:mt-0",children:[d.jsx(lo,{size:"lg",className:"w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift glow-effect text-sm sm:text-base",onClick:()=>window.open("mailto:ahmedadelwafdy782@gmail.com","_blank"),children:"Send Email"}),d.jsx(lo,{variant:"outline",size:"lg",className:"w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift text-sm sm:text-base",onClick:()=>window.open("https://www.linkedin.com/in/ahmed-wafdy-094567242/","_blank"),children:"Connect on LinkedIn"})]})]})})}),d.jsxs("div",{className:"space-y-4 lg:space-y-6",children:[d.jsx("h3",{className:"text-lg sm:text-xl font-serif font-semibold",children:"Connect With Me"}),d.jsx("div",{className:"flex justify-center gap-4 sm:gap-6",children:t.map(r=>d.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 sm:w-14 sm:h-14 bg-card hover:bg-primary border border-border hover:border-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift",title:r.name,children:d.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6",children:r.icon})},r.name))})]})]})})},Ed=()=>(new Date().getFullYear(),d.jsx("footer",{className:"border-t border-border bg-background",children:d.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 py-12",children:d.jsxs("div",{className:"grid md:grid-cols-3 gap-8 items-center",children:[d.jsxs("div",{className:"text-center md:text-left",children:[d.jsx("h3",{className:"text-2xl font-serif font-bold gradient-text mb-2",children:"Ahmed Adel Wafdy"}),d.jsx("p",{className:"text-muted-foreground text-sm",children:"Automotive Software Engineer specializing in embedded systems and Linux development."})]}),d.jsx("div",{className:"text-center",children:d.jsx("p",{className:"text-muted-foreground text-sm",children:"© 2025 Ahmed Adel Wafdy. All rights reserved."})}),d.jsx("div",{className:"text-center md:text-right",children:d.jsx("p",{className:"text-muted-foreground text-sm",children:"Built with React & Tailwind CSS"})})]})})})),Ep=()=>{const e=gn();return x.useEffect(()=>{e.pathname==="/blog"&&setTimeout(()=>{const t=document.getElementById("blog");t&&t.scrollIntoView({behavior:"smooth"})},100)},[e.pathname]),d.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[d.jsx(Td,{}),d.jsx(f3,{}),d.jsx(h3,{}),d.jsx(g3,{}),d.jsx(m3,{}),d.jsx(k3,{}),d.jsx(L3,{}),d.jsx(F3,{}),d.jsx(Ed,{})]})},Pp=()=>{const{week:e}=Dw(),r=(c=>c?c.startsWith("week-")?c.replace("week-",""):c:"1")(e),n=z3(parseInt(r)),i=Om(),o=n||{week:parseInt(r),title:`Week ${r} Development Update`,content:`<p>This post for Week ${r} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,date:"Coming Soon",readTime:"5 min read",author:"Ahmed Adel Wafdy",tags:["GSoC 2025","AGL","Development"],published:!1},a=o.week,s=i.find(c=>c.week<a&&c.published),l=i.find(c=>c.week>a&&c.published);return d.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[d.jsx(Td,{}),d.jsx("main",{className:"pt-20 lg:pt-24",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 lg:px-8 py-12",children:[d.jsxs(Vt,{to:"/#blog",className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group",children:[d.jsx(la,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),"Back to Blog"]}),d.jsxs("header",{className:"mb-12",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[d.jsxs($e,{variant:"secondary",className:"bg-primary/20 text-primary border-primary/30",children:["Week ",o.week]}),d.jsx($e,{variant:"outline",className:"border-primary/30 text-primary",children:"GSoC 2025"}),!o.published&&d.jsx($e,{variant:"outline",className:"border-yellow-500/30 text-yellow-500",children:"Coming Soon"})]}),d.jsx("h1",{className:"text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text leading-tight",children:o.title}),d.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx(Fv,{size:16,className:"mr-2"}),d.jsx("span",{children:o.author})]}),d.jsxs("div",{className:"flex items-center",children:[d.jsx(Ag,{size:16,className:"mr-2"}),d.jsx("span",{children:o.date})]}),d.jsxs("div",{className:"flex items-center",children:[d.jsx(Rg,{size:16,className:"mr-2"}),d.jsx("span",{children:o.readTime})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:o.tags.map(c=>d.jsx($e,{variant:"outline",className:"border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300",children:c},c))})]}),d.jsx("article",{className:"prose prose-lg prose-neutral dark:prose-invert max-w-none",children:d.jsx("div",{dangerouslySetInnerHTML:{__html:o.content},className:"blog-content [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-foreground [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>li]:mb-2 [&>li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_em]:text-primary"})}),d.jsx("nav",{className:"mt-16 pt-8 border-t border-border",children:d.jsxs("div",{className:"flex justify-between items-center",children:[s?d.jsxs(Vt,{to:`/blog/week-${s.week}`,className:"flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group",children:[d.jsx(la,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"text-xs uppercase tracking-wide",children:"Previous"}),d.jsxs("div",{className:"font-medium",children:["Week ",s.week]})]})]}):d.jsx("div",{}),l?d.jsxs(Vt,{to:`/blog/week-${l.week}`,className:"flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 ml-auto group",children:[d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-xs uppercase tracking-wide",children:"Next"}),d.jsxs("div",{className:"font-medium",children:["Week ",l.week]})]}),d.jsx(la,{size:20,className:"ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300"})]}):d.jsx("div",{})]})}),d.jsxs("div",{className:"mt-12 p-6 bg-muted/30 rounded-lg border border-border/50",children:[d.jsx("h3",{className:"text-lg font-semibold mb-4 text-foreground",children:"GSoC 2025 Blog Series"}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2",children:i.slice(0,22).map(c=>d.jsxs(Vt,{to:`/blog/week-${c.week}`,className:`px-3 py-2 text-sm rounded border transition-colors duration-300 text-center ${c.week===o.week?"bg-primary text-primary-foreground border-primary":c.published?"border-border hover:border-primary hover:text-primary":"border-border/30 text-muted-foreground cursor-not-allowed"}`,children:["Week ",c.week]},c.week))})]})]})}),d.jsx(Ed,{})]})},O3=()=>{const e=gn();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),d.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[d.jsx(Td,{}),d.jsx("main",{className:"pt-20 lg:pt-24 flex items-center justify-center min-h-[calc(100vh-200px)]",children:d.jsxs("div",{className:"text-center max-w-md mx-auto px-6",children:[d.jsx("div",{className:"text-8xl font-bold gradient-text mb-6",children:"404"}),d.jsx("h1",{className:"text-2xl font-bold mb-4 text-foreground",children:"Page Not Found"}),d.jsx("p",{className:"text-muted-foreground mb-8 leading-relaxed",children:"Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[d.jsxs(Vt,{to:"/",className:"inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 group",children:[d.jsx(Ng,{size:20,className:"mr-2 group-hover:scale-110 transition-transform duration-300"}),"Go Home"]}),d.jsxs("button",{onClick:()=>window.history.back(),className:"inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300 group",children:[d.jsx(la,{size:20,className:"mr-2 group-hover:-translate-x-1 transition-transform duration-300"}),"Go Back"]})]})]})}),d.jsx(Ed,{})]})},D3=new sw,B3=()=>d.jsx(cw,{client:D3,children:d.jsxs(Fb,{children:[d.jsx(bx,{}),d.jsx(Jx,{}),d.jsx(l3,{children:d.jsxs(t3,{children:[d.jsx(Cn,{path:"/",element:d.jsx(Ep,{})}),d.jsx(Cn,{path:"/blog",element:d.jsx(Ep,{})}),d.jsx(Cn,{path:"/blog/week-:week",element:d.jsx(Pp,{})}),d.jsx(Cn,{path:"/blog/:week",element:d.jsx(Pp,{})}),d.jsx(Cn,{path:"*",element:d.jsx(O3,{})})]})})]})});class U3 extends x.Component{constructor(){super(...arguments);So(this,"state",{hasError:!1});So(this,"handleRefresh",()=>{window.location.reload()});So(this,"handleGoHome",()=>{window.location.href="/"})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("ErrorBoundary caught an error:",r,n),this.setState({error:r,errorInfo:n})}render(){return this.state.hasError?d.jsx("div",{className:"min-h-screen bg-background text-foreground flex items-center justify-center p-6",children:d.jsxs("div",{className:"max-w-md w-full text-center space-y-6",children:[d.jsx("div",{className:"flex justify-center",children:d.jsx("div",{className:"w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center",children:d.jsx(Lv,{className:"w-8 h-8 text-destructive"})})}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("h1",{className:"text-2xl font-bold text-foreground",children:"Something went wrong"}),d.jsx("p",{className:"text-muted-foreground",children:"We're sorry, but an unexpected error occurred. Please try refreshing the page or go back to the homepage."})]}),!1,d.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[d.jsxs("button",{onClick:this.handleRefresh,className:"inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300",children:[d.jsx(Ig,{size:20,className:"mr-2"}),"Refresh Page"]}),d.jsxs("button",{onClick:this.handleGoHome,className:"inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300",children:[d.jsx(Ng,{size:20,className:"mr-2"}),"Go Home"]})]})]})}):this.props.children}}Jh(document.getElementById("root")).render(d.jsx(U3,{children:d.jsx(B3,{})}));
