export function getFrame(): Promise<void> {
    return new Promise(resolve => window.requestAnimationFrame(() => resolve()));
}

export function debounce() {}
