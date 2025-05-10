"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2225], {
        40155: function(n, t, e) {
            var i = e(34817).default,
                r = e(82294).default;
            t.Z = void 0;
            var o = r(e(2265)),
                a = i(e(54440));
            e(15218);
            var l = e(9273),
                d = i(e(35988)),
                c = function(n, t) {
                    var e = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && 0 > t.indexOf(i) && (e[i] = n[i]);
                    if (null != n && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (e[i[r]] = n[i[r]]);
                    return e
                };
            t.Z = n => {
                let {
                    getPrefixCls: t,
                    direction: e,
                    divider: i
                } = o.useContext(l.ConfigContext), {
                    prefixCls: r,
                    type: f = "horizontal",
                    orientation: u = "center",
                    orientationMargin: h,
                    className: s,
                    rootClassName: p,
                    children: m,
                    dashed: g,
                    plain: x,
                    style: b
                } = n, w = c(n, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "plain", "style"]), y = t("divider", r), [_, v, C] = (0, d.default)(y), $ = u.length > 0 ? `-${u}` : u, k = !!m, I = "left" === u && null != h, j = "right" === u && null != h, z = (0, a.default)(y, null == i ? void 0 : i.className, v, C, `${y}-${f}`, {
                    [`${y}-with-text`]: k,
                    [`${y}-with-text${$}`]: k,
                    [`${y}-dashed`]: !!g,
                    [`${y}-plain`]: !!x,
                    [`${y}-rtl`]: "rtl" === e,
                    [`${y}-no-default-orientation-margin-left`]: I,
                    [`${y}-no-default-orientation-margin-right`]: j
                }, s, p), P = o.useMemo(() => "number" == typeof h ? h : /^\d+$/.test(h) ? Number(h) : h, [h]), S = Object.assign(Object.assign({}, I && {
                    marginLeft: P
                }), j && {
                    marginRight: P
                });
                return _(o.createElement("div", Object.assign({
                    className: z,
                    style: Object.assign(Object.assign({}, null == i ? void 0 : i.style), b)
                }, w, {
                    role: "separator"
                }), m && "vertical" !== f && o.createElement("span", {
                    className: `${y}-inner-text`,
                    style: S
                }, m)))
            }
        },
        35988: function(n, t, e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prepareComponentToken = t.default = void 0;
            var i = e(96243),
                r = e(5101),
                o = e(18710);
            let a = n => {
                    let {
                        componentCls: t,
                        sizePaddingEdgeHorizontal: e,
                        colorSplit: o,
                        lineWidth: a,
                        textPaddingInline: l,
                        orientationMargin: d,
                        verticalMarginInline: c
                    } = n;
                    return {
                        [t]: Object.assign(Object.assign({}, (0, r.resetComponent)(n)), {
                            borderBlockStart: `${(0,i.unit)(a)} solid ${o}`,
                            "&-vertical": {
                                position: "relative",
                                top: "-0.06em",
                                display: "inline-block",
                                height: "0.9em",
                                marginInline: c,
                                marginBlock: 0,
                                verticalAlign: "middle",
                                borderTop: 0,
                                borderInlineStart: `${(0,i.unit)(a)} solid ${o}`
                            },
                            "&-horizontal": {
                                display: "flex",
                                clear: "both",
                                width: "100%",
                                minWidth: "100%",
                                margin: `${(0,i.unit)(n.dividerHorizontalGutterMargin)} 0`
                            },
                            [`&-horizontal${t}-with-text`]: {
                                display: "flex",
                                alignItems: "center",
                                margin: `${(0,i.unit)(n.dividerHorizontalWithTextGutterMargin)} 0`,
                                color: n.colorTextHeading,
                                fontWeight: 500,
                                fontSize: n.fontSizeLG,
                                whiteSpace: "nowrap",
                                textAlign: "center",
                                borderBlockStart: `0 ${o}`,
                                "&::before, &::after": {
                                    position: "relative",
                                    width: "50%",
                                    borderBlockStart: `${(0,i.unit)(a)} solid transparent`,
                                    borderBlockStartColor: "inherit",
                                    borderBlockEnd: 0,
                                    transform: "translateY(50%)",
                                    content: "''"
                                }
                            },
                            [`&-horizontal${t}-with-text-left`]: {
                                "&::before": {
                                    width: `calc(${d} * 100%)`
                                },
                                "&::after": {
                                    width: `calc(100% - ${d} * 100%)`
                                }
                            },
                            [`&-horizontal${t}-with-text-right`]: {
                                "&::before": {
                                    width: `calc(100% - ${d} * 100%)`
                                },
                                "&::after": {
                                    width: `calc(${d} * 100%)`
                                }
                            },
                            [`${t}-inner-text`]: {
                                display: "inline-block",
                                paddingBlock: 0,
                                paddingInline: l
                            },
                            "&-dashed": {
                                background: "none",
                                borderColor: o,
                                borderStyle: "dashed",
                                borderWidth: `${(0,i.unit)(a)} 0 0`
                            },
                            [`&-horizontal${t}-with-text${t}-dashed`]: {
                                "&::before, &::after": {
                                    borderStyle: "dashed none none"
                                }
                            },
                            [`&-vertical${t}-dashed`]: {
                                borderInlineStartWidth: a,
                                borderInlineEnd: 0,
                                borderBlockStart: 0,
                                borderBlockEnd: 0
                            },
                            [`&-plain${t}-with-text`]: {
                                color: n.colorText,
                                fontWeight: "normal",
                                fontSize: n.fontSize
                            },
                            [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
                                "&::before": {
                                    width: 0
                                },
                                "&::after": {
                                    width: "100%"
                                },
                                [`${t}-inner-text`]: {
                                    paddingInlineStart: e
                                }
                            },
                            [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
                                "&::before": {
                                    width: "100%"
                                },
                                "&::after": {
                                    width: 0
                                },
                                [`${t}-inner-text`]: {
                                    paddingInlineEnd: e
                                }
                            }
                        })
                    }
                },
                l = n => ({
                    textPaddingInline: "1em",
                    orientationMargin: .05,
                    verticalMarginInline: n.marginXS
                });
            t.prepareComponentToken = l, t.default = (0, o.genStyleHooks)("Divider", n => {
                let t = (0, o.mergeToken)(n, {
                    dividerHorizontalWithTextGutterMargin: n.margin,
                    dividerHorizontalGutterMargin: n.marginLG,
                    sizePaddingEdgeHorizontal: 0
                });
                return [a(t)]
            }, l, {
                unitless: {
                    orientationMargin: !0
                }
            })
        },
        32225: function(n, t, e) {
            e.d(t, {
                jp: function() {
                    return D
                },
                W2: function() {
                    return O
                },
                xo: function() {
                    return L
                },
                FN: function() {
                    return R
                },
                fk: function() {
                    return T
                },
                $Q: function() {
                    return N
                },
                JO: function() {
                    return E
                },
                ly: function() {
                    return q
                },
                vE: function() {
                    return M
                },
                bC: function() {
                    return G
                },
                xv: function() {
                    return F
                },
                D7: function() {
                    return A
                },
                Dx: function() {
                    return B
                },
                Px: function() {
                    return H
                },
                dc: function() {
                    return W
                },
                im: function() {
                    return Z
                }
            });
            var i = e(60230),
                r = e(57437);
            e(2265);
            var o = e(16691),
                a = e.n(o),
                l = e(15840),
                d = e(4941),
                c = e.n(d),
                f = e(88110),
                u = e.n(f),
                h = e(40155),
                s = e(18893);

            function p() {
                let n = (0, i._)(["\n  background: url(", ");\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function m() {
                let n = (0, i._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: calc(100% - 64px);\n\n  ", " {\n    margin-top: 0;\n    padding: 8.5rem 7rem;\n  }\n\n  ", " {\n    padding: 2.5rem;\n  }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                let n = (0, i._)(["\n  border: ", ";\n  border-radius: 24px;\n  width: 60%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  ", " {\n    height: 80%;\n  }\n\n  ", " {\n    height: 80%;\n  }\n\n  ", " {\n    width: 100%;\n    height: 100%;\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function x() {
                let n = (0, i._)(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 3rem;\n  line-height: 5rem;\n  font-weight: 600;\n\n  ", " {\n    font-size: 4rem;\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function b() {
                let n = (0, i._)(["\n  display: flex;\n  gap: 1.6rem;\n  padding: 1.4rem 7rem;\n  border: ", ";\n  border-radius: 50px;\n  margin: 1.6rem 0 2.4rem 0;\n\n  ", " {\n    margin: 3.6rem 0 3rem 0;\n    gap: 1rem;\n    padding: 1.5rem 9rem;\n  }\n\n  ", " {\n    margin: 3.6rem 0 3rem 0;\n    gap: 1rem;\n    padding: 1.5rem 9rem;\n  }\n\n  ", " {\n    padding: 1rem 2rem;\n    gap: 1rem;\n    margin: 3.5rem 0 2.5rem 0;\n  }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function w() {
                let n = (0, i._)(["\n  width: 30px;\n  height: auto;\n\n  ", " {\n    width: 20px;\n    height: 16px;\n  }\n\n  ", " {\n    width: 20px;\n    height: 16px;\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function y() {
                let n = (0, i._)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 2rem;\n  line-height: 4.2rem;\n  font-family: ", ";\n"]);
                return y = function() {
                    return n
                }, n
            }

            function _() {
                let n = (0, i._)(["\n  position: absolute;\n  right: 0;\n  width: 45%;\n  height: auto;\n  bottom: 0;\n\n  ", " {\n    width: 50%;\n    height: auto;\n    bottom: 0;\n  }\n\n  ", " {\n    width: 50%;\n    height: auto;\n    bottom: 0;\n    transform: rotate(-13deg);\n  }\n\n  ", " {\n    display: none;\n    transform: none;\n  }\n\n  // @include screen_xxl {\n  //     width: 350px;\n  //     height: 370px;\n  //     left: 72%\n  // }\n\n  // @include screen_xl {\n  //     display: none;\n  // }\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function v() {
                let n = (0, i._)(["\n  border: unset;\n"]);
                return v = function() {
                    return n
                }, n
            }

            function C() {
                let n = (0, i._)([""]);
                return C = function() {
                    return n
                }, n
            }

            function $() {
                let n = (0, i._)(["\n  width: 25%;\n\n  ", " {\n    width: 25%;\n    height: auto;\n    bottom: 0;\n  }\n\n  ", " {\n    width: 25%;\n    height: auto;\n    bottom: 0;\n    transform: rotate(-13deg);\n  }\n"]);
                return $ = function() {
                    return n
                }, n
            }

            function k() {
                let n = (0, i._)(["\n  background: -webkit-linear-gradient(180deg, #e37484 -10.35%, #e37484 40.6%, #ae4450 87.88%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n  text-align: center;\n  font-size: 16.8rem;\n  line-height: 17rem;\n  font-family: ", ";\n  ", " {\n    font-size: 10rem;\n    line-height: 12rem;\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function I() {
                let n = (0, i._)(["\n  font-family: ", ";\n  font-weight: 500;\n  font-size: 3.5rem;\n  line-height: 2.4rem;\n  text-align: center;\n  color: #c34a55;\n  ", " {\n    font-size: 2rem;\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function j() {
                let n = (0, i._)(["\n  border: 1px solid #d6d2cf;\n  width: 50%;\n  min-width: 50%;\n"]);
                return j = function() {
                    return n
                }, n
            }

            function z() {
                let n = (0, i._)(["\n  font-family: ", ";\n  font-weight: 600;\n  font-size: 3.2rem;\n  line-height: 4.2rem;\n  text-align: center;\n  color: #33312f;\n  padding: 0 20rem;\n  ", " {\n    padding: 0 2rem;\n    font-size: 2rem;\n  }\n"]);
                return z = function() {
                    return n
                }, n
            }

            function P() {
                let n = (0, i._)(["\n  border-radius: 8px;\n  background-color: #ae4450;\n  margin-top: 2rem;\n  font-weight: 600;\n  height: 4rem;\n  width: 20rem;\n"]);
                return P = function() {
                    return n
                }, n
            }

            function S() {
                let n = (0, i._)(["\n  width: 20rem;\n  height: auto;\n"]);
                return S = function() {
                    return n
                }, n
            }
            let O = l.ZP.div.withConfig({
                    componentId: "sc-6a74f5b5-0"
                })(p(), "/_next/static/media/background.9953cd10.png"),
                Z = l.ZP.div.withConfig({
                    componentId: "sc-6a74f5b5-1"
                })(m(), s.q.tablet_portrait, s.q.phone_only),
                q = l.ZP.div.withConfig({
                    componentId: "sc-6a74f5b5-2"
                })(g(), n => {
                    var t;
                    return "4px solid ".concat(null === (t = n.theme.colors) || void 0 === t ? void 0 : t.primary_7)
                }, s.q.laptop_only, s.q.tablet_landscape, s.q.tablet_portrait),
                B = l.ZP.p.withConfig({
                    componentId: "sc-6a74f5b5-3"
                })(x(), n => {
                    var t;
                    return null === (t = n.theme.colors) || void 0 === t ? void 0 : t.primary_4
                }, c().style.fontFamily, s.q.phone_only),
                M = l.ZP.div.withConfig({
                    componentId: "sc-6a74f5b5-4"
                })(b(), n => {
                    var t;
                    return "2px solid ".concat(null === (t = n.theme.colors) || void 0 === t ? void 0 : t.primary_4)
                }, s.q.laptop_only, s.q.tablet_landscape, s.q.phone_only),
                E = (0, l.ZP)(n => {
                    let {
                        className: t,
                        color: e
                    } = n;
                    return (0, r.jsxs)("svg", {
                        width: "42",
                        height: "35",
                        viewBox: "0 0 42 35",
                        className: t,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("g", {
                            filter: "url(#filter0_i_3115_20585)",
                            children: (0, r.jsx)("path", {
                                d: "M22.1127 33.5754L37.933 18.0653C41.8197 14.2356 42.3861 7.97415 38.7143 3.97216C37.7934 2.96364 36.6724 2.14978 35.4199 1.58032C34.1674 1.01085 32.8096 0.697734 31.4295 0.6601C30.0494 0.622465 28.6759 0.861101 27.393 1.36143C26.1101 1.86176 24.9448 2.61327 23.9682 3.57004L20.9994 6.49973L18.4408 3.97216C14.5346 0.161651 8.14785 -0.39365 4.06582 3.20623C3.03713 4.10904 2.207 5.208 1.62614 6.43597C1.04529 7.66393 0.725908 8.99511 0.68752 10.3482C0.649133 11.7012 0.892542 13.0478 1.40288 14.3055C1.91321 15.5632 2.67975 16.7057 3.65566 17.6632L19.8861 33.5754C20.1824 33.8631 20.5825 34.0244 20.9994 34.0244C21.4164 34.0244 21.8165 33.8631 22.1127 33.5754Z",
                                fill: e || "#DB5E6C"
                            })
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                id: "filter0_i_3115_20585",
                                x: "0.683594",
                                y: "0.65625",
                                width: "40.4961",
                                height: "33.3691",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, r.jsx)("feOffset", {}), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.5"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.2 0 0 0 0 0.192157 0 0 0 0 0.184314 0 0 0 0.25 0"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect1_innerShadow_3115_20585"
                                })]
                            })
                        })]
                    })
                }).withConfig({
                    componentId: "sc-6a74f5b5-5"
                })(w(), s.q.tablet_landscape, s.q.laptop_only),
                F = l.ZP.p.withConfig({
                    componentId: "sc-6a74f5b5-6"
                })(y(), n => {
                    var t;
                    return null === (t = n.theme.colors) || void 0 === t ? void 0 : t.primary_1
                }, c().style.fontFamily),
                N = (0, l.ZP)(a()).withConfig({
                    componentId: "sc-6a74f5b5-7"
                })(_(), s.q.laptop_only, s.q.tablet_landscape, s.q.tablet_portrait),
                G = (0, l.ZP)(q).withConfig({
                    componentId: "sc-6a74f5b5-8"
                })(v());
            (0, l.ZP)(M).withConfig({
                componentId: "sc-6a74f5b5-9"
            })(C());
            let T = (0, l.ZP)(N).withConfig({
                    componentId: "sc-6a74f5b5-10"
                })($(), s.q.laptop_only, s.q.tablet_landscape),
                W = l.ZP.h1.withConfig({
                    componentId: "sc-6a74f5b5-11"
                })(k(), c().style.fontFamily, s.q.phone_only),
                H = l.ZP.p.withConfig({
                    componentId: "sc-6a74f5b5-12"
                })(I(), c().style.fontFamily, s.q.phone_only),
                L = (0, l.ZP)(h.Z).withConfig({
                    componentId: "sc-6a74f5b5-13"
                })(j()),
                A = l.ZP.p.withConfig({
                    componentId: "sc-6a74f5b5-14"
                })(z(), c().style.fontFamily, s.q.phone_only),
                D = (0, l.ZP)(u()).withConfig({
                    componentId: "sc-6a74f5b5-15"
                })(P()),
                R = (0, l.ZP)(a()).withConfig({
                    componentId: "sc-6a74f5b5-16"
                })(S())
        },
        18893: function(n, t, e) {
            e.d(t, {
                q: function() {
                    return i
                }
            });
            let i = {
                phone_only: "@media only screen and (max-width: 600px)",
                tablet_portrait_up: "@media only screen and (min-width: 600px)",
                tablet_portrait: "@media only screen and (max-width: 1024px)",
                tablet_portrait_only: "@media only screen and (min-width: 600px) and (max-width: 1024px)",
                tablet_landscape: "@media only screen and (max-width: 1224px)",
                tablet_landscape_only: "@media only screen and (min-width: 1024px) and (max-width: 1224px)",
                laptop_only: "@media only screen and (min-width: 1224px) and (max-width: 1800px)",
                desktop_up: "@media only screen and (min-width: 1440px)"
            }
        }
    }
]);