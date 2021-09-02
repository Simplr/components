import { LitElement, TemplateResult } from 'lit';
/**
 *   A Loading element From Simplr Components
 *
 *   Usage
 *
 *   <simplr-loading></simplr-loading>
 *
 *   To remove loading, call hide()
 *
 *   @element simplr-loading
 *
 * */
export declare class SimplrLoading extends LitElement {
  align: string;

  hide(): void;

  render(): TemplateResult;

  static get styles(): import('lit').CSSResult;
}
