import { html } from 'lit';
import '@simplr-wc/action-menu';
import { Story } from './story-types.js';

export default {
    title: 'Action-menu',
    component: 'simplr-action-menu',
    argTypes: {
        vertical: Boolean
    },
};

export interface ArgTypes {
    vertical: boolean
}

const ActionMenu: Story<ArgTypes> = ({ vertical }: ArgTypes) => html`
    <simplr-action-menu for="demo-menu" ?vertical=${vertical}></simplr-action-menu>

    <simplr-menu dir="down" id="demo-menu" anchor-to="simplr-action-menu[for='demo-menu']" anchor-side="right">
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
    </simplr-menu>
`;

export const Regular = ActionMenu.bind({});

export const Vertical = ActionMenu.bind({});
Vertical.args = {
    vertical: true
}
