import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { radioStyles } from './radio.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-radio')
export class SimplrRadio extends LitElement {
    @property({ type: String, reflect: true })
    label: string = '';

    @property({ type: String, reflect: true })
    name: string = '';

    @property({ type: String, reflect: true })
    value: string = '';

    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    @property({ type: Boolean, reflect: true })
    checked: boolean = false;

    @property({ type: Boolean, reflect: true })
    primary: boolean = false;

    @property({ type: Boolean, reflect: true })
    secondary: boolean = false;

    @property({ type: Boolean, reflect: true })
    success: boolean = false;

    @property({ type: Object })
    inputElem: HTMLInputElement | undefined;

    @property({ type: Object })
    labelElem: HTMLLabelElement | undefined;

    firstUpdated() {
        this.createInputComponent();
        this.addListeners();
    }

    updated(_updatedProperties: any) {
        this.updateInputAttributes(_updatedProperties);
    }

    private addListeners() {
        this.addEventListener('click', (e: Event) => {
            e.stopPropagation();
            if (this.inputElem) {
                this.inputElem.click();
            }
        });
        window.requestAnimationFrame(() => {
            document.querySelectorAll(`input[name='${this.name}']`).forEach(radio => {
                radio.addEventListener('input', e => {
                    const target = e.target as SimplrRadio;
                    if (target.value === this.value) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                });
                radio.addEventListener('click', e => e.stopPropagation());
            });

            this.labelElem?.addEventListener(
                'click',
                () => {
                    if (this.inputElem) {
                        this.inputElem.click();
                    }
                },
                true,
            );
        });
    }

    private createInputComponent() {
        this.inputElem = document.createElement('input');
        this.inputElem.type = 'radio';
        this.labelElem = document.createElement('label');

        this.appendChild(this.inputElem);
        this.appendChild(this.labelElem);
    }

    private updateInputAttributes(_updatedProperties: any) {
        if (this.inputElem) {
            this.inputElem.name = this.name;
            this.inputElem.id = `radio-${this.value}`;
            this.inputElem.value = this.value;
            this.inputElem.checked = this.checked;
            this.inputElem.disabled = this.disabled;
        }
        if (this.labelElem) {
            if (_updatedProperties.has('label') || _updatedProperties.has('name')) {
                this.labelElem.innerText = this.label;
                this.labelElem.setAttribute('for', `radio-${this.value}`);
            }
        }
    }

    render() {
        return html`<div class="radio-field">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="${this.checked ? 'M1.5 12.5 l7.5 6 l12 -15' : ''}" />
                </svg>
            </div>
            <slot></slot>`;
    }

    static get styles() {
        return radioStyles;
    }
}
