import { BasicForm } from './basic.form';
import { FormBuilder } from '../config/profileForm';

export class ProfileForm extends BasicForm {

    constructor(
        private firstName: string,
        private lastName: string,
        private email: string
    ) {
        super(FormBuilder, { firstName, lastName, email});
    }
}
