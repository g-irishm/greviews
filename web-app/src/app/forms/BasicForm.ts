import { FormControl, FormGroup } from '@angular/forms';
import { TFormConfig } from 'types/forms/TFormConfig';
import { TFormGroup } from 'types/forms/TFormGroup';

export class BasicForm {
    public formGroup: TFormGroup = {
        name: '',
        elements: [ ]
    };

    public form;

    constructor(config: TFormConfig, elementValues: any) {
        let formElements = this.createFormElements(elementValues);

        this.populateDynamicValues(config, elementValues);
        this.form = new FormGroup(formElements);
        this.formGroup = config.formGroup;
    }

    createFormElements(elementValues: any) {
        let formElements: any = {};

        Object.keys(elementValues).forEach(key => {
            formElements[key] = new FormControl(elementValues[key]);
        })

        return formElements;
    }

    populateDynamicValues(config:TFormConfig, elementValues: any) {
        Object.keys(elementValues).forEach(key => {
            config.elements[key].value = elementValues[key];
            config.formGroup.elements.push(config.elements[key]);
        })
    }
}
