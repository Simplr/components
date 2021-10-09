import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SimplrBreadcrumbsItem } from './breadcrumbs-item';
import { breadcrumbsStyles } from './breadcrumbs.styles';

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

            if (i === 0) breadcrumbItem.first = true;
            if (i !== 0) breadcrumbItem.chevron = true;
            if (i === items.length - 1) breadcrumbItem.last = true;
        });
    }

    static get styles() {
        return breadcrumbsStyles;
    }
}
