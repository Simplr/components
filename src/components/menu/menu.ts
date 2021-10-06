import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { menuStyles } from './menu.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-menu')
export class SimplrMenu extends LitElement {
    @property({ type: Boolean, reflect: true })
    elevated: boolean = false;

    @property({ type: Boolean, reflect: true })
    visible: boolean = false;

    @property({ type: String, reflect: true })
    dir: 'up' | 'down' = 'down';

    @property({ type: String, attribute: 'anchor-to' })
    anchorTo: string | undefined;

    @property({ type: String, attribute: 'anchor-side' })
    anchorSide: string | undefined;

    @state()
    mousePos: { x: number; y: number } = { x: 0, y: 0 };

    outsideClickHandle: any;

    firstUpdated() {
        this.outsideClickHandle = this.closeOnOutsideClick.bind(this);
        document.addEventListener('mousemove', e => {
            this.mousePos = { x: e.x, y: e.y };
        });
    }

    updated(_changeProperties: PropertyValues) {
        // If toggled open
        if (_changeProperties.has('visible') && this.visible) {
            this._handleMenuPosition();
        }
    }

    _handleMenuPosition() {
        if (this._isAnchored()) {
            const anchorTarget = document.querySelector(`${this.anchorTo}`);
            if (!anchorTarget) return;

            const boundingRect = anchorTarget?.getBoundingClientRect();
            let xOffset = boundingRect.x;
            let yOffset = boundingRect.y;

            if (this.anchorSide?.includes('right')) {
                xOffset = boundingRect.x + boundingRect.width;
            }
            if (this.anchorSide?.includes('left')) {
                xOffset = boundingRect.x - this.offsetWidth;
            }
            if (this.anchorSide?.includes('top')) {
                yOffset = boundingRect.y - this.offsetHeight;
            }
            if (this.anchorSide?.includes('bottom')) {
                yOffset = boundingRect.y + boundingRect.height;
            }

            this.style.setProperty('--offset-top', `${yOffset}px`);
            this.style.setProperty('--offset-left', `${xOffset}px`);
        } else {
            this.style.setProperty('--offset-top', `${this.mousePos.y}px`);
            this.style.setProperty('--offset-left', `${this.mousePos.x}px`);
        }
    }

    _isAnchored() {
        return this.anchorTo !== undefined && this.anchorSide !== undefined;
    }

    open() {
        this.visible = true;
        window.requestAnimationFrame(() => {
            document.addEventListener('click', this.outsideClickHandle);
        });
        this.doEvent();
    }

    close() {
        this.visible = false;
        document.removeEventListener('click', this.outsideClickHandle);
        this.doEvent();
    }

    doEvent() {
        const ev = new CustomEvent('simplr-menu-toggle', { detail: { visible: this.visible } });
        this.dispatchEvent(ev);
    }

    closeOnOutsideClick(e: MouseEvent) {
        if (e.target !== this && !this.contains(e.target as Node)) {
            this.close();
        }
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return menuStyles;
    }
}
