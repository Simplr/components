import { html } from 'lit';
import '@simplr-wc/checkbox';
import { Story } from './story-types.js';

export default {
  title: 'Checkbox',
  component: 'simplr-checkbox',
  argTypes: {},
};

export interface ArgTypes {
  checked: boolean;
  indeterminate: boolean;
}

const Template: Story<ArgTypes> = ({
  checked,
  indeterminate,
}: ArgTypes) => html`
  <style>
    simplr-checkbox {
      margin-bottom: 1rem;
    }
  </style>
  <div @click=${() => console.log('Click')}>
    <simplr-checkbox
      ?checked=${checked}
      ?indeterminate=${indeterminate}
      name="schwarma"
      label="Chicken Schwarma"
    ></simplr-checkbox>
    <simplr-checkbox
      ?checked=${checked}
      ?indeterminate=${indeterminate}
      primary
      name="kebab"
      label="Kebab"
    ></simplr-checkbox>
    <simplr-checkbox
      ?checked=${checked}
      ?indeterminate=${indeterminate}
      secondary
      name="döner"
      label="Döner"
    ></simplr-checkbox>
    <simplr-checkbox
      ?checked=${checked}
      ?indeterminate=${indeterminate}
      success
      name="falafel"
      label="Falafel"
    ></simplr-checkbox>
  </div>
`;

export const Regular = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};
