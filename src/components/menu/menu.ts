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

    open() {
        this.visible = true;
    }

    close() {
        this.visible = false;
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return menuStyles;
    }
}
