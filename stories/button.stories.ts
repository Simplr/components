import { html, TemplateResult } from 'lit';
import '../src/components/button/button.js';
import { Story } from './story-types.js';

export default {
    title: 'Button',
    component: 'simplr-button',
    argTypes: {
        disabled: { control: 'boolean' },
        outlined: { control: 'boolean' },
        contained: { control: 'boolean' },
        elevated: { control: 'boolean' },
        rounded: { control: 'boolean' },
        primary: { control: 'boolean' },
        secondary: { control: 'boolean' },
        success: { control: 'boolean' },
        type: { control: 'text' },
        label: { control: 'text' },
    },
};

const Template: Story<ArgTypes> = ({
    primary,
    secondary,
    success,
    slot,
}: ArgTypes) => html`
  <div style="display: flex; width: 40rem; justify-content: space-between;">
    <simplr-button
      ?primary=${primary}
      ?secondary=${secondary}
      ?success=${success}
      >Default</simplr-button
    >
    <simplr-button
      elevated
      ?primary=${primary}
      ?secondary=${secondary}
      ?success=${success}
      >Elevated</simplr-button
    >
    <simplr-button
      contained
      ?primary=${primary}
      ?secondary=${secondary}
      ?success=${success}
      >Contained</simplr-button
    >
    <simplr-button
      outlined
      ?primary=${primary}
      ?secondary=${secondary}
      ?success=${success}
      >Outlined</simplr-button
    >
    <simplr-button
      disabled
      ?primary=${primary}
      ?secondary=${secondary}
      ?success=${success}
      >Disabled</simplr-button
    >
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
    slot: html`Click me!`,
};

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    slot: html`Click me!`,
};

export const Secondary = Template.bind({});
Secondary.args = {
    secondary: true,
    slot: html`Click me!`,
};
export const Success = Template.bind({});
Success.args = {
    success: true,
    slot: html`Click me!`,
};

export interface ArgTypes {
    disabled: boolean;
    outlined: boolean;
    contained: boolean;
    elevated: boolean;
    rounded: boolean;
    primary: boolean;
    secondary: boolean;
    success: boolean;
    type: string;
    label: string;
    slot?: TemplateResult;
}
