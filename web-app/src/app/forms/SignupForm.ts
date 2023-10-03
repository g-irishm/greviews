import { BasicForm } from './BasicForm';
import { formConfig } from './config/signupForm';

export class SignupForm extends BasicForm {

    constructor(
        private firstName: string,
        private lastName: string,
        private email: string,
        private password: string,
        private confirmedPassword: string
    ) {
        super(formConfig, { firstName, lastName, email, password, confirmedPassword });
    }
}
