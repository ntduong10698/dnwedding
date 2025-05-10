(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1795], {
        43312: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ErrorCode: function() {
                    return p
                },
                FormatError: function() {
                    return ep
                },
                IntlMessageFormat: function() {
                    return e_
                },
                InvalidValueError: function() {
                    return ed
                },
                InvalidValueTypeError: function() {
                    return em
                },
                MissingValueError: function() {
                    return eg
                },
                PART_TYPE: function() {
                    return d
                },
                default: function() {
                    return eb
                },
                formatToParts: function() {
                    return eE
                },
                isFormatXMLElementFn: function() {
                    return ev
                }
            });
            var n, i, a, o, s, l, u, h, c, f, p, d, m = r(50044);

            function g(e) {
                return e.type === u.literal
            }

            function v(e) {
                return e.type === u.number
            }

            function E(e) {
                return e.type === u.date
            }

            function y(e) {
                return e.type === u.time
            }

            function _(e) {
                return e.type === u.select
            }

            function b(e) {
                return e.type === u.plural
            }

            function P(e) {
                return e.type === u.tag
            }

            function T(e) {
                return !!(e && "object" == typeof e && e.type === h.number)
            }

            function S(e) {
                return !!(e && "object" == typeof e && e.type === h.dateTime)
            }(n = l || (l = {}))[n.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", n[n.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", n[n.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", n[n.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", n[n.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", n[n.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", n[n.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", n[n.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", n[n.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", n[n.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", n[n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", n[n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", n[n.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", n[n.INVALID_TAG = 23] = "INVALID_TAG", n[n.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", n[n.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", n[n.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (i = u || (u = {}))[i.literal = 0] = "literal", i[i.argument = 1] = "argument", i[i.number = 2] = "number", i[i.date = 3] = "date", i[i.time = 4] = "time", i[i.select = 5] = "select", i[i.plural = 6] = "plural", i[i.pound = 7] = "pound", i[i.tag = 8] = "tag", (a = h || (h = {}))[a.number = 0] = "number", a[a.dateTime = 1] = "dateTime";
            var A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                R = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                I = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                N = /^(@+)?(\+|#+)?[rs]?$/g,
                L = /(\*)(0+)|(#+)(0+)|(0+)/g,
                H = /^(0+)$/;

            function O(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(N, function(e, r, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                }), t
            }

            function B(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function C(e) {
                return B(e) || {}
            }
            var M = {
                    AX: ["H"],
                    BQ: ["H"],
                    CP: ["H"],
                    CZ: ["H"],
                    DK: ["H"],
                    FI: ["H"],
                    ID: ["H"],
                    IS: ["H"],
                    ML: ["H"],
                    NE: ["H"],
                    RU: ["H"],
                    SE: ["H"],
                    SJ: ["H"],
                    SK: ["H"],
                    AS: ["h", "H"],
                    BT: ["h", "H"],
                    DJ: ["h", "H"],
                    ER: ["h", "H"],
                    GH: ["h", "H"],
                    IN: ["h", "H"],
                    LS: ["h", "H"],
                    PG: ["h", "H"],
                    PW: ["h", "H"],
                    SO: ["h", "H"],
                    TO: ["h", "H"],
                    VU: ["h", "H"],
                    WS: ["h", "H"],
                    "001": ["H", "h"],
                    AL: ["h", "H", "hB"],
                    TD: ["h", "H", "hB"],
                    "ca-ES": ["H", "h", "hB"],
                    CF: ["H", "h", "hB"],
                    CM: ["H", "h", "hB"],
                    "fr-CA": ["H", "h", "hB"],
                    "gl-ES": ["H", "h", "hB"],
                    "it-CH": ["H", "h", "hB"],
                    "it-IT": ["H", "h", "hB"],
                    LU: ["H", "h", "hB"],
                    NP: ["H", "h", "hB"],
                    PF: ["H", "h", "hB"],
                    SC: ["H", "h", "hB"],
                    SM: ["H", "h", "hB"],
                    SN: ["H", "h", "hB"],
                    TF: ["H", "h", "hB"],
                    VA: ["H", "h", "hB"],
                    CY: ["h", "H", "hb", "hB"],
                    GR: ["h", "H", "hb", "hB"],
                    CO: ["h", "H", "hB", "hb"],
                    DO: ["h", "H", "hB", "hb"],
                    KP: ["h", "H", "hB", "hb"],
                    KR: ["h", "H", "hB", "hb"],
                    NA: ["h", "H", "hB", "hb"],
                    PA: ["h", "H", "hB", "hb"],
                    PR: ["h", "H", "hB", "hb"],
                    VE: ["h", "H", "hB", "hb"],
                    AC: ["H", "h", "hb", "hB"],
                    AI: ["H", "h", "hb", "hB"],
                    BW: ["H", "h", "hb", "hB"],
                    BZ: ["H", "h", "hb", "hB"],
                    CC: ["H", "h", "hb", "hB"],
                    CK: ["H", "h", "hb", "hB"],
                    CX: ["H", "h", "hb", "hB"],
                    DG: ["H", "h", "hb", "hB"],
                    FK: ["H", "h", "hb", "hB"],
                    GB: ["H", "h", "hb", "hB"],
                    GG: ["H", "h", "hb", "hB"],
                    GI: ["H", "h", "hb", "hB"],
                    IE: ["H", "h", "hb", "hB"],
                    IM: ["H", "h", "hb", "hB"],
                    IO: ["H", "h", "hb", "hB"],
                    JE: ["H", "h", "hb", "hB"],
                    LT: ["H", "h", "hb", "hB"],
                    MK: ["H", "h", "hb", "hB"],
                    MN: ["H", "h", "hb", "hB"],
                    MS: ["H", "h", "hb", "hB"],
                    NF: ["H", "h", "hb", "hB"],
                    NG: ["H", "h", "hb", "hB"],
                    NR: ["H", "h", "hb", "hB"],
                    NU: ["H", "h", "hb", "hB"],
                    PN: ["H", "h", "hb", "hB"],
                    SH: ["H", "h", "hb", "hB"],
                    SX: ["H", "h", "hb", "hB"],
                    TA: ["H", "h", "hb", "hB"],
                    ZA: ["H", "h", "hb", "hB"],
                    "af-ZA": ["H", "h", "hB", "hb"],
                    AR: ["H", "h", "hB", "hb"],
                    CL: ["H", "h", "hB", "hb"],
                    CR: ["H", "h", "hB", "hb"],
                    CU: ["H", "h", "hB", "hb"],
                    EA: ["H", "h", "hB", "hb"],
                    "es-BO": ["H", "h", "hB", "hb"],
                    "es-BR": ["H", "h", "hB", "hb"],
                    "es-EC": ["H", "h", "hB", "hb"],
                    "es-ES": ["H", "h", "hB", "hb"],
                    "es-GQ": ["H", "h", "hB", "hb"],
                    "es-PE": ["H", "h", "hB", "hb"],
                    GT: ["H", "h", "hB", "hb"],
                    HN: ["H", "h", "hB", "hb"],
                    IC: ["H", "h", "hB", "hb"],
                    KG: ["H", "h", "hB", "hb"],
                    KM: ["H", "h", "hB", "hb"],
                    LK: ["H", "h", "hB", "hb"],
                    MA: ["H", "h", "hB", "hb"],
                    MX: ["H", "h", "hB", "hb"],
                    NI: ["H", "h", "hB", "hb"],
                    PY: ["H", "h", "hB", "hb"],
                    SV: ["H", "h", "hB", "hb"],
                    UY: ["H", "h", "hB", "hb"],
                    JP: ["H", "h", "K"],
                    AD: ["H", "hB"],
                    AM: ["H", "hB"],
                    AO: ["H", "hB"],
                    AT: ["H", "hB"],
                    AW: ["H", "hB"],
                    BE: ["H", "hB"],
                    BF: ["H", "hB"],
                    BJ: ["H", "hB"],
                    BL: ["H", "hB"],
                    BR: ["H", "hB"],
                    CG: ["H", "hB"],
                    CI: ["H", "hB"],
                    CV: ["H", "hB"],
                    DE: ["H", "hB"],
                    EE: ["H", "hB"],
                    FR: ["H", "hB"],
                    GA: ["H", "hB"],
                    GF: ["H", "hB"],
                    GN: ["H", "hB"],
                    GP: ["H", "hB"],
                    GW: ["H", "hB"],
                    HR: ["H", "hB"],
                    IL: ["H", "hB"],
                    IT: ["H", "hB"],
                    KZ: ["H", "hB"],
                    MC: ["H", "hB"],
                    MD: ["H", "hB"],
                    MF: ["H", "hB"],
                    MQ: ["H", "hB"],
                    MZ: ["H", "hB"],
                    NC: ["H", "hB"],
                    NL: ["H", "hB"],
                    PM: ["H", "hB"],
                    PT: ["H", "hB"],
                    RE: ["H", "hB"],
                    RO: ["H", "hB"],
                    SI: ["H", "hB"],
                    SR: ["H", "hB"],
                    ST: ["H", "hB"],
                    TG: ["H", "hB"],
                    TR: ["H", "hB"],
                    WF: ["H", "hB"],
                    YT: ["H", "hB"],
                    BD: ["h", "hB", "H"],
                    PK: ["h", "hB", "H"],
                    AZ: ["H", "hB", "h"],
                    BA: ["H", "hB", "h"],
                    BG: ["H", "hB", "h"],
                    CH: ["H", "hB", "h"],
                    GE: ["H", "hB", "h"],
                    LI: ["H", "hB", "h"],
                    ME: ["H", "hB", "h"],
                    RS: ["H", "hB", "h"],
                    UA: ["H", "hB", "h"],
                    UZ: ["H", "hB", "h"],
                    XK: ["H", "hB", "h"],
                    AG: ["h", "hb", "H", "hB"],
                    AU: ["h", "hb", "H", "hB"],
                    BB: ["h", "hb", "H", "hB"],
                    BM: ["h", "hb", "H", "hB"],
                    BS: ["h", "hb", "H", "hB"],
                    CA: ["h", "hb", "H", "hB"],
                    DM: ["h", "hb", "H", "hB"],
                    "en-001": ["h", "hb", "H", "hB"],
                    FJ: ["h", "hb", "H", "hB"],
                    FM: ["h", "hb", "H", "hB"],
                    GD: ["h", "hb", "H", "hB"],
                    GM: ["h", "hb", "H", "hB"],
                    GU: ["h", "hb", "H", "hB"],
                    GY: ["h", "hb", "H", "hB"],
                    JM: ["h", "hb", "H", "hB"],
                    KI: ["h", "hb", "H", "hB"],
                    KN: ["h", "hb", "H", "hB"],
                    KY: ["h", "hb", "H", "hB"],
                    LC: ["h", "hb", "H", "hB"],
                    LR: ["h", "hb", "H", "hB"],
                    MH: ["h", "hb", "H", "hB"],
                    MP: ["h", "hb", "H", "hB"],
                    MW: ["h", "hb", "H", "hB"],
                    NZ: ["h", "hb", "H", "hB"],
                    SB: ["h", "hb", "H", "hB"],
                    SG: ["h", "hb", "H", "hB"],
                    SL: ["h", "hb", "H", "hB"],
                    SS: ["h", "hb", "H", "hB"],
                    SZ: ["h", "hb", "H", "hB"],
                    TC: ["h", "hb", "H", "hB"],
                    TT: ["h", "hb", "H", "hB"],
                    UM: ["h", "hb", "H", "hB"],
                    US: ["h", "hb", "H", "hB"],
                    VC: ["h", "hb", "H", "hB"],
                    VG: ["h", "hb", "H", "hB"],
                    VI: ["h", "hb", "H", "hB"],
                    ZM: ["h", "hb", "H", "hB"],
                    BO: ["H", "hB", "h", "hb"],
                    EC: ["H", "hB", "h", "hb"],
                    ES: ["H", "hB", "h", "hb"],
                    GQ: ["H", "hB", "h", "hb"],
                    PE: ["H", "hB", "h", "hb"],
                    AE: ["h", "hB", "hb", "H"],
                    "ar-001": ["h", "hB", "hb", "H"],
                    BH: ["h", "hB", "hb", "H"],
                    DZ: ["h", "hB", "hb", "H"],
                    EG: ["h", "hB", "hb", "H"],
                    EH: ["h", "hB", "hb", "H"],
                    HK: ["h", "hB", "hb", "H"],
                    IQ: ["h", "hB", "hb", "H"],
                    JO: ["h", "hB", "hb", "H"],
                    KW: ["h", "hB", "hb", "H"],
                    LB: ["h", "hB", "hb", "H"],
                    LY: ["h", "hB", "hb", "H"],
                    MO: ["h", "hB", "hb", "H"],
                    MR: ["h", "hB", "hb", "H"],
                    OM: ["h", "hB", "hb", "H"],
                    PH: ["h", "hB", "hb", "H"],
                    PS: ["h", "hB", "hb", "H"],
                    QA: ["h", "hB", "hb", "H"],
                    SA: ["h", "hB", "hb", "H"],
                    SD: ["h", "hB", "hb", "H"],
                    SY: ["h", "hB", "hb", "H"],
                    TN: ["h", "hB", "hb", "H"],
                    YE: ["h", "hB", "hb", "H"],
                    AF: ["H", "hb", "hB", "h"],
                    LA: ["H", "hb", "hB", "h"],
                    CN: ["H", "hB", "hb", "h"],
                    LV: ["H", "hB", "hb", "h"],
                    TL: ["H", "hB", "hb", "h"],
                    "zu-ZA": ["H", "hB", "hb", "h"],
                    CD: ["hB", "H"],
                    IR: ["hB", "H"],
                    "hi-IN": ["hB", "h", "H"],
                    "kn-IN": ["hB", "h", "H"],
                    "ml-IN": ["hB", "h", "H"],
                    "te-IN": ["hB", "h", "H"],
                    KH: ["hB", "h", "H", "hb"],
                    "ta-IN": ["hB", "h", "hb", "H"],
                    BN: ["hb", "hB", "h", "H"],
                    MY: ["hb", "hB", "h", "H"],
                    ET: ["hB", "hb", "h", "H"],
                    "gu-IN": ["hB", "hb", "h", "H"],
                    "mr-IN": ["hB", "hb", "h", "H"],
                    "pa-IN": ["hB", "hb", "h", "H"],
                    TW: ["hB", "hb", "h", "H"],
                    KE: ["hB", "hb", "H", "h"],
                    MM: ["hB", "hb", "H", "h"],
                    TZ: ["hB", "hb", "H", "h"],
                    UG: ["hB", "hb", "H", "h"]
                },
                x = new RegExp("^".concat(A.source, "*")),
                D = new RegExp("".concat(A.source, "*$"));

            function U(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var j = !!String.prototype.startsWith,
                k = !!String.fromCodePoint,
                F = !!Object.fromEntries,
                G = !!String.prototype.codePointAt,
                V = !!String.prototype.trimStart,
                W = !!String.prototype.trimEnd,
                X = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e)
                },
                K = !0;
            try {
                var q = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                K = (null === (c = q.exec("a")) || void 0 === c ? void 0 : c[0]) === "a"
            } catch (e) {
                K = !1
            }
            var Z = j ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                z = k ? String.fromCodePoint : function() {
                    for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    for (var n = "", i = t.length, a = 0; i > a;) {
                        if ((e = t[a++]) > 1114111) throw RangeError(e + " is not a valid code point");
                        n += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320)
                    }
                    return n
                },
                Y = F ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r],
                            i = n[0],
                            a = n[1];
                        t[i] = a
                    }
                    return t
                },
                Q = G ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r, n = e.length;
                    if (!(t < 0) && !(t >= n)) {
                        var i = e.charCodeAt(t);
                        return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : (i - 55296 << 10) + (r - 56320) + 65536
                    }
                },
                J = V ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(x, "")
                },
                $ = W ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(D, "")
                };

            function ee(e, t) {
                return new RegExp(e, t)
            }
            if (K) {
                var et = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                f = function(e, t) {
                    var r;
                    return et.lastIndex = t, null !== (r = et.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else f = function(e, t) {
                for (var r = [];;) {
                    var n, i = Q(e, t);
                    if (void 0 === i || ei(i) || (n = i) >= 33 && n <= 35 || 36 === n || n >= 37 && n <= 39 || 40 === n || 41 === n || 42 === n || 43 === n || 44 === n || 45 === n || n >= 46 && n <= 47 || n >= 58 && n <= 59 || n >= 60 && n <= 62 || n >= 63 && n <= 64 || 91 === n || 92 === n || 93 === n || 94 === n || 96 === n || 123 === n || 124 === n || 125 === n || 126 === n || 161 === n || n >= 162 && n <= 165 || 166 === n || 167 === n || 169 === n || 171 === n || 172 === n || 174 === n || 176 === n || 177 === n || 182 === n || 187 === n || 191 === n || 215 === n || 247 === n || n >= 8208 && n <= 8213 || n >= 8214 && n <= 8215 || 8216 === n || 8217 === n || 8218 === n || n >= 8219 && n <= 8220 || 8221 === n || 8222 === n || 8223 === n || n >= 8224 && n <= 8231 || n >= 8240 && n <= 8248 || 8249 === n || 8250 === n || n >= 8251 && n <= 8254 || n >= 8257 && n <= 8259 || 8260 === n || 8261 === n || 8262 === n || n >= 8263 && n <= 8273 || 8274 === n || 8275 === n || n >= 8277 && n <= 8286 || n >= 8592 && n <= 8596 || n >= 8597 && n <= 8601 || n >= 8602 && n <= 8603 || n >= 8604 && n <= 8607 || 8608 === n || n >= 8609 && n <= 8610 || 8611 === n || n >= 8612 && n <= 8613 || 8614 === n || n >= 8615 && n <= 8621 || 8622 === n || n >= 8623 && n <= 8653 || n >= 8654 && n <= 8655 || n >= 8656 && n <= 8657 || 8658 === n || 8659 === n || 8660 === n || n >= 8661 && n <= 8691 || n >= 8692 && n <= 8959 || n >= 8960 && n <= 8967 || 8968 === n || 8969 === n || 8970 === n || 8971 === n || n >= 8972 && n <= 8991 || n >= 8992 && n <= 8993 || n >= 8994 && n <= 9e3 || 9001 === n || 9002 === n || n >= 9003 && n <= 9083 || 9084 === n || n >= 9085 && n <= 9114 || n >= 9115 && n <= 9139 || n >= 9140 && n <= 9179 || n >= 9180 && n <= 9185 || n >= 9186 && n <= 9254 || n >= 9255 && n <= 9279 || n >= 9280 && n <= 9290 || n >= 9291 && n <= 9311 || n >= 9472 && n <= 9654 || 9655 === n || n >= 9656 && n <= 9664 || 9665 === n || n >= 9666 && n <= 9719 || n >= 9720 && n <= 9727 || n >= 9728 && n <= 9838 || 9839 === n || n >= 9840 && n <= 10087 || 10088 === n || 10089 === n || 10090 === n || 10091 === n || 10092 === n || 10093 === n || 10094 === n || 10095 === n || 10096 === n || 10097 === n || 10098 === n || 10099 === n || 10100 === n || 10101 === n || n >= 10132 && n <= 10175 || n >= 10176 && n <= 10180 || 10181 === n || 10182 === n || n >= 10183 && n <= 10213 || 10214 === n || 10215 === n || 10216 === n || 10217 === n || 10218 === n || 10219 === n || 10220 === n || 10221 === n || 10222 === n || 10223 === n || n >= 10224 && n <= 10239 || n >= 10240 && n <= 10495 || n >= 10496 && n <= 10626 || 10627 === n || 10628 === n || 10629 === n || 10630 === n || 10631 === n || 10632 === n || 10633 === n || 10634 === n || 10635 === n || 10636 === n || 10637 === n || 10638 === n || 10639 === n || 10640 === n || 10641 === n || 10642 === n || 10643 === n || 10644 === n || 10645 === n || 10646 === n || 10647 === n || 10648 === n || n >= 10649 && n <= 10711 || 10712 === n || 10713 === n || 10714 === n || 10715 === n || n >= 10716 && n <= 10747 || 10748 === n || 10749 === n || n >= 10750 && n <= 11007 || n >= 11008 && n <= 11055 || n >= 11056 && n <= 11076 || n >= 11077 && n <= 11078 || n >= 11079 && n <= 11084 || n >= 11085 && n <= 11123 || n >= 11124 && n <= 11125 || n >= 11126 && n <= 11157 || 11158 === n || n >= 11159 && n <= 11263 || n >= 11776 && n <= 11777 || 11778 === n || 11779 === n || 11780 === n || 11781 === n || n >= 11782 && n <= 11784 || 11785 === n || 11786 === n || 11787 === n || 11788 === n || 11789 === n || n >= 11790 && n <= 11798 || 11799 === n || n >= 11800 && n <= 11801 || 11802 === n || 11803 === n || 11804 === n || 11805 === n || n >= 11806 && n <= 11807 || 11808 === n || 11809 === n || 11810 === n || 11811 === n || 11812 === n || 11813 === n || 11814 === n || 11815 === n || 11816 === n || 11817 === n || n >= 11818 && n <= 11822 || 11823 === n || n >= 11824 && n <= 11833 || n >= 11834 && n <= 11835 || n >= 11836 && n <= 11839 || 11840 === n || 11841 === n || 11842 === n || n >= 11843 && n <= 11855 || n >= 11856 && n <= 11857 || 11858 === n || n >= 11859 && n <= 11903 || n >= 12289 && n <= 12291 || 12296 === n || 12297 === n || 12298 === n || 12299 === n || 12300 === n || 12301 === n || 12302 === n || 12303 === n || 12304 === n || 12305 === n || n >= 12306 && n <= 12307 || 12308 === n || 12309 === n || 12310 === n || 12311 === n || 12312 === n || 12313 === n || 12314 === n || 12315 === n || 12316 === n || 12317 === n || n >= 12318 && n <= 12319 || 12320 === n || 12336 === n || 64830 === n || 64831 === n || n >= 65093 && n <= 65094) break;
                    r.push(i), t += i >= 65536 ? 2 : 1
                }
                return z.apply(void 0, r)
            };
            var er = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var n = []; !this.isEOF();) {
                        var i = this.char();
                        if (123 === i) {
                            var a = this.parseArgument(e, r);
                            if (a.err) return a;
                            n.push(a.val)
                        } else if (125 === i && e > 0) break;
                        else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                            var o = this.clonePosition();
                            this.bump(), n.push({
                                type: u.pound,
                                location: U(o, this.clonePosition())
                            })
                        } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                            if (60 === i && !this.ignoreTag && en(this.peek() || 0)) {
                                var a = this.parseTag(e, t);
                                if (a.err) return a;
                                n.push(a.val)
                            } else {
                                var a = this.parseLiteral(e, t);
                                if (a.err) return a;
                                n.push(a.val)
                            }
                        } else {
                            if (!r) return this.error(l.UNMATCHED_CLOSING_TAG, U(this.clonePosition(), this.clonePosition()));
                            break
                        }
                    }
                    return {
                        val: n,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: u.literal,
                            value: "<".concat(n, "/>"),
                            location: U(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (!this.bumpIf(">")) return this.error(l.INVALID_TAG, U(r, this.clonePosition()));
                    var i = this.parseMessage(e + 1, t, !0);
                    if (i.err) return i;
                    var a = i.val,
                        o = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(l.UNCLOSED_TAG, U(r, this.clonePosition()));
                    if (this.isEOF() || !en(this.char())) return this.error(l.INVALID_TAG, U(o, this.clonePosition()));
                    var s = this.clonePosition();
                    return n !== this.parseTagName() ? this.error(l.UNMATCHED_CLOSING_TAG, U(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: u.tag,
                            value: n,
                            children: a,
                            location: U(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(l.INVALID_TAG, U(o, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) {
                            n += i;
                            continue
                        }
                        var a = this.tryParseUnquoted(e, t);
                        if (a) {
                            n += a;
                            continue
                        }
                        var o = this.tryParseLeftAngleBracket();
                        if (o) {
                            n += o;
                            continue
                        }
                        break
                    }
                    var s = U(r, this.clonePosition());
                    return {
                        val: {
                            type: u.literal,
                            value: n,
                            location: s
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    var e;
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (en(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 === this.peek()) t.push(39), this.bump();
                            else {
                                this.bump();
                                break
                            }
                        } else t.push(r);
                        this.bump()
                    }
                    return z.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), z(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(l.EMPTY_ARGUMENT, U(r, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(l.MALFORMED_ARGUMENT, U(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: u.argument,
                                    value: n,
                                    location: U(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
                            return this.parseArgumentOptions(e, t, n, r);
                        default:
                            return this.error(l.MALFORMED_ARGUMENT, U(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = f(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: U(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
                    var i, a = this.clonePosition(),
                        o = this.parseIdentifierIfPossible().value,
                        s = this.clonePosition();
                    switch (o) {
                        case "":
                            return this.error(l.EXPECT_ARGUMENT_TYPE, U(a, s));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var c = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var f = this.clonePosition(),
                                    p = this.parseSimpleArgStyleIfPossible();
                                if (p.err) return p;
                                var d = $(p.val);
                                if (0 === d.length) return this.error(l.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
                                c = {
                                    style: d,
                                    styleLocation: U(f, this.clonePosition())
                                }
                            }
                            var g = this.tryParseArgumentClose(n);
                            if (g.err) return g;
                            var v = U(n, this.clonePosition());
                            if (c && Z(null == c ? void 0 : c.style, "::", 0)) {
                                var E, y = J(c.style.slice(2));
                                if ("number" === o) {
                                    var p = this.parseNumberSkeletonFromString(y, c.styleLocation);
                                    if (p.err) return p;
                                    return {
                                        val: {
                                            type: u.number,
                                            value: r,
                                            location: v,
                                            style: p.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === y.length) return this.error(l.EXPECT_DATE_TIME_SKELETON, v);
                                var _ = y;
                                this.locale && (_ = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var i = e.charAt(n);
                                        if ("j" === i) {
                                            for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i;) a++, n++;
                                            var o = 1 + (1 & a),
                                                s = a < 2 ? 1 : 3 + (a >> 1),
                                                l = function(e) {
                                                    var t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    var n = e.language;
                                                    return "root" !== n && (t = e.maximize().region), (M[t || ""] || M[n || ""] || M["".concat(n, "-001")] || M["001"])[0]
                                                }(t);
                                            for (("H" == l || "k" == l) && (s = 0); s-- > 0;) r += "a";
                                            for (; o-- > 0;) r = l + r
                                        } else "J" === i ? r += "H" : r += i
                                    }
                                    return r
                                }(y, this.locale));
                                var d = {
                                    type: h.dateTime,
                                    pattern: _,
                                    location: c.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (E = {}, _.replace(R, function(e) {
                                        var t = e.length;
                                        switch (e[0]) {
                                            case "G":
                                                E.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "y":
                                                E.year = 2 === t ? "2-digit" : "numeric";
                                                break;
                                            case "Y":
                                            case "u":
                                            case "U":
                                            case "r":
                                                throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                            case "q":
                                            case "Q":
                                                throw RangeError("`q/Q` (quarter) patterns are not supported");
                                            case "M":
                                            case "L":
                                                E.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                break;
                                            case "w":
                                            case "W":
                                                throw RangeError("`w/W` (week) patterns are not supported");
                                            case "d":
                                                E.day = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "D":
                                            case "F":
                                            case "g":
                                                throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                            case "E":
                                                E.weekday = 4 === t ? "short" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "e":
                                                if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                E.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "c":
                                                if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                E.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "a":
                                                E.hour12 = !0;
                                                break;
                                            case "b":
                                            case "B":
                                                throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                            case "h":
                                                E.hourCycle = "h12", E.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "H":
                                                E.hourCycle = "h23", E.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "K":
                                                E.hourCycle = "h11", E.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "k":
                                                E.hourCycle = "h24", E.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "j":
                                            case "J":
                                            case "C":
                                                throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                            case "m":
                                                E.minute = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "s":
                                                E.second = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "S":
                                            case "A":
                                                throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                            case "z":
                                                E.timeZoneName = t < 4 ? "short" : "long";
                                                break;
                                            case "Z":
                                            case "O":
                                            case "v":
                                            case "V":
                                            case "X":
                                            case "x":
                                                throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                        }
                                        return ""
                                    }), E) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === o ? u.date : u.time,
                                        value: r,
                                        location: v,
                                        style: d
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === o ? u.number : "date" === o ? u.date : u.time,
                                    value: r,
                                    location: v,
                                    style: null !== (i = null == c ? void 0 : c.style) && void 0 !== i ? i : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var b = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(l.EXPECT_SELECT_ARGUMENT_OPTIONS, U(b, (0, m.pi)({}, b)));
                            this.bumpSpace();
                            var P = this.parseIdentifierIfPossible(),
                                T = 0;
                            if ("select" !== o && "offset" === P.value) {
                                if (!this.bumpIf(":")) return this.error(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                var p = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (p.err) return p;
                                this.bumpSpace(), P = this.parseIdentifierIfPossible(), T = p.val
                            }
                            var S = this.tryParsePluralOrSelectOptions(e, o, t, P);
                            if (S.err) return S;
                            var g = this.tryParseArgumentClose(n);
                            if (g.err) return g;
                            var A = U(n, this.clonePosition());
                            if ("select" === o) return {
                                val: {
                                    type: u.select,
                                    value: r,
                                    options: Y(S.val),
                                    location: A
                                },
                                err: null
                            };
                            return {
                                val: {
                                    type: u.plural,
                                    value: r,
                                    options: Y(S.val),
                                    offset: T,
                                    pluralType: "plural" === o ? "cardinal" : "ordinal",
                                    location: A
                                },
                                err: null
                            };
                        default:
                            return this.error(l.INVALID_ARGUMENT_TYPE, U(a, s))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, U(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var r = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, U(r, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw Error("Number skeleton cannot be empty");
                            for (var t = e.split(w).filter(function(e) {
                                    return e.length > 0
                                }), r = [], n = 0; n < t.length; n++) {
                                var i = t[n].split("/");
                                if (0 === i.length) throw Error("Invalid number skeleton");
                                for (var a = i[0], o = i.slice(1), s = 0; s < o.length; s++)
                                    if (0 === o[s].length) throw Error("Invalid number skeleton");
                                r.push({
                                    stem: a,
                                    options: o
                                })
                            }
                            return r
                        }(e)
                    } catch (e) {
                        return this.error(l.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: h.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? function(e) {
                                for (var t = {}, r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    switch (n.stem) {
                                        case "percent":
                                        case "%":
                                            t.style = "percent";
                                            continue;
                                        case "%x100":
                                            t.style = "percent", t.scale = 100;
                                            continue;
                                        case "currency":
                                            t.style = "currency", t.currency = n.options[0];
                                            continue;
                                        case "group-off":
                                        case ",_":
                                            t.useGrouping = !1;
                                            continue;
                                        case "precision-integer":
                                        case ".":
                                            t.maximumFractionDigits = 0;
                                            continue;
                                        case "measure-unit":
                                        case "unit":
                                            t.style = "unit", t.unit = n.options[0].replace(/^(.*?)-/, "");
                                            continue;
                                        case "compact-short":
                                        case "K":
                                            t.notation = "compact", t.compactDisplay = "short";
                                            continue;
                                        case "compact-long":
                                        case "KK":
                                            t.notation = "compact", t.compactDisplay = "long";
                                            continue;
                                        case "scientific":
                                            t = (0, m.pi)((0, m.pi)((0, m.pi)({}, t), {
                                                notation: "scientific"
                                            }), n.options.reduce(function(e, t) {
                                                return (0, m.pi)((0, m.pi)({}, e), B(t) || {})
                                            }, {}));
                                            continue;
                                        case "engineering":
                                            t = (0, m.pi)((0, m.pi)((0, m.pi)({}, t), {
                                                notation: "engineering"
                                            }), n.options.reduce(function(e, t) {
                                                return (0, m.pi)((0, m.pi)({}, e), B(t) || {})
                                            }, {}));
                                            continue;
                                        case "notation-simple":
                                            t.notation = "standard";
                                            continue;
                                        case "unit-width-narrow":
                                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                            continue;
                                        case "unit-width-short":
                                            t.currencyDisplay = "code", t.unitDisplay = "short";
                                            continue;
                                        case "unit-width-full-name":
                                            t.currencyDisplay = "name", t.unitDisplay = "long";
                                            continue;
                                        case "unit-width-iso-code":
                                            t.currencyDisplay = "symbol";
                                            continue;
                                        case "scale":
                                            t.scale = parseFloat(n.options[0]);
                                            continue;
                                        case "integer-width":
                                            if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                            n.options[0].replace(L, function(e, r, n, i, a, o) {
                                                if (r) t.minimumIntegerDigits = n.length;
                                                else if (i && a) throw Error("We currently do not support maximum integer digits");
                                                else if (o) throw Error("We currently do not support exact integer digits");
                                                return ""
                                            });
                                            continue
                                    }
                                    if (H.test(n.stem)) {
                                        t.minimumIntegerDigits = n.stem.length;
                                        continue
                                    }
                                    if (I.test(n.stem)) {
                                        if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                        n.stem.replace(I, function(e, r, n, i, a, o) {
                                            return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                        });
                                        var i = n.options[0];
                                        "w" === i ? t = (0, m.pi)((0, m.pi)({}, t), {
                                            trailingZeroDisplay: "stripIfInteger"
                                        }) : i && (t = (0, m.pi)((0, m.pi)({}, t), O(i)));
                                        continue
                                    }
                                    if (N.test(n.stem)) {
                                        t = (0, m.pi)((0, m.pi)({}, t), O(n.stem));
                                        continue
                                    }
                                    var a = B(n.stem);
                                    a && (t = (0, m.pi)((0, m.pi)({}, t), a));
                                    var o = function(e) {
                                        var t;
                                        if ("E" === e[0] && "E" === e[1] ? (t = {
                                                notation: "engineering"
                                            }, e = e.slice(2)) : "E" === e[0] && (t = {
                                                notation: "scientific"
                                            }, e = e.slice(1)), t) {
                                            var r = e.slice(0, 2);
                                            if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !H.test(e)) throw Error("Malformed concise eng/scientific notation");
                                            t.minimumIntegerDigits = e.length
                                        }
                                        return t
                                    }(n.stem);
                                    o && (t = (0, m.pi)((0, m.pi)({}, t), o))
                                }
                                return t
                            }(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
                    for (var i, a = !1, o = [], s = new Set, u = n.value, h = n.location;;) {
                        if (0 === u.length) {
                            var c = this.clonePosition();
                            if ("select" !== t && this.bumpIf("=")) {
                                var f = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_SELECTOR, l.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (f.err) return f;
                                h = U(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset())
                            } else break
                        }
                        if (s.has(u)) return this.error("select" === t ? l.DUPLICATE_SELECT_ARGUMENT_SELECTOR : l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
                        "other" === u && (a = !0), this.bumpSpace();
                        var p = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, U(this.clonePosition(), this.clonePosition()));
                        var d = this.parseMessage(e + 1, t, r);
                        if (d.err) return d;
                        var m = this.tryParseArgumentClose(p);
                        if (m.err) return m;
                        o.push([u, {
                            value: d.val,
                            location: U(p, this.clonePosition())
                        }]), s.add(u), this.bumpSpace(), u = (i = this.parseIdentifierIfPossible()).value, h = i.location
                    }
                    return 0 === o.length ? this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR : l.EXPECT_PLURAL_ARGUMENT_SELECTOR, U(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(l.MISSING_OTHER_CLAUSE, U(this.clonePosition(), this.clonePosition())) : {
                        val: o,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var i = !1, a = 0; !this.isEOF();) {
                        var o = this.char();
                        if (o >= 48 && o <= 57) i = !0, a = 10 * a + (o - 48), this.bump();
                        else break
                    }
                    var s = U(n, this.clonePosition());
                    return i ? X(a *= r) ? {
                        val: a,
                        err: null
                    } : this.error(t, s) : this.error(e, s)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = Q(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (Z(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && ei(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, e
            }();

            function en(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function ei(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function ea(e, t) {
                void 0 === t && (t = {}), t = (0, m.pi)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new er(e, t).parse();
                if (r.err) {
                    var n = SyntaxError(l[r.err.kind]);
                    throw n.location = r.err.location, n.originalMessage = r.err.message, n
                }
                return (null == t ? void 0 : t.captureLocation) || function e(t) {
                    t.forEach(function(t) {
                        if (delete t.location, _(t) || b(t))
                            for (var r in t.options) delete t.options[r].location, e(t.options[r].value);
                        else v(t) && T(t.style) ? delete t.style.location : (E(t) || y(t)) && S(t.style) ? delete t.style.location : P(t) && e(t.children)
                    })
                }(r.val), r.val
            }

            function eo(e, t) {
                var r = t && t.cache ? t.cache : ec,
                    n = t && t.serializer ? t.serializer : eu;
                return (t && t.strategy ? t.strategy : function(e, t) {
                    var r, n, i = 1 === e.length ? es : el;
                    return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
                })(e, {
                    cache: r,
                    serializer: n
                })
            }

            function es(e, t, r, n) {
                var i = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
                    a = t.get(i);
                return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
            }

            function el(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    a = t.get(i);
                return void 0 === a && (a = e.apply(this, n), t.set(i, a)), a
            }
            var eu = function() {
                return JSON.stringify(arguments)
            };

            function eh() {
                this.cache = Object.create(null)
            }
            eh.prototype.get = function(e) {
                return this.cache[e]
            }, eh.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var ec = {
                    create: function() {
                        return new eh
                    }
                },
                ef = {
                    variadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, el.bind(this, e, r, n)
                    }
                };
            (o = p || (p = {})).MISSING_VALUE = "MISSING_VALUE", o.INVALID_VALUE = "INVALID_VALUE", o.MISSING_INTL_API = "MISSING_INTL_API";
            var ep = function(e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return i.code = r, i.originalMessage = n, i
                    }
                    return (0, m.ZT)(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                ed = function(e) {
                    function t(t, r, n, i) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), p.INVALID_VALUE, i) || this
                    }
                    return (0, m.ZT)(t, e), t
                }(ep),
                em = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), p.INVALID_VALUE, n) || this
                    }
                    return (0, m.ZT)(t, e), t
                }(ep),
                eg = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), p.MISSING_VALUE, r) || this
                    }
                    return (0, m.ZT)(t, e), t
                }(ep);

            function ev(e) {
                return "function" == typeof e
            }

            function eE(e, t, r, n, i, a, o) {
                if (1 === e.length && g(e[0])) return [{
                    type: d.literal,
                    value: e[0].value
                }];
                for (var s = [], l = 0; l < e.length; l++) {
                    var h = e[l];
                    if (g(h)) {
                        s.push({
                            type: d.literal,
                            value: h.value
                        });
                        continue
                    }
                    if (h.type === u.pound) {
                        "number" == typeof a && s.push({
                            type: d.literal,
                            value: r.getNumberFormat(t).format(a)
                        });
                        continue
                    }
                    var c = h.value;
                    if (!(i && c in i)) throw new eg(c, o);
                    var f = i[c];
                    if (h.type === u.argument) {
                        f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
                            type: "string" == typeof f ? d.literal : d.object,
                            value: f
                        });
                        continue
                    }
                    if (E(h)) {
                        var m = "string" == typeof h.style ? n.date[h.style] : S(h.style) ? h.style.parsedOptions : void 0;
                        s.push({
                            type: d.literal,
                            value: r.getDateTimeFormat(t, m).format(f)
                        });
                        continue
                    }
                    if (y(h)) {
                        var m = "string" == typeof h.style ? n.time[h.style] : S(h.style) ? h.style.parsedOptions : n.time.medium;
                        s.push({
                            type: d.literal,
                            value: r.getDateTimeFormat(t, m).format(f)
                        });
                        continue
                    }
                    if (v(h)) {
                        var m = "string" == typeof h.style ? n.number[h.style] : T(h.style) ? h.style.parsedOptions : void 0;
                        m && m.scale && (f *= m.scale || 1), s.push({
                            type: d.literal,
                            value: r.getNumberFormat(t, m).format(f)
                        });
                        continue
                    }
                    if (P(h)) {
                        var A = h.children,
                            R = h.value,
                            w = i[R];
                        if (!ev(w)) throw new em(R, "function", o);
                        var I = w(eE(A, t, r, n, i, a).map(function(e) {
                            return e.value
                        }));
                        Array.isArray(I) || (I = [I]), s.push.apply(s, I.map(function(e) {
                            return {
                                type: "string" == typeof e ? d.literal : d.object,
                                value: e
                            }
                        }))
                    }
                    if (_(h)) {
                        var N = h.options[f] || h.options.other;
                        if (!N) throw new ed(h.value, f, Object.keys(h.options), o);
                        s.push.apply(s, eE(N.value, t, r, n, i));
                        continue
                    }
                    if (b(h)) {
                        var N = h.options["=".concat(f)];
                        if (!N) {
                            if (!Intl.PluralRules) throw new ep('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', p.MISSING_INTL_API, o);
                            var L = r.getPluralRules(t, {
                                type: h.pluralType
                            }).select(f - (h.offset || 0));
                            N = h.options[L] || h.options.other
                        }
                        if (!N) throw new ed(h.value, f, Object.keys(h.options), o);
                        s.push.apply(s, eE(N.value, t, r, n, i, f - (h.offset || 0)));
                        continue
                    }
                }
                return s.length < 2 ? s : s.reduce(function(e, t) {
                    var r = e[e.length - 1];
                    return r && r.type === d.literal && t.type === d.literal ? r.value += t.value : e.push(t), e
                }, [])
            }

            function ey(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }(s = d || (d = {}))[s.literal = 0] = "literal", s[s.object = 1] = "object";
            var e_ = function() {
                    function e(t, r, n, i) {
                        var a, o, s = this;
                        if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                                number: {},
                                dateTime: {},
                                pluralRules: {}
                            }, this.format = function(e) {
                                var t = s.formatToParts(e);
                                if (1 === t.length) return t[0].value;
                                var r = t.reduce(function(e, t) {
                                    return e.length && t.type === d.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                                }, []);
                                return r.length <= 1 ? r[0] || "" : r
                            }, this.formatToParts = function(e) {
                                return eE(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                            }, this.resolvedOptions = function() {
                                return {
                                    locale: s.resolvedLocale.toString()
                                }
                            }, this.getAst = function() {
                                return s.ast
                            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                            if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                            this.ast = e.__parse(t, {
                                ignoreTag: null == i ? void 0 : i.ignoreTag,
                                locale: this.resolvedLocale
                            })
                        } else this.ast = t;
                        if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                        this.formats = (a = e.formats, n ? Object.keys(a).reduce(function(e, t) {
                            var r, i;
                            return e[t] = (r = a[t], (i = n[t]) ? (0, m.pi)((0, m.pi)((0, m.pi)({}, r || {}), i || {}), Object.keys(r).reduce(function(e, t) {
                                return e[t] = (0, m.pi)((0, m.pi)({}, r[t]), i[t] || {}), e
                            }, {})) : r), e
                        }, (0, m.pi)({}, a)) : a), this.formatters = i && i.formatters || (void 0 === (o = this.formatterCache) && (o = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }), {
                            getNumberFormat: eo(function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.NumberFormat).bind.apply(e, (0, m.ev)([void 0], t, !1)))
                            }, {
                                cache: ey(o.number),
                                strategy: ef.variadic
                            }),
                            getDateTimeFormat: eo(function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, m.ev)([void 0], t, !1)))
                            }, {
                                cache: ey(o.dateTime),
                                strategy: ef.variadic
                            }),
                            getPluralRules: eo(function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.PluralRules).bind.apply(e, (0, m.ev)([void 0], t, !1)))
                            }, {
                                cache: ey(o.pluralRules),
                                strategy: ef.variadic
                            })
                        })
                    }
                    return Object.defineProperty(e, "defaultLocale", {
                        get: function() {
                            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                    }, e.__parse = ea, e.formats = {
                        number: {
                            integer: {
                                maximumFractionDigits: 0
                            },
                            currency: {
                                style: "currency"
                            },
                            percent: {
                                style: "percent"
                            }
                        },
                        date: {
                            short: {
                                month: "numeric",
                                day: "numeric",
                                year: "2-digit"
                            },
                            medium: {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            },
                            long: {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            },
                            full: {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }
                        },
                        time: {
                            short: {
                                hour: "numeric",
                                minute: "numeric"
                            },
                            medium: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            },
                            long: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            },
                            full: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            }
                        }
                    }, e
                }(),
                eb = e_
        },
        71795: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2265),
                i = r(24033),
                a = r(23720),
                o = r(61396),
                s = r(6543);

            function l(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var u = l(n),
                h = l(o);

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (i[r] = e[r]);
                return i
            }
            var p = "locale";

            function d() {
                var e = i.useParams();
                return e[p] ? e[p] : a.useLocale()
            }

            function m(e) {
                return "object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)
            }

            function g(e, t, r, n) {
                if (void 0 === r && (r = t), !m(e) || null != (i = "object" == typeof e ? e.pathname : e) && !i.startsWith("/")) return e;
                var i, a, o = t !== r;
                return (null == t || n === (a = "/" + t) || n.startsWith(a + "/") || o) && null != t ? v(e, t) : e
            }

            function v(e, t) {
                var r;
                return "string" == typeof e ? r = E(t, e) : (r = c({}, e), e.pathname && (r.pathname = E(t, e.pathname))), r
            }

            function E(e, t) {
                var r = "/" + e;
                return "/" !== t && (r += t), r
            }
            var y = ["href", "locale", "prefetch"],
                _ = n.forwardRef(function(e, t) {
                    var r = e.href,
                        a = e.locale,
                        o = e.prefetch,
                        s = f(e, y),
                        l = i.usePathname(),
                        p = d(),
                        E = a !== p,
                        _ = n.useState(function() {
                            return m(r) && a ? v(r, a) : r
                        }),
                        b = _[0],
                        P = _[1];
                    return n.useEffect(function() {
                        P(g(r, a, p, null != l ? l : void 0))
                    }, [p, r, a, l]), E && (o = !1), u.default.createElement(h.default, c({
                        ref: t,
                        href: b,
                        prefetch: o
                    }, s))
                }),
                b = ["locale"],
                P = n.forwardRef(function(e, t) {
                    var r = e.locale,
                        n = f(e, b),
                        i = d();
                    return u.default.createElement(_, c({
                        ref: t,
                        locale: r || i
                    }, n))
                }),
                T = !1;

            function S(e) {
                return T || (console.warn("\n\nDEPRECATION WARNING: The import for `Link` from next-intl has changed.\n\nPreviously: import {Link} from 'next-intl';\nNow:        import Link from 'next-intl/link';\n\nPlease upgrade your import accordingly. See also https://next-intl-docs.vercel.app/docs/next-13/navigation#link\n\n"), T = !0), u.default.createElement(P, c({}, e))
            }
            var A = ["children", "locale", "now"];

            function R(e) {
                var t, r = e.children,
                    n = e.locale,
                    i = e.now,
                    o = f(e, A);
                try {
                    t = s.useRouter()
                } catch (e) {}
                if (!n && t && (n = t.locale), "string" == typeof i && (i = new Date(i)), !n) throw Error(void 0);
                return u.default.createElement(a.IntlProvider, c({
                    locale: n,
                    now: i
                }, o), r)
            }
            var w = !1;
            t.Link = S, t.LocalizedLink = S, t.NextIntlClientProvider = R, t.NextIntlProvider = R, t.useLocalizedRouter = function() {
                var e, t;
                return w || (console.warn("\n\nDEPRECATION WARNING: The `useLocalizedRouter` import from `next-intl` is deprecated and will be removed in the stable release of next-intl. Please import `useLocalizedRouter` from `next-intl/client` instead. See https://next-intl-docs.vercel.app/docs/next-13/server-components\n\n"), w = !0), e = i.useRouter(), t = d(), n.useMemo(function() {
                    function r(e) {
                        return g(e, t, t, window.location.pathname)
                    }
                    return c({}, e, {
                        push: function(t) {
                            return e.push(r(t))
                        },
                        replace: function(t) {
                            return e.replace(r(t))
                        },
                        prefetch: function(t) {
                            return e.prefetch(r(t))
                        }
                    })
                }, [t, e])
            }, Object.keys(a).forEach(function(e) {
                "default" === e || t.hasOwnProperty(e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                })
            })
        },
        44691: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "detectDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        63203: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "removeLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(52590), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        85711: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    markAssetError: function() {
                        return s
                    },
                    isAssetError: function() {
                        return l
                    },
                    getClientBuildManifest: function() {
                        return f
                    },
                    createRouteLoader: function() {
                        return d
                    }
                }), r(21024), r(12660);
            let n = r(57250),
                i = r(98043);

            function a(e, t, r) {
                let n, i = t.get(e);
                if (i) return "future" in i ? i.future : Promise.resolve(i);
                let a = new Promise(e => {
                    n = e
                });
                return t.set(e, i = {
                    resolve: n,
                    future: a
                }), r ? r().then(e => (n(e), e)).catch(r => {
                    throw t.delete(e), r
                }) : a
            }
            let o = Symbol("ASSET_LOAD_ERROR");

            function s(e) {
                return Object.defineProperty(e, o, {})
            }

            function l(e) {
                return e && o in e
            }
            let u = function(e) {
                    try {
                        return e = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch")
                    } catch (e) {
                        return !1
                    }
                }(),
                h = () => "";

            function c(e, t, r) {
                return new Promise((n, a) => {
                    let o = !1;
                    e.then(e => {
                        o = !0, n(e)
                    }).catch(a), (0, i.requestIdleCallback)(() => setTimeout(() => {
                        o || a(r)
                    }, t))
                })
            }

            function f() {
                if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
                let e = new Promise(e => {
                    let t = self.__BUILD_MANIFEST_CB;
                    self.__BUILD_MANIFEST_CB = () => {
                        e(self.__BUILD_MANIFEST), t && t()
                    }
                });
                return c(e, 3800, s(Error("Failed to load client build manifest")))
            }

            function p(e, t) {
                return f().then(r => {
                    if (!(t in r)) throw s(Error("Failed to lookup route: " + t));
                    let i = r[t].map(t => e + "/_next/" + encodeURI(t));
                    return {
                        scripts: i.filter(e => e.endsWith(".js")).map(e => (0, n.__unsafeCreateTrustedScriptURL)(e) + h()),
                        css: i.filter(e => e.endsWith(".css")).map(e => e + h())
                    }
                })
            }

            function d(e) {
                let t = new Map,
                    r = new Map,
                    n = new Map,
                    o = new Map;

                function l(e) {
                    {
                        var t;
                        let n = r.get(e.toString());
                        return n || (document.querySelector('script[src^="' + e + '"]') ? Promise.resolve() : (r.set(e.toString(), n = new Promise((r, n) => {
                            (t = document.createElement("script")).onload = r, t.onerror = () => n(s(Error("Failed to load script: " + e))), t.crossOrigin = void 0, t.src = e, document.body.appendChild(t)
                        })), n))
                    }
                }

                function h(e) {
                    let t = n.get(e);
                    return t || n.set(e, t = fetch(e).then(t => {
                        if (!t.ok) throw Error("Failed to load stylesheet: " + e);
                        return t.text().then(t => ({
                            href: e,
                            content: t
                        }))
                    }).catch(e => {
                        throw s(e)
                    })), t
                }
                return {
                    whenEntrypoint: e => a(e, t),
                    onEntrypoint(e, r) {
                        (r ? Promise.resolve().then(() => r()).then(e => ({
                            component: e && e.default || e,
                            exports: e
                        }), e => ({
                            error: e
                        })) : Promise.resolve(void 0)).then(r => {
                            let n = t.get(e);
                            n && "resolve" in n ? r && (t.set(e, r), n.resolve(r)) : (r ? t.set(e, r) : t.delete(e), o.delete(e))
                        })
                    },
                    loadRoute(r, n) {
                        return a(r, o, () => {
                            let i;
                            return c(p(e, r).then(e => {
                                let {
                                    scripts: n,
                                    css: i
                                } = e;
                                return Promise.all([t.has(r) ? [] : Promise.all(n.map(l)), Promise.all(i.map(h))])
                            }).then(e => this.whenEntrypoint(r).then(t => ({
                                entrypoint: t,
                                styles: e[1]
                            }))), 3800, s(Error("Route did not complete loading: " + r))).then(e => {
                                let {
                                    entrypoint: t,
                                    styles: r
                                } = e, n = Object.assign({
                                    styles: r
                                }, t);
                                return "error" in t ? t : n
                            }).catch(e => {
                                if (n) throw e;
                                return {
                                    error: e
                                }
                            }).finally(() => null == i ? void 0 : i())
                        })
                    },
                    prefetch(t) {
                        let r;
                        return (r = navigator.connection) && (r.saveData || /2g/.test(r.effectiveType)) ? Promise.resolve() : p(e, t).then(e => Promise.all(u ? e.scripts.map(e => {
                            var t, r, n;
                            return t = e.toString(), r = "script", new Promise((e, i) => {
                                let a = '\n      link[rel="prefetch"][href^="' + t + '"],\n      link[rel="preload"][href^="' + t + '"],\n      script[src^="' + t + '"]';
                                if (document.querySelector(a)) return e();
                                n = document.createElement("link"), r && (n.as = r), n.rel = "prefetch", n.crossOrigin = void 0, n.onload = e, n.onerror = () => i(s(Error("Failed to prefetch: " + t))), n.href = t, document.head.appendChild(n)
                            })
                        }) : [])).then(() => {
                            (0, i.requestIdleCallback)(() => this.loadRoute(t, !0).catch(() => {}))
                        }).catch(() => {})
                    }
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        13808: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    Router: function() {
                        return a.default
                    },
                    default: function() {
                        return p
                    },
                    withRouter: function() {
                        return l.default
                    },
                    useRouter: function() {
                        return d
                    },
                    createRouter: function() {
                        return m
                    },
                    makePublicRouterInstance: function() {
                        return g
                    }
                });
            let n = r(21024),
                i = n._(r(2265)),
                a = n._(r(24567)),
                o = r(22706),
                s = n._(r(28810)),
                l = n._(r(79535)),
                u = {
                    router: null,
                    readyCallbacks: [],
                    ready(e) {
                        if (this.router) return e();
                        this.readyCallbacks.push(e)
                    }
                },
                h = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"],
                c = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];

            function f() {
                if (!u.router) throw Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n');
                return u.router
            }
            Object.defineProperty(u, "events", {
                get: () => a.default.events
            }), h.forEach(e => {
                Object.defineProperty(u, e, {
                    get() {
                        let t = f();
                        return t[e]
                    }
                })
            }), c.forEach(e => {
                u[e] = function() {
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    let i = f();
                    return i[e](...r)
                }
            }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(e => {
                u.ready(() => {
                    a.default.events.on(e, function() {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        let i = "on" + e.charAt(0).toUpperCase() + e.substring(1);
                        if (u[i]) try {
                            u[i](...r)
                        } catch (e) {
                            console.error("Error when running the Router event: " + i), console.error((0, s.default)(e) ? e.message + "\n" + e.stack : e + "")
                        }
                    })
                })
            });
            let p = u;

            function d() {
                let e = i.default.useContext(o.RouterContext);
                if (!e) throw Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
                return e
            }

            function m() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return u.router = new a.default(...t), u.readyCallbacks.forEach(e => e()), u.readyCallbacks = [], u.router
            }

            function g(e) {
                let t = {};
                for (let r of h) {
                    if ("object" == typeof e[r]) {
                        t[r] = Object.assign(Array.isArray(e[r]) ? [] : {}, e[r]);
                        continue
                    }
                    t[r] = e[r]
                }
                return t.events = a.default.events, c.forEach(r => {
                    t[r] = function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return e[r](...n)
                    }
                }), t
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        57250: function(e, t) {
            "use strict";
            let r;

            function n(e) {
                var t;
                return (null == (t = function() {
                    if (void 0 === r) {
                        var e;
                        r = (null == (e = window.trustedTypes) ? void 0 : e.createPolicy("nextjs", {
                            createHTML: e => e,
                            createScript: e => e,
                            createScriptURL: e => e
                        })) || null
                    }
                    return r
                }()) ? void 0 : t.createScriptURL(e)) || e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "__unsafeCreateTrustedScriptURL", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        79535: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(21024),
                i = n._(r(2265)),
                a = r(13808);

            function o(e) {
                function t(t) {
                    return i.default.createElement(e, {
                        router: (0, a.useRouter)(),
                        ...t
                    })
                }
                return t.getInitialProps = e.getInitialProps, t.origGetInitialProps = e.origGetInitialProps, t
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        22886: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BloomFilter", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            class r {
                static from(e, t) {
                    void 0 === t && (t = .01);
                    let n = new r(e.length, t);
                    for (let t of e) n.add(t);
                    return n
                }
                export () {
                    let e = {
                        numItems: this.numItems,
                        errorRate: this.errorRate,
                        numBits: this.numBits,
                        numHashes: this.numHashes,
                        bitArray: this.bitArray
                    };
                    return e
                }
                import (e) {
                    this.numItems = e.numItems, this.errorRate = e.errorRate, this.numBits = e.numBits, this.numHashes = e.numHashes, this.bitArray = e.bitArray
                }
                add(e) {
                    let t = this.getHashValues(e);
                    t.forEach(e => {
                        this.bitArray[e] = 1
                    })
                }
                contains(e) {
                    let t = this.getHashValues(e);
                    return t.every(e => this.bitArray[e])
                }
                getHashValues(e) {
                    let t = [];
                    for (let r = 1; r <= this.numHashes; r++) {
                        let n = function(e) {
                            let t = 0;
                            for (let r = 0; r < e.length; r++) {
                                let n = e.charCodeAt(r);
                                t = Math.imul(t ^ n, 1540483477), t ^= t >>> 13, t = Math.imul(t, 1540483477)
                            }
                            return t >>> 0
                        }("" + e + r) % this.numBits;
                        t.push(n)
                    }
                    return t
                }
                constructor(e, t) {
                    this.numItems = e, this.errorRate = t, this.numBits = Math.ceil(-(e * Math.log(t)) / (Math.log(2) * Math.log(2))), this.numHashes = Math.ceil(this.numBits / e * Math.log(2)), this.bitArray = Array(this.numBits).fill(0)
                }
            }
        },
        36322: function(e, t) {
            "use strict";

            function r(e, t) {
                let r;
                let n = e.split("/");
                return (t || []).some(t => !!n[1] && n[1].toLowerCase() === t.toLowerCase() && (r = t, n.splice(1, 1), e = n.join("/") || "/", !0)), {
                    pathname: e,
                    detectedLocale: r
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        43584: function(e, t) {
            "use strict";

            function r(e) {
                return Object.prototype.toString.call(e)
            }

            function n(e) {
                if ("[object Object]" !== r(e)) return !1;
                let t = Object.getPrototypeOf(e);
                return null === t || t.hasOwnProperty("isPrototypeOf")
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    getObjectClassLabel: function() {
                        return r
                    },
                    isPlainObject: function() {
                        return n
                    }
                })
        },
        86254: function(e, t) {
            "use strict";

            function r() {
                let e = Object.create(null);
                return {
                    on(t, r) {
                        (e[t] || (e[t] = [])).push(r)
                    },
                    off(t, r) {
                        e[t] && e[t].splice(e[t].indexOf(r) >>> 0, 1)
                    },
                    emit(t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        (e[t] || []).slice().map(e => {
                            e(...n)
                        })
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        56042: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "denormalizePagePath", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(79899),
                i = r(47284);

            function a(e) {
                let t = (0, i.normalizePathSep)(e);
                return t.startsWith("/index/") && !(0, n.isDynamicRoute)(t) ? t.slice(6) : "/index" !== t ? t : "/"
            }
        },
        47284: function(e, t) {
            "use strict";

            function r(e) {
                return e.replace(/\\/g, "/")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizePathSep", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        24567: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return q
                    },
                    matchesMiddleware: function() {
                        return x
                    },
                    createKey: function() {
                        return W
                    }
                });
            let n = r(21024),
                i = r(68533),
                a = r(37369),
                o = r(85711),
                s = r(83015),
                l = i._(r(28810)),
                u = r(56042),
                h = r(36322),
                c = n._(r(86254)),
                f = r(95090),
                p = r(28354),
                d = r(21564),
                m = n._(r(49021)),
                g = r(13658),
                v = r(84170),
                E = r(36162);
            r(44691);
            let y = r(52590),
                _ = r(97607),
                b = r(63203),
                P = r(23570),
                T = r(36711),
                S = r(73719),
                A = r(42477),
                R = r(35224),
                w = r(408),
                I = r(92345),
                N = r(93954),
                L = r(33738),
                H = r(43259),
                O = r(52156),
                B = r(99232),
                C = r(61067);

            function M() {
                return Object.assign(Error("Route Cancelled"), {
                    cancelled: !0
                })
            }
            async function x(e) {
                let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
                if (!t) return !1;
                let {
                    pathname: r
                } = (0, y.parsePath)(e.asPath), n = (0, S.hasBasePath)(r) ? (0, P.removeBasePath)(r) : r, i = (0, T.addBasePath)((0, _.addLocale)(n, e.locale));
                return t.some(e => new RegExp(e.regexp).test(i))
            }

            function D(e) {
                let t = (0, f.getLocationOrigin)();
                return e.startsWith(t) ? e.substring(t.length) : e
            }

            function U(e, t, r) {
                let [n, i] = (0, O.resolveHref)(e, t, !0), a = (0, f.getLocationOrigin)(), o = n.startsWith(a), s = i && i.startsWith(a);
                n = D(n), i = i ? D(i) : i;
                let l = o ? n : (0, T.addBasePath)(n),
                    u = r ? D((0, O.resolveHref)(e, r)) : i || n;
                return {
                    url: l,
                    as: s ? u : (0, T.addBasePath)(u)
                }
            }

            function j(e, t) {
                let r = (0, a.removeTrailingSlash)((0, u.denormalizePagePath)(e));
                return "/404" === r || "/_error" === r ? e : (t.includes(r) || t.some(t => {
                    if ((0, p.isDynamicRoute)(t) && (0, v.getRouteRegex)(t).re.test(r)) return e = t, !0
                }), (0, a.removeTrailingSlash)(e))
            }
            async function k(e) {
                let t = await x(e);
                if (!t || !e.fetchData) return null;
                try {
                    let t = await e.fetchData(),
                        r = await
                    function(e, t, r) {
                        let n = {
                                basePath: r.router.basePath,
                                i18n: {
                                    locales: r.router.locales
                                },
                                trailingSlash: !1
                            },
                            i = t.headers.get("x-nextjs-rewrite"),
                            s = i || t.headers.get("x-nextjs-matched-path"),
                            l = t.headers.get("x-matched-path");
                        if (!l || s || l.includes("__next_data_catchall") || l.includes("/_error") || l.includes("/404") || (s = l), s) {
                            if (s.startsWith("/")) {
                                let t = (0, d.parseRelativeUrl)(s),
                                    l = (0, R.getNextPathnameInfo)(t.pathname, {
                                        nextConfig: n,
                                        parseData: !0
                                    }),
                                    u = (0, a.removeTrailingSlash)(l.pathname);
                                return Promise.all([r.router.pageLoader.getPageList(), (0, o.getClientBuildManifest)()]).then(n => {
                                    let [a, {
                                        __rewrites: o
                                    }] = n, s = (0, _.addLocale)(l.pathname, l.locale);
                                    if ((0, p.isDynamicRoute)(s) || !i && a.includes((0, h.normalizeLocalePath)((0, P.removeBasePath)(s), r.router.locales).pathname)) {
                                        let r = (0, R.getNextPathnameInfo)((0, d.parseRelativeUrl)(e).pathname, {
                                            nextConfig: void 0,
                                            parseData: !0
                                        });
                                        s = (0, T.addBasePath)(r.pathname), t.pathname = s
                                    } {
                                        let e = (0, m.default)(s, a, o, t.query, e => j(e, a), r.router.locales);
                                        e.matchedPage && (t.pathname = e.parsedAs.pathname, s = t.pathname, Object.assign(t.query, e.parsedAs.query))
                                    }
                                    let c = a.includes(u) ? u : j((0, h.normalizeLocalePath)((0, P.removeBasePath)(t.pathname), r.router.locales).pathname, a);
                                    if ((0, p.isDynamicRoute)(c)) {
                                        let e = (0, g.getRouteMatcher)((0, v.getRouteRegex)(c))(s);
                                        Object.assign(t.query, e || {})
                                    }
                                    return {
                                        type: "rewrite",
                                        parsedAs: t,
                                        resolvedHref: c
                                    }
                                })
                            }
                            let t = (0, y.parsePath)(e),
                                l = (0, w.formatNextPathnameInfo)({ ...(0, R.getNextPathnameInfo)(t.pathname, {
                                        nextConfig: n,
                                        parseData: !0
                                    }),
                                    defaultLocale: r.router.defaultLocale,
                                    buildId: ""
                                });
                            return Promise.resolve({
                                type: "redirect-external",
                                destination: "" + l + t.query + t.hash
                            })
                        }
                        let u = t.headers.get("x-nextjs-redirect");
                        if (u) {
                            if (u.startsWith("/")) {
                                let e = (0, y.parsePath)(u),
                                    t = (0, w.formatNextPathnameInfo)({ ...(0, R.getNextPathnameInfo)(e.pathname, {
                                            nextConfig: n,
                                            parseData: !0
                                        }),
                                        defaultLocale: r.router.defaultLocale,
                                        buildId: ""
                                    });
                                return Promise.resolve({
                                    type: "redirect-internal",
                                    newAs: "" + t + e.query + e.hash,
                                    newUrl: "" + t + e.query + e.hash
                                })
                            }
                            return Promise.resolve({
                                type: "redirect-external",
                                destination: u
                            })
                        }
                        return Promise.resolve({
                            type: "next"
                        })
                    }(t.dataHref, t.response, e);
                    return {
                        dataHref: t.dataHref,
                        json: t.json,
                        response: t.response,
                        text: t.text,
                        cacheKey: t.cacheKey,
                        effect: r
                    }
                } catch (e) {
                    return null
                }
            }
            let F = Symbol("SSG_DATA_NOT_FOUND");

            function G(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                var t;
                let {
                    dataHref: r,
                    inflightCache: n,
                    isPrefetch: i,
                    hasMiddleware: a,
                    isServerRender: s,
                    parseJSON: l,
                    persistCache: u,
                    isBackground: h,
                    unstable_skipClientCache: c
                } = e, {
                    href: f
                } = new URL(r, window.location.href), p = e => (function e(t, r, n) {
                    return fetch(t, {
                        credentials: "same-origin",
                        method: n.method || "GET",
                        headers: Object.assign({}, n.headers, {
                            "x-nextjs-data": "1"
                        })
                    }).then(i => !i.ok && r > 1 && i.status >= 500 ? e(t, r - 1, n) : i)
                })(r, s ? 3 : 1, {
                    headers: Object.assign({}, i ? {
                        purpose: "prefetch"
                    } : {}, i && a ? {
                        "x-middleware-prefetch": "1"
                    } : {}),
                    method: null != (t = null == e ? void 0 : e.method) ? t : "GET"
                }).then(t => t.ok && (null == e ? void 0 : e.method) === "HEAD" ? {
                    dataHref: r,
                    response: t,
                    text: "",
                    json: {},
                    cacheKey: f
                } : t.text().then(e => {
                    if (!t.ok) {
                        if (a && [301, 302, 307, 308].includes(t.status)) return {
                            dataHref: r,
                            response: t,
                            text: e,
                            json: {},
                            cacheKey: f
                        };
                        if (404 === t.status) {
                            var n;
                            if (null == (n = G(e)) ? void 0 : n.notFound) return {
                                dataHref: r,
                                json: {
                                    notFound: F
                                },
                                response: t,
                                text: e,
                                cacheKey: f
                            }
                        }
                        let i = Error("Failed to load static props");
                        throw s || (0, o.markAssetError)(i), i
                    }
                    return {
                        dataHref: r,
                        json: l ? G(e) : null,
                        response: t,
                        text: e,
                        cacheKey: f
                    }
                })).then(e => (u && "no-cache" !== e.response.headers.get("x-middleware-cache") || delete n[f], e)).catch(e => {
                    throw c || delete n[f], ("Failed to fetch" === e.message || "NetworkError when attempting to fetch resource." === e.message || "Load failed" === e.message) && (0, o.markAssetError)(e), e
                });
                return c && u ? p({}).then(e => (n[f] = Promise.resolve(e), e)) : void 0 !== n[f] ? n[f] : n[f] = p(h ? {
                    method: "HEAD"
                } : {})
            }

            function W() {
                return Math.random().toString(36).slice(2, 10)
            }

            function X(e) {
                let {
                    url: t,
                    router: r
                } = e;
                if (t === (0, T.addBasePath)((0, _.addLocale)(r.asPath, r.locale))) throw Error("Invariant: attempted to hard navigate to the same URL " + t + " " + location.href);
                window.location.href = t
            }
            let K = e => {
                let {
                    route: t,
                    router: r
                } = e, n = !1, i = r.clc = () => {
                    n = !0
                };
                return () => {
                    if (n) {
                        let e = Error('Abort fetching component for route: "' + t + '"');
                        throw e.cancelled = !0, e
                    }
                    i === r.clc && (r.clc = null)
                }
            };
            class q {
                reload() {
                    window.location.reload()
                }
                back() {
                    window.history.back()
                }
                forward() {
                    window.history.forward()
                }
                push(e, t, r) {
                    return void 0 === r && (r = {}), {
                        url: e,
                        as: t
                    } = U(this, e, t), this.change("pushState", e, t, r)
                }
                replace(e, t, r) {
                    return void 0 === r && (r = {}), {
                        url: e,
                        as: t
                    } = U(this, e, t), this.change("replaceState", e, t, r)
                }
                async _bfl(e, t, r, n) {
                    {
                        let l = !1,
                            u = !1;
                        for (let h of [e, t])
                            if (h) {
                                let t = (0, a.removeTrailingSlash)(new URL(h, "http://n").pathname),
                                    c = (0, T.addBasePath)((0, _.addLocale)(t, r || this.locale));
                                if (t !== (0, a.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
                                    var i, o, s;
                                    for (let e of (l = l || !!(null == (i = this._bfl_s) ? void 0 : i.contains(t)) || !!(null == (o = this._bfl_s) ? void 0 : o.contains(c)), [t, c])) {
                                        let t = e.split("/");
                                        for (let e = 0; !u && e < t.length + 1; e++) {
                                            let r = t.slice(0, e).join("/");
                                            if (r && (null == (s = this._bfl_d) ? void 0 : s.contains(r))) {
                                                u = !0;
                                                break
                                            }
                                        }
                                    }
                                    if (l || u) {
                                        if (n) return !0;
                                        return X({
                                            url: (0, T.addBasePath)((0, _.addLocale)(e, r || this.locale, this.defaultLocale)),
                                            router: this
                                        }), new Promise(() => {})
                                    }
                                }
                            }
                    }
                    return !1
                }
                async change(e, t, r, n, i) {
                    var u, h, c, A, R, w, L, O, C;
                    let D, k;
                    if (!(0, N.isLocalURL)(t)) return X({
                        url: t,
                        router: this
                    }), !1;
                    let G = 1 === n._h;
                    G || n.shallow || await this._bfl(r, void 0, n.locale);
                    let V = G || n._shouldResolveHref || (0, y.parsePath)(t).pathname === (0, y.parsePath)(r).pathname,
                        W = { ...this.state
                        },
                        K = !0 !== this.isReady;
                    this.isReady = !0;
                    let Z = this.isSsr;
                    if (G || (this.isSsr = !1), G && this.clc) return !1;
                    let z = W.locale;
                    f.ST && performance.mark("routeChange");
                    let {
                        shallow: Y = !1,
                        scroll: Q = !0
                    } = n, J = {
                        shallow: Y
                    };
                    this._inFlightRoute && this.clc && (Z || q.events.emit("routeChangeError", M(), this._inFlightRoute, J), this.clc(), this.clc = null), r = (0, T.addBasePath)((0, _.addLocale)((0, S.hasBasePath)(r) ? (0, P.removeBasePath)(r) : r, n.locale, this.defaultLocale));
                    let $ = (0, b.removeLocale)((0, S.hasBasePath)(r) ? (0, P.removeBasePath)(r) : r, W.locale);
                    this._inFlightRoute = r;
                    let ee = z !== W.locale;
                    if (!G && this.onlyAHashChange($) && !ee) {
                        W.asPath = $, q.events.emit("hashChangeStart", r, J), this.changeState(e, t, r, { ...n,
                            scroll: !1
                        }), Q && this.scrollToHash($);
                        try {
                            await this.set(W, this.components[W.route], null)
                        } catch (e) {
                            throw (0, l.default)(e) && e.cancelled && q.events.emit("routeChangeError", e, $, J), e
                        }
                        return q.events.emit("hashChangeComplete", r, J), !0
                    }
                    let et = (0, d.parseRelativeUrl)(t),
                        {
                            pathname: er,
                            query: en
                        } = et;
                    if (null == (u = this.components[er]) ? void 0 : u.__appRouter) return X({
                        url: r,
                        router: this
                    }), new Promise(() => {});
                    try {
                        [D, {
                            __rewrites: k
                        }] = await Promise.all([this.pageLoader.getPageList(), (0, o.getClientBuildManifest)(), this.pageLoader.getMiddleware()])
                    } catch (e) {
                        return X({
                            url: r,
                            router: this
                        }), !1
                    }
                    this.urlIsNew($) || ee || (e = "replaceState");
                    let ei = r;
                    er = er ? (0, a.removeTrailingSlash)((0, P.removeBasePath)(er)) : er;
                    let ea = (0, a.removeTrailingSlash)(er),
                        eo = r.startsWith("/") && (0, d.parseRelativeUrl)(r).pathname,
                        es = !!(eo && ea !== eo && (!(0, p.isDynamicRoute)(ea) || !(0, g.getRouteMatcher)((0, v.getRouteRegex)(ea))(eo))),
                        el = !n.shallow && await x({
                            asPath: r,
                            locale: W.locale,
                            router: this
                        });
                    if (G && el && (V = !1), V && "/_error" !== er) {
                        if (n._shouldResolveHref = !0, r.startsWith("/")) {
                            let e = (0, m.default)((0, T.addBasePath)((0, _.addLocale)($, W.locale), !0), D, k, en, e => j(e, D), this.locales);
                            if (e.externalDest) return X({
                                url: r,
                                router: this
                            }), !0;
                            el || (ei = e.asPath), e.matchedPage && e.resolvedHref && (er = e.resolvedHref, et.pathname = (0, T.addBasePath)(er), el || (t = (0, E.formatWithValidation)(et)))
                        } else et.pathname = j(er, D), et.pathname === er || (er = et.pathname, et.pathname = (0, T.addBasePath)(er), el || (t = (0, E.formatWithValidation)(et)))
                    }
                    if (!(0, N.isLocalURL)(r)) return X({
                        url: r,
                        router: this
                    }), !1;
                    ei = (0, b.removeLocale)((0, P.removeBasePath)(ei), W.locale), ea = (0, a.removeTrailingSlash)(er);
                    let eu = !1;
                    if ((0, p.isDynamicRoute)(ea)) {
                        let e = (0, d.parseRelativeUrl)(ei),
                            n = e.pathname,
                            i = (0, v.getRouteRegex)(ea);
                        eu = (0, g.getRouteMatcher)(i)(n);
                        let a = ea === n,
                            o = a ? (0, B.interpolateAs)(ea, n, en) : {};
                        if (eu && (!a || o.result)) a ? r = (0, E.formatWithValidation)(Object.assign({}, e, {
                            pathname: o.result,
                            query: (0, H.omit)(en, o.params)
                        })) : Object.assign(en, eu);
                        else {
                            let e = Object.keys(i.groups).filter(e => !en[e] && !i.groups[e].optional);
                            if (e.length > 0 && !el) throw Error((a ? "The provided `href` (" + t + ") value is missing query values (" + e.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + n + ") is incompatible with the `href` value (" + ea + "). ") + "Read more: https://nextjs.org/docs/messages/" + (a ? "href-interpolation-failed" : "incompatible-href-as"))
                        }
                    }
                    G || q.events.emit("routeChangeStart", r, J);
                    let eh = "/404" === this.pathname || "/_error" === this.pathname;
                    try {
                        let a = await this.getRouteInfo({
                            route: ea,
                            pathname: er,
                            query: en,
                            as: r,
                            resolvedAs: ei,
                            routeProps: J,
                            locale: W.locale,
                            isPreview: W.isPreview,
                            hasMiddleware: el,
                            unstable_skipClientCache: n.unstable_skipClientCache,
                            isQueryUpdating: G && !this.isFallback,
                            isMiddlewareRewrite: es
                        });
                        if (G || n.shallow || await this._bfl(r, "resolvedAs" in a ? a.resolvedAs : void 0, W.locale), "route" in a && el) {
                            ea = er = a.route || ea, J.shallow || (en = Object.assign({}, a.query || {}, en));
                            let e = (0, S.hasBasePath)(et.pathname) ? (0, P.removeBasePath)(et.pathname) : et.pathname;
                            if (eu && er !== e && Object.keys(eu).forEach(e => {
                                    eu && en[e] === eu[e] && delete en[e]
                                }), (0, p.isDynamicRoute)(er)) {
                                let e = !J.shallow && a.resolvedAs ? a.resolvedAs : (0, T.addBasePath)((0, _.addLocale)(new URL(r, location.href).pathname, W.locale), !0),
                                    t = e;
                                (0, S.hasBasePath)(t) && (t = (0, P.removeBasePath)(t));
                                let n = (0, v.getRouteRegex)(er),
                                    i = (0, g.getRouteMatcher)(n)(new URL(t, location.href).pathname);
                                i && Object.assign(en, i)
                            }
                        }
                        if ("type" in a) {
                            if ("redirect-internal" === a.type) return this.change(e, a.newUrl, a.newAs, n);
                            return X({
                                url: a.destination,
                                router: this
                            }), new Promise(() => {})
                        }
                        let o = a.Component;
                        if (o && o.unstable_scriptLoader) {
                            let e = [].concat(o.unstable_scriptLoader());
                            e.forEach(e => {
                                (0, s.handleClientScriptLoad)(e.props)
                            })
                        }
                        if ((a.__N_SSG || a.__N_SSP) && a.props) {
                            if (a.props.pageProps && a.props.pageProps.__N_REDIRECT) {
                                n.locale = !1;
                                let t = a.props.pageProps.__N_REDIRECT;
                                if (t.startsWith("/") && !1 !== a.props.pageProps.__N_REDIRECT_BASE_PATH) {
                                    let r = (0, d.parseRelativeUrl)(t);
                                    r.pathname = j(r.pathname, D);
                                    let {
                                        url: i,
                                        as: a
                                    } = U(this, t, t);
                                    return this.change(e, i, a, n)
                                }
                                return X({
                                    url: t,
                                    router: this
                                }), new Promise(() => {})
                            }
                            if (W.isPreview = !!a.props.__N_PREVIEW, a.props.notFound === F) {
                                let e;
                                try {
                                    await this.fetchComponent("/404"), e = "/404"
                                } catch (t) {
                                    e = "/_error"
                                }
                                if (a = await this.getRouteInfo({
                                        route: e,
                                        pathname: e,
                                        query: en,
                                        as: r,
                                        resolvedAs: ei,
                                        routeProps: {
                                            shallow: !1
                                        },
                                        locale: W.locale,
                                        isPreview: W.isPreview,
                                        isNotFound: !0
                                    }), "type" in a) throw Error("Unexpected middleware effect on /404")
                            }
                        }
                        G && "/_error" === this.pathname && (null == (h = self.__NEXT_DATA__.props) ? void 0 : null == (c = h.pageProps) ? void 0 : c.statusCode) === 500 && (null == (A = a.props) ? void 0 : A.pageProps) && (a.props.pageProps.statusCode = 500);
                        let u = n.shallow && W.route === (null != (R = a.route) ? R : ea),
                            f = null != (w = n.scroll) ? w : !G && !u,
                            m = null != i ? i : f ? {
                                x: 0,
                                y: 0
                            } : null,
                            E = { ...W,
                                route: ea,
                                pathname: er,
                                query: en,
                                asPath: $,
                                isFallback: !1
                            };
                        if (G && eh) {
                            if (a = await this.getRouteInfo({
                                    route: this.pathname,
                                    pathname: this.pathname,
                                    query: en,
                                    as: r,
                                    resolvedAs: ei,
                                    routeProps: {
                                        shallow: !1
                                    },
                                    locale: W.locale,
                                    isPreview: W.isPreview,
                                    isQueryUpdating: G && !this.isFallback
                                }), "type" in a) throw Error("Unexpected middleware effect on " + this.pathname);
                            "/_error" === this.pathname && (null == (L = self.__NEXT_DATA__.props) ? void 0 : null == (O = L.pageProps) ? void 0 : O.statusCode) === 500 && (null == (C = a.props) ? void 0 : C.pageProps) && (a.props.pageProps.statusCode = 500);
                            try {
                                await this.set(E, a, m)
                            } catch (e) {
                                throw (0, l.default)(e) && e.cancelled && q.events.emit("routeChangeError", e, $, J), e
                            }
                            return !0
                        }
                        q.events.emit("beforeHistoryChange", r, J), this.changeState(e, t, r, n);
                        let y = G && !m && !K && !ee && (0, I.compareRouterStates)(E, this.state);
                        if (!y) {
                            try {
                                await this.set(E, a, m)
                            } catch (e) {
                                if (e.cancelled) a.error = a.error || e;
                                else throw e
                            }
                            if (a.error) throw G || q.events.emit("routeChangeError", a.error, $, J), a.error;
                            G || q.events.emit("routeChangeComplete", r, J), f && /#.+$/.test(r) && this.scrollToHash(r)
                        }
                        return !0
                    } catch (e) {
                        if ((0, l.default)(e) && e.cancelled) return !1;
                        throw e
                    }
                }
                changeState(e, t, r, n) {
                    void 0 === n && (n = {}), ("pushState" !== e || (0, f.getURL)() !== r) && (this._shallow = n.shallow, window.history[e]({
                        url: t,
                        as: r,
                        options: n,
                        __N: !0,
                        key: this._key = "pushState" !== e ? this._key : W()
                    }, "", r))
                }
                async handleRouteInfoError(e, t, r, n, i, a) {
                    if (console.error(e), e.cancelled) throw e;
                    if ((0, o.isAssetError)(e) || a) throw q.events.emit("routeChangeError", e, n, i), X({
                        url: n,
                        router: this
                    }), M();
                    try {
                        let n;
                        let {
                            page: i,
                            styleSheets: a
                        } = await this.fetchComponent("/_error"), o = {
                            props: n,
                            Component: i,
                            styleSheets: a,
                            err: e,
                            error: e
                        };
                        if (!o.props) try {
                            o.props = await this.getInitialProps(i, {
                                err: e,
                                pathname: t,
                                query: r
                            })
                        } catch (e) {
                            console.error("Error in error page `getInitialProps`: ", e), o.props = {}
                        }
                        return o
                    } catch (e) {
                        return this.handleRouteInfoError((0, l.default)(e) ? e : Error(e + ""), t, r, n, i, !0)
                    }
                }
                async getRouteInfo(e) {
                    let {
                        route: t,
                        pathname: r,
                        query: n,
                        as: i,
                        resolvedAs: o,
                        routeProps: s,
                        locale: u,
                        hasMiddleware: c,
                        isPreview: f,
                        unstable_skipClientCache: p,
                        isQueryUpdating: d,
                        isMiddlewareRewrite: m,
                        isNotFound: g
                    } = e, v = t;
                    try {
                        var y, _, b, T;
                        let e = K({
                                route: v,
                                router: this
                            }),
                            t = this.components[v];
                        if (s.shallow && t && this.route === v) return t;
                        c && (t = void 0);
                        let l = !t || "initial" in t ? void 0 : t,
                            S = {
                                dataHref: this.pageLoader.getDataHref({
                                    href: (0, E.formatWithValidation)({
                                        pathname: r,
                                        query: n
                                    }),
                                    skipInterpolation: !0,
                                    asPath: g ? "/404" : o,
                                    locale: u
                                }),
                                hasMiddleware: !0,
                                isServerRender: this.isSsr,
                                parseJSON: !0,
                                inflightCache: d ? this.sbc : this.sdc,
                                persistCache: !f,
                                isPrefetch: !1,
                                unstable_skipClientCache: p,
                                isBackground: d
                            },
                            R = d && !m ? null : await k({
                                fetchData: () => V(S),
                                asPath: g ? "/404" : o,
                                locale: u,
                                router: this
                            }).catch(e => {
                                if (d) return null;
                                throw e
                            });
                        if (R && ("/_error" === r || "/404" === r) && (R.effect = void 0), d && (R ? R.json = self.__NEXT_DATA__.props : R = {
                                json: self.__NEXT_DATA__.props
                            }), e(), (null == R ? void 0 : null == (y = R.effect) ? void 0 : y.type) === "redirect-internal" || (null == R ? void 0 : null == (_ = R.effect) ? void 0 : _.type) === "redirect-external") return R.effect;
                        if ((null == R ? void 0 : null == (b = R.effect) ? void 0 : b.type) === "rewrite") {
                            let e = (0, a.removeTrailingSlash)(R.effect.resolvedHref),
                                i = await this.pageLoader.getPageList();
                            if ((!d || i.includes(e)) && (v = e, r = R.effect.resolvedHref, n = { ...n,
                                    ...R.effect.parsedAs.query
                                }, o = (0, P.removeBasePath)((0, h.normalizeLocalePath)(R.effect.parsedAs.pathname, this.locales).pathname), t = this.components[v], s.shallow && t && this.route === v && !c)) return { ...t,
                                route: v
                            }
                        }
                        if ((0, A.isAPIRoute)(v)) return X({
                            url: i,
                            router: this
                        }), new Promise(() => {});
                        let w = l || await this.fetchComponent(v).then(e => ({
                                Component: e.page,
                                styleSheets: e.styleSheets,
                                __N_SSG: e.mod.__N_SSG,
                                __N_SSP: e.mod.__N_SSP
                            })),
                            I = null == R ? void 0 : null == (T = R.response) ? void 0 : T.headers.get("x-middleware-skip"),
                            N = w.__N_SSG || w.__N_SSP;
                        I && (null == R ? void 0 : R.dataHref) && delete this.sdc[R.dataHref];
                        let {
                            props: L,
                            cacheKey: H
                        } = await this._getData(async () => {
                            if (N) {
                                if ((null == R ? void 0 : R.json) && !I) return {
                                    cacheKey: R.cacheKey,
                                    props: R.json
                                };
                                let e = (null == R ? void 0 : R.dataHref) ? R.dataHref : this.pageLoader.getDataHref({
                                        href: (0, E.formatWithValidation)({
                                            pathname: r,
                                            query: n
                                        }),
                                        asPath: o,
                                        locale: u
                                    }),
                                    t = await V({
                                        dataHref: e,
                                        isServerRender: this.isSsr,
                                        parseJSON: !0,
                                        inflightCache: I ? {} : this.sdc,
                                        persistCache: !f,
                                        isPrefetch: !1,
                                        unstable_skipClientCache: p
                                    });
                                return {
                                    cacheKey: t.cacheKey,
                                    props: t.json || {}
                                }
                            }
                            return {
                                headers: {},
                                props: await this.getInitialProps(w.Component, {
                                    pathname: r,
                                    query: n,
                                    asPath: i,
                                    locale: u,
                                    locales: this.locales,
                                    defaultLocale: this.defaultLocale
                                })
                            }
                        });
                        return w.__N_SSP && S.dataHref && H && delete this.sdc[H], this.isPreview || !w.__N_SSG || d || V(Object.assign({}, S, {
                            isBackground: !0,
                            persistCache: !1,
                            inflightCache: this.sbc
                        })).catch(() => {}), L.pageProps = Object.assign({}, L.pageProps), w.props = L, w.route = v, w.query = n, w.resolvedAs = o, this.components[v] = w, w
                    } catch (e) {
                        return this.handleRouteInfoError((0, l.getProperError)(e), r, n, i, s)
                    }
                }
                set(e, t, r) {
                    return this.state = e, this.sub(t, this.components["/_app"].Component, r)
                }
                beforePopState(e) {
                    this._bps = e
                }
                onlyAHashChange(e) {
                    if (!this.asPath) return !1;
                    let [t, r] = this.asPath.split("#"), [n, i] = e.split("#");
                    return !!i && t === n && r === i || t === n && r !== i
                }
                scrollToHash(e) {
                    let [, t = ""] = e.split("#");
                    (0, C.handleSmoothScroll)(() => {
                        if ("" === t || "top" === t) {
                            window.scrollTo(0, 0);
                            return
                        }
                        let e = decodeURIComponent(t),
                            r = document.getElementById(e);
                        if (r) {
                            r.scrollIntoView();
                            return
                        }
                        let n = document.getElementsByName(e)[0];
                        n && n.scrollIntoView()
                    }, {
                        onlyHashChange: this.onlyAHashChange(e)
                    })
                }
                urlIsNew(e) {
                    return this.asPath !== e
                }
                async prefetch(e, t, r) {
                    if (void 0 === t && (t = e), void 0 === r && (r = {}), (0, L.isBot)(window.navigator.userAgent)) return;
                    let n = (0, d.parseRelativeUrl)(e),
                        i = n.pathname,
                        {
                            pathname: s,
                            query: l
                        } = n,
                        u = s,
                        h = await this.pageLoader.getPageList(),
                        c = t,
                        f = void 0 !== r.locale ? r.locale || void 0 : this.locale,
                        S = await x({
                            asPath: t,
                            locale: f,
                            router: this
                        });
                    if (t.startsWith("/")) {
                        let r;
                        ({
                            __rewrites: r
                        } = await (0, o.getClientBuildManifest)());
                        let i = (0, m.default)((0, T.addBasePath)((0, _.addLocale)(t, this.locale), !0), h, r, n.query, e => j(e, h), this.locales);
                        if (i.externalDest) return;
                        S || (c = (0, b.removeLocale)((0, P.removeBasePath)(i.asPath), this.locale)), i.matchedPage && i.resolvedHref && (s = i.resolvedHref, n.pathname = s, S || (e = (0, E.formatWithValidation)(n)))
                    }
                    n.pathname = j(n.pathname, h), (0, p.isDynamicRoute)(n.pathname) && (s = n.pathname, n.pathname = s, Object.assign(l, (0, g.getRouteMatcher)((0, v.getRouteRegex)(n.pathname))((0, y.parsePath)(t).pathname) || {}), S || (e = (0, E.formatWithValidation)(n)));
                    let A = await k({
                        fetchData: () => V({
                            dataHref: this.pageLoader.getDataHref({
                                href: (0, E.formatWithValidation)({
                                    pathname: u,
                                    query: l
                                }),
                                skipInterpolation: !0,
                                asPath: c,
                                locale: f
                            }),
                            hasMiddleware: !0,
                            isServerRender: this.isSsr,
                            parseJSON: !0,
                            inflightCache: this.sdc,
                            persistCache: !this.isPreview,
                            isPrefetch: !0
                        }),
                        asPath: t,
                        locale: f,
                        router: this
                    });
                    if ((null == A ? void 0 : A.effect.type) === "rewrite" && (n.pathname = A.effect.resolvedHref, s = A.effect.resolvedHref, l = { ...l,
                            ...A.effect.parsedAs.query
                        }, c = A.effect.parsedAs.pathname, e = (0, E.formatWithValidation)(n)), (null == A ? void 0 : A.effect.type) === "redirect-external") return;
                    let R = (0, a.removeTrailingSlash)(s);
                    await this._bfl(t, c, r.locale, !0) && (this.components[i] = {
                        __appRouter: !0
                    }), await Promise.all([this.pageLoader._isSsg(R).then(t => !!t && V({
                        dataHref: (null == A ? void 0 : A.json) ? null == A ? void 0 : A.dataHref : this.pageLoader.getDataHref({
                            href: e,
                            asPath: c,
                            locale: f
                        }),
                        isServerRender: !1,
                        parseJSON: !0,
                        inflightCache: this.sdc,
                        persistCache: !this.isPreview,
                        isPrefetch: !0,
                        unstable_skipClientCache: r.unstable_skipClientCache || r.priority && !0
                    }).then(() => !1).catch(() => !1)), this.pageLoader[r.priority ? "loadPage" : "prefetch"](R)])
                }
                async fetchComponent(e) {
                    let t = K({
                        route: e,
                        router: this
                    });
                    try {
                        let r = await this.pageLoader.loadPage(e);
                        return t(), r
                    } catch (e) {
                        throw t(), e
                    }
                }
                _getData(e) {
                    let t = !1,
                        r = () => {
                            t = !0
                        };
                    return this.clc = r, e().then(e => {
                        if (r === this.clc && (this.clc = null), t) {
                            let e = Error("Loading initial props cancelled");
                            throw e.cancelled = !0, e
                        }
                        return e
                    })
                }
                _getFlightData(e) {
                    return V({
                        dataHref: e,
                        isServerRender: !0,
                        parseJSON: !1,
                        inflightCache: this.sdc,
                        persistCache: !1,
                        isPrefetch: !1
                    }).then(e => {
                        let {
                            text: t
                        } = e;
                        return {
                            data: t
                        }
                    })
                }
                getInitialProps(e, t) {
                    let {
                        Component: r
                    } = this.components["/_app"], n = this._wrapApp(r);
                    return t.AppTree = n, (0, f.loadGetInitialProps)(r, {
                        AppTree: n,
                        Component: e,
                        router: this,
                        ctx: t
                    })
                }
                get route() {
                    return this.state.route
                }
                get pathname() {
                    return this.state.pathname
                }
                get query() {
                    return this.state.query
                }
                get asPath() {
                    return this.state.asPath
                }
                get locale() {
                    return this.state.locale
                }
                get isFallback() {
                    return this.state.isFallback
                }
                get isPreview() {
                    return this.state.isPreview
                }
                constructor(e, t, n, {
                    initialProps: i,
                    pageLoader: o,
                    App: s,
                    wrapApp: l,
                    Component: u,
                    err: h,
                    subscription: c,
                    isFallback: m,
                    locale: g,
                    locales: v,
                    defaultLocale: y,
                    domainLocales: _,
                    isPreview: b
                }) {
                    this.sdc = {}, this.sbc = {}, this.isFirstPopStateEvent = !0, this._key = W(), this.onPopState = e => {
                        let t;
                        let {
                            isFirstPopStateEvent: r
                        } = this;
                        this.isFirstPopStateEvent = !1;
                        let n = e.state;
                        if (!n) {
                            let {
                                pathname: e,
                                query: t
                            } = this;
                            this.changeState("replaceState", (0, E.formatWithValidation)({
                                pathname: (0, T.addBasePath)(e),
                                query: t
                            }), (0, f.getURL)());
                            return
                        }
                        if (n.__NA) {
                            window.location.reload();
                            return
                        }
                        if (!n.__N || r && this.locale === n.options.locale && n.as === this.asPath) return;
                        let {
                            url: i,
                            as: a,
                            options: o,
                            key: s
                        } = n;
                        this._key = s;
                        let {
                            pathname: l
                        } = (0, d.parseRelativeUrl)(i);
                        (!this.isSsr || a !== (0, T.addBasePath)(this.asPath) || l !== (0, T.addBasePath)(this.pathname)) && (!this._bps || this._bps(n)) && this.change("replaceState", i, a, Object.assign({}, o, {
                            shallow: o.shallow && this._shallow,
                            locale: o.locale || this.defaultLocale,
                            _h: 0
                        }), t)
                    };
                    let P = (0, a.removeTrailingSlash)(e);
                    this.components = {}, "/_error" !== e && (this.components[P] = {
                        Component: u,
                        initial: !0,
                        props: i,
                        err: h,
                        __N_SSG: i && i.__N_SSG,
                        __N_SSP: i && i.__N_SSP
                    }), this.components["/_app"] = {
                        Component: s,
                        styleSheets: []
                    }; {
                        let {
                            BloomFilter: e
                        } = r(22886), t = {
                            numItems: 9,
                            errorRate: .01,
                            numBits: 87,
                            numHashes: 7,
                            bitArray: [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
                        }, n = {
                            numItems: 2,
                            errorRate: .01,
                            numBits: 20,
                            numHashes: 7,
                            bitArray: [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0]
                        };
                        (null == t ? void 0 : t.numHashes) && (this._bfl_s = new e(t.numItems, t.errorRate), this._bfl_s.import(t)), (null == n ? void 0 : n.numHashes) && (this._bfl_d = new e(n.numItems, n.errorRate), this._bfl_d.import(n))
                    }
                    this.events = q.events, this.pageLoader = o;
                    let S = (0, p.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
                    if (this.basePath = "", this.sub = c, this.clc = null, this._wrapApp = l, this.isSsr = !0, this.isLocaleDomain = !1, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || (S || self.location.search, 0)), this.state = {
                            route: P,
                            pathname: e,
                            query: t,
                            asPath: S ? e : n,
                            isPreview: !!b,
                            locale: void 0,
                            isFallback: m
                        }, this._initialMatchesMiddlewarePromise = Promise.resolve(!1), !n.startsWith("//")) {
                        let r = {
                                locale: g
                            },
                            i = (0, f.getURL)();
                        this._initialMatchesMiddlewarePromise = x({
                            router: this,
                            locale: g,
                            asPath: i
                        }).then(a => (r._shouldResolveHref = n !== e, this.changeState("replaceState", a ? i : (0, E.formatWithValidation)({
                            pathname: (0, T.addBasePath)(e),
                            query: t
                        }), i, r), a))
                    }
                    window.addEventListener("popstate", this.onPopState)
                }
            }
            q.events = (0, c.default)()
        },
        17426: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(87253),
                i = r(6892);

            function a(e, t, r, a) {
                if (!t || t === r) return e;
                let o = e.toLowerCase();
                return !a && ((0, i.pathHasPrefix)(o, "/api") || (0, i.pathHasPrefix)(o, "/" + t.toLowerCase())) ? e : (0, n.addPathPrefix)(e, "/" + t)
            }
        },
        89414: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addPathSuffix", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(52590);

            function i(e, t) {
                if (!e.startsWith("/") || !t) return e;
                let {
                    pathname: r,
                    query: i,
                    hash: a
                } = (0, n.parsePath)(e);
                return "" + r + t + i + a
            }
        },
        92345: function(e, t) {
            "use strict";

            function r(e, t) {
                let r = Object.keys(e);
                if (r.length !== Object.keys(t).length) return !1;
                for (let n = r.length; n--;) {
                    let i = r[n];
                    if ("query" === i) {
                        let r = Object.keys(e.query);
                        if (r.length !== Object.keys(t.query).length) return !1;
                        for (let n = r.length; n--;) {
                            let i = r[n];
                            if (!t.query.hasOwnProperty(i) || e.query[i] !== t.query[i]) return !1
                        }
                    } else if (!t.hasOwnProperty(i) || e[i] !== t[i]) return !1
                }
                return !0
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "compareRouterStates", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        408: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "formatNextPathnameInfo", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(37369),
                i = r(87253),
                a = r(89414),
                o = r(17426);

            function s(e) {
                let t = (0, o.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
                return (e.buildId || !e.trailingSlash) && (t = (0, n.removeTrailingSlash)(t)), e.buildId && (t = (0, a.addPathSuffix)((0, i.addPathPrefix)(t, "/_next/data/" + e.buildId), "/" === e.pathname ? "index.json" : ".json")), t = (0, i.addPathPrefix)(t, e.basePath), !e.buildId && e.trailingSlash ? t.endsWith("/") ? t : (0, a.addPathSuffix)(t, "/") : (0, n.removeTrailingSlash)(t)
            }
        },
        12660: function(e, t) {
            "use strict";

            function r(e, t) {
                void 0 === t && (t = "");
                let r = "/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index" + e : "" + e;
                return r + t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        35224: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getNextPathnameInfo", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(36322),
                i = r(56711),
                a = r(6892);

            function o(e, t) {
                var r, o, s;
                let {
                    basePath: l,
                    i18n: u,
                    trailingSlash: h
                } = null != (r = t.nextConfig) ? r : {}, c = {
                    pathname: e,
                    trailingSlash: "/" !== e ? e.endsWith("/") : h
                };
                if (l && (0, a.pathHasPrefix)(c.pathname, l) && (c.pathname = (0, i.removePathPrefix)(c.pathname, l), c.basePath = l), !0 === t.parseData && c.pathname.startsWith("/_next/data/") && c.pathname.endsWith(".json")) {
                    let e = c.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"),
                        t = e[0];
                    c.pathname = "index" !== e[1] ? "/" + e.slice(1).join("/") : "/", c.buildId = t
                }
                if (t.i18nProvider) {
                    let e = t.i18nProvider.analyze(c.pathname);
                    c.locale = e.detectedLocale, c.pathname = null != (o = e.pathname) ? o : c.pathname
                } else if (u) {
                    let e = (0, n.normalizeLocalePath)(c.pathname, u.locales);
                    c.locale = e.detectedLocale, c.pathname = null != (s = e.pathname) ? s : c.pathname
                }
                return c
            }
        },
        79899: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return i.isDynamicRoute
                    }
                });
            let n = r(17593),
                i = r(28354)
        },
        21564: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "parseRelativeUrl", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(95090),
                i = r(55769);

            function a(e, t) {
                let r = new URL((0, n.getLocationOrigin)()),
                    a = t ? new URL(t, r) : e.startsWith(".") ? new URL(window.location.href) : r,
                    {
                        pathname: o,
                        searchParams: s,
                        search: l,
                        hash: u,
                        href: h,
                        origin: c
                    } = new URL(e, a);
                if (c !== r.origin) throw Error("invariant: invalid relative URL, router received " + e);
                return {
                    pathname: o,
                    query: (0, i.searchParamsToUrlQuery)(s),
                    search: l,
                    hash: u,
                    href: h.slice(r.origin.length)
                }
            }
        },
        25485: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "parseUrl", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(55769),
                i = r(21564);

            function a(e) {
                if (e.startsWith("/")) return (0, i.parseRelativeUrl)(e);
                let t = new URL(e);
                return {
                    hash: t.hash,
                    hostname: t.hostname,
                    href: t.href,
                    pathname: t.pathname,
                    port: t.port,
                    protocol: t.protocol,
                    query: (0, n.searchParamsToUrlQuery)(t.searchParams),
                    search: t.search
                }
            }
        },
        70594: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getPathMatch", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(23977);

            function i(e, t) {
                let r = [],
                    i = (0, n.pathToRegexp)(e, r, {
                        delimiter: "/",
                        sensitive: "boolean" == typeof(null == t ? void 0 : t.sensitive) && t.sensitive,
                        strict: null == t ? void 0 : t.strict
                    }),
                    a = (0, n.regexpToFunction)((null == t ? void 0 : t.regexModifier) ? new RegExp(t.regexModifier(i.source), i.flags) : i, r);
                return (e, n) => {
                    let i = null != e && a(e);
                    if (!i) return !1;
                    if (null == t ? void 0 : t.removeUnnamedParams)
                        for (let e of r) "number" == typeof e.name && delete i.params[e.name];
                    return { ...n,
                        ...i.params
                    }
                }
            }
        },
        66261: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    matchHas: function() {
                        return u
                    },
                    compileNonPath: function() {
                        return h
                    },
                    prepareDestination: function() {
                        return c
                    }
                });
            let n = r(23977),
                i = r(63805),
                a = r(25485),
                o = r(84507),
                s = r(64509);

            function l(e) {
                return e.replace(/__ESC_COLON_/gi, ":")
            }

            function u(e, t, r, n) {
                void 0 === r && (r = []), void 0 === n && (n = []);
                let i = {},
                    a = r => {
                        let n;
                        let a = r.key;
                        switch (r.type) {
                            case "header":
                                a = a.toLowerCase(), n = e.headers[a];
                                break;
                            case "cookie":
                                n = e.cookies[r.key];
                                break;
                            case "query":
                                n = t[a];
                                break;
                            case "host":
                                {
                                    let {
                                        host: t
                                    } = (null == e ? void 0 : e.headers) || {},
                                    r = null == t ? void 0 : t.split(":")[0].toLowerCase();n = r
                                }
                        }
                        if (!r.value && n) return i[function(e) {
                            let t = "";
                            for (let r = 0; r < e.length; r++) {
                                let n = e.charCodeAt(r);
                                (n > 64 && n < 91 || n > 96 && n < 123) && (t += e[r])
                            }
                            return t
                        }(a)] = n, !0;
                        if (n) {
                            let e = RegExp("^" + r.value + "$"),
                                t = Array.isArray(n) ? n.slice(-1)[0].match(e) : n.match(e);
                            if (t) return Array.isArray(t) && (t.groups ? Object.keys(t.groups).forEach(e => {
                                i[e] = t.groups[e]
                            }) : "host" === r.type && t[0] && (i.host = t[0])), !0
                        }
                        return !1
                    },
                    o = r.every(e => a(e)) && !n.some(e => a(e));
                return !!o && i
            }

            function h(e, t) {
                if (!e.includes(":")) return e;
                for (let r of Object.keys(t)) e.includes(":" + r) && (e = e.replace(RegExp(":" + r + "\\*", "g"), ":" + r + "--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":" + r + "\\?", "g"), ":" + r + "--ESCAPED_PARAM_QUESTION").replace(RegExp(":" + r + "\\+", "g"), ":" + r + "--ESCAPED_PARAM_PLUS").replace(RegExp(":" + r + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + r));
                return e = e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), (0, n.compile)("/" + e, {
                    validate: !1
                })(t).slice(1)
            }

            function c(e) {
                let t;
                let r = Object.assign({}, e.query);
                delete r.__nextLocale, delete r.__nextDefaultLocale, delete r.__nextDataReq, delete r.__nextInferredLocaleFromDefault, delete r[s.NEXT_RSC_UNION_QUERY];
                let u = e.destination;
                for (let t of Object.keys({ ...e.params,
                        ...r
                    })) u = u.replace(RegExp(":" + (0, i.escapeStringRegexp)(t), "g"), "__ESC_COLON_" + t);
                let c = (0, a.parseUrl)(u),
                    f = c.query,
                    p = l("" + c.pathname + (c.hash || "")),
                    d = l(c.hostname || ""),
                    m = [],
                    g = [];
                (0, n.pathToRegexp)(p, m), (0, n.pathToRegexp)(d, g);
                let v = [];
                m.forEach(e => v.push(e.name)), g.forEach(e => v.push(e.name));
                let E = (0, n.compile)(p, {
                        validate: !1
                    }),
                    y = (0, n.compile)(d, {
                        validate: !1
                    });
                for (let [t, r] of Object.entries(f)) Array.isArray(r) ? f[t] = r.map(t => h(l(t), e.params)) : "string" == typeof r && (f[t] = h(l(r), e.params));
                let _ = Object.keys(e.params).filter(e => "nextInternalLocale" !== e);
                if (e.appendParamsToQuery && !_.some(e => v.includes(e)))
                    for (let t of _) t in f || (f[t] = e.params[t]);
                if ((0, o.isInterceptionRouteAppPath)(p))
                    for (let t of p.split("/")) {
                        let r = o.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e));
                        if (r) {
                            e.params["0"] = r;
                            break
                        }
                    }
                try {
                    t = E(e.params);
                    let [r, n] = t.split("#");
                    c.hostname = y(e.params), c.pathname = r, c.hash = (n ? "#" : "") + (n || ""), delete c.search
                } catch (e) {
                    if (e.message.match(/Expected .*? to not repeat, but got an array/)) throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
                    throw e
                }
                return c.query = { ...r,
                    ...c.query
                }, {
                    newUrl: t,
                    destQuery: f,
                    parsedDestination: c
                }
            }
        },
        56711: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "removePathPrefix", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(6892);

            function i(e, t) {
                if (!(0, n.pathHasPrefix)(e, t)) return e;
                let r = e.slice(t.length);
                return r.startsWith("/") ? r : "/" + r
            }
        },
        49021: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = r(70594),
                i = r(66261),
                a = r(37369),
                o = r(36322),
                s = r(23570),
                l = r(21564);

            function u(e, t, r, u, h, c) {
                let f, p = !1,
                    d = !1,
                    m = (0, l.parseRelativeUrl)(e),
                    g = (0, a.removeTrailingSlash)((0, o.normalizeLocalePath)((0, s.removeBasePath)(m.pathname), c).pathname),
                    v = r => {
                        let l = (0, n.getPathMatch)(r.source + "", {
                                removeUnnamedParams: !0,
                                strict: !0
                            }),
                            v = l(m.pathname);
                        if ((r.has || r.missing) && v) {
                            let e = (0, i.matchHas)({
                                headers: {
                                    host: document.location.hostname,
                                    "user-agent": navigator.userAgent
                                },
                                cookies: document.cookie.split("; ").reduce((e, t) => {
                                    let [r, ...n] = t.split("=");
                                    return e[r] = n.join("="), e
                                }, {})
                            }, m.query, r.has, r.missing);
                            e ? Object.assign(v, e) : v = !1
                        }
                        if (v) {
                            if (!r.destination) return d = !0, !0;
                            let n = (0, i.prepareDestination)({
                                appendParamsToQuery: !0,
                                destination: r.destination,
                                params: v,
                                query: u
                            });
                            if (m = n.parsedDestination, e = n.newUrl, Object.assign(u, n.parsedDestination.query), g = (0, a.removeTrailingSlash)((0, o.normalizeLocalePath)((0, s.removeBasePath)(e), c).pathname), t.includes(g)) return p = !0, f = g, !0;
                            if ((f = h(g)) !== e && t.includes(f)) return p = !0, !0
                        }
                    },
                    E = !1;
                for (let e = 0; e < r.beforeFiles.length; e++) v(r.beforeFiles[e]);
                if (!(p = t.includes(g))) {
                    if (!E) {
                        for (let e = 0; e < r.afterFiles.length; e++)
                            if (v(r.afterFiles[e])) {
                                E = !0;
                                break
                            }
                    }
                    if (E || (f = h(g), E = p = t.includes(f)), !E) {
                        for (let e = 0; e < r.fallback.length; e++)
                            if (v(r.fallback[e])) {
                                E = !0;
                                break
                            }
                    }
                }
                return {
                    asPath: e,
                    parsedAs: m,
                    matchedPage: p,
                    resolvedHref: f,
                    externalDest: d
                }
            }
        },
        17593: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class r {
                insert(e) {
                    this._insert(e.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(e) {
                    void 0 === e && (e = "/");
                    let t = [...this.children.keys()].sort();
                    null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
                    let r = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
                    if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")), !this.placeholder) {
                        let t = "/" === e ? "/" : e.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
                        r.unshift(t)
                    }
                    return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")), r
                }
                _insert(e, t, n) {
                    if (0 === e.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let i = e[0];
                    if (i.startsWith("[") && i.endsWith("]")) {
                        let r = i.slice(1, -1),
                            o = !1;
                        if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1), o = !0), r.startsWith("...") && (r = r.substring(3), n = !0), r.startsWith("[") || r.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                        if (r.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + r + "').");

                        function a(e, r) {
                            if (null !== e && e !== r) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + r + "').");
                            t.forEach(e => {
                                if (e === r) throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                                if (e.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                            }), t.push(r)
                        }
                        if (n) {
                            if (o) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                                a(this.optionalRestSlugName, r), this.optionalRestSlugName = r, i = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                                a(this.restSlugName, r), this.restSlugName = r, i = "[...]"
                            }
                        } else {
                            if (o) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                            a(this.slugName, r), this.slugName = r, i = "[]"
                        }
                    }
                    this.children.has(i) || this.children.set(i, new r), this.children.get(i)._insert(e.slice(1), t, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(e) {
                let t = new r;
                return e.forEach(e => t.insert(e)), t.smoosh()
            }
        },
        23977: function(e, t) {
            "use strict";

            function r(e, t) {
                void 0 === t && (t = {});
                for (var r = function(e) {
                        for (var t = [], r = 0; r < e.length;) {
                            var n = e[r];
                            if ("*" === n || "+" === n || "?" === n) {
                                t.push({
                                    type: "MODIFIER",
                                    index: r,
                                    value: e[r++]
                                });
                                continue
                            }
                            if ("\\" === n) {
                                t.push({
                                    type: "ESCAPED_CHAR",
                                    index: r++,
                                    value: e[r++]
                                });
                                continue
                            }
                            if ("{" === n) {
                                t.push({
                                    type: "OPEN",
                                    index: r,
                                    value: e[r++]
                                });
                                continue
                            }
                            if ("}" === n) {
                                t.push({
                                    type: "CLOSE",
                                    index: r,
                                    value: e[r++]
                                });
                                continue
                            }
                            if (":" === n) {
                                for (var i = "", a = r + 1; a < e.length;) {
                                    var o = e.charCodeAt(a);
                                    if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || 95 === o) {
                                        i += e[a++];
                                        continue
                                    }
                                    break
                                }
                                if (!i) throw TypeError("Missing parameter name at " + r);
                                t.push({
                                    type: "NAME",
                                    index: r,
                                    value: i
                                }), r = a;
                                continue
                            }
                            if ("(" === n) {
                                var s = 1,
                                    l = "",
                                    a = r + 1;
                                if ("?" === e[a]) throw TypeError('Pattern cannot start with "?" at ' + a);
                                for (; a < e.length;) {
                                    if ("\\" === e[a]) {
                                        l += e[a++] + e[a++];
                                        continue
                                    }
                                    if (")" === e[a]) {
                                        if (0 == --s) {
                                            a++;
                                            break
                                        }
                                    } else if ("(" === e[a] && (s++, "?" !== e[a + 1])) throw TypeError("Capturing groups are not allowed at " + a);
                                    l += e[a++]
                                }
                                if (s) throw TypeError("Unbalanced pattern at " + r);
                                if (!l) throw TypeError("Missing pattern at " + r);
                                t.push({
                                    type: "PATTERN",
                                    index: r,
                                    value: l
                                }), r = a;
                                continue
                            }
                            t.push({
                                type: "CHAR",
                                index: r,
                                value: e[r++]
                            })
                        }
                        return t.push({
                            type: "END",
                            index: r,
                            value: ""
                        }), t
                    }(e), n = t.prefixes, i = void 0 === n ? "./" : n, o = "[^" + a(t.delimiter || "/#?") + "]+?", s = [], l = 0, u = 0, h = "", c = function(e) {
                        if (u < r.length && r[u].type === e) return r[u++].value
                    }, f = function(e) {
                        var t = c(e);
                        if (void 0 !== t) return t;
                        var n = r[u];
                        throw TypeError("Unexpected " + n.type + " at " + n.index + ", expected " + e)
                    }, p = function() {
                        for (var e, t = ""; e = c("CHAR") || c("ESCAPED_CHAR");) t += e;
                        return t
                    }; u < r.length;) {
                    var d = c("CHAR"),
                        m = c("NAME"),
                        g = c("PATTERN");
                    if (m || g) {
                        var v = d || ""; - 1 === i.indexOf(v) && (h += v, v = ""), h && (s.push(h), h = ""), s.push({
                            name: m || l++,
                            prefix: v,
                            suffix: "",
                            pattern: g || o,
                            modifier: c("MODIFIER") || ""
                        });
                        continue
                    }
                    var E = d || c("ESCAPED_CHAR");
                    if (E) {
                        h += E;
                        continue
                    }
                    if (h && (s.push(h), h = ""), c("OPEN")) {
                        var v = p(),
                            y = c("NAME") || "",
                            _ = c("PATTERN") || "",
                            b = p();
                        f("CLOSE"), s.push({
                            name: y || (_ ? l++ : ""),
                            pattern: y && !_ ? o : _,
                            prefix: v,
                            suffix: b,
                            modifier: c("MODIFIER") || ""
                        });
                        continue
                    }
                    f("END")
                }
                return s
            }

            function n(e, t) {
                void 0 === t && (t = {});
                var r = o(t),
                    n = t.encode,
                    i = void 0 === n ? function(e) {
                        return e
                    } : n,
                    a = t.validate,
                    s = void 0 === a || a,
                    l = e.map(function(e) {
                        if ("object" == typeof e) return RegExp("^(?:" + e.pattern + ")$", r)
                    });
                return function(t) {
                    for (var r = "", n = 0; n < e.length; n++) {
                        var a = e[n];
                        if ("string" == typeof a) {
                            r += a;
                            continue
                        }
                        var o = t ? t[a.name] : void 0,
                            u = "?" === a.modifier || "*" === a.modifier,
                            h = "*" === a.modifier || "+" === a.modifier;
                        if (Array.isArray(o)) {
                            if (!h) throw TypeError('Expected "' + a.name + '" to not repeat, but got an array');
                            if (0 === o.length) {
                                if (u) continue;
                                throw TypeError('Expected "' + a.name + '" to not be empty')
                            }
                            for (var c = 0; c < o.length; c++) {
                                var f = i(o[c], a);
                                if (s && !l[n].test(f)) throw TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '", but got "' + f + '"');
                                r += a.prefix + f + a.suffix
                            }
                            continue
                        }
                        if ("string" == typeof o || "number" == typeof o) {
                            var f = i(String(o), a);
                            if (s && !l[n].test(f)) throw TypeError('Expected "' + a.name + '" to match "' + a.pattern + '", but got "' + f + '"');
                            r += a.prefix + f + a.suffix;
                            continue
                        }
                        if (!u) {
                            var p = h ? "an array" : "a string";
                            throw TypeError('Expected "' + a.name + '" to be ' + p)
                        }
                    }
                    return r
                }
            }

            function i(e, t, r) {
                void 0 === r && (r = {});
                var n = r.decode,
                    i = void 0 === n ? function(e) {
                        return e
                    } : n;
                return function(r) {
                    var n = e.exec(r);
                    if (!n) return !1;
                    for (var a = n[0], o = n.index, s = Object.create(null), l = 1; l < n.length; l++) ! function(e) {
                        if (void 0 !== n[e]) {
                            var r = t[e - 1];
                            "*" === r.modifier || "+" === r.modifier ? s[r.name] = n[e].split(r.prefix + r.suffix).map(function(e) {
                                return i(e, r)
                            }) : s[r.name] = i(n[e], r)
                        }
                    }(l);
                    return {
                        path: a,
                        index: o,
                        params: s
                    }
                }
            }

            function a(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function o(e) {
                return e && e.sensitive ? "" : "i"
            }

            function s(e, t, r) {
                void 0 === r && (r = {});
                for (var n = r.strict, i = void 0 !== n && n, s = r.start, l = r.end, u = r.encode, h = void 0 === u ? function(e) {
                        return e
                    } : u, c = "[" + a(r.endsWith || "") + "]|$", f = "[" + a(r.delimiter || "/#?") + "]", p = void 0 === s || s ? "^" : "", d = 0; d < e.length; d++) {
                    var m = e[d];
                    if ("string" == typeof m) p += a(h(m));
                    else {
                        var g = a(h(m.prefix)),
                            v = a(h(m.suffix));
                        if (m.pattern) {
                            if (t && t.push(m), g || v) {
                                if ("+" === m.modifier || "*" === m.modifier) {
                                    var E = "*" === m.modifier ? "?" : "";
                                    p += "(?:" + g + "((?:" + m.pattern + ")(?:" + v + g + "(?:" + m.pattern + "))*)" + v + ")" + E
                                } else p += "(?:" + g + "(" + m.pattern + ")" + v + ")" + m.modifier
                            } else p += "(" + m.pattern + ")" + m.modifier
                        } else p += "(?:" + g + v + ")" + m.modifier
                    }
                }
                if (void 0 === l || l) i || (p += f + "?"), p += r.endsWith ? "(?=" + c + ")" : "$";
                else {
                    var y = e[e.length - 1],
                        _ = "string" == typeof y ? f.indexOf(y[y.length - 1]) > -1 : void 0 === y;
                    i || (p += "(?:" + f + "(?=" + c + "))?"), _ || (p += "(?=" + f + "|" + c + ")")
                }
                return new RegExp(p, o(r))
            }

            function l(e, t, n) {
                return e instanceof RegExp ? function(e, t) {
                    if (!t) return e;
                    var r = e.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) t.push({
                            name: n,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? RegExp("(?:" + e.map(function(e) {
                    return l(e, t, n).source
                }).join("|") + ")", o(n)) : s(r(e, n), t, n)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parse = r, t.compile = function(e, t) {
                return n(r(e, t), t)
            }, t.tokensToFunction = n, t.match = function(e, t) {
                var r = [];
                return i(l(e, r, t), r, t)
            }, t.regexpToFunction = i, t.tokensToRegexp = s, t.pathToRegexp = l
        },
        42477: function(e, t) {
            "use strict";

            function r(e) {
                return "/api" === e || !!(null == e ? void 0 : e.startsWith("/api/"))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isAPIRoute", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        28810: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return i
                    },
                    getProperError: function() {
                        return a
                    }
                });
            let n = r(43584);

            function i(e) {
                return "object" == typeof e && null !== e && "name" in e && "message" in e
            }

            function a(e) {
                return i(e) ? e : Error((0, n.isPlainObject)(e) ? JSON.stringify(e) : e + "")
            }
        },
        6543: function(e, t, r) {
            e.exports = r(13808)
        },
        23720: function(e, t, r) {
            "use strict";
            e.exports = r(69440)
        },
        3098: function(e, t, r) {
            "use strict";
            var n = r(2265).createContext(void 0);
            t.IntlContext = n
        },
        40923: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2265),
                i = r(14616),
                a = r(3098),
                o = n && n.__esModule ? n : {
                    default: n
                };
            t.IntlProvider = function(e) {
                let {
                    children: t,
                    defaultTranslationValues: r,
                    formats: s,
                    getMessageFallback: l,
                    locale: u,
                    messages: h,
                    now: c,
                    onError: f,
                    timeZone: p
                } = e, [d] = n.useState(() => new Map), m = n.useMemo(() => ({ ...i.initializeConfig({
                        locale: u,
                        defaultTranslationValues: r,
                        formats: s,
                        getMessageFallback: l,
                        messages: h,
                        now: c,
                        onError: f,
                        timeZone: p
                    }),
                    messageFormatCache: d
                }), [r, s, l, u, d, h, c, f, p]);
                return o.default.createElement(a.IntlContext.Provider, {
                    value: m
                }, t)
            }
        },
        11987: function(e, t, r) {
            "use strict";
            var n = r(2265),
                i = r(3098);

            function a() {
                let e = n.useContext(i.IntlContext);
                if (!e) throw Error(void 0);
                return e
            }
            t.useIntlContext = a, t.useLocale = function() {
                return a().locale
            }
        },
        91266: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(18484),
                i = r(14616);
            r(43312), r(2265), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t.initializeConfig = i.initializeConfig, t.createTranslator = function(e) {
                let {
                    getMessageFallback: t = i.defaultGetMessageFallback,
                    messages: r,
                    namespace: a,
                    onError: o = i.defaultOnError,
                    ...s
                } = e;
                return function(e, t) {
                    let {
                        getMessageFallback: r,
                        messages: i,
                        namespace: a,
                        onError: o,
                        ...s
                    } = e;
                    return i = i[t], a = n.resolveNamespace(a, t), n.createBaseTranslator({ ...s,
                        onError: o,
                        getMessageFallback: r,
                        messages: i,
                        namespace: a
                    })
                }({ ...s,
                    onError: o,
                    getMessageFallback: t,
                    messages: {
                        "!": r
                    },
                    namespace: a ? "!.".concat(a) : "!"
                }, "!")
            }
        },
        18484: function(e, t, r) {
            "use strict";
            var n, i = r(43312),
                a = r(2265),
                o = r(14616),
                s = i && i.__esModule ? i : {
                    default: i
                };

            function l(e, t, r) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            let u = ((n = {}).MISSING_MESSAGE = "MISSING_MESSAGE", n.MISSING_FORMAT = "MISSING_FORMAT", n.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", n.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", n.INVALID_MESSAGE = "INVALID_MESSAGE", n.INVALID_KEY = "INVALID_KEY", n.FORMATTING_ERROR = "FORMATTING_ERROR", n);
            class h extends Error {
                constructor(e, t) {
                    let r = e;
                    t && (r += ": " + t), super(r), l(this, "code", void 0), l(this, "originalMessage", void 0), this.code = e, t && (this.originalMessage = t)
                }
            }

            function c(e, t) {
                return e ? Object.keys(e).reduce((r, n) => (r[n] = {
                    timeZone: t,
                    ...e[n]
                }, r), {}) : e
            }

            function f(e, t, r) {
                if (!e) throw Error(void 0);
                let n = e;
                return t.split(".").forEach(e => {
                    let t = n[e];
                    if (null == e || null == t) throw Error(void 0);
                    n = t
                }), n
            }
            let p = 604800,
                d = 86400 * (365 / 12),
                m = 3 * d,
                g = 31536e3,
                v = {
                    second: 1,
                    seconds: 1,
                    minute: 60,
                    minutes: 60,
                    hour: 3600,
                    hours: 3600,
                    day: 86400,
                    days: 86400,
                    week: p,
                    weeks: p,
                    month: d,
                    months: d,
                    quarter: m,
                    quarters: m,
                    year: g,
                    years: g
                };
            t.IntlError = h, t.IntlErrorCode = u, t.createBaseTranslator = function(e) {
                let t = function(e) {
                    let {
                        messages: t,
                        namespace: r,
                        onError: n = o.defaultOnError
                    } = e;
                    try {
                        if (!t) throw Error(void 0);
                        let e = r ? f(t, r) : t;
                        if (!e) throw Error(void 0);
                        return e
                    } catch (t) {
                        let e = new h(u.MISSING_MESSAGE, t.message);
                        return n(e), e
                    }
                }({
                    messages: e.messages,
                    namespace: e.namespace,
                    onError: e.onError
                });
                return function(e) {
                    let {
                        defaultTranslationValues: t,
                        formats: r,
                        getMessageFallback: n = o.defaultGetMessageFallback,
                        locale: i,
                        messageFormatCache: l,
                        messagesOrError: p,
                        namespace: d,
                        onError: m,
                        timeZone: g
                    } = e;

                    function v(e, t, r) {
                        let i = new h(t, r);
                        return m(i), n({
                            error: i,
                            key: e,
                            namespace: d
                        })
                    }

                    function E(e, o, m) {
                        let E, y;
                        if (p instanceof h) return n({
                            error: p,
                            key: e,
                            namespace: d
                        });
                        try {
                            E = f(p, e)
                        } catch (t) {
                            return v(e, u.MISSING_MESSAGE, t.message)
                        }
                        let _ = [i, d, e, String(E)].filter(e => null != e).join(".");
                        if (null != l && l.has(_)) y = l.get(_);
                        else {
                            if ("object" == typeof E) {
                                let t, r;
                                return t = Array.isArray(E) ? u.INVALID_MESSAGE : u.INSUFFICIENT_PATH, v(e, t, r)
                            }
                            let t = function(e, t) {
                                if (t) return;
                                let r = e.replace(/'([{}])/gi, "$1");
                                return /<|{/.test(r) ? void 0 : r
                            }(E, o);
                            if (t) return t;
                            try {
                                y = new s.default(E, i, function(e, t) {
                                    let r = t ? { ...e,
                                            dateTime: c(e.dateTime, t)
                                        } : e,
                                        n = s.default.formats.date,
                                        i = t ? c(n, t) : n,
                                        a = s.default.formats.time,
                                        o = t ? c(a, t) : a;
                                    return { ...r,
                                        date: { ...i,
                                            ...null == r ? void 0 : r.dateTime
                                        },
                                        time: { ...o,
                                            ...null == r ? void 0 : r.dateTime
                                        }
                                    }
                                }({ ...r,
                                    ...m
                                }, g))
                            } catch (t) {
                                return v(e, u.INVALID_MESSAGE, t.message)
                            }
                            null == l || l.set(_, y)
                        }
                        try {
                            let e = y.format(function(e) {
                                if (0 === Object.keys(e).length) return;
                                let t = {};
                                return Object.keys(e).forEach(r => {
                                    let n, i = 0,
                                        o = e[r];
                                    n = "function" == typeof o ? e => {
                                        let t = o(e);
                                        return a.isValidElement(t) ? a.cloneElement(t, {
                                            key: r + i++
                                        }) : t
                                    } : o, t[r] = n
                                }), t
                            }({ ...t,
                                ...o
                            }));
                            if (null == e) throw Error(void 0);
                            return a.isValidElement(e) || Array.isArray(e) || "string" == typeof e ? e : String(e)
                        } catch (t) {
                            return v(e, u.FORMATTING_ERROR, t.message)
                        }
                    }

                    function y(e, t, r) {
                        let n = E(e, t, r);
                        return "string" != typeof n ? v(e, u.INVALID_MESSAGE, void 0) : n
                    }
                    return y.rich = E, y.markup = (e, t, r) => {
                        let i = E(e, t, r);
                        if ("string" != typeof i) {
                            let t = new h(u.FORMATTING_ERROR, void 0);
                            return m(t), n({
                                error: t,
                                key: e,
                                namespace: d
                            })
                        }
                        return i
                    }, y.raw = e => {
                        if (p instanceof h) return n({
                            error: p,
                            key: e,
                            namespace: d
                        });
                        try {
                            return f(p, e)
                        } catch (t) {
                            return v(e, u.MISSING_MESSAGE, t.message)
                        }
                    }, y
                }({ ...e,
                    messagesOrError: t
                })
            }, t.createFormatter = function(e) {
                let {
                    formats: t,
                    locale: r,
                    now: n,
                    onError: i = o.defaultOnError,
                    timeZone: a
                } = e;

                function s(e, t, r, n) {
                    let a;
                    try {
                        a = function(e, t) {
                            let r;
                            if ("string" == typeof t) {
                                if (!(r = null == e ? void 0 : e[t])) {
                                    let e = new h(u.MISSING_FORMAT, void 0);
                                    throw i(e), e
                                }
                            } else r = t;
                            return r
                        }(r, t)
                    } catch (t) {
                        return String(e)
                    }
                    try {
                        return n(a)
                    } catch (t) {
                        return i(new h(u.FORMATTING_ERROR, t.message)), String(e)
                    }
                }
                return {
                    dateTime: function(e, n) {
                        return s(e, n, null == t ? void 0 : t.dateTime, t => {
                            var n;
                            return null !== (n = t) && void 0 !== n && n.timeZone || (a ? t = { ...t,
                                timeZone: a
                            } : i(new h(u.ENVIRONMENT_FALLBACK, void 0))), new Intl.DateTimeFormat(r, t).format(e)
                        })
                    },
                    number: function(e, n) {
                        return s(e, n, null == t ? void 0 : t.number, t => new Intl.NumberFormat(r, t).format(e))
                    },
                    relativeTime: function(e, t) {
                        try {
                            let a = new Date(e),
                                o = t instanceof Date || "number" == typeof t ? new Date(t) : void 0 !== (null == t ? void 0 : t.now) ? new Date(t.now) : n || (i(new h(u.ENVIRONMENT_FALLBACK, void 0)), new Date),
                                s = (a.getTime() - o.getTime()) / 1e3,
                                l = "number" == typeof t || t instanceof Date || void 0 === (null == t ? void 0 : t.unit) ? function(e) {
                                    let t = Math.abs(e);
                                    return t < 60 ? "second" : t < 3600 ? "minute" : t < 86400 ? "hour" : t < p ? "day" : t < d ? "week" : t < g ? "month" : "year"
                                }(s) : t.unit,
                                c = Math.round(s / v[l]);
                            return new Intl.RelativeTimeFormat(r, {
                                numeric: "auto"
                            }).format(c, l)
                        } catch (t) {
                            return i(new h(u.FORMATTING_ERROR, t.message)), String(e)
                        }
                    },
                    list: function(e, n) {
                        return s(e, n, null == t ? void 0 : t.list, t => new Intl.ListFormat(r, t).format(e))
                    }
                }
            }, t.resolveNamespace = function(e, t) {
                return e === t ? void 0 : e.slice((t + ".").length)
            }
        },
        69440: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(18484),
                i = r(91266),
                a = r(14616),
                o = r(40923),
                s = r(78107),
                l = r(11987);
            r(43312), r(2265), r(3098), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t.createTranslator = i.createTranslator, t.initializeConfig = a.initializeConfig, t.IntlProvider = o.IntlProvider, t.useFormatter = s.useFormatter, t.useMessages = s.useMessages, t.useNow = s.useNow, t.useTimeZone = s.useTimeZone, t.useTranslations = s.useTranslations, t.useLocale = l.useLocale
        },
        14616: function(e, t) {
            "use strict";

            function r(e) {
                return [e.namespace, e.key].filter(e => null != e).join(".")
            }

            function n(e) {
                console.error(e)
            }
            t.defaultGetMessageFallback = r, t.defaultOnError = n, t.initializeConfig = function(e) {
                let {
                    getMessageFallback: t,
                    messages: i,
                    onError: a,
                    ...o
                } = e;
                return { ...o,
                    messages: i,
                    onError: a || n,
                    getMessageFallback: t || r
                }
            }
        },
        78107: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(40923),
                i = r(11987),
                a = r(2265),
                o = r(18484);
            r(14616), r(3098), r(43312);
            let s = !1,
                l = "undefined" == typeof window;
            t.IntlProvider = n.IntlProvider, t.useLocale = i.useLocale, t.useFormatter = function() {
                let {
                    formats: e,
                    locale: t,
                    now: r,
                    onError: n,
                    timeZone: s
                } = i.useIntlContext();
                return a.useMemo(() => o.createFormatter({
                    formats: e,
                    locale: t,
                    now: r,
                    onError: n,
                    timeZone: s
                }), [e, r, t, n, s])
            }, t.useMessages = function() {
                let e = i.useIntlContext();
                if (!e.messages) throw Error(void 0);
                return e.messages
            }, t.useNow = function(e) {
                let t = null == e ? void 0 : e.updateInterval,
                    {
                        now: r
                    } = i.useIntlContext(),
                    [n, o] = a.useState(r || new Date);
                return a.useEffect(() => {
                    if (!t) return;
                    let e = setInterval(() => {
                        o(new Date)
                    }, t);
                    return () => {
                        clearInterval(e)
                    }
                }, [r, t]), n
            }, t.useTimeZone = function() {
                return i.useIntlContext().timeZone
            }, t.useTranslations = function(e) {
                return function(e, t, r) {
                    let {
                        defaultTranslationValues: n,
                        formats: u,
                        getMessageFallback: h,
                        locale: c,
                        messageFormatCache: f,
                        onError: p,
                        timeZone: d
                    } = i.useIntlContext();
                    return e = e[r], t = o.resolveNamespace(t, r), d || s || !l || (s = !0, p(new o.IntlError(o.IntlErrorCode.ENVIRONMENT_FALLBACK, void 0))), a.useMemo(() => o.createBaseTranslator({
                        messageFormatCache: f,
                        getMessageFallback: h,
                        messages: e,
                        defaultTranslationValues: n,
                        namespace: t,
                        onError: p,
                        formats: u,
                        locale: c,
                        timeZone: d
                    }), [f, h, e, t, p, n, u, c, d])
                }({
                    "!": i.useIntlContext().messages
                }, e ? "!.".concat(e) : "!", "!")
            }
        }
    }
]);