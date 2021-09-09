import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { inputStyles } from './input.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-input')
export class SimplrInput extends LitElement {
    @property({ type: Object })
    private inputElem: HTMLInputElement | undefined;

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

        this.inputElem = document.createElement('input');
        this.appendChild(this.inputElem);
    }

    private setElementAttributes(_changedProperties: any) {
        if (this.labelElem && _changedProperties.has('label')) {
            this.labelElem.innerText = this.label || '';
        }
        if (this.inputElem) {
            this.inputElem.type = this.type;
            this.inputElem.disabled = this.disabled;
            this.inputElem.name = this.name;
            if (this.step) {
                this.inputElem.step = this.step;
            }
        }
    }

    private addListeners(): void {
        this.inputElem?.addEventListener('input', this.handleInput.bind(this));
        this.inputElem?.addEventListener('focus', this.handleFocus.bind(this));
        this.inputElem?.addEventListener('blur', this.handleBlur.bind(this));
    }

    private handleInput(e: Event) {
        const target = e.target as HTMLInputElement;
        const hasContent = target.value.length > 0;
        if (!hasContent && this.hasContent) {
            this.hasContent = false;
        }
        if (hasContent && !this.hasContent) {
            this.hasContent = true;
        }
    }

    validate(): void {
        const value = this.inputElem?.value || '';
        if (this.required && value.length <= 0) {
            this.invalid = true;
            return;
        }
        this.invalid = !this.inputElem?.checkValidity() || false;
    }

    private handleFocus() {
        if (this.inputElem) {
            this.inputElem.placeholder = this.placeholder;
        }
    }

    private handleBlur() {
        if (this.inputElem) {
            this.inputElem.placeholder = '';
        }
        this.validate();
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return inputStyles;
    }
}
