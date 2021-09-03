import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { templateStyles } from './template.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-template')
export class SimplrTemplate extends LitElement {
  render(): TemplateResult {
    return html``;
  }

  static get styles() {
    return templateStyles;
  }
}
