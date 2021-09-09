import { html } from 'lit';
import '@simplr-wc/input';
import { Story } from './story-types.js';

export default {
    title: 'Input',
    component: 'simplr-input',
    argTypes: {},
};

export interface ArgTypes {
    type: String;
    required: Boolean;
    disabled: Boolean;
    invalid: Boolean;
}

const Input: Story<ArgTypes> = ({ type, required, disabled, invalid }: ArgTypes) => {
    function handleSubmit(e: FormDataEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formDataJson = {} as any;
        formData.forEach((val, key) => {
            formDataJson[key] = val;
        });
        console.log('submit', e);
        console.log('Formdata', formDataJson);
    }
    return html`
        <style>
            simplr-input {
                width: 500px;
                --font-size: 18px;
                margin-bottom: 1rem;
            }
        </style>
        <form @submit=${handleSubmit}>
            <simplr-input
                type="${type}"
                label="Testing input one"
                name="input-one"
                placeholder="Input the desired value"
                ?required=${required}
                ?disabled=${disabled}
                ?invalid=${invalid}
            >
            </simplr-input>
            <simplr-input
                type="${type}"
                label="Testing input two"
                name="input-two"
                ?required=${required}
                ?disabled=${disabled}
                ?invalid=${invalid}
            ></simplr-input>
            <input type="submit" />
        </form>
    `;
};

export const Regular = Input.bind({});

export const Number = Input.bind({});
Number.args = {
    type: 'number',
};

export const Email = Input.bind({});
Email.args = {
    type: 'email',
};

export const Required = Input.bind({});
Required.args = {
    type: 'text',
    required: true,
};

export const Disabled = Input.bind({});
Disabled.args = {
    type: 'text',
    disabled: true,
};

export const Invalid = Input.bind({});
Invalid.args = {
    type: 'text',
    invalid: true,
};
