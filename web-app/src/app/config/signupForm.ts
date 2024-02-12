import { Validators } from "@angular/forms";
import { TFormGroup } from "types/forms/TFormGroup";
import { TEmail, TPassword, TText } from "types/forms/elements";
import { confirmPassword } from "../forms/validators/ConfirmPassword";
import { TFormBuilder } from "types/forms/TFormBuilder";

const FormBuilder = {
    name: 'signup',
    groups: [
        {
            name: 'Signup',
            title: 'Sign Up',
            id: 'signup',
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
                } as TPassword,
                {
                    type: 'password',
                    id: 'confirmedPassword',
                    name: 'confirmedPassword',
                    label: 'Confirm Password',
                    placeholder: '',
                    mandatory: true,
                    validations: [
                        Validators.required
                    ]
                } as TPassword
            ],
            validations: [
                confirmPassword
            ]
        } as TFormGroup
    ]
} as TFormBuilder;

export { FormBuilder };