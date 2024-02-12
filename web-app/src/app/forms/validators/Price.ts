import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const price: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return control.value?.indexOf('.') >=0 || control.value < 0 ? {
        InvalidPriceFormat: true
    } : null
}