import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const listStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            flex-direction: column;
            border-bottom: 4px solid rgb(214, 209, 224);
            border-radius: 4px;
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

            border: 1px solid #d6d1e0;
            padding: 1rem;
        }

        :host([href]) {
            padding: 0;
        }

        :host,
        a {
            color: var(--text-color);
            transition: 100ms ease-in-out;
            display: flex;
            justify-content: space-between;
        }

        a {
            padding: 1rem;
            text-decoration: none;
            width: 100%;
            height: 100%;
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
            align-items: center;
        }
    `,
];
