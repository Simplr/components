import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { debounce, isArrowDown, isArrowUp, isEnter, isEsc } from '@simplr-wc/components-core';
import { menuStyles } from './menu.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-menu')
export class SimplrMenu extends LitElement {
    @property({ type: Boolean, reflect: true })
    elevated: boolean = false;

    @property({ type: Boolean, reflect: true })
    contained: boolean = false;

    @property({ type: Boolean, reflect: true })
    visible: boolean = false;

    @property({ type: String, reflect: true })
    dir: 'up' | 'down' = 'down';

    @property({ type: String, attribute: 'anchor-to' })
    anchorTo: string | undefined;

    @property({ type: String, attribute: 'anchor-side' })
    anchorSide: string | undefined;

    @property({ type: Boolean, reflect: true })
    loading: boolean = false;

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage: string = 'Loading...';

    @state()
    items: HTMLElement[] = [];

    @state()
    focuseditemIndex: number = -1;

    @state()
    mousePos: { x: number; y: number } = { x: 0, y: 0 };

    @state()
    transitioning: boolean = false;

    @query('slot')
    itemSlot: HTMLSlotElement | undefined;

    // Event listener handles with binds on them
    // Used for cleanup
    outsideClickHandle: any;

    mouseMoveHandle: any;

    keyDownHandle: any;

    resizeObserver: ResizeObserver | undefined;

    constructor() {
        super();
        // Save references so that we can later remove listeners to these
        this.outsideClickHandle = this.closeOnOutsideClick.bind(this);
        this.mouseMoveHandle = this.updateMousePos.bind(this);
        this.keyDownHandle = this.doKeyboardNavigation.bind(this);
    }

    firstUpdated() {
        if (!this.anchorTo) {
            document.addEventListener('mousemove', this.mouseMoveHandle);
        }

        this.resizeObserver = new ResizeObserver(() => {
            this.queueResize();
        });
        this.resizeObserver.observe(this);

        this.addEventListener('click', () => this.close());
    }

    updated(_changeProperties: PropertyValues) {
        // If toggled open
        if (_changeProperties.has('visible')) {
            if (this.visible) {
                document.addEventListener('keydown', this.keyDownHandle);
                this._handleMenuPosition();
            } else {
                document.removeEventListener('keydown', this.keyDownHandle);
            }
        }
    }

    disconnectedCallback() {
        document.removeEventListener('mousemove', this.mouseMoveHandle);
        this.resizeObserver?.unobserve(this);
        this.resizeObserver?.disconnect();
    }

    private updateMousePos(e: MouseEvent) {
        this.mousePos = { x: e.x, y: e.y };
    }

    private queueResize() {
        debounce('menu-resize', 200, () => {
            if (!this.transitioning) {
                this.setHeight();
            }
        });
    }

    private doKeyboardNavigation(e: KeyboardEvent) {
        if (isArrowDown(e)) {
            e.preventDefault();
            this.moveDown();
        }
        if (isArrowUp(e)) {
            e.preventDefault();
            this.moveUp();
        }

        if (isEnter(e)) {
            this.selectFocusedItem();
        }

        if (isEsc(e)) {
            this.close();
        }
    }

    private moveDown() {
        if (this.focuseditemIndex < this.items.length - 1) {
            this.focuseditemIndex += 1;
            this.setSelectedOnFocusedItem();
        }
    }

    private moveUp() {
        if (this.focuseditemIndex > 0) {
            this.focuseditemIndex -= 1;
            this.setSelectedOnFocusedItem();
        }
    }

    private removeSelectedStatuses() {
        this.items
            .filter(item => item.hasAttribute('selected'))
            .forEach(item => {
                item.removeAttribute('selected');
            });
    }

    private setSelectedOnFocusedItem() {
        this.removeSelectedStatuses();
        this.items[this.focuseditemIndex].setAttribute('selected', '');
    }

    private selectFocusedItem() {
        this.focusCurrentIndex();
        this.items[this.focuseditemIndex].click();
    }

    private focusCurrentIndex() {
        this.items[this.focuseditemIndex].focus();
    }

    private async _mapSlottedItems(e: Event) {
        const slot = e.target as HTMLSlotElement;
        const slottedElements = slot.assignedElements();
        this.items = slottedElements.filter(
            el => !el.hasAttribute('divider') && !el.hasAttribute('non-selectable'),
        ) as HTMLElement[];
        this.queueResize();
        if (this.focuseditemIndex > -1) {
            this.focuseditemIndex = 0;
            this.setSelectedOnFocusedItem();
        }
    }

    _handleMenuPosition() {
        if (this._isAnchored()) {
            const rootNode = this.getRootNode();
            if (
                !(rootNode instanceof Element) &&
                !(rootNode instanceof ShadowRoot) &&
                !(rootNode instanceof Document)
            ) {
                return;
            }
            const anchorTarget = rootNode.querySelector(`${this.anchorTo}`);
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
            if (this.anchorSide?.includes('center-x')) {
                xOffset = boundingRect.x;
            }
            if (this.anchorSide?.includes('center-y')) {
                yOffset = boundingRect.y;
            }

            if (this.contained) {
                this.style.setProperty('--menu-width', `${boundingRect.width}px`);
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

    private setHeight() {
        // Add 4 due to border
        this.style.setProperty('--menu-height', `${(this.itemSlot?.clientHeight ?? 0) + 4}px`);
    }

    private setTransitioning() {
        this.transitioning = true;
        this.addEventListener('transitionend', () => {
            this.transitioning = false;
        });
    }

    open() {
        this.visible = true;
        this.setHeight();
        this.setTransitioning();
        window.requestAnimationFrame(() => {
            document.addEventListener('click', this.outsideClickHandle);
        });
        this.doEvent();
    }

    close() {
        this.visible = false;
        this.setTransitioning();
        this.removeSelectedStatuses();
        this.focuseditemIndex = -1;
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
        if (this.loading) {
            return html`
                <simplr-loading no-blur align="right"></simplr-loading>
                <slot name="loading-slot"
                    ><simplr-menu-item non-selectable>${this.loadingMessage}</simplr-menu-item></slot
                >;
            `;
        }

        return html`<slot @slotchange=${this._mapSlottedItems}></slot>`;
    }

    static get styles() {
        return menuStyles;
    }
}
