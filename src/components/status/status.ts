import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { statusStyles } from './status.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-status')
export class SimplrStatus extends LitElement {
    @property({ type: String })
    status: string = 'main';

    @property({ type: String })
    color: string | undefined;

    updated(_updatedProperties: PropertyValues) {
        if (_updatedProperties.has('color')) {
            this.style.setProperty('--color', `${this.color}`);
        }
    }

    render() {
        return html`<span></span><slot></slot>`;
    }

    static get styles() {
        return statusStyles;
    }
}
