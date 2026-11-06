import { MaybePromisei, MaybePromise } from './index'
export { }


declare global {
    // #region ═════════════════════════════════════════════════════════════ UPGRADED BASE ═══
    type MaybePromise<R = any> = R;
    var MaybePromise: typeof MaybePromisei;
    type BM<K = A, V = A> = BYTEOP_MAP_TYPE<K, V>// aliasing byteop map down to bm, a javascript map conversion to byteop code
    type BYTEOP_MAP_TYPE<K = A, V = A> = {
        pidToSlot: I32;
        set(k: K, v: V): V;
        get(k: K): V | undefined;
        has(k: K): B;
        delete(k: K): B;
        readonly size: N;
    };
    // #endregion
    // #region ══════════════════════════════════════════════════════════════════════ ALIAS ═══
    type A = any

    type B = boolean
    var B: BooleanConstructor;
    type SB = `${B}`

    type BL = Blob
    type BF = Buffer

    type AR<T= A> = Array<T>
    var AR: ArrayConstructor;
    type AB = ArrayBuffer
    var AB: ArrayBufferConstructor;
    // C
    type D = Date
    var D: DateConstructor;

    type E = Error
    var E: ErrorConstructor;

    type EV = Event

    function dURI(encodedURI: string): string; // DECODE URI
    function eURI(uri: string): string; // ENCODE URI
    function esc(string: string): string;
    function unesc(string: string): string;

    type F<T = A> = Function | (() => T);
    var F: FunctionConstructor;
    // G
    // H

    type I<T = A> = Iterable<T>;
    type AI<T = A> = AsyncIterable<T>
    type AII<T = A> = AsyncIterableIterator<T>
    type IO<T = A, R = A, N = A> = IteratorObject<T, R, N>
    type AIO<T = A, R = A, N = A> = AsyncIteratorObject<T, R, N>

    var INF: number; // INFINITY

    type J = JSON
    var J: JSON;

    type K = keyof A
    type SK = `${S & {}}`
    // L
    type M<K = A, V = A> = Map<K, V>;
    var M: MapConstructor;
    type WM<K extends O = O, V = A> = WeakMap<K, V>
    var WM: WeakMapConstructor;
    type WEAKMAP<K extends O = O, V = A> = WeakMap<K, V>

    type N = number
    var N: NumberConstructor;
    type SN = `${N}`

    var NaN: number;
    function pInt(string: string, radix?: number): number;
    function pFloat(string: string): number;
    type BI = bigint
    type BIG = BigInt
    type SBIG = `${bigint}`

    type ND = Node;
    type NA<T = A> = NodeListOf<T>
    type NLE = NodeListOf<Element>

    type NE = never
    type NIL<T> = T | null
    type NU = null
    type NR<T> = NonNullable<T>

    type O = Object
    var O: ObjectConstructor;
    type OB<T = A> = { [key: S]: T }
    type OBJ<T = A> = { [key: S]: T }

    type OV<T, U> = Omit<T, keyof U> & U
    type OM<T, K extends keyof T> = Omit<T, K>
    type OTT<T> = OmitThisParameter<T>
    type CTX<T extends (...args: A) => A> = OmitThisParameter<T>
    type XOR<T, U> = (T | U) extends O ? (Omit<T, keyof U> & U) | (Omit<U, keyof T> & T) : T | U

    type P<T = A> = Promise<T>;
    declare var P: PromiseConstructor;
    type AWD<T = A> = Awaited<T>;
    type AW<T> = T extends PromiseLike<infer U> ? AWAIT<U> : T
    type PL<T = A> = PromiseLike<T>
    type PSR<T> = PromiseSettledResult<T>
    type PFR<T> = PromiseFulfilledResult<T>
    type PRR = PromiseRejectedResult

    type PK = PropertyKey;
    type PX<T extends object = object> = T;   // type side, if you want symmetry
    var PX: ProxyConstructor;
    // globalThis.PX = Proxy;

    // Q
    type RE<T> = Required<T>
    type RM<K = A, V = A> = ReadonlyMap<K, V>
    type RS<T = A> = ReadonlySet<T>
    type RO<T> = Readonly<T>
    type ROA<T extends A[]> = ReadonlyArray<T[N]>

    type R<K extends PropertyKey = A, V = A> = Record<K, V>;

    type REG = RegExp
    var REG: RegExpConstructor;

    type RT<T extends (...args: A) => A> = ReturnType<T>
    type RET<T extends (...args: A) => A> = ReturnType<T>

    type S = string
    var S: StringConstructor;

    type SY = symbol
    type SYM = Symbol

    type ST<T = A> = Set<T>;
    var ST: SetConstructor;
    type WS<T extends O = O> = WeakSet<T>
    var WS: WeakSetConstructor;
    // T
    type TT<T extends (this: A, ...args: A) => A> = ThisParameterType<T>

    type U = unknown
    type UD = undefined

    type UNC<T extends S> = Uncapitalize<T>
    type UPC<T extends S> = Uppercase<T>

    type URI = URL
    type URL = URL

    type UF<T = A> = T | (() => T);

    type V = void
    type W = "*";

    type WR<T extends O> = WeakRef<T>
    var WR: WeakRefConstructor;
    type WIN = Window

    // X
    // Y
    // Z
    type I8 = Int8Array
    var I8: Int8ArrayConstructor;
    type U8 = Uint8Array
    var U8: Uint8ArrayConstructor;
    type U8C = Uint8ClampedArray
    var U8C: Uint8ClampedArrayConstructor;
    type I16 = Int16Array
    var I16: Int16ArrayConstructor;
    type U16 = Uint16Array
    var U16: Uint16ArrayConstructor;
    type I32 = Int32Array
    var I32: Int32ArrayConstructor;
    type U32 = Uint32Array
    var U32: Uint32ArrayConstructor;
    type F32 = Float32Array
    var F32: Float32ArrayConstructor;
    type F64 = Float64Array
    var F64: Float64ArrayConstructor;
    type U32ARB =  Uint32Array<ArrayBufferLike>



  
    type AG<T = A, R = A, N = A> = AsyncGenerator<T, R, N>
    type AGE = AggregateError
    type ABC = AbortController
    type ABS = AbortSignal
    type ASF<T extends (...args: A) => A> = (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>
    type CAP<T extends S> = Capitalize<T>
    type CON<T> = ConstructorParameters<T extends abstract new (...args: A) => A ? T : never>
    type CE = CustomEvent
    type DM = Document
    type DPR<T> = { readonly [K in keyof T]: DEEPR<T[K]> }
    type DC<T = A> = Record<S, T>
    type DV = DataView
    var DV: DataViewConstructor;
    type EL = Element
    type EQ<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
    type EX<T, U> = Exclude<T, U>
    type EXT<T> = T extends (infer U)[] ? U : never
    type FR = DocumentFragment
    type FD = FormData
    type FN<T extends (...args: A) => A = (...args: A) => A> = T
    type GEN<T = A, R = A, N = A> = Generator<T, R, N>
    type HE = HTMLElement
    type IN<T, U> = Extract<T, U>
    type IT<T extends abstract new (...args: A) => A> = T extends abstract new (...args: A) => infer R ? R : A;
    type IDX<T> = T extends readonly (infer U)[] ? U : never
    type ITR<T = A> = IterableIterator<T>
    type ITOR<T = A> = Iterator<T>
    type KE = KeyboardEvent
    type KOF<T> = keyof T
    type MAP<K = A, V = A> = Map<K, V>
    type MUT<T> = { -readonly [K in keyof T]: T[K] }
    type MAY<T> = T | null | UD
    type ME = MouseEvent
    type NOI<T> = NoInfer<T>
    type OPT<T> = T | UD
    type PA<T> = Partial<T>
    type PE = PointerEvent
    type PI<T, K extends keyof T> = Pick<T, K>
    type RT<T extends (...args: A) => A> = T extends (...args:A) => infer R ? R :A;
    type STR<T> = T extends S ? T : never
    type SK<T> = keyof T & S
    type TL<T extends S> = T['length']
    type TUP<T extends A[] = A[]> = [...T]
    type VAL<T> = T[keyof T]

    type DOMX = DOMException
    type FREG<T extends O> = FinalizationRegistry<T>
    type DISP = Disposable
    type ADISP = AsyncDisposable
    type ERRCAUSE<T = A> = Error & { cause?: T }
    type DICT<T = A> = { [key: S]: T | UD }
    type ROOBJ<T> = { readonly [K in keyof T]: T[K] }
    type MUTOBJ<T> = { -readonly [K in keyof T]: T[K] }
    type VALOF<T> = T[keyof T]
    type KEYS<T> = keyof T
    type UNION<T> = T extends A ? T : never

    type ISNEVER<T> = [T] extends [never] ? true : false
    type ISANY<T> = 0 extends (1 & T) ? true : false
    type ISUNKNOWN<T> = EQ<T, unknown>
    type ISUNION<T, C = T> = T extends C ? ([C] extends [T] ? false : true) : never
    
    type ROARR<T> = readonly T[]
    type NONEMPTY<T> = readonly [T, ...T[]]
    type FIRST<T extends readonly A[]> = T extends readonly [infer H, ...A[]] ? H : never
    type LAST<T extends readonly A[]> = T extends readonly [...A[], infer L] ? L : never
    type LENGTH<T extends readonly A[]> = T['length']
    type REPLACE<S0 extends S, F extends S, T extends S> = S0 extends `${infer L}${F}${infer R}` ? `${L}${T}${R}` : S0
    type SPLIT<S0 extends S, D extends S> = S0 extends `${infer L}${D}${infer R}` ? [L, ...SPLIT<R, D>] : [S0]
    type JOIN<T extends readonly S[], D extends S = ''> = T extends readonly [infer H extends S, ...infer R extends S[]] ? R extends [] ? H : `${H}${D}${JOIN<R, D>}` : ''
    type ARGS<T extends (...args: A) => A> = Parameters<T>
    type ASYNCGEN<T = A, R = A, N = A> = AsyncGenerator<T, R, N>
    type ASSERT<T extends true> = T
    type BRAND<T, N extends S> = T & { readonly __brand: N }
    type DIFF<T, U> = T extends U ? never : T
    type DEEP<T> = T extends O ? { [K in keyof T]: DEEP<T[K]> } : T
    type DEEPP<T> = T extends O ? { [K in keyof T]?: DEEPP<T[K]> } : T
    type GUARD<T, U> = T extends U ? T : never
    type INST<T> = InstanceType<T extends abstract new (...args: A) => A ? T : never>
    type LOWER<T extends S> = Lowercase<T>
    type PARAMS<T extends (...args: A) => A> = T extends (...args: infer P) => A ? P : never;
    
    
    


    // #endregion
    // #region  
    type AO = Record<S, A>;
    type AS = { self: A;[key: S]: A };
    type AF = (ctx: AS) => AO;
    type AOAF = AO | AF;
    type CHAIN = "chain" | "rechain";
    type SU = string | undefined
    type XS = any
    type Wildcard = "*";
    type NB = bigint
    type CACHE_TYPE = 
    "sauron" | 
    "disruptor" | 
    "cache" |
    "rifts" | 
    'sclass'| 
    'cookie' | 
    'scookie' | 
    'kvdb' | 
    'rdb' | 
    'tdb' | 
    'bdb' | 
    'gdb' | 
    'idb' | 
    'hpd' | 
    undefined;
    type CACHE  = CACHE_TYPE
    // #endregion
}

/**	public createHook<T>(hookName: string, sauronId: string, initializer: () => HookState, updater: (state: HookState, key: string, notify: (key: string) => void) => T, triggerRender: boolean = true): T {
 if (isReact === true && IS_THE_WIZARD === false) {
     try {
         const isReact = this._isReactRenderContext();
         const { instance, forceUpdate } = isReact && this._adapter ? this._adapter.getComponentInstance() : { instance: this.getCurrentComponent(), forceUpdate: undefined };

         const component = instance;

         // ─── THE TARGETED FIX ───────────────────────────────────────────────────────
         // Use sequential indexing when in React so it matches React's rendering slots.
         // Otherwise, use Sauron's default compilation ID string.
         const stableSlotId = isReact ? `seq-${this._reactHookCursor++}` : sauronId;
         const key = `${component.id}:${hookName}:${stableSlotId}`;
         // ────────────────────────────────────────────────────────────────────────────
         if (!this._components.has(component.id)) {
             this._components.set(component.id, component);
         }

         if (!component.hooks.has(key)) {
             const state = initializer();
             component.hooks.set(key, state);
             if (component.render) {
                 const unsub = this.subscribeToHook(key, () => component.render?.());
                 component.unmount.add(unsub);
             }
         }

         if (isReact && this._adapter && forceUpdate) {
             this._adapter.onHookSubscribe(key, forceUpdate);
         }

         const notify = (k: string) => {
             if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
                 const state = component.hooks.get(k);
                 this.devRecord(component.id, hookName, stableSlotId, k, state?.value);
             }
             this.notifyHook(k);
         };

         const hookState = component.hooks.get(key)!;
         this.beginHookDependencyCapture(hookState);
         try {
             return updater(hookState, key, notify);
         } finally {
             this.endHookDependencyCapture();
         }
     } catch (e: A) {
         //  log(`[THE_CLOUD][CREATE_HOOK]`, { error: e, }, t.error)
         return e.error;
     }
 } else {
     try {
         const component = this.getCurrentComponent();
         const key = `${component.id}:${hookName}:${sauronId}`;

         if (!this._components.has(component.id)) {
             this._components.set(component.id, component);
         }

         if (!component.hooks.has(key)) {
             const state = initializer();
             component.hooks.set(key, state);

             if (triggerRender && component.render) {
                 const unsub = this.subscribeToHook(key, () => component.render?.());
                 component.unmount.add(unsub);
             }
         }

         const notify = (k: string) => {
             if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
                 const state = component.hooks.get(k);
                 this.devRecord(component.id, hookName, sauronId, k, state?.value);
             }
             if (triggerRender) this.notifyHook(k);
         };

         const hookState = component.hooks.get(key)!;
         this.beginHookDependencyCapture(hookState);
         try {
             return updater(hookState, key, notify);
         } finally {
             this.endHookDependencyCapture();
         }
     } catch (e: A) {
         // log(`[THE_CLOUD][CREATE_HOOK]`, { error: e, }, t.error)
         return e.error;
     }
 }
} */
