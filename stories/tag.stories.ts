import { html } from 'lit';
import '@simplr-wc/tag';
import { Story } from './story-types.js';

export default {
    title: 'Tag',
    component: 'simplr-tag',
    argTypes: {},
};

export interface ArgTypes {}

const Tag: Story<ArgTypes> = ({}: ArgTypes) => html`
    <style>
        div {
            display: flex;
            flex-direction: column;
            margin: 0.5rem;
        }

        div * {
            margin-bottom: 1rem;
        }
    </style>
    <div>
        <simplr-tag status="main">Main</simplr-tag>
        <simplr-tag status="primary">Primary</simplr-tag>
        <simplr-tag status="secondary">Secondary</simplr-tag>
        <simplr-tag status="success">Success</simplr-tag>
        <simplr-tag background="#ff08b8" color="#FF88dd">Custom Color</simplr-tag>
    </div>
`;

export const Regular = Tag.bind({});
