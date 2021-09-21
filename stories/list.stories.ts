import { css, html } from 'lit';
import '@simplr-wc/list';
import '@simplr-wc/button';
import '@simplr-wc/status';
import '@simplr-wc/tag';
import { Story } from './story-types.js';

export default {
    title: 'List',
    component: 'simplr-list',
    argTypes: {},
};

export interface ArgTypes {
    withStyling: boolean;
}

const employees = [
    { name: 'Matias', title: 'CTO', status: { status: 'primary', text: 'Active' }, level: 'Founder' },
    { name: 'Santeri', title: 'CEO', status: { status: 'primary', text: 'Active' }, level: 'Founder' },
    { name: 'Jussi', title: 'Software Developer', status: { status: 'success', text: 'Pending' }, level: 'Employee' },
    { name: 'Silver', title: 'CFO', status: { status: 'secondary', text: 'Inactive' }, level: 'Part time' },
];

const List: Story<ArgTypes> = ({ withStyling }: ArgTypes) => {
    const styles = css`
        .name-and-title {
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
        }

        .subtitle {
            font-size: 0.775rem;
            opacity: 0.6;
        }
    `;
    const extraStyle = !withStyling ? '' : css`
    simplr-list-item:hover {
        transform: scale(1.01);
        background: #c9ebff;
    }

    `
    return html`
        <style>${styles}${extraStyle}</style>

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
                        <simplr-tag slot="right" status=${emp.status.status}>${emp.level}</simplr-tag>
                        <simplr-button secondary small rounded slot="right">X</simplr-button>
                    </simplr-list-item>
                `,
    )}
        </simplr-list>
    `;
};

export const Regular = List.bind({});

export const WithStyling = List.bind({});
WithStyling.args = {
    withStyling: true
}
