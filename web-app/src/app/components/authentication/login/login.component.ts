import { Component, EventEmitter, Output } from '@angular/core';
import { LoginForm } from 'src/app/forms/login.form';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @Output() success: EventEmitter<boolean> = new EventEmitter();

    loginForm: LoginForm;
    formError: string;

    constructor(
        private loginService: LoginService
    ) {
        this.loginForm = new LoginForm();
        this.formError = '';
    }

    login() {
        if (this.loginForm.form.valid) {
            let formValues = this.loginForm.form.value;
            this.formError = '';
    
            this.loginService.login(formValues.email, formValues.password)
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
