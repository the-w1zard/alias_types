
export type MaybePromise<R = any> = R;
export function MaybePromisei<R = any>(v: R): MaybePromise {
    return v !== undefined ? v as R : Promise.resolve(v) as Promise<R> 
}
