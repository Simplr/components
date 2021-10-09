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
            width: 100%;
            --offset-y: -8px;
        }

        simplr-menu[elevated] {
            --offset-y: -6px;
        }
    `,
];
