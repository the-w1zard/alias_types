export type MaybePromise<R = any> = R;
export function MaybePromisei<R = any>(v: R): MaybePromise {
    return v !== undefined ? v as R : Promise.resolve(v) as Promise<R> 
}

globalThis.MaybePromise = MaybePromisei;
globalThis.PX = Proxy;

export const UFI = <T>(v: UF<T>): T => typeof v === "function" ? (v as () => T)() : v;
(globalThis as any).UF = UFI;
// resolve optional unknown-or-factory
export const UFOI = <T>(v: UF<T> | UD): T | UD =>  v === undefined ? undefined : UFI(v);
(globalThis as any).UFO = UFOI;
// resolve unknown-or-updater, React-style
export const UFUI = <T>(v: UF<T>, old: T): T => typeof v === "function" ? (v as (old: T) => T)(old) : v;
(globalThis as any).UFU = UFUI;
export const UFDI = <T>(v: T | UD, d: UF<T>): T =>v === undefined ? UFI(d) : v;
(globalThis as any).UFD = UFDI;
// const timeout = UFD(config.timeout, () => calculateTimeout());
export const UFMI = <T>(v: T | null | UD, d: UF<T>): T => v == null ? UFI(d) : v;
(globalThis as any).UFM = UFMI;
// const value = UFM(input, () => defaultValue);
export const UFAI = async <T>(v: T | P<T> | (() => T | P<T>)): P<AWD<T>> => await (typeof v === "function" ? (v as () => T | P<T>)() : v);
(globalThis as any).UFA = UFAI;
// const config = await UFA(loadConfig);
export const UFPI = <T>(v: T | P<T>): P<AWD<T>> => P.resolve(v);
(globalThis as any).UFP = UFPI;
// const result = await UFP(possiblyAsyncValue);
