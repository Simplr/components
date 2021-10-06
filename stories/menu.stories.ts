import { html } from 'lit';
import '@simplr-wc/menu';
import '@simplr-wc/button';
import '@simplr-wc/icon';
import { Story } from './story-types.js';

export default {
    title: 'Menu',
    component: 'simplr-menu',
    argTypes: {
        elevated: Boolean,
        interactable: Boolean,
    },
};

export interface ArgTypes {
    elevated: boolean;
    interactable: boolean;
    anchor: boolean;
}

const Menu: Story<ArgTypes> = ({ elevated, interactable, anchor }: ArgTypes) => {
    let isOpen = false;
    function toggleMenu() {
        if (isOpen) {
            isOpen = false;
            (document.querySelector('simplr-menu') as any).close();
        } else {
            isOpen = true;
            (document.querySelector('simplr-menu') as any).open();
        }
    }
    setTimeout(() => {
        document.querySelector('simplr-menu')?.addEventListener('simplr-menu-toggle', (e: any) => {
            isOpen = e.detail.visible;
        });
    }, 500);

    const menuItems = html`
        <simplr-menu-item>Your Profile</simplr-menu-item>
        <simplr-menu-item>Your repositories</simplr-menu-item>
        <simplr-menu-item divider></simplr-menu-item>
        <simplr-menu-item>
            Settings
            <simplr-icon slot="icon-after" icon="wrench" size="1.2rem"></simplr-icon>
        </simplr-menu-item>
        <simplr-menu-item divider></simplr-menu-item>
        <simplr-menu-item>
            <simplr-icon slot="icon-after" icon="door-open" size="1.2rem"></simplr-icon>
            Log out
        </simplr-menu-item>
    `;

    return html`
        <style>
simplr-button {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
        </style>
        ${interactable ? html`<simplr-button id="menu-button" @click=${toggleMenu} elevated>Toggle</simplr-button>` : ''}
        ${anchor
            ? html`
                  <simplr-menu ?elevated=${elevated} ?visible=${!interactable} dir="down" anchor-to="#menu-button" anchor-side="bottom-left"> ${menuItems} </simplr-menu>
              `
            : html`
                  <simplr-menu ?elevated=${elevated} ?visible=${!interactable} dir="down"> ${menuItems} </simplr-menu>
              `}
    `;
};

export const Regular = Menu.bind({});

export const Elevated = Menu.bind({});
Elevated.args = {
    elevated: true,
};

export const Interactable = Menu.bind({});
Interactable.args = {
    interactable: true,
};

export const InteractableWithAnchor = Menu.bind({});
InteractableWithAnchor.args = {
    interactable: true,
    anchor: true,
};
