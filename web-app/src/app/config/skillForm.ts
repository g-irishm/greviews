import { Validators } from "@angular/forms";
import { TFormBuilder } from "types/forms/TFormBuilder";
import { TText, TNumber } from "types/forms/elements";
import { TFormGroup } from "types/forms/TFormGroup";
import { price } from "../forms/validators/Price";

const FormBuilder = {
    name: 'newSkill',
    groups: [
        {
            name: 'basics',
            title: 'Basic Details',
            id: 'basics',
            elements: [
                {
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
                {
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
                {
                    type: 'number',
                    id: 'price',
                    name: 'price',
                    label: 'Price',
                    placeholder: '',
                    min: 0,
                    max: 10000,
                    mandatory: true,
                    validations: [
                        Validators.required,
                        price
                    ]
                } as TNumber,
            ],
            validations: []
        } as TFormGroup
    ]
} as TFormBuilder;

export { FormBuilder };
