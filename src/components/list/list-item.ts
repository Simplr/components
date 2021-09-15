import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { listItemStyles } from './list.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-list-item')
export class SimplrListItem extends LitElement {
    @property({ type: Boolean, reflect: true })
    header: boolean = false;

    render() {
        return html`
            <slot> </slot>
            <slot name="right"></slot>
        `;
    }

    static get styles() {
        return listItemStyles;
    }
}
