(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        57231: function(n, e, r) {
            Promise.resolve().then(r.bind(r, 48107))
        },
        48107: function(n, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return a
                }
            });
            var t = r(57437),
                i = r(60230),
                s = r(71795),
                u = r(24033);
            r(2265);
            var c = r(15840),
                o = r(32225);

            function l() {
                let n = (0, i._)(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  min-height: 30rem;\n  display: flex;\n"]);
                return l = function() {
                    return n
                }, n
            }
            c.zo.div(l());
            var h = () => {
                let n = (0, s.useTranslations)("not_found"),
                    e = (0, u.useRouter)();
                return (0, t.jsx)(o.W2, {
                    children: (0, t.jsx)(o.im, {
                        children: (0, t.jsxs)(o.bC, {
                            children: [(0, t.jsx)(o.FN, {
                                height: 200,
                                width: 200,
                                src: "/_next/static/media/emoji.e1f22604.png",
                                alt: "error"
                            }), (0, t.jsx)(o.D7, {
                                children: n("error")
                            }), (0, t.jsx)(o.jp, {
                                onClick: () => e.push("/"),
                                type: "primary",
                                children: n("back")
                            })]
                        })
                    })
                })
            };

            function a() {
                return (0, t.jsx)(h, {})
            }
        }
    },
    function(n) {
        n.O(0, [4092, 8110, 6691, 1396, 367, 6022, 1795, 2225, 2971, 596, 1744], function() {
            return n(n.s = 57231)
        }), _N_E = n.O()
    }
]);