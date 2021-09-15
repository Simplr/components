import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const listStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            flex-direction: column;
        }

        :host([elevated]) {
        }
    `,
];

export const listItemStyles = [
    baseStyles,
    css`
        :host {
            --background: #fff;
            --header-background: var(--light-background-color);
            --header-color: #595959;
            --hover-background: rgba(0, 0, 0, 0.04);

            color: var(--text-color);
            padding: 1rem;
            border: 1px solid #d6d1e0;
            transition: 100ms ease-in-out;
            display: flex;
            justify-content: space-between;
        }
        :host(:hover) {
            background: var(--hover-background);
        }
        :host([header]) {
            background: var(--header-background);
            color: var(--header-color);
        }

        slot {
            display: flex;
        }
    `,
];
