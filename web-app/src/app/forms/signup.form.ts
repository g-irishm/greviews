import { BasicForm } from './basic.form';
import { FormBuilder } from '../config/signupForm';

export class SignupForm extends BasicForm {

    constructor(
        private firstName?: string | undefined,
        private lastName?: string | undefined,
        private email?: string | undefined,
        private password?: string | undefined,
        private confirmedPassword?: string | undefined
    ) {
        super(FormBuilder, { firstName, lastName, email, password, confirmedPassword });
    }
}
