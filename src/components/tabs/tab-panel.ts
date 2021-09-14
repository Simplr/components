import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tabPanelStyles } from './tab.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-tab-panel')
export class SimplrTabPanel extends LitElement {
    firstUpdated() {
        this.setAttribute('role', 'tab-panel');
    }

    render() {
        return html`<p>Foo</p>`;
    }

    static get styles() {
        return tabPanelStyles;
    }
}
