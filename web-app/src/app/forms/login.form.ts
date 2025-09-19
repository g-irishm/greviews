import { BasicForm } from './basic.form';
import { FormBuilder } from '../config/loginForm';

export class LoginForm extends BasicForm {

    constructor(
        private email?: string | undefined,
        private password?: string | undefined
    ) {
        super(FormBuilder, { email, password});
    }
}
