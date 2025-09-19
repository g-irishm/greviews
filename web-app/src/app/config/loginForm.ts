import { Validators } from "@angular/forms";
import { TFormBuilder } from "types/forms/TFormBuilder";
import { TFormGroup } from "types/forms/TFormGroup";
import { TEmail, TPassword } from "types/forms/elements";

const FormBuilder = {
    name: 'login',
    groups: [
        {
            name: 'login',
            title: 'Login',
            id: 'login',
            elements: [
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
                {
                    type: 'password',
                    id: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: '',
                    mandatory: true,
                    validations: [
                        Validators.required
                    ]
                } as TPassword
            ],
            validations: [ ]
        } as TFormGroup
    ]
} as TFormBuilder;

export { FormBuilder };