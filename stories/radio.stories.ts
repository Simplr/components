import { html } from 'lit';
import '@simplr-wc/radio';
import { Story } from './story-types.js';

export default {
    title: 'Radio',
    component: 'simplr-radio',
    argTypes: {},
};

export interface ArgTypes { }

const Radio: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <style>
        simplr-radio {
            margin-top: 1rem;
        }
    </style>
    <label class="radio-label">Sandwich type</label>
    <div>
        <simplr-radio primary value="steak-and-cheese" name="sandwich-type" label="Steak and Cheese"></simplr-radio>
        <simplr-radio primary value="tuna" name="sandwich-type" label="Tuna"></simplr-radio>
        <simplr-radio primary value="ham" name="sandwich-type" label="Ham"></simplr-radio>
        <simplr-radio primary value="roast-beef" name="sandwich-type" label="Roast Beef"></simplr-radio>
    </div>
`;

export const Regular = Radio.bind({});
