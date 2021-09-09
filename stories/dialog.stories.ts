import { html } from 'lit';
import '@simplr-wc/dialog';
import '@simplr-wc/button';
import { Story } from './story-types.js';
import { SimplrDialog } from '@simplr-wc/dialog';

export default {
    title: 'Dialog',
    component: 'simplr-dialog',
    argTypes: {},
};

export interface ArgTypes { }

const Dialog: Story<ArgTypes> = ({ }: ArgTypes) => {
    const openDialog = () => {
        const dialog = document.createElement('simplr-dialog') as SimplrDialog;
        dialog.innerHTML = `
            <h2>Hello World</h2>
            <p>I am a dialog popup</p>
        `;
        document.body.appendChild(dialog);
        dialog.open();
    };

    return html`
        <style></style>
        <simplr-button @click=${openDialog} primary elevated>Open Dialog</simplr-button>
    `;
};

export const Regular = Dialog.bind({});
