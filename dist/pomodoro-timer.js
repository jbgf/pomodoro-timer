import './pomodoro-timer.css';
import Le, { createElement as W, Component as Rr, useState as X, useEffect as Ie } from "react";
var q = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Er() {
  if (We) return V;
  We = 1;
  var a = Le, s = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(v, h, C) {
    var g, E = {}, w = null, D = null;
    C !== void 0 && (w = "" + C), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (D = h.ref);
    for (g in h) o.call(h, g) && !d.hasOwnProperty(g) && (E[g] = h[g]);
    if (v && v.defaultProps) for (g in h = v.defaultProps, h) E[g] === void 0 && (E[g] = h[g]);
    return { $$typeof: s, type: v, key: w, ref: D, props: E, _owner: c.current };
  }
  return V.Fragment = i, V.jsx = b, V.jsxs = b, V;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function kr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Le, s = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), v = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), L = Symbol.iterator, z = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[z];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Y("error", e, t);
      }
    }
    function Y(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var p = t.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var K = !1, Ye = !1, Be = !1, Me = !1, Ue = !1, le;
    le = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === d || Ue || e === c || e === C || e === g || Me || e === D || K || Ye || Be || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === b || e.$$typeof === v || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case c:
          return "StrictMode";
        case C:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ce(r) + ".Consumer";
          case b:
            var t = e;
            return ce(t._context) + ".Provider";
          case h:
            return Xe(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case w: {
            var f = e, p = f._payload, l = f._init;
            try {
              return S(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, fe, de, ve, pe, he, me, ge;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function qe() {
      {
        if (A === 0) {
          fe = console.log, de = console.info, ve = console.warn, pe = console.error, he = console.group, me = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function He() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: fe
            }),
            info: O({}, e, {
              value: de
            }),
            warn: O({}, e, {
              value: ve
            }),
            error: O({}, e, {
              value: pe
            }),
            group: O({}, e, {
              value: he
            }),
            groupCollapsed: O({}, e, {
              value: me
            }),
            groupEnd: O({}, e, {
              value: ge
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = k.ReactCurrentDispatcher, Q;
    function B(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, M;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      M = new ze();
    }
    function be(e, r) {
      if (!e || ee)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = Z.current, Z.current = null, qe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (x) {
              n = x;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var u = x.stack.split(`
`), _ = n.stack.split(`
`), y = u.length - 1, R = _.length - 1; y >= 1 && R >= 0 && u[y] !== _[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (u[y] !== _[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || u[y] !== _[R]) {
                    var T = `
` + u[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = p, He(), Error.prepareStackTrace = f;
      }
      var I = e ? e.displayName || e.name : "", j = I ? B(I) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function Ge(e, r, t) {
      return be(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ke(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case C:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ge(e.render);
          case E:
            return U(e.type, r, t);
          case w: {
            var n = e, f = n._payload, p = n._init;
            try {
              return U(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, Re = {}, Ee = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, f) {
      {
        var p = Function.call.bind(N);
        for (var l in e)
          if (p(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              u = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              u = y;
            }
            u && !(u instanceof Error) && (J(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof u), J(null)), u instanceof Error && !(u.message in Re) && (Re[u.message] = !0, J(f), m("Failed %s type: %s", t, u.message), J(null));
          }
      }
    }
    var Qe = Array.isArray;
    function re(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function _e(e) {
      if (rr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ke(e);
    }
    var xe = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Te;
    function ar(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      typeof e.ref == "string" && xe.current;
    }
    function ir(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, n, f, p, l) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function lr(e, r, t, n, f) {
      {
        var p, l = {}, u = null, _ = null;
        t !== void 0 && (_e(t), u = "" + t), nr(r) && (_e(r.key), u = "" + r.key), ar(r) && (_ = r.ref, or(r, f));
        for (p in r)
          N.call(r, p) && !tr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            l[p] === void 0 && (l[p] = y[p]);
        }
        if (u || _) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(l, R), _ && sr(l, R);
        }
        return ur(e, u, _, f, n, xe.current, l);
      }
    }
    var te = k.ReactCurrentOwner, Pe = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function we() {
      {
        if (te.current) {
          var e = S(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var Se = {};
    function fr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + S(e._owner.type) + "."), F(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = G(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), l; !(l = p.next()).done; )
              ne(l.value) && Oe(l.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var f = S(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var De = {};
    function Fe(e, r, t, n, f, p) {
      {
        var l = Je(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = cr();
          _ ? u += _ : u += we();
          var y;
          e === null ? y = "null" : re(e) ? y = "array" : e !== void 0 && e.$$typeof === s ? (y = "<" + (S(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, u);
        }
        var R = lr(e, r, t, f, p);
        if (R == null)
          return R;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (re(T)) {
                for (var I = 0; I < T.length; I++)
                  je(T[I], e);
                Object.freeze && Object.freeze(T);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        if (N.call(r, "key")) {
          var j = S(e), x = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), oe = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[j + oe]) {
            var yr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, j, yr, j), De[j + oe] = !0;
          }
        }
        return e === o ? vr(R) : dr(R), R;
      }
    }
    function pr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function hr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var mr = hr, gr = pr;
    $.Fragment = o, $.jsx = mr, $.jsxs = gr;
  }()), $;
}
var Ne;
function _r() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? q.exports = Er() : q.exports = kr()), q.exports;
}
var P = _r();
/*! *****************************************************************************
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
***************************************************************************** */
var ie = function(a, s) {
  return ie = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
    i.__proto__ = o;
  } || function(i, o) {
    for (var c in o) o.hasOwnProperty(c) && (i[c] = o[c]);
  }, ie(a, s);
};
function xr(a, s) {
  ie(a, s);
  function i() {
    this.constructor = a;
  }
  a.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
}
var Cr = 100, Tr = 100, Ve = 50, se = 50, ue = 50;
function $e(a) {
  var s = a.className, i = a.counterClockwise, o = a.dashRatio, c = a.pathRadius, d = a.strokeWidth, b = a.style;
  return W("path", { className: s, style: Object.assign({}, b, wr({ pathRadius: c, dashRatio: o, counterClockwise: i })), d: Pr({
    pathRadius: c,
    counterClockwise: i
  }), strokeWidth: d, fillOpacity: 0 });
}
function Pr(a) {
  var s = a.pathRadius, i = a.counterClockwise, o = s, c = i ? 1 : 0;
  return `
      M ` + se + "," + ue + `
      m 0,-` + o + `
      a ` + o + "," + o + " " + c + " 1 1 0," + 2 * o + `
      a ` + o + "," + o + " " + c + " 1 1 0,-" + 2 * o + `
    `;
}
function wr(a) {
  var s = a.counterClockwise, i = a.dashRatio, o = a.pathRadius, c = Math.PI * 2 * o, d = (1 - i) * c;
  return {
    strokeDasharray: c + "px " + c + "px",
    strokeDashoffset: (s ? -d : d) + "px"
  };
}
var Sr = function(a) {
  xr(s, a);
  function s() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return s.prototype.getBackgroundPadding = function() {
    return this.props.background ? this.props.backgroundPadding : 0;
  }, s.prototype.getPathRadius = function() {
    return Ve - this.props.strokeWidth / 2 - this.getBackgroundPadding();
  }, s.prototype.getPathRatio = function() {
    var i = this.props, o = i.value, c = i.minValue, d = i.maxValue, b = Math.min(Math.max(o, c), d);
    return (b - c) / (d - c);
  }, s.prototype.render = function() {
    var i = this.props, o = i.circleRatio, c = i.className, d = i.classes, b = i.counterClockwise, v = i.styles, h = i.strokeWidth, C = i.text, g = this.getPathRadius(), E = this.getPathRatio();
    return W(
      "svg",
      { className: d.root + " " + c, style: v.root, viewBox: "0 0 " + Cr + " " + Tr, "data-test-id": "CircularProgressbar" },
      this.props.background ? W("circle", { className: d.background, style: v.background, cx: se, cy: ue, r: Ve }) : null,
      W($e, { className: d.trail, counterClockwise: b, dashRatio: o, pathRadius: g, strokeWidth: h, style: v.trail }),
      W($e, { className: d.path, counterClockwise: b, dashRatio: E * o, pathRadius: g, strokeWidth: h, style: v.path }),
      C ? W("text", { className: d.text, style: v.text, x: se, y: ue }, C) : null
    );
  }, s.defaultProps = {
    background: !1,
    backgroundPadding: 0,
    circleRatio: 1,
    classes: {
      root: "CircularProgressbar",
      trail: "CircularProgressbar-trail",
      path: "CircularProgressbar-path",
      text: "CircularProgressbar-text",
      background: "CircularProgressbar-background"
    },
    counterClockwise: !1,
    className: "",
    maxValue: 100,
    minValue: 0,
    strokeWidth: 8,
    styles: {
      root: {},
      trail: {},
      path: {},
      text: {},
      background: {}
    },
    text: ""
  }, s;
}(Rr);
function Or(a) {
  var s = a.rotation, i = a.strokeLinecap, o = a.textColor, c = a.textSize, d = a.pathColor, b = a.pathTransition, v = a.pathTransitionDuration, h = a.trailColor, C = a.backgroundColor, g = s == null ? void 0 : "rotate(" + s + "turn)", E = s == null ? void 0 : "center center";
  return {
    root: {},
    path: H({
      stroke: d,
      strokeLinecap: i,
      transform: g,
      transformOrigin: E,
      transition: b,
      transitionDuration: v == null ? void 0 : v + "s"
    }),
    trail: H({
      stroke: h,
      strokeLinecap: i,
      transform: g,
      transformOrigin: E
    }),
    text: H({
      fill: o,
      fontSize: c
    }),
    background: H({
      fill: C
    })
  };
}
function H(a) {
  return Object.keys(a).forEach(function(s) {
    a[s] == null && delete a[s];
  }), a;
}
function Dr({ settings: a, content: s, onSessionComplete: i }) {
  const [o, c] = X(a.workDuration * 60), [d, b] = X(!1), [v, h] = X(!0), [C, g] = X(0);
  Ie(() => {
    let k = null;
    return d && o > 0 ? k = setInterval(() => {
      c((m) => m - 1);
    }, 1e3) : o === 0 && w(), () => {
      k && clearInterval(k);
    };
  }, [d, o]), Ie(() => {
    v && a.autoStartPomodoros && b(!0);
  }, []);
  const E = (k) => {
    const m = {
      type: v ? "work" : "break",
      duration: v ? a.workDuration : a.breakDuration,
      completed: k,
      timestamp: /* @__PURE__ */ new Date()
    }, Y = localStorage.getItem("pomodoroSessions"), K = Y ? JSON.parse(Y) : [];
    return localStorage.setItem("pomodoroSessions", JSON.stringify([...K, m])), m;
  }, w = () => {
    const k = E(!0);
    i && i(k), v ? (g((m) => m + 1), c(a.breakDuration * 60), a.autoStartBreaks && b(!0)) : (c(a.workDuration * 60), a.autoStartPomodoros && b(!0)), h(!v);
  }, D = () => {
    b(!d);
  }, L = () => {
    if (d) {
      const k = E(!1);
      i && i(k);
    }
    b(!1), c(v ? a.workDuration * 60 : a.breakDuration * 60);
  }, z = Math.floor(o / 60), G = o % 60;
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ P.jsx("div", { className: "w-64 h-64 mb-8", children: /* @__PURE__ */ P.jsx(
      Sr,
      {
        value: o,
        maxValue: v ? a.workDuration * 60 : a.breakDuration * 60,
        text: `${z}:${G.toString().padStart(2, "0")}`,
        styles: Or({
          textColor: v ? "#FF6B6B" : "#4ECDC4",
          pathColor: v ? "#FF6B6B" : "#4ECDC4",
          trailColor: "#F3F4F6"
        })
      }
    ) }),
    !!s && /* @__PURE__ */ P.jsx("div", { children: s }),
    /* @__PURE__ */ P.jsxs("div", { className: "flex gap-4 mb-6 justify-center", children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          onClick: D,
          className: `btn ${d ? "btn-error" : "btn-primary"}`,
          children: d ? "Pause" : "Start"
        }
      ),
      /* @__PURE__ */ P.jsx("button", { onClick: L, className: "btn btn-outline dark:bg-gray-800 dark:text-white", children: "Reset" })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ P.jsx("p", { className: "text-lg font-medium mb-2", children: v ? "Work Time" : "Break Time" }),
      /* @__PURE__ */ P.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
        "Sessions completed today: ",
        C
      ] })
    ] })
  ] });
}
export {
  Dr as default
};
