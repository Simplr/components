import { html } from 'lit';
import '@simplr-wc/drawer';
import '@simplr-wc/button';
import { Story } from './story-types.js';
import { SimplrDrawer } from '@simplr-wc/drawer';

export default {
    title: 'Drawer',
    component: 'simplr-drawer',
    argTypes: {},
};

export interface ArgTypes {
    side: string;
    stealFocus: boolean;
    drawerOpen: boolean;
}

const toggleDrawer = () => {
    (document.querySelector('simplr-drawer') as SimplrDrawer).toggle();
};

const Drawer: Story<ArgTypes> = ({ side, stealFocus, drawerOpen }: ArgTypes) => html`
    <style>
        simplr-drawer {
            color: #fff;
        }
        img {
            width: 500px;
        }
    </style>
    <simplr-button @click=${toggleDrawer} primary elevated>Toggle drawer</simplr-button>
    <simplr-drawer ?steal-focus=${stealFocus} side=${side} ?drawer-open=${drawerOpen}>
        ${stealFocus
        ? html`<img
                  src="https://cdn.vox-cdn.com/thumbor/HWPOwK-35K4Zkh3_t5Djz8od-jE=/0x86:1192x710/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
              />`
        : ''}
        <h2>Simplr Components</h2>
        <ul>
            <li>Home</li>
            <li>Info</li>
            <li>Components</li>
            <li>Contact</li>
        </ul>

        <simplr-button @click=${toggleDrawer} secondary elevated>Close</simplr-button>
    </simplr-drawer>
`;

export const Regular = Drawer.bind({});
Regular.args = {
    side: 'left',
};

export const RightSide = Drawer.bind({});
RightSide.args = {
    side: 'right',
};

export const StealFocus = Drawer.bind({});
StealFocus.args = {
    side: 'right',
    stealFocus: true,
};

export const Open = Drawer.bind({});
Open.args = {
    side: 'right',
    drawerOpen: true
};
