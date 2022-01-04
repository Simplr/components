import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const comboboxStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            position: relative;
        }

        simplr-input {
            --font-size: var(--font-size);
        }

        simplr-menu {
            max-height: var(--list-max-height, auto);
            overflow-y: auto;
            --offset-y: 6px;
        }

        simplr-menu[elevated] {
            --offset-y: 8px;
        }

        simplr-menu-item span {
            display: flex;
            flex-direction: column;
        }

        button {
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
            background: none;
            padding: 0;
            margin: 0;
            border: none;
        }
    `,
];
