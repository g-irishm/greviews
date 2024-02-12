import { FormGroup } from '@angular/forms';
import { TFormBuilder } from "types/forms/TFormBuilder";

export interface IFormProperties {
    formBuilder: TFormBuilder;
    form: FormGroup
}