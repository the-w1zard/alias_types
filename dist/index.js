export function MaybePromisei(v) {
    return v !== undefined ? v : Promise.resolve(v);
}
globalThis.MaybePromise = MaybePromisei;
globalThis.PX = Proxy;
export const UFI = (v) => typeof v === "function" ? v() : v;
globalThis.UF = UFI;
// resolve optional unknown-or-factory
export const UFOI = (v) => v === undefined ? undefined : UFI(v);
globalThis.UFO = UFOI;
// resolve unknown-or-updater, React-style
export const UFUI = (v, old) => typeof v === "function" ? v(old) : v;
globalThis.UFU = UFUI;
export const UFDI = (v, d) => v === undefined ? UFI(d) : v;
globalThis.UFD = UFDI;
// const timeout = UFD(config.timeout, () => calculateTimeout());
export const UFMI = (v, d) => v == null ? UFI(d) : v;
globalThis.UFM = UFMI;
// const value = UFM(input, () => defaultValue);
export const UFAI = async (v) => await (typeof v === "function" ? v() : v);
globalThis.UFA = UFAI;
// const config = await UFA(loadConfig);
export const UFPI = (v) => P.resolve(v);
globalThis.UFP = UFPI;
// const result = await UFP(possiblyAsyncValue);
