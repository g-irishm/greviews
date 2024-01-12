import { BasicForm } from './basic.form';
import { formConfig } from '../config/profileForm';

export class ProfileForm extends BasicForm {

    constructor(
        private firstName: string,
        private lastName: string,
        private email: string
    ) {
        super(formConfig, { firstName, lastName, email});
    }
}
