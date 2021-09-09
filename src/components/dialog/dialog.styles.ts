import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const dialogStyles = [
    baseStyles,
    css`
        :host {
            --padding: 1rem;
        }
        .dialog-area {
            display: flex;
            min-width: 540px;
            width: min-content;
            min-height: 100px;
            height: min-content;
            opacity: 0;
            transition: 200ms ease-in-out;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            transform: translate(0, -40px);
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
            border-radius: 4px;
        }
        :host([visible]) .dialog-area {
            z-index: 110;
            background: #fff;
            opacity: 1;
            transform: translate(0, 0);
            transition: 400ms ease-in-out;
        }
        :host::after {
            opacity: 0;
            transition: 350ms ease-in-out opacity;
            content: '';
            background: #4a4a4a;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            visibility: none;
            pointer-events: none;
        }
        :host([visible]):after {
            pointer-events: auto;
            opacity: 0.7;
            z-index: 100;
        }
        .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
            border: none;
            background: none;
        }
        slot {
            display: flex;
            flex-direction: column;
            padding: var(--padding);
        }
    `,
];
