import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { drawerItemStyles } from './drawer.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-drawer-item')
export class SimplrDrawerItem extends LitElement {
    @property({ type: String, reflect: true })
    side: 'left' | 'right' = 'left';

    @property({ type: String, reflect: true })
    href: string | undefined;

    render() {
        if (this.href) {
            return html`<a class="item-focus" href="${this.href}"
                ><slot name="icon"></slot><label><slot></slot></label
            ></a>`;
        }
        return html`<button class="item-focus">
            <slot name="icon"></slot><label><slot></slot></label>
        </button>`;
    }

    static get styles() {
        return drawerItemStyles;
    }
}
