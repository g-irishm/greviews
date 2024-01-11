import { Validators } from "@angular/forms";
import { TFormConfig } from "types/forms/TFormConfig";
import { TFormGroup } from "types/forms/TFormGroup";
import { TText, TEmail } from "types/forms/elements";

const formConfig = {
    formGroup: {
        name: 'profile',
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
    }
} as TFormConfig;

export { formConfig };