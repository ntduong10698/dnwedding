(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2811], {
        654: function(t) {
            t.exports = function(t, n, e, r) {
                var i = -1,
                    o = null == t ? 0 : t.length;
                for (r && o && (e = t[++i]); ++i < o;) e = n(e, t[i], i, t);
                return e
            }
        },
        18247: function(t) {
            t.exports = function(t, n, e, r, i) {
                return i(t, function(t, i, o) {
                    e = r ? (r = !1, t) : n(e, t, i, o)
                }), e
            }
        },
        42077: function(t, n, e) {
            var r = e(66425);
            t.exports = function(t, n) {
                return r(t, n)
            }
        },
        45100: function(t, n, e) {
            var r = e(654),
                i = e(33074),
                o = e(57322),
                s = e(18247),
                a = e(12068);
            t.exports = function(t, n, e) {
                var u = a(t) ? r : s,
                    c = arguments.length < 3;
                return u(t, o(n, 4), e, c, i)
            }
        },
        42773: function(t, n, e) {
            "use strict";
            e.d(n, {
                FH: function() {
                    return s
                },
                Y6: function() {
                    return a
                }
            });
            var r, i, o = e(68067);
            let s = o.Z.API_URL,
                a = "/gateway/asset/api/v1/attachment";
            (r = i || (i = {})).authenticator = "authenticator", r.article = "article";
            let u = (t, n, e) => "/gateway/".concat(t, "/api").concat(n).concat(e);
            u(i.authenticator, "/v1", "/auth"), u(i.article, "/v1", "/public")
        },
        59462: function(t, n, e) {
            "use strict";
            e.d(n, {
                Tn: function() {
                    return o
                }
            });
            var r = e(42773),
                i = e(68067);
            e(36396);
            let o = t => "string" != typeof t || /^(http(s?):\/\/)[a-z]{1,}/.test(null != t ? t : "") ? t : i.Z.ASSET_BASE_URL + r.Y6 + t
        },
        85479: function(t, n, e) {
            "use strict";
            e.d(n, {
                i9: function() {
                    return a
                }
            }), e(42077);
            var r = e(77243),
                i = e.n(r),
                o = e(99231),
                s = e.n(o);
            e(45100);
            let a = t => !i()(t) && !s()(t) && "null" !== t && "undefined" !== t
        },
        68067: function(t, n, e) {
            "use strict";
            var r = e(85479),
                i = e(62601);
            let o = t => (0, r.i9)(i.env[t]) ? i.env[t] : "";
            n.Z = {
                get AUTHENTICATOR_SUFFIX() {
                    var s;
                    return null !== (s = i.env.NEXT_PUBLIC_AUTHENTICATOR_SUFFIX) && void 0 !== s ? s : ""
                },
                get AUTHENTICATOR_ADMIN_SUFFIX() {
                    var a;
                    return null !== (a = i.env.NEXT_PUBLIC_AUTHENTICATOR_ADMIN_SUFFIX) && void 0 !== a ? a : ""
                },
                get AUTHENTICATOR_USER_SUFFIX() {
                    var u;
                    return null !== (u = i.env.NEXT_PUBLIC_AUTHENTICATOR_USER_SUFFIX) && void 0 !== u ? u : ""
                },
                get API_URL() {
                    return o("API_URL") || i.env.NEXT_PUBLIC_API_URL || ""
                },
                get THE_MOI_CUOI_URL() {
                    return "https://themoicuoi.yido.vn"
                },
                get ACCOUNT_WEB() {
                    return o("ACCOUNT_WEB") || i.env.NEXT_PUBLIC_ACCOUNT_WEB || ""
                },
                get FACEBOOK_PAGE_LINK() {
                    return "https://www.facebook.com/Yido.vn/"
                },
                get INSTAGRAM_PAGE_LINK() {
                    return "https://www.instagram.com/yido.vn/"
                },
                get TIKTOK_PAGE_LINK() {
                    return "https://www.tiktok.com/@yido.vn?lang=vi-VN"
                },
                get CONTACT_ADDRESS() {
                    return o("CONTACT_ADDRESS") || i.env.NEXT_PUBLIC_CONTACT_ADDRESS || "12/12 Phạm Tuấn T\xe0i, Dịch Vọng Hậu, Cầu Giấy, H\xe0 Nội"
                },
                get CONTACT_ADDRESS_LINK() {
                    return decodeURIComponent(o("CONTACT_ADDRESS_LINK") || i.env.NEXT_PUBLIC_CONTACT_LINK_ADDRESS || "https://maps.app.goo.gl/FAyVhqKsUacqSsdf8")
                },
                get CONTACT_ADDRESS_MAP() {
                    return decodeURIComponent(o("CONTACT_ADDRESS_MAP") || i.env.NEXT_PUBLIC_CONTACT_MAP_ADDRESS || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7576851669232!2d105.78416177606184!3d21.04237948730901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab340a40c31d%3A0xb9b6fea80b22151b!2zMTIvMTIgUC4gUGjhuqFtIFR14bqlbiBUw6BpLCBU4buVIDAxLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1703555051622!5m2!1svi!2s")
                },
                get CONTACT_MAIL() {
                    return o("CONTACT_MAIL") || i.env.NEXT_PUBLIC_CONTACT_MAIL || "contact@ctigroupjsc.com"
                },
                get CONTACT_PHONE() {
                    return o("CONTACT_PHONE") || i.env.NEXT_PUBLIC_CONTACT_PHONE || "0352050026"
                },
                get DOMAIN() {
                    return o("DOMAIN") || i.env.NEXT_PUBLIC_DOMAIN || ""
                },
                get DYNAMIC_URL() {
                    return o("API_URL") || i.env.NEXT_PUBLIC_API_URL || ""
                },
                get ZALO_CONTACT_LINK() {
                    return o("ZALO_CONTACT_LINK") || ""
                },
                get ASSET_BASE_URL() {
                    return o("API_URL") || i.env.NEXT_PUBLIC_API_URL || ""
                },
                get CORE_BASE_URL() {
                    return o("API_URL") || i.env.NEXT_PUBLIC_API_URL || ""
                },
                get CONTACT_BASE_URL() {
                    return o("API_URL") || i.env.NEXT_PUBLIC_API_URL || ""
                }
            }
        },
        7404: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__WindSong_c11fcd', '__WindSong_Fallback_c11fcd'",
                    fontStyle: "normal"
                },
                className: "__className_c11fcd"
            }
        },
        36396: function(t, n, e) {
            var r, i;
            void 0 !== (i = "function" == typeof(r = function() {
                var t, n, e, r = {};
                r.version = "0.2.0";
                var i = r.settings = {
                    minimum: .08,
                    easing: "ease",
                    positionUsing: "",
                    speed: 200,
                    trickle: !0,
                    trickleRate: .02,
                    trickleSpeed: 800,
                    showSpinner: !0,
                    barSelector: '[role="bar"]',
                    spinnerSelector: '[role="spinner"]',
                    parent: "body",
                    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                };

                function o(t, n, e) {
                    return t < n ? n : t > e ? e : t
                }
                r.configure = function(t) {
                    var n, e;
                    for (n in t) void 0 !== (e = t[n]) && t.hasOwnProperty(n) && (i[n] = e);
                    return this
                }, r.status = null, r.set = function(t) {
                    var n = r.isStarted();
                    t = o(t, i.minimum, 1), r.status = 1 === t ? null : t;
                    var e = r.render(!n),
                        u = e.querySelector(i.barSelector),
                        c = i.speed,
                        l = i.easing;
                    return e.offsetWidth, s(function(n) {
                        var o, s;
                        "" === i.positionUsing && (i.positionUsing = r.getPositioningCSS()), a(u, (o = t, (s = "translate3d" === i.positionUsing ? {
                            transform: "translate3d(" + (-1 + o) * 100 + "%,0,0)"
                        } : "translate" === i.positionUsing ? {
                            transform: "translate(" + (-1 + o) * 100 + "%,0)"
                        } : {
                            "margin-left": (-1 + o) * 100 + "%"
                        }).transition = "all " + c + "ms " + l, s)), 1 === t ? (a(e, {
                            transition: "none",
                            opacity: 1
                        }), e.offsetWidth, setTimeout(function() {
                            a(e, {
                                transition: "all " + c + "ms linear",
                                opacity: 0
                            }), setTimeout(function() {
                                r.remove(), n()
                            }, c)
                        }, c)) : setTimeout(n, c)
                    }), this
                }, r.isStarted = function() {
                    return "number" == typeof r.status
                }, r.start = function() {
                    r.status || r.set(0);
                    var t = function() {
                        setTimeout(function() {
                            r.status && (r.trickle(), t())
                        }, i.trickleSpeed)
                    };
                    return i.trickle && t(), this
                }, r.done = function(t) {
                    return t || r.status ? r.inc(.3 + .5 * Math.random()).set(1) : this
                }, r.inc = function(t) {
                    var n = r.status;
                    return n ? ("number" != typeof t && (t = (1 - n) * o(Math.random() * n, .1, .95)), n = o(n + t, 0, .994), r.set(n)) : r.start()
                }, r.trickle = function() {
                    return r.inc(Math.random() * i.trickleRate)
                }, t = 0, n = 0, r.promise = function(e) {
                    return e && "resolved" !== e.state() && (0 === n && r.start(), t++, n++, e.always(function() {
                        0 == --n ? (t = 0, r.done()) : r.set((t - n) / t)
                    })), this
                }, r.render = function(t) {
                    if (r.isRendered()) return document.getElementById("nprogress");
                    c(document.documentElement, "nprogress-busy");
                    var n = document.createElement("div");
                    n.id = "nprogress", n.innerHTML = i.template;
                    var e, o, s = n.querySelector(i.barSelector),
                        u = t ? "-100" : (-1 + (r.status || 0)) * 100,
                        l = document.querySelector(i.parent);
                    return a(s, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + u + "%,0,0)"
                    }), !i.showSpinner && (o = n.querySelector(i.spinnerSelector)) && f(o), l != document.body && c(l, "nprogress-custom-parent"), l.appendChild(n), n
                }, r.remove = function() {
                    l(document.documentElement, "nprogress-busy"), l(document.querySelector(i.parent), "nprogress-custom-parent");
                    var t = document.getElementById("nprogress");
                    t && f(t)
                }, r.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }, r.getPositioningCSS = function() {
                    var t = document.body.style,
                        n = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
                    return n + "Perspective" in t ? "translate3d" : n + "Transform" in t ? "translate" : "margin"
                };
                var s = (e = [], function(t) {
                        e.push(t), 1 == e.length && function t() {
                            var n = e.shift();
                            n && n(t)
                        }()
                    }),
                    a = function() {
                        var t = ["Webkit", "O", "Moz", "ms"],
                            n = {};

                        function e(e, r, i) {
                            var o;
                            r = n[o = (o = r).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, n) {
                                return n.toUpperCase()
                            })] || (n[o] = function(n) {
                                var e = document.body.style;
                                if (n in e) return n;
                                for (var r, i = t.length, o = n.charAt(0).toUpperCase() + n.slice(1); i--;)
                                    if ((r = t[i] + o) in e) return r;
                                return n
                            }(o)), e.style[r] = i
                        }
                        return function(t, n) {
                            var r, i, o = arguments;
                            if (2 == o.length)
                                for (r in n) void 0 !== (i = n[r]) && n.hasOwnProperty(r) && e(t, r, i);
                            else e(t, o[1], o[2])
                        }
                    }();

                function u(t, n) {
                    return ("string" == typeof t ? t : _(t)).indexOf(" " + n + " ") >= 0
                }

                function c(t, n) {
                    var e = _(t),
                        r = e + n;
                    u(e, n) || (t.className = r.substring(1))
                }

                function l(t, n) {
                    var e, r = _(t);
                    u(t, n) && (e = r.replace(" " + n + " ", " "), t.className = e.substring(1, e.length - 1))
                }

                function _(t) {
                    return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
                }

                function f(t) {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }
                return r
            }) ? r.call(n, e, n, t) : r) && (t.exports = i)
        }
    }
]);