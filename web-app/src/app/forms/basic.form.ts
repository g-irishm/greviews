import { FormControl, FormGroup } from '@angular/forms';
import { IFormProperties } from 'interfaces/forms/IFormProperties';
import { TElement } from 'types/forms/TElement';
import { TFormBuilder } from 'types/forms/TFormBuilder';
import { TFormGroup } from 'types/forms/TFormGroup';

interface controls {
    [key: string]: FormGroup;
}

interface value {
    [key: string]: string;
}

export class BasicForm implements IFormProperties {
    formBuilder: TFormBuilder = {
        name: '',
        groups: []
    };

    form: FormGroup;

    constructor(formBuilder: TFormBuilder, elementValues: any) {
        this.formBuilder = JSON.parse(JSON.stringify(formBuilder));

        this.populateDynamicValues(formBuilder, elementValues);

        this.form = new FormGroup(this.generateForm(formBuilder.groups));
    }

    generateForm(groups: Array<TFormGroup>): controls{
        var formConstructor: controls = {};

        groups.forEach(group => {
            formConstructor[group.id] = new FormGroup(this.createFormElements(group.elements), group.validations)
        });

        return formConstructor;
    }

    private createFormElements(elements: TElement) {
        let formElements: any = {};

        elements.forEach(elm => {
            formElements[elm.id] = new FormControl(elm.value, elm.validations);
        });

        return formElements;
    }

    private populateDynamicValues(formBuilder:TFormBuilder, elementValues: value) {
        formBuilder.groups = formBuilder.groups.map(group => {
            group.elements = group.elements.map(elm => {
                return {
                    ...elm,
                    value: elementValues[elm.id] || ''
                }
            });
            return group;
        });
    }
}
