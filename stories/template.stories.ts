import { html } from 'lit';
//import '@simplr-wc/template';
import { Story } from './story-types.js';

export default {
    title: 'Template',
    component: 'simplr-template',
    argTypes: {},
};

export interface ArgTypes {}

const Template: Story<ArgTypes> = ({}: ArgTypes) => html` <simplr-template></simplr-template> `;

export const Regular = Template.bind({});
