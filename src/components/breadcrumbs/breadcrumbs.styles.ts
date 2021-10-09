import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const breadcrumbsStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            flex-direction: row;
        }
    `,
];

export const breadcrumbsItemStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            padding: 0.5rem 0.3rem;
            cursor: pointer; /* auto */
            align-items: center;
            font-size: 0.8rem;
        }

        :host(:hover) {
            color: var(--primary-color);
            fill: var(--primary-color);
        }

        .icon {
            padding-right: 10px;
        }

        a {
            color: var(--primary-color);
        }

        a,
        label {
            flex-basis: 100%;
            text-decoration: none;
        }

        .chevron {
            color: var(--gray-text-color);
        }

        :host([last]) {
            color: var(--gray-text-color);
            pointer-events: none;
        }
    `,
];
