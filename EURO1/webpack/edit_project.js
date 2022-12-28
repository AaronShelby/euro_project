(() => {
  var e = {
      206: function (e) {
        e.exports = (function (e) {
          var t = {};
          function i(r) {
            if (t[r]) return t[r].exports;
            var n = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
          }
          return (
            (i.m = e),
            (i.c = t),
            (i.d = function (e, t, r) {
              i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (i.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (e, t) {
              if ((1 & t && (e = i(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (i.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var n in e)
                  i.d(
                    r,
                    n,
                    function (t) {
                      return e[t];
                    }.bind(null, n)
                  );
              return r;
            }),
            (i.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            i((i.s = 90))
          );
        })({
          17: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = i(18),
              n = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var i = t.match(e);
                    return (i && i.length > 0 && i[1]) || "";
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var i = t.match(e);
                    return (i && i.length > 1 && i[2]) || "";
                  }),
                  (e.matchAndReturnConst = function (e, t, i) {
                    if (e.test(t)) return i;
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case "NT":
                        return "NT";
                      case "XP":
                      case "NT 5.1":
                        return "XP";
                      case "NT 5.0":
                        return "2000";
                      case "NT 5.2":
                        return "2003";
                      case "NT 6.0":
                        return "Vista";
                      case "NT 6.1":
                        return "7";
                      case "NT 6.2":
                        return "8";
                      case "NT 6.3":
                        return "8.1";
                      case "NT 10.0":
                        return "10";
                      default:
                        return;
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return "Leopard";
                        case 6:
                          return "Snow Leopard";
                        case 7:
                          return "Lion";
                        case 8:
                          return "Mountain Lion";
                        case 9:
                          return "Mavericks";
                        case 10:
                          return "Yosemite";
                        case 11:
                          return "El Capitan";
                        case 12:
                          return "Sierra";
                        case 13:
                          return "High Sierra";
                        case 14:
                          return "Mojave";
                        case 15:
                          return "Catalina";
                        default:
                          return;
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? "Cupcake"
                        : 1 === t[0] && t[1] >= 6
                        ? "Donut"
                        : 2 === t[0] && t[1] < 2
                        ? "Eclair"
                        : 2 === t[0] && 2 === t[1]
                        ? "Froyo"
                        : 2 === t[0] && t[1] > 2
                        ? "Gingerbread"
                        : 3 === t[0]
                        ? "Honeycomb"
                        : 4 === t[0] && t[1] < 1
                        ? "Ice Cream Sandwich"
                        : 4 === t[0] && t[1] < 4
                        ? "Jelly Bean"
                        : 4 === t[0] && t[1] >= 4
                        ? "KitKat"
                        : 5 === t[0]
                        ? "Lollipop"
                        : 6 === t[0]
                        ? "Marshmallow"
                        : 7 === t[0]
                        ? "Nougat"
                        : 8 === t[0]
                        ? "Oreo"
                        : 9 === t[0]
                        ? "Pie"
                        : void 0;
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split(".").length;
                  }),
                  (e.compareVersions = function (t, i, r) {
                    void 0 === r && (r = !1);
                    var n = e.getVersionPrecision(t),
                      s = e.getVersionPrecision(i),
                      o = Math.max(n, s),
                      a = 0,
                      c = e.map([t, i], function (t) {
                        var i = o - e.getVersionPrecision(t),
                          r = t + new Array(i + 1).join(".0");
                        return e
                          .map(r.split("."), function (e) {
                            return new Array(20 - e.length).join("0") + e;
                          })
                          .reverse();
                      });
                    for (r && (a = o - Math.min(n, s)), o -= 1; o >= a; ) {
                      if (c[0][o] > c[1][o]) return 1;
                      if (c[0][o] === c[1][o]) {
                        if (o === a) return 0;
                        o -= 1;
                      } else if (c[0][o] < c[1][o]) return -1;
                    }
                  }),
                  (e.map = function (e, t) {
                    var i,
                      r = [];
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t);
                    for (i = 0; i < e.length; i += 1) r.push(t(e[i]));
                    return r;
                  }),
                  (e.find = function (e, t) {
                    var i, r;
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t);
                    for (i = 0, r = e.length; i < r; i += 1) {
                      var n = e[i];
                      if (t(n, i)) return n;
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        i,
                        r = e,
                        n = arguments.length,
                        s = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      s[o - 1] = arguments[o];
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(s));
                    var a = function () {
                      var e = s[t];
                      "object" == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          r[t] = e[t];
                        });
                    };
                    for (t = 0, i = s.length; t < i; t += 1) a();
                    return e;
                  }),
                  (e.getBrowserAlias = function (e) {
                    return r.BROWSER_ALIASES_MAP[e];
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return r.BROWSER_MAP[e] || "";
                  }),
                  e
                );
              })();
            (t.default = n), (e.exports = t.default);
          },
          18: function (e, t, i) {
            "use strict";
            (t.__esModule = !0),
              (t.ENGINE_MAP =
                t.OS_MAP =
                t.PLATFORMS_MAP =
                t.BROWSER_MAP =
                t.BROWSER_ALIASES_MAP =
                  void 0),
              (t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku",
              }),
              (t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser",
              }),
              (t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv",
              }),
              (t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku",
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit",
              });
          },
          90: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              n = (r = i(91)) && r.__esModule ? r : { default: r },
              s = i(18);
            function o(e, t) {
              for (var i = 0; i < t.length; i++) {
                var r = t[i];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            var a = (function () {
              function e() {}
              var t, i;
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), "string" != typeof e))
                    throw new Error("UserAgent should be a string");
                  return new n.default(e, t);
                }),
                (e.parse = function (e) {
                  return new n.default(e).getResult();
                }),
                (t = e),
                (i = [
                  {
                    key: "BROWSER_MAP",
                    get: function () {
                      return s.BROWSER_MAP;
                    },
                  },
                  {
                    key: "ENGINE_MAP",
                    get: function () {
                      return s.ENGINE_MAP;
                    },
                  },
                  {
                    key: "OS_MAP",
                    get: function () {
                      return s.OS_MAP;
                    },
                  },
                  {
                    key: "PLATFORMS_MAP",
                    get: function () {
                      return s.PLATFORMS_MAP;
                    },
                  },
                ]),
                null && o(t.prototype, null),
                i && o(t, i),
                e
              );
            })();
            (t.default = a), (e.exports = t.default);
          },
          91: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = c(i(92)),
              n = c(i(93)),
              s = c(i(94)),
              o = c(i(95)),
              a = c(i(17));
            function c(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var u = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || "" === e))
                  throw new Error("UserAgent parameter can't be empty");
                (this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse();
              }
              var t = e.prototype;
              return (
                (t.getUA = function () {
                  return this._ua;
                }),
                (t.test = function (e) {
                  return e.test(this._ua);
                }),
                (t.parseBrowser = function () {
                  var e = this;
                  this.parsedResult.browser = {};
                  var t = a.default.find(r.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  );
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser();
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ""
                    : this.getBrowser().name || "";
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version;
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS();
                }),
                (t.parseOS = function () {
                  var e = this;
                  this.parsedResult.os = {};
                  var t = a.default.find(n.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  );
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version;
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform();
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1);
                  var t = this.getPlatform().type;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.parsePlatform = function () {
                  var e = this;
                  this.parsedResult.platform = {};
                  var t = a.default.find(s.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  );
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine();
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ""
                    : this.getEngine().name || "";
                }),
                (t.parseEngine = function () {
                  var e = this;
                  this.parsedResult.engine = {};
                  var t = a.default.find(o.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  );
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  );
                }),
                (t.getResult = function () {
                  return a.default.assign({}, this.parsedResult);
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    i = {},
                    r = 0,
                    n = {},
                    s = 0;
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var o = e[t];
                      "string" == typeof o
                        ? ((n[t] = o), (s += 1))
                        : "object" == typeof o && ((i[t] = o), (r += 1));
                    }),
                    r > 0)
                  ) {
                    var o = Object.keys(i),
                      c = a.default.find(o, function (e) {
                        return t.isOS(e);
                      });
                    if (c) {
                      var u = this.satisfies(i[c]);
                      if (void 0 !== u) return u;
                    }
                    var d = a.default.find(o, function (e) {
                      return t.isPlatform(e);
                    });
                    if (d) {
                      var l = this.satisfies(i[d]);
                      if (void 0 !== l) return l;
                    }
                  }
                  if (s > 0) {
                    var f = Object.keys(n),
                      h = a.default.find(f, function (e) {
                        return t.isBrowser(e, !0);
                      });
                    if (void 0 !== h) return this.compareVersion(n[h]);
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1);
                  var i = this.getBrowserName().toLowerCase(),
                    r = e.toLowerCase(),
                    n = a.default.getBrowserTypeByAlias(r);
                  return t && n && (r = n.toLowerCase()), r === i;
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    i = e,
                    r = !1,
                    n = this.getBrowserVersion();
                  if ("string" == typeof n)
                    return (
                      ">" === e[0] || "<" === e[0]
                        ? ((i = e.substr(1)),
                          "=" === e[1]
                            ? ((r = !0), (i = e.substr(2)))
                            : (t = []),
                          ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (i = e.substr(1))
                        : "~" === e[0] && ((r = !0), (i = e.substr(1))),
                      t.indexOf(a.default.compareVersions(n, i, r)) > -1
                    );
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase();
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase();
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase();
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  );
                }),
                (t.some = function (e) {
                  var t = this;
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e);
                    })
                  );
                }),
                e
              );
            })();
            (t.default = u), (e.exports = t.default);
          },
          92: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              n = (r = i(17)) && r.__esModule ? r : { default: r },
              s = /version\/(\d+(\.?_?\d+)+)/i,
              o = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: "Googlebot" },
                      i =
                        n.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      i =
                        n.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: "Samsung Internet for Android" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: "NAVER Whale Browser" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: "MZ Browser" },
                      i =
                        n.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: "Focus" },
                      i =
                        n.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: "Swing" },
                      i =
                        n.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: "Opera Coast" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: "Opera Touch" },
                      i =
                        n.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: "Yandex Browser" },
                      i =
                        n.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: "UC Browser" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: "Maxthon" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: "Epiphany" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: "Puffin" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: "Sleipnir" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: "K-Meleon" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: "WeChat" },
                      i =
                        n.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? "QQ Browser Lite"
                          : "QQ Browser",
                      },
                      i =
                        n.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: "Internet Explorer" },
                      i = n.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      i = n.default.getFirstMatch(
                        /\sedg\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      i = n.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: "Vivaldi" },
                      i = n.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: "SeaMonkey" },
                      i = n.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: "Sailfish" },
                      i = n.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: "Amazon Silk" },
                      i = n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: "PhantomJS" },
                      i = n.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: "SlimerJS" },
                      i = n.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: "BlackBerry" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: "WebOS Browser" },
                      i =
                        n.default.getFirstMatch(s, e) ||
                        n.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: "Bada" },
                      i = n.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: "Tizen" },
                      i =
                        n.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: "QupZilla" },
                      i =
                        n.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: "Firefox" },
                      i = n.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: "Electron" },
                      i = n.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: "Miui" },
                      i = n.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: "Chromium" },
                      i =
                        n.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: "Chrome" },
                      i = n.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: "Google Search" },
                      i = n.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      i = e.test(/android/i);
                    return t && i;
                  },
                  describe: function (e) {
                    var t = { name: "Android Browser" },
                      i = n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: "PlayStation 4" },
                      i = n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: "Safari" },
                      i = n.default.getFirstMatch(s, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search("\\(")
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /;
                    return {
                      name: n.default.getFirstMatch(t, e),
                      version: n.default.getSecondMatch(t, e),
                    };
                  },
                },
              ];
            (t.default = o), (e.exports = t.default);
          },
          93: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              n = (r = i(17)) && r.__esModule ? r : { default: r },
              s = i(18),
              o = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: s.OS_MAP.Roku, version: t };
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: s.OS_MAP.WindowsPhone, version: t };
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e
                      ),
                      i = n.default.getWindowsVersionName(t);
                    return {
                      name: s.OS_MAP.Windows,
                      version: t,
                      versionName: i,
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: s.OS_MAP.iOS },
                      i = n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = n.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, "."),
                      i = n.default.getMacOSVersionName(t),
                      r = { name: s.OS_MAP.MacOS, version: t };
                    return i && (r.versionName = i), r;
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = n.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, ".");
                    return { name: s.OS_MAP.iOS, version: t };
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      i = e.test(/android/i);
                    return t && i;
                  },
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e
                      ),
                      i = n.default.getAndroidVersionName(t),
                      r = { name: s.OS_MAP.Android, version: t };
                    return i && (r.versionName = i), r;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e
                      ),
                      i = { name: s.OS_MAP.WebOS };
                    return t && t.length && (i.version = t), i;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      n.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e
                      ) ||
                      n.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e
                      ) ||
                      n.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: s.OS_MAP.BlackBerry, version: t };
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: s.OS_MAP.Bada, version: t };
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: s.OS_MAP.Tizen, version: t };
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: s.OS_MAP.Linux };
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: s.OS_MAP.ChromeOS };
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: s.OS_MAP.PlayStation4, version: t };
                  },
                },
              ];
            (t.default = o), (e.exports = t.default);
          },
          94: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              n = (r = i(17)) && r.__esModule ? r : { default: r },
              s = i(18),
              o = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: "bot", vendor: "Google" };
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = n.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      i = { type: s.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                    return t && (i.model = t), i;
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: s.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: s.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: s.PLATFORMS_MAP.tablet,
                      vendor: "Amazon",
                      model: "Kindle Fire HD 7",
                    };
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      i = e.test(/like (ipod|iphone)/i);
                    return t && !i;
                  },
                  describe: function (e) {
                    var t = n.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                      type: s.PLATFORMS_MAP.mobile,
                      vendor: "Apple",
                      model: t,
                    };
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "blackberry" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return {
                      type: s.PLATFORMS_MAP.mobile,
                      vendor: "BlackBerry",
                    };
                  },
                },
                {
                  test: function (e) {
                    return "bada" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "windows phone" === e.getBrowserName();
                  },
                  describe: function () {
                    return {
                      type: s.PLATFORMS_MAP.mobile,
                      vendor: "Microsoft",
                    };
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    return "android" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "macos" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.desktop, vendor: "Apple" };
                  },
                },
                {
                  test: function (e) {
                    return "windows" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "linux" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "playstation 4" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tv };
                  },
                },
                {
                  test: function (e) {
                    return "roku" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: s.PLATFORMS_MAP.tv };
                  },
                },
              ];
            (t.default = o), (e.exports = t.default);
          },
          95: function (e, t, i) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              n = (r = i(17)) && r.__esModule ? r : { default: r },
              s = i(18),
              o = [
                {
                  test: function (e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: s.ENGINE_MAP.Blink };
                    var t = n.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                    return { name: s.ENGINE_MAP.EdgeHTML, version: t };
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: s.ENGINE_MAP.Trident },
                      i = n.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i);
                  },
                  describe: function (e) {
                    var t = { name: s.ENGINE_MAP.Presto },
                      i = n.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      i = e.test(/like gecko/i);
                    return t && !i;
                  },
                  describe: function (e) {
                    var t = { name: s.ENGINE_MAP.Gecko },
                      i = n.default.getFirstMatch(
                        /gecko\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: s.ENGINE_MAP.Blink };
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: s.ENGINE_MAP.WebKit },
                      i = n.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return i && (t.version = i), t;
                  },
                },
              ];
            (t.default = o), (e.exports = t.default);
          },
        });
      },
      401: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BufferPresentation = void 0);
        const r = i(440),
          n = i(646);
        class s extends r.Presentation {
          constructor(e, t, i, r) {
            super(e, t),
              (this.past_sections_to_buffer = i),
              (this.future_sections_to_buffer = r);
          }
          update_source() {
            for (
              let e = this.current_section + 1,
                t = Math.min(
                  this.current_section + this.future_sections_to_buffer + 1,
                  this.sections.length
                );
              e < t;
              ++e
            )
              this.sections[e].load();
            for (
              let e = 0,
                t = this.current_section - this.past_sections_to_buffer;
              e < t;
              ++e
            )
              this.sections[e].unload();
          }
          create_section(e, t) {
            return new n.BufferSection(e, t);
          }
        }
        t.BufferPresentation = s;
      },
      646: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BufferSection = void 0);
        const r = i(83),
          n = i(141);
        class s extends r.Section {
          constructor(e, t) {
            super(e, t),
              (this.media_source = new MediaSource()),
              (this.media_buffer = null),
              (this.media_source.onsourceopen = (e) => {
                let t = 'video/mp4; codecs="avc1.64001e"';
                if (
                  !("MediaSource" in window) ||
                  !MediaSource.isTypeSupported(t)
                )
                  return (
                    console.error(
                      `The MediaSource Extension is not supported by this browser(mime codec '${t}'). Try using a different browser.`
                    ),
                    (0, n.flash)(
                      "This browser doesn't support the MediaSource Extension, which is needed for the video player.",
                      "danger"
                    ),
                    void this.media_source.endOfStream()
                  );
                let i = this.media_source.addSourceBuffer(t);
                (i.onupdateend = (e) => {
                  this.media_source.endOfStream();
                }),
                  (i.onerror = (e) => {
                    (0, n.flash)(
                      "There has been a problem with the MediaSource Extension. Try using the fallback loader from the settings or use a different browser.",
                      "danger"
                    ),
                      console.error(
                        "Failed to append source buffer to source buffer:"
                      );
                  }),
                  (i.onabort = (e) => {
                    (0, n.flash)(
                      "There has been a problem with the MediaSource Extension. Try using the fallback loader from the settings or use a different browser.",
                      "danger"
                    ),
                      console.error("Aborted source buffer");
                  }),
                  this.load(
                    () => {
                      null != this.media_buffer
                        ? i.appendBuffer(this.media_buffer)
                        : i.abort();
                    },
                    () => {
                      i.abort();
                    }
                  );
              });
          }
          load(e = null, t = null) {
            if (null !== this.media_buffer) return void (null !== e && e());
            let i = new XMLHttpRequest();
            (i.responseType = "arraybuffer"),
              (i.onload = () => {
                (this.media_buffer = i.response),
                  console.log(`Section '${this.name}' successfully loaded`),
                  null !== e && e();
              }),
              (i.onerror = () => {
                console.error(`Section '${this.name}' failed to load`),
                  null !== t && t();
              }),
              i.open("GET", this.video, !0),
              i.send();
          }
          unload() {
            this.media_buffer = null;
          }
          get_src_url() {
            return URL.createObjectURL(this.media_source);
          }
        }
        t.BufferSection = s;
      },
      317: function (e, t, i) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, i, r) {
                  void 0 === r && (r = i),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[i];
                      },
                    });
                }
              : function (e, t, i, r) {
                  void 0 === r && (r = i), (e[r] = t[i]);
                }),
          n =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var i in e)
                  "default" !== i &&
                    Object.prototype.hasOwnProperty.call(e, i) &&
                    r(t, e, i);
              return n(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = i(141),
          a = i(401),
          c = i(962),
          u = i(141),
          d = s(i(206));
        let l = 1e3,
          f = 3,
          h = 10,
          _ = 20,
          p = !1,
          m = new URLSearchParams(location.search);
        function g() {
          window.history.replaceState({}, "", `${location.pathname}`),
            location.reload();
        }
        document.body.onload = () => {
          m.has("go_back_time") && (l = Number(m.get("go_back_time"))),
            m.has("cache_batch_size") &&
              (f = Number(m.get("cache_batch_size"))),
            m.has("past_sections_to_buffer") &&
              (h = Number(m.get("past_sections_to_buffer"))),
            m.has("future_sections_to_buffer") &&
              (_ = Number(m.get("future_sections_to_buffer"))),
            m.has("use_fallback_loader") &&
              (p = "true" === m.get("use_fallback_loader"));
          let e = p
            ? (console.log(
                `Using FallbackPresentation with a cache batch size of ${f}.`
              ),
              new c.FallbackPresentation(l, f))
            : (console.log(
                `Using BufferPresentation with ${_} sections to auto load, ${h} sections to keep and a cache batch size of ${f}.`
              ),
              new a.BufferPresentation(l, f, _, h));
          (function () {
            let e = document.getElementById("go-back-time"),
              t = document.getElementById("cache-batch-size"),
              i = document.getElementById("past-sections-to-buffer"),
              r = document.getElementById("future-sections-to-buffer"),
              n = document.getElementById("fallback-loader-selected"),
              s = document.getElementById("reset-settings"),
              o = document.getElementById("update-settings");
            (e.value = Math.round(l / 1e3).toString()),
              (t.value = f.toString()),
              (i.value = h.toString()),
              (r.value = _.toString()),
              (n.checked = p),
              s.addEventListener("click", g),
              o.addEventListener("click", () => {
                isNaN(parseInt(e.value)) || (l = 1e3 * parseInt(e.value)),
                  parseInt(t.value) > 0 && (f = parseInt(t.value)),
                  parseInt(i.value) > 0 && (h = parseInt(i.value)),
                  parseInt(r.value) > 0 && (_ = parseInt(r.value)),
                  (p = n.checked),
                  m.set("go_back_time", l.toString()),
                  m.set("cache_batch_size", f.toString()),
                  m.set("past_sections_to_buffer", _.toString()),
                  m.set("future_sections_to_buffer", h.toString()),
                  m.set("use_fallback_loader", p.toString()),
                  window.history.replaceState(
                    {},
                    "",
                    `${location.pathname}?${m.toString()}`
                  ),
                  location.reload();
              });
          })(),
            (function () {
              let e = document.getElementById("export-presentation");
              if (null !== e) {
                let t = e.dataset.target,
                  i = e.dataset.name;
                e.addEventListener("click", () => {
                  (0, o.spin_button)(e),
                    (0, u.send_json)(t, { name: i }, (t) => {
                      t.success
                        ? (null == e || e.remove(),
                          (0, u.flash)(
                            "The project has been exported, copy the project directory into a web server to serve it. More information can be found in the documentation.",
                            "success"
                          ))
                        : (0, u.flash)(
                            `The editor unexpectedly failed to export the project '${i}' as a presentation. For more information see the console log. Please consider opening an Issue on GitHub if this problem persists.`,
                            "danger"
                          );
                    });
                });
              }
            })(),
            (function (e) {
              const t = ["ArrowLeft", "ArrowDown", "PageDown", "Backspace"],
                i = ["ArrowRight", "ArrowUp", "PageUp", "Enter"],
                r = ["Space"],
                n = ["KeyF"],
                s = t.concat(i, r, n);
              document.addEventListener("keydown", (o) => {
                s.includes(o.code) && o.preventDefault(),
                  o.repeat ||
                    (t.includes(o.code) && (o.ctrlKey || o.metaKey)
                      ? e.play_previous_section_forced()
                      : t.includes(o.code)
                      ? e.play_previous_section()
                      : i.includes(o.code) && (o.ctrlKey || o.metaKey)
                      ? e.play_next_section_forced()
                      : i.includes(o.code)
                      ? e.play_next_section()
                      : r.includes(o.code)
                      ? e.toggle_pause()
                      : n.includes(o.code) && e.toggle_fullscreen());
              });
            })(e),
            d
              .getParser(window.navigator.userAgent)
              .satisfies({ firefox: ">80", chrome: ">80", edge: ">40" }) ||
              (0, u.flash)(
                "Your browser isn't officially supported. If you encounter any problems use a recent Version of Firefox, Chrome or Edge. Consider opening an Issue on GitHub to remove this warning if your browser works regardless.",
                "warning"
              );
        };
      },
      962: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FallbackPresentation = void 0);
        const r = i(440),
          n = i(527);
        class s extends r.Presentation {
          create_section(e, t) {
            return new n.FallbackSection(e, t);
          }
        }
        t.FallbackPresentation = s;
      },
      527: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FallbackSection = void 0);
        const r = i(83);
        class n extends r.Section {
          get_src_url() {
            return this.video;
          }
        }
        t.FallbackSection = n;
      },
      440: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Presentation = void 0);
        const r = i(141),
          n = i(83);
        t.Presentation = class {
          constructor(e, t) {
            (this.button_should_pause = !0),
              (this.current_video = 1),
              (this.slides = []),
              (this.sections = []),
              (this.current_section = -1),
              (this.previous_section = -1),
              (this.next_section = 0),
              (this.go_back_time = e),
              (this.cache_batch_size = t),
              (this.video0 = document.getElementById("video0")),
              (this.video1 = document.getElementById("video1")),
              (this.videos_div = document.getElementById("videos-div")),
              (this.pause_button = document.getElementById("pause")),
              (this.normal_legend = document.getElementById("normal-legend")),
              (this.skip_legend = document.getElementById("skip-legend")),
              (this.loop_legend = document.getElementById("loop-legend")),
              (this.complete_loop_legend = document.getElementById(
                "complete-loop-legend"
              ));
            let i = this.videos_div.dataset.project_file;
            (0, r.get_json)(i, (e) => {
              for (let t of e) {
                let e = new n.Slide(t, this.create_section.bind(this));
                this.slides.push(e),
                  (this.sections = this.sections.concat(e.get_sections()));
              }
              console.log(
                `All ${this.slides.length} slides and a total of ${this.sections.length} sections have been parsed successfully.`
              ),
                this.attach_timeline(),
                this.attach_buttons(),
                this.play_section(0);
            });
          }
          set_time_stamp() {
            -1 != this.previous_section &&
              this.sections[this.previous_section].stop_timer(),
              this.sections[this.current_section].start_timer();
          }
          update_video() {
            if (
              (this.set_button_pause(),
              this.current_section == this.previous_section)
            )
              return (
                (this.get_current_video().currentTime = 0),
                void this.get_current_video().play()
              );
            let e = this.get_current_video();
            this.current_video = 0 == this.current_video ? 1 : 0;
            let t = this.get_current_video();
            switch (
              ((t.src = this.sections[this.current_section].get_src_url()),
              (t.style.visibility = "visible"),
              this.sections[this.current_section].get_type())
            ) {
              case n.SectionType.SKIP:
                t.onended = (e) => {
                  this.play_section(this.current_section + 1, !0);
                };
                break;
              case n.SectionType.LOOP:
                t.onended = (e) => {
                  this.update_video();
                };
                break;
              case n.SectionType.COMPLETE_LOOP:
                t.onended = (e) => {
                  this.play_section(this.next_section, !0);
                };
                break;
              default:
                t.onended = (e) => {};
            }
            console.log(
              `Playing section '${this.sections[
                this.current_section
              ].get_name()}'`
            ),
              t.play().then(() => {
                e.pause(), (e.style.visibility = "hidden");
              }),
              this.update_timeline(),
              this.update_legend(),
              this.update_source(),
              (this.previous_section = this.current_section);
          }
          play_section(e, t = !1) {
            if (e < 0) e = 0;
            else if (e >= this.sections.length) {
              let e = this.get_current_video();
              return void (e.currentTime = Math.max(0, e.duration - 0.1));
            }
            console.log(
              `Switching to section '${this.sections[e].get_name()}'`
            ),
              -1 == this.current_section ||
              this.sections[this.current_section].get_type() !=
                n.SectionType.COMPLETE_LOOP ||
              t
                ? ((this.next_section = e),
                  (this.current_section = e),
                  this.set_time_stamp(),
                  this.update_video())
                : (this.next_section = e);
          }
          play_next_section() {
            this.play_section(this.current_section + 1, !1);
          }
          play_next_section_forced() {
            this.play_section(this.current_section + 1, !0);
          }
          restart_current_section() {
            this.play_section(this.current_section, !0);
          }
          play_previous_section() {
            this.sections[this.current_section].stop_timer(),
              this.go_back_time < 0 ||
              this.sections[this.current_section].get_duration() <
                this.go_back_time
                ? this.play_previous_section_forced()
                : this.restart_current_section();
          }
          play_previous_section_forced() {
            this.play_section(this.current_section - 1, !0);
          }
          get_current_section() {
            return this.current_section;
          }
          get_current_video() {
            return 0 == this.current_video ? this.video0 : this.video1;
          }
          cache_batch(e, t) {
            let i = e;
            for (
              let r = e,
                n = Math.min(e + this.cache_batch_size, this.sections.length);
              r < n;
              ++r
            )
              this.sections[r].cache(() => {
                ++i,
                  i == this.sections.length
                    ? (console.log(`Batch caching complete with offset ${e}`),
                      console.log("Caching complete"),
                      t())
                    : i == e + this.cache_batch_size &&
                      (console.log(`Batch caching complete with offset ${e}`),
                      this.cache_batch(i, t));
              });
          }
          cache(e) {
            this.cache_batch(0, e);
          }
          enter_fullscreen() {
            console.log("Entering fullscreen."),
              this.videos_div.requestFullscreen
                ? this.videos_div.requestFullscreen()
                : this.videos_div.webkitRequestFullscreen &&
                  this.videos_div.webkitRequestFullscreen();
          }
          exit_fullscreen() {
            console.log("Exiting fullscreen."),
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.webkitExitFullscreen &&
                  document.webkitExitFullscreen();
          }
          fullscreen_status() {
            return (
              null != document.fullscreenElement ||
              null != document.webkitFullscreenElement
            );
          }
          toggle_fullscreen() {
            this.fullscreen_status()
              ? this.exit_fullscreen()
              : this.enter_fullscreen();
          }
          attach_timeline() {
            for (let e of this.slides)
              e.attach_timeline_click(() => {
                this.play_section(e.get_id(), !0);
              });
          }
          update_timeline() {
            let e =
                -1 == this.previous_section
                  ? null
                  : this.sections[this.previous_section].get_parent_slide(),
              t = this.sections[this.current_section].get_parent_slide();
            null == e
              ? t.add_timeline_selection()
              : e != t &&
                (t.add_timeline_selection(), e.remove_timeline_selection());
          }
          update_legend() {
            if (-1 != this.previous_section)
              switch (this.sections[this.previous_section].get_type()) {
                case n.SectionType.NORMAL:
                  this.normal_legend.classList.remove("table-active");
                  break;
                case n.SectionType.SKIP:
                  this.skip_legend.classList.remove("table-active");
                  break;
                case n.SectionType.LOOP:
                  this.loop_legend.classList.remove("table-active");
                  break;
                case n.SectionType.COMPLETE_LOOP:
                  this.complete_loop_legend.classList.remove("table-active");
              }
            switch (this.sections[this.current_section].get_type()) {
              case n.SectionType.NORMAL:
                this.normal_legend.classList.add("table-active");
                break;
              case n.SectionType.SKIP:
                this.skip_legend.classList.add("table-active");
                break;
              case n.SectionType.LOOP:
                this.loop_legend.classList.add("table-active");
                break;
              case n.SectionType.COMPLETE_LOOP:
                this.complete_loop_legend.classList.add("table-active");
            }
          }
          set_button_play() {
            (this.button_should_pause = !1),
              (this.pause_button.innerHTML = '<i class="bi-play"></i>');
          }
          set_button_pause() {
            (this.button_should_pause = !0),
              (this.pause_button.innerHTML = '<i class="bi-pause"></i>');
          }
          pause() {
            console.log("Stopped."),
              this.get_current_video().pause(),
              this.set_button_play();
          }
          play() {
            console.log("Started."),
              this.get_current_video().play(),
              this.set_button_pause();
          }
          toggle_pause() {
            this.button_should_pause ? this.pause() : this.play();
          }
          attach_buttons() {
            let e = document.getElementById("previous-section"),
              t = document.getElementById("restart-section"),
              i = document.getElementById("next-section"),
              n = document.getElementById("pause"),
              s = document.getElementById("fullscreen"),
              o = document.getElementById("cache");
            e.addEventListener("click", this.play_previous_section.bind(this)),
              t.addEventListener(
                "click",
                this.restart_current_section.bind(this)
              ),
              i.addEventListener("click", this.play_next_section.bind(this)),
              n.addEventListener("click", this.toggle_pause.bind(this)),
              s.addEventListener("click", this.enter_fullscreen.bind(this)),
              o.addEventListener("click", () => {
                (0, r.spin_button)(o),
                  this.cache(() => {
                    o.remove();
                  });
              }),
              this.videos_div.addEventListener(
                "touchstart",
                this.play_next_section.bind(this)
              );
          }
          update_source() {}
        };
      },
      83: (e, t) => {
        "use strict";
        var i;
        function r(e) {
          switch (e) {
            case "normal":
              return i.NORMAL;
            case "loop":
              return i.LOOP;
            case "skip":
              return i.SKIP;
            case "complete_loop":
              return i.COMPLETE_LOOP;
            default:
              return console.error(`Unsupported section type '${e}'`), i.NORMAL;
          }
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Section = t.Slide = t.get_section_type = t.SectionType = void 0),
          (function (e) {
            (e[(e.NORMAL = 0)] = "NORMAL"),
              (e[(e.LOOP = 1)] = "LOOP"),
              (e[(e.SKIP = 2)] = "SKIP"),
              (e[(e.COMPLETE_LOOP = 3)] = "COMPLETE_LOOP");
          })((i = t.SectionType || (t.SectionType = {}))),
          (t.get_section_type = r),
          (t.Slide = class {
            constructor(e, t) {
              this.sections = [];
              for (let i of e.sections) this.sections.push(t(i, this));
              (this.id = this.sections[0].get_id()),
                (this.timeline_element = document.getElementById(
                  `timeline-element-${this.id}`
                )),
                (this.timeline_indicator = document.getElementById(
                  `timeline-indicator-${this.id}`
                )),
                (this.timeline_time_stamp = document.getElementById(
                  `timeline-time-stamp-${this.id}`
                )),
                console.log(
                  `Parsed slide #${this.id} with ${this.sections.length} sections.`
                );
            }
            get_sections() {
              return this.sections;
            }
            get_id() {
              return this.id;
            }
            get_duration() {
              let e = 0;
              for (let t of this.sections)
                t.has_stopped() && (e += t.get_duration());
              return e;
            }
            get_sec_duration() {
              return Math.round(this.get_duration() / 1e3);
            }
            attach_timeline_click(e) {
              this.timeline_element.addEventListener("click", e);
            }
            add_timeline_selection() {
              (this.timeline_indicator.innerHTML =
                '<i class="timeline-indicators bi-circle-fill" role="img"></i>'),
                this.timeline_element.classList.add("border-dark"),
                this.timeline_element.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
            }
            remove_timeline_selection() {
              (this.timeline_time_stamp.innerText = `${this.get_sec_duration()} s`),
                (this.timeline_indicator.innerHTML =
                  '<i class="timeline-indicators bi-check-circle" role="img"></i>'),
                this.timeline_element.classList.remove("border-dark");
            }
          }),
          (t.Section = class {
            constructor(e, t) {
              (this.start_time_stamp = -1),
                (this.end_time_stamp = -1),
                (this.type = r(e.type)),
                (this.name = e.name),
                (this.id = e.in_project_id),
                (this.is_sub_section = e.is_sub_section),
                (this.parent_slide = t);
              let i = document.getElementsByClassName("section-urls");
              (this.video = i[this.id].dataset.video),
                console.log(`Parsed section #'${this.id}'`);
            }
            cache(e) {
              let t = new XMLHttpRequest();
              (t.onload = () => {
                200 == t.status || 206 == t.status
                  ? (console.log(`Cached section '${this.name}'`), e())
                  : (console.error(
                      `Section '${this.name}' failed to be cached with status ${t.status}`
                    ),
                    window.setTimeout(() => {
                      this.cache(e);
                    }, 1e4));
              }),
                (t.onerror = () => {
                  console.error(`Section '${this.name}' failed to be cached`),
                    window.setTimeout(() => {
                      this.cache(e);
                    }, 1e4);
                }),
                t.open("GET", this.video, !0),
                t.send();
            }
            has_started() {
              return -1 != this.start_time_stamp;
            }
            has_stopped() {
              return -1 != this.end_time_stamp;
            }
            start_timer() {
              (this.start_time_stamp = performance.now()),
                (this.end_time_stamp = -1);
            }
            stop_timer() {
              !this.has_stopped() &&
                this.has_started() &&
                (this.end_time_stamp = performance.now());
            }
            get_duration() {
              return (
                this.has_stopped() ||
                  console.error(
                    `Trying to get duration of section '${this.name}', which hasn't been stopped yet.`
                  ),
                this.end_time_stamp - this.start_time_stamp
              );
            }
            get_sec_duration() {
              return Math.round(this.get_duration() / 1e3);
            }
            get_is_sub_section() {
              return this.is_sub_section;
            }
            get_type() {
              return this.type;
            }
            get_name() {
              return this.name;
            }
            get_id() {
              return this.id;
            }
            get_parent_slide() {
              return this.parent_slide;
            }
          });
      },
      141: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.spin_button = t.flash = t.get_json = t.send_json = void 0),
          (t.send_json = function (e, t, i, r = () => {}) {
            let n = new XMLHttpRequest();
            (n.onload = () => {
              200 == n.status
                ? i(JSON.parse(n.responseText))
                : (console.error(
                    `Failed POST to '${e}' with status ${n.status}.`
                  ),
                  r());
            }),
              (n.onerror = () => {
                console.error(`Failed to POST to '${e}'.`), r();
              }),
              n.open("POST", e, !0),
              n.setRequestHeader(
                "Content-Type",
                "application/json;charset=UTF-8"
              ),
              n.send(JSON.stringify(t));
          }),
          (t.get_json = function (e, t, i = () => {}) {
            let r = new XMLHttpRequest();
            (r.onload = () => {
              200 == r.status
                ? t(JSON.parse(r.responseText))
                : (console.error(
                    `Failed to load json '${e}' with status ${r.status}`
                  ),
                  i());
            }),
              (r.onerror = () => {
                console.error(`Failed to load json '${e}'`), i();
              }),
              r.open("GET", e, !0),
              r.send();
          }),
          (t.flash = function (e, t) {
            let i = document.getElementById("flashes"),
              r = document.createElement("div");
            i.appendChild(r),
              (r.innerHTML = `<div class="alert alert-${t} alert-dismissible fade show mt-3" role="alert">\n            ${e}\n            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n         </div>`);
          }),
          (t.spin_button = function (e) {
            (e.disabled = !0), (e.innerText = "");
            let t = document.createElement("div");
            e.appendChild(t),
              (t.innerHTML =
                '<div>\n            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n            Loading...\n        </div>');
          });
      },
    },
    t = {};
  !(function i(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, i), s.exports;
  })(317);
})();
