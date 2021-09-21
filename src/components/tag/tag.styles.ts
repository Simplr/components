import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const tagStyles = [
    baseStyles,
    css`
        :host {
            font-size: 0.85rem;
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            color: var(--color, '#000000');
            background-color: var(--background-color, '#FFFFFF');
            padding: 0.1rem 0.8rem;
            font-weight: var(--weight);
            border-radius: 4px;
        }
        :host([status='main']) {
            --color: var(--main-color-darkest);
            --background-color: var(--main-color-lighter);
        }
        :host([status='primary']) {
            --color: var(--primary-color-darkest);
            --background-color: var(--primary-color-lighter);
        }
        :host([status='secondary']) {
            --color: var(--secondary-color-darkest);
            --background-color: var(--secondary-color-lighter);
        }
        :host([status='success']) {
            --color: var(--success-color-darkest);
            --background-color: var(--success-color-lighter);
        }

        label {
            filter: brightness(0.75);
        }
    `,
];
