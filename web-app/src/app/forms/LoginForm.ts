import { BasicForm } from './BasicForm';
import { formConfig } from './config/loginForm';

export class LoginForm extends BasicForm {

    constructor(
        private email?: string | null,
        private password?: string | null
    ) {
        super(formConfig, { email, password});
    }
}
