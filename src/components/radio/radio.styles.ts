import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const radioStyles = [
    baseStyles,
    css`
        :host {
            --primary-color: #0087d7;
            --secondary-color: #f94416;
            --success-color: #41d888;
            --main-color: #000;
            --size: 16px;
            display: flex;
            width: fit-content;
            width: -moz-fit-content;
            justify-content: center;
            align-items: center;
            cursor: pointer;
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
        ::slotted(input) {
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 0;
            left: 0;
        }
        .radio-field {
            width: var(--size);
            height: var(--size);
            border: 1px solid #000;
            border-radius: 50%;
            margin: 0 calc(var(--size) / 2);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 800ms ease-in-out;
            background: #fff;
            position: relative;
        }
        .radio-field svg {
            width: var(--size);
            height: var(--size);
            fill: none;
            stroke: red;
        }
        .radio-field path {
            stroke-dashoffset: 40px;
            stroke-dasharray: 40px;
            stroke: #fff;
            stroke-width: 3px;
            transition: 600ms ease-in-out;
        }
        :host([checked]) .radio-field path {
            stroke-dashoffset: 0;
            /*d: path('M1.5 12.5 l7.5 6 l12 -15');*/
        }
        :host([checked]) .radio-field {
            background: var(--main-color);
            transition: 300ms ease-in-out;
            border: 1px solid var(--main-color);
        }
        :host([checked]) .radio-field::before {
            background: var(--main-color);
        }
        :host([checked]:hover) .radio-field::before {
            opacity: 0.3;
        }
        .radio-field::before,
        .radio-field::after {
            content: '';
            position: absolute;
            top: calc(var(--size) / 2 * -1);
            left: calc(var(--size) / 2 * -1);
            margin: auto;
            width: 200%;
            height: 200%;
            border-radius: 50%;
        }
        .radio-field::before {
            background: #000;
            opacity: 0;
            z-index: -2;
            transition: opacity 200ms ease-in-out;
        }
        :host(:focus-within) .radio-field::before,
        :host(:hover) .radio-field::before {
            opacity: 0.2;
        }
        :host(:active) .radio-field::before {
            opacity: 0;
        }
        .radio-field::after {
            z-index: -1;
            background: var(--main-color);
            transform: scale(1);
            opacity: 0;
            transition: transform 300ms ease-in-out, opacity 700ms ease-in-out;
        }
        :host(:active) .radio-field::after {
            transform: scale(0);
            opacity: 0.9;
            transition: 0ms;
        }
        ::slotted(*) {
            cursor: pointer;
        }
    `,
];
