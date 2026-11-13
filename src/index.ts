
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



declare global {
    // #region ═════════════════════════════════════════════════════════════ UPGRADED BASE ═══
    type BM<K = A, V = A> = BYTEOP_MAP_TYPE<K, V>; // aliasing byteop map down to bm, a javascript map conversion to byteop code
    type BYTEOP_MAP_TYPE<K = A, V = A> = {
        pidToSlot: I32;
        set(k: K, v: V): V;
        get(k: K): V | undefined;
        has(k: K): B;
        delete(k: K): B;
        readonly size: N;
    };
    // #endregion
    //                                                                                                   [A]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type A = any;
    //  Is Any -Checks whether a type is `any`.   
    type IA<T> = 0 extends 1 & T ? true : false;

    type AR<T = A> = Array<T>;
    var AR: ArrayConstructor;
    // Readonly Array - Creates a readonly array of the supplied element type.
    type ROARR<T> = readonly T[];
    type AB = ArrayBuffer;
    var AB: ArrayBufferConstructor;
    type I8 = Int8Array;
    var I8: Int8ArrayConstructor;
    type U8 = Uint8Array;
    var U8: Uint8ArrayConstructor;
    type U8C = Uint8ClampedArray;
    var U8C: Uint8ClampedArrayConstructor;
    type I16 = Int16Array;
    var I16: Int16ArrayConstructor;
    type U16 = Uint16Array;
    var U16: Uint16ArrayConstructor;
    type I32 = Int32Array;
    var I32: Int32ArrayConstructor;
    type U32 = Uint32Array;
    var U32: Uint32ArrayConstructor;
    type F32 = Float32Array;
    var F32: Float32ArrayConstructor;
    type F64 = Float64Array;
    var F64: Float64ArrayConstructor;
    type U32ARB = Uint32Array<ArrayBufferLike>;

    type AC = AbortController;
    var AC: typeof AbortController;
    
    type AS = AbortSignal;
    var AS: typeof AbortSignal;

    type AG<T = A, R = A, N = A> = AsyncGenerator<T, R, N>;

    type AE = AggregateError;
    var AE: typeof AggregateError;

    // #endregion
    //                                                                                                   [B]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type B = boolean;
    var B: BooleanConstructor;
    type SB = `${B}`;

    type BL = Blob;
    var BL: typeof Blob;
    type BF = Buffer;

    // #endregion
    //                                                                                                   [C]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type CAP<T extends S> = Capitalize<T>;
    type CP<T> = ConstructorParameters<T extends abstract new (...args: A) => A ? T : never>;

    // #endregion
    //                                                                                                   [D]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type D = Date;
    var D: DateConstructor;

    type DV = DataView;
    var DV: DataViewConstructor;

    type DF = DocumentFragment;
    var DF: typeof DocumentFragment;

    type DOMX = DOMException;
    var DOMX: typeof DOMException;

    type DOC = Document;
    var DOC: typeof Document;
    type DP = Disposable;
    type ADP = AsyncDisposable;


    // #endregion
    //                                                                                                   [E]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type E = Error;
    var E: ErrorConstructor;
    // Error Cause - Extends `Error` with an optional, typed `cause` property.
    type EC<T = A> = Error & { cause?: T };

    type EL = Element;
    var EL: typeof Element;

    type EV = typeof Event;
    var EV: typeof Event;
    
    type CE = typeof CustomEvent;
    var CE: typeof CustomEvent;
    
    type KE = typeof KeyboardEvent;
    var KE: typeof KeyboardEvent;
    
    type ME = typeof MouseEvent;
    var ME: typeof MouseEvent;
    
    type PE = typeof PointerEvent;
    var PE: typeof PointerEvent;

    function dURI(decodedURI: string): string; // DECODE URI
    function eURI(encodedURI: string): string; // ENCODE URI
    function esc(string: string): string;
    function unesc(string: string): string;

    type EX<T, U> = Exclude<T, U>;

    // #endregion
    //                                                                                                   [F]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type F<T = A> = Function | (() => T);
    var F: FunctionConstructor;
    // Function - Represents a function type, defaulting to a function accepting and returning `A`.
    type FN<T extends (...args: A) => A = (...args: A) => A> = T;
    
    type FL = File;
    var FL: typeof File;
    type FLR = FileReader;
    var FLR: typeof FileReader;

    type FS = FileSystem;
    var FS: { prototype: FileSystem };

    type FR<T = any> = FinalizationRegistry<T>;
    var FR: FinalizationRegistryConstructor;
    // Finalization Registry - Represents a `FinalizationRegistry` parameterized by its held value type.   
    type FREG<T extends O> = FinalizationRegistry<T>;

    type FD = FormData;
    var FD: typeof FormData;

    // #endregion
    //                                                                                                   [G]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type GEN<T = A, R = A, N = A> = Generator<T, R, N>;

    // #endregion
    //                                                                                                   [H]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type HE = HTMLElement;
    var HE: typeof HTMLElement;

    // #endregion
    //                                                                                                   [I]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type IT<T = A> = Iterator<T>;
    type ITI<T = A> = IterableIterator<T>;
    type I<T = A> = Iterable<T>;
    type AI<T = A> = AsyncIterable<T>;
    type AII<T = A> = AsyncIterableIterator<T>;
    type IO<T = A, R = A, N = A> = IteratorObject<T, R, N>;
    type AIO<T = A, R = A, N = A> = AsyncIteratorObject<T, R, N>;

    var INF: number; // INFINITY

    type ITO = IntersectionObserver;
    var ITO: typeof IntersectionObserver;

    // #endregion
    //                                                                                                   [J]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type J = JSON;
    var J: JSON;

    type JP = typeof JSON.parse;
    var JP: typeof JSON.parse;
    
    type JS = typeof JSON.stringify;
    var JS: typeof JSON.stringify;

    // #endregion
    //                                                                                                   [K]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type K<T = any> = keyof T;
    type SK = `${S & {}}`;

    // #endregion
    //                                                                                                   [L]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════

    // #endregion
    //                                                                                                   [M]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type M<K = A, V = A> = Map<K, V>;
    var M: MapConstructor;
    type WM<K extends O = O, V = A> = WeakMap<K, V>;
    var WM: WeakMapConstructor;
    type WEAKMAP<K extends O = O, V = A> = WeakMap<K, V>;

    type MC = MessageChannel;
    var MC: typeof MessageChannel;

    type MP = MessagePort;
    var MP: typeof MessagePort;

    type RND = typeof Math.random;
    var RND: typeof Math.random;
    
    type MX = typeof Math.max;
    var MX: typeof Math.max;
    
    type MN = typeof Math.min;
    var MN: typeof Math.min;
    
    type MF = typeof Math.floor;
    var MF: typeof Math.floor;
    
    type MCL = typeof Math.ceil;
    var MCL: typeof Math.ceil;
    
    type MR = typeof Math.round;
    var MR: typeof Math.round;
    
    type MT = typeof Math.trunc;
    var MT: typeof Math.trunc;

    type MO = MutationObserver;
    var MO: typeof MutationObserver;

    // Maybe - Allows a value to be its declared type, `null`, or `undefined`.  
    type MB<T> = T | null | UD;
    // Mutable - Removes `readonly` modifiers from all properties of a type.   
    type MUT<T> = { -readonly [K in keyof T]: T[K] };
    // #endregion
    //                                                                                                   [N]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type N = number;
    var N: NumberConstructor;
    type SN = `${N}`;

    var NaN: number;
    function pInt(string: string, radix?: number): number;
    function pFloat(string: string): number;
    type BI = bigint;
    var BI: BigIntConstructor;
    type SBI = `${bigint}`;

    type ND = Node;
    var ND: typeof Node;
    type NL<T extends Node = Element> = NodeListOf<T>;
    var NL: typeof NodeList;
    type NLE = NodeListOf<Element>;

    type NE = never;
    // Is Never - Checks whether a type is exactly `never`. 
    type INE<T> = [T] extends [never] ? true : false;
    type NIL<T> = T | null;
    type NU = null;
    type NR<T> = NonNullable<T>;

    type NNM = NamedNodeMap;
    var NNM: typeof NamedNodeMap;

    type NI<T> = NoInfer<T>;

    // #endregion
    //                                                                                                   [O]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type O = Object;
    var O: ObjectConstructor;
    type OI = typeof Object.is;
    var OI: typeof Object.is;
    
    type OK = typeof Object.keys;
    var OK: typeof Object.keys;
    
    type OV = typeof Object.values;
    var OV: typeof Object.values;
    
    type OE = typeof Object.entries;
    var OE: typeof Object.entries;
    
    type OF = typeof Object.freeze;
    var OF: typeof Object.freeze;
    
    type OA = typeof Object.assign;
    var OA: typeof Object.assign;
    type OB<T = A> = { [key: S]: T };
    type OBJ<T = A> = { [key: S]: T };

    type OO<T, U> = Omit<T, keyof U> & U;
    type OM<T, K extends keyof T> = Omit<T, K>;
    type OTT<T> = OmitThisParameter<T>;
    type CTX<T extends (...args: A) => A> = OmitThisParameter<T>;
    type XOR<T, U> = T | U extends O ? (Omit<T, keyof U> & U) | (Omit<U, keyof T> & T) : T | U;
    // Optional Value - Allows a value to be its declared type or `undefined`.
    type OPT<T> = T | UD;

    
    // #endregion
    //                                                                                                   [P]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type P<T = A> = Promise<T>;
    var P: PromiseConstructor;
    type AWD<T = A> = Awaited<T>;
    type AW<T> = T extends PromiseLike<infer U> ? AW<U> : T;
    type PL<T = A> = PromiseLike<T>;
    type PSR<T> = PromiseSettledResult<T>;
    type PFR<T> = PromiseFulfilledResult<T>;
    type PRR = PromiseRejectedResult;

    type PK = PropertyKey;
    type PX<T extends object = object> = T; // type side, if you want symmetry
    var PX: ProxyConstructor;
    // globalThis.PX = Proxy;

    type PO = PerformanceObserver;
    var PO: typeof PerformanceObserver;

    type PA<T> = Partial<T>;


    // #endregion
    //                                                                                                   [Q]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════

    // #endregion
    //                                                                                                   [R]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type REQ<T> = Required<T>;
    type RM<K = A, V = A> = ReadonlyMap<K, V>;
    type RS<T = A> = ReadonlySet<T>;
    type RO<T> = Readonly<T>;
    type ROA<T extends A[]> = ReadonlyArray<T[N]>;
    // Readonly Object - Makes every property of an object readonly.
    type ROBJ<T> = { readonly [K in keyof T]: T[K] };

    type R<K extends PropertyKey = A, V = A> = Record<K, V>;

    type RE = RangeError;
    var RE: typeof RangeError;
    type RA = Range;
    var RA: typeof Range;

    type REG = RegExp;
    var REG: RegExpConstructor;

    type RFE = ReferenceError;
    var RFE: typeof ReferenceError;

    type RT<T extends (...args: A) => A> = ReturnType<T>;
    type RET<T extends (...args: A) => A> = ReturnType<T>;

    type RSO = ResizeObserver;
    var RSO: typeof ResizeObserver;


    // #endregion
    //                                                                                                   [S]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type S = string;
    var S: StringConstructor;
    // String Type - Retains `T` only when it is assignable to `string`; otherwise returns `never`. 
    type STR<T> = T extends S ? T : never;
    // String Keys - Extracts the string keys from an object's key union.  
    type SKA<T> = keyof T & S;

    type SY = symbol;
    var SY: SymbolConstructor;

    type SE = SyntaxError;
    var SE: typeof SyntaxError;

    type ST<T = A> = Set<T>;
    var ST: SetConstructor;
    type WST<T extends O = O> = WeakSet<T>;
    var WST: WeakSetConstructor;

    // #endregion
    //                                                                                                   [T]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type TT<T extends (this: A, ...args: A) => A> = ThisParameterType<T>;

    type TD = TextDecoder;
    var TD: TextDecoder;
    type TE = TextEncoder;
    var TE: TextEncoder;

    type TYE = TypeError;
    var TYE: typeof TypeError;

    type TW = TreeWalker;
    var TW: typeof TreeWalker;
    // #endregion
    //                                                                                                   [U]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type U = unknown;
    // Is Unknown - Checks whether a type is exactly `unknown`. 
    type IU<T> = EQ<T, unknown>;
    type UD = undefined;

    type UNC<T extends S> = Uncapitalize<T>;
    type UPC<T extends S> = Uppercase<T>;

    type URI = URL;
    var URL: typeof URL;
    type URLP = URLPattern;
    var URLP: typeof URLPattern;


    type UE = URIError;
    var UE: typeof URIError;

    type UF<T = A> = T | (() => T);
    var UF: typeof UFI;
    type UFO<T = A> = UF<T> | UD;
    var UFO: typeof UFOI;
    type UFU<T = A> = T | ((old: T) => T);
    var UFU: typeof UFUI;
    type UFD<T = A> = T | UD;
    var UFD: typeof UFDI;
    type UFM<T = A> = T | null | UD;
    var UFM: typeof UFMI;
    type UFA<T = A> = T | P<T> | (() => T | P<T>);
    var UFA: typeof UFAI;
    type UFP<T = A> = T | P<T>;
    var UFP: typeof UFPI;

    // Is Union -Checks whether a type contains multiple distinct union members. 
    type IUN<T, C = T> = T extends C ? ([C] extends [T] ? false : true) : never;
    

    // #endregion
    //                                                                                                   [V]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type V = void;

    // #endregion
    //                                                                                                   [W]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type WC = "*";
    type WR<T extends O> = WeakRef<T>;
    var WR: WeakRefConstructor;
    type WIN = Window;

    type WS = WebSocket;
    var WS: typeof WebSocket;

    type W = Worker;
    var W: typeof Worker;

    // #endregion
    //                                                                                                   [X]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    // X

    // #endregion
    //                                                                                                   [Y]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════

    // #endregion
    //                                                                                                   [Z]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════



    // Async Function - Converts a function's return type into a Promise of its awaited return type, preserving its parameters.
    type ASF<T extends (...args: A) => A> = (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;
    // Deep Readonly - Recursively makes every property in an object and its nested objects readonly. 
    type DPR<T> = { readonly [K in keyof T]: DPR<T[K]> };
    // Dictionary - Creates a string-keyed record whose values use the supplied type.
    type DC<T = A> = Record<S, T>;
    // Type Equality - Tests whether two types are exactly equal, returning `true` or `false`.    
    type EQ<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
    // Extract Array Type - Extracts the element type from an array; otherwise returns `never`.
    type EXT<T> = T extends (infer U)[] ? U : never;

    // Include / Extract - extracts from `T` the union members assignable to `U`. 
    type IN<T, U> = Extract<T, U>;
    // Instance Type - Extracts the instance type produced by a constructor.
    type ICT<T extends abstract new (...args: A) => A> = T extends abstract new (...args: A) => infer R ? R : A;
    // Indexed Element Type - Extracts the element type from a readonly or mutable array. 
    type IDX<T> = T extends readonly (infer U)[] ? U : never;

    // Pick - Selects only the specified properties from an object type. 
    type PI<T, K extends keyof T> = Pick<T, K>;

    // Template Length - Extracts the literal length of a string type. 
    type TL<T extends S> = T["length"];
    // Tuple - Converts an array type into a tuple representation while preserving its element types.  
    type TUP<T extends A[] = A[]> = [...T];
    // Values - Produces a union of all property value types in an object.
    type VAL<T> = T[keyof T];
  
    // Dictionary - Creates a string-indexed object whose values may also be `undefined`. 
    type DICT<T = A> = { [key: S]: T | UD };
    
    // Value Of - Produces a union of all property value types in an object. 
    type VALOF<T> = T[keyof T];
    // Keys - Extracts the keys of a type using `keyof`. 
    type KEYS<T> = keyof T;
    // Union - Distributes over a type union and retains its members. 
    type UNION<T> = T extends A ? T : never;




    // Non-empty Tuple - Creates a readonly tuple requiring at least one element.  
    type NONEMPTY<T> = readonly [T, ...T[]];
    // First Element - Extracts the first element type of a tuple.
    type FIRST<T extends readonly A[]> = T extends readonly [infer H, ...A[]] ? H : never;
    // Last Element - Extracts the last element type of a tuple.
    type LAST<T extends readonly A[]> = T extends readonly [...A[], infer L] ? L : never;
    // Tuple Length - Extracts the length type of a tuple, including literal lengths. 
    type LENGTH<T extends readonly A[]> = T["length"];
    // String Replace - Replaces the first matching substring in a string literal type.  
    type REPLACE<S0 extends S, F extends S, T extends S> = S0 extends `${infer L}${F}${infer R}` ? `${L}${T}${R}` : S0;
    // String Split - Recursively splits a string literal type into a tuple using a delimiter.  
    type SPLIT<S0 extends S, D extends S> = S0 extends `${infer L}${D}${infer R}` ? [L, ...SPLIT<R, D>] : [S0];
    // String Join - Joins a tuple of string literal types into one string literal using a delimiter. 
    type JOIN<T extends readonly S[], D extends S = ""> = T extends readonly [infer H extends S, ...infer R extends S[]] ? (R extends [] ? H : `${H}${D}${JOIN<R, D>}`) : "";
    // Function Arguments - Extracts the parameter tuple of a function type. 
    type ARGS<T extends (...args: A) => A> = Parameters<T>;
    // Type Assertion - Requires a type to satisfy `true`, producing a compile-time constraint.
    type ASSERT<T extends true> = T;
    // Branded Type - Adds a readonly brand property to distinguish otherwise structurally identical types. 
    type BRAND<T, N extends S> = T & { readonly __brand: N };
    // Difference - Removes union members of `T` that are assignable to `U`.   
    type DIFF<T, U> = T extends U ? never : T;
    // Deep -  Recursively applies a type transformation to nested object properties.
    type DEEP<T> = T extends O ? { [K in keyof T]: DEEP<T[K]> } : T;
    // Deep Partial - Recursively makes every nested object property optional.
    type DEEPP<T> = T extends O ? { [K in keyof T]?: DEEPP<T[K]> } : T;
    // Type Guard - Retains `T` only when it is assignable to `U`; otherwise returns `never`. 
    type GUARD<T, U> = T extends U ? T : never;
    // Instance - Extracts the instance type of a constructable type.
    type INST<T> = InstanceType<T extends abstract new (...args: A) => A ? T : never>;
    // Lowercase - Converts a string literal type to lowercase. 
    type LOWER<T extends S> = Lowercase<T>;
    // Parameters - Extracts a function's parameter tuple.
    type PARAMS<T extends (...args: A) => A> = T extends (...args: infer P) => A ? P : never;
    
    // #endregion
    //                                                                                               [OTHER]
    // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
    type AO = Record<S, A>;
    type CHAIN = "chain" | "rechain";
    type SU = string | undefined;
    type XS = any;
    type NB = bigint;
    type CACHE_TYPE = "sauron" | "disruptor" | "cache" | "rifts" | "sclass" | "cookie" | "scookie" | "kvdb" | "rdb" | "tdb" | "bdb" | "gdb" | "idb" | "hpd" | undefined;
    type CACHE = CACHE_TYPE;
    // #endregion
}



