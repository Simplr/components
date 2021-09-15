import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const tabStyles = [
    baseStyles,
    css`
        :host {
            opacity: 0.6;
            cursor: pointer;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        label {
            height: 100%;
            cursor: pointer;
            line-height: 1.5;
            padding: 0 0.25rem 0 0;
        }

        :host([selected]) {
            opacity: 1;
        }

        slot {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    `,
];

export const tabsStyles = [
    baseStyles,
    css`
        :host {
            display: flex;
            flex-direction: column;
            --tab-header-width: 0px;
            --tab-header-offset: 0px;
        }

        .tabs {
            display: flex;
            position: relative;
        }

        slot::slotted(*:not(:first-child)) {
            margin-left: 1rem;
        }

        slot[name='tab-panels']::slotted(*:not(:first-child)) {
            margin: 0;
        }

        span.marker {
            height: 2px;
            width: var(--tab-header-width);
            background: #000;
            position: absolute;
            bottom: 0;
            left: var(--tab-header-offset);
            transition: 200ms ease-in-out;
        }
    `,
];

export const tabPanelStyles = [
    baseStyles,
    css`
        :host {
            display: none;
        }

        :host([selected]) {
            display: block;
        }
    `,
];
