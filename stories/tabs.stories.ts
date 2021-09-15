import { html } from 'lit';
import '@simplr-wc/tabs';
import { Story } from './story-types.js';

export default {
    title: 'Tab',
    component: 'simplr-tab',
    argTypes: {},
};

const checkmark = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>`;
const cross = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>`

export interface ArgTypes { }

const Tab: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <simplr-tabs selected="1">
        <simplr-tab value="1">One</simplr-tab>
        <simplr-tab value="2">
            Two
            ${checkmark}
        </simplr-tab>
        <simplr-tab value="3">Three</simplr-tab>
        <simplr-tab value="4">
            ${cross}
            Four
        </simplr-tab>
        <simplr-tab-panel value="1">
            <p>You can simply put content into tabs, and have them appear when needed</p>
        </simplr-tab-panel>
        <simplr-tab-panel value="2">
            <p>Tab headers can be in text form or spiced up with icons</p>
        </simplr-tab-panel>
        <simplr-tab-panel value="3">
            <div style="padding: 2rem">
                <p>You can add any kind of html into your tabs</p>
            </div>
        </simplr-tab-panel>
        <simplr-tab-panel value="4">
            GLHF
        </simplr-tab-panel>
    </simplr-tabs>
`;

export const Regular = Tab.bind({});
