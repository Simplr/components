import { css } from 'lit';
import { baseStyles, hostRippleStyles } from '@simplr-wc/components-core';

export const buttonStyles = [
    baseStyles,
    hostRippleStyles,
    css`
        :host {
            --text-color: var(--main-color, #444);
            --ripple-color: var(--main-color);
            --size: 16px;
            position: relative;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: var(--size);
            width: fit-content;
            width: -moz-fit-content;
            height: fit-content;
            height: -moz-fit-content;
            cursor: pointer;
            line-height: 36px;
            padding: 0 8px;
            border-radius: 4px;
            outline: none;
            transition: 200ms ease-in-out;
            transition-property: background;
            background-color: transparent;
            color: var(--text-color);
            overflow: hidden;
        }
        :host([small]) {
            padding: 0;
            line-height: var(--size);
        }
        :host([contained]) {
            color: var(--alternative-text-color);
            background-color: var(--main-color);
            --ripple-color: var(--alternative-text-color);
        }
        :host([outlined]) {
            border: 2px solid var(--main-color);
            --ripple-color: var(--text-color);
        }
        :host([elevated]) {
            color: var(--alternative-text-color);
            --ripple-color: var(--alternative-text-color);
            background-color: var(--main-color);
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        }
        :host([disabled]) {
            pointer-events: none;
        }
        :host([primary]) {
            --main-color: var(--primary-color);
        }
        :host([secondary]) {
            --main-color: var(--secondary-color);
        }
        :host([success]) {
            --main-color: var(--success-color);
        }
        :host::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--ripple-color);
            opacity: 0;
            transition: 200ms ease-in-out;
            pointer-events: none;
        }
        :host([rounded]) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(var(--size) * 2);
            height: calc(var(--size) * 2);
            padding: 0.2rem;
            border-radius: 50%;
        }
        :host([rounded])::after {
            border-radius: 50%;
        }
        :host(:hover)::after,
        :host(:focus-visible)::after,
        :host(:focus-within)::after {
            opacity: 0.3;
        }

        ::slotted(*) {
            padding: 0 0.25rem;
        }

        :host([rounded]) ::slotted(*) {
            padding: 0;
        }

        ::slotted(button) {
            padding: 0;
            width: 0;
            height: 0;
            appearance: none;
            font-size: 0;
            border: 0;
            margin: 0;
        }

        a,
        button {
            text-decoration: none;
            background: transparent;
            color: inherit;
            font-size: inherit;
            outline: none;
            border: none;
            line-height: inherit;
            cursor: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1px 6px;
        }
    `,
];
