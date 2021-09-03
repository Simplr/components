import { html } from 'lit';
import '@simplr-wc/checkbox';
import { Story } from './story-types.js';

export default {
    title: 'Checkbox',
    component: 'simplr-checkbox',
    argTypes: {},
};

const Template: Story<ArgTypes> = ({ }: ArgTypes) => html`
  <style>
    simplr-checkbox {
      margin-bottom: 1rem;
    }
  </style>
  <div @click=${() => console.log('Click')}>
    <simplr-checkbox name="schwarma" label="Chicken Schwarma"></simplr-checkbox>
    <simplr-checkbox primary name="kebab" label="Kebab"></simplr-checkbox>
    <simplr-checkbox secondary name="döner" label="Döner"></simplr-checkbox>
    <simplr-checkbox success name="falafel" label="Falafel"></simplr-checkbox>
  </div>
`;

export const Regular = Template.bind({});

export interface ArgTypes {
}
