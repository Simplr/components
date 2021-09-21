import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const statusStyles = [
    baseStyles,
    css`
        :host {
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            --weight: 400;
            --dot-size: 6px;
            color: var(--color, '#000000');
            font-weight: var(--weight);
        }
        :host([status='main']) {
            --color: var(--main-color);
        }
        :host([status='primary']) {
            --color: var(--primary-color);
        }
        :host([status='secondary']) {
            --color: var(--secondary-color);
        }
        :host([status='success']) {
            --color: var(--success-color);
        }

        span {
            width: var(--dot-size);
            height: var(--dot-size);
            border-radius: 50%;
            background-color: var(--color);
            margin: 0 0.5rem;
        }
    `,
];
