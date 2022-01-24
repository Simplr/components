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

    @property({ type: String, reflect: true })
    href: string | undefined;

    render() {
        if (this.href) {
            return this.renderLinkCard();
        }
        return this.renderRegularCard();
    }

    renderRegularCard() {
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

    renderLinkCard() {
        return html` <a href="${this.href}"> ${this.renderRegularCard()} </a> `;
    }

    static get styles() {
        return cardStyles;
    }
}
