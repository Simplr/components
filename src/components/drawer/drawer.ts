import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { drawerStyles } from './drawer.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-drawer')
export class SimplrDrawer extends LitElement {
    @property({ type: String, reflect: true })
    side: 'left' | 'right' = 'left';

    @property({ type: Boolean, reflect: true, attribute: 'drawer-open' })
    drawerOpen: boolean = false;

    @property({ type: Boolean, reflect: true, attribute: 'steal-focus' })
    stealFocus: boolean = false;

    public toggle() {
        this.drawerOpen = !this.drawerOpen;
    }

    public open() {
        this.drawerOpen = true;
    }

    public close() {
        this.drawerOpen = false;
    }

    onSlotChange() {
        window.requestAnimationFrame(() => {
            this.style.setProperty('--drawer-width', `${this.clientWidth}px`);
        });
    }

    render() {
        return html`<slot @slotchange=${this.onSlotChange}></slot>
            <div class="focus-stealer" @keydown=${this.close} @click=${this.close}></div>`;
    }

    static get styles() {
        return drawerStyles;
    }
}
