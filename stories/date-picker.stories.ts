import { html } from 'lit';
import '@simplr-wc/date-picker';
import { Story } from './story-types.js';

export default {
    title: 'DatePicker',
    component: 'simplr-date-picker',
    argTypes: {},
};

export interface ArgTypes {}

const DatePicker: Story<ArgTypes> = ({}: ArgTypes) => html`
    <simplr-date-picker>
        <simplr-input label="Date" type="text" placeholder="Insert date" />
    </simplr-date-picker>
`;

export const Regular = DatePicker.bind({});
