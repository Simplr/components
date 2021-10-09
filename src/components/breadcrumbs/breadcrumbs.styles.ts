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
            padding: 0.5rem 1rem;
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

        .chevron {
            color: grey;
        }

        :host([last]) {
            color: grey;
            pointer-events: none;
        }
    `,
];
