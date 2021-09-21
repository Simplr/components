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
            color: #fff;
            fill: #fff;
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
            z-index: -1;
        }

        :host([steal-focus][drawer-open]) .focus-stealer {
            display: block;
            opacity: 1;
            pointer-events: all;
        }
    `,
];

export const drawerItemStyles = [
    baseStyles,
    css`
        :host {
            width: 100%;
            min-width: 200px;
            display: flex;
            color: inherit;
            fill: inherit;
            --hover-background: rgba(255, 255, 255, 0.2);
            transition: 100ms ease-in-out;
        }

        :host(:hover) {
            background: var(--hover-background);
        }

        .item-focus {
            cursor: pointer;
            width: 100%;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
        }

        .item-focus * {
            cursor: pointer;
        }

        :host([side='left']) .item-focus {
        }
        :host([side='right']) .item-focus {
            flex-direction: row-reverse;
        }
    `,
];
