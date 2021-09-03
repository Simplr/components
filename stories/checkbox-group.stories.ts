import { html } from 'lit';
import '@simplr-wc/checkbox';
import '@simplr-wc/checkbox-group';
import { Story } from './story-types.js';

export default {
    title: 'Checkbox-group',
    component: 'simplr-checkbox-group',
    argTypes: {},
};

export interface ArgTypes {
}

const CheckboxGroup: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <style>
        simplr-checkbox {
            margin-bottom: 1rem;
        }
    </style>
    <simplr-checkbox-group primary label="Fillings">
        <simplr-checkbox primary name="fillings[]" label="Cucumber"></simplr-checkbox>
        <simplr-checkbox primary name="fillings[]" label="Tomato"></simplr-checkbox>
        <simplr-checkbox primary name="fillings[]" label="Paprika"></simplr-checkbox>
        <simplr-checkbox primary name="fillings[]" label="Salad"></simplr-checkbox>
    </simplr-checkbox-group>
    <simplr-checkbox-group secondary label="Spices">
        <simplr-checkbox secondary name="spices[]" label="Salt"></simplr-checkbox>
        <simplr-checkbox secondary name="spices[]" label="Pepper"></simplr-checkbox>
    </simplr-checkbox-group>
`;

export const Regular = CheckboxGroup.bind({});

