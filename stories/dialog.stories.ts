import { html } from 'lit';
import '@simplr-wc/dialog';
import { Story } from './story-types.js';

export default {
    title: 'Dialog',
    component: 'simplr-dialog',
    argTypes: {},
};

export interface ArgTypes {}

const Dialog: Story<ArgTypes> = ({}: ArgTypes) => html` <simplr-dialog></simplr-dialog> `;

export const Regular = Dialog.bind({});
