import { BasicForm } from './BasicForm';
import { formConfig } from './config/loginForm';

export class LoginForm extends BasicForm {

    constructor(
        private email: string,
        private password: string
    ) {
        super(formConfig, { email, password});
    }
}
