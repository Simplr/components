import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getFrame } from '@simplr-wc/components-core';
import { dialogStyles } from './dialog.styles';

@customElement('simplr-dialog')
export class SimplrDialog extends LitElement {
    @property({ type: Boolean, reflect: true })
    visible: boolean = false;

    @property({ type: Boolean, reflect: true })
    hideclose: boolean = false;

    public async open(): Promise<void> {
        // One for the money
        await getFrame();
        // Two for the show
        await getFrame();
        // In all seriousness, the first is for the Custom Element to land on DOM,
        // the second if for the content inside it to land on the DOM
        this.visible = true;
    }

    public close(): void {
        this.shadowRoot?.querySelector('.dialog-area')?.addEventListener('transitionend', () => {
            this.remove();
        });
        this.visible = false;
    }

    render() {
        return html`
            <div class="dialog-area">
                ${this.createCloseArea()}
                <slot></slot>
            </div>
        `;
    }

    private createCloseArea(): TemplateResult {
        if (this.hideclose) return html``;
        return html`<button class="close-button" @click=${this.close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                />
            </svg>
        </button>`;
    }

    static get styles() {
        return dialogStyles;
    }
}
