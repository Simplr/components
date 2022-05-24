import { html } from 'lit';
import '@simplr-wc/breadcrumbs';
import '@simplr-wc/icon';
import { Story } from './story-types.js';

export default {
    title: 'Breadcrumbs',
    component: 'simplr-breadcrumbs',
    argTypes: {},
};

export interface ArgTypes {}

const Breadcrumbs: Story<ArgTypes> = ({}: ArgTypes) => html`
    <simplr-breadcrumbs>
        <simplr-breadcrumbs-item href="/?path=/story"> Home </simplr-breadcrumbs-item>
        <simplr-breadcrumbs-item href="/?path=/story/breadcrumbs"> Breadcrumbs </simplr-breadcrumbs-item>
        <simplr-breadcrumbs-item href="/?path=/story/breadcrumbs--regular">Regular</simplr-breadcrumbs-item>
    </simplr-breadcrumbs>
`;

export const Regular = Breadcrumbs.bind({});
