import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const inputStyles = [
    baseStyles,
    css`
        :host {
            --primary-color: #0087d7;
            --secondary-color: #f94416;
            --background-color: transparent;
            --text-color: rgba(0, 0, 0, 0.87);
            --underline-size: 1px;
            --highlight-color: var(--primary-color);
            --font-size: 16px;
            --transition: 200ms ease-in-out;
            display: block;
            width: 100%;
            position: relative;
            padding: calc(var(--font-size) * 0.65) 0 0 calc(var(--font-size) * 0.1);
            overflow: visible;
            color: var(--text-color);
            background: var(--background-color);
        }
        :host([invalid]) {
            --highlight-color: var(--secondary-color);
            --text-color: var(--secondary-color);
        }
        ::slotted(label) {
            position: absolute;
            opacity: 1;
            font-size: calc(var(--font-size) * 0.8);
            transition: var(--transition);
            transform-origin: left;
            bottom: 6px;
        }
        ::slotted(input) {
            width: 100%;
            height: 100%;
            font-size: inherit;
            border: none;
            position: relative;
            outline: none;
            background: transparent;
            font-size: calc(var(--font-size) * 0.8);
            padding: 3px 0;
        }
        :host::before,
        :host::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            height: var(--underline-size);
            z-index: 1;
        }
        :host::before {
            width: 100%;
            background: var(--text-color);
            opacity: 1;
        }
        :host::after {
            width: 0;
            background: var(--highlight-color);
            transition: var(--transition);
            right: 0;
            margin: 0 auto;
        }
        /* Focus events */
        :host(:focus-within)::after {
            width: 100%;
        }
        :host(:focus-within) ::slotted(label),
        :host([hasContent]) ::slotted(label) {
            transform: scale(0.6) translate(calc(var(--font-size) * 0.1), calc(var(--font-size) * -1.3));
            opacity: 0.9;
        }
        :host(:focus-within) ::slotted(label) {
            color: var(--highlight-color);
        }
        /* Disabled */
        :host([disabled]) ::slotted(label),
        ::slotted(input[disabled]) {
            opacity: 0.7;
        }
    `,
];
