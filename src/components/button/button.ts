import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './button.styles';
import '../../core/loading/loading';

@customElement('simplr-button')
export class SimplrButton extends LitElement {
    @property({ reflect: true, type: Boolean }) active = false;
    // Button status
    @property({ reflect: true, type: Boolean })
    disabled: boolean = false;
    @property({ reflect: true, type: Boolean })
    loading: boolean = false;
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
    @query('button')
    buttonElem: HTMLButtonElement | undefined;

    firstUpdated() {
        this.addEventListeners();
    }

    private addEventListeners() {
        this.buttonElem?.addEventListener(
            'keyup',
            this.handleKeyboardEvent.bind(this)
        );
        this.buttonElem?.addEventListener('click', this.onClick.bind(this), true);
    }

    private onClick(e: MouseEvent) {
        if (e.target === this) {
            e.preventDefault();
            e.stopPropagation();
            this.doClick();
        }
    }

    private handleKeyboardEvent(e: KeyboardEvent) {
        if (e.key === ' ' || e.key === 'Enter') {
            this.doClick();
            this.active = true;
            window.requestAnimationFrame(() => (this.active = false));
        }
    }

    public doClick() {
        this.buttonElem?.click();
        this.focus();
    }

    render(): TemplateResult {
        return html`<button>
      ${this.loading ? html`<simplr-loading></simplr-loading>` : ''}
      <slot></slot>
    </button>`;
    }

    static get styles() {
        return buttonStyles;
    }
}
