import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { menuItemStyles } from './menu.styles';

@customElement('simplr-menu-item')
export class SimplrMenuItem extends LitElement {
    @property({ type: Boolean, reflect: true })
    selected: boolean = false;

    @property({ type: Boolean, reflect: true })
    divider: boolean = false;

    @property({ type: Boolean, attribute: 'non-selectable' })
    nonSelectable: boolean = false;

    firstUpdated() {
        this.addEventListener('click', this.launchSelectEvent.bind(this));
    }

    launchSelectEvent() {
        this.dispatchEvent(new CustomEvent('simplr-menu-item-selected', { detail: { item: this }, bubbles: true }));
    }

    render() {
        if (this.divider) return html``;
        return html`
            <button>
                <slot name="icon-before"></slot>
                <slot></slot>
                <slot name="icon-after"></slot>
            </button>
        `;
    }

    static get styles() {
        return menuItemStyles;
    }
}
