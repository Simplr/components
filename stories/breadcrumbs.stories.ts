import { html } from 'lit';
import '@simplr-wc/breadcrumbs';
import { Story } from './story-types.js';
import '@simplr-wc/icon';

export default {
    title: 'Breadcrumbs',
    component: 'simplr-breadcrumbs',
    argTypes: {},
};

export interface ArgTypes {}

const Breadcrumbs: Story<ArgTypes> = ({}: ArgTypes) => html`
    <simplr-breadcrumbs>
        <simplr-breadcrumbs-item href="/">
            Home
        </simplr-breadcrumbs-item>
        <simplr-breadcrumbs-item href="/user">
            User
        </simplr-breadcrumbs-item>
        <simplr-breadcrumbs-item href="/user/1">
            Profile
        </simplr-breadcrumbs-item>
    </simplr-breadcrumbs>
`;

export const Regular = Breadcrumbs.bind({});
