import { BasicForm } from './basic.form';
import { FormBuilder } from '../config/skillForm';

export class SkillForm extends BasicForm {

    constructor(
        private title?: string | undefined,
        private description?: string | undefined,
        private price?: number | undefined
    ) {
        super(FormBuilder, { title, description, price });
    }
}
