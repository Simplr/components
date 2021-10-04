import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const menuStyles = [
    baseStyles,
    css`
        :host {
            --background-color: --light-background-color;

            --offset-top: 0px;
            --offset-left: 0px;

            position: absolute;
            top: var(--offset-top);
            left: var(--offset-left);

            display: flex;
            flex-direction: column;
            border-radius: 4px;
            background: var(--bright-background-color);
            border: 2px solid var(--border-color);
            width: fit-content;
            transform: scaleY(0);
            transform-origin: top;
            transition: 100ms ease-in-out transform;
        }

        :host([dir='up']) {
            transform-origin: bottom;
        }

        :host([dir='down']) {
            transform-origin: top;
        }

        :host([visible]) {
            transform: scaleY(1);
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

        :host(:hover) {
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

        :host([divider]) {
            cursor: auto;
            padding: 0;
            margin: 0;
            height: 2px;
            width: 101%;
            background: var(--border-color);
        }
    `,
];
