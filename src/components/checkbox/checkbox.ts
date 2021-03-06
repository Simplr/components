import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { checkboxStyles } from './checkbox.styles';

@customElement('simplr-checkbox')
export class SimplrCheckbox extends LitElement {
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
    indeterminate: boolean = false;

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

    updated(_updatedProperties: PropertyValues) {
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
            this.inputElem?.addEventListener('input', (e: Event) => {
                const input = e.target as HTMLInputElement;
                this.checked = input.checked;
            });
            this.inputElem?.addEventListener('click', e => e.stopPropagation());

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
        this.inputElem.type = 'checkbox';
        this.labelElem = document.createElement('label');

        this.appendChild(this.inputElem);
        this.appendChild(this.labelElem);
    }

    private createId(): string {
        const id = `checkbox-${this.name}`;
        let { label } = this;
        if (label.includes(' ')) {
            [label] = [...label.split(' ')];
        }
        return `${id}-${label}`;
    }

    private updateInputAttributes(_updatedProperties: any) {
        const id = this.createId();
        if (this.inputElem) {
            this.inputElem.name = this.name;
            this.inputElem.id = id;
            this.inputElem.value = this.value;
            this.inputElem.checked = this.checked;
            this.inputElem.disabled = this.disabled;
        }
        if (this.labelElem) {
            if (_updatedProperties.has('label') || _updatedProperties.has('name')) {
                this.labelElem.innerText = this.label;
                this.labelElem.setAttribute('for', id);
            }
        }
    }

    getPath(): string {
        if (this.checked) {
            return 'M1.5 12.5 l7.5 6 l12 -15';
        }
        if (this.indeterminate) {
            return 'M3.5 12.5 l17 0';
        }
        return '';
    }

    render() {
        return html`<div class="checkbox-field">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="${this.getPath()}" />
                </svg>
            </div>
            <slot></slot>`;
    }

    static get styles() {
        return checkboxStyles;
    }
}
