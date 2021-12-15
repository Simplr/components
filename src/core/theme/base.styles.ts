import { css } from 'lit';

export const baseStyles = css`
    :host {
        --main-color-darkest: #994200;
        --main-color-dark: #cc5800;
        --main-color: #ff6d00;
        --main-color-light: #ff8b33;
        --main-color-lighter: #ffd4b3;

        --primary-color-darkest: #005181;
        --primary-color-dark: #006dab;
        --primary-color: #0087d7;
        --primary-color-light: #12a8ff;
        --primary-color-lighter: #a6deff;

        --secondary-color-darkest: #9e2304;
        --secondary-color-dark: #d32e05;
        --secondary-color: #f94416;
        --secondary-color-light: #fa6844;
        --secondary-color-lighter: #fdc7b9;

        --success-color-darkest: #1d8c50;
        --success-color-dark: #26ba6b;
        --success-color: #41d888;
        --success-color-light: #67e09f;
        --success-color-lighter: #c6f3db;

        --alternative-text-color: #fff;
        --background-color: #2f2f2f;
        --bright-background-color: #fff;
        --light-background-color: #cbcece;
        --lighter-background-color: #e1e1e1;
        --text-color: #232320;
        --gray-text-color: #808080;
        --dim-dark: rgba(18, 18, 18, 0.6);

        --border-color: rgb(238, 238, 238);

        --elevated: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 8px 0px rgba(0, 0, 0, 0.12);

        --fade-in: fade-in;

        box-sizing: border-box;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
