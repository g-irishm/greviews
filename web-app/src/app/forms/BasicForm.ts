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
        let formConfig: TFormConfig = JSON.parse(JSON.stringify(config));

        this.populateDynamicValues(formConfig, elementValues);

        this.form = new FormGroup(this.createFormElements(formConfig.formGroup));
        this.formGroup = formConfig.formGroup;
    }

    private createFormElements(formGroup: TFormGroup) {
        let formElements: any = {};

        formGroup.elements.forEach(elm => {
            formElements[elm.id] = new FormControl(elm.value);
        });

        return formElements;
    }

    private populateDynamicValues(config:TFormConfig, elementValues: any) {
        Object.keys(elementValues).forEach(key => {
            config.elements[key].value = elementValues[key];
            config.formGroup.elements.push(config.elements[key]);
        })
    }
}
