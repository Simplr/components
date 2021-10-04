import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const inputStyles = [
    baseStyles,
    css`
        :host {
            --background-color: transparent;
            --text-color: rgba(0, 0, 0, 0.87);
            --underline-size: 1px;
            --highlight-color: var(--primary-color);
            --font-size: 16px;
            --transition: 200ms ease-in-out;
            --subtitle-font-size: calc(0.7 * var(--font-size));
            display: block;
            width: 100%;
            position: relative;
            padding: calc(var(--font-size) * 0.65) 0 0 calc(var(--font-size) * 0.1);
            overflow: visible;
            color: var(--text-color);
            background: var(--background-color);
            border-radius: 2px;
        }
        :host([invalid]) {
            --highlight-color: var(--secondary-color);
            --text-color: var(--secondary-color);
        }

        :host([invalid]) ::slotted(input) {
            box-shadow: 0px 1px 4px 1px var(--secondary-color);
        }

        ::slotted(label) {
            font-size: var(--font-size);
            transition: var(--transition);
        }
        ::slotted(input) {
            width: 100%;
            height: 100%;
            font-size: inherit;
            border: 2px solid var(--border-color);
            position: relative;
            outline: none;
            background: transparent;
            font-size: var(--font-size);
            padding: 0.4rem;
            margin: 0.5rem 0 0 0;
            border-radius: 2px;
            transition: var(--transition);
        }

        :host(:focus-within) ::slotted(input) {
            box-shadow: 0px 1px 4px 1px var(--primary-color);
        }
        /* Focus events */
        :host(:focus-within)::after {
            width: 100%;
        }
        :host(:focus-within) ::slotted(label),
        :host([hasContent]) ::slotted(label) {
        }
        :host(:focus-within) ::slotted(label) {
            color: var(--highlight-color);
        }
        /* Disabled */
        :host([disabled]) ::slotted(label),
        ::slotted(input[disabled]) {
            opacity: 0.7;
        }

        .subtitle {
            font-size: var(--subtitle-font-size);
            opacity: 0.6;
        }
    `,
];