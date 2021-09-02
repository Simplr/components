import { LitElement, TemplateResult } from 'lit';
import '@simplr-wc/components-core/loading';

export declare class SimplrButton extends LitElement {
  active: boolean;

  disabled: boolean;

  loading: boolean;

  outlined: boolean;

  contained: boolean;

  elevated: boolean;

  rounded: boolean;

  primary: boolean;

  secondary: boolean;

  success: boolean;

  type: string;

  label: string;

  buttonElem: HTMLButtonElement | undefined;

  firstUpdated(): void;

  private addEventListeners;

  private onClick;

  private handleKeyboardEvent;

  doClick(): void;

  render(): TemplateResult;

  static get styles(): import('lit').CSSResult[];
}
