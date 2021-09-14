import { html } from 'lit';
import '@simplr-wc/tabs';
import { Story } from './story-types.js';

export default {
    title: 'Tab',
    component: 'simplr-tab',
    argTypes: {},
};

export interface ArgTypes { }

const Tab: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <simplr-tabs selected="1">
        <simplr-tab value="1">One</simplr-tab>
        <simplr-tab value="2">Two</simplr-tab>
        <simplr-tab value="3">Three</simplr-tab>
        <simplr-tab-panel value="1">Panel one</simplr-tab-panel>
        <simplr-tab-panel value="2">Panel two</simplr-tab-panel>
        <simplr-tab-panel value="3">Panel three</simplr-tab-panel>
    </simplr-tabs>
`;

export const Regular = Tab.bind({});
