import Ne, { createElement as A, Component as br, useState as q, useEffect as Rr } from "react";
var H = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Er() {
  if (De) return L;
  De = 1;
  var a = Ne, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(y, p, _) {
    var h, E = {}, T = null, F = null;
    _ !== void 0 && (T = "" + _), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (F = p.ref);
    for (h in p) i.call(p, h) && !f.hasOwnProperty(h) && (E[h] = p[h]);
    if (y && y.defaultProps) for (h in p = y.defaultProps, p) E[h] === void 0 && (E[h] = p[h]);
    return { $$typeof: o, type: y, key: T, ref: F, props: E, _owner: c.current };
  }
  return L.Fragment = s, L.jsx = R, L.jsxs = R, L;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function kr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ne, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), B = Symbol.iterator, P = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[P];
      return typeof r == "function" ? r : null;
    }
    var w = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ve("error", e, t);
      }
    }
    function Ve(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var $e = !1, Le = !1, Ye = !1, Be = !1, Me = !1, se;
    se = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === f || Me || e === c || e === _ || e === h || Be || e === F || $e || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === R || e.$$typeof === y || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case _:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ue(r) + ".Consumer";
          case R:
            var t = e;
            return ue(t._context) + ".Provider";
          case p:
            return Je(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case T: {
            var d = e, v = d._payload, l = d._init;
            try {
              return O(l(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, V = 0, le, ce, fe, de, ve, pe, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Xe() {
      {
        if (V === 0) {
          le = console.log, ce = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        V++;
      }
    }
    function qe() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: le
            }),
            info: j({}, e, {
              value: ce
            }),
            warn: j({}, e, {
              value: fe
            }),
            error: j({}, e, {
              value: de
            }),
            group: j({}, e, {
              value: ve
            }),
            groupCollapsed: j({}, e, {
              value: pe
            }),
            groupEnd: j({}, e, {
              value: he
            })
          });
        }
        V < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = w.ReactCurrentDispatcher, K;
    function M(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, U;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      U = new He();
    }
    function ge(e, r) {
      if (!e || Z)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = G.current, G.current = null, Xe();
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
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              n = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var u = C.stack.split(`
`), k = n.stack.split(`
`), m = u.length - 1, g = k.length - 1; m >= 1 && g >= 0 && u[m] !== k[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (u[m] !== k[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || u[m] !== k[g]) {
                    var x = `
` + u[m].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, x), x;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = v, qe(), Error.prepareStackTrace = d;
      }
      var W = e ? e.displayName || e.name : "", D = W ? M(W) : "";
      return typeof e == "function" && U.set(e, D), D;
    }
    function ze(e, r, t) {
      return ge(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ge(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case _:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return ze(e.render);
          case E:
            return J(e.type, r, t);
          case T: {
            var n = e, d = n._payload, v = n._init;
            try {
              return J(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ye = {}, be = w.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, d) {
      {
        var v = Function.call.bind($);
        for (var l in e)
          if (v(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var k = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              u = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              u = m;
            }
            u && !(u instanceof Error) && (X(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof u), X(null)), u instanceof Error && !(u.message in ye) && (ye[u.message] = !0, X(d), b("Failed %s type: %s", t, u.message), X(null));
          }
      }
    }
    var Ze = Array.isArray;
    function Q(e) {
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
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ee(e) {
      if (er(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Re(e);
    }
    var ke = w.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ce;
    function tr(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      typeof e.ref == "string" && ke.current;
    }
    function or(e, r) {
      {
        var t = function() {
          _e || (_e = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ce || (Ce = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, n, d, v, l) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: v
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
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, t, n, d) {
      {
        var v, l = {}, u = null, k = null;
        t !== void 0 && (Ee(t), u = "" + t), ar(r) && (Ee(r.key), u = "" + r.key), tr(r) && (k = r.ref, nr(r, d));
        for (v in r)
          $.call(r, v) && !rr.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (v in m)
            l[v] === void 0 && (l[v] = m[v]);
        }
        if (u || k) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && or(l, g), k && ir(l, g);
        }
        return sr(e, u, k, d, n, ke.current, l);
      }
    }
    var ee = w.ReactCurrentOwner, xe = w.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Te() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
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
    var Pe = {};
    function cr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + O(e._owner.type) + "."), I(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && we(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = N(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), l; !(l = v.next()).done; )
              te(l.value) && we(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var d = O(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Oe = {};
    function je(e, r, t, n, d, v) {
      {
        var l = Ue(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = lr();
          k ? u += k : u += Te();
          var m;
          e === null ? m = "null" : Q(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (O(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, u);
        }
        var g = ur(e, r, t, d, v);
        if (g == null)
          return g;
        if (l) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (Q(x)) {
                for (var W = 0; W < x.length; W++)
                  Se(x[W], e);
                Object.freeze && Object.freeze(x);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(x, e);
        }
        if ($.call(r, "key")) {
          var D = O(e), C = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ae = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[D + ae]) {
            var gr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, D, gr, D), Oe[D + ae] = !0;
          }
        }
        return e === i ? dr(g) : fr(g), g;
      }
    }
    function vr(e, r, t) {
      return je(e, r, t, !0);
    }
    function pr(e, r, t) {
      return je(e, r, t, !1);
    }
    var hr = pr, mr = vr;
    Y.Fragment = i, Y.jsx = hr, Y.jsxs = mr;
  }()), Y;
}
var Ie;
function _r() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? H.exports = Er() : H.exports = kr()), H.exports;
}
var S = _r();
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
var ne = function(a, o) {
  return ne = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, i) {
    s.__proto__ = i;
  } || function(s, i) {
    for (var c in i) i.hasOwnProperty(c) && (s[c] = i[c]);
  }, ne(a, o);
};
function Cr(a, o) {
  ne(a, o);
  function s() {
    this.constructor = a;
  }
  a.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
}
var xr = 100, Tr = 100, We = 50, oe = 50, ie = 50;
function Ae(a) {
  var o = a.className, s = a.counterClockwise, i = a.dashRatio, c = a.pathRadius, f = a.strokeWidth, R = a.style;
  return A("path", { className: o, style: Object.assign({}, R, wr({ pathRadius: c, dashRatio: i, counterClockwise: s })), d: Pr({
    pathRadius: c,
    counterClockwise: s
  }), strokeWidth: f, fillOpacity: 0 });
}
function Pr(a) {
  var o = a.pathRadius, s = a.counterClockwise, i = o, c = s ? 1 : 0;
  return `
      M ` + oe + "," + ie + `
      m 0,-` + i + `
      a ` + i + "," + i + " " + c + " 1 1 0," + 2 * i + `
      a ` + i + "," + i + " " + c + " 1 1 0,-" + 2 * i + `
    `;
}
function wr(a) {
  var o = a.counterClockwise, s = a.dashRatio, i = a.pathRadius, c = Math.PI * 2 * i, f = (1 - s) * c;
  return {
    strokeDasharray: c + "px " + c + "px",
    strokeDashoffset: (o ? -f : f) + "px"
  };
}
var Sr = function(a) {
  Cr(o, a);
  function o() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return o.prototype.getBackgroundPadding = function() {
    return this.props.background ? this.props.backgroundPadding : 0;
  }, o.prototype.getPathRadius = function() {
    return We - this.props.strokeWidth / 2 - this.getBackgroundPadding();
  }, o.prototype.getPathRatio = function() {
    var s = this.props, i = s.value, c = s.minValue, f = s.maxValue, R = Math.min(Math.max(i, c), f);
    return (R - c) / (f - c);
  }, o.prototype.render = function() {
    var s = this.props, i = s.circleRatio, c = s.className, f = s.classes, R = s.counterClockwise, y = s.styles, p = s.strokeWidth, _ = s.text, h = this.getPathRadius(), E = this.getPathRatio();
    return A(
      "svg",
      { className: f.root + " " + c, style: y.root, viewBox: "0 0 " + xr + " " + Tr, "data-test-id": "CircularProgressbar" },
      this.props.background ? A("circle", { className: f.background, style: y.background, cx: oe, cy: ie, r: We }) : null,
      A(Ae, { className: f.trail, counterClockwise: R, dashRatio: i, pathRadius: h, strokeWidth: p, style: y.trail }),
      A(Ae, { className: f.path, counterClockwise: R, dashRatio: E * i, pathRadius: h, strokeWidth: p, style: y.path }),
      _ ? A("text", { className: f.text, style: y.text, x: oe, y: ie }, _) : null
    );
  }, o.defaultProps = {
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
  }, o;
}(br);
function Or(a) {
  var o = a.rotation, s = a.strokeLinecap, i = a.textColor, c = a.textSize, f = a.pathColor, R = a.pathTransition, y = a.pathTransitionDuration, p = a.trailColor, _ = a.backgroundColor, h = o == null ? void 0 : "rotate(" + o + "turn)", E = o == null ? void 0 : "center center";
  return {
    root: {},
    path: z({
      stroke: f,
      strokeLinecap: s,
      transform: h,
      transformOrigin: E,
      transition: R,
      transitionDuration: y == null ? void 0 : y + "s"
    }),
    trail: z({
      stroke: p,
      strokeLinecap: s,
      transform: h,
      transformOrigin: E
    }),
    text: z({
      fill: i,
      fontSize: c
    }),
    background: z({
      fill: _
    })
  };
}
function z(a) {
  return Object.keys(a).forEach(function(o) {
    a[o] == null && delete a[o];
  }), a;
}
function Dr({ settings: a }) {
  const [o, s] = q(a.workDuration * 60), [i, c] = q(!1), [f, R] = q(!0), [y, p] = q(0);
  Rr(() => {
    let P = null;
    return i && o > 0 ? P = setInterval(() => {
      s((N) => N - 1);
    }, 1e3) : o === 0 && h(), () => {
      P && clearInterval(P);
    };
  }, [i, o]);
  const _ = (P) => {
    const N = {
      type: f ? "work" : "break",
      duration: f ? a.workDuration : a.breakDuration,
      completed: P,
      timestamp: /* @__PURE__ */ new Date()
    }, w = localStorage.getItem("pomodoroSessions"), b = w ? JSON.parse(w) : [];
    localStorage.setItem("pomodoroSessions", JSON.stringify([...b, N]));
  }, h = () => {
    _(!0), f ? (p((P) => P + 1), s(a.breakDuration * 60), a.autoStartBreaks && c(!0)) : (s(a.workDuration * 60), a.autoStartPomodoros && c(!0)), R(!f);
  }, E = () => {
    c(!i);
  }, T = () => {
    i && _(!1), c(!1), s(f ? a.workDuration * 60 : a.breakDuration * 60);
  }, F = Math.floor(o / 60), B = o % 60;
  return /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ S.jsx("div", { className: "w-64 h-64 mb-8", children: /* @__PURE__ */ S.jsx(
      Sr,
      {
        value: o,
        maxValue: f ? a.workDuration * 60 : a.breakDuration * 60,
        text: `${F}:${B.toString().padStart(2, "0")}`,
        styles: Or({
          textColor: f ? "#FF6B6B" : "#4ECDC4",
          pathColor: f ? "#FF6B6B" : "#4ECDC4",
          trailColor: "#F3F4F6"
        })
      }
    ) }),
    /* @__PURE__ */ S.jsxs("div", { className: "flex gap-4 mb-6 justify-center", children: [
      /* @__PURE__ */ S.jsx(
        "button",
        {
          onClick: E,
          className: `btn ${i ? "btn-error" : "btn-primary"}`,
          children: i ? "Pause" : "Start"
        }
      ),
      /* @__PURE__ */ S.jsx("button", { onClick: T, className: "btn btn-outline dark:bg-gray-800 dark:text-white", children: "Reset" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ S.jsx("p", { className: "text-lg font-medium mb-2", children: f ? "Work Time" : "Break Time" }),
      /* @__PURE__ */ S.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
        "Sessions completed today: ",
        y
      ] })
    ] })
  ] });
}
export {
  Dr as default
};
