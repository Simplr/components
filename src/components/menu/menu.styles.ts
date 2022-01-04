import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const menuStyles = [
    baseStyles,
    css`
        :host {
            --background-color: --light-background-color;
            --menu-width: auto;

            --offset-top: 0px;
            --offset-left: 0px;

            --offset-x: 0px;
            --offset-y: 0px;

            position: fixed;
            top: calc(var(--offset-top) + var(--offset-y));
            left: calc(var(--offset-left) + var(--offset-x));

            display: flex;
            flex-direction: column;
            border-radius: 4px;
            background: var(--bright-background-color);
            border: 0 solid var(--border-color);
            width: var(--menu-width);
            height: 0px;
            overflow-y: hidden;
            overflow-x: clip;
            transition: 200ms ease-in-out height;
            z-index: 9001;
        }

        :host([dir='up']) {
            transform-origin: bottom;
        }

        :host([dir='down']) {
            transform-origin: top;
        }

        slot {
            display: block;
        }

        :host([visible]) {
            width: var(--menu-width);
            height: var(--menu-height);
            border: 2px solid var(--border-color);
        }

        :host([elevated]) {
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        }
    `,
];

export const menuItemStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            padding: 0.5rem 1rem;
            cursor: pointer;
            align-items: center;
            font-size: 0.8rem;
        }

        button {
            display: flex;
            cursor: pointer;

            background: none;
            border: none;
            outline: none;
            color: inherit;
            fill: inherit;
            text-align: left;
        }

        :host(:hover),
        :host(:focus),
        :host([selected]),
        :host(:focus-within) {
            outline: none;
            background: var(--primary-color);
            color: var(--alternative-text-color);
            fill: var(--alternative-text-color);
        }

        slot[name='icon-before']::slotted(*) {
            padding-right: 0.5rem;
        }

        slot[name='icon-after']::slotted(*) {
            padding-left: 0.5rem;
            margin-left: auto;
        }

        ::slotted(*) {
            pointer-events: none;
        }

        :host([divider]) {
            cursor: auto;
            padding: 0;
            margin: 0;
            height: 2px;
            width: 101%;
            background: var(--border-color);
        }

        :host([non-selectable]) {
            pointer-events: none;
            cursor: auto;
        }
    `,
];
