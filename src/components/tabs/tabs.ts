import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tabsStyles } from './tab.styles';
import '@simplr-wc/components-core/loading';

@customElement('simplr-tabs')
export class SimplrTabs extends LitElement {
    @property({ type: String })
    selected: string = '';

    @state()
    initialized: boolean = false;

    movePanels(e: Event) {
        const elems = (e.target as HTMLSlotElement).assignedElements();

        elems.forEach(el => {
            if (el.getAttribute('role') === 'tab-panel') {
                el.setAttribute('slot', 'tab-panels');
            }
        });
        if (!this.initialized) {
            this.selectTab(this.selected);
            this.initialized = true;
        }
    }

    private getPanels() {
        return Array.from(this.querySelectorAll("[role='tab-panel']"));
    }

    private getTabs() {
        return Array.from(this.querySelectorAll("[role='tab']"));
    }

    private clearSelectedStatus() {
        this.querySelectorAll('[selected]').forEach(sel => sel.removeAttribute('selected'));
    }

    private findTabPanelDuo(val: string) {
        return {
            panel: this.getPanels().find(pan => pan.getAttribute('value') === val) as HTMLElement,
            tab: this.getTabs().find(tab => tab.getAttribute('value') === val) as HTMLElement,
        };
    }

    firstUpdated() {
        if (this.selected) {
            this.selectTab(this.selected);
        }

        this.addEventListener('tab-selected', this.onTabSelected, { capture: true });
    }

    onTabSelected(e: any) {
        const selectedTab = e.detail.value;
        this.selectTab(selectedTab);
    }

    selectTab(tabValue: string) {
        this.clearSelectedStatus();
        this.selected = tabValue;
        const tabPanelDuo = this.findTabPanelDuo(tabValue);
        tabPanelDuo.panel?.setAttribute('selected', '');
        tabPanelDuo.tab?.setAttribute('selected', '');

        const tabMarkerWidth = tabPanelDuo.tab?.clientWidth;
        const tabMarkerOffset = tabPanelDuo.tab?.offsetLeft;
        this.style.setProperty('--tab-header-width', `${tabMarkerWidth}px`);
        this.style.setProperty('--tab-header-offset', `${tabMarkerOffset}px`);
    }

    render() {
        return html`<div class="tabs">
                <slot @slotchange=${this.movePanels}></slot>
                <span class="marker"> </span>
            </div>
            <div class="panels"><slot name="tab-panels"></slot></div> `;
    }

    static get styles() {
        return tabsStyles;
    }
}
