export function removeKey(object: any, key: any) {
    const { [key]: _, ...newObject } = object;
    return newObject;
}
