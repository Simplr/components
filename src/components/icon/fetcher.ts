import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const CDN_URL = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/icons/';
const iconCache = new Map();

export async function getIconSvg(iconName: string): Promise<TemplateResult> {
    const iconUrl = `${CDN_URL + iconName}.svg`;

    let iconResult;
    if (iconCache.has(iconUrl)) {
        iconResult = await iconCache.get(iconUrl);
    } else {
        iconResult = await fetch(iconUrl).then(res => res.text());
        iconCache.set(iconUrl, iconResult);
    }

    if (!iconResult.includes('<svg')) {
        console.warn(`Icon ${iconName} not found!`);
        return html``;
    }

    return html`${unsafeHTML(iconResult)}`;
}
