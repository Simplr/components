import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const comboboxStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
        }

        simplr-input {
            --font-size: var(--font-size);
        }

        simplr-menu {
            --offset-y: 6px;
        }

        simplr-menu[elevated] {
            --offset-y: 8px;
        }

        simplr-menu-item span {
            display: flex;
            flex-direction: column;
        }
    `,
];
