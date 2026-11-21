export const UFI = (v) => typeof v === "function" ? v() : v;
// resolve optional unknown-or-factory
export const UFOI = (v) => v === undefined ? undefined : UFI(v);
// resolve unknown-or-updater, React-style
export const UFUI = (v, old) => typeof v === "function" ? v(old) : v;
export const UFDI = (v, d) => v === undefined ? UFI(d) : v;
// const timeout = UFD(config.timeout, () => calculateTimeout());
export const UFMI = (v, d) => v == null ? UFI(d) : v;
// const value = UFM(input, () => defaultValue);
export const UFAI = async (v) => await (typeof v === "function" ? v() : v);
// const config = await UFA(loadConfig);
export const UFPI = (v) => P.resolve(v);
// const result = await UFP(possiblyAsyncValue);
export const fi = false; // type: false
export const ti = true; // type: true
export const NUI = null;
export const UDI = undefined;
export { UFI as UF, UFOI as UFO, UFUI as UFU, UFDI as UFD, UFMI as UFM, UFAI as UFA, UFPI as UFP, fi as f, ti as t, NUI as NU, UDI as UD, };
globalThis.UD = UDI;
globalThis.NU = NUI;
globalThis.f = false;
globalThis.t = true;
globalThis.PX = Proxy;
globalThis.AR = Array;
globalThis.AB = ArrayBuffer;
globalThis.B = Boolean;
globalThis.D = Date;
globalThis.E = Error;
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
globalThis.I8 = Int8Array;
globalThis.U8 = Uint8Array;
globalThis.U8C = Uint8ClampedArray;
globalThis.I16 = Int16Array;
globalThis.U16 = Uint16Array;
globalThis.I32 = Int32Array;
globalThis.U32 = Uint32Array;
globalThis.F32 = Float32Array;
globalThis.F64 = Float64Array;
globalThis.UFP = UFPI;
globalThis.UFA = UFAI;
globalThis.UFM = UFMI;
globalThis.UFD = UFDI;
globalThis.UFU = UFUI;
globalThis.UFO = UFOI;
globalThis.UF = UFI;
globalThis.DV = DataView;
globalThis.SY = Symbol;
globalThis.RE = RangeError;
globalThis.RFE = ReferenceError;
globalThis.TYE = TypeError;
globalThis.UE = URIError;
globalThis.SE = SyntaxError;
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
globalThis.INF = Infinity;
globalThis.dURI = decodeURI;
globalThis.eURI = encodeURI;
globalThis.esc = escape;
globalThis.unesc = unescape;
if (typeof DisposableStack !== "undefined")
    globalThis.DS = DisposableStack;
if (typeof AsyncDisposableStack !== "undefined")
    globalThis.ADS = AsyncDisposableStack;
if (typeof BigInt !== "undefined")
    globalThis.BI = BigInt;
if (typeof Blob !== "undefined")
    globalThis.BL = Blob;
if (typeof Event !== "undefined")
    globalThis.EV = Event;
if (typeof TextDecoder !== "undefined")
    globalThis.TD = new TextDecoder();
if (typeof TextEncoder !== "undefined")
    globalThis.TE = new TextEncoder();
if (typeof DOMException !== "undefined")
    globalThis.DOMX = DOMException;
if (typeof AbortController !== "undefined")
    globalThis.AC = AbortController;
if (typeof AbortSignal !== "undefined")
    globalThis.AS = AbortSignal;
if (typeof FinalizationRegistry !== "undefined")
    globalThis.FR = FinalizationRegistry;
if (typeof AggregateError !== "undefined")
    globalThis.AE = AggregateError;
if (typeof FormData !== "undefined")
    globalThis.FD = FormData;
if (typeof File !== "undefined")
    globalThis.FL = File;
if (typeof URL !== "undefined")
    globalThis.URL = URL;
if (typeof WebSocket !== "undefined")
    globalThis.WS = WebSocket;
if (typeof Worker !== "undefined")
    globalThis.W = Worker;
if (typeof MessageChannel !== "undefined")
    globalThis.MC = MessageChannel;
if (typeof MessagePort !== "undefined")
    globalThis.MP = MessagePort;
if (typeof WeakRef !== "undefined")
    globalThis.WR = WeakRef;
if (typeof CustomEvent !== "undefined")
    globalThis.CE = CustomEvent;
if (typeof KeyboardEvent !== "undefined")
    globalThis.KE = KeyboardEvent;
if (typeof MouseEvent !== "undefined")
    globalThis.ME = MouseEvent;
if (typeof PointerEvent !== "undefined")
    globalThis.PE = PointerEvent;
if (typeof HTMLElement !== "undefined")
    globalThis.HE = HTMLElement;
if (typeof DocumentFragment !== "undefined")
    globalThis.DF = DocumentFragment;
if (typeof Document !== "undefined")
    globalThis.DOC = Document;
if (typeof Node !== "undefined")
    globalThis.ND = Node;
if (typeof NodeList !== "undefined")
    globalThis.NL = NodeList;
if (typeof FileReader !== "undefined")
    globalThis.FLR = FileReader;
if (typeof MutationObserver !== "undefined")
    globalThis.MO = MutationObserver;
if (typeof ResizeObserver !== "undefined")
    globalThis.RSO = ResizeObserver;
if (typeof IntersectionObserver !== "undefined")
    globalThis.ITO = IntersectionObserver;
if (typeof PerformanceObserver !== "undefined")
    globalThis.PO = PerformanceObserver;
if (typeof Element !== "undefined")
    globalThis.EL = Element;
if (typeof Range !== "undefined")
    globalThis.RA = Range;
if (typeof TreeWalker !== "undefined")
    globalThis.TW = TreeWalker;
if (typeof NamedNodeMap !== "undefined")
    globalThis.NNM = NamedNodeMap;
if (typeof URLPattern !== "undefined")
    globalThis.URLP = URLPattern;
if (typeof Window !== "undefined")
    globalThis.WIN = Window;
if (typeof DocumentType !== "undefined")
    globalThis.DT = DocumentType;
if (typeof HTMLCollection !== "undefined")
    globalThis.HC = HTMLCollection;
if (typeof DOMParser !== "undefined")
    globalThis.DOMP = DOMParser;
if (typeof XMLSerializer !== "undefined")
    globalThis.XMLS = XMLSerializer;
if (typeof DOMMatrix !== "undefined")
    globalThis.DM = DOMMatrix;
if (typeof DOMPoint !== "undefined")
    globalThis.DPT = DOMPoint;
if (typeof DOMRect !== "undefined")
    globalThis.DR = DOMRect;
if (typeof CSSStyleSheet !== "undefined")
    globalThis.CSSS = CSSStyleSheet;
if (typeof ShadowRoot !== "undefined")
    globalThis.SR = ShadowRoot;
if (typeof Storage !== "undefined")
    globalThis.STRG = Storage;
if (typeof History !== "undefined")
    globalThis.HIST = History;
if (typeof Location !== "undefined")
    globalThis.LOC = Location;
