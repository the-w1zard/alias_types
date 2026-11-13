import "./global.d.ts";
export declare const UFI: <T>(v: UF<T>) => T;
export declare const UFOI: <T>(v: UF<T> | UD) => T | UD;
export declare const UFUI: <T>(v: UF<T>, old: T) => T;
export declare const UFDI: <T>(v: T | UD, d: UF<T>) => T;
export declare const UFMI: <T>(v: T | null | UD, d: UF<T>) => T;
export declare const UFAI: <T>(v: T | P<T> | (() => T | P<T>)) => P<AWD<T>>;
export declare const UFPI: <T>(v: T | P<T>) => P<AWD<T>>;
