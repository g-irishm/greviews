import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/forms/LoginForm';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: LoginForm;

    constructor() {
        this.loginForm = new LoginForm('', '');
    }

    ngOnInit(): void {
    }

}
