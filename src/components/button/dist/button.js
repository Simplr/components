import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './button.styles';
import "@simplr-wc/components-core/loading";
let SimplrButton = class SimplrButton extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
        // Button status
        this.disabled = false;
        this.loading = false;
        // Button style
        this.outlined = false;
        this.contained = false;
        this.elevated = false;
        this.rounded = false;
        // Button types
        this.primary = false;
        this.secondary = false;
        this.success = false;
        // Button props
        this.type = 'button';
        this.label = 'button';
    }
    firstUpdated() {
        this.addEventListeners();
    }
    addEventListeners() {
        var _a, _b;
        (_a = this.buttonElem) === null || _a === void 0 ? void 0 : _a.addEventListener('keyup', this.handleKeyboardEvent.bind(this));
        (_b = this.buttonElem) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.onClick.bind(this), true);
    }
    onClick(e) {
        if (e.target === this) {
            e.preventDefault();
            e.stopPropagation();
            this.doClick();
        }
    }
    handleKeyboardEvent(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            this.doClick();
            this.active = true;
            window.requestAnimationFrame(() => {
                this.active = false;
            });
        }
    }
    doClick() {
        var _a;
        (_a = this.buttonElem) === null || _a === void 0 ? void 0 : _a.click();
        this.focus();
    }
    render() {
        return html `<button>
      ${this.loading ? html `<simplr-loading></simplr-loading>` : ''}
      <slot></slot>
    </button>`;
    }
    static get styles() {
        return buttonStyles;
    }
};
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "active", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "loading", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "outlined", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "contained", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "elevated", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "rounded", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "primary", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "secondary", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], SimplrButton.prototype, "success", void 0);
__decorate([
    property({ reflect: true })
], SimplrButton.prototype, "type", void 0);
__decorate([
    property({ reflect: true })
], SimplrButton.prototype, "label", void 0);
__decorate([
    query('button')
], SimplrButton.prototype, "buttonElem", void 0);
SimplrButton = __decorate([
    customElement('simplr-button')
], SimplrButton);
export { SimplrButton };
//# sourceMappingURL=button.js.map