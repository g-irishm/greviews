import { Validators } from "@angular/forms";
import { TFormBuilder } from "types/forms/TFormBuilder";
import { TFormGroup } from "types/forms/TFormGroup";
import { TText, TEmail } from "types/forms/elements";

const FormBuilder = {
    name: 'profile',
    groups: [
        {
            name: 'profile',
            title: 'Profile',
            id: 'profile',
            elements: [
                {
                    type: 'text',
                    id: 'firstName',
                    name: 'firstName',
                    label: 'First Name',
                    placeholder: '',
                    mandatory: true,
                    validations: [
                        Validators.required
                    ]
                } as TText,
                {
                    type: 'text',
                    id: 'lastName',
                    name: 'lastName',
                    label: 'Last Name',
                    placeholder: '',
                    mandatory: true,
                    validations: [
                        Validators.required
                    ]
                } as TText,
                {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: '',
                    mandatory: true,
                    validations: [
                        Validators.required,
                        Validators.email
                    ]
                } as TEmail,
            ],
            validations: [ ]
        } as TFormGroup
    ]
} as TFormBuilder;

export { FormBuilder };
