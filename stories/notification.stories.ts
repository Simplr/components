import { html } from 'lit';
import { SimplrNotification } from '@simplr-wc/notification';
import { Story } from './story-types.js';

export default {
    title: 'Notification',
    component: 'simplr-notification',
    argTypes: {},
};

const newNotification = (role: string, message: string) => {
    const title = role.substring(0, 1).toUpperCase() + role.substring(1);
    SimplrNotification.open({ title, message, role });
};
const newNotificationNoTimeout = (role: string, message: string) => {
    const title = role.substring(0, 1).toUpperCase() + role.substring(1);
    SimplrNotification.open({ title, message, role, timeout: 0 });
};

export interface ArgTypes {
    loading: boolean;
}
const Template: Story<ArgTypes> = () => html`
    <button @click=${() => newNotification('info', 'Did you know that Simplr Components use Typescript?')}>
        Notification Info
    </button>
    <button @click=${() => newNotification('success', 'Successfully opened a Toast!')}>Notification Success</button>
    <button @click=${() => newNotification('warning', 'Using too many Toasts might cause addiction in the long run.')}>
        Notification Warning
    </button>
    <button @click=${() => newNotification('error', 'Toast has failed successfully')}>Notification Error</button>
    <button @click=${() => newNotificationNoTimeout('error', 'Toast has failed successfully')}>
        Notification Error without timeout
    </button>
`;

export const Regular = Template.bind({});
