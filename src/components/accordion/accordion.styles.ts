import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const accordionStyles = [
    baseStyles,
    css`
        :host {
            --border: 1px solid #d6d1e0;
            --label-background: none;
            --open-label-background: var(--primary-color);
            --label-color: #000;
            --open-label-color: #fff;
            --label-padding: 1rem 0 1rem 1rem;
            --content-padding: 1rem;
            --content-height: 0px;
            display: flex;
            position: relative;
            width: 100%;
            color: #000;
            box-sizing: border-box;
            flex-direction: column;
            margin: 0;
            transition: 200ms ease-in-out;
            box-sizing: border-box;
            border: var(--border);
        }
        slot[name='label'],
        slot[name='label']::slotted(*) {
            box-sizing: border-box;
            cursor: pointer;
            width: 100%;
            transition: 200ms ease-in-out;
        }
        slot[name='label']::slotted(*) {
            background: var(--label-background);
            padding: var(--label-padding);
        }
        :host([open]) slot[name='label']::slotted(*) {
            background: var(--open-label-background);
            color: var(--open-label-color);
        }
        .container {
            display: block;
            height: 0px;
            overflow: hidden;
            transition: inherit;
        }
        slot:not([name='label']) {
            display: block;
            height: fit-content;
            height: -moz-fit-content;
            padding: var(--content-padding);
        }
        :host([open]) {
            margin: 1rem 0;
        }
        :host([first][open]) {
            margin: 0 0 1rem;
        }
        :host([last][open]) {
            margin: 1rem 0;
        }
        :host([last]) {
            border-radius: 0 0 4px 4px;
        }
        :host([open]) .container {
            height: var(--content-height);
        }
    `,
];
