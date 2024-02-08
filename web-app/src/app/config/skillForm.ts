import { Validators } from "@angular/forms";
import { TFormConfig } from "types/forms/TFormConfig";
import { TFormGroup } from "types/forms/TFormGroup";
import { TText, TNumber } from "types/forms/elements";
import { price } from "../forms/validators/Price";

const formConfig = {
    formGroup: {
        name: 'newSkill',
        elements: []
    } as TFormGroup,
    elements: {
        title: {
            type: 'text',
            id: 'title',
            name: 'title',
            label: 'Title',
            placeholder: '',
            mandatory: true,
            validations: [
                Validators.required
            ]
        } as TText,
        description: {
            type: 'text',
            id: 'description',
            name: 'description',
            label: 'Description',
            placeholder: '',
            mandatory: true,
            validations: [
                Validators.required
            ]
        } as TText,
        price: {
            type: 'number',
            id: 'price',
            name: 'price',
            label: 'Price',
            placeholder: '',
            mandatory: true,
            validations: [
                Validators.required,
                price
            ]
        } as TNumber,
    }
} as TFormConfig;

export { formConfig };
