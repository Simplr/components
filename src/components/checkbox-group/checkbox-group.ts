import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SimplrCheckbox } from '@simplr-wc/checkbox';
import '@simplr-wc/components-core/loading';
import { checkboxGroupStyles } from './checkbox-group.styles';

@customElement('simplr-checkbox-group')
export class SimplrCheckboxGroup extends LitElement {
  @property({ type: String, reflect: true })
  label: string = '';

  @property({ type: String, reflect: true })
  name: string = '';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean, reflect: true })
  indeterminate: boolean = false;

  @property({ type: Boolean, reflect: true })
  primary: boolean = false;

  @property({ type: Boolean, reflect: true })
  secondary: boolean = false;

  @property({ type: Boolean, reflect: true })
  success: boolean = false;

  @property({ type: Array })
  inputElements: Array<SimplrCheckbox> = [];

  private addCheckboxListeners() {
    this.inputElements = [];
    this.querySelectorAll('simplr-checkbox').forEach((inp: any) => {
      this.inputElements.push(inp);
      inp.addEventListener('input', () => {
        const checkedInputs = Array.from(this.inputElements).filter(
          inpt => inpt.checked
        );
        if (checkedInputs.length === 0) {
          this.checked = false;
          this.indeterminate = false;
          return;
        }
        if (checkedInputs.length === this.inputElements.length) {
          this.checked = true;
          this.indeterminate = false;
          return;
        }
        this.checked = false;
        this.indeterminate = true;
      });
    });
  }

  private handleGroupInput() {
    if (this.checked) {
      this.indeterminate = false;
      this.checked = false;
      for (const inp of this.inputElements) {
        inp.checked = false;
      }
      return;
    }
    this.indeterminate = false;
    this.checked = true;
    for (const inp of this.inputElements) {
      inp.checked = true;
    }
  }

  render() {
    return html`<simplr-checkbox
        @input=${this.handleGroupInput}
        name="${this.name}"
        label="${this.label}"
        ?disabled=${this.disabled}
        ?checked=${this.checked}
        ?primary=${this.primary}
        ?secondary=${this.secondary}
        ?success=${this.success}
        ?indeterminate=${this.indeterminate}
      ></simplr-checkbox>
      <slot @slotchange=${this.addCheckboxListeners}></slot>`;
  }

  static get styles() {
    return checkboxGroupStyles;
  }
}
