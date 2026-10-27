export function MaybePromise(v) {
    return v !== undefined ? v : Promise.resolve(v);
}
