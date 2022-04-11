import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SimplrMenu, SimplrMenuItem } from '@simplr-wc/menu';
// prettier-ignore
import '@simplr-wc/menu';
// prettier-ignore
import '@simplr-wc/input';
import '@simplr-wc/icon';
import { fuzzyFind, getFrame } from '@simplr-wc/components-core';
import { SimplrInput } from '@simplr-wc/input';
import { comboboxStyles } from './combobox.styles';
import '@simplr-wc/components-core/loading';

export interface ComboBoxOption {
    value: number;
    label: string;
    subtitle?: string;
    preIcon?: string;
    postIcon?: string;
    searchWords?: string[];
}

const FOCUS_TIMEOUT = 100;

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

    @property({ type: Boolean, reflect: true })
    loading: boolean = false;

    @property({ type: Number, reflect: true })
    min: number = 3;

    @property({ type: Boolean, reflect: true })
    focused: boolean = false;

    @property({ type: String, attribute: 'no-items-found-message' })
    noItemsFoundMessage: string = 'No items found';

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage: string = 'Loading';

    @property({ type: Boolean, reflect: true })
    clearable: boolean = false;

    @property({ type: Boolean, attribute: 'clear-on-click' })
    clearOnClick: boolean = false;

    @property({ type: Boolean, attribute: 'disable-keyboard-input' })
    disableKeyboardInput: boolean = false;

    @property({ type: Number })
    selectedItem: number | undefined;

    @property({ type: Number, attribute: 'list-size' })
    listSize: number = 5;

    @property({ type: Boolean, reflect: true })
    required: boolean = false;

    @state()
    searchText: string = '';

    @query('simplr-menu')
    menu: SimplrMenu | undefined;

    @query('simplr-input')
    input: SimplrInput | undefined;

    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    firstUpdated() {
        this.checkForAssociatedForm();
    }

    checkForAssociatedForm() {
        let maybeForm = this.parentElement;
        while (maybeForm && maybeForm.nodeName !== 'FORM') {
            maybeForm = maybeForm.parentElement;
        }
        if (maybeForm) {
            // Is inside a form
            maybeForm.addEventListener('formdata', e => {
                const { formData } = e;
                formData.append(this.name, this.value.toString());
            });
        }
    }

    updated(_changedProperties: PropertyValues) {
        if (_changedProperties.has('items')) {
            setTimeout(() => {
                this.setListItemSize();
            }, FOCUS_TIMEOUT);
        }
    }

    private onInput(e: InputEvent) {
        this.searchText = (e.target as HTMLInputElement).value;
    }

    private onKeyDown(e: KeyboardEvent) {
        if (this.disableKeyboardInput) {
            e.preventDefault();
        }
    }

    private onFocus() {
        if (this.clearOnClick) {
            this.clear();
        }
        setTimeout(() => {
            this.focused = true;
        }, FOCUS_TIMEOUT);
    }

    private onBlur() {
        setTimeout(() => {
            this.focused = false;
        }, FOCUS_TIMEOUT);
    }

    private setListItemSize() {
        const item = this.shadowRoot?.querySelector('simplr-menu-item');
        this.style.setProperty('--list-max-height', `${(item?.clientHeight || 0) * this.listSize}px`);
    }

    private onItemSelected(e: CustomEvent) {
        const selectedItem = e.detail.item as SimplrMenuItem;
        if (!this.input || !selectedItem) {
            return;
        }
        const value = Number(selectedItem.dataset.value);
        const item = this.items.find(i => i.value === value);
        if (!item) {
            return;
        }

        this.selectedItem = item.value;
        this.input.value = item.label;
        this.searchText = item.label;
        this.dispatchEvent(
            new CustomEvent('simplr-combobox-item-selected', {
                detail: { item },
            }),
        );
        getFrame().then(() => {
            this.checkValidity();
        });
    }

    private getItems() {
        const shownItems = this.items.filter(this.filterItems.bind(this));
        if (shownItems.length <= 0) return html`<simplr-menu-item non-selectable>No items found</simplr-menu-item>`;
        return html`${repeat(
            shownItems,
            item => html`
                <simplr-menu-item data-value="${item.value}">
                    <span>
                        <label class="item-label">${item.label}</label>
                        <label style="font-size: 0.8rem; opacity: 0.6;">${item.subtitle ?? ''}</label>
                    </span>
                </simplr-menu-item>
            `,
        )}`;
    }

    private filterItems(item: ComboBoxOption) {
        if (this.searchText.length < this.min) return false;

        const searchWords = [...(item.searchWords ?? []), item.label, item.value, item.subtitle]
            .filter(it => it !== undefined)
            .map(it => it?.toString().toLowerCase() ?? '');
        const searchTerm = this.searchText.toLowerCase();

        if (this.fuzzy) {
            return searchWords.some(sw => fuzzyFind(searchTerm, sw));
        }
        return searchWords.some(sw => sw?.includes(searchTerm));
    }

    private isVisible() {
        return this.focused && this.searchText.length >= this.min;
    }

    public checkValidity() {
        return this.input?.checkValidity();
    }

    public get value() {
        return this.selectedItem ?? '';
    }

    public getSelectedItem() {
        return this.items.find(item => item.value === this.selectedItem);
    }

    public clear() {
        if (this.input) {
            this.input.value = '';
        }
        this.searchText = '';
        this.selectedItem = undefined;
    }

    render() {
        return html`
            <simplr-input
                @input=${this.onInput}
                @keydown=${this.onKeyDown}
                @focusin=${this.onFocus}
                @focusout=${this.onBlur}
                type="text"
                label="${this.label}"
                name="${this.name}"
                placeholder="${this.placeholder}"
                value=${this.getSelectedItem()?.label}
                ?elevated=${this.elevated}
                ?required=${this.required}
                ?disabled=${this.disabled}
            ></simplr-input>
            <simplr-menu
                ?visible=${this.isVisible()}
                anchor-to="simplr-input"
                anchor-side="bottom-center-x"
                ?elevated=${this.elevated}
                ?loading=${this.loading}
                @simplr-menu-item-selected=${this.onItemSelected}
                contained
            >
                ${this.getItems()}
            </simplr-menu>
            ${this.clearable && !this.disabled
                ? html`<button @click=${this.clear}><simplr-icon icon="x" size="1.6rem"></simplr-icon></button>`
                : ''}
        `;
    }

    static get styles() {
        return comboboxStyles;
    }
}
