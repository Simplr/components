import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { menuItemStyles } from './menu.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-menu-item')
export class SimplrMenuItem extends LitElement {
    @property({ type: Boolean, reflect: true })
    divider: boolean = false;

    render() {
        return html`
            <slot name="icon-before"></slot>
            <slot></slot>
            <slot name="icon-after"></slot>
        `;
    }

    static get styles() {
        return menuItemStyles;
    }
}
