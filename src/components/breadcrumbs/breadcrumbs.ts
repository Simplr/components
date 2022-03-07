import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SimplrBreadcrumbsItem } from './breadcrumbs-item.js';
import { breadcrumbsStyles } from './breadcrumbs.styles.js';

@customElement('simplr-breadcrumbs')
export class SimplrBreadcrumbs extends LitElement {
    render() {
        return html`<slot @slotchange="${this.handleItems}"></slot>`;
    }

    handleItems(e: any) {
        const slot = e.target as HTMLSlotElement;
        const items = slot.assignedElements();

        items.forEach((item, i) => {
            const breadcrumbItem = item as SimplrBreadcrumbsItem;

            breadcrumbItem.first = i === 0;
            breadcrumbItem.chevron = i !== 0;
            breadcrumbItem.last = i === items.length - 1;
        });
    }

    static get styles() {
        return breadcrumbsStyles;
    }
}
