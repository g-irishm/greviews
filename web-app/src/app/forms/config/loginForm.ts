import { TFormConfig } from "types/forms/TFormConfig";
import { TFormGroup } from "types/forms/TFormGroup";
import { TEmail, TPassword } from "types/forms/elements";

const formConfig = {
    formGroup: {
        name: 'login',
        elements: []
    } as TFormGroup,
    elements: {
        email: {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'Email',
            placeholder: '',
            mandatory: true
        } as TEmail,
        password: {
            type: 'password',
            id: 'password',
            name: 'password',
            label: 'Password',
            placeholder: '',
            mandatory: true
        } as TPassword
    }
} as TFormConfig;

export { formConfig };