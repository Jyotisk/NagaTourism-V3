/*! UIkit 3.0.0-beta.40 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
            ? define("uikit", e)
            : (t.UIkit = e());
})(this, function () {
    "use strict";
    function t(t, e) {
        return function (i) {
            var n = arguments.length;
            return n ? (n > 1 ? t.apply(e, arguments) : t.call(e, i)) : t.call(e);
        };
    }
    var e = Object.prototype.hasOwnProperty;
    function i(t, i) {
        return e.call(t, i);
    }
    var n = /([a-z\d])([A-Z])/g;
    function o(t) {
        return t.replace(n, "$1-$2").toLowerCase();
    }
    var r = /-(\w)/g;
    function s(t) {
        return t.replace(r, a);
    }
    function a(t, e) {
        return e ? e.toUpperCase() : "";
    }
    function l(t) {
        return t.length ? a(0, t.charAt(0)) + t.slice(1) : "";
    }
    var h = String.prototype,
        u =
            h.startsWith ||
            function (t) {
                return 0 === this.lastIndexOf(t, 0);
            };
    function c(t, e) {
        return u.call(t, e);
    }
    var d =
        h.endsWith ||
        function (t) {
            return this.substr(-t.length) === t;
        };
    function f(t, e) {
        return d.call(t, e);
    }
    var p = function (t) {
        return ~this.indexOf(t);
    },
        m = h.includes || p,
        g = Array.prototype.includes || p;
    function v(t, e) {
        return t && (S(t) ? m : g).call(t, e);
    }
    var w = Array.isArray;
    function b(t) {
        return "function" == typeof t;
    }
    function y(t) {
        return null !== t && "object" == typeof t;
    }
    function x(t) {
        return y(t) && Object.getPrototypeOf(t) === Object.prototype;
    }
    function k(t) {
        return y(t) && t === t.window;
    }
    function $(t) {
        return y(t) && 9 === t.nodeType;
    }
    function I(t) {
        return y(t) && !!t.jquery;
    }
    function T(t) {
        return t instanceof Node || (y(t) && 1 === t.nodeType);
    }
    function C(t) {
        return t instanceof NodeList || t instanceof HTMLCollection;
    }
    function E(t) {
        return "boolean" == typeof t;
    }
    function S(t) {
        return "string" == typeof t;
    }
    function _(t) {
        return "number" == typeof t;
    }
    function A(t) {
        return _(t) || (S(t) && !isNaN(t - parseFloat(t)));
    }
    function N(t) {
        return void 0 === t;
    }
    function D(t) {
        return E(t)
            ? t
            : "true" === t ||
            "1" === t ||
            "" === t ||
            ("false" !== t && "0" !== t && t);
    }
    function M(t) {
        var e = Number(t);
        return !isNaN(e) && e;
    }
    function B(t) {
        return parseFloat(t) || 0;
    }
    function O(t) {
        return T(t) || k(t) || $(t)
            ? t
            : C(t) || I(t)
                ? t[0]
                : w(t)
                    ? O(t[0])
                    : null;
    }
    var P = Array.prototype;
    function H(t) {
        return T(t)
            ? [t]
            : C(t)
                ? P.slice.call(t)
                : w(t)
                    ? t.map(O).filter(Boolean)
                    : I(t)
                        ? t.toArray()
                        : [];
    }
    function z(t) {
        return w(t)
            ? t
            : S(t)
                ? t.split(/,(?![^(]*\))/).map(function (t) {
                    return A(t) ? M(t) : D(t.trim());
                })
                : [t];
    }
    function W(t) {
        return t ? (f(t, "ms") ? B(t) : 1e3 * B(t)) : 0;
    }
    function L(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "mg"), function (t) {
            return t === e ? i : e;
        });
    }
    var j =
        Object.assign ||
        function (t) {
            for (var e = [], n = arguments.length - 1; n-- > 0;)
                e[n] = arguments[n + 1];
            t = Object(t);
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                if (null !== r) for (var s in r) i(r, s) && (t[s] = r[s]);
            }
            return t;
        };
    function F(t, e) {
        for (var i in t) if (!1 === e.call(t[i], t[i], i)) break;
    }
    function V(t, e, i) {
        return (
            void 0 === e && (e = 0),
            void 0 === i && (i = 1),
            Math.min(Math.max(t, e), i)
        );
    }
    function R() { }
    function Y(t, e) {
        return (
            t.left <= e.right &&
            e.left <= t.right &&
            t.top <= e.bottom &&
            e.top <= t.bottom
        );
    }
    function q(t, e) {
        return Y({ top: t.y, bottom: t.y, left: t.x, right: t.x }, e);
    }
    var U = {
        ratio: function (t, e, i) {
            var n,
                o = "width" === e ? "height" : "width";
            return ((n = {})[o] = Math.round((i * t[o]) / t[e])), (n[e] = i), n;
        },
        contain: function (t, e) {
            var i = this;
            return (
                F((t = j({}, t)), function (n, o) {
                    return (t = t[o] > e[o] ? i.ratio(t, o, e[o]) : t);
                }),
                t
            );
        },
        cover: function (t, e) {
            var i = this;
            return (
                F((t = this.contain(t, e)), function (n, o) {
                    return (t = t[o] < e[o] ? i.ratio(t, o, e[o]) : t);
                }),
                t
            );
        },
    };
    function X(t, e, i) {
        if (y(e)) for (var n in e) X(t, n, e[n]);
        else {
            if (N(i)) return (t = O(t)) && t.getAttribute(e);
            H(t).forEach(function (t) {
                b(i) && (i = i.call(t, X(t, e))),
                    null === i ? G(t, e) : t.setAttribute(e, i);
            });
        }
    }
    function J(t, e) {
        return H(t).some(function (t) {
            return t.hasAttribute(e);
        });
    }
    function G(t, e) {
        (t = H(t)),
            e.split(" ").forEach(function (e) {
                return t.forEach(function (t) {
                    return t.removeAttribute(e);
                });
            });
    }
    function Z(t, e, i, n) {
        X(t, e, function (t) {
            return t ? t.replace(i, n) : t;
        });
    }
    function Q(t, e) {
        for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
            if (J(t, n[i])) return X(t, n[i]);
    }
    var K = "Promise" in window ? window.Promise : it,
        tt = 2,
        et = "setImmediate" in window ? setImmediate : setTimeout;
    function it(t) {
        (this.state = tt), (this.value = void 0), (this.deferred = []);
        var e = this;
        try {
            t(
                function (t) {
                    e.resolve(t);
                },
                function (t) {
                    e.reject(t);
                }
            );
        } catch (t) {
            e.reject(t);
        }
    }
    (it.reject = function (t) {
        return new it(function (e, i) {
            i(t);
        });
    }),
        (it.resolve = function (t) {
            return new it(function (e, i) {
                e(t);
            });
        }),
        (it.all = function (t) {
            return new it(function (e, i) {
                var n = [],
                    o = 0;
                function r(i) {
                    return function (r) {
                        (n[i] = r), (o += 1) === t.length && e(n);
                    };
                }
                0 === t.length && e(n);
                for (var s = 0; s < t.length; s += 1) it.resolve(t[s]).then(r(s), i);
            });
        }),
        (it.race = function (t) {
            return new it(function (e, i) {
                for (var n = 0; n < t.length; n += 1) it.resolve(t[n]).then(e, i);
            });
        });
    var nt = it.prototype;
    (nt.resolve = function (t) {
        var e = this;
        if (e.state === tt) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var i = !1;
            try {
                var n = t && t.then;
                if (null !== t && y(t) && b(n))
                    return void n.call(
                        t,
                        function (t) {
                            i || e.resolve(t), (i = !0);
                        },
                        function (t) {
                            i || e.reject(t), (i = !0);
                        }
                    );
            } catch (t) {
                return void (i || e.reject(t));
            }
            (e.state = 0), (e.value = t), e.notify();
        }
    }),
        (nt.reject = function (t) {
            var e = this;
            if (e.state === tt) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                (e.state = 1), (e.value = t), e.notify();
            }
        }),
        (nt.notify = function () {
            var t = this;
            et(function () {
                if (t.state !== tt)
                    for (; t.deferred.length;) {
                        var e = t.deferred.shift(),
                            i = e[0],
                            n = e[1],
                            o = e[2],
                            r = e[3];
                        try {
                            0 === t.state
                                ? b(i)
                                    ? o(i.call(void 0, t.value))
                                    : o(t.value)
                                : 1 === t.state &&
                                (b(n) ? o(n.call(void 0, t.value)) : r(t.value));
                        } catch (t) {
                            r(t);
                        }
                    }
            });
        }),
        (nt.then = function (t, e) {
            var i = this;
            return new it(function (n, o) {
                i.deferred.push([t, e, n, o]), i.notify();
            });
        }),
        (nt.catch = function (t) {
            return this.then(void 0, t);
        });
    var ot = window,
        rt = document,
        st = rt.documentElement,
        at = "rtl" === X(st, "dir"),
        lt = ot.MutationObserver,
        ht = "ontouchstart" in ot,
        ut = ot.PointerEvent,
        ct =
            ht ||
            (ot.DocumentTouch && rt instanceof DocumentTouch) ||
            navigator.maxTouchPoints,
        dt = ct ? "mousedown " + (ht ? "touchstart" : "pointerdown") : "mousedown",
        ft = ct ? "mousemove " + (ht ? "touchmove" : "pointermove") : "mousemove",
        pt = ct ? "mouseup " + (ht ? "touchend" : "pointerup") : "mouseup",
        mt = ct && ut ? "pointerenter" : "mouseenter",
        gt = ct && ut ? "pointerleave" : "mouseleave";
    var vt,
        wt = {};
    function bt(t, e) {
        return O(t) || xt(t, Ct(t) ? e : rt);
    }
    function yt(t, e) {
        var i = H(t);
        return (i.length && i) || kt(t, Ct(t) ? e : rt);
    }
    function xt(t, e) {
        return O($t(t, e, "querySelector"));
    }
    function kt(t, e) {
        return H($t(t, e, "querySelectorAll"));
    }
    function $t(t, e, i) {
        if ((void 0 === e && (e = rt), !t || !S(t))) return null;
        var n;
        Ct((t = t.replace(Tt, "$1 *"))) &&
            ((n = []),
                (t = t
                    .split(",")
                    .map(function (t, i) {
                        var o = e;
                        if ("!" === (t = t.trim())[0]) {
                            var r = t.substr(1).trim().split(" ");
                            (o = Nt(e.parentNode, r[0])), (t = r.slice(1).join(" "));
                        }
                        return o
                            ? (o.id ||
                                ((o.id = "uk-" + Date.now() + i),
                                    n.push(function () {
                                        return G(o, "id");
                                    })),
                                "#" + Bt(o.id) + " " + t)
                            : null;
                    })
                    .filter(Boolean)
                    .join(",")),
                (e = rt));
        try {
            return e[i](t);
        } catch (t) {
            return null;
        } finally {
            n &&
                n.forEach(function (t) {
                    return t();
                });
        }
    }
    (vt = rt.createElement("_").classList) &&
        (vt.add("a", "b"),
            vt.toggle("c", !1),
            (wt.Multiple = vt.contains("b")),
            (wt.Force = !vt.contains("c")),
            (wt.ClassList = !0)),
        (vt = null);
    var It = /(^|,)\s*[!>+~]/,
        Tt = /([!>+~])(?=\s+[!>+~]|\s*$)/g;
    function Ct(t) {
        return S(t) && t.match(It);
    }
    var Et = Element.prototype,
        St = Et.matches || Et.webkitMatchesSelector || Et.msMatchesSelector;
    function _t(t, e) {
        return H(t).some(function (t) {
            return St.call(t, e);
        });
    }
    var At =
        Et.closest ||
        function (t) {
            var e = this;
            do {
                if (_t(e, t)) return e;
                e = e.parentNode;
            } while (e && 1 === e.nodeType);
        };
    function Nt(t, e) {
        return (
            c(e, ">") && (e = e.slice(1)),
            T(t)
                ? t.parentNode && At.call(t, e)
                : H(t)
                    .map(function (t) {
                        return t.parentNode && At.call(t, e);
                    })
                    .filter(Boolean)
        );
    }
    function Dt(t, e) {
        for (var i = [], n = O(t).parentNode; n && 1 === n.nodeType;)
            _t(n, e) && i.push(n), (n = n.parentNode);
        return i;
    }
    var Mt =
        (ot.CSS && CSS.escape) ||
        function (t) {
            return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
                return "\\" + t;
            });
        };
    function Bt(t) {
        return S(t) ? Mt.call(null, t) : "";
    }
    var Ot = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    };
    function Pt(t) {
        return H(t).some(function (t) {
            return Ot[t.tagName.toLowerCase()];
        });
    }
    function Ht(t) {
        return H(t).some(function (t) {
            return t.offsetHeight || t.getBoundingClientRect().height;
        });
    }
    var zt = "input,select,textarea,button";
    function Wt(t) {
        return H(t).some(function (t) {
            return _t(t, zt);
        });
    }
    function Lt(t, e) {
        return H(t).filter(function (t) {
            return _t(t, e);
        });
    }
    function jt(t, e) {
        return S(e) ? _t(t, e) || Nt(t, e) : t === e || O(e).contains(O(t));
    }
    function Ft() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i,
            n = Ut(t),
            o = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            l = n[4];
        return (
            (o = Jt(o)),
            s &&
            (a = (function (t, e, i) {
                var n = this;
                return function (o) {
                    var r = o.target,
                        s =
                            ">" === e[0]
                                ? kt(e, t)
                                    .reverse()
                                    .filter(function (t) {
                                        return jt(r, t);
                                    })[0]
                                : Nt(r, e);
                    s && ((o.delegate = t), (o.current = s), i.call(n, o));
                };
            })(o, s, a)),
            a.length > 1 &&
            ((i = a),
                (a = function (t) {
                    return w(t.detail) ? i.apply(i, [t].concat(t.detail)) : i(t);
                })),
            r.split(" ").forEach(function (t) {
                return o && o.addEventListener(t, a, l);
            }),
            function () {
                return Vt(o, r, a, l);
            }
        );
    }
    function Vt(t, e, i, n) {
        void 0 === n && (n = !1),
            (t = Jt(t)) &&
            e.split(" ").forEach(function (e) {
                return t.removeEventListener(e, i, n);
            });
    }
    function Rt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i = Ut(t),
            n = i[0],
            o = i[1],
            r = i[2],
            s = i[3],
            a = i[4],
            l = i[5],
            h = Ft(
                n,
                o,
                r,
                function (t) {
                    var e = !l || l(t);
                    e && (h(), s(t, e));
                },
                a
            );
        return h;
    }
    function Yt(t, e, i) {
        return Gt(t).reduce(function (t, n) {
            return t && n.dispatchEvent(qt(e, !0, !0, i));
        }, !0);
    }
    function qt(t, e, i, n) {
        if ((void 0 === e && (e = !0), void 0 === i && (i = !1), S(t))) {
            var o = document.createEvent("CustomEvent");
            o.initCustomEvent(t, e, i, n), (t = o);
        }
        return t;
    }
    function Ut(t) {
        return S(t[0]) && (t[0] = xt(t[0])), b(t[2]) && t.splice(2, 0, !1), t;
    }
    function Xt(t) {
        return "EventTarget" in window
            ? t instanceof EventTarget
            : t && "addEventListener" in t;
    }
    function Jt(t) {
        return Xt(t) ? t : O(t);
    }
    function Gt(t) {
        return Xt(t) ? [t] : w(t) ? t.map(Jt).filter(Boolean) : H(t);
    }
    function Zt(t, e) {
        return new K(function (i, n) {
            var o = j(
                {
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest(),
                    beforeSend: R,
                    responseType: "",
                },
                e
            );
            o.beforeSend(o);
            var r = o.xhr;
            for (var s in o)
                if (s in r)
                    try {
                        r[s] = o[s];
                    } catch (t) { }
            for (var a in (r.open(o.method.toUpperCase(), t), o.headers))
                r.setRequestHeader(a, o.headers[a]);
            Ft(r, "load", function () {
                0 === r.status ||
                    (r.status >= 200 && r.status < 300) ||
                    304 === r.status
                    ? i(r)
                    : n(j(Error(r.statusText), { xhr: r, status: r.status }));
            }),
                Ft(r, "error", function () {
                    return n(j(Error("Network Error"), { xhr: r }));
                }),
                Ft(r, "timeout", function () {
                    return n(j(Error("Network Timeout"), { xhr: r }));
                }),
                r.send(o.data);
        });
    }
    function Qt() {
        return (
            "complete" === rt.readyState ||
            ("loading" !== rt.readyState && !st.doScroll)
        );
    }
    function Kt(t) {
        if (Qt()) t();
        else
            var e = function () {
                i(), n(), t();
            },
                i = Ft(rt, "DOMContentLoaded", e),
                n = Ft(ot, "load", e);
    }
    function te(t, e) {
        return e
            ? H(t).indexOf(O(e))
            : H((t = O(t)) && t.parentNode.children).indexOf(t);
    }
    function ee(t, e, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = !1);
        var o = (e = H(e)).length;
        return (
            (t = A(t)
                ? M(t)
                : "next" === t
                    ? i + 1
                    : "previous" === t
                        ? i - 1
                        : te(e, t)),
            n ? V(t, 0, o - 1) : (t %= o) < 0 ? t + o : t
        );
    }
    function ie(t) {
        return ((t = O(t)).innerHTML = ""), t;
    }
    function ne(t, e) {
        return (
            (t = O(t)), N(e) ? t.innerHTML : oe(t.hasChildNodes() ? ie(t) : t, e)
        );
    }
    function oe(t, e) {
        return (
            (t = O(t)),
            ae(e, function (e) {
                return t.appendChild(e);
            })
        );
    }
    function re(t, e) {
        return (
            (t = O(t)),
            ae(e, function (e) {
                return t.parentNode.insertBefore(e, t);
            })
        );
    }
    function se(t, e) {
        return (
            (t = O(t)),
            ae(e, function (e) {
                return t.nextSibling ? re(t.nextSibling, e) : oe(t.parentNode, e);
            })
        );
    }
    function ae(t, e) {
        return (t = S(t) ? pe(t) : t) ? ("length" in t ? H(t).map(e) : e(t)) : null;
    }
    function le(t) {
        H(t).map(function (t) {
            return t.parentNode && t.parentNode.removeChild(t);
        });
    }
    function he(t, e) {
        for (e = O(re(t, e)); e.firstChild;) e = e.firstChild;
        return oe(e, t), e;
    }
    function ue(t, e) {
        return H(
            H(t).map(function (t) {
                return t.hasChildNodes ? he(H(t.childNodes), e) : oe(t, e);
            })
        );
    }
    function ce(t) {
        H(t)
            .map(function (t) {
                return t.parentNode;
            })
            .filter(function (t, e, i) {
                return i.indexOf(t) === e;
            })
            .forEach(function (t) {
                re(t, t.childNodes), le(t);
            });
    }
    var de = /^\s*<(\w+|!)[^>]*>/,
        fe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function pe(t) {
        var e = fe.exec(t);
        if (e) return rt.createElement(e[1]);
        var i = rt.createElement("div");
        return (
            de.test(t)
                ? i.insertAdjacentHTML("beforeend", t.trim())
                : (i.textContent = t),
            i.childNodes.length > 1 ? H(i.childNodes) : i.firstChild
        );
    }
    function me(t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;)
            e[i] = arguments[i + 1];
        xe(t, e, "add");
    }
    function ge(t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;)
            e[i] = arguments[i + 1];
        xe(t, e, "remove");
    }
    function ve(t, e) {
        Z(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "");
    }
    function we(t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;)
            e[i] = arguments[i + 1];
        e[0] && ge(t, e[0]), e[1] && me(t, e[1]);
    }
    function be(t, e) {
        return (
            wt.ClassList &&
            H(t).some(function (t) {
                return t.classList.contains(e);
            })
        );
    }
    function ye(t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;)
            e[i] = arguments[i + 1];
        if (wt.ClassList && e.length) {
            var n = S((e = ke(e))[e.length - 1]) ? [] : e.pop();
            (e = e.filter(Boolean)),
                H(t).forEach(function (t) {
                    for (var i = t.classList, o = 0; o < e.length; o++)
                        wt.Force
                            ? i.toggle.apply(i, [e[o]].concat(n))
                            : i[(N(n) ? !i.contains(e[o]) : n) ? "add" : "remove"](e[o]);
                });
        }
    }
    function xe(t, e, i) {
        (e = ke(e).filter(Boolean)),
            wt.ClassList &&
            e.length &&
            H(t).forEach(function (t) {
                var n = t.classList;
                wt.Multiple
                    ? n[i].apply(n, e)
                    : e.forEach(function (t) {
                        return n[i](t);
                    });
            });
    }
    function ke(t) {
        return t.reduce(function (t, e) {
            return t.concat.call(t, S(e) && v(e, " ") ? e.trim().split(" ") : e);
        }, []);
    }
    var $e = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        "z-index": !0,
        zoom: !0,
    };
    function Ie(t, e, i) {
        return H(t).map(function (t) {
            if (S(e)) {
                if (((e = Ae(e)), N(i))) return Ce(t, e);
                i || 0 === i
                    ? (t.style[e] = A(i) && !$e[e] ? i + "px" : i)
                    : t.style.removeProperty(e);
            } else {
                if (w(e)) {
                    var n = Te(t);
                    return e.reduce(function (t, e) {
                        return (t[e] = n[Ae(e)]), t;
                    }, {});
                }
                y(e) &&
                    F(e, function (e, i) {
                        return Ie(t, i, e);
                    });
            }
            return t;
        })[0];
    }
    function Te(t, e) {
        return (t = O(t)).ownerDocument.defaultView.getComputedStyle(t, e);
    }
    function Ce(t, e, i) {
        return Te(t, i)[e];
    }
    var Ee = {};
    function Se(t) {
        if (!(t in Ee)) {
            var e = oe(st, rt.createElement("div"));
            me(e, "var-" + t);
            try {
                (Ee[t] = Ce(e, "content", ":before").replace(/^["'](.*)["']$/, "$1")),
                    (Ee[t] = JSON.parse(Ee[t]));
            } catch (t) { }
            st.removeChild(e);
        }
        return Ee[t];
    }
    var _e = {};
    function Ae(t) {
        var e = _e[t];
        return (
            e ||
            (e = _e[t] =
                (function (t) {
                    if ((t = o(t)) in De) return t;
                    var e,
                        i = Ne.length;
                    for (; i--;) if ((e = "-" + Ne[i] + "-" + t) in De) return e;
                })(t) || t),
            e
        );
    }
    var Ne = ["webkit", "moz", "ms"],
        De = rt.createElement("_").style;
    function Me(t, e, i, n) {
        return (
            void 0 === i && (i = 400),
            void 0 === n && (n = "linear"),
            K.all(
                H(t).map(function (t) {
                    return new K(function (o, r) {
                        for (var s in e) {
                            var a = Ie(t, s);
                            "" === a && Ie(t, s, a);
                        }
                        var l = setTimeout(function () {
                            return Yt(t, "transitionend");
                        }, i);
                        Rt(
                            t,
                            "transitionend transitioncanceled",
                            function (e) {
                                var i = e.type;
                                clearTimeout(l),
                                    ge(t, "uk-transition"),
                                    Ie(t, {
                                        "transition-property": "",
                                        "transition-duration": "",
                                        "transition-timing-function": "",
                                    }),
                                    "transitioncanceled" === i ? r() : o();
                            },
                            !1,
                            function (e) {
                                var i = e.target;
                                return t === i;
                            }
                        ),
                            me(t, "uk-transition"),
                            Ie(
                                t,
                                j(
                                    {
                                        "transition-property": Object.keys(e).map(Ae).join(","),
                                        "transition-duration": i + "ms",
                                        "transition-timing-function": n,
                                    },
                                    e
                                )
                            );
                    });
                })
            )
        );
    }
    var Be = {
        start: Me,
        stop: function (t) {
            return Yt(t, "transitionend"), K.resolve();
        },
        cancel: function (t) {
            Yt(t, "transitioncanceled");
        },
        inProgress: function (t) {
            return be(t, "uk-transition");
        },
    },
        Oe = "uk-animation-",
        Pe = "uk-cancel-animation";
    function He(t, e, i, n, o) {
        var r = arguments;
        return (
            void 0 === i && (i = 200),
            K.all(
                H(t).map(function (t) {
                    return new K(function (s, a) {
                        if (be(t, Pe))
                            requestAnimationFrame(function () {
                                return K.resolve().then(function () {
                                    return He.apply(void 0, r).then(s, a);
                                });
                            });
                        else {
                            var l = e + " " + Oe + (o ? "leave" : "enter");
                            c(e, Oe) &&
                                (n && (l += " uk-transform-origin-" + n),
                                    o && (l += " " + Oe + "reverse")),
                                h(),
                                Rt(
                                    t,
                                    "animationend animationcancel",
                                    function (e) {
                                        var i = !1;
                                        "animationcancel" === e.type
                                            ? (a(), h())
                                            : (s(),
                                                K.resolve().then(function () {
                                                    (i = !0), h();
                                                })),
                                            requestAnimationFrame(function () {
                                                i ||
                                                    (me(t, Pe),
                                                        requestAnimationFrame(function () {
                                                            return ge(t, Pe);
                                                        }));
                                            });
                                    },
                                    !1,
                                    function (e) {
                                        var i = e.target;
                                        return t === i;
                                    }
                                ),
                                Ie(t, "animationDuration", i + "ms"),
                                me(t, l);
                        }
                        function h() {
                            Ie(t, "animationDuration", ""), ve(t, Oe + "\\S*");
                        }
                    });
                })
            )
        );
    }
    var ze = new RegExp(Oe + "(enter|leave)"),
        We = {
            in: function (t, e, i, n) {
                return He(t, e, i, n, !1);
            },
            out: function (t, e, i, n) {
                return He(t, e, i, n, !0);
            },
            inProgress: function (t) {
                return ze.test(X(t, "class"));
            },
            cancel: function (t) {
                Yt(t, "animationcancel");
            },
        };
    function Le(t, e) {
        return S(t) ? (Fe(t) ? O(pe(t)) : xt(t, e)) : O(t);
    }
    function je(t, e) {
        return S(t) ? (Fe(t) ? H(pe(t)) : kt(t, e)) : H(t);
    }
    function Fe(t) {
        return "<" === t[0] || t.match(/^\s*</);
    }
    var Ve = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
    function Re(t, e, i, n, o, r, s, a) {
        (i = Ke(i)), (n = Ke(n));
        var l = { element: i, target: n };
        if (!t || !e) return l;
        var h = qe(t),
            u = qe(e),
            c = u;
        return (
            Qe(c, i, h, -1),
            Qe(c, n, u, 1),
            (o = ti(o, h.width, h.height)),
            (r = ti(r, u.width, u.height)),
            (o.x += r.x),
            (o.y += r.y),
            (c.left += o.x),
            (c.top += o.y),
            (a = qe(a || ni(t))),
            s &&
            F(Ve, function (t, e) {
                var r = t[0],
                    d = t[1],
                    f = t[2];
                if (!0 === s || v(s, r)) {
                    var p = i[r] === d ? -h[e] : i[r] === f ? h[e] : 0,
                        m = n[r] === d ? u[e] : n[r] === f ? -u[e] : 0;
                    if (c[d] < a[d] || c[d] + h[e] > a[f]) {
                        var g = h[e] / 2,
                            w = "center" === n[r] ? -u[e] / 2 : 0;
                        ("center" === i[r] && (b(g, w) || b(-g, -w))) || b(p, m);
                    }
                }
                function b(t, i) {
                    var n = c[d] + t + i - 2 * o[r];
                    if (n >= a[d] && n + h[e] <= a[f])
                        return (
                            (c[d] = n),
                            ["element", "target"].forEach(function (i) {
                                l[i][r] = t
                                    ? l[i][r] === Ve[e][1]
                                        ? Ve[e][2]
                                        : Ve[e][1]
                                    : l[i][r];
                            }),
                            !0
                        );
                }
            }),
            Ye(t, c),
            l
        );
    }
    function Ye(t, e) {
        if (((t = O(t)), !e)) return qe(t);
        var i = Ye(t),
            n = Ie(t, "position");
        ["left", "top"].forEach(function (o) {
            if (o in e) {
                var r = Ie(t, o);
                t.style[o] =
                    e[o] -
                    i[o] +
                    B("absolute" === n && "auto" === r ? Ue(t)[o] : r) +
                    "px";
            }
        });
    }
    function qe(t) {
        var e = ni((t = O(t))),
            i = e.pageYOffset,
            n = e.pageXOffset;
        if (k(t)) {
            var o = t.innerHeight,
                r = t.innerWidth;
            return {
                top: i,
                left: n,
                height: o,
                width: r,
                bottom: i + o,
                right: n + r,
            };
        }
        var s = !1;
        Ht(t) || ((s = t.style.display), (t.style.display = "block"));
        var a = t.getBoundingClientRect();
        return (
            !1 !== s && (t.style.display = s),
            {
                height: a.height,
                width: a.width,
                top: a.top + i,
                left: a.left + n,
                bottom: a.bottom + i,
                right: a.right + n,
            }
        );
    }
    function Ue(t) {
        var e = (function (t) {
            var e = O(t).offsetParent;
            for (; e && "static" === Ie(e, "position");) e = e.offsetParent;
            return e || ri(t);
        })((t = O(t))),
            i = e === ri(t) ? { top: 0, left: 0 } : Ye(e),
            n = ["top", "left"].reduce(function (n, o) {
                var r = l(o);
                return (
                    (n[o] -=
                        i[o] +
                        (B(Ie(t, "margin" + r)) || 0) +
                        (B(Ie(e, "border" + r + "Width")) || 0)),
                    n
                );
            }, Ye(t));
        return { top: n.top, left: n.left };
    }
    var Xe = Ge("height"),
        Je = Ge("width");
    function Ge(t) {
        var e = l(t);
        return function (i, n) {
            if (((i = O(i)), N(n))) {
                if (k(i)) return i["inner" + e];
                if ($(i)) {
                    var o = i.documentElement;
                    return Math.max(o.offsetHeight, o.scrollHeight);
                }
                return (
                    (n = "auto" === (n = Ie(i, t)) ? i["offset" + e] : B(n) || 0),
                    Ze(t, i, n)
                );
            }
            Ie(i, t, n || 0 === n ? Ze(t, i, n) + "px" : "");
        };
    }
    function Ze(t, e, i) {
        return "border-box" === Ie(e, "boxSizing")
            ? Ve[t]
                .slice(1)
                .map(l)
                .reduce(function (t, i) {
                    return (
                        t - B(Ie(e, "padding" + i)) - B(Ie(e, "border" + i + "Width"))
                    );
                }, i)
            : i;
    }
    function Qe(t, e, i, n) {
        F(Ve, function (o, r) {
            var s = o[0],
                a = o[1],
                l = o[2];
            e[s] === l
                ? (t[a] += i[r] * n)
                : "center" === e[s] && (t[a] += (i[r] * n) / 2);
        });
    }
    function Ke(t) {
        var e = /left|center|right/,
            i = /top|center|bottom/;
        return (
            1 === (t = (t || "").split(" ")).length &&
            (t = e.test(t[0])
                ? t.concat(["center"])
                : i.test(t[0])
                    ? ["center"].concat(t)
                    : ["center", "center"]),
            { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" }
        );
    }
    function ti(t, e, i) {
        var n = (t || "").split(" "),
            o = n[0],
            r = n[1];
        return {
            x: o ? B(o) * (f(o, "%") ? e / 100 : 1) : 0,
            y: r ? B(r) * (f(r, "%") ? i / 100 : 1) : 0,
        };
    }
    function ei(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t;
        }
    }
    function ii(t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0);
        var n = ni((t = O(t)));
        return Y(t.getBoundingClientRect(), {
            top: e,
            left: i,
            bottom: e + Xe(n),
            right: i + Je(n),
        });
    }
    function ni(t) {
        return k(t) ? t : oi(t).defaultView;
    }
    function oi(t) {
        return O(t).ownerDocument;
    }
    function ri(t) {
        return oi(t).documentElement;
    }
    var si = {
        reads: [],
        writes: [],
        read: function (t) {
            return this.reads.push(t), ai(), t;
        },
        write: function (t) {
            return this.writes.push(t), ai(), t;
        },
        clear: function (t) {
            return hi(this.reads, t) || hi(this.writes, t);
        },
        flush: function () {
            li(this.reads),
                li(this.writes.splice(0, this.writes.length)),
                (this.scheduled = !1),
                (this.reads.length || this.writes.length) && ai();
        },
    };
    function ai() {
        si.scheduled ||
            ((si.scheduled = !0), requestAnimationFrame(si.flush.bind(si)));
    }
    function li(t) {
        for (var e; (e = t.shift());) e();
    }
    function hi(t, e) {
        var i = t.indexOf(e);
        return !!~i && !!t.splice(i, 1);
    }
    function ui() { }
    function ci(t, e) {
        return (e.y - t.y) / (e.x - t.x);
    }
    ui.prototype = {
        positions: [],
        position: null,
        init: function () {
            var t = this;
            (this.positions = []), (this.position = null);
            var e = !1;
            this.unbind = Ft(rt, "mousemove", function (i) {
                e ||
                    (setTimeout(function () {
                        var n = Date.now(),
                            o = t.positions.length;
                        o && n - t.positions[o - 1].time > 100 && t.positions.splice(0, o),
                            t.positions.push({ time: n, x: i.pageX, y: i.pageY }),
                            t.positions.length > 5 && t.positions.shift(),
                            (e = !1);
                    }, 5),
                        (e = !0));
            });
        },
        cancel: function () {
            this.unbind && this.unbind();
        },
        movesTo: function (t) {
            if (this.positions.length < 2) return !1;
            var e = Ye(t),
                i = this.positions[this.positions.length - 1],
                n = this.positions[0];
            if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom)
                return !1;
            var o = [
                [
                    { x: e.left, y: e.top },
                    { x: e.right, y: e.bottom },
                ],
                [
                    { x: e.right, y: e.top },
                    { x: e.left, y: e.bottom },
                ],
            ];
            return (
                e.right <= i.x ||
                (e.left >= i.x
                    ? (o[0].reverse(), o[1].reverse())
                    : e.bottom <= i.y
                        ? o[0].reverse()
                        : e.top >= i.y && o[1].reverse()),
                !!o.reduce(function (t, e) {
                    return t + (ci(n, e[0]) < ci(i, e[0]) && ci(n, e[1]) > ci(i, e[1]));
                }, 0)
            );
        },
    };
    var di = {};
    (di.args =
        di.events =
        di.init =
        di.created =
        di.beforeConnect =
        di.connected =
        di.ready =
        di.beforeDisconnect =
        di.disconnected =
        di.destroy =
        function (t, e) {
            return (
                (t = t && !w(t) ? [t] : t), e ? (t ? t.concat(e) : w(e) ? e : [e]) : t
            );
        }),
        (di.update = function (t, e) {
            return di.args(t, b(e) ? { read: e } : e);
        }),
        (di.props = function (t, e) {
            return (
                w(e) &&
                (e = e.reduce(function (t, e) {
                    return (t[e] = String), t;
                }, {})),
                di.methods(t, e)
            );
        }),
        (di.computed =
            di.defaults =
            di.methods =
            function (t, e) {
                return e ? (t ? j({}, t, e) : e) : t;
            });
    var fi = function (t, e) {
        return N(e) ? t : e;
    };
    function pi(t, e) {
        var n = {};
        if (e.mixins)
            for (var o = 0, r = e.mixins.length; o < r; o++) t = pi(t, e.mixins[o]);
        for (var s in t) l(s);
        for (var a in e) i(t, a) || l(a);
        function l(i) {
            n[i] = (di[i] || fi)(t[i], e[i]);
        }
        return n;
    }
    var mi = 0,
        gi = function (t) {
            (this.id = ++mi), (this.el = O(t));
        };
    function vi(t, e) {
        try {
            t.contentWindow.postMessage(
                JSON.stringify(j({ event: "command" }, e)),
                "*"
            );
        } catch (t) { }
    }
    (gi.prototype.isVideo = function () {
        return this.isYoutube() || this.isVimeo() || this.isHTML5();
    }),
        (gi.prototype.isHTML5 = function () {
            return "VIDEO" === this.el.tagName;
        }),
        (gi.prototype.isIFrame = function () {
            return "IFRAME" === this.el.tagName;
        }),
        (gi.prototype.isYoutube = function () {
            return (
                this.isIFrame() &&
                !!this.el.src.match(
                    /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
                )
            );
        }),
        (gi.prototype.isVimeo = function () {
            return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
        }),
        (gi.prototype.enableApi = function () {
            var t = this;
            if (this.ready) return this.ready;
            var e,
                i = this.isYoutube(),
                n = this.isVimeo();
            return i || n
                ? (this.ready = new K(function (o) {
                    var r;
                    Rt(t.el, "load", function () {
                        if (i) {
                            var n = function () {
                                return vi(t.el, { event: "listening", id: t.id });
                            };
                            (e = setInterval(n, 100)), n();
                        }
                    }),
                        ((r = function (e) {
                            return (
                                (i && e.id === t.id && "onReady" === e.event) ||
                                (n && Number(e.player_id) === t.id)
                            );
                        }),
                            new K(function (t) {
                                Rt(
                                    ot,
                                    "message",
                                    function (e, i) {
                                        return t(i);
                                    },
                                    !1,
                                    function (t) {
                                        var e = t.data;
                                        if (e && S(e)) {
                                            try {
                                                e = JSON.parse(e);
                                            } catch (t) {
                                                return;
                                            }
                                            return e && r(e);
                                        }
                                    }
                                );
                            })).then(function () {
                                o(), e && clearInterval(e);
                            }),
                        X(
                            t.el,
                            "src",
                            t.el.src +
                            (v(t.el.src, "?") ? "&" : "?") +
                            (i ? "enablejsapi=1" : "api=1&player_id=" + mi)
                        );
                }))
                : K.resolve();
        }),
        (gi.prototype.play = function () {
            var t = this;
            if (this.isVideo())
                if (this.isIFrame())
                    this.enableApi().then(function () {
                        return vi(t.el, { func: "playVideo", method: "play" });
                    });
                else if (this.isHTML5())
                    try {
                        this.el.play();
                    } catch (t) { }
        }),
        (gi.prototype.pause = function () {
            var t = this;
            this.isVideo() &&
                (this.isIFrame()
                    ? this.enableApi().then(function () {
                        return vi(t.el, { func: "pauseVideo", method: "pause" });
                    })
                    : this.isHTML5() && this.el.pause());
        }),
        (gi.prototype.mute = function () {
            var t = this;
            this.isVideo() &&
                (this.isIFrame()
                    ? this.enableApi().then(function () {
                        return vi(t.el, { func: "mute", method: "setVolume", value: 0 });
                    })
                    : this.isHTML5() && ((this.el.muted = !0), X(this.el, "muted", "")));
        });
    var wi,
        bi,
        yi,
        xi,
        ki = {};
    function $i() {
        wi && clearTimeout(wi),
            bi && clearTimeout(bi),
            yi && clearTimeout(yi),
            (wi = bi = yi = null),
            (ki = {});
    }
    Kt(function () {
        Ft(
            rt,
            "click",
            function () {
                return (xi = !0);
            },
            !0
        ),
            Ft(rt, dt, function (t) {
                var e = t.target,
                    i = Ci(t),
                    n = i.x,
                    o = i.y,
                    r = Date.now(),
                    s = Ei(t.type);
                (ki.type && ki.type !== s) ||
                    ((ki.el = "tagName" in e ? e : e.parentNode),
                        wi && clearTimeout(wi),
                        (ki.x1 = n),
                        (ki.y1 = o),
                        ki.last && r - ki.last <= 250 && (ki = {}),
                        (ki.type = s),
                        (ki.last = r),
                        (xi = t.button > 0));
            }),
            Ft(rt, ft, function (t) {
                if (!t.defaultPrevented) {
                    var e = Ci(t),
                        i = e.x,
                        n = e.y;
                    (ki.x2 = i), (ki.y2 = n);
                }
            }),
            Ft(rt, pt, function (t) {
                var e = t.type,
                    i = t.target;
                ki.type === Ei(e) &&
                    ((ki.x2 && Math.abs(ki.x1 - ki.x2) > 30) ||
                        (ki.y2 && Math.abs(ki.y1 - ki.y2) > 30)
                        ? (bi = setTimeout(function () {
                            var t, e, i, n, o;
                            ki.el &&
                                (Yt(ki.el, "swipe"),
                                    Yt(
                                        ki.el,
                                        "swipe" +
                                        ((e = (t = ki).x1),
                                            (i = t.x2),
                                            (n = t.y1),
                                            (o = t.y2),
                                            Math.abs(e - i) >= Math.abs(n - o)
                                                ? e - i > 0
                                                    ? "Left"
                                                    : "Right"
                                                : n - o > 0
                                                    ? "Up"
                                                    : "Down")
                                    )),
                                (ki = {});
                        }))
                        : "last" in ki
                            ? ((yi = setTimeout(function () {
                                return Yt(ki.el, "tap");
                            })),
                                ki.el &&
                                "mouseup" !== e &&
                                jt(i, ki.el) &&
                                (wi = setTimeout(function () {
                                    (wi = null), ki.el && !xi && Yt(ki.el, "click"), (ki = {});
                                }, 350)))
                            : (ki = {}));
            }),
            Ft(rt, "touchcancel", $i),
            Ft(ot, "scroll", $i);
    });
    var Ii = !1;
    function Ti(t) {
        return Ii || "touch" === t.pointerType;
    }
    function Ci(t) {
        var e = t.touches,
            i = t.changedTouches,
            n = (e && e[0]) || (i && i[0]) || t;
        return { x: n.pageX, y: n.pageY };
    }
    function Ei(t) {
        return t.slice(0, 5);
    }
    Ft(
        rt,
        "touchstart",
        function () {
            return (Ii = !0);
        },
        !0
    ),
        Ft(rt, "click", function () {
            Ii = !1;
        }),
        Ft(
            rt,
            "touchcancel",
            function () {
                return (Ii = !1);
            },
            !0
        );
    var Si = Object.freeze({
        ajax: Zt,
        transition: Me,
        Transition: Be,
        animate: He,
        Animation: We,
        attr: X,
        hasAttr: J,
        removeAttr: G,
        filterAttr: Z,
        data: Q,
        addClass: me,
        removeClass: ge,
        removeClasses: ve,
        replaceClass: we,
        hasClass: be,
        toggleClass: ye,
        $: Le,
        $$: je,
        positionAt: Re,
        offset: Ye,
        position: Ue,
        height: Xe,
        width: Je,
        flipPosition: ei,
        isInView: ii,
        scrolledOver: function (t) {
            var e = ni((t = O(t))),
                i = oi(t),
                n = t.offsetHeight,
                o = (function (t) {
                    var e = 0;
                    do {
                        e += t.offsetTop;
                    } while ((t = t.offsetParent));
                    return e;
                })(t),
                r = Xe(e),
                s = r + Math.min(0, o - r),
                a = Math.max(0, r - (Xe(i) - (o + n)));
            return V(
                (s + e.pageYOffset - o) / ((s + (n - (a < r ? a : 0))) / 100) / 100
            );
        },
        isReady: Qt,
        ready: Kt,
        index: te,
        getIndex: ee,
        empty: ie,
        html: ne,
        prepend: function (t, e) {
            return (t = O(t)).hasChildNodes()
                ? ae(e, function (e) {
                    return t.insertBefore(e, t.firstChild);
                })
                : oe(t, e);
        },
        append: oe,
        before: re,
        after: se,
        remove: le,
        wrapAll: he,
        wrapInner: ue,
        unwrap: ce,
        fragment: pe,
        win: ot,
        doc: rt,
        docEl: st,
        isRtl: at,
        Observer: lt,
        hasTouch: ct,
        pointerDown: dt,
        pointerMove: ft,
        pointerUp: pt,
        pointerEnter: mt,
        pointerLeave: gt,
        getImage: function (t) {
            return new K(function (e, i) {
                var n = new Image();
                (n.onerror = i),
                    (n.onload = function () {
                        return e(n);
                    }),
                    (n.src = t);
            });
        },
        supports: wt,
        on: Ft,
        off: Vt,
        once: Rt,
        trigger: Yt,
        createEvent: qt,
        toEventTargets: Gt,
        preventClick: function () {
            var t = setTimeout(
                Rt(
                    document,
                    "click",
                    function (e) {
                        e.preventDefault(), e.stopImmediatePropagation(), clearTimeout(t);
                    },
                    !0
                )
            );
        },
        fastdom: si,
        isVoidElement: Pt,
        isVisible: Ht,
        selInput: zt,
        isInput: Wt,
        filter: Lt,
        within: jt,
        bind: t,
        hasOwn: i,
        hyphenate: o,
        camelize: s,
        ucfirst: l,
        startsWith: c,
        endsWith: f,
        includes: v,
        isArray: w,
        isFunction: b,
        isObject: y,
        isPlainObject: x,
        isWindow: k,
        isDocument: $,
        isJQuery: I,
        isNode: T,
        isNodeCollection: C,
        isBoolean: E,
        isString: S,
        isNumber: _,
        isNumeric: A,
        isUndefined: N,
        toBoolean: D,
        toNumber: M,
        toFloat: B,
        toNode: O,
        toNodes: H,
        toList: z,
        toMs: W,
        swap: L,
        assign: j,
        each: F,
        sortBy: function (t, e) {
            return t.sort(function (t, i) {
                return t[e] > i[e] ? 1 : i[e] > t[e] ? -1 : 0;
            });
        },
        clamp: V,
        noop: R,
        intersectRect: Y,
        pointInRect: q,
        Dimensions: U,
        MouseTracker: ui,
        mergeOptions: pi,
        Player: gi,
        Promise: K,
        Deferred: function () {
            var t = this;
            this.promise = new K(function (e, i) {
                (t.reject = i), (t.resolve = e);
            });
        },
        query: bt,
        queryAll: yt,
        find: xt,
        findAll: kt,
        matches: _t,
        closest: Nt,
        parents: Dt,
        escape: Bt,
        css: Ie,
        getStyles: Te,
        getStyle: Ce,
        getCssVar: Se,
        propName: Ae,
        isTouch: Ti,
        getPos: Ci,
    });
    function _i(t) {
        return (
            !(!c(t, "uk-") && !c(t, "data-uk-")) &&
            s(t.replace("data-uk-", "").replace("uk-", ""))
        );
    }
    var Ai,
        Ni,
        Di,
        Mi,
        Bi,
        Oi = function (t) {
            this._init(t);
        };
    (Oi.util = Si),
        (Oi.data = "__uikit__"),
        (Oi.prefix = "uk-"),
        (Oi.options = {}),
        (Oi.instances = {}),
        (Oi.elements = []),
        (function (t) {
            var e,
                i = t.data;
            function n(t, e) {
                if (t) for (var i in t) t[i]._isReady && t[i]._callUpdate(e);
            }
            (t.use = function (t) {
                if (!t.installed) return t.call(null, this), (t.installed = !0), this;
            }),
                (t.mixin = function (e, i) {
                    (i = (S(i) ? t.components[i] : i) || this),
                        ((e = pi({}, e)).mixins = i.options.mixins),
                        delete i.options.mixins,
                        (i.options = pi(e, i.options));
                }),
                (t.extend = function (t) {
                    t = t || {};
                    var e = function (t) {
                        this._init(t);
                    };
                    return (
                        ((e.prototype = Object.create(this.prototype)).constructor = e),
                        (e.options = pi(this.options, t)),
                        (e.super = this),
                        (e.extend = this.extend),
                        e
                    );
                }),
                (t.update = function (e, o, r) {
                    if ((void 0 === r && (r = !1), (e = qt(e || "update")), o))
                        if (((o = O(o)), r))
                            do {
                                n(o[i], e), (o = o.parentNode);
                            } while (o);
                        else
                            !(function t(e, i) {
                                if (1 === e.nodeType)
                                    for (i(e), e = e.firstElementChild; e;)
                                        t(e, i), (e = e.nextElementSibling);
                            })(o, function (t) {
                                return n(t[i], e);
                            });
                    else n(t.instances, e);
                }),
                Object.defineProperty(t, "container", {
                    get: function () {
                        return e || rt.body;
                    },
                    set: function (t) {
                        e = Le(t);
                    },
                });
        })(Oi),
        ((Ai = Oi).prototype._callHook = function (t) {
            var e = this,
                i = this.$options[t];
            i &&
                i.forEach(function (t) {
                    return t.call(e);
                });
        }),
        (Ai.prototype._callConnected = function () {
            var t = this;
            this._connected ||
                (v(Ai.elements, this.$options.el) || Ai.elements.push(this.$options.el),
                    (Ai.instances[this._uid] = this),
                    (this._data = {}),
                    this._callHook("beforeConnect"),
                    (this._connected = !0),
                    this._initEvents(),
                    this._initObserver(),
                    this._callHook("connected"),
                    this._isReady ||
                    Kt(function () {
                        return t._callReady();
                    }),
                    this._callUpdate());
        }),
        (Ai.prototype._callDisconnected = function () {
            if (this._connected) {
                this._callHook("beforeDisconnect"),
                    this._observer &&
                    (this._observer.disconnect(), (this._observer = null));
                var t = Ai.elements.indexOf(this.$options.el);
                ~t && Ai.elements.splice(t, 1),
                    delete Ai.instances[this._uid],
                    this._unbindEvents(),
                    this._callHook("disconnected"),
                    (this._connected = !1);
            }
        }),
        (Ai.prototype._callReady = function () {
            this._isReady ||
                ((this._isReady = !0),
                    this._callHook("ready"),
                    this._resetComputeds(),
                    this._callUpdate());
        }),
        (Ai.prototype._callUpdate = function (t) {
            var e = this,
                i = (t = qt(t || "update")).type;
            v(["update", "load", "resize"], i) && this._resetComputeds();
            var n = this.$options.update,
                o = this._frames,
                r = o.reads,
                s = o.writes;
            n &&
                n.forEach(function (n, o) {
                    var a = n.read,
                        l = n.write,
                        h = n.events;
                    ("update" === i || v(h, i)) &&
                        (a &&
                            !v(si.reads, r[o]) &&
                            (r[o] = si.read(function () {
                                var i = a.call(e, e._data, t);
                                !1 === i && l
                                    ? (si.clear(s[o]), delete s[o])
                                    : x(i) && j(e._data, i),
                                    delete r[o];
                            })),
                            l &&
                            !v(si.writes, s[o]) &&
                            (s[o] = si.write(function () {
                                l.call(e, e._data, t), delete s[o];
                            })));
                });
        }),
        (function (e) {
            var n = 0;
            function r(t, e) {
                var i = {},
                    n = t.args;
                void 0 === n && (n = []);
                var r = t.props;
                void 0 === r && (r = {});
                var a = t.el;
                if (!r) return i;
                for (var l in r) {
                    var h = o(l);
                    if (J(a, h)) {
                        var d = u(r[l], X(a, h), a);
                        if ("target" === h && (!d || c(d, "_"))) continue;
                        i[l] = d;
                    }
                }
                var f = (function (t, e) {
                    var i;
                    void 0 === e && (e = []);
                    try {
                        return t
                            ? c(t, "{")
                                ? JSON.parse(t)
                                : e.length && !v(t, ":")
                                    ? (((i = {})[e[0]] = t), i)
                                    : t.split(";").reduce(function (t, e) {
                                        var i = e.split(/:(.+)/),
                                            n = i[0],
                                            o = i[1];
                                        return n && o && (t[n.trim()] = o.trim()), t;
                                    }, {})
                            : {};
                    } catch (t) {
                        return {};
                    }
                })(Q(a, e), n);
                for (var p in f) {
                    var m = s(p);
                    void 0 !== r[m] && (i[m] = u(r[m], f[p], a));
                }
                return i;
            }
            function a(t, e, n) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function () {
                        var o = t._computeds,
                            r = t.$props,
                            s = t.$el;
                        return i(o, e) || (o[e] = n.call(t, r, s)), o[e];
                    },
                    set: function (i) {
                        t._computeds[e] = i;
                    },
                });
            }
            function l(e, i, n) {
                x(i) || (i = { name: n, handler: i });
                var o,
                    r,
                    s = i.name,
                    a = i.el,
                    h = i.handler,
                    u = i.capture,
                    c = i.delegate,
                    d = i.filter,
                    f = i.self;
                (a = b(a) ? a.call(e) : a || e.$el),
                    w(a)
                        ? a.forEach(function (t) {
                            return l(e, j({}, i, { el: t }), n);
                        })
                        : !a ||
                        (d && !d.call(e)) ||
                        ((o = S(h) ? e[h] : t(h, e)),
                            (h = function (t) {
                                return w(t.detail)
                                    ? o.apply(void 0, [t].concat(t.detail))
                                    : o(t);
                            }),
                            f &&
                            ((r = h),
                                (h = function (t) {
                                    if (t.target === t.currentTarget || t.target === t.current)
                                        return r.call(null, t);
                                })),
                            e._events.push(
                                Ft(a, s, c ? (S(c) ? c : c.call(e)) : null, h, u)
                            ));
            }
            function h(t, e) {
                return t.every(function (t) {
                    return !t || !i(t, e);
                });
            }
            function u(t, e, i) {
                return t === Boolean
                    ? D(e)
                    : t === Number
                        ? M(e)
                        : "query" === t
                            ? bt(e, i)
                            : "list" === t
                                ? z(e)
                                : "media" === t
                                    ? (function (t) {
                                        if (S(t))
                                            if ("@" === t[0]) {
                                                var e = "media-" + t.substr(1);
                                                t = B(Se(e));
                                            } else if (isNaN(t)) return t;
                                        return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
                                    })(e)
                                    : t
                                        ? t(e)
                                        : e;
            }
            (e.prototype.props = {}),
                (e.prototype._init = function (t) {
                    (t = t || {}),
                        (t = this.$options = pi(this.constructor.options, t)),
                        (this.$el = null),
                        (this.$name = e.prefix + o(this.$options.name)),
                        (this.$props = {}),
                        (this._frames = { reads: {}, writes: {} }),
                        (this._events = []),
                        (this._uid = n++),
                        this._initData(),
                        this._initMethods(),
                        this._initComputeds(),
                        this._callHook("created"),
                        t.el && this.$mount(t.el);
                }),
                (e.prototype._initData = function () {
                    var t = this.$options,
                        e = t.defaults,
                        n = t.data;
                    void 0 === n && (n = {});
                    var o = t.args;
                    void 0 === o && (o = []);
                    var r = t.props;
                    void 0 === r && (r = {});
                    var s = t.el;
                    for (var a in (o.length &&
                        w(n) &&
                        (n = n.slice(0, o.length).reduce(function (t, e, i) {
                            return x(e) ? j(t, e) : (t[o[i]] = e), t;
                        }, {})),
                        j({}, e, r)))
                        this.$props[a] = this[a] =
                            i(n, a) && !N(n[a])
                                ? u(r[a], n[a], s)
                                : e
                                    ? e[a] && w(e[a])
                                        ? e[a].concat()
                                        : e[a]
                                    : null;
                }),
                (e.prototype._initMethods = function () {
                    var e = this.$options.methods;
                    if (e) for (var i in e) this[i] = t(e[i], this);
                }),
                (e.prototype._initComputeds = function () {
                    var t = this.$options.computed;
                    if ((this._resetComputeds(), t)) for (var e in t) a(this, e, t[e]);
                }),
                (e.prototype._resetComputeds = function () {
                    this._computeds = {};
                }),
                (e.prototype._initProps = function (t) {
                    var e;
                    for (e in (this._resetComputeds(),
                        (t = t || r(this.$options, this.$name))))
                        N(t[e]) || (this.$props[e] = t[e]);
                    var i = [this.$options.computed, this.$options.methods];
                    for (e in this.$props)
                        e in t && h(i, e) && (this[e] = this.$props[e]);
                }),
                (e.prototype._initEvents = function () {
                    var t = this,
                        e = this.$options.events;
                    e &&
                        e.forEach(function (e) {
                            if (i(e, "handler")) l(t, e);
                            else for (var n in e) l(t, e[n], n);
                        });
                }),
                (e.prototype._unbindEvents = function () {
                    this._events.forEach(function (t) {
                        return t();
                    }),
                        (this._events = []);
                }),
                (e.prototype._initObserver = function () {
                    var t = this,
                        e = this.$options,
                        i = e.attrs,
                        n = e.props,
                        s = e.el;
                    !this._observer &&
                        n &&
                        i &&
                        lt &&
                        ((i = w(i)
                            ? i
                            : Object.keys(n).map(function (t) {
                                return o(t);
                            })),
                            (this._observer = new lt(function () {
                                var e = r(t.$options, t.$name);
                                i.some(function (i) {
                                    return !N(e[i]) && e[i] !== t.$props[i];
                                }) && t.$reset(e);
                            })),
                            this._observer.observe(s, {
                                attributes: !0,
                                attributeFilter: i.concat([this.$name, "data-" + this.$name]),
                            }));
                });
        })(Oi),
        (Di = (Ni = Oi).data),
        (Ni.prototype.$mount = function (t) {
            var e = this.$options.name;
            t[Di] || (t[Di] = {}),
                t[Di][e] ||
                ((t[Di][e] = this),
                    (this.$el = this.$options.el = this.$options.el || t),
                    this._initProps(),
                    this._callHook("init"),
                    jt(t, st) && this._callConnected());
        }),
        (Ni.prototype.$emit = function (t) {
            this._callUpdate(t);
        }),
        (Ni.prototype.$update = function (t, e) {
            Ni.update(t, this.$options.el, e);
        }),
        (Ni.prototype.$reset = function (t) {
            this._callDisconnected(), this._initProps(t), this._callConnected();
        }),
        (Ni.prototype.$destroy = function (t) {
            void 0 === t && (t = !1);
            var e = this.$options,
                i = e.el,
                n = e.name;
            i && this._callDisconnected(),
                this._callHook("destroy"),
                i &&
                i[Di] &&
                (delete i[Di][n],
                    Object.keys(i[Di]).length || delete i[Di],
                    t && le(this.$el));
        }),
        (Bi = (Mi = Oi).data),
        (Mi.components = {}),
        (Mi.component = function (t, e) {
            var i = s(t);
            if (x(e)) (e.name = i), (e = Mi.extend(e));
            else {
                if (N(e)) return Mi.components[i];
                e.options.name = i;
            }
            return (
                (Mi.components[i] = e),
                (Mi[i] = function (t, e) {
                    for (var n = arguments.length, o = Array(n); n--;)
                        o[n] = arguments[n];
                    return x(t)
                        ? new Mi.components[i]({ data: t })
                        : Mi.components[i].options.functional
                            ? new Mi.components[i]({ data: [].concat(o) })
                            : t && t.nodeType
                                ? r(t)
                                : je(t).map(r)[0];
                    function r(t) {
                        var n = Mi.getComponent(t, i);
                        return (
                            n && e && n.$reset(e),
                            n || new Mi.components[i]({ el: t, data: e || {} })
                        );
                    }
                }),
                Mi._initialized &&
                !e.options.functional &&
                si.read(function () {
                    return Mi[i]("[uk-" + t + "],[data-uk-" + t + "]");
                }),
                Mi.components[i]
            );
        }),
        (Mi.getComponents = function (t) {
            return (t && (t = I(t) ? t[0] : t) && t[Bi]) || {};
        }),
        (Mi.getComponent = function (t, e) {
            return Mi.getComponents(t)[e];
        }),
        (Mi.connect = function (t) {
            if (t[Bi]) for (var e in t[Bi]) t[Bi][e]._callConnected();
            for (var i = 0; i < t.attributes.length; i++) {
                var n = _i(t.attributes[i].name);
                n && n in Mi.components && Mi[n](t);
            }
        }),
        (Mi.disconnect = function (t) {
            for (var e in t[Bi]) t[Bi][e]._callDisconnected();
        });
    var Pi,
        Hi,
        zi = {
            init: function () {
                me(this.$el, this.$name);
            },
        },
        Wi = {
            props: { container: Boolean },
            defaults: { container: !0 },
            computed: {
                container: function (t) {
                    var e = t.container;
                    return (!0 === e && Oi.container) || (e && Le(e));
                },
            },
        },
        Li = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String,
                queued: Boolean,
            },
            defaults: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: "",
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0,
                },
            },
            computed: {
                hasAnimation: function (t) {
                    return !!t.animation[0];
                },
                hasTransition: function (t) {
                    var e = t.animation;
                    return this.hasAnimation && !0 === e[0];
                },
            },
            methods: {
                toggleElement: function (t, e, i) {
                    var n = this;
                    return new K(function (o) {
                        var r,
                            s = function (t) {
                                return K.all(
                                    t.map(function (t) {
                                        return n._toggleElement(t, e, i);
                                    })
                                );
                            },
                            a = (t = H(t)).filter(function (t) {
                                return n.isToggled(t);
                            }),
                            l = t.filter(function (t) {
                                return !v(a, t);
                            });
                        if (n.queued && N(i) && N(e) && n.hasAnimation && !(t.length < 2)) {
                            var h = rt.body,
                                u = h.scrollTop,
                                c = a[0],
                                d =
                                    (We.inProgress(c) && be(c, "uk-animation-leave")) ||
                                    (Be.inProgress(c) && "0px" === c.style.height);
                            (r = s(a)),
                                d ||
                                (r = r.then(function () {
                                    var t = s(l);
                                    return (h.scrollTop = u), t;
                                }));
                        } else r = s(l.concat(a));
                        r.then(o, R);
                    });
                },
                toggleNow: function (t, e) {
                    var i = this;
                    return new K(function (n) {
                        return K.all(
                            H(t).map(function (t) {
                                return i._toggleElement(t, e, !1);
                            })
                        ).then(n, R);
                    });
                },
                isToggled: function (t) {
                    var e = H(t || this.$el);
                    return this.cls ? be(e, this.cls.split(" ")[0]) : !J(e, "hidden");
                },
                updateAria: function (t) {
                    !1 === this.cls && X(t, "aria-hidden", !this.isToggled(t));
                },
                _toggleElement: function (t, e, i) {
                    var n = this;
                    if (
                        ((e = E(e)
                            ? e
                            : We.inProgress(t)
                                ? be(t, "uk-animation-leave")
                                : Be.inProgress(t)
                                    ? "0px" === t.style.height
                                    : !this.isToggled(t)),
                            !Yt(t, "before" + (e ? "show" : "hide"), [this]))
                    )
                        return K.reject();
                    var o = (
                        !1 !== i && this.hasAnimation
                            ? this.hasTransition
                                ? this._toggleHeight
                                : this._toggleAnimation
                            : this._toggleImmediate
                    )(t, e);
                    return (
                        Yt(t, e ? "show" : "hide", [this]),
                        o.then(function () {
                            Yt(t, e ? "shown" : "hidden", [n]), Oi.update(null, t);
                        })
                    );
                },
                _toggle: function (t, e) {
                    t &&
                        (this.cls
                            ? ye(t, this.cls, v(this.cls, " ") ? void 0 : e)
                            : X(t, "hidden", e ? null : ""),
                            je("[autofocus]", t).some(function (t) {
                                return Ht(t) && (t.focus() || !0);
                            }),
                            this.updateAria(t),
                            Oi.update(null, t));
                },
                _toggleImmediate: function (t, e) {
                    return this._toggle(t, e), K.resolve();
                },
                _toggleHeight: function (t, e) {
                    var i = this,
                        n = Be.inProgress(t),
                        o = t.hasChildNodes
                            ? B(Ie(t.firstElementChild, "marginTop")) +
                            B(Ie(t.lastElementChild, "marginBottom"))
                            : 0,
                        r = Ht(t) ? Xe(t) + (n ? 0 : o) : 0;
                    Be.cancel(t),
                        this.isToggled(t) || this._toggle(t, !0),
                        Xe(t, ""),
                        si.flush();
                    var s = Xe(t) + (n ? 0 : o);
                    return (
                        Xe(t, r),
                        (e
                            ? Be.start(
                                t,
                                j({}, this.initProps, { overflow: "hidden", height: s }),
                                Math.round(this.duration * (1 - r / s)),
                                this.transition
                            )
                            : Be.start(
                                t,
                                this.hideProps,
                                Math.round(this.duration * (r / s)),
                                this.transition
                            ).then(function () {
                                return i._toggle(t, !1);
                            })
                        ).then(function () {
                            return Ie(t, i.initProps);
                        })
                    );
                },
                _toggleAnimation: function (t, e) {
                    var i = this;
                    return (
                        We.cancel(t),
                        e
                            ? (this._toggle(t, !0),
                                We.in(t, this.animation[0], this.duration, this.origin))
                            : We.out(
                                t,
                                this.animation[1] || this.animation[0],
                                this.duration,
                                this.origin
                            ).then(function () {
                                return i._toggle(t, !1);
                            })
                    );
                },
            },
        },
        ji = {
            mixins: [zi, Wi, Li],
            props: {
                clsPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean,
            },
            defaults: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1,
            },
            computed: {
                panel: function (t, e) {
                    return Le("." + t.clsPanel, e);
                },
                transitionElement: function () {
                    return this.panel;
                },
                transitionDuration: function () {
                    return W(Ie(this.transitionElement, "transitionDuration"));
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.selClose;
                    },
                    handler: function (t) {
                        t.preventDefault(), this.hide();
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function (t) {
                        t.defaultPrevented || (t.preventDefault(), this.toggle());
                    },
                },
                {
                    name: "beforeshow",
                    self: !0,
                    handler: function (t) {
                        var e = Pi && Pi !== this && Pi;
                        if (((Pi = this), e)) {
                            if (!this.stack)
                                return e.hide().then(this.show), void t.preventDefault();
                            this.prev = e;
                        }
                        !(function () {
                            if (Hi) return;
                            Hi = [
                                Ft(st, "click", function (t) {
                                    var e = t.target,
                                        i = t.defaultPrevented;
                                    Pi &&
                                        Pi.bgClose &&
                                        !i &&
                                        !jt(e, Pi.panel || Pi.$el) &&
                                        Pi.hide();
                                }),
                                Ft(rt, "keydown", function (t) {
                                    27 === t.keyCode &&
                                        Pi &&
                                        Pi.escClose &&
                                        (t.preventDefault(), Pi.hide());
                                }),
                            ];
                        })();
                    },
                },
                {
                    name: "beforehide",
                    self: !0,
                    handler: function () {
                        (Pi = (Pi && Pi !== this && Pi) || this.prev) ||
                            (Hi &&
                                Hi.forEach(function (t) {
                                    return t();
                                }),
                                (Hi = null));
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        be(st, this.clsPage) ||
                            ((this.scrollbarWidth = Je(ot) - st.offsetWidth),
                                Ie(
                                    rt.body,
                                    "overflowY",
                                    this.scrollbarWidth && this.overlay ? "scroll" : ""
                                )),
                            me(st, this.clsPage);
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        for (var t, e = this.prev; e;) {
                            if (e.clsPage === this.clsPage) {
                                t = !0;
                                break;
                            }
                            e = e.prev;
                        }
                        t || ge(st, this.clsPage),
                            !this.prev && Ie(rt.body, "overflowY", "");
                    },
                },
            ],
            methods: {
                toggle: function () {
                    return this.isToggled() ? this.hide() : this.show();
                },
                show: function () {
                    if (!this.isToggled())
                        return (
                            this.container &&
                            this.$el.parentNode !== this.container &&
                            (oe(this.container, this.$el), this._callConnected()),
                            this.toggleNow(this.$el, !0)
                        );
                },
                hide: function () {
                    if (this.isToggled()) return this.toggleNow(this.$el, !1);
                },
                getActive: function () {
                    return Pi;
                },
                _toggleImmediate: function (t, e) {
                    var i = this;
                    return new K(function (n) {
                        return requestAnimationFrame(function () {
                            i._toggle(t, e),
                                i.transitionDuration
                                    ? Rt(
                                        i.transitionElement,
                                        "transitionend",
                                        n,
                                        !1,
                                        function (t) {
                                            return t.target === i.transitionElement;
                                        }
                                    )
                                    : n();
                        });
                    });
                },
            },
        };
    var Fi = {
        props: { pos: String, offset: null, flip: Boolean, clsPos: String },
        defaults: {
            pos: "bottom-" + (at ? "right" : "left"),
            flip: !0,
            offset: !1,
            clsPos: "",
        },
        computed: {
            pos: function (t) {
                var e = t.pos;
                return (e + (v(e, "-") ? "" : "-center")).split("-");
            },
            dir: function () {
                return this.pos[0];
            },
            align: function () {
                return this.pos[1];
            },
        },
        methods: {
            positionAt: function (t, e, i) {
                var n;
                ve(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"),
                    Ie(t, { top: "", left: "" });
                var o = this.offset;
                o = A(o)
                    ? o
                    : (n = Le(o))
                        ? Ye(n)["x" === r ? "left" : "top"] -
                        Ye(e)["x" === r ? "right" : "bottom"]
                        : 0;
                var r = this.getAxis(),
                    s = Re(
                        t,
                        e,
                        "x" === r
                            ? ei(this.dir) + " " + this.align
                            : this.align + " " + ei(this.dir),
                        "x" === r
                            ? this.dir + " " + this.align
                            : this.align + " " + this.dir,
                        "x" === r
                            ? "" + ("left" === this.dir ? -o : o)
                            : " " + ("top" === this.dir ? -o : o),
                        null,
                        this.flip,
                        i
                    ).target,
                    a = s.x,
                    l = s.y;
                (this.dir = "x" === r ? a : l),
                    (this.align = "x" === r ? l : a),
                    ye(
                        t,
                        this.clsPos + "-" + this.dir + "-" + this.align,
                        !1 === this.offset
                    );
            },
            getAxis: function () {
                return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
            },
        },
    };
    function Vi(t) {
        t.component("accordion", {
            mixins: [zi, Li],
            props: {
                targets: String,
                active: null,
                collapsible: Boolean,
                multiple: Boolean,
                toggle: String,
                content: String,
                transition: String,
            },
            defaults: {
                targets: "> *",
                active: !1,
                animation: [!0],
                collapsible: !0,
                multiple: !1,
                clsOpen: "uk-open",
                toggle: "> .uk-accordion-title",
                content: "> .uk-accordion-content",
                transition: "ease",
            },
            computed: {
                items: function (t, e) {
                    return je(t.targets, e);
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.targets + " " + this.$props.toggle;
                    },
                    handler: function (t) {
                        t.preventDefault(),
                            this.toggle(
                                te(
                                    je(this.targets + " " + this.$props.toggle, this.$el),
                                    t.current
                                )
                            );
                    },
                },
            ],
            connected: function () {
                if (!1 !== this.active) {
                    var t = this.items[Number(this.active)];
                    t && !be(t, this.clsOpen) && this.toggle(t, !1);
                }
            },
            update: function () {
                var t = this;
                this.items.forEach(function (e) {
                    return t._toggleImmediate(Le(t.content, e), be(e, t.clsOpen));
                });
                var e =
                    !this.collapsible && !be(this.items, this.clsOpen) && this.items[0];
                e && this.toggle(e, !1);
            },
            methods: {
                toggle: function (t, e) {
                    var i = this,
                        n = ee(t, this.items),
                        o = Lt(this.items, "." + this.clsOpen);
                    (t = this.items[n]) &&
                        [t]
                            .concat((!this.multiple && !v(o, t) && o) || [])
                            .forEach(function (n) {
                                var r = n === t,
                                    s = r && !be(n, i.clsOpen);
                                if (s || !r || i.collapsible || !(o.length < 2)) {
                                    ye(n, i.clsOpen, s);
                                    var a = n._wrapper
                                        ? n._wrapper.firstElementChild
                                        : Le(i.content, n);
                                    n._wrapper ||
                                        ((n._wrapper = he(a, "<div>")),
                                            X(n._wrapper, "hidden", s ? "" : null)),
                                        i._toggleImmediate(a, !0),
                                        i.toggleElement(n._wrapper, s, e).then(function () {
                                            be(n, i.clsOpen) === s &&
                                                (s || i._toggleImmediate(a, !1),
                                                    (n._wrapper = null),
                                                    ce(a));
                                        });
                                }
                            });
                },
            },
        });
    }
    function Ri(t) {
        t.component("alert", {
            attrs: !0,
            mixins: [zi, Li],
            args: "animation",
            props: { close: String },
            defaults: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: j({ opacity: 0 }, Li.defaults.hideProps),
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.selClose;
                    },
                    handler: function (t) {
                        t.preventDefault(), this.close();
                    },
                },
            ],
            methods: {
                close: function () {
                    var t = this;
                    this.toggleElement(this.$el).then(function () {
                        return t.$destroy(!0);
                    });
                },
            },
        });
    }
    function Yi(t) {
        Kt(function () {
            var e = 0,
                i = 0;
            if (
                (Ft(ot, "load resize", t.update),
                    Ft(ot, "scroll", function (i) {
                        (i.dir = e <= ot.pageYOffset ? "down" : "up"),
                            (i.scrollY = e = ot.pageYOffset),
                            t.update(i);
                    }),
                    Ft(
                        rt,
                        "animationstart",
                        function (t) {
                            var e = t.target;
                            (Ie(e, "animationName") || "").match(/^uk-.*(left|right)/) &&
                                (i++,
                                    (rt.body.style.overflowX = "hidden"),
                                    setTimeout(function () {
                                        --i || (rt.body.style.overflowX = "");
                                    }, W(Ie(e, "animationDuration")) + 100));
                        },
                        !0
                    ),
                    ct)
            ) {
                var n = "uk-hover";
                Ft(rt, "tap", function (t) {
                    var e = t.target;
                    return je("." + n).forEach(function (t) {
                        return !jt(e, t) && ge(t, n);
                    });
                }),
                    Object.defineProperty(t, "hoverSelector", {
                        set: function (t) {
                            Ft(rt, "tap", t, function (t) {
                                return me(t.current, n);
                            });
                        },
                    }),
                    (t.hoverSelector =
                        ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]");
            }
        });
    }
    function qi(t) {
        t.component("cover", {
            mixins: [zi, t.components.video.options],
            props: { width: Number, height: Number },
            defaults: { automute: !0 },
            update: {
                write: function () {
                    var t = this.$el;
                    if (Ht(t)) {
                        var e = t.parentNode,
                            i = e.offsetHeight,
                            n = e.offsetWidth;
                        Ie(
                            Ie(t, { width: "", height: "" }),
                            U.cover(
                                {
                                    width: this.width || t.clientWidth,
                                    height: this.height || t.clientHeight,
                                },
                                { width: n + (n % 2 ? 1 : 0), height: i + (i % 2 ? 1 : 0) }
                            )
                        );
                    }
                },
                events: ["load", "resize"],
            },
            events: {
                loadedmetadata: function () {
                    this.$emit();
                },
            },
        });
    }
    function Ui(t) {
        var e, i;
        t.component("drop", {
            mixins: [Fi, Li],
            args: "pos",
            props: {
                mode: "list",
                toggle: Boolean,
                boundary: "query",
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String,
            },
            defaults: {
                mode: ["click", "hover"],
                toggle: !0,
                boundary: ot,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                hoverIdle: 200,
                animation: ["uk-animation-fade"],
                cls: "uk-open",
            },
            computed: {
                clsDrop: function (t) {
                    var e = t.clsDrop;
                    return e || "uk-" + this.$options.name;
                },
                clsPos: function () {
                    return this.clsDrop;
                },
            },
            init: function () {
                (this.tracker = new ui()), me(this.$el, this.clsDrop);
            },
            connected: function () {
                var e = this.$props.toggle;
                (this.toggle =
                    e &&
                    t.toggle(S(e) ? bt(e, this.$el) : this.$el.previousElementSibling, {
                        target: this.$el,
                        mode: this.mode,
                    })),
                    this.updateAria(this.$el);
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return "." + this.clsDrop + "-close";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.hide(!1);
                    },
                },
                {
                    name: "click",
                    delegate: function () {
                        return 'a[href^="#"]';
                    },
                    handler: function (t) {
                        if (!t.defaultPrevented) {
                            var e = t.target.hash;
                            e || t.preventDefault(), (e && jt(e, this.$el)) || this.hide(!1);
                        }
                    },
                },
                {
                    name: "beforescroll",
                    handler: function () {
                        this.hide(!1);
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function (t, e) {
                        t.preventDefault(),
                            this.isToggled() ? this.hide(!1) : this.show(e, !1);
                    },
                },
                {
                    name: mt,
                    filter: function () {
                        return v(this.mode, "hover");
                    },
                    handler: function (t) {
                        Ti(t) ||
                            (e &&
                                e !== this &&
                                e.toggle &&
                                v(e.toggle.mode, "hover") &&
                                !jt(t.target, e.toggle.$el) &&
                                !q({ x: t.pageX, y: t.pageY }, Ye(e.$el)) &&
                                e.hide(!1),
                                t.preventDefault(),
                                this.show(this.toggle));
                    },
                },
                {
                    name: "toggleshow",
                    handler: function (t, e) {
                        (e && !v(e.target, this.$el)) ||
                            (t.preventDefault(), this.show(e || this.toggle));
                    },
                },
                {
                    name: "togglehide " + gt,
                    handler: function (t, e) {
                        Ti(t) ||
                            (e && !v(e.target, this.$el)) ||
                            (t.preventDefault(),
                                this.toggle && v(this.toggle.mode, "hover") && this.hide());
                    },
                },
                {
                    name: "beforeshow",
                    self: !0,
                    handler: function () {
                        this.clearTimers(), this.position();
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        this.tracker.init(),
                            me(this.toggle.$el, this.cls),
                            X(this.toggle.$el, "aria-expanded", "true"),
                            (function () {
                                if (i) return;
                                (i = !0),
                                    Ft(st, "click", function (t) {
                                        var i,
                                            n = t.target,
                                            o = t.defaultPrevented;
                                        if (!o)
                                            for (
                                                ;
                                                e &&
                                                e !== i &&
                                                !jt(n, e.$el) &&
                                                (!e.toggle || !jt(n, e.toggle.$el));

                                            )
                                                (i = e), e.hide(!1);
                                    });
                            })();
                    },
                },
                {
                    name: "beforehide",
                    self: !0,
                    handler: function () {
                        this.clearTimers();
                    },
                },
                {
                    name: "hide",
                    handler: function (t) {
                        var i = t.target;
                        this.$el === i
                            ? ((e = this.isActive() ? null : e),
                                ge(this.toggle.$el, this.cls),
                                X(this.toggle.$el, "aria-expanded", "false"),
                                this.toggle.$el.blur(),
                                je("a, button", this.toggle.$el).forEach(function (t) {
                                    return t.blur();
                                }),
                                this.tracker.cancel())
                            : (e =
                                null === e && jt(i, this.$el) && this.isToggled() ? this : e);
                    },
                },
            ],
            update: {
                write: function () {
                    this.isToggled() && !We.inProgress(this.$el) && this.position();
                },
                events: ["resize"],
            },
            methods: {
                show: function (t, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    var o = function () {
                        return !n.isToggled() && n.toggleElement(n.$el, !0);
                    },
                        r = function () {
                            if (((n.toggle = t || n.toggle), n.clearTimers(), !n.isActive()))
                                if (i && e && e !== n && e.isDelaying)
                                    n.showTimer = setTimeout(n.show, 10);
                                else {
                                    if (n.isParentOf(e)) {
                                        if (!e.hideTimer) return;
                                        e.hide(!1);
                                    } else if (e && !n.isChildOf(e) && !n.isParentOf(e))
                                        for (var r; e && e !== r && !n.isChildOf(e);)
                                            (r = e), e.hide(!1);
                                    i && n.delayShow
                                        ? (n.showTimer = setTimeout(o, n.delayShow))
                                        : o(),
                                        (e = n);
                                }
                        };
                    t && this.toggle && t.$el !== this.toggle.$el
                        ? (Rt(this.$el, "hide", r), this.hide(!1))
                        : r();
                },
                hide: function (t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var i = function () {
                        return e.toggleNow(e.$el, !1);
                    };
                    this.clearTimers(),
                        (this.isDelaying = this.tracker.movesTo(this.$el)),
                        t && this.isDelaying
                            ? (this.hideTimer = setTimeout(this.hide, this.hoverIdle))
                            : t && this.delayHide
                                ? (this.hideTimer = setTimeout(i, this.delayHide))
                                : i();
                },
                clearTimers: function () {
                    clearTimeout(this.showTimer),
                        clearTimeout(this.hideTimer),
                        (this.showTimer = null),
                        (this.hideTimer = null),
                        (this.isDelaying = !1);
                },
                isActive: function () {
                    return e === this;
                },
                isChildOf: function (t) {
                    return t && t !== this && jt(this.$el, t.$el);
                },
                isParentOf: function (t) {
                    return t && t !== this && jt(t.$el, this.$el);
                },
                position: function () {
                    ve(this.$el, this.clsDrop + "-(stack|boundary)"),
                        Ie(this.$el, { top: "", left: "", display: "block" }),
                        ye(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t = Ye(this.boundary),
                        e = this.boundaryAlign ? t : Ye(this.toggle.$el);
                    if ("justify" === this.align) {
                        var i = "y" === this.getAxis() ? "width" : "height";
                        Ie(this.$el, i, e[i]);
                    } else
                        this.$el.offsetWidth >
                            Math.max(t.right - e.left, e.right - t.left) &&
                            me(this.$el, this.clsDrop + "-stack");
                    this.positionAt(
                        this.$el,
                        this.boundaryAlign ? this.boundary : this.toggle.$el,
                        this.boundary
                    ),
                        Ie(this.$el, "display", "");
                },
            },
        }),
            (t.drop.getActive = function () {
                return e;
            });
    }
    function Xi(t) {
        t.component("dropdown", t.components.drop.extend({ name: "dropdown" }));
    }
    function Ji(t) {
        t.component("form-custom", {
            mixins: [zi],
            args: "target",
            props: { target: Boolean },
            defaults: { target: !1 },
            computed: {
                input: function (t, e) {
                    return Le(zt, e);
                },
                state: function () {
                    return this.input.nextElementSibling;
                },
                target: function (t, e) {
                    var i = t.target;
                    return (
                        i &&
                        ((!0 === i &&
                            this.input.parentNode === e &&
                            this.input.nextElementSibling) ||
                            bt(i, e))
                    );
                },
            },
            update: function () {
                var t,
                    e = this.target,
                    i = this.input;
                e &&
                    (e[Wt(e) ? "value" : "textContent"] =
                        i.files && i.files[0]
                            ? i.files[0].name
                            : _t(i, "select") &&
                                (t = je("option", i).filter(function (t) {
                                    return t.selected;
                                })[0])
                                ? t.textContent
                                : i.value);
            },
            events: [
                {
                    name: "focusin focusout mouseenter mouseleave",
                    delegate: zt,
                    handler: function (t) {
                        var e = t.type;
                        t.current === this.input &&
                            ye(
                                this.state,
                                "uk-" + (v(e, "focus") ? "focus" : "hover"),
                                v(["focusin", "mouseenter"], e)
                            );
                    },
                },
                {
                    name: "change",
                    handler: function () {
                        this.$emit();
                    },
                },
            ],
        });
    }
    function Gi(t) {
        t.component("gif", {
            update: {
                read: function (t) {
                    var e = ii(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e;
                },
                write: function () {
                    this.$el.src = this.$el.src;
                },
                events: ["scroll", "load", "resize"],
            },
        });
    }
    function Zi(t) {
        t.component(
            "grid",
            t.components.margin.extend({
                mixins: [zi],
                name: "grid",
                defaults: { margin: "uk-grid-margin", clsStack: "uk-grid-stack" },
                update: {
                    write: function (t) {
                        var e = t.stacks;
                        ye(this.$el, this.clsStack, e);
                    },
                    events: ["load", "resize"],
                },
            })
        );
    }
    function Qi(t) {
        t.component("height-match", {
            args: "target",
            props: { target: String, row: Boolean },
            defaults: { target: "> *", row: !0 },
            computed: {
                elements: function (t, e) {
                    return je(t.target, e);
                },
            },
            update: {
                read: function () {
                    var t = this,
                        e = !1;
                    return (
                        Ie(this.elements, "minHeight", ""),
                        {
                            rows: this.row
                                ? this.elements
                                    .reduce(function (t, i) {
                                        return (
                                            e !== i.offsetTop
                                                ? t.push([i])
                                                : t[t.length - 1].push(i),
                                            (e = i.offsetTop),
                                            t
                                        );
                                    }, [])
                                    .map(function (e) {
                                        return t.match(e);
                                    })
                                : [this.match(this.elements)],
                        }
                    );
                },
                write: function (t) {
                    t.rows.forEach(function (t) {
                        var e = t.height;
                        return Ie(t.elements, "minHeight", e);
                    });
                },
                events: ["load", "resize"],
            },
            methods: {
                match: function (t) {
                    if (t.length < 2) return {};
                    var e = [],
                        i = 0;
                    return (
                        t.forEach(function (t) {
                            var n, o;
                            Ht(t) ||
                                ((n = X(t, "style")),
                                    (o = X(t, "hidden")),
                                    X(t, {
                                        style: (n || "") + ";display:block !important;",
                                        hidden: null,
                                    })),
                                (i = Math.max(i, t.offsetHeight)),
                                e.push(t.offsetHeight),
                                N(n) || X(t, { style: n, hidden: o });
                        }),
                        (t = t.filter(function (t, n) {
                            return e[n] < i;
                        })),
                        { height: i, elements: t }
                    );
                },
            },
        });
    }
    function Ki(t) {
        function e(t) {
            return (t && t.offsetHeight) || 0;
        }
        t.component("height-viewport", {
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number,
            },
            defaults: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
            update: {
                write: function () {
                    Ie(this.$el, "boxSizing", "border-box");
                    var t,
                        i = Xe(ot),
                        n = 0;
                    if (this.expand) {
                        Ie(this.$el, { height: "", minHeight: "" });
                        var o = i - e(st);
                        o > 0 && (t = e(this.$el) + o);
                    } else {
                        var r = Ye(this.$el).top;
                        r < i / 2 && this.offsetTop && (n += r),
                            !0 === this.offsetBottom
                                ? (n += e(this.$el.nextElementSibling))
                                : A(this.offsetBottom)
                                    ? (n += (i / 100) * this.offsetBottom)
                                    : this.offsetBottom && f(this.offsetBottom, "px")
                                        ? (n += B(this.offsetBottom))
                                        : S(this.offsetBottom) &&
                                        (n += e(bt(this.offsetBottom, this.$el))),
                            (t = n ? "calc(100vh - " + n + "px)" : "100vh");
                    }
                    if (t) {
                        Ie(this.$el, { height: "", minHeight: t });
                        var s = this.$el.offsetHeight;
                        this.minHeight &&
                            this.minHeight > s &&
                            Ie(this.$el, "minHeight", this.minHeight),
                            i - n >= s && Ie(this.$el, "height", t);
                    }
                },
                events: ["load", "resize"],
            },
        });
    }
    var tn,
        en =
            '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        nn =
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        on =
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        rn =
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
        sn =
            '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        an =
            '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        ln =
            '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        hn =
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        un =
            '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        cn =
            '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        dn =
            '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        fn =
            '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        pn =
            '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        mn =
            '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        gn =
            '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        vn =
            '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    function wn(t) {
        var e = {},
            i = {
                spinner: gn,
                totop: vn,
                marker: on,
                "close-icon": en,
                "close-large": nn,
                "navbar-toggle-icon": rn,
                "overlay-icon": sn,
                "pagination-next": an,
                "pagination-previous": ln,
                "search-icon": hn,
                "search-large": un,
                "search-navbar": cn,
                "slidenav-next": dn,
                "slidenav-next-large": fn,
                "slidenav-previous": pn,
                "slidenav-previous-large": mn,
            };
        function n(e, i) {
            t.component(
                e,
                t.components.icon.extend({
                    name: e,
                    mixins: i ? [i] : [],
                    defaults: { icon: e },
                })
            );
        }
        t.component(
            "icon",
            t.components.svg.extend({
                attrs: ["icon", "ratio"],
                mixins: [zi],
                name: "icon",
                args: "icon",
                props: ["icon"],
                defaults: { exclude: ["id", "style", "class", "src", "icon"] },
                init: function () {
                    me(this.$el, "uk-icon"),
                        at &&
                        (this.icon = L(
                            L(this.icon, "left", "right"),
                            "previous",
                            "next"
                        ));
                },
                methods: {
                    getSvg: function () {
                        var t = (function (t) {
                            if (!i[t]) return null;
                            e[t] || (e[t] = Le(i[t].trim()));
                            return e[t];
                        })(this.icon);
                        return t ? K.resolve(t) : K.reject("Icon not found.");
                    },
                },
            })
        ),
            [
                "marker",
                "navbar-toggle-icon",
                "overlay-icon",
                "pagination-previous",
                "pagination-next",
                "totop",
            ].forEach(function (t) {
                return n(t);
            }),
            ["slidenav-previous", "slidenav-next"].forEach(function (t) {
                return n(t, {
                    init: function () {
                        me(this.$el, "uk-slidenav"),
                            be(this.$el, "uk-slidenav-large") && (this.icon += "-large");
                    },
                });
            }),
            n("search-icon", {
                init: function () {
                    be(this.$el, "uk-search-icon") &&
                        Dt(this.$el, ".uk-search-large").length
                        ? (this.icon = "search-large")
                        : Dt(this.$el, ".uk-search-navbar").length &&
                        (this.icon = "search-navbar");
                },
            }),
            n("close", {
                init: function () {
                    this.icon =
                        "close-" + (be(this.$el, "uk-close-large") ? "large" : "icon");
                },
            }),
            n("spinner", {
                connected: function () {
                    var t = this;
                    this.svg.then(function (e) {
                        return (
                            1 !== t.ratio && Ie(Le("circle", e), "stroke-width", 1 / t.ratio)
                        );
                    }, R);
                },
            }),
            (t.icon.add = function (n) {
                Object.keys(n).forEach(function (t) {
                    (i[t] = n[t]), delete e[t];
                }),
                    t._initialized &&
                    F(t.instances, function (t) {
                        "icon" === t.$options.name && t.$reset();
                    });
            });
    }
    function bn(t) {
        t.component("leader", {
            mixins: [zi],
            props: { fill: String, media: "media" },
            defaults: {
                fill: "",
                media: !1,
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill",
            },
            computed: {
                fill: function (t) {
                    var e = t.fill;
                    return e || Se("leader-fill");
                },
            },
            connected: function () {
                var t;
                (t = ue(this.$el, '<span class="' + this.clsWrapper + '">')),
                    (this.wrapper = t[0]);
            },
            disconnected: function () {
                ce(this.wrapper.childNodes);
            },
            update: [
                {
                    read: function (t) {
                        var e = t.changed,
                            i = t.width,
                            n = i;
                        return {
                            width: (i = Math.floor(this.$el.offsetWidth / 2)),
                            changed: e || n !== i,
                            hide: this.media && !ot.matchMedia(this.media).matches,
                        };
                    },
                    write: function (t) {
                        ye(this.wrapper, this.clsHide, t.hide),
                            t.changed &&
                            ((t.changed = !1),
                                X(
                                    this.wrapper,
                                    this.attrFill,
                                    new Array(t.width).join(this.fill)
                                ));
                    },
                    events: ["load", "resize"],
                },
            ],
        });
    }
    function yn(t) {
        t.component("margin", {
            props: { margin: String, firstColumn: Boolean },
            defaults: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column",
            },
            update: {
                read: function (t) {
                    var e = this.$el.children;
                    if (!e.length || !Ht(this.$el)) return (t.rows = !1);
                    t.stacks = !0;
                    for (var i = [[]], n = 0; n < e.length; n++) {
                        var o = e[n],
                            r = o.getBoundingClientRect();
                        if (r.height)
                            for (var s = i.length - 1; s >= 0; s--) {
                                var a = i[s];
                                if (!a[0]) {
                                    a.push(o);
                                    break;
                                }
                                var l = a[0].getBoundingClientRect();
                                if (r.top >= Math.floor(l.bottom)) {
                                    i.push([o]);
                                    break;
                                }
                                if (Math.floor(r.bottom) > l.top) {
                                    if (((t.stacks = !1), r.left < l.left && !at)) {
                                        a.unshift(o);
                                        break;
                                    }
                                    a.push(o);
                                    break;
                                }
                                if (0 === s) {
                                    i.unshift([o]);
                                    break;
                                }
                            }
                    }
                    t.rows = i;
                },
                write: function (t) {
                    var e = this;
                    t.rows.forEach(function (t, i) {
                        return t.forEach(function (t, n) {
                            ye(t, e.margin, 0 !== i), ye(t, e.firstColumn, 0 === n);
                        });
                    });
                },
                events: ["load", "resize"],
            },
        });
    }
    function xn(t) {
        t.component("modal", {
            mixins: [ji],
            defaults: {
                clsPage: "uk-modal-page",
                clsPanel: "uk-modal-dialog",
                selClose:
                    ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
            },
            events: [
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        be(this.panel, "uk-margin-auto-vertical")
                            ? me(this.$el, "uk-flex")
                            : Ie(this.$el, "display", "block"),
                            Xe(this.$el);
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        Ie(this.$el, "display", ""), ge(this.$el, "uk-flex");
                    },
                },
            ],
        }),
            t.component("overflow-auto", {
                mixins: [zi],
                computed: {
                    modal: function (t, e) {
                        return Nt(e, ".uk-modal");
                    },
                    panel: function (t, e) {
                        return Nt(e, ".uk-modal-dialog");
                    },
                },
                connected: function () {
                    Ie(this.$el, "minHeight", 150);
                },
                update: {
                    write: function () {
                        if (this.panel && this.modal) {
                            var t = Ie(this.$el, "maxHeight");
                            Ie(
                                Ie(this.$el, "maxHeight", 150),
                                "maxHeight",
                                Math.max(150, 150 + Xe(this.modal) - this.panel.offsetHeight)
                            ),
                                t !== Ie(this.$el, "maxHeight") && Yt(this.$el, "resize");
                        }
                    },
                    events: ["load", "resize"],
                },
            }),
            (t.modal.dialog = function (e, i) {
                var n = t.modal(
                    ' <div class="uk-modal"> <div class="uk-modal-dialog">' +
                    e +
                    "</div> </div> ",
                    i
                );
                return (
                    n.show(),
                    Ft(n.$el, "hidden", function (t) {
                        t.target === t.currentTarget && n.$destroy(!0);
                    }),
                    n
                );
            }),
            (t.modal.alert = function (e, i) {
                return (
                    (i = j({ bgClose: !1, escClose: !1, labels: t.modal.labels }, i)),
                    new K(function (n) {
                        return Ft(
                            t.modal.dialog(
                                ' <div class="uk-modal-body">' +
                                (S(e) ? e : ne(e)) +
                                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                                i.labels.ok +
                                "</button> </div> ",
                                i
                            ).$el,
                            "hide",
                            n
                        );
                    })
                );
            }),
            (t.modal.confirm = function (e, i) {
                return (
                    (i = j({ bgClose: !1, escClose: !0, labels: t.modal.labels }, i)),
                    new K(function (n, o) {
                        var r = t.modal.dialog(
                            ' <form> <div class="uk-modal-body">' +
                            (S(e) ? e : ne(e)) +
                            '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                            i.labels.cancel +
                            '</button> <button class="uk-button uk-button-primary" autofocus>' +
                            i.labels.ok +
                            "</button> </div> </form> ",
                            i
                        ),
                            s = !1;
                        Ft(r.$el, "submit", "form", function (t) {
                            t.preventDefault(), n(), (s = !0), r.hide();
                        }),
                            Ft(r.$el, "hide", function () {
                                s || o();
                            });
                    })
                );
            }),
            (t.modal.prompt = function (e, i, n) {
                return (
                    (n = j({ bgClose: !1, escClose: !0, labels: t.modal.labels }, n)),
                    new K(function (o) {
                        var r = t.modal.dialog(
                            ' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                            (S(e) ? e : ne(e)) +
                            '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                            n.labels.cancel +
                            '</button> <button class="uk-button uk-button-primary">' +
                            n.labels.ok +
                            "</button> </div> </form> ",
                            n
                        ),
                            s = Le("input", r.$el);
                        s.value = i;
                        var a = !1;
                        Ft(r.$el, "submit", "form", function (t) {
                            t.preventDefault(), o(s.value), (a = !0), r.hide();
                        }),
                            Ft(r.$el, "hide", function () {
                                a || o(null);
                            });
                    })
                );
            }),
            (t.modal.labels = { ok: "Ok", cancel: "Cancel" });
    }
    function kn(t) {
        t.component(
            "nav",
            t.components.accordion.extend({
                name: "nav",
                defaults: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
            })
        );
    }
    function $n(t) {
        t.component("navbar", {
            mixins: [zi],
            props: {
                dropdown: String,
                mode: "list",
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: "query",
                duration: Number,
            },
            defaults: {
                dropdown: ".uk-navbar-nav > li",
                align: at ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200,
            },
            computed: {
                boundary: function (t, e) {
                    var i = t.boundary,
                        n = t.boundaryAlign;
                    return !0 === i || n ? e : i;
                },
                pos: function (t) {
                    return "bottom-" + t.align;
                },
            },
            beforeConnect: function () {
                var t = this.$props.dropbar;
                (this.dropbar = t && ((S(t) && bt(t, this.$el)) || Le("<div></div>"))),
                    this.dropbar &&
                    (me(this.dropbar, "uk-navbar-dropbar"),
                        "slide" === this.dropbarMode &&
                        me(this.dropbar, "uk-navbar-dropbar-slide"));
            },
            disconnected: function () {
                this.dropbar && le(this.dropbar);
            },
            update: function () {
                t.drop(
                    je(this.dropdown + " ." + this.clsDrop, this.$el).filter(function (
                        e
                    ) {
                        return !t.getComponent(e, "drop") && !t.getComponent(e, "dropdown");
                    }),
                    j({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset,
                    })
                );
            },
            events: [
                {
                    name: "mouseover",
                    delegate: function () {
                        return this.dropdown;
                    },
                    handler: function (t) {
                        var e = t.current,
                            i = this.getActive();
                        i &&
                            i.toggle &&
                            !jt(i.toggle.$el, e) &&
                            !i.tracker.movesTo(i.$el) &&
                            i.hide(!1);
                    },
                },
                {
                    name: "mouseleave",
                    el: function () {
                        return this.dropbar;
                    },
                    handler: function () {
                        var t = this.getActive();
                        t && !_t(this.dropbar, ":hover") && t.hide();
                    },
                },
                {
                    name: "beforeshow",
                    capture: !0,
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function () {
                        this.dropbar.parentNode ||
                            se(this.dropbarAnchor || this.$el, this.dropbar);
                    },
                },
                {
                    name: "show",
                    capture: !0,
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var i = e.$el;
                        this.clsDrop && me(i, this.clsDrop + "-dropbar"),
                            this.transitionTo(
                                i.offsetHeight +
                                B(Ie(i, "margin-top")) +
                                B(Ie(i, "margin-bottom")),
                                i
                            );
                    },
                },
                {
                    name: "beforehide",
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var i = e.$el,
                            n = this.getActive();
                        _t(this.dropbar, ":hover") &&
                            n &&
                            n.$el === i &&
                            t.preventDefault();
                    },
                },
                {
                    name: "hide",
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var i = e.$el,
                            n = this.getActive();
                        (!n || (n && n.$el === i)) && this.transitionTo(0);
                    },
                },
            ],
            methods: {
                getActive: function () {
                    var e = t.drop.getActive();
                    return e && v(e.mode, "hover") && jt(e.toggle.$el, this.$el) && e;
                },
                transitionTo: function (t, e) {
                    var i = this.dropbar,
                        n = Ht(i) ? Xe(i) : 0;
                    return (
                        Ie((e = n < t && e), { height: n, overflow: "hidden" }),
                        Xe(i, n),
                        Be.cancel([e, i]),
                        Be.start([e, i], { height: t }, this.duration)
                            .catch(R)
                            .finally(function () {
                                return Ie(e, { height: "", overflow: "" });
                            })
                    );
                },
            },
        });
    }
    function In(t) {
        t.component("offcanvas", {
            mixins: [ji],
            args: "mode",
            props: { content: String, mode: String, flip: Boolean, overlay: Boolean },
            defaults: {
                content: ".uk-offcanvas-content",
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                clsPanel: "uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContent: "uk-offcanvas-content",
                clsContentAnimation: "uk-offcanvas-content-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close",
            },
            computed: {
                content: function (t) {
                    var e = t.content;
                    return Le(e) || rt.body;
                },
                clsFlip: function (t) {
                    var e = t.flip,
                        i = t.clsFlip;
                    return e ? i : "";
                },
                clsOverlay: function (t) {
                    var e = t.overlay,
                        i = t.clsOverlay;
                    return e ? i : "";
                },
                clsMode: function (t) {
                    var e = t.mode,
                        i = t.clsMode;
                    return i + "-" + e;
                },
                clsSidebarAnimation: function (t) {
                    var e = t.mode,
                        i = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : i;
                },
                clsContentAnimation: function (t) {
                    var e = t.mode,
                        i = t.clsContentAnimation;
                    return "push" !== e && "reveal" !== e ? "" : i;
                },
                transitionElement: function (t) {
                    return "reveal" === t.mode ? this.panel.parentNode : this.panel;
                },
            },
            update: {
                write: function () {
                    this.getActive() === this &&
                        ((this.overlay || this.clsContentAnimation) &&
                            Je(this.content, Je(ot) - this.scrollbarWidth),
                            this.overlay &&
                            (Xe(this.content, Xe(ot)),
                                tn && (this.content.scrollTop = tn.y)));
                },
                events: ["resize"],
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return 'a[href^="#"]';
                    },
                    handler: function (t) {
                        var e = t.current;
                        e.hash && Le(e.hash, this.content) && ((tn = null), this.hide());
                    },
                },
                {
                    name: "beforescroll",
                    filter: function () {
                        return this.overlay;
                    },
                    handler: function (t, e, i) {
                        e &&
                            i &&
                            this.isToggled() &&
                            Le(i, this.content) &&
                            (Rt(this.$el, "hidden", function () {
                                return e.scrollTo(i);
                            }),
                                t.preventDefault());
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        (tn = tn || { x: ot.pageXOffset, y: ot.pageYOffset }),
                            "reveal" !== this.mode ||
                            be(this.panel, this.clsMode) ||
                            (he(this.panel, "<div>"),
                                me(this.panel.parentNode, this.clsMode)),
                            Ie(
                                st,
                                "overflowY",
                                (!this.clsContentAnimation || this.flip) &&
                                    this.scrollbarWidth &&
                                    this.overlay
                                    ? "scroll"
                                    : ""
                            ),
                            me(rt.body, this.clsContainer, this.clsFlip, this.clsOverlay),
                            Xe(rt.body),
                            me(this.content, this.clsContentAnimation),
                            me(
                                this.panel,
                                this.clsSidebarAnimation +
                                " " +
                                ("reveal" !== this.mode ? this.clsMode : "")
                            ),
                            me(this.$el, this.clsOverlay),
                            Ie(this.$el, "display", "block"),
                            Xe(this.$el);
                    },
                },
                {
                    name: "hide",
                    self: !0,
                    handler: function () {
                        ge(this.content, this.clsContentAnimation);
                        var t = this.getActive();
                        ("none" === this.mode || (t && t !== this && t !== this.prev)) &&
                            Yt(this.panel, "transitionend");
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        if (("reveal" === this.mode && ce(this.panel), this.overlay)) {
                            if (!tn) {
                                var t = this.content,
                                    e = t.scrollLeft,
                                    i = t.scrollTop;
                                tn = { x: e, y: i };
                            }
                        } else tn = { x: ot.pageXOffset, y: ot.pageYOffset };
                        ge(this.panel, this.clsSidebarAnimation, this.clsMode),
                            ge(this.$el, this.clsOverlay),
                            Ie(this.$el, "display", ""),
                            ge(rt.body, this.clsContainer, this.clsFlip, this.clsOverlay),
                            (rt.body.scrollTop = tn.y),
                            Ie(st, "overflow-y", ""),
                            Je(this.content, ""),
                            Xe(this.content, ""),
                            ot.scrollTo(tn.x, tn.y),
                            (tn = null);
                    },
                },
                {
                    name: "swipeLeft swipeRight",
                    handler: function (t) {
                        this.isToggled() &&
                            Ti(t) &&
                            (("swipeLeft" === t.type && !this.flip) ||
                                ("swipeRight" === t.type && this.flip)) &&
                            this.hide();
                    },
                },
            ],
        });
    }
    function Tn(t) {
        t.component("responsive", {
            props: ["width", "height"],
            init: function () {
                me(this.$el, "uk-responsive-width");
            },
            update: {
                read: function () {
                    return (
                        !!(Ht(this.$el) && this.width && this.height) && {
                            width: Je(this.$el.parentNode),
                            height: this.height,
                        }
                    );
                },
                write: function (t) {
                    Xe(
                        this.$el,
                        U.contain({ height: this.height, width: this.width }, t).height
                    );
                },
                events: ["load", "resize"],
            },
        });
    }
    function Cn(t) {
        t.component("scroll", {
            props: { duration: Number, offset: Number },
            defaults: { duration: 1e3, offset: 0 },
            methods: {
                scrollTo: function (t) {
                    var e = this;
                    t = (t && Le(t)) || rt.body;
                    var i = Xe(rt),
                        n = Xe(ot),
                        o = Ye(t).top - this.offset;
                    if (
                        (o + n > i && (o = i - n), Yt(this.$el, "beforescroll", [this, t]))
                    ) {
                        var r = Date.now(),
                            s = ot.pageYOffset,
                            a = function () {
                                var i,
                                    n =
                                        s +
                                        (o - s) *
                                        ((i = V((Date.now() - r) / e.duration)),
                                            0.5 * (1 - Math.cos(Math.PI * i)));
                                ot.scrollTo(ot.pageXOffset, n),
                                    n !== o
                                        ? requestAnimationFrame(a)
                                        : Yt(e.$el, "scrolled", [e, t]);
                            };
                        a();
                    }
                },
            },
            events: {
                click: function (t) {
                    t.defaultPrevented ||
                        (t.preventDefault(), this.scrollTo(Bt(this.$el.hash).substr(1)));
                },
            },
        });
    }
    function En(t) {
        t.component("scrollspy", {
            args: "cls",
            props: {
                cls: "list",
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number,
            },
            defaults: {
                cls: [],
                target: !1,
                hidden: !0,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview",
            },
            computed: {
                elements: function (t, e) {
                    var i = t.target;
                    return i ? je(i, e) : [e];
                },
            },
            update: [
                {
                    write: function () {
                        this.hidden &&
                            Ie(
                                Lt(this.elements, ":not(." + this.inViewClass + ")"),
                                "visibility",
                                "hidden"
                            );
                    },
                },
                {
                    read: function (e) {
                        var i = this;
                        if (!t._initialized)
                            return (
                                "complete" === rt.readyState &&
                                requestAnimationFrame(function () {
                                    return i.$emit();
                                }),
                                !1
                            );
                        this.elements.forEach(function (t, n) {
                            var o = e[n];
                            if (!o || o.el !== t) {
                                var r = Q(t, "uk-scrollspy-class");
                                o = { el: t, toggles: (r && r.split(",")) || i.cls };
                            }
                            (o.show = ii(t, i.offsetTop, i.offsetLeft)), (e[n] = o);
                        });
                    },
                    write: function (e) {
                        var i = this,
                            n = 1 === this.elements.length ? 1 : 0;
                        this.elements.forEach(function (o, r) {
                            var s = e[r],
                                a = s.toggles[r] || s.toggles[0];
                            if (!s.show || s.inview || s.timer)
                                !s.show &&
                                    s.inview &&
                                    i.repeat &&
                                    (s.timer && (clearTimeout(s.timer), delete s.timer),
                                        Ie(o, "visibility", i.hidden ? "hidden" : ""),
                                        ge(o, i.inViewClass),
                                        ye(o, a),
                                        Yt(o, "outview"),
                                        t.update(null, o),
                                        (s.inview = !1));
                            else {
                                var l = function () {
                                    Ie(o, "visibility", ""),
                                        me(o, i.inViewClass),
                                        ye(o, a),
                                        Yt(o, "inview"),
                                        t.update(null, o),
                                        (s.inview = !0),
                                        delete s.timer;
                                };
                                i.delay && n ? (s.timer = setTimeout(l, i.delay * n)) : l(),
                                    n++;
                            }
                        });
                    },
                    events: ["scroll", "load", "resize"],
                },
            ],
        });
    }
    function Sn(t) {
        t.component("scrollspy-nav", {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number,
            },
            defaults: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0,
            },
            computed: {
                links: function (t, e) {
                    return je('a[href^="#"]', e).filter(function (t) {
                        return t.hash;
                    });
                },
                elements: function () {
                    return this.closest ? Nt(this.links, this.closest) : this.links;
                },
                targets: function () {
                    return je(
                        this.links
                            .map(function (t) {
                                return t.hash;
                            })
                            .join(",")
                    );
                },
            },
            update: [
                {
                    read: function () {
                        this.scroll && t.scroll(this.links, { offset: this.offset || 0 });
                    },
                },
                {
                    read: function (t) {
                        var e = this,
                            i = ot.pageYOffset + this.offset + 1,
                            n = Xe(rt) - Xe(ot) + this.offset;
                        (t.active = !1),
                            this.targets.every(function (o, r) {
                                var s = Ye(o).top,
                                    a = r + 1 === e.targets.length;
                                if (
                                    !e.overflow &&
                                    ((0 === r && s > i) || (a && s + o.offsetTop < i))
                                )
                                    return !1;
                                if (!a && Ye(e.targets[r + 1]).top <= i) return !0;
                                if (i >= n)
                                    for (var l = e.targets.length - 1; l > r; l--)
                                        if (ii(e.targets[l])) {
                                            o = e.targets[l];
                                            break;
                                        }
                                return !(t.active = Le(Lt(e.links, '[href="#' + o.id + '"]')));
                            });
                    },
                    write: function (t) {
                        var e = t.active;
                        this.links.forEach(function (t) {
                            return t.blur();
                        }),
                            ge(this.elements, this.cls),
                            e &&
                            Yt(this.$el, "active", [
                                e,
                                me(this.closest ? Nt(e, this.closest) : e, this.cls),
                            ]);
                    },
                    events: ["scroll", "load", "resize"],
                },
            ],
        });
    }
    function _n(t) {
        function e(t, e) {
            var i = e.$props,
                n = e.$el,
                o = e[t + "Offset"],
                r = i[t];
            if (r) {
                if (A(r)) return o + B(r);
                if (S(r) && r.match(/^-?\d+vh$/)) return (Xe(ot) * B(r)) / 100;
                var s = !0 === r ? n.parentNode : bt(r, n);
                return s ? Ye(s).top + s.offsetHeight : void 0;
            }
        }
        t.component("sticky", {
            mixins: [zi],
            attrs: !0,
            props: {
                top: null,
                bottom: Boolean,
                offset: Number,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: "query",
                showOnUp: Boolean,
                media: "media",
                target: Number,
            },
            defaults: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                widthElement: !1,
                showOnUp: !1,
                media: !1,
                target: !1,
            },
            computed: {
                selTarget: function (t, e) {
                    var i = t.selTarget;
                    return (i && Le(i, e)) || e;
                },
            },
            connected: function () {
                (this.placeholder = Le('<div class="uk-sticky-placeholder"></div>')),
                    (this.widthElement = this.$props.widthElement || this.placeholder),
                    this.isActive || this.hide();
            },
            disconnected: function () {
                this.isActive &&
                    ((this.isActive = !1),
                        this.hide(),
                        ge(this.selTarget, this.clsInactive)),
                    le(this.placeholder),
                    (this.placeholder = null),
                    (this.widthElement = null);
            },
            ready: function () {
                var t = this;
                if (this.target && location.hash && ot.pageYOffset > 0) {
                    var e = Le(location.hash);
                    e &&
                        si.read(function () {
                            var i = Ye(e).top,
                                n = Ye(t.$el).top,
                                o = t.$el.offsetHeight;
                            n + o >= i &&
                                n <= i + e.offsetHeight &&
                                ot.scrollTo(0, i - o - t.target - t.offset);
                        });
                }
            },
            events: [
                {
                    name: "active",
                    self: !0,
                    handler: function () {
                        we(this.selTarget, this.clsInactive, this.clsActive);
                    },
                },
                {
                    name: "inactive",
                    self: !0,
                    handler: function () {
                        we(this.selTarget, this.clsActive, this.clsInactive);
                    },
                },
            ],
            update: [
                {
                    write: function () {
                        var t = this.placeholder,
                            i = (this.isActive ? t : this.$el).offsetHeight;
                        Ie(
                            t,
                            j(
                                { height: "absolute" !== Ie(this.$el, "position") ? i : "" },
                                Ie(this.$el, [
                                    "marginTop",
                                    "marginBottom",
                                    "marginLeft",
                                    "marginRight",
                                ])
                            )
                        ),
                            jt(t, st) || (se(this.$el, t), X(t, "hidden", "")),
                            X(this.widthElement, "hidden", null),
                            (this.width = this.widthElement.offsetWidth),
                            X(this.widthElement, "hidden", this.isActive ? null : ""),
                            (this.topOffset = Ye(this.isActive ? t : this.$el).top),
                            (this.bottomOffset = this.topOffset + i);
                        var n = e("bottom", this);
                        (this.top =
                            Math.max(B(e("top", this)), this.topOffset) - this.offset),
                            (this.bottom = n && n - i),
                            (this.inactive =
                                this.media && !ot.matchMedia(this.media).matches),
                            this.isActive && this.update();
                    },
                    events: ["load", "resize"],
                },
                {
                    read: function (t, e) {
                        var i = e.scrollY;
                        return (
                            void 0 === i && (i = ot.pageYOffset),
                            { scroll: (this.scroll = i), visible: Ht(this.$el) }
                        );
                    },
                    write: function (t, e) {
                        var i = this,
                            n = t.visible,
                            o = t.scroll;
                        void 0 === e && (e = {});
                        var r = e.dir;
                        if (!(o < 0 || !n || this.disabled || (this.showOnUp && !r)))
                            if (
                                this.inactive ||
                                o < this.top ||
                                (this.showOnUp &&
                                    (o <= this.top ||
                                        "down" === r ||
                                        ("up" === r && !this.isActive && o <= this.bottomOffset)))
                            ) {
                                if (!this.isActive) return;
                                (this.isActive = !1),
                                    this.animation && o > this.topOffset
                                        ? (We.cancel(this.$el),
                                            We.out(this.$el, this.animation).then(function () {
                                                return i.hide();
                                            }, R))
                                        : this.hide();
                            } else
                                this.isActive
                                    ? this.update()
                                    : this.animation
                                        ? (We.cancel(this.$el),
                                            this.show(),
                                            We.in(this.$el, this.animation).catch(R))
                                        : this.show();
                    },
                    events: ["scroll"],
                },
            ],
            methods: {
                show: function () {
                    (this.isActive = !0),
                        this.update(),
                        X(this.placeholder, "hidden", null);
                },
                hide: function () {
                    (this.isActive && !be(this.selTarget, this.clsActive)) ||
                        Yt(this.$el, "inactive"),
                        ge(this.$el, this.clsFixed, this.clsBelow),
                        Ie(this.$el, { position: "", top: "", width: "" }),
                        X(this.placeholder, "hidden", "");
                },
                update: function () {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset);
                    this.bottom &&
                        this.scroll > this.bottom - this.offset &&
                        (e = this.bottom - this.scroll),
                        Ie(this.$el, {
                            position: "fixed",
                            top: e + "px",
                            width: this.width,
                        }),
                        be(this.selTarget, this.clsActive)
                            ? t || Yt(this.$el, "inactive")
                            : t && Yt(this.$el, "active"),
                        ye(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
                        me(this.$el, this.clsFixed);
                },
            },
        });
    }
    var An,
        Nn,
        Dn = {};
    function Mn(t) {
        t.component("svg", {
            attrs: !0,
            props: {
                id: String,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
            },
            defaults: { ratio: 1, id: !1, exclude: ["src"], class: "" },
            init: function () {
                this.class += " uk-svg";
            },
            connected: function () {
                var t = this;
                if (!this.icon && v(this.src, "#")) {
                    var n,
                        o = this.src.split("#");
                    if (o.length > 1) (n = o), (this.src = n[0]), (this.icon = n[1]);
                }
                this.svg = this.getSvg().then(function (n) {
                    var o;
                    if (
                        (S(n)
                            ? (t.icon &&
                                v(n, "<symbol") &&
                                (n =
                                    (function (t, n) {
                                        if (!i[t]) {
                                            var o;
                                            for (i[t] = {}; (o = e.exec(t));)
                                                i[t][o[3]] =
                                                    '<svg xmlns="http://www.w3.org/2000/svg"' +
                                                    o[1] +
                                                    "svg>";
                                        }
                                        return i[t][n];
                                    })(n, t.icon) || n),
                                (o = Le(n.substr(n.indexOf("<svg")))))
                            : (o = n.cloneNode(!0)),
                            !o)
                    )
                        return K.reject("SVG not found.");
                    var r = X(o, "viewBox");
                    for (var s in (r &&
                        ((r = r.split(" ")),
                            (t.width = t.$props.width || r[2]),
                            (t.height = t.$props.height || r[3])),
                        (t.width *= t.ratio),
                        (t.height *= t.ratio),
                        t.$options.props))
                        t[s] && !v(t.exclude, s) && X(o, s, t[s]);
                    t.id || G(o, "id"),
                        t.width && !t.height && G(o, "height"),
                        t.height && !t.width && G(o, "width");
                    var a = t.$el;
                    if (Pt(a) || "CANVAS" === a.tagName) {
                        X(a, { hidden: !0, id: null });
                        var l = a.nextElementSibling;
                        l && o.isEqualNode(l) ? (o = l) : se(a, o);
                    } else {
                        var h = a.lastElementChild;
                        h && o.isEqualNode(h) ? (o = h) : oe(a, o);
                    }
                    return (t.svgEl = o), o;
                }, R);
            },
            disconnected: function () {
                var t = this;
                Pt(this.$el) && X(this.$el, { hidden: null, id: this.id || null }),
                    this.svg &&
                    this.svg.then(function (e) {
                        return (!t._connected || e !== t.svgEl) && le(e);
                    }, R),
                    (this.svg = this.svgEl = null);
            },
            methods: {
                getSvg: function () {
                    var t = this;
                    return this.src
                        ? Dn[this.src]
                            ? Dn[this.src]
                            : ((Dn[this.src] = new K(function (e, i) {
                                c(t.src, "data:")
                                    ? e(decodeURIComponent(t.src.split(",")[1]))
                                    : Zt(t.src).then(
                                        function (t) {
                                            return e(t.response);
                                        },
                                        function () {
                                            return i("SVG not found.");
                                        }
                                    );
                            })),
                                Dn[this.src])
                        : K.reject();
                },
            },
        });
        var e = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
            i = {};
    }
    function Bn(t) {
        t.component("switcher", {
            mixins: [Li],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                active: Number,
                swiping: Boolean,
            },
            defaults: {
                connect: "~.uk-switcher",
                toggle: "> *",
                active: 0,
                swiping: !0,
                cls: "uk-active",
                clsContainer: "uk-switcher",
                attrItem: "uk-switcher-item",
                queued: !0,
            },
            computed: {
                connects: function (t, e) {
                    return yt(t.connect, e);
                },
                toggles: function (t, e) {
                    return je(t.toggle, e);
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.toggle + ":not(.uk-disabled)";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.show(t.current);
                    },
                },
                {
                    name: "click",
                    el: function () {
                        return this.connects;
                    },
                    delegate: function () {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.show(Q(t.current, this.attrItem));
                    },
                },
                {
                    name: "swipeRight swipeLeft",
                    filter: function () {
                        return this.swiping;
                    },
                    el: function () {
                        return this.connects;
                    },
                    handler: function (t) {
                        Ti(t) &&
                            (t.preventDefault(),
                                ot.getSelection().toString() ||
                                this.show("swipeLeft" === t.type ? "next" : "previous"));
                    },
                },
            ],
            update: function () {
                var t = this;
                this.connects.forEach(function (e) {
                    return t.updateAria(e.children);
                }),
                    this.show(
                        Lt(this.toggles, "." + this.cls)[0] ||
                        this.toggles[this.active] ||
                        this.toggles[0]
                    );
            },
            methods: {
                show: function (t) {
                    for (
                        var e,
                        i = this,
                        n = this.toggles.length,
                        o =
                            !!this.connects.length &&
                            te(Lt(this.connects[0].children, "." + this.cls)[0]),
                        r = o >= 0,
                        s = "previous" === t ? -1 : 1,
                        a = ee(t, this.toggles, o),
                        l = 0;
                        l < n;
                        l++, a = (a + s + n) % n
                    )
                        if (!_t(i.toggles[a], ".uk-disabled, [disabled]")) {
                            e = i.toggles[a];
                            break;
                        }
                    !e ||
                        (o >= 0 && be(e, this.cls)) ||
                        o === a ||
                        (ge(this.toggles, this.cls),
                            X(this.toggles, "aria-expanded", !1),
                            me(e, this.cls),
                            X(e, "aria-expanded", !0),
                            this.connects.forEach(function (t) {
                                r
                                    ? i.toggleElement([t.children[o], t.children[a]])
                                    : i.toggleNow(t.children[a]);
                            }));
                },
            },
        });
    }
    function On(t) {
        t.component(
            "tab",
            t.components.switcher.extend({
                mixins: [zi],
                name: "tab",
                props: { media: "media" },
                defaults: { media: 960, attrItem: "uk-tab-item" },
                init: function () {
                    var e = be(this.$el, "uk-tab-left")
                        ? "uk-tab-left"
                        : !!be(this.$el, "uk-tab-right") && "uk-tab-right";
                    e && t.toggle(this.$el, { cls: e, mode: "media", media: this.media });
                },
            })
        );
    }
    function Pn(t) {
        t.component("toggle", {
            mixins: [t.mixin.togglable],
            args: "target",
            props: { href: String, target: null, mode: "list", media: "media" },
            defaults: { href: !1, target: !1, mode: "click", queued: !0, media: !1 },
            computed: {
                target: function (t, e) {
                    var i = t.href,
                        n = t.target;
                    return (n = yt(n || i, e)), (n.length && n) || [e];
                },
            },
            events: [
                {
                    name: mt + " " + gt,
                    filter: function () {
                        return v(this.mode, "hover");
                    },
                    handler: function (t) {
                        Ti(t) || this.toggle("toggle" + (t.type === mt ? "show" : "hide"));
                    },
                },
                {
                    name: "click",
                    filter: function () {
                        return v(this.mode, "click") || ct;
                    },
                    handler: function (t) {
                        var e;
                        (Ti(t) || v(this.mode, "click")) &&
                            ((Nt(t.target, 'a[href="#"], button') ||
                                ((e = Nt(t.target, "a[href]")) &&
                                    (this.cls ||
                                        !Ht(this.target) ||
                                        (e.hash && _t(this.target, e.hash))))) &&
                                Rt(rt, "click", function (t) {
                                    return t.preventDefault();
                                }),
                                this.toggle());
                    },
                },
            ],
            update: {
                write: function () {
                    if (v(this.mode, "media") && this.media) {
                        var t = this.isToggled(this.target);
                        (ot.matchMedia(this.media).matches ? !t : t) && this.toggle();
                    }
                },
                events: ["load", "resize"],
            },
            methods: {
                toggle: function (t) {
                    Yt(this.target, t || "toggle", [this]) &&
                        this.toggleElement(this.target);
                },
            },
        });
    }
    function Hn(t) {
        t.component("video", {
            props: { automute: Boolean, autoplay: Boolean },
            defaults: { automute: !1, autoplay: !0 },
            computed: {
                inView: function (t) {
                    return "inview" === t.autoplay;
                },
            },
            ready: function () {
                (this.player = new gi(this.$el)), this.automute && this.player.mute();
            },
            update: [
                {
                    read: function (t, e) {
                        var i = e.type;
                        return (
                            !(
                                !this.player ||
                                !(("scroll" !== i && "resize" !== i) || this.inView)
                            ) && {
                                visible:
                                    Ht(this.$el) && "hidden" !== Ie(this.$el, "visibility"),
                                inView: this.inView && ii(this.$el),
                            }
                        );
                    },
                    write: function (t) {
                        var e = t.visible,
                            i = t.inView;
                        !e || (this.inView && !i)
                            ? this.player.pause()
                            : (!0 === this.autoplay || (this.inView && i)) &&
                            this.player.play();
                    },
                    events: ["load", "resize", "scroll"],
                },
            ],
        });
    }
    function zn(t, e) {
        return (
            void 0 === t && (t = 0),
            void 0 === e && (e = "%"),
            "translateX(" + t + (t ? e : "") + ")"
        );
    }
    function Wn(t) {
        return "scale3d(" + t + ", " + t + ", 1)";
    }
    function Ln(t) {
        if (!Ln.installed) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a,
                l,
                h,
                u,
                c,
                d,
                f,
                p,
                m,
                g,
                v,
                w,
                b,
                y,
                x,
                k,
                $,
                I,
                T,
                C,
                E,
                S = t.util,
                _ = S.$,
                A = S.assign,
                N = S.clamp,
                D = S.fastdom,
                M = S.getIndex,
                B = S.hasClass,
                O = S.isNumber,
                P = S.isRtl,
                H = S.Promise,
                z = S.toNodes,
                W = S.trigger;
            t.mixin.slider = {
                attrs: !0,
                mixins: [
                    ((I = t),
                        (T = I.util),
                        (C = T.doc),
                        (E = T.pointerDown),
                    {
                        props: {
                            autoplay: Boolean,
                            autoplayInterval: Number,
                            pauseOnHover: Boolean,
                        },
                        defaults: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
                        connected: function () {
                            this.startAutoplay();
                        },
                        disconnected: function () {
                            this.stopAutoplay();
                        },
                        events: [
                            {
                                name: "visibilitychange",
                                el: C,
                                handler: function () {
                                    C.hidden ? this.stopAutoplay() : this.startAutoplay();
                                },
                            },
                            { name: E, handler: "stopAutoplay" },
                            {
                                name: "mouseenter",
                                filter: function () {
                                    return this.autoplay;
                                },
                                handler: function () {
                                    this.isHovering = !0;
                                },
                            },
                            {
                                name: "mouseleave",
                                filter: function () {
                                    return this.autoplay;
                                },
                                handler: function () {
                                    this.isHovering = !1;
                                },
                            },
                        ],
                        methods: {
                            startAutoplay: function () {
                                var t = this;
                                this.stopAutoplay(),
                                    this.autoplay &&
                                    (this.interval = setInterval(function () {
                                        return (
                                            !(t.isHovering && t.pauseOnHover) &&
                                            !t.stack.length &&
                                            t.show("next")
                                        );
                                    }, this.autoplayInterval));
                            },
                            stopAutoplay: function () {
                                this.interval && clearInterval(this.interval);
                            },
                        },
                    }),
                    ((h = t),
                        (u = h.util),
                        (c = u.doc),
                        (d = u.getPos),
                        (f = u.includes),
                        (p = u.isRtl),
                        (m = u.isTouch),
                        (g = u.off),
                        (v = u.on),
                        (w = u.pointerDown),
                        (b = u.pointerMove),
                        (y = u.pointerUp),
                        (x = u.preventClick),
                        (k = u.trigger),
                        ($ = u.win),
                    {
                        defaults: { threshold: 10, preventCatch: !1 },
                        init: function () {
                            var t = this;
                            ["start", "move", "end"].forEach(function (e) {
                                var i = t[e];
                                t[e] = function (e) {
                                    var n = d(e).x * (p ? -1 : 1);
                                    (t.prevPos = n !== t.pos ? t.pos : t.prevPos),
                                        (t.pos = n),
                                        i(e);
                                };
                            });
                        },
                        events: [
                            {
                                name: w,
                                delegate: function () {
                                    return this.slidesSelector;
                                },
                                handler: function (t) {
                                    var e;
                                    (!m(t) &&
                                        !(e = t.target).children.length &&
                                        e.childNodes.length) ||
                                        t.button > 0 ||
                                        this.length < 2 ||
                                        this.preventCatch ||
                                        this.start(t);
                                },
                            },
                            {
                                name: "dragstart",
                                handler: function (t) {
                                    t.preventDefault();
                                },
                            },
                        ],
                        methods: {
                            start: function () {
                                (this.drag = this.pos),
                                    this._transitioner
                                        ? ((this.percent = this._transitioner.percent()),
                                            (this.drag +=
                                                this._transitioner.getDistance() *
                                                this.percent *
                                                this.dir),
                                            this._transitioner.translate(this.percent),
                                            this._transitioner.cancel(),
                                            (this.dragging = !0),
                                            (this.stack = []))
                                        : (this.prevIndex = this.index),
                                    (this.unbindMove = v(c, b, this.move, {
                                        capture: !0,
                                        passive: !1,
                                    })),
                                    v($, "scroll", this.unbindMove),
                                    v(c, y, this.end, !0);
                            },
                            move: function (t) {
                                var e = this,
                                    i = this.pos - this.drag;
                                if (
                                    !(
                                        0 === i ||
                                        this.prevPos === this.pos ||
                                        (!this.dragging && Math.abs(i) < this.threshold)
                                    )
                                ) {
                                    t.cancelable && t.preventDefault(),
                                        (this.dragging = !0),
                                        (this.dir = i < 0 ? 1 : -1);
                                    for (
                                        var n = this.slides,
                                        o = this.prevIndex,
                                        r = Math.abs(i),
                                        s = this.getIndex(o + this.dir, o),
                                        a = this._getDistance(o, s) || n[o].offsetWidth;
                                        s !== o && r > a;

                                    )
                                        (e.drag -= a * e.dir),
                                            (o = s),
                                            (r -= a),
                                            (s = e.getIndex(o + e.dir, o)),
                                            (a = e._getDistance(o, s) || n[o].offsetWidth);
                                    this.percent = r / a;
                                    var l,
                                        h = n[o],
                                        u = n[s],
                                        c = this.index !== s,
                                        d = o === s;
                                    [this.index, this.prevIndex]
                                        .filter(function (t) {
                                            return !f([s, o], t);
                                        })
                                        .forEach(function (t) {
                                            k(n[t], "itemhidden", [e]),
                                                (l = !0),
                                                d && (e.prevIndex = o);
                                        }),
                                        ((this.index === o && this.prevIndex !== o) || (l && d)) &&
                                        k(n[this.index], "itemshown", [this]),
                                        c &&
                                        ((this.prevIndex = o),
                                            (this.index = s),
                                            !d && k(h, "beforeitemhide", [this]),
                                            k(u, "beforeitemshow", [this])),
                                        (l || this.length < 3) &&
                                        this._transitioner &&
                                        this._transitioner.reset(),
                                        (this._transitioner = this._translate(
                                            Math.abs(this.percent),
                                            h,
                                            !d && u
                                        )),
                                        c &&
                                        (!d && k(h, "itemhide", [this]),
                                            k(u, "itemshow", [this]));
                                }
                            },
                            end: function () {
                                if (
                                    (g($, "scroll", this.unbindMove),
                                        this.unbindMove(),
                                        g(c, y, this.end, !0),
                                        this.dragging)
                                ) {
                                    if (((this.dragging = null), this.index === this.prevIndex))
                                        (this.percent = 1 - this.percent),
                                            (this.dir *= -1),
                                            this._show(!1, this.index, !0),
                                            (this._transitioner = null);
                                    else {
                                        var t =
                                            (p ? this.dir * (p ? 1 : -1) : this.dir) < 0 ==
                                            this.prevPos > this.pos;
                                        (this.index = t ? this.index : this.prevIndex),
                                            t && (this.percent = 1 - this.percent),
                                            this.show(
                                                (this.dir > 0 && !t) || (this.dir < 0 && t)
                                                    ? "next"
                                                    : "previous",
                                                !0
                                            );
                                    }
                                    x();
                                }
                                this.drag = this.percent = null;
                            },
                        },
                    }),
                    ((e = t),
                        (i = e.util),
                        (n = i.$),
                        (o = i.$$),
                        (r = i.data),
                        (s = i.html),
                        (a = i.toggleClass),
                        (l = i.toNumber),
                    {
                        defaults: { selNav: !1 },
                        computed: {
                            nav: function (t, e) {
                                var i = t.selNav;
                                return n(i, e);
                            },
                            navItemSelector: function (t) {
                                var e = t.attrItem;
                                return "[" + e + "],[data-" + e + "]";
                            },
                            navItems: function (t, e) {
                                return o(this.navItemSelector, e);
                            },
                        },
                        update: [
                            {
                                write: function () {
                                    var t = this;
                                    this.nav &&
                                        this.length !== this.nav.children.length &&
                                        s(
                                            this.nav,
                                            this.slides
                                                .map(function (e, i) {
                                                    return (
                                                        "<li " +
                                                        t.attrItem +
                                                        '="' +
                                                        i +
                                                        '"><a href="#"></a></li>'
                                                    );
                                                })
                                                .join("")
                                        ),
                                        a(
                                            o(this.navItemSelector, this.$el).concat(this.nav),
                                            "uk-hidden",
                                            !this.maxIndex
                                        ),
                                        this.updateNav();
                                },
                                events: ["load", "resize"],
                            },
                        ],
                        events: [
                            {
                                name: "click",
                                delegate: function () {
                                    return this.navItemSelector;
                                },
                                handler: function (t) {
                                    t.preventDefault(),
                                        t.current.blur(),
                                        this.show(r(t.current, this.attrItem));
                                },
                            },
                            { name: "itemshow", handler: "updateNav" },
                        ],
                        methods: {
                            updateNav: function () {
                                var t = this,
                                    e = this.getValidIndex();
                                this.navItems.forEach(function (i) {
                                    var n = r(i, t.attrItem);
                                    a(i, t.clsActive, l(n) === e),
                                        a(
                                            i,
                                            "uk-invisible",
                                            t.finite &&
                                            (("previous" === n && 0 === e) ||
                                                ("next" === n && e >= t.maxIndex))
                                        );
                                });
                            },
                        },
                    }),
                ],
                props: {
                    clsActivated: Boolean,
                    easing: String,
                    index: Number,
                    finite: Boolean,
                    velocity: Number,
                },
                defaults: {
                    easing: "ease",
                    finite: !1,
                    velocity: 1,
                    index: 0,
                    stack: [],
                    percent: 0,
                    clsActive: "uk-active",
                    clsActivated: !1,
                    Transitioner: !1,
                    transitionOptions: {},
                },
                computed: {
                    duration: function (t, e) {
                        var i = t.velocity;
                        return jn(e.offsetWidth / i);
                    },
                    length: function () {
                        return this.slides.length;
                    },
                    list: function (t, e) {
                        var i = t.selList;
                        return _(i, e);
                    },
                    maxIndex: function () {
                        return this.length - 1;
                    },
                    slidesSelector: function (t) {
                        return t.selList + " > *";
                    },
                    slides: function () {
                        return z(this.list.children);
                    },
                },
                methods: {
                    show: function (t, e) {
                        var i = this;
                        if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
                            var n = this.stack,
                                o = e ? 0 : n.length,
                                r = function () {
                                    n.splice(o, 1), n.length && i.show(n.shift(), !0);
                                };
                            if ((n[e ? "unshift" : "push"](t), !e && n.length > 1))
                                2 === n.length &&
                                    this._transitioner.forward(Math.min(this.duration, 200));
                            else {
                                var s = this.index,
                                    a = B(this.slides, this.clsActive) && this.slides[s],
                                    l = this.getIndex(t, this.index),
                                    h = this.slides[l];
                                if (a !== h) {
                                    var u;
                                    if (
                                        ((this.dir =
                                            "next" === (u = t)
                                                ? 1
                                                : "previous" === u
                                                    ? -1
                                                    : u < s
                                                        ? -1
                                                        : 1),
                                            (this.prevIndex = s),
                                            (this.index = l),
                                            a && W(a, "beforeitemhide", [this]),
                                            !W(h, "beforeitemshow", [this, a]))
                                    )
                                        return (this.index = this.prevIndex), void r();
                                    var c = this._show(a, h, e).then(function () {
                                        return (
                                            a && W(a, "itemhidden", [i]),
                                            W(h, "itemshown", [i]),
                                            new H(function (t) {
                                                D.write(function () {
                                                    n.shift(),
                                                        n.length
                                                            ? i.show(n.shift(), !0)
                                                            : (i._transitioner = null),
                                                        t();
                                                });
                                            })
                                        );
                                    });
                                    return (
                                        a && W(a, "itemhide", [this]), W(h, "itemshow", [this]), c
                                    );
                                }
                                r();
                            }
                        }
                    },
                    getIndex: function (t, e) {
                        return (
                            void 0 === t && (t = this.index),
                            void 0 === e && (e = this.index),
                            N(M(t, this.slides, e, this.finite), 0, this.maxIndex)
                        );
                    },
                    getValidIndex: function (t, e) {
                        return (
                            void 0 === t && (t = this.index),
                            void 0 === e && (e = this.prevIndex),
                            this.getIndex(t, e)
                        );
                    },
                    _show: function (t, e, i) {
                        if (
                            ((this._transitioner = this._getTransitioner(
                                t,
                                e,
                                this.dir,
                                A(
                                    {
                                        easing: i
                                            ? e.offsetWidth < 600
                                                ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                                : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                                            : this.easing,
                                    },
                                    this.transitionOptions
                                )
                            )),
                                !i && !t)
                        )
                            return this._transitioner.translate(1), H.resolve();
                        var n = this.stack.length;
                        return this._transitioner[n > 1 ? "forward" : "show"](
                            n > 1
                                ? Math.min(this.duration, 75 + 75 / (n - 1))
                                : this.duration,
                            this.percent
                        );
                    },
                    _getDistance: function (t, e) {
                        return new this._getTransitioner(t, t !== e && e).getDistance();
                    },
                    _translate: function (t, e, i) {
                        void 0 === e && (e = this.prevIndex),
                            void 0 === i && (i = this.index);
                        var n = this._getTransitioner(e !== i && e, i);
                        return n.translate(t), n;
                    },
                    _getTransitioner: function (t, e, i, n) {
                        return (
                            void 0 === t && (t = this.prevIndex),
                            void 0 === e && (e = this.index),
                            void 0 === i && (i = this.dir || 1),
                            void 0 === n && (n = this.transitionOptions),
                            new this.Transitioner(
                                O(t) ? this.slides[t] : t,
                                O(e) ? this.slides[e] : e,
                                i * (P ? -1 : 1),
                                n
                            )
                        );
                    },
                },
            };
        }
    }
    function jn(t) {
        return 0.5 * t + 300;
    }
    function Fn(t) {
        if (!Fn.installed) {
            t.use(Ln);
            var e,
                i,
                n = t.mixin,
                o = t.util,
                r = o.addClass,
                s = o.assign,
                a = o.fastdom,
                l = o.isNumber,
                h = o.removeClass,
                u =
                    ((e = t.util.css),
                        (i = {
                            slide: {
                                show: function (t) {
                                    return [{ transform: zn(-100 * t) }, { transform: zn() }];
                                },
                                percent: function (t) {
                                    return i.translated(t);
                                },
                                translate: function (t, e) {
                                    return [
                                        { transform: zn(-100 * e * t) },
                                        { transform: zn(100 * e * (1 - t)) },
                                    ];
                                },
                            },
                            translated: function (t) {
                                return (
                                    Math.abs(e(t, "transform").split(",")[4] / t.offsetWidth) || 0
                                );
                            },
                        })),
                c = (function (t) {
                    var e = t.util,
                        i = e.createEvent,
                        n = e.clamp,
                        o = e.css,
                        r = e.Deferred,
                        s = e.noop,
                        a = e.Promise,
                        l = e.Transition,
                        h = e.trigger;
                    function u(t, e, n) {
                        h(t, i(e, !1, !1, n));
                    }
                    return function (t, e, i, h) {
                        var c = h.animation,
                            d = h.easing,
                            f = c.percent,
                            p = c.translate,
                            m = c.show;
                        void 0 === m && (m = s);
                        var g = m(i),
                            v = new r();
                        return {
                            dir: i,
                            show: function (o, r, h) {
                                var c = this;
                                void 0 === r && (r = 0);
                                var f = h ? "linear" : d;
                                return (
                                    (o -= Math.round(o * n(r, -1, 1))),
                                    this.translate(r),
                                    u(e, "itemin", {
                                        percent: r,
                                        duration: o,
                                        timing: f,
                                        dir: i,
                                    }),
                                    u(t, "itemout", {
                                        percent: 1 - r,
                                        duration: o,
                                        timing: f,
                                        dir: i,
                                    }),
                                    a
                                        .all([l.start(e, g[1], o, f), l.start(t, g[0], o, f)])
                                        .then(function () {
                                            c.reset(), v.resolve();
                                        }, s),
                                    v.promise
                                );
                            },
                            stop: function () {
                                return l.stop([e, t]);
                            },
                            cancel: function () {
                                l.cancel([e, t]);
                            },
                            reset: function () {
                                for (var i in g[0]) o([e, t], i, "");
                            },
                            forward: function (i, n) {
                                return (
                                    void 0 === n && (n = this.percent()),
                                    l.cancel([e, t]),
                                    this.show(i, n, !0)
                                );
                            },
                            translate: function (n) {
                                var r = p(n, i);
                                o(e, r[1]),
                                    o(t, r[0]),
                                    u(e, "itemtranslatein", { percent: n, dir: i }),
                                    u(t, "itemtranslateout", { percent: 1 - n, dir: i });
                            },
                            percent: function () {
                                return f(t || e, e, i);
                            },
                            getDistance: function () {
                                return t.offsetWidth;
                            },
                        };
                    };
                })(t);
            t.mixin.slideshow = {
                mixins: [n.slider],
                props: { animation: String },
                defaults: {
                    animation: "slide",
                    clsActivated: "uk-transition-active",
                    Animations: u,
                    Transitioner: c,
                },
                computed: {
                    animation: function (t) {
                        var e = t.animation,
                            i = t.Animations;
                        return s(e in i ? i[e] : i.slide, { name: e });
                    },
                    transitionOptions: function () {
                        return { animation: this.animation };
                    },
                },
                events: {
                    "itemshow itemhide itemshown itemhidden": function (e) {
                        var i = e.target;
                        t.update(null, i);
                    },
                    itemshow: function () {
                        l(this.prevIndex) && a.flush();
                    },
                    beforeitemshow: function (t) {
                        var e = t.target;
                        r(e, this.clsActive);
                    },
                    itemshown: function (t) {
                        var e = t.target;
                        r(e, this.clsActivated);
                    },
                    itemhidden: function (t) {
                        var e = t.target;
                        h(e, this.clsActive, this.clsActivated);
                    },
                },
            };
        }
    }
    function Vn(t) {
        if (!Vn.installed) {
            t.use(Fn);
            var e,
                i,
                n,
                o,
                r,
                s = t.mixin,
                a = t.util,
                l = a.$,
                h = a.addClass,
                u = a.ajax,
                c = a.append,
                d = a.assign,
                f = a.attr,
                p = a.css,
                m = a.doc,
                g = a.getImage,
                v = a.html,
                w = a.index,
                b = a.on,
                y = a.pointerDown,
                x = a.pointerMove,
                k = a.removeClass,
                $ = a.Transition,
                I = a.trigger,
                T =
                    ((i = (e = t).mixin),
                        (n = e.util),
                        (o = n.assign),
                        (r = n.css),
                        o({}, i.slideshow.defaults.Animations, {
                            fade: {
                                show: function () {
                                    return [{ opacity: 0 }, { opacity: 1 }];
                                },
                                percent: function (t) {
                                    return 1 - r(t, "opacity");
                                },
                                translate: function (t) {
                                    return [{ opacity: 1 - t }, { opacity: t }];
                                },
                            },
                            scale: {
                                show: function () {
                                    return [
                                        { opacity: 0, transform: Wn(0.8) },
                                        { opacity: 1, transform: Wn(1) },
                                    ];
                                },
                                percent: function (t) {
                                    return 1 - r(t, "opacity");
                                },
                                translate: function (t) {
                                    return [
                                        { opacity: 1 - t, transform: Wn(1 - 0.2 * t) },
                                        { opacity: t, transform: Wn(0.8 + 0.2 * t) },
                                    ];
                                },
                            },
                        }));
            t.component("lightbox-panel", {
                mixins: [s.container, s.modal, s.togglable, s.slideshow],
                functional: !0,
                defaults: {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: T,
                    template:
                        '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
                },
                created: function () {
                    var t = this;
                    this.$mount(c(this.container, this.template)),
                        (this.caption = l(".uk-lightbox-caption", this.$el)),
                        this.items.forEach(function () {
                            return c(t.list, "<li></li>");
                        });
                },
                events: [
                    { name: x + " " + y + " keydown", handler: "showControls" },
                    {
                        name: "click",
                        self: !0,
                        delegate: function () {
                            return this.slidesSelector;
                        },
                        handler: function (t) {
                            t.preventDefault(), this.hide();
                        },
                    },
                    { name: "shown", self: !0, handler: "showControls" },
                    {
                        name: "hide",
                        self: !0,
                        handler: function () {
                            this.hideControls(),
                                k(this.slides, this.clsActive),
                                $.stop(this.slides);
                        },
                    },
                    {
                        name: "keyup",
                        el: function () {
                            return m;
                        },
                        handler: function (t) {
                            if (this.isToggled(this.$el))
                                switch (t.keyCode) {
                                    case 37:
                                        this.show("previous");
                                        break;
                                    case 39:
                                        this.show("next");
                                }
                        },
                    },
                    {
                        name: "beforeitemshow",
                        handler: function (t) {
                            this.isToggled() ||
                                ((this.preventCatch = !0),
                                    t.preventDefault(),
                                    this.toggleNow(this.$el, !0),
                                    (this.animation = T.scale),
                                    k(t.target, this.clsActive),
                                    this.stack.splice(1, 0, this.index));
                        },
                    },
                    {
                        name: "itemshow",
                        handler: function (t) {
                            var e = t.target,
                                i = w(e),
                                n = this.getItem(i).caption;
                            p(this.caption, "display", n ? "" : "none"), v(this.caption, n);
                            for (var o = 0; o <= this.preload; o++)
                                this.loadItem(this.getIndex(i + o)),
                                    this.loadItem(this.getIndex(i - o));
                        },
                    },
                    {
                        name: "itemshown",
                        handler: function () {
                            this.preventCatch = !1;
                        },
                    },
                    {
                        name: "itemload",
                        handler: function (t, e) {
                            var i,
                                n = this,
                                o = e.source,
                                r = e.type,
                                s = e.alt;
                            if ((this.setItem(e, "<span uk-spinner></span>"), o))
                                if ("image" === r || o.match(/\.(jp(e)?g|png|gif|svg)$/i))
                                    g(o).then(
                                        function (t) {
                                            return n.setItem(
                                                e,
                                                '<img width="' +
                                                t.width +
                                                '" height="' +
                                                t.height +
                                                '" src="' +
                                                o +
                                                '" alt="' +
                                                (s || "") +
                                                '">'
                                            );
                                        },
                                        function () {
                                            return n.setError(e);
                                        }
                                    );
                                else if ("video" === r || o.match(/\.(mp4|webm|ogv)$/i)) {
                                    var a = l(
                                        "<video controls playsinline" +
                                        (e.poster ? ' poster="' + e.poster + '"' : "") +
                                        ' uk-video="autoplay: ' +
                                        this.videoAutoplay +
                                        '"></video>'
                                    );
                                    f(a, "src", o),
                                        b(a, "error", function () {
                                            return n.setError(e);
                                        }),
                                        b(a, "loadedmetadata", function () {
                                            f(a, { width: a.videoWidth, height: a.videoHeight }),
                                                n.setItem(e, a);
                                        });
                                } else if ("iframe" === r)
                                    this.setItem(
                                        e,
                                        '<iframe class="uk-lightbox-iframe" src="' +
                                        o +
                                        '" frameborder="0" allowfullscreen></iframe>'
                                    );
                                else if (
                                    (i =
                                        o.match(
                                            /\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/
                                        ) || o.match(/()youtu\.be\/(.*)/))
                                ) {
                                    var h = i[2],
                                        c = function (t, o) {
                                            return (
                                                void 0 === t && (t = 640),
                                                void 0 === o && (o = 450),
                                                n.setItem(
                                                    e,
                                                    C(
                                                        "//www.youtube" + (i[1] || "") + ".com/embed/" + h,
                                                        t,
                                                        o,
                                                        n.videoAutoplay
                                                    )
                                                )
                                            );
                                        };
                                    g("//img.youtube.com/vi/" + h + "/maxresdefault.jpg").then(
                                        function (t) {
                                            var e = t.width,
                                                i = t.height;
                                            120 === e && 90 === i
                                                ? g("//img.youtube.com/vi/" + h + "/0.jpg").then(
                                                    function (t) {
                                                        var e = t.width,
                                                            i = t.height;
                                                        return c(e, i);
                                                    },
                                                    c
                                                )
                                                : c(e, i);
                                        },
                                        c
                                    );
                                } else
                                    (i = o.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) &&
                                        u(
                                            "//vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                                            encodeURI(o),
                                            { responseType: "json" }
                                        ).then(function (t) {
                                            var o = t.response,
                                                r = o.height,
                                                s = o.width;
                                            return n.setItem(
                                                e,
                                                C(
                                                    "//player.vimeo.com/video/" + i[2],
                                                    s,
                                                    r,
                                                    n.videoAutoplay
                                                )
                                            );
                                        });
                        },
                    },
                ],
                methods: {
                    loadItem: function (t) {
                        void 0 === t && (t = this.index);
                        var e = this.getItem(t);
                        e.content || I(this.$el, "itemload", [e]);
                    },
                    getItem: function (t) {
                        return void 0 === t && (t = this.index), this.items[t] || {};
                    },
                    setItem: function (e, i) {
                        d(e, { content: i });
                        var n = v(this.slides[this.items.indexOf(e)], i);
                        I(this.$el, "itemloaded", [this, n]), t.update(null, n);
                    },
                    setError: function (t) {
                        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
                    },
                    showControls: function () {
                        clearTimeout(this.controlsTimer),
                            (this.controlsTimer = setTimeout(
                                this.hideControls,
                                this.delayControls
                            )),
                            h(this.$el, "uk-active", "uk-transition-active");
                    },
                    hideControls: function () {
                        k(this.$el, "uk-active", "uk-transition-active");
                    },
                },
            });
        }
        function C(t, e, i, n) {
            return (
                '<iframe src="' +
                t +
                '" width="' +
                e +
                '" height="' +
                i +
                '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' +
                n +
                '" uk-responsive></iframe>'
            );
        }
    }
    function Rn(t) {
        if (!Rn.installed) {
            var e = t.mixin,
                i = t.util,
                n = i.css,
                o = i.Dimensions,
                r = i.each,
                s = i.getImage,
                a = i.includes,
                l = i.isNumber,
                h = i.isUndefined,
                u = i.toFloat,
                c = i.win,
                d = [
                    "x",
                    "y",
                    "bgx",
                    "bgy",
                    "rotate",
                    "scale",
                    "color",
                    "backgroundColor",
                    "borderColor",
                    "opacity",
                    "blur",
                    "hue",
                    "grayscale",
                    "invert",
                    "saturate",
                    "sepia",
                    "fopacity",
                ];
            e.parallax = {
                props: d.reduce(
                    function (t, e) {
                        return (t[e] = "list"), t;
                    },
                    { media: "media" }
                ),
                defaults: d.reduce(
                    function (t, e) {
                        return (t[e] = void 0), t;
                    },
                    { media: !1 }
                ),
                computed: {
                    props: function (t, e) {
                        var i = this;
                        return d.reduce(function (o, r) {
                            if (h(t[r])) return o;
                            var s,
                                l,
                                c,
                                d = r.match(/color/i),
                                f = d || "opacity" === r,
                                p = t[r].slice(0);
                            f && n(e, r, ""),
                                p.length < 2 &&
                                p.unshift(("scale" === r ? 1 : f ? n(e, r) : 0) || 0);
                            var m = a(p.join(""), "%") ? "%" : "px";
                            if (d) {
                                var g = e.style.color;
                                (p = p.map(function (t) {
                                    return n(n(e, "color", t), "color")
                                        .split(/[(),]/g)
                                        .slice(1, -1)
                                        .concat(1)
                                        .slice(0, 4)
                                        .map(function (t) {
                                            return u(t);
                                        });
                                })),
                                    (e.style.color = g);
                            } else p = p.map(u);
                            if (r.match(/^bg/))
                                if (
                                    (n(e, "background-position-" + r[2], ""),
                                        (l = n(e, "backgroundPosition").split(" ")[
                                            "x" === r[2] ? 0 : 1
                                        ]),
                                        i.covers)
                                ) {
                                    var v = Math.min.apply(Math, p),
                                        w = Math.max.apply(Math, p),
                                        b = p.indexOf(v) < p.indexOf(w);
                                    (c = w - v),
                                        (p = p.map(function (t) {
                                            return t - (b ? v : w);
                                        })),
                                        (s = (b ? -c : 0) + "px");
                                } else s = l;
                            return (
                                (o[r] = { steps: p, unit: m, pos: s, bgPos: l, diff: c }), o
                            );
                        }, {});
                    },
                    bgProps: function () {
                        var t = this;
                        return ["bgx", "bgy"].filter(function (e) {
                            return e in t.props;
                        });
                    },
                    covers: function (t, e) {
                        return (
                            "cover" ===
                            n(
                                "" !== e.style.backgroundSize ? n(e, "backgroundSize", "") : e,
                                "backgroundSize"
                            )
                        );
                    },
                },
                disconnected: function () {
                    delete this._image;
                },
                update: [
                    {
                        read: function (t) {
                            var e = this;
                            if (
                                ((t.active = !this.media || c.matchMedia(this.media).matches),
                                    t.image &&
                                    (t.image.dimEl = {
                                        width: this.$el.offsetWidth,
                                        height: this.$el.offsetHeight,
                                    }),
                                    !("image" in t) && this.covers && this.bgProps.length)
                            ) {
                                var i = n(this.$el, "backgroundImage").replace(
                                    /^none|url\(["']?(.+?)["']?\)$/,
                                    "$1"
                                );
                                i &&
                                    ((t.image = !1),
                                        s(i).then(function (i) {
                                            (t.image = {
                                                width: i.naturalWidth,
                                                height: i.naturalHeight,
                                            }),
                                                e.$emit();
                                        }));
                            }
                        },
                        write: function (t) {
                            var e = this,
                                i = t.image,
                                r = t.active;
                            if (i)
                                if (r) {
                                    var s = i.dimEl,
                                        a = o.cover(i, s);
                                    this.bgProps.forEach(function (t) {
                                        var n = e.props[t],
                                            r = n.diff,
                                            l = n.bgPos,
                                            h = n.steps,
                                            u = "bgy" === t ? "height" : "width",
                                            c = a[u] - s[u];
                                        if (l.match(/%$|0px/)) {
                                            if (c < r) s[u] = a[u] + r - c;
                                            else if (c > r) {
                                                var d = parseFloat(l);
                                                d &&
                                                    (e.props[t].steps = h.map(function (t) {
                                                        return t - (c - r) / (100 / d);
                                                    }));
                                            }
                                            a = o.cover(i, s);
                                        }
                                    }),
                                        n(this.$el, {
                                            backgroundSize: a.width + "px " + a.height + "px",
                                            backgroundRepeat: "no-repeat",
                                        });
                                } else
                                    n(this.$el, { backgroundSize: "", backgroundRepeat: "" });
                        },
                        events: ["load", "resize"],
                    },
                ],
                methods: {
                    reset: function () {
                        var t = this;
                        r(this.getCss(0), function (e, i) {
                            return n(t.$el, i, "");
                        });
                    },
                    getCss: function (t) {
                        var e = this.props,
                            i = !1;
                        return Object.keys(e).reduce(
                            function (n, o) {
                                var r = e[o],
                                    s = r.steps,
                                    a = r.unit,
                                    l = r.pos,
                                    h = p(s, t);
                                switch (o) {
                                    case "x":
                                    case "y":
                                        if (i) break;
                                        var c = ["x", "y"].map(function (i) {
                                            return o === i
                                                ? h + a
                                                : e[i]
                                                    ? p(e[i].steps, t) + e[i].unit
                                                    : 0;
                                        }),
                                            d = c[0],
                                            m = c[1];
                                        i = n.transform += " translate3d(" + d + ", " + m + ", 0)";
                                        break;
                                    case "rotate":
                                        n.transform += " rotate(" + h + "deg)";
                                        break;
                                    case "scale":
                                        n.transform += " scale(" + h + ")";
                                        break;
                                    case "bgy":
                                    case "bgx":
                                        n["background-position-" + o[2]] =
                                            "calc(" + l + " + " + (h + a) + ")";
                                        break;
                                    case "color":
                                    case "backgroundColor":
                                    case "borderColor":
                                        var g = f(s, t),
                                            v = g[0],
                                            w = g[1],
                                            b = g[2];
                                        n[o] =
                                            "rgba(" +
                                            v
                                                .map(function (t, e) {
                                                    return (
                                                        (t += b * (w[e] - t)),
                                                        3 === e ? u(t) : parseInt(t, 10)
                                                    );
                                                })
                                                .join(",") +
                                            ")";
                                        break;
                                    case "blur":
                                        n.filter += " blur(" + h + "px)";
                                        break;
                                    case "hue":
                                        n.filter += " hue-rotate(" + h + "deg)";
                                        break;
                                    case "fopacity":
                                        n.filter += " opacity(" + h + "%)";
                                        break;
                                    case "grayscale":
                                    case "invert":
                                    case "saturate":
                                    case "sepia":
                                        n.filter += " " + o + "(" + h + "%)";
                                        break;
                                    default:
                                        n[o] = h;
                                }
                                return n;
                            },
                            { transform: "", filter: "" }
                        );
                    },
                },
            };
        }
        function f(t, e) {
            var i = t.length - 1,
                n = Math.min(Math.floor(i * e), i - 1),
                o = t.slice(n, n + 2);
            return o.push(1 === e ? 1 : (e % (1 / i)) * i), o;
        }
        function p(t, e) {
            var i = f(t, e),
                n = i[0],
                o = i[1],
                r = i[2];
            return (l(n) ? n + Math.abs(n - o) * r * (n < o ? 1 : -1) : +o).toFixed(
                2
            );
        }
    }
    function Yn(t) {
        var e = t.util.removeClass;
        return {
            update: [
                {
                    write: function () {
                        if (!this.stack.length && !this.dragging) {
                            var t = this.getValidIndex();
                            delete this.index,
                                e(this.slides, this.clsActive, this.clsActivated),
                                this.show(t);
                        }
                    },
                    events: ["load", "resize"],
                },
            ],
        };
    }
    function qn(t, e) {
        t.use(Rn);
        var i = t.mixin,
            n = t.util,
            o = n.closest,
            r = n.css,
            s = n.endsWith,
            a = n.noop,
            l = n.Transition;
        return {
            mixins: [i.parallax],
            computed: {
                item: function () {
                    var i = t.getComponent(o(this.$el, ".uk-" + e), e);
                    return i && o(this.$el, i.slidesSelector);
                },
            },
            events: [
                {
                    name: "itemshown",
                    self: !0,
                    el: function () {
                        return this.item;
                    },
                    handler: function () {
                        r(this.$el, this.getCss(0.5));
                    },
                },
                {
                    name: "itemin itemout",
                    self: !0,
                    el: function () {
                        return this.item;
                    },
                    handler: function (t) {
                        var e = t.type,
                            i = t.detail,
                            n = i.percent,
                            o = i.duration,
                            s = i.timing,
                            c = i.dir;
                        l.cancel(this.$el),
                            r(this.$el, this.getCss(u(e, c, n))),
                            l
                                .start(this.$el, this.getCss(h(e) ? 0.5 : c > 0 ? 1 : 0), o, s)
                                .catch(a);
                    },
                },
                {
                    name: "transitioncanceled transitionend",
                    self: !0,
                    el: function () {
                        return this.item;
                    },
                    handler: function () {
                        l.cancel(this.$el);
                    },
                },
                {
                    name: "itemtranslatein itemtranslateout",
                    self: !0,
                    el: function () {
                        return this.item;
                    },
                    handler: function (t) {
                        var e = t.type,
                            i = t.detail,
                            n = i.percent,
                            o = i.dir;
                        l.cancel(this.$el), r(this.$el, this.getCss(u(e, o, n)));
                    },
                },
            ],
        };
        function h(t) {
            return s(t, "in");
        }
        function u(t, e, i) {
            return (i /= 2), h(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
        }
    }
    return (
        (Oi.version = "3.0.0-beta.40"),
        ((An = Oi).mixin.class = zi),
        (An.mixin.container = Wi),
        (An.mixin.modal = ji),
        (An.mixin.position = Fi),
        (An.mixin.togglable = Li),
        (Nn = Oi).use(Pn),
        Nn.use(Vi),
        Nn.use(Ri),
        Nn.use(Hn),
        Nn.use(qi),
        Nn.use(Ui),
        Nn.use(Xi),
        Nn.use(Ji),
        Nn.use(Qi),
        Nn.use(Ki),
        Nn.use(yn),
        Nn.use(Gi),
        Nn.use(Zi),
        Nn.use(bn),
        Nn.use(xn),
        Nn.use(kn),
        Nn.use($n),
        Nn.use(In),
        Nn.use(Tn),
        Nn.use(Cn),
        Nn.use(En),
        Nn.use(Sn),
        Nn.use(_n),
        Nn.use(Mn),
        Nn.use(wn),
        Nn.use(Bn),
        Nn.use(On),
        Nn.use(Yi),
        Oi.use(function t(e) {
            if (!t.installed) {
                var i = e.util,
                    n = i.$,
                    o = i.doc,
                    r = i.empty,
                    s = i.html;
                e.component("countdown", {
                    mixins: [e.mixin.class],
                    attrs: !0,
                    props: { date: String, clsWrapper: String },
                    defaults: { date: "", clsWrapper: ".uk-countdown-%unit%" },
                    computed: {
                        date: function (t) {
                            var e = t.date;
                            return Date.parse(e);
                        },
                        days: function (t, e) {
                            var i = t.clsWrapper;
                            return n(i.replace("%unit%", "days"), e);
                        },
                        hours: function (t, e) {
                            var i = t.clsWrapper;
                            return n(i.replace("%unit%", "hours"), e);
                        },
                        minutes: function (t, e) {
                            var i = t.clsWrapper;
                            return n(i.replace("%unit%", "minutes"), e);
                        },
                        seconds: function (t, e) {
                            var i = t.clsWrapper;
                            return n(i.replace("%unit%", "seconds"), e);
                        },
                        units: function () {
                            var t = this;
                            return ["days", "hours", "minutes", "seconds"].filter(function (
                                e
                            ) {
                                return t[e];
                            });
                        },
                    },
                    connected: function () {
                        this.start();
                    },
                    disconnected: function () {
                        var t = this;
                        this.stop(),
                            this.units.forEach(function (e) {
                                return r(t[e]);
                            });
                    },
                    events: [
                        {
                            name: "visibilitychange",
                            el: o,
                            handler: function () {
                                o.hidden ? this.stop() : this.start();
                            },
                        },
                    ],
                    update: {
                        write: function () {
                            var t,
                                e,
                                i = this,
                                n =
                                    ((t = this.date),
                                    {
                                        total: (e = t - Date.now()),
                                        seconds: (e / 1e3) % 60,
                                        minutes: (e / 1e3 / 60) % 60,
                                        hours: (e / 1e3 / 60 / 60) % 24,
                                        days: e / 1e3 / 60 / 60 / 24,
                                    });
                            n.total <= 0 &&
                                (this.stop(), (n.days = n.hours = n.minutes = n.seconds = 0)),
                                this.units.forEach(function (t) {
                                    var e = String(Math.floor(n[t]));
                                    e = e.length < 2 ? "0" + e : e;
                                    var o = i[t];
                                    o.textContent !== e &&
                                        ((e = e.split("")).length !== o.children.length &&
                                            s(
                                                o,
                                                e
                                                    .map(function () {
                                                        return "<span></span>";
                                                    })
                                                    .join("")
                                            ),
                                            e.forEach(function (t, e) {
                                                return (o.children[e].textContent = t);
                                            }));
                                });
                        },
                    },
                    methods: {
                        start: function () {
                            var t = this;
                            this.stop(),
                                this.date &&
                                this.units.length &&
                                (this.$emit(),
                                    (this.timer = setInterval(function () {
                                        return t.$emit();
                                    }, 1e3)));
                        },
                        stop: function () {
                            this.timer && (clearInterval(this.timer), (this.timer = null));
                        },
                    },
                });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                var i = e.util,
                    n = i.addClass,
                    o = i.css,
                    r = i.scrolledOver,
                    s = i.sortBy,
                    a = i.toFloat;
                e.component(
                    "grid-parallax",
                    e.components.grid.extend({
                        props: { target: String, translate: Number },
                        defaults: { target: !1, translate: 150 },
                        computed: {
                            translate: function (t) {
                                var e = t.translate;
                                return Math.abs(e);
                            },
                        },
                        init: function () {
                            n(this.$el, "uk-grid");
                        },
                        disconnected: function () {
                            this.reset(), o(this.$el, "marginBottom", "");
                        },
                        update: [
                            {
                                read: function (t) {
                                    var e = t.rows;
                                    return {
                                        columns: (e && e[0] && e[0].length) || 0,
                                        rows:
                                            e &&
                                            e.map(function (t) {
                                                return s(t, "offsetLeft");
                                            }),
                                    };
                                },
                                write: function (t) {
                                    var e = t.columns;
                                    o(
                                        this.$el,
                                        "marginBottom",
                                        e > 1
                                            ? this.translate +
                                            a(o(o(this.$el, "marginBottom", ""), "marginBottom"))
                                            : ""
                                    );
                                },
                                events: ["load", "resize"],
                            },
                            {
                                read: function () {
                                    return { scrolled: r(this.$el) * this.translate };
                                },
                                write: function (t) {
                                    var e = t.rows,
                                        i = t.columns,
                                        n = t.scrolled;
                                    if (!e || 1 === i || !n) return this.reset();
                                    e.forEach(function (t) {
                                        return t.forEach(function (t, e) {
                                            return o(
                                                t,
                                                "transform",
                                                "translateY(" + (e % 2 ? n : n / 8) + "px)"
                                            );
                                        });
                                    });
                                },
                                events: ["scroll", "load", "resize"],
                            },
                        ],
                        methods: {
                            reset: function () {
                                o(this.$el.children, "transform", "");
                            },
                        },
                    })
                ),
                    e.components.gridParallax.options.update.unshift({
                        read: function () {
                            this.reset();
                        },
                        events: ["load", "resize"],
                    });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                e.use(Vn);
                var i = e.util,
                    n = i.$$,
                    o = i.assign,
                    r = i.data,
                    s = i.index,
                    a = e.components.lightboxPanel.options;
                e.component("lightbox", {
                    attrs: !0,
                    props: o({ toggle: String }, a.props),
                    defaults: o(
                        { toggle: "a" },
                        Object.keys(a.props).reduce(function (t, e) {
                            return (t[e] = a.defaults[e]), t;
                        }, {})
                    ),
                    computed: {
                        toggles: function (t, e) {
                            var i = t.toggle;
                            return n(i, e);
                        },
                    },
                    disconnected: function () {
                        this._destroy();
                    },
                    events: [
                        {
                            name: "click",
                            delegate: function () {
                                return this.toggle + ":not(.uk-disabled)";
                            },
                            handler: function (t) {
                                t.preventDefault(),
                                    t.current.blur(),
                                    this.show(s(this.toggles, t.current));
                            },
                        },
                    ],
                    update: function (t) {
                        var e, i;
                        this.panel &&
                            this.animation &&
                            ((this.panel.$props.animation = this.animation),
                                this.panel.$emit()),
                            !this.panel ||
                            (t.toggles &&
                                ((e = t.toggles),
                                    (i = this.toggles),
                                    e.length === i.length &&
                                    e.every(function (t, e) {
                                        return t !== i[e];
                                    }))) ||
                            ((t.toggles = this.toggles), this._destroy(), this._init());
                    },
                    methods: {
                        _init: function () {
                            return (this.panel =
                                this.panel ||
                                e.lightboxPanel(
                                    o({}, this.$props, {
                                        items: this.toggles.reduce(function (t, e) {
                                            return (
                                                t.push(
                                                    ["href", "caption", "type", "poster", "alt"].reduce(
                                                        function (t, i) {
                                                            return (
                                                                (t["href" === i ? "source" : i] = r(e, i)), t
                                                            );
                                                        },
                                                        {}
                                                    )
                                                ),
                                                t
                                            );
                                        }, []),
                                    })
                                ));
                        },
                        _destroy: function () {
                            this.panel && (this.panel.$destroy(!0), (this.panel = null));
                        },
                        show: function (t) {
                            return this.panel || this._init(), this.panel.show(t);
                        },
                        hide: function () {
                            return this.panel && this.panel.hide();
                        },
                    },
                });
            }
        }),
        Oi.use(function t(e) {
            var i;
            if (!t.installed) {
                var n = e.util,
                    o = n.append,
                    r = n.closest,
                    s = n.css,
                    a = n.each,
                    l = n.pointerEnter,
                    h = n.pointerLeave,
                    u = n.remove,
                    c = n.toFloat,
                    d = n.Transition,
                    f = n.trigger,
                    p = {};
                e.component("notification", {
                    functional: !0,
                    args: ["message", "status"],
                    defaults: {
                        message: "",
                        status: "",
                        timeout: 5e3,
                        group: null,
                        pos: "top-center",
                        clsClose: "uk-notification-close",
                        clsMsg: "uk-notification-message",
                    },
                    created: function () {
                        p[this.pos] ||
                            (p[this.pos] = o(
                                e.container,
                                '<div class="uk-notification uk-notification-' +
                                this.pos +
                                '"></div>'
                            ));
                        var t = s(p[this.pos], "display", "block");
                        this.$mount(
                            o(
                                t,
                                '<div class="' +
                                this.clsMsg +
                                (this.status ? " " + this.clsMsg + "-" + this.status : "") +
                                '"> <a href="#" class="' +
                                this.clsClose +
                                '" data-uk-close></a> <div>' +
                                this.message +
                                "</div> </div>"
                            )
                        );
                    },
                    ready: function () {
                        var t = this,
                            e = c(s(this.$el, "marginBottom"));
                        d.start(
                            s(this.$el, {
                                opacity: 0,
                                marginTop: -this.$el.offsetHeight,
                                marginBottom: 0,
                            }),
                            { opacity: 1, marginTop: 0, marginBottom: e }
                        ).then(function () {
                            t.timeout && (t.timer = setTimeout(t.close, t.timeout));
                        });
                    },
                    events:
                        ((i = {
                            click: function (t) {
                                r(t.target, 'a[href="#"]') && t.preventDefault(), this.close();
                            },
                        }),
                            (i[l] = function () {
                                this.timer && clearTimeout(this.timer);
                            }),
                            (i[h] = function () {
                                this.timeout &&
                                    (this.timer = setTimeout(this.close, this.timeout));
                            }),
                            i),
                    methods: {
                        close: function (t) {
                            var e = this,
                                i = function () {
                                    f(e.$el, "close", [e]),
                                        u(e.$el),
                                        p[e.pos].children.length || s(p[e.pos], "display", "none");
                                };
                            this.timer && clearTimeout(this.timer),
                                t
                                    ? i()
                                    : d
                                        .start(this.$el, {
                                            opacity: 0,
                                            marginTop: -this.$el.offsetHeight,
                                            marginBottom: 0,
                                        })
                                        .then(i);
                        },
                    },
                }),
                    (e.notification.closeAll = function (t, i) {
                        a(e.instances, function (e) {
                            "notification" !== e.$options.name ||
                                (t && t !== e.group) ||
                                e.close(i);
                        });
                    });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                e.use(Rn);
                var i = e.mixin,
                    n = e.util,
                    o = n.clamp,
                    r = n.css,
                    s = n.scrolledOver,
                    a = n.query;
                e.component("parallax", {
                    mixins: [i.parallax],
                    props: { target: String, viewport: Number, easing: Number },
                    defaults: { target: !1, viewport: 1, easing: 1 },
                    computed: {
                        target: function (t, e) {
                            var i = t.target;
                            return (i && a(i, e)) || e;
                        },
                    },
                    update: [
                        {
                            read: function (t) {
                                var e, i;
                                return {
                                    prev: t.percent,
                                    percent:
                                        ((e = s(this.target) / (this.viewport || 1)),
                                            (i = this.easing),
                                            o(e * (1 - (i - i * e)))),
                                };
                            },
                            write: function (t, e) {
                                var i = t.prev,
                                    n = t.percent,
                                    o = t.active;
                                "scroll" !== e.type && (i = !1),
                                    o ? i !== n && r(this.$el, this.getCss(n)) : this.reset();
                            },
                            events: ["scroll", "load", "resize"],
                        },
                    ],
                });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                e.use(Ln);
                var i = e.mixin,
                    n = e.util,
                    o = n.$,
                    r = n.$$,
                    s = n.addClass,
                    a = n.css,
                    l = n.data,
                    h = n.includes,
                    u = n.isNumeric,
                    c = n.isUndefined,
                    d = n.toggleClass,
                    f = n.toFloat,
                    p = (function (t) {
                        var e = t.util,
                            i = e.assign,
                            n = e.clamp,
                            o = e.createEvent,
                            r = e.css,
                            s = e.Deferred,
                            a = e.includes,
                            l = e.index,
                            h = e.isRtl,
                            u = e.noop,
                            c = e.sortBy,
                            d = e.toNodes,
                            f = e.Transition,
                            p = e.trigger,
                            m = i(
                                function (t, e, i, o) {
                                    var d = o.center,
                                        p = o.easing,
                                        w = o.list,
                                        b = new s(),
                                        y = t
                                            ? m.getLeft(t, w, d)
                                            : m.getLeft(e, w, d) + e.offsetWidth * i,
                                        x = e
                                            ? m.getLeft(e, w, d)
                                            : y + t.offsetWidth * i * (h ? -1 : 1);
                                    return {
                                        dir: i,
                                        show: function (e, o, r) {
                                            void 0 === o && (o = 0);
                                            var s = r ? "linear" : p;
                                            return (
                                                (e -= Math.round(e * n(o, -1, 1))),
                                                this.translate(o),
                                                t && this.updateTranslates(),
                                                (o = t ? o : n(o, 0, 1)),
                                                g(this.getItemIn(), "itemin", {
                                                    percent: o,
                                                    duration: e,
                                                    timing: s,
                                                    dir: i,
                                                }),
                                                t &&
                                                g(this.getItemIn(!0), "itemout", {
                                                    percent: 1 - o,
                                                    duration: e,
                                                    timing: s,
                                                    dir: i,
                                                }),
                                                f
                                                    .start(
                                                        w,
                                                        { transform: zn(-x * (h ? -1 : 1), "px") },
                                                        e,
                                                        s
                                                    )
                                                    .then(b.resolve, u),
                                                b.promise
                                            );
                                        },
                                        stop: function () {
                                            return f.stop(w);
                                        },
                                        cancel: function () {
                                            f.cancel(w);
                                        },
                                        reset: function () {
                                            r(w, "transform", "");
                                        },
                                        forward: function (t, e) {
                                            return (
                                                void 0 === e && (e = this.percent()),
                                                f.cancel(w),
                                                this.show(t, e, !0)
                                            );
                                        },
                                        translate: function (e) {
                                            var o = this.getDistance() * i * (h ? -1 : 1);
                                            r(
                                                w,
                                                "transform",
                                                zn(
                                                    n(o - o * e - x, -m.getWidth(w), w.offsetWidth) *
                                                    (h ? -1 : 1),
                                                    "px"
                                                )
                                            ),
                                                this.updateTranslates(),
                                                t &&
                                                ((e = n(e, -1, 1)),
                                                    g(this.getItemIn(), "itemtranslatein", {
                                                        percent: e,
                                                        dir: i,
                                                    }),
                                                    g(this.getItemIn(!0), "itemtranslateout", {
                                                        percent: 1 - e,
                                                        dir: i,
                                                    }));
                                        },
                                        percent: function () {
                                            return Math.abs(
                                                (r(w, "transform").split(",")[4] * (h ? -1 : 1) + y) /
                                                (x - y)
                                            );
                                        },
                                        getDistance: function () {
                                            return Math.abs(x - y);
                                        },
                                        getItemIn: function (e) {
                                            void 0 === e && (e = !1);
                                            var n = this.getActives(),
                                                o = c(v(w), "offsetLeft"),
                                                r = l(o, n[i * (e ? -1 : 1) > 0 ? n.length - 1 : 0]);
                                            return ~r && o[r + (t && !e ? i : 0)];
                                        },
                                        getActives: function () {
                                            var i = m.getLeft(t || e, w, d);
                                            return c(
                                                v(w).filter(function (t) {
                                                    var e = m.getElLeft(t, w);
                                                    return (
                                                        e >= i && e + t.offsetWidth <= w.offsetWidth + i
                                                    );
                                                }),
                                                "offsetLeft"
                                            );
                                        },
                                        updateTranslates: function () {
                                            var t = this.getActives();
                                            v(w).forEach(function (i) {
                                                var n = a(t, i);
                                                g(i, "itemtranslate" + (n ? "in" : "out"), {
                                                    percent: n ? 1 : 0,
                                                    dir: i.offsetLeft <= e.offsetLeft ? 1 : -1,
                                                });
                                            });
                                        },
                                    };
                                },
                                {
                                    getLeft: function (t, e, i) {
                                        var n = this.getElLeft(t, e);
                                        return i
                                            ? n - this.center(t, e)
                                            : Math.min(n, this.getMax(e));
                                    },
                                    getMax: function (t) {
                                        return Math.max(0, this.getWidth(t) - t.offsetWidth);
                                    },
                                    getWidth: function (t) {
                                        return v(t).reduce(function (t, e) {
                                            return e.offsetWidth + t;
                                        }, 0);
                                    },
                                    getMaxWidth: function (t) {
                                        return v(t).reduce(function (t, e) {
                                            return Math.max(t, e.offsetWidth);
                                        }, 0);
                                    },
                                    center: function (t, e) {
                                        return e.offsetWidth / 2 - t.offsetWidth / 2;
                                    },
                                    getElLeft: function (t, e) {
                                        return (
                                            (t.offsetLeft + (h ? t.offsetWidth - e.offsetWidth : 0)) *
                                            (h ? -1 : 1)
                                        );
                                    },
                                }
                            );
                        function g(t, e, i) {
                            p(t, o(e, !1, !1, i));
                        }
                        function v(t) {
                            return d(t.children);
                        }
                        return m;
                    })(e);
                e.component("slider-parallax", qn(e, "slider")),
                    e.component("slider", {
                        mixins: [i.class, i.slider, Yn(e)],
                        props: { center: Boolean, sets: Boolean },
                        defaults: {
                            center: !1,
                            sets: !1,
                            attrItem: "uk-slider-item",
                            selList: ".uk-slider-items",
                            selNav: ".uk-slider-nav",
                            clsContainer: "uk-slider-container",
                            Transitioner: p,
                        },
                        computed: {
                            avgWidth: function () {
                                return p.getWidth(this.list) / this.length;
                            },
                            finite: function (t) {
                                var e = t.finite;
                                return (
                                    e ||
                                    p.getWidth(this.list) <
                                    this.list.offsetWidth +
                                    p.getMaxWidth(this.list) +
                                    this.center
                                );
                            },
                            maxIndex: function () {
                                if (!this.finite || (this.center && !this.sets))
                                    return this.length - 1;
                                if (this.center) return this.sets[this.sets.length - 1];
                                a(this.slides, "order", "");
                                for (var t = p.getMax(this.list), e = this.length; e--;)
                                    if (p.getElLeft(this.list.children[e], this.list) < t)
                                        return Math.min(e + 1, this.length - 1);
                                return 0;
                            },
                            sets: function (t) {
                                var e = this,
                                    i = t.sets,
                                    n = this.list.offsetWidth / (this.center ? 2 : 1),
                                    o = 0,
                                    r = n,
                                    s = 0;
                                return (
                                    (i =
                                        i &&
                                        this.slides.reduce(function (t, i, a) {
                                            var l = i.offsetWidth;
                                            if (
                                                s + l > o &&
                                                (!e.center && a > e.maxIndex && (a = e.maxIndex),
                                                    !h(t, a))
                                            ) {
                                                var u = e.slides[a + 1];
                                                e.center && u && l < r - u.offsetWidth / 2
                                                    ? (r -= l)
                                                    : ((r = n),
                                                        t.push(a),
                                                        (o = s + n + (e.center ? l / 2 : 0)));
                                            }
                                            return (s += l), t;
                                        }, [])),
                                    i && i.length && i
                                );
                            },
                            transitionOptions: function () {
                                return { center: this.center, list: this.list };
                            },
                        },
                        connected: function () {
                            d(
                                this.$el,
                                this.clsContainer,
                                !o("." + this.clsContainer, this.$el)
                            );
                        },
                        update: {
                            write: function () {
                                var t = this;
                                r(
                                    "[" + this.attrItem + "],[data-" + this.attrItem + "]",
                                    this.$el
                                ).forEach(function (e) {
                                    var i = l(e, t.attrItem);
                                    t.maxIndex &&
                                        d(
                                            e,
                                            "uk-hidden",
                                            u(i) && ((t.sets && !h(t.sets, f(i))) || i > t.maxIndex)
                                        );
                                });
                            },
                            events: ["load", "resize"],
                        },
                        events: {
                            beforeitemshow: function (t) {
                                !this.dragging &&
                                    this.sets &&
                                    this.stack.length < 2 &&
                                    !h(this.sets, this.index) &&
                                    (this.index = this.getValidIndex());
                                var e = Math.abs(
                                    this.index -
                                    this.prevIndex +
                                    ((this.dir > 0 && this.index < this.prevIndex) ||
                                        (this.dir < 0 && this.index > this.prevIndex)
                                        ? (this.maxIndex + 1) * this.dir
                                        : 0)
                                );
                                if (!this.dragging && e > 1) {
                                    for (var i = 0; i < e; i++)
                                        this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                                    t.preventDefault();
                                } else
                                    (this.duration =
                                        jn(this.avgWidth / this.velocity) *
                                        ((this.dir < 0 || !this.slides[this.prevIndex]
                                            ? this.slides[this.index]
                                            : this.slides[this.prevIndex]
                                        ).offsetWidth /
                                            this.avgWidth)),
                                        this.reorder();
                            },
                            itemshow: function () {
                                !c(this.prevIndex) &&
                                    s(this._getTransitioner().getItemIn(), this.clsActive);
                            },
                            itemshown: function () {
                                var t = this,
                                    e = this._getTransitioner(this.index).getActives();
                                this.slides.forEach(function (i) {
                                    return d(i, t.clsActive, h(e, i));
                                }),
                                    (!this.sets || h(this.sets, f(this.index))) &&
                                    this.slides.forEach(function (i) {
                                        return d(i, t.clsActivated, h(e, i));
                                    });
                            },
                        },
                        methods: {
                            reorder: function () {
                                var t = this;
                                if ((a(this.slides, "order", ""), !this.finite)) {
                                    var e =
                                        this.dir > 0 && this.slides[this.prevIndex]
                                            ? this.prevIndex
                                            : this.index;
                                    if (
                                        (this.slides.forEach(function (i, n) {
                                            return a(
                                                i,
                                                "order",
                                                t.dir > 0 && n < e
                                                    ? 1
                                                    : t.dir < 0 && n >= t.index
                                                        ? -1
                                                        : ""
                                            );
                                        }),
                                            this.center)
                                    )
                                        for (
                                            var i = this.slides[e],
                                            n = this.list.offsetWidth / 2 - i.offsetWidth / 2,
                                            o = 0;
                                            n > 0;

                                        ) {
                                            var r = t.getIndex(--o + e, e),
                                                s = t.slides[r];
                                            a(s, "order", r > e ? -2 : -1), (n -= s.offsetWidth);
                                        }
                                }
                            },
                            getValidIndex: function (t, e) {
                                var i;
                                if (
                                    (void 0 === t && (t = this.index),
                                        void 0 === e && (e = this.prevIndex),
                                        (t = this.getIndex(t, e)),
                                        !this.sets)
                                )
                                    return t;
                                do {
                                    if (h(this.sets, t)) return t;
                                    (i = t), (t = this.getIndex(t + this.dir, e));
                                } while (t !== i);
                                return t;
                            },
                        },
                    });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                e.use(Fn);
                var i,
                    n,
                    o,
                    r,
                    s,
                    a,
                    l = e.mixin,
                    h = e.util.height,
                    u =
                        ((n = (i = e).mixin),
                            (o = i.util),
                            (r = o.assign),
                            (s = o.css),
                            (a = r({}, n.slideshow.defaults.Animations, {
                                fade: {
                                    show: function () {
                                        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
                                    },
                                    percent: function (t) {
                                        return 1 - s(t, "opacity");
                                    },
                                    translate: function (t) {
                                        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
                                    },
                                },
                                scale: {
                                    show: function () {
                                        return [
                                            { opacity: 0, transform: Wn(1.5), zIndex: 0 },
                                            { zIndex: -1 },
                                        ];
                                    },
                                    percent: function (t) {
                                        return 1 - s(t, "opacity");
                                    },
                                    translate: function (t) {
                                        return [
                                            { opacity: 1 - t, transform: Wn(1 + 0.5 * t), zIndex: 0 },
                                            { zIndex: -1 },
                                        ];
                                    },
                                },
                                pull: {
                                    show: function (t) {
                                        return t < 0
                                            ? [
                                                { transform: zn(30), zIndex: -1 },
                                                { transform: zn(), zIndex: 0 },
                                            ]
                                            : [
                                                { transform: zn(-100), zIndex: 0 },
                                                { transform: zn(), zIndex: -1 },
                                            ];
                                    },
                                    percent: function (t, e, i) {
                                        return i < 0 ? 1 - a.translated(e) : a.translated(t);
                                    },
                                    translate: function (t, e) {
                                        return e < 0
                                            ? [
                                                { transform: zn(30 * t), zIndex: -1 },
                                                { transform: zn(-100 * (1 - t)), zIndex: 0 },
                                            ]
                                            : [
                                                { transform: zn(100 * -t), zIndex: 0 },
                                                { transform: zn(30 * (1 - t)), zIndex: -1 },
                                            ];
                                    },
                                },
                                push: {
                                    show: function (t) {
                                        return t < 0
                                            ? [
                                                { transform: zn(100), zIndex: 0 },
                                                { transform: zn(), zIndex: -1 },
                                            ]
                                            : [
                                                { transform: zn(-30), zIndex: -1 },
                                                { transform: zn(), zIndex: 0 },
                                            ];
                                    },
                                    percent: function (t, e, i) {
                                        return i > 0 ? 1 - a.translated(e) : a.translated(t);
                                    },
                                    translate: function (t, e) {
                                        return e < 0
                                            ? [
                                                { transform: zn(100 * t), zIndex: 0 },
                                                { transform: zn(-30 * (1 - t)), zIndex: -1 },
                                            ]
                                            : [
                                                { transform: zn(-30 * t), zIndex: -1 },
                                                { transform: zn(100 * (1 - t)), zIndex: 0 },
                                            ];
                                    },
                                },
                            })));
                e.component("slideshow-parallax", qn(e, "slideshow")),
                    e.component("slideshow", {
                        mixins: [l.class, l.slideshow, Yn(e)],
                        props: { ratio: String, minHeight: Boolean, maxHeight: Boolean },
                        defaults: {
                            ratio: "16:9",
                            minHeight: !1,
                            maxHeight: !1,
                            selList: ".uk-slideshow-items",
                            attrItem: "uk-slideshow-item",
                            selNav: ".uk-slideshow-nav",
                            Animations: u,
                        },
                        update: {
                            read: function () {
                                var t = this.ratio.split(":").map(Number),
                                    e = t[0],
                                    i = t[1];
                                return (
                                    (i = (i * this.$el.offsetWidth) / e),
                                    this.minHeight && (i = Math.max(this.minHeight, i)),
                                    this.maxHeight && (i = Math.min(this.maxHeight, i)),
                                    { height: i }
                                );
                            },
                            write: function (t) {
                                var e = t.height;
                                h(this.list, Math.floor(e));
                            },
                            events: ["load", "resize"],
                        },
                    });
            }
        }),
        Oi.use(function t(e) {
            var i;
            if (!t.installed) {
                var n = e.mixin,
                    o = e.util,
                    r = o.addClass,
                    s = o.after,
                    a = o.assign,
                    l = o.append,
                    h = o.attr,
                    u = o.before,
                    c = o.closest,
                    d = o.css,
                    f = o.doc,
                    p = o.docEl,
                    m = o.height,
                    g = o.fastdom,
                    v = o.getPos,
                    w = o.includes,
                    b = o.index,
                    y = o.isInput,
                    x = o.noop,
                    k = o.offset,
                    $ = o.off,
                    I = o.on,
                    T = o.pointerDown,
                    C = o.pointerMove,
                    E = o.pointerUp,
                    S = o.position,
                    _ = o.preventClick,
                    A = o.Promise,
                    N = o.remove,
                    D = o.removeClass,
                    M = o.toggleClass,
                    B = o.toNodes,
                    O = o.Transition,
                    P = o.trigger,
                    H = o.win,
                    z = o.within;
                e.component("sortable", {
                    mixins: [n.class],
                    props: {
                        group: String,
                        animation: Number,
                        threshold: Number,
                        clsItem: String,
                        clsPlaceholder: String,
                        clsDrag: String,
                        clsDragState: String,
                        clsBase: String,
                        clsNoDrag: String,
                        clsEmpty: String,
                        clsCustom: String,
                        handle: String,
                    },
                    defaults: {
                        group: !1,
                        animation: 150,
                        threshold: 5,
                        clsItem: "uk-sortable-item",
                        clsPlaceholder: "uk-sortable-placeholder",
                        clsDrag: "uk-sortable-drag",
                        clsDragState: "uk-drag",
                        clsBase: "uk-sortable",
                        clsNoDrag: "uk-sortable-nodrag",
                        clsEmpty: "uk-sortable-empty",
                        clsCustom: "",
                        handle: !1,
                    },
                    init: function () {
                        var t = this;
                        ["init", "start", "move", "end"].forEach(function (e) {
                            var i = t[e];
                            t[e] = function (e) {
                                t.scrollY = H.pageYOffset;
                                var n = v(e),
                                    o = n.x,
                                    r = n.y;
                                (t.pos = { x: o, y: r }), i(e);
                            };
                        });
                    },
                    events: ((i = {}), (i[T] = "init"), i),
                    update: {
                        write: function () {
                            if (
                                (this.clsEmpty &&
                                    M(this.$el, this.clsEmpty, !this.$el.children.length),
                                    this.drag)
                            ) {
                                k(this.drag, {
                                    top: this.pos.y + this.origin.top,
                                    left: this.pos.x + this.origin.left,
                                });
                                var t,
                                    e = k(this.drag).top,
                                    i = e + this.drag.offsetHeight;
                                e > 0 && e < this.scrollY
                                    ? (t = this.scrollY - 5)
                                    : i < m(f) &&
                                    i > m(H) + this.scrollY &&
                                    (t = this.scrollY + 5),
                                    t &&
                                    setTimeout(function () {
                                        return H.scrollTo(H.scrollX, t);
                                    }, 5);
                            }
                        },
                    },
                    methods: {
                        init: function (t) {
                            var e = t.target,
                                i = t.button,
                                n = t.defaultPrevented,
                                o = B(this.$el.children).filter(function (t) {
                                    return z(e, t);
                                })[0];
                            !o ||
                                y(t.target) ||
                                (this.handle && !z(e, this.handle)) ||
                                i > 0 ||
                                z(e, "." + this.clsNoDrag) ||
                                n ||
                                (t.preventDefault(),
                                    (this.touched = [this]),
                                    (this.placeholder = o),
                                    (this.origin = a({ target: e, index: b(o) }, this.pos)),
                                    I(p, C, this.move),
                                    I(p, E, this.end),
                                    I(H, "scroll", this.scroll),
                                    this.threshold || this.start(t));
                        },
                        start: function (t) {
                            (this.drag = l(
                                e.container,
                                this.placeholder.outerHTML
                                    .replace(/^<li/i, "<div")
                                    .replace(/li>$/i, "div>")
                            )),
                                d(
                                    this.drag,
                                    a(
                                        {
                                            boxSizing: "border-box",
                                            width: this.placeholder.offsetWidth,
                                            height: this.placeholder.offsetHeight,
                                        },
                                        d(this.placeholder, [
                                            "paddingLeft",
                                            "paddingRight",
                                            "paddingTop",
                                            "paddingBottom",
                                        ])
                                    )
                                ),
                                h(this.drag, "uk-no-boot", ""),
                                r(this.drag, this.clsDrag, this.clsCustom),
                                m(
                                    this.drag.firstElementChild,
                                    m(this.placeholder.firstElementChild)
                                );
                            var i = k(this.placeholder),
                                n = i.left,
                                o = i.top;
                            a(this.origin, { left: n - this.pos.x, top: o - this.pos.y }),
                                r(this.placeholder, this.clsPlaceholder),
                                r(this.$el.children, this.clsItem),
                                r(p, this.clsDragState),
                                P(this.$el, "start", [this, this.placeholder, this.drag]),
                                this.move(t);
                        },
                        move: function (t) {
                            if (this.drag) {
                                this.$emit();
                                var e =
                                    "mousemove" === t.type
                                        ? t.target
                                        : f.elementFromPoint(
                                            this.pos.x - f.body.scrollLeft,
                                            this.pos.y - f.body.scrollTop
                                        ),
                                    i = W(e),
                                    n = W(this.placeholder),
                                    o = i !== n;
                                if (
                                    i &&
                                    !z(e, this.placeholder) &&
                                    (!o || (i.group && i.group === n.group))
                                ) {
                                    if (
                                        ((e =
                                            (i.$el === e.parentNode && e) ||
                                            B(i.$el.children).filter(function (t) {
                                                return z(e, t);
                                            })[0]),
                                            o)
                                    )
                                        n.remove(this.placeholder);
                                    else if (!e) return;
                                    i.insert(this.placeholder, e),
                                        w(this.touched, i) || this.touched.push(i);
                                }
                            } else
                                (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                                    Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
                                    this.start(t);
                        },
                        scroll: function () {
                            var t = H.pageYOffset;
                            t !== this.scrollY &&
                                ((this.pos.y += t - this.scrollY),
                                    (this.scrollY = t),
                                    this.$emit());
                        },
                        end: function (t) {
                            if (
                                ($(p, C, this.move),
                                    $(p, E, this.end),
                                    $(H, "scroll", this.scroll),
                                    this.drag)
                            ) {
                                _();
                                var e = W(this.placeholder);
                                this === e
                                    ? this.origin.index !== b(this.placeholder) &&
                                    P(this.$el, "moved", [this, this.placeholder])
                                    : (P(e.$el, "added", [e, this.placeholder]),
                                        P(this.$el, "removed", [this, this.placeholder])),
                                    P(this.$el, "stop", [this]),
                                    N(this.drag),
                                    (this.drag = null);
                                var i = this.touched
                                    .map(function (t) {
                                        return t.clsPlaceholder + " " + t.clsItem;
                                    })
                                    .join(" ");
                                this.touched.forEach(function (t) {
                                    return D(t.$el.children, i);
                                }),
                                    D(p, this.clsDragState);
                            } else
                                "mouseup" !== t.type &&
                                    z(t.target, "a[href]") &&
                                    (location.href = c(t.target, "a[href]").href);
                        },
                        insert: function (t, e) {
                            var i = this;
                            r(this.$el.children, this.clsItem);
                            var n = function () {
                                var n, o;
                                e
                                    ? !z(t, i.$el) ||
                                        ((o = e),
                                            (n = t).parentNode === o.parentNode && b(n) > b(o))
                                        ? u(e, t)
                                        : s(e, t)
                                    : l(i.$el, t);
                            };
                            this.animation ? this.animate(n) : n();
                        },
                        remove: function (t) {
                            z(t, this.$el) &&
                                (this.animation
                                    ? this.animate(function () {
                                        return N(t);
                                    })
                                    : N(t));
                        },
                        animate: function (t) {
                            var e = this,
                                i = [],
                                n = B(this.$el.children),
                                o = {
                                    position: "",
                                    width: "",
                                    height: "",
                                    pointerEvents: "",
                                    top: "",
                                    left: "",
                                    bottom: "",
                                    right: "",
                                };
                            n.forEach(function (t) {
                                i.push(
                                    a(
                                        {
                                            position: "absolute",
                                            pointerEvents: "none",
                                            width: t.offsetWidth,
                                            height: t.offsetHeight,
                                        },
                                        S(t)
                                    )
                                );
                            }),
                                t(),
                                n.forEach(O.cancel),
                                d(this.$el.children, o),
                                this.$update("update", !0),
                                g.flush(),
                                d(this.$el, "minHeight", m(this.$el));
                            var r = n.map(function (t) {
                                return S(t);
                            });
                            A.all(
                                n.map(function (t, n) {
                                    return O.start(d(t, i[n]), r[n], e.animation);
                                })
                            ).then(function () {
                                d(e.$el, "minHeight", ""),
                                    d(n, o),
                                    e.$update("update", !0),
                                    g.flush();
                            }, x);
                        },
                    },
                });
            }
            function W(t) {
                return t && (e.getComponent(t, "sortable") || W(t.parentNode));
            }
        }),
        Oi.use(function t(e) {
            var i;
            if (!t.installed) {
                var n = e.util,
                    o = e.mixin,
                    r = n.append,
                    s = n.attr,
                    a = n.doc,
                    l = n.flipPosition,
                    h = n.hasAttr,
                    u = n.includes,
                    c = n.isTouch,
                    d = n.isVisible,
                    f = n.matches,
                    p = n.on,
                    m = n.pointerDown,
                    g = n.pointerEnter,
                    v = n.pointerLeave,
                    w = n.remove,
                    b = n.within,
                    y = [];
                e.component("tooltip", {
                    attrs: !0,
                    args: "title",
                    mixins: [o.container, o.togglable, o.position],
                    props: { delay: Number, title: String },
                    defaults: {
                        pos: "top",
                        title: "",
                        delay: 0,
                        animation: ["uk-animation-scale-up"],
                        duration: 100,
                        cls: "uk-active",
                        clsPos: "uk-tooltip",
                    },
                    beforeConnect: function () {
                        (this._hasTitle = h(this.$el, "title")),
                            s(this.$el, { title: "", "aria-expanded": !1 });
                    },
                    disconnected: function () {
                        this.hide(),
                            s(this.$el, {
                                title: this._hasTitle ? this.title : null,
                                "aria-expanded": null,
                            });
                    },
                    methods: {
                        show: function () {
                            var t = this;
                            u(y, this) ||
                                (y.forEach(function (t) {
                                    return t.hide();
                                }),
                                    y.push(this),
                                    (this._unbind = p(a, "click", function (e) {
                                        return !b(e.target, t.$el) && t.hide();
                                    })),
                                    clearTimeout(this.showTimer),
                                    (this.tooltip = r(
                                        this.container,
                                        '<div class="' +
                                        this.clsPos +
                                        '" aria-hidden><div class="' +
                                        this.clsPos +
                                        '-inner">' +
                                        this.title +
                                        "</div></div>"
                                    )),
                                    s(this.$el, "aria-expanded", !0),
                                    this.positionAt(this.tooltip, this.$el),
                                    (this.origin =
                                        "y" === this.getAxis()
                                            ? l(this.dir) + "-" + this.align
                                            : this.align + "-" + l(this.dir)),
                                    (this.showTimer = setTimeout(function () {
                                        t.toggleElement(t.tooltip, !0),
                                            (t.hideTimer = setInterval(function () {
                                                d(t.$el) || t.hide();
                                            }, 150));
                                    }, this.delay)));
                        },
                        hide: function () {
                            var t = y.indexOf(this);
                            !~t ||
                                (f(this.$el, "input") && this.$el === a.activeElement) ||
                                (y.splice(t, 1),
                                    clearTimeout(this.showTimer),
                                    clearInterval(this.hideTimer),
                                    s(this.$el, "aria-expanded", !1),
                                    this.toggleElement(this.tooltip, !1),
                                    this.tooltip && w(this.tooltip),
                                    (this.tooltip = !1),
                                    this._unbind());
                        },
                    },
                    events:
                        ((i = {}),
                            (i["focus " + g + " " + m] = function (t) {
                                (t.type === m && c(t)) || this.show();
                            }),
                            (i.blur = "hide"),
                            (i[v] = function (t) {
                                c(t) || this.hide();
                            }),
                            i),
                });
            }
        }),
        Oi.use(function t(e) {
            if (!t.installed) {
                var i = e.util,
                    n = i.addClass,
                    o = i.ajax,
                    r = i.matches,
                    s = i.noop,
                    a = i.on,
                    l = i.removeClass,
                    h = i.trigger;
                e.component("upload", {
                    props: {
                        allow: String,
                        clsDragover: String,
                        concurrent: Number,
                        maxSize: Number,
                        mime: String,
                        msgInvalidMime: String,
                        msgInvalidName: String,
                        msgInvalidSize: String,
                        multiple: Boolean,
                        name: String,
                        params: Object,
                        type: String,
                        url: String,
                    },
                    defaults: {
                        allow: !1,
                        clsDragover: "uk-dragover",
                        concurrent: 1,
                        maxSize: 0,
                        mime: !1,
                        msgInvalidMime: "Invalid File Type: %s",
                        msgInvalidName: "Invalid File Name: %s",
                        msgInvalidSize: "Invalid File Size: %s Bytes Max",
                        multiple: !1,
                        name: "files[]",
                        params: {},
                        type: "POST",
                        url: "",
                        abort: s,
                        beforeAll: s,
                        beforeSend: s,
                        complete: s,
                        completeAll: s,
                        error: s,
                        fail: s,
                        load: s,
                        loadEnd: s,
                        loadStart: s,
                        progress: s,
                    },
                    events: {
                        change: function (t) {
                            r(t.target, 'input[type="file"]') &&
                                (t.preventDefault(),
                                    t.target.files && this.upload(t.target.files),
                                    (t.target.value = ""));
                        },
                        drop: function (t) {
                            c(t);
                            var e = t.dataTransfer;
                            e &&
                                e.files &&
                                (l(this.$el, this.clsDragover), this.upload(e.files));
                        },
                        dragenter: function (t) {
                            c(t);
                        },
                        dragover: function (t) {
                            c(t), n(this.$el, this.clsDragover);
                        },
                        dragleave: function (t) {
                            c(t), l(this.$el, this.clsDragover);
                        },
                    },
                    methods: {
                        upload: function (t) {
                            var e = this;
                            if (t.length) {
                                h(this.$el, "upload", [t]);
                                for (var i = 0; i < t.length; i++) {
                                    if (e.maxSize && 1e3 * e.maxSize < t[i].size)
                                        return void e.fail(e.msgInvalidSize.replace("%s", e.allow));
                                    if (e.allow && !u(e.allow, t[i].name))
                                        return void e.fail(e.msgInvalidName.replace("%s", e.allow));
                                    if (e.mime && !u(e.mime, t[i].type))
                                        return void e.fail(e.msgInvalidMime.replace("%s", e.mime));
                                }
                                this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                                var n = (function (t, e) {
                                    for (var i = [], n = 0; n < t.length; n += e) {
                                        for (var o = [], r = 0; r < e; r++) o.push(t[n + r]);
                                        i.push(o);
                                    }
                                    return i;
                                })(t, this.concurrent),
                                    r = function (t) {
                                        var i = new FormData();
                                        for (var s in (t.forEach(function (t) {
                                            return i.append(e.name, t);
                                        }),
                                            e.params))
                                            i.append(s, e.params[s]);
                                        o(e.url, {
                                            data: i,
                                            method: e.type,
                                            beforeSend: function (t) {
                                                var i = t.xhr;
                                                i.upload && a(i.upload, "progress", e.progress),
                                                    ["loadStart", "load", "loadEnd", "abort"].forEach(
                                                        function (t) {
                                                            return a(i, t.toLowerCase(), e[t]);
                                                        }
                                                    ),
                                                    e.beforeSend(t);
                                            },
                                        }).then(
                                            function (t) {
                                                e.complete(t),
                                                    n.length ? r(n.shift()) : e.completeAll(t);
                                            },
                                            function (t) {
                                                return e.error(t.message);
                                            }
                                        );
                                    };
                                r(n.shift());
                            }
                        },
                    },
                });
            }
            function u(t, e) {
                return e.match(
                    new RegExp(
                        "^" +
                        t
                            .replace(/\//g, "\\/")
                            .replace(/\*\*/g, "(\\/[^\\/]+)*")
                            .replace(/\*/g, "[^\\/]+")
                            .replace(/((?!\\))\?/g, "$1.") +
                        "$",
                        "i"
                    )
                );
            }
            function c(t) {
                t.preventDefault(), t.stopPropagation();
            }
        }),
        (function (t) {
            var e = t.connect,
                i = t.disconnect;
            function n() {
                r(rt.body, e),
                    si.flush(),
                    new lt(function (t) {
                        return t.forEach(o);
                    }).observe(st, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0,
                    }),
                    (t._initialized = !0);
            }
            function o(n) {
                var o = n.target;
                ("attributes" !== n.type
                    ? (function (t) {
                        for (
                            var n = t.addedNodes, o = t.removedNodes, s = 0;
                            s < n.length;
                            s++
                        )
                            r(n[s], e);
                        for (var a = 0; a < o.length; a++) r(o[a], i);
                        return !0;
                    })(n)
                    : (function (e) {
                        var i = e.target,
                            n = e.attributeName;
                        if ("href" === n) return !0;
                        var o = _i(n);
                        if (o && o in t.components) {
                            if (J(i, n)) return t[o](i), !0;
                            var r = t.getComponent(i, o);
                            return r ? (r.$destroy(), !0) : void 0;
                        }
                    })(n)) && t.update("update", o, !0);
            }
            function r(t, e) {
                if (1 === t.nodeType && !J(t, "uk-no-boot"))
                    for (e(t), t = t.firstElementChild; t;) {
                        var i = t.nextElementSibling;
                        r(t, e), (t = i);
                    }
            }
            lt &&
                (rt.body
                    ? n()
                    : new lt(function () {
                        rt.body && (this.disconnect(), n());
                    }).observe(st, { childList: !0, subtree: !0 }));
        })(Oi),
        Oi
    );
});
