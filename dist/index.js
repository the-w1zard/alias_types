

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var src_UFI = function UFI(v) {
    return typeof v === "function" ? v() : v;
};
// resolve optional unknown-or-factory
var src_UFOI = function UFOI(v) {
    return v === undefined ? undefined : src_UFI(v);
};
// resolve unknown-or-updater, React-style
var src_UFUI = function UFUI(v, old) {
    return typeof v === "function" ? v(old) : v;
};
var src_UFDI = function UFDI(v, d) {
    return v === undefined ? src_UFI(d) : v;
};
// const timeout = UFD(config.timeout, () => calculateTimeout());
var src_UFMI = function UFMI(v, d) {
    return v == null ? src_UFI(d) : v;
};
// const value = UFM(input, () => defaultValue);
var src_UFAI = function UFAI(v) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        typeof v === "function" ? v() : v
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    })();
};
// const config = await UFA(loadConfig);
var src_UFPI = function UFPI(v) {
    return P.resolve(v);
};
// const result = await UFP(possiblyAsyncValue);
var fi = false // type: false
;
var ti = true // type: true
;
var NUI = null;
var UDI = undefined;

globalThis.UD = UDI;
globalThis.NU = NUI;
globalThis.f = false;
globalThis.t = true;
globalThis.PX = Proxy;
globalThis.AR = Array;
globalThis.AB = ArrayBuffer;
globalThis.B = Boolean;
globalThis.BL = Blob;
globalThis.D = Date;
globalThis.E = Error;
globalThis.EV = Event;
globalThis.TD = new TextDecoder();
globalThis.TE = new TextEncoder();
globalThis.J = JSON;
globalThis.M = Map;
globalThis.WM = WeakMap;
globalThis.N = Number;
globalThis.pInt = parseInt;
globalThis.pFloat = parseFloat;
globalThis.O = Object;
globalThis.P = Promise;
globalThis.REG = RegExp;
globalThis.S = String;
globalThis.ST = Set;
globalThis.WST = WeakSet;
globalThis.WR = WeakRef;
globalThis.I8 = Int8Array;
globalThis.U8 = Uint8Array;
globalThis.U8C = Uint8ClampedArray;
globalThis.I16 = Int16Array;
globalThis.U16 = Uint16Array;
globalThis.I32 = Int32Array;
globalThis.U32 = Uint32Array;
globalThis.F32 = Float32Array;
globalThis.F64 = Float64Array;
globalThis.UFP = src_UFPI;
globalThis.UFA = src_UFAI;
globalThis.UFM = src_UFMI;
globalThis.UFD = src_UFDI;
globalThis.UFU = src_UFUI;
globalThis.UFO = src_UFOI;
globalThis.UF = src_UFI;
globalThis.DOMX = DOMException;
globalThis.CE = CustomEvent;
globalThis.KE = KeyboardEvent;
globalThis.ME = MouseEvent;
globalThis.PE = PointerEvent;
globalThis.AC = AbortController;
globalThis.AS = AbortSignal;
globalThis.FR = FinalizationRegistry;
globalThis.DV = DataView;
globalThis.DF = DocumentFragment;
globalThis.DOC = Document;
globalThis.ND = Node;
globalThis.NL = NodeList;
globalThis.HE = HTMLElement;
globalThis.SY = Symbol;
globalThis.BI = BigInt;
globalThis.AE = AggregateError;
globalThis.RE = RangeError;
globalThis.RFE = ReferenceError;
globalThis.TYE = TypeError;
globalThis.UE = URIError;
globalThis.SE = SyntaxError;
globalThis.U8C = Uint8ClampedArray;
globalThis.DV = DataView;
globalThis.FD = FormData;
globalThis.FL = File;
globalThis.FS = FileSystem;
globalThis.FLR = FileReader;
globalThis.MO = MutationObserver;
globalThis.RSO = ResizeObserver;
globalThis.ITO = IntersectionObserver;
globalThis.PO = PerformanceObserver;
globalThis.EL = Element;
globalThis.RA = Range;
globalThis.TW = TreeWalker;
globalThis.NNM = NamedNodeMap;
globalThis.URL = URL;
globalThis.URLP = URLPattern;
globalThis.WS = WebSocket;
globalThis.W = Worker;
globalThis.MC = MessageChannel;
globalThis.MP = MessagePort;
globalThis.F = Function;
globalThis.OI = Object.is;
globalThis.OK = Object.keys;
globalThis.OV = Object.values;
globalThis.OE = Object.entries;
globalThis.OF = Object.freeze;
globalThis.OA = Object.assign;
globalThis.JP = JSON.parse;
globalThis.JS = JSON.stringify;
globalThis.RND = Math.random;
globalThis.MX = Math.max;
globalThis.MN = Math.min;
globalThis.MF = Math.floor;
globalThis.MCL = Math.ceil;
globalThis.MR = Math.round;
globalThis.MT = Math.trunc;

export { NUI as NU, NUI, UDI as UD, UDI, fi as f, fi, src_UFAI as UFA, src_UFAI as UFAI, src_UFDI as UFD, src_UFDI as UFDI, src_UFI as UF, src_UFI as UFI, src_UFMI as UFM, src_UFMI as UFMI, src_UFOI as UFO, src_UFOI as UFOI, src_UFPI as UFP, src_UFPI as UFPI, src_UFUI as UFU, src_UFUI as UFUI, ti as t, ti };
