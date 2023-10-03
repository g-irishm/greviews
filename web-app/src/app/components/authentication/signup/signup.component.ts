import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignupForm } from 'src/app/forms/SignupForm';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    @Output() success: EventEmitter<boolean> = new EventEmitter();
    signupForm: SignupForm;

    constructor() {
        this.signupForm = new SignupForm('', '', '', '', '');
    }

    ngOnInit(): void {
    }

}
