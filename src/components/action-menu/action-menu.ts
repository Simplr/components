import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { actionMenuStyles } from './action-menu.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-action-menu')
export class SimplrActionMenu extends LitElement {
    @property({ type: Boolean, reflect: true })
    open: boolean = false;

    @property({ type: Boolean, reflect: true })
    vertical: boolean = false;

    @property({ type: String, reflect: true })
    for: string | undefined;

    @state()
    target: any | undefined;

    firstUpdated() {
        this.addEventListener('click', this.toggle);
        this.target = document.querySelector(`#${this.for}`) as HTMLElement;
        this.target?.addEventListener('simplr-menu-toggle', (e: CustomEvent) => {
            this.open = e.detail.visible;
        });
    }

    toggle() {
        this.open = !this.open;
        if (this.open) {
            this.target?.open();
        } else {
            this.target?.close();
        }
    }

    render() {
        return html`<slot>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                width="18px"
                heigth="18px"
                x="0px"
                y="0px"
                viewBox="0 0 32.055 32.055"
                style="enable-background:new 0 0 32.055 32.055;"
                xml:space="preserve"
            >
                <path
                    d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
                />
            </svg>
        </slot>`;
    }

    static get styles() {
        return actionMenuStyles;
    }
}
