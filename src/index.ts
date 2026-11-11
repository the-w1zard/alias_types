export type MaybePromise<R = any> = R;
export function MaybePromisei<R = any>(v: R): MaybePromise {
    return v !== undefined ? v as R : Promise.resolve(v) as Promise<R> 
}
                   <T>(v: T | (() => T)): T => typeof v === "function" ? (v as () => T)() : v;
export const UFI = <T>(v: UF<T>): T => typeof v === "function" ? (v as () => T)() : v;
// resolve optional unknown-or-factory
export const UFOI = <T>(v: UF<T> | UD): T | UD =>  v === undefined ? undefined : UFI(v);
// resolve unknown-or-updater, React-style
export const UFUI = <T>(v: UF<T>, old: T): T => typeof v === "function" ? (v as (old: T) => T)(old) : v;
export const UFDI = <T>(v: T | UD, d: UF<T>): T =>v === undefined ? UFI(d) : v;
// const timeout = UFD(config.timeout, () => calculateTimeout());
export const UFMI = <T>(v: T | null | UD, d: UF<T>): T => v == null ? UFI(d) : v;
// const value = UFM(input, () => defaultValue);
export const UFAI = async <T>(v: T | P<T> | (() => T | P<T>)): P<AWD<T>> => await (typeof v === "function" ? (v as () => T | P<T>)() : v);
// const config = await UFA(loadConfig);
export const UFPI = <T>(v: T | P<T>): P<AWD<T>> => P.resolve(v);
// const result = await UFP(possiblyAsyncValue);

export function deseri<T=A, Z=A>(raw: S | O | M<T, Z> | Set<T> |AR<T>): A {
    if (raw === null || raw === undefined) return raw;
    try {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
   
      if (parsed?.__type === 'Map') {
        return new Map(parsed.value.map(([key, val]: [S, S]) => [deseri(key), deseri(val)]));
      }
      if (parsed?.__type === 'Set') {
        return new Set(parsed.value.map((val: S) => deseri(val)));
      }
      if (parsed?.__type === 'Array') {
        return parsed.value.map((val: S) => deseri(val));
      }
      if (parsed?.__type === 'Object') {
        const obj: Record<string, any> = {};
        for (const [key, val] of Object.entries(parsed.value)) {
          obj[key] = deseri(val as S);
        }
        return obj;
      }
      if (parsed?.__type === 'Primitive') {
        return parsed.value;
      }
   
      return parsed;
    } catch {
      return raw;
    }
}
export function seri(value: U): S {
    if (value instanceof Map) {
      return JSON.stringify({ 
        __type: 'Map', 
        value: Array.from(value.entries()).map(([key, val]) => [seri(key), seri(val)]) 
      });
    }
    if (value instanceof Set) {
      return JSON.stringify({ 
        __type: 'Set', 
        value: Array.from(value.values()).map(val => seri(val)) 
      });
    }
    if (Array.isArray(value)) {
      return JSON.stringify({ 
        __type: 'Array', 
        value: value.map(item => seri(item)) 
      });
    }
    if (value !== null && typeof value === 'object') {
      const obj: Record<string, S> = {};
      for (const [key, val] of Object.entries(value)) {
        obj[key] = seri(val);
      }
      return JSON.stringify({ 
        __type: 'Object', 
        value: obj 
      });
    }
    // Wrap primitives (strings, numbers, booleans, null) to preserve exact types
    return JSON.stringify({ 
      __type: 'Primitive', 
      value 
    });
}

globalThis.MaybePromise = MaybePromisei;
globalThis.PX = Proxy;
globalThis.AR = Array
globalThis.AB = ArrayBuffer
globalThis.B = Boolean
globalThis.BL = Blob
globalThis.D = Date
globalThis.E = Error
globalThis.EV = Event
globalThis.TD = new TextDecoder();
globalThis.TE = new TextEncoder()
globalThis.DESER = deseri
globalThis.SER = seri
globalThis.J = JSON
globalThis.M = Map
globalThis.WM = WeakMap
globalThis.N = Number
globalThis.pInt = parseInt
globalThis.pFloat = parseFloat
globalThis.O = Object
globalThis.P = Promise
globalThis.REG = RegExp
globalThis.S = String
globalThis.ST = Set
globalThis.WST = WeakSet
globalThis.WR = WeakRef
globalThis.I8 = Int8Array
globalThis.U8 = Uint8Array
globalThis.U8C = Uint8ClampedArray
globalThis.I16 = Int16Array
globalThis.U16 = Uint16Array
globalThis.I32 = Int32Array
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






