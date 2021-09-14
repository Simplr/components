import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tabStyles } from './tab.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-tab')
export class SimplrTab extends LitElement {
    @property({ type: String, reflect: true })
    value: string = '';

    firstUpdated() {
        this.setAttribute('role', 'tab');

        this.addEventListener('click', this.onSelect);
    }

    onSelect() {
        this.dispatchEvent(new CustomEvent('tab-selected', { detail: { value: this.value } }));
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return tabStyles;
    }
}
