import { Validators } from "@angular/forms";
import { TFormConfig } from "types/forms/TFormConfig";
import { TFormGroup } from "types/forms/TFormGroup";
import { TEmail, TPassword, TText } from "types/forms/elements";
import { confirmPassword } from "../forms/validators/ConfirmPassword";

const formConfig = {
    formGroup: {
        name: 'signup',
        elements: []
    } as TFormGroup,
    elements: {
        firstName: {
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
        lastName: {
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
        email: {
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
        password: {
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
        confirmedPassword: {
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
    },
    validations: [
        confirmPassword
    ]
} as TFormConfig;

export { formConfig };