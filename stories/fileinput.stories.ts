import { html } from 'lit';
import '@simplr-wc/file-input';
import { Story } from './story-types.js';
import { SimplrFileInput } from '@simplr-wc/file-input';

export default {
    title: 'Fileinput',
    component: 'simplr-fileinput',
    argTypes: {},
};

export interface ArgTypes {}

const Fileinput: Story<ArgTypes> = ({}: ArgTypes) => {
    function handleSubmit(e: Event) {
        e.preventDefault();
        const fileInput = document.querySelector('simplr-file-input') as SimplrFileInput;
        const files = fileInput.getFiles();
        console.log(files);
    }
    return html`
        <form @submit=${handleSubmit}>
            <simplr-file-input name="files" multi label="Drag and Drop your files here"></simplr-file-input>
            <input type="submit" />
        </form>
    `;
};

export const Regular = Fileinput.bind({});
