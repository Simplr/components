import { html } from 'lit';
import '@simplr-wc/accordion';
import { Story } from './story-types.js';

export default {
  title: 'Accordion',
  component: 'simplr-accordion',
  argTypes: {
    loading: { control: 'boolean' },
  },
};

export interface ArgTypes {
  loading: boolean;
}

const Template: Story<ArgTypes> = ({ loading }: ArgTypes) => html`
  <simplr-accordion ?loading=${loading}>
    <label slot="label">Click me to open </label>
    <span>
      <h2>Let's create something awesome together</h2>
      <p>My Name:</p>
      <p><b>Phone:</b> +22 1231233</p>
      <p><b>Email</b> john.doe@foobar.dot</p>
    </span>
  </simplr-accordion>
  <simplr-accordion>
    <label slot="label">Click me to open </label>
    <span>
      <h2>Let's create something awesome together</h2>
      <p>My Name:</p>
      <p><b>Phone:</b> +22 1231233</p>
      <p><b>Email</b> john.doe@foobar.dot</p>
    </span>
  </simplr-accordion>
  <simplr-accordion>
    <label slot="label">Click me to open </label>
    <span>
      <h2>Let's create something awesome together</h2>
      <p>My Name:</p>
      <p><b>Phone:</b> +22 1231233</p>
      <p><b>Email</b> john.doe@foobar.dot</p>
    </span>
  </simplr-accordion>
`;

export const Regular = Template.bind({});
