import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const cardStyles = [
    baseStyles,
    css`
        :host {
            min-width: 260px;
            width: fit-content;
            width: -moz-fit-content;
            border-radius: 4px;
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
            display: flex;
            flex-direction: column;
            background: #fff;
        }
        a {
            width: 100%;
            height: 100%;
            display: inherit;
            flex-direction: inherit;
            align-items: inherit;
            justify-content: inherit;
            color: inherit;
            text-decoration: none;
        }
        .content {
            padding: 1rem;
        }
        h2,
        p {
            margin: 0;
        }
        h2 {
            font-size: 1.25rem;
            margin-bottom: 0.25rem;
        }
        p {
            font-size: 0.875rem;
            opacity: 0.6;
        }
        slot[name='media']::slotted(*) {
            border-radius: 4px 4px 0 0;
        }

        slot::slotted(p) {
            font-size: 0.875rem;
            opacity: 0.6;
        }
        slot[name='actions']::slotted(div) {
            padding: 1rem;
            border-top: 1px solid #d6d1e0;
        }
    `,
];
