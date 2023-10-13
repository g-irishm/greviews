import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return control.get('password')?.value === control.get('confirmedPassword')?.value ? null : {
        PasswordMismatch: true
    }
}