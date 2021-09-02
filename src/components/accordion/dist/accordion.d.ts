import { LitElement, TemplateResult } from 'lit';
import '@simplr-wc/components-core/loading';
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
export declare class SimplrAccordion extends LitElement {
  contentHeight: number;

  loading: boolean;

  open: boolean;

  protected first: boolean;

  protected last: boolean;

  firstUpdated(): void;

  private setOrder;

  private addListeners;

  private handleSlotChange;

  render(): TemplateResult;

  static get styles(): import('lit').CSSResult[];
}
