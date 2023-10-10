import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignupForm } from 'src/app/forms/SignupForm';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    @Output() success: EventEmitter<boolean> = new EventEmitter();
    signupForm: SignupForm;
    formError: string;

    constructor(
        private loginService: LoginService
    ) {
        this.signupForm = new SignupForm();
        this.formError = '';
    }

    ngOnInit(): void { }

    signup(): void {
        if (this.signupForm.form.valid) {
            let formValues = this.signupForm.form.value;
            this.formError = '';
    
            this.loginService.signup(formValues.firstName, formValues.lastName, formValues.email, formValues.password)
            .then(resp => {
                this.success.emit(true);
            })
            .catch(error => {
                this.formError = error.errorMessage;
            });
        } else {
            this.formError = 'Please fill the correct details.'
        }
    }
}
