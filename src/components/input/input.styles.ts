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
            display: flex;
            flex-direction: column;
            width: 100%;
            position: relative;
            padding: calc(var(--font-size) * 0.65) 0 0 calc(var(--font-size) * 0.1);
            overflow: visible;
            color: var(--text-color);
            background: var(--background-color);
            border-radius: 2px;
        }

        :host([hidden]) {
            display: none;
        }

        :host([invalid]) {
            --highlight-color: var(--secondary-color);
            --text-color: var(--secondary-color);
        }

        :host([invalid]) ::slotted(input),
        :host([invalid]) ::slotted(textarea) {
            box-shadow: 0px 1px 4px 0px var(--secondary-color);
        }

        ::slotted(label) {
            box-sizing: border-box;
            font-size: var(--font-size);
            transition: var(--transition);
        }

        ::slotted(input),
        ::slotted(textarea) {
            font-family: inherit;
            margin: 0.5rem 0 0 0;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            font-size: inherit;
            border: 2px solid var(--border-color);
            position: relative;
            outline: none;
            background: transparent;
            font-size: var(--font-size);
            padding: 0.4rem;
            border-radius: 4px;
            transition: var(--transition);
        }

        :host(:focus-within) ::slotted(input),
        :host(:focus-within) ::slotted(textarea) {
            box-shadow: 0px 1px 4px 0px var(--primary-color);
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
        ::slotted(input[disabled]),
        ::slotted(textarea[disabled]) {
            opacity: 0.7;
        }

        .subtitle {
            font-size: var(--subtitle-font-size);
            opacity: 0.6;
        }

        slot {
            display: block;
            position: relative;
        }
    `,
];
