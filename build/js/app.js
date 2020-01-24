(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var polyfill = createCommonjsModule(function (module) {
    (function () {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = "function" == typeof commonjsRequire && commonjsRequire;
              if (!f && c) return c(i, !0);
              if (u) return u(i, !0);
              var a = new Error("Cannot find module '" + i + "'");
              throw a.code = "MODULE_NOT_FOUND", a;
            }

            var p = n[i] = {
              exports: {}
            };
            e[i][0].call(p.exports, function (r) {
              var n = e[i][1][r];
              return o(n || r);
            }, p, p.exports, r, e, n, t);
          }

          return n[i].exports;
        }

        for (var u = "function" == typeof commonjsRequire && commonjsRequire, i = 0; i < t.length; i++) {
          o(t[i]);
        }

        return o;
      }

      return r;
    })()({
      1: [function (_dereq_, module, exports) {

        _dereq_(2);

        var _global = _interopRequireDefault(_dereq_(15));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
          console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
        }

        _global["default"]._babelPolyfill = true;
      }, {
        "15": 15,
        "2": 2
      }],
      2: [function (_dereq_, module, exports) {

        _dereq_(3);

        _dereq_(5);

        _dereq_(4);

        _dereq_(11);

        _dereq_(10);

        _dereq_(13);

        _dereq_(12);

        _dereq_(14);

        _dereq_(7);

        _dereq_(8);

        _dereq_(6);

        _dereq_(9);

        _dereq_(306);

        _dereq_(307);
      }, {
        "10": 10,
        "11": 11,
        "12": 12,
        "13": 13,
        "14": 14,
        "3": 3,
        "306": 306,
        "307": 307,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9
      }],
      3: [function (_dereq_, module, exports) {
        _dereq_(278);

        _dereq_(214);

        _dereq_(216);

        _dereq_(215);

        _dereq_(218);

        _dereq_(220);

        _dereq_(225);

        _dereq_(219);

        _dereq_(217);

        _dereq_(227);

        _dereq_(226);

        _dereq_(222);

        _dereq_(223);

        _dereq_(221);

        _dereq_(213);

        _dereq_(224);

        _dereq_(228);

        _dereq_(229);

        _dereq_(180);

        _dereq_(182);

        _dereq_(181);

        _dereq_(231);

        _dereq_(230);

        _dereq_(201);

        _dereq_(211);

        _dereq_(212);

        _dereq_(202);

        _dereq_(203);

        _dereq_(204);

        _dereq_(205);

        _dereq_(206);

        _dereq_(207);

        _dereq_(208);

        _dereq_(209);

        _dereq_(210);

        _dereq_(184);

        _dereq_(185);

        _dereq_(186);

        _dereq_(187);

        _dereq_(188);

        _dereq_(189);

        _dereq_(190);

        _dereq_(191);

        _dereq_(192);

        _dereq_(193);

        _dereq_(194);

        _dereq_(195);

        _dereq_(196);

        _dereq_(197);

        _dereq_(198);

        _dereq_(199);

        _dereq_(200);

        _dereq_(265);

        _dereq_(270);

        _dereq_(277);

        _dereq_(268);

        _dereq_(260);

        _dereq_(261);

        _dereq_(266);

        _dereq_(271);

        _dereq_(273);

        _dereq_(256);

        _dereq_(257);

        _dereq_(258);

        _dereq_(259);

        _dereq_(262);

        _dereq_(263);

        _dereq_(264);

        _dereq_(267);

        _dereq_(269);

        _dereq_(272);

        _dereq_(274);

        _dereq_(275);

        _dereq_(276);

        _dereq_(175);

        _dereq_(177);

        _dereq_(176);

        _dereq_(179);

        _dereq_(178);

        _dereq_(163);

        _dereq_(161);

        _dereq_(168);

        _dereq_(165);

        _dereq_(171);

        _dereq_(173);

        _dereq_(160);

        _dereq_(167);

        _dereq_(157);

        _dereq_(172);

        _dereq_(155);

        _dereq_(170);

        _dereq_(169);

        _dereq_(162);

        _dereq_(166);

        _dereq_(154);

        _dereq_(156);

        _dereq_(159);

        _dereq_(158);

        _dereq_(174);

        _dereq_(164);

        _dereq_(247);

        _dereq_(248);

        _dereq_(254);

        _dereq_(249);

        _dereq_(250);

        _dereq_(251);

        _dereq_(252);

        _dereq_(253);

        _dereq_(232);

        _dereq_(183);

        _dereq_(255);

        _dereq_(290);

        _dereq_(291);

        _dereq_(279);

        _dereq_(280);

        _dereq_(285);

        _dereq_(288);

        _dereq_(289);

        _dereq_(283);

        _dereq_(286);

        _dereq_(284);

        _dereq_(287);

        _dereq_(281);

        _dereq_(282);

        _dereq_(233);

        _dereq_(234);

        _dereq_(235);

        _dereq_(236);

        _dereq_(237);

        _dereq_(240);

        _dereq_(238);

        _dereq_(239);

        _dereq_(241);

        _dereq_(242);

        _dereq_(243);

        _dereq_(244);

        _dereq_(246);

        _dereq_(245);

        module.exports = _dereq_(52);
      }, {
        "154": 154,
        "155": 155,
        "156": 156,
        "157": 157,
        "158": 158,
        "159": 159,
        "160": 160,
        "161": 161,
        "162": 162,
        "163": 163,
        "164": 164,
        "165": 165,
        "166": 166,
        "167": 167,
        "168": 168,
        "169": 169,
        "170": 170,
        "171": 171,
        "172": 172,
        "173": 173,
        "174": 174,
        "175": 175,
        "176": 176,
        "177": 177,
        "178": 178,
        "179": 179,
        "180": 180,
        "181": 181,
        "182": 182,
        "183": 183,
        "184": 184,
        "185": 185,
        "186": 186,
        "187": 187,
        "188": 188,
        "189": 189,
        "190": 190,
        "191": 191,
        "192": 192,
        "193": 193,
        "194": 194,
        "195": 195,
        "196": 196,
        "197": 197,
        "198": 198,
        "199": 199,
        "200": 200,
        "201": 201,
        "202": 202,
        "203": 203,
        "204": 204,
        "205": 205,
        "206": 206,
        "207": 207,
        "208": 208,
        "209": 209,
        "210": 210,
        "211": 211,
        "212": 212,
        "213": 213,
        "214": 214,
        "215": 215,
        "216": 216,
        "217": 217,
        "218": 218,
        "219": 219,
        "220": 220,
        "221": 221,
        "222": 222,
        "223": 223,
        "224": 224,
        "225": 225,
        "226": 226,
        "227": 227,
        "228": 228,
        "229": 229,
        "230": 230,
        "231": 231,
        "232": 232,
        "233": 233,
        "234": 234,
        "235": 235,
        "236": 236,
        "237": 237,
        "238": 238,
        "239": 239,
        "240": 240,
        "241": 241,
        "242": 242,
        "243": 243,
        "244": 244,
        "245": 245,
        "246": 246,
        "247": 247,
        "248": 248,
        "249": 249,
        "250": 250,
        "251": 251,
        "252": 252,
        "253": 253,
        "254": 254,
        "255": 255,
        "256": 256,
        "257": 257,
        "258": 258,
        "259": 259,
        "260": 260,
        "261": 261,
        "262": 262,
        "263": 263,
        "264": 264,
        "265": 265,
        "266": 266,
        "267": 267,
        "268": 268,
        "269": 269,
        "270": 270,
        "271": 271,
        "272": 272,
        "273": 273,
        "274": 274,
        "275": 275,
        "276": 276,
        "277": 277,
        "278": 278,
        "279": 279,
        "280": 280,
        "281": 281,
        "282": 282,
        "283": 283,
        "284": 284,
        "285": 285,
        "286": 286,
        "287": 287,
        "288": 288,
        "289": 289,
        "290": 290,
        "291": 291,
        "52": 52
      }],
      4: [function (_dereq_, module, exports) {
        _dereq_(292);

        module.exports = _dereq_(52).Array.flatMap;
      }, {
        "292": 292,
        "52": 52
      }],
      5: [function (_dereq_, module, exports) {
        _dereq_(293);

        module.exports = _dereq_(52).Array.includes;
      }, {
        "293": 293,
        "52": 52
      }],
      6: [function (_dereq_, module, exports) {
        _dereq_(294);

        module.exports = _dereq_(52).Object.entries;
      }, {
        "294": 294,
        "52": 52
      }],
      7: [function (_dereq_, module, exports) {
        _dereq_(295);

        module.exports = _dereq_(52).Object.getOwnPropertyDescriptors;
      }, {
        "295": 295,
        "52": 52
      }],
      8: [function (_dereq_, module, exports) {
        _dereq_(296);

        module.exports = _dereq_(52).Object.values;
      }, {
        "296": 296,
        "52": 52
      }],
      9: [function (_dereq_, module, exports) {

        _dereq_(232);

        _dereq_(297);

        module.exports = _dereq_(52).Promise['finally'];
      }, {
        "232": 232,
        "297": 297,
        "52": 52
      }],
      10: [function (_dereq_, module, exports) {
        _dereq_(298);

        module.exports = _dereq_(52).String.padEnd;
      }, {
        "298": 298,
        "52": 52
      }],
      11: [function (_dereq_, module, exports) {
        _dereq_(299);

        module.exports = _dereq_(52).String.padStart;
      }, {
        "299": 299,
        "52": 52
      }],
      12: [function (_dereq_, module, exports) {
        _dereq_(301);

        module.exports = _dereq_(52).String.trimRight;
      }, {
        "301": 301,
        "52": 52
      }],
      13: [function (_dereq_, module, exports) {
        _dereq_(300);

        module.exports = _dereq_(52).String.trimLeft;
      }, {
        "300": 300,
        "52": 52
      }],
      14: [function (_dereq_, module, exports) {
        _dereq_(302);

        module.exports = _dereq_(151).f('asyncIterator');
      }, {
        "151": 151,
        "302": 302
      }],
      15: [function (_dereq_, module, exports) {
        _dereq_(32);

        module.exports = _dereq_(18).global;
      }, {
        "18": 18,
        "32": 32
      }],
      16: [function (_dereq_, module, exports) {
        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };
      }, {}],
      17: [function (_dereq_, module, exports) {
        var isObject = _dereq_(28);

        module.exports = function (it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!');
          return it;
        };
      }, {
        "28": 28
      }],
      18: [function (_dereq_, module, exports) {
        var core = module.exports = {
          version: '2.6.10'
        };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
      }, {}],
      19: [function (_dereq_, module, exports) {
        // optional / simple context binding
        var aFunction = _dereq_(16);

        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };

            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function ()
          /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };
      }, {
        "16": 16
      }],
      20: [function (_dereq_, module, exports) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !_dereq_(23)(function () {
          return Object.defineProperty({}, 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
      }, {
        "23": 23
      }],
      21: [function (_dereq_, module, exports) {
        var isObject = _dereq_(28);

        var document = _dereq_(24).document; // typeof document.createElement is 'object' in old IE


        var is = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };
      }, {
        "24": 24,
        "28": 28
      }],
      22: [function (_dereq_, module, exports) {
        var global = _dereq_(24);

        var core = _dereq_(18);

        var ctx = _dereq_(19);

        var hide = _dereq_(26);

        var has = _dereq_(25);

        var PROTOTYPE = 'prototype';

        var $export = function $export(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;

          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue; // export native or passed

            out = own ? target[key] : source[key]; // prevent global pollution for namespaces

            exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? function (C) {
              var F = function F(a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();

                    case 1:
                      return new C(a);

                    case 2:
                      return new C(a, b);
                  }

                  return new C(a, b, c);
                }

                return C.apply(this, arguments);
              };

              F[PROTOTYPE] = C[PROTOTYPE];
              return F; // make static versions for prototype methods
            }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

              if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
            }
          }
        }; // type bitmap


        $export.F = 1; // forced

        $export.G = 2; // global

        $export.S = 4; // static

        $export.P = 8; // proto

        $export.B = 16; // bind

        $export.W = 32; // wrap

        $export.U = 64; // safe

        $export.R = 128; // real proto method for `library`

        module.exports = $export;
      }, {
        "18": 18,
        "19": 19,
        "24": 24,
        "25": 25,
        "26": 26
      }],
      23: [function (_dereq_, module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
      }, {}],
      24: [function (_dereq_, module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
        : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
      }, {}],
      25: [function (_dereq_, module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };
      }, {}],
      26: [function (_dereq_, module, exports) {
        var dP = _dereq_(29);

        var createDesc = _dereq_(30);

        module.exports = _dereq_(20) ? function (object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };
      }, {
        "20": 20,
        "29": 29,
        "30": 30
      }],
      27: [function (_dereq_, module, exports) {
        module.exports = !_dereq_(20) && !_dereq_(23)(function () {
          return Object.defineProperty(_dereq_(21)('div'), 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
      }, {
        "20": 20,
        "21": 21,
        "23": 23
      }],
      28: [function (_dereq_, module, exports) {
        module.exports = function (it) {
          return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
        };
      }, {}],
      29: [function (_dereq_, module, exports) {
        var anObject = _dereq_(17);

        var IE8_DOM_DEFINE = _dereq_(27);

        var toPrimitive = _dereq_(31);

        var dP = Object.defineProperty;
        exports.f = _dereq_(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
          } catch (e) {
            /* empty */
          }
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };
      }, {
        "17": 17,
        "20": 20,
        "27": 27,
        "31": 31
      }],
      30: [function (_dereq_, module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };
      }, {}],
      31: [function (_dereq_, module, exports) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = _dereq_(28); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string


        module.exports = function (it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
          if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          throw TypeError("Can't convert object to primitive value");
        };
      }, {
        "28": 28
      }],
      32: [function (_dereq_, module, exports) {
        // https://github.com/tc39/proposal-global
        var $export = _dereq_(22);

        $export($export.G, {
          global: _dereq_(24)
        });
      }, {
        "22": 22,
        "24": 24
      }],
      33: [function (_dereq_, module, exports) {
        arguments[4][16][0].apply(exports, arguments);
      }, {
        "16": 16
      }],
      34: [function (_dereq_, module, exports) {
        var cof = _dereq_(48);

        module.exports = function (it, msg) {
          if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
          return +it;
        };
      }, {
        "48": 48
      }],
      35: [function (_dereq_, module, exports) {
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = _dereq_(152)('unscopables');

        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) _dereq_(72)(ArrayProto, UNSCOPABLES, {});

        module.exports = function (key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };
      }, {
        "152": 152,
        "72": 72
      }],
      36: [function (_dereq_, module, exports) {

        var at = _dereq_(129)(true); // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex


        module.exports = function (S, index, unicode) {
          return index + (unicode ? at(S, index).length : 1);
        };
      }, {
        "129": 129
      }],
      37: [function (_dereq_, module, exports) {
        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
            throw TypeError(name + ': incorrect invocation!');
          }

          return it;
        };
      }, {}],
      38: [function (_dereq_, module, exports) {
        arguments[4][17][0].apply(exports, arguments);
      }, {
        "17": 17,
        "81": 81
      }],
      39: [function (_dereq_, module, exports) {

        var toObject = _dereq_(142);

        var toAbsoluteIndex = _dereq_(137);

        var toLength = _dereq_(141);

        module.exports = [].copyWithin || function copyWithin(target
        /* = 0 */
        , start
        /* = 0, end = @length */
        ) {
          var O = toObject(this);
          var len = toLength(O.length);
          var to = toAbsoluteIndex(target, len);
          var from = toAbsoluteIndex(start, len);
          var end = arguments.length > 2 ? arguments[2] : undefined;
          var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
          var inc = 1;

          if (from < to && to < from + count) {
            inc = -1;
            from += count - 1;
            to += count - 1;
          }

          while (count-- > 0) {
            if (from in O) O[to] = O[from];else delete O[to];
            to += inc;
            from += inc;
          }

          return O;
        };
      }, {
        "137": 137,
        "141": 141,
        "142": 142
      }],
      40: [function (_dereq_, module, exports) {

        var toObject = _dereq_(142);

        var toAbsoluteIndex = _dereq_(137);

        var toLength = _dereq_(141);

        module.exports = function fill(value
        /* , start = 0, end = @length */
        ) {
          var O = toObject(this);
          var length = toLength(O.length);
          var aLen = arguments.length;
          var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
          var end = aLen > 2 ? arguments[2] : undefined;
          var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

          while (endPos > index) {
            O[index++] = value;
          }

          return O;
        };
      }, {
        "137": 137,
        "141": 141,
        "142": 142
      }],
      41: [function (_dereq_, module, exports) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = _dereq_(140);

        var toLength = _dereq_(141);

        var toAbsoluteIndex = _dereq_(137);

        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare

            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++]; // eslint-disable-next-line no-self-compare

              if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
            }
            return !IS_INCLUDES && -1;
          };
        };
      }, {
        "137": 137,
        "140": 140,
        "141": 141
      }],
      42: [function (_dereq_, module, exports) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = _dereq_(54);

        var IObject = _dereq_(77);

        var toObject = _dereq_(142);

        var toLength = _dereq_(141);

        var asc = _dereq_(45);

        module.exports = function (TYPE, $create) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          var create = $create || asc;
          return function ($this, callbackfn, that) {
            var O = toObject($this);
            var self = IObject(O);
            var f = ctx(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
            var val, res;

            for (; length > index; index++) {
              if (NO_HOLES || index in self) {
                val = self[index];
                res = f(val, index, O);

                if (TYPE) {
                  if (IS_MAP) result[index] = res; // map
                  else if (res) switch (TYPE) {
                      case 3:
                        return true;
                      // some

                      case 5:
                        return val;
                      // find

                      case 6:
                        return index;
                      // findIndex

                      case 2:
                        result.push(val);
                      // filter
                    } else if (IS_EVERY) return false; // every
                }
              }
            }

            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
          };
        };
      }, {
        "141": 141,
        "142": 142,
        "45": 45,
        "54": 54,
        "77": 77
      }],
      43: [function (_dereq_, module, exports) {
        var aFunction = _dereq_(33);

        var toObject = _dereq_(142);

        var IObject = _dereq_(77);

        var toLength = _dereq_(141);

        module.exports = function (that, callbackfn, aLen, memo, isRight) {
          aFunction(callbackfn);
          var O = toObject(that);
          var self = IObject(O);
          var length = toLength(O.length);
          var index = isRight ? length - 1 : 0;
          var i = isRight ? -1 : 1;
          if (aLen < 2) for (;;) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }

            index += i;

            if (isRight ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }

          for (; isRight ? index >= 0 : length > index; index += i) {
            if (index in self) {
              memo = callbackfn(memo, self[index], index, O);
            }
          }

          return memo;
        };
      }, {
        "141": 141,
        "142": 142,
        "33": 33,
        "77": 77
      }],
      44: [function (_dereq_, module, exports) {
        var isObject = _dereq_(81);

        var isArray = _dereq_(79);

        var SPECIES = _dereq_(152)('species');

        module.exports = function (original) {
          var C;

          if (isArray(original)) {
            C = original.constructor; // cross-realm fallback

            if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

            if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }

          return C === undefined ? Array : C;
        };
      }, {
        "152": 152,
        "79": 79,
        "81": 81
      }],
      45: [function (_dereq_, module, exports) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = _dereq_(44);

        module.exports = function (original, length) {
          return new (speciesConstructor(original))(length);
        };
      }, {
        "44": 44
      }],
      46: [function (_dereq_, module, exports) {

        var aFunction = _dereq_(33);

        var isObject = _dereq_(81);

        var invoke = _dereq_(76);

        var arraySlice = [].slice;
        var factories = {};

        var construct = function construct(F, len, args) {
          if (!(len in factories)) {
            for (var n = [], i = 0; i < len; i++) {
              n[i] = 'a[' + i + ']';
            } // eslint-disable-next-line no-new-func


            factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
          }

          return factories[len](F, args);
        };

        module.exports = Function.bind || function bind(that
        /* , ...args */
        ) {
          var fn = aFunction(this);
          var partArgs = arraySlice.call(arguments, 1);

          var bound = function bound()
          /* args... */
          {
            var args = partArgs.concat(arraySlice.call(arguments));
            return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
          };

          if (isObject(fn.prototype)) bound.prototype = fn.prototype;
          return bound;
        };
      }, {
        "33": 33,
        "76": 76,
        "81": 81
      }],
      47: [function (_dereq_, module, exports) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = _dereq_(48);

        var TAG = _dereq_(152)('toStringTag'); // ES3 wrong here


        var ARG = cof(function () {
          return arguments;
        }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

        var tryGet = function tryGet(it, key) {
          try {
            return it[key];
          } catch (e) {
            /* empty */
          }
        };

        module.exports = function (it) {
          var O, T, B;
          return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
          : ARG ? cof(O) // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };
      }, {
        "152": 152,
        "48": 48
      }],
      48: [function (_dereq_, module, exports) {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };
      }, {}],
      49: [function (_dereq_, module, exports) {

        var dP = _dereq_(99).f;

        var create = _dereq_(98);

        var redefineAll = _dereq_(117);

        var ctx = _dereq_(54);

        var anInstance = _dereq_(37);

        var forOf = _dereq_(68);

        var $iterDefine = _dereq_(85);

        var step = _dereq_(87);

        var setSpecies = _dereq_(123);

        var DESCRIPTORS = _dereq_(58);

        var fastKey = _dereq_(94).fastKey;

        var validate = _dereq_(149);

        var SIZE = DESCRIPTORS ? '_s' : 'size';

        var getEntry = function getEntry(that, key) {
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== 'F') return that._i[index]; // frozen object case

          for (entry = that._f; entry; entry = entry.n) {
            if (entry.k == key) return entry;
          }
        };

        module.exports = {
          getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, NAME, '_i');
              that._t = NAME; // collection type

              that._i = create(null); // index

              that._f = undefined; // first entry

              that._l = undefined; // last entry

              that[SIZE] = 0; // size

              if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            });
            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                  entry.r = true;
                  if (entry.p) entry.p = entry.p.n = undefined;
                  delete data[entry.i];
                }

                that._f = that._l = undefined;
                that[SIZE] = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              'delete': function _delete(key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);

                if (entry) {
                  var next = entry.n;
                  var prev = entry.p;
                  delete that._i[entry.i];
                  entry.r = true;
                  if (prev) prev.n = next;
                  if (next) next.p = prev;
                  if (that._f == entry) that._f = next;
                  if (that._l == entry) that._l = prev;
                  that[SIZE]--;
                }

                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn
              /* , that = undefined */
              ) {
                validate(this, NAME);
                var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;

                while (entry = entry ? entry.n : this._f) {
                  f(entry.v, entry.k, this); // revert to the last existing entry

                  while (entry && entry.r) {
                    entry = entry.p;
                  }
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
              }
            });
            if (DESCRIPTORS) dP(C.prototype, 'size', {
              get: function get() {
                return validate(this, NAME)[SIZE];
              }
            });
            return C;
          },
          def: function def(that, key, value) {
            var entry = getEntry(that, key);
            var prev, index; // change existing entry

            if (entry) {
              entry.v = value; // create new entry
            } else {
              that._l = entry = {
                i: index = fastKey(key, true),
                // <- index
                k: key,
                // <- key
                v: value,
                // <- value
                p: prev = that._l,
                // <- previous entry
                n: undefined,
                // <- next entry
                r: false // <- removed

              };
              if (!that._f) that._f = entry;
              if (prev) prev.n = entry;
              that[SIZE]++; // add to index

              if (index !== 'F') that._i[index] = entry;
            }

            return that;
          },
          getEntry: getEntry,
          setStrong: function setStrong(C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(C, NAME, function (iterated, kind) {
              this._t = validate(iterated, NAME); // target

              this._k = kind; // kind

              this._l = undefined; // previous
            }, function () {
              var that = this;
              var kind = that._k;
              var entry = that._l; // revert to the last existing entry

              while (entry && entry.r) {
                entry = entry.p;
              } // get next entry


              if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                // or finish the iteration
                that._t = undefined;
                return step(1);
              } // return step by kind


              if (kind == 'keys') return step(0, entry.k);
              if (kind == 'values') return step(0, entry.v);
              return step(0, [entry.k, entry.v]);
            }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

            setSpecies(NAME);
          }
        };
      }, {
        "117": 117,
        "123": 123,
        "149": 149,
        "37": 37,
        "54": 54,
        "58": 58,
        "68": 68,
        "85": 85,
        "87": 87,
        "94": 94,
        "98": 98,
        "99": 99
      }],
      50: [function (_dereq_, module, exports) {

        var redefineAll = _dereq_(117);

        var getWeak = _dereq_(94).getWeak;

        var anObject = _dereq_(38);

        var isObject = _dereq_(81);

        var anInstance = _dereq_(37);

        var forOf = _dereq_(68);

        var createArrayMethod = _dereq_(42);

        var $has = _dereq_(71);

        var validate = _dereq_(149);

        var arrayFind = createArrayMethod(5);
        var arrayFindIndex = createArrayMethod(6);
        var id = 0; // fallback for uncaught frozen keys

        var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
          return that._l || (that._l = new UncaughtFrozenStore());
        };

        var UncaughtFrozenStore = function UncaughtFrozenStore() {
          this.a = [];
        };

        var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
          return arrayFind(store.a, function (it) {
            return it[0] === key;
          });
        };

        UncaughtFrozenStore.prototype = {
          get: function get(key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) return entry[1];
          },
          has: function has(key) {
            return !!findUncaughtFrozen(this, key);
          },
          set: function set(key, value) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) entry[1] = value;else this.a.push([key, value]);
          },
          'delete': function _delete(key) {
            var index = arrayFindIndex(this.a, function (it) {
              return it[0] === key;
            });
            if (~index) this.a.splice(index, 1);
            return !!~index;
          }
        };
        module.exports = {
          getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, NAME, '_i');
              that._t = NAME; // collection type

              that._i = id++; // collection id

              that._l = undefined; // leak store for uncaught frozen objects

              if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            });
            redefineAll(C.prototype, {
              // 23.3.3.2 WeakMap.prototype.delete(key)
              // 23.4.3.3 WeakSet.prototype.delete(value)
              'delete': function _delete(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
                return data && $has(data, this._i) && delete data[this._i];
              },
              // 23.3.3.4 WeakMap.prototype.has(key)
              // 23.4.3.4 WeakSet.prototype.has(value)
              has: function has(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                return data && $has(data, this._i);
              }
            });
            return C;
          },
          def: function def(that, key, value) {
            var data = getWeak(anObject(key), true);
            if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
            return that;
          },
          ufstore: uncaughtFrozenStore
        };
      }, {
        "117": 117,
        "149": 149,
        "37": 37,
        "38": 38,
        "42": 42,
        "68": 68,
        "71": 71,
        "81": 81,
        "94": 94
      }],
      51: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var $export = _dereq_(62);

        var redefine = _dereq_(118);

        var redefineAll = _dereq_(117);

        var meta = _dereq_(94);

        var forOf = _dereq_(68);

        var anInstance = _dereq_(37);

        var isObject = _dereq_(81);

        var fails = _dereq_(64);

        var $iterDetect = _dereq_(86);

        var setToStringTag = _dereq_(124);

        var inheritIfRequired = _dereq_(75);

        module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
          var Base = global[NAME];
          var C = Base;
          var ADDER = IS_MAP ? 'set' : 'add';
          var proto = C && C.prototype;
          var O = {};

          var fixMethod = function fixMethod(KEY) {
            var fn = proto[KEY];
            redefine(proto, KEY, KEY == 'delete' ? function (a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'has' ? function has(a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'get' ? function get(a) {
              return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'add' ? function add(a) {
              fn.call(this, a === 0 ? 0 : a);
              return this;
            } : function set(a, b) {
              fn.call(this, a === 0 ? 0 : a, b);
              return this;
            });
          };

          if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
            new C().entries().next();
          }))) {
            // create collection constructor
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
            redefineAll(C.prototype, methods);
            meta.NEED = true;
          } else {
            var instance = new C(); // early implementations not supports chaining

            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

            var THROWS_ON_PRIMITIVES = fails(function () {
              instance.has(1);
            }); // most early implementations doesn't supports iterables, most modern - not close it correctly

            var ACCEPT_ITERABLES = $iterDetect(function (iter) {
              new C(iter);
            }); // eslint-disable-line no-new
            // for early implementations -0 and +0 not the same

            var BUGGY_ZERO = !IS_WEAK && fails(function () {
              // V8 ~ Chromium 42- fails only with 5+ elements
              var $instance = new C();
              var index = 5;

              while (index--) {
                $instance[ADDER](index, index);
              }

              return !$instance.has(-0);
            });

            if (!ACCEPT_ITERABLES) {
              C = wrapper(function (target, iterable) {
                anInstance(target, C, NAME);
                var that = inheritIfRequired(new Base(), target, C);
                if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                return that;
              });
              C.prototype = proto;
              proto.constructor = C;
            }

            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod('delete');
              fixMethod('has');
              IS_MAP && fixMethod('get');
            }

            if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

            if (IS_WEAK && proto.clear) delete proto.clear;
          }

          setToStringTag(C, NAME);
          O[NAME] = C;
          $export($export.G + $export.W + $export.F * (C != Base), O);
          if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
          return C;
        };
      }, {
        "117": 117,
        "118": 118,
        "124": 124,
        "37": 37,
        "62": 62,
        "64": 64,
        "68": 68,
        "70": 70,
        "75": 75,
        "81": 81,
        "86": 86,
        "94": 94
      }],
      52: [function (_dereq_, module, exports) {
        arguments[4][18][0].apply(exports, arguments);
      }, {
        "18": 18
      }],
      53: [function (_dereq_, module, exports) {

        var $defineProperty = _dereq_(99);

        var createDesc = _dereq_(116);

        module.exports = function (object, index, value) {
          if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
        };
      }, {
        "116": 116,
        "99": 99
      }],
      54: [function (_dereq_, module, exports) {
        arguments[4][19][0].apply(exports, arguments);
      }, {
        "19": 19,
        "33": 33
      }],
      55: [function (_dereq_, module, exports) {

        var fails = _dereq_(64);

        var getTime = Date.prototype.getTime;
        var $toISOString = Date.prototype.toISOString;

        var lz = function lz(num) {
          return num > 9 ? num : '0' + num;
        }; // PhantomJS / old WebKit has a broken implementations


        module.exports = fails(function () {
          return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
        }) || !fails(function () {
          $toISOString.call(new Date(NaN));
        }) ? function toISOString() {
          if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
          var d = this;
          var y = d.getUTCFullYear();
          var m = d.getUTCMilliseconds();
          var s = y < 0 ? '-' : y > 9999 ? '+' : '';
          return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
        } : $toISOString;
      }, {
        "64": 64
      }],
      56: [function (_dereq_, module, exports) {

        var anObject = _dereq_(38);

        var toPrimitive = _dereq_(143);

        var NUMBER = 'number';

        module.exports = function (hint) {
          if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
          return toPrimitive(anObject(this), hint != NUMBER);
        };
      }, {
        "143": 143,
        "38": 38
      }],
      57: [function (_dereq_, module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };
      }, {}],
      58: [function (_dereq_, module, exports) {
        arguments[4][20][0].apply(exports, arguments);
      }, {
        "20": 20,
        "64": 64
      }],
      59: [function (_dereq_, module, exports) {
        arguments[4][21][0].apply(exports, arguments);
      }, {
        "21": 21,
        "70": 70,
        "81": 81
      }],
      60: [function (_dereq_, module, exports) {
        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
      }, {}],
      61: [function (_dereq_, module, exports) {
        // all enumerable object keys, includes symbols
        var getKeys = _dereq_(107);

        var gOPS = _dereq_(104);

        var pIE = _dereq_(108);

        module.exports = function (it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;

          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i = 0;
            var key;

            while (symbols.length > i) {
              if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
          }

          return result;
        };
      }, {
        "104": 104,
        "107": 107,
        "108": 108
      }],
      62: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var core = _dereq_(52);

        var hide = _dereq_(72);

        var redefine = _dereq_(118);

        var ctx = _dereq_(54);

        var PROTOTYPE = 'prototype';

        var $export = function $export(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL) source = name;

          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

            out = (own ? target : source)[key]; // bind timers to global for call from export context

            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

            if (target) redefine(target, key, out, type & $export.U); // export

            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };

        global.core = core; // type bitmap

        $export.F = 1; // forced

        $export.G = 2; // global

        $export.S = 4; // static

        $export.P = 8; // proto

        $export.B = 16; // bind

        $export.W = 32; // wrap

        $export.U = 64; // safe

        $export.R = 128; // real proto method for `library`

        module.exports = $export;
      }, {
        "118": 118,
        "52": 52,
        "54": 54,
        "70": 70,
        "72": 72
      }],
      63: [function (_dereq_, module, exports) {
        var MATCH = _dereq_(152)('match');

        module.exports = function (KEY) {
          var re = /./;

          try {
            '/./'[KEY](re);
          } catch (e) {
            try {
              re[MATCH] = false;
              return !'/./'[KEY](re);
            } catch (f) {
              /* empty */
            }
          }

          return true;
        };
      }, {
        "152": 152
      }],
      64: [function (_dereq_, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, {
        "23": 23
      }],
      65: [function (_dereq_, module, exports) {

        _dereq_(248);

        var redefine = _dereq_(118);

        var hide = _dereq_(72);

        var fails = _dereq_(64);

        var defined = _dereq_(57);

        var wks = _dereq_(152);

        var regexpExec = _dereq_(120);

        var SPECIES = wks('species');
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
          // #replace needs built-in support for named groups.
          // #match works fine because it just return the exec results, even if it has
          // a "grops" property.
          var re = /./;

          re.exec = function () {
            var result = [];
            result.groups = {
              a: '7'
            };
            return result;
          };

          return ''.replace(re, '$<a>') !== '7';
        });

        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
          // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
          var re = /(?:)/;
          var originalExec = re.exec;

          re.exec = function () {
            return originalExec.apply(this, arguments);
          };

          var result = 'ab'.split(re);
          return result.length === 2 && result[0] === 'a' && result[1] === 'b';
        }();

        module.exports = function (KEY, length, exec) {
          var SYMBOL = wks(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function () {
            // String methods call symbol-named RegEp methods
            var O = {};

            O[SYMBOL] = function () {
              return 7;
            };

            return ''[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
            // Symbol-named RegExp methods call .exec
            var execCalled = false;
            var re = /a/;

            re.exec = function () {
              execCalled = true;
              return null;
            };

            if (KEY === 'split') {
              // RegExp[@@split] doesn't call the regex's exec method, but first creates
              // a new one. We need to return the patched regex when creating the new one.
              re.constructor = {};

              re.constructor[SPECIES] = function () {
                return re;
              };
            }

            re[SYMBOL]('');
            return !execCalled;
          }) : undefined;

          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  // The native String method already delegates to @@method (this
                  // polyfilled function), leasing to infinite recursion.
                  // We avoid it by directly calling the native @@method method.
                  return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                  };
                }

                return {
                  done: true,
                  value: nativeMethod.call(str, regexp, arg2)
                };
              }

              return {
                done: false
              };
            });
            var strfn = fns[0];
            var rxfn = fns[1];
            redefine(String.prototype, KEY, strfn);
            hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) {
              return rxfn.call(string, this, arg);
            } // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) {
              return rxfn.call(string, this);
            });
          }
        };
      }, {
        "118": 118,
        "120": 120,
        "152": 152,
        "248": 248,
        "57": 57,
        "64": 64,
        "72": 72
      }],
      66: [function (_dereq_, module, exports) {

        var anObject = _dereq_(38);

        module.exports = function () {
          var that = anObject(this);
          var result = '';
          if (that.global) result += 'g';
          if (that.ignoreCase) result += 'i';
          if (that.multiline) result += 'm';
          if (that.unicode) result += 'u';
          if (that.sticky) result += 'y';
          return result;
        };
      }, {
        "38": 38
      }],
      67: [function (_dereq_, module, exports) {

        var isArray = _dereq_(79);

        var isObject = _dereq_(81);

        var toLength = _dereq_(141);

        var ctx = _dereq_(54);

        var IS_CONCAT_SPREADABLE = _dereq_(152)('isConcatSpreadable');

        function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
          var targetIndex = start;
          var sourceIndex = 0;
          var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
          var element, spreadable;

          while (sourceIndex < sourceLen) {
            if (sourceIndex in source) {
              element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
              spreadable = false;

              if (isObject(element)) {
                spreadable = element[IS_CONCAT_SPREADABLE];
                spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
              }

              if (spreadable && depth > 0) {
                targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
              } else {
                if (targetIndex >= 0x1fffffffffffff) throw TypeError();
                target[targetIndex] = element;
              }

              targetIndex++;
            }

            sourceIndex++;
          }

          return targetIndex;
        }

        module.exports = flattenIntoArray;
      }, {
        "141": 141,
        "152": 152,
        "54": 54,
        "79": 79,
        "81": 81
      }],
      68: [function (_dereq_, module, exports) {
        var ctx = _dereq_(54);

        var call = _dereq_(83);

        var isArrayIter = _dereq_(78);

        var anObject = _dereq_(38);

        var toLength = _dereq_(141);

        var getIterFn = _dereq_(153);

        var BREAK = {};
        var RETURN = {};

        var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function () {
            return iterable;
          } : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

          if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
        };

        exports.BREAK = BREAK;
        exports.RETURN = RETURN;
      }, {
        "141": 141,
        "153": 153,
        "38": 38,
        "54": 54,
        "78": 78,
        "83": 83
      }],
      69: [function (_dereq_, module, exports) {
        module.exports = _dereq_(126)('native-function-to-string', Function.toString);
      }, {
        "126": 126
      }],
      70: [function (_dereq_, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, {
        "24": 24
      }],
      71: [function (_dereq_, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "25": 25
      }],
      72: [function (_dereq_, module, exports) {
        arguments[4][26][0].apply(exports, arguments);
      }, {
        "116": 116,
        "26": 26,
        "58": 58,
        "99": 99
      }],
      73: [function (_dereq_, module, exports) {
        var document = _dereq_(70).document;

        module.exports = document && document.documentElement;
      }, {
        "70": 70
      }],
      74: [function (_dereq_, module, exports) {
        arguments[4][27][0].apply(exports, arguments);
      }, {
        "27": 27,
        "58": 58,
        "59": 59,
        "64": 64
      }],
      75: [function (_dereq_, module, exports) {
        var isObject = _dereq_(81);

        var setPrototypeOf = _dereq_(122).set;

        module.exports = function (that, target, C) {
          var S = target.constructor;
          var P;

          if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
            setPrototypeOf(that, P);
          }

          return that;
        };
      }, {
        "122": 122,
        "81": 81
      }],
      76: [function (_dereq_, module, exports) {
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function (fn, args, that) {
          var un = that === undefined;

          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);

            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);

            case 2:
              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

            case 3:
              return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

            case 4:
              return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          }

          return fn.apply(that, args);
        };
      }, {}],
      77: [function (_dereq_, module, exports) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = _dereq_(48); // eslint-disable-next-line no-prototype-builtins


        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
          return cof(it) == 'String' ? it.split('') : Object(it);
        };
      }, {
        "48": 48
      }],
      78: [function (_dereq_, module, exports) {
        // check on default Array iterator
        var Iterators = _dereq_(88);

        var ITERATOR = _dereq_(152)('iterator');

        var ArrayProto = Array.prototype;

        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };
      }, {
        "152": 152,
        "88": 88
      }],
      79: [function (_dereq_, module, exports) {
        // 7.2.2 IsArray(argument)
        var cof = _dereq_(48);

        module.exports = Array.isArray || function isArray(arg) {
          return cof(arg) == 'Array';
        };
      }, {
        "48": 48
      }],
      80: [function (_dereq_, module, exports) {
        // 20.1.2.3 Number.isInteger(number)
        var isObject = _dereq_(81);

        var floor = Math.floor;

        module.exports = function isInteger(it) {
          return !isObject(it) && isFinite(it) && floor(it) === it;
        };
      }, {
        "81": 81
      }],
      81: [function (_dereq_, module, exports) {
        arguments[4][28][0].apply(exports, arguments);
      }, {
        "28": 28
      }],
      82: [function (_dereq_, module, exports) {
        // 7.2.8 IsRegExp(argument)
        var isObject = _dereq_(81);

        var cof = _dereq_(48);

        var MATCH = _dereq_(152)('match');

        module.exports = function (it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };
      }, {
        "152": 152,
        "48": 48,
        "81": 81
      }],
      83: [function (_dereq_, module, exports) {
        // call something on iterator step with safe closing on error
        var anObject = _dereq_(38);

        module.exports = function (iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return'];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };
      }, {
        "38": 38
      }],
      84: [function (_dereq_, module, exports) {

        var create = _dereq_(98);

        var descriptor = _dereq_(116);

        var setToStringTag = _dereq_(124);

        var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

        _dereq_(72)(IteratorPrototype, _dereq_(152)('iterator'), function () {
          return this;
        });

        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
          });
          setToStringTag(Constructor, NAME + ' Iterator');
        };
      }, {
        "116": 116,
        "124": 124,
        "152": 152,
        "72": 72,
        "98": 98
      }],
      85: [function (_dereq_, module, exports) {

        var LIBRARY = _dereq_(89);

        var $export = _dereq_(62);

        var redefine = _dereq_(118);

        var hide = _dereq_(72);

        var Iterators = _dereq_(88);

        var $iterCreate = _dereq_(84);

        var setToStringTag = _dereq_(124);

        var getPrototypeOf = _dereq_(105);

        var ITERATOR = _dereq_(152)('iterator');

        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function returnThis() {
          return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);

          var getMethod = function getMethod(kind) {
            if (!BUGGY && kind in proto) return proto[kind];

            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };

              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }

            return function entries() {
              return new Constructor(this, kind);
            };
          };

          var TAG = NAME + ' Iterator';
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype; // Fix native

          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
            }
          } // fix Array#{values, @@iterator}.name in V8 / FF


          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;

            $default = function values() {
              return $native.call(this);
            };
          } // Define iterator


          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          } // Plug for library


          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;

          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }

          return methods;
        };
      }, {
        "105": 105,
        "118": 118,
        "124": 124,
        "152": 152,
        "62": 62,
        "72": 72,
        "84": 84,
        "88": 88,
        "89": 89
      }],
      86: [function (_dereq_, module, exports) {
        var ITERATOR = _dereq_(152)('iterator');

        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();

          riter['return'] = function () {
            SAFE_CLOSING = true;
          }; // eslint-disable-next-line no-throw-literal


          Array.from(riter, function () {
            throw 2;
          });
        } catch (e) {
          /* empty */
        }

        module.exports = function (exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;

          try {
            var arr = [7];
            var iter = arr[ITERATOR]();

            iter.next = function () {
              return {
                done: safe = true
              };
            };

            arr[ITERATOR] = function () {
              return iter;
            };

            exec(arr);
          } catch (e) {
            /* empty */
          }

          return safe;
        };
      }, {
        "152": 152
      }],
      87: [function (_dereq_, module, exports) {
        module.exports = function (done, value) {
          return {
            value: value,
            done: !!done
          };
        };
      }, {}],
      88: [function (_dereq_, module, exports) {
        module.exports = {};
      }, {}],
      89: [function (_dereq_, module, exports) {
        module.exports = false;
      }, {}],
      90: [function (_dereq_, module, exports) {
        // 20.2.2.14 Math.expm1(x)
        var $expm1 = Math.expm1;
        module.exports = !$expm1 // Old FF bug
        || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
        || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
          return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
        } : $expm1;
      }, {}],
      91: [function (_dereq_, module, exports) {
        // 20.2.2.16 Math.fround(x)
        var sign = _dereq_(93);

        var pow = Math.pow;
        var EPSILON = pow(2, -52);
        var EPSILON32 = pow(2, -23);
        var MAX32 = pow(2, 127) * (2 - EPSILON32);
        var MIN32 = pow(2, -126);

        var roundTiesToEven = function roundTiesToEven(n) {
          return n + 1 / EPSILON - 1 / EPSILON;
        };

        module.exports = Math.fround || function fround(x) {
          var $abs = Math.abs(x);
          var $sign = sign(x);
          var a, result;
          if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
          a = (1 + EPSILON32 / EPSILON) * $abs;
          result = a - (a - $abs); // eslint-disable-next-line no-self-compare

          if (result > MAX32 || result != result) return $sign * Infinity;
          return $sign * result;
        };
      }, {
        "93": 93
      }],
      92: [function (_dereq_, module, exports) {
        // 20.2.2.20 Math.log1p(x)
        module.exports = Math.log1p || function log1p(x) {
          return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
        };
      }, {}],
      93: [function (_dereq_, module, exports) {
        // 20.2.2.28 Math.sign(x)
        module.exports = Math.sign || function sign(x) {
          // eslint-disable-next-line no-self-compare
          return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
        };
      }, {}],
      94: [function (_dereq_, module, exports) {
        var META = _dereq_(147)('meta');

        var isObject = _dereq_(81);

        var has = _dereq_(71);

        var setDesc = _dereq_(99).f;

        var id = 0;

        var isExtensible = Object.isExtensible || function () {
          return true;
        };

        var FREEZE = !_dereq_(64)(function () {
          return isExtensible(Object.preventExtensions({}));
        });

        var setMeta = function setMeta(it) {
          setDesc(it, META, {
            value: {
              i: 'O' + ++id,
              // object ID
              w: {} // weak collections IDs

            }
          });
        };

        var fastKey = function fastKey(it, create) {
          // return primitive with prefix
          if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F'; // not necessary to add metadata

            if (!create) return 'E'; // add missing metadata

            setMeta(it); // return object ID
          }

          return it[META].i;
        };

        var getWeak = function getWeak(it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true; // not necessary to add metadata

            if (!create) return false; // add missing metadata

            setMeta(it); // return hash weak collections IDs
          }

          return it[META].w;
        }; // add metadata on freeze-family methods calling


        var onFreeze = function onFreeze(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
          return it;
        };

        var meta = module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze
        };
      }, {
        "147": 147,
        "64": 64,
        "71": 71,
        "81": 81,
        "99": 99
      }],
      95: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var macrotask = _dereq_(136).set;

        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = _dereq_(48)(process) == 'process';

        module.exports = function () {
          var head, last, notify;

          var flush = function flush() {
            var parent, fn;
            if (isNode && (parent = process.domain)) parent.exit();

            while (head) {
              fn = head.fn;
              head = head.next;

              try {
                fn();
              } catch (e) {
                if (head) notify();else last = undefined;
                throw e;
              }
            }

            last = undefined;
            if (parent) parent.enter();
          }; // Node.js


          if (isNode) {
            notify = function notify() {
              process.nextTick(flush);
            }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

          } else if (Observer && !(global.navigator && global.navigator.standalone)) {
            var toggle = true;
            var node = document.createTextNode('');
            new Observer(flush).observe(node, {
              characterData: true
            }); // eslint-disable-line no-new

            notify = function notify() {
              node.data = toggle = !toggle;
            }; // environments with maybe non-completely correct, but existent Promise

          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined);

            notify = function notify() {
              promise.then(flush);
            }; // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout

          } else {
            notify = function notify() {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }

          return function (fn) {
            var task = {
              fn: fn,
              next: undefined
            };
            if (last) last.next = task;

            if (!head) {
              head = task;
              notify();
            }

            last = task;
          };
        };
      }, {
        "136": 136,
        "48": 48,
        "70": 70
      }],
      96: [function (_dereq_, module, exports) {

        var aFunction = _dereq_(33);

        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }

        module.exports.f = function (C) {
          return new PromiseCapability(C);
        };
      }, {
        "33": 33
      }],
      97: [function (_dereq_, module, exports) {

        var DESCRIPTORS = _dereq_(58);

        var getKeys = _dereq_(107);

        var gOPS = _dereq_(104);

        var pIE = _dereq_(108);

        var toObject = _dereq_(142);

        var IObject = _dereq_(77);

        var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

        module.exports = !$assign || _dereq_(64)(function () {
          var A = {};
          var B = {}; // eslint-disable-next-line no-undef

          var S = Symbol();
          var K = 'abcdefghijklmnopqrst';
          A[S] = 7;
          K.split('').forEach(function (k) {
            B[k] = k;
          });
          return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target);
          var aLen = arguments.length;
          var index = 1;
          var getSymbols = gOPS.f;
          var isEnum = pIE.f;

          while (aLen > index) {
            var S = IObject(arguments[index++]);
            var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
            var length = keys.length;
            var j = 0;
            var key;

            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
            }
          }

          return T;
        } : $assign;
      }, {
        "104": 104,
        "107": 107,
        "108": 108,
        "142": 142,
        "58": 58,
        "64": 64,
        "77": 77
      }],
      98: [function (_dereq_, module, exports) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = _dereq_(38);

        var dPs = _dereq_(100);

        var enumBugKeys = _dereq_(60);

        var IE_PROTO = _dereq_(125)('IE_PROTO');

        var Empty = function Empty() {
          /* empty */
        };

        var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

        var _createDict = function createDict() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = _dereq_(59)('iframe');

          var i = enumBugKeys.length;
          var lt = '<';
          var gt = '>';
          var iframeDocument;
          iframe.style.display = 'none';

          _dereq_(73).appendChild(iframe);

          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);

          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          _createDict = iframeDocument.F;

          while (i--) {
            delete _createDict[PROTOTYPE][enumBugKeys[i]];
          }

          return _createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
          var result;

          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

            result[IE_PROTO] = O;
          } else result = _createDict();

          return Properties === undefined ? result : dPs(result, Properties);
        };
      }, {
        "100": 100,
        "125": 125,
        "38": 38,
        "59": 59,
        "60": 60,
        "73": 73
      }],
      99: [function (_dereq_, module, exports) {
        arguments[4][29][0].apply(exports, arguments);
      }, {
        "143": 143,
        "29": 29,
        "38": 38,
        "58": 58,
        "74": 74
      }],
      100: [function (_dereq_, module, exports) {
        var dP = _dereq_(99);

        var anObject = _dereq_(38);

        var getKeys = _dereq_(107);

        module.exports = _dereq_(58) ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;

          while (length > i) {
            dP.f(O, P = keys[i++], Properties[P]);
          }

          return O;
        };
      }, {
        "107": 107,
        "38": 38,
        "58": 58,
        "99": 99
      }],
      101: [function (_dereq_, module, exports) {
        var pIE = _dereq_(108);

        var createDesc = _dereq_(116);

        var toIObject = _dereq_(140);

        var toPrimitive = _dereq_(143);

        var has = _dereq_(71);

        var IE8_DOM_DEFINE = _dereq_(74);

        var gOPD = Object.getOwnPropertyDescriptor;
        exports.f = _dereq_(58) ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE) try {
            return gOPD(O, P);
          } catch (e) {
            /* empty */
          }
          if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
      }, {
        "108": 108,
        "116": 116,
        "140": 140,
        "143": 143,
        "58": 58,
        "71": 71,
        "74": 74
      }],
      102: [function (_dereq_, module, exports) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = _dereq_(140);

        var gOPN = _dereq_(103).f;

        var toString = {}.toString;
        var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function getWindowNames(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };
      }, {
        "103": 103,
        "140": 140
      }],
      103: [function (_dereq_, module, exports) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = _dereq_(106);

        var hiddenKeys = _dereq_(60).concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };
      }, {
        "106": 106,
        "60": 60
      }],
      104: [function (_dereq_, module, exports) {
        exports.f = Object.getOwnPropertySymbols;
      }, {}],
      105: [function (_dereq_, module, exports) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = _dereq_(71);

        var toObject = _dereq_(142);

        var IE_PROTO = _dereq_(125)('IE_PROTO');

        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];

          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }

          return O instanceof Object ? ObjectProto : null;
        };
      }, {
        "125": 125,
        "142": 142,
        "71": 71
      }],
      106: [function (_dereq_, module, exports) {
        var has = _dereq_(71);

        var toIObject = _dereq_(140);

        var arrayIndexOf = _dereq_(41)(false);

        var IE_PROTO = _dereq_(125)('IE_PROTO');

        module.exports = function (object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;

          for (key in O) {
            if (key != IE_PROTO) has(O, key) && result.push(key);
          } // Don't enum bug & hidden keys


          while (names.length > i) {
            if (has(O, key = names[i++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          }

          return result;
        };
      }, {
        "125": 125,
        "140": 140,
        "41": 41,
        "71": 71
      }],
      107: [function (_dereq_, module, exports) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = _dereq_(106);

        var enumBugKeys = _dereq_(60);

        module.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
      }, {
        "106": 106,
        "60": 60
      }],
      108: [function (_dereq_, module, exports) {
        exports.f = {}.propertyIsEnumerable;
      }, {}],
      109: [function (_dereq_, module, exports) {
        // most Object methods by ES6 should accept primitives
        var $export = _dereq_(62);

        var core = _dereq_(52);

        var fails = _dereq_(64);

        module.exports = function (KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export($export.S + $export.F * fails(function () {
            fn(1);
          }), 'Object', exp);
        };
      }, {
        "52": 52,
        "62": 62,
        "64": 64
      }],
      110: [function (_dereq_, module, exports) {
        var DESCRIPTORS = _dereq_(58);

        var getKeys = _dereq_(107);

        var toIObject = _dereq_(140);

        var isEnum = _dereq_(108).f;

        module.exports = function (isEntries) {
          return function (it) {
            var O = toIObject(it);
            var keys = getKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;

            while (length > i) {
              key = keys[i++];

              if (!DESCRIPTORS || isEnum.call(O, key)) {
                result.push(isEntries ? [key, O[key]] : O[key]);
              }
            }

            return result;
          };
        };
      }, {
        "107": 107,
        "108": 108,
        "140": 140,
        "58": 58
      }],
      111: [function (_dereq_, module, exports) {
        // all object keys, includes non-enumerable and symbols
        var gOPN = _dereq_(103);

        var gOPS = _dereq_(104);

        var anObject = _dereq_(38);

        var Reflect = _dereq_(70).Reflect;

        module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
          var keys = gOPN.f(anObject(it));
          var getSymbols = gOPS.f;
          return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };
      }, {
        "103": 103,
        "104": 104,
        "38": 38,
        "70": 70
      }],
      112: [function (_dereq_, module, exports) {
        var $parseFloat = _dereq_(70).parseFloat;

        var $trim = _dereq_(134).trim;

        module.exports = 1 / $parseFloat(_dereq_(135) + '-0') !== -Infinity ? function parseFloat(str) {
          var string = $trim(String(str), 3);
          var result = $parseFloat(string);
          return result === 0 && string.charAt(0) == '-' ? -0 : result;
        } : $parseFloat;
      }, {
        "134": 134,
        "135": 135,
        "70": 70
      }],
      113: [function (_dereq_, module, exports) {
        var $parseInt = _dereq_(70).parseInt;

        var $trim = _dereq_(134).trim;

        var ws = _dereq_(135);

        var hex = /^[-+]?0[xX]/;
        module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
          var string = $trim(String(str), 3);
          return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
        } : $parseInt;
      }, {
        "134": 134,
        "135": 135,
        "70": 70
      }],
      114: [function (_dereq_, module, exports) {
        module.exports = function (exec) {
          try {
            return {
              e: false,
              v: exec()
            };
          } catch (e) {
            return {
              e: true,
              v: e
            };
          }
        };
      }, {}],
      115: [function (_dereq_, module, exports) {
        var anObject = _dereq_(38);

        var isObject = _dereq_(81);

        var newPromiseCapability = _dereq_(96);

        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      }, {
        "38": 38,
        "81": 81,
        "96": 96
      }],
      116: [function (_dereq_, module, exports) {
        arguments[4][30][0].apply(exports, arguments);
      }, {
        "30": 30
      }],
      117: [function (_dereq_, module, exports) {
        var redefine = _dereq_(118);

        module.exports = function (target, src, safe) {
          for (var key in src) {
            redefine(target, key, src[key], safe);
          }

          return target;
        };
      }, {
        "118": 118
      }],
      118: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var hide = _dereq_(72);

        var has = _dereq_(71);

        var SRC = _dereq_(147)('src');

        var $toString = _dereq_(69);

        var TO_STRING = 'toString';
        var TPL = ('' + $toString).split(TO_STRING);

        _dereq_(52).inspectSource = function (it) {
          return $toString.call(it);
        };

        (module.exports = function (O, key, val, safe) {
          var isFunction = typeof val == 'function';
          if (isFunction) has(val, 'name') || hide(val, 'name', key);
          if (O[key] === val) return;
          if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == 'function' && this[SRC] || $toString.call(this);
        });
      }, {
        "147": 147,
        "52": 52,
        "69": 69,
        "70": 70,
        "71": 71,
        "72": 72
      }],
      119: [function (_dereq_, module, exports) {

        var classof = _dereq_(47);

        var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec

        module.exports = function (R, S) {
          var exec = R.exec;

          if (typeof exec === 'function') {
            var result = exec.call(R, S);

            if (_typeof(result) !== 'object') {
              throw new TypeError('RegExp exec method returned something other than an Object or null');
            }

            return result;
          }

          if (classof(R) !== 'RegExp') {
            throw new TypeError('RegExp#exec called on incompatible receiver');
          }

          return builtinExec.call(R, S);
        };
      }, {
        "47": 47
      }],
      120: [function (_dereq_, module, exports) {

        var regexpFlags = _dereq_(66);

        var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.

        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var LAST_INDEX = 'lastIndex';

        var UPDATES_LAST_INDEX_WRONG = function () {
          var re1 = /a/,
              re2 = /b*/g;
          nativeExec.call(re1, 'a');
          nativeExec.call(re2, 'a');
          return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
        }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;

            if (NPCG_INCLUDED) {
              reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
            }

            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
            match = nativeExec.call(re, str);

            if (UPDATES_LAST_INDEX_WRONG && match) {
              re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
            }

            if (NPCG_INCLUDED && match && match.length > 1) {
              // Fix browsers whose `exec` methods don't consistently return `undefined`
              // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
              // eslint-disable-next-line no-loop-func
              nativeReplace.call(match[0], reCopy, function () {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
            }

            return match;
          };
        }

        module.exports = patchedExec;
      }, {
        "66": 66
      }],
      121: [function (_dereq_, module, exports) {
        // 7.2.9 SameValue(x, y)
        module.exports = Object.is || function is(x, y) {
          // eslint-disable-next-line no-self-compare
          return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };
      }, {}],
      122: [function (_dereq_, module, exports) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.

        /* eslint-disable no-proto */
        var isObject = _dereq_(81);

        var anObject = _dereq_(38);

        var check = function check(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };

        module.exports = {
          set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          function (test, buggy, set) {
            try {
              set = _dereq_(54)(Function.call, _dereq_(101).f(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) {
              buggy = true;
            }

            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;else set(O, proto);
              return O;
            };
          }({}, false) : undefined),
          check: check
        };
      }, {
        "101": 101,
        "38": 38,
        "54": 54,
        "81": 81
      }],
      123: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var dP = _dereq_(99);

        var DESCRIPTORS = _dereq_(58);

        var SPECIES = _dereq_(152)('species');

        module.exports = function (KEY) {
          var C = global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        };
      }, {
        "152": 152,
        "58": 58,
        "70": 70,
        "99": 99
      }],
      124: [function (_dereq_, module, exports) {
        var def = _dereq_(99).f;

        var has = _dereq_(71);

        var TAG = _dereq_(152)('toStringTag');

        module.exports = function (it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
            configurable: true,
            value: tag
          });
        };
      }, {
        "152": 152,
        "71": 71,
        "99": 99
      }],
      125: [function (_dereq_, module, exports) {
        var shared = _dereq_(126)('keys');

        var uid = _dereq_(147);

        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };
      }, {
        "126": 126,
        "147": 147
      }],
      126: [function (_dereq_, module, exports) {
        var core = _dereq_(52);

        var global = _dereq_(70);

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: core.version,
          mode: _dereq_(89) ? 'pure' : 'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
        });
      }, {
        "52": 52,
        "70": 70,
        "89": 89
      }],
      127: [function (_dereq_, module, exports) {
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = _dereq_(38);

        var aFunction = _dereq_(33);

        var SPECIES = _dereq_(152)('species');

        module.exports = function (O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };
      }, {
        "152": 152,
        "33": 33,
        "38": 38
      }],
      128: [function (_dereq_, module, exports) {

        var fails = _dereq_(64);

        module.exports = function (method, arg) {
          return !!method && fails(function () {
            // eslint-disable-next-line no-useless-call
            arg ? method.call(null, function () {
              /* empty */
            }, 1) : method.call(null);
          });
        };
      }, {
        "64": 64
      }],
      129: [function (_dereq_, module, exports) {
        var toInteger = _dereq_(139);

        var defined = _dereq_(57); // true  -> String#at
        // false -> String#codePointAt


        module.exports = function (TO_STRING) {
          return function (that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
          };
        };
      }, {
        "139": 139,
        "57": 57
      }],
      130: [function (_dereq_, module, exports) {
        // helper for String#{startsWith, endsWith, includes}
        var isRegExp = _dereq_(82);

        var defined = _dereq_(57);

        module.exports = function (that, searchString, NAME) {
          if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
          return String(defined(that));
        };
      }, {
        "57": 57,
        "82": 82
      }],
      131: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var fails = _dereq_(64);

        var defined = _dereq_(57);

        var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

        var createHTML = function createHTML(string, tag, attribute, value) {
          var S = String(defined(string));
          var p1 = '<' + tag;
          if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
          return p1 + '>' + S + '</' + tag + '>';
        };

        module.exports = function (NAME, exec) {
          var O = {};
          O[NAME] = exec(createHTML);
          $export($export.P + $export.F * fails(function () {
            var test = ''[NAME]('"');
            return test !== test.toLowerCase() || test.split('"').length > 3;
          }), 'String', O);
        };
      }, {
        "57": 57,
        "62": 62,
        "64": 64
      }],
      132: [function (_dereq_, module, exports) {
        // https://github.com/tc39/proposal-string-pad-start-end
        var toLength = _dereq_(141);

        var repeat = _dereq_(133);

        var defined = _dereq_(57);

        module.exports = function (that, maxLength, fillString, left) {
          var S = String(defined(that));
          var stringLength = S.length;
          var fillStr = fillString === undefined ? ' ' : String(fillString);
          var intMaxLength = toLength(maxLength);
          if (intMaxLength <= stringLength || fillStr == '') return S;
          var fillLen = intMaxLength - stringLength;
          var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
          return left ? stringFiller + S : S + stringFiller;
        };
      }, {
        "133": 133,
        "141": 141,
        "57": 57
      }],
      133: [function (_dereq_, module, exports) {

        var toInteger = _dereq_(139);

        var defined = _dereq_(57);

        module.exports = function repeat(count) {
          var str = String(defined(this));
          var res = '';
          var n = toInteger(count);
          if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

          for (; n > 0; (n >>>= 1) && (str += str)) {
            if (n & 1) res += str;
          }

          return res;
        };
      }, {
        "139": 139,
        "57": 57
      }],
      134: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var defined = _dereq_(57);

        var fails = _dereq_(64);

        var spaces = _dereq_(135);

        var space = '[' + spaces + ']';
        var non = "\u200B\x85";
        var ltrim = RegExp('^' + space + space + '*');
        var rtrim = RegExp(space + space + '*$');

        var exporter = function exporter(KEY, exec, ALIAS) {
          var exp = {};
          var FORCE = fails(function () {
            return !!spaces[KEY]() || non[KEY]() != non;
          });
          var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
          if (ALIAS) exp[ALIAS] = fn;
          $export($export.P + $export.F * FORCE, 'String', exp);
        }; // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim


        var trim = exporter.trim = function (string, TYPE) {
          string = String(defined(string));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };

        module.exports = exporter;
      }, {
        "135": 135,
        "57": 57,
        "62": 62,
        "64": 64
      }],
      135: [function (_dereq_, module, exports) {
        module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      }, {}],
      136: [function (_dereq_, module, exports) {
        var ctx = _dereq_(54);

        var invoke = _dereq_(76);

        var html = _dereq_(73);

        var cel = _dereq_(59);

        var global = _dereq_(70);

        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;

        var run = function run() {
          var id = +this; // eslint-disable-next-line no-prototype-builtins

          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };

        var listener = function listener(event) {
          run.call(event.data);
        }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i = 1;

            while (arguments.length > i) {
              args.push(arguments[i++]);
            }

            queue[++counter] = function () {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == 'function' ? fn : Function(fn), args);
            };

            defer(counter);
            return counter;
          };

          clearTask = function clearImmediate(id) {
            delete queue[id];
          }; // Node.js 0.8-


          if (_dereq_(48)(process) == 'process') {
            defer = function defer(id) {
              process.nextTick(ctx(run, id, 1));
            }; // Sphere (JS game engine) Dispatch API

          } else if (Dispatch && Dispatch.now) {
            defer = function defer(id) {
              Dispatch.now(ctx(run, id, 1));
            }; // Browsers with MessageChannel, includes WebWorkers

          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
            defer = function defer(id) {
              global.postMessage(id + '', '*');
            };

            global.addEventListener('message', listener, false); // IE8-
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function defer(id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            }; // Rest old browsers

          } else {
            defer = function defer(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }

        module.exports = {
          set: setTask,
          clear: clearTask
        };
      }, {
        "48": 48,
        "54": 54,
        "59": 59,
        "70": 70,
        "73": 73,
        "76": 76
      }],
      137: [function (_dereq_, module, exports) {
        var toInteger = _dereq_(139);

        var max = Math.max;
        var min = Math.min;

        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
      }, {
        "139": 139
      }],
      138: [function (_dereq_, module, exports) {
        // https://tc39.github.io/ecma262/#sec-toindex
        var toInteger = _dereq_(139);

        var toLength = _dereq_(141);

        module.exports = function (it) {
          if (it === undefined) return 0;
          var number = toInteger(it);
          var length = toLength(number);
          if (number !== length) throw RangeError('Wrong length!');
          return length;
        };
      }, {
        "139": 139,
        "141": 141
      }],
      139: [function (_dereq_, module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;

        module.exports = function (it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
      }, {}],
      140: [function (_dereq_, module, exports) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = _dereq_(77);

        var defined = _dereq_(57);

        module.exports = function (it) {
          return IObject(defined(it));
        };
      }, {
        "57": 57,
        "77": 77
      }],
      141: [function (_dereq_, module, exports) {
        // 7.1.15 ToLength
        var toInteger = _dereq_(139);

        var min = Math.min;

        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };
      }, {
        "139": 139
      }],
      142: [function (_dereq_, module, exports) {
        // 7.1.13 ToObject(argument)
        var defined = _dereq_(57);

        module.exports = function (it) {
          return Object(defined(it));
        };
      }, {
        "57": 57
      }],
      143: [function (_dereq_, module, exports) {
        arguments[4][31][0].apply(exports, arguments);
      }, {
        "31": 31,
        "81": 81
      }],
      144: [function (_dereq_, module, exports) {

        if (_dereq_(58)) {
          var LIBRARY = _dereq_(89);

          var global = _dereq_(70);

          var fails = _dereq_(64);

          var $export = _dereq_(62);

          var $typed = _dereq_(146);

          var $buffer = _dereq_(145);

          var ctx = _dereq_(54);

          var anInstance = _dereq_(37);

          var propertyDesc = _dereq_(116);

          var hide = _dereq_(72);

          var redefineAll = _dereq_(117);

          var toInteger = _dereq_(139);

          var toLength = _dereq_(141);

          var toIndex = _dereq_(138);

          var toAbsoluteIndex = _dereq_(137);

          var toPrimitive = _dereq_(143);

          var has = _dereq_(71);

          var classof = _dereq_(47);

          var isObject = _dereq_(81);

          var toObject = _dereq_(142);

          var isArrayIter = _dereq_(78);

          var create = _dereq_(98);

          var getPrototypeOf = _dereq_(105);

          var gOPN = _dereq_(103).f;

          var getIterFn = _dereq_(153);

          var uid = _dereq_(147);

          var wks = _dereq_(152);

          var createArrayMethod = _dereq_(42);

          var createArrayIncludes = _dereq_(41);

          var speciesConstructor = _dereq_(127);

          var ArrayIterators = _dereq_(164);

          var Iterators = _dereq_(88);

          var $iterDetect = _dereq_(86);

          var setSpecies = _dereq_(123);

          var arrayFill = _dereq_(40);

          var arrayCopyWithin = _dereq_(39);

          var $DP = _dereq_(99);

          var $GOPD = _dereq_(101);

          var dP = $DP.f;
          var gOPD = $GOPD.f;
          var RangeError = global.RangeError;
          var TypeError = global.TypeError;
          var Uint8Array = global.Uint8Array;
          var ARRAY_BUFFER = 'ArrayBuffer';
          var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
          var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
          var PROTOTYPE = 'prototype';
          var ArrayProto = Array[PROTOTYPE];
          var $ArrayBuffer = $buffer.ArrayBuffer;
          var $DataView = $buffer.DataView;
          var arrayForEach = createArrayMethod(0);
          var arrayFilter = createArrayMethod(2);
          var arraySome = createArrayMethod(3);
          var arrayEvery = createArrayMethod(4);
          var arrayFind = createArrayMethod(5);
          var arrayFindIndex = createArrayMethod(6);
          var arrayIncludes = createArrayIncludes(true);
          var arrayIndexOf = createArrayIncludes(false);
          var arrayValues = ArrayIterators.values;
          var arrayKeys = ArrayIterators.keys;
          var arrayEntries = ArrayIterators.entries;
          var arrayLastIndexOf = ArrayProto.lastIndexOf;
          var arrayReduce = ArrayProto.reduce;
          var arrayReduceRight = ArrayProto.reduceRight;
          var arrayJoin = ArrayProto.join;
          var arraySort = ArrayProto.sort;
          var arraySlice = ArrayProto.slice;
          var arrayToString = ArrayProto.toString;
          var arrayToLocaleString = ArrayProto.toLocaleString;
          var ITERATOR = wks('iterator');
          var TAG = wks('toStringTag');
          var TYPED_CONSTRUCTOR = uid('typed_constructor');
          var DEF_CONSTRUCTOR = uid('def_constructor');
          var ALL_CONSTRUCTORS = $typed.CONSTR;
          var TYPED_ARRAY = $typed.TYPED;
          var VIEW = $typed.VIEW;
          var WRONG_LENGTH = 'Wrong length!';
          var $map = createArrayMethod(1, function (O, length) {
            return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
          });
          var LITTLE_ENDIAN = fails(function () {
            // eslint-disable-next-line no-undef
            return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
          });
          var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
            new Uint8Array(1).set({});
          });

          var toOffset = function toOffset(it, BYTES) {
            var offset = toInteger(it);
            if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
            return offset;
          };

          var validate = function validate(it) {
            if (isObject(it) && TYPED_ARRAY in it) return it;
            throw TypeError(it + ' is not a typed array!');
          };

          var allocate = function allocate(C, length) {
            if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
              throw TypeError('It is not a typed array constructor!');
            }

            return new C(length);
          };

          var speciesFromList = function speciesFromList(O, list) {
            return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
          };

          var fromList = function fromList(C, list) {
            var index = 0;
            var length = list.length;
            var result = allocate(C, length);

            while (length > index) {
              result[index] = list[index++];
            }

            return result;
          };

          var addGetter = function addGetter(it, key, internal) {
            dP(it, key, {
              get: function get() {
                return this._d[internal];
              }
            });
          };

          var $from = function from(source
          /* , mapfn, thisArg */
          ) {
            var O = toObject(source);
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iterFn = getIterFn(O);
            var i, length, values, result, step, iterator;

            if (iterFn != undefined && !isArrayIter(iterFn)) {
              for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                values.push(step.value);
              }

              O = values;
            }

            if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

            for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
              result[i] = mapping ? mapfn(O[i], i) : O[i];
            }

            return result;
          };

          var $of = function of()
          /* ...items */
          {
            var index = 0;
            var length = arguments.length;
            var result = allocate(this, length);

            while (length > index) {
              result[index] = arguments[index++];
            }

            return result;
          }; // iOS Safari 6.x fails here


          var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
            arrayToLocaleString.call(new Uint8Array(1));
          });

          var $toLocaleString = function toLocaleString() {
            return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
          };

          var proto = {
            copyWithin: function copyWithin(target, start
            /* , end */
            ) {
              return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
            },
            every: function every(callbackfn
            /* , thisArg */
            ) {
              return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            fill: function fill(value
            /* , start, end */
            ) {
              // eslint-disable-line no-unused-vars
              return arrayFill.apply(validate(this), arguments);
            },
            filter: function filter(callbackfn
            /* , thisArg */
            ) {
              return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
            },
            find: function find(predicate
            /* , thisArg */
            ) {
              return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
            },
            findIndex: function findIndex(predicate
            /* , thisArg */
            ) {
              return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
            },
            forEach: function forEach(callbackfn
            /* , thisArg */
            ) {
              arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            indexOf: function indexOf(searchElement
            /* , fromIndex */
            ) {
              return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
            },
            includes: function includes(searchElement
            /* , fromIndex */
            ) {
              return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
            },
            join: function join(separator) {
              // eslint-disable-line no-unused-vars
              return arrayJoin.apply(validate(this), arguments);
            },
            lastIndexOf: function lastIndexOf(searchElement
            /* , fromIndex */
            ) {
              // eslint-disable-line no-unused-vars
              return arrayLastIndexOf.apply(validate(this), arguments);
            },
            map: function map(mapfn
            /* , thisArg */
            ) {
              return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            reduce: function reduce(callbackfn
            /* , initialValue */
            ) {
              // eslint-disable-line no-unused-vars
              return arrayReduce.apply(validate(this), arguments);
            },
            reduceRight: function reduceRight(callbackfn
            /* , initialValue */
            ) {
              // eslint-disable-line no-unused-vars
              return arrayReduceRight.apply(validate(this), arguments);
            },
            reverse: function reverse() {
              var that = this;
              var length = validate(that).length;
              var middle = Math.floor(length / 2);
              var index = 0;
              var value;

              while (index < middle) {
                value = that[index];
                that[index++] = that[--length];
                that[length] = value;
              }

              return that;
            },
            some: function some(callbackfn
            /* , thisArg */
            ) {
              return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            sort: function sort(comparefn) {
              return arraySort.call(validate(this), comparefn);
            },
            subarray: function subarray(begin, end) {
              var O = validate(this);
              var length = O.length;
              var $begin = toAbsoluteIndex(begin, length);
              return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
            }
          };

          var $slice = function slice(start, end) {
            return speciesFromList(this, arraySlice.call(validate(this), start, end));
          };

          var $set = function set(arrayLike
          /* , offset */
          ) {
            validate(this);
            var offset = toOffset(arguments[1], 1);
            var length = this.length;
            var src = toObject(arrayLike);
            var len = toLength(src.length);
            var index = 0;
            if (len + offset > length) throw RangeError(WRONG_LENGTH);

            while (index < len) {
              this[offset + index] = src[index++];
            }
          };

          var $iterators = {
            entries: function entries() {
              return arrayEntries.call(validate(this));
            },
            keys: function keys() {
              return arrayKeys.call(validate(this));
            },
            values: function values() {
              return arrayValues.call(validate(this));
            }
          };

          var isTAIndex = function isTAIndex(target, key) {
            return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
          };

          var $getDesc = function getOwnPropertyDescriptor(target, key) {
            return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
          };

          var $setDesc = function defineProperty(target, key, desc) {
            if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
            && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
              target[key] = desc.value;
              return target;
            }

            return dP(target, key, desc);
          };

          if (!ALL_CONSTRUCTORS) {
            $GOPD.f = $getDesc;
            $DP.f = $setDesc;
          }

          $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
            getOwnPropertyDescriptor: $getDesc,
            defineProperty: $setDesc
          });

          if (fails(function () {
            arrayToString.call({});
          })) {
            arrayToString = arrayToLocaleString = function toString() {
              return arrayJoin.call(this);
            };
          }

          var $TypedArrayPrototype$ = redefineAll({}, proto);
          redefineAll($TypedArrayPrototype$, $iterators);
          hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
          redefineAll($TypedArrayPrototype$, {
            slice: $slice,
            set: $set,
            constructor: function constructor() {
              /* noop */
            },
            toString: arrayToString,
            toLocaleString: $toLocaleString
          });
          addGetter($TypedArrayPrototype$, 'buffer', 'b');
          addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
          addGetter($TypedArrayPrototype$, 'byteLength', 'l');
          addGetter($TypedArrayPrototype$, 'length', 'e');
          dP($TypedArrayPrototype$, TAG, {
            get: function get() {
              return this[TYPED_ARRAY];
            }
          }); // eslint-disable-next-line max-statements

          module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
            CLAMPED = !!CLAMPED;
            var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
            var GETTER = 'get' + KEY;
            var SETTER = 'set' + KEY;
            var TypedArray = global[NAME];
            var Base = TypedArray || {};
            var TAC = TypedArray && getPrototypeOf(TypedArray);
            var FORCED = !TypedArray || !$typed.ABV;
            var O = {};
            var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

            var getter = function getter(that, index) {
              var data = that._d;
              return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
            };

            var setter = function setter(that, index, value) {
              var data = that._d;
              if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
              data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
            };

            var addElement = function addElement(that, index) {
              dP(that, index, {
                get: function get() {
                  return getter(this, index);
                },
                set: function set(value) {
                  return setter(this, index, value);
                },
                enumerable: true
              });
            };

            if (FORCED) {
              TypedArray = wrapper(function (that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME, '_d');
                var index = 0;
                var offset = 0;
                var buffer, byteLength, length, klass;

                if (!isObject(data)) {
                  length = toIndex(data);
                  byteLength = length * BYTES;
                  buffer = new $ArrayBuffer(byteLength);
                } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                  buffer = data;
                  offset = toOffset($offset, BYTES);
                  var $len = data.byteLength;

                  if ($length === undefined) {
                    if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                    byteLength = $len - offset;
                    if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                  } else {
                    byteLength = toLength($length) * BYTES;
                    if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                  }

                  length = byteLength / BYTES;
                } else if (TYPED_ARRAY in data) {
                  return fromList(TypedArray, data);
                } else {
                  return $from.call(TypedArray, data);
                }

                hide(that, '_d', {
                  b: buffer,
                  o: offset,
                  l: byteLength,
                  e: length,
                  v: new $DataView(buffer)
                });

                while (index < length) {
                  addElement(that, index++);
                }
              });
              TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
              hide(TypedArrayPrototype, 'constructor', TypedArray);
            } else if (!fails(function () {
              TypedArray(1);
            }) || !fails(function () {
              new TypedArray(-1); // eslint-disable-line no-new
            }) || !$iterDetect(function (iter) {
              new TypedArray(); // eslint-disable-line no-new

              new TypedArray(null); // eslint-disable-line no-new

              new TypedArray(1.5); // eslint-disable-line no-new

              new TypedArray(iter); // eslint-disable-line no-new
            }, true)) {
              TypedArray = wrapper(function (that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME);
                var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
                // https://github.com/websockets/ws/pull/645

                if (!isObject(data)) return new Base(toIndex(data));

                if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                  return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
                }

                if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                return $from.call(TypedArray, data);
              });
              arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
                if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
              });
              TypedArray[PROTOTYPE] = TypedArrayPrototype;
              if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
            }

            var $nativeIterator = TypedArrayPrototype[ITERATOR];
            var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
            var $iterator = $iterators.values;
            hide(TypedArray, TYPED_CONSTRUCTOR, true);
            hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
            hide(TypedArrayPrototype, VIEW, true);
            hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

            if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
              dP(TypedArrayPrototype, TAG, {
                get: function get() {
                  return NAME;
                }
              });
            }

            O[NAME] = TypedArray;
            $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
            $export($export.S, NAME, {
              BYTES_PER_ELEMENT: BYTES
            });
            $export($export.S + $export.F * fails(function () {
              Base.of.call(TypedArray, 1);
            }), NAME, {
              from: $from,
              of: $of
            });
            if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
            $export($export.P, NAME, proto);
            setSpecies(NAME);
            $export($export.P + $export.F * FORCED_SET, NAME, {
              set: $set
            });
            $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
            if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
            $export($export.P + $export.F * fails(function () {
              new TypedArray(1).slice();
            }), NAME, {
              slice: $slice
            });
            $export($export.P + $export.F * (fails(function () {
              return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
            }) || !fails(function () {
              TypedArrayPrototype.toLocaleString.call([1, 2]);
            })), NAME, {
              toLocaleString: $toLocaleString
            });
            Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
            if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
          };
        } else module.exports = function () {
          /* empty */
        };
      }, {
        "101": 101,
        "103": 103,
        "105": 105,
        "116": 116,
        "117": 117,
        "123": 123,
        "127": 127,
        "137": 137,
        "138": 138,
        "139": 139,
        "141": 141,
        "142": 142,
        "143": 143,
        "145": 145,
        "146": 146,
        "147": 147,
        "152": 152,
        "153": 153,
        "164": 164,
        "37": 37,
        "39": 39,
        "40": 40,
        "41": 41,
        "42": 42,
        "47": 47,
        "54": 54,
        "58": 58,
        "62": 62,
        "64": 64,
        "70": 70,
        "71": 71,
        "72": 72,
        "78": 78,
        "81": 81,
        "86": 86,
        "88": 88,
        "89": 89,
        "98": 98,
        "99": 99
      }],
      145: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var DESCRIPTORS = _dereq_(58);

        var LIBRARY = _dereq_(89);

        var $typed = _dereq_(146);

        var hide = _dereq_(72);

        var redefineAll = _dereq_(117);

        var fails = _dereq_(64);

        var anInstance = _dereq_(37);

        var toInteger = _dereq_(139);

        var toLength = _dereq_(141);

        var toIndex = _dereq_(138);

        var gOPN = _dereq_(103).f;

        var dP = _dereq_(99).f;

        var arrayFill = _dereq_(40);

        var setToStringTag = _dereq_(124);

        var ARRAY_BUFFER = 'ArrayBuffer';
        var DATA_VIEW = 'DataView';
        var PROTOTYPE = 'prototype';
        var WRONG_LENGTH = 'Wrong length!';
        var WRONG_INDEX = 'Wrong index!';
        var $ArrayBuffer = global[ARRAY_BUFFER];
        var $DataView = global[DATA_VIEW];
        var Math = global.Math;
        var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

        var Infinity = global.Infinity;
        var BaseBuffer = $ArrayBuffer;
        var abs = Math.abs;
        var pow = Math.pow;
        var floor = Math.floor;
        var log = Math.log;
        var LN2 = Math.LN2;
        var BUFFER = 'buffer';
        var BYTE_LENGTH = 'byteLength';
        var BYTE_OFFSET = 'byteOffset';
        var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
        var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
        var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

        function packIEEE754(value, mLen, nBytes) {
          var buffer = new Array(nBytes);
          var eLen = nBytes * 8 - mLen - 1;
          var eMax = (1 << eLen) - 1;
          var eBias = eMax >> 1;
          var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
          var i = 0;
          var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
          var e, m, c;
          value = abs(value); // eslint-disable-next-line no-self-compare

          if (value != value || value === Infinity) {
            // eslint-disable-next-line no-self-compare
            m = value != value ? 1 : 0;
            e = eMax;
          } else {
            e = floor(log(value) / LN2);

            if (value * (c = pow(2, -e)) < 1) {
              e--;
              c *= 2;
            }

            if (e + eBias >= 1) {
              value += rt / c;
            } else {
              value += rt * pow(2, 1 - eBias);
            }

            if (value * c >= 2) {
              e++;
              c /= 2;
            }

            if (e + eBias >= eMax) {
              m = 0;
              e = eMax;
            } else if (e + eBias >= 1) {
              m = (value * c - 1) * pow(2, mLen);
              e = e + eBias;
            } else {
              m = value * pow(2, eBias - 1) * pow(2, mLen);
              e = 0;
            }
          }

          for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
          }

          e = e << mLen | m;
          eLen += mLen;

          for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
          }

          buffer[--i] |= s * 128;
          return buffer;
        }

        function unpackIEEE754(buffer, mLen, nBytes) {
          var eLen = nBytes * 8 - mLen - 1;
          var eMax = (1 << eLen) - 1;
          var eBias = eMax >> 1;
          var nBits = eLen - 7;
          var i = nBytes - 1;
          var s = buffer[i--];
          var e = s & 127;
          var m;
          s >>= 7;

          for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
          }

          m = e & (1 << -nBits) - 1;
          e >>= -nBits;
          nBits += mLen;

          for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
          }

          if (e === 0) {
            e = 1 - eBias;
          } else if (e === eMax) {
            return m ? NaN : s ? -Infinity : Infinity;
          } else {
            m = m + pow(2, mLen);
            e = e - eBias;
          }

          return (s ? -1 : 1) * m * pow(2, e - mLen);
        }

        function unpackI32(bytes) {
          return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
        }

        function packI8(it) {
          return [it & 0xff];
        }

        function packI16(it) {
          return [it & 0xff, it >> 8 & 0xff];
        }

        function packI32(it) {
          return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
        }

        function packF64(it) {
          return packIEEE754(it, 52, 8);
        }

        function packF32(it) {
          return packIEEE754(it, 23, 4);
        }

        function addGetter(C, key, internal) {
          dP(C[PROTOTYPE], key, {
            get: function get() {
              return this[internal];
            }
          });
        }

        function get(view, bytes, index, isLittleEndian) {
          var numIndex = +index;
          var intIndex = toIndex(numIndex);
          if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
          var store = view[$BUFFER]._b;
          var start = intIndex + view[$OFFSET];
          var pack = store.slice(start, start + bytes);
          return isLittleEndian ? pack : pack.reverse();
        }

        function set(view, bytes, index, conversion, value, isLittleEndian) {
          var numIndex = +index;
          var intIndex = toIndex(numIndex);
          if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
          var store = view[$BUFFER]._b;
          var start = intIndex + view[$OFFSET];
          var pack = conversion(+value);

          for (var i = 0; i < bytes; i++) {
            store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
          }
        }

        if (!$typed.ABV) {
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
            var byteLength = toIndex(length);
            this._b = arrayFill.call(new Array(byteLength), 0);
            this[$LENGTH] = byteLength;
          };

          $DataView = function DataView(buffer, byteOffset, byteLength) {
            anInstance(this, $DataView, DATA_VIEW);
            anInstance(buffer, $ArrayBuffer, DATA_VIEW);
            var bufferLength = buffer[$LENGTH];
            var offset = toInteger(byteOffset);
            if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
            byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
            if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
            this[$BUFFER] = buffer;
            this[$OFFSET] = offset;
            this[$LENGTH] = byteLength;
          };

          if (DESCRIPTORS) {
            addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
            addGetter($DataView, BUFFER, '_b');
            addGetter($DataView, BYTE_LENGTH, '_l');
            addGetter($DataView, BYTE_OFFSET, '_o');
          }

          redefineAll($DataView[PROTOTYPE], {
            getInt8: function getInt8(byteOffset) {
              return get(this, 1, byteOffset)[0] << 24 >> 24;
            },
            getUint8: function getUint8(byteOffset) {
              return get(this, 1, byteOffset)[0];
            },
            getInt16: function getInt16(byteOffset
            /* , littleEndian */
            ) {
              var bytes = get(this, 2, byteOffset, arguments[1]);
              return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
            },
            getUint16: function getUint16(byteOffset
            /* , littleEndian */
            ) {
              var bytes = get(this, 2, byteOffset, arguments[1]);
              return bytes[1] << 8 | bytes[0];
            },
            getInt32: function getInt32(byteOffset
            /* , littleEndian */
            ) {
              return unpackI32(get(this, 4, byteOffset, arguments[1]));
            },
            getUint32: function getUint32(byteOffset
            /* , littleEndian */
            ) {
              return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
            },
            getFloat32: function getFloat32(byteOffset
            /* , littleEndian */
            ) {
              return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
            },
            getFloat64: function getFloat64(byteOffset
            /* , littleEndian */
            ) {
              return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
            },
            setInt8: function setInt8(byteOffset, value) {
              set(this, 1, byteOffset, packI8, value);
            },
            setUint8: function setUint8(byteOffset, value) {
              set(this, 1, byteOffset, packI8, value);
            },
            setInt16: function setInt16(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 2, byteOffset, packI16, value, arguments[2]);
            },
            setUint16: function setUint16(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 2, byteOffset, packI16, value, arguments[2]);
            },
            setInt32: function setInt32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packI32, value, arguments[2]);
            },
            setUint32: function setUint32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packI32, value, arguments[2]);
            },
            setFloat32: function setFloat32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packF32, value, arguments[2]);
            },
            setFloat64: function setFloat64(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 8, byteOffset, packF64, value, arguments[2]);
            }
          });
        } else {
          if (!fails(function () {
            $ArrayBuffer(1);
          }) || !fails(function () {
            new $ArrayBuffer(-1); // eslint-disable-line no-new
          }) || fails(function () {
            new $ArrayBuffer(); // eslint-disable-line no-new

            new $ArrayBuffer(1.5); // eslint-disable-line no-new

            new $ArrayBuffer(NaN); // eslint-disable-line no-new

            return $ArrayBuffer.name != ARRAY_BUFFER;
          })) {
            $ArrayBuffer = function ArrayBuffer(length) {
              anInstance(this, $ArrayBuffer);
              return new BaseBuffer(toIndex(length));
            };

            var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

            for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
              if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
            }

            if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
          } // iOS Safari 7.x bug


          var view = new $DataView(new $ArrayBuffer(2));
          var $setInt8 = $DataView[PROTOTYPE].setInt8;
          view.setInt8(0, 2147483648);
          view.setInt8(1, 2147483649);
          if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
            setInt8: function setInt8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            }
          }, true);
        }

        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        hide($DataView[PROTOTYPE], $typed.VIEW, true);
        exports[ARRAY_BUFFER] = $ArrayBuffer;
        exports[DATA_VIEW] = $DataView;
      }, {
        "103": 103,
        "117": 117,
        "124": 124,
        "138": 138,
        "139": 139,
        "141": 141,
        "146": 146,
        "37": 37,
        "40": 40,
        "58": 58,
        "64": 64,
        "70": 70,
        "72": 72,
        "89": 89,
        "99": 99
      }],
      146: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var hide = _dereq_(72);

        var uid = _dereq_(147);

        var TYPED = uid('typed_array');
        var VIEW = uid('view');
        var ABV = !!(global.ArrayBuffer && global.DataView);
        var CONSTR = ABV;
        var i = 0;
        var l = 9;
        var Typed;
        var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

        while (i < l) {
          if (Typed = global[TypedArrayConstructors[i++]]) {
            hide(Typed.prototype, TYPED, true);
            hide(Typed.prototype, VIEW, true);
          } else CONSTR = false;
        }

        module.exports = {
          ABV: ABV,
          CONSTR: CONSTR,
          TYPED: TYPED,
          VIEW: VIEW
        };
      }, {
        "147": 147,
        "70": 70,
        "72": 72
      }],
      147: [function (_dereq_, module, exports) {
        var id = 0;
        var px = Math.random();

        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };
      }, {}],
      148: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var navigator = global.navigator;
        module.exports = navigator && navigator.userAgent || '';
      }, {
        "70": 70
      }],
      149: [function (_dereq_, module, exports) {
        var isObject = _dereq_(81);

        module.exports = function (it, TYPE) {
          if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
          return it;
        };
      }, {
        "81": 81
      }],
      150: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var core = _dereq_(52);

        var LIBRARY = _dereq_(89);

        var wksExt = _dereq_(151);

        var defineProperty = _dereq_(99).f;

        module.exports = function (name) {
          var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
          if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
            value: wksExt.f(name)
          });
        };
      }, {
        "151": 151,
        "52": 52,
        "70": 70,
        "89": 89,
        "99": 99
      }],
      151: [function (_dereq_, module, exports) {
        exports.f = _dereq_(152);
      }, {
        "152": 152
      }],
      152: [function (_dereq_, module, exports) {
        var store = _dereq_(126)('wks');

        var uid = _dereq_(147);

        var _Symbol = _dereq_(70).Symbol;

        var USE_SYMBOL = typeof _Symbol == 'function';

        var $exports = module.exports = function (name) {
          return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;
      }, {
        "126": 126,
        "147": 147,
        "70": 70
      }],
      153: [function (_dereq_, module, exports) {
        var classof = _dereq_(47);

        var ITERATOR = _dereq_(152)('iterator');

        var Iterators = _dereq_(88);

        module.exports = _dereq_(52).getIteratorMethod = function (it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };
      }, {
        "152": 152,
        "47": 47,
        "52": 52,
        "88": 88
      }],
      154: [function (_dereq_, module, exports) {
        // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        var $export = _dereq_(62);

        $export($export.P, 'Array', {
          copyWithin: _dereq_(39)
        });

        _dereq_(35)('copyWithin');
      }, {
        "35": 35,
        "39": 39,
        "62": 62
      }],
      155: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $every = _dereq_(42)(4);

        $export($export.P + $export.F * !_dereq_(128)([].every, true), 'Array', {
          // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
          every: function every(callbackfn
          /* , thisArg */
          ) {
            return $every(this, callbackfn, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "42": 42,
        "62": 62
      }],
      156: [function (_dereq_, module, exports) {
        // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        var $export = _dereq_(62);

        $export($export.P, 'Array', {
          fill: _dereq_(40)
        });

        _dereq_(35)('fill');
      }, {
        "35": 35,
        "40": 40,
        "62": 62
      }],
      157: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $filter = _dereq_(42)(2);

        $export($export.P + $export.F * !_dereq_(128)([].filter, true), 'Array', {
          // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
          filter: function filter(callbackfn
          /* , thisArg */
          ) {
            return $filter(this, callbackfn, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "42": 42,
        "62": 62
      }],
      158: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $find = _dereq_(42)(6);

        var KEY = 'findIndex';
        var forced = true; // Shouldn't skip holes

        if (KEY in []) Array(1)[KEY](function () {
          forced = false;
        });
        $export($export.P + $export.F * forced, 'Array', {
          findIndex: function findIndex(callbackfn
          /* , that = undefined */
          ) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        _dereq_(35)(KEY);
      }, {
        "35": 35,
        "42": 42,
        "62": 62
      }],
      159: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $find = _dereq_(42)(5);

        var KEY = 'find';
        var forced = true; // Shouldn't skip holes

        if (KEY in []) Array(1)[KEY](function () {
          forced = false;
        });
        $export($export.P + $export.F * forced, 'Array', {
          find: function find(callbackfn
          /* , that = undefined */
          ) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        _dereq_(35)(KEY);
      }, {
        "35": 35,
        "42": 42,
        "62": 62
      }],
      160: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $forEach = _dereq_(42)(0);

        var STRICT = _dereq_(128)([].forEach, true);

        $export($export.P + $export.F * !STRICT, 'Array', {
          // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
          forEach: function forEach(callbackfn
          /* , thisArg */
          ) {
            return $forEach(this, callbackfn, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "42": 42,
        "62": 62
      }],
      161: [function (_dereq_, module, exports) {

        var ctx = _dereq_(54);

        var $export = _dereq_(62);

        var toObject = _dereq_(142);

        var call = _dereq_(83);

        var isArrayIter = _dereq_(78);

        var toLength = _dereq_(141);

        var createProperty = _dereq_(53);

        var getIterFn = _dereq_(153);

        $export($export.S + $export.F * !_dereq_(86)(function (iter) {
        }), 'Array', {
          // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
          from: function from(arrayLike
          /* , mapfn = undefined, thisArg = undefined */
          ) {
            var O = toObject(arrayLike);
            var C = typeof this == 'function' ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

            if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
              for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
              }
            } else {
              length = toLength(O.length);

              for (result = new C(length); length > index; index++) {
                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
              }
            }

            result.length = index;
            return result;
          }
        });
      }, {
        "141": 141,
        "142": 142,
        "153": 153,
        "53": 53,
        "54": 54,
        "62": 62,
        "78": 78,
        "83": 83,
        "86": 86
      }],
      162: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $indexOf = _dereq_(41)(false);

        var $native = [].indexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
        $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(128)($native)), 'Array', {
          // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
          indexOf: function indexOf(searchElement
          /* , fromIndex = 0 */
          ) {
            return NEGATIVE_ZERO // convert -0 to +0
            ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "41": 41,
        "62": 62
      }],
      163: [function (_dereq_, module, exports) {
        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = _dereq_(62);

        $export($export.S, 'Array', {
          isArray: _dereq_(79)
        });
      }, {
        "62": 62,
        "79": 79
      }],
      164: [function (_dereq_, module, exports) {

        var addToUnscopables = _dereq_(35);

        var step = _dereq_(87);

        var Iterators = _dereq_(88);

        var toIObject = _dereq_(140); // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()


        module.exports = _dereq_(85)(Array, 'Array', function (iterated, kind) {
          this._t = toIObject(iterated); // target

          this._i = 0; // next index

          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;

          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }

          if (kind == 'keys') return step(0, index);
          if (kind == 'values') return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

        Iterators.Arguments = Iterators.Array;
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');
      }, {
        "140": 140,
        "35": 35,
        "85": 85,
        "87": 87,
        "88": 88
      }],
      165: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toIObject = _dereq_(140);

        var arrayJoin = [].join; // fallback for not array-like strings

        $export($export.P + $export.F * (_dereq_(77) != Object || !_dereq_(128)(arrayJoin)), 'Array', {
          join: function join(separator) {
            return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
          }
        });
      }, {
        "128": 128,
        "140": 140,
        "62": 62,
        "77": 77
      }],
      166: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toIObject = _dereq_(140);

        var toInteger = _dereq_(139);

        var toLength = _dereq_(141);

        var $native = [].lastIndexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
        $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(128)($native)), 'Array', {
          // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
          lastIndexOf: function lastIndexOf(searchElement
          /* , fromIndex = @[*-1] */
          ) {
            // convert -0 to +0
            if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
            var O = toIObject(this);
            var length = toLength(O.length);
            var index = length - 1;
            if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
            if (index < 0) index = length + index;

            for (; index >= 0; index--) {
              if (index in O) if (O[index] === searchElement) return index || 0;
            }

            return -1;
          }
        });
      }, {
        "128": 128,
        "139": 139,
        "140": 140,
        "141": 141,
        "62": 62
      }],
      167: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $map = _dereq_(42)(1);

        $export($export.P + $export.F * !_dereq_(128)([].map, true), 'Array', {
          // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
          map: function map(callbackfn
          /* , thisArg */
          ) {
            return $map(this, callbackfn, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "42": 42,
        "62": 62
      }],
      168: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var createProperty = _dereq_(53); // WebKit Array.of isn't generic


        $export($export.S + $export.F * _dereq_(64)(function () {
          function F() {
            /* empty */
          }

          return !(Array.of.call(F) instanceof F);
        }), 'Array', {
          // 22.1.2.3 Array.of( ...items)
          of: function of()
          /* ...args */
          {
            var index = 0;
            var aLen = arguments.length;
            var result = new (typeof this == 'function' ? this : Array)(aLen);

            while (aLen > index) {
              createProperty(result, index, arguments[index++]);
            }

            result.length = aLen;
            return result;
          }
        });
      }, {
        "53": 53,
        "62": 62,
        "64": 64
      }],
      169: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $reduce = _dereq_(43);

        $export($export.P + $export.F * !_dereq_(128)([].reduceRight, true), 'Array', {
          // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
          reduceRight: function reduceRight(callbackfn
          /* , initialValue */
          ) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], true);
          }
        });
      }, {
        "128": 128,
        "43": 43,
        "62": 62
      }],
      170: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $reduce = _dereq_(43);

        $export($export.P + $export.F * !_dereq_(128)([].reduce, true), 'Array', {
          // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
          reduce: function reduce(callbackfn
          /* , initialValue */
          ) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], false);
          }
        });
      }, {
        "128": 128,
        "43": 43,
        "62": 62
      }],
      171: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var html = _dereq_(73);

        var cof = _dereq_(48);

        var toAbsoluteIndex = _dereq_(137);

        var toLength = _dereq_(141);

        var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

        $export($export.P + $export.F * _dereq_(64)(function () {
          if (html) arraySlice.call(html);
        }), 'Array', {
          slice: function slice(begin, end) {
            var len = toLength(this.length);
            var klass = cof(this);
            end = end === undefined ? len : end;
            if (klass == 'Array') return arraySlice.call(this, begin, end);
            var start = toAbsoluteIndex(begin, len);
            var upTo = toAbsoluteIndex(end, len);
            var size = toLength(upTo - start);
            var cloned = new Array(size);
            var i = 0;

            for (; i < size; i++) {
              cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
            }

            return cloned;
          }
        });
      }, {
        "137": 137,
        "141": 141,
        "48": 48,
        "62": 62,
        "64": 64,
        "73": 73
      }],
      172: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $some = _dereq_(42)(3);

        $export($export.P + $export.F * !_dereq_(128)([].some, true), 'Array', {
          // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
          some: function some(callbackfn
          /* , thisArg */
          ) {
            return $some(this, callbackfn, arguments[1]);
          }
        });
      }, {
        "128": 128,
        "42": 42,
        "62": 62
      }],
      173: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var aFunction = _dereq_(33);

        var toObject = _dereq_(142);

        var fails = _dereq_(64);

        var $sort = [].sort;
        var test = [1, 2, 3];
        $export($export.P + $export.F * (fails(function () {
          // IE8-
          test.sort(undefined);
        }) || !fails(function () {
          // V8 bug
          test.sort(null); // Old WebKit
        }) || !_dereq_(128)($sort)), 'Array', {
          // 22.1.3.25 Array.prototype.sort(comparefn)
          sort: function sort(comparefn) {
            return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
          }
        });
      }, {
        "128": 128,
        "142": 142,
        "33": 33,
        "62": 62,
        "64": 64
      }],
      174: [function (_dereq_, module, exports) {
        _dereq_(123)('Array');
      }, {
        "123": 123
      }],
      175: [function (_dereq_, module, exports) {
        // 20.3.3.1 / 15.9.4.4 Date.now()
        var $export = _dereq_(62);

        $export($export.S, 'Date', {
          now: function now() {
            return new Date().getTime();
          }
        });
      }, {
        "62": 62
      }],
      176: [function (_dereq_, module, exports) {
        // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var $export = _dereq_(62);

        var toISOString = _dereq_(55); // PhantomJS / old WebKit has a broken implementations


        $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
          toISOString: toISOString
        });
      }, {
        "55": 55,
        "62": 62
      }],
      177: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toObject = _dereq_(142);

        var toPrimitive = _dereq_(143);

        $export($export.P + $export.F * _dereq_(64)(function () {
          return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
            toISOString: function toISOString() {
              return 1;
            }
          }) !== 1;
        }), 'Date', {
          // eslint-disable-next-line no-unused-vars
          toJSON: function toJSON(key) {
            var O = toObject(this);
            var pv = toPrimitive(O);
            return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
          }
        });
      }, {
        "142": 142,
        "143": 143,
        "62": 62,
        "64": 64
      }],
      178: [function (_dereq_, module, exports) {
        var TO_PRIMITIVE = _dereq_(152)('toPrimitive');

        var proto = Date.prototype;
        if (!(TO_PRIMITIVE in proto)) _dereq_(72)(proto, TO_PRIMITIVE, _dereq_(56));
      }, {
        "152": 152,
        "56": 56,
        "72": 72
      }],
      179: [function (_dereq_, module, exports) {
        var DateProto = Date.prototype;
        var INVALID_DATE = 'Invalid Date';
        var TO_STRING = 'toString';
        var $toString = DateProto[TO_STRING];
        var getTime = DateProto.getTime;

        if (new Date(NaN) + '' != INVALID_DATE) {
          _dereq_(118)(DateProto, TO_STRING, function toString() {
            var value = getTime.call(this); // eslint-disable-next-line no-self-compare

            return value === value ? $toString.call(this) : INVALID_DATE;
          });
        }
      }, {
        "118": 118
      }],
      180: [function (_dereq_, module, exports) {
        // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
        var $export = _dereq_(62);

        $export($export.P, 'Function', {
          bind: _dereq_(46)
        });
      }, {
        "46": 46,
        "62": 62
      }],
      181: [function (_dereq_, module, exports) {

        var isObject = _dereq_(81);

        var getPrototypeOf = _dereq_(105);

        var HAS_INSTANCE = _dereq_(152)('hasInstance');

        var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

        if (!(HAS_INSTANCE in FunctionProto)) _dereq_(99).f(FunctionProto, HAS_INSTANCE, {
          value: function value(O) {
            if (typeof this != 'function' || !isObject(O)) return false;
            if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

            while (O = getPrototypeOf(O)) {
              if (this.prototype === O) return true;
            }

            return false;
          }
        });
      }, {
        "105": 105,
        "152": 152,
        "81": 81,
        "99": 99
      }],
      182: [function (_dereq_, module, exports) {
        var dP = _dereq_(99).f;

        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name'; // 19.2.4.2 name

        NAME in FProto || _dereq_(58) && dP(FProto, NAME, {
          configurable: true,
          get: function get() {
            try {
              return ('' + this).match(nameRE)[1];
            } catch (e) {
              return '';
            }
          }
        });
      }, {
        "58": 58,
        "99": 99
      }],
      183: [function (_dereq_, module, exports) {

        var strong = _dereq_(49);

        var validate = _dereq_(149);

        var MAP = 'Map'; // 23.1 Map Objects

        module.exports = _dereq_(51)(MAP, function (get) {
          return function Map() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        }, {
          // 23.1.3.6 Map.prototype.get(key)
          get: function get(key) {
            var entry = strong.getEntry(validate(this, MAP), key);
            return entry && entry.v;
          },
          // 23.1.3.9 Map.prototype.set(key, value)
          set: function set(key, value) {
            return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
          }
        }, strong, true);
      }, {
        "149": 149,
        "49": 49,
        "51": 51
      }],
      184: [function (_dereq_, module, exports) {
        // 20.2.2.3 Math.acosh(x)
        var $export = _dereq_(62);

        var log1p = _dereq_(92);

        var sqrt = Math.sqrt;
        var $acosh = Math.acosh;
        $export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
        && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
        && $acosh(Infinity) == Infinity), 'Math', {
          acosh: function acosh(x) {
            return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
          }
        });
      }, {
        "62": 62,
        "92": 92
      }],
      185: [function (_dereq_, module, exports) {
        // 20.2.2.5 Math.asinh(x)
        var $export = _dereq_(62);

        var $asinh = Math.asinh;

        function asinh(x) {
          return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
        } // Tor Browser bug: Math.asinh(0) -> -0


        $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
          asinh: asinh
        });
      }, {
        "62": 62
      }],
      186: [function (_dereq_, module, exports) {
        // 20.2.2.7 Math.atanh(x)
        var $export = _dereq_(62);

        var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

        $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
          atanh: function atanh(x) {
            return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
          }
        });
      }, {
        "62": 62
      }],
      187: [function (_dereq_, module, exports) {
        // 20.2.2.9 Math.cbrt(x)
        var $export = _dereq_(62);

        var sign = _dereq_(93);

        $export($export.S, 'Math', {
          cbrt: function cbrt(x) {
            return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
          }
        });
      }, {
        "62": 62,
        "93": 93
      }],
      188: [function (_dereq_, module, exports) {
        // 20.2.2.11 Math.clz32(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          clz32: function clz32(x) {
            return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
          }
        });
      }, {
        "62": 62
      }],
      189: [function (_dereq_, module, exports) {
        // 20.2.2.12 Math.cosh(x)
        var $export = _dereq_(62);

        var exp = Math.exp;
        $export($export.S, 'Math', {
          cosh: function cosh(x) {
            return (exp(x = +x) + exp(-x)) / 2;
          }
        });
      }, {
        "62": 62
      }],
      190: [function (_dereq_, module, exports) {
        // 20.2.2.14 Math.expm1(x)
        var $export = _dereq_(62);

        var $expm1 = _dereq_(90);

        $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
          expm1: $expm1
        });
      }, {
        "62": 62,
        "90": 90
      }],
      191: [function (_dereq_, module, exports) {
        // 20.2.2.16 Math.fround(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          fround: _dereq_(91)
        });
      }, {
        "62": 62,
        "91": 91
      }],
      192: [function (_dereq_, module, exports) {
        // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
        var $export = _dereq_(62);

        var abs = Math.abs;
        $export($export.S, 'Math', {
          hypot: function hypot(value1, value2) {
            // eslint-disable-line no-unused-vars
            var sum = 0;
            var i = 0;
            var aLen = arguments.length;
            var larg = 0;
            var arg, div;

            while (i < aLen) {
              arg = abs(arguments[i++]);

              if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
              } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
              } else sum += arg;
            }

            return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
          }
        });
      }, {
        "62": 62
      }],
      193: [function (_dereq_, module, exports) {
        // 20.2.2.18 Math.imul(x, y)
        var $export = _dereq_(62);

        var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

        $export($export.S + $export.F * _dereq_(64)(function () {
          return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
        }), 'Math', {
          imul: function imul(x, y) {
            var UINT16 = 0xffff;
            var xn = +x;
            var yn = +y;
            var xl = UINT16 & xn;
            var yl = UINT16 & yn;
            return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
          }
        });
      }, {
        "62": 62,
        "64": 64
      }],
      194: [function (_dereq_, module, exports) {
        // 20.2.2.21 Math.log10(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          log10: function log10(x) {
            return Math.log(x) * Math.LOG10E;
          }
        });
      }, {
        "62": 62
      }],
      195: [function (_dereq_, module, exports) {
        // 20.2.2.20 Math.log1p(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          log1p: _dereq_(92)
        });
      }, {
        "62": 62,
        "92": 92
      }],
      196: [function (_dereq_, module, exports) {
        // 20.2.2.22 Math.log2(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          log2: function log2(x) {
            return Math.log(x) / Math.LN2;
          }
        });
      }, {
        "62": 62
      }],
      197: [function (_dereq_, module, exports) {
        // 20.2.2.28 Math.sign(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          sign: _dereq_(93)
        });
      }, {
        "62": 62,
        "93": 93
      }],
      198: [function (_dereq_, module, exports) {
        // 20.2.2.30 Math.sinh(x)
        var $export = _dereq_(62);

        var expm1 = _dereq_(90);

        var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

        $export($export.S + $export.F * _dereq_(64)(function () {
          return !Math.sinh(-2e-17) != -2e-17;
        }), 'Math', {
          sinh: function sinh(x) {
            return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
          }
        });
      }, {
        "62": 62,
        "64": 64,
        "90": 90
      }],
      199: [function (_dereq_, module, exports) {
        // 20.2.2.33 Math.tanh(x)
        var $export = _dereq_(62);

        var expm1 = _dereq_(90);

        var exp = Math.exp;
        $export($export.S, 'Math', {
          tanh: function tanh(x) {
            var a = expm1(x = +x);
            var b = expm1(-x);
            return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
          }
        });
      }, {
        "62": 62,
        "90": 90
      }],
      200: [function (_dereq_, module, exports) {
        // 20.2.2.34 Math.trunc(x)
        var $export = _dereq_(62);

        $export($export.S, 'Math', {
          trunc: function trunc(it) {
            return (it > 0 ? Math.floor : Math.ceil)(it);
          }
        });
      }, {
        "62": 62
      }],
      201: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var has = _dereq_(71);

        var cof = _dereq_(48);

        var inheritIfRequired = _dereq_(75);

        var toPrimitive = _dereq_(143);

        var fails = _dereq_(64);

        var gOPN = _dereq_(103).f;

        var gOPD = _dereq_(101).f;

        var dP = _dereq_(99).f;

        var $trim = _dereq_(134).trim;

        var NUMBER = 'Number';
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype; // Opera ~12 has broken Object#toString

        var BROKEN_COF = cof(_dereq_(98)(proto)) == NUMBER;
        var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

        var toNumber = function toNumber(argument) {
          var it = toPrimitive(argument, false);

          if (typeof it == 'string' && it.length > 2) {
            it = TRIM ? it.trim() : $trim(it, 3);
            var first = it.charCodeAt(0);
            var third, radix, maxCode;

            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break;
                // fast equal /^0b[01]+$/i

                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break;
                // fast equal /^0o[0-7]+$/i

                default:
                  return +it;
              }

              for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols

                if (code < 48 || code > maxCode) return NaN;
              }

              return parseInt(digits, radix);
            }
          }

          return +it;
        };

        if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
          $Number = function Number(value) {
            var it = arguments.length < 1 ? 0 : value;
            var that = this;
            return that instanceof $Number // check on 1..constructor(foo) case
            && (BROKEN_COF ? fails(function () {
              proto.valueOf.call(that);
            }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
          };

          for (var keys = _dereq_(58) ? gOPN(Base) : ( // ES3:
          'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
          'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
            if (has(Base, key = keys[j]) && !has($Number, key)) {
              dP($Number, key, gOPD(Base, key));
            }
          }

          $Number.prototype = proto;
          proto.constructor = $Number;

          _dereq_(118)(global, NUMBER, $Number);
        }
      }, {
        "101": 101,
        "103": 103,
        "118": 118,
        "134": 134,
        "143": 143,
        "48": 48,
        "58": 58,
        "64": 64,
        "70": 70,
        "71": 71,
        "75": 75,
        "98": 98,
        "99": 99
      }],
      202: [function (_dereq_, module, exports) {
        // 20.1.2.1 Number.EPSILON
        var $export = _dereq_(62);

        $export($export.S, 'Number', {
          EPSILON: Math.pow(2, -52)
        });
      }, {
        "62": 62
      }],
      203: [function (_dereq_, module, exports) {
        // 20.1.2.2 Number.isFinite(number)
        var $export = _dereq_(62);

        var _isFinite = _dereq_(70).isFinite;

        $export($export.S, 'Number', {
          isFinite: function isFinite(it) {
            return typeof it == 'number' && _isFinite(it);
          }
        });
      }, {
        "62": 62,
        "70": 70
      }],
      204: [function (_dereq_, module, exports) {
        // 20.1.2.3 Number.isInteger(number)
        var $export = _dereq_(62);

        $export($export.S, 'Number', {
          isInteger: _dereq_(80)
        });
      }, {
        "62": 62,
        "80": 80
      }],
      205: [function (_dereq_, module, exports) {
        // 20.1.2.4 Number.isNaN(number)
        var $export = _dereq_(62);

        $export($export.S, 'Number', {
          isNaN: function isNaN(number) {
            // eslint-disable-next-line no-self-compare
            return number != number;
          }
        });
      }, {
        "62": 62
      }],
      206: [function (_dereq_, module, exports) {
        // 20.1.2.5 Number.isSafeInteger(number)
        var $export = _dereq_(62);

        var isInteger = _dereq_(80);

        var abs = Math.abs;
        $export($export.S, 'Number', {
          isSafeInteger: function isSafeInteger(number) {
            return isInteger(number) && abs(number) <= 0x1fffffffffffff;
          }
        });
      }, {
        "62": 62,
        "80": 80
      }],
      207: [function (_dereq_, module, exports) {
        // 20.1.2.6 Number.MAX_SAFE_INTEGER
        var $export = _dereq_(62);

        $export($export.S, 'Number', {
          MAX_SAFE_INTEGER: 0x1fffffffffffff
        });
      }, {
        "62": 62
      }],
      208: [function (_dereq_, module, exports) {
        // 20.1.2.10 Number.MIN_SAFE_INTEGER
        var $export = _dereq_(62);

        $export($export.S, 'Number', {
          MIN_SAFE_INTEGER: -0x1fffffffffffff
        });
      }, {
        "62": 62
      }],
      209: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var $parseFloat = _dereq_(112); // 20.1.2.12 Number.parseFloat(string)


        $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
          parseFloat: $parseFloat
        });
      }, {
        "112": 112,
        "62": 62
      }],
      210: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var $parseInt = _dereq_(113); // 20.1.2.13 Number.parseInt(string, radix)


        $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
          parseInt: $parseInt
        });
      }, {
        "113": 113,
        "62": 62
      }],
      211: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toInteger = _dereq_(139);

        var aNumberValue = _dereq_(34);

        var repeat = _dereq_(133);

        var $toFixed = 1.0.toFixed;
        var floor = Math.floor;
        var data = [0, 0, 0, 0, 0, 0];
        var ERROR = 'Number.toFixed: incorrect invocation!';
        var ZERO = '0';

        var multiply = function multiply(n, c) {
          var i = -1;
          var c2 = c;

          while (++i < 6) {
            c2 += n * data[i];
            data[i] = c2 % 1e7;
            c2 = floor(c2 / 1e7);
          }
        };

        var divide = function divide(n) {
          var i = 6;
          var c = 0;

          while (--i >= 0) {
            c += data[i];
            data[i] = floor(c / n);
            c = c % n * 1e7;
          }
        };

        var numToString = function numToString() {
          var i = 6;
          var s = '';

          while (--i >= 0) {
            if (s !== '' || i === 0 || data[i] !== 0) {
              var t = String(data[i]);
              s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
            }
          }

          return s;
        };

        var pow = function pow(x, n, acc) {
          return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        };

        var log = function log(x) {
          var n = 0;
          var x2 = x;

          while (x2 >= 4096) {
            n += 12;
            x2 /= 4096;
          }

          while (x2 >= 2) {
            n += 1;
            x2 /= 2;
          }

          return n;
        };

        $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_dereq_(64)(function () {
          // V8 ~ Android 4.3-
          $toFixed.call({});
        })), 'Number', {
          toFixed: function toFixed(fractionDigits) {
            var x = aNumberValue(this, ERROR);
            var f = toInteger(fractionDigits);
            var s = '';
            var m = ZERO;
            var e, z, j, k;
            if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

            if (x != x) return 'NaN';
            if (x <= -1e21 || x >= 1e21) return String(x);

            if (x < 0) {
              s = '-';
              x = -x;
            }

            if (x > 1e-21) {
              e = log(x * pow(2, 69, 1)) - 69;
              z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
              z *= 0x10000000000000;
              e = 52 - e;

              if (e > 0) {
                multiply(0, z);
                j = f;

                while (j >= 7) {
                  multiply(1e7, 0);
                  j -= 7;
                }

                multiply(pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                  divide(1 << 23);
                  j -= 23;
                }

                divide(1 << j);
                multiply(1, 1);
                divide(2);
                m = numToString();
              } else {
                multiply(0, z);
                multiply(1 << -e, 0);
                m = numToString() + repeat.call(ZERO, f);
              }
            }

            if (f > 0) {
              k = m.length;
              m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
            } else {
              m = s + m;
            }

            return m;
          }
        });
      }, {
        "133": 133,
        "139": 139,
        "34": 34,
        "62": 62,
        "64": 64
      }],
      212: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $fails = _dereq_(64);

        var aNumberValue = _dereq_(34);

        var $toPrecision = 1.0.toPrecision;
        $export($export.P + $export.F * ($fails(function () {
          // IE7-
          return $toPrecision.call(1, undefined) !== '1';
        }) || !$fails(function () {
          // V8 ~ Android 4.3-
          $toPrecision.call({});
        })), 'Number', {
          toPrecision: function toPrecision(precision) {
            var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
            return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
          }
        });
      }, {
        "34": 34,
        "62": 62,
        "64": 64
      }],
      213: [function (_dereq_, module, exports) {
        // 19.1.3.1 Object.assign(target, source)
        var $export = _dereq_(62);

        $export($export.S + $export.F, 'Object', {
          assign: _dereq_(97)
        });
      }, {
        "62": 62,
        "97": 97
      }],
      214: [function (_dereq_, module, exports) {
        var $export = _dereq_(62); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


        $export($export.S, 'Object', {
          create: _dereq_(98)
        });
      }, {
        "62": 62,
        "98": 98
      }],
      215: [function (_dereq_, module, exports) {
        var $export = _dereq_(62); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


        $export($export.S + $export.F * !_dereq_(58), 'Object', {
          defineProperties: _dereq_(100)
        });
      }, {
        "100": 100,
        "58": 58,
        "62": 62
      }],
      216: [function (_dereq_, module, exports) {
        var $export = _dereq_(62); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


        $export($export.S + $export.F * !_dereq_(58), 'Object', {
          defineProperty: _dereq_(99).f
        });
      }, {
        "58": 58,
        "62": 62,
        "99": 99
      }],
      217: [function (_dereq_, module, exports) {
        // 19.1.2.5 Object.freeze(O)
        var isObject = _dereq_(81);

        var meta = _dereq_(94).onFreeze;

        _dereq_(109)('freeze', function ($freeze) {
          return function freeze(it) {
            return $freeze && isObject(it) ? $freeze(meta(it)) : it;
          };
        });
      }, {
        "109": 109,
        "81": 81,
        "94": 94
      }],
      218: [function (_dereq_, module, exports) {
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = _dereq_(140);

        var $getOwnPropertyDescriptor = _dereq_(101).f;

        _dereq_(109)('getOwnPropertyDescriptor', function () {
          return function getOwnPropertyDescriptor(it, key) {
            return $getOwnPropertyDescriptor(toIObject(it), key);
          };
        });
      }, {
        "101": 101,
        "109": 109,
        "140": 140
      }],
      219: [function (_dereq_, module, exports) {
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        _dereq_(109)('getOwnPropertyNames', function () {
          return _dereq_(102).f;
        });
      }, {
        "102": 102,
        "109": 109
      }],
      220: [function (_dereq_, module, exports) {
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = _dereq_(142);

        var $getPrototypeOf = _dereq_(105);

        _dereq_(109)('getPrototypeOf', function () {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        });
      }, {
        "105": 105,
        "109": 109,
        "142": 142
      }],
      221: [function (_dereq_, module, exports) {
        // 19.1.2.11 Object.isExtensible(O)
        var isObject = _dereq_(81);

        _dereq_(109)('isExtensible', function ($isExtensible) {
          return function isExtensible(it) {
            return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
          };
        });
      }, {
        "109": 109,
        "81": 81
      }],
      222: [function (_dereq_, module, exports) {
        // 19.1.2.12 Object.isFrozen(O)
        var isObject = _dereq_(81);

        _dereq_(109)('isFrozen', function ($isFrozen) {
          return function isFrozen(it) {
            return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
          };
        });
      }, {
        "109": 109,
        "81": 81
      }],
      223: [function (_dereq_, module, exports) {
        // 19.1.2.13 Object.isSealed(O)
        var isObject = _dereq_(81);

        _dereq_(109)('isSealed', function ($isSealed) {
          return function isSealed(it) {
            return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
          };
        });
      }, {
        "109": 109,
        "81": 81
      }],
      224: [function (_dereq_, module, exports) {
        // 19.1.3.10 Object.is(value1, value2)
        var $export = _dereq_(62);

        $export($export.S, 'Object', {
          is: _dereq_(121)
        });
      }, {
        "121": 121,
        "62": 62
      }],
      225: [function (_dereq_, module, exports) {
        // 19.1.2.14 Object.keys(O)
        var toObject = _dereq_(142);

        var $keys = _dereq_(107);

        _dereq_(109)('keys', function () {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });
      }, {
        "107": 107,
        "109": 109,
        "142": 142
      }],
      226: [function (_dereq_, module, exports) {
        // 19.1.2.15 Object.preventExtensions(O)
        var isObject = _dereq_(81);

        var meta = _dereq_(94).onFreeze;

        _dereq_(109)('preventExtensions', function ($preventExtensions) {
          return function preventExtensions(it) {
            return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
          };
        });
      }, {
        "109": 109,
        "81": 81,
        "94": 94
      }],
      227: [function (_dereq_, module, exports) {
        // 19.1.2.17 Object.seal(O)
        var isObject = _dereq_(81);

        var meta = _dereq_(94).onFreeze;

        _dereq_(109)('seal', function ($seal) {
          return function seal(it) {
            return $seal && isObject(it) ? $seal(meta(it)) : it;
          };
        });
      }, {
        "109": 109,
        "81": 81,
        "94": 94
      }],
      228: [function (_dereq_, module, exports) {
        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = _dereq_(62);

        $export($export.S, 'Object', {
          setPrototypeOf: _dereq_(122).set
        });
      }, {
        "122": 122,
        "62": 62
      }],
      229: [function (_dereq_, module, exports) {

        var classof = _dereq_(47);

        var test = {};
        test[_dereq_(152)('toStringTag')] = 'z';

        if (test + '' != '[object z]') {
          _dereq_(118)(Object.prototype, 'toString', function toString() {
            return '[object ' + classof(this) + ']';
          }, true);
        }
      }, {
        "118": 118,
        "152": 152,
        "47": 47
      }],
      230: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var $parseFloat = _dereq_(112); // 18.2.4 parseFloat(string)


        $export($export.G + $export.F * (parseFloat != $parseFloat), {
          parseFloat: $parseFloat
        });
      }, {
        "112": 112,
        "62": 62
      }],
      231: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var $parseInt = _dereq_(113); // 18.2.5 parseInt(string, radix)


        $export($export.G + $export.F * (parseInt != $parseInt), {
          parseInt: $parseInt
        });
      }, {
        "113": 113,
        "62": 62
      }],
      232: [function (_dereq_, module, exports) {

        var LIBRARY = _dereq_(89);

        var global = _dereq_(70);

        var ctx = _dereq_(54);

        var classof = _dereq_(47);

        var $export = _dereq_(62);

        var isObject = _dereq_(81);

        var aFunction = _dereq_(33);

        var anInstance = _dereq_(37);

        var forOf = _dereq_(68);

        var speciesConstructor = _dereq_(127);

        var task = _dereq_(136).set;

        var microtask = _dereq_(95)();

        var newPromiseCapabilityModule = _dereq_(96);

        var perform = _dereq_(114);

        var userAgent = _dereq_(148);

        var promiseResolve = _dereq_(115);

        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8 || '';
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';

        var empty = function empty() {
          /* empty */
        };

        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
        var USE_NATIVE = !!function () {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1);

            var FakePromise = (promise.constructor = {})[_dereq_(152)('species')] = function (exec) {
              exec(empty, empty);
            }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


            return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // we can't detect it synchronously, so just check versions
            && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
          } catch (e) {
            /* empty */
          }
        }(); // helpers

        var isThenable = function isThenable(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };

        var notify = function notify(promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function () {
            var value = promise._v;
            var ok = promise._s == 1;
            var i = 0;

            var run = function run(reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;

              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }

                  if (handler === true) result = value;else {
                    if (domain) domain.enter();
                    result = handler(value); // may throw

                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }

                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
              }
            };

            while (chain.length > i) {
              run(chain[i++]);
            } // variable length - can't use forEach


            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };

        var onUnhandled = function onUnhandled(promise) {
          task.call(global, function () {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console;

            if (unhandled) {
              result = perform(function () {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if (handler = global.onunhandledrejection) {
                  handler({
                    promise: promise,
                    reason: value
                  });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }

            promise._a = undefined;
            if (unhandled && result.e) throw result.v;
          });
        };

        var isUnhandled = function isUnhandled(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };

        var onHandleUnhandled = function onHandleUnhandled(promise) {
          task.call(global, function () {
            var handler;

            if (isNode) {
              process.emit('rejectionHandled', promise);
            } else if (handler = global.onrejectionhandled) {
              handler({
                promise: promise,
                reason: promise._v
              });
            }
          });
        };

        var $reject = function $reject(value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap

          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };

        var $resolve = function $resolve(value) {
          var promise = this;
          var then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap

          try {
            if (promise === value) throw TypeError("Promise can't be resolved itself");

            if (then = isThenable(value)) {
              microtask(function () {
                var wrapper = {
                  _w: promise,
                  _d: false
                }; // wrap

                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({
              _w: promise,
              _d: false
            }, e); // wrap
          }
        }; // constructor polyfill


        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h');
            aFunction(executor);
            Internal.call(this);

            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          }; // eslint-disable-next-line no-unused-vars


          Internal = function Promise(executor) {
            this._c = []; // <- awaiting reactions

            this._a = undefined; // <- checked in isUnhandled reactions

            this._s = 0; // <- state

            this._d = false; // <- done

            this._v = undefined; // <- value

            this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

            this._n = false; // <- notify
          };

          Internal.prototype = _dereq_(117)($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              reaction.domain = isNode ? process.domain : undefined;

              this._c.push(reaction);

              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            'catch': function _catch(onRejected) {
              return this.then(undefined, onRejected);
            }
          });

          OwnPromiseCapability = function OwnPromiseCapability() {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };

          newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
            return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Promise: $Promise
        });

        _dereq_(124)($Promise, PROMISE);

        _dereq_(123)(PROMISE);

        Wrapper = _dereq_(52)[PROMISE]; // statics

        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
          }
        });
        $export($export.S + $export.F * !(USE_NATIVE && _dereq_(86)(function (iter) {
          $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
          // 25.4.4.1 Promise.all(iterable)
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function () {
              var values = [];
              var index = 0;
              var remaining = 1;
              forOf(iterable, false, function (promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.e) reject(result.v);
            return capability.promise;
          },
          // 25.4.4.4 Promise.race(iterable)
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function () {
              forOf(iterable, false, function (promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (result.e) reject(result.v);
            return capability.promise;
          }
        });
      }, {
        "114": 114,
        "115": 115,
        "117": 117,
        "123": 123,
        "124": 124,
        "127": 127,
        "136": 136,
        "148": 148,
        "152": 152,
        "33": 33,
        "37": 37,
        "47": 47,
        "52": 52,
        "54": 54,
        "62": 62,
        "68": 68,
        "70": 70,
        "81": 81,
        "86": 86,
        "89": 89,
        "95": 95,
        "96": 96
      }],
      233: [function (_dereq_, module, exports) {
        // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
        var $export = _dereq_(62);

        var aFunction = _dereq_(33);

        var anObject = _dereq_(38);

        var rApply = (_dereq_(70).Reflect || {}).apply;
        var fApply = Function.apply; // MS Edge argumentsList argument is optional

        $export($export.S + $export.F * !_dereq_(64)(function () {
          rApply(function () {
            /* empty */
          });
        }), 'Reflect', {
          apply: function apply(target, thisArgument, argumentsList) {
            var T = aFunction(target);
            var L = anObject(argumentsList);
            return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
          }
        });
      }, {
        "33": 33,
        "38": 38,
        "62": 62,
        "64": 64,
        "70": 70
      }],
      234: [function (_dereq_, module, exports) {
        // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
        var $export = _dereq_(62);

        var create = _dereq_(98);

        var aFunction = _dereq_(33);

        var anObject = _dereq_(38);

        var isObject = _dereq_(81);

        var fails = _dereq_(64);

        var bind = _dereq_(46);

        var rConstruct = (_dereq_(70).Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
        // FF Nightly sets third argument as `new.target`, but does not create `this` from it

        var NEW_TARGET_BUG = fails(function () {
          function F() {
            /* empty */
          }

          return !(rConstruct(function () {
            /* empty */
          }, [], F) instanceof F);
        });
        var ARGS_BUG = !fails(function () {
          rConstruct(function () {
            /* empty */
          });
        });
        $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
          construct: function construct(Target, args
          /* , newTarget */
          ) {
            aFunction(Target);
            anObject(args);
            var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
            if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

            if (Target == newTarget) {
              // w/o altered newTarget, optimization for 0-4 arguments
              switch (args.length) {
                case 0:
                  return new Target();

                case 1:
                  return new Target(args[0]);

                case 2:
                  return new Target(args[0], args[1]);

                case 3:
                  return new Target(args[0], args[1], args[2]);

                case 4:
                  return new Target(args[0], args[1], args[2], args[3]);
              } // w/o altered newTarget, lot of arguments case


              var $args = [null];
              $args.push.apply($args, args);
              return new (bind.apply(Target, $args))();
            } // with altered newTarget, not support built-in constructors


            var proto = newTarget.prototype;
            var instance = create(isObject(proto) ? proto : Object.prototype);
            var result = Function.apply.call(Target, instance, args);
            return isObject(result) ? result : instance;
          }
        });
      }, {
        "33": 33,
        "38": 38,
        "46": 46,
        "62": 62,
        "64": 64,
        "70": 70,
        "81": 81,
        "98": 98
      }],
      235: [function (_dereq_, module, exports) {
        // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
        var dP = _dereq_(99);

        var $export = _dereq_(62);

        var anObject = _dereq_(38);

        var toPrimitive = _dereq_(143); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


        $export($export.S + $export.F * _dereq_(64)(function () {
          // eslint-disable-next-line no-undef
          Reflect.defineProperty(dP.f({}, 1, {
            value: 1
          }), 1, {
            value: 2
          });
        }), 'Reflect', {
          defineProperty: function defineProperty(target, propertyKey, attributes) {
            anObject(target);
            propertyKey = toPrimitive(propertyKey, true);
            anObject(attributes);

            try {
              dP.f(target, propertyKey, attributes);
              return true;
            } catch (e) {
              return false;
            }
          }
        });
      }, {
        "143": 143,
        "38": 38,
        "62": 62,
        "64": 64,
        "99": 99
      }],
      236: [function (_dereq_, module, exports) {
        // 26.1.4 Reflect.deleteProperty(target, propertyKey)
        var $export = _dereq_(62);

        var gOPD = _dereq_(101).f;

        var anObject = _dereq_(38);

        $export($export.S, 'Reflect', {
          deleteProperty: function deleteProperty(target, propertyKey) {
            var desc = gOPD(anObject(target), propertyKey);
            return desc && !desc.configurable ? false : delete target[propertyKey];
          }
        });
      }, {
        "101": 101,
        "38": 38,
        "62": 62
      }],
      237: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var anObject = _dereq_(38);

        var Enumerate = function Enumerate(iterated) {
          this._t = anObject(iterated); // target

          this._i = 0; // next index

          var keys = this._k = []; // keys

          var key;

          for (key in iterated) {
            keys.push(key);
          }
        };

        _dereq_(84)(Enumerate, 'Object', function () {
          var that = this;
          var keys = that._k;
          var key;

          do {
            if (that._i >= keys.length) return {
              value: undefined,
              done: true
            };
          } while (!((key = keys[that._i++]) in that._t));

          return {
            value: key,
            done: false
          };
        });

        $export($export.S, 'Reflect', {
          enumerate: function enumerate(target) {
            return new Enumerate(target);
          }
        });
      }, {
        "38": 38,
        "62": 62,
        "84": 84
      }],
      238: [function (_dereq_, module, exports) {
        // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
        var gOPD = _dereq_(101);

        var $export = _dereq_(62);

        var anObject = _dereq_(38);

        $export($export.S, 'Reflect', {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
            return gOPD.f(anObject(target), propertyKey);
          }
        });
      }, {
        "101": 101,
        "38": 38,
        "62": 62
      }],
      239: [function (_dereq_, module, exports) {
        // 26.1.8 Reflect.getPrototypeOf(target)
        var $export = _dereq_(62);

        var getProto = _dereq_(105);

        var anObject = _dereq_(38);

        $export($export.S, 'Reflect', {
          getPrototypeOf: function getPrototypeOf(target) {
            return getProto(anObject(target));
          }
        });
      }, {
        "105": 105,
        "38": 38,
        "62": 62
      }],
      240: [function (_dereq_, module, exports) {
        // 26.1.6 Reflect.get(target, propertyKey [, receiver])
        var gOPD = _dereq_(101);

        var getPrototypeOf = _dereq_(105);

        var has = _dereq_(71);

        var $export = _dereq_(62);

        var isObject = _dereq_(81);

        var anObject = _dereq_(38);

        function get(target, propertyKey
        /* , receiver */
        ) {
          var receiver = arguments.length < 3 ? target : arguments[2];
          var desc, proto;
          if (anObject(target) === receiver) return target[propertyKey];
          if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
          if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
        }

        $export($export.S, 'Reflect', {
          get: get
        });
      }, {
        "101": 101,
        "105": 105,
        "38": 38,
        "62": 62,
        "71": 71,
        "81": 81
      }],
      241: [function (_dereq_, module, exports) {
        // 26.1.9 Reflect.has(target, propertyKey)
        var $export = _dereq_(62);

        $export($export.S, 'Reflect', {
          has: function has(target, propertyKey) {
            return propertyKey in target;
          }
        });
      }, {
        "62": 62
      }],
      242: [function (_dereq_, module, exports) {
        // 26.1.10 Reflect.isExtensible(target)
        var $export = _dereq_(62);

        var anObject = _dereq_(38);

        var $isExtensible = Object.isExtensible;
        $export($export.S, 'Reflect', {
          isExtensible: function isExtensible(target) {
            anObject(target);
            return $isExtensible ? $isExtensible(target) : true;
          }
        });
      }, {
        "38": 38,
        "62": 62
      }],
      243: [function (_dereq_, module, exports) {
        // 26.1.11 Reflect.ownKeys(target)
        var $export = _dereq_(62);

        $export($export.S, 'Reflect', {
          ownKeys: _dereq_(111)
        });
      }, {
        "111": 111,
        "62": 62
      }],
      244: [function (_dereq_, module, exports) {
        // 26.1.12 Reflect.preventExtensions(target)
        var $export = _dereq_(62);

        var anObject = _dereq_(38);

        var $preventExtensions = Object.preventExtensions;
        $export($export.S, 'Reflect', {
          preventExtensions: function preventExtensions(target) {
            anObject(target);

            try {
              if ($preventExtensions) $preventExtensions(target);
              return true;
            } catch (e) {
              return false;
            }
          }
        });
      }, {
        "38": 38,
        "62": 62
      }],
      245: [function (_dereq_, module, exports) {
        // 26.1.14 Reflect.setPrototypeOf(target, proto)
        var $export = _dereq_(62);

        var setProto = _dereq_(122);

        if (setProto) $export($export.S, 'Reflect', {
          setPrototypeOf: function setPrototypeOf(target, proto) {
            setProto.check(target, proto);

            try {
              setProto.set(target, proto);
              return true;
            } catch (e) {
              return false;
            }
          }
        });
      }, {
        "122": 122,
        "62": 62
      }],
      246: [function (_dereq_, module, exports) {
        // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
        var dP = _dereq_(99);

        var gOPD = _dereq_(101);

        var getPrototypeOf = _dereq_(105);

        var has = _dereq_(71);

        var $export = _dereq_(62);

        var createDesc = _dereq_(116);

        var anObject = _dereq_(38);

        var isObject = _dereq_(81);

        function set(target, propertyKey, V
        /* , receiver */
        ) {
          var receiver = arguments.length < 4 ? target : arguments[3];
          var ownDesc = gOPD.f(anObject(target), propertyKey);
          var existingDescriptor, proto;

          if (!ownDesc) {
            if (isObject(proto = getPrototypeOf(target))) {
              return set(proto, propertyKey, V, receiver);
            }

            ownDesc = createDesc(0);
          }

          if (has(ownDesc, 'value')) {
            if (ownDesc.writable === false || !isObject(receiver)) return false;

            if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
              if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
              existingDescriptor.value = V;
              dP.f(receiver, propertyKey, existingDescriptor);
            } else dP.f(receiver, propertyKey, createDesc(0, V));

            return true;
          }

          return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }

        $export($export.S, 'Reflect', {
          set: set
        });
      }, {
        "101": 101,
        "105": 105,
        "116": 116,
        "38": 38,
        "62": 62,
        "71": 71,
        "81": 81,
        "99": 99
      }],
      247: [function (_dereq_, module, exports) {
        var global = _dereq_(70);

        var inheritIfRequired = _dereq_(75);

        var dP = _dereq_(99).f;

        var gOPN = _dereq_(103).f;

        var isRegExp = _dereq_(82);

        var $flags = _dereq_(66);

        var $RegExp = global.RegExp;
        var Base = $RegExp;
        var proto = $RegExp.prototype;
        var re1 = /a/g;
        var re2 = /a/g; // "new" creates a new object, old webkit buggy here

        var CORRECT_NEW = new $RegExp(re1) !== re1;

        if (_dereq_(58) && (!CORRECT_NEW || _dereq_(64)(function () {
          re2[_dereq_(152)('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

          return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
        }))) {
          $RegExp = function RegExp(p, f) {
            var tiRE = this instanceof $RegExp;
            var piRE = isRegExp(p);
            var fiU = f === undefined;
            return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
          };

          var proxy = function proxy(key) {
            key in $RegExp || dP($RegExp, key, {
              configurable: true,
              get: function get() {
                return Base[key];
              },
              set: function set(it) {
                Base[key] = it;
              }
            });
          };

          for (var keys = gOPN(Base), i = 0; keys.length > i;) {
            proxy(keys[i++]);
          }

          proto.constructor = $RegExp;
          $RegExp.prototype = proto;

          _dereq_(118)(global, 'RegExp', $RegExp);
        }

        _dereq_(123)('RegExp');
      }, {
        "103": 103,
        "118": 118,
        "123": 123,
        "152": 152,
        "58": 58,
        "64": 64,
        "66": 66,
        "70": 70,
        "75": 75,
        "82": 82,
        "99": 99
      }],
      248: [function (_dereq_, module, exports) {

        var regexpExec = _dereq_(120);

        _dereq_(62)({
          target: 'RegExp',
          proto: true,
          forced: regexpExec !== /./.exec
        }, {
          exec: regexpExec
        });
      }, {
        "120": 120,
        "62": 62
      }],
      249: [function (_dereq_, module, exports) {
        // 21.2.5.3 get RegExp.prototype.flags()
        if (_dereq_(58) && /./g.flags != 'g') _dereq_(99).f(RegExp.prototype, 'flags', {
          configurable: true,
          get: _dereq_(66)
        });
      }, {
        "58": 58,
        "66": 66,
        "99": 99
      }],
      250: [function (_dereq_, module, exports) {

        var anObject = _dereq_(38);

        var toLength = _dereq_(141);

        var advanceStringIndex = _dereq_(36);

        var regExpExec = _dereq_(119); // @@match logic


        _dereq_(65)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
          return [// `String.prototype.match` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          }, // `RegExp.prototype[@@match]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
          function (regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;

            while ((result = regExpExec(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }

            return n === 0 ? null : A;
          }];
        });
      }, {
        "119": 119,
        "141": 141,
        "36": 36,
        "38": 38,
        "65": 65
      }],
      251: [function (_dereq_, module, exports) {

        var anObject = _dereq_(38);

        var toObject = _dereq_(142);

        var toLength = _dereq_(141);

        var toInteger = _dereq_(139);

        var advanceStringIndex = _dereq_(36);

        var regExpExec = _dereq_(119);

        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

        var maybeToString = function maybeToString(it) {
          return it === undefined ? it : String(it);
        }; // @@replace logic


        _dereq_(65)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
          return [// `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
          }, // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;

            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }

            var results = [];

            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;
              results.push(result);
              if (!global) break;
              var matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }

            var accumulatedResult = '';
            var nextSourcePosition = 0;

            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max(min(toInteger(result.index), S.length), 0);
              var captures = []; // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

              for (var j = 1; j < result.length; j++) {
                captures.push(maybeToString(result[j]));
              }

              var namedCaptures = result.groups;

              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }

              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }

            return accumulatedResult + S.slice(nextSourcePosition);
          }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

          function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

            if (namedCaptures !== undefined) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }

            return $replace.call(replacement, symbols, function (match, ch) {
              var capture;

              switch (ch.charAt(0)) {
                case '$':
                  return '$';

                case '&':
                  return matched;

                case '`':
                  return str.slice(0, position);

                case "'":
                  return str.slice(tailPos);

                case '<':
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;

                default:
                  // \d\d?
                  var n = +ch;
                  if (n === 0) return match;

                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }

                  capture = captures[n - 1];
              }

              return capture === undefined ? '' : capture;
            });
          }
        });
      }, {
        "119": 119,
        "139": 139,
        "141": 141,
        "142": 142,
        "36": 36,
        "38": 38,
        "65": 65
      }],
      252: [function (_dereq_, module, exports) {

        var anObject = _dereq_(38);

        var sameValue = _dereq_(121);

        var regExpExec = _dereq_(119); // @@search logic


        _dereq_(65)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
          return [// `String.prototype.search` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.search
          function search(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[SEARCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
          }, // `RegExp.prototype[@@search]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
          function (regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
          }];
        });
      }, {
        "119": 119,
        "121": 121,
        "38": 38,
        "65": 65
      }],
      253: [function (_dereq_, module, exports) {

        var isRegExp = _dereq_(82);

        var anObject = _dereq_(38);

        var speciesConstructor = _dereq_(127);

        var advanceStringIndex = _dereq_(36);

        var toLength = _dereq_(141);

        var callRegExpExec = _dereq_(119);

        var regexpExec = _dereq_(120);

        var fails = _dereq_(64);

        var $min = Math.min;
        var $push = [].push;
        var $SPLIT = 'split';
        var LENGTH = 'length';
        var LAST_INDEX = 'lastIndex';
        var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

        var SUPPORTS_Y = !fails(function () {
        }); // @@split logic

        _dereq_(65)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
          var internalSplit;

          if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
            // based on es5-shim implementation, need to rework it
            internalSplit = function internalSplit(separator, limit) {
              var string = String(this);
              if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

              if (!isRegExp(separator)) return $split.call(string, separator, limit);
              var output = [];
              var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
              var lastLastIndex = 0;
              var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

              var separatorCopy = new RegExp(separator.source, flags + 'g');
              var match, lastIndex, lastLength;

              while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy[LAST_INDEX];

                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                  lastLength = match[0][LENGTH];
                  lastLastIndex = lastIndex;
                  if (output[LENGTH] >= splitLimit) break;
                }

                if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
              }

              if (lastLastIndex === string[LENGTH]) {
                if (lastLength || !separatorCopy.test('')) output.push('');
              } else output.push(string.slice(lastLastIndex));

              return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
            }; // Chakra, V8

          } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
            internalSplit = function internalSplit(separator, limit) {
              return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
            };
          } else {
            internalSplit = $split;
          }

          return [// `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = defined(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
          }, // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.

            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];

            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;

              if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;

                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }

                q = p = e;
              }
            }

            A.push(S.slice(p));
            return A;
          }];
        });
      }, {
        "119": 119,
        "120": 120,
        "127": 127,
        "141": 141,
        "36": 36,
        "38": 38,
        "64": 64,
        "65": 65,
        "82": 82
      }],
      254: [function (_dereq_, module, exports) {

        _dereq_(249);

        var anObject = _dereq_(38);

        var $flags = _dereq_(66);

        var DESCRIPTORS = _dereq_(58);

        var TO_STRING = 'toString';
        var $toString = /./[TO_STRING];

        var define = function define(fn) {
          _dereq_(118)(RegExp.prototype, TO_STRING, fn, true);
        }; // 21.2.5.14 RegExp.prototype.toString()


        if (_dereq_(64)(function () {
          return $toString.call({
            source: 'a',
            flags: 'b'
          }) != '/a/b';
        })) {
          define(function toString() {
            var R = anObject(this);
            return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
          }); // FF44- RegExp#toString has a wrong name
        } else if ($toString.name != TO_STRING) {
          define(function toString() {
            return $toString.call(this);
          });
        }
      }, {
        "118": 118,
        "249": 249,
        "38": 38,
        "58": 58,
        "64": 64,
        "66": 66
      }],
      255: [function (_dereq_, module, exports) {

        var strong = _dereq_(49);

        var validate = _dereq_(149);

        var SET = 'Set'; // 23.2 Set Objects

        module.exports = _dereq_(51)(SET, function (get) {
          return function Set() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        }, {
          // 23.2.3.1 Set.prototype.add(value)
          add: function add(value) {
            return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
          }
        }, strong);
      }, {
        "149": 149,
        "49": 49,
        "51": 51
      }],
      256: [function (_dereq_, module, exports) {

        _dereq_(131)('anchor', function (createHTML) {
          return function anchor(name) {
            return createHTML(this, 'a', 'name', name);
          };
        });
      }, {
        "131": 131
      }],
      257: [function (_dereq_, module, exports) {

        _dereq_(131)('big', function (createHTML) {
          return function big() {
            return createHTML(this, 'big', '', '');
          };
        });
      }, {
        "131": 131
      }],
      258: [function (_dereq_, module, exports) {

        _dereq_(131)('blink', function (createHTML) {
          return function blink() {
            return createHTML(this, 'blink', '', '');
          };
        });
      }, {
        "131": 131
      }],
      259: [function (_dereq_, module, exports) {

        _dereq_(131)('bold', function (createHTML) {
          return function bold() {
            return createHTML(this, 'b', '', '');
          };
        });
      }, {
        "131": 131
      }],
      260: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $at = _dereq_(129)(false);

        $export($export.P, 'String', {
          // 21.1.3.3 String.prototype.codePointAt(pos)
          codePointAt: function codePointAt(pos) {
            return $at(this, pos);
          }
        });
      }, {
        "129": 129,
        "62": 62
      }],
      261: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toLength = _dereq_(141);

        var context = _dereq_(130);

        var ENDS_WITH = 'endsWith';
        var $endsWith = ''[ENDS_WITH];
        $export($export.P + $export.F * _dereq_(63)(ENDS_WITH), 'String', {
          endsWith: function endsWith(searchString
          /* , endPosition = @length */
          ) {
            var that = context(this, searchString, ENDS_WITH);
            var endPosition = arguments.length > 1 ? arguments[1] : undefined;
            var len = toLength(that.length);
            var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
            var search = String(searchString);
            return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
          }
        });
      }, {
        "130": 130,
        "141": 141,
        "62": 62,
        "63": 63
      }],
      262: [function (_dereq_, module, exports) {

        _dereq_(131)('fixed', function (createHTML) {
          return function fixed() {
            return createHTML(this, 'tt', '', '');
          };
        });
      }, {
        "131": 131
      }],
      263: [function (_dereq_, module, exports) {

        _dereq_(131)('fontcolor', function (createHTML) {
          return function fontcolor(color) {
            return createHTML(this, 'font', 'color', color);
          };
        });
      }, {
        "131": 131
      }],
      264: [function (_dereq_, module, exports) {

        _dereq_(131)('fontsize', function (createHTML) {
          return function fontsize(size) {
            return createHTML(this, 'font', 'size', size);
          };
        });
      }, {
        "131": 131
      }],
      265: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var toAbsoluteIndex = _dereq_(137);

        var fromCharCode = String.fromCharCode;
        var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

        $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
          // 21.1.2.2 String.fromCodePoint(...codePoints)
          fromCodePoint: function fromCodePoint(x) {
            // eslint-disable-line no-unused-vars
            var res = [];
            var aLen = arguments.length;
            var i = 0;
            var code;

            while (aLen > i) {
              code = +arguments[i++];
              if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
              res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }

            return res.join('');
          }
        });
      }, {
        "137": 137,
        "62": 62
      }],
      266: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var context = _dereq_(130);

        var INCLUDES = 'includes';
        $export($export.P + $export.F * _dereq_(63)(INCLUDES), 'String', {
          includes: function includes(searchString
          /* , position = 0 */
          ) {
            return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
      }, {
        "130": 130,
        "62": 62,
        "63": 63
      }],
      267: [function (_dereq_, module, exports) {

        _dereq_(131)('italics', function (createHTML) {
          return function italics() {
            return createHTML(this, 'i', '', '');
          };
        });
      }, {
        "131": 131
      }],
      268: [function (_dereq_, module, exports) {

        var $at = _dereq_(129)(true); // 21.1.3.27 String.prototype[@@iterator]()


        _dereq_(85)(String, 'String', function (iterated) {
          this._t = String(iterated); // target

          this._i = 0; // next index
          // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var index = this._i;
          var point;
          if (index >= O.length) return {
            value: undefined,
            done: true
          };
          point = $at(O, index);
          this._i += point.length;
          return {
            value: point,
            done: false
          };
        });
      }, {
        "129": 129,
        "85": 85
      }],
      269: [function (_dereq_, module, exports) {

        _dereq_(131)('link', function (createHTML) {
          return function link(url) {
            return createHTML(this, 'a', 'href', url);
          };
        });
      }, {
        "131": 131
      }],
      270: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var toIObject = _dereq_(140);

        var toLength = _dereq_(141);

        $export($export.S, 'String', {
          // 21.1.2.4 String.raw(callSite, ...substitutions)
          raw: function raw(callSite) {
            var tpl = toIObject(callSite.raw);
            var len = toLength(tpl.length);
            var aLen = arguments.length;
            var res = [];
            var i = 0;

            while (len > i) {
              res.push(String(tpl[i++]));
              if (i < aLen) res.push(String(arguments[i]));
            }

            return res.join('');
          }
        });
      }, {
        "140": 140,
        "141": 141,
        "62": 62
      }],
      271: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        $export($export.P, 'String', {
          // 21.1.3.13 String.prototype.repeat(count)
          repeat: _dereq_(133)
        });
      }, {
        "133": 133,
        "62": 62
      }],
      272: [function (_dereq_, module, exports) {

        _dereq_(131)('small', function (createHTML) {
          return function small() {
            return createHTML(this, 'small', '', '');
          };
        });
      }, {
        "131": 131
      }],
      273: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var toLength = _dereq_(141);

        var context = _dereq_(130);

        var STARTS_WITH = 'startsWith';
        var $startsWith = ''[STARTS_WITH];
        $export($export.P + $export.F * _dereq_(63)(STARTS_WITH), 'String', {
          startsWith: function startsWith(searchString
          /* , position = 0 */
          ) {
            var that = context(this, searchString, STARTS_WITH);
            var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
            var search = String(searchString);
            return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
          }
        });
      }, {
        "130": 130,
        "141": 141,
        "62": 62,
        "63": 63
      }],
      274: [function (_dereq_, module, exports) {

        _dereq_(131)('strike', function (createHTML) {
          return function strike() {
            return createHTML(this, 'strike', '', '');
          };
        });
      }, {
        "131": 131
      }],
      275: [function (_dereq_, module, exports) {

        _dereq_(131)('sub', function (createHTML) {
          return function sub() {
            return createHTML(this, 'sub', '', '');
          };
        });
      }, {
        "131": 131
      }],
      276: [function (_dereq_, module, exports) {

        _dereq_(131)('sup', function (createHTML) {
          return function sup() {
            return createHTML(this, 'sup', '', '');
          };
        });
      }, {
        "131": 131
      }],
      277: [function (_dereq_, module, exports) {

        _dereq_(134)('trim', function ($trim) {
          return function trim() {
            return $trim(this, 3);
          };
        });
      }, {
        "134": 134
      }],
      278: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var has = _dereq_(71);

        var DESCRIPTORS = _dereq_(58);

        var $export = _dereq_(62);

        var redefine = _dereq_(118);

        var META = _dereq_(94).KEY;

        var $fails = _dereq_(64);

        var shared = _dereq_(126);

        var setToStringTag = _dereq_(124);

        var uid = _dereq_(147);

        var wks = _dereq_(152);

        var wksExt = _dereq_(151);

        var wksDefine = _dereq_(150);

        var enumKeys = _dereq_(61);

        var isArray = _dereq_(79);

        var anObject = _dereq_(38);

        var isObject = _dereq_(81);

        var toObject = _dereq_(142);

        var toIObject = _dereq_(140);

        var toPrimitive = _dereq_(143);

        var createDesc = _dereq_(116);

        var _create = _dereq_(98);

        var gOPNExt = _dereq_(102);

        var $GOPD = _dereq_(101);

        var $GOPS = _dereq_(104);

        var $DP = _dereq_(99);

        var $keys = _dereq_(107);

        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;

        var _stringify = $JSON && $JSON.stringify;

        var PROTOTYPE = 'prototype';
        var HIDDEN = wks('_hidden');
        var TO_PRIMITIVE = wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared('symbol-registry');
        var AllSymbols = shared('symbols');
        var OPSymbols = shared('op-symbols');
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
        var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

        var setSymbolDesc = DESCRIPTORS && $fails(function () {
          return _create(dP({}, 'a', {
            get: function get() {
              return dP(this, 'a', {
                value: 7
              }).a;
            }
          })).a != 7;
        }) ? function (it, key, D) {
          var protoDesc = gOPD(ObjectProto, key);
          if (protoDesc) delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function wrap(tag) {
          var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

          sym._k = tag;
          return sym;
        };

        var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
          return _typeof(it) == 'symbol';
        } : function (it) {
          return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);

          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
              D = _create(D, {
                enumerable: createDesc(0, false)
              });
            }

            return setSymbolDesc(it, key, D);
          }

          return dP(it, key, D);
        };

        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys(P = toIObject(P));
          var i = 0;
          var l = keys.length;
          var key;

          while (l > i) {
            $defineProperty(it, key = keys[i++], P[key]);
          }

          return it;
        };

        var $create = function create(it, P) {
          return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };

        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, key = toPrimitive(key, true));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
          return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };

        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
          var D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
          return D;
        };

        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i = 0;
          var key;

          while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
          }

          return result;
        };

        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i = 0;
          var key;

          while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
          }

          return result;
        }; // 19.4.1.1 Symbol([description])


        if (!USE_NATIVE) {
          $Symbol = function _Symbol2() {
            if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
            var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

            var $set = function $set(value) {
              if (this === ObjectProto) $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };

            if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
              configurable: true,
              set: $set
            });
            return wrap(tag);
          };

          redefine($Symbol[PROTOTYPE], 'toString', function toString() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          _dereq_(103).f = gOPNExt.f = $getOwnPropertyNames;
          _dereq_(108).f = $propertyIsEnumerable;
          $GOPS.f = $getOwnPropertySymbols;

          if (DESCRIPTORS && !_dereq_(89)) {
            redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
          }

          wksExt.f = function (name) {
            return wrap(wks(name));
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Symbol: $Symbol
        });

        for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
        'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
          wks(es6Symbols[j++]);
        }

        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
          wksDefine(wellKnownSymbols[k++]);
        }

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
          // 19.4.2.1 Symbol.for(key)
          'for': function _for(key) {
            return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
          },
          // 19.4.2.5 Symbol.keyFor(sym)
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

            for (var key in SymbolRegistry) {
              if (SymbolRegistry[key] === sym) return key;
            }
          },
          useSetter: function useSetter() {
            setter = true;
          },
          useSimple: function useSimple() {
            setter = false;
          }
        });
        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
          // 19.1.2.2 Object.create(O [, Properties])
          create: $create,
          // 19.1.2.4 Object.defineProperty(O, P, Attributes)
          defineProperty: $defineProperty,
          // 19.1.2.3 Object.defineProperties(O, Properties)
          defineProperties: $defineProperties,
          // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          // 19.1.2.7 Object.getOwnPropertyNames(O)
          getOwnPropertyNames: $getOwnPropertyNames,
          // 19.1.2.8 Object.getOwnPropertySymbols(O)
          getOwnPropertySymbols: $getOwnPropertySymbols
        }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443

        var FAILS_ON_PRIMITIVES = $fails(function () {
          $GOPS.f(1);
        });
        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it));
          }
        }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
          var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
          // WebKit converts symbol values to JSON as null
          // V8 throws on boxed symbols

          return _stringify([S]) != '[null]' || _stringify({
            a: S
          }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
          stringify: function stringify(it) {
            var args = [it];
            var i = 1;
            var replacer, $replacer;

            while (arguments.length > i) {
              args.push(arguments[i++]);
            }

            $replacer = replacer = args[1];
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

            if (!isArray(replacer)) replacer = function replacer(key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
          }
        }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

        $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(72)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

        setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

        setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

        setToStringTag(global.JSON, 'JSON', true);
      }, {
        "101": 101,
        "102": 102,
        "103": 103,
        "104": 104,
        "107": 107,
        "108": 108,
        "116": 116,
        "118": 118,
        "124": 124,
        "126": 126,
        "140": 140,
        "142": 142,
        "143": 143,
        "147": 147,
        "150": 150,
        "151": 151,
        "152": 152,
        "38": 38,
        "58": 58,
        "61": 61,
        "62": 62,
        "64": 64,
        "70": 70,
        "71": 71,
        "72": 72,
        "79": 79,
        "81": 81,
        "89": 89,
        "94": 94,
        "98": 98,
        "99": 99
      }],
      279: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $typed = _dereq_(146);

        var buffer = _dereq_(145);

        var anObject = _dereq_(38);

        var toAbsoluteIndex = _dereq_(137);

        var toLength = _dereq_(141);

        var isObject = _dereq_(81);

        var ArrayBuffer = _dereq_(70).ArrayBuffer;

        var speciesConstructor = _dereq_(127);

        var $ArrayBuffer = buffer.ArrayBuffer;
        var $DataView = buffer.DataView;
        var $isView = $typed.ABV && ArrayBuffer.isView;
        var $slice = $ArrayBuffer.prototype.slice;
        var VIEW = $typed.VIEW;
        var ARRAY_BUFFER = 'ArrayBuffer';
        $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
          ArrayBuffer: $ArrayBuffer
        });
        $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
          // 24.1.3.1 ArrayBuffer.isView(arg)
          isView: function isView(it) {
            return $isView && $isView(it) || isObject(it) && VIEW in it;
          }
        });
        $export($export.P + $export.U + $export.F * _dereq_(64)(function () {
          return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
        }), ARRAY_BUFFER, {
          // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
          slice: function slice(start, end) {
            if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

            var len = anObject(this).byteLength;
            var first = toAbsoluteIndex(start, len);
            var fin = toAbsoluteIndex(end === undefined ? len : end, len);
            var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
            var viewS = new $DataView(this);
            var viewT = new $DataView(result);
            var index = 0;

            while (first < fin) {
              viewT.setUint8(index++, viewS.getUint8(first++));
            }

            return result;
          }
        });

        _dereq_(123)(ARRAY_BUFFER);
      }, {
        "123": 123,
        "127": 127,
        "137": 137,
        "141": 141,
        "145": 145,
        "146": 146,
        "38": 38,
        "62": 62,
        "64": 64,
        "70": 70,
        "81": 81
      }],
      280: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        $export($export.G + $export.W + $export.F * !_dereq_(146).ABV, {
          DataView: _dereq_(145).DataView
        });
      }, {
        "145": 145,
        "146": 146,
        "62": 62
      }],
      281: [function (_dereq_, module, exports) {
        _dereq_(144)('Float32', 4, function (init) {
          return function Float32Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      282: [function (_dereq_, module, exports) {
        _dereq_(144)('Float64', 8, function (init) {
          return function Float64Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      283: [function (_dereq_, module, exports) {
        _dereq_(144)('Int16', 2, function (init) {
          return function Int16Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      284: [function (_dereq_, module, exports) {
        _dereq_(144)('Int32', 4, function (init) {
          return function Int32Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      285: [function (_dereq_, module, exports) {
        _dereq_(144)('Int8', 1, function (init) {
          return function Int8Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      286: [function (_dereq_, module, exports) {
        _dereq_(144)('Uint16', 2, function (init) {
          return function Uint16Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      287: [function (_dereq_, module, exports) {
        _dereq_(144)('Uint32', 4, function (init) {
          return function Uint32Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      288: [function (_dereq_, module, exports) {
        _dereq_(144)('Uint8', 1, function (init) {
          return function Uint8Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });
      }, {
        "144": 144
      }],
      289: [function (_dereq_, module, exports) {
        _dereq_(144)('Uint8', 1, function (init) {
          return function Uint8ClampedArray(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        }, true);
      }, {
        "144": 144
      }],
      290: [function (_dereq_, module, exports) {

        var global = _dereq_(70);

        var each = _dereq_(42)(0);

        var redefine = _dereq_(118);

        var meta = _dereq_(94);

        var assign = _dereq_(97);

        var weak = _dereq_(50);

        var isObject = _dereq_(81);

        var validate = _dereq_(149);

        var NATIVE_WEAK_MAP = _dereq_(149);

        var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
        var WEAK_MAP = 'WeakMap';
        var getWeak = meta.getWeak;
        var isExtensible = Object.isExtensible;
        var uncaughtFrozenStore = weak.ufstore;
        var InternalMap;

        var wrapper = function wrapper(get) {
          return function WeakMap() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        };

        var methods = {
          // 23.3.3.3 WeakMap.prototype.get(key)
          get: function get(key) {
            if (isObject(key)) {
              var data = getWeak(key);
              if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
              return data ? data[this._i] : undefined;
            }
          },
          // 23.3.3.5 WeakMap.prototype.set(key, value)
          set: function set(key, value) {
            return weak.def(validate(this, WEAK_MAP), key, value);
          }
        }; // 23.3 WeakMap Objects

        var $WeakMap = module.exports = _dereq_(51)(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


        if (NATIVE_WEAK_MAP && IS_IE11) {
          InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
          assign(InternalMap.prototype, methods);
          meta.NEED = true;
          each(['delete', 'has', 'get', 'set'], function (key) {
            var proto = $WeakMap.prototype;
            var method = proto[key];
            redefine(proto, key, function (a, b) {
              // store frozen objects on internal weakmap shim
              if (isObject(a) && !isExtensible(a)) {
                if (!this._f) this._f = new InternalMap();

                var result = this._f[key](a, b);

                return key == 'set' ? this : result; // store all the rest on native weakmap
              }

              return method.call(this, a, b);
            });
          });
        }
      }, {
        "118": 118,
        "149": 149,
        "42": 42,
        "50": 50,
        "51": 51,
        "70": 70,
        "81": 81,
        "94": 94,
        "97": 97
      }],
      291: [function (_dereq_, module, exports) {

        var weak = _dereq_(50);

        var validate = _dereq_(149);

        var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

        _dereq_(51)(WEAK_SET, function (get) {
          return function WeakSet() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        }, {
          // 23.4.3.1 WeakSet.prototype.add(value)
          add: function add(value) {
            return weak.def(validate(this, WEAK_SET), value, true);
          }
        }, weak, false, true);
      }, {
        "149": 149,
        "50": 50,
        "51": 51
      }],
      292: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var flattenIntoArray = _dereq_(67);

        var toObject = _dereq_(142);

        var toLength = _dereq_(141);

        var aFunction = _dereq_(33);

        var arraySpeciesCreate = _dereq_(45);

        $export($export.P, 'Array', {
          flatMap: function flatMap(callbackfn
          /* , thisArg */
          ) {
            var O = toObject(this);
            var sourceLen, A;
            aFunction(callbackfn);
            sourceLen = toLength(O.length);
            A = arraySpeciesCreate(O, 0);
            flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
            return A;
          }
        });

        _dereq_(35)('flatMap');
      }, {
        "141": 141,
        "142": 142,
        "33": 33,
        "35": 35,
        "45": 45,
        "62": 62,
        "67": 67
      }],
      293: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $includes = _dereq_(41)(true);

        $export($export.P, 'Array', {
          includes: function includes(el
          /* , fromIndex = 0 */
          ) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        _dereq_(35)('includes');
      }, {
        "35": 35,
        "41": 41,
        "62": 62
      }],
      294: [function (_dereq_, module, exports) {
        // https://github.com/tc39/proposal-object-values-entries
        var $export = _dereq_(62);

        var $entries = _dereq_(110)(true);

        $export($export.S, 'Object', {
          entries: function entries(it) {
            return $entries(it);
          }
        });
      }, {
        "110": 110,
        "62": 62
      }],
      295: [function (_dereq_, module, exports) {
        // https://github.com/tc39/proposal-object-getownpropertydescriptors
        var $export = _dereq_(62);

        var ownKeys = _dereq_(111);

        var toIObject = _dereq_(140);

        var gOPD = _dereq_(101);

        var createProperty = _dereq_(53);

        $export($export.S, 'Object', {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
            var O = toIObject(object);
            var getDesc = gOPD.f;
            var keys = ownKeys(O);
            var result = {};
            var i = 0;
            var key, desc;

            while (keys.length > i) {
              desc = getDesc(O, key = keys[i++]);
              if (desc !== undefined) createProperty(result, key, desc);
            }

            return result;
          }
        });
      }, {
        "101": 101,
        "111": 111,
        "140": 140,
        "53": 53,
        "62": 62
      }],
      296: [function (_dereq_, module, exports) {
        // https://github.com/tc39/proposal-object-values-entries
        var $export = _dereq_(62);

        var $values = _dereq_(110)(false);

        $export($export.S, 'Object', {
          values: function values(it) {
            return $values(it);
          }
        });
      }, {
        "110": 110,
        "62": 62
      }],
      297: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var core = _dereq_(52);

        var global = _dereq_(70);

        var speciesConstructor = _dereq_(127);

        var promiseResolve = _dereq_(115);

        $export($export.P + $export.R, 'Promise', {
          'finally': function _finally(onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise);
            var isFunction = typeof onFinally == 'function';
            return this.then(isFunction ? function (x) {
              return promiseResolve(C, onFinally()).then(function () {
                return x;
              });
            } : onFinally, isFunction ? function (e) {
              return promiseResolve(C, onFinally()).then(function () {
                throw e;
              });
            } : onFinally);
          }
        });
      }, {
        "115": 115,
        "127": 127,
        "52": 52,
        "62": 62,
        "70": 70
      }],
      298: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $pad = _dereq_(132);

        var userAgent = _dereq_(148); // https://github.com/zloirock/core-js/issues/280


        var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
        $export($export.P + $export.F * WEBKIT_BUG, 'String', {
          padEnd: function padEnd(maxLength
          /* , fillString = ' ' */
          ) {
            return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
          }
        });
      }, {
        "132": 132,
        "148": 148,
        "62": 62
      }],
      299: [function (_dereq_, module, exports) {

        var $export = _dereq_(62);

        var $pad = _dereq_(132);

        var userAgent = _dereq_(148); // https://github.com/zloirock/core-js/issues/280


        var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
        $export($export.P + $export.F * WEBKIT_BUG, 'String', {
          padStart: function padStart(maxLength
          /* , fillString = ' ' */
          ) {
            return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
          }
        });
      }, {
        "132": 132,
        "148": 148,
        "62": 62
      }],
      300: [function (_dereq_, module, exports) {

        _dereq_(134)('trimLeft', function ($trim) {
          return function trimLeft() {
            return $trim(this, 1);
          };
        }, 'trimStart');
      }, {
        "134": 134
      }],
      301: [function (_dereq_, module, exports) {

        _dereq_(134)('trimRight', function ($trim) {
          return function trimRight() {
            return $trim(this, 2);
          };
        }, 'trimEnd');
      }, {
        "134": 134
      }],
      302: [function (_dereq_, module, exports) {
        _dereq_(150)('asyncIterator');
      }, {
        "150": 150
      }],
      303: [function (_dereq_, module, exports) {
        var $iterators = _dereq_(164);

        var getKeys = _dereq_(107);

        var redefine = _dereq_(118);

        var global = _dereq_(70);

        var hide = _dereq_(72);

        var Iterators = _dereq_(88);

        var wks = _dereq_(152);

        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;
        var DOMIterables = {
          CSSRuleList: true,
          // TODO: Not spec compliant, should be false.
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true,
          // TODO: Not spec compliant, should be false.
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true,
          // TODO: Not spec compliant, should be false.
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
          var NAME = collections[i];
          var explicit = DOMIterables[NAME];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          var key;

          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            if (explicit) for (key in $iterators) {
              if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
          }
        }
      }, {
        "107": 107,
        "118": 118,
        "152": 152,
        "164": 164,
        "70": 70,
        "72": 72,
        "88": 88
      }],
      304: [function (_dereq_, module, exports) {
        var $export = _dereq_(62);

        var $task = _dereq_(136);

        $export($export.G + $export.B, {
          setImmediate: $task.set,
          clearImmediate: $task.clear
        });
      }, {
        "136": 136,
        "62": 62
      }],
      305: [function (_dereq_, module, exports) {
        // ie9- setTimeout & setInterval additional parameters fix
        var global = _dereq_(70);

        var $export = _dereq_(62);

        var userAgent = _dereq_(148);

        var slice = [].slice;
        var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

        var wrap = function wrap(set) {
          return function (fn, time
          /* , ...args */
          ) {
            var boundArgs = arguments.length > 2;
            var args = boundArgs ? slice.call(arguments, 2) : false;
            return set(boundArgs ? function () {
              // eslint-disable-next-line no-new-func
              (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
            } : fn, time);
          };
        };

        $export($export.G + $export.B + $export.F * MSIE, {
          setTimeout: wrap(global.setTimeout),
          setInterval: wrap(global.setInterval)
        });
      }, {
        "148": 148,
        "62": 62,
        "70": 70
      }],
      306: [function (_dereq_, module, exports) {
        _dereq_(305);

        _dereq_(304);

        _dereq_(303);

        module.exports = _dereq_(52);
      }, {
        "303": 303,
        "304": 304,
        "305": 305,
        "52": 52
      }],
      307: [function (_dereq_, module, exports) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = function (exports) {

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined$1; // More compressible than void 0.

          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.

            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }

          exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.

          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.

          var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.

          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.


          var IteratorPrototype = {};

          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.

          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;

              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }

            genFun.prototype = Object.create(Gp);
            return genFun;
          }; // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.


          exports.awrap = function (arg) {
            return {
              __await: arg
            };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);

              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;

                if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration.
                  result.value = unwrapped;
                  resolve(result);
                }, function (error) {
                  // If a rejected Promise was yielded, throw the rejection back
                  // into the async generator function so it can be handled there.
                  return invoke("throw", error, resolve, reject);
                });
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise = // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            } // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).


            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);

          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };

          exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.

          exports.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                } // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;

                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);

                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);

                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted; // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.

                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          } // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.


          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];

            if (method === undefined$1) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined$1;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

              context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.

              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined$1;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            } // The delegate iterator is finished, so forget it and continue with
            // the outer generator.


            context.delegate = null;
            return ContinueSentinel;
          } // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.


          defineIteratorMethods(Gp);
          Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.

          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{
              tryLoc: "root"
            }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];

            for (var key in object) {
              keys.push(key);
            }

            keys.reverse(); // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.

            return function next() {
              while (keys.length) {
                var key = keys.pop();

                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              } // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.


              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];

              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined$1;
                  next.done = true;
                  return next;
                };

                return next.next = next;
              }
            } // Return an iterator with no values.


            return {
              next: doneResult
            };
          }

          exports.values = values;

          function doneResult() {
            return {
              value: undefined$1,
              done: true
            };
          }

          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0; // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.

              this.sent = this._sent = undefined$1;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined$1;
              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined$1;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;

              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined$1;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;

                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }

                  return thrown;
                }
              } // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.


              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined$1;
              }

              return ContinueSentinel;
            }
          }; // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.

          return exports;
        }( // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        _typeof(module) === "object" ? module.exports : {});

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }, {}]
    }, {}, [1]);
  });
  unwrapExports(polyfill);

  var commentForm = (function () {
    var commentPopup = document.querySelector('.comment-popup');

    if (commentPopup) {
      document.querySelector('#feedback').addEventListener('click', function () {
        document.querySelector('.comment-popup').classList.remove('hide');
      });
      document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.comment-popup').classList.add('hide');
      });
    }
  });

  var swiper = createCommonjsModule(function (module, exports) {
    /**
     * Swiper 5.2.1
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * http://swiperjs.com
     *
     * Copyright 2014-2019 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: November 16, 2019
     */
    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, function () {
      /**
       * SSR Window 1.0.1
       * Better handling for window object in SSR environment
       * https://github.com/nolimits4web/ssr-window
       *
       * Copyright 2018, Vladimir Kharlampidi
       *
       * Licensed under MIT
       *
       * Released on: July 18, 2018
       */

      var doc = typeof document === 'undefined' ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
          blur: function blur() {},
          nodeName: ''
        },
        querySelector: function querySelector() {
          return null;
        },
        querySelectorAll: function querySelectorAll() {
          return [];
        },
        getElementById: function getElementById() {
          return null;
        },
        createEvent: function createEvent() {
          return {
            initEvent: function initEvent() {}
          };
        },
        createElement: function createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute() {},
            getElementsByTagName: function getElementsByTagName() {
              return [];
            }
          };
        },
        location: {
          hash: ''
        }
      } : document; // eslint-disable-line

      var win = typeof window === 'undefined' ? {
        document: doc,
        navigator: {
          userAgent: ''
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
          return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
          return {
            getPropertyValue: function getPropertyValue() {
              return '';
            }
          };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {}
      } : window; // eslint-disable-line

      /**
       * Dom7 2.1.3
       * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
       * http://framework7.io/docs/dom.html
       *
       * Copyright 2019, Vladimir Kharlampidi
       * The iDangero.us
       * http://www.idangero.us/
       *
       * Licensed under MIT
       *
       * Released on: February 11, 2019
       */

      var Dom7 = function Dom7(arr) {
        var self = this; // Create array-like object

        for (var i = 0; i < arr.length; i += 1) {
          self[i] = arr[i];
        }

        self.length = arr.length; // Return collection with methods

        return this;
      };

      function $(selector, context) {
        var arr = [];
        var i = 0;

        if (selector && !context) {
          if (selector instanceof Dom7) {
            return selector;
          }
        }

        if (selector) {
          // String
          if (typeof selector === 'string') {
            var els;
            var tempParent;
            var html = selector.trim();

            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
              var toCreate = 'div';

              if (html.indexOf('<li') === 0) {
                toCreate = 'ul';
              }

              if (html.indexOf('<tr') === 0) {
                toCreate = 'tbody';
              }

              if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
                toCreate = 'tr';
              }

              if (html.indexOf('<tbody') === 0) {
                toCreate = 'table';
              }

              if (html.indexOf('<option') === 0) {
                toCreate = 'select';
              }

              tempParent = doc.createElement(toCreate);
              tempParent.innerHTML = html;

              for (i = 0; i < tempParent.childNodes.length; i += 1) {
                arr.push(tempParent.childNodes[i]);
              }
            } else {
              if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                // Pure ID selector
                els = [doc.getElementById(selector.trim().split('#')[1])];
              } else {
                // Other selectors
                els = (context || doc).querySelectorAll(selector.trim());
              }

              for (i = 0; i < els.length; i += 1) {
                if (els[i]) {
                  arr.push(els[i]);
                }
              }
            }
          } else if (selector.nodeType || selector === win || selector === doc) {
            // Node/element
            arr.push(selector);
          } else if (selector.length > 0 && selector[0].nodeType) {
            // Array of elements or instance of Dom
            for (i = 0; i < selector.length; i += 1) {
              arr.push(selector[i]);
            }
          }
        }

        return new Dom7(arr);
      }

      $.fn = Dom7.prototype;
      $.Class = Dom7;
      $.Dom7 = Dom7;

      function unique(arr) {
        var uniqueArray = [];

        for (var i = 0; i < arr.length; i += 1) {
          if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
          }
        }

        return uniqueArray;
      } // Classes and attributes


      function addClass(className) {
        if (typeof className === 'undefined') {
          return this;
        }

        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i += 1) {
          for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
              this[j].classList.add(classes[i]);
            }
          }
        }

        return this;
      }

      function removeClass(className) {
        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i += 1) {
          for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
              this[j].classList.remove(classes[i]);
            }
          }
        }

        return this;
      }

      function hasClass(className) {
        if (!this[0]) {
          return false;
        }

        return this[0].classList.contains(className);
      }

      function toggleClass(className) {
        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i += 1) {
          for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
              this[j].classList.toggle(classes[i]);
            }
          }
        }

        return this;
      }

      function attr(attrs, value) {
        var arguments$1 = arguments;

        if (arguments.length === 1 && typeof attrs === 'string') {
          // Get attr
          if (this[0]) {
            return this[0].getAttribute(attrs);
          }

          return undefined;
        } // Set attrs


        for (var i = 0; i < this.length; i += 1) {
          if (arguments$1.length === 2) {
            // String
            this[i].setAttribute(attrs, value);
          } else {
            // Object
            // eslint-disable-next-line
            for (var attrName in attrs) {
              this[i][attrName] = attrs[attrName];
              this[i].setAttribute(attrName, attrs[attrName]);
            }
          }
        }

        return this;
      } // eslint-disable-next-line


      function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
          this[i].removeAttribute(attr);
        }

        return this;
      }

      function data(key, value) {
        var el;

        if (typeof value === 'undefined') {
          el = this[0]; // Get value

          if (el) {
            if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
              return el.dom7ElementDataStorage[key];
            }

            var dataKey = el.getAttribute("data-" + key);

            if (dataKey) {
              return dataKey;
            }

            return undefined;
          }

          return undefined;
        } // Set value


        for (var i = 0; i < this.length; i += 1) {
          el = this[i];

          if (!el.dom7ElementDataStorage) {
            el.dom7ElementDataStorage = {};
          }

          el.dom7ElementDataStorage[key] = value;
        }

        return this;
      } // Transforms
      // eslint-disable-next-line


      function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
          var elStyle = this[i].style;
          elStyle.webkitTransform = transform;
          elStyle.transform = transform;
        }

        return this;
      }

      function transition(duration) {
        if (typeof duration !== 'string') {
          duration = duration + "ms"; // eslint-disable-line
        }

        for (var i = 0; i < this.length; i += 1) {
          var elStyle = this[i].style;
          elStyle.webkitTransitionDuration = duration;
          elStyle.transitionDuration = duration;
        }

        return this;
      } // Events


      function on() {
        var assign;
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];

        if (typeof args[1] === 'function') {
          assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
          targetSelector = undefined;
        }

        if (!capture) {
          capture = false;
        }

        function handleLiveEvent(e) {
          var target = e.target;

          if (!target) {
            return;
          }

          var eventData = e.target.dom7EventData || [];

          if (eventData.indexOf(e) < 0) {
            eventData.unshift(e);
          }

          if ($(target).is(targetSelector)) {
            listener.apply(target, eventData);
          } else {
            var parents = $(target).parents(); // eslint-disable-line

            for (var k = 0; k < parents.length; k += 1) {
              if ($(parents[k]).is(targetSelector)) {
                listener.apply(parents[k], eventData);
              }
            }
          }
        }

        function handleEvent(e) {
          var eventData = e && e.target ? e.target.dom7EventData || [] : [];

          if (eventData.indexOf(e) < 0) {
            eventData.unshift(e);
          }

          listener.apply(this, eventData);
        }

        var events = eventType.split(' ');
        var j;

        for (var i = 0; i < this.length; i += 1) {
          var el = this[i];

          if (!targetSelector) {
            for (j = 0; j < events.length; j += 1) {
              var event = events[j];

              if (!el.dom7Listeners) {
                el.dom7Listeners = {};
              }

              if (!el.dom7Listeners[event]) {
                el.dom7Listeners[event] = [];
              }

              el.dom7Listeners[event].push({
                listener: listener,
                proxyListener: handleEvent
              });
              el.addEventListener(event, handleEvent, capture);
            }
          } else {
            // Live events
            for (j = 0; j < events.length; j += 1) {
              var event$1 = events[j];

              if (!el.dom7LiveListeners) {
                el.dom7LiveListeners = {};
              }

              if (!el.dom7LiveListeners[event$1]) {
                el.dom7LiveListeners[event$1] = [];
              }

              el.dom7LiveListeners[event$1].push({
                listener: listener,
                proxyListener: handleLiveEvent
              });
              el.addEventListener(event$1, handleLiveEvent, capture);
            }
          }
        }

        return this;
      }

      function off() {
        var assign;
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];

        if (typeof args[1] === 'function') {
          assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
          targetSelector = undefined;
        }

        if (!capture) {
          capture = false;
        }

        var events = eventType.split(' ');

        for (var i = 0; i < events.length; i += 1) {
          var event = events[i];

          for (var j = 0; j < this.length; j += 1) {
            var el = this[j];
            var handlers = void 0;

            if (!targetSelector && el.dom7Listeners) {
              handlers = el.dom7Listeners[event];
            } else if (targetSelector && el.dom7LiveListeners) {
              handlers = el.dom7LiveListeners[event];
            }

            if (handlers && handlers.length) {
              for (var k = handlers.length - 1; k >= 0; k -= 1) {
                var handler = handlers[k];

                if (listener && handler.listener === listener) {
                  el.removeEventListener(event, handler.proxyListener, capture);
                  handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                  el.removeEventListener(event, handler.proxyListener, capture);
                  handlers.splice(k, 1);
                } else if (!listener) {
                  el.removeEventListener(event, handler.proxyListener, capture);
                  handlers.splice(k, 1);
                }
              }
            }
          }
        }

        return this;
      }

      function trigger() {
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var events = args[0].split(' ');
        var eventData = args[1];

        for (var i = 0; i < events.length; i += 1) {
          var event = events[i];

          for (var j = 0; j < this.length; j += 1) {
            var el = this[j];
            var evt = void 0;

            try {
              evt = new win.CustomEvent(event, {
                detail: eventData,
                bubbles: true,
                cancelable: true
              });
            } catch (e) {
              evt = doc.createEvent('Event');
              evt.initEvent(event, true, true);
              evt.detail = eventData;
            } // eslint-disable-next-line


            el.dom7EventData = args.filter(function (data, dataIndex) {
              return dataIndex > 0;
            });
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }

        return this;
      }

      function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;

        function fireCallBack(e) {
          /* jshint validthis:true */
          if (e.target !== this) {
            return;
          }

          callback.call(this, e);

          for (i = 0; i < events.length; i += 1) {
            dom.off(events[i], fireCallBack);
          }
        }

        if (callback) {
          for (i = 0; i < events.length; i += 1) {
            dom.on(events[i], fireCallBack);
          }
        }

        return this;
      }

      function outerWidth(includeMargins) {
        if (this.length > 0) {
          if (includeMargins) {
            // eslint-disable-next-line
            var styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
          }

          return this[0].offsetWidth;
        }

        return null;
      }

      function outerHeight(includeMargins) {
        if (this.length > 0) {
          if (includeMargins) {
            // eslint-disable-next-line
            var styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
          }

          return this[0].offsetHeight;
        }

        return null;
      }

      function offset() {
        if (this.length > 0) {
          var el = this[0];
          var box = el.getBoundingClientRect();
          var body = doc.body;
          var clientTop = el.clientTop || body.clientTop || 0;
          var clientLeft = el.clientLeft || body.clientLeft || 0;
          var scrollTop = el === win ? win.scrollY : el.scrollTop;
          var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
          return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
          };
        }

        return null;
      }

      function styles() {
        if (this[0]) {
          return win.getComputedStyle(this[0], null);
        }

        return {};
      }

      function css(props, value) {
        var i;

        if (arguments.length === 1) {
          if (typeof props === 'string') {
            if (this[0]) {
              return win.getComputedStyle(this[0], null).getPropertyValue(props);
            }
          } else {
            for (i = 0; i < this.length; i += 1) {
              // eslint-disable-next-line
              for (var prop in props) {
                this[i].style[prop] = props[prop];
              }
            }

            return this;
          }
        }

        if (arguments.length === 2 && typeof props === 'string') {
          for (i = 0; i < this.length; i += 1) {
            this[i].style[props] = value;
          }

          return this;
        }

        return this;
      } // Iterate over the collection passing elements to `callback`


      function each(callback) {
        // Don't bother continuing without a callback
        if (!callback) {
          return this;
        } // Iterate over the current collection


        for (var i = 0; i < this.length; i += 1) {
          // If the callback returns false
          if (callback.call(this[i], i, this[i]) === false) {
            // End the loop early
            return this;
          }
        } // Return `this` to allow chained DOM operations


        return this;
      }

      function filter(callback) {
        var matchedItems = [];
        var dom = this;

        for (var i = 0; i < dom.length; i += 1) {
          if (callback.call(dom[i], i, dom[i])) {
            matchedItems.push(dom[i]);
          }
        }

        return new Dom7(matchedItems);
      } // eslint-disable-next-line


      function html(html) {
        if (typeof html === 'undefined') {
          return this[0] ? this[0].innerHTML : undefined;
        }

        for (var i = 0; i < this.length; i += 1) {
          this[i].innerHTML = html;
        }

        return this;
      } // eslint-disable-next-line


      function text(text) {
        if (typeof text === 'undefined') {
          if (this[0]) {
            return this[0].textContent.trim();
          }

          return null;
        }

        for (var i = 0; i < this.length; i += 1) {
          this[i].textContent = text;
        }

        return this;
      }

      function is(selector) {
        var el = this[0];
        var compareWith;
        var i;

        if (!el || typeof selector === 'undefined') {
          return false;
        }

        if (typeof selector === 'string') {
          if (el.matches) {
            return el.matches(selector);
          } else if (el.webkitMatchesSelector) {
            return el.webkitMatchesSelector(selector);
          } else if (el.msMatchesSelector) {
            return el.msMatchesSelector(selector);
          }

          compareWith = $(selector);

          for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el) {
              return true;
            }
          }

          return false;
        } else if (selector === doc) {
          return el === doc;
        } else if (selector === win) {
          return el === win;
        }

        if (selector.nodeType || selector instanceof Dom7) {
          compareWith = selector.nodeType ? [selector] : selector;

          for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el) {
              return true;
            }
          }

          return false;
        }

        return false;
      }

      function index() {
        var child = this[0];
        var i;

        if (child) {
          i = 0; // eslint-disable-next-line

          while ((child = child.previousSibling) !== null) {
            if (child.nodeType === 1) {
              i += 1;
            }
          }

          return i;
        }

        return undefined;
      } // eslint-disable-next-line


      function eq(index) {
        if (typeof index === 'undefined') {
          return this;
        }

        var length = this.length;
        var returnIndex;

        if (index > length - 1) {
          return new Dom7([]);
        }

        if (index < 0) {
          returnIndex = length + index;

          if (returnIndex < 0) {
            return new Dom7([]);
          }

          return new Dom7([this[returnIndex]]);
        }

        return new Dom7([this[index]]);
      }

      function append() {
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var newChild;

        for (var k = 0; k < args.length; k += 1) {
          newChild = args[k];

          for (var i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
              var tempDiv = doc.createElement('div');
              tempDiv.innerHTML = newChild;

              while (tempDiv.firstChild) {
                this[i].appendChild(tempDiv.firstChild);
              }
            } else if (newChild instanceof Dom7) {
              for (var j = 0; j < newChild.length; j += 1) {
                this[i].appendChild(newChild[j]);
              }
            } else {
              this[i].appendChild(newChild);
            }
          }
        }

        return this;
      }

      function prepend(newChild) {
        var i;
        var j;

        for (i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = doc.createElement('div');
            tempDiv.innerHTML = newChild;

            for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
              this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            }
          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j += 1) {
              this[i].insertBefore(newChild[j], this[i].childNodes[0]);
            }
          } else {
            this[i].insertBefore(newChild, this[i].childNodes[0]);
          }
        }

        return this;
      }

      function next(selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
              return new Dom7([this[0].nextElementSibling]);
            }

            return new Dom7([]);
          }

          if (this[0].nextElementSibling) {
            return new Dom7([this[0].nextElementSibling]);
          }

          return new Dom7([]);
        }

        return new Dom7([]);
      }

      function nextAll(selector) {
        var nextEls = [];
        var el = this[0];

        if (!el) {
          return new Dom7([]);
        }

        while (el.nextElementSibling) {
          var next = el.nextElementSibling; // eslint-disable-line

          if (selector) {
            if ($(next).is(selector)) {
              nextEls.push(next);
            }
          } else {
            nextEls.push(next);
          }

          el = next;
        }

        return new Dom7(nextEls);
      }

      function prev(selector) {
        if (this.length > 0) {
          var el = this[0];

          if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
              return new Dom7([el.previousElementSibling]);
            }

            return new Dom7([]);
          }

          if (el.previousElementSibling) {
            return new Dom7([el.previousElementSibling]);
          }

          return new Dom7([]);
        }

        return new Dom7([]);
      }

      function prevAll(selector) {
        var prevEls = [];
        var el = this[0];

        if (!el) {
          return new Dom7([]);
        }

        while (el.previousElementSibling) {
          var prev = el.previousElementSibling; // eslint-disable-line

          if (selector) {
            if ($(prev).is(selector)) {
              prevEls.push(prev);
            }
          } else {
            prevEls.push(prev);
          }

          el = prev;
        }

        return new Dom7(prevEls);
      }

      function parent(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
          if (this[i].parentNode !== null) {
            if (selector) {
              if ($(this[i].parentNode).is(selector)) {
                parents.push(this[i].parentNode);
              }
            } else {
              parents.push(this[i].parentNode);
            }
          }
        }

        return $(unique(parents));
      }

      function parents(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
          var parent = this[i].parentNode; // eslint-disable-line

          while (parent) {
            if (selector) {
              if ($(parent).is(selector)) {
                parents.push(parent);
              }
            } else {
              parents.push(parent);
            }

            parent = parent.parentNode;
          }
        }

        return $(unique(parents));
      }

      function closest(selector) {
        var closest = this; // eslint-disable-line

        if (typeof selector === 'undefined') {
          return new Dom7([]);
        }

        if (!closest.is(selector)) {
          closest = closest.parents(selector).eq(0);
        }

        return closest;
      }

      function find(selector) {
        var foundElements = [];

        for (var i = 0; i < this.length; i += 1) {
          var found = this[i].querySelectorAll(selector);

          for (var j = 0; j < found.length; j += 1) {
            foundElements.push(found[j]);
          }
        }

        return new Dom7(foundElements);
      }

      function children(selector) {
        var children = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
          var childNodes = this[i].childNodes;

          for (var j = 0; j < childNodes.length; j += 1) {
            if (!selector) {
              if (childNodes[j].nodeType === 1) {
                children.push(childNodes[j]);
              }
            } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
              children.push(childNodes[j]);
            }
          }
        }

        return new Dom7(unique(children));
      }

      function remove() {
        for (var i = 0; i < this.length; i += 1) {
          if (this[i].parentNode) {
            this[i].parentNode.removeChild(this[i]);
          }
        }

        return this;
      }

      function add() {
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var dom = this;
        var i;
        var j;

        for (i = 0; i < args.length; i += 1) {
          var toAdd = $(args[i]);

          for (j = 0; j < toAdd.length; j += 1) {
            dom[dom.length] = toAdd[j];
            dom.length += 1;
          }
        }

        return dom;
      }

      var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        filter: filter,
        remove: remove,
        add: add,
        styles: styles
      };
      Object.keys(Methods).forEach(function (methodName) {
        $.fn[methodName] = $.fn[methodName] || Methods[methodName];
      });
      var Utils = {
        deleteProps: function deleteProps(obj) {
          var object = obj;
          Object.keys(object).forEach(function (key) {
            try {
              object[key] = null;
            } catch (e) {// no getter for object
            }

            try {
              delete object[key];
            } catch (e) {// something got wrong
            }
          });
        },
        nextTick: function nextTick(callback, delay) {
          if (delay === void 0) delay = 0;
          return setTimeout(callback, delay);
        },
        now: function now() {
          return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
          if (axis === void 0) axis = 'x';
          var matrix;
          var curTransform;
          var transformMatrix;
          var curStyle = win.getComputedStyle(el, null);

          if (win.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;

            if (curTransform.split(',').length > 6) {
              curTransform = curTransform.split(', ').map(function (a) {
                return a.replace(',', '.');
              }).join(', ');
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case


            transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
          } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
          }

          if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix) {
              curTransform = transformMatrix.m41;
            } // Crazy IE10 Matrix
            else if (matrix.length === 16) {
                curTransform = parseFloat(matrix[12]);
              } // Normal Browsers
              else {
                  curTransform = parseFloat(matrix[4]);
                }
          }

          if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix) {
              curTransform = transformMatrix.m42;
            } // Crazy IE10 Matrix
            else if (matrix.length === 16) {
                curTransform = parseFloat(matrix[13]);
              } // Normal Browsers
              else {
                  curTransform = parseFloat(matrix[5]);
                }
          }

          return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
          var query = {};
          var urlToParse = url || win.location.href;
          var i;
          var params;
          var param;
          var length;

          if (typeof urlToParse === 'string' && urlToParse.length) {
            urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
            params = urlToParse.split('&').filter(function (paramsPart) {
              return paramsPart !== '';
            });
            length = params.length;

            for (i = 0; i < length; i += 1) {
              param = params[i].replace(/#\S+/g, '').split('=');
              query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
            }
          }

          return query;
        },
        isObject: function isObject(o) {
          return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
          var args = [],
              len$1 = arguments.length;

          while (len$1--) args[len$1] = arguments[len$1];

          var to = Object(args[0]);

          for (var i = 1; i < args.length; i += 1) {
            var nextSource = args[i];

            if (nextSource !== undefined && nextSource !== null) {
              var keysArray = Object.keys(Object(nextSource));

              for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                if (desc !== undefined && desc.enumerable) {
                  if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                    Utils.extend(to[nextKey], nextSource[nextKey]);
                  } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                    to[nextKey] = {};
                    Utils.extend(to[nextKey], nextSource[nextKey]);
                  } else {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
          }

          return to;
        }
      };

      var Support = function Support() {
        return {
          touch: win.Modernizr && win.Modernizr.touch === true || function checkTouch() {
            return !!(win.navigator.maxTouchPoints > 0 || 'ontouchstart' in win || win.DocumentTouch && doc instanceof win.DocumentTouch);
          }(),
          pointerEvents: !!win.PointerEvent && 'maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0,
          observer: function checkObserver() {
            return 'MutationObserver' in win || 'WebkitMutationObserver' in win;
          }(),
          passiveListener: function checkPassiveListener() {
            var supportsPassive = false;

            try {
              var opts = Object.defineProperty({}, 'passive', {
                // eslint-disable-next-line
                get: function get() {
                  supportsPassive = true;
                }
              });
              win.addEventListener('testPassiveListener', null, opts);
            } catch (e) {// No support
            }

            return supportsPassive;
          }(),
          gestures: function checkGestures() {
            return 'ongesturestart' in win;
          }()
        };
      }();

      var SwiperClass = function SwiperClass(params) {
        if (params === void 0) params = {};
        var self = this;
        self.params = params; // Events

        self.eventsListeners = {};

        if (self.params && self.params.on) {
          Object.keys(self.params.on).forEach(function (eventName) {
            self.on(eventName, self.params.on[eventName]);
          });
        }
      };

      var staticAccessors = {
        components: {
          configurable: true
        }
      };

      SwiperClass.prototype.on = function on(events, handler, priority) {
        var self = this;

        if (typeof handler !== 'function') {
          return self;
        }

        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
          if (!self.eventsListeners[event]) {
            self.eventsListeners[event] = [];
          }

          self.eventsListeners[event][method](handler);
        });
        return self;
      };

      SwiperClass.prototype.once = function once(events, handler, priority) {
        var self = this;

        if (typeof handler !== 'function') {
          return self;
        }

        function onceHandler() {
          var args = [],
              len = arguments.length;

          while (len--) args[len] = arguments[len];

          self.off(events, onceHandler);

          if (onceHandler.f7proxy) {
            delete onceHandler.f7proxy;
          }

          handler.apply(self, args);
        }

        onceHandler.f7proxy = handler;
        return self.on(events, onceHandler, priority);
      };

      SwiperClass.prototype.off = function off(events, handler) {
        var self = this;

        if (!self.eventsListeners) {
          return self;
        }

        events.split(' ').forEach(function (event) {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
            self.eventsListeners[event].forEach(function (eventHandler, index) {
              if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      };

      SwiperClass.prototype.emit = function emit() {
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        var self = this;

        if (!self.eventsListeners) {
          return self;
        }

        var events;
        var data;
        var context;

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
          if (self.eventsListeners && self.eventsListeners[event]) {
            var handlers = [];
            self.eventsListeners[event].forEach(function (eventHandler) {
              handlers.push(eventHandler);
            });
            handlers.forEach(function (eventHandler) {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      };

      SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
        var instance = this;

        if (!instance.modules) {
          return;
        }

        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName]; // Extend params

          if (module.params) {
            Utils.extend(instanceParams, module.params);
          }
        });
      };

      SwiperClass.prototype.useModules = function useModules(modulesParams) {
        if (modulesParams === void 0) modulesParams = {};
        var instance = this;

        if (!instance.modules) {
          return;
        }

        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName];
          var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

          if (module.instance) {
            Object.keys(module.instance).forEach(function (modulePropName) {
              var moduleProp = module.instance[modulePropName];

              if (typeof moduleProp === 'function') {
                instance[modulePropName] = moduleProp.bind(instance);
              } else {
                instance[modulePropName] = moduleProp;
              }
            });
          } // Add event listeners


          if (module.on && instance.on) {
            Object.keys(module.on).forEach(function (moduleEventName) {
              instance.on(moduleEventName, module.on[moduleEventName]);
            });
          } // Module create callback


          if (module.create) {
            module.create.bind(instance)(moduleParams);
          }
        });
      };

      staticAccessors.components.set = function (components) {
        var Class = this;

        if (!Class.use) {
          return;
        }

        Class.use(components);
      };

      SwiperClass.installModule = function installModule(module) {
        var params = [],
            len = arguments.length - 1;

        while (len-- > 0) params[len] = arguments[len + 1];

        var Class = this;

        if (!Class.prototype.modules) {
          Class.prototype.modules = {};
        }

        var name = module.name || Object.keys(Class.prototype.modules).length + "_" + Utils.now();
        Class.prototype.modules[name] = module; // Prototype

        if (module.proto) {
          Object.keys(module.proto).forEach(function (key) {
            Class.prototype[key] = module.proto[key];
          });
        } // Class


        if (module.static) {
          Object.keys(module.static).forEach(function (key) {
            Class[key] = module.static[key];
          });
        } // Callback


        if (module.install) {
          module.install.apply(Class, params);
        }

        return Class;
      };

      SwiperClass.use = function use(module) {
        var params = [],
            len = arguments.length - 1;

        while (len-- > 0) params[len] = arguments[len + 1];

        var Class = this;

        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Class.installModule(m);
          });
          return Class;
        }

        return Class.installModule.apply(Class, [module].concat(params));
      };

      Object.defineProperties(SwiperClass, staticAccessors);

      function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;

        if (typeof swiper.params.width !== 'undefined') {
          width = swiper.params.width;
        } else {
          width = $el[0].clientWidth;
        }

        if (typeof swiper.params.height !== 'undefined') {
          height = swiper.params.height;
        } else {
          height = $el[0].clientHeight;
        }

        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
          return;
        } // Subtract paddings


        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
        Utils.extend(swiper, {
          width: width,
          height: height,
          size: swiper.isHorizontal() ? width : height
        });
      }

      function updateSlides() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtlTranslate;
        var wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children("." + swiper.params.slideClass);
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        function slidesForMargin(slideIndex) {
          if (!params.cssMode) {
            return true;
          }

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }

        var offsetBefore = params.slidesOffsetBefore;

        if (typeof offsetBefore === 'function') {
          offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;

        if (typeof offsetAfter === 'function') {
          offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;

        if (typeof swiperSize === 'undefined') {
          return;
        }

        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
          spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        }

        swiper.virtualSize = -spaceBetween; // reset margins

        if (rtl) {
          slides.css({
            marginLeft: '',
            marginTop: ''
          });
        } else {
          slides.css({
            marginRight: '',
            marginBottom: ''
          });
        }

        var slidesNumberEvenToRows;

        if (params.slidesPerColumn > 1) {
          if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
            slidesNumberEvenToRows = slidesLength;
          } else {
            slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
          }

          if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
          }
        } // Calc slides


        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

        for (var i = 0; i < slidesLength; i += 1) {
          slideSize = 0;
          var slide = slides.eq(i);

          if (params.slidesPerColumn > 1) {
            // Set slides order
            var newSlideOrderIndex = void 0;
            var column = void 0;
            var row = void 0;

            if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
              var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
              var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
              var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
              row = Math.floor(slideIndexInGroup / columnsInGroup);
              column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
              newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
              slide.css({
                '-webkit-box-ordinal-group': newSlideOrderIndex,
                '-moz-box-ordinal-group': newSlideOrderIndex,
                '-ms-flex-order': newSlideOrderIndex,
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
              });
            } else if (params.slidesPerColumnFill === 'column') {
              column = Math.floor(i / slidesPerColumn);
              row = i - column * slidesPerColumn;

              if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                row += 1;

                if (row >= slidesPerColumn) {
                  row = 0;
                  column += 1;
                }
              }
            } else {
              row = Math.floor(i / slidesPerRow);
              column = i - row * slidesPerRow;
            }

            slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
          }

          if (slide.css('display') === 'none') {
            continue;
          } // eslint-disable-line


          if (params.slidesPerView === 'auto') {
            var slideStyles = win.getComputedStyle(slide[0], null);
            var currentTransform = slide[0].style.transform;
            var currentWebKitTransform = slide[0].style.webkitTransform;

            if (currentTransform) {
              slide[0].style.transform = 'none';
            }

            if (currentWebKitTransform) {
              slide[0].style.webkitTransform = 'none';
            }

            if (params.roundLengths) {
              slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            } else {
              // eslint-disable-next-line
              if (swiper.isHorizontal()) {
                var width = parseFloat(slideStyles.getPropertyValue('width'));
                var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
                var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
                var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
                var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
                var boxSizing = slideStyles.getPropertyValue('box-sizing');

                if (boxSizing && boxSizing === 'border-box') {
                  slideSize = width + marginLeft + marginRight;
                } else {
                  slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                }
              } else {
                var height = parseFloat(slideStyles.getPropertyValue('height'));
                var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
                var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
                var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
                var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');

                if (boxSizing$1 && boxSizing$1 === 'border-box') {
                  slideSize = height + marginTop + marginBottom;
                } else {
                  slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                }
              }
            }

            if (currentTransform) {
              slide[0].style.transform = currentTransform;
            }

            if (currentWebKitTransform) {
              slide[0].style.webkitTransform = currentWebKitTransform;
            }

            if (params.roundLengths) {
              slideSize = Math.floor(slideSize);
            }
          } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;

            if (params.roundLengths) {
              slideSize = Math.floor(slideSize);
            }

            if (slides[i]) {
              if (swiper.isHorizontal()) {
                slides[i].style.width = slideSize + "px";
              } else {
                slides[i].style.height = slideSize + "px";
              }
            }
          }

          if (slides[i]) {
            slides[i].swiperSlideSize = slideSize;
          }

          slidesSizesGrid.push(slideSize);

          if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;

            if (prevSlideSize === 0 && i !== 0) {
              slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            }

            if (i === 0) {
              slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            }

            if (Math.abs(slidePosition) < 1 / 1000) {
              slidePosition = 0;
            }

            if (params.roundLengths) {
              slidePosition = Math.floor(slidePosition);
            }

            if (index % params.slidesPerGroup === 0) {
              snapGrid.push(slidePosition);
            }

            slidesGrid.push(slidePosition);
          } else {
            if (params.roundLengths) {
              slidePosition = Math.floor(slidePosition);
            }

            if (index % params.slidesPerGroup === 0) {
              snapGrid.push(slidePosition);
            }

            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
          }

          swiper.virtualSize += slideSize + spaceBetween;
          prevSlideSize = slideSize;
          index += 1;
        }

        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
          $wrapperEl.css({
            width: swiper.virtualSize + params.spaceBetween + "px"
          });
        }

        if (params.setWrapperSize) {
          if (swiper.isHorizontal()) {
            $wrapperEl.css({
              width: swiper.virtualSize + params.spaceBetween + "px"
            });
          } else {
            $wrapperEl.css({
              height: swiper.virtualSize + params.spaceBetween + "px"
            });
          }
        }

        if (params.slidesPerColumn > 1) {
          swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
          swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;

          if (swiper.isHorizontal()) {
            $wrapperEl.css({
              width: swiper.virtualSize + params.spaceBetween + "px"
            });
          } else {
            $wrapperEl.css({
              height: swiper.virtualSize + params.spaceBetween + "px"
            });
          }

          if (params.centeredSlides) {
            newSlidesGrid = [];

            for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
              var slidesGridItem = snapGrid[i$1];

              if (params.roundLengths) {
                slidesGridItem = Math.floor(slidesGridItem);
              }

              if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
                newSlidesGrid.push(slidesGridItem);
              }
            }

            snapGrid = newSlidesGrid;
          }
        } // Remove last grid elements depending on width


        if (!params.centeredSlides) {
          newSlidesGrid = [];

          for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
            var slidesGridItem$1 = snapGrid[i$2];

            if (params.roundLengths) {
              slidesGridItem$1 = Math.floor(slidesGridItem$1);
            }

            if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
              newSlidesGrid.push(slidesGridItem$1);
            }
          }

          snapGrid = newSlidesGrid;

          if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
            snapGrid.push(swiper.virtualSize - swiperSize);
          }
        }

        if (snapGrid.length === 0) {
          snapGrid = [0];
        }

        if (params.spaceBetween !== 0) {
          if (swiper.isHorizontal()) {
            if (rtl) {
              slides.filter(slidesForMargin).css({
                marginLeft: spaceBetween + "px"
              });
            } else {
              slides.filter(slidesForMargin).css({
                marginRight: spaceBetween + "px"
              });
            }
          } else {
            slides.filter(slidesForMargin).css({
              marginBottom: spaceBetween + "px"
            });
          }
        }

        if (params.centeredSlides && params.centeredSlidesBounds) {
          var allSlidesSize = 0;
          slidesSizesGrid.forEach(function (slideSizeValue) {
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
          });
          allSlidesSize -= params.spaceBetween;
          var maxSnap = allSlidesSize - swiperSize;
          snapGrid = snapGrid.map(function (snap) {
            if (snap < 0) {
              return -offsetBefore;
            }

            if (snap > maxSnap) {
              return maxSnap + offsetAfter;
            }

            return snap;
          });
        }

        if (params.centerInsufficientSlides) {
          var allSlidesSize$1 = 0;
          slidesSizesGrid.forEach(function (slideSizeValue) {
            allSlidesSize$1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
          });
          allSlidesSize$1 -= params.spaceBetween;

          if (allSlidesSize$1 < swiperSize) {
            var allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
            snapGrid.forEach(function (snap, snapIndex) {
              snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach(function (snap, snapIndex) {
              slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
          }
        }

        Utils.extend(swiper, {
          slides: slides,
          snapGrid: snapGrid,
          slidesGrid: slidesGrid,
          slidesSizesGrid: slidesSizesGrid
        });

        if (slidesLength !== previousSlidesLength) {
          swiper.emit('slidesLengthChange');
        }

        if (snapGrid.length !== previousSnapGridLength) {
          if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
          }

          swiper.emit('snapGridLengthChange');
        }

        if (slidesGrid.length !== previousSlidesGridLength) {
          swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
          swiper.updateSlidesOffset();
        }
      }

      function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;

        if (typeof speed === 'number') {
          swiper.setTransition(speed);
        } else if (speed === true) {
          swiper.setTransition(swiper.params.speed);
        } // Find slides currently in view


        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;

            if (index > swiper.slides.length) {
              break;
            }

            activeSlides.push(swiper.slides.eq(index)[0]);
          }
        } else {
          activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        } // Find new height from highest slide in view


        for (i = 0; i < activeSlides.length; i += 1) {
          if (typeof activeSlides[i] !== 'undefined') {
            var height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
          }
        } // Update Height


        if (newHeight) {
          swiper.$wrapperEl.css('height', newHeight + "px");
        }
      }

      function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
          slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
      }

      function updateSlidesProgress(translate) {
        if (translate === void 0) translate = this && this.translate || 0;
        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;

        if (slides.length === 0) {
          return;
        }

        if (typeof slides[0].swiperSlideOffset === 'undefined') {
          swiper.updateSlidesOffset();
        }

        var offsetCenter = -translate;

        if (rtl) {
          offsetCenter = translate;
        } // Visible Slides


        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];

        for (var i = 0; i < slides.length; i += 1) {
          var slide = slides[i];
          var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

          if (params.watchSlidesVisibility) {
            var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
            var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

            if (isVisible) {
              swiper.visibleSlides.push(slide);
              swiper.visibleSlidesIndexes.push(i);
              slides.eq(i).addClass(params.slideVisibleClass);
            }
          }

          slide.progress = rtl ? -slideProgress : slideProgress;
        }

        swiper.visibleSlides = $(swiper.visibleSlides);
      }

      function updateProgress(translate) {
        var swiper = this;

        if (typeof translate === 'undefined') {
          var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

          translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }

        var params = swiper.params;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;

        if (translatesDiff === 0) {
          progress = 0;
          isBeginning = true;
          isEnd = true;
        } else {
          progress = (translate - swiper.minTranslate()) / translatesDiff;
          isBeginning = progress <= 0;
          isEnd = progress >= 1;
        }

        Utils.extend(swiper, {
          progress: progress,
          isBeginning: isBeginning,
          isEnd: isEnd
        });

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
          swiper.updateSlidesProgress(translate);
        }

        if (isBeginning && !wasBeginning) {
          swiper.emit('reachBeginning toEdge');
        }

        if (isEnd && !wasEnd) {
          swiper.emit('reachEnd toEdge');
        }

        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
          swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
      }

      function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
        var activeSlide;

        if (isVirtual) {
          activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
        } else {
          activeSlide = slides.eq(activeIndex);
        } // Active classes


        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
          // Duplicate to all looped slides
          if (activeSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
          } else {
            $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
          }
        } // Next Slide


        var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

        if (params.loop && nextSlide.length === 0) {
          nextSlide = slides.eq(0);
          nextSlide.addClass(params.slideNextClass);
        } // Prev Slide


        var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

        if (params.loop && prevSlide.length === 0) {
          prevSlide = slides.eq(-1);
          prevSlide.addClass(params.slidePrevClass);
        }

        if (params.loop) {
          // Duplicate to all looped slides
          if (nextSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
          } else {
            $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
          }

          if (prevSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
          } else {
            $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
          }
        }
      }

      function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;

        if (typeof activeIndex === 'undefined') {
          for (var i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
              if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                activeIndex = i;
              } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                activeIndex = i + 1;
              }
            } else if (translate >= slidesGrid[i]) {
              activeIndex = i;
            }
          } // Normalize slideIndex


          if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') {
              activeIndex = 0;
            }
          }
        }

        if (snapGrid.indexOf(translate) >= 0) {
          snapIndex = snapGrid.indexOf(translate);
        } else {
          snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }

        if (snapIndex >= snapGrid.length) {
          snapIndex = snapGrid.length - 1;
        }

        if (activeIndex === previousIndex) {
          if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
          }

          return;
        } // Get real index


        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        Utils.extend(swiper, {
          snapIndex: snapIndex,
          realIndex: realIndex,
          previousIndex: previousIndex,
          activeIndex: activeIndex
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');

        if (previousRealIndex !== realIndex) {
          swiper.emit('realIndexChange');
        }

        if (swiper.initialized || swiper.runCallbacksOnInit) {
          swiper.emit('slideChange');
        }
      }

      function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest("." + params.slideClass)[0];
        var slideFound = false;

        if (slide) {
          for (var i = 0; i < swiper.slides.length; i += 1) {
            if (swiper.slides[i] === slide) {
              slideFound = true;
            }
          }
        }

        if (slide && slideFound) {
          swiper.clickedSlide = slide;

          if (swiper.virtual && swiper.params.virtual.enabled) {
            swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
          } else {
            swiper.clickedIndex = $(slide).index();
          }
        } else {
          swiper.clickedSlide = undefined;
          swiper.clickedIndex = undefined;
          return;
        }

        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
          swiper.slideToClickedSlide();
        }
      }

      var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide
      };

      function getTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
        var swiper = this;
        var params = swiper.params;
        var rtl = swiper.rtlTranslate;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
          return rtl ? -translate : translate;
        }

        if (params.cssMode) {
          return translate;
        }

        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);

        if (rtl) {
          currentTranslate = -currentTranslate;
        }

        return currentTranslate || 0;
      }

      function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var wrapperEl = swiper.wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
          x = rtl ? -translate : translate;
        } else {
          y = translate;
        }

        if (params.roundLengths) {
          x = Math.floor(x);
          y = Math.floor(y);
        }

        if (params.cssMode) {
          wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
          $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
        }

        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
          newProgress = 0;
        } else {
          newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== progress) {
          swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
      }

      function minTranslate() {
        return -this.snapGrid[0];
      }

      function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }

      function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        var obj;
        if (translate === void 0) translate = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (translateBounds === void 0) translateBounds = true;
        var swiper = this;
        var params = swiper.params;
        var wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
          return false;
        }

        var minTranslate = swiper.minTranslate();
        var maxTranslate = swiper.maxTranslate();
        var newTranslate;

        if (translateBounds && translate > minTranslate) {
          newTranslate = minTranslate;
        } else if (translateBounds && translate < maxTranslate) {
          newTranslate = maxTranslate;
        } else {
          newTranslate = translate;
        } // Update progress


        swiper.updateProgress(newTranslate);

        if (params.cssMode) {
          var isH = swiper.isHorizontal();

          if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          } else {
            // eslint-disable-next-line
            if (wrapperEl.scrollTo) {
              wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -newTranslate, obj.behavior = 'smooth', obj));
            } else {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            }
          }

          return true;
        }

        if (speed === 0) {
          swiper.setTransition(0);
          swiper.setTranslate(newTranslate);

          if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
          }
        } else {
          swiper.setTransition(speed);
          swiper.setTranslate(newTranslate);

          if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
          }

          if (!swiper.animating) {
            swiper.animating = true;

            if (!swiper.onTranslateToWrapperTransitionEnd) {
              swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) {
                  return;
                }

                if (e.target !== this) {
                  return;
                }

                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;

                if (runCallbacks) {
                  swiper.emit('transitionEnd');
                }
              };
            }

            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          }
        }

        return true;
      }

      var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
        translateTo: translateTo
      };

      function setTransition(duration, byController) {
        var swiper = this;

        if (!swiper.params.cssMode) {
          swiper.$wrapperEl.transition(duration);
        }

        swiper.emit('setTransition', duration, byController);
      }

      function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;

        if (params.cssMode) {
          return;
        }

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        var dir = direction;

        if (!dir) {
          if (activeIndex > previousIndex) {
            dir = 'next';
          } else if (activeIndex < previousIndex) {
            dir = 'prev';
          } else {
            dir = 'reset';
          }
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
          if (dir === 'reset') {
            swiper.emit('slideResetTransitionStart');
            return;
          }

          swiper.emit('slideChangeTransitionStart');

          if (dir === 'next') {
            swiper.emit('slideNextTransitionStart');
          } else {
            swiper.emit('slidePrevTransitionStart');
          }
        }
      }

      function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        var params = swiper.params;
        swiper.animating = false;

        if (params.cssMode) {
          return;
        }

        swiper.setTransition(0);
        var dir = direction;

        if (!dir) {
          if (activeIndex > previousIndex) {
            dir = 'next';
          } else if (activeIndex < previousIndex) {
            dir = 'prev';
          } else {
            dir = 'reset';
          }
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
          if (dir === 'reset') {
            swiper.emit('slideResetTransitionEnd');
            return;
          }

          swiper.emit('slideChangeTransitionEnd');

          if (dir === 'next') {
            swiper.emit('slideNextTransitionEnd');
          } else {
            swiper.emit('slidePrevTransitionEnd');
          }
        }
      }

      var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1
      };

      function slideTo(index, speed, runCallbacks, internal) {
        var obj;
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var slideIndex = index;

        if (slideIndex < 0) {
          slideIndex = 0;
        }

        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtlTranslate;
        var wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
          return false;
        }

        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);

        if (snapIndex >= snapGrid.length) {
          snapIndex = snapGrid.length - 1;
        }

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
          swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex]; // Update progress

        swiper.updateProgress(translate); // Normalize slideIndex

        if (params.normalizeSlideIndex) {
          for (var i = 0; i < slidesGrid.length; i += 1) {
            if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
              slideIndex = i;
            }
          }
        } // Directions locks


        if (swiper.initialized && slideIndex !== activeIndex) {
          if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
            return false;
          }

          if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) {
              return false;
            }
          }
        }

        var direction;

        if (slideIndex > activeIndex) {
          direction = 'next';
        } else if (slideIndex < activeIndex) {
          direction = 'prev';
        } else {
          direction = 'reset';
        } // Update Index


        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
          swiper.updateActiveIndex(slideIndex); // Update Height

          if (params.autoHeight) {
            swiper.updateAutoHeight();
          }

          swiper.updateSlidesClasses();

          if (params.effect !== 'slide') {
            swiper.setTranslate(translate);
          }

          if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
          }

          return false;
        }

        if (params.cssMode) {
          var isH = swiper.isHorizontal();

          if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
          } else {
            // eslint-disable-next-line
            if (wrapperEl.scrollTo) {
              wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -translate, obj.behavior = 'smooth', obj));
            } else {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
            }
          }

          return true;
        }

        if (speed === 0) {
          swiper.setTransition(0);
          swiper.setTranslate(translate);
          swiper.updateActiveIndex(slideIndex);
          swiper.updateSlidesClasses();
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        } else {
          swiper.setTransition(speed);
          swiper.setTranslate(translate);
          swiper.updateActiveIndex(slideIndex);
          swiper.updateSlidesClasses();
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.transitionStart(runCallbacks, direction);

          if (!swiper.animating) {
            swiper.animating = true;

            if (!swiper.onSlideToWrapperTransitionEnd) {
              swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) {
                  return;
                }

                if (e.target !== this) {
                  return;
                }

                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
              };
            }

            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          }
        }

        return true;
      }

      function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var newIndex = index;

        if (swiper.params.loop) {
          newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
      }
      /* eslint no-unused-vars: "off" */


      function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;

        if (params.loop) {
          if (animating) {
            return false;
          }

          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }

        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
      }
      /* eslint no-unused-vars: "off" */


      function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var rtlTranslate = swiper.rtlTranslate;

        if (params.loop) {
          if (animating) {
            return false;
          }

          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
          if (val < 0) {
            return -Math.floor(Math.abs(val));
          }

          return Math.floor(val);
        }

        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function (val) {
          return normalize(val);
        });
        var normalizedSlidesGrid = slidesGrid.map(function (val) {
          return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

        if (typeof prevSnap === 'undefined' && params.cssMode) {
          snapGrid.forEach(function (snap) {
            if (!prevSnap && normalizedTranslate >= snap) {
              prevSnap = snap;
            }
          });
        }

        var prevIndex;

        if (typeof prevSnap !== 'undefined') {
          prevIndex = slidesGrid.indexOf(prevSnap);

          if (prevIndex < 0) {
            prevIndex = swiper.activeIndex - 1;
          }
        }

        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      }
      /* eslint no-unused-vars: "off" */


      function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
      }
      /* eslint no-unused-vars: "off" */


      function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (threshold === void 0) threshold = 0.5;
        var swiper = this;
        var index = swiper.activeIndex;
        var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

        if (translate >= swiper.snapGrid[snapIndex]) {
          // The current translate is on or after the current snap index, so the choice
          // is between the current index and the one after it.
          var currentSnap = swiper.snapGrid[snapIndex];
          var nextSnap = swiper.snapGrid[snapIndex + 1];

          if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
            index += swiper.params.slidesPerGroup;
          }
        } else {
          // The current translate is before the current snap index, so the choice
          // is between the current index and the one before it.
          var prevSnap = swiper.snapGrid[snapIndex - 1];
          var currentSnap$1 = swiper.snapGrid[snapIndex];

          if (translate - prevSnap <= (currentSnap$1 - prevSnap) * threshold) {
            index -= swiper.params.slidesPerGroup;
          }
        }

        index = Math.max(index, 0);
        index = Math.min(index, swiper.snapGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
      }

      function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;

        if (params.loop) {
          if (swiper.animating) {
            return;
          }

          realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

          if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
              swiper.loopFix();
              slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
              Utils.nextTick(function () {
                swiper.slideTo(slideToIndex);
              });
            } else {
              swiper.slideTo(slideToIndex);
            }
          } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            Utils.nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else {
          swiper.slideTo(slideToIndex);
        }
      }

      var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide
      };

      function loopCreate() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
        var slides = $wrapperEl.children("." + params.slideClass);

        if (params.loopFillGroupWithBlank) {
          var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

          if (blankSlidesNum !== params.slidesPerGroup) {
            for (var i = 0; i < blankSlidesNum; i += 1) {
              var blankNode = $(doc.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
              $wrapperEl.append(blankNode);
            }

            slides = $wrapperEl.children("." + params.slideClass);
          }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) {
          params.loopedSlides = slides.length;
        }

        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        swiper.loopedSlides += params.loopAdditionalSlides;

        if (swiper.loopedSlides > slides.length) {
          swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (index, el) {
          var slide = $(el);

          if (index < swiper.loopedSlides) {
            appendSlides.push(el);
          }

          if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
            prependSlides.push(el);
          }

          slide.attr('data-swiper-slide-index', index);
        });

        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
          $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }

        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
          $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
      }

      function loopFix() {
        var swiper = this;
        swiper.emit('beforeLoopFix');
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var snapGrid = swiper.snapGrid;
        var rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

        if (activeIndex < loopedSlides) {
          newIndex = slides.length - loopedSlides * 3 + activeIndex;
          newIndex += loopedSlides;
          var slideChanged = swiper.slideTo(newIndex, 0, false, true);

          if (slideChanged && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
          }
        } else if (activeIndex >= slides.length - loopedSlides) {
          // Fix For Positive Oversliding
          newIndex = -slides.length + activeIndex + loopedSlides;
          newIndex += loopedSlides;
          var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);

          if (slideChanged$1 && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
          }
        }

        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
      }

      function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
        slides.removeAttr('data-swiper-slide-index');
      }

      var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy
      };

      function setGrabCursor(moving) {
        var swiper = this;

        if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
          return;
        }

        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
      }

      function unsetGrabCursor() {
        var swiper = this;

        if (Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
          return;
        }

        swiper.el.style.cursor = '';
      }

      var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor
      };

      function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;

        if (params.loop) {
          swiper.loopDestroy();
        }

        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) {
              $wrapperEl.append(slides[i]);
            }
          }
        } else {
          $wrapperEl.append(slides);
        }

        if (params.loop) {
          swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
          swiper.update();
        }
      }

      function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
          swiper.loopDestroy();
        }

        var newActiveIndex = activeIndex + 1;

        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) {
              $wrapperEl.prepend(slides[i]);
            }
          }

          newActiveIndex = activeIndex + slides.length;
        } else {
          $wrapperEl.prepend(slides);
        }

        if (params.loop) {
          swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
          swiper.update();
        }

        swiper.slideTo(newActiveIndex, 0, false);
      }

      function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
          activeIndexBuffer -= swiper.loopedSlides;
          swiper.loopDestroy();
          swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var baseLength = swiper.slides.length;

        if (index <= 0) {
          swiper.prependSlide(slides);
          return;
        }

        if (index >= baseLength) {
          swiper.appendSlide(slides);
          return;
        }

        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];

        for (var i = baseLength - 1; i >= index; i -= 1) {
          var currentSlide = swiper.slides.eq(i);
          currentSlide.remove();
          slidesBuffer.unshift(currentSlide);
        }

        if (typeof slides === 'object' && 'length' in slides) {
          for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
            if (slides[i$1]) {
              $wrapperEl.append(slides[i$1]);
            }
          }

          newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
          $wrapperEl.append(slides);
        }

        for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
          $wrapperEl.append(slidesBuffer[i$2]);
        }

        if (params.loop) {
          swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
          swiper.update();
        }

        if (params.loop) {
          swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
          swiper.slideTo(newActiveIndex, 0, false);
        }
      }

      function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
          activeIndexBuffer -= swiper.loopedSlides;
          swiper.loopDestroy();
          swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
          for (var i = 0; i < slidesIndexes.length; i += 1) {
            indexToRemove = slidesIndexes[i];

            if (swiper.slides[indexToRemove]) {
              swiper.slides.eq(indexToRemove).remove();
            }

            if (indexToRemove < newActiveIndex) {
              newActiveIndex -= 1;
            }
          }

          newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
          indexToRemove = slidesIndexes;

          if (swiper.slides[indexToRemove]) {
            swiper.slides.eq(indexToRemove).remove();
          }

          if (indexToRemove < newActiveIndex) {
            newActiveIndex -= 1;
          }

          newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
          swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
          swiper.update();
        }

        if (params.loop) {
          swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
          swiper.slideTo(newActiveIndex, 0, false);
        }
      }

      function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];

        for (var i = 0; i < swiper.slides.length; i += 1) {
          slidesIndexes.push(i);
        }

        swiper.removeSlide(slidesIndexes);
      }

      var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides
      };

      var Device = function Device() {
        var platform = win.navigator.platform;
        var ua = win.navigator.userAgent;
        var device = {
          ios: false,
          android: false,
          androidChrome: false,
          desktop: false,
          iphone: false,
          ipod: false,
          ipad: false,
          edge: false,
          ie: false,
          firefox: false,
          macos: false,
          windows: false,
          cordova: !!(win.cordova || win.phonegap),
          phonegap: !!(win.cordova || win.phonegap),
          electron: false
        };
        var screenWidth = win.screen.width;
        var screenHeight = win.screen.height;
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        var ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
        var edge = ua.indexOf('Edge/') >= 0;
        var firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
        var windows = platform === 'Win32';
        var electron = ua.toLowerCase().indexOf('electron') >= 0;
        var macos = platform === 'MacIntel'; // iPadOs 13 fix

        if (!ipad && macos && Support.touch && (screenWidth === 1024 && screenHeight === 1366 || // Pro 12.9
        screenWidth === 834 && screenHeight === 1194 // Pro 11
        || screenWidth === 834 && screenHeight === 1112 // Pro 10.5
        || screenWidth === 768 && screenHeight === 1024 // other
        )) {
          ipad = ua.match(/(Version)\/([\d.]+)/);
          macos = false;
        }

        device.ie = ie;
        device.edge = edge;
        device.firefox = firefox; // Android

        if (android && !windows) {
          device.os = 'android';
          device.osVersion = android[2];
          device.android = true;
          device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }

        if (ipad || iphone || ipod) {
          device.os = 'ios';
          device.ios = true;
        } // iOS


        if (iphone && !ipod) {
          device.osVersion = iphone[2].replace(/_/g, '.');
          device.iphone = true;
        }

        if (ipad) {
          device.osVersion = ipad[2].replace(/_/g, '.');
          device.ipad = true;
        }

        if (ipod) {
          device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
          device.ipod = true;
        } // iOS 8+ changed UA


        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
          if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
          }
        } // Webview


        device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)) || win.matchMedia && win.matchMedia('(display-mode: standalone)').matches;
        device.webview = device.webView;
        device.standalone = device.webView; // Desktop

        device.desktop = !(device.ios || device.android) || electron;

        if (device.desktop) {
          device.electron = electron;
          device.macos = macos;
          device.windows = windows;

          if (device.macos) {
            device.os = 'macos';
          }

          if (device.windows) {
            device.os = 'windows';
          }
        } // Pixel Ratio


        device.pixelRatio = win.devicePixelRatio || 1; // Export object

        return device;
      }();

      function onTouchStart(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;

        if (swiper.animating && params.preventInteractionOnTransition) {
          return;
        }

        var e = event;

        if (e.originalEvent) {
          e = e.originalEvent;
        }

        var $targetEl = $(e.target);

        if (params.touchEventsTarget === 'wrapper') {
          if (!$targetEl.closest(swiper.wrapperEl).length) {
            return;
          }
        }

        data.isTouchEvent = e.type === 'touchstart';

        if (!data.isTouchEvent && 'which' in e && e.which === 3) {
          return;
        }

        if (!data.isTouchEvent && 'button' in e && e.button > 0) {
          return;
        }

        if (data.isTouched && data.isMoved) {
          return;
        }

        if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
          swiper.allowClick = true;
          return;
        }

        if (params.swipeHandler) {
          if (!$targetEl.closest(params.swipeHandler)[0]) {
            return;
          }
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= win.screen.width - edgeSwipeThreshold)) {
          return;
        }

        Utils.extend(data, {
          isTouched: true,
          isMoved: false,
          allowTouchCallbacks: true,
          isScrolling: undefined,
          startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;

        if (params.threshold > 0) {
          data.allowThresholdMove = false;
        }

        if (e.type !== 'touchstart') {
          var preventDefault = true;

          if ($targetEl.is(data.formElements)) {
            preventDefault = false;
          }

          if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== $targetEl[0]) {
            doc.activeElement.blur();
          }

          var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

          if (params.touchStartForcePreventDefault || shouldPreventDefault) {
            e.preventDefault();
          }
        }

        swiper.emit('touchStart', e);
      }

      function onTouchMove(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var e = event;

        if (e.originalEvent) {
          e = e.originalEvent;
        }

        if (!data.isTouched) {
          if (data.startMoving && data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
          }

          return;
        }

        if (data.isTouchEvent && e.type === 'mousemove') {
          return;
        }

        var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

        if (e.preventedByNestedSwiper) {
          touches.startX = pageX;
          touches.startY = pageY;
          return;
        }

        if (!swiper.allowTouchMove) {
          // isMoved = true;
          swiper.allowClick = false;

          if (data.isTouched) {
            Utils.extend(touches, {
              startX: pageX,
              startY: pageY,
              currentX: pageX,
              currentY: pageY
            });
            data.touchStartTime = Utils.now();
          }

          return;
        }

        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
          if (swiper.isVertical()) {
            // Vertical
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
              data.isTouched = false;
              data.isMoved = false;
              return;
            }
          } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
            return;
          }
        }

        if (data.isTouchEvent && doc.activeElement) {
          if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
          }
        }

        if (data.allowTouchCallbacks) {
          swiper.emit('touchMove', e);
        }

        if (e.targetTouches && e.targetTouches.length > 1) {
          return;
        }

        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;

        if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) {
          return;
        }

        if (typeof data.isScrolling === 'undefined') {
          var touchAngle;

          if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
            data.isScrolling = false;
          } else {
            // eslint-disable-next-line
            if (diffX * diffX + diffY * diffY >= 25) {
              touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
              data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
            }
          }
        }

        if (data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        if (typeof data.startMoving === 'undefined') {
          if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
            data.startMoving = true;
          }
        }

        if (data.isScrolling) {
          data.isTouched = false;
          return;
        }

        if (!data.startMoving) {
          return;
        }

        swiper.allowClick = false;

        if (!params.cssMode) {
          e.preventDefault();
        }

        if (params.touchMoveStopPropagation && !params.nested) {
          e.stopPropagation();
        }

        if (!data.isMoved) {
          if (params.loop) {
            swiper.loopFix();
          }

          data.startTranslate = swiper.getTranslate();
          swiper.setTransition(0);

          if (swiper.animating) {
            swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
          }

          data.allowMomentumBounce = false; // Grab Cursor

          if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(true);
          }

          swiper.emit('sliderFirstMove', e);
        }

        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;

        if (rtl) {
          diff = -diff;
        }

        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;

        if (params.touchReleaseOnEdges) {
          resistanceRatio = 0;
        }

        if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
          disableParentSwiper = false;

          if (params.resistance) {
            data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
          }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
          disableParentSwiper = false;

          if (params.resistance) {
            data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
          }
        }

        if (disableParentSwiper) {
          e.preventedByNestedSwiper = true;
        } // Directions locks


        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
          data.currentTranslate = data.startTranslate;
        }

        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
          data.currentTranslate = data.startTranslate;
        } // Threshold


        if (params.threshold > 0) {
          if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
              data.allowThresholdMove = true;
              touches.startX = touches.currentX;
              touches.startY = touches.currentY;
              data.currentTranslate = data.startTranslate;
              touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
              return;
            }
          } else {
            data.currentTranslate = data.startTranslate;
            return;
          }
        }

        if (!params.followFinger || params.cssMode) {
          return;
        } // Update active index in free mode


        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        if (params.freeMode) {
          // Velocity
          if (data.velocities.length === 0) {
            data.velocities.push({
              position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
              time: data.touchStartTime
            });
          }

          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: Utils.now()
          });
        } // Update progress


        swiper.updateProgress(data.currentTranslate); // Update translate

        swiper.setTranslate(data.currentTranslate);
      }

      function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;

        if (e.originalEvent) {
          e = e.originalEvent;
        }

        if (data.allowTouchCallbacks) {
          swiper.emit('touchEnd', e);
        }

        data.allowTouchCallbacks = false;

        if (!data.isTouched) {
          if (data.isMoved && params.grabCursor) {
            swiper.setGrabCursor(false);
          }

          data.isMoved = false;
          data.startMoving = false;
          return;
        } // Return Grab Cursor


        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(false);
        } // Time diff


        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

        if (swiper.allowClick) {
          swiper.updateClickedSlide(e);
          swiper.emit('tap click', e);

          if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
            swiper.emit('doubleTap doubleClick', e);
          }
        }

        data.lastClickTime = Utils.now();
        Utils.nextTick(function () {
          if (!swiper.destroyed) {
            swiper.allowClick = true;
          }
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
          data.isTouched = false;
          data.isMoved = false;
          data.startMoving = false;
          return;
        }

        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;

        if (params.followFinger) {
          currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
          currentPos = -data.currentTranslate;
        }

        if (params.cssMode) {
          return;
        }

        if (params.freeMode) {
          if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
          }

          if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) {
              swiper.slideTo(snapGrid.length - 1);
            } else {
              swiper.slideTo(swiper.slides.length - 1);
            }

            return;
          }

          if (params.freeModeMomentum) {
            if (data.velocities.length > 1) {
              var lastMoveEvent = data.velocities.pop();
              var velocityEvent = data.velocities.pop();
              var distance = lastMoveEvent.position - velocityEvent.position;
              var time = lastMoveEvent.time - velocityEvent.time;
              swiper.velocity = distance / time;
              swiper.velocity /= 2;

              if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                swiper.velocity = 0;
              } // this implies that the user stopped moving a finger then released.
              // There would be no events with distance zero, so the last event is stale.


              if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
                swiper.velocity = 0;
              }
            } else {
              swiper.velocity = 0;
            }

            swiper.velocity *= params.freeModeMomentumVelocityRatio;
            data.velocities.length = 0;
            var momentumDuration = 1000 * params.freeModeMomentumRatio;
            var momentumDistance = swiper.velocity * momentumDuration;
            var newPosition = swiper.translate + momentumDistance;

            if (rtl) {
              newPosition = -newPosition;
            }

            var doBounce = false;
            var afterBouncePosition;
            var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
            var needsLoopFix;

            if (newPosition < swiper.maxTranslate()) {
              if (params.freeModeMomentumBounce) {
                if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                  newPosition = swiper.maxTranslate() - bounceAmount;
                }

                afterBouncePosition = swiper.maxTranslate();
                doBounce = true;
                data.allowMomentumBounce = true;
              } else {
                newPosition = swiper.maxTranslate();
              }

              if (params.loop && params.centeredSlides) {
                needsLoopFix = true;
              }
            } else if (newPosition > swiper.minTranslate()) {
              if (params.freeModeMomentumBounce) {
                if (newPosition - swiper.minTranslate() > bounceAmount) {
                  newPosition = swiper.minTranslate() + bounceAmount;
                }

                afterBouncePosition = swiper.minTranslate();
                doBounce = true;
                data.allowMomentumBounce = true;
              } else {
                newPosition = swiper.minTranslate();
              }

              if (params.loop && params.centeredSlides) {
                needsLoopFix = true;
              }
            } else if (params.freeModeSticky) {
              var nextSlide;

              for (var j = 0; j < snapGrid.length; j += 1) {
                if (snapGrid[j] > -newPosition) {
                  nextSlide = j;
                  break;
                }
              }

              if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                newPosition = snapGrid[nextSlide];
              } else {
                newPosition = snapGrid[nextSlide - 1];
              }

              newPosition = -newPosition;
            }

            if (needsLoopFix) {
              swiper.once('transitionEnd', function () {
                swiper.loopFix();
              });
            } // Fix duration


            if (swiper.velocity !== 0) {
              if (rtl) {
                momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
              } else {
                momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
              }

              if (params.freeModeSticky) {
                // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                // It's easy to see this when simulating touch with mouse events. To fix this,
                // limit single-slide swipes to the default slide duration. This also has the
                // nice side effect of matching slide speed if the user stopped moving before
                // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                // For faster swipes, also apply limits (albeit higher ones).
                var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                if (moveDistance < currentSlideSize) {
                  momentumDuration = params.speed;
                } else if (moveDistance < 2 * currentSlideSize) {
                  momentumDuration = params.speed * 1.5;
                } else {
                  momentumDuration = params.speed * 2.5;
                }
              }
            } else if (params.freeModeSticky) {
              swiper.slideToClosest();
              return;
            }

            if (params.freeModeMomentumBounce && doBounce) {
              swiper.updateProgress(afterBouncePosition);
              swiper.setTransition(momentumDuration);
              swiper.setTranslate(newPosition);
              swiper.transitionStart(true, swiper.swipeDirection);
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
                  return;
                }

                swiper.emit('momentumBounce');
                swiper.setTransition(params.speed);
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) {
                    return;
                  }

                  swiper.transitionEnd();
                });
              });
            } else if (swiper.velocity) {
              swiper.updateProgress(newPosition);
              swiper.setTransition(momentumDuration);
              swiper.setTranslate(newPosition);
              swiper.transitionStart(true, swiper.swipeDirection);

              if (!swiper.animating) {
                swiper.animating = true;
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) {
                    return;
                  }

                  swiper.transitionEnd();
                });
              }
            } else {
              swiper.updateProgress(newPosition);
            }

            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }

          return;
        } // Find current slide


        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];

        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
          if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
              stopIndex = i;
              groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
            }
          } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
          }
        } // Find current slide size


        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

        if (timeDiff > params.longSwipesMs) {
          // Long touches
          if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
          }

          if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) {
              swiper.slideTo(stopIndex + params.slidesPerGroup);
            } else {
              swiper.slideTo(stopIndex);
            }
          }

          if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) {
              swiper.slideTo(stopIndex + params.slidesPerGroup);
            } else {
              swiper.slideTo(stopIndex);
            }
          }
        } else {
          // Short swipes
          if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
          }

          var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

          if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') {
              swiper.slideTo(stopIndex + params.slidesPerGroup);
            }

            if (swiper.swipeDirection === 'prev') {
              swiper.slideTo(stopIndex);
            }
          } else if (e.target === swiper.navigation.nextEl) {
            swiper.slideTo(stopIndex + params.slidesPerGroup);
          } else {
            swiper.slideTo(stopIndex);
          }
        }
      }

      function onResize() {
        var swiper = this;
        var params = swiper.params;
        var el = swiper.el;

        if (el && el.offsetWidth === 0) {
          return;
        } // Breakpoints


        if (params.breakpoints) {
          swiper.setBreakpoint();
        } // Save locks


        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;
        var snapGrid = swiper.snapGrid; // Disable locks on resize

        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();

        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.run();
        } // Return locks after resize


        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
      }

      function onClick(e) {
        var swiper = this;

        if (!swiper.allowClick) {
          if (swiper.params.preventClicks) {
            e.preventDefault();
          }

          if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }
      }

      function onScroll() {
        var swiper = this;
        var wrapperEl = swiper.wrapperEl;
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop; // eslint-disable-next-line

        if (swiper.translate === -0) {
          swiper.translate = 0;
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
          newProgress = 0;
        } else {
          newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== swiper.progress) {
          swiper.updateProgress(swiper.translate);
        }

        swiper.emit('setTranslate', swiper.translate, false);
      }

      var dummyEventAttached = false;

      function dummyEventListener() {}

      function attachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);

        if (params.cssMode) {
          swiper.onScroll = onScroll.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);
        var capture = !!params.nested; // Touch Events

        if (!Support.touch && Support.pointerEvents) {
          el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
          doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
          doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
          if (Support.touch) {
            var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
            el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
            el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
              passive: false,
              capture: capture
            } : capture);
            el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

            if (touchEvents.cancel) {
              el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }

            if (!dummyEventAttached) {
              doc.addEventListener('touchstart', dummyEventListener);
              dummyEventAttached = true;
            }
          }

          if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
            el.addEventListener('mousedown', swiper.onTouchStart, false);
            doc.addEventListener('mousemove', swiper.onTouchMove, capture);
            doc.addEventListener('mouseup', swiper.onTouchEnd, false);
          }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
          el.addEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
          wrapperEl.addEventListener('scroll', swiper.onScroll);
        } // Resize handler


        if (params.updateOnWindowResize) {
          swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
          swiper.on('observerUpdate', onResize, true);
        }
      }

      function detachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;
        var capture = !!params.nested; // Touch Events

        if (!Support.touch && Support.pointerEvents) {
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
          doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
          if (Support.touch) {
            var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
            el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

            if (touchEvents.cancel) {
              el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
          }

          if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
            el.removeEventListener('mousedown', swiper.onTouchStart, false);
            doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
            doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
          }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
          el.removeEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
          wrapperEl.removeEventListener('scroll', swiper.onScroll);
        } // Resize handler


        swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
      }

      var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents
      };

      function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var initialized = swiper.initialized;
        var loopedSlides = swiper.loopedSlides;
        if (loopedSlides === void 0) loopedSlides = 0;
        var params = swiper.params;
        var $el = swiper.$el;
        var breakpoints = params.breakpoints;

        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) {
          return;
        } // Get breakpoint for window width and update parameters


        var breakpoint = swiper.getBreakpoint(breakpoints);

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
          var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

          if (breakpointOnlyParams) {
            ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerColumn'].forEach(function (param) {
              var paramValue = breakpointOnlyParams[param];

              if (typeof paramValue === 'undefined') {
                return;
              }

              if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                breakpointOnlyParams[param] = 'auto';
              } else if (param === 'slidesPerView') {
                breakpointOnlyParams[param] = parseFloat(paramValue);
              } else {
                breakpointOnlyParams[param] = parseInt(paramValue, 10);
              }
            });
          }

          var breakpointParams = breakpointOnlyParams || swiper.originalParams;
          var wasMultiRow = params.slidesPerColumn > 1;
          var isMultiRow = breakpointParams.slidesPerColumn > 1;

          if (wasMultiRow && !isMultiRow) {
            $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
          } else if (!wasMultiRow && isMultiRow) {
            $el.addClass(params.containerModifierClass + "multirow");

            if (breakpointParams.slidesPerColumnFill === 'column') {
              $el.addClass(params.containerModifierClass + "multirow-column");
            }
          }

          var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
          var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

          if (directionChanged && initialized) {
            swiper.changeDirection();
          }

          Utils.extend(swiper.params, breakpointParams);
          Utils.extend(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
          });
          swiper.currentBreakpoint = breakpoint;

          if (needsReLoop && initialized) {
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.updateSlides();
            swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
          }

          swiper.emit('breakpoint', breakpointParams);
        }
      }

      function getBreakpoint(breakpoints) {
        // Get breakpoint for window width
        if (!breakpoints) {
          return undefined;
        }

        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function (point) {
          points.push(point);
        });
        points.sort(function (a, b) {
          return parseInt(a, 10) - parseInt(b, 10);
        });

        for (var i = 0; i < points.length; i += 1) {
          var point = points[i];

          if (point <= win.innerWidth) {
            breakpoint = point;
          }
        }

        return breakpoint || 'max';
      }

      var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoint
      };

      function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);

        if (params.freeMode) {
          suffixes.push('free-mode');
        }

        if (params.autoHeight) {
          suffixes.push('autoheight');
        }

        if (rtl) {
          suffixes.push('rtl');
        }

        if (params.slidesPerColumn > 1) {
          suffixes.push('multirow');

          if (params.slidesPerColumnFill === 'column') {
            suffixes.push('multirow-column');
          }
        }

        if (Device.android) {
          suffixes.push('android');
        }

        if (Device.ios) {
          suffixes.push('ios');
        }

        if (params.cssMode) {
          suffixes.push('css-mode');
        }

        suffixes.forEach(function (suffix) {
          classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
      }

      function removeClasses() {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
      }

      var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
      };

      function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;

        function onReady() {
          if (callback) {
            callback();
          }
        }

        if (!imageEl.complete || !checkForComplete) {
          if (src) {
            image = new win.Image();
            image.onload = onReady;
            image.onerror = onReady;

            if (sizes) {
              image.sizes = sizes;
            }

            if (srcset) {
              image.srcset = srcset;
            }

            if (src) {
              image.src = src;
            }
          } else {
            onReady();
          }
        } else {
          // image already loaded...
          onReady();
        }
      }

      function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
            return;
          }

          if (swiper.imagesLoaded !== undefined) {
            swiper.imagesLoaded += 1;
          }

          if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) {
              swiper.update();
            }

            swiper.emit('imagesReady');
          }
        }

        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
          var imageEl = swiper.imagesToLoad[i];
          swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
      }

      var images = {
        loadImage: loadImage,
        preloadImages: preloadImages
      };

      function checkOverflow() {
        var swiper = this;
        var params = swiper.params;
        var wasLocked = swiper.isLocked;
        var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

        if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
          swiper.isLocked = lastSlidePosition <= swiper.size;
        } else {
          swiper.isLocked = swiper.snapGrid.length === 1;
        }

        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked; // events

        if (wasLocked !== swiper.isLocked) {
          swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }

        if (wasLocked && wasLocked !== swiper.isLocked) {
          swiper.isEnd = false;
          swiper.navigation.update();
        }
      }

      var checkOverflow$1 = {
        checkOverflow: checkOverflow
      };
      var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        //
        preventInteractionOnTransition: false,
        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        // NS
        containerModifierClass: 'swiper-container-',
        // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        // Callbacks
        runCallbacksOnInit: true
      };
      /* eslint no-param-reassign: "off" */

      var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images
      };
      var extendedDefaults = {};

      var Swiper =
      /*@__PURE__*/
      function (SwiperClass) {
        function Swiper() {
          var assign;
          var args = [],
              len = arguments.length;

          while (len--) args[len] = arguments[len];

          var el;
          var params;

          if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
            params = args[0];
          } else {
            assign = args, el = assign[0], params = assign[1];
          }

          if (!params) {
            params = {};
          }

          params = Utils.extend({}, params);

          if (el && !params.el) {
            params.el = el;
          }

          SwiperClass.call(this, params);
          Object.keys(prototypes).forEach(function (prototypeGroup) {
            Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
              if (!Swiper.prototype[protoMethod]) {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
              }
            });
          }); // Swiper Instance

          var swiper = this;

          if (typeof swiper.modules === 'undefined') {
            swiper.modules = {};
          }

          Object.keys(swiper.modules).forEach(function (moduleName) {
            var module = swiper.modules[moduleName];

            if (module.params) {
              var moduleParamName = Object.keys(module.params)[0];
              var moduleParams = module.params[moduleParamName];

              if (typeof moduleParams !== 'object' || moduleParams === null) {
                return;
              }

              if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                return;
              }

              if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                  enabled: true
                };
              }

              if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
              }

              if (!params[moduleParamName]) {
                params[moduleParamName] = {
                  enabled: false
                };
              }
            }
          }); // Extend defaults with modules params

          var swiperParams = Utils.extend({}, defaults);
          swiper.useModulesParams(swiperParams); // Extend defaults with passed params

          swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
          swiper.originalParams = Utils.extend({}, swiper.params);
          swiper.passedParams = Utils.extend({}, params); // Save Dom lib

          swiper.$ = $; // Find el

          var $el = $(swiper.params.el);
          el = $el[0];

          if (!el) {
            return undefined;
          }

          if ($el.length > 1) {
            var swipers = [];
            $el.each(function (index, containerEl) {
              var newParams = Utils.extend({}, params, {
                el: containerEl
              });
              swipers.push(new Swiper(newParams));
            });
            return swipers;
          }

          el.swiper = swiper;
          $el.data('swiper', swiper); // Find Wrapper

          var $wrapperEl;

          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

            $wrapperEl.children = function (options) {
              return $el.children(options);
            };
          } else {
            $wrapperEl = $el.children("." + swiper.params.wrapperClass);
          } // Extend Swiper


          Utils.extend(swiper, {
            $el: $el,
            el: el,
            $wrapperEl: $wrapperEl,
            wrapperEl: $wrapperEl[0],
            // Classes
            classNames: [],
            // Slides
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal: function isHorizontal() {
              return swiper.params.direction === 'horizontal';
            },
            isVertical: function isVertical() {
              return swiper.params.direction === 'vertical';
            },
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box',
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
              var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
              var desktop = ['mousedown', 'mousemove', 'mouseup'];

              if (Support.pointerEvents) {
                desktop = ['pointerdown', 'pointermove', 'pointerup'];
              }

              swiper.touchEventsTouch = {
                start: touch[0],
                move: touch[1],
                end: touch[2],
                cancel: touch[3]
              };
              swiper.touchEventsDesktop = {
                start: desktop[0],
                move: desktop[1],
                end: desktop[2]
              };
              return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
              isTouched: undefined,
              isMoved: undefined,
              allowTouchCallbacks: undefined,
              touchStartTime: undefined,
              isScrolling: undefined,
              currentTranslate: undefined,
              startTranslate: undefined,
              allowThresholdMove: undefined,
              // Form elements to match
              formElements: 'input, select, option, textarea, button, video',
              // Last click time
              lastClickTime: Utils.now(),
              clickTimeout: undefined,
              // Velocities
              velocities: [],
              allowMomentumBounce: undefined,
              isTouchEvent: undefined,
              startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
          }); // Install Modules

          swiper.useModules(); // Init

          if (swiper.params.init) {
            swiper.init();
          } // Return app instance


          return swiper;
        }

        if (SwiperClass) Swiper.__proto__ = SwiperClass;
        Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
        Swiper.prototype.constructor = Swiper;
        var staticAccessors = {
          extendedDefaults: {
            configurable: true
          },
          defaults: {
            configurable: true
          },
          Class: {
            configurable: true
          },
          $: {
            configurable: true
          }
        };

        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
          var swiper = this;
          var params = swiper.params;
          var slides = swiper.slides;
          var slidesGrid = swiper.slidesGrid;
          var swiperSize = swiper.size;
          var activeIndex = swiper.activeIndex;
          var spv = 1;

          if (params.centeredSlides) {
            var slideSize = slides[activeIndex].swiperSlideSize;
            var breakLoop;

            for (var i = activeIndex + 1; i < slides.length; i += 1) {
              if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;

                if (slideSize > swiperSize) {
                  breakLoop = true;
                }
              }
            }

            for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
              if (slides[i$1] && !breakLoop) {
                slideSize += slides[i$1].swiperSlideSize;
                spv += 1;

                if (slideSize > swiperSize) {
                  breakLoop = true;
                }
              }
            }
          } else {
            for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
              if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                spv += 1;
              }
            }
          }

          return spv;
        };

        Swiper.prototype.update = function update() {
          var swiper = this;

          if (!swiper || swiper.destroyed) {
            return;
          }

          var snapGrid = swiper.snapGrid;
          var params = swiper.params; // Breakpoints

          if (params.breakpoints) {
            swiper.setBreakpoint();
          }

          swiper.updateSize();
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          function setTranslate() {
            var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }

          var translated;

          if (swiper.params.freeMode) {
            setTranslate();

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
              translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
              translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            }

            if (!translated) {
              setTranslate();
            }
          }

          if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
          }

          swiper.emit('update');
        };

        Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
          if (needUpdate === void 0) needUpdate = true;
          var swiper = this;
          var currentDirection = swiper.params.direction;

          if (!newDirection) {
            // eslint-disable-next-line
            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
          }

          if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
            return swiper;
          }

          swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
          swiper.params.direction = newDirection;
          swiper.slides.each(function (slideIndex, slideEl) {
            if (newDirection === 'vertical') {
              slideEl.style.width = '';
            } else {
              slideEl.style.height = '';
            }
          });
          swiper.emit('changeDirection');

          if (needUpdate) {
            swiper.update();
          }

          return swiper;
        };

        Swiper.prototype.init = function init() {
          var swiper = this;

          if (swiper.initialized) {
            return;
          }

          swiper.emit('beforeInit'); // Set breakpoint

          if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
          } // Add Classes


          swiper.addClasses(); // Create loop

          if (swiper.params.loop) {
            swiper.loopCreate();
          } // Update size


          swiper.updateSize(); // Update slides

          swiper.updateSlides();

          if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
          } // Set Grab Cursor


          if (swiper.params.grabCursor) {
            swiper.setGrabCursor();
          }

          if (swiper.params.preloadImages) {
            swiper.preloadImages();
          } // Slide To Initial Slide


          if (swiper.params.loop) {
            swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
          } else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
          } // Attach events


          swiper.attachEvents(); // Init Flag

          swiper.initialized = true; // Emit

          swiper.emit('init');
        };

        Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
          if (deleteInstance === void 0) deleteInstance = true;
          if (cleanStyles === void 0) cleanStyles = true;
          var swiper = this;
          var params = swiper.params;
          var $el = swiper.$el;
          var $wrapperEl = swiper.$wrapperEl;
          var slides = swiper.slides;

          if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null;
          }

          swiper.emit('beforeDestroy'); // Init Flag

          swiper.initialized = false; // Detach events

          swiper.detachEvents(); // Destroy loop

          if (params.loop) {
            swiper.loopDestroy();
          } // Cleanup styles


          if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');

            if (slides && slides.length) {
              slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
            }
          }

          swiper.emit('destroy'); // Detach emitter events

          Object.keys(swiper.eventsListeners).forEach(function (eventName) {
            swiper.off(eventName);
          });

          if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            swiper.$el.data('swiper', null);
            Utils.deleteProps(swiper);
          }

          swiper.destroyed = true;
          return null;
        };

        Swiper.extendDefaults = function extendDefaults(newDefaults) {
          Utils.extend(extendedDefaults, newDefaults);
        };

        staticAccessors.extendedDefaults.get = function () {
          return extendedDefaults;
        };

        staticAccessors.defaults.get = function () {
          return defaults;
        };

        staticAccessors.Class.get = function () {
          return SwiperClass;
        };

        staticAccessors.$.get = function () {
          return $;
        };

        Object.defineProperties(Swiper, staticAccessors);
        return Swiper;
      }(SwiperClass);

      var Device$1 = {
        name: 'device',
        proto: {
          device: Device
        },
        static: {
          device: Device
        }
      };
      var Support$1 = {
        name: 'support',
        proto: {
          support: Support
        },
        static: {
          support: Support
        }
      };

      var Browser = function Browser() {
        function isSafari() {
          var ua = win.navigator.userAgent.toLowerCase();
          return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }

        return {
          isEdge: !!win.navigator.userAgent.match(/Edge/g),
          isSafari: isSafari(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent)
        };
      }();

      var Browser$1 = {
        name: 'browser',
        proto: {
          browser: Browser
        },
        static: {
          browser: Browser
        }
      };
      var Resize = {
        name: 'resize',
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            resize: {
              resizeHandler: function resizeHandler() {
                if (!swiper || swiper.destroyed || !swiper.initialized) {
                  return;
                }

                swiper.emit('beforeResize');
                swiper.emit('resize');
              },
              orientationChangeHandler: function orientationChangeHandler() {
                if (!swiper || swiper.destroyed || !swiper.initialized) {
                  return;
                }

                swiper.emit('orientationchange');
              }
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this; // Emit resize

            win.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

            win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
          },
          destroy: function destroy() {
            var swiper = this;
            win.removeEventListener('resize', swiper.resize.resizeHandler);
            win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
          }
        }
      };
      var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
          if (options === void 0) options = {};
          var swiper = this;
          var ObserverFunc = Observer.func;
          var observer = new ObserverFunc(function (mutations) {
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
              swiper.emit('observerUpdate', mutations[0]);
              return;
            }

            var observerUpdate = function observerUpdate() {
              swiper.emit('observerUpdate', mutations[0]);
            };

            if (win.requestAnimationFrame) {
              win.requestAnimationFrame(observerUpdate);
            } else {
              win.setTimeout(observerUpdate, 0);
            }
          });
          observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
          });
          swiper.observer.observers.push(observer);
        },
        init: function init() {
          var swiper = this;

          if (!Support.observer || !swiper.params.observer) {
            return;
          }

          if (swiper.params.observeParents) {
            var containerParents = swiper.$el.parents();

            for (var i = 0; i < containerParents.length; i += 1) {
              swiper.observer.attach(containerParents[i]);
            }
          } // Observe container


          swiper.observer.attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
          }); // Observe wrapper

          swiper.observer.attach(swiper.$wrapperEl[0], {
            attributes: false
          });
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.observer.observers.forEach(function (observer) {
            observer.disconnect();
          });
          swiper.observer.observers = [];
        }
      };
      var Observer$1 = {
        name: 'observer',
        params: {
          observer: false,
          observeParents: false,
          observeSlideChildren: false
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            observer: {
              init: Observer.init.bind(swiper),
              attach: Observer.attach.bind(swiper),
              destroy: Observer.destroy.bind(swiper),
              observers: []
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;
            swiper.observer.init();
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.observer.destroy();
          }
        }
      };
      var Virtual = {
        update: function update(force) {
          var swiper = this;
          var ref = swiper.params;
          var slidesPerView = ref.slidesPerView;
          var slidesPerGroup = ref.slidesPerGroup;
          var centeredSlides = ref.centeredSlides;
          var ref$1 = swiper.params.virtual;
          var addSlidesBefore = ref$1.addSlidesBefore;
          var addSlidesAfter = ref$1.addSlidesAfter;
          var ref$2 = swiper.virtual;
          var previousFrom = ref$2.from;
          var previousTo = ref$2.to;
          var slides = ref$2.slides;
          var previousSlidesGrid = ref$2.slidesGrid;
          var renderSlide = ref$2.renderSlide;
          var previousOffset = ref$2.offset;
          swiper.updateActiveIndex();
          var activeIndex = swiper.activeIndex || 0;
          var offsetProp;

          if (swiper.rtlTranslate) {
            offsetProp = 'right';
          } else {
            offsetProp = swiper.isHorizontal() ? 'left' : 'top';
          }

          var slidesAfter;
          var slidesBefore;

          if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
            slidesBefore = slidesPerGroup + addSlidesAfter;
          }

          var from = Math.max((activeIndex || 0) - slidesBefore, 0);
          var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
          var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
          Utils.extend(swiper.virtual, {
            from: from,
            to: to,
            offset: offset,
            slidesGrid: swiper.slidesGrid
          });

          function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            if (swiper.lazy && swiper.params.lazy.enabled) {
              swiper.lazy.load();
            }
          }

          if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
              swiper.slides.css(offsetProp, offset + "px");
            }

            swiper.updateProgress();
            return;
          }

          if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
              offset: offset,
              from: from,
              to: to,
              slides: function getSlides() {
                var slidesToRender = [];

                for (var i = from; i <= to; i += 1) {
                  slidesToRender.push(slides[i]);
                }

                return slidesToRender;
              }()
            });
            onRendered();
            return;
          }

          var prependIndexes = [];
          var appendIndexes = [];

          if (force) {
            swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
          } else {
            for (var i = previousFrom; i <= previousTo; i += 1) {
              if (i < from || i > to) {
                swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
              }
            }
          }

          for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
            if (i$1 >= from && i$1 <= to) {
              if (typeof previousTo === 'undefined' || force) {
                appendIndexes.push(i$1);
              } else {
                if (i$1 > previousTo) {
                  appendIndexes.push(i$1);
                }

                if (i$1 < previousFrom) {
                  prependIndexes.push(i$1);
                }
              }
            }
          }

          appendIndexes.forEach(function (index) {
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
          });
          prependIndexes.sort(function (a, b) {
            return b - a;
          }).forEach(function (index) {
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
          });
          swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
          onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
          var swiper = this;
          var params = swiper.params.virtual;

          if (params.cache && swiper.virtual.cache[index]) {
            return swiper.virtual.cache[index];
          }

          var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");

          if (!$slideEl.attr('data-swiper-slide-index')) {
            $slideEl.attr('data-swiper-slide-index', index);
          }

          if (params.cache) {
            swiper.virtual.cache[index] = $slideEl;
          }

          return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
          var swiper = this;

          if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
              if (slides[i]) {
                swiper.virtual.slides.push(slides[i]);
              }
            }
          } else {
            swiper.virtual.slides.push(slides);
          }

          swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
          var swiper = this;
          var activeIndex = swiper.activeIndex;
          var newActiveIndex = activeIndex + 1;
          var numberOfNewSlides = 1;

          if (Array.isArray(slides)) {
            for (var i = 0; i < slides.length; i += 1) {
              if (slides[i]) {
                swiper.virtual.slides.unshift(slides[i]);
              }
            }

            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
          } else {
            swiper.virtual.slides.unshift(slides);
          }

          if (swiper.params.virtual.cache) {
            var cache = swiper.virtual.cache;
            var newCache = {};
            Object.keys(cache).forEach(function (cachedIndex) {
              var $cachedEl = cache[cachedIndex];
              var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

              if (cachedElIndex) {
                $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
              }

              newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
          }

          swiper.virtual.update(true);
          swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
          var swiper = this;

          if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
            return;
          }

          var activeIndex = swiper.activeIndex;

          if (Array.isArray(slidesIndexes)) {
            for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
              swiper.virtual.slides.splice(slidesIndexes[i], 1);

              if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes[i]];
              }

              if (slidesIndexes[i] < activeIndex) {
                activeIndex -= 1;
              }

              activeIndex = Math.max(activeIndex, 0);
            }
          } else {
            swiper.virtual.slides.splice(slidesIndexes, 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes];
            }

            if (slidesIndexes < activeIndex) {
              activeIndex -= 1;
            }

            activeIndex = Math.max(activeIndex, 0);
          }

          swiper.virtual.update(true);
          swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
          var swiper = this;
          swiper.virtual.slides = [];

          if (swiper.params.virtual.cache) {
            swiper.virtual.cache = {};
          }

          swiper.virtual.update(true);
          swiper.slideTo(0, 0);
        }
      };
      var Virtual$1 = {
        name: 'virtual',
        params: {
          virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            virtual: {
              update: Virtual.update.bind(swiper),
              appendSlide: Virtual.appendSlide.bind(swiper),
              prependSlide: Virtual.prependSlide.bind(swiper),
              removeSlide: Virtual.removeSlide.bind(swiper),
              removeAllSlides: Virtual.removeAllSlides.bind(swiper),
              renderSlide: Virtual.renderSlide.bind(swiper),
              slides: swiper.params.virtual.slides,
              cache: {}
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (!swiper.params.virtual.enabled) {
              return;
            }

            swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
            var overwriteParams = {
              watchSlidesProgress: true
            };
            Utils.extend(swiper.params, overwriteParams);
            Utils.extend(swiper.originalParams, overwriteParams);

            if (!swiper.params.initialSlide) {
              swiper.virtual.update();
            }
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (!swiper.params.virtual.enabled) {
              return;
            }

            swiper.virtual.update();
          }
        }
      };
      var Keyboard = {
        handle: function handle(event) {
          var swiper = this;
          var rtl = swiper.rtlTranslate;
          var e = event;

          if (e.originalEvent) {
            e = e.originalEvent;
          } // jquery fix


          var kc = e.keyCode || e.charCode; // Directions locks

          if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40 || kc === 34)) {
            return false;
          }

          if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38 || kc === 33)) {
            return false;
          }

          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
            return undefined;
          }

          if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
            return undefined;
          }

          if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
            var inView = false; // Check that swiper should be inside of visible area of window

            if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
              return undefined;
            }

            var windowWidth = win.innerWidth;
            var windowHeight = win.innerHeight;
            var swiperOffset = swiper.$el.offset();

            if (rtl) {
              swiperOffset.left -= swiper.$el[0].scrollLeft;
            }

            var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

            for (var i = 0; i < swiperCoord.length; i += 1) {
              var point = swiperCoord[i];

              if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                inView = true;
              }
            }

            if (!inView) {
              return undefined;
            }
          }

          if (swiper.isHorizontal()) {
            if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }

            if ((kc === 34 || kc === 39) && !rtl || (kc === 33 || kc === 37) && rtl) {
              swiper.slideNext();
            }

            if ((kc === 33 || kc === 37) && !rtl || (kc === 34 || kc === 39) && rtl) {
              swiper.slidePrev();
            }
          } else {
            if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }

            if (kc === 34 || kc === 40) {
              swiper.slideNext();
            }

            if (kc === 33 || kc === 38) {
              swiper.slidePrev();
            }
          }

          swiper.emit('keyPress', kc);
          return undefined;
        },
        enable: function enable() {
          var swiper = this;

          if (swiper.keyboard.enabled) {
            return;
          }

          $(doc).on('keydown', swiper.keyboard.handle);
          swiper.keyboard.enabled = true;
        },
        disable: function disable() {
          var swiper = this;

          if (!swiper.keyboard.enabled) {
            return;
          }

          $(doc).off('keydown', swiper.keyboard.handle);
          swiper.keyboard.enabled = false;
        }
      };
      var Keyboard$1 = {
        name: 'keyboard',
        params: {
          keyboard: {
            enabled: false,
            onlyInViewport: true
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            keyboard: {
              enabled: false,
              enable: Keyboard.enable.bind(swiper),
              disable: Keyboard.disable.bind(swiper),
              handle: Keyboard.handle.bind(swiper)
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (swiper.params.keyboard.enabled) {
              swiper.keyboard.enable();
            }
          },
          destroy: function destroy() {
            var swiper = this;

            if (swiper.keyboard.enabled) {
              swiper.keyboard.disable();
            }
          }
        }
      };

      function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;

        if (!isSupported) {
          var element = doc.createElement('div');
          element.setAttribute(eventName, 'return;');
          isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported && doc.implementation && doc.implementation.hasFeature // always returns true in newer browsers as per the standard.
        // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
        && doc.implementation.hasFeature('', '') !== true) {
          // This is the only way to test support for the `wheel` event in IE9+.
          isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
      }

      var Mousewheel = {
        lastScrollTime: Utils.now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        event: function event() {
          if (win.navigator.userAgent.indexOf('firefox') > -1) {
            return 'DOMMouseScroll';
          }

          return isEventSupported() ? 'wheel' : 'mousewheel';
        },
        normalize: function normalize(e) {
          // Reasonable defaults
          var PIXEL_STEP = 10;
          var LINE_HEIGHT = 40;
          var PAGE_HEIGHT = 800;
          var sX = 0;
          var sY = 0; // spinX, spinY

          var pX = 0;
          var pY = 0; // pixelX, pixelY
          // Legacy

          if ('detail' in e) {
            sY = e.detail;
          }

          if ('wheelDelta' in e) {
            sY = -e.wheelDelta / 120;
          }

          if ('wheelDeltaY' in e) {
            sY = -e.wheelDeltaY / 120;
          }

          if ('wheelDeltaX' in e) {
            sX = -e.wheelDeltaX / 120;
          } // side scrolling on FF with DOMMouseScroll


          if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
          }

          pX = sX * PIXEL_STEP;
          pY = sY * PIXEL_STEP;

          if ('deltaY' in e) {
            pY = e.deltaY;
          }

          if ('deltaX' in e) {
            pX = e.deltaX;
          }

          if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
          }

          if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
              // delta in LINE units
              pX *= LINE_HEIGHT;
              pY *= LINE_HEIGHT;
            } else {
              // delta in PAGE units
              pX *= PAGE_HEIGHT;
              pY *= PAGE_HEIGHT;
            }
          } // Fall-back if spin cannot be determined


          if (pX && !sX) {
            sX = pX < 1 ? -1 : 1;
          }

          if (pY && !sY) {
            sY = pY < 1 ? -1 : 1;
          }

          return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
          };
        },
        handleMouseEnter: function handleMouseEnter() {
          var swiper = this;
          swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
          var swiper = this;
          swiper.mouseEntered = false;
        },
        handle: function handle(event) {
          var e = event;
          var swiper = this;
          var params = swiper.params.mousewheel;

          if (swiper.params.cssMode) {
            e.preventDefault();
          }

          if (!swiper.mouseEntered && !params.releaseOnEdges) {
            return true;
          }

          if (e.originalEvent) {
            e = e.originalEvent;
          } // jquery fix


          var delta = 0;
          var rtlFactor = swiper.rtlTranslate ? -1 : 1;
          var data = Mousewheel.normalize(e);

          if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
              if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
                delta = data.pixelX * rtlFactor;
              } else {
                return true;
              }
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
              delta = data.pixelY;
            } else {
              return true;
            }
          } else {
            delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
          }

          if (delta === 0) {
            return true;
          }

          if (params.invert) {
            delta = -delta;
          }

          if (!swiper.params.freeMode) {
            // Register the new event in a variable which stores the relevant data
            var newEvent = {
              time: Utils.now(),
              delta: Math.abs(delta),
              direction: Math.sign(delta),
              raw: event
            }; // Keep the most recent events

            var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

            if (recentWheelEvents.length >= 2) {
              recentWheelEvents.shift(); // only store the last N events
            }

            var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.

            if (prevEvent) {
              if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) {
                swiper.mousewheel.animateSlider(newEvent);
              }
            } else {
              swiper.mousewheel.animateSlider(newEvent);
            } // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.


            if (swiper.mousewheel.releaseScroll(newEvent)) {
              return true;
            }
          } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            var newEvent$1 = {
              time: Utils.now(),
              delta: Math.abs(delta),
              direction: Math.sign(delta)
            };
            var ref = swiper.mousewheel;
            var lastEventBeforeSnap = ref.lastEventBeforeSnap;
            var ignoreWheelEvents = lastEventBeforeSnap && newEvent$1.time < lastEventBeforeSnap.time + 500 && newEvent$1.delta <= lastEventBeforeSnap.delta && newEvent$1.direction === lastEventBeforeSnap.direction;

            if (!ignoreWheelEvents) {
              swiper.mousewheel.lastEventBeforeSnap = undefined;

              if (swiper.params.loop) {
                swiper.loopFix();
              }

              var position = swiper.getTranslate() + delta * params.sensitivity;
              var wasBeginning = swiper.isBeginning;
              var wasEnd = swiper.isEnd;

              if (position >= swiper.minTranslate()) {
                position = swiper.minTranslate();
              }

              if (position <= swiper.maxTranslate()) {
                position = swiper.maxTranslate();
              }

              swiper.setTransition(0);
              swiper.setTranslate(position);
              swiper.updateProgress();
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();

              if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                swiper.updateSlidesClasses();
              }

              if (swiper.params.freeModeSticky) {
                // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                // the end of a momentum scroll by storing recent (N=15?) wheel events.
                // 1. do all N events have decreasing or same (absolute value) delta?
                // 2. did all N events arrive in the last M (M=500?) msecs?
                // 3. does the earliest event have an (absolute value) delta that's
                //    at least P (P=1?) larger than the most recent event's delta?
                // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
                // Snap immediately and ignore remaining wheel events in this scroll.
                // See comment above for "remaining wheel events in this scroll" determination.
                // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                clearTimeout(swiper.mousewheel.timeout);
                swiper.mousewheel.timeout = undefined;
                var recentWheelEvents$1 = swiper.mousewheel.recentWheelEvents;

                if (recentWheelEvents$1.length >= 15) {
                  recentWheelEvents$1.shift(); // only store the last N events
                }

                var prevEvent$1 = recentWheelEvents$1.length ? recentWheelEvents$1[recentWheelEvents$1.length - 1] : undefined;
                var firstEvent = recentWheelEvents$1[0];
                recentWheelEvents$1.push(newEvent$1);

                if (prevEvent$1 && (newEvent$1.delta > prevEvent$1.delta || newEvent$1.direction !== prevEvent$1.direction)) {
                  // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                  recentWheelEvents$1.splice(0);
                } else if (recentWheelEvents$1.length >= 15 && newEvent$1.time - firstEvent.time < 500 && firstEvent.delta - newEvent$1.delta >= 1 && newEvent$1.delta <= 6) {
                  // We're at the end of the deceleration of a momentum scroll, so there's no need
                  // to wait for more events. Snap ASAP on the next tick.
                  // Also, because there's some remaining momentum we'll bias the snap in the
                  // direction of the ongoing scroll because it's better UX for the scroll to snap
                  // in the same direction as the scroll instead of reversing to snap.  Therefore,
                  // if it's already scrolled more than 20% in the current direction, keep going.
                  var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                  swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                  recentWheelEvents$1.splice(0);
                  swiper.mousewheel.timeout = Utils.nextTick(function () {
                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                  }, 0); // no delay; move on next tick
                }

                if (!swiper.mousewheel.timeout) {
                  // if we get here, then we haven't detected the end of a momentum scroll, so
                  // we'll consider a scroll "complete" when there haven't been any wheel events
                  // for 500ms.
                  swiper.mousewheel.timeout = Utils.nextTick(function () {
                    var snapToThreshold = 0.5;
                    swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                    recentWheelEvents$1.splice(0);
                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                  }, 500);
                }
              } // Emit event


              if (!ignoreWheelEvents) {
                swiper.emit('scroll', e);
              } // Stop autoplay


              if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
                swiper.autoplay.stop();
              } // Return page scroll on edge positions


              if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
                return true;
              }
            }
          }

          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }

          return false;
        },
        animateSlider: function animateSlider(newEvent) {
          var swiper = this; // If the movement is NOT big enough and
          // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
          //   Don't go any further (avoid insignificant scroll movement).

          if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
            // Return false as a default
            return true;
          } // If user is scrolling towards the end:
          //   If the slider hasn't hit the latest slide or
          //   if the slider is a loop and
          //   if the slider isn't moving right now:
          //     Go to next slide and
          //     emit a scroll event.
          // Else (the user is scrolling towards the beginning) and
          // if the slider hasn't hit the first slide or
          // if the slider is a loop and
          // if the slider isn't moving right now:
          //   Go to prev slide and
          //   emit a scroll event.


          if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', newEvent.raw);
            }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', newEvent.raw);
          } // If you got here is because an animation has been triggered so store the current time


          swiper.mousewheel.lastScrollTime = new win.Date().getTime(); // Return false as a default

          return false;
        },
        releaseScroll: function releaseScroll(newEvent) {
          var swiper = this;
          var params = swiper.params.mousewheel;

          if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
              // Return true to animate scroll on edges
              return true;
            }
          } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }

          return false;
        },
        enable: function enable() {
          var swiper = this;
          var event = Mousewheel.event();

          if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
            return true;
          }

          if (!event) {
            return false;
          }

          if (swiper.mousewheel.enabled) {
            return false;
          }

          var target = swiper.$el;

          if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged);
          }

          target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
          target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
          target.on(event, swiper.mousewheel.handle);
          swiper.mousewheel.enabled = true;
          return true;
        },
        disable: function disable() {
          var swiper = this;
          var event = Mousewheel.event();

          if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
            return true;
          }

          if (!event) {
            return false;
          }

          if (!swiper.mousewheel.enabled) {
            return false;
          }

          var target = swiper.$el;

          if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged);
          }

          target.off(event, swiper.mousewheel.handle);
          swiper.mousewheel.enabled = false;
          return true;
        }
      };
      var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarged: 'container'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            mousewheel: {
              enabled: false,
              enable: Mousewheel.enable.bind(swiper),
              disable: Mousewheel.disable.bind(swiper),
              handle: Mousewheel.handle.bind(swiper),
              handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
              handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
              animateSlider: Mousewheel.animateSlider.bind(swiper),
              releaseScroll: Mousewheel.releaseScroll.bind(swiper),
              lastScrollTime: Utils.now(),
              lastEventBeforeSnap: undefined,
              recentWheelEvents: []
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
              swiper.mousewheel.disable();
            }

            if (swiper.params.mousewheel.enabled) {
              swiper.mousewheel.enable();
            }
          },
          destroy: function destroy() {
            var swiper = this;

            if (swiper.params.cssMode) {
              swiper.mousewheel.enable();
            }

            if (swiper.mousewheel.enabled) {
              swiper.mousewheel.disable();
            }
          }
        }
      };
      var Navigation = {
        update: function update() {
          // Update Navigation Buttons
          var swiper = this;
          var params = swiper.params.navigation;

          if (swiper.params.loop) {
            return;
          }

          var ref = swiper.navigation;
          var $nextEl = ref.$nextEl;
          var $prevEl = ref.$prevEl;

          if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
              $prevEl.addClass(params.disabledClass);
            } else {
              $prevEl.removeClass(params.disabledClass);
            }

            $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }

          if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
              $nextEl.addClass(params.disabledClass);
            } else {
              $nextEl.removeClass(params.disabledClass);
            }

            $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        },
        onPrevClick: function onPrevClick(e) {
          var swiper = this;
          e.preventDefault();

          if (swiper.isBeginning && !swiper.params.loop) {
            return;
          }

          swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
          var swiper = this;
          e.preventDefault();

          if (swiper.isEnd && !swiper.params.loop) {
            return;
          }

          swiper.slideNext();
        },
        init: function init() {
          var swiper = this;
          var params = swiper.params.navigation;

          if (!(params.nextEl || params.prevEl)) {
            return;
          }

          var $nextEl;
          var $prevEl;

          if (params.nextEl) {
            $nextEl = $(params.nextEl);

            if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
              $nextEl = swiper.$el.find(params.nextEl);
            }
          }

          if (params.prevEl) {
            $prevEl = $(params.prevEl);

            if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
              $prevEl = swiper.$el.find(params.prevEl);
            }
          }

          if ($nextEl && $nextEl.length > 0) {
            $nextEl.on('click', swiper.navigation.onNextClick);
          }

          if ($prevEl && $prevEl.length > 0) {
            $prevEl.on('click', swiper.navigation.onPrevClick);
          }

          Utils.extend(swiper.navigation, {
            $nextEl: $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl: $prevEl,
            prevEl: $prevEl && $prevEl[0]
          });
        },
        destroy: function destroy() {
          var swiper = this;
          var ref = swiper.navigation;
          var $nextEl = ref.$nextEl;
          var $prevEl = ref.$prevEl;

          if ($nextEl && $nextEl.length) {
            $nextEl.off('click', swiper.navigation.onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
          }

          if ($prevEl && $prevEl.length) {
            $prevEl.off('click', swiper.navigation.onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
          }
        }
      };
      var Navigation$1 = {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            navigation: {
              init: Navigation.init.bind(swiper),
              update: Navigation.update.bind(swiper),
              destroy: Navigation.destroy.bind(swiper),
              onNextClick: Navigation.onNextClick.bind(swiper),
              onPrevClick: Navigation.onPrevClick.bind(swiper)
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;
            swiper.navigation.init();
            swiper.navigation.update();
          },
          toEdge: function toEdge() {
            var swiper = this;
            swiper.navigation.update();
          },
          fromEdge: function fromEdge() {
            var swiper = this;
            swiper.navigation.update();
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.navigation.destroy();
          },
          click: function click(e) {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
              var isHidden;

              if ($nextEl) {
                isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
              } else if ($prevEl) {
                isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
              }

              if (isHidden === true) {
                swiper.emit('navigationShow', swiper);
              } else {
                swiper.emit('navigationHide', swiper);
              }

              if ($nextEl) {
                $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
              }

              if ($prevEl) {
                $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
              }
            }
          }
        }
      };
      var Pagination = {
        update: function update() {
          // Render || Update Pagination bullets/items
          var swiper = this;
          var rtl = swiper.rtl;
          var params = swiper.params.pagination;

          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
            return;
          }

          var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
          var $el = swiper.pagination.$el; // Current/Total

          var current;
          var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

            if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
              current -= slidesLength - swiper.loopedSlides * 2;
            }

            if (current > total - 1) {
              current -= total;
            }

            if (current < 0 && swiper.params.paginationType !== 'bullets') {
              current = total + current;
            }
          } else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex;
          } else {
            current = swiper.activeIndex || 0;
          } // Types


          if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            var bullets = swiper.pagination.bullets;
            var firstIndex;
            var lastIndex;
            var midIndex;

            if (params.dynamicBullets) {
              swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
              $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

              if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

                if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                  swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                } else if (swiper.pagination.dynamicBulletIndex < 0) {
                  swiper.pagination.dynamicBulletIndex = 0;
                }
              }

              firstIndex = current - swiper.pagination.dynamicBulletIndex;
              lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
              midIndex = (lastIndex + firstIndex) / 2;
            }

            bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

            if ($el.length > 1) {
              bullets.each(function (index, bullet) {
                var $bullet = $(bullet);
                var bulletIndex = $bullet.index();

                if (bulletIndex === current) {
                  $bullet.addClass(params.bulletActiveClass);
                }

                if (params.dynamicBullets) {
                  if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                    $bullet.addClass(params.bulletActiveClass + "-main");
                  }

                  if (bulletIndex === firstIndex) {
                    $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  }

                  if (bulletIndex === lastIndex) {
                    $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                  }
                }
              });
            } else {
              var $bullet = bullets.eq(current);
              var bulletIndex = $bullet.index();
              $bullet.addClass(params.bulletActiveClass);

              if (params.dynamicBullets) {
                var $firstDisplayedBullet = bullets.eq(firstIndex);
                var $lastDisplayedBullet = bullets.eq(lastIndex);

                for (var i = firstIndex; i <= lastIndex; i += 1) {
                  bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                }

                if (swiper.params.loop) {
                  if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                    for (var i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                      bullets.eq(bullets.length - i$1).addClass(params.bulletActiveClass + "-main");
                    }

                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                  } else {
                    $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                    $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                  }
                } else {
                  $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              }
            }

            if (params.dynamicBullets) {
              var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
              var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
              var offsetProp = rtl ? 'right' : 'left';
              bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
            }
          }

          if (params.type === 'fraction') {
            $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
            $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
          }

          if (params.type === 'progressbar') {
            var progressbarDirection;

            if (params.progressbarOpposite) {
              progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            } else {
              progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            }

            var scale = (current + 1) / total;
            var scaleX = 1;
            var scaleY = 1;

            if (progressbarDirection === 'horizontal') {
              scaleX = scale;
            } else {
              scaleY = scale;
            }

            $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
          }

          if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            swiper.emit('paginationRender', swiper, $el[0]);
          } else {
            swiper.emit('paginationUpdate', swiper, $el[0]);
          }

          $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
          // Render Container
          var swiper = this;
          var params = swiper.params.pagination;

          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
            return;
          }

          var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
          var $el = swiper.pagination.$el;
          var paginationHTML = '';

          if (params.type === 'bullets') {
            var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

            for (var i = 0; i < numberOfBullets; i += 1) {
              if (params.renderBullet) {
                paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
              } else {
                paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
              }
            }

            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find("." + params.bulletClass);
          }

          if (params.type === 'fraction') {
            if (params.renderFraction) {
              paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            } else {
              paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + "<span class=\"" + params.totalClass + "\"></span>";
            }

            $el.html(paginationHTML);
          }

          if (params.type === 'progressbar') {
            if (params.renderProgressbar) {
              paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            } else {
              paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
            }

            $el.html(paginationHTML);
          }

          if (params.type !== 'custom') {
            swiper.emit('paginationRender', swiper.pagination.$el[0]);
          }
        },
        init: function init() {
          var swiper = this;
          var params = swiper.params.pagination;

          if (!params.el) {
            return;
          }

          var $el = $(params.el);

          if ($el.length === 0) {
            return;
          }

          if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
            $el = swiper.$el.find(params.el);
          }

          if (params.type === 'bullets' && params.clickable) {
            $el.addClass(params.clickableClass);
          }

          $el.addClass(params.modifierClass + params.type);

          if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass("" + params.modifierClass + params.type + "-dynamic");
            swiper.pagination.dynamicBulletIndex = 0;

            if (params.dynamicMainBullets < 1) {
              params.dynamicMainBullets = 1;
            }
          }

          if (params.type === 'progressbar' && params.progressbarOpposite) {
            $el.addClass(params.progressbarOppositeClass);
          }

          if (params.clickable) {
            $el.on('click', "." + params.bulletClass, function onClick(e) {
              e.preventDefault();
              var index = $(this).index() * swiper.params.slidesPerGroup;

              if (swiper.params.loop) {
                index += swiper.loopedSlides;
              }

              swiper.slideTo(index);
            });
          }

          Utils.extend(swiper.pagination, {
            $el: $el,
            el: $el[0]
          });
        },
        destroy: function destroy() {
          var swiper = this;
          var params = swiper.params.pagination;

          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
            return;
          }

          var $el = swiper.pagination.$el;
          $el.removeClass(params.hiddenClass);
          $el.removeClass(params.modifierClass + params.type);

          if (swiper.pagination.bullets) {
            swiper.pagination.bullets.removeClass(params.bulletActiveClass);
          }

          if (params.clickable) {
            $el.off('click', "." + params.bulletClass);
          }
        }
      };
      var Pagination$1 = {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (number) {
              return number;
            },
            formatFractionTotal: function (number) {
              return number;
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            // NEW
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            // NEW
            lockClass: 'swiper-pagination-lock'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            pagination: {
              init: Pagination.init.bind(swiper),
              render: Pagination.render.bind(swiper),
              update: Pagination.update.bind(swiper),
              destroy: Pagination.destroy.bind(swiper),
              dynamicBulletIndex: 0
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          },
          activeIndexChange: function activeIndexChange() {
            var swiper = this;

            if (swiper.params.loop) {
              swiper.pagination.update();
            } else if (typeof swiper.snapIndex === 'undefined') {
              swiper.pagination.update();
            }
          },
          snapIndexChange: function snapIndexChange() {
            var swiper = this;

            if (!swiper.params.loop) {
              swiper.pagination.update();
            }
          },
          slidesLengthChange: function slidesLengthChange() {
            var swiper = this;

            if (swiper.params.loop) {
              swiper.pagination.render();
              swiper.pagination.update();
            }
          },
          snapGridLengthChange: function snapGridLengthChange() {
            var swiper = this;

            if (!swiper.params.loop) {
              swiper.pagination.render();
              swiper.pagination.update();
            }
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.pagination.destroy();
          },
          click: function click(e) {
            var swiper = this;

            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
              var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

              if (isHidden === true) {
                swiper.emit('paginationShow', swiper);
              } else {
                swiper.emit('paginationHide', swiper);
              }

              swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
            }
          }
        }
      };
      var Scrollbar = {
        setTranslate: function setTranslate() {
          var swiper = this;

          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
            return;
          }

          var scrollbar = swiper.scrollbar;
          var rtl = swiper.rtlTranslate;
          var progress = swiper.progress;
          var dragSize = scrollbar.dragSize;
          var trackSize = scrollbar.trackSize;
          var $dragEl = scrollbar.$dragEl;
          var $el = scrollbar.$el;
          var params = swiper.params.scrollbar;
          var newSize = dragSize;
          var newPos = (trackSize - dragSize) * progress;

          if (rtl) {
            newPos = -newPos;

            if (newPos > 0) {
              newSize = dragSize - newPos;
              newPos = 0;
            } else if (-newPos + dragSize > trackSize) {
              newSize = trackSize + newPos;
            }
          } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
          } else if (newPos + dragSize > trackSize) {
            newSize = trackSize - newPos;
          }

          if (swiper.isHorizontal()) {
            $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
            $dragEl[0].style.width = newSize + "px";
          } else {
            $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
            $dragEl[0].style.height = newSize + "px";
          }

          if (params.hide) {
            clearTimeout(swiper.scrollbar.timeout);
            $el[0].style.opacity = 1;
            swiper.scrollbar.timeout = setTimeout(function () {
              $el[0].style.opacity = 0;
              $el.transition(400);
            }, 1000);
          }
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
            return;
          }

          swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
          var swiper = this;

          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
            return;
          }

          var scrollbar = swiper.scrollbar;
          var $dragEl = scrollbar.$dragEl;
          var $el = scrollbar.$el;
          $dragEl[0].style.width = '';
          $dragEl[0].style.height = '';
          var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
          var divider = swiper.size / swiper.virtualSize;
          var moveDivider = divider * (trackSize / swiper.size);
          var dragSize;

          if (swiper.params.scrollbar.dragSize === 'auto') {
            dragSize = trackSize * divider;
          } else {
            dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
          }

          if (swiper.isHorizontal()) {
            $dragEl[0].style.width = dragSize + "px";
          } else {
            $dragEl[0].style.height = dragSize + "px";
          }

          if (divider >= 1) {
            $el[0].style.display = 'none';
          } else {
            $el[0].style.display = '';
          }

          if (swiper.params.scrollbar.hide) {
            $el[0].style.opacity = 0;
          }

          Utils.extend(scrollbar, {
            trackSize: trackSize,
            divider: divider,
            moveDivider: moveDivider,
            dragSize: dragSize
          });
          scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        getPointerPosition: function getPointerPosition(e) {
          var swiper = this;

          if (swiper.isHorizontal()) {
            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
          }

          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function setDragPosition(e) {
          var swiper = this;
          var scrollbar = swiper.scrollbar;
          var rtl = swiper.rtlTranslate;
          var $el = scrollbar.$el;
          var dragSize = scrollbar.dragSize;
          var trackSize = scrollbar.trackSize;
          var dragStartPos = scrollbar.dragStartPos;
          var positionRatio;
          positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
          positionRatio = Math.max(Math.min(positionRatio, 1), 0);

          if (rtl) {
            positionRatio = 1 - positionRatio;
          }

          var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
          swiper.updateProgress(position);
          swiper.setTranslate(position);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
          var swiper = this;
          var params = swiper.params.scrollbar;
          var scrollbar = swiper.scrollbar;
          var $wrapperEl = swiper.$wrapperEl;
          var $el = scrollbar.$el;
          var $dragEl = scrollbar.$dragEl;
          swiper.scrollbar.isTouched = true;
          swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
          e.preventDefault();
          e.stopPropagation();
          $wrapperEl.transition(100);
          $dragEl.transition(100);
          scrollbar.setDragPosition(e);
          clearTimeout(swiper.scrollbar.dragTimeout);
          $el.transition(0);

          if (params.hide) {
            $el.css('opacity', 1);
          }

          if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', 'none');
          }

          swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
          var swiper = this;
          var scrollbar = swiper.scrollbar;
          var $wrapperEl = swiper.$wrapperEl;
          var $el = scrollbar.$el;
          var $dragEl = scrollbar.$dragEl;

          if (!swiper.scrollbar.isTouched) {
            return;
          }

          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }

          scrollbar.setDragPosition(e);
          $wrapperEl.transition(0);
          $el.transition(0);
          $dragEl.transition(0);
          swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
          var swiper = this;
          var params = swiper.params.scrollbar;
          var scrollbar = swiper.scrollbar;
          var $wrapperEl = swiper.$wrapperEl;
          var $el = scrollbar.$el;

          if (!swiper.scrollbar.isTouched) {
            return;
          }

          swiper.scrollbar.isTouched = false;

          if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
          }

          if (params.hide) {
            clearTimeout(swiper.scrollbar.dragTimeout);
            swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
              $el.css('opacity', 0);
              $el.transition(400);
            }, 1000);
          }

          swiper.emit('scrollbarDragEnd', e);

          if (params.snapOnRelease) {
            swiper.slideToClosest();
          }
        },
        enableDraggable: function enableDraggable() {
          var swiper = this;

          if (!swiper.params.scrollbar.el) {
            return;
          }

          var scrollbar = swiper.scrollbar;
          var touchEventsTouch = swiper.touchEventsTouch;
          var touchEventsDesktop = swiper.touchEventsDesktop;
          var params = swiper.params;
          var $el = scrollbar.$el;
          var target = $el[0];
          var activeListener = Support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
          } : false;
          var passiveListener = Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (!Support.touch) {
            target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
          } else {
            target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
          }
        },
        disableDraggable: function disableDraggable() {
          var swiper = this;

          if (!swiper.params.scrollbar.el) {
            return;
          }

          var scrollbar = swiper.scrollbar;
          var touchEventsTouch = swiper.touchEventsTouch;
          var touchEventsDesktop = swiper.touchEventsDesktop;
          var params = swiper.params;
          var $el = scrollbar.$el;
          var target = $el[0];
          var activeListener = Support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
          } : false;
          var passiveListener = Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;

          if (!Support.touch) {
            target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
          } else {
            target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
          }
        },
        init: function init() {
          var swiper = this;

          if (!swiper.params.scrollbar.el) {
            return;
          }

          var scrollbar = swiper.scrollbar;
          var $swiperEl = swiper.$el;
          var params = swiper.params.scrollbar;
          var $el = $(params.el);

          if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
            $el = $swiperEl.find(params.el);
          }

          var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

          if ($dragEl.length === 0) {
            $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
            $el.append($dragEl);
          }

          Utils.extend(scrollbar, {
            $el: $el,
            el: $el[0],
            $dragEl: $dragEl,
            dragEl: $dragEl[0]
          });

          if (params.draggable) {
            scrollbar.enableDraggable();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.scrollbar.disableDraggable();
        }
      };
      var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            scrollbar: {
              init: Scrollbar.init.bind(swiper),
              destroy: Scrollbar.destroy.bind(swiper),
              updateSize: Scrollbar.updateSize.bind(swiper),
              setTranslate: Scrollbar.setTranslate.bind(swiper),
              setTransition: Scrollbar.setTransition.bind(swiper),
              enableDraggable: Scrollbar.enableDraggable.bind(swiper),
              disableDraggable: Scrollbar.disableDraggable.bind(swiper),
              setDragPosition: Scrollbar.setDragPosition.bind(swiper),
              getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
              onDragStart: Scrollbar.onDragStart.bind(swiper),
              onDragMove: Scrollbar.onDragMove.bind(swiper),
              onDragEnd: Scrollbar.onDragEnd.bind(swiper),
              isTouched: false,
              timeout: null,
              dragTimeout: null
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;
            swiper.scrollbar.init();
            swiper.scrollbar.updateSize();
            swiper.scrollbar.setTranslate();
          },
          update: function update() {
            var swiper = this;
            swiper.scrollbar.updateSize();
          },
          resize: function resize() {
            var swiper = this;
            swiper.scrollbar.updateSize();
          },
          observerUpdate: function observerUpdate() {
            var swiper = this;
            swiper.scrollbar.updateSize();
          },
          setTranslate: function setTranslate() {
            var swiper = this;
            swiper.scrollbar.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.scrollbar.setTransition(duration);
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.destroy();
          }
        }
      };
      var Parallax = {
        setTransform: function setTransform(el, progress) {
          var swiper = this;
          var rtl = swiper.rtl;
          var $el = $(el);
          var rtlFactor = rtl ? -1 : 1;
          var p = $el.attr('data-swiper-parallax') || '0';
          var x = $el.attr('data-swiper-parallax-x');
          var y = $el.attr('data-swiper-parallax-y');
          var scale = $el.attr('data-swiper-parallax-scale');
          var opacity = $el.attr('data-swiper-parallax-opacity');

          if (x || y) {
            x = x || '0';
            y = y || '0';
          } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
          } else {
            y = p;
            x = '0';
          }

          if (x.indexOf('%') >= 0) {
            x = parseInt(x, 10) * progress * rtlFactor + "%";
          } else {
            x = x * progress * rtlFactor + "px";
          }

          if (y.indexOf('%') >= 0) {
            y = parseInt(y, 10) * progress + "%";
          } else {
            y = y * progress + "px";
          }

          if (typeof opacity !== 'undefined' && opacity !== null) {
            var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
          }

          if (typeof scale === 'undefined' || scale === null) {
            $el.transform("translate3d(" + x + ", " + y + ", 0px)");
          } else {
            var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
          }
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          var $el = swiper.$el;
          var slides = swiper.slides;
          var progress = swiper.progress;
          var snapGrid = swiper.snapGrid;
          $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
            swiper.parallax.setTransform(el, progress);
          });
          slides.each(function (slideIndex, slideEl) {
            var slideProgress = slideEl.progress;

            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
              slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            }

            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
              swiper.parallax.setTransform(el, slideProgress);
            });
          });
        },
        setTransition: function setTransition(duration) {
          if (duration === void 0) duration = this.params.speed;
          var swiper = this;
          var $el = swiper.$el;
          $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, parallaxEl) {
            var $parallaxEl = $(parallaxEl);
            var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;

            if (duration === 0) {
              parallaxDuration = 0;
            }

            $parallaxEl.transition(parallaxDuration);
          });
        }
      };
      var Parallax$1 = {
        name: 'parallax',
        params: {
          parallax: {
            enabled: false
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            parallax: {
              setTransform: Parallax.setTransform.bind(swiper),
              setTranslate: Parallax.setTranslate.bind(swiper),
              setTransition: Parallax.setTransition.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (!swiper.params.parallax.enabled) {
              return;
            }

            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
          },
          init: function init() {
            var swiper = this;

            if (!swiper.params.parallax.enabled) {
              return;
            }

            swiper.parallax.setTranslate();
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (!swiper.params.parallax.enabled) {
              return;
            }

            swiper.parallax.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;

            if (!swiper.params.parallax.enabled) {
              return;
            }

            swiper.parallax.setTransition(duration);
          }
        }
      };
      var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) {
            return 1;
          }

          var x1 = e.targetTouches[0].pageX;
          var y1 = e.targetTouches[0].pageY;
          var x2 = e.targetTouches[1].pageX;
          var y2 = e.targetTouches[1].pageY;
          var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
          var swiper = this;
          var params = swiper.params.zoom;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;
          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;

          if (!Support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
              return;
            }

            zoom.fakeGestureTouched = true;
            gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
          }

          if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = $(e.target).closest('.swiper-slide');

            if (gesture.$slideEl.length === 0) {
              gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }

            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

            if (gesture.$imageWrapEl.length === 0) {
              gesture.$imageEl = undefined;
              return;
            }
          }

          gesture.$imageEl.transition(0);
          swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
          var swiper = this;
          var params = swiper.params.zoom;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;

          if (!Support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
              return;
            }

            zoom.fakeGestureMoved = true;
            gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
          }

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          if (Support.gestures) {
            zoom.scale = e.scale * zoom.currentScale;
          } else {
            zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
          }

          if (zoom.scale > gesture.maxRatio) {
            zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
          }

          if (zoom.scale < params.minRatio) {
            zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
          }

          gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        onGestureEnd: function onGestureEnd(e) {
          var swiper = this;
          var params = swiper.params.zoom;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;

          if (!Support.gestures) {
            if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
              return;
            }

            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
              return;
            }

            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
          }

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
          gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
          zoom.currentScale = zoom.scale;
          zoom.isScaling = false;

          if (zoom.scale === 1) {
            gesture.$slideEl = undefined;
          }
        },
        onTouchStart: function onTouchStart(e) {
          var swiper = this;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;
          var image = zoom.image;

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          if (image.isTouched) {
            return;
          }

          if (Device.android) {
            e.preventDefault();
          }

          image.isTouched = true;
          image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
          image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
          var swiper = this;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;
          var image = zoom.image;
          var velocity = zoom.velocity;

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          swiper.allowClick = false;

          if (!image.isTouched || !gesture.$slideEl) {
            return;
          }

          if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);

            if (swiper.rtl) {
              image.startX = -image.startX;
              image.startY = -image.startY;
            }
          } // Define if we need image drag


          var scaledWidth = image.width * zoom.scale;
          var scaledHeight = image.height * zoom.scale;

          if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
            return;
          }

          image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
          image.maxX = -image.minX;
          image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
          image.maxY = -image.minY;
          image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

          if (!image.isMoved && !zoom.isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
              image.isTouched = false;
              return;
            }

            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
              image.isTouched = false;
              return;
            }
          }

          e.preventDefault();
          e.stopPropagation();
          image.isMoved = true;
          image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
          image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

          if (image.currentX < image.minX) {
            image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
          }

          if (image.currentX > image.maxX) {
            image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
          }

          if (image.currentY < image.minY) {
            image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
          }

          if (image.currentY > image.maxY) {
            image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
          } // Velocity


          if (!velocity.prevPositionX) {
            velocity.prevPositionX = image.touchesCurrent.x;
          }

          if (!velocity.prevPositionY) {
            velocity.prevPositionY = image.touchesCurrent.y;
          }

          if (!velocity.prevTime) {
            velocity.prevTime = Date.now();
          }

          velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
          velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;

          if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
            velocity.x = 0;
          }

          if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
            velocity.y = 0;
          }

          velocity.prevPositionX = image.touchesCurrent.x;
          velocity.prevPositionY = image.touchesCurrent.y;
          velocity.prevTime = Date.now();
          gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTouchEnd: function onTouchEnd() {
          var swiper = this;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;
          var image = zoom.image;
          var velocity = zoom.velocity;

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
          }

          image.isTouched = false;
          image.isMoved = false;
          var momentumDurationX = 300;
          var momentumDurationY = 300;
          var momentumDistanceX = velocity.x * momentumDurationX;
          var newPositionX = image.currentX + momentumDistanceX;
          var momentumDistanceY = velocity.y * momentumDurationY;
          var newPositionY = image.currentY + momentumDistanceY; // Fix duration

          if (velocity.x !== 0) {
            momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
          }

          if (velocity.y !== 0) {
            momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
          }

          var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
          image.currentX = newPositionX;
          image.currentY = newPositionY; // Define if we need image drag

          var scaledWidth = image.width * zoom.scale;
          var scaledHeight = image.height * zoom.scale;
          image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
          image.maxX = -image.minX;
          image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
          image.maxY = -image.minY;
          image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
          image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
          gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTransitionEnd: function onTransitionEnd() {
          var swiper = this;
          var zoom = swiper.zoom;
          var gesture = zoom.gesture;

          if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
          }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
          var swiper = this;
          var zoom = swiper.zoom;

          if (zoom.scale && zoom.scale !== 1) {
            // Zoom Out
            zoom.out();
          } else {
            // Zoom In
            zoom.in(e);
          }
        },
        in: function in$1(e) {
          var swiper = this;
          var zoom = swiper.zoom;
          var params = swiper.params.zoom;
          var gesture = zoom.gesture;
          var image = zoom.image;

          if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
          }

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          gesture.$slideEl.addClass("" + params.zoomedSlideClass);
          var touchX;
          var touchY;
          var offsetX;
          var offsetY;
          var diffX;
          var diffY;
          var translateX;
          var translateY;
          var imageWidth;
          var imageHeight;
          var scaledWidth;
          var scaledHeight;
          var translateMinX;
          var translateMinY;
          var translateMaxX;
          var translateMaxY;
          var slideWidth;
          var slideHeight;

          if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
          } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
          }

          zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
          zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left;
            offsetY = gesture.$slideEl.offset().top;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;

            if (translateX < translateMinX) {
              translateX = translateMinX;
            }

            if (translateX > translateMaxX) {
              translateX = translateMaxX;
            }

            if (translateY < translateMinY) {
              translateY = translateMinY;
            }

            if (translateY > translateMaxY) {
              translateY = translateMaxY;
            }
          } else {
            translateX = 0;
            translateY = 0;
          }

          gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
          gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        out: function out() {
          var swiper = this;
          var zoom = swiper.zoom;
          var params = swiper.params.zoom;
          var gesture = zoom.gesture;

          if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
          }

          if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            return;
          }

          zoom.scale = 1;
          zoom.currentScale = 1;
          gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
          gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
          gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
          gesture.$slideEl = undefined;
        },
        // Attach/Detach Events
        enable: function enable() {
          var swiper = this;
          var zoom = swiper.zoom;

          if (zoom.enabled) {
            return;
          }

          zoom.enabled = true;
          var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          var activeListenerWithCapture = Support.passiveListener ? {
            passive: false,
            capture: true
          } : true; // Scale image

          if (Support.gestures) {
            swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
          } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);

            if (swiper.touchEvents.cancel) {
              swiper.$wrapperEl.on(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
          } // Move image


          swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        },
        disable: function disable() {
          var swiper = this;
          var zoom = swiper.zoom;

          if (!zoom.enabled) {
            return;
          }

          swiper.zoom.enabled = false;
          var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          var activeListenerWithCapture = Support.passiveListener ? {
            passive: false,
            capture: true
          } : true; // Scale image

          if (Support.gestures) {
            swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
          } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);

            if (swiper.touchEvents.cancel) {
              swiper.$wrapperEl.off(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
          } // Move image


          swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        }
      };
      var Zoom$1 = {
        name: 'zoom',
        params: {
          zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
          }
        },
        create: function create() {
          var swiper = this;
          var zoom = {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          };
          'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
            zoom[methodName] = Zoom[methodName].bind(swiper);
          });
          Utils.extend(swiper, {
            zoom: zoom
          });
          var scale = 1;
          Object.defineProperty(swiper.zoom, 'scale', {
            get: function get() {
              return scale;
            },
            set: function set(value) {
              if (scale !== value) {
                var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                swiper.emit('zoomChange', value, imageEl, slideEl);
              }

              scale = value;
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (swiper.params.zoom.enabled) {
              swiper.zoom.enable();
            }
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.zoom.disable();
          },
          touchStart: function touchStart(e) {
            var swiper = this;

            if (!swiper.zoom.enabled) {
              return;
            }

            swiper.zoom.onTouchStart(e);
          },
          touchEnd: function touchEnd(e) {
            var swiper = this;

            if (!swiper.zoom.enabled) {
              return;
            }

            swiper.zoom.onTouchEnd(e);
          },
          doubleTap: function doubleTap(e) {
            var swiper = this;

            if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
              swiper.zoom.toggle(e);
            }
          },
          transitionEnd: function transitionEnd() {
            var swiper = this;

            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
              swiper.zoom.onTransitionEnd();
            }
          },
          slideChange: function slideChange() {
            var swiper = this;

            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
              swiper.zoom.onTransitionEnd();
            }
          }
        }
      };
      var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
          if (loadInDuplicate === void 0) loadInDuplicate = true;
          var swiper = this;
          var params = swiper.params.lazy;

          if (typeof index === 'undefined') {
            return;
          }

          if (swiper.slides.length === 0) {
            return;
          }

          var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
          var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

          if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
            $images = $images.add($slideEl[0]);
          }

          if ($images.length === 0) {
            return;
          }

          $images.each(function (imageIndex, imageEl) {
            var $imageEl = $(imageEl);
            $imageEl.addClass(params.loadingClass);
            var background = $imageEl.attr('data-background');
            var src = $imageEl.attr('data-src');
            var srcset = $imageEl.attr('data-srcset');
            var sizes = $imageEl.attr('data-sizes');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
              if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) {
                return;
              }

              if (background) {
                $imageEl.css('background-image', "url(\"" + background + "\")");
                $imageEl.removeAttr('data-background');
              } else {
                if (srcset) {
                  $imageEl.attr('srcset', srcset);
                  $imageEl.removeAttr('data-srcset');
                }

                if (sizes) {
                  $imageEl.attr('sizes', sizes);
                  $imageEl.removeAttr('data-sizes');
                }

                if (src) {
                  $imageEl.attr('src', src);
                  $imageEl.removeAttr('data-src');
                }
              }

              $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
              $slideEl.find("." + params.preloaderClass).remove();

              if (swiper.params.loop && loadInDuplicate) {
                var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                  var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                  swiper.lazy.loadInSlide(originalSlide.index(), false);
                } else {
                  var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                  swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                }
              }

              swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
            });
            swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
          });
        },
        load: function load() {
          var swiper = this;
          var $wrapperEl = swiper.$wrapperEl;
          var swiperParams = swiper.params;
          var slides = swiper.slides;
          var activeIndex = swiper.activeIndex;
          var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
          var params = swiperParams.lazy;
          var slidesPerView = swiperParams.slidesPerView;

          if (slidesPerView === 'auto') {
            slidesPerView = 0;
          }

          function slideExist(index) {
            if (isVirtual) {
              if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
                return true;
              }
            } else if (slides[index]) {
              return true;
            }

            return false;
          }

          function slideIndex(slideEl) {
            if (isVirtual) {
              return $(slideEl).attr('data-swiper-slide-index');
            }

            return $(slideEl).index();
          }

          if (!swiper.lazy.initialImageLoaded) {
            swiper.lazy.initialImageLoaded = true;
          }

          if (swiper.params.watchSlidesVisibility) {
            $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (elIndex, slideEl) {
              var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
              swiper.lazy.loadInSlide(index);
            });
          } else if (slidesPerView > 1) {
            for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
              if (slideExist(i)) {
                swiper.lazy.loadInSlide(i);
              }
            }
          } else {
            swiper.lazy.loadInSlide(activeIndex);
          }

          if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
              var amount = params.loadPrevNextAmount;
              var spv = slidesPerView;
              var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
              var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

              for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                if (slideExist(i$1)) {
                  swiper.lazy.loadInSlide(i$1);
                }
              } // Prev Slides


              for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                if (slideExist(i$2)) {
                  swiper.lazy.loadInSlide(i$2);
                }
              }
            } else {
              var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);

              if (nextSlide.length > 0) {
                swiper.lazy.loadInSlide(slideIndex(nextSlide));
              }

              var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);

              if (prevSlide.length > 0) {
                swiper.lazy.loadInSlide(slideIndex(prevSlide));
              }
            }
          }
        }
      };
      var Lazy$1 = {
        name: 'lazy',
        params: {
          lazy: {
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            lazy: {
              initialImageLoaded: false,
              load: Lazy.load.bind(swiper),
              loadInSlide: Lazy.loadInSlide.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
              swiper.params.preloadImages = false;
            }
          },
          init: function init() {
            var swiper = this;

            if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
              swiper.lazy.load();
            }
          },
          scroll: function scroll() {
            var swiper = this;

            if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
              swiper.lazy.load();
            }
          },
          resize: function resize() {
            var swiper = this;

            if (swiper.params.lazy.enabled) {
              swiper.lazy.load();
            }
          },
          scrollbarDragMove: function scrollbarDragMove() {
            var swiper = this;

            if (swiper.params.lazy.enabled) {
              swiper.lazy.load();
            }
          },
          transitionStart: function transitionStart() {
            var swiper = this;

            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
                swiper.lazy.load();
              }
            }
          },
          transitionEnd: function transitionEnd() {
            var swiper = this;

            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
              swiper.lazy.load();
            }
          },
          slideChange: function slideChange() {
            var swiper = this;

            if (swiper.params.lazy.enabled && swiper.params.cssMode) {
              swiper.lazy.load();
            }
          }
        }
      };
      /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

      var Controller = {
        LinearSpline: function LinearSpline(x, y) {
          var binarySearch = function search() {
            var maxIndex;
            var minIndex;
            var guess;
            return function (array, val) {
              minIndex = -1;
              maxIndex = array.length;

              while (maxIndex - minIndex > 1) {
                guess = maxIndex + minIndex >> 1;

                if (array[guess] <= val) {
                  minIndex = guess;
                } else {
                  maxIndex = guess;
                }
              }

              return maxIndex;
            };
          }();

          this.x = x;
          this.y = y;
          this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
          // (x1,y1) is the known point before given value,
          // (x3,y3) is the known point after given value.

          var i1;
          var i3;

          this.interpolate = function interpolate(x2) {
            if (!x2) {
              return 0;
            } // Get the indexes of x1 and x3 (the array indexes before and after given x2):


            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
          };

          return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
          var swiper = this;

          if (!swiper.controller.spline) {
            swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
          }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
          var swiper = this;
          var controlled = swiper.controller.control;
          var multiplier;
          var controlledTranslate;

          function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

            if (swiper.params.controller.by === 'slide') {
              swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
              // but it did not work out

              controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }

            if (!controlledTranslate || swiper.params.controller.by === 'container') {
              multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
              controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }

            if (swiper.params.controller.inverse) {
              controlledTranslate = c.maxTranslate() - controlledTranslate;
            }

            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
          }

          if (Array.isArray(controlled)) {
            for (var i = 0; i < controlled.length; i += 1) {
              if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                setControlledTranslate(controlled[i]);
              }
            }
          } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTranslate(controlled);
          }
        },
        setTransition: function setTransition(duration, byController) {
          var swiper = this;
          var controlled = swiper.controller.control;
          var i;

          function setControlledTransition(c) {
            c.setTransition(duration, swiper);

            if (duration !== 0) {
              c.transitionStart();

              if (c.params.autoHeight) {
                Utils.nextTick(function () {
                  c.updateAutoHeight();
                });
              }

              c.$wrapperEl.transitionEnd(function () {
                if (!controlled) {
                  return;
                }

                if (c.params.loop && swiper.params.controller.by === 'slide') {
                  c.loopFix();
                }

                c.transitionEnd();
              });
            }
          }

          if (Array.isArray(controlled)) {
            for (i = 0; i < controlled.length; i += 1) {
              if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                setControlledTransition(controlled[i]);
              }
            }
          } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTransition(controlled);
          }
        }
      };
      var Controller$1 = {
        name: 'controller',
        params: {
          controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'

          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            controller: {
              control: swiper.params.controller.control,
              getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
              setTranslate: Controller.setTranslate.bind(swiper),
              setTransition: Controller.setTransition.bind(swiper)
            }
          });
        },
        on: {
          update: function update() {
            var swiper = this;

            if (!swiper.controller.control) {
              return;
            }

            if (swiper.controller.spline) {
              swiper.controller.spline = undefined;
              delete swiper.controller.spline;
            }
          },
          resize: function resize() {
            var swiper = this;

            if (!swiper.controller.control) {
              return;
            }

            if (swiper.controller.spline) {
              swiper.controller.spline = undefined;
              delete swiper.controller.spline;
            }
          },
          observerUpdate: function observerUpdate() {
            var swiper = this;

            if (!swiper.controller.control) {
              return;
            }

            if (swiper.controller.spline) {
              swiper.controller.spline = undefined;
              delete swiper.controller.spline;
            }
          },
          setTranslate: function setTranslate(translate, byController) {
            var swiper = this;

            if (!swiper.controller.control) {
              return;
            }

            swiper.controller.setTranslate(translate, byController);
          },
          setTransition: function setTransition(duration, byController) {
            var swiper = this;

            if (!swiper.controller.control) {
              return;
            }

            swiper.controller.setTransition(duration, byController);
          }
        }
      };
      var a11y = {
        makeElFocusable: function makeElFocusable($el) {
          $el.attr('tabIndex', '0');
          return $el;
        },
        addElRole: function addElRole($el, role) {
          $el.attr('role', role);
          return $el;
        },
        addElLabel: function addElLabel($el, label) {
          $el.attr('aria-label', label);
          return $el;
        },
        disableEl: function disableEl($el) {
          $el.attr('aria-disabled', true);
          return $el;
        },
        enableEl: function enableEl($el) {
          $el.attr('aria-disabled', false);
          return $el;
        },
        onEnterKey: function onEnterKey(e) {
          var swiper = this;
          var params = swiper.params.a11y;

          if (e.keyCode !== 13) {
            return;
          }

          var $targetEl = $(e.target);

          if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) {
              swiper.slideNext();
            }

            if (swiper.isEnd) {
              swiper.a11y.notify(params.lastSlideMessage);
            } else {
              swiper.a11y.notify(params.nextSlideMessage);
            }
          }

          if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) {
              swiper.slidePrev();
            }

            if (swiper.isBeginning) {
              swiper.a11y.notify(params.firstSlideMessage);
            } else {
              swiper.a11y.notify(params.prevSlideMessage);
            }
          }

          if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
            $targetEl[0].click();
          }
        },
        notify: function notify(message) {
          var swiper = this;
          var notification = swiper.a11y.liveRegion;

          if (notification.length === 0) {
            return;
          }

          notification.html('');
          notification.html(message);
        },
        updateNavigation: function updateNavigation() {
          var swiper = this;

          if (swiper.params.loop || !swiper.navigation) {
            return;
          }

          var ref = swiper.navigation;
          var $nextEl = ref.$nextEl;
          var $prevEl = ref.$prevEl;

          if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
              swiper.a11y.disableEl($prevEl);
            } else {
              swiper.a11y.enableEl($prevEl);
            }
          }

          if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
              swiper.a11y.disableEl($nextEl);
            } else {
              swiper.a11y.enableEl($nextEl);
            }
          }
        },
        updatePagination: function updatePagination() {
          var swiper = this;
          var params = swiper.params.a11y;

          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
              var $bulletEl = $(bulletEl);
              swiper.a11y.makeElFocusable($bulletEl);
              swiper.a11y.addElRole($bulletEl, 'button');
              swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
            });
          }
        },
        init: function init() {
          var swiper = this;
          swiper.$el.append(swiper.a11y.liveRegion); // Navigation

          var params = swiper.params.a11y;
          var $nextEl;
          var $prevEl;

          if (swiper.navigation && swiper.navigation.$nextEl) {
            $nextEl = swiper.navigation.$nextEl;
          }

          if (swiper.navigation && swiper.navigation.$prevEl) {
            $prevEl = swiper.navigation.$prevEl;
          }

          if ($nextEl) {
            swiper.a11y.makeElFocusable($nextEl);
            swiper.a11y.addElRole($nextEl, 'button');
            swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
            $nextEl.on('keydown', swiper.a11y.onEnterKey);
          }

          if ($prevEl) {
            swiper.a11y.makeElFocusable($prevEl);
            swiper.a11y.addElRole($prevEl, 'button');
            swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
            $prevEl.on('keydown', swiper.a11y.onEnterKey);
          } // Pagination


          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
            swiper.a11y.liveRegion.remove();
          }

          var $nextEl;
          var $prevEl;

          if (swiper.navigation && swiper.navigation.$nextEl) {
            $nextEl = swiper.navigation.$nextEl;
          }

          if (swiper.navigation && swiper.navigation.$prevEl) {
            $prevEl = swiper.navigation.$prevEl;
          }

          if ($nextEl) {
            $nextEl.off('keydown', swiper.a11y.onEnterKey);
          }

          if ($prevEl) {
            $prevEl.off('keydown', swiper.a11y.onEnterKey);
          } // Pagination


          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
          }
        }
      };
      var A11y = {
        name: 'a11y',
        params: {
          a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            a11y: {
              liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
            }
          });
          Object.keys(a11y).forEach(function (methodName) {
            swiper.a11y[methodName] = a11y[methodName].bind(swiper);
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (!swiper.params.a11y.enabled) {
              return;
            }

            swiper.a11y.init();
            swiper.a11y.updateNavigation();
          },
          toEdge: function toEdge() {
            var swiper = this;

            if (!swiper.params.a11y.enabled) {
              return;
            }

            swiper.a11y.updateNavigation();
          },
          fromEdge: function fromEdge() {
            var swiper = this;

            if (!swiper.params.a11y.enabled) {
              return;
            }

            swiper.a11y.updateNavigation();
          },
          paginationUpdate: function paginationUpdate() {
            var swiper = this;

            if (!swiper.params.a11y.enabled) {
              return;
            }

            swiper.a11y.updatePagination();
          },
          destroy: function destroy() {
            var swiper = this;

            if (!swiper.params.a11y.enabled) {
              return;
            }

            swiper.a11y.destroy();
          }
        }
      };
      var History = {
        init: function init() {
          var swiper = this;

          if (!swiper.params.history) {
            return;
          }

          if (!win.history || !win.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
          }

          var history = swiper.history;
          history.initialized = true;
          history.paths = History.getPathValues();

          if (!history.paths.key && !history.paths.value) {
            return;
          }

          history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

          if (!swiper.params.history.replaceState) {
            win.addEventListener('popstate', swiper.history.setHistoryPopState);
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (!swiper.params.history.replaceState) {
            win.removeEventListener('popstate', swiper.history.setHistoryPopState);
          }
        },
        setHistoryPopState: function setHistoryPopState() {
          var swiper = this;
          swiper.history.paths = History.getPathValues();
          swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
          var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) {
            return part !== '';
          });
          var total = pathArray.length;
          var key = pathArray[total - 2];
          var value = pathArray[total - 1];
          return {
            key: key,
            value: value
          };
        },
        setHistory: function setHistory(key, index) {
          var swiper = this;

          if (!swiper.history.initialized || !swiper.params.history.enabled) {
            return;
          }

          var slide = swiper.slides.eq(index);
          var value = History.slugify(slide.attr('data-history'));

          if (!win.location.pathname.includes(key)) {
            value = key + "/" + value;
          }

          var currentState = win.history.state;

          if (currentState && currentState.value === value) {
            return;
          }

          if (swiper.params.history.replaceState) {
            win.history.replaceState({
              value: value
            }, null, value);
          } else {
            win.history.pushState({
              value: value
            }, null, value);
          }
        },
        slugify: function slugify(text) {
          return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
          var swiper = this;

          if (value) {
            for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
              var slide = swiper.slides.eq(i);
              var slideHistory = History.slugify(slide.attr('data-history'));

              if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                var index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
              }
            }
          } else {
            swiper.slideTo(0, speed, runCallbacks);
          }
        }
      };
      var History$1 = {
        name: 'history',
        params: {
          history: {
            enabled: false,
            replaceState: false,
            key: 'slides'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            history: {
              init: History.init.bind(swiper),
              setHistory: History.setHistory.bind(swiper),
              setHistoryPopState: History.setHistoryPopState.bind(swiper),
              scrollToSlide: History.scrollToSlide.bind(swiper),
              destroy: History.destroy.bind(swiper)
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (swiper.params.history.enabled) {
              swiper.history.init();
            }
          },
          destroy: function destroy() {
            var swiper = this;

            if (swiper.params.history.enabled) {
              swiper.history.destroy();
            }
          },
          transitionEnd: function transitionEnd() {
            var swiper = this;

            if (swiper.history.initialized) {
              swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
            }
          },
          slideChange: function slideChange() {
            var swiper = this;

            if (swiper.history.initialized && swiper.params.cssMode) {
              swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
            }
          }
        }
      };
      var HashNavigation = {
        onHashCange: function onHashCange() {
          var swiper = this;
          var newHash = doc.location.hash.replace('#', '');
          var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

          if (newHash !== activeSlideHash) {
            var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();

            if (typeof newIndex === 'undefined') {
              return;
            }

            swiper.slideTo(newIndex);
          }
        },
        setHash: function setHash() {
          var swiper = this;

          if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
            return;
          }

          if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
            win.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
          } else {
            var slide = swiper.slides.eq(swiper.activeIndex);
            var hash = slide.attr('data-hash') || slide.attr('data-history');
            doc.location.hash = hash || '';
          }
        },
        init: function init() {
          var swiper = this;

          if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) {
            return;
          }

          swiper.hashNavigation.initialized = true;
          var hash = doc.location.hash.replace('#', '');

          if (hash) {
            var speed = 0;

            for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
              var slide = swiper.slides.eq(i);
              var slideHash = slide.attr('data-hash') || slide.attr('data-history');

              if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                var index = slide.index();
                swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
              }
            }
          }

          if (swiper.params.hashNavigation.watchState) {
            $(win).on('hashchange', swiper.hashNavigation.onHashCange);
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.hashNavigation.watchState) {
            $(win).off('hashchange', swiper.hashNavigation.onHashCange);
          }
        }
      };
      var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
          hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            hashNavigation: {
              initialized: false,
              init: HashNavigation.init.bind(swiper),
              destroy: HashNavigation.destroy.bind(swiper),
              setHash: HashNavigation.setHash.bind(swiper),
              onHashCange: HashNavigation.onHashCange.bind(swiper)
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (swiper.params.hashNavigation.enabled) {
              swiper.hashNavigation.init();
            }
          },
          destroy: function destroy() {
            var swiper = this;

            if (swiper.params.hashNavigation.enabled) {
              swiper.hashNavigation.destroy();
            }
          },
          transitionEnd: function transitionEnd() {
            var swiper = this;

            if (swiper.hashNavigation.initialized) {
              swiper.hashNavigation.setHash();
            }
          },
          slideChange: function slideChange() {
            var swiper = this;

            if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
              swiper.hashNavigation.setHash();
            }
          }
        }
      };
      /* eslint no-underscore-dangle: "off" */

      var Autoplay = {
        run: function run() {
          var swiper = this;
          var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
          var delay = swiper.params.autoplay.delay;

          if ($activeSlideEl.attr('data-swiper-autoplay')) {
            delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
          }

          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = Utils.nextTick(function () {
            if (swiper.params.autoplay.reverseDirection) {
              if (swiper.params.loop) {
                swiper.loopFix();
                swiper.slidePrev(swiper.params.speed, true, true);
                swiper.emit('autoplay');
              } else if (!swiper.isBeginning) {
                swiper.slidePrev(swiper.params.speed, true, true);
                swiper.emit('autoplay');
              } else if (!swiper.params.autoplay.stopOnLastSlide) {
                swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                swiper.emit('autoplay');
              } else {
                swiper.autoplay.stop();
              }
            } else if (swiper.params.loop) {
              swiper.loopFix();
              swiper.slideNext(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isEnd) {
              swiper.slideNext(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(0, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }

            if (swiper.params.cssMode && swiper.autoplay.running) {
              swiper.autoplay.run();
            }
          }, delay);
        },
        start: function start() {
          var swiper = this;

          if (typeof swiper.autoplay.timeout !== 'undefined') {
            return false;
          }

          if (swiper.autoplay.running) {
            return false;
          }

          swiper.autoplay.running = true;
          swiper.emit('autoplayStart');
          swiper.autoplay.run();
          return true;
        },
        stop: function stop() {
          var swiper = this;

          if (!swiper.autoplay.running) {
            return false;
          }

          if (typeof swiper.autoplay.timeout === 'undefined') {
            return false;
          }

          if (swiper.autoplay.timeout) {
            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = undefined;
          }

          swiper.autoplay.running = false;
          swiper.emit('autoplayStop');
          return true;
        },
        pause: function pause(speed) {
          var swiper = this;

          if (!swiper.autoplay.running) {
            return;
          }

          if (swiper.autoplay.paused) {
            return;
          }

          if (swiper.autoplay.timeout) {
            clearTimeout(swiper.autoplay.timeout);
          }

          swiper.autoplay.paused = true;

          if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            swiper.autoplay.run();
          } else {
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          }
        }
      };
      var Autoplay$1 = {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            autoplay: {
              running: false,
              paused: false,
              run: Autoplay.run.bind(swiper),
              start: Autoplay.start.bind(swiper),
              stop: Autoplay.stop.bind(swiper),
              pause: Autoplay.pause.bind(swiper),
              onVisibilityChange: function onVisibilityChange() {
                if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                  swiper.autoplay.pause();
                }

                if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                  swiper.autoplay.run();
                  swiper.autoplay.paused = false;
                }
              },
              onTransitionEnd: function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
                  return;
                }

                if (e.target !== this) {
                  return;
                }

                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                swiper.autoplay.paused = false;

                if (!swiper.autoplay.running) {
                  swiper.autoplay.stop();
                } else {
                  swiper.autoplay.run();
                }
              }
            }
          });
        },
        on: {
          init: function init() {
            var swiper = this;

            if (swiper.params.autoplay.enabled) {
              swiper.autoplay.start();
              document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
            }
          },
          beforeTransitionStart: function beforeTransitionStart(speed, internal) {
            var swiper = this;

            if (swiper.autoplay.running) {
              if (internal || !swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.pause(speed);
              } else {
                swiper.autoplay.stop();
              }
            }
          },
          sliderFirstMove: function sliderFirstMove() {
            var swiper = this;

            if (swiper.autoplay.running) {
              if (swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.stop();
              } else {
                swiper.autoplay.pause();
              }
            }
          },
          touchEnd: function touchEnd() {
            var swiper = this;

            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.run();
            }
          },
          destroy: function destroy() {
            var swiper = this;

            if (swiper.autoplay.running) {
              swiper.autoplay.stop();
            }

            document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
          }
        }
      };
      var Fade = {
        setTranslate: function setTranslate() {
          var swiper = this;
          var slides = swiper.slides;

          for (var i = 0; i < slides.length; i += 1) {
            var $slideEl = swiper.slides.eq(i);
            var offset = $slideEl[0].swiperSlideOffset;
            var tx = -offset;

            if (!swiper.params.virtualTranslate) {
              tx -= swiper.translate;
            }

            var ty = 0;

            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
            }

            var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            $slideEl.css({
              opacity: slideOpacity
            }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
          }
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var slides = swiper.slides;
          var $wrapperEl = swiper.$wrapperEl;
          slides.transition(duration);

          if (swiper.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false;
            slides.transitionEnd(function () {
              if (eventTriggered) {
                return;
              }

              if (!swiper || swiper.destroyed) {
                return;
              }

              eventTriggered = true;
              swiper.animating = false;
              var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

              for (var i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        }
      };
      var EffectFade = {
        name: 'effect-fade',
        params: {
          fadeEffect: {
            crossFade: false
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            fadeEffect: {
              setTranslate: Fade.setTranslate.bind(swiper),
              setTransition: Fade.setTransition.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (swiper.params.effect !== 'fade') {
              return;
            }

            swiper.classNames.push(swiper.params.containerModifierClass + "fade");
            var overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: true
            };
            Utils.extend(swiper.params, overwriteParams);
            Utils.extend(swiper.originalParams, overwriteParams);
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (swiper.params.effect !== 'fade') {
              return;
            }

            swiper.fadeEffect.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;

            if (swiper.params.effect !== 'fade') {
              return;
            }

            swiper.fadeEffect.setTransition(duration);
          }
        }
      };
      var Cube = {
        setTranslate: function setTranslate() {
          var swiper = this;
          var $el = swiper.$el;
          var $wrapperEl = swiper.$wrapperEl;
          var slides = swiper.slides;
          var swiperWidth = swiper.width;
          var swiperHeight = swiper.height;
          var rtl = swiper.rtlTranslate;
          var swiperSize = swiper.size;
          var params = swiper.params.cubeEffect;
          var isHorizontal = swiper.isHorizontal();
          var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          var wrapperRotate = 0;
          var $cubeShadowEl;

          if (params.shadow) {
            if (isHorizontal) {
              $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

              if ($cubeShadowEl.length === 0) {
                $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                $wrapperEl.append($cubeShadowEl);
              }

              $cubeShadowEl.css({
                height: swiperWidth + "px"
              });
            } else {
              $cubeShadowEl = $el.find('.swiper-cube-shadow');

              if ($cubeShadowEl.length === 0) {
                $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                $el.append($cubeShadowEl);
              }
            }
          }

          for (var i = 0; i < slides.length; i += 1) {
            var $slideEl = slides.eq(i);
            var slideIndex = i;

            if (isVirtual) {
              slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            }

            var slideAngle = slideIndex * 90;
            var round = Math.floor(slideAngle / 360);

            if (rtl) {
              slideAngle = -slideAngle;
              round = Math.floor(-slideAngle / 360);
            }

            var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            var tx = 0;
            var ty = 0;
            var tz = 0;

            if (slideIndex % 4 === 0) {
              tx = -round * 4 * swiperSize;
              tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
              tx = 0;
              tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
              tx = swiperSize + round * 4 * swiperSize;
              tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
              tx = -swiperSize;
              tz = 3 * swiperSize + swiperSize * 4 * round;
            }

            if (rtl) {
              tx = -tx;
            }

            if (!isHorizontal) {
              ty = tx;
              tx = 0;
            }

            var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

            if (progress <= 1 && progress > -1) {
              wrapperRotate = slideIndex * 90 + progress * 90;

              if (rtl) {
                wrapperRotate = -slideIndex * 90 - progress * 90;
              }
            }

            $slideEl.transform(transform);

            if (params.slideShadows) {
              // Set shadows
              var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
              var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                $slideEl.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                $slideEl.append(shadowAfter);
              }

              if (shadowBefore.length) {
                shadowBefore[0].style.opacity = Math.max(-progress, 0);
              }

              if (shadowAfter.length) {
                shadowAfter[0].style.opacity = Math.max(progress, 0);
              }
            }
          }

          $wrapperEl.css({
            '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
          });

          if (params.shadow) {
            if (isHorizontal) {
              $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
            } else {
              var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
              var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
              var scale1 = params.shadowScale;
              var scale2 = params.shadowScale / multiplier;
              var offset = params.shadowOffset;
              $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
            }
          }

          var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
          $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var $el = swiper.$el;
          var slides = swiper.slides;
          slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

          if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            $el.find('.swiper-cube-shadow').transition(duration);
          }
        }
      };
      var EffectCube = {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            cubeEffect: {
              setTranslate: Cube.setTranslate.bind(swiper),
              setTransition: Cube.setTransition.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (swiper.params.effect !== 'cube') {
              return;
            }

            swiper.classNames.push(swiper.params.containerModifierClass + "cube");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            var overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: false,
              virtualTranslate: true
            };
            Utils.extend(swiper.params, overwriteParams);
            Utils.extend(swiper.originalParams, overwriteParams);
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (swiper.params.effect !== 'cube') {
              return;
            }

            swiper.cubeEffect.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;

            if (swiper.params.effect !== 'cube') {
              return;
            }

            swiper.cubeEffect.setTransition(duration);
          }
        }
      };
      var Flip = {
        setTranslate: function setTranslate() {
          var swiper = this;
          var slides = swiper.slides;
          var rtl = swiper.rtlTranslate;

          for (var i = 0; i < slides.length; i += 1) {
            var $slideEl = slides.eq(i);
            var progress = $slideEl[0].progress;

            if (swiper.params.flipEffect.limitRotation) {
              progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            }

            var offset = $slideEl[0].swiperSlideOffset;
            var rotate = -180 * progress;
            var rotateY = rotate;
            var rotateX = 0;
            var tx = -offset;
            var ty = 0;

            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
              rotateX = -rotateY;
              rotateY = 0;
            } else if (rtl) {
              rotateY = -rotateY;
            }

            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

            if (swiper.params.flipEffect.slideShadows) {
              // Set shadows
              var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
              var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                $slideEl.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                $slideEl.append(shadowAfter);
              }

              if (shadowBefore.length) {
                shadowBefore[0].style.opacity = Math.max(-progress, 0);
              }

              if (shadowAfter.length) {
                shadowAfter[0].style.opacity = Math.max(progress, 0);
              }
            }

            $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
          }
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var slides = swiper.slides;
          var activeIndex = swiper.activeIndex;
          var $wrapperEl = swiper.$wrapperEl;
          slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

          if (swiper.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false; // eslint-disable-next-line

            slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
              if (eventTriggered) {
                return;
              }

              if (!swiper || swiper.destroyed) {
                return;
              } // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;


              eventTriggered = true;
              swiper.animating = false;
              var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

              for (var i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        }
      };
      var EffectFlip = {
        name: 'effect-flip',
        params: {
          flipEffect: {
            slideShadows: true,
            limitRotation: true
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            flipEffect: {
              setTranslate: Flip.setTranslate.bind(swiper),
              setTransition: Flip.setTransition.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (swiper.params.effect !== 'flip') {
              return;
            }

            swiper.classNames.push(swiper.params.containerModifierClass + "flip");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            var overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: true
            };
            Utils.extend(swiper.params, overwriteParams);
            Utils.extend(swiper.originalParams, overwriteParams);
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (swiper.params.effect !== 'flip') {
              return;
            }

            swiper.flipEffect.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;

            if (swiper.params.effect !== 'flip') {
              return;
            }

            swiper.flipEffect.setTransition(duration);
          }
        }
      };
      var Coverflow = {
        setTranslate: function setTranslate() {
          var swiper = this;
          var swiperWidth = swiper.width;
          var swiperHeight = swiper.height;
          var slides = swiper.slides;
          var $wrapperEl = swiper.$wrapperEl;
          var slidesSizesGrid = swiper.slidesSizesGrid;
          var params = swiper.params.coverflowEffect;
          var isHorizontal = swiper.isHorizontal();
          var transform = swiper.translate;
          var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
          var rotate = isHorizontal ? params.rotate : -params.rotate;
          var translate = params.depth; // Each slide offset from center

          for (var i = 0, length = slides.length; i < length; i += 1) {
            var $slideEl = slides.eq(i);
            var slideSize = slidesSizesGrid[i];
            var slideOffset = $slideEl[0].swiperSlideOffset;
            var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
            var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

            var translateZ = -translate * Math.abs(offsetMultiplier);
            var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
            var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

            if (Math.abs(translateX) < 0.001) {
              translateX = 0;
            }

            if (Math.abs(translateY) < 0.001) {
              translateY = 0;
            }

            if (Math.abs(translateZ) < 0.001) {
              translateZ = 0;
            }

            if (Math.abs(rotateY) < 0.001) {
              rotateY = 0;
            }

            if (Math.abs(rotateX) < 0.001) {
              rotateX = 0;
            }

            var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
            $slideEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

            if (params.slideShadows) {
              // Set shadows
              var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
              var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

              if ($shadowBeforeEl.length === 0) {
                $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                $slideEl.append($shadowBeforeEl);
              }

              if ($shadowAfterEl.length === 0) {
                $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                $slideEl.append($shadowAfterEl);
              }

              if ($shadowBeforeEl.length) {
                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
              }

              if ($shadowAfterEl.length) {
                $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
              }
            }
          } // Set correct perspective for IE10


          if (Support.pointerEvents || Support.prefixedPointerEvents) {
            var ws = $wrapperEl[0].style;
            ws.perspectiveOrigin = center + "px 50%";
          }
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
      };
      var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            coverflowEffect: {
              setTranslate: Coverflow.setTranslate.bind(swiper),
              setTransition: Coverflow.setTransition.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;

            if (swiper.params.effect !== 'coverflow') {
              return;
            }

            swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
          },
          setTranslate: function setTranslate() {
            var swiper = this;

            if (swiper.params.effect !== 'coverflow') {
              return;
            }

            swiper.coverflowEffect.setTranslate();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;

            if (swiper.params.effect !== 'coverflow') {
              return;
            }

            swiper.coverflowEffect.setTransition(duration);
          }
        }
      };
      var Thumbs = {
        init: function init() {
          var swiper = this;
          var ref = swiper.params;
          var thumbsParams = ref.thumbs;
          var SwiperClass = swiper.constructor;

          if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Utils.extend(swiper.thumbs.swiper.originalParams, {
              watchSlidesProgress: true,
              slideToClickedSlide: false
            });
            Utils.extend(swiper.thumbs.swiper.params, {
              watchSlidesProgress: true,
              slideToClickedSlide: false
            });
          } else if (Utils.isObject(thumbsParams.swiper)) {
            swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              slideToClickedSlide: false
            }));
            swiper.thumbs.swiperCreated = true;
          }

          swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
          swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        },
        onThumbClick: function onThumbClick() {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;

          if (!thumbsSwiper) {
            return;
          }

          var clickedIndex = thumbsSwiper.clickedIndex;
          var clickedSlide = thumbsSwiper.clickedSlide;

          if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
            return;
          }

          if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
            return;
          }

          var slideToIndex;

          if (thumbsSwiper.params.loop) {
            slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
          } else {
            slideToIndex = clickedIndex;
          }

          if (swiper.params.loop) {
            var currentIndex = swiper.activeIndex;

            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
              swiper.loopFix(); // eslint-disable-next-line

              swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
              currentIndex = swiper.activeIndex;
            }

            var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
            var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();

            if (typeof prevIndex === 'undefined') {
              slideToIndex = nextIndex;
            } else if (typeof nextIndex === 'undefined') {
              slideToIndex = prevIndex;
            } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
              slideToIndex = nextIndex;
            } else {
              slideToIndex = prevIndex;
            }
          }

          swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;

          if (!thumbsSwiper) {
            return;
          }

          var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

          if (swiper.realIndex !== thumbsSwiper.realIndex) {
            var currentThumbsIndex = thumbsSwiper.activeIndex;
            var newThumbsIndex;

            if (thumbsSwiper.params.loop) {
              if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                thumbsSwiper.loopFix(); // eslint-disable-next-line

                thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                currentThumbsIndex = thumbsSwiper.activeIndex;
              } // Find actual thumbs index to slide to


              var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
              var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();

              if (typeof prevThumbsIndex === 'undefined') {
                newThumbsIndex = nextThumbsIndex;
              } else if (typeof nextThumbsIndex === 'undefined') {
                newThumbsIndex = prevThumbsIndex;
              } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                newThumbsIndex = currentThumbsIndex;
              } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                newThumbsIndex = nextThumbsIndex;
              } else {
                newThumbsIndex = prevThumbsIndex;
              }
            } else {
              newThumbsIndex = swiper.realIndex;
            }

            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
              if (thumbsSwiper.params.centeredSlides) {
                if (newThumbsIndex > currentThumbsIndex) {
                  newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                } else {
                  newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                }
              } else if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - slidesPerView + 1;
              }

              thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
          } // Activate thumbs


          var thumbsToActivate = 1;
          var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

          if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
            thumbsToActivate = swiper.params.slidesPerView;
          }

          if (!swiper.params.thumbs.multipleActiveThumbs) {
            thumbsToActivate = 1;
          }

          thumbsToActivate = Math.floor(thumbsToActivate);
          thumbsSwiper.slides.removeClass(thumbActiveClass);

          if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
            for (var i = 0; i < thumbsToActivate; i += 1) {
              thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
            }
          } else {
            for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
              thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
            }
          }
        }
      };
      var Thumbs$1 = {
        name: 'thumbs',
        params: {
          thumbs: {
            multipleActiveThumbs: true,
            swiper: null,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs'
          }
        },
        create: function create() {
          var swiper = this;
          Utils.extend(swiper, {
            thumbs: {
              swiper: null,
              init: Thumbs.init.bind(swiper),
              update: Thumbs.update.bind(swiper),
              onThumbClick: Thumbs.onThumbClick.bind(swiper)
            }
          });
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;
            var ref = swiper.params;
            var thumbs = ref.thumbs;

            if (!thumbs || !thumbs.swiper) {
              return;
            }

            swiper.thumbs.init();
            swiper.thumbs.update(true);
          },
          slideChange: function slideChange() {
            var swiper = this;

            if (!swiper.thumbs.swiper) {
              return;
            }

            swiper.thumbs.update();
          },
          update: function update() {
            var swiper = this;

            if (!swiper.thumbs.swiper) {
              return;
            }

            swiper.thumbs.update();
          },
          resize: function resize() {
            var swiper = this;

            if (!swiper.thumbs.swiper) {
              return;
            }

            swiper.thumbs.update();
          },
          observerUpdate: function observerUpdate() {
            var swiper = this;

            if (!swiper.thumbs.swiper) {
              return;
            }

            swiper.thumbs.update();
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;

            if (!thumbsSwiper) {
              return;
            }

            thumbsSwiper.setTransition(duration);
          },
          beforeDestroy: function beforeDestroy() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;

            if (!thumbsSwiper) {
              return;
            }

            if (swiper.thumbs.swiperCreated && thumbsSwiper) {
              thumbsSwiper.destroy();
            }
          }
        }
      }; // Swiper Class

      var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

      if (typeof Swiper.use === 'undefined') {
        Swiper.use = Swiper.Class.use;
        Swiper.installModule = Swiper.Class.installModule;
      }

      Swiper.use(components);
      return Swiper;
    });
  });

  var sliders = (function () {
    var mainSlider = document.querySelector('.main-slider');
    var brandsSlider = document.querySelector(".brands__list-wrapper");

    if (mainSlider) {
      var mainSwiper = new swiper(mainSlider, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.pagination-bullets',
          type: 'bullets',
          bulletElement: 'span',
          bulletClass: 'pagination-bullets__item',
          bulletActiveClass: 'pagination-bullets__item--active',
          clickable: true
        }
      });
    }

    if (brandsSlider) {
      var brandsSwiper = new swiper(brandsSlider, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.brands__scrollbar' //hide: true,

        }
      });
    }
  });

  var ease = createCommonjsModule(function (module, exports) {
    // easing functions from "Tween.js"
    exports.linear = function (n) {
      return n;
    };

    exports.inQuad = function (n) {
      return n * n;
    };

    exports.outQuad = function (n) {
      return n * (2 - n);
    };

    exports.inOutQuad = function (n) {
      n *= 2;
      if (n < 1) return 0.5 * n * n;
      return -0.5 * (--n * (n - 2) - 1);
    };

    exports.inCube = function (n) {
      return n * n * n;
    };

    exports.outCube = function (n) {
      return --n * n * n + 1;
    };

    exports.inOutCube = function (n) {
      n *= 2;
      if (n < 1) return 0.5 * n * n * n;
      return 0.5 * ((n -= 2) * n * n + 2);
    };

    exports.inQuart = function (n) {
      return n * n * n * n;
    };

    exports.outQuart = function (n) {
      return 1 - --n * n * n * n;
    };

    exports.inOutQuart = function (n) {
      n *= 2;
      if (n < 1) return 0.5 * n * n * n * n;
      return -0.5 * ((n -= 2) * n * n * n - 2);
    };

    exports.inQuint = function (n) {
      return n * n * n * n * n;
    };

    exports.outQuint = function (n) {
      return --n * n * n * n * n + 1;
    };

    exports.inOutQuint = function (n) {
      n *= 2;
      if (n < 1) return 0.5 * n * n * n * n * n;
      return 0.5 * ((n -= 2) * n * n * n * n + 2);
    };

    exports.inSine = function (n) {
      return 1 - Math.cos(n * Math.PI / 2);
    };

    exports.outSine = function (n) {
      return Math.sin(n * Math.PI / 2);
    };

    exports.inOutSine = function (n) {
      return .5 * (1 - Math.cos(Math.PI * n));
    };

    exports.inExpo = function (n) {
      return 0 == n ? 0 : Math.pow(1024, n - 1);
    };

    exports.outExpo = function (n) {
      return 1 == n ? n : 1 - Math.pow(2, -10 * n);
    };

    exports.inOutExpo = function (n) {
      if (0 == n) return 0;
      if (1 == n) return 1;
      if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
      return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
    };

    exports.inCirc = function (n) {
      return 1 - Math.sqrt(1 - n * n);
    };

    exports.outCirc = function (n) {
      return Math.sqrt(1 - --n * n);
    };

    exports.inOutCirc = function (n) {
      n *= 2;
      if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
      return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
    };

    exports.inBack = function (n) {
      var s = 1.70158;
      return n * n * ((s + 1) * n - s);
    };

    exports.outBack = function (n) {
      var s = 1.70158;
      return --n * n * ((s + 1) * n + s) + 1;
    };

    exports.inOutBack = function (n) {
      var s = 1.70158 * 1.525;
      if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
      return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
    };

    exports.inBounce = function (n) {
      return 1 - exports.outBounce(1 - n);
    };

    exports.outBounce = function (n) {
      if (n < 1 / 2.75) {
        return 7.5625 * n * n;
      } else if (n < 2 / 2.75) {
        return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
      } else if (n < 2.5 / 2.75) {
        return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
      } else {
        return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
      }
    };

    exports.inOutBounce = function (n) {
      if (n < .5) return exports.inBounce(n * 2) * .5;
      return exports.outBounce(n * 2 - 1) * .5 + .5;
    };

    exports.inElastic = function (n) {
      var s,
          a = 0.1,
          p = 0.4;
      if (n === 0) return 0;
      if (n === 1) return 1;

      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = p * Math.asin(1 / a) / (2 * Math.PI);

      return -(a * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
    };

    exports.outElastic = function (n) {
      var s,
          a = 0.1,
          p = 0.4;
      if (n === 0) return 0;
      if (n === 1) return 1;

      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = p * Math.asin(1 / a) / (2 * Math.PI);

      return a * Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1;
    };

    exports.inOutElastic = function (n) {
      var s,
          a = 0.1,
          p = 0.4;
      if (n === 0) return 0;
      if (n === 1) return 1;

      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = p * Math.asin(1 / a) / (2 * Math.PI);

      if ((n *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
      return a * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p) * 0.5 + 1;
    }; // aliases


    exports['in-quad'] = exports.inQuad;
    exports['out-quad'] = exports.outQuad;
    exports['in-out-quad'] = exports.inOutQuad;
    exports['in-cube'] = exports.inCube;
    exports['out-cube'] = exports.outCube;
    exports['in-out-cube'] = exports.inOutCube;
    exports['in-quart'] = exports.inQuart;
    exports['out-quart'] = exports.outQuart;
    exports['in-out-quart'] = exports.inOutQuart;
    exports['in-quint'] = exports.inQuint;
    exports['out-quint'] = exports.outQuint;
    exports['in-out-quint'] = exports.inOutQuint;
    exports['in-sine'] = exports.inSine;
    exports['out-sine'] = exports.outSine;
    exports['in-out-sine'] = exports.inOutSine;
    exports['in-expo'] = exports.inExpo;
    exports['out-expo'] = exports.outExpo;
    exports['in-out-expo'] = exports.inOutExpo;
    exports['in-circ'] = exports.inCirc;
    exports['out-circ'] = exports.outCirc;
    exports['in-out-circ'] = exports.inOutCirc;
    exports['in-back'] = exports.inBack;
    exports['out-back'] = exports.outBack;
    exports['in-out-back'] = exports.inOutBack;
    exports['in-bounce'] = exports.inBounce;
    exports['out-bounce'] = exports.outBounce;
    exports['in-out-bounce'] = exports.inOutBounce;
    exports['in-elastic'] = exports.inElastic;
    exports['out-elastic'] = exports.outElastic;
    exports['in-out-elastic'] = exports.inOutElastic;
  });
  var ease_1 = ease.linear;
  var ease_2 = ease.inQuad;
  var ease_3 = ease.outQuad;
  var ease_4 = ease.inOutQuad;
  var ease_5 = ease.inCube;
  var ease_6 = ease.outCube;
  var ease_7 = ease.inOutCube;
  var ease_8 = ease.inQuart;
  var ease_9 = ease.outQuart;
  var ease_10 = ease.inOutQuart;
  var ease_11 = ease.inQuint;
  var ease_12 = ease.outQuint;
  var ease_13 = ease.inOutQuint;
  var ease_14 = ease.inSine;
  var ease_15 = ease.outSine;
  var ease_16 = ease.inOutSine;
  var ease_17 = ease.inExpo;
  var ease_18 = ease.outExpo;
  var ease_19 = ease.inOutExpo;
  var ease_20 = ease.inCirc;
  var ease_21 = ease.outCirc;
  var ease_22 = ease.inOutCirc;
  var ease_23 = ease.inBack;
  var ease_24 = ease.outBack;
  var ease_25 = ease.inOutBack;
  var ease_26 = ease.inBounce;
  var ease_27 = ease.outBounce;
  var ease_28 = ease.inOutBounce;
  var ease_29 = ease.inElastic;
  var ease_30 = ease.outElastic;
  var ease_31 = ease.inOutElastic;

  var emitter = createCommonjsModule(function (module) {
    function Emitter(obj) {
      if (obj) return mixin(obj);
    }

    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }

      return obj;
    }

    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
      return this;
    };

    Emitter.prototype.once = function (event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }

      on.fn = fn;
      this.on(event, on);
      return this;
    };

    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {}; // all

      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks['$' + event];
      if (!callbacks) return this; // remove all handlers

      if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
      } // remove specific handler


      var cb;

      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];

        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      } // Remove event specific arrays for event types that no
      // one is subscribed for to avoid memory leak.


      if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
      }

      return this;
    };

    Emitter.prototype.emit = function (event) {
      this._callbacks = this._callbacks || {};
      var args = [].slice.call(arguments, 1),
          callbacks = this._callbacks['$' + event];

      if (callbacks) {
        callbacks = callbacks.slice(0);

        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }

      return this;
    };

    Emitter.prototype.listeners = function (event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks['$' + event] || [];
    };

    Emitter.prototype.hasListeners = function (event) {
      return !!this.listeners(event).length;
    };

    {
      module.exports = Emitter;
    }
  });

  function extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }

    return obj;
  }

  function Tween(obj) {
    if (!(this instanceof Tween)) return new Tween(obj);
    this._from = obj;
    this.ease('linear');
    this.duration(500);
  }

  emitter(Tween.prototype);

  Tween.prototype.reset = function () {
    this.isArray = Object.prototype.toString.call(this._from) === '[object Array]';
    this._curr = extend({}, this._from);
    this._done = false;
    this._start = Date.now();
    return this;
  };

  Tween.prototype.to = function (obj) {
    this.reset();
    this._to = obj;
    return this;
  };

  Tween.prototype.duration = function (ms) {
    this._duration = ms;
    return this;
  };

  Tween.prototype.ease = function (fn) {
    fn = 'function' == typeof fn ? fn : ease[fn];
    if (!fn) throw new TypeError('invalid easing function');
    this._ease = fn;
    return this;
  };

  Tween.prototype.stop = function () {
    this.stopped = true;
    this._done = true;
    this.emit('stop');
    this.emit('end');
    return this;
  };

  Tween.prototype.step = function () {
    if (this._done) return;
    var duration = this._duration;
    var now = Date.now();
    var delta = now - this._start;
    var done = delta >= duration;

    if (done) {
      this._from = this._to;

      this._update(this._to);

      this._done = true;
      this.emit('end');
      return this;
    }

    var from = this._from;
    var to = this._to;
    var curr = this._curr;
    var fn = this._ease;
    var p = (now - this._start) / duration;
    var n = fn(p);

    if (this.isArray) {
      for (var i = 0; i < from.length; ++i) {
        curr[i] = from[i] + (to[i] - from[i]) * n;
      }

      this._update(curr);

      return this;
    }

    for (var k in from) {
      curr[k] = from[k] + (to[k] - from[k]) * n;
    }

    this._update(curr);

    return this;
  };

  Tween.prototype.update = function (fn) {
    if (0 == arguments.length) return this.step();
    this._update = fn;
    return this;
  };

  var tween = Tween;

  var performanceNow = createCommonjsModule(function (module) {
    // Generated by CoffeeScript 1.12.2
    (function () {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function () {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function () {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };

        hrtime = process.hrtime;

        getNanoSeconds = function () {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };

        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function () {
          return Date.now() - loadTime;
        };

        loadTime = Date.now();
      } else {
        module.exports = function () {
          return new Date().getTime() - loadTime;
        };

        loadTime = new Date().getTime();
      }
    }).call(commonjsGlobal);
  });

  var root = typeof window === 'undefined' ? commonjsGlobal : window,
      vendors = ['moz', 'webkit'],
      suffix = 'AnimationFrame',
      raf = root['request' + suffix],
      caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

  for (var i = 0; !raf && i < vendors.length; i++) {
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
  } // Some versions of FF have rAF but not cAF


  if (!raf || !caf) {
    var last = 0,
        id = 0,
        queue = [],
        frameDuration = 1000 / 60;

    raf = function (callback) {
      if (queue.length === 0) {
        var _now = performanceNow(),
            next = Math.max(0, frameDuration - (_now - last));

        last = next + _now;
        setTimeout(function () {
          var cp = queue.slice(0); // Clear queue here to prevent
          // callbacks from appending listeners
          // to the current frame's queue

          queue.length = 0;

          for (var i = 0; i < cp.length; i++) {
            if (!cp[i].cancelled) {
              try {
                cp[i].callback(last);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 0);
              }
            }
          }
        }, Math.round(next));
      }

      queue.push({
        handle: ++id,
        callback: callback,
        cancelled: false
      });
      return id;
    };

    caf = function (handle) {
      for (var i = 0; i < queue.length; i++) {
        if (queue[i].handle === handle) {
          queue[i].cancelled = true;
        }
      }
    };
  }

  var raf_1 = function (fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
  };

  var cancel = function () {
    caf.apply(root, arguments);
  };

  var polyfill$1 = function (object) {
    if (!object) {
      object = root;
    }

    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
  };
  raf_1.cancel = cancel;
  raf_1.polyfill = polyfill$1;

  function scroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var x = window.pageXOffset || document.documentElement.scrollLeft;
    return {
      top: y,
      left: x
    };
  }

  function scrollTo(x, y, options) {
    options = options || {}; // start position

    var start = scroll(); // setup tween

    var tween$1 = tween(start).ease(options.ease || 'out-circ').to({
      top: y,
      left: x
    }).duration(options.duration || 1000); // scroll

    tween$1.update(function (o) {
      window.scrollTo(o.left | 0, o.top | 0);
    }); // handle end

    tween$1.on('end', function () {
      animate = function () {};
    }); // animate

    function animate() {
      raf_1(animate);
      tween$1.update();
    }

    animate();
    return tween$1;
  }

  var scrollTo_1 = scrollTo;

  function calculateScrollOffset(elem, additionalOffset, alignment) {
    var body = document.body,
        html = document.documentElement;
    var elemRect = elem.getBoundingClientRect();
    var clientHeight = html.clientHeight;
    var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    additionalOffset = additionalOffset || 0;
    var scrollPosition;

    if (alignment === 'bottom') {
      scrollPosition = elemRect.bottom - clientHeight;
    } else if (alignment === 'middle') {
      scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
    } else {
      // top and default
      scrollPosition = elemRect.top;
    }

    var maxScrollPosition = documentHeight - clientHeight;
    return Math.min(scrollPosition + additionalOffset + window.pageYOffset, maxScrollPosition);
  }

  var scrollToElement = function (elem, options) {
    options = options || {};
    if (typeof elem === 'string') elem = document.querySelector(elem);
    if (elem) return scrollTo_1(0, calculateScrollOffset(elem, options.offset, options.align), options);
  };

  var services = (function () {
    var services = document.querySelector(".services");

    if (services) {
      var servicesSwitcher = function servicesSwitcher(options) {
        options.activateCategory.classList.remove(classHidden);
        options.hideCategories.forEach(function (category) {
          category.classList.add(classHidden);
        });
        options.deactivateButtons.forEach(function (button) {
          button.classList.remove(classActive);
        });
        options.activateButton.classList.add(classActive);
      };

      var buttonDelivery = services.querySelector(".services__btn--delivery");
      var buttonWarranty = services.querySelector(".services__btn--warranty");
      var buttonCredit = services.querySelector(".services__btn--credit");
      var sectionDelivery = services.querySelector(".services__item--delivery");
      var sectionWarranty = services.querySelector(".services__item--warranty");
      var sectionCredit = services.querySelector(".services__item--credit");
      var navDelivery = document.querySelector(".site-menu__link--delivery");
      var navWarranty = document.querySelector(".site-menu__link--warranty");
      var classHidden = "services__item--hidden";
      var classActive = "services__btn--active";
      buttonDelivery.addEventListener("click", function () {
        servicesSwitcher({
          activateButton: buttonDelivery,
          activateCategory: sectionDelivery,
          hideCategories: [sectionWarranty, sectionCredit],
          deactivateButtons: [buttonWarranty, buttonCredit]
        });
      });
      buttonWarranty.addEventListener("click", function () {
        servicesSwitcher({
          activateButton: buttonWarranty,
          activateCategory: sectionWarranty,
          hideCategories: [sectionDelivery, sectionCredit],
          deactivateButtons: [buttonDelivery, buttonCredit]
        });
      });
      buttonCredit.addEventListener("click", function () {
        servicesSwitcher({
          activateButton: buttonCredit,
          activateCategory: sectionCredit,
          hideCategories: [sectionDelivery, sectionWarranty],
          deactivateButtons: [buttonDelivery, buttonWarranty]
        });
      });
      navDelivery.addEventListener("click", function () {
        scrollToElement('.services', {
          offset: 0,
          ease: 'out-expo',
          duration: 1500
        });
        servicesSwitcher({
          activateButton: buttonDelivery,
          activateCategory: sectionDelivery,
          hideCategories: [sectionWarranty, sectionCredit],
          deactivateButtons: [buttonWarranty, buttonCredit]
        });
      });
      navWarranty.addEventListener("click", function () {
        scrollToElement('.services', {
          offset: 0,
          ease: 'out-expo',
          duration: 1500
        });
        servicesSwitcher({
          activateButton: buttonWarranty,
          activateCategory: sectionWarranty,
          hideCategories: [sectionDelivery, sectionCredit],
          deactivateButtons: [buttonDelivery, buttonCredit]
        });
      });
    }
  });

  var contacts = (function () {
    var contacts = document.querySelector(".contacts");

    if (contacts) {
      var navContacts = document.querySelector(".site-menu__link--contacts");
      navContacts.addEventListener("click", function () {
        scrollToElement(contacts, {
          offset: 0,
          ease: 'out-expo',
          duration: 1500
        });
      });
    }
  });

  // Older browsers don't support event options, feature detect it.
  // Adopted and modified solution from Bohdan Didukh (2017)
  // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
  let hasPassiveEvents = false;

  if (typeof window !== 'undefined') {
    const passiveTestOptions = {
      get passive() {
        hasPassiveEvents = true;
        return undefined;
      }

    };
    window.addEventListener('testPassive', null, passiveTestOptions);
    window.removeEventListener('testPassive', null, passiveTestOptions);
  }

  const isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
  let locks = [];
  let documentListenerAdded = false;
  let initialClientY = -1;
  let previousBodyOverflowSetting;
  let previousBodyPaddingRight; // returns true if `el` should be allowed to receive touchmove events.

  const allowTouchMove = el => locks.some(lock => {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });

  const preventDefault = rawEvent => {
    const e = rawEvent || window.event; // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.

    if (allowTouchMove(e.target)) {
      return true;
    } // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).


    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
  };

  const setOverflowHidden = options => {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(() => {
      // If previousBodyPaddingRight is already set, don't set it again.
      if (previousBodyPaddingRight === undefined) {
        const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

        if (reserveScrollBarGap && scrollBarGap > 0) {
          previousBodyPaddingRight = document.body.style.paddingRight;
          document.body.style.paddingRight = `${scrollBarGap}px`;
        }
      } // If previousBodyOverflowSetting is already set, don't set it again.


      if (previousBodyOverflowSetting === undefined) {
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    });
  };

  const restoreOverflowSetting = () => {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(() => {
      if (previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = previousBodyPaddingRight; // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.

        previousBodyPaddingRight = undefined;
      }

      if (previousBodyOverflowSetting !== undefined) {
        document.body.style.overflow = previousBodyOverflowSetting; // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.

        previousBodyOverflowSetting = undefined;
      }
    });
  }; // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


  const isTargetElementTotallyScrolled = targetElement => targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;

  const handleScroll = (event, targetElement) => {
    const clientY = event.targetTouches[0].clientY - initialClientY;

    if (allowTouchMove(event.target)) {
      return false;
    }

    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll.
      return preventDefault(event);
    }

    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
      // element is at the top of its scroll.
      return preventDefault(event);
    }

    event.stopPropagation();
    return true;
  };

  const disableBodyScroll = (targetElement, options) => {
    if (isIosDevice) {
      // targetElement must be provided, and disableBodyScroll must not have been
      // called on this targetElement before.
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
        return;
      }

      if (targetElement && !locks.some(lock => lock.targetElement === targetElement)) {
        const lock = {
          targetElement,
          options: options || {}
        };
        locks = [...locks, lock];

        targetElement.ontouchstart = event => {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            initialClientY = event.targetTouches[0].clientY;
          }
        };

        targetElement.ontouchmove = event => {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            handleScroll(event, targetElement);
          }
        };

        if (!documentListenerAdded) {
          document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
            passive: false
          } : undefined);
          documentListenerAdded = true;
        }
      }
    } else {
      setOverflowHidden(options);
      const lock = {
        targetElement,
        options: options || {}
      };
      locks = [...locks, lock];
    }
  };
  const enableBodyScroll = targetElement => {
    if (isIosDevice) {
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
        return;
      }

      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;
      locks = locks.filter(lock => lock.targetElement !== targetElement);

      if (documentListenerAdded && locks.length === 0) {
        document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = false;
      }
    } else {
      locks = locks.filter(lock => lock.targetElement !== targetElement);

      if (!locks.length) {
        restoreOverflowSetting();
      }
    }
  };

  var showClass = "show";
  var errorClass = "error";
  var showSuccessMassage = function showSuccessMassage(messageHeading, messageText) {
    var successMessage = document.querySelector('.success-message');
    var successMessageCloseBtn = document.querySelector('.success-message-close');
    var successMessageHeading = successMessage.querySelector('.success-message-lead');
    var successMessageText = successMessage.querySelector('.success-message-text');
    successMessage.classList.add(showClass);
    disableBodyScroll(successMessage);
    successMessageHeading.textContent = messageHeading;
    successMessageText.textContent = messageText;
    successMessageCloseBtn.addEventListener('click', function () {
      enableBodyScroll(successMessage);
      successMessage.classList.remove(showClass);
    });
  };

  var hideSection = function hideSection(section) {
    section.classList.remove(showClass);
  };
  var showSection = function showSection(section) {
    section.classList.add(showClass);
  };
  var toggleShowClass = function toggleShowClass(section) {
    section.classList.toggle(showClass);
  };
  var urlUtils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL: function parseRequestURL() {
      var url = location.hash.slice(1).toLowerCase() || '/';
      var r = url.split("/");
      var request = {
        resource: null,
        id: null,
        verb: null
      };
      request.resource = r[1];
      request.id = r[2];
      request.verb = r[3];
      return request;
    } // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    ,
    sleep: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  };

  var aboutUs = (function () {
    var contactFormPopup = document.querySelector(".write-us");

    if (contactFormPopup) {
      var contactForm = contactFormPopup.querySelector(".write-us__form");
      var contactPopupOpenBtn = document.querySelector(".contacts__btn");
      var contactFormSubmitBtn = contactForm.querySelector(".write-us__btn");

      var showContactFormPopup = function showContactFormPopup() {
        var contactFormName = contactForm.elements.writeUsName;
        var contactsFormCloseBtn = contactFormPopup.querySelector(".modal__close");
        disableBodyScroll(contactFormPopup);
        contactFormPopup.classList.add(showClass);
        contactForm.reset();
        contactFormName.focus();
        contactsFormCloseBtn.addEventListener("click", function (evt) {
          evt.preventDefault();
          enableBodyScroll(contactFormPopup);
          contactFormPopup.classList.remove(showClass);
          contactFormPopup.classList.remove(errorClass);
        });
        contactFormSubmitBtn.addEventListener("click", function () {
          if (formValidate(contactForm)) {
            enableBodyScroll(contactFormPopup);
            contactFormPopup.classList.remove(showClass);
            showSuccessMassage('Ваше сообщение успешно отправлено!', 'Мы обязательно свяжимся с Вами в ближайшее время.');
            contactFormPopup.classList.remove(errorClass);
          } else {
            if (contactFormPopup.classList.contains(errorClass)) {
              contactFormPopup.classList.remove(errorClass);
              void contactFormPopup.offsetWidth;
              contactFormPopup.classList.add(errorClass);
            }
          }
        });
      };

      var formValidate = function formValidate(form) {
        var valid = true;
        var formName = form.elements.writeUsName;
        var formEmail = form.elements.writeUsEmail;
        contactFormPopup.classList.remove(errorClass);
        var nameValidate = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
        var emailValidate = /^\w+[.!#$%&'*+/=?^_`{|}~-]*?\w*?@[a-z]+?\.[a-z]{2,4}$/;

        if (!formName.value.match(nameValidate)) {
          contactFormPopup.classList.add(errorClass);
          valid = false;
        }

        if (!formEmail.value.match(emailValidate)) {
          contactFormPopup.classList.add(errorClass);
          valid = false;
        }

        if (!form.elements.contactMessage.value) {
          contactFormPopup.classList.add(errorClass);
          valid = false;
        }

        return valid;
      };

      contactPopupOpenBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        showContactFormPopup();
      });
    }
  });

  var getLocalData = function getLocalData(dataName) {
    if (!JSON.parse(localStorage.getItem(dataName))) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem(dataName));
    }
  }; //дублировать инфу в новый объект для корзины

  var getProductProperties = function getProductProperties(id, name, price, src, amount) {
    _classCallCheck(this, getProductProperties);

    this.id = id;
    this.name = name;
    this.price = parseInt(price);
    this.src = src;
    this.amount = amount;
  };

  var addEvents = function addEvents(elem, eventType, handlerFunc) {
    if (elem) {
      elem.forEach(function (item) {
        item.addEventListener(eventType, handlerFunc);
      });
    }
  };

  var totalPrice = function totalPrice(cartData) {
    var finalPrice = 0;

    if (cartData.length === 0) {
      return finalPrice;
    } else {
      cartData.forEach(function (productObj, index) {
        for (var key in productObj) {
          if (key === 'price') {
            if (productObj.amount >= 1) {
              finalPrice += productObj.amount * productObj.price;
            }
          }
        }
      });
      return finalPrice;
    }
  };

  var deleteFromCart = (function () {
    var cartArray = getLocalData('cartData');
    var deleteFromCartBtn = document.querySelectorAll('.delete_item'); // функция - повесить слушатель на коллекцию

    addEvents(deleteFromCartBtn, 'click', function (e) {
      deleteFunc(e);
    });

    function deleteFunc(e) {
      var i = 0,
          flag = false;
      var prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
      cartArray.forEach(function (item, index) {
        if (item.id === prodCartId) {
          i = index;
          flag = true;
        }
      });

      if (flag) {
        console.log(i);
        cartArray.splice(i, 1);
        console.log(cartArray);
        e.target.closest('.cart__product').remove();
      } // if(cartArray.length === 0){
      //   localStorage.removeItem('cartData');
      // }


      localStorage.setItem('cartData', JSON.stringify(cartArray));
      document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
    }
  });

  var miniCartRender = (function () {
    var cartArray = getLocalData('cartData');

    if (cartArray.length === 0) {
      //пустая ли корзина
      document.querySelector('.cart-popup>ul').innerHTML = "<div>\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430 :(</div>";
      document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
    } else {
      document.querySelector('.cart-popup>ul').innerHTML = "";

      if (document.querySelector('.cart-popup>ul')) {
        cartArray = getLocalData('cartData');
        cartArray.forEach(function (item, index) {
          document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          document.querySelector('.cart-popup>ul').innerHTML += "\n          <li class=\"cart__product\"  id_product_in_cart=\"".concat(item.id, "\">\n              <div class=\"cart__product-img\">\n                <img src=\"").concat(item.src, "\" width=\"100\" height=\"100\">\n              </div>\n              <div class=\"cart__product-info\">\n                <div class=\"cart__product-name product-name\">").concat(item.name, "</div>\n                <div class=\"amount-of-produts\">\n                  <span class=\"amount\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:</span>\n                  <span class=\"number-of-amount\">").concat(item.amount, "</span>\n                  <p class=\"cart__product-price\">\u0426\u0435\u043D\u0430: <span class=\"product-price\">").concat(item.price, "</span></p>\n                  <div class=\"delete_item\">\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B</div>\n                </div>\n              </div>\n            </li>\n        ");
        });
      }
    }

    deleteFromCart();
  });

  var addToCart = (function () {
    var cartArray = getLocalData('cartData');
    var allProducts = document.querySelectorAll('.addToCartBtn'); //кнопка в корзину
    // функция - повесить слушатель на коллекцию

    addEvents(allProducts, 'click', function (e) {
      addToCart(e);
    }); // проверки на добавление товара

    function addToCart(e) {
      var prodCartId = e.target.closest('.catalog__item').querySelector('.catalog__link').getAttribute('data-id');
      var prodCartName = e.target.closest('.catalog__item').querySelector('.catalog__title').innerHTML;
      var prodCardPrice = e.target.closest('.catalog__item').querySelector('.catalog__price').innerHTML;
      var prodCardImg = e.target.closest('.catalog__item').querySelector('.catalog__image').src;
      var prodCardAmount = 1;
      var cartItemInfo = new getProductProperties(prodCartId, prodCartName, prodCardPrice, prodCardImg, prodCardAmount); //новый объект

      var i = 0;

      if (cartArray.length === 0) {
        cartArray.push(cartItemInfo);
        localStorage.setItem('cartData', JSON.stringify(cartArray));
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
        deleteFromCart();
      } else if (cartArray.length > 0) {
        var flag = true;
        cartArray.forEach(function (item, index) {
          if (item.id === cartItemInfo.id) {
            i = index;
            flag = false; // console.log(i);
          }
        });

        if (flag) {
          cartArray.push(cartItemInfo);
        } else {
          cartArray[i].amount += 1;
        }

        localStorage.setItem('cartData', JSON.stringify(cartArray));
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
      }

      miniCartRender();
    }
  }); // function fillCart(cartItemInfo) {
  //   document.querySelector('.cart-popup>ul').innerHTML = "";
  //   cartArray.forEach((item) =>{
  //     document.querySelector('.cart-popup>ul').innerHTML += `
  //       <li class="cart__product" id_product_in_cart="cartId${cartItemInfo.id}>
  //           <div class="cart__product-img">
  //             <img src="${cartItemInfo.src}" width="100" height="100">
  //           </div>
  //           <div class="cart__product-info">
  //             <div class="cart__product-name product-name">${cartItemInfo.name}</div>
  //             <div class="amount-of-produts">
  //               <span class="amount">Количество:</span>
  //               <span class="number-of-amount">${cartItemInfo.amount}</span>
  //               <p class="cart__product-price">Цена: <span class="product-price">${cartItemInfo.price}</span></p>
  //               <div class="delete_item">Убрать из корзины</div>
  //             </div>
  //           </div>
  //         </li>
  //     `;
  //   });
  //
  // }

  var mainPage = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view = "\n              <h1 class=\"visually-hidden\">\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0433\u0430\u0434\u0436\u0435\u0442\u043E\u0432 \xAB\u0414\u0435\u0432\u0430\u0439\u0441\xBB</h1>\n\n      <section class=\"promo page__section page__wrapper\">\n        <h2 class=\"visually-hidden\">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B</h2>\n\n        <div class=\"slider main-slider swiper-container\">\n\n          <ol class=\"promo__list slider__list swiper-wrapper\">\n            <li class=\"promo__item promo__item--one slider__item swiper-slide\">\n              <h3 class=\"visually-hidden\">\u041C\u043E\u043D\u043E\u043F\u043E\u0434</h3>\n              <div class=\"promo__image-wrapper\">\n                <img class=\"promo__image\" src=\"img/promo-1.png\" width=\"560\" height=\"524\" alt=\"\u041F\u0430\u043B\u043A\u0430 \u0434\u043B\u044F \u0441\u0435\u043B\u0444\u0438\">\n              </div>\n              <div class=\"promo__info\">\n                <b class=\"promo__lead\">\u0414\u0435\u043B\u0430\u0439 \u0441\u0435\u043B\u0444\u0438,<br> \u043A\u0430\u043A \u0411\u0435\u043D \u0421\u0442\u0438\u043B\u043B\u0435\u0440!</b>\n                <p class=\"promo__description\">\u0421\u0430\u043C\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u043F\u0430\u043B\u043A\u0430 \u0434\u043B\u044F \u0441\u0435\u043B\u0444\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435. \u0412\u043E\u0441\u0435\u043C\u044C (\u0412\u043E\u0441\u0435\u043C\u044C, \u041A\u0430\u0440\u043B!) \u043C\u0435\u0442\u0440\u043E\u0432 \u0434\u043B\u0438\u043D\u043E\u0439 \u0438 \u0432\u0435\u0441\u043E\u043C \u0432\u0441\u0435\u0433\u043E 5 \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C.</p>\n                <a class=\"promo__btn btn\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                <table class=\"parameters\">\n                  <caption class=\"visually-hidden\">\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u043E\u0432\u0430\u0440\u0430</caption>\n                  <thead class=\"parameters__header\">\n                    <tr>\n                      <th class=\"parameters__name\">\u0414\u043B\u0438\u043D\u0430 \u043F\u0430\u043B\u043A\u0438</th>\n                      <th class=\"parameters__name\">\u0412\u0435\u0441 \u043F\u0430\u043B\u043A\u0438</th>\n                      <th class=\"parameters__name\">\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"parameters__value\">8,5 \u043C</td>\n                      <td class=\"parameters__value\">5 \u043A\u0433</td>\n                      <td class=\"parameters__value\">\u041A\u0430\u0440\u0431\u043E\u043D</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </li>\n            <li class=\"promo__item promo__item--two slider__item swiper-slide\">\n              <h3 class=\"visually-hidden\">\u0424\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442</h3>\n              <div class=\"promo__image-wrapper\">\n                <img class=\"promo__image\" src=\"img/promo-2.png\" width=\"560\" height=\"524\" alt=\"\u0424\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442\">\n              </div>\n              <div class=\"promo__info\">\n                <b class=\"promo__lead\">\u0425\u0443\u0434\u0435\u0435\u043C<br> \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!</b>\n                <p class=\"promo__description\">\u041C\u043E\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0444\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442\u044B \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0439\u0442\u0438 \u0432 \u0441\u0435\u0431\u0435 \u0441\u0438\u043B\u044B \u043D\u0435&nbsp;\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0434\u0438\u0435\u0442\u0443.</p>\n                <a class=\"promo__btn btn\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                <table class=\"parameters\">\n                  <caption class=\"visually-hidden\">\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u043E\u0432\u0430\u0440\u0430</caption>\n                  <thead class=\"parameters__header\">\n                    <tr>\n                      <th class=\"parameters__name\">\u0411\u0435\u0437 \u043F\u043E\u0434\u0437\u0430\u0440\u044F\u0434\u043A\u0438</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"parameters__value\">48 \u0447\u0430\u0441\u043E\u0432</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </li>\n            <li class=\"promo__item promo__item--three slider__item swiper-slide\">\n              <h3 class=\"visually-hidden\">\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440</h3>\n              <div class=\"promo__image-wrapper\">\n                <img class=\"promo__image\" src=\"img/promo-3.png\" width=\"560\" height=\"524\" alt=\"\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440\">\n              </div>\n              <div class=\"promo__info\">\n                <b class=\"promo__lead\">\u041F\u043E\u0440\u0445\u0430\u0435\u0442 \u043A\u0430\u043A \u0431\u0430\u0431\u043E\u0447\u043A\u0430, \u0436\u0430\u043B\u0438\u0442 \u043A\u0430\u043A \u043F\u0447\u0435\u043B\u0430!</b>\n                <p class=\"promo__description\">\u042D\u0442\u043E\u0442 \u043E\u0431\u044B\u0447\u043D\u044B\u0439, \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434, \u043A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440 \u043E\u0441\u043D\u0430\u0449\u0435\u043D \u043C\u043E\u0449\u043D\u044B\u043C&nbsp;\u043B\u0430\u0437\u0435\u0440\u043E\u043C, \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u043E\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0443\u044E \u043A\u0430\u043C\u0435\u0440\u0443.</p>\n                <a class=\"promo__btn btn\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                <table class=\"parameters\">\n                  <caption class=\"visually-hidden\">\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u043E\u0432\u0430\u0440\u0430</caption>\n                  <thead class=\"parameters__header\">\n                    <tr>\n                      <th class=\"parameters__name\">\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0435\u0442\u0430</th>\n                      <th class=\"parameters__name\">\u0420\u0430\u0434\u0438\u0443\u0441 \u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u044F</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"parameters__value\">800 \u043C</td>\n                      <td class=\"parameters__value\">50 \u043C</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </li>\n          </ol>\n          <div class=\"promo__controls pagination-bullets\"></div>\n        </div>\n      </section>\n\n      <section class=\"categories page__wrapper\">\n        <h2 class=\"visually-hidden\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</h2>\n        <ul class=\"categories__list\">\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--virtual\" href=\"#\">\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</a>\n          </li>\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--monopod\" href=\"catalog.html\">\u041C\u043E\u043D\u043E\u043F\u043E\u0434\u044B \u0434\u043B\u044F&nbsp;\u0441\u0435\u043B\u0444\u0438</a>\n          </li>\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--camera\" href=\"#\">\u042D\u043A\u0448\u043D-\u043A\u0430\u043C\u0435\u0440\u044B</a>\n          </li>\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--fitness\" href=\"#\">\u0424\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442\u044B</a>\n          </li>\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--watches\" href=\"#\">\u0423\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B</a>\n          </li>\n          <li class=\"categories__item\">\n            <a class=\"categories__link categories__link--copter\" href=\"#\">\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440\u044B</a>\n          </li>\n        </ul>\n      </section>\n\n      <section class=\"services page__section\" id=\"services\">\n        <h2 class=\"visually-hidden\">\u0423\u0441\u043B\u0443\u0433\u0438</h2>\n        <div class=\"services__slider slider page__wrapper\">\n          <div class=\"services__controls\">\n            <button type=\"button\" class=\"services__btn services__btn--delivery btn services__btn--active\" >\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</button>\n            <button type=\"button\" class=\"services__btn services__btn--warranty btn\">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F</button>\n            <button type=\"button\" class=\"services__btn services__btn--credit btn\">\u041A\u0440\u0435\u0434\u0438\u0442</button>\n          </div>\n\n          <ul class=\"services__list slider__list\">\n            <li class=\"services__item services__item--delivery\">\n              <h3 class=\"services__title\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</h3>\n              <p class=\"services__description\">\u041C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0432\u0430\u0448 \u0442\u043E\u0432\u0430\u0440 \u043F\u0440\u044F\u043C\u043E \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0443 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! \u0412\u0435\u0434\u044C \u043C\u044B \u043D\u0435\u043F\u043B\u043E\u0445\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C, \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044F \u0435\u0433\u043E \u043D\u0430 \u0432\u0430\u0448 \u044D\u0442\u0430\u0436.</p>\n            </li>\n            <li class=\"services__item services__item--warranty services__item--hidden \">\n              <h3 class=\"services__title\">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F</h3>\n              <p class=\"services__description\">\u0415\u0441\u043B\u0438 \u0438\u0437-\u0437\u0430 \u0432\u043E\u0437\u0433\u043E\u0440\u0430\u043D\u0438\u044F \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0443 \u043D\u0430\u0441 \u0442\u043E\u0432\u0430\u0440\u0430 \u0443 \u0432\u0430\u0441 \u0441\u0433\u043E\u0440\u0438\u0442 \u0434\u043E\u043C \u2014 \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u043C\u044B \u0432\u044B\u0434\u0430\u0434\u0438\u043C \u0432\u0430\u043C \u043D\u043E\u0432\u044B\u0439.<br> \u0422\u043E\u0432\u0430\u0440, \u043D\u0435 \u0434\u043E\u043C, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435.</p>\n            </li>\n            <li class=\"services__item services__item--credit services__item--hidden \">\n              <h3 class=\"services__title\">\u041A\u0440\u0435\u0434\u0438\u0442</h3>\n              <p class=\"services__description\">\u0417\u0430\u043B\u0435\u0437\u0442\u044C \u0432 \u0434\u043E\u043B\u0433\u043E\u0432\u0443\u044E \u044F\u043C\u0443 \u0441\u0442\u0430\u043B\u043E \u043F\u0440\u043E\u0449\u0435! \u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0443\u0442 \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u0430. \u0412\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0434\u043B\u044F \u043D\u0430\u0448\u0435\u0433\u043E \u0431\u0430\u043D\u043A\u0430, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F.</p>\n            </li>\n          </ul>\n        </div>\n      </section>\n\n      <section class=\"brands page__wrapper\">\n        <h2 class=\"visually-hidden\">\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438</h2>\n        <div class=\"brands__list-wrapper swiper-container\">\n          <ul class=\"brands__list swiper-wrapper\">\n            <li class=\"brands__item swiper-slide\">\n              <a class=\"brands__logo\" href=\"#\">\n                <img class=\"brands__logo-image\" src=\"img/logo-dji.png\" width=\"260\" height=\"100\" alt=\"DJI\">\n              </a>\n            </li>\n            <li class=\"brands__item swiper-slide\">\n              <a class=\"brands__logo\" href=\"#\">\n                <img class=\"brands__logo-image\" src=\"img/logo-sp-gadgets.png\" width=\"260\" height=\"100\" alt=\"SP Gadgets\">\n              </a>\n            </li>\n            <li class=\"brands__item swiper-slide\">\n              <a class=\"brands__logo\" href=\"#\">\n                <img class=\"brands__logo-image\" src=\"img/logo-go-pro.png\" width=\"260\" height=\"100\" alt=\"Go Pro\">\n              </a>\n            </li>\n            <li class=\"brands__item swiper-slide\">\n              <a class=\"brands__logo\" href=\"#\">\n                <img class=\"brands__logo-image\" src=\"img/logo-vive.png\" width=\"260\" height=\"100\" alt=\"Vive\">\n              </a>\n            </li>\n          </ul>\n          <div class=\"brands__scrollbar\"></div>\n        </div>\n      </section>\n\n      <div class=\"columns page__wrapper\">\n        <section class=\"about-us columns__item\">\n          <h2 class=\"columns__title\">\u041E \u043D\u0430\u0441</h2>\n          <p class=\"about-us__text\">\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0433\u0430\u0434\u0436\u0435\u0442\u043E\u0432 \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0440\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u043C \u0433\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439&nbsp;\u0435\u0441\u0442\u044C \u0432&nbsp;\u043A\u0430\u0436\u0434\u043E\u043C \u0438\u0437&nbsp;\u043D\u0430\u0441.</p>\n          <p class=\"about-us__text\">\u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0448 \u0442\u043E\u0432\u0430\u0440 \u0432 \u0441\u0430\u043C\u044B\u0435 \u043E\u0442\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u0420\u043E\u0441\u0441\u0438\u0438! DEVICE \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E \u043C\u043D\u043E\u0433\u0438\u043C\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438:</p>\n          <ul class=\"about-us__list\">\n            <li class=\"about-us__list-item\">\u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u041B\u0438\u043D\u0438\u0438</li>\n            <li class=\"about-us__list-item\">\u0410\u0432\u0442\u043E\u0442\u0440\u0435\u0439\u0434\u0438\u043D\u0433</li>\n            <li class=\"about-us__list-item\">\u0416\u0435\u043B\u0414\u043E\u0440\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044F</li>\n          </ul>\n<!--          <a class=\"btn\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043D\u0430\u0441</a>-->\n          <button type=\"button\" class=\"contacts__btn btn\">\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C</button>\n        </section>\n\n        <section class=\"contacts columns__item\">\n          <h2 class=\"columns__title\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h2>\n          <p class=\"contacts__text\">\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0441\u0430\u043C\u0438, \u0437\u0430\u0435\u0445\u0430\u0432 \u0432 \u043D\u0430\u0448 \u043E\u0444\u0438\u0441. \u0417\u0430\u043E\u0434\u043D\u043E, \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438. \u0412\u0441\u044F\u043A\u043E\u0435 \u0431\u044B\u0432\u0430\u0435\u0442.</p>\n          <div class=\"contacts__map\">\n            <iframe class=\"contacts__map-item\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4923898988923!2d30.521080765938255!3d50.45055502947539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c3%3A0xb528dc4d6dadc4f8!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LLQuNGB0LjQvNC-0YHRgtC4LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1577112111510!5m2!1sru!2sua\"></iframe>\n          </div>\n        </section>\n      </div>\n      \n        ";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sliders();
                services();
                contacts();
                aboutUs();
                commentForm();
                addToCart();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var moment = createCommonjsModule(function (module, exports) {

    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, function () {

      var hookCallback;

      function hooks() {
        return hookCallback.apply(null, arguments);
      } // This is done to register the method called with moment()
      // without creating circular dependencies.


      function setHookCallback(callback) {
        hookCallback = callback;
      }

      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;

          for (k in obj) {
            if (obj.hasOwnProperty(k)) {
              return false;
            }
          }

          return true;
        }
      }

      function isUndefined(input) {
        return input === void 0;
      }

      function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
      }

      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
      }

      function map(arr, fn) {
        var res = [],
            i;

        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }

        return res;
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
        }

        return a;
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }

        return m._pf;
      }

      var some;

      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function (fun) {
          var t = Object(this);
          var len = t.length >>> 0;

          for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }

          return false;
        };
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m);
          var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
          });
          var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }

        return m._isValid;
      }

      function createInvalid(flags) {
        var m = createUTC(NaN);

        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }

        return m;
      } // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.


      var momentProperties = hooks.momentProperties = [];

      function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }

        if (!isUndefined(from._i)) {
          to._i = from._i;
        }

        if (!isUndefined(from._f)) {
          to._f = from._f;
        }

        if (!isUndefined(from._l)) {
          to._l = from._l;
        }

        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }

        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }

        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }

        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }

        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }

        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];

            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }

        return to;
      }

      var updateInProgress = false; // Moment prototype object

      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);

        if (!this.isValid()) {
          this._d = new Date(NaN);
        } // Prevent infinite loop in case updateOffset creates new moment
        // objects.


        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }

      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }

        return value;
      } // compare two arrays, return the number of differences


      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;

        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }

        return diffs + lengthDiff;
      }

      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
          console.warn('Deprecation warning: ' + msg);
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }

          if (firstTime) {
            var args = [];
            var arg;

            for (var i = 0; i < arguments.length; i++) {
              arg = '';

              if (typeof arguments[i] === 'object') {
                arg += '\n[' + i + '] ';

                for (var key in arguments[0]) {
                  arg += key + ': ' + arguments[0][key] + ', ';
                }

                arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                arg = arguments[i];
              }

              args.push(arg);
            }

            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
            firstTime = false;
          }

          return fn.apply(this, arguments);
        }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }

        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      function set(config) {
        var prop, i;

        for (i in config) {
          prop = config[i];

          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this['_' + i] = prop;
          }
        }

        this._config = config; // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.

        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;

        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }

        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
          }
        }

        return res;
      }

      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }

      var keys;

      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function (obj) {
          var i,
              res = [];

          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }

          return res;
        };
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      };

      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      };

      function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
          return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
        });
        return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
        return this._invalidDate;
      }

      var defaultOrdinal = '%d';
      var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
        return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);

            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }

        return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [];

        for (var u in unitsObj) {
          units.push({
            unit: u,
            priority: priorities[u]
          });
        }

        units.sort(function (a, b) {
          return a.priority - b.priority;
        });
        return units;
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
      var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
      var formatFunctions = {};
      var formatTokenFunctions = {}; // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }

      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;

        if (typeof callback === 'string') {
          func = function () {
            return this[callback]();
          };
        }

        if (token) {
          formatTokenFunctions[token] = func;
        }

        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }

        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
        }

        return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }

        return function (mom) {
          var output = '',
              i;

          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }

          return output;
        };
      } // format date using native date object


      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;

        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }

        return format;
      }

      var match1 = /\d/; //       0 - 9

      var match2 = /\d\d/; //      00 - 99

      var match3 = /\d{3}/; //     000 - 999

      var match4 = /\d{4}/; //    0000 - 9999

      var match6 = /[+-]?\d{6}/; // -999999 - 999999

      var match1to2 = /\d\d?/; //       0 - 99

      var match3to4 = /\d\d\d\d?/; //     999 - 9999

      var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

      var match1to3 = /\d{1,3}/; //       0 - 999

      var match1to4 = /\d{1,4}/; //       0 - 9999

      var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

      var matchUnsigned = /\d+/; //       0 - inf

      var matchSigned = /[+-]?\d+/; //    -inf - inf

      var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

      var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

      var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
      // any word (or two) characters or numbers including two/three word month in arabic.
      // includes scottish gaelic two word and hyphenated months

      var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
      var regexes = {};

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
      } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


      function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
        var i,
            func = callback;

        if (typeof token === 'string') {
          token = [token];
        }

        if (isNumber(callback)) {
          func = function (input, array) {
            array[callback] = toInt(input);
          };
        }

        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        });
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }

      var YEAR = 0;
      var MONTH = 1;
      var DATE = 2;
      var HOUR = 3;
      var MINUTE = 4;
      var SECOND = 5;
      var MILLISECOND = 6;
      var WEEK = 7;
      var WEEKDAY = 8; // FORMATTING

      addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
      });
      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      });
      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

      addUnitAlias('year', 'y'); // PRIORITIES

      addUnitPriority('year', 1); // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);
      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
      }); // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }

      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      } // HOOKS


      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      }; // MOMENTS


      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
        return isLeapYear(this.year());
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }

      function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
        }
      } // MOMENTS


      function stringGet(units) {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units]();
        }

        return this;
      }

      function stringSet(units, value) {
        if (typeof units === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units);

          for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units](value);
          }
        }

        return this;
      }

      function mod(n, x) {
        return (n % x + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function (o) {
          // I know
          var i;

          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }

          return -1;
        };
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }

        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      } // FORMATTING


      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      });
      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
      });
      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
      }); // ALIASES

      addUnitAlias('month', 'M'); // PRIORITY

      addUnitPriority('month', 8); // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });
      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }); // LOCALES

      var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months['standalone'];
        }

        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
      }

      var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }

        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();

        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];

          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        } // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse


        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);

          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }

          if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      } // MOMENTS


      function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
          // No op
          return mom;
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

            if (!isNumber(value)) {
              return mom;
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

        return mom;
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, 'Month');
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }

      var defaultMonthsShortRegex = matchWord;

      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }

          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }

      var defaultMonthsRegex = matchWord;

      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }

          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;

        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
        } // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.


        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }

        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date; // the date constructor remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms);

          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
      }

      function createUTCDate(y) {
        var date; // the Date.UTC function remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));

          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
      } // start-of-first-week - start-of-year


      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }

        return {
          week: resWeek,
          year: resYear
        };
      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      } // FORMATTING


      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W'); // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5); // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);
      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }); // HELPERS
      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.

      };

      function localeFirstDayOfWeek() {
        return this._week.dow;
      }

      function localeFirstDayOfYear() {
        return this._week.doy;
      } // MOMENTS


      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      } // FORMATTING


      addFormatToken('d', 0, 'do', 'day');
      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
      });
      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
      });
      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
      });
      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E'); // PRIORITY

      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11); // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });
      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
      }); // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input;
        }

        if (!isNaN(input)) {
          return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);

        if (typeof input === 'number') {
          return input;
        }

        return null;
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
        }

        return isNaN(input) ? null : input;
      } // LOCALES


      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }

      var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }

      var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);

          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }

          if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      } // MOMENTS


      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        } // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.


        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }

      var defaultWeekdaysRegex = matchWord;

      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }

          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }

      var defaultWeekdaysShortRegex = matchWord;

      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }

          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }

      var defaultWeekdaysMinRegex = matchWord;

      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }

          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = this.weekdaysMin(mom, '');
          shortp = this.weekdaysShort(mom, '');
          longp = this.weekdays(mom, '');
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.


        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 7; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
      } // FORMATTING


      function hFormat() {
        return this.hours() % 12 || 12;
      }

      function kFormat() {
        return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);
      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false); // ALIASES

      addUnitAlias('hour', 'h'); // PRIORITY

      addUnitPriority('hour', 13); // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);
      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);
      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }); // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      } // MOMENTS
      // Setting the hour should keep the time, because the user explicitly
      // specified which hour they want. So trying to maintain the same hour (in
      // a new timezone) makes sense. Adding/subtracting hours does not follow
      // this rule.


      var getSetHour = makeGetSet('Hours', true);
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      }; // internal storage for locale config files

      var locales = {};
      var localeFamilies = {};
      var globalLocale;

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
      } // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


      function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;

          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));

            if (locale) {
              return locale;
            }

            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
            }

            j--;
          }

          i++;
        }

        return globalLocale;
      }

      function loadLocale(name) {
        var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

        if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = commonjsRequire;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {}
        }

        return locales[name];
      } // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.


      function getSetGlobalLocale(key, values) {
        var data;

        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              console.warn('Locale ' + key + ' not found. Did you forget to load it?');
            }
          }
        }

        return globalLocale._abbr;
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
              parentConfig = baseConfig;
          config.abbr = name;

          if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);

              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }

                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }

          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
            });
          } // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.


          getSetGlobalLocale(name);
          return locales[name];
        } else {
          // useful for testing
          delete locales[name];
          return null;
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
              tmpLocale,
              parentConfig = baseConfig; // MERGE

          tmpLocale = loadLocale(name);

          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }

          config = mergeConfigs(parentConfig, config);
          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale; // backwards compat for now: also set the locale

          getSetGlobalLocale(name);
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }

        return locales[name];
      } // returns locale data


      function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }

        if (!key) {
          return globalLocale;
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);

          if (locale) {
            return locale;
          }

          key = [key];
        }

        return chooseLocale(key);
      }

      function listLocales() {
        return keys(locales);
      }

      function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }

          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }

          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
        }

        return m;
      } // Pick the first defined of two or three arguments.


      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }

        if (b != null) {
          return b;
        }

        return c;
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());

        if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }

        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      } // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]


      function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
          return;
        }

        currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        } //if the day of the year is set, figure out what it is


        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        } // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything


        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        } // Zero out whatever was not defaulted, including time


        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        } // Check for 24:00:00.000


        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.

        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
          config._a[HOUR] = 24;
        } // check for mismatching day of week


        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
        w = config._w;

        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).

          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);

          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          var curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;

            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;

            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            // default to beginning of week
            weekday = dow;
          }
        }

        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      } // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
      var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
      var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
      var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

      var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
      var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

      function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }

          if (dateFormat == null) {
            config._isValid = false;
            return;
          }

          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
              }
            }

            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }

          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }

          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
            } else {
              config._isValid = false;
              return;
            }
          }

          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }

        return result;
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);

        if (year <= 49) {
          return 2000 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }

        return year;
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
              weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }

        return true;
      }

      var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
        } else {
          var hm = parseInt(numOffset, 10);
          var m = hm % 100,
              h = (hm - m) / 100;
          return h * 60 + m;
        }
      } // date and time from ref 2822 format


      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));

        if (match) {
          var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);

          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      } // date from iso format or fallback


      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }

        configFromISO(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        configFromRFC2822(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        } // Final attempt, use Input Fallback


        hooks.createFromInputFallback(config);
      }

      hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }); // constant that refers to the ISO standard

      hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


      hooks.RFC_2822 = function () {}; // date from string and format string


      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }

        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }

        config._a = [];
        getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
          //         'regex', getParseRegexForToken(token, config));

          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));

            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }

            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          } // don't parse if it's not a known token


          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }

            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        } // add remaining unparsed input length to the string


        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        } // clear _12h flag if hour is <= 12


        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
          // nothing to do
          return hour;
        }

        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);

          if (isPm && hour < 12) {
            hour += 12;
          }

          if (!isPm && hour === 12) {
            hour = 0;
          }

          return hour;
        } else {
          // this is not supposed to happen
          return hour;
        }
      } // date from string and array of format strings


      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);

          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }

          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (!isValid(tempConfig)) {
            continue;
          } // if there is any input that was not parsed add a penalty for that format


          currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }

        extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
        if (config._d) {
          return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray(config);
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));

        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
        }

        return res;
      }

      function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
          return createInvalid({
            nullInput: true
          });
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }

        if (!isValid(config)) {
          config._d = null;
        }

        return config;
      }

      function configFromInput(config) {
        var input = config._i;

        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        } // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423


        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      });
      var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }); // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.

      function pickBy(fn, moments) {
        var res, i;

        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }

        if (!moments.length) {
          return createLocal();
        }

        res = moments[0];

        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }

        return res;
      } // TODO: Use [].sort instead?


      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
      }

      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
      }

      var now = function () {
        return Date.now ? Date.now() : +new Date();
      };

      var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

      function isDurationValid(m) {
        for (var key in m) {
          if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }

        var unitHasDecimal = false;

        for (var i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false; // only allow non-integers for smallest unit
            }

            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }

        return true;
      }

      function isValid$1() {
        return this._isValid;
      }

      function createInvalid$1() {
        return createDuration(NaN);
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately

        this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.

        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();

        this._bubble();
      }

      function isDuration(obj) {
        return obj instanceof Duration;
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      } // FORMATTING


      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset();
          var sign = '+';

          if (offset < 0) {
            offset = -offset;
            sign = '-';
          }

          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
      }

      offset('Z', ':');
      offset('ZZ', ''); // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }); // HELPERS
      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']

      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
          return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      } // Return a moment from input, that is local/utc/zone equivalent to model.


      function cloneWithOffset(input, model) {
        var res, diff;

        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

          res._d.setTime(res._d.valueOf() + diff);

          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
      } // HOOKS
      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.


      hooks.updateOffset = function () {}; // MOMENTS
      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.


      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;

        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);

            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }

          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }

          this._offset = input;
          this._isUTC = true;

          if (localAdjust != null) {
            this.add(localAdjust, 'm');
          }

          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }

          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input;
          }

          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
          }
        }

        return this;
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);

          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }

        return this;
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }

        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }

        var c = {};
        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
          var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }

        return this._isDSTShifted;
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      } // ASP.NET json date format regex


      var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      // and further modified to allow for strings containing both week and day

      var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input)) {
          duration = {};

          if (key) {
            duration[key] = input;
          } else {
            duration.milliseconds = input;
          }
        } else if (!!(match = aspNetRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

          };
        } else if (!!(match = isoRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          // checks for null or undefined
          duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
        }

        return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

        return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
      }

      function momentsDifference(base, other) {
        var res;

        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }

        other = cloneWithOffset(other, base);

        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }

        return res;
      } // TODO: remove 'name' arg after deprecation is removed


      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp; //invert the arguments, but complain about it

          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;
            val = period;
            period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
          // No op
          return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
        }

        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }

        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }

        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }

      var add = createAdder(1, 'add');
      var subtract = createAdder(-1, 'subtract');

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      }

      function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }

      function clone() {
        return new Moment(this);
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);

        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }

        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
          return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
          return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12;
            break;

          case 'month':
            output = monthDiff(this, that);
            break;

          case 'quarter':
            output = monthDiff(this, that) / 3;
            break;

          case 'second':
            output = (this - that) / 1e3;
            break;
          // 1000

          case 'minute':
            output = (this - that) / 6e4;
            break;
          // 1000 * 60

          case 'hour':
            output = (this - that) / 36e5;
            break;
          // 1000 * 60 * 60

          case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst

          case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst

          default:
            output = this - that;
        }

        return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor2 - anchor);
        } //check for negative zero, return zero if negative zero


        return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }

        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;

        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }

        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
        }

        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }
      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */


      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
        }

        var func = 'moment';
        var zone = '';

        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
        }

        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }

        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      } // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.


      function locale(key) {
        var newLocaleData;

        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);

          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }

          return this;
        }
      }

      var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });

      function localeData() {
        return this._locale;
      }

      var MS_PER_SECOND = 1000;
      var MS_PER_MINUTE = 60 * MS_PER_SECOND;
      var MS_PER_HOUR = 60 * MS_PER_MINUTE;
      var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }

      function startOf(units) {
        var time;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;

          case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;

          case 'hour':
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;

          case 'minute':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;

          case 'second':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function endOf(units) {
        var time;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;

          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;

          case 'hour':
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;

          case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;

          case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
        return new Date(this.valueOf());
      }

      function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
      }

      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
        return isValid(this);
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
        return getParsingFlags(this).overflow;
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      } // FORMATTING


      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1); // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);
      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      });
      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }); // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;

        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);

          if (week > weeksTarget) {
            week = weeksTarget;
          }

          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      } // FORMATTING


      addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

      addUnitAlias('quarter', 'Q'); // PRIORITY

      addUnitPriority('quarter', 7); // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }); // MOMENTS

      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      } // FORMATTING


      addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

      addUnitAlias('date', 'D'); // PRIORITY

      addUnitPriority('date', 9); // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }); // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

      addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

      addUnitPriority('dayOfYear', 4); // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
      }); // HELPERS
      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      } // FORMATTING


      addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

      addUnitAlias('minute', 'm'); // PRIORITY

      addUnitPriority('minute', 14); // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE); // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

      addUnitAlias('second', 's'); // PRIORITY

      addUnitPriority('second', 15); // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND); // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
      }); // ALIASES

      addUnitAlias('millisecond', 'ms'); // PRIORITY

      addUnitPriority('millisecond', 16); // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);
      var token;

      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      } // MOMENTS


      var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
      proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
      proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
      proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
      proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

      function createUnix(input) {
        return createLocal(input * 1000);
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
        return string;
      }

      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';

        if (index != null) {
          return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];

        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
        }

        return out;
      } // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)


      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];

        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }

        return out;
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
          var b = number % 10,
              output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      }); // Side effect imports

      hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
      hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
      var mathAbs = Math.abs;

      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      } // supports only 2.0-style add(1, 's') or add(duration)


      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      } // supports only 2.0-style subtract(1, 's') or subtract(duration)


      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166

        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        } // The following code bubbles up values, see the tests for
        // examples of what that means.


        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24); // convert days to months

        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }

        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);

          switch (units) {
            case 'month':
              return months;

            case 'quarter':
              return months / 3;

            case 'year':
              return months / 12;
          }
        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));

          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;

            case 'day':
              return days + milliseconds / 864e5;

            case 'hour':
              return days * 24 + milliseconds / 36e5;

            case 'minute':
              return days * 1440 + milliseconds / 6e4;

            case 'second':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here

            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds;

            default:
              throw new Error('Unknown unit ' + units);
          }
        }
      } // TODO: Use this.as('ms')?


      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }

        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias);
        };
      }

      var asMilliseconds = makeAs('ms');
      var asSeconds = makeAs('s');
      var asMinutes = makeAs('m');
      var asHours = makeAs('h');
      var asDays = makeAs('d');
      var asWeeks = makeAs('w');
      var asMonths = makeAs('M');
      var asQuarters = makeAs('Q');
      var asYears = makeAs('y');

      function clone$1() {
        return createDuration(this);
      }

      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN;
        };
      }

      var milliseconds = makeGetter('milliseconds');
      var seconds = makeGetter('seconds');
      var minutes = makeGetter('minutes');
      var hours = makeGetter('hours');
      var days = makeGetter('days');
      var months = makeGetter('months');
      var years = makeGetter('years');

      function weeks() {
        return absFloor(this.days() / 7);
      }

      var round = Math.round;
      var thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11 // months to year

      }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));
        var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      } // This function allows you to set the rounding function for relative time strings


      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }

        if (typeof roundingFunction === 'function') {
          round = roundingFunction;
          return true;
        }

        return false;
      } // This function allows you to set a threshold for relative time strings


      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }

        if (limit === undefined) {
          return thresholds[threshold];
        }

        thresholds[threshold] = limit;

        if (threshold === 's') {
          thresholds.ss = limit - 1;
        }

        return true;
      }

      function humanize(withSuffix) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60; // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
      }

      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
      proto$2.lang = lang; // Side effect imports
      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf'); // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
      });
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
      }); // Side effect imports

      hooks.version = '2.24.0';
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',
        // <input type="date" />
        TIME: 'HH:mm',
        // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',
        // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',
        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',
        // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />

      };
      return hooks;
    });
  });

  var ru = createCommonjsModule(function (module, exports) {

    (function (global, factory) {
       typeof commonjsRequire === 'function' ? factory(moment) :  factory(global.moment);
    })(commonjsGlobal, function (moment) {

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          'hh': 'час_часа_часов',
          'dd': 'день_дня_дней',
          'MM': 'месяц_месяца_месяцев',
          'yy': 'год_года_лет'
        };

        if (key === 'm') {
          return withoutSuffix ? 'минута' : 'минуту';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; // http://new.gramota.ru/spravka/rules/139-prop : § 103
      // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
      // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753

      var ru = moment.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
          // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., H:mm',
          LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
          sameDay: '[Сегодня, в] LT',
          nextDay: '[Завтра, в] LT',
          lastDay: '[Вчера, в] LT',
          nextWeek: function (now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В следующее] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В следующий] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В следующую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          lastWeek: function (now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          ss: relativeTimeWithPlural,
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: 'час',
          hh: relativeTimeWithPlural,
          d: 'день',
          dd: relativeTimeWithPlural,
          M: 'месяц',
          MM: relativeTimeWithPlural,
          y: 'год',
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (input) {
          return /^(дня|вечера)$/.test(input);
        },
        meridiem: function (hour, minute, isLower) {
          if (hour < 4) {
            return 'ночи';
          } else if (hour < 12) {
            return 'утра';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечера';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
              return number + '-й';

            case 'D':
              return number + '-го';

            case 'w':
            case 'W':
              return number + '-я';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ru;
    });
  });

  var renderComments = function renderComments(data, container) {
    container.innerHTML = '';
    data.forEach(function (comment) {
      moment.locale('ru');
      var commentTimePublication = moment.unix(comment.time).format('LL');
      var commentContent = "\n          <div class=\"reviews__heading\">\n            <b class=\"reviews__author\">".concat(comment.author, "</b>\n            <p class=\"reviews__publication\">\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E <span class=\"reviews__time\">").concat(commentTimePublication, "</span></p>\n          </div>\n          <div class=\"review__content\">\n              <blockquote>").concat(comment.text, "</blockquote>\n          </div>");
      var newComment = document.createElement("li");
      newComment.setAttribute('class', "reviews__item");
      newComment.innerHTML = commentContent;
      container.appendChild(newComment);
    });
  };

  var productSlider = (function () {
    var productLargeSlider = document.querySelector('.product__gallery');
    var productSmallSlider = document.querySelector(".product__gallery-small");

    if (productLargeSlider) {
      var galleryThumbs = new swiper(productSmallSlider, {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      var galleryTop = new swiper(productLargeSlider, {
        slidesPerView: 1,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    }
  });

  var renderImages = function renderImages(data, container, imgSize) {
    container.innerHTML = '';
    data.forEach(function (slideImage) {
      var slideImgContent = "<img src=\"".concat(slideImage, "\" width=\"").concat(imgSize, "\" height=\"").concat(imgSize, "\">");
      var newImgElement = document.createElement("li");
      newImgElement.setAttribute('class', "product__slide swiper-slide");
      newImgElement.innerHTML = slideImgContent;
      container.appendChild(newImgElement);
    });
  }; //};

  var raterJs = createCommonjsModule(function (module, exports) {
    (function (f) {
      {
        module.exports = f();
      }
    })(function () {
      return function () {
        function r(e, n, t) {
          function o(i, f) {
            if (!n[i]) {
              if (!e[i]) {
                var c = "function" == typeof commonjsRequire && commonjsRequire;
                if (!f && c) return c(i, !0);
                if (u) return u(i, !0);
                var a = new Error("Cannot find module '" + i + "'");
                throw a.code = "MODULE_NOT_FOUND", a;
              }

              var p = n[i] = {
                exports: {}
              };
              e[i][0].call(p.exports, function (r) {
                var n = e[i][1][r];
                return o(n || r);
              }, p, p.exports, r, e, n, t);
            }

            return n[i].exports;
          }

          for (var u = "function" == typeof commonjsRequire && commonjsRequire, i = 0; i < t.length; i++) o(t[i]);

          return o;
        }

        return r;
      }()({
        1: [function (require, module, exports) {
          /*! rater-js. [c] 2018 Fredrik Olsson. MIT License */

          var css = require('./style.css');

          module.exports = function (options) {
            //private fields
            var showToolTip = true;

            if (typeof options.element === "undefined" || options.element === null) {
              throw new Error("element required");
            }

            if (typeof options.showToolTip !== "undefined") {
              showToolTip = !!options.showToolTip;
            }

            if (typeof options.step !== "undefined") {
              if (options.step <= 0 || options.step > 1) {
                throw new Error("step must be a number between 0 and 1");
              }
            }

            var elem = options.element;
            var reverse = options.reverse;
            var stars = options.max || 5;
            var starSize = options.starSize || 16;
            var step = options.step || 1;
            var onHover = options.onHover;
            var onLeave = options.onLeave;
            var rating = null;
            var myRating;
            elem.classList.add("star-rating");
            var div = document.createElement("div");
            div.classList.add("star-value");

            if (reverse) {
              div.classList.add("rtl");
            }

            div.style.backgroundSize = starSize + "px";
            elem.appendChild(div);
            elem.style.width = starSize * stars + "px";
            elem.style.height = starSize + "px";
            elem.style.backgroundSize = starSize + "px";
            var callback = options.rateCallback;
            var disabled = !!options.readOnly;
            var disableText;
            var isRating = false;
            var isBusyText = options.isBusyText;
            var currentRating;
            var ratingText;

            if (typeof options.disableText !== "undefined") {
              disableText = options.disableText;
            } else {
              disableText = "{rating}/{maxRating}";
            }

            if (typeof options.ratingText !== "undefined") {
              ratingText = options.ratingText;
            } else {
              ratingText = "{rating}/{maxRating}";
            }

            if (options.rating) {
              setRating(options.rating);
            } else {
              var dataRating = elem.dataset.rating;

              if (dataRating) {
                setRating(+dataRating);
              }
            }

            if (!rating) {
              elem.querySelector(".star-value").style.width = "0px";
            }

            if (disabled) {
              disable();
            } //private methods


            function onMouseMove(e) {
              onMove(e, false);
            }
            /**
             * Called by eventhandlers when mouse or touch events are triggered
             * @param {MouseEvent} e
             */


            function onMove(e, isTouch) {
              if (disabled === true || isRating === true) {
                return;
              }

              var xCoor = null;
              var percent;
              var width = elem.offsetWidth;
              var parentOffset = elem.getBoundingClientRect();

              if (reverse) {
                if (isTouch) {
                  xCoor = e.changedTouches[0].pageX - parentOffset.left;
                } else {
                  xCoor = e.pageX - window.scrollX - parentOffset.left;
                }

                var relXRtl = width - xCoor;
                var valueForDivision = width / 100;
                percent = relXRtl / valueForDivision;
              } else {
                if (isTouch) {
                  xCoor = e.changedTouches[0].pageX - parentOffset.left;
                } else {
                  xCoor = e.offsetX;
                }

                percent = xCoor / width * 100;
              }

              if (percent < 101) {
                if (step === 1) {
                  currentRating = Math.ceil(percent / 100 * stars);
                } else {
                  var rat = percent / 100 * stars;

                  for (var i = 0;; i += step) {
                    if (i >= rat) {
                      currentRating = i;
                      break;
                    }
                  }
                } //todo: check why this happens and fix


                if (currentRating > stars) {
                  currentRating = stars;
                }

                elem.querySelector(".star-value").style.width = currentRating / stars * 100 + "%";

                if (showToolTip) {
                  var toolTip = ratingText.replace("{rating}", currentRating);
                  toolTip = toolTip.replace("{maxRating}", stars);
                  elem.setAttribute("title", toolTip);
                }

                if (typeof onHover === "function") {
                  onHover(currentRating, rating);
                }
              }
            }
            /**
             * Called when mouse is released. This function will update the view with the rating.
             * @param {MouseEvent} e
             */


            function onStarOut(e) {
              if (!rating) {
                elem.querySelector(".star-value").style.width = "0%";
                elem.removeAttribute("data-rating");
              } else {
                elem.querySelector(".star-value").style.width = rating / stars * 100 + "%";
                elem.setAttribute("data-rating", rating);
              }

              if (typeof onLeave === "function") {
                onLeave(currentRating, rating);
              }
            }
            /**
             * Called when star is clicked.
             * @param {MouseEvent} e
             */


            function onStarClick(e) {
              if (disabled === true) {
                return;
              }

              if (isRating === true) {
                return;
              }

              if (typeof callback !== "undefined") {
                isRating = true;
                myRating = currentRating;

                if (typeof isBusyText === "undefined") {
                  elem.removeAttribute("title");
                } else {
                  elem.setAttribute("title", isBusyText);
                }

                elem.classList.add("is-busy");
                callback.call(this, myRating, function () {
                  if (disabled === false) {
                    elem.removeAttribute("title");
                  }

                  isRating = false;
                  elem.classList.remove("is-busy");
                });
              }
            }
            /**
             * Disables the rater so that it's not possible to click the stars.
             */


            function disable() {
              disabled = true;
              elem.classList.add("disabled");

              if (showToolTip && !!disableText) {
                var toolTip = disableText.replace("{rating}", !!rating ? rating : 0);
                toolTip = toolTip.replace("{maxRating}", stars);
                elem.setAttribute("title", toolTip);
              } else {
                elem.removeAttribute("title");
              }
            }
            /**
             * Enabled the rater so that it's possible to click the stars.
             */


            function enable() {
              disabled = false;
              elem.removeAttribute("title");
              elem.classList.remove("disabled");
            }
            /**
             * Sets the rating
             */


            function setRating(value) {
              if (typeof value === "undefined") {
                throw new Error("Value not set.");
              }

              if (value === null) {
                throw new Error("Value cannot be null.");
              }

              if (typeof value !== "number") {
                throw new Error("Value must be a number.");
              }

              if (value < 0 || value > stars) {
                throw new Error("Value too high. Please set a rating of " + stars + " or below.");
              }

              rating = value;
              elem.querySelector(".star-value").style.width = value / stars * 100 + "%";
              elem.setAttribute("data-rating", value);
            }
            /**
             * Gets the rating
             */


            function getRating() {
              return rating;
            }
            /**
             * Set the rating to a value to inducate it's not rated.
             */


            function clear() {
              rating = null;
              elem.querySelector(".star-value").style.width = "0px";
              elem.removeAttribute("title");
            }
            /**
             * Remove event handlers.
             */


            function dispose() {
              elem.removeEventListener("mousemove", onMouseMove);
              elem.removeEventListener("mouseleave", onStarOut);
              elem.removeEventListener("click", onStarClick);
              elem.removeEventListener("touchmove", handleMove, false);
              elem.removeEventListener("touchstart", handleStart, false);
              elem.removeEventListener("touchend", handleEnd, false);
              elem.removeEventListener("touchcancel", handleCancel, false);
            }

            elem.addEventListener("mousemove", onMouseMove);
            elem.addEventListener("mouseleave", onStarOut);
            var module = {
              setRating: setRating,
              getRating: getRating,
              disable: disable,
              enable: enable,
              clear: clear,
              dispose: dispose,

              get element() {
                return elem;
              }

            };
            /**
            * Handles touchmove event.
            * @param {TouchEvent} e
            */

            function handleMove(e) {
              e.preventDefault();
              onMove(e, true);
            }
            /**
             * Handles touchstart event.
             * @param {TouchEvent} e 
             */


            function handleStart(e) {
              e.preventDefault();
              onMove(e, true);
            }
            /**
             * Handles touchend event.
             * @param {TouchEvent} e 
             */


            function handleEnd(evt) {
              evt.preventDefault();
              onMove(evt, true);
              onStarClick.call(module);
            }
            /**
             * Handles touchend event.
             * @param {TouchEvent} e 
             */


            function handleCancel(e) {
              e.preventDefault();
              onStarOut();
            }

            elem.addEventListener("click", onStarClick.bind(module));
            elem.addEventListener("touchmove", handleMove, false);
            elem.addEventListener("touchstart", handleStart, false);
            elem.addEventListener("touchend", handleEnd, false);
            elem.addEventListener("touchcancel", handleCancel, false);
            return module;
          };
        }, {
          "./style.css": 2
        }],
        2: [function (require, module, exports) {
          var css = ".star-rating {\n  width: 0;\n  position: relative;\n  display: inline-block;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDguOSIgaGVpZ2h0PSIxMDMuNiIgdmlld0JveD0iMCAwIDEwOC45IDEwMy42Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UzZTZlNjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0YXJfMDwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTA4LjkgMzkuNiA3MS4zIDM0LjEgNTQuNCAwIDM3LjYgMzQuMSAwIDM5LjYgMjcuMiA2Ni4xIDIwLjggMTAzLjYgNTQuNCA4NS45IDg4LjEgMTAzLjYgODEuNyA2Ni4xIDEwOC45IDM5LjYiLz48L2c+PC9nPjwvc3ZnPg0K);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  cursor: pointer;\n}\n.star-rating .star-value {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: url('data:image/svg+xml;base64,PHN2Zw0KCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwOC45IiBoZWlnaHQ9IjEwMy42IiB2aWV3Qm94PSIwIDAgMTA4LjkgMTAzLjYiPg0KCTxkZWZzPg0KCQk8c3R5bGU+LmNscy0xe2ZpbGw6I2YxYzk0Nzt9PC9zdHlsZT4NCgk8L2RlZnM+DQoJPHRpdGxlPnN0YXIxPC90aXRsZT4NCgk8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4NCgkJPGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj4NCgkJCTxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1NC40IDAgNzEuMyAzNC4xIDEwOC45IDM5LjYgODEuNyA2Ni4xIDg4LjEgMTAzLjYgNTQuNCA4NS45IDIwLjggMTAzLjYgMjcuMiA2Ni4xIDAgMzkuNiAzNy42IDM0LjEgNTQuNCAwIi8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4NCg==');\n  background-repeat: repeat-x;\n}\n.star-rating.disabled {\n  cursor: default;\n}\n.star-rating.is-busy {\n  cursor: wait;\n}\n.star-rating .star-value.rtl {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n  right: 0;\n  left: auto;\n}\n";

          require("browserify-css").createStyle(css, {
            "href": "lib\\style.css"
          }, {
            "insertAt": "bottom"
          });

          module.exports = css;
        }, {
          "browserify-css": 3
        }],
        3: [function (require, module, exports) {

          var styleElementsInsertedAtTop = [];

          var insertStyleElement = function (styleElement, options) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
            options = options || {};
            options.insertAt = options.insertAt || 'bottom';

            if (options.insertAt === 'top') {
              if (!lastStyleElementInsertedAtTop) {
                head.insertBefore(styleElement, head.firstChild);
              } else if (lastStyleElementInsertedAtTop.nextSibling) {
                head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
              } else {
                head.appendChild(styleElement);
              }

              styleElementsInsertedAtTop.push(styleElement);
            } else if (options.insertAt === 'bottom') {
              head.appendChild(styleElement);
            } else {
              throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
            }
          };

          module.exports = {
            // Create a <link> tag with optional data attributes
            createLink: function (href, attributes) {
              var head = document.head || document.getElementsByTagName('head')[0];
              var link = document.createElement('link');
              link.href = href;
              link.rel = 'stylesheet';

              for (var key in attributes) {
                if (!attributes.hasOwnProperty(key)) {
                  continue;
                }

                var value = attributes[key];
                link.setAttribute('data-' + key, value);
              }

              head.appendChild(link);
            },
            // Create a <style> tag with optional data attributes
            createStyle: function (cssText, attributes, extraOptions) {
              extraOptions = extraOptions || {};
              var style = document.createElement('style');
              style.type = 'text/css';

              for (var key in attributes) {
                if (!attributes.hasOwnProperty(key)) {
                  continue;
                }

                var value = attributes[key];
                style.setAttribute('data-' + key, value);
              }

              if (style.sheet) {
                // for jsdom and IE9+
                style.innerHTML = cssText;
                style.sheet.cssText = cssText;
                insertStyleElement(style, {
                  insertAt: extraOptions.insertAt
                });
              } else if (style.styleSheet) {
                // for IE8 and below
                insertStyleElement(style, {
                  insertAt: extraOptions.insertAt
                });
                style.styleSheet.cssText = cssText;
              } else {
                // for Chrome, Firefox, and Safari
                style.appendChild(document.createTextNode(cssText));
                insertStyleElement(style, {
                  insertAt: extraOptions.insertAt
                });
              }
            }
          };
        }, {}]
      }, {}, [1])(1);
    });
  });

  var card;

  var getPost =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(id) {
      var options, response, json, element;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              _context.prev = 1;
              _context.next = 4;
              return fetch('./data/products.json', options);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              json = _context.sent;
              element = json.find(function (el) {
                return el.id === id;
              });
              return _context.abrupt("return", element);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log('Error getting documents', _context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getPost(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var cardPage = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var request;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request = urlUtils.parseRequestURL();
                _context2.next = 3;
                return getPost(request.id);

              case 3:
                card = _context2.sent;
                return _context2.abrupt("return", "\n      <div class=\"product-card-wrapper\">\n       <ul class=\"page__breadcrumbs breadcrumbs product-card__breadcrumbs\">\n          <li class=\"breadcrumbs__item\"><a class=\"breadcrumbs__link\"  href=\"/#/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li>\n          <li class=\"breadcrumbs__item\"><a class=\"breadcrumbs__link\" href=\"/#/catalog\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</a></li>\n          <li class=\"breadcrumbs__item\">".concat(card.name, "</li>\n       </ul>\n\n       <div class=\"product-wrapper\">\n          <div class=\"product__gallery-container\">\n              <div class=\"product__gallery gallery-top swiper-container\">\n                 <ul class=\"product__slider swiper-wrapper\">\n                 </ul>\n              </div>\n              <div class=\"product__gallery-small swiper-container gallery-thumbs\">\n                 <ul class=\"product__slider-small swiper-wrapper\">\n                  </ul>\n              </div>\n          </div>\n          <div class=\"product__info\">\n            <div class=\"product__heading\">\n              <h1 class=\"product__title\">").concat(card.name, "</h1>\n              <p class=\"product__art\">\u0410\u0440\u0442\u0438\u043A\u0443\u043B: <span id=\"product-article\">").concat(card.art, "</span></p>\n              <div class=\"product__rating\" id=\"rater\">\n              </div>\n            </div>\n\n            <div class=\"product__about\">\n              <div class=\"product__price-wrapper inner-order-content\">\n                 <p class=\"product__price price-title\">\u0426\u0435\u043D\u0430: <span id=\"productPrice\">").concat(card.price, "</span><span class=\"product__currency\"> \u0433\u0440\u043D</span> </p>\n              </div>\n              <button class=\"product__btn-buy main-buy-btn btn addToCartBtn\">\uD83D\uDED2\u041A\u0443\u043F\u0438\u0442\u044C</button>\n            </div>\n            <div class=\"product__brns\">\n               <button class=\"product__brn product__brn--description btn\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</button>\n               <button class=\"product__brn product__brn--review btn\">\u041E\u0442\u0437\u044B\u0432\u044B</button>\n            </div>\n            <div class=\"product__review-wrapper\">\n              <a class=\"product__review\" id=\"feedback\">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432</a>\n            </div>\n          </div>\n          <div class=\"product__description\">\n             <h2 class=\"product__description-title\">\u0420\u0430\u0441\u0448\u0438\u0440\u044F\u044E\u0449\u0438\u0439\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0434\u0430\u0440</h2>\n             <p class=\"product__description-text\">\n                \u041F\u0440\u0438\u0437\u043C\u0430 \u044D\u043A\u0441\u043F\u0435\u0440\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u043C\u0430. \u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u043C \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u043E\u0435\n                 \u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0433\u0435\u0440\u0435\u043D\u0442\u043D\u043E.\n                 \u0412\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u0432\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430 \u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E. \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u044B \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442, \u0430\n                 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0442, \u0447\u0442\u043E \u0433\u043E\u043C\u043E\u0433\u0435\u043D\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0439 \u0444\u043E\u0442\u043E\u043D.\n             </p>\n             <p class=\"product__description-text\">\n                \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430 \u0441\u0436\u0438\u043C\u0430\u0435\u0442 \u0444\u043E\u0442\u043E\u043D.\n                \u041A\u0430\u043A \u043B\u0435\u0433\u043A\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043E\u0431\u0449\u0438\u0445 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u043D\u043E \u0438\u0441\u043A\u0430\u0436\u0430\u0435\u0442 \u0432\u0437\u0440\u044B\n                \u0412\u043E\u0437\u043C\u0443\u0449\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438, \u043A\u0430\u043A \u0442\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0437\u0430\u043A\u043E\u043D\u044B \u0442\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438, \u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442 \u0444\u043E\u0442\u043E\u043D. \u041C\u0438\u0448\u0435\u043D\u044C, \u0432 \u0440\u0430\u043C\u043A\u0430\u0445\n                \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0438, \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u0442\u043E\u043A \u043F\u0440\u0438\n                \u043B\u044E\u0431\u043E\u043C \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0441\u0440\u0435\u0434\u044B \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.\n             </p>\n          </div>\n          <div class=\"products__reviews reviews\">\n             <ul class=\"reviews__list\">\n\n            </ul>\n          </div>\n      </div>\n    </div>\n        "));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var cardsInJSON, response, json, cardElement, productRatingCount, productRating, product, productDescriptionBtn, productDescription, commentsList, mainImages, smallImages, reviewBtn, reviewFormPopup, reviewForm, reviewPopupOpenBtn, reviewFormSubmitBtn, reviewFormName, reviewFormText, reviewFormCloseBtn, showReviewFormPopup, addNewComment, formValidate;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch('./data/products.json');

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                json = _context3.sent;

                if (localStorage.getItem('cards')) {
                  cardsInJSON = localStorage.getItem('cards');
                  json = JSON.parse(cardsInJSON);
                } else {
                  cardsInJSON = JSON.stringify(json);
                  localStorage.setItem('cards', cardsInJSON);
                }

                json = JSON.parse(cardsInJSON);
                cardElement = json.find(function (el) {
                  return el.id === card.id;
                });
                productRatingCount = parseInt(cardElement.rating);
                productRating = raterJs({
                  element: document.querySelector("#rater"),
                  showToolTip: true,
                  max: 5,
                  starSize: 25,
                  disableText: 'Thank you for your vote!',
                  ratingText: '{rating}/{maxRating}',
                  isBusyText: null,
                  step: 0.1,
                  reverse: false,
                  readOnly: true,
                  rating: productRatingCount,
                  rateCallback: function rateCallback(rating, done) {
                    productRating.setRating(rating);
                    productRating.disable();
                    done();
                  }
                });
                product = document.querySelector(".product-card-wrapper");
                productDescriptionBtn = product.querySelector(".product__brn--description");
                productDescription = product.querySelector(".product__description");
                commentsList = document.querySelector(".reviews__list");
                mainImages = document.querySelector(".product__slider");
                smallImages = document.querySelector(".product__slider-small");
                reviewBtn = document.querySelector(".product__brn--review");
                renderImages(cardElement.imgLarge, mainImages, 600);
                renderImages(cardElement.imgSmall, smallImages, 100); //productRating.enable();
                // console.log(cardElement.rating);
                //productRating.setRating(cardElement.rating);

                productDescriptionBtn.addEventListener("click", function () {
                  toggleShowClass(productDescription);
                });
                productSlider();
                renderComments(cardElement.comments, commentsList);
                reviewFormPopup = document.querySelector(".review-modal");

                if (reviewFormPopup) {
                  reviewForm = reviewFormPopup.querySelector(".review-modal__form");
                  reviewPopupOpenBtn = document.querySelector(".product__review");
                  reviewFormSubmitBtn = reviewForm.querySelector(".review-modal__btn");
                  reviewFormName = reviewForm.elements.reviewName;
                  reviewFormText = reviewForm.elements.reviewMessage;
                  reviewFormCloseBtn = reviewFormPopup.querySelector(".modal__close");

                  showReviewFormPopup = function showReviewFormPopup() {
                    reviewFormPopup.classList.add(showClass);
                    disableBodyScroll(reviewFormPopup);
                    reviewForm.reset();
                    reviewFormName.focus();
                    reviewFormCloseBtn.addEventListener("click", function (evt) {
                      evt.preventDefault();
                      enableBodyScroll(reviewFormPopup);
                      reviewFormPopup.classList.remove(showClass);
                      reviewFormPopup.classList.remove(errorClass);
                    });
                  };

                  addNewComment = function addNewComment() {
                    var newComment = {};
                    newComment.author = reviewFormName.value;
                    newComment.time = moment().unix();
                    newComment.text = reviewFormText.value;
                    cardElement.comments.push(newComment);
                  };

                  reviewFormSubmitBtn.addEventListener("click", function () {
                    if (formValidate(reviewForm)) {
                      enableBodyScroll(reviewFormPopup);
                      reviewFormPopup.classList.remove(showClass);
                      addNewComment();
                      json.forEach(function (element, index) {
                        if (element.id === cardElement.id) {
                          json[index] = cardElement;
                        }
                      });

                      var _cardsInJSON = JSON.stringify(json);

                      localStorage.setItem('cards', _cardsInJSON);
                      renderComments(cardElement.comments, commentsList);
                      showSuccessMassage('Спасибо!', 'Ваш отзыв успешно отправлен!');
                      reviewFormPopup.classList.remove(errorClass);
                    } else {
                      if (reviewFormPopup.classList.contains(errorClass)) {
                        reviewFormPopup.classList.remove(errorClass);
                        void reviewFormPopup.offsetWidth;
                        reviewFormPopup.classList.add(errorClass);
                      }
                    }
                  });

                  formValidate = function formValidate(form) {
                    var valid = true;
                    var formName = form.elements.reviewName;
                    var formMessage = form.elements.reviewMessage;
                    reviewFormPopup.classList.remove(errorClass);
                    var nameValidate = /^[a-zA-Z-Яа-я0-9_]{3,}[a-zA-Z-Яа-я]+[0-9]*$/;

                    if (!formName.value.match(nameValidate)) {
                      reviewFormPopup.classList.add(errorClass);
                      valid = false;
                    }

                    if (!formMessage.value) {
                      reviewFormPopup.classList.add(errorClass);
                      valid = false;
                    }

                    return valid;
                  };

                  reviewPopupOpenBtn.addEventListener("click", function (evt) {
                    evt.preventDefault();
                    showReviewFormPopup();
                  });
                }

                reviewBtn.addEventListener("click", function () {
                  scrollToElement(commentsList, {
                    offset: 0,
                    ease: 'out-expo',
                    duration: 1500
                  });
                });
                console.log(card);
                addToCart();

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var products = (function () {
    var productList = document.querySelector('.catalog__list');

    var requestData =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var products, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("./data/products.json");

              case 2:
                products = _context.sent;

                if (products.ok) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Can not fetch ".concat(products.url));

              case 5:
                _context.next = 7;
                return products.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function requestData() {
        return _ref.apply(this, arguments);
      };
    }();

    var showData =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestData().then(function (response) {
                  createCards(response);
                  addToCart();
                })["catch"](function (error) {
                  productList.innerHTML = "\n        <p class = \"item__error\">\n            Too many requests, try again in 1 minute...\n        </p>\n        ";
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function showData() {
        return _ref2.apply(this, arguments);
      };
    }();

    function createCards(response) {
      response.data.forEach(function (item) {
        productList.innerHTML += "\n        <li class=\"catalog__item\"  data-id=\"".concat(item.id, "\">\n            <a class=\"catalog__link\" data-id=\"").concat(item.id, "\" href=\"#/i/").concat(item.id, "\">\n                <h3 class=\"catalog__title\">").concat(item.name, "</h3>\n            </a>\n            <p class=\"catalog__price\">").concat(item.price, "$</p>\n            <div class=\"catalog__wrapper\">\n                <img class=\"catalog__image\" src=\"").concat(item.img, "\">\n                <div class=\"catalog__actions\">\n                    <button class=\"catalog__btn btn addToCartBtn\" type=\"button\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                </div>\n            </div>\n        </li>\n        ");
        var catalogLink = document.querySelector(".catalog__link");
        catalogLink.addEventListener("click", function () {
          if (catalogLink.getAttribute("data-id") === item.id) {
            console.log(1);
            cardPage();
          }
        });
      });
    }

    showData();
  });

  var fillter = (function () {
    var productList = document.querySelector('.catalog__list');
    var priceFilter = document.querySelector('.sort__price');
    var categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    var filteredArray = [];
    var priceFlag = 0;

    var requestData =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var products, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("./data/products.json");

              case 2:
                products = _context.sent;

                if (products.ok) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Can not fetch ".concat(products.url));

              case 5:
                _context.next = 7;
                return products.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function requestData() {
        return _ref.apply(this, arguments);
      };
    }();

    function createProductCard() {
      filteredArray.forEach(function (item) {
        productList.innerHTML += "\n             <li class=\"catalog__item\"  data-id=\"".concat(item.id, "\">\n            <a class=\"catalog__link\" data-id=\"").concat(item.id, "\" href=\"#/i/").concat(item.id, "\">\n                <h3 class=\"catalog__title\">").concat(item.name, "</h3>\n            </a>\n            <p class=\"catalog__price\">").concat(item.price, "$</p>\n            <div class=\"catalog__wrapper\">\n                <img class=\"catalog__image\" src=\"").concat(item.img, "\">\n                <div class=\"catalog__actions\">\n                  <button class=\"catalog__btn btn addToCartBtn\" type=\"button\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                </div>\n            </div>\n        </li>\n            ");
      });
    }

    function checkFiltersForChecked(JSONData) {
      categoryFiltersArray.forEach(function (item) {
        if (item.checked) {
          JSONData.data.forEach(function (product) {
            if (item.id === product.category) {
              filteredArray.push(product);
            }
          });
        }
      });
    }

    function sortArrayByPrice() {
      filteredArray.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    function filterBycategory(JSONData) {
      categoryFiltersArray.forEach(function (item) {
        item.addEventListener('click', function (e) {
          productList.innerHTML = '';

          if (categoryFiltersArray.every(function (item) {
            return !item.checked;
          })) {
            filteredArray = JSONData.data.slice();
          } else {
            filteredArray = [];
            checkFiltersForChecked(JSONData);
          }

          if (priceFlag === 1) {
            sortArrayByPrice();
          }

          createProductCard();
          addToCart();
        });
      });
    }

    function sortByPrice(JSONData) {
      priceFilter.addEventListener('click', function (e) {
        productList.innerHTML = '';

        if (priceFlag === 0) {
          priceFlag = 1;
          sortArrayByPrice();
        } else if (priceFlag === 1) {
          priceFlag = 0;
          filteredArray = [];

          if (categoryFiltersArray.every(function (item) {
            return !item.checked;
          })) {
            filteredArray = JSONData.data.slice();
          } else {
            checkFiltersForChecked(JSONData);
          }
        }

        createProductCard();
        addToCart();
      });
    }

    var showProducts =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var JSONData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return requestData();

              case 2:
                JSONData = _context2.sent;
                filteredArray = JSONData.data.slice();
                filterBycategory(JSONData);
                sortByPrice(JSONData);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function showProducts() {
        return _ref2.apply(this, arguments);
      };
    }();

    showProducts();
  });

  var catalogPage = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view = "\n    <div class=\"page__wrapper\">\n        <h1 class=\"page__title\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</h1>\n        <ul class=\"page__breadcrumbs breadcrumbs\">\n          <li class=\"breadcrumbs__item\">\n            <a class=\"breadcrumbs__link\" href=\"index.html\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n          </li>\n          <li class=\"breadcrumbs__item\">\n            <a class=\"breadcrumbs__link\" href=\"catalog.html\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"catalog-columns--header\">\n        <div class=\"catalog-columns__wrapper page__wrapper\">\n          <p class=\"catalog-columns__narrow catalog-columns__title\">\u0424\u0438\u043B\u044C\u0442\u0440:</p>\n          <section class=\"catalog-columns__wide sort\">\n            <h2 class=\"catalog-columns__title sort__title\">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:</h2>\n            <ul class=\"sort__type-list\">\n              <li class=\"sort__type-item sort__price\">\n                <a class=\"sort__type-link sort__type-link--current\">\u041F\u043E \u0446\u0435\u043D\u0435</a>\n              </li>\n              <li class=\"sort__type-item\">\n                <a class=\"sort__type-link\" href=\"#\">\u041F\u043E \u0442\u0438\u043F\u0443</a>\n              </li>\n              <li class=\"sort__type-item\">\n                <a class=\"sort__type-link\" href=\"#\">\u041F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438</a>\n              </li>\n            </ul>\n            <ul class=\"sort__order-list\">\n              <li class=\"sort__order-item\">\n                <a class=\"sort__order-link sort__order-link--up\" href=\"#\">\n                  <span class=\"visually-hidden\">\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E</span>\n                </a>\n              </li>\n              <li class=\"sort__order-item\">\n                <a class=\"sort__order-link sort__order-link--down sort__order-link--current\">\n                  <span class=\"visually-hidden\">\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E</span>\n                </a>\n              </li>\n            </ul>\n          </section>\n        </div>\n      </div>\n      <div class=\"catalog-columns\">\n        <div class=\"catalog-columns__wrapper page__wrapper\">\n          <section class=\"catalog-columns__narrow filter\">\n            <h2 class=\"visually-hidden\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</h2>\n            <form class=\"filter__form\">\n              <fieldset class=\"filter__section\">\n                <legend class=\"filter__section-title\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</legend>\n                <ul class=\"filter__options filter__category\">\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"actionCamera\" type=\"checkbox\" name=\"actionCamera\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"actionCamera\">\u042D\u043A\u0448\u043D \u043A\u0430\u043C\u0435\u0440\u044B</label>\n                  </li>\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"fitnessTracker\" type=\"checkbox\" name=\"fitnessTracker\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"fitnessTracker\">\u0424\u0438\u0442\u043D\u0435\u0441 \u0442\u0440\u0435\u043A\u0435\u0440\u044B</label>\n                  </li>\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"quadrocopters\" type=\"checkbox\" name=\"quadrocopters\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"quadrocopters\">\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440\u044B</label>\n                  </li>\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"selfieSticks\" type=\"checkbox\" name=\"selfieSticks\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"selfieSticks\">\u0421\u0435\u043B\u0444\u0438 \u043F\u0430\u043B\u043A\u0438</label>\n                  </li>\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"watches\" type=\"checkbox\" name=\"watches\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"watches\">\u0427\u0430\u0441\u044B</label>\n                  </li>\n                  <li>\n                    <input class=\"category__filter filter__option visually-hidden\" id=\"vr\" type=\"checkbox\" name=\"vr\">\n                    <label class=\"filter__option-label filter__option-label--check\" for=\"vr\">VR/AR</label>\n                  </li>\n                </ul>\n              </fieldset>\n            </form>\n          </section>\n          <section class=\"catalog-columns__wide catalog\">\n            <h2 class=\"visually-hidden\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</h2>\n            <ul class=\"catalog__list\">\n            </ul>\n          </section>\n        </div>\n      </div>\n    ";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                products();
                fillter();

                window.onload = function () {
                  console.log('Страница загружена'); // к этому моменту страница загружена
                };

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var order = (function () {
    var cartArray = getLocalData('cartData'); // document.querySelector('.cart-popup>ul').innerHTML = "";

    cartArray.forEach(function (item) {
      if (document.querySelector('.products-list-in-cart')) {
        document.querySelector('.products-list-in-cart').innerHTML += "\n              <li class=\"cart__product\"  id_product_in_cart=\"".concat(item.id, "\">\n                  <div class=\"cart__product-img\">\n                    <img src=\"").concat(item.src, "\" width=\"130\" height=\"130\">\n                  </div>\n                  <div class=\"cart__product-info\">\n                    <div class=\"cart__product-name product-name\">").concat(item.name, "</div>\n                    <div class=\"amount-of-produts\">\n                      <span class=\"amount\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: </span>\n                      <button class=\"btnMinus\">-</button>\n                      <span class=\"number-of-amount\">").concat(item.amount, "</span>\n                      <button class=\"btnPlus\">+</button>\n                      <p class=\"cart__product-price\">\u0426\u0435\u043D\u0430: <span class=\"product-price\">").concat(item.price, "</span></p>\n                    </div>\n                    <div class=\"delete_item\">\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B</div>\n                  </div>\n                </li>\n          ");
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
      }

      deleteFromCart();
      var btnMin = document.querySelectorAll('.btnMinus');
      var btnPlus = document.querySelectorAll('.btnPlus');
      addEvents(btnPlus, 'click', function (e) {
        var prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
        cartArray.forEach(function (item, index) {
          if (item.id === prodCartId) {
            console.log(cartArray[index]);
            cartArray[index].amount += 1;
            e.target.closest('.cart__product').querySelector('.number-of-amount').innerHTML = cartArray[index].amount;
            localStorage.setItem('cartData', JSON.stringify(cartArray));
            document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          }
        });
      });
      addEvents(btnMin, 'click', function (e) {
        var prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
        cartArray.forEach(function (item, index) {
          if (item.id === prodCartId) {
            console.log(cartArray[index]);

            if (cartArray[index].amount === 1) {
              return false;
            } else {
              cartArray[index].amount -= 1;
              e.target.closest('.cart__product').querySelector('.number-of-amount').innerHTML = cartArray[index].amount;
              localStorage.setItem('cartData', JSON.stringify(cartArray));
              document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
            }
          }
        });
      });
    });
    document.querySelector('#city').addEventListener('click', function () {
      if (document.querySelector('#city').value != 0) {
        document.querySelector('#delivery-option').classList.remove('hide');
      } else {
        document.querySelector('#delivery-option').classList.add('hide');
      }
    });
    document.querySelector('#delivery-option').addEventListener('click', function () {
      if (document.querySelector('#delivery-option select').options.selectedIndex === 1) {
        document.querySelector('#NP-number').classList.remove('hide');
        document.querySelector('#user-adress').classList.add('hide');
      } else if (document.querySelector('#delivery-option select').options.selectedIndex === 2) {
        document.querySelector('#user-adress').classList.remove('hide');
        document.querySelector('#NP-number').classList.add('hide');
      }

      document.querySelector('#payment-option').classList.remove('hide');
    });
    document.querySelector('#payment-option').addEventListener('click', function () {
      if (document.querySelector('#payment-option select').options.selectedIndex === 2) {
        document.querySelector('#credit-card').classList.remove('hide');
      } else {
        document.querySelector('#credit-card').classList.add('hide');
      }
    });
    var name = popupform.user_name;
    var tel = popupform.tel;
    var email = popupform.email;
    var city = popupform.city_select;
    var delivery = popupform.delivery;
    var adress = popupform.adress;
    var postNumber = popupform.number;
    var paymantOption = popupform.payment_option; // let cardPattern = new RegExp("^/.{1,4}/g){16}$");
    //тут прикольные пробелы в поле ввода номера карты

    var cardNumber = popupform.creditcard;
    cardNumber.addEventListener('input', function () {
      var digitst = this.value.replace(/[^\d]/g, '').substring(0, 16);
      digitst = digitst.match(/.{1,4}/g).join(' ');
      this.value = digitst;
    }); //валидация

    var orderValidation = function orderValidation() {
      var res = true;
      var namePattern = new RegExp("^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\\040[А-ЯA-Z][\x27а-яa-z]{1,}(\\040[А-ЯA-Z][\x27а-яa-z]{1,})?$");
      var telPattern = new RegExp("^^([+]?[0-9\\s-\\(\\)]{3,25})*$");
      var emailPattern = new RegExp("^\\w+[.!#$%&'*+/=?^_`{|}~-]*?\\w*?@[a-z]+?\\.[a-z]{2,4}$");
      var NPnumber = new RegExp("^\\d{1,2}|300$");

      if (namePattern.test(name.value)) {
        name.classList.remove('alert');
      } else {
        name.classList.add('alert');
        res = false;
        console.log(res);
      }

      if (telPattern.test(tel.value)) {
        tel.classList.remove('alert');
      } else {
        res = false;
        console.log(res);
        tel.classList.add('alert');
      }

      if (emailPattern.test(email.value)) {
        email.classList.remove('alert');
      } else {
        res = false;
        console.log(res);
        email.classList.add('alert');
      }

      if (city.value !== 0) {
        document.querySelector('#city').classList.remove('alert');
      } else {
        res = false;
        console.log(res);
        document.querySelector('#city').classList.add('alert');
      }

      if (delivery.options.selectedIndex === 1) {
        delivery.classList.remove('alert');

        if (NPnumber.test(postNumber.value)) {
          postNumber.classList.remove('alert');
        } else {
          res = false;
          console.log(res);
          postNumber.classList.add('alert');
        }
      } else if (delivery.options.selectedIndex === 2) {
        delivery.classList.remove('alert');

        if (adress.value) {
          adress.classList.remove('alert');
        } else {
          adress.classList.add('alert');
          res = false;
          console.log(res);
        }
      } else {
        res = false;
        delivery.classList.add('alert');
      }

      if (paymantOption.options.selectedIndex === 1) {
        paymantOption.classList.remove('alert');
      } else {
        paymantOption.classList.add('alert');
      }

      if (paymantOption.options.selectedIndex === 2) {
        paymantOption.classList.remove('alert');

        if (cardNumber.value.length === 19) {
          cardNumber.classList.remove('alert');
        } else {
          cardNumber.classList.add('alert');
          res = false;
          console.log(cardNumber.value.length);
        }
      }

      return res;
    };

    var confirmOrderBtn = document.querySelector('.confirm-order-btn');
    confirmOrderBtn.addEventListener('click', function () {
      if (orderValidation()) {
        document.querySelector('.cart__product').classList.add('.remove-opacity');
        document.querySelector('.order-popup-container').innerHTML = "\n        <div class=\"success-order-message\">\n            <div class=\"success-used-data\">\n                <img src=\"img/High-contrast-face-smile.svg\" width=\"300\" height=\"300\">\n                <div id=\"user-complete-order\">\n                </div>\n                <h3>\u0421\u043F\u0430\u0441\u0438\u0431\u043E!</h3>\n                <p>\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u0440\u043C\u043B\u0435\u043D! \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043A\u043E\u0440\u043E \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F =)</p>\n                <a class=\"to-main-page btn\" href=\"/#/\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>\n            </div>\n        </div>\n        ";
        cartArray.forEach(function (item) {
          if (document.querySelector('#user-complete-order')) {
            document.querySelector('#user-complete-order').innerHTML += "\n              <li class=\"cart__product\"  id_product_in_cart=\"".concat(item.id, "\">\n                  <div class=\"cart__product-img\">\n                    <img src=\"").concat(item.src, "\" width=\"130\" height=\"130\">\n                  </div>\n                  <div class=\"cart__product-info\">\n                    <div class=\"cart__product-name product-name\">").concat(item.name, "</div>\n                    <div class=\"amount-of-produts\">\n                      <span class=\"amount\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: </span>\n                      <span class=\"number-of-amount\">").concat(item.amount, "</span>\n                      <p class=\"cart__product-price\">\u0426\u0435\u043D\u0430: <span class=\"product-price\">").concat(item.price, "</span></p>\n                    </div>\n                  </div>\n                </li>\n          ");
            document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          }
        });
        localStorage.removeItem('cartData');
      }
    });
  });

  var orderPage = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view = "\n\n<div class=\"order-popup-container modal modal--order\">\n  <h3>\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437</h3>\n\n  <div class=\"popup-form order-form\">\n    <form class=\"input-text-wraper\" name=\"popupform\">\n      <label for=\"user_name\" class=\"popup-label\">\n        \u0412\u0430\u0448\u0435 \u0438\u043C\u044F:\n        <input type=\"text\" name=\"user_name\" placeholder=\"\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0430\u044F\">\n      </label>\n      <label for=\"tel\" class=\"popup-label\">\n        \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:\n        <input type=\"tel\" name=\"tel\" placeholder=\"+38 000 00 00\">\n      </label>\n      <label class=\"popup-label\">\n        \u0412\u0430\u0448 email:\n        <input type=\"text\" name=\"email\" placeholder=\"example@mail.com\">\n      </label>\n      <label for=\"city\" class=\"popup-label\">\n          \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434:\n        <select id=\"city\" name=\"city_select\">\n          <option value=\"0\">...</option>\n          <option value=\"1\">\u041A\u0438\u0435\u0432</option>\n          <option value=\"2\">\u0425\u0430\u0440\u044C\u043A\u043E\u0432</option>\n          <option value=\"3\">\u041E\u0434\u0435\u0441\u0441\u0430</option>\n          <option value=\"4\">\u041B\u044C\u0432\u043E\u0432</option>\n          <option value=\"5\">\u0414\u043D\u0435\u043F\u0440</option>\n        </select>\n      </label>\n      <label for=\"delivery-option\" id=\"delivery-option\" class=\"popup-label hide\">\n            \u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:\n        <select name=\"delivery\">\n          <option value=\"0\">...</option>\n          <option value=\"1\">\u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u041D\u041F</option>\n          <option value=\"2\">\u0410\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430</option>\n        </select>\n      </label>\n      <label for=\"NP-number\" class=\"popup-label hide\" id=\"NP-number\"  placeholder=\"1 - 130\">\n        \u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u041D\u041F:\n        <input type=\"number\" name=\"number\" min=\"1\">\n      </label>\n      <label class=\"popup-label hide\" id=\"user-adress\">\n        \u0410\u0434\u0440\u0435\u0441:\n        <input type=\"text\" name=\"adress\" placeholder=\"\u0430\u0434\u0440\u0435\u0441\">\n      </label>\n      <label for=\"payment-option\" id=\"payment-option\" class=\"popup-label hide\">\n        \u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\n        <select name=\"payment_option\">\n          <option value=\"0\">...</option>\n          <option value=\"1\">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438</option>\n          <option value=\"2\">\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443</option>\n        </select>\n      </label>\n      <label for=\"creditcard\" class=\"popup-label hide\" id=\"credit-card\">\n        \u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B:\n        <input type=\"text\"  name=\"creditcard\" placeholder=\"XXXX XXXX XXXX XXXX\">\n      </label>\n    </form>\n    <ul class=\"products-list-in-cart\">   <!-- \u0442\u0443\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 -->\n\n    </ul>\n    <div class=\"finalPrice-container\">\n      <div>\n        <span>\u0412\u0441\u0435\u0433\u043E:</span>\n        <span class=\"finalPrice\"></span>\n      </div>\n      <button type=\"button\" class=\"btn confirm-order-btn\">\u0417\u0430\u043A\u0430\u0437 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E</button>\n    </div>\n\n  </div>\n\n</div>\n\n\n\n        ";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                order();
                addToCart();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var Error404 = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view =
                /*html*/
                "\n            <section class=\"section\">\n                <h1> 404 Error </h1>\n            </section>\n        ";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var cartPopup = (function () {
    var cartPopupLink = document.querySelector(".user-menu__item--cart");
    var cartPopup = document.querySelector(".cart-popup");
    var cartPopupCloseBtn = cartPopup.querySelector(".cart__close");
    cartPopupLink.addEventListener("click", function () {
      disableBodyScroll(cartPopup);
      showSection(cartPopup);
    });
    cartPopupCloseBtn.addEventListener("click", function () {
      enableBodyScroll(cartPopup);
      hideSection(cartPopup);
    });
  });

  var pageHeader = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view = "<nav class=\"main-nav\">\n        <a class=\"page-header__logo main-nav__logo logo\" href=\"/#/\">\n          <img class=\"logo__image\" src=\"img/logo-device.svg\" width=\"163\" height=\"36\" alt=\"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D Device\">\n        </a>\n\n        <ul class=\"page-header__user-actions user-menu\">\n          <li class=\"user-menu__item user-menu__item--cart\">\n            <a class=\"user-menu__link user-menu__link--cart\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</a>\n          </li>\n        </ul>\n        <ul class=\"page-header__site-menu site-menu\">\n        </ul>\n      </nav>\n";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var siteMenu, pageMainLink;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                siteMenu = document.querySelector(".site-menu");
                pageMainLink = document.querySelector(".page-header__logo");

                if (window.location.href.includes("catalog") || window.location.href.includes("i/")) {
                  pageMainLink.setAttribute("href", "/#/");
                  siteMenu.innerHTML = "\n         <li class=\"site-menu__item site-menu__item--dropdown\">\n            <a class=\"site-menu__link site-menu__link--dropdown\" href=\"/#/catalog\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</a>\n            <div class=\"page-header__catalog-dropdown dropdown\">\n              <ul class=\"catalog-menu\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u041C\u043E\u043D\u043E\u043F\u043E\u0434\u044B \u0434\u043B\u044F \u0441\u0435\u043B\u0444\u0438</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u042D\u043A\u0448\u043D-\u043A\u0430\u043C\u0435\u0440\u044B</a></li>\n              </ul>\n              <ul class=\"catalog-menu\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0424\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442\u044B</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0423\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B</a></li>\n              </ul>\n              <ul class=\"catalog-menu catalog-menu__info\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440\u044B</a></li>\n              </ul>\n            </div>\n          </li>\n      ";
                } else {
                  siteMenu.innerHTML = "\n       <li class=\"site-menu__item site-menu__item--dropdown\">\n            <a class=\"site-menu__link site-menu__link--dropdown\" href=\"/#/catalog\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</a>\n            <div class=\"page-header__catalog-dropdown dropdown\">\n              <ul class=\"catalog-menu\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u041C\u043E\u043D\u043E\u043F\u043E\u0434\u044B \u0434\u043B\u044F \u0441\u0435\u043B\u0444\u0438</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u042D\u043A\u0448\u043D-\u043A\u0430\u043C\u0435\u0440\u044B</a></li>\n              </ul>\n              <ul class=\"catalog-menu\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0424\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442\u044B</a></li>\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u0423\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B</a></li>\n              </ul>\n              <ul class=\"catalog-menu catalog-menu__info\">\n                <li><a class=\"catalog-menu__link\" href=\"#\">\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440\u044B</a></li>\n              </ul>\n            </div>\n          </li>\n          <li class=\"site-menu__item\">\n            <a class=\"site-menu__link site-menu__link--delivery\"\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</a>\n          </li>\n          <li class=\"site-menu__item\">\n            <a class=\"site-menu__link site-menu__link--warranty\">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F</a>\n          </li>\n          <li class=\"site-menu__item\">\n            <a class=\"site-menu__link site-menu__link--contacts\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>\n          </li>\n      ";
                }

                cartPopup();
                miniCartRender();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var pageFooter = {
    render: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var view;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                view = "\n           <div class=\"page__wrapper\">\n        <div class=\"page-footer__top\">\n          <a class=\"logo\">\n            <img class=\"logo__image\" src=\"img/logo-device-color.svg\" width=\"163\" height=\"36\" alt=\"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D Device\">\n          </a>\n          <ul class=\"page-footer__user-menu user-menu user-menu--contrast\">\n<!--           <li class=\"user-menu__item\">-->\n<!--              <a class=\"user-menu__link user-menu__link&#45;&#45;product\" href=\"/#/order\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</a>-->\n<!--            </li>-->\n<!--            <li class=\"user-menu__item\">-->\n<!--              <a class=\"user-menu__link user-menu__link&#45;&#45;product\" href=\"/#/test-card-page\">\u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0410 \u0422\u041E\u0412\u0410\u0420\u0410</a>-->\n<!--            </li>-->\n<!--            <li class=\"user-menu__item\">-->\n<!--              <a class=\"user-menu__link user-menu__link&#45;&#45;product\" href=\"#/order\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</a>-->\n<!--            </li>-->\n<!--            <li class=\"user-menu__item\">-->\n<!--              <a class=\"user-menu__link user-menu__link&#45;&#45;cart\" href=\"/#/cart\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</a>-->\n<!--            </li>-->\n\n          </ul>\n        </div>\n\n        <div class=\"page-footer__middle\">\n          <p class=\"page-footer__contacts\">\u0433. \u041A\u0438\u0435\u0432, \u041C\u0430\u0439\u0434\u0430\u043D \u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438, 1</p>\n          <p class=\"page-footer__contacts\">\u0422\u0435\u043B.: +3 (803) 495-95-95</p>\n        </div>\n\n        <div class=\"page-footer__bottom\">\n          <ul class=\"page-footer__social social\">\n            <li class=\"social__item\">\n              <a class=\"social__link social__link--facebook\" href=\"#\" aria-label=\"\u041D\u0430\u0448 \u0424\u0435\u0439\u0441\u0431\u0443\u043A\">\n                <span class=\"visually-hidden\">\u0424\u0435\u0439\u0441\u0431\u0443\u043A</span>\n              </a>\n            </li>\n            <li class=\"social__item\">\n              <a class=\"social__link social__link--instagram\" href=\"#\" aria-label=\"\u041D\u0430\u0448 \u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C\">\n                <span class=\"visually-hidden\">\u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C</span>\n              </a>\n            </li>\n            <li class=\"social__item\">\n              <a class=\"social__link social__link--twitter\" href=\"#\" aria-label=\"\u041D\u0430\u0448 \u0422\u0432\u0438\u0442\u0442\u0435\u0440\">\n                <span class=\"visually-hidden\">\u0422\u0432\u0438\u0442\u0442\u0435\u0440</span>\n              </a>\n            </li>\n          </ul>\n          <a class=\"page-footer__copyright\" href=\"https://htmlacademy.ru/intensive/htmlcss\">\n            <span class=\"visually-hidden\">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E:</span>\n            <img class=\"page-footer__copyright-logo\" src=\"img/logo-html.svg\" width=\"27\" height=\"35\" alt=\"HTML Academy\">\n          </a>\n        </div>\n      </div>\n\n    ";
                return _context.abrupt("return", view);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }(),
    after_render: function () {
      var _after_render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function after_render() {
        return _after_render.apply(this, arguments);
      }

      return after_render;
    }()
  };

  var pagesRender = function pagesRender() {
    // List of supported routes. Any url other than these routes will throw a 404 error
    var routes = {
      '/': mainPage,
      '/catalog': catalogPage,
      '/order': orderPage,
      //'/cart' : cartPage,
      '/i/:id': cardPage // , '/registration'   : Registration

    }; // The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.

    var router =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var header, mainContainer, footer, request, parsedURL, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Lazy load view element:
                header =  document.querySelector(".page__header");
                mainContainer =  document.querySelector(".page__main");
                footer =  document.querySelector(".page__footer"); // Render the Header and footer of the page

                _context.next = 5;
                return pageHeader.render();

              case 5:
                header.innerHTML = _context.sent;
                _context.next = 8;
                return pageHeader.after_render();

              case 8:
                _context.next = 10;
                return pageFooter.render();

              case 10:
                footer.innerHTML = _context.sent;
                _context.next = 13;
                return pageFooter.after_render();

              case 13:
                // Get the parsed URl from the addressbar
                request = urlUtils.parseRequestURL(); // Parse the URL and if it has an id part, change it with the string ":id"

                parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : ''); // Get the page from our hash of supported routes.
                // If the parsed URL is not in our list of supported routes, select the 404 page instead

                page = routes[parsedURL] ? routes[parsedURL] : Error404;
                _context.next = 18;
                return page.render();

              case 18:
                mainContainer.innerHTML = _context.sent;
                _context.next = 21;
                return page.after_render();

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function router() {
        return _ref.apply(this, arguments);
      };
    }(); // Listen on hash change:


    window.addEventListener('hashchange', router); // Listen on page load:

    window.addEventListener('load', router);
  };

  //import fs from 'fs';
  // import commentForm from './modules/comment-form';
  // import sliders from './modules/sliders';
  // import services from './modules/services';
  // import contacts from './modules/contacts';
  // import aboutUs from './modules/about-us';
  // import products from './modules/products';

  pagesRender(); // sliders();
  // services();
  // contacts();
  // aboutUs();
  // commentForm();
  //products();

}());
//# sourceMappingURL=app.js.map
