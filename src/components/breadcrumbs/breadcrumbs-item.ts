import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { breadcrumbsItemStyles } from './breadcrumbs.styles';

@customElement('simplr-breadcrumbs-item')
export class SimplrBreadcrumbsItem extends LitElement {
    @property({ type: Boolean, reflect: true })
    public first: boolean = false;

    @property({ type: Boolean, reflect: true })
    public chevron: boolean = false;

    @property({ type: Boolean, reflect: true })
    public last: boolean = false;

    @property({ type: String, reflect: true })
    public href: string = '';

    render() {
        return html`
            ${this.chevron ? html`<simplr-icon icon="chevron-right" class="icon chevron"></simplr-icon>` : ``}
            <a href="${this.href}">${this.first ? html`<simplr-icon icon="house" class="icon"></simplr-icon>` : ``}</a>
            ${!this.last
                ? html`<a href="${this.href}"><slot></slot></a>`
                : html`<label><slot></slot><label></label></label>`}
        `;
    }

    static get styles() {
        return breadcrumbsItemStyles;
    }
}
