import { BasicForm } from './BasicForm';
import { formConfig } from './config/signupForm';

export class SignupForm extends BasicForm {

    constructor(
        private firstName?: string | null,
        private lastName?: string | null,
        private email?: string | null,
        private password?: string | null,
        private confirmedPassword?: string | null
    ) {
        super(formConfig, { firstName, lastName, email, password, confirmedPassword });
    }
}
