import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tagStyles } from './tag.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-tag')
export class SimplrTag extends LitElement {
    @property({ type: String, reflect: true })
    status: string | undefined;

    @property({ type: String, reflect: true })
    color: string | undefined;

    @property({ type: String, reflect: true })
    background: string | undefined;

    updated(_updatedProperties: PropertyValues) {
        if (_updatedProperties.has('color')) {
            this.style.setProperty('--color', `${this.color}`);
        }
        if (_updatedProperties.has('background')) {
            this.style.setProperty('--background-color', `${this.background}`);
        }
    }

    render() {
        return html`<label><slot></slot></label>`;
    }

    static get styles() {
        return tagStyles;
    }
}
