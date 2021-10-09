import { removeKey } from './objects.js';

export function getFrame(): Promise<void> {
    return new Promise(resolve => window.requestAnimationFrame(() => resolve()));
}

let debounceCache = {} as Record<string, ReturnType<typeof setTimeout>>;

export function debounce(debounceEventId: string, timeout: number, callback: Function) {
    if (debounceCache[debounceEventId]) {
        clearTimeout(debounceCache[debounceEventId]);
    }

    debounceCache[debounceEventId] = setTimeout(() => {
        debounceCache = removeKey(debounceCache, debounceEventId);
        callback();
    }, timeout);
}
