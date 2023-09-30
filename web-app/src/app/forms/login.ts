import { TFormGroup } from 'types/forms/TFormGroup';
import { ILoginForm } from 'interfaces/forms/login';

export class LoginForm implements ILoginForm {
    group: TFormGroup = {
        name: 'Login',
        title: 'Login',
        elements: [
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeholder: 'Email',
                mandatory: true
            },
            {
                type: 'password',
                name: 'password',
                label: 'Password',
                placeholder: 'Password',
                mandatory: true
            }
        ]
    };

}
