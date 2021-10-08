/* @ts-nocheck */
import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const notificationStyles = [
    baseStyles,
    css`
        :host {
            --success-color: #41d888;
            --error-color: #f94416;
            --info-color: #0087d7;
            --warning-color: #ffbc00;
            --notification-color: var(--info-color);
            --icon-size: 18px;
            --min-height: 100px;
            --animation-duration: 4000ms;
            display: block;
            color: #fff;
            width: 350px;
            min-height: var(--min-height);
            border-radius: 4px;
            background: var(--notification-color);
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
            opacity: 1;
            transition: 200ms ease-in-out;
            animation-name: slide-in;
            animation-duration: 500ms;
            position: static;
            top: 0;
            left: 0;
            right: 0;
            margin: 1rem auto 0;
        }
        @keyframes slide-in {
            from {
                transform: translate(0, -100px);
                opacity: 0;
            }
        }
        :host([closing]) {
            animation-name: closing-animation;
            animation-duration: 1000ms;
        }
        @keyframes closing-animation {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
                min-height: var(--min-height);
                margin: 1rem auto 0;
            }
            100% {
                opacity: 0;
                height: 0;
                min-height: 0;
                margin: 0 auto;
            }
        }
        :host([success]) {
            --notification-color: var(--success-color);
        }
        :host([error]) {
            --notification-color: var(--error-color);
        }
        :host([info]) {
            --notification-color: var(--info-color);
        }
        :host([warning]) {
            --notification-color: var(--warning-color);
        }
        .notification {
            position: relative;
            display: flex;
            justify-content: space-between;
            width: 100%;
            min-height: inherit;
        }
        .status-icon svg {
            fill: var(--notification-color);
            width: var(--icon-size);
            height: var(--icon-size);
        }
        .exit-button svg {
            fill: #fff;
            width: 10px;
            height: 10px;
        }
        .exit-button {
            position: absolute;
            top: 7.5px;
            right: 10px;
            color: #fff;
            cursor: pointer;
        }
        .icon-area {
            flex-basis: 17.5%;
            display: flex;
            justify-content: center;
            padding-top: 1.25rem;
        }
        .status-icon {
            width: calc(var(--icon-size) * 2);
            height: calc(var(--icon-size) * 2);
            border-radius: 50%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        }
        .information-area {
            flex-basis: 80%;
            padding: 4px 0 0;
        }
        .information-area h2 {
            font-size: 1.2rem;
            margin: 0.85rem 0 0.5rem;
        }
        .information-area p {
            font-size: 0.875rem;
            margin: 0 0 1.5rem;
        }
        .timeout-bar {
            width: 0%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 10px;
            background: rgba(255, 255, 255, 0.6);
            animation-duration: var(--animation-duration);
            animation-name: timeout-animation;
            animation-timing-function: linear;
        }
        @keyframes timeout-animation {
            from {
                width: 100%;
            }
        }
    `,
];
