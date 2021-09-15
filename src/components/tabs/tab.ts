import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { tabStyles } from './tab.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-tab')
export class SimplrTab extends LitElement {
    @property({ type: String, reflect: true })
    value: string = '';

    @state()
    tabText: string = '';

    @query('label')
    labelElem: HTMLLabelElement | undefined;

    firstUpdated() {
        this.setAttribute('role', 'tab');

        this.addEventListener('click', this.onSelect);
    }

    onSelect() {
        this.dispatchEvent(new CustomEvent('tab-selected', { detail: { value: this.value } }));
    }

    // Check the nodes, and move the node with the tab text into the label
    // while leaving other stuff like icons out of it
    onSlotChange(e: Event) {
        const slot = e.target as HTMLSlotElement;
        const nodes = slot.assignedNodes();
        for (const node of nodes) {
            const val = node.nodeValue?.trim();
            if (val) {
                node.nodeValue = val;
                this.labelElem?.appendChild(node);
            }
        }
    }

    render() {
        return html`<label></label><slot @slotchange=${this.onSlotChange}></slot>`;
    }

    static get styles() {
        return tabStyles;
    }
}
