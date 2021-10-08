import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const actionMenuStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            width: -moz-fit-content;
            height: fit-content;
            height: -moz-fit-content;
            --size: 18px;
            --height: var(--size);
            --width: var(--size);
            cursor: pointer;
            transition: 100ms ease-in-out;
        }

        :host([vertical]) {
            transform: rotate(90deg);
            transform-origin: center;
            margin-bottom: 0.25rem;
        }

        :host(:hover) {
            fill: var(--primary-color);
            color: var(--primary-color);
        }

        ::slotted(*) {
            height: var(--height);
            width: var(--width);
        }
    `,
];
