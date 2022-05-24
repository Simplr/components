import { html, TemplateResult } from 'lit';
import '@simplr-wc/card';
import { Story } from './story-types.js';

export default {
    title: 'Card',
    component: 'simplr-card',
    argTypes: {},
};

export interface ArgTypes {
    label: string;
    subtitle: string;
    slot: TemplateResult;
    imageslot: TemplateResult;
}

const Card: Story<ArgTypes> = ({ label, subtitle, slot, imageslot }: ArgTypes) => html`
    <simplr-card .label=${label} .subtitle=${subtitle}> ${imageslot} ${slot}</simplr-card>
`;

export const Regular = Card.bind({});
Regular.args = {
    label: 'Card label',
    subtitle: 'Card subtitle',
    slot: html`<p>This is my body</p>`,
};

export const WithImage = Card.bind({});
WithImage.args = {
    label: 'Card label',
    subtitle: 'Card subtitle',
    slot: html`<p>This is my body</p>`,
    imageslot: html`<img src="https://picsum.photos/300/200" slot="media" />`,
};
