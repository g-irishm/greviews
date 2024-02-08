import { BasicForm } from './basic.form';
import { formConfig } from '../config/loginForm';

export class LoginForm extends BasicForm {

    constructor(
        private email?: string | undefined,
        private password?: string | undefined
    ) {
        super(formConfig, { email, password});
    }
}
