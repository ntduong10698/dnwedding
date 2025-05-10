(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8555], {
        72137: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 14546))
        },
        14546: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                Center: function() {
                    return h
                },
                default: function() {
                    return o
                }
            });
            var A = t(60230),
                r = t(57437),
                i = t(71795),
                s = t(2265),
                l = t(15840),
                u = t(32225),
                a = {
                    src: "/_next/static/media/flower-2.3e5c748a.png",
                    height: 912,
                    width: 887,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXHU3qXf48e+y43Dz4zL1pjm5dvc3sa9y4XAzYjX3Lne39FKxtEaAAAADHRSTlMACR8TUUPTiJeGzmd95zuIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNgQAVMjGCSnZuNCcRgZONiBYszs7OAZRgYWZkhKpk5wSoYGDhYgCQADQ4AaE+XUs0AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                };

            function c() {
                let e = (0, A._)(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  min-height: 30rem;\n  display: flex;\n"]);
                return c = function() {
                    return e
                }, e
            }
            let h = l.zo.div(c());
            var o = () => {
                let [e, n] = (0, s.useState)(0), t = (0, s.useRef)(null), A = (0, i.useTranslations)("new");
                (0, s.useEffect)(() => (t.current = setInterval(() => {
                    n(e => {
                        let n = e + 1;
                        return n > 10 ? 0 : n
                    })
                }, 400), () => {
                    clearInterval(t.current)
                }), []);
                let l = n => e % 10 >= n ? "#DB5E6C" : "#E7E4E1";
                return (0, r.jsxs)(u.W2, {
                    children: [(0, r.jsx)(u.$Q, {
                        src: a,
                        alt: "flower"
                    }), (0, r.jsx)(u.im, {
                        children: (0, r.jsxs)(u.ly, {
                            children: [(0, r.jsx)(u.Dx, {
                                children: A("loading")
                            }), (0, r.jsx)(u.vE, {
                                children: Array.from({
                                    length: 10
                                }).map((e, n) => (0, r.jsx)(u.JO, {
                                    color: l(n)
                                }, n))
                            }), (0, r.jsx)(u.xv, {
                                children: A("wait_a_second")
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [4092, 8110, 6691, 1396, 367, 6022, 1795, 2225, 2971, 596, 1744], function() {
            return e(e.s = 72137)
        }), _N_E = e.O()
    }
]);