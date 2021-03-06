import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const drawerStyles = [
    baseStyles,
    css`
        :host {
            --drawer-width: 9999px;
            --view-size: 9999px;
            --focus-stealer-background: var(--dim-dark);
            --accent-color: var(--primary-color);

            position: fixed;
            top: 0;
            height: 100vh;
            background-color: var(--background-color);
            color: #fff;
            fill: #fff;
            will-change: left, right;
            transition: 300ms ease-in-out;
            display: flex;
            flex-direction: column;
            transform: translate(0, 0);
            will-change: transform;
        }

        :host([elevated]) {
            box-shadow: var(--elevated);
        }

        :host([side='left']) {
            transform: translate(calc(-1 * var(--drawer-width)), 0);
            left: 0;
        }

        :host([side='left'][drawer-open]) {
            transform: translate(0, 0);
        }

        :host([drawer-open]) {
            z-index: 100;
        }

        :host([side='right']) {
            right: 0;
            transform: translate(calc(1 * var(--drawer-width)), 0);
        }

        :host([side='right'][drawer-open]) {
            transform: translate(0, 0);
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
            transform: translate(calc((var(--view-size) - var(--drawer-width)) * -1));
        }

        .close-menu-button {
            background: none;
            width: fit-content;
            padding: 0;
            border: none;
            position: absolute;
            top: 1rem;
            right: -2rem;
            cursor: pointer;
            color: var(--text-color);
            transform: rotate(180deg);
            transition: 200ms ease-in-out;
        }

        :host([drawer-open]) .close-menu-button {
            right: 1rem;
            transform: rotate(0deg);
            color: var(--alternative-text-color);
        }

        :host([side='right']) .close-menu-button {
            right: unset;
            left: -2rem;
            transform: rotate(0deg);
        }

        :host([side='right'][drawer-open]) .close-menu-button {
            right: unset;
            left: 1rem;
            transform: rotate(180deg);
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
            --hover-background: var(--dim-dark);
            --hover-color: var(--accent-color);
            --accent-color: inherit;
            transition: 100ms ease-in-out;
        }

        :host * {
            color: inherit;
        }

        :host(:hover) {
            background: var(--hover-background) !important;
            color: var(--hover-color) !important;
        }

        :host([selected]) {
            border-left: 5px solid var(--accent-color);
            color: var(--accent-color);
        }

        .item-focus {
            text-decoration: none;
            cursor: pointer;
            width: 100%;
            background: inherit;
            border: none;
            color: inherit;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
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

        :host([end]) {
            margin-top: auto;
            margin-bottom: 0;
        }
    `,
];
