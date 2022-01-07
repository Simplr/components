export function formDataToJSON<T extends Record<string, any>>(formData: FormData): T {
    const json = {} as Record<string, any>;
    formData.forEach((val, key) => {
        json[key] = val;
    });

    return json as T;
}

export function isFormValid(form: HTMLFormElement) {
    const formData = new FormData(form);
    let allFieldsAreValid = true;
    formData.forEach((_val, key) => {
        const inputElement = form.querySelector(`[name='${key}'][required]`) as any;
        if (inputElement) {
            const valid = inputElement.checkValidity();
            if (!valid) {
                allFieldsAreValid = false;
            }
        }
    });
    return allFieldsAreValid;
}
