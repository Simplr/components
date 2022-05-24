import { html } from 'lit';
import '@simplr-wc/icon';
import { Story } from './story-types.js';

export default {
    title: 'Icon',
    component: 'simplr-icon',
    argTypes: {},
};

export interface ArgTypes {}

const Icon: Story<ArgTypes> = ({}: ArgTypes) => html`
    <simplr-icon icon="github"></simplr-icon>
    <simplr-icon icon="github" size="2rem"></simplr-icon>
    <simplr-icon icon="stop-circle" size="2rem" color="red"></simplr-icon>
    <simplr-icon icon="foobar" size="2rem" color="red"></simplr-icon>
`;

export const Regular = Icon.bind({});
