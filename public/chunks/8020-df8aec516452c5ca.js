"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8020], {
        70988: function(e, t, n) {
            var o = n(34817).default,
                a = n(82294).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TypeIcon = t.PureContent = void 0, t.getCloseIcon = b;
            var i = a(n(2265)),
                r = o(n(18653)),
                l = o(n(46053)),
                c = o(n(70493)),
                s = o(n(36472)),
                u = o(n(4048)),
                f = o(n(94613)),
                d = o(n(54440)),
                p = n(14807),
                m = n(9273),
                g = o(n(70252)),
                v = o(n(97176)),
                y = o(n(64740)),
                h = function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++) 0 > t.indexOf(o[a]) && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
                    return n
                };

            function b(e, t) {
                return null === t || !1 === t ? null : t || i.createElement("span", {
                    className: `${e}-close-x`
                }, i.createElement(c.default, {
                    className: `${e}-close-icon`
                }))
            }
            t.TypeIcon = {
                info: i.createElement(u.default, null),
                success: i.createElement(r.default, null),
                error: i.createElement(l.default, null),
                warning: i.createElement(s.default, null),
                loading: i.createElement(f.default, null)
            };
            let $ = {
                    success: r.default,
                    info: u.default,
                    error: l.default,
                    warning: s.default
                },
                k = e => {
                    let {
                        prefixCls: t,
                        icon: n,
                        type: o,
                        message: a,
                        description: r,
                        btn: l,
                        role: c = "alert"
                    } = e, s = null;
                    return n ? s = i.createElement("span", {
                        className: `${t}-icon`
                    }, n) : o && (s = i.createElement($[o] || null, {
                        className: (0, d.default)(`${t}-icon`, `${t}-icon-${o}`)
                    })), i.createElement("div", {
                        className: (0, d.default)({
                            [`${t}-with-icon`]: s
                        }),
                        role: c
                    }, s, i.createElement("div", {
                        className: `${t}-message`
                    }, a), i.createElement("div", {
                        className: `${t}-description`
                    }, r), l && i.createElement("div", {
                        className: `${t}-btn`
                    }, l))
                };
            t.PureContent = k, t.default = e => {
                let {
                    prefixCls: t,
                    className: n,
                    icon: o,
                    type: a,
                    message: r,
                    description: l,
                    btn: c,
                    closable: s = !0,
                    closeIcon: u,
                    className: f
                } = e, $ = h(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
                    getPrefixCls: N
                } = i.useContext(m.ConfigContext), C = t || N("notification"), E = `${C}-notice`, x = (0, g.default)(C), [O, S, w] = (0, v.default)(C, x);
                return O(i.createElement("div", {
                    className: (0, d.default)(`${E}-pure-panel`, S, n, w, x)
                }, i.createElement(y.default, {
                    prefixCls: C
                }), i.createElement(p.Notice, Object.assign({}, $, {
                    prefixCls: C,
                    eventKey: "pure",
                    duration: null,
                    closable: s,
                    className: (0, d.default)({
                        notificationClassName: f
                    }),
                    closeIcon: b(C, u),
                    content: i.createElement(k, {
                        prefixCls: E,
                        icon: o,
                        type: a,
                        message: r,
                        description: l,
                        btn: c
                    })
                }))))
            }
        },
        69753: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NotificationPlacements = void 0, t.NotificationPlacements = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"]
        },
        97176: function(e, t, n) {
            var o = n(34817).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prepareNotificationToken = t.prepareComponentToken = t.genNoticeStyle = t.default = void 0;
            var a = n(96243),
                i = n(45115),
                r = n(5101),
                l = n(18710),
                c = o(n(3543)),
                s = o(n(93223));
            let u = e => {
                let {
                    iconCls: t,
                    componentCls: n,
                    boxShadow: o,
                    fontSizeLG: i,
                    notificationMarginBottom: r,
                    borderRadiusLG: l,
                    colorSuccess: c,
                    colorInfo: s,
                    colorWarning: u,
                    colorError: f,
                    colorTextHeading: d,
                    notificationBg: p,
                    notificationPadding: m,
                    notificationMarginEdge: g,
                    fontSize: v,
                    lineHeight: y,
                    width: h,
                    notificationIconSize: b,
                    colorText: $
                } = e, k = `${n}-notice`;
                return {
                    position: "relative",
                    marginBottom: r,
                    marginInlineStart: "auto",
                    background: p,
                    borderRadius: l,
                    boxShadow: o,
                    [k]: {
                        padding: m,
                        width: h,
                        maxWidth: `calc(100vw - ${(0,a.unit)(e.calc(g).mul(2).equal())})`,
                        overflow: "hidden",
                        lineHeight: y,
                        wordWrap: "break-word"
                    },
                    [`${n}-close-icon`]: {
                        fontSize: v,
                        cursor: "pointer"
                    },
                    [`${k}-message`]: {
                        marginBottom: e.marginXS,
                        color: d,
                        fontSize: i,
                        lineHeight: e.lineHeightLG
                    },
                    [`${k}-description`]: {
                        fontSize: v,
                        color: $
                    },
                    [`${k}-closable ${k}-message`]: {
                        paddingInlineEnd: e.paddingLG
                    },
                    [`${k}-with-icon ${k}-message`]: {
                        marginBottom: e.marginXS,
                        marginInlineStart: e.calc(e.marginSM).add(b).equal(),
                        fontSize: i
                    },
                    [`${k}-with-icon ${k}-description`]: {
                        marginInlineStart: e.calc(e.marginSM).add(b).equal(),
                        fontSize: v
                    },
                    [`${k}-icon`]: {
                        position: "absolute",
                        fontSize: b,
                        lineHeight: 1,
                        [`&-success${t}`]: {
                            color: c
                        },
                        [`&-info${t}`]: {
                            color: s
                        },
                        [`&-warning${t}`]: {
                            color: u
                        },
                        [`&-error${t}`]: {
                            color: f
                        }
                    },
                    [`${k}-close`]: {
                        position: "absolute",
                        top: e.notificationPaddingVertical,
                        insetInlineEnd: e.notificationPaddingHorizontal,
                        color: e.colorIcon,
                        outline: "none",
                        width: e.notificationCloseButtonSize,
                        height: e.notificationCloseButtonSize,
                        borderRadius: e.borderRadiusSM,
                        transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                            color: e.colorIconHover,
                            backgroundColor: e.closeBtnHoverBg
                        }
                    },
                    [`${k}-btn`]: {
                        float: "right",
                        marginTop: e.marginSM
                    }
                }
            };
            t.genNoticeStyle = u;
            let f = e => {
                    let {
                        componentCls: t,
                        notificationMarginBottom: n,
                        notificationMarginEdge: o,
                        motionDurationMid: i,
                        motionEaseInOut: l
                    } = e, c = `${t}-notice`, s = new a.Keyframes("antNotificationFadeOut", {
                        "0%": {
                            maxHeight: e.animationMaxHeight,
                            marginBottom: n
                        },
                        "100%": {
                            maxHeight: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            opacity: 0
                        }
                    });
                    return [{
                        [t]: Object.assign(Object.assign({}, (0, r.resetComponent)(e)), {
                            position: "fixed",
                            zIndex: e.zIndexPopup,
                            marginRight: {
                                value: o,
                                _skip_check_: !0
                            },
                            [`${t}-hook-holder`]: {
                                position: "relative"
                            },
                            [`${t}-fade-appear-prepare`]: {
                                opacity: "0 !important"
                            },
                            [`${t}-fade-enter, ${t}-fade-appear`]: {
                                animationDuration: e.motionDurationMid,
                                animationTimingFunction: l,
                                animationFillMode: "both",
                                opacity: 0,
                                animationPlayState: "paused"
                            },
                            [`${t}-fade-leave`]: {
                                animationTimingFunction: l,
                                animationFillMode: "both",
                                animationDuration: i,
                                animationPlayState: "paused"
                            },
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationPlayState: "running"
                            },
                            [`${t}-fade-leave${t}-fade-leave-active`]: {
                                animationName: s,
                                animationPlayState: "running"
                            },
                            "&-rtl": {
                                direction: "rtl",
                                [`${c}-btn`]: {
                                    float: "left"
                                }
                            }
                        })
                    }, {
                        [t]: {
                            [`${c}-wrapper`]: Object.assign({}, u(e))
                        }
                    }]
                },
                d = e => ({
                    zIndexPopup: e.zIndexPopupBase + i.CONTAINER_MAX_OFFSET + 50,
                    width: 384,
                    closeBtnHoverBg: e.wireframe ? "transparent" : e.colorFillContent
                });
            t.prepareComponentToken = d;
            let p = e => {
                let t = e.paddingMD,
                    n = e.paddingLG,
                    o = (0, l.mergeToken)(e, {
                        notificationBg: e.colorBgElevated,
                        notificationPaddingVertical: t,
                        notificationPaddingHorizontal: n,
                        notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
                        notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(.55).equal(),
                        notificationMarginBottom: e.margin,
                        notificationPadding: `${(0,a.unit)(e.paddingMD)} ${(0,a.unit)(e.paddingContentHorizontalLG)}`,
                        notificationMarginEdge: e.marginLG,
                        animationMaxHeight: 150,
                        notificationStackLayer: 3
                    });
                return o
            };
            t.prepareNotificationToken = p, t.default = (0, l.genStyleHooks)("Notification", e => {
                let t = p(e);
                return [f(t), (0, c.default)(t), (0, s.default)(t)]
            }, d)
        },
        3543: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(96243);
            t.default = e => {
                let {
                    componentCls: t,
                    notificationMarginEdge: n,
                    animationMaxHeight: a
                } = e, i = `${t}-notice`, r = new o.Keyframes("antNotificationFadeIn", {
                    "0%": {
                        transform: "translate3d(100%, 0, 0)",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        opacity: 1
                    }
                }), l = new o.Keyframes("antNotificationTopFadeIn", {
                    "0%": {
                        top: -a,
                        opacity: 0
                    },
                    "100%": {
                        top: 0,
                        opacity: 1
                    }
                }), c = new o.Keyframes("antNotificationBottomFadeIn", {
                    "0%": {
                        bottom: e.calc(a).mul(-1).equal(),
                        opacity: 0
                    },
                    "100%": {
                        bottom: 0,
                        opacity: 1
                    }
                }), s = new o.Keyframes("antNotificationLeftFadeIn", {
                    "0%": {
                        transform: "translate3d(-100%, 0, 0)",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        opacity: 1
                    }
                });
                return {
                    [t]: {
                        [`&${t}-top, &${t}-bottom`]: {
                            marginInline: 0,
                            [i]: {
                                marginInline: "auto auto"
                            }
                        },
                        [`&${t}-top`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: l
                            }
                        },
                        [`&${t}-bottom`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: c
                            }
                        },
                        [`&${t}-topRight, &${t}-bottomRight`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: r
                            }
                        },
                        [`&${t}-topLeft, &${t}-bottomLeft`]: {
                            marginRight: {
                                value: 0,
                                _skip_check_: !0
                            },
                            marginLeft: {
                                value: n,
                                _skip_check_: !0
                            },
                            [i]: {
                                marginInlineEnd: "auto",
                                marginInlineStart: 0
                            },
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: s
                            }
                        }
                    }
                }
            }
        },
        64740: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(18710),
                a = n(97176),
                i = n(96243);
            t.default = (0, o.genSubStyleComponent)(["Notification", "PurePanel"], e => {
                let t = `${e.componentCls}-notice`,
                    n = (0, a.prepareNotificationToken)(e);
                return {
                    [`${t}-pure-panel`]: Object.assign(Object.assign({}, (0, a.genNoticeStyle)(n)), {
                        width: n.width,
                        maxWidth: `calc(100vw - ${(0,i.unit)(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
                        margin: 0
                    })
                }
            }, a.prepareComponentToken)
        },
        93223: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(69753);
            let a = {
                    topLeft: "left",
                    topRight: "right",
                    bottomLeft: "left",
                    bottomRight: "right",
                    top: "left",
                    bottom: "left"
                },
                i = (e, t) => {
                    let {
                        componentCls: n
                    } = e;
                    return {
                        [`${n}-${t}`]: {
                            [`&${n}-stack > ${n}-notice-wrapper`]: {
                                [t.startsWith("top") ? "top" : "bottom"]: 0,
                                [a[t]]: {
                                    value: 0,
                                    _skip_check_: !0
                                }
                            }
                        }
                    }
                },
                r = e => {
                    let t = {};
                    for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
                        overflow: "hidden",
                        [`& > ${e.componentCls}-notice`]: {
                            opacity: 0,
                            transition: `opacity ${e.motionDurationMid}`
                        }
                    };
                    return Object.assign({
                        [`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
                            opacity: 0,
                            overflow: "hidden",
                            color: "transparent",
                            pointerEvents: "none"
                        }
                    }, t)
                },
                l = e => {
                    let t = {};
                    for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
                        background: e.colorBgBlur,
                        backdropFilter: "blur(10px)",
                        "-webkit-backdrop-filter": "blur(10px)"
                    };
                    return Object.assign({}, t)
                };
            t.default = e => {
                let {
                    componentCls: t
                } = e;
                return Object.assign({
                    [`${t}-stack`]: {
                        [`& > ${t}-notice-wrapper`]: Object.assign({
                            transition: `all ${e.motionDurationSlow}, backdrop-filter 0s`,
                            position: "absolute"
                        }, r(e))
                    },
                    [`${t}-stack:not(${t}-stack-expanded)`]: {
                        [`& > ${t}-notice-wrapper`]: Object.assign({}, l(e))
                    },
                    [`${t}-stack${t}-stack-expanded`]: {
                        [`& > ${t}-notice-wrapper`]: {
                            "&:not(:nth-last-child(-n + 1))": {
                                opacity: 1,
                                overflow: "unset",
                                color: "inherit",
                                pointerEvents: "auto",
                                [`& > ${e.componentCls}-notice`]: {
                                    opacity: 1
                                }
                            },
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                height: e.margin,
                                width: "100%",
                                insetInline: 0,
                                bottom: e.calc(e.margin).mul(-1).equal(),
                                background: "transparent",
                                pointerEvents: "auto"
                            }
                        }
                    }
                }, o.NotificationPlacements.map(t => i(e, t)).reduce((e, t) => Object.assign(Object.assign({}, e), t), {}))
            }
        },
        68020: function(e, t, n) {
            var o = n(34817).default,
                a = n(82294).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return b(e)
            }, t.useInternalNotification = b;
            var i = a(n(2265)),
                r = o(n(54440)),
                l = n(14807),
                c = n(15218),
                s = n(9273),
                u = n(70988),
                f = o(n(97176)),
                d = n(44953),
                p = n(18710),
                m = o(n(70252)),
                g = function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++) 0 > t.indexOf(o[a]) && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
                    return n
                };
            let v = e => {
                    let {
                        children: t,
                        prefixCls: n
                    } = e, o = (0, m.default)(n), [a, c, s] = (0, f.default)(n, o);
                    return a(i.createElement(l.NotificationProvider, {
                        classNames: {
                            list: (0, r.default)(c, s, o)
                        }
                    }, t))
                },
                y = (e, t) => {
                    let {
                        prefixCls: n,
                        key: o
                    } = t;
                    return i.createElement(v, {
                        prefixCls: n,
                        key: o
                    }, e)
                },
                h = i.forwardRef((e, t) => {
                    let {
                        top: n,
                        bottom: o,
                        prefixCls: a,
                        getContainer: c,
                        maxCount: f,
                        rtl: m,
                        onAllRemoved: g,
                        stack: v
                    } = e, {
                        getPrefixCls: h,
                        getPopupContainer: b,
                        notification: $
                    } = i.useContext(s.ConfigContext), [, k] = (0, p.useToken)(), N = a || h("notification"), [C, E] = (0, l.useNotification)({
                        prefixCls: N,
                        style: e => (0, d.getPlacementStyle)(e, null != n ? n : 24, null != o ? o : 24),
                        className: () => (0, r.default)({
                            [`${N}-rtl`]: m
                        }),
                        motion: () => (0, d.getMotion)(N),
                        closable: !0,
                        closeIcon: (0, u.getCloseIcon)(N),
                        duration: 4.5,
                        getContainer: () => (null == c ? void 0 : c()) || (null == b ? void 0 : b()) || document.body,
                        maxCount: f,
                        onAllRemoved: g,
                        renderNotifications: y,
                        stack: !1 !== v && {
                            threshold: "object" == typeof v ? null == v ? void 0 : v.threshold : void 0,
                            offset: 8,
                            gap: k.margin
                        }
                    });
                    return i.useImperativeHandle(t, () => Object.assign(Object.assign({}, C), {
                        prefixCls: N,
                        notification: $
                    })), E
                });

            function b(e) {
                let t = i.useRef(null);
                (0, c.devUseWarning)("Notification");
                let n = i.useMemo(() => {
                    let n = n => {
                            var o;
                            if (!t.current) return;
                            let {
                                open: a,
                                prefixCls: l,
                                notification: c
                            } = t.current, s = `${l}-notice`, {
                                message: f,
                                description: d,
                                icon: p,
                                type: m,
                                btn: v,
                                className: y,
                                style: h,
                                role: b = "alert",
                                closeIcon: $
                            } = n, k = g(n, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon"]), N = (0, u.getCloseIcon)(s, $);
                            return a(Object.assign(Object.assign({
                                placement: null !== (o = null == e ? void 0 : e.placement) && void 0 !== o ? o : "topRight"
                            }, k), {
                                content: i.createElement(u.PureContent, {
                                    prefixCls: s,
                                    icon: p,
                                    type: m,
                                    message: f,
                                    description: d,
                                    btn: v,
                                    role: b
                                }),
                                className: (0, r.default)(m && `${s}-${m}`, y, null == c ? void 0 : c.className),
                                style: Object.assign(Object.assign({}, null == c ? void 0 : c.style), h),
                                closeIcon: N,
                                closable: !!N
                            }))
                        },
                        o = {
                            open: n,
                            destroy: e => {
                                var n, o;
                                void 0 !== e ? null === (n = t.current) || void 0 === n || n.close(e) : null === (o = t.current) || void 0 === o || o.destroy()
                            }
                        };
                    return ["success", "info", "warning", "error"].forEach(e => {
                        o[e] = t => n(Object.assign(Object.assign({}, t), {
                            type: e
                        }))
                    }), o
                }, []);
                return [n, i.createElement(h, Object.assign({
                    key: "notification-holder"
                }, e, {
                    ref: t
                }))]
            }
        },
        44953: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMotion = function(e) {
                return {
                    motionName: `${e}-fade`
                }
            }, t.getPlacementStyle = function(e, t, n) {
                let o;
                switch (e) {
                    case "top":
                        o = {
                            left: "50%",
                            transform: "translateX(-50%)",
                            right: "auto",
                            top: t,
                            bottom: "auto"
                        };
                        break;
                    case "topLeft":
                        o = {
                            left: 0,
                            top: t,
                            bottom: "auto"
                        };
                        break;
                    case "topRight":
                        o = {
                            right: 0,
                            top: t,
                            bottom: "auto"
                        };
                        break;
                    case "bottom":
                        o = {
                            left: "50%",
                            transform: "translateX(-50%)",
                            right: "auto",
                            top: "auto",
                            bottom: n
                        };
                        break;
                    case "bottomLeft":
                        o = {
                            left: 0,
                            top: "auto",
                            bottom: n
                        };
                        break;
                    default:
                        o = {
                            right: 0,
                            top: "auto",
                            bottom: n
                        }
                }
                return o
            }
        },
        14807: function(e, t, n) {
            n.r(t), n.d(t, {
                Notice: function() {
                    return g
                },
                NotificationProvider: function() {
                    return y
                },
                useNotification: function() {
                    return O
                }
            });
            var o = n(16141),
                a = n(98961),
                i = n(82554),
                r = n(2265),
                l = n(10870),
                c = n(54887),
                s = n(13428),
                u = n(21076),
                f = n(54440),
                d = n.n(f),
                p = n(52640),
                m = n(84443),
                g = r.forwardRef(function(e, t) {
                    var n = e.prefixCls,
                        o = e.style,
                        i = e.className,
                        l = e.duration,
                        c = void 0 === l ? 4.5 : l,
                        f = e.eventKey,
                        p = e.content,
                        g = e.closable,
                        v = e.closeIcon,
                        y = void 0 === v ? "x" : v,
                        h = e.props,
                        b = e.onClick,
                        $ = e.onNoticeClose,
                        k = e.times,
                        N = e.hovering,
                        C = r.useState(!1),
                        E = (0, a.Z)(C, 2),
                        x = E[0],
                        O = E[1],
                        S = N || x,
                        w = function() {
                            $(f)
                        };
                    r.useEffect(function() {
                        if (!S && c > 0) {
                            var e = setTimeout(function() {
                                w()
                            }, 1e3 * c);
                            return function() {
                                clearTimeout(e)
                            }
                        }
                    }, [c, S, k]);
                    var j = "".concat(n, "-notice");
                    return r.createElement("div", (0, s.Z)({}, h, {
                        ref: t,
                        className: d()(j, i, (0, u.Z)({}, "".concat(j, "-closable"), g)),
                        style: o,
                        onMouseEnter: function(e) {
                            var t;
                            O(!0), null == h || null === (t = h.onMouseEnter) || void 0 === t || t.call(h, e)
                        },
                        onMouseLeave: function(e) {
                            var t;
                            O(!1), null == h || null === (t = h.onMouseLeave) || void 0 === t || t.call(h, e)
                        },
                        onClick: b
                    }), r.createElement("div", {
                        className: "".concat(j, "-content")
                    }, p), g && r.createElement("a", {
                        tabIndex: 0,
                        className: "".concat(j, "-close"),
                        onKeyDown: function(e) {
                            ("Enter" === e.key || "Enter" === e.code || e.keyCode === m.Z.ENTER) && w()
                        },
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation(), w()
                        }
                    }, y))
                }),
                v = r.createContext({}),
                y = function(e) {
                    var t = e.children,
                        n = e.classNames;
                    return r.createElement(v.Provider, {
                        value: {
                            classNames: n
                        }
                    }, t)
                },
                h = n(60075),
                b = function(e) {
                    var t, n, o, a = {
                        offset: 8,
                        threshold: 3,
                        gap: 16
                    };
                    return e && "object" === (0, h.Z)(e) && (a.offset = null !== (t = e.offset) && void 0 !== t ? t : 8, a.threshold = null !== (n = e.threshold) && void 0 !== n ? n : 3, a.gap = null !== (o = e.gap) && void 0 !== o ? o : 16), [!!e, a]
                },
                $ = ["className", "style", "classNames", "styles"],
                k = function(e) {
                    var t, n = e.configList,
                        c = e.placement,
                        f = e.prefixCls,
                        m = e.className,
                        y = e.style,
                        h = e.motion,
                        k = e.onAllNoticeRemoved,
                        N = e.onNoticeClose,
                        C = e.stack,
                        E = (0, r.useContext)(v).classNames,
                        x = (0, r.useRef)({}),
                        O = (0, r.useState)(null),
                        S = (0, a.Z)(O, 2),
                        w = S[0],
                        j = S[1],
                        I = (0, r.useState)([]),
                        P = (0, a.Z)(I, 2),
                        M = P[0],
                        _ = P[1],
                        R = n.map(function(e) {
                            return {
                                config: e,
                                key: String(e.key)
                            }
                        }),
                        L = b(C),
                        Z = (0, a.Z)(L, 2),
                        B = Z[0],
                        H = Z[1],
                        T = H.offset,
                        z = H.threshold,
                        F = H.gap,
                        A = B && (M.length > 0 || R.length <= z),
                        D = "function" == typeof h ? h(c) : h;
                    return (0, r.useEffect)(function() {
                        B && M.length > 1 && _(function(e) {
                            return e.filter(function(e) {
                                return R.some(function(t) {
                                    return e === t.key
                                })
                            })
                        })
                    }, [M, R, B]), (0, r.useEffect)(function() {
                        var e, t;
                        B && x.current[null === (e = R[R.length - 1]) || void 0 === e ? void 0 : e.key] && j(x.current[null === (t = R[R.length - 1]) || void 0 === t ? void 0 : t.key])
                    }, [R, B]), r.createElement(p.CSSMotionList, (0, s.Z)({
                        key: c,
                        className: d()(f, "".concat(f, "-").concat(c), null == E ? void 0 : E.list, m, (t = {}, (0, u.Z)(t, "".concat(f, "-stack"), !!B), (0, u.Z)(t, "".concat(f, "-stack-expanded"), A), t)),
                        style: y,
                        keys: R,
                        motionAppear: !0
                    }, D, {
                        onAllRemoved: function() {
                            k(c)
                        }
                    }), function(e, t) {
                        var n = e.config,
                            a = e.className,
                            u = e.style,
                            p = e.index,
                            m = n.key,
                            v = n.times,
                            y = String(m),
                            h = n.className,
                            b = n.style,
                            k = n.classNames,
                            C = n.styles,
                            O = (0, i.Z)(n, $),
                            S = R.findIndex(function(e) {
                                return e.key === y
                            }),
                            j = {};
                        if (B) {
                            var I = R.length - 1 - (S > -1 ? S : p - 1),
                                P = "top" === c || "bottom" === c ? "-50%" : "0";
                            if (I > 0) {
                                j.height = A ? null === (L = x.current[y]) || void 0 === L ? void 0 : L.offsetHeight : null == w ? void 0 : w.offsetHeight;
                                for (var L, Z, H, z, D = 0, W = 0; W < I; W++) D += (null === (z = x.current[R[R.length - 1 - W].key]) || void 0 === z ? void 0 : z.offsetHeight) + F;
                                var K = (A ? D : I * T) * (c.startsWith("top") ? 1 : -1),
                                    q = !A && null != w && w.offsetWidth && null !== (Z = x.current[y]) && void 0 !== Z && Z.offsetWidth ? ((null == w ? void 0 : w.offsetWidth) - 2 * T * (I < 3 ? I : 3)) / (null === (H = x.current[y]) || void 0 === H ? void 0 : H.offsetWidth) : 1;
                                j.transform = "translate3d(".concat(P, ", ").concat(K, "px, 0) scaleX(").concat(q, ")")
                            } else j.transform = "translate3d(".concat(P, ", 0, 0)")
                        }
                        return r.createElement("div", {
                            ref: t,
                            className: d()("".concat(f, "-notice-wrapper"), a, null == k ? void 0 : k.wrapper),
                            style: (0, l.Z)((0, l.Z)((0, l.Z)({}, u), j), null == C ? void 0 : C.wrapper),
                            onMouseEnter: function() {
                                return _(function(e) {
                                    return e.includes(y) ? e : [].concat((0, o.Z)(e), [y])
                                })
                            },
                            onMouseLeave: function() {
                                return _(function(e) {
                                    return e.filter(function(e) {
                                        return e !== y
                                    })
                                })
                            }
                        }, r.createElement(g, (0, s.Z)({}, O, {
                            ref: function(e) {
                                S > -1 ? x.current[y] = e : delete x.current[y]
                            },
                            prefixCls: f,
                            classNames: k,
                            styles: C,
                            className: d()(h, null == E ? void 0 : E.notice),
                            style: b,
                            times: v,
                            key: m,
                            eventKey: m,
                            onNoticeClose: N,
                            hovering: B && M.length > 0
                        })))
                    })
                },
                N = r.forwardRef(function(e, t) {
                    var n = e.prefixCls,
                        i = void 0 === n ? "rc-notification" : n,
                        s = e.container,
                        u = e.motion,
                        f = e.maxCount,
                        d = e.className,
                        p = e.style,
                        m = e.onAllRemoved,
                        g = e.stack,
                        v = e.renderNotifications,
                        y = r.useState([]),
                        h = (0, a.Z)(y, 2),
                        b = h[0],
                        $ = h[1],
                        N = function(e) {
                            var t, n = b.find(function(t) {
                                return t.key === e
                            });
                            null == n || null === (t = n.onClose) || void 0 === t || t.call(n), $(function(t) {
                                return t.filter(function(t) {
                                    return t.key !== e
                                })
                            })
                        };
                    r.useImperativeHandle(t, function() {
                        return {
                            open: function(e) {
                                $(function(t) {
                                    var n, a = (0, o.Z)(t),
                                        i = a.findIndex(function(t) {
                                            return t.key === e.key
                                        }),
                                        r = (0, l.Z)({}, e);
                                    return i >= 0 ? (r.times = ((null === (n = t[i]) || void 0 === n ? void 0 : n.times) || 0) + 1, a[i] = r) : (r.times = 0, a.push(r)), f > 0 && a.length > f && (a = a.slice(-f)), a
                                })
                            },
                            close: function(e) {
                                N(e)
                            },
                            destroy: function() {
                                $([])
                            }
                        }
                    });
                    var C = r.useState({}),
                        E = (0, a.Z)(C, 2),
                        x = E[0],
                        O = E[1];
                    r.useEffect(function() {
                        var e = {};
                        b.forEach(function(t) {
                            var n = t.placement,
                                o = void 0 === n ? "topRight" : n;
                            o && (e[o] = e[o] || [], e[o].push(t))
                        }), Object.keys(x).forEach(function(t) {
                            e[t] = e[t] || []
                        }), O(e)
                    }, [b]);
                    var S = function(e) {
                            O(function(t) {
                                var n = (0, l.Z)({}, t);
                                return (n[e] || []).length || delete n[e], n
                            })
                        },
                        w = r.useRef(!1);
                    if (r.useEffect(function() {
                            Object.keys(x).length > 0 ? w.current = !0 : w.current && (null == m || m(), w.current = !1)
                        }, [x]), !s) return null;
                    var j = Object.keys(x);
                    return (0, c.createPortal)(r.createElement(r.Fragment, null, j.map(function(e) {
                        var t = x[e],
                            n = r.createElement(k, {
                                key: e,
                                configList: t,
                                placement: e,
                                prefixCls: i,
                                className: null == d ? void 0 : d(e),
                                style: null == p ? void 0 : p(e),
                                motion: u,
                                onNoticeClose: N,
                                onAllNoticeRemoved: S,
                                stack: g
                            });
                        return v ? v(n, {
                            prefixCls: i,
                            key: e
                        }) : n
                    })), s)
                }),
                C = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"],
                E = function() {
                    return document.body
                },
                x = 0;

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.getContainer,
                    n = void 0 === t ? E : t,
                    l = e.motion,
                    c = e.prefixCls,
                    s = e.maxCount,
                    u = e.className,
                    f = e.style,
                    d = e.onAllRemoved,
                    p = e.stack,
                    m = e.renderNotifications,
                    g = (0, i.Z)(e, C),
                    v = r.useState(),
                    y = (0, a.Z)(v, 2),
                    h = y[0],
                    b = y[1],
                    $ = r.useRef(),
                    k = r.createElement(N, {
                        container: h,
                        ref: $,
                        prefixCls: c,
                        motion: l,
                        maxCount: s,
                        className: u,
                        style: f,
                        onAllRemoved: d,
                        stack: p,
                        renderNotifications: m
                    }),
                    O = r.useState([]),
                    S = (0, a.Z)(O, 2),
                    w = S[0],
                    j = S[1],
                    I = r.useMemo(function() {
                        return {
                            open: function(e) {
                                var t = function() {
                                    for (var e = {}, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                    return n.forEach(function(t) {
                                        t && Object.keys(t).forEach(function(n) {
                                            var o = t[n];
                                            void 0 !== o && (e[n] = o)
                                        })
                                    }), e
                                }(g, e);
                                (null === t.key || void 0 === t.key) && (t.key = "rc-notification-".concat(x), x += 1), j(function(e) {
                                    return [].concat((0, o.Z)(e), [{
                                        type: "open",
                                        config: t
                                    }])
                                })
                            },
                            close: function(e) {
                                j(function(t) {
                                    return [].concat((0, o.Z)(t), [{
                                        type: "close",
                                        key: e
                                    }])
                                })
                            },
                            destroy: function() {
                                j(function(e) {
                                    return [].concat((0, o.Z)(e), [{
                                        type: "destroy"
                                    }])
                                })
                            }
                        }
                    }, []);
                return r.useEffect(function() {
                    b(n())
                }), r.useEffect(function() {
                    $.current && w.length && (w.forEach(function(e) {
                        switch (e.type) {
                            case "open":
                                $.current.open(e.config);
                                break;
                            case "close":
                                $.current.close(e.key);
                                break;
                            case "destroy":
                                $.current.destroy()
                        }
                    }), j(function(e) {
                        return e.filter(function(e) {
                            return !w.includes(e)
                        })
                    }))
                }, [w]), [I, k]
            }
        }
    }
]);