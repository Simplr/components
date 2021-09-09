import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { fileInputStyles } from './file-input.styles';
import '@simplr-wc/components-core/loading';

/**
 *   A File Input element From Simplr Components
 *
 *   Usage
 *
 *   <simplr-file-input name="files" multi label="Drag and Drop your files here"></simplr-file-input>
 *
 *   @element simplr-file-input
 *
 *   @prop {string} label             - Label of input element
 *   @prop {string} name              - Name of input element
 *   @prop {boolean} disabled         - Boolean stating if input is disabled
 *   @prop {boolean} multi            - Boolean stating if input allows multiple files to be chosen
 *   @prop {boolean} required         - Boolean stating if input is required
 *
 *   @attr {boolean} invalid          - Boolean set true when input has a invalid value
 *   @attr {boolean} filehover        - Boolean set true when a file is hovered on top of the field
 *
 *   @csspart [--primary-color=#0087d7]                     - Primary color of input element
 *   @csspart [--secondary-color=#f94416]                   - Secondary color of input element. Used for error states
 *   @csspart [--background-color=transparent]              - Background color of input element
 *   @csspart [--text-color=rgba(0,0,0,0.4)]                - Text color of input element
 *   @csspart [--list-item-background=#fff]                 - Color of the chosen file list item background
 *
 * */
@customElement('simplr-file-input')
export class SimplrFileInput extends LitElement {
    @property({ type: String, reflect: true })
    label: string | undefined;

    @property({ type: String, reflect: true })
    name: string = '';

    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    @property({ type: Boolean, reflect: true })
    required: boolean = false;

    @property({ type: Boolean, reflect: true })
    multi: boolean = false;

    @property({ type: Boolean, reflect: true })
    invalid: boolean = false;

    @property({ type: Boolean, reflect: true })
    filehover: boolean = false;

    @property({ type: Object })
    inputElem: HTMLInputElement | undefined;

    @property({ type: Array })
    files: Array<File> = [];

    firstUpdated() {
        this.createElements();
    }

    updated() {
        if (this.inputElem) {
            this.inputElem.disabled = this.disabled;
        }

        this.setElementAttributes();
    }

    addEventListeners(inputElem: HTMLInputElement) {
        inputElem?.addEventListener('dragenter', () => {
            this.filehover = true;
        });
        inputElem?.addEventListener('drop', () => {
            this.filehover = false;
        });
    }

    /**
     *  @function
     *  Add file(s) to the file input list
     *
     *  @param {Array<File>} files  List of files to add
     * */
    public addFiles(files: Array<File>) {
        if (this.multi) {
            this.files = [...this.files, ...files];
        } else {
            this.files = [...files];
        }
    }

    /**
     * @function
     * Remove a file from the list.
     *
     * @param {number | string} indexOrName     Index or name of the file to be removed
     * */
    public removeFile(indexOrName: number | string) {
        if (typeof indexOrName === 'number') {
            this.files.splice(indexOrName, 1);
            this.files = [...this.files];
        } else {
            this.files = this.files.filter(file => file.name !== indexOrName);
        }
    }

    /**
     * @function
     * Get the files added to the input field.
     *
     * @returns {Array<File>} files Files that were se on the input field
     * */
    public getFiles(): Array<File> {
        return this.files;
    }

    onRemoveButtonClick(e: Event, index: number) {
        const target = e.target as HTMLElement;
        const listItem = target.parentNode as HTMLElement;
        listItem.addEventListener(
            'transitionend',
            ev => {
                if (ev.target === listItem && ev.propertyName === 'transform') {
                    this.removeFile(index);
                }
            },
            false,
        );
        listItem.setAttribute('deleting', '');
    }

    private createElements(): void {
        this.inputElem = document.createElement('input');
        this.inputElem.type = 'file';
        this.inputElem.addEventListener('input', e => {
            const target = e.target as HTMLInputElement;
            const uploadedFiles = target.files ? Array.from(target.files) : [];
            this.addFiles(uploadedFiles);
            if (this.inputElem) {
                this.inputElem.value = '';
                this.inputElem.blur();
            }
        });
        this.appendChild(this.inputElem);
        this.addEventListeners(this.inputElem);
    }

    private setElementAttributes() {
        if (this.inputElem) {
            this.inputElem.disabled = this.disabled;
            this.inputElem.name = this.name;
            this.inputElem.multiple = this.multi;
        }
    }

    render() {
        return html`<div class="input-area">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z"
                    />
                </svg>
                <label>${this.label}</label>
                <slot></slot>
            </div>
            <div class="file-area">
                <ul>
                    ${repeat(
                        this.files,
                        file => file.name,
                        (file, index) => html`
                            <li>
                                ${file.name}
                                <button @click=${(e: Event) => this.onRemoveButtonClick(e, index)}>
                                    <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"
                                        />
                                    </svg>
                                </button>
                            </li>
                        `,
                    )}
                </ul>
            </div> `;
    }

    static get styles() {
        return fileInputStyles;
    }
}
