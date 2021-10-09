import { html } from 'lit';
import '@simplr-wc/combobox';
import { Story } from './story-types.js';
import { ComboBoxOption } from '@simplr-wc/combobox';

export default {
    title: 'Combobox',
    component: 'simplr-combobox',
    argTypes: {},
};

export interface ArgTypes {
    fuzzy: Boolean
}

const Combobox: Story<ArgTypes> = ({ fuzzy }: ArgTypes) => {

    const items: ComboBoxOption[] = [
        { value: "item-1", label: "Meal for 2 Quesadilla" },
        { value: "item-2", label: "Meal for 2 Crunchwrap" },
        { value: "item-3", label: "Box for 1" },
        { value: "item-4", label: "Crunchwrap Supereme meal" },
        { value: "item-5", label: "Grilled Stuft Burrito Meal" },
        { value: "item-6", label: "2 Tacos supreme meal" }
    ];
    return html`
    <style>
        simplr-combobox {
            width: 500px;
            --font-size: 18px;
            margin-bottom: 1rem;
        }
    </style>
    <simplr-combobox
        label="Pick an item from the menu"
        name="menu-item-pick"
        placeholder="Start typing to see menu items"
        .items=${items}
        ?fuzzy=${fuzzy}
    >
    </simplr-combobox>
`;
}

export const Regular = Combobox.bind({});

export const FuzzyFind = Combobox.bind({});
FuzzyFind.args = {
    fuzzy: true
}
