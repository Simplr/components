import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getIconSvg } from './fetcher.js';
import { iconStyles } from './icon.styles.js';

/**
 * Uses Bootstrap icons https://icons.getbootstrap.com/
 * */
@customElement('simplr-icon')
export class SimplrIcon extends LitElement {
    @property({ type: String, reflect: true })
    icon: string | undefined;

    @property({ type: String, reflect: true })
    size: string = '1rem';

    @property({ type: String, reflect: true })
    color: string = '#000000';

    @state()
    iconTemplate: TemplateResult = html``;

    updated(_changedProperties: PropertyValues) {
        if (_changedProperties.has('icon') && this.icon) {
            this._updateIcon();
        }
        if (_changedProperties.has('size')) {
            this.style.setProperty('--icon-size', this.size);
        }
        if (_changedProperties.has('color')) {
            this.style.setProperty('--icon-color', this.color);
        }
    }

    private async _updateIcon() {
        if (this.icon) {
            this.iconTemplate = await getIconSvg(this.icon);
        }
    }

    render() {
        return html`${this.iconTemplate}`;
    }

    static get styles() {
        return iconStyles;
    }
}
