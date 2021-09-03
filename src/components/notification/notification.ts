import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { errorSign } from './notification.icons';
import { notificationStyles } from './notification.styles';

type NotificationRole = 'info' | 'error' | 'warning' | 'success';
export type SimplrNotificationOptions = {
  timeout?: number;
  title: string;
  message: string;
  role?: NotificationRole | string;
};

/**
 *   A Notification element From Simplr Components
 *
 *   Usage:
 *
 *   SimplrNotification.open({ title, message, role?, timeout? });
 *
 *   Create a new Notification by calling the static function SimplrNotification.open();
 *
 *   @element simplr-notification
 *
 *   @prop {number} timeout          - Timeout of the Notification. Defaults to 4000, Set to 0 to disable timeout.
 *   @prop {string} title            - Title of the Notification
 *   @prop {string} message          - Message of the Notification
 *   @prop {NotificationRole} role   - Role of the Notification. Determines the color and icon.
 *
 *   @csspart [--success-color=#41d888]     - Color of the success-role Notification
 *   @csspart [--error-color=#f94416]       - Color of the error-role Notification
 *   @csspart [--info-color=#0087d7]        - Color of the info-role Notification
 *   @csspart [--warning-color=#ffbc00]     - Color of the warning-role Notification
 *
 * */
@customElement('simplr-notification')
export class SimplrNotification extends LitElement {
  @property({ type: Number })
  timeout: number = 4000;

  @property({ type: String })
  title: string = '';

  @property({ type: String })
  message: string = '';

  @property({ type: String })
  role: NotificationRole | string = 'info';

  private closeNotificationRef: any | undefined;

  /**
   * Spawn a new Simplr Notification
   *
   * @param {SimplrNotificationOptions} options    - Options to build Notification from
   * */
  public static open(options: SimplrNotificationOptions) {
    const notification = document.createElement(
      'simplr-notification'
    ) as SimplrNotification;
    if (typeof options.timeout !== 'undefined') {
      notification.timeout = options.timeout;
      notification.style.setProperty(
        '--animation-duration',
        `${options.timeout}ms`
      );
    }
    notification.title = options.title;
    notification.message = options.message;
    if (options.role) {
      notification.role = options.role;
    }
    document.body.appendChild(notification);
  }

  firstUpdated() {
    this.setAttribute(this.role, '');
    this.addCloseListener();
  }

  private addCloseListener(): void {
    if (this.timeout > 0) {
      window.requestAnimationFrame(() => {
        this.closeNotificationRef = this.closeNotification.bind(this);
        const timeoutbar = this.shadowRoot?.querySelector('.timeout-bar');

        timeoutbar?.addEventListener('animationend', this.closeNotificationRef);
      });
    }
  }

  private closeNotification(): void {
    if (this.closeNotificationRef) {
      this.removeEventListener('animationend', this.closeNotificationRef);
    }

    this.addEventListener('animationend', () => {
      this.remove();
    });
    this.setAttribute('closing', '');
  }

  private closeNotificationKeyboard(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.closeNotification();
    }
  }

  render(): TemplateResult {
    return html`
      <div class="notification">
        <div class="icon-area">
          <div class="status-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="" />
            </svg>
          </div>
        </div>
        <div class="information-area">
          <h2>${this.title}</h2>
          <p>${this.message}</p>
        </div>
        <div
          class="exit-button"
          @click=${this.closeNotification}
          @keydown=${this.closeNotificationKeyboard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="${errorSign}" />
          </svg>
        </div>
        <div class="timeout-bar"></div>
      </div>
    `;
  }

  static get styles() {
    return notificationStyles;
  }
}
