
<div align="left" style="position: relative;">
<img src="./icons/gandalf.png" align="right" width="30%" style="margin: -20px 0 0 20px;">

<h1>Type Alias: <span style="font-size:18px;" >The Wizard's Arsenal</span></h1>

<p align="left"><em>The most opinionated platform... ever.</em></p>
<p align="left"><em>Trust me... I'm a fucking wizard... 🧙</em></p>
<p align="left">VSCode ext:</p>
<p align="left">
<img src="https://img.shields.io/badge/THEMES- 251-95ED27?style=flat">
<img src="https://img.shields.io/badge/SIDEBARS- 160+-95ED27?style=flat">
<img src="https://img.shields.io/badge/PRODUCT ICONS- 651-95ED27?style=flat">
<img src="https://img.shields.io/badge/FILE ICONS- 454-95ED27?style=flat">
<img src="https://img.shields.io/badge/VSCode Extentions- 82+-95ED27?style=flat">
<img src="https://img.shields.io/badge/FEATURES- SHIT TONNE-95ED27?style=flat">
</p>
<p align="left">Small but powerful repos worth checking out:</p>
<p align="left">

<a href="https://github.com/the-w1zard/app_store"><img src="https://img.shields.io/badge/Store / Maelstrom-000000.svg?style=flat&logo=JetBrains&logoColor=white" alt="JetBrains"></a>
<a href="https://github.com/the-w1zard/dx"><img src="https://img.shields.io/badge/UX /DX-34A853.svg?style=flat&logo=Android&logoColor=white" alt="Android"></a>
<a href="https://github.com/the-w1zard/temporal_shift"><img src="https://img.shields.io/badge/Temporal Shift-77AA99.svg?style=flat&logo=Org&logoColor=white" alt="Org"></a>
<a href="https://github.com/the-w1zard/the_cloud"><img src="https://img.shields.io/badge/The Cloud-02303A.svg?style=flat&logo=Gradle&logoColor=white" alt="Gradle"></a>
<a href="https://github.com/the-w1zard/signals"><img src="https://img.shields.io/badge/Signals-02303A.svg?style=flat&logo=Gradle&logoColor=white" alt="Gradle"></a>
<img src="https://img.shields.io/badge/Sometimes, my genius... It generates gravity.-4285F4.svg?style=flat&logo=🧙&logoColor=white" alt="Google">
<a href="https://github.com/the-w1zard"><img src="https://img.shields.io/badge/Coming Soon: The Wizard Platform-7F52FF.svg?style=flat&logo=Kotlin&logoColor=white" alt="Kotlin"></a>
<a href="https://github.com/the-w1zard"><img src="https://img.shields.io/badge/Coming Soon: Hadron Particle Disruptor-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white" alt="java"></a>
</p>
<p align="left">The goal? To remove all friction, from everything.</p>

</div>
<br clear="right">

---
<span  style="font-family: monospace"> 


> [!NOTE] TLDR
>
> The goal here... remove as many key strokes as possible. The end result also included several other benefits such as compacted props defintions among others.
>
> Within 20 mins of creating this resource I had removed 250,000 characters from that app. The final tally came up to 1.2 million. It is more, but that's just when I stopped counting.

> [!IMPORTANT] UPDATE
>
> I believe this to be in its finaly form, despite being such a new solution, the ux was just hit perfectly from the start. This update, and probably its last, included the things that... fuck did they ever get annoying when using them beside the types alias. Every single time I went to...
>
> ```tsx
> String('st')
> Number(0)
> ```
> 
> And so on... If this is your first time seeing this module thinking, 'Is this guy for real? Getting annoyed for typing 5 more chars?'... Ya... Actually, really fucking annoyed, lol. So much so, I literally dropped the app I was working on because I'd hit the wall where I was like , 'FUCK this, I'm stopping and doing this now.'
>
> Since your new, right now yes, it looks like 5 characters... 
>
> But over an entire codebase, or all of your codebases. We are not talking about single digit savings here. Were talking... in the millions. Just my personal projects alone, I'm just about to hit half a million. While, THOSE, projects it wasn't typed savings, because this solution is newer, as they can still benefit from one of the other many items on that list. While at the same time, that is half a million less chars for the compiler to run through. 
> 
> Your files are smaller, and the two things that I have noticed more than any other... a functions props signature, without fail virtually, now fits entirely on a single line without having to unfold it and the read a wall of props. 
> 
> The next part, yes it will actually slow you down at first, but once you memorize the alias'... you not only read the code faster due to its vertical compression, but also left to right compression as well. In addition to not having to consume as much data than it would otherwise to reach the same end result. 
> 
> Below you a single vertical space where 40 fns and each and every single props of those 40 are visible and can read the entire surface of each fns props. Not to mention, saving from having to scroll up and down all the time. I've even devs take up more than entire vertical heights... just to define and layout the props for what it is that they built.
>
> This solution will not be for everyone, as there are some hard core ts ceremony devs out there. But if they want to do more work, for the exact same result... Go for it! Seriously, each and every single person has a different preference, but if you aren't one of those devs I highly encourage, at the very least, trying this out.

<br />

<img src="./icons/ex.png">

</span>

<br />

# Global Type System & Runtime Primitives

## Overview

This module establishes a globally accessible foundation of shared TypeScript types, aliases, native constructor references, utility types, and runtime primitives.

Its purpose is to eliminate repetitive type declarations, reduce unnecessary verbosity, standardize commonly used terminology, and provide a consistent vocabulary across the platform.

Rather than repeatedly importing and redeclaring commonly used JavaScript and TypeScript primitives, this module makes them globally accessible through short, standardized identifiers.

The implementation is intentionally compact. Many of its aliases represent frequently used native types, while others provide specialized type transformations, structural utilities, binary data abstractions, and platform-specific definitions.

The module is divided into several functional groups:

1. Runtime primitives
2. Upgraded base abstractions
3. Native type aliases
4. Native constructor globals
5. Collection and data structure aliases
6. Promise and asynchronous utilities
7. Object and structural transformations
8. Function and parameter utilities
9. Iteration and generator abstractions
10. Typed array and binary data aliases
11. Advanced conditional and recursive types
12. Platform-specific definitions
13. Cache and storage backend definitions

---

# 1. Runtime Primitives

## MaybePromise

`MaybePromisei<R>(v: R)`

If you want to learn more about this, I suggest going to its actual documentation. However, the easiest, most simpliest way to explain this to every single person without fail

### DO YOU NEED THE VALUE?
- NO? Then simply do not place an await...
- YES? Place an await infront of the fn...

### Global exposure

The implementation is exposed through:

- `globalThis.MaybePromise`

This makes the runtime function accessible globally without requiring repeated imports.

## PX — Native Proxy

`globalThis.PX = Proxy`

Exposes the native JavaScript `Proxy` constructor under a shortened global identifier.

The corresponding TypeScript alias is:

`PX<T extends object = object>`

The type-side alias provides a convenient reference to an object type when working with proxy-oriented structures.

The runtime constructor and type alias serve separate purposes:

- Runtime: native Proxy constructor.
- TypeScript: object type abstraction.

---

# 2. Upgraded Base Abstractions

This section establishes foundational abstractions that extend the native JavaScript collection vocabulary.

## BM — ByteOp Map

`BM<K = A, V = A>`

A shortened alias for `BYTEOP_MAP_TYPE<K, V>`.

Unlike a native JavaScript `Map`, this interface describes a map-like structure backed by binary-oriented storage.

### BYTEOP_MAP_TYPE

The interface defines the following contract:

| Member | Purpose |
|---|---|
| `pidToSlot` | Int32Array mapping particle identifiers to storage slots |
| `set(k, v)` | Associates a key with a value |
| `get(k)` | Retrieves a value or returns undefined |
| `has(k)` | Checks whether a key exists |
| `delete(k)` | Removes an entry |
| `size` | Exposes the number of stored entries |

The generic parameters preserve key and value types.

### Design purpose

The interface establishes a familiar Map-like API while allowing the underlying implementation to use a binary-oriented representation.

This separates the consumer-facing collection contract from the internal storage architecture.

The intent is to provide a JavaScript-compatible interaction model without requiring the underlying implementation to use native Map storage.

---

# 3. Native Type Aliases

The ALIAS region establishes shortened references to commonly used native JavaScript and TypeScript types.

These aliases are globally available and do not require individual imports.

The naming convention favors compact identifiers to reduce repetitive syntax throughout the platform.

## Fundamental types

| Alias | Native type | Description |
|---|---|---|
| `A` | `any` | Unrestricted type |
| `U` | `unknown` | Unknown value requiring type narrowing |
| `B` | `boolean` | Boolean value |
| `N` | `number` | Numeric value |
| `S` | `string` | String value |
| `V` | `void` | Void return type |
| `NE` | `never` | Impossible type |
| `NU` | `null` | Null value |
| `UD` | `undefined` | Undefined value |
| `O` | `Object` | Object type |
| `BI` | `bigint` | Arbitrary-precision integer |
| `SY` | `symbol` | Symbol primitive |

Additional aliases:

- `NB`: bigint
- `XS`: any
- `Wildcard`: `"*"`
- `W`: `"*"`

## String representations of primitive types

The following aliases use template literal types:

| Alias | Description |
|---|---|
| `SB` | String representation of boolean |
| `SN` | String representation of number |
| `SK` | String representation of a property-key-compatible type |
| `SBIG` | String representation of bigint |

These are useful when working with string-based identifiers, serialization formats, and type-level string transformations.

## Arrays and buffers

| Alias | Native type |
|---|---|
| `AR<T = A>` | `Array<T>` |
| `AB` | `ArrayBuffer` |
| `BL` | `Blob` |
| `BF` | `Buffer` |

The `AR` alias also exposes the native `Array` constructor through its corresponding global declaration.

## Date and error types

| Alias | Native type |
|---|---|
| `D` | `Date` |
| `E` | `Error` |
| `AGE` | `AggregateError` |
| `DOMX` | `DOMException` |
| `ERRCAUSE<T>` | Error with optional typed cause |

`ERRCAUSE<T>` extends the standard Error shape with a typed optional `cause` property.

## DOM types

| Alias | Native type |
|---|---|
| `ND` | `Node` |
| `NA<T>` | `NodeListOf<T>` |
| `NLE` | `NodeListOf<Element>` |
| `EL` | `Element` |
| `HE` | `HTMLElement` |
| `DM` | `Document` |
| `FR` | `DocumentFragment` |
| `EV` | `Event` |
| `CE` | `CustomEvent` |
| `ME` | `MouseEvent` |
| `KE` | `KeyboardEvent` |
| `PE` | `PointerEvent` |
| `WIN` | `Window` |

Additional DOM-related aliases:

- `FD`: FormData
- `DV`: DataView

These provide compact references for browser-facing code without repeatedly spelling out native DOM type names.

## URL and regular expressions

| Alias | Native type |
|---|---|
| `URI` | URL |
| `URL` | URL |
| `REG` | RegExp |

The `REG` constructor is also exposed through the global declaration.

---

# 4. Native Constructor Globals

Several native JavaScript constructors are declared globally under shortened identifiers.

These declarations allow the same compact naming convention to be used in both type positions and runtime expressions.

| Global | Native constructor |
|---|---|
| `B` | Boolean |
| `AR` | Array |
| `AB` | ArrayBuffer |
| `D` | Date |
| `E` | Error |
| `F` | Function |
| `J` | JSON |
| `M` | Map |
| `N` | Number |
| `O` | Object |
| `P` | Promise |
| `PX` | Proxy |
| `REG` | RegExp |
| `S` | String |
| `ST` | Set |
| `WR` | WeakRef |
| `DV` | DataView |

The purpose is to make native constructors available through a consistent global vocabulary.

This is particularly useful in modules where native constructors are frequently referenced and importing or repeatedly writing their full names adds unnecessary verbosity.

The declarations describe the expected runtime globals; they do not independently instantiate or implement the native constructors.

---

# 5. Collections and Data Structures

This section provides shortened aliases for native JavaScript collection types.

| Alias | Native type |
|---|---|
| `M<K,V>` | Map |
| `MAP<K,V>` | Map |
| `WM<K,V>` | WeakMap |
| `WEAKMAP<K,V>` | WeakMap |
| `RM<K,V>` | ReadonlyMap |
| `ST<T>` | Set |
| `RS<T>` | ReadonlySet |
| `WS<T>` | WeakSet |
| `R<K,V>` | Record |
| `OB<T>` | String-keyed object |
| `OBJ<T>` | String-keyed object |
| `DC<T>` | String-keyed Record |
| `DICT<T>` | String-keyed dictionary allowing undefined values |

The collection aliases retain generic parameters so that key and value types can be propagated through the platform.

## Object-oriented aliases

- `O`: Object
- `OB<T>`: String-indexed object
- `OBJ<T>`: Equivalent string-indexed object
- `R<K,V>`: Record
- `DC<T>`: String-keyed record
- `DICT<T>`: Dictionary with optional undefined values

These definitions provide a consistent shorthand for common object shapes.

---

# 6. Promise and Asynchronous Utilities

This section provides aliases for synchronous/asynchronous execution and promise-related types.

| Alias | Native type |
|---|---|
| `P<T>` | Promise |
| `PL<T>` | PromiseLike |
| `AWD<T>` | Awaited |
| `AW<T>` | Recursive promise-like unwrapping |
| `PSR<T>` | PromiseSettledResult |
| `PFR<T>` | PromiseFulfilledResult |
| `PRR` | PromiseRejectedResult |
| `ASF<T>` | Async version of a function signature |
| `UF<T>` | Value or function returning that value |
| `OPT<T>` | Value or undefined |
| `MAY<T>` | Value, null, or undefined |
| `SU` | String or undefined |

## ASF — Async Function Transformation

`ASF<T>`

Transforms a function signature into an asynchronous equivalent.

It preserves the original function parameters while wrapping the awaited return type in a Promise.

This allows existing function signatures to be reused when defining asynchronous interfaces.

## UF — Value or Function

`UF<T = A>`

Represents either:

- A direct value of type `T`.
- A function returning `T`.

This is useful for APIs that accept either eagerly supplied values or lazily evaluated values.

## OPT and MAY

- `OPT<T>` represents an optional value through `undefined`.
- `MAY<T>` represents a nullable or optional value.

These provide compact ways to describe common optional-value contracts.

---

# 7. Object and Structural Transformations

This group contains utility types for modifying, extracting, replacing, and inspecting object structures.

| Alias | Purpose |
|---|---|
| `RE<T>` | Required properties |
| `PA<T>` | Partial properties |
| `RO<T>` | Readonly properties |
| `OM<T,K>` | Omit selected properties |
| `OV<T,U>` | Override properties |
| `PI<T,K>` | Pick selected properties |
| `MUT<T>` | Remove readonly modifiers |
| `ROOBJ<T>` | Deep property-preserving readonly shape |
| `MUTOBJ<T>` | Remove readonly modifiers |
| `DPR<T>` | Deep readonly transformation |
| `DEEP<T>` | Recursive type transformation |
| `DEEPP<T>` | Recursive optional transformation |
| `NR<T>` | NonNullable |
| `EX<T,U>` | Exclude |
| `IN<T,U>` | Extract |
| `VAL<T>` | Union of property values |
| `VALOF<T>` | Union of property values |
| `KEYS<T>` | Property keys |
| `KOF<T>` | Property keys |
| `SK<T>` | String property keys |

## OV — Override

`OV<T, U>`

Removes properties from `T` that are also present in `U`, then combines the remaining properties with `U`.

This allows one object type to override selected properties of another without manually reconstructing the entire shape.

## XOR — Exclusive Object Union

`XOR<T, U>`

Provides an exclusive object union.

When working with object types, it retains the properties belonging to one structure while excluding conflicting properties from the other.

This is useful for describing APIs where two alternative object shapes should not freely overlap.

## CTX and OTT

- `OTT<T>` removes the explicit `this` parameter from a function type.
- `CTX<T>` provides the same transformation under a context-oriented alias.

---

# 8. Function and Parameter Utilities

This section contains aliases for inspecting and transforming function signatures.

| Alias | Purpose |
|---|---|
| `F<T>` | Function or zero-argument function returning T |
| `FN<T>` | Function type |
| `RT<T>` | Return type |
| `RET<T>` | Return type |
| `ARGS<T>` | Function parameters |
| `PARAMS<T>` | Function parameters |
| `CON<T>` | Constructor parameters |
| `IT<T>` | Constructor instance type |
| `INST<T>` | InstanceType |
| `TT<T>` | ThisParameterType |
| `CTX<T>` | Function without explicit this parameter |

These utilities allow function signatures to be reused and inspected without manually reconstructing their parameter and return types.

They are particularly useful when building generic APIs, wrappers, adapters, callbacks, and dynamically composed functions.

---

# 9. Iteration and Generator Abstractions

This group standardizes aliases for synchronous and asynchronous iteration.

| Alias | Native type |
|---|---|
| `I<T>` | Iterable |
| `AI<T>` | AsyncIterable |
| `AII<T>` | AsyncIterableIterator |
| `IO<T,R,N>` | IteratorObject |
| `AIO<T,R,N>` | AsyncIteratorObject |
| `ITOR<T>` | Iterator |
| `ITR<T>` | IterableIterator |
| `GEN<T,R,N>` | Generator |
| `AG<T,R,N>` | AsyncGenerator |
| `ASYNCGEN<T,R,N>` | AsyncGenerator |

The generic parameters preserve the iterator contract:

- `T`: yielded value.
- `R`: return value.
- `N`: value accepted by the iterator's next operation.

These aliases allow the same terminology to be used across synchronous iteration, asynchronous iteration, and generator-based execution.

---

# 10. Typed Arrays and Binary Data

The typed-array section provides shortened identifiers for JavaScript's native binary numeric representations.

| Alias | Native type | Width |
|---|---|---|
| `I8` | Int8Array | 8-bit signed |
| `U8` | Uint8Array | 8-bit unsigned |
| `U8C` | Uint8ClampedArray | 8-bit clamped |
| `I16` | Int16Array | 16-bit signed |
| `U16` | Uint16Array | 16-bit unsigned |
| `I32` | Int32Array | 32-bit signed |
| `U32` | Uint32Array | 32-bit unsigned |
| `F32` | Float32Array | 32-bit floating point |
| `F64` | Float64Array | 64-bit floating point |

Each corresponding constructor is also declared globally.

## U32ARB

`U32ARB = Uint32Array<ArrayBufferLike>`

Provides an explicitly parameterized Uint32Array type using ArrayBufferLike as its backing storage type.

## Design purpose

These aliases are especially relevant to binary-oriented platform modules.

They provide a compact vocabulary for working with:

- Typed-array storage.
- Binary encoding and decoding.
- Numeric buffers.
- Shared data structures.
- Slot and index mappings.
- Binary operation lanes.
- Low-level storage representations.

The aliases preserve the underlying native typed-array behavior and do not introduce alternative numeric representations.

---

# 11. String and URI Utilities

The module declares several global string-processing functions.

| Function | Purpose |
|---|---|
| `dURI(string)` | Decode URI |
| `eURI(string)` | Encode URI |
| `esc(string)` | Escape string |
| `unesc(string)` | Unescape string |
| `pInt(string, radix?)` | Parse integer |
| `pFloat(string)` | Parse floating-point number |

These declarations provide globally accessible function signatures for commonly used string operations.

The declarations establish the expected interfaces; their actual implementations must be provided elsewhere in the runtime.

---

# 12. Advanced Type-Level Utilities

This section contains more specialized TypeScript utilities.

Unlike simple aliases, many of these definitions perform conditional evaluation, recursive transformations, inference, or compile-time validation.

## Type inspection

| Alias | Purpose |
|---|---|
| `EQ<X,Y>` | Tests type equality |
| `ISNEVER<T>` | Tests whether T is never |
| `ISANY<T>` | Tests whether T is any |
| `ISUNKNOWN<T>` | Tests whether T is unknown |
| `ISUNION<T>` | Tests whether T is a union |
| `UNION<T>` | Distributive union utility |
| `GUARD<T,U>` | Retains T when assignable to U |
| `DIFF<T,U>` | Removes members assignable to U |
| `ASSERT<T>` | Compile-time assertion requiring true |

These utilities allow types to be inspected and validated during compilation rather than relying exclusively on runtime checks.

## Inference and extraction

| Alias | Purpose |
|---|---|
| `EXT<T>` | Extracts an array element type |
| `IDX<T>` | Extracts an element from a readonly array |
| `FIRST<T>` | Extracts the first tuple element |
| `LAST<T>` | Extracts the last tuple element |
| `LENGTH<T>` | Extracts tuple length |
| `VALOF<T>` | Extracts property-value unions |
| `KEYS<T>` | Extracts object keys |
| `ARGS<T>` | Extracts function parameters |
| `PARAMS<T>` | Infers function parameters |

## String manipulation

| Alias | Purpose |
|---|---|
| `CAP<T>` | Capitalize |
| `UNC<T>` | Uncapitalize |
| `UPC<T>` | Uppercase |
| `LOWER<T>` | Lowercase |
| `STR<T>` | Retains string-compatible types |
| `TL<T>` | String length |
| `REPLACE<S,F,T>` | Replaces a matching substring |
| `SPLIT<S,D>` | Splits a string into a tuple |
| `JOIN<T,D>` | Joins a tuple of strings |

These operate at the TypeScript type level.

They allow string-based identifiers, literal types, and tuple structures to be manipulated during compilation.

## Tuple and array utilities

| Alias | Purpose |
|---|---|
| `ROARR<T>` | Readonly array |
| `NONEMPTY<T>` | Nonempty readonly array |
| `FIRST<T>` | First tuple member |
| `LAST<T>` | Last tuple member |
| `LENGTH<T>` | Tuple length |
| `TUP<T>` | Mutable tuple copy |

## Branding and instance utilities

| Alias | Purpose |
|---|---|
| `BRAND<T,N>` | Adds a nominal-style brand |
| `INST<T>` | Extracts an instance type |
| `IT<T>` | Extracts a constructor instance |
| `CON<T>` | Extracts constructor parameters |
| `FREG<T>` | FinalizationRegistry |
| `WR<T>` | WeakRef |

`BRAND<T,N>` intersects a type with a readonly `__brand` property, allowing otherwise structurally compatible types to be distinguished.

---

# 13. Platform-Specific Definitions

The final section introduces definitions that are specific to the wider platform rather than direct aliases of native JavaScript types.

## Structural definitions

| Alias | Definition / Purpose |
|---|---|
| `AO` | String-keyed object with any values |
| `AS` | Object containing `self` and string-keyed properties |
| `AF` | Function receiving AS and returning AO |
| `AOAF` | Either AO or AF |
| `CHAIN` | `"chain" \| "rechain"` |
| `SU` | String or undefined |
| `XS` | Any |
| `Wildcard` | `"*"` |
| `NB` | Bigint |

These definitions provide shared structural contracts for platform APIs.

## CACHE_TYPE

`CACHE_TYPE` establishes the supported storage and caching backend identifiers.

It currently includes:

| Identifier | Backend |
|---|---|
| `sauron` | SAURON storage |
| `disruptor` | Disruptor storage |
| `cache` | General-purpose cache |
| `rifts` | Rifts storage |
| `sclass` | SClass storage |
| `cookie` | Cookie storage |
| `scookie` | Secure cookie storage |
| `kvdb` | Key-value database |
| `rdb` | Relational database |
| `tdb` | Table-oriented database |
| `bdb` | Binary database |
| `gdb` | Graph database |
| `idb` | IndexedDB |
| `hpd` | Hadron Particle Disruptor database |
| `undefined` | Unspecified backend |

The `CACHE` alias references `CACHE_TYPE`.

### Purpose

This type establishes a common vocabulary for selecting and describing storage destinations throughout the platform.

Rather than allowing arbitrary strings to identify storage backends, consumers can reference a shared union of supported identifiers.

This provides a consistent type-level contract for APIs that need to distinguish between storage implementations.

---

# 14. Global Declaration Strategy

The majority of the module is contained within `declare global`.

This is intentional.

The module is designed to augment the global TypeScript namespace rather than require individual modules to import every alias.

For example, once the module's declarations are included in the TypeScript compilation context, consumers can reference:

- `A` instead of `any`.
- `S` instead of `string`.
- `N` instead of `number`.
- `M<K,V>` instead of `Map<K,V>`.
- `P<T>` instead of `Promise<T>`.
- `U8` instead of `Uint8Array`.
- `RO<T>` instead of `Readonly<T>`.
- `ARGS<T>` instead of `Parameters<T>`.

This reduces repetitive syntax and keeps the platform's internal vocabulary consistent.

## Type declarations versus runtime declarations

An important distinction exists between the two kinds of global definitions.

**Type-level declarations**

These exist during TypeScript compilation and provide type information.

Examples:

- `type A = any`
- `type M<K,V> = Map<K,V>`
- `type RO<T> = Readonly<T>`
- `type CACHE_TYPE = ...`

They do not create runtime JavaScript values.

**Runtime declarations**

These describe or expose actual JavaScript values.

Examples:

- `var M: MapConstructor`
- `var P: PromiseConstructor`
- `var PX: ProxyConstructor`
- `globalThis.MaybePromise = MaybePromisei`
- `globalThis.PX = Proxy`

These correspond to runtime-accessible values.

Maintaining this distinction is important because a shortened type alias and a shortened runtime constructor are separate declarations serving different purposes.

---

# 15. Architectural Intent

This module is intended to function as a shared language foundation across the platform.

Its design follows several principles:

### 1. Reduce repetitive syntax

Frequently used native types and constructors receive short global aliases.

### 2. Standardize terminology

Modules can use the same identifiers when referring to common JavaScript structures.

### 3. Preserve generic information

Aliases retain generic parameters wherever applicable, allowing type information to propagate through nested structures and function signatures.

### 4. Keep native behavior intact

Most aliases are direct references to native JavaScript or TypeScript types. They do not introduce new runtime behavior or replace native implementations.

### 5. Support binary-oriented development

The typed-array aliases and `BYTEOP_MAP_TYPE` establish a vocabulary for working with binary storage abstractions alongside conventional JavaScript collections.

### 6. Centralize shared contracts

Platform-specific definitions, including cache backend identifiers and structural interfaces, live alongside the shared type foundation.

### 7. Minimize import overhead

Global declarations eliminate the need to repeatedly import common type aliases into every consuming module.

---

# Summary

This module provides a centralized global vocabulary for the platform.

It combines native type aliases, runtime constructor references, promise utilities, object transformations, function introspection, iterator abstractions, typed-array definitions, advanced conditional types, and platform-specific storage contracts.

It is not a replacement for TypeScript's type system or JavaScript's native primitives.

It is a shared abstraction layer that makes those existing capabilities more concise, consistent, and accessible throughout the platform.

The result is a compact global foundation that allows the rest of the codebase to operate using a standardized set of types and primitives rather than repeatedly rebuilding the same vocabulary across individual modules.


# Global Type & Alias Reference

| Alias | Resolves To | Purpose |
|---|---|---|
| `A` | `any` | Unrestricted type |
| `B` | `boolean` | Boolean values |
| `SB` | `` `${B}` `` | String representation of boolean |
| `BL` | `Blob` | Binary data object |
| `BF` | `Buffer` | Binary buffer |
| `AR<T>` | `Array<T>` | Generic array |
| `AB` | `ArrayBuffer` | Raw binary buffer |
| `D` | `Date` | Date representation |
| `E` | `Error` | Error object |
| `EV` | `Event` | DOM event |
| `F<T>` | `Function \| (() => T)` | Function or zero-argument function returning T |
| `I<T>` | `Iterable<T>` | Synchronous iterable |
| `AI<T>` | `AsyncIterable<T>` | Asynchronous iterable |
| `AII<T>` | `AsyncIterableIterator<T>` | Asynchronous iterable iterator |
| `IO<T,R,N>` | `IteratorObject<T,R,N>` | Iterator object |
| `AIO<T,R,N>` | `AsyncIteratorObject<T,R,N>` | Async iterator object |
| `INF` | `number` | Infinity constant |
| `J` | `JSON` | JSON utility namespace |
| `K` | `keyof A` | Property keys of any |
| `SK` | `keyof T & S` / `` `${S & {}}` `` | String-key extraction / string representation; two definitions currently exist |
| `M<K,V>` | `Map<K,V>` | Native map |
| `WM<K,V>` | `WeakMap<K,V>` | Weakly referenced map |
| `WEAKMAP<K,V>` | `WeakMap<K,V>` | Alternative weak map alias |
| `N` | `number` | Numeric values |
| `SN` | `` `${N}` `` | String representation of number |
| `NaN` | `number` | Not-a-Number value |
| `BI` | `bigint` | Arbitrary-precision integer |
| `BIG` | `BigInt` | BigInt type reference |
| `SBIG` | `` `${bigint}` `` | String representation of bigint |
| `ND` | `Node` | DOM node |
| `NA<T>` | `NodeListOf<T>` | Typed node list |
| `NLE` | `NodeListOf<Element>` | Element node list |
| `NE` | `never` | Impossible type |
| `NIL<T>` | `T \| null` | Nullable value |
| `NU` | `null` | Null value |
| `NR<T>` | `NonNullable<T>` | Removes null and undefined |
| `O` | `Object` | Object type |
| `OB<T>` | `{ [key: S]: T }` | String-keyed object |
| `OBJ<T>` | `{ [key: S]: T }` | String-keyed object |
| `OV<T,U>` | `Omit<T,keyof U> & U` | Overrides properties of T with U |
| `OM<T,K>` | `Omit<T,K>` | Removes selected properties |
| `OTT<T>` | `OmitThisParameter<T>` | Removes explicit this parameter |
| `CTX<T>` | `OmitThisParameter<T>` | Context-free function signature |
| `XOR<T,U>` | Exclusive object union | Defines mutually exclusive object shapes |
| `P<T>` | `Promise<T>` | Promise |
| `AWD<T>` | `Awaited<T>` | Resolves nested promise types |
| `AW<T>` | Recursive `PromiseLike` unwrapping | Unwraps promise-like values using AWAIT |
| `PL<T>` | `PromiseLike<T>` | Promise-compatible interface |
| `PSR<T>` | `PromiseSettledResult<T>` | Promise settlement result |
| `PFR<T>` | `PromiseFulfilledResult<T>` | Fulfilled promise result |
| `PRR` | `PromiseRejectedResult` | Rejected promise result |
| `PK` | `PropertyKey` | String, number, or symbol property key |
| `PX<T>` | `T extends object ? T : object` / declared as `T` | Proxy-related object type alias |
| `RE<T>` | `Required<T>` | Makes properties required |
| `RM<K,V>` | `ReadonlyMap<K,V>` | Readonly map |
| `RS<T>` | `ReadonlySet<T>` | Readonly set |
| `RO<T>` | `Readonly<T>` | Makes properties readonly |
| `ROA<T>` | `ReadonlyArray<T[N]>` | Readonly array of indexed element type |
| `R<K,V>` | `Record<K,V>` | Key-value object |
| `REG` | `RegExp` | Regular expression |
| `RT<T>` | `ReturnType<T>` / custom conditional | Extracts function return type; defined twice |
| `RET<T>` | `ReturnType<T>` | Extracts function return type |
| `S` | `string` | String values |
| `SY` | `symbol` | Symbol primitive |
| `SYM` | `Symbol` | Symbol type reference |
| `ST<T>` | `Set<T>` | Native set |
| `WS<T>` | `WeakSet<T>` | Weakly referenced set |
| `TT<T>` | `ThisParameterType<T>` | Extracts explicit this parameter |
| `U` | `unknown` | Unknown value |
| `UD` | `undefined` | Undefined value |
| `UNC<T>` | `Uncapitalize<T>` | Lowercases first character |
| `UPC<T>` | `Uppercase<T>` | Uppercases string |
| `URI` | `URL` | URL representation |
| `URL` | `URL` | URL representation |
| `UF<T>` | `T \| (() => T)` | Direct value or lazy function |
| `V` | `void` | Void return type |
| `W` | `"*"` | Wildcard literal |
| `WR<T>` | `WeakRef<T>` | Weak reference |
| `WIN` | `Window` | Browser window |
| `I8` | `Int8Array` | Signed 8-bit typed array |
| `U8` | `Uint8Array` | Unsigned 8-bit typed array |
| `U8C` | `Uint8ClampedArray` | Clamped unsigned 8-bit typed array |
| `I16` | `Int16Array` | Signed 16-bit typed array |
| `U16` | `Uint16Array` | Unsigned 16-bit typed array |
| `I32` | `Int32Array` | Signed 32-bit typed array |
| `U32` | `Uint32Array` | Unsigned 32-bit typed array |
| `F32` | `Float32Array` | 32-bit floating-point typed array |
| `F64` | `Float64Array` | 64-bit floating-point typed array |
| `U32ARB` | `Uint32Array<ArrayBufferLike>` | Uint32 array with explicit backing-buffer type |
| `AG<T,R,N>` | `AsyncGenerator<T,R,N>` | Async generator |
| `AGE` | `AggregateError` | Multiple aggregated errors |
| `ABC` | `AbortController` | Controls asynchronous cancellation |
| `ABS` | `AbortSignal` | Cancellation signal |
| `ASF<T>` | `(...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>` | Converts function signature to asynchronous equivalent |
| `CAP<T>` | `Capitalize<T>` | Capitalizes first character |
| `CON<T>` | `ConstructorParameters<T>` | Extracts constructor parameters |
| `CE` | `CustomEvent` | Custom DOM event |
| `DM` | `Document` | DOM document |
| `DPR<T>` | Recursive readonly mapped type | Deep readonly transformation |
| `DC<T>` | `Record<string,T>` | String-keyed record |
| `DV` | `DataView` | Binary buffer view |
| `EL` | `Element` | DOM element |
| `EQ<X,Y>` | Conditional equality test | Tests whether two types are equivalent |
| `EX<T,U>` | `Exclude<T,U>` | Excludes union members |
| `EXT<T>` | Array element inference | Extracts array element type |
| `FR` | `DocumentFragment` | DOM fragment |
| `FD` | `FormData` | Form data representation |
| `FN<T>` | Function type | Generic function signature |
| `GEN<T,R,N>` | `Generator<T,R,N>` | Synchronous generator |
| `HE` | `HTMLElement` | HTML element |
| `IN<T,U>` | `Extract<T,U>` | Extracts matching union members |
| `IT<T>` | Constructor instance inference | Extracts constructed instance type |
| `IDX<T>` | Readonly array element inference | Extracts indexed element type |
| `ITR<T>` | `IterableIterator<T>` | Iterable iterator |
| `ITOR<T>` | `Iterator<T>` | Iterator |
| `KE` | `KeyboardEvent` | Keyboard interaction event |
| `KOF<T>` | `keyof T` | Extracts object keys |
| `MAP<K,V>` | `Map<K,V>` | Alternative map alias |
| `MUT<T>` | Removes readonly modifiers | Makes properties mutable |
| `MAY<T>` | `T \| null \| undefined` | Nullable and optional value |
| `ME` | `MouseEvent` | Mouse interaction event |
| `NOI<T>` | `NoInfer<T>` | Prevents inference from a type position |
| `OPT<T>` | `T \| undefined` | Optional value |
| `PA<T>` | `Partial<T>` | Makes properties optional |
| `PE` | `PointerEvent` | Pointer interaction event |
| `PI<T,K>` | `Pick<T,K>` | Selects object properties |
| `STR<T>` | `T extends string ? T : never` | Retains string-compatible types |
| `TL<T>` | `T['length']` | Extracts string length |
| `TUP<T>` | `[...T]` | Produces mutable tuple copy |
| `VAL<T>` | `T[keyof T]` | Extracts property value union |
| `DOMX` | `DOMException` | DOM-specific exception |
| `FREG<T>` | `FinalizationRegistry<T>` | Object finalization registry |
| `DISP` | `Disposable` | Synchronous disposal contract |
| `ADISP` | `AsyncDisposable` | Asynchronous disposal contract |
| `ERRCAUSE<T>` | `Error & { cause?: T }` | Error with typed cause |
| `DICT<T>` | `{ [key: S]: T \| undefined }` | Dictionary with potentially undefined values |
| `ROOBJ<T>` | Readonly mapped type | Readonly object properties |
| `MUTOBJ<T>` | Mutable mapped type | Removes readonly object properties |
| `VALOF<T>` | `T[keyof T]` | Extracts all property values |
| `KEYS<T>` | `keyof T` | Extracts property keys |
| `UNION<T>` | Distributive conditional type | Preserves union members |
| `ISNEVER<T>` | Conditional type | Detects never |
| `ISANY<T>` | Conditional type | Detects any |
| `ISUNKNOWN<T>` | `EQ<T,unknown>` | Detects unknown |
| `ISUNION<T>` | Conditional type | Detects union types |
| `ROARR<T>` | `readonly T[]` | Readonly array |
| `NONEMPTY<T>` | `readonly [T,...T[]]` | Nonempty readonly array |
| `FIRST<T>` | Tuple inference | Extracts first tuple element |
| `LAST<T>` | Tuple inference | Extracts last tuple element |
| `LENGTH<T>` | `T['length']` | Extracts tuple length |
| `REPLACE<S,F,T>` | Template literal conditional type | Replaces matching string segment |
| `SPLIT<S,D>` | Recursive template literal type | Splits string into tuple |
| `JOIN<T,D>` | Recursive template literal type | Joins string tuple |
| `ARGS<T>` | `Parameters<T>` | Extracts function arguments |
| `ASYNCGEN<T,R,N>` | `AsyncGenerator<T,R,N>` | Alternative async generator alias |
| `ASSERT<T>` | `T extends true` | Compile-time assertion |
| `BRAND<T,N>` | `T & { readonly __brand: N }` | Adds nominal-style type identity |
| `DIFF<T,U>` | `T extends U ? never : T` | Removes assignable members |
| `DEEP<T>` | Recursive mapped type | Recursively transforms object properties |
| `DEEPP<T>` | Recursive optional mapped type | Recursively makes object properties optional |
| `GUARD<T,U>` | `T extends U ? T : never` | Type compatibility filter |
| `INST<T>` | `InstanceType<T>` | Extracts instance type |
| `LOWER<T>` | `Lowercase<T>` | Lowercases string |
| `PARAMS<T>` | Function parameter inference | Extracts function parameters |
| `AO` | `Record<string,any>` | String-keyed object |
| `AS` | `{ self: any; [key: string]: any }` | Self-referencing structural object |
| `AF` | `(ctx: AS) => AO` | Context-based object factory |
| `AOAF` | `AO \| AF` | Object or object-producing function |
| `CHAIN` | `"chain" \| "rechain"` | Chain operation identifiers |
| `SU` | `string \| undefined` | Optional string |
| `XS` | `any` | Alternative unrestricted type |
| `Wildcard` | `"*"` | Wildcard identifier |
| `NB` | `bigint` | Bigint alias |
| `CACHE_TYPE` | Union of storage identifiers | Defines supported storage backends |
| `CACHE` | `CACHE_TYPE` | Shortened cache backend type |
| `BM<K,V>` | `BYTEOP_MAP_TYPE<K,V>` | Binary-oriented Map abstraction |
| `BYTEOP_MAP_TYPE<K,V>` | Custom interface | Map-like binary storage contract |
| `MaybePromise<R>` | `R` | Type-level MaybePromise alias |
| `MaybePromisei<R>` | Custom function | Returns defined values directly or resolves undefined through Promise |
| `dURI` | `(encodedURI: string) => string` | URI decoding |
| `eURI` | `(uri: string) => string` | URI encoding |
| `esc` | `(string: string) => string` | String escaping |
| `unesc` | `(string: string) => string` | String unescaping |
| `pInt` | `(string: string, radix?: number) => number` | Integer parsing |
| `pFloat` | `(string: string) => number` | Floating-point parsing |

## Runtime Globals

The following identifiers additionally have runtime constructor or function declarations:

| Global | Resolves To | Purpose |
|---|---|---|
| `MaybePromise` | `MaybePromisei` | Global MaybePromise runtime utility |
| `PX` | `Proxy` | Native proxy constructor |
| `B` | `Boolean` | Boolean constructor |
| `AR` | `Array` | Array constructor |
| `AB` | `ArrayBuffer` | ArrayBuffer constructor |
| `D` | `Date` | Date constructor |
| `E` | `Error` | Error constructor |
| `F` | `Function` | Function constructor |
| `J` | `JSON` | JSON namespace |
| `M` | `Map` | Map constructor |
| `N` | `Number` | Number constructor |
| `O` | `Object` | Object constructor |
| `P` | `Promise` | Promise constructor |
| `REG` | `RegExp` | Regular expression constructor |
| `S` | `String` | String constructor |
| `ST` | `Set` | Set constructor |
| `WR` | `WeakRef` | Weak reference constructor |
| `DV` | `DataView` | DataView constructor |
| `I8` | `Int8Array` | Signed 8-bit array constructor |
| `U8` | `Uint8Array` | Unsigned 8-bit array constructor |
| `U8C` | `Uint8ClampedArray` | Clamped 8-bit array constructor |
| `I16` | `Int16Array` | Signed 16-bit array constructor |
| `U16` | `Uint16Array` | Unsigned 16-bit array constructor |
| `I32` | `Int32Array` | Signed 32-bit array constructor |
| `U32` | `Uint32Array` | Unsigned 32-bit array constructor |
| `F32` | `Float32Array` | Float32 array constructor |
| `F64` | `Float64Array` | Float64 array constructor |

## Global Utility Functions

| Function | Resolves To | Purpose |
|---|---|---|
| `dURI` | URI decoder signature | Decode encoded URI |
| `eURI` | URI encoder signature | Encode URI |
| `esc` | String utility signature | Escape string |
| `unesc` | String utility signature | Unescape string |
| `pInt` | Integer parser signature | Parse integer |
| `pFloat` | Float parser signature | Parse floating-point value |

