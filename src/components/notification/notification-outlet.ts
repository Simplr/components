import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simplr-notification-outlet')
export class SimplrNotificationOutlet extends LitElement {
    static styles = css`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: fit-content;
            z-index: 900;
        }
    `;

    render() {
        return html`<slot></slot>`;
    }
}
