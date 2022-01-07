import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const datePickerStyles = [
    baseStyles,
    css`
        :host {
            font-weight: 500;
            --background-color: transparent;
            cursor: auto;
            overflow: visible;
        }

        ::slotted(*) {
            cursor: auto;
        }
    `,
];
