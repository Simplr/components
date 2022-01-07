import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { inputStyles } from './input.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-input')
export class SimplrInput extends LitElement {
    @property({ type: Object })
    private inputElem: HTMLInputElement | HTMLTextAreaElement | undefined;

    @property({ type: Object })
    private labelElem: HTMLLabelElement | undefined;

    @property({ type: String, reflect: true })
    label: string | undefined;

    @property({ type: String, reflect: true })
    type: string = 'text';

    @property({ type: String, reflect: true })
    name: string = '';

    @property({ type: String, reflect: true })
    placeholder: string = '';

    @property({ type: String, reflect: true })
    subtitle: string = '';

    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    @property({ type: Boolean, reflect: true })
    required: boolean = false;

    @property({ type: String, reflect: true })
    step: string | undefined;

    @property({ type: Boolean, reflect: true })
    hasContent: boolean = false;

    @property({ type: Boolean, reflect: true })
    invalid: boolean = false;

    @property({ type: Boolean, reflect: true })
    loading: boolean = false;

    @property({ type: String, reflect: true })
    value: string | undefined;

    // textarea props
    @property({ type: Number, reflect: true })
    cols: number | undefined;

    @property({ type: Number, reflect: true })
    rows: number | undefined;

    @state()
    loadingElement: HTMLElement | undefined;

    firstUpdated() {
        this.createElements();
        this.addListeners();
    }

    updated(_updatedProperties: any) {
        if (this.inputElem) {
            this.inputElem.disabled = this.disabled;
        }
        this.setElementAttributes(_updatedProperties);
    }

    private createElements(): void {
        this.labelElem = document.createElement('label');
        this.appendChild(this.labelElem);

        if (this.type === 'textarea') {
            this.inputElem = document.createElement('textarea');
        } else {
            this.inputElem = document.createElement('input');
        }
        this.appendChild(this.inputElem);
    }

    private setElementAttributes(_changedProperties: any) {
        if (this.labelElem && _changedProperties.has('label')) {
            this.labelElem.innerText = this.label || '';
            if (this.required) {
                this.labelElem.innerText = `${this.labelElem.innerText} *`;
            }
            this.labelElem.htmlFor = `${this.name}-input`;
            this.labelElem.slot = 'label-slot';
        }
        if (this.inputElem) {
            this.inputElem.id = `${this.name}-input`;
            this.inputElem.disabled = this.disabled || this.loading;
            this.inputElem.name = this.name;
            this.inputElem.autocomplete = 'off';
            this.inputElem.placeholder = this.placeholder;
            this.inputElem.value = this.value ?? '';
            if (this.inputElem instanceof HTMLInputElement) {
                this.inputElem.type = this.type;
                if (this.step) {
                    this.inputElem.step = this.step;
                }
            }
            if (this.inputElem instanceof HTMLTextAreaElement) {
                this.inputElem.cols = this.cols || 40;
                this.inputElem.rows = this.rows || 4;
            }
        }
        if (this.loading && !this.loadingElement) {
            this.loadingElement = document.createElement('simplr-loading');
            this.loadingElement.setAttribute('align', 'right');
            this.appendChild(this.loadingElement);
        }
        if (!this.loading && this.loadingElement) {
            this.loadingElement.remove();
            this.loadingElement = undefined;
        }
    }

    private addListeners(): void {
        this.inputElem?.addEventListener('input', this.handleInput.bind(this));
        this.inputElem?.addEventListener('blur', this.handleBlur.bind(this));
    }

    private handleInput(e: Event) {
        const target = e.target as HTMLInputElement;
        const hasContent = target.value.length > 0;
        this.value = target.value;
        if (!hasContent && this.hasContent) {
            this.hasContent = false;
        }
        if (hasContent && !this.hasContent) {
            this.hasContent = true;
        }
    }

    checkValidity(): boolean {
        const value = this.inputElem?.value || '';
        if (this.required && value.length <= 0) {
            this.invalid = true;
        } else {
            this.invalid = !this.inputElem?.checkValidity() || false;
        }
        return !this.invalid;
    }

    private handleBlur() {
        this.checkValidity();
    }

    render() {
        return html` <slot name="label-slot"></slot>
            <slot></slot>${this.renderSubtitle()}`;
    }

    renderSubtitle() {
        if (this.subtitle.length <= 0) return '';
        return html`<label class="subtitle">${this.subtitle}</label>`;
    }

    static get styles() {
        return inputStyles;
    }
}
