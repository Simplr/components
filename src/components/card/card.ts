import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardStyles } from './card.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-card')
export class SimplrCard extends LitElement {
    @property({ type: String, reflect: true })
    label: string | undefined;

    @property({ type: String, reflect: true })
    subtitle: string | undefined;

    render() {
        return html`
            <slot name="media"></slot>
            <div class="content">
                <h2>${this.label}</h2>
                <p>${this.subtitle}</p>
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        `;
    }

    static get styles() {
        return cardStyles;
    }
}
