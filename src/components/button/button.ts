import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './button.styles';

@customElement('simplr-button')
export class SimplrButton extends LitElement {
    // Button status
    @property({ reflect: true, type: Boolean })
    disabled: boolean = false;
    // Button style
    @property({ reflect: true, type: Boolean })
    outlined: boolean = false;
    @property({ reflect: true, type: Boolean })
    contained: boolean = false;
    @property({ reflect: true, type: Boolean })
    elevated: boolean = false;
    @property({ reflect: true, type: Boolean })
    rounded: boolean = false;

    // Button types
    @property({ reflect: true, type: Boolean })
    primary: boolean = false;
    @property({ reflect: true, type: Boolean })
    secondary: boolean = false;
    @property({ reflect: true, type: Boolean })
    success: boolean = false;

    // Button props
    @property({ reflect: true })
    type: string = 'button';
    @property({ reflect: true })
    label: string = 'button';
    @property({})
    buttonElem: HTMLButtonElement | undefined;

    firstUpdated() {
        this.tabIndex = 0;
        this.addEventListeners();
    }

    private addEventListeners() {
        this.addEventListener('keyup', this.handleKeyboardEvent.bind(this));
        this.addEventListener(
            'click',
            e => {
                // Don't bubble the click event from this one. Bubble it from the actual button
                if (e.target === this) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.doClick();
                }
            },
            true
        );
    }

    private handleKeyboardEvent(e: KeyboardEvent) {
        if (e.key === ' ' || e.key === 'Enter') {
            this.doClick();
        }
    }

    public doClick() {
        this.buttonElem?.click();
    }

    render(): TemplateResult {
        return html`<slot></slot>`;
    }

    static get styles() {
        return buttonStyles;
    }
}
