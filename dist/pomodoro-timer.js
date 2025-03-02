import './pomodoro-timer.css';
import Ve, { createElement as A, Component as br, useState as X, useEffect as Rr } from "react";
var q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Er() {
  if (Fe) return $;
  Fe = 1;
  var a = Ve, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, h, C) {
    var m, E = {}, w = null, F = null;
    C !== void 0 && (w = "" + C), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (m in h) s.call(h, m) && !v.hasOwnProperty(m) && (E[m] = h[m]);
    if (b && b.defaultProps) for (m in h = b.defaultProps, h) E[m] === void 0 && (E[m] = h[m]);
    return { $$typeof: i, type: b, key: w, ref: F, props: E, _owner: c.current };
  }
  return $.Fragment = o, $.jsx = p, $.jsxs = p, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function kr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ve, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), Y = Symbol.iterator, z = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[z];
      return typeof r == "function" ? r : null;
    }
    var T = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        G("error", e, t);
      }
    }
    function G(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var $e = !1, Le = !1, Ye = !1, Be = !1, Me = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || Me || e === c || e === C || e === m || Be || e === F || $e || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === p || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case v:
          return "Profiler";
        case c:
          return "StrictMode";
        case C:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return le(r) + ".Consumer";
          case p:
            var t = e;
            return le(t._context) + ".Provider";
          case h:
            return Je(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case w: {
            var f = e, d = f._payload, l = f._init;
            try {
              return O(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, N = 0, ce, fe, de, ve, pe, he, me;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Xe() {
      {
        if (N === 0) {
          ce = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, he = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        N++;
      }
    }
    function qe() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ce
            }),
            info: j({}, e, {
              value: fe
            }),
            warn: j({}, e, {
              value: de
            }),
            error: j({}, e, {
              value: ve
            }),
            group: j({}, e, {
              value: pe
            }),
            groupCollapsed: j({}, e, {
              value: he
            }),
            groupEnd: j({}, e, {
              value: me
            })
          });
        }
        N < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = T.ReactCurrentDispatcher, Z;
    function B(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, M;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      M = new He();
    }
    function ye(e, r) {
      if (!e || Q)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = K.current, K.current = null, Xe();
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
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (_) {
              n = _;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var u = _.stack.split(`
`), k = n.stack.split(`
`), g = u.length - 1, y = k.length - 1; g >= 1 && y >= 0 && u[g] !== k[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (u[g] !== k[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || u[g] !== k[y]) {
                    var x = `
` + u[g].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, x), x;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = d, qe(), Error.prepareStackTrace = f;
      }
      var W = e ? e.displayName || e.name : "", D = W ? B(W) : "";
      return typeof e == "function" && M.set(e, D), D;
    }
    function ze(e, r, t) {
      return ye(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Ge(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case C:
          return B("Suspense");
        case m:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ze(e.render);
          case E:
            return U(e.type, r, t);
          case w: {
            var n = e, f = n._payload, d = n._init;
            try {
              return U(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, Re = T.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, f) {
      {
        var d = Function.call.bind(V);
        for (var l in e)
          if (d(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var k = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              u = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              u = g;
            }
            u && !(u instanceof Error) && (J(f), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof u), J(null)), u instanceof Error && !(u.message in be) && (be[u.message] = !0, J(f), R("Failed %s type: %s", t, u.message), J(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ee(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function ke(e) {
      if (er(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Ee(e);
    }
    var _e = T.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function tr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function or(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          xe || (xe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, n, f, d, l) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: d
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
    function ur(e, r, t, n, f) {
      {
        var d, l = {}, u = null, k = null;
        t !== void 0 && (ke(t), u = "" + t), ar(r) && (ke(r.key), u = "" + r.key), tr(r) && (k = r.ref, nr(r, f));
        for (d in r)
          V.call(r, d) && !rr.hasOwnProperty(d) && (l[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            l[d] === void 0 && (l[d] = g[d]);
        }
        if (u || k) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && or(l, y), k && ir(l, y);
        }
        return sr(e, u, k, f, n, _e.current, l);
      }
    }
    var re = T.ReactCurrentOwner, Te = T.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Pe() {
      {
        if (re.current) {
          var e = O(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var we = {};
    function cr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + O(e._owner.type) + "."), I(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Se(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = S(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), l; !(l = d.next()).done; )
              ae(l.value) && Se(l.value, r);
        }
      }
    }
    function fr(e) {
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
          var n = O(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var f = O(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var je = {};
    function De(e, r, t, n, f, d) {
      {
        var l = Ue(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = lr();
          k ? u += k : u += Pe();
          var g;
          e === null ? g = "null" : ee(e) ? g = "array" : e !== void 0 && e.$$typeof === i ? (g = "<" + (O(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, u);
        }
        var y = ur(e, r, t, f, d);
        if (y == null)
          return y;
        if (l) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (ee(x)) {
                for (var W = 0; W < x.length; W++)
                  Oe(x[W], e);
                Object.freeze && Object.freeze(x);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(x, e);
        }
        if (V.call(r, "key")) {
          var D = O(e), _ = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ne = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[D + ne]) {
            var gr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, D, gr, D), je[D + ne] = !0;
          }
        }
        return e === s ? dr(y) : fr(y), y;
      }
    }
    function vr(e, r, t) {
      return De(e, r, t, !0);
    }
    function pr(e, r, t) {
      return De(e, r, t, !1);
    }
    var hr = pr, mr = vr;
    L.Fragment = s, L.jsx = hr, L.jsxs = mr;
  }()), L;
}
var We;
function _r() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? q.exports = Er() : q.exports = kr()), q.exports;
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
var oe = function(a, i) {
  return oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
    o.__proto__ = s;
  } || function(o, s) {
    for (var c in s) s.hasOwnProperty(c) && (o[c] = s[c]);
  }, oe(a, i);
};
function Cr(a, i) {
  oe(a, i);
  function o() {
    this.constructor = a;
  }
  a.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
}
var xr = 100, Tr = 100, Ae = 50, ie = 50, se = 50;
function Ne(a) {
  var i = a.className, o = a.counterClockwise, s = a.dashRatio, c = a.pathRadius, v = a.strokeWidth, p = a.style;
  return A("path", { className: i, style: Object.assign({}, p, wr({ pathRadius: c, dashRatio: s, counterClockwise: o })), d: Pr({
    pathRadius: c,
    counterClockwise: o
  }), strokeWidth: v, fillOpacity: 0 });
}
function Pr(a) {
  var i = a.pathRadius, o = a.counterClockwise, s = i, c = o ? 1 : 0;
  return `
      M ` + ie + "," + se + `
      m 0,-` + s + `
      a ` + s + "," + s + " " + c + " 1 1 0," + 2 * s + `
      a ` + s + "," + s + " " + c + " 1 1 0,-" + 2 * s + `
    `;
}
function wr(a) {
  var i = a.counterClockwise, o = a.dashRatio, s = a.pathRadius, c = Math.PI * 2 * s, v = (1 - o) * c;
  return {
    strokeDasharray: c + "px " + c + "px",
    strokeDashoffset: (i ? -v : v) + "px"
  };
}
var Sr = function(a) {
  Cr(i, a);
  function i() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return i.prototype.getBackgroundPadding = function() {
    return this.props.background ? this.props.backgroundPadding : 0;
  }, i.prototype.getPathRadius = function() {
    return Ae - this.props.strokeWidth / 2 - this.getBackgroundPadding();
  }, i.prototype.getPathRatio = function() {
    var o = this.props, s = o.value, c = o.minValue, v = o.maxValue, p = Math.min(Math.max(s, c), v);
    return (p - c) / (v - c);
  }, i.prototype.render = function() {
    var o = this.props, s = o.circleRatio, c = o.className, v = o.classes, p = o.counterClockwise, b = o.styles, h = o.strokeWidth, C = o.text, m = this.getPathRadius(), E = this.getPathRatio();
    return A(
      "svg",
      { className: v.root + " " + c, style: b.root, viewBox: "0 0 " + xr + " " + Tr, "data-test-id": "CircularProgressbar" },
      this.props.background ? A("circle", { className: v.background, style: b.background, cx: ie, cy: se, r: Ae }) : null,
      A(Ne, { className: v.trail, counterClockwise: p, dashRatio: s, pathRadius: m, strokeWidth: h, style: b.trail }),
      A(Ne, { className: v.path, counterClockwise: p, dashRatio: E * s, pathRadius: m, strokeWidth: h, style: b.path }),
      C ? A("text", { className: v.text, style: b.text, x: ie, y: se }, C) : null
    );
  }, i.defaultProps = {
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
  }, i;
}(br);
function Or(a) {
  var i = a.rotation, o = a.strokeLinecap, s = a.textColor, c = a.textSize, v = a.pathColor, p = a.pathTransition, b = a.pathTransitionDuration, h = a.trailColor, C = a.backgroundColor, m = i == null ? void 0 : "rotate(" + i + "turn)", E = i == null ? void 0 : "center center";
  return {
    root: {},
    path: H({
      stroke: v,
      strokeLinecap: o,
      transform: m,
      transformOrigin: E,
      transition: p,
      transitionDuration: b == null ? void 0 : b + "s"
    }),
    trail: H({
      stroke: h,
      strokeLinecap: o,
      transform: m,
      transformOrigin: E
    }),
    text: H({
      fill: s,
      fontSize: c
    }),
    background: H({
      fill: C
    })
  };
}
function H(a) {
  return Object.keys(a).forEach(function(i) {
    a[i] == null && delete a[i];
  }), a;
}
function Dr({ settings: a, content: i }) {
  const [o, s] = X(a.workDuration * 60), [c, v] = X(!1), [p, b] = X(!0), [h, C] = X(0);
  Rr(() => {
    let S = null;
    return c && o > 0 ? S = setInterval(() => {
      s((T) => T - 1);
    }, 1e3) : o === 0 && E(), () => {
      S && clearInterval(S);
    };
  }, [c, o]);
  const m = (S) => {
    const T = {
      type: p ? "work" : "break",
      duration: p ? a.workDuration : a.breakDuration,
      completed: S,
      timestamp: /* @__PURE__ */ new Date()
    }, R = localStorage.getItem("pomodoroSessions"), G = R ? JSON.parse(R) : [];
    localStorage.setItem("pomodoroSessions", JSON.stringify([...G, T]));
  }, E = () => {
    m(!0), p ? (C((S) => S + 1), s(a.breakDuration * 60), a.autoStartBreaks && v(!0)) : (s(a.workDuration * 60), a.autoStartPomodoros && v(!0)), b(!p);
  }, w = () => {
    v(!c);
  }, F = () => {
    c && m(!1), v(!1), s(p ? a.workDuration * 60 : a.breakDuration * 60);
  }, Y = Math.floor(o / 60), z = o % 60;
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ P.jsx("div", { className: "w-64 h-64 mb-8", children: /* @__PURE__ */ P.jsx(
      Sr,
      {
        value: o,
        maxValue: p ? a.workDuration * 60 : a.breakDuration * 60,
        text: `${Y}:${z.toString().padStart(2, "0")}`,
        styles: Or({
          textColor: p ? "#FF6B6B" : "#4ECDC4",
          pathColor: p ? "#FF6B6B" : "#4ECDC4",
          trailColor: "#F3F4F6"
        })
      }
    ) }),
    !!i && /* @__PURE__ */ P.jsx("div", { children: i }),
    /* @__PURE__ */ P.jsxs("div", { className: "flex gap-4 mb-6 justify-center", children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          onClick: w,
          className: `btn ${c ? "btn-error" : "btn-primary"}`,
          children: c ? "Pause" : "Start"
        }
      ),
      /* @__PURE__ */ P.jsx("button", { onClick: F, className: "btn btn-outline dark:bg-gray-800 dark:text-white", children: "Reset" })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ P.jsx("p", { className: "text-lg font-medium mb-2", children: p ? "Work Time" : "Break Time" }),
      /* @__PURE__ */ P.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
        "Sessions completed today: ",
        h
      ] })
    ] })
  ] });
}
export {
  Dr as default
};
