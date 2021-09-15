import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { listStyles } from './list.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-list')
export class SimplrList extends LitElement {
    @property({ type: Boolean, reflect: true })
    elevated: boolean = false;

    render() {
        return html` <slot> </slot> `;
    }

    static get styles() {
        return listStyles;
    }
}
