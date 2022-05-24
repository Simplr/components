import { html } from 'lit';
import '@simplr-wc/drawer';
import '@simplr-wc/button';
import '@simplr-wc/icon';
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
            padding-top: 4rem;
        }
        img {
            width: 500px;
        }
        h3 {
            text-align: center;
        }
    </style>
    <simplr-drawer ?steal-focus=${stealFocus} side=${side} ?drawer-open=${drawerOpen}>
        ${stealFocus
            ? html`<img
                  src="https://cdn.vox-cdn.com/thumbor/HWPOwK-35K4Zkh3_t5Djz8od-jE=/0x86:1192x710/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
              />`
            : ''}
        <h3>Simplr Components</h3>
        <simplr-drawer-item>
            <simplr-icon size="1.6rem" color="#FFF" slot="icon" icon="house"></simplr-icon>
            Home
        </simplr-drawer-item>
        <simplr-drawer-item>
            <simplr-icon size="1.6rem" color="#FFF" slot="icon" icon="person"></simplr-icon>
            User
        </simplr-drawer-item>
        <simplr-drawer-item>
            <simplr-icon size="1.6rem" color="#FFF" slot="icon" icon="wrench"></simplr-icon>
            Settings
        </simplr-drawer-item>
        <simplr-drawer-item @click=${toggleDrawer}>
            <simplr-icon size="1.6rem" color="#FFF" slot="icon" icon="x-circle-fill"></simplr-icon>
            Close
        </simplr-drawer-item>
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
    drawerOpen: true,
};
