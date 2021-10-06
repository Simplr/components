import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const iconStyles = [
    baseStyles,
    css`
        :host {
            --icon-size: 1rem;
            --icon-color: #000000;

            display: flex;
            width: fit-content;
            height: fit-content;
        }

        svg {
            color: var(--icon-color);
            width: var(--icon-size);
            height: var(--icon-size);
        }
    `,
];
