export function MaybePromisei(v) {
    return v !== undefined ? v : Promise.resolve(v);
}
