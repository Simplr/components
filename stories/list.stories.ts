import { html } from 'lit';
import '@simplr-wc/list';
import '@simplr-wc/button';
import '@simplr-wc/status';
import { Story } from './story-types.js';

export default {
    title: 'List',
    component: 'simplr-list',
    argTypes: {},
};

export interface ArgTypes { }

const employees = [
    { name: 'Matias', title: 'CTO', status: { status: "primary", text: "Active" } },
    { name: 'Santeri', title: 'CEO', status: { status: "primary", text: "Active" } },
    { name: 'Jussi', title: 'Software Developer', status: { status: "success", text: "Pending" } },
    { name: 'Silver', title: 'CFO', status: { status: "secondary", text: "Inactive" } },
];

const List: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <style>
        .name-and-title {
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
        }

        .subtitle {
            font-size: 0.775rem;
            opacity: 0.6;
        }
    </style>

    <simplr-list>
        <simplr-list-item header>Employees</simplr-list-item>
        ${employees.map(
    emp => html`
                <simplr-list-item>
                    <span class="name-and-title">
                        <label>${emp.name}</label>
                        <label class="subtitle">${emp.title}</label>
                    </span>
                    <simplr-status status="${emp.status.status}">${emp.status.text}</simplr-status>
                    <simplr-button secondary small rounded slot="right">X</simplr-button>
                </simplr-list-item>
            `,
)}
    </simplr-list>
`;

export const Regular = List.bind({});
