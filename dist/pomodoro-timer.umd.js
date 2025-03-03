import './pomodoro-timer.css';
(function(y,j){typeof exports=="object"&&typeof module<"u"?module.exports=j(require("react")):typeof define=="function"&&define.amd?define(["react"],j):(y=typeof globalThis<"u"?globalThis:y||self,y.PomodoroTimer=j(y.React))})(this,function(y){"use strict";var j={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ne(){if(se)return V;se=1;var a=y,i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(R,h,x){var m,k={},w=null,W=null;x!==void 0&&(w=""+x),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(W=h.ref);for(m in h)s.call(h,m)&&!v.hasOwnProperty(m)&&(k[m]=h[m]);if(R&&R.defaultProps)for(m in h=R.defaultProps,h)k[m]===void 0&&(k[m]=h[m]);return{$$typeof:i,type:R,key:w,ref:W,props:k,_owner:c.current}}return V.Fragment=o,V.jsx=p,V.jsxs=p,V}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Ve(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){var a=y,i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),R=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),U=Symbol.iterator,Q="@@iterator";function O(e){if(e===null||typeof e!="object")return null;var r=U&&e[U]||e[Q];return typeof r=="function"?r:null}var S=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];$("error",e,t)}}function $(e,r,t){{var n=S.ReactDebugCurrentFrame,f=n.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var d=t.map(function(l){return String(l)});d.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,d)}}var Ge=!1,Ke=!1,Ze=!1,Qe=!1,$e=!1,de;de=Symbol.for("react.module.reference");function qe(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===v||$e||e===c||e===x||e===m||Qe||e===W||Ge||Ke||Ze||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===k||e.$$typeof===p||e.$$typeof===R||e.$$typeof===h||e.$$typeof===de||e.getModuleId!==void 0))}function er(e,r,t){var n=e.displayName;if(n)return n;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function ve(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case o:return"Portal";case v:return"Profiler";case c:return"StrictMode";case x:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ve(r)+".Consumer";case p:var t=e;return ve(t._context)+".Provider";case h:return er(e,e.render,"ForwardRef");case k:var n=e.displayName||null;return n!==null?n:D(e.type)||"Memo";case w:{var f=e,d=f._payload,l=f._init;try{return D(l(d))}catch{return null}}}return null}var F=Object.assign,Y=0,pe,he,me,ge,ye,be,Re;function Ee(){}Ee.__reactDisabledLog=!0;function rr(){{if(Y===0){pe=console.log,he=console.info,me=console.warn,ge=console.error,ye=console.group,be=console.groupCollapsed,Re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function tr(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:pe}),info:F({},e,{value:he}),warn:F({},e,{value:me}),error:F({},e,{value:ge}),group:F({},e,{value:ye}),groupCollapsed:F({},e,{value:be}),groupEnd:F({},e,{value:Re})})}Y<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=S.ReactCurrentDispatcher,ee;function J(e,r,t){{if(ee===void 0)try{throw Error()}catch(f){var n=f.stack.trim().match(/\n( *(at )?)/);ee=n&&n[1]||""}return`
`+ee+e}}var re=!1,X;{var ar=typeof WeakMap=="function"?WeakMap:Map;X=new ar}function ke(e,r){if(!e||re)return"";{var t=X.get(e);if(t!==void 0)return t}var n;re=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=q.current,q.current=null,rr();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(C){n=C}Reflect.construct(e,[],l)}else{try{l.call()}catch(C){n=C}e.call(l.prototype)}}else{try{throw Error()}catch(C){n=C}e()}}catch(C){if(C&&n&&typeof C.stack=="string"){for(var u=C.stack.split(`
`),_=n.stack.split(`
`),g=u.length-1,b=_.length-1;g>=1&&b>=0&&u[g]!==_[b];)b--;for(;g>=1&&b>=0;g--,b--)if(u[g]!==_[b]){if(g!==1||b!==1)do if(g--,b--,b<0||u[g]!==_[b]){var T=`
`+u[g].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&X.set(e,T),T}while(g>=1&&b>=0);break}}}finally{re=!1,q.current=d,tr(),Error.prepareStackTrace=f}var N=e?e.displayName||e.name:"",I=N?J(N):"";return typeof e=="function"&&X.set(e,I),I}function nr(e,r,t){return ke(e,!1)}function or(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return ke(e,or(e));if(typeof e=="string")return J(e);switch(e){case x:return J("Suspense");case m:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return nr(e.render);case k:return H(e.type,r,t);case w:{var n=e,f=n._payload,d=n._init;try{return H(d(f),r,t)}catch{}}}return""}var B=Object.prototype.hasOwnProperty,_e={},Ce=S.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}function ir(e,r,t,n,f){{var d=Function.call.bind(B);for(var l in e)if(d(e,l)){var u=void 0;try{if(typeof e[l]!="function"){var _=Error((n||"React class")+": "+t+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}u=e[l](r,l,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){u=g}u&&!(u instanceof Error)&&(z(f),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,l,typeof u),z(null)),u instanceof Error&&!(u.message in _e)&&(_e[u.message]=!0,z(f),E("Failed %s type: %s",t,u.message),z(null))}}}var sr=Array.isArray;function te(e){return sr(e)}function ur(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function lr(e){try{return xe(e),!1}catch{return!0}}function xe(e){return""+e}function Te(e){if(lr(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ur(e)),xe(e)}var Pe=S.ReactCurrentOwner,cr={key:!0,ref:!0,__self:!0,__source:!0},Se,we;function fr(e){if(B.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function dr(e){if(B.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function vr(e,r){typeof e.ref=="string"&&Pe.current}function pr(e,r){{var t=function(){Se||(Se=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function hr(e,r){{var t=function(){we||(we=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var mr=function(e,r,t,n,f,d,l){var u={$$typeof:i,type:e,key:r,ref:t,props:l,_owner:d};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function gr(e,r,t,n,f){{var d,l={},u=null,_=null;t!==void 0&&(Te(t),u=""+t),dr(r)&&(Te(r.key),u=""+r.key),fr(r)&&(_=r.ref,vr(r,f));for(d in r)B.call(r,d)&&!cr.hasOwnProperty(d)&&(l[d]=r[d]);if(e&&e.defaultProps){var g=e.defaultProps;for(d in g)l[d]===void 0&&(l[d]=g[d])}if(u||_){var b=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&pr(l,b),_&&hr(l,b)}return mr(e,u,_,f,n,Pe.current,l)}}var ae=S.ReactCurrentOwner,Oe=S.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}var ne;ne=!1;function oe(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function je(){{if(ae.current){var e=D(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function yr(e){return""}var De={};function br(e){{var r=je();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Fe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=br(r);if(De[t])return;De[t]=!0;var n="";e&&e._owner&&e._owner!==ae.current&&(n=" It was passed a child from "+D(e._owner.type)+"."),A(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Ie(e,r){{if(typeof e!="object")return;if(te(e))for(var t=0;t<e.length;t++){var n=e[t];oe(n)&&Fe(n,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var f=O(e);if(typeof f=="function"&&f!==e.entries)for(var d=f.call(e),l;!(l=d.next()).done;)oe(l.value)&&Fe(l.value,r)}}}function Rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===h||r.$$typeof===k))t=r.propTypes;else return;if(t){var n=D(r);ir(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ne){ne=!0;var f=D(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Er(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}var We={};function Ae(e,r,t,n,f,d){{var l=qe(e);if(!l){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _=yr();_?u+=_:u+=je();var g;e===null?g="null":te(e)?g="array":e!==void 0&&e.$$typeof===i?(g="<"+(D(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,u)}var b=gr(e,r,t,f,d);if(b==null)return b;if(l){var T=r.children;if(T!==void 0)if(n)if(te(T)){for(var N=0;N<T.length;N++)Ie(T[N],e);Object.freeze&&Object.freeze(T)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ie(T,e)}if(B.call(r,"key")){var I=D(e),C=Object.keys(r).filter(function(Pr){return Pr!=="key"}),ie=C.length>0?"{key: someKey, "+C.join(": ..., ")+": ...}":"{key: someKey}";if(!We[I+ie]){var Tr=C.length>0?"{"+C.join(": ..., ")+": ...}":"{}";E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ie,I,Tr,I),We[I+ie]=!0}}return e===s?Er(b):Rr(b),b}}function kr(e,r,t){return Ae(e,r,t,!0)}function _r(e,r,t){return Ae(e,r,t,!1)}var Cr=_r,xr=kr;L.Fragment=s,L.jsx=Cr,L.jsxs=xr}()),L}var le;function Le(){return le||(le=1,process.env.NODE_ENV==="production"?j.exports=Ne():j.exports=Ve()),j.exports}var P=Le();/*! *****************************************************************************
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
  ***************************************************************************** */var G=function(a,i){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,s){o.__proto__=s}||function(o,s){for(var c in s)s.hasOwnProperty(c)&&(o[c]=s[c])},G(a,i)};function Ye(a,i){G(a,i);function o(){this.constructor=a}a.prototype=i===null?Object.create(i):(o.prototype=i.prototype,new o)}var Be=100,Me=100,ce=50,K=50,Z=50;function fe(a){var i=a.className,o=a.counterClockwise,s=a.dashRatio,c=a.pathRadius,v=a.strokeWidth,p=a.style;return y.createElement("path",{className:i,style:Object.assign({},p,Je({pathRadius:c,dashRatio:s,counterClockwise:o})),d:Ue({pathRadius:c,counterClockwise:o}),strokeWidth:v,fillOpacity:0})}function Ue(a){var i=a.pathRadius,o=a.counterClockwise,s=i,c=o?1:0;return`
      M `+K+","+Z+`
      m 0,-`+s+`
      a `+s+","+s+" "+c+" 1 1 0,"+2*s+`
      a `+s+","+s+" "+c+" 1 1 0,-"+2*s+`
    `}function Je(a){var i=a.counterClockwise,o=a.dashRatio,s=a.pathRadius,c=Math.PI*2*s,v=(1-o)*c;return{strokeDasharray:c+"px "+c+"px",strokeDashoffset:(i?-v:v)+"px"}}var Xe=function(a){Ye(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},i.prototype.getPathRadius=function(){return ce-this.props.strokeWidth/2-this.getBackgroundPadding()},i.prototype.getPathRatio=function(){var o=this.props,s=o.value,c=o.minValue,v=o.maxValue,p=Math.min(Math.max(s,c),v);return(p-c)/(v-c)},i.prototype.render=function(){var o=this.props,s=o.circleRatio,c=o.className,v=o.classes,p=o.counterClockwise,R=o.styles,h=o.strokeWidth,x=o.text,m=this.getPathRadius(),k=this.getPathRatio();return y.createElement("svg",{className:v.root+" "+c,style:R.root,viewBox:"0 0 "+Be+" "+Me,"data-test-id":"CircularProgressbar"},this.props.background?y.createElement("circle",{className:v.background,style:R.background,cx:K,cy:Z,r:ce}):null,y.createElement(fe,{className:v.trail,counterClockwise:p,dashRatio:s,pathRadius:m,strokeWidth:h,style:R.trail}),y.createElement(fe,{className:v.path,counterClockwise:p,dashRatio:k*s,pathRadius:m,strokeWidth:h,style:R.path}),x?y.createElement("text",{className:v.text,style:R.text,x:K,y:Z},x):null)},i.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},i}(y.Component);function He(a){var i=a.rotation,o=a.strokeLinecap,s=a.textColor,c=a.textSize,v=a.pathColor,p=a.pathTransition,R=a.pathTransitionDuration,h=a.trailColor,x=a.backgroundColor,m=i==null?void 0:"rotate("+i+"turn)",k=i==null?void 0:"center center";return{root:{},path:M({stroke:v,strokeLinecap:o,transform:m,transformOrigin:k,transition:p,transitionDuration:R==null?void 0:R+"s"}),trail:M({stroke:h,strokeLinecap:o,transform:m,transformOrigin:k}),text:M({fill:s,fontSize:c}),background:M({fill:x})}}function M(a){return Object.keys(a).forEach(function(i){a[i]==null&&delete a[i]}),a}function ze({settings:a,content:i}){const[o,s]=y.useState(a.workDuration*60),[c,v]=y.useState(!1),[p,R]=y.useState(!0),[h,x]=y.useState(0);y.useEffect(()=>{let O=null;return c&&o>0?O=setInterval(()=>{s(S=>S-1)},1e3):o===0&&k(),()=>{O&&clearInterval(O)}},[c,o]),y.useEffect(()=>{p&&a.autoStartPomodoros&&v(!0)},[]);const m=O=>{const S={type:p?"work":"break",duration:p?a.workDuration:a.breakDuration,completed:O,timestamp:new Date},E=localStorage.getItem("pomodoroSessions"),$=E?JSON.parse(E):[];localStorage.setItem("pomodoroSessions",JSON.stringify([...$,S]))},k=()=>{m(!0),p?(x(O=>O+1),s(a.breakDuration*60),a.autoStartBreaks&&v(!0)):(s(a.workDuration*60),a.autoStartPomodoros&&v(!0)),R(!p)},w=()=>{v(!c)},W=()=>{c&&m(!1),v(!1),s(p?a.workDuration*60:a.breakDuration*60)},U=Math.floor(o/60),Q=o%60;return P.jsxs("div",{className:"flex flex-col items-center",children:[P.jsx("div",{className:"w-64 h-64 mb-8",children:P.jsx(Xe,{value:o,maxValue:p?a.workDuration*60:a.breakDuration*60,text:`${U}:${Q.toString().padStart(2,"0")}`,styles:He({textColor:p?"#FF6B6B":"#4ECDC4",pathColor:p?"#FF6B6B":"#4ECDC4",trailColor:"#F3F4F6"})})}),!!i&&P.jsx("div",{children:i}),P.jsxs("div",{className:"flex gap-4 mb-6 justify-center",children:[P.jsx("button",{onClick:w,className:`btn ${c?"btn-error":"btn-primary"}`,children:c?"Pause":"Start"}),P.jsx("button",{onClick:W,className:"btn btn-outline dark:bg-gray-800 dark:text-white",children:"Reset"})]}),P.jsxs("div",{className:"text-center",children:[P.jsx("p",{className:"text-lg font-medium mb-2",children:p?"Work Time":"Break Time"}),P.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sessions completed today: ",h]})]})]})}return ze});
