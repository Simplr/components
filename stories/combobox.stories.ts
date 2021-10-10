import { html } from 'lit';
import '@simplr-wc/combobox';
import { Story } from './story-types.js';
import { ComboBoxOption, SimplrCombobox } from '@simplr-wc/combobox';

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
        placeholder="Try typing 'meal'"
        .items=${items}
        ?fuzzy=${fuzzy}
        min=3
    >
    </simplr-combobox>
`;
}

const ComboboxWithLoading: Story<ArgTypes> = ({ }: ArgTypes) => {

    const items: ComboBoxOption[] = [
        { value: "item-1", label: "Meal for 2 Quesadilla" },
        { value: "item-2", label: "Meal for 2 Crunchwrap" },
        { value: "item-3", label: "Box for 1" },
        { value: "item-4", label: "Crunchwrap Supereme meal" },
        { value: "item-5", label: "Grilled Stuft Burrito Meal" },
        { value: "item-6", label: "2 Tacos supreme meal" }
    ];

    function loadItems(e: InputEvent) {
        const combobox = e.target as SimplrCombobox;
        if (combobox.searchText.length >= 3) {
            combobox.loading = true;
            setTimeout(() => {
                combobox.items = items;
                combobox.loading = false;
            }, 2000)
        }
    }

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
        placeholder="Try typing 'meal'"
        min=3
        @input=${loadItems}
    >
    </simplr-combobox>
`;
}

export const Regular = Combobox.bind({});

export const FuzzyFind = Combobox.bind({});
FuzzyFind.args = {
    fuzzy: true
}

export const WithLoading = ComboboxWithLoading.bind({});

