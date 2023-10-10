import { FormControl, FormGroup } from '@angular/forms';
import { IFormProperties } from 'interfaces/forms/IFormProperties';
import { TFormConfig } from 'types/forms/TFormConfig';
import { TFormGroup } from 'types/forms/TFormGroup';

export class BasicForm implements IFormProperties {
    formGroup: TFormGroup = {
        name: '',
        elements: [ ]
    };

    form: FormGroup;

    constructor(config: TFormConfig, elementValues: any) {
        let formConfig: TFormConfig =  {
            formGroup: JSON.parse(JSON.stringify(config.formGroup)),
            elements: config.elements
        };

        this.populateDynamicValues(formConfig, elementValues);

        this.form = new FormGroup(this.createFormElements(formConfig.formGroup));
        this.formGroup = formConfig.formGroup;
    }

    private createFormElements(formGroup: TFormGroup) {
        let formElements: any = {};

        formGroup.elements.forEach(elm => {
            formElements[elm.id] = new FormControl(elm.value, elm.validations);
        });

        return formElements;
    }

    private populateDynamicValues(config:TFormConfig, elementValues: any) {
        Object.keys(elementValues).forEach(key => {
            config.formGroup.elements.push({
                ...config.elements[key],
                value: elementValues[key]
            });
        })
    }
}
