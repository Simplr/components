import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const iconStyles = [
    baseStyles,
    css`
        :host {
            --icon-size: 1rem;

            display: flex;
            width: fit-content;
            height: fit-content;
        }

        svg {
            color: var(--icon-color, inherit);
            width: var(--icon-size);
            height: var(--icon-size);
        }
    `,
];
