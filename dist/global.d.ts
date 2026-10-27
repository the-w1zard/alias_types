import { MaybePromise } from './index'
export { }

declare global {
    // #region ═════════════════════════════════════════════════════════════ UPGRADED BASE ═══
    type MaybePromise<R = any> = R;
    var MaybePromise: typeof MaybePromise;
    // #endregion
    // #region ══════════════════════════════════════════════════════════════════════ ALIAS ═══
    type A = any
    type B<T = A> = boolean
    // C
    type D<T = A> = Date
    type E<T = A> = Error
    type F<T = A> = Function | (() => T);
    // G
    // H
    type I<T = A> = Iterable<T>;
    type J<T = A> = JSON
    type K = keyof A
    // L
    type M<K = A, V = A> = Map<K, V>;
    type N<T = A> =number
    type O<T = A> = Object
    type P<T = A> = Promise<T>;
    type PK<T = A> = PropertyKey;
    
    type AW<T = A> = Awaited<T>;
    type PL<T = A> = PromiseLike<T>
    // Q
    type R<K extends PropertyKey = A, V = A> = Record<K, V>;
    type S<T = A> = string
    // T
    type U<T = A> = unknown
    type V<T = A> = void
    type W = "*";
    // X
    // Y
    // Z
    type BM<K = A, V = A> = BYTEOP_MAP_TYPE<K, V>// aliasing byteop map down to bm, a javascript map conversion to byteop code
    type BYTEOP_MAP_TYPE<K = A, V = A> = {
        pidToSlot: I32;
        set(k: K, v: V): V;
        get(k: K): V | undefined;
        has(k: K): B;
        delete(k: K): B;
        readonly size: N;
    };

    type ST<T = A> = Set<T>;
    type MP<K = A, V = A> = Map<K, V>;

  
    type AI<T = A> = AsyncIterable<T>
    type AR<T= A> = Array<T>
    type AB<T = A> = ArrayBuffer
    type AG<T = A, R = A, N = A> = AsyncGenerator<T, R, N>
    type AGE = AggregateError
    type ABC = AbortController
    type ABS = AbortSignal
    type ASF<T extends (...args: A) => A> = (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>
    type BI<T = A> = bigint
    type BIG<T = A> = BigInt
    type BL<T = A> = Blob
    type BU<T = A> = Buffer
    type CAP<T extends S> = Capitalize<T>
    type CON<T> = ConstructorParameters<T extends abstract new (...args: A) => A ? T : never>
    type CTX<T extends (...args: A) => A> = OmitThisParameter<T>
    type CE<T = A> = CustomEvent
    type DE<T = A> = Document
    type DPR<T> = { readonly [K in keyof T]: DEEPR<T[K]> }
    type DC<T = A> = Record<S, T>
    type DV<T = A> = DataView
    type EL<T = A> = Element
    type ERR<T = A> = Error
    type EV<T = A> = Event
    type EQ<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
    type EX<T, U> = Exclude<T, U>
    type EXT<T> = T extends (infer U)[] ? U : never
    type F64<T = A> = Float64Array
    type FR<T = A> = DocumentFragment
    type FD<T = A> = FormData
    type FN<T extends (...args: A) => A = (...args: A) => A> = T
    type GEN<T = A, R = A, N = A> = Generator<T, R, N>
    type HE<T = A> = HTMLElement
    type I32<T = A> = Int32Array
    type IN<T, U> = Extract<T, U>
    type IT<T extends abstract new (...args: A) => A> = T extends abstract new (...args: A) => infer R ? R : A;
    type IDX<T> = T extends readonly (infer U)[] ? U : never
    type ITR<T = A> = IterableIterator<T>
    type ITOR<T = A> = Iterator<T>
    type KE<T = A> = KeyboardEvent
    type KOF<T> = keyof T
    type MAP<K = A, V = A> = Map<K, V>
    type MUT<T> = { -readonly [K in keyof T]: T[K] }
    type MAY<T> = T | null | UD
    type ME<T = A> = MouseEvent
    type NOI<T> = NoInfer<T>
    type ND<T = A> = Node;
    type NE<T = A> = never
    type NLE<T = A> = NodeListOf<Element>
    type NIL<T> = T | null
    type NR<T> = NonNullable<T>
    type NA<T = A> = NodeListOf<T>
    type NU<T = A> = null
    type OM<T, K extends keyof T> = Omit<T, K>
    type OPT<T> = T | UD
    type OB<T = A> = { [key: S]: T }
    type OBJ<T = A> = { [key: S]: T }
    type OV<T, U> = Omit<T, keyof U> & U
    type PSR<T> = PromiseSettledResult<T>
    type PFR<T> = PromiseFulfilledResult<T>
    type PRR = PromiseRejectedResult
    type PA<T> = Partial<T>
    type PE<T = A> = PointerEvent
    type PI<T, K extends keyof T> = Pick<T, K>
    type REG<T = A> = RegExp
    type RE<T> = Required<T>
    type RM<K = A, V = A> = ReadonlyMap<K, V>
    type RS<T = A> = ReadonlySet<T>
    type RET<T extends (...args: A) => A> = ReturnType<T>
    type RO<T> = Readonly<T>
    type ROA<T extends A[]> = ReadonlyArray<T[N]>
    type RT<T extends (...args: A) => A> = T extends (...args:A) => infer R ? R :A;
    type SETOF<T = A> = Set<T>
    type STR<T> = T extends S ? T : never
    type SK<T> = keyof T & S
    type SY<T = A> = symbol
    type SYM<T = A> = Symbol
    type TL<T extends S> = T['length']
    type TUP<T extends A[] = A[]> = [...T]
    type UD<T = A> = undefined
    type UN<T = A> = undefined
    type U16 = Uint16Array
    type I8 = Int8Array
    type I16 = Int16Array
    type F32 = Float32Array
    type U8C = Uint8ClampedArray
    type U8<T = A> = Uint8Array
    type U32<T = A> = Uint32Array
    type U32ARB<T = A> =  Uint32Array<ArrayBufferLike>
    type URI<T = A> = URL
    type URLT<T = A> = URL
    type VAL<T> = T[keyof T]
    type WS<T extends O = O> = WeakSet<T>
    type WM<K extends O = O, V = A> = WeakMap<K, V>
    type WIN<T = A> = Window
    type XOR<T, U> = (T | U) extends O ? (Omit<T, keyof U> & U) | (Omit<U, keyof T> & T) : T | U


    type DOMX = DOMException
    type WREF<T extends O> = WeakRef<T>
    type FREG<T extends O> = FinalizationRegistry<T>
    type DISP = Disposable
    type ADISP = AsyncDisposable
    type ITOBJ<T = A, R = A, N = A> = IteratorObject<T, R, N>
    type AITOBJ<T = A, R = A, N = A> = AsyncIteratorObject<T, R, N>
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
    type ASYNCITR<T = A> = AsyncIterableIterator<T>
    type ASYNCIT<T = A> = AsyncIterable<T>
    type ASSERT<T extends true> = T
    type AWAIT<T> = T extends PromiseLike<infer U> ? AWAIT<U> : T
    type BRAND<T, N extends S> = T & { readonly __brand: N }
    type DIFF<T, U> = T extends U ? never : T
    type DEEP<T> = T extends O ? { [K in keyof T]: DEEP<T[K]> } : T
    type DEEPP<T> = T extends O ? { [K in keyof T]?: DEEPP<T[K]> } : T
    type GUARD<T, U> = T extends U ? T : never
    type INST<T> = InstanceType<T extends abstract new (...args: A) => A ? T : never>
    type LOWER<T extends S> = Lowercase<T>
    type PARAMS<T extends (...args: A) => A> = T extends (...args: infer P) => A ? P : never;
    type PROM<T = A> = Promise<T>
    type STRNUM<T = A> = `${N}`
    type STRBIG<T = A> = `${bigint}`
    type STRBOOL<T = A> = `${B}`
    type STRKEY<T = A> = `${S & {}}`
    type THIS<T extends (this: A, ...args: A) => A> = ThisParameterType<T>
    type OTHIS<T> = OmitThisParameter<T>
    type UNCAP<T extends S> = Uncapitalize<T>
    type UPPER<T extends S> = Uppercase<T>
    type WEAKMAP<K extends O = O, V = A> = WeakMap<K, V>
    type WEAKSET<T extends O = O> = WeakSet<T>

    // #endregion
}

