import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SimplrInput } from '@simplr-wc/input';
import { SimplrMenu, SimplrMenuItem } from '@simplr-wc/menu';
import { fuzzyFind } from '@simplr-wc/components-core';
import { comboboxStyles } from './combobox.styles';

export interface ComboBoxOption {
    value: any;
    label: string;
    subtitle?: string;
    preIcon?: string;
    postIcon?: string;
    searchWords?: string[];
}

@customElement('simplr-combobox')
export class SimplrCombobox extends LitElement {
    @property({ type: String, reflect: true })
    label: string = '';

    @property({ type: String, reflect: true })
    name: string = '';

    @property({ type: String, reflect: true })
    placeholder: string = '';

    @property({ type: Boolean, attribute: 'highlight-matches' })
    highlightMatches: boolean = false;

    @property({ type: Boolean, reflect: true })
    elevated: boolean = false;

    @property({ type: Boolean, reflect: true })
    fuzzy: boolean = false;

    @property({ type: Array })
    items: ComboBoxOption[] = [];

    @property({ type: Number, reflect: true })
    min: number = 3;

    @property({ type: String, attribute: 'no-items-found-message' })
    noItemsFoundMessage: string = 'No items found';

    @state()
    searchText: string = '';

    @query('simplr-menu')
    menu: SimplrMenu | undefined;

    @query('simplr-input')
    input: SimplrInput | undefined;

    private onInput(e: InputEvent) {
        this.searchText = (e.target as HTMLInputElement).value;
    }

    private onFocus() {
        if (this.isVisible()) {
            setTimeout(() => {
                this.menu?.open();
            }, 200);
        }
    }

    private onBlur() {
        if (this.isVisible()) {
            setTimeout(() => {
                this.menu?.close();
            }, 200);
        }
    }

    private onItemSelected(e: CustomEvent) {
        const selectedItem = e.detail.item as SimplrMenuItem;
        if (this.input) {
            this.input.value = selectedItem.innerText;
            this.searchText = selectedItem.innerText;
        }
    }

    private getItems() {
        const shownItems = this.items.filter(this.filterItems.bind(this));
        if (shownItems.length <= 0) return html`<simplr-menu-item non-selectable>No items found</simplr-menu-item>`;
        return html`${repeat(shownItems, item => html`<simplr-menu-item>${item.label}</simplr-menu-item> `)}`;
    }

    private filterItems(item: ComboBoxOption) {
        if (this.searchText.length < this.min) return false;

        const searchWords = [...(item.searchWords ?? []), item.label, item.value, item.subtitle]
            .filter(it => it !== undefined)
            .map(it => it.toLowerCase());
        const searchTerm = this.searchText.toLowerCase();

        if (this.fuzzy) {
            return searchWords.some(sw => fuzzyFind(searchTerm, sw));
        }
        return searchWords.some(sw => sw.includes(searchTerm));
    }

    private isVisible() {
        return this.searchText.length >= this.min;
    }

    render() {
        return html`
            <simplr-input
                @input=${this.onInput}
                @focusin=${this.onFocus}
                @focusout=${this.onBlur}
                type="text"
                label="${this.label}"
                name="${this.name}"
                placeholder="${this.placeholder}"
                ?elevated=${this.elevated}
            ></simplr-input>
            <simplr-menu
                ?visible=${this.isVisible()}
                anchor-to="simplr-input"
                anchor-side="bottom-center-x"
                ?elevated=${this.elevated}
                @simplr-menu-item-selected=${this.onItemSelected}
            >
                ${this.getItems()}
            </simplr-menu>
        `;
    }

    static get styles() {
        return comboboxStyles;
    }
}
