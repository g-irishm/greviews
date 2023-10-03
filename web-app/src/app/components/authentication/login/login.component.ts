import { Component, EventEmitter, Output } from '@angular/core';
import { LoginForm } from 'src/app/forms/LoginForm';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @Output() success: EventEmitter<boolean> = new EventEmitter();
    loginForm: LoginForm;

    constructor(
        private loginService: LoginService
    ) {
        this.loginForm = new LoginForm('', '');
    }

    login() {
        let formValues = this.loginForm.form.value;

        this.loginService.login(formValues.email, formValues.password)
        .then(resp => {
            this.success.emit(true);
        })
        .catch(error => {
            this.handleLoginApiError(error);
        });
    }

    handleLoginApiError(error: any) {

    }
}
