import { html } from 'lit';
import '@simplr-wc/status';
import { Story } from './story-types.js';

export default {
    title: 'Status',
    component: 'simplr-status',
    argTypes: {},
};

export interface ArgTypes { }

const Status: Story<ArgTypes> = ({ }: ArgTypes) => {
    return html`
        <style>
            div {
                display: flex;
                flex-direction: column;
                margin-left: 0.5rem;
            }
            simplr-status {
                margin-bottom: 1rem;
            }
        </style>

        <div>
            <simplr-status status="main">Main</simplr-status>
            <simplr-status status="primary">Primary</simplr-status>
            <simplr-status status="secondary">Secondary</simplr-status>
            <simplr-status status="success">Success</simplr-status>
            <simplr-status color="#ff88dd">Custom Color</simplr-status>
        </div>
    `;
};

export const Regular = Status.bind({});
