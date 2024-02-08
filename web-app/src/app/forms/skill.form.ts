import { BasicForm } from './basic.form';
import { formConfig } from '../config/skillForm';

export class SkillForm extends BasicForm {

    constructor(
        private title?: string | undefined,
        private description?: string | undefined,
        private price?: string | undefined
    ) {
        super(formConfig, { title, description, price });
    }
}
