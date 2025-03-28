import './pomodoro-timer.css';
(function(b,O){typeof exports=="object"&&typeof module<"u"?module.exports=O(require("react")):typeof define=="function"&&define.amd?define(["react"],O):(b=typeof globalThis<"u"?globalThis:b||self,b.PomodoroTimer=O(b.React))})(this,function(b){"use strict";var O={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Ve(){if(ue)return N;ue=1;var a=b,s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function R(v,h,T){var g,k={},w=null,I=null;T!==void 0&&(w=""+T),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(I=h.ref);for(g in h)o.call(h,g)&&!d.hasOwnProperty(g)&&(k[g]=h[g]);if(v&&v.defaultProps)for(g in h=v.defaultProps,h)k[g]===void 0&&(k[g]=h[g]);return{$$typeof:s,type:v,key:w,ref:I,props:k,_owner:c.current}}return N.Fragment=i,N.jsx=R,N.jsxs=R,N}var V={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Le(){return le||(le=1,process.env.NODE_ENV!=="production"&&function(){var a=b,s=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),v=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),M=Symbol.iterator,Q="@@iterator";function $(e){if(e===null||typeof e!="object")return null;var r=M&&e[M]||e[Q];return typeof r=="function"?r:null}var _=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];U("error",e,t)}}function U(e,r,t){{var n=_.ReactDebugCurrentFrame,f=n.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var p=t.map(function(l){return String(l)});p.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,p)}}var q=!1,Ke=!1,Ze=!1,Qe=!1,$e=!1,ve;ve=Symbol.for("react.module.reference");function qe(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===d||$e||e===c||e===T||e===g||Qe||e===I||q||Ke||Ze||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===k||e.$$typeof===R||e.$$typeof===v||e.$$typeof===h||e.$$typeof===ve||e.getModuleId!==void 0))}function er(e,r,t){var n=e.displayName;if(n)return n;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function pe(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case i:return"Portal";case d:return"Profiler";case c:return"StrictMode";case T:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v:var r=e;return pe(r)+".Consumer";case R:var t=e;return pe(t._context)+".Provider";case h:return er(e,e.render,"ForwardRef");case k:var n=e.displayName||null;return n!==null?n:j(e.type)||"Memo";case w:{var f=e,p=f._payload,l=f._init;try{return j(l(p))}catch{return null}}}return null}var D=Object.assign,L=0,he,me,ge,ye,be,Re,Ee;function ke(){}ke.__reactDisabledLog=!0;function rr(){{if(L===0){he=console.log,me=console.info,ge=console.warn,ye=console.error,be=console.group,Re=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ke,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function tr(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:he}),info:D({},e,{value:me}),warn:D({},e,{value:ge}),error:D({},e,{value:ye}),group:D({},e,{value:be}),groupCollapsed:D({},e,{value:Re}),groupEnd:D({},e,{value:Ee})})}L<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ee=_.ReactCurrentDispatcher,re;function J(e,r,t){{if(re===void 0)try{throw Error()}catch(f){var n=f.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||""}return`
`+re+e}}var te=!1,X;{var ar=typeof WeakMap=="function"?WeakMap:Map;X=new ar}function _e(e,r){if(!e||te)return"";{var t=X.get(e);if(t!==void 0)return t}var n;te=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var p;p=ee.current,ee.current=null,rr();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(C){n=C}Reflect.construct(e,[],l)}else{try{l.call()}catch(C){n=C}e.call(l.prototype)}}else{try{throw Error()}catch(C){n=C}e()}}catch(C){if(C&&n&&typeof C.stack=="string"){for(var u=C.stack.split(`
`),x=n.stack.split(`
`),y=u.length-1,E=x.length-1;y>=1&&E>=0&&u[y]!==x[E];)E--;for(;y>=1&&E>=0;y--,E--)if(u[y]!==x[E]){if(y!==1||E!==1)do if(y--,E--,E<0||u[y]!==x[E]){var P=`
`+u[y].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&X.set(e,P),P}while(y>=1&&E>=0);break}}}finally{te=!1,ee.current=p,tr(),Error.prepareStackTrace=f}var A=e?e.displayName||e.name:"",F=A?J(A):"";return typeof e=="function"&&X.set(e,F),F}function nr(e,r,t){return _e(e,!1)}function or(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return _e(e,or(e));if(typeof e=="string")return J(e);switch(e){case T:return J("Suspense");case g:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return nr(e.render);case k:return H(e.type,r,t);case w:{var n=e,f=n._payload,p=n._init;try{return H(p(f),r,t)}catch{}}}return""}var Y=Object.prototype.hasOwnProperty,xe={},Ce=_.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}function ir(e,r,t,n,f){{var p=Function.call.bind(Y);for(var l in e)if(p(e,l)){var u=void 0;try{if(typeof e[l]!="function"){var x=Error((n||"React class")+": "+t+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw x.name="Invariant Violation",x}u=e[l](r,l,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){u=y}u&&!(u instanceof Error)&&(z(f),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,l,typeof u),z(null)),u instanceof Error&&!(u.message in xe)&&(xe[u.message]=!0,z(f),m("Failed %s type: %s",t,u.message),z(null))}}}var sr=Array.isArray;function ae(e){return sr(e)}function ur(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function lr(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function Pe(e){if(lr(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ur(e)),Te(e)}var Se=_.ReactCurrentOwner,cr={key:!0,ref:!0,__self:!0,__source:!0},we,Oe;function fr(e){if(Y.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function dr(e){if(Y.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function vr(e,r){typeof e.ref=="string"&&Se.current}function pr(e,r){{var t=function(){we||(we=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function hr(e,r){{var t=function(){Oe||(Oe=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var mr=function(e,r,t,n,f,p,l){var u={$$typeof:s,type:e,key:r,ref:t,props:l,_owner:p};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function gr(e,r,t,n,f){{var p,l={},u=null,x=null;t!==void 0&&(Pe(t),u=""+t),dr(r)&&(Pe(r.key),u=""+r.key),fr(r)&&(x=r.ref,vr(r,f));for(p in r)Y.call(r,p)&&!cr.hasOwnProperty(p)&&(l[p]=r[p]);if(e&&e.defaultProps){var y=e.defaultProps;for(p in y)l[p]===void 0&&(l[p]=y[p])}if(u||x){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&pr(l,E),x&&hr(l,E)}return mr(e,u,x,f,n,Se.current,l)}}var ne=_.ReactCurrentOwner,je=_.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}var oe;oe=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function De(){{if(ne.current){var e=j(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function yr(e){return""}var Fe={};function br(e){{var r=De();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ie(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=br(r);if(Fe[t])return;Fe[t]=!0;var n="";e&&e._owner&&e._owner!==ne.current&&(n=" It was passed a child from "+j(e._owner.type)+"."),W(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),W(null)}}function We(e,r){{if(typeof e!="object")return;if(ae(e))for(var t=0;t<e.length;t++){var n=e[t];ie(n)&&Ie(n,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var f=$(e);if(typeof f=="function"&&f!==e.entries)for(var p=f.call(e),l;!(l=p.next()).done;)ie(l.value)&&Ie(l.value,r)}}}function Rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===h||r.$$typeof===k))t=r.propTypes;else return;if(t){var n=j(r);ir(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!oe){oe=!0;var f=j(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Er(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){W(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),W(null);break}}e.ref!==null&&(W(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}var Ae={};function Ne(e,r,t,n,f,p){{var l=qe(e);if(!l){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var x=yr();x?u+=x:u+=De();var y;e===null?y="null":ae(e)?y="array":e!==void 0&&e.$$typeof===s?(y="<"+(j(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,u)}var E=gr(e,r,t,f,p);if(E==null)return E;if(l){var P=r.children;if(P!==void 0)if(n)if(ae(P)){for(var A=0;A<P.length;A++)We(P[A],e);Object.freeze&&Object.freeze(P)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else We(P,e)}if(Y.call(r,"key")){var F=j(e),C=Object.keys(r).filter(function(Pr){return Pr!=="key"}),se=C.length>0?"{key: someKey, "+C.join(": ..., ")+": ...}":"{key: someKey}";if(!Ae[F+se]){var Tr=C.length>0?"{"+C.join(": ..., ")+": ...}":"{}";m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,se,F,Tr,F),Ae[F+se]=!0}}return e===o?Er(E):Rr(E),E}}function kr(e,r,t){return Ne(e,r,t,!0)}function _r(e,r,t){return Ne(e,r,t,!1)}var xr=_r,Cr=kr;V.Fragment=o,V.jsx=xr,V.jsxs=Cr}()),V}var ce;function Ye(){return ce||(ce=1,process.env.NODE_ENV==="production"?O.exports=Ve():O.exports=Le()),O.exports}var S=Ye();/*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */var G=function(a,s){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var c in o)o.hasOwnProperty(c)&&(i[c]=o[c])},G(a,s)};function Be(a,s){G(a,s);function i(){this.constructor=a}a.prototype=s===null?Object.create(s):(i.prototype=s.prototype,new i)}var Me=100,Ue=100,fe=50,K=50,Z=50;function de(a){var s=a.className,i=a.counterClockwise,o=a.dashRatio,c=a.pathRadius,d=a.strokeWidth,R=a.style;return b.createElement("path",{className:s,style:Object.assign({},R,Xe({pathRadius:c,dashRatio:o,counterClockwise:i})),d:Je({pathRadius:c,counterClockwise:i}),strokeWidth:d,fillOpacity:0})}function Je(a){var s=a.pathRadius,i=a.counterClockwise,o=s,c=i?1:0;return`
      M `+K+","+Z+`
      m 0,-`+o+`
      a `+o+","+o+" "+c+" 1 1 0,"+2*o+`
      a `+o+","+o+" "+c+" 1 1 0,-"+2*o+`
    `}function Xe(a){var s=a.counterClockwise,i=a.dashRatio,o=a.pathRadius,c=Math.PI*2*o,d=(1-i)*c;return{strokeDasharray:c+"px "+c+"px",strokeDashoffset:(s?-d:d)+"px"}}var He=function(a){Be(s,a);function s(){return a!==null&&a.apply(this,arguments)||this}return s.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},s.prototype.getPathRadius=function(){return fe-this.props.strokeWidth/2-this.getBackgroundPadding()},s.prototype.getPathRatio=function(){var i=this.props,o=i.value,c=i.minValue,d=i.maxValue,R=Math.min(Math.max(o,c),d);return(R-c)/(d-c)},s.prototype.render=function(){var i=this.props,o=i.circleRatio,c=i.className,d=i.classes,R=i.counterClockwise,v=i.styles,h=i.strokeWidth,T=i.text,g=this.getPathRadius(),k=this.getPathRatio();return b.createElement("svg",{className:d.root+" "+c,style:v.root,viewBox:"0 0 "+Me+" "+Ue,"data-test-id":"CircularProgressbar"},this.props.background?b.createElement("circle",{className:d.background,style:v.background,cx:K,cy:Z,r:fe}):null,b.createElement(de,{className:d.trail,counterClockwise:R,dashRatio:o,pathRadius:g,strokeWidth:h,style:v.trail}),b.createElement(de,{className:d.path,counterClockwise:R,dashRatio:k*o,pathRadius:g,strokeWidth:h,style:v.path}),T?b.createElement("text",{className:d.text,style:v.text,x:K,y:Z},T):null)},s.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},s}(b.Component);function ze(a){var s=a.rotation,i=a.strokeLinecap,o=a.textColor,c=a.textSize,d=a.pathColor,R=a.pathTransition,v=a.pathTransitionDuration,h=a.trailColor,T=a.backgroundColor,g=s==null?void 0:"rotate("+s+"turn)",k=s==null?void 0:"center center";return{root:{},path:B({stroke:d,strokeLinecap:i,transform:g,transformOrigin:k,transition:R,transitionDuration:v==null?void 0:v+"s"}),trail:B({stroke:h,strokeLinecap:i,transform:g,transformOrigin:k}),text:B({fill:o,fontSize:c}),background:B({fill:T})}}function B(a){return Object.keys(a).forEach(function(s){a[s]==null&&delete a[s]}),a}function Ge({settings:a,content:s,onSessionComplete:i}){const[o,c]=b.useState(a.workDuration*60),[d,R]=b.useState(!1),[v,h]=b.useState(!0),[T,g]=b.useState(0);b.useEffect(()=>{let _=null;return d&&o>0?_=setInterval(()=>{c(m=>m-1)},1e3):o===0&&w(),()=>{_&&clearInterval(_)}},[d,o]),b.useEffect(()=>{v&&a.autoStartPomodoros&&R(!0)},[]);const k=_=>{const m={type:v?"work":"break",duration:v?a.workDuration:a.breakDuration,completed:_,timestamp:new Date},U=localStorage.getItem("pomodoroSessions"),q=U?JSON.parse(U):[];return localStorage.setItem("pomodoroSessions",JSON.stringify([...q,m])),m},w=()=>{const _=k(!0);i&&i(_),v?(g(m=>m+1),c(a.breakDuration*60),a.autoStartBreaks&&R(!0)):(c(a.workDuration*60),a.autoStartPomodoros&&R(!0)),h(!v)},I=()=>{R(!d)},M=()=>{if(d){const _=k(!1);i&&i(_)}R(!1),c(v?a.workDuration*60:a.breakDuration*60)},Q=Math.floor(o/60),$=o%60;return S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsx("div",{className:"w-64 h-64 mb-8",children:S.jsx(He,{value:o,maxValue:v?a.workDuration*60:a.breakDuration*60,text:`${Q}:${$.toString().padStart(2,"0")}`,styles:ze({textColor:v?"#FF6B6B":"#4ECDC4",pathColor:v?"#FF6B6B":"#4ECDC4",trailColor:"#F3F4F6"})})}),!!s&&S.jsx("div",{children:s}),S.jsxs("div",{className:"flex gap-4 mb-6 justify-center",children:[S.jsx("button",{onClick:I,className:`btn ${d?"btn-error":"btn-primary"}`,children:d?"Pause":"Start"}),S.jsx("button",{onClick:M,className:"btn btn-outline dark:bg-gray-800 dark:text-white",children:"Reset"})]}),S.jsxs("div",{className:"text-center",children:[S.jsx("p",{className:"text-lg font-medium mb-2",children:v?"Work Time":"Break Time"}),S.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sessions completed today: ",T]})]})]})}return Ge});
