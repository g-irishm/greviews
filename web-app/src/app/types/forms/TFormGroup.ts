import { ValidatorFn } from '@angular/forms';
import { TElement } from './TElement';


export type TFormGroup = {
    name: string;
    title: string;
    id: string;
    elements: TElement
    validations: Array<ValidatorFn>;
}
