import { css } from 'lit';
import { baseStyles } from '../../core/theme/base.styles';
import { hostRippleStyles } from '../../core/theme/ripple.styles';

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
      cursor: pointer;
      line-height: 36px;
      padding: 0 16px;
      border-radius: 4px;
      outline: none;
      transition: 200ms ease-in-out;
      transition-property: background;
      background-color: transparent;
      color: var(--text-color);
      overflow: hidden;
    }
    :host([contained]) {
      color: var(--alternative-text-color);
      background-color: var(--main-color);
      --ripple-color: var(--alternative-text-color);
      font-weight: 700;
    }
    :host([outlined]) {
      border: 2px solid var(--main-color);
      --ripple-color: var(--text-color);
    }
    :host([elevated]) {
      color: var(--alternative-text-color);
      --ripple-color: var(--alternative-text-color);
      background-color: var(--main-color);
      font-weight: 700;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
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
      padding: 0.5rem;
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
    ::slotted(svg) {
      fill: var(--text-color);
      height: var(--size);
      width: var(--size);
      padding-right: calc(var(--size) * 0.7);
    }
    :host([rounded]) ::slotted(svg) {
      padding: 0;
    }

    button {
      background: transparent;
      color: inherit;
      font-size: inherit;
      outline: none;
      border: none;
      line-height: inherit;
      cursor: inherit;
    }
  `,
];
