import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { accordionStyles } from './accordion.styles';
import "@simplr-wc/components-core/loading";
/**
 *   A Accordion element From Simplr Components
 *
 *   Usage
 *
 *   <simplr-accordion>
 *       <label slot="label">Click me to open </label>
 *       <span>
 *           <h2>Let's create something awesome together</h2>
 *           <p>My Name:</p>
 *           <p><b>Phone:</b> +22 1231233</p>
 *           <p><b>Email</b> john.doe@foobar.dot</p>
 *       </span>
 *   </simplr-accordion>
 *
 *   @element simplr-accordion
 *
 *   @prop {boolean} open            - Boolean that is set to true when the accordion is open
 *
 *   @attr {boolean} first           - Boolean set true on the first element in a collection of accordion
 *   @attr {boolean} last            - Boolean set true on the last element in a collection of accordion
 *
 *   @csspart [--border-color=1px solid #d6d1e0]                    - Border of the accordion elements
 *   @csspart [--label-background=none]                             - Background of the accordion label
 *   @csspart [--open-label-background=var(--primary-color)]        - Background of the accordion label when the accordion is open
 *   @csspart [--label-color=#000]                                  - Color of the accordion label
 *   @csspart [--open-label-color=#fff]                             - Color of the accordion label when the accordion is open
 *   @csspart [--label-padding=1rem 0 1rem 1rem]                    - Padding of the label of the accordion
 *   @csspart [--content-padding=1rem]                              - Padding of the accordion content
 *   @csspart [--primary-color=#0087d7]                                   - Primary color for Simplr components
 *
 *   @slot label    - Slot for the label of the accordion
 *   @slot          - Default slot for the content of the accordion
 *
 * */
let SimplrAccordion = class SimplrAccordion extends LitElement {
    constructor() {
        super(...arguments);
        this.contentHeight = 0;
        this.loading = false;
        this.open = false;
        this.first = false;
        this.last = false;
    }
    firstUpdated() {
        window.requestAnimationFrame(() => {
            this.addListeners();
            this.setOrder();
            this.tabIndex = 0;
        });
    }
    setOrder() {
        var _a;
        const accordions = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.querySelectorAll('simplr-accordion');
        accordions === null || accordions === void 0 ? void 0 : accordions.forEach((acc, i) => {
            if (acc === this) {
                if (i === 0)
                    this.first = true;
                else if (i === accordions.length - 1)
                    this.last = true;
            }
        });
    }
    addListeners() {
        var _a;
        const labelSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="label"]');
        labelSlot === null || labelSlot === void 0 ? void 0 : labelSlot.addEventListener('click', () => {
            this.open = !this.open;
        });
        this.addEventListener('keyup', (e) => {
            if (e.key === ' ' || e.key === "Enter") {
                this.open = !this.open;
            }
        });
    }
    handleSlotChange() {
        var _a;
        const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot:not([name="label"])');
        this.contentHeight = slot.offsetHeight;
        this.style.setProperty('--content-height', this.contentHeight + 'px');
    }
    render() {
        return html `<slot name="label"></slot>
      <div class="container">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
      ${this.loading ? html `<simplr-loading align="right"></simplr-loading>` : ''}
  `;
    }
    static get styles() {
        return accordionStyles;
    }
};
__decorate([
    state()
], SimplrAccordion.prototype, "contentHeight", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SimplrAccordion.prototype, "loading", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SimplrAccordion.prototype, "open", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SimplrAccordion.prototype, "first", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SimplrAccordion.prototype, "last", void 0);
SimplrAccordion = __decorate([
    customElement('simplr-accordion')
], SimplrAccordion);
export { SimplrAccordion };
//# sourceMappingURL=accordion.js.map