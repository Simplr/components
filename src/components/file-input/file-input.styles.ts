import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const fileInputStyles = [
    baseStyles,
    css`
        :host {
            --primary-color: #0087d7;
            --secondary-color: #f94416;
            --background-color: transparent;
            --text-color: rgba(0, 0, 0, 0.4);
            --list-item-background: #fff;
            display: flex;
            flex-direction: column;
            width: 100%;
            position: relative;
        }
        .input-area {
            position: relative;
            border: 4px dashed var(--text-color);
            border-radius: 6px;
            box-sizing: border-box;
            cursor: pointer;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition-delay: 100ms;
            color: var(--text-color);
        }
        .input-area label {
            width: max-content;
        }
        .input-area * {
            cursor: inherit;
        }
        .input-area svg {
            height: 3rem;
            width: 3rem;
            fill: var(--text-color);
            transition-delay: 100ms;
        }
        .input-area::before {
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            background: var(--primary-color);
            opacity: 0;
            transition: 500ms ease-in-out;
            z-index: -1;
            transform: scale(0);
        }
        .input-area:focus-within::before,
        :host([filehover]) .input-area::before,
        .input-area:hover::before {
            opacity: 0.8;
            transform: scale(7.5);
        }
        .input-area:focus-within,
        :host([filehover]) .input-area,
        .input-area:hover {
            color: #fff;
        }
        .input-area:focus-within svg,
        :host([filehover]) .input-area svg,
        .input-area:hover svg {
            fill: #fff;
        }
        ::slotted(input) {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .file-area {
            display: flex;
            flex-direction: column;
        }
        .file-area ul {
            padding: 0;
        }
        .file-area ul li {
            width: 100%;
            height: 3.5rem;
            list-style: none;
            display: flex;
            border: 1px solid #d6d1e0;
            margin-bottom: 2px;
            border-radius: 4px;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
            transition: 200ms ease-in-out;
            animation: slide-in 200ms;
            transform: translate(0, 0) scaleY(1);
            background: var(--list-item-background);
            transform-origin: top;
        }
        .file-area ul li[deleting] {
            transform: scaleY(0);
            height: 0;
        }
        @keyframes slide-in {
            from {
                transform: translate(0, -2rem);
            }
        }
        .file-area ul li button {
            background: none;
            border: none;
            outline: none;
            position: relative;
            width: 24px;
            height: 24px;
            padding: 0;
            cursor: pointer;
        }
        .file-area ul li button:before,
        .file-area ul li button:after {
            content: '';
            position: absolute;
            top: -4px;
            left: -6px;
            margin: auto;
            width: 150%;
            height: 150%;
            border-radius: 50%;
        }
        .file-area ul li button:before {
            background: #000;
            opacity: 0;
            z-index: -2;
            transition: opacity 200ms ease-in-out;
        }
        .file-area ul li button path {
            transition: 200ms ease-in-out;
            z-index: 1;
        }
        .file-area ul li button:hover path,
        .file-area ul li button:focus path {
            fill: var(--secondary-color);
        }
        .file-area ul li button:focus::before,
        .file-area ul li button:hover::before {
            opacity: 0.1;
        }
        :host([disabled]) {
            opacity: 0.7;
            pointer-events: none;
        }
    `,
];
