import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { menuStyles } from './menu.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-menu')
export class SimplrMenu extends LitElement {
    @property({ type: Boolean, reflect: true })
    elevated: boolean = false;

    @property({ type: Boolean, reflect: true })
    visible: boolean = false;

    @property({ type: String, reflect: true })
    dir: 'up' | 'down' = 'down';

    outsideClickHandle: any;

    firstUpdated() {
        this.outsideClickHandle = this.closeOnOutsideClick.bind(this);
    }

    open() {
        this.visible = true;
        window.requestAnimationFrame(() => {
            document.addEventListener('click', this.outsideClickHandle);
        });
        this.doEvent();
    }

    close() {
        this.visible = false;
        document.removeEventListener('click', this.outsideClickHandle);
        this.doEvent();
    }

    doEvent() {
        const ev = new CustomEvent('simplr-menu-toggle', { detail: { visible: this.visible } });
        this.dispatchEvent(ev);
    }

    closeOnOutsideClick(e: MouseEvent) {
        if (e.target !== this && !this.contains(e.target as Node)) {
            this.close();
        }
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return menuStyles;
    }
}
