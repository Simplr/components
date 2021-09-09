import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { dialogStyles } from './dialog.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-dialog')
export class SimplrDialog extends LitElement {
    render() {
        return html``;
    }

    static get styles() {
        return dialogStyles;
    }
}
