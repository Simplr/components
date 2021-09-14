import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const tabStyles = [
    baseStyles,
    css`
        :slotted(:not([slot]):not(:first-child)) {
            margin-left: 1rem;
        }

        :host {
            opacity: 0.6;
            cursor: pointer;
        }

        :host([selected]) {
            opacity: 1;
        }
    `,
];

export const tabsStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .tabs {
            display: flex;
        }

        slot::slotted(*:not(:first-child)) {
            margin-left: 1rem;
        }

        slot[name='tab-panels']::slotted(*:not(:first-child)) {
            margin: 0;
        }
    `,
];

export const tabPanelStyles = [
    baseStyles,
    css`
        :host {
            display: none;
        }

        :host([show]) {
            display: block;
        }
    `,
];
