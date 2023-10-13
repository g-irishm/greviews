import { ValidatorFn } from '@angular/forms';
import { TFormGroup } from './TFormGroup';

export type TFormConfig = {
    elements: any,
    formGroup: TFormGroup,
    validations: Array<ValidatorFn>
}
