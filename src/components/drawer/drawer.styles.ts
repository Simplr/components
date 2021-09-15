import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const drawerStyles = [
    baseStyles,
    css`
        :host {
            --drawer-width: 9999px;
            --focus-stealer-background: rgba(18, 18, 18, 0.6);

            position: fixed;
            top: 0;
            height: 100vh;
            background-color: var(--background-color);
            padding: 2rem;
            transition: 300ms ease-in-out;
        }

        :host([side='left']) {
            left: calc(-1 * var(--drawer-width));
        }

        :host([drawer-open]) {
            z-index: 100;
        }

        :host([side='left'][drawer-open]) {
            left: 0;
        }

        :host([side='right']) {
            right: calc(-1 * var(--drawer-width));
        }

        :host([side='right'][drawer-open]) {
            right: 0;
        }

        .focus-stealer {
            visibility: none;
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: var(--focus-stealer-background);
            opacity: 0;
            transition: 200ms ease-in-out;
        }

        :host([steal-focus][drawer-open]) .focus-stealer {
            z-index: -1;
            display: block;
            opacity: 1;
            pointer-events: all;
        }
    `,
];
