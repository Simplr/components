import { css } from 'lit';
import { baseStyles } from '@simplr-wc/components-core';

export const checkboxGroupStyles = [
  baseStyles,
  css`
    :host {
      display: flex;
      flex-direction: column;
      width: fit-content;
      cursor: pointer;
    }
    slot {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  `,
];
