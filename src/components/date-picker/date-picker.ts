import { customElement } from 'lit/decorators.js';
import '@simplr-wc/components-core/loading';
import { LitFlatpickr } from 'lit-flatpickr';
import '@simplr-wc/input';
import { datePickerStyles } from './date-picker.styles';

@customElement('simplr-date-picker')
export class SimplrDatePicker extends LitFlatpickr {
    constructor() {
        super();
        this.theme = 'material_blue';
        this.firstDayOfWeek = 1;
    }

    static get styles() {
        return [...super.styles, ...datePickerStyles];
    }
}
