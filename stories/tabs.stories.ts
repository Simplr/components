import { html } from 'lit';
import '@simplr-wc/tabs';
import { Story } from './story-types.js';

export default {
    title: 'Tab',
    component: 'simplr-tab',
    argTypes: {},
};

export interface ArgTypes { }

const Tab: Story<ArgTypes> = ({ }: ArgTypes) => html`
    <simplr-tabs selected="1">
        <simplr-tab value="1">One</simplr-tab>
        <simplr-tab value="2">
            Two
            <simplr-icon icon="check" size="1.4rem"></simplr-icon>
        </simplr-tab>
        <simplr-tab value="3">Three</simplr-tab>
        <simplr-tab value="4">
            <simplr-icon icon="x" size="1.4rem"></simplr-icon>
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
