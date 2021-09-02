import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { accordionStyles } from './accordion.styles';

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
@customElement('simplr-accordion')
export class SimplrAccordion extends LitElement {
    @state()
    contentHeight: number = 0;

    @property({ type: Boolean, reflect: true })
    open: boolean = false;
    @property({ type: Boolean, reflect: true })
    protected first: boolean = false;
    @property({ type: Boolean, reflect: true })
    protected last: boolean = false;

    firstUpdated() {
        window.requestAnimationFrame(() => {
            this.addListeners();
            this.setOrder();
            this.tabIndex = 0;
        });
    }

    private setOrder() {
        const accordions = this.parentNode?.querySelectorAll('simplr-accordion');
        accordions?.forEach((acc, i) => {
            if (acc === this) {
                if (i === 0) this.first = true;
                else if (i === accordions.length - 1) this.last = true;
            }
        });
    }

    private addListeners(): void {
        const labelSlot = this.shadowRoot?.querySelector(
            'slot[name="label"]'
        ) as HTMLSlotElement;
        labelSlot?.addEventListener('click', () => {
            this.open = !this.open;
        });
        this.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.key === ' ' || e.key === "Enter") {
                this.open = !this.open;
            }
        });
    }

    private handleSlotChange() {
        const slot = this.shadowRoot?.querySelector(
            'slot:not([name="label"])'
        ) as HTMLSlotElement;
        this.contentHeight = slot.offsetHeight;
        this.style.setProperty('--content-height', this.contentHeight + 'px');
    }

    render(): TemplateResult {
        return html`<slot name="label"></slot>
      <div class="container">
        <slot @slotchange=${this.handleSlotChange.bind(this)}></slot>
      </div>`;
    }

    static get styles() {
        return accordionStyles;
    }
}
