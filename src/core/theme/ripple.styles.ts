import { css } from 'lit';

export const rippleStylesBefore = css`
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: auto;
    background: var(--ripple-color);
    opacity: 0;
    transform: scale(8);
    transition: 600ms ease-in-out;
    pointer-events: none;
`;
export const rippleStylesActive = css`
    opacity: 0.5;
    transform: scale(0);
    transition: 0ms;
`;

export const hostRippleStyles = css`
    :host::before {
        ${rippleStylesBefore}
    }
    :host(:active)::before,
    :host([active])::before {
        ${rippleStylesActive}
    }
`;
