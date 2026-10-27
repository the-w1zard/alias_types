# Type Alias Reference

A global TypeScript type-alias collection that provides compact names for built-in JavaScript types, TypeScript utility types, DOM APIs, asynchronous primitives, collection types, and advanced type-level operations.

The aliases are declared globally, allowing them to be used throughout the project without repeatedly importing individual types. The module also exposes `MaybePromise` through its public entry point.

## Import
Also has maybe promise defined for easy access.
```
import { MaybePromise } from './index';
```

Global aliases are available without imports once the declaration file is included in the TypeScript compilation.

```
type UserMap = MAP<string, User>;
type MaybeUser = MAY<User>;
type UserKeys = KEYS<User>;
type UserResult = PROM<User>;
```

## Quick Reference

### 1. Core aliases

| Alias              | Resolves to             | Purpose                                  |
| ------------------ | ----------------------- | ---------------------------------------- |
| `A`                | `any`                   | Unrestricted type                        |
| `B<T>`             | `boolean`               | Boolean                                  |
| `D<T>`             | `Date`                  | Date instance                            |
| `E<T>` / `ERR<T>`  | `Error`                 | Error instance                           |
| `F<T>`             | `Function \| (() => T)` | Function or typed zero-argument callback |
| `I<T>`             | `Iterable<T>`           | Iterable values                          |
| `J<T>`             | `JSON`                  | JSON API                                 |
| `K`                | `keyof A`               | Keys of `any`                            |
| `N<T>`             | `number`                | Numeric value                            |
| `O<T>`             | `Object`                | Object type                              |
| `P<T>` / `PROM<T>` | `Promise<T>`            | Promise                                  |
| `PK<T>`            | `PropertyKey`           | String, number, or symbol key            |
| `S<T>`             | `string`                | String                                   |
| `U<T>`             | `unknown`               | Unknown value                            |
| `V<T>`             | `void`                  | No meaningful return value               |
| `W`                | `"*"`                   | Literal wildcard                         |
| `NE<T>`            | `never`                 | Impossible type                          |
| `NU<T>`            | `null`                  | Null                                     |
| `UD<T>` / `UN<T>`  | `undefined`             | Undefined                                |

### 2. Collections and data structures

| Alias                             | Resolves to                         | Purpose                                                                        |
| --------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| `AR<T>`                           | `Array<T>`                          | Array                                                                          |
| `TUP<T>`                          | `[...T]`                            | Mutable tuple copy                                                             |
| `ROARR<T>`                        | `readonly T[]`                      | Readonly array                                                                 |
| `NONEMPTY<T>`                     | `readonly [T, ...T[]]`              | Nonempty readonly array                                                        |
| `M<K,V>` / `MAP<K,V>` / `MP<K,V>` | `Map<K,V>`                          | Map                                                                            |
| `RM<K,V>`                         | `ReadonlyMap<K,V>`                  | Readonly map                                                                   |
| `ST<T>` / `SETOF<T>`              | `Set<T>`                            | Set                                                                            |
| `RS<T>`                           | `ReadonlySet<T>`                    | Readonly set                                                                   |
| `WM<K,V>` / `WEAKMAP<K,V>`        | `WeakMap<K,V>`                      | Weak-key map                                                                   |
| `WS<T>` / `WEAKSET<T>`            | `WeakSet<T>`                        | Weak set                                                                       |
| `R<K,V>`                          | `Record<K,V>`                       | Keyed object                                                                   |
| `DC<T>`                           | `Record<string,T>`                  | String-keyed record                                                            |
| `OB<T>` / `OBJ<T>`                | `{ [key: string]: T }`              | String-keyed object                                                            |
| `DICT<T>`                         | `{ [key: string]: T \| undefined }` | Dictionary with optional values                                                |
| `BM<K,V>`                         | `BYTEOP_MAP_TYPE<K,V>`              | ByteOp map interface                                                           |
| `BYTEOP_MAP_TYPE<K,V>`            | Custom object                       | Map-like interface with `pidToSlot`, `set`, `get`, `has`, `delete`, and `size` |

### 3. Promise and asynchronous aliases

| Alias                           | Resolves to                             | Purpose                     |
| ------------------------------- | --------------------------------------- | --------------------------- |
| `AW<T>`                         | `Awaited<T>`                            | Unwrap awaited types        |
| `PL<T>`                         | `PromiseLike<T>`                        | Promise-compatible value    |
| `AI<T>` / `ASYNCIT<T>`          | `AsyncIterable<T>`                      | Async iterable              |
| `ASYNCITR<T>`                   | `AsyncIterableIterator<T>`              | Async iterator              |
| `GEN<T,R,N>`                    | `Generator<T,R,N>`                      | Generator                   |
| `AG<T,R,N>` / `ASYNCGEN<T,R,N>` | `AsyncGenerator<T,R,N>`                 | Async generator             |
| `ITR<T>`                        | `IterableIterator<T>`                   | Iterable iterator           |
| `ITOR<T>`                       | `Iterator<T>`                           | Iterator                    |
| `ITOBJ<T,R,N>`                  | `IteratorObject<T,R,N>`                 | Iterator object             |
| `AITOBJ<T,R,N>`                 | `AsyncIteratorObject<T,R,N>`            | Async iterator object       |
| `PSR<T>`                        | `PromiseSettledResult<T>`               | Settled promise result      |
| `PFR<T>`                        | `PromiseFulfilledResult<T>`             | Fulfilled promise result    |
| `PRR`                           | `PromiseRejectedResult`                 | Rejected promise result     |
| `ASF<T>`                        | Async function returning awaited result | Async wrapper function type |
| `MAY<T>`                        | `T \| null \| undefined`                | Nullable and optional value |
| `NIL<T>`                        | `T \| null`                             | Nullable value              |
| `OPT<T>`                        | `T \| undefined`                        | Optional value              |

### 4. Functions and constructors

| Alias                 | Resolves to                | Purpose                          |
| --------------------- | -------------------------- | -------------------------------- |
| `FN<T>`               | Function type `T`          | Function signature               |
| `ARGS<T>`             | `Parameters<T>`            | Function arguments               |
| `PARAMS<T>`           | Inferred parameter tuple   | Function arguments               |
| `RET<T>`              | `ReturnType<T>`            | Function return type             |
| `RT<T>`               | Inferred return type       | Function return type             |
| `CON<T>`              | `ConstructorParameters<T>` | Constructor arguments            |
| `IT<T>` / `INST<T>`   | Constructor instance type  | Instance of a constructor        |
| `CTX<T>` / `OTHIS<T>` | `OmitThisParameter<T>`     | Function without explicit `this` |
| `THIS<T>`             | `ThisParameterType<T>`     | Extract the `this` parameter     |
| `BIG<T>`              | `BigInt`                   | BigInt constructor               |
| `ABC`                 | `AbortController`          | Abort controller                 |
| `ABS`                 | `AbortSignal`              | Abort signal                     |

### 5. Type transformations

| Alias                  | Resolves to                        | Purpose                               |
| ---------------------- | ---------------------------------- | ------------------------------------- |
| `PA<T>`                | `Partial<T>`                       | Make properties optional              |
| `RE<T>`                | `Required<T>`                      | Make properties required              |
| `RO<T>` / `ROOBJ<T>`   | Readonly properties                | Make properties readonly              |
| `MUT<T>` / `MUTOBJ<T>` | Mutable properties                 | Remove readonly modifiers             |
| `OM<T,K>`              | `Omit<T,K>`                        | Remove selected properties            |
| `PI<T,K>`              | `Pick<T,K>`                        | Select properties                     |
| `OV<T,U>`              | `Omit<T,keyof U> & U`              | Override properties with another type |
| `EX<T,U>`              | `Exclude<T,U>`                     | Exclude union members                 |
| `IN<T,U>`              | `Extract<T,U>`                     | Extract matching union members        |
| `NR<T>`                | `NonNullable<T>`                   | Remove null and undefined             |
| `EXT<T>`               | Array element type                 | Extract array element                 |
| `IDX<T>`               | Readonly or mutable array element  | Extract indexed element type          |
| `VAL<T>` / `VALOF<T>`  | `T[keyof T]`                       | Union of property values              |
| `KOF<T>` / `KEYS<T>`   | `keyof T`                          | All property keys                     |
| `SK<T>`                | `keyof T & string`                 | String property keys                  |
| `STR<T>`               | `T extends string ? T : never`     | Keep string members                   |
| `GUARD<T,U>`           | `T extends U ? T : never`          | Constrain union members               |
| `DIFF<T,U>`            | `T extends U ? never : T`          | Remove matching members               |
| `UNION<T>`             | `T extends any ? T : never`        | Distribute over unions                |
| `XOR<T,U>`             | Conditional exclusive object union | Mutually exclusive object shapes      |
| `DPR<T>`               | Recursive readonly transformation  | Deep readonly                         |
| `DEEP<T>`              | Recursive transformation           | Deep mapped type                      |
| `DEEPP<T>`             | Recursive optional transformation  | Deep optional properties              |

### 6. Type-level checks and inference

| Alias          | Purpose                                         |
| -------------- | ----------------------------------------------- |
| `EQ<X,Y>`      | Test whether two types are equivalent           |
| `ISNEVER<T>`   | Check whether a type is `never`                 |
| `ISANY<T>`     | Check whether a type is `any`                   |
| `ISUNKNOWN<T>` | Check whether a type is `unknown`               |
| `ISUNION<T>`   | Check whether a type is a union                 |
| `ASSERT<T>`    | Require a type to extend `true`                 |
| `NOI<T>`       | `NoInfer<T>`; prevent inference from a position |
| `AWAIT<T>`     | Recursively unwrap promise-like types           |
| `BRAND<T,N>`   | Add a nominal-style brand                       |
| `FIRST<T>`     | Extract the first tuple element                 |
| `LAST<T>`      | Extract the last tuple element                  |
| `LENGTH<T>`    | Extract tuple length                            |
| `ROA<T>`       | Readonly array element type using `T[N]`        |
| `STRNUM<T>`    | Numeric template-literal string                 |
| `STRBIG<T>`    | Bigint template-literal string                  |
| `STRBOOL<T>`   | Boolean template-literal string                 |
| `STRKEY<T>`    | String template-literal type                    |

### 7. String manipulation

| Alias            | Resolves to           | Purpose                              |
| ---------------- | --------------------- | ------------------------------------ |
| `CAP<T>`         | `Capitalize<T>`       | Capitalize first character           |
| `LOWER<T>`       | `Lowercase<T>`        | Lowercase a string                   |
| `UPPER<T>`       | `Uppercase<T>`        | Uppercase a string                   |
| `UNCAP<T>`       | `Uncapitalize<T>`     | Uncapitalize first character         |
| `TL<T>`          | `T['length']`         | String literal length                |
| `REPLACE<S,F,T>` | Template-literal type | Replace the first matching substring |
| `SPLIT<S,D>`     | Tuple of strings      | Split a string literal               |
| `JOIN<T,D>`      | Template-literal type | Join string tuple members            |

### 8. Numeric, binary, and memory types

| Alias       | Resolves to                    | Purpose                         |
| ----------- | ------------------------------ | ------------------------------- |
| `BI<T>`     | `bigint`                       | Big integer primitive           |
| `AB<T>`     | `ArrayBuffer`                  | Binary buffer                   |
| `DV<T>`     | `DataView`                     | Binary data access              |
| `I8`        | `Int8Array`                    | Signed 8-bit integers           |
| `U8<T>`     | `Uint8Array`                   | Unsigned 8-bit integers         |
| `U8C`       | `Uint8ClampedArray`            | Clamped unsigned 8-bit integers |
| `I16`       | `Int16Array`                   | Signed 16-bit integers          |
| `U16`       | `Uint16Array`                  | Unsigned 16-bit integers        |
| `I32<T>`    | `Int32Array`                   | Signed 32-bit integers          |
| `U32<T>`    | `Uint32Array`                  | Unsigned 32-bit integers        |
| `U32ARB<T>` | `Uint32Array<ArrayBufferLike>` | Explicit backing-buffer type    |
| `F32`       | `Float32Array`                 | 32-bit floating point           |
| `F64<T>`    | `Float64Array`                 | 64-bit floating point           |

### 9. DOM, browser, and web APIs

| Alias                | Resolves to           | Purpose             |
| -------------------- | --------------------- | ------------------- |
| `BL<T>`              | `Blob`                | Binary large object |
| `BU<T>`              | `Buffer`              | Node.js byte buffer |
| `CE<T>`              | `CustomEvent`         | Custom DOM event    |
| `DE<T>`              | `Document`            | DOM document        |
| `EL<T>`              | `Element`             | DOM element         |
| `EV<T>`              | `Event`               | DOM event           |
| `FR<T>`              | `DocumentFragment`    | DOM fragment        |
| `FD<T>`              | `FormData`            | Form data           |
| `HE<T>`              | `HTMLElement`         | HTML element        |
| `KE<T>`              | `KeyboardEvent`       | Keyboard event      |
| `ME<T>`              | `MouseEvent`          | Mouse event         |
| `PE<T>`              | `PointerEvent`        | Pointer event       |
| `ND<T>`              | `Node`                | DOM node            |
| `NA<T>`              | `NodeListOf<T>`       | Node list           |
| `NLE<T>`             | `NodeListOf<Element>` | Element node list   |
| `WIN<T>`             | `Window`              | Browser window      |
| `URI<T>` / `URLT<T>` | `URL`                 | URL instance        |
| `REG<T>`             | `RegExp`              | Regular expression  |
| `DOMX`               | `DOMException`        | DOM exception       |

### 10. Errors, resources, and disposal

| Alias         | Resolves to               | Purpose                        |
| ------------- | ------------------------- | ------------------------------ |
| `AGE`         | `AggregateError`          | Multiple errors                |
| `ERRCAUSE<T>` | `Error & { cause?: T }`   | Error with typed cause         |
| `WREF<T>`     | `WeakRef<T>`              | Weak object reference          |
| `FREG<T>`     | `FinalizationRegistry<T>` | Finalization callback registry |
| `DISP`        | `Disposable`              | Synchronous disposal protocol  |
| `ADISP`       | `AsyncDisposable`         | Asynchronous disposal protocol |

## Examples

### Collection and utility aliases

```
type User = {
  id: number;
  name: string;
  email?: string;
};

type UserMap = MAP<string, User>;
type UserNames = AR<User['name']>;
type UserPatch = PA<User>;
type RequiredUser = RE<User>;
type UserId = PI<User, 'id'>;
type UserWithoutEmail = OM<User, 'email'>;
type UserKeys = KEYS<User>;
type UserValues = VALOF<User>;
```

### Function aliases

```
type Handler = FN<(value: User) => boolean>;
type HandlerArgs = ARGS<Handler>;
type HandlerResult = RET<Handler>;
```

### Advanced type checks

```
type Check1 = ASSERT<EQ<string, string>>;
type Check2 = ASSERT<ISNEVER<never>>;
type Check3 = ASSERT<ISANY<any>>;
type Check4 = ASSERT<ISUNKNOWN<unknown>>;
```

### Branded values

```
type UserId = BRAND<number, 'UserId'>;
type OrderId = BRAND<number, 'OrderId'>;

const userId = 123 as UserId;
const orderId = 456 as OrderId;
```

### String literal operations

```
type Parts = SPLIT<'user:profile:settings', ':'>;
// ['user', 'profile', 'settings']

type Path = JOIN<['user', 'profile', 'settings'], '.'>;
// 'user.profile.settings'

type Updated = REPLACE<'user/profile', '/', '.'>;
// 'user.profile'
```

## Notes

- All aliases are global declarations; importing them individually is unnecessary when the declaration file is included in the project.
- Generic parameters are retained throughout the alias definitions.
- Several aliases use DOM, Node.js, or newer TypeScript library types. The applicable TypeScript `lib` settings and runtime type definitions must be available.
- Some aliases are intentionally similar or duplicated, such as `M`, `MAP`, and `MP`; `P` and `PROM`; and `RO` and `ROOBJ`.
- This reference documents the definitions as written. It does not imply that every generic parameter changes the resulting type.

Correct aliases that do not match their definitions
