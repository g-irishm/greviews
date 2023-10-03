import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'page-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {

    showLogin = true;
    returnUrl: string;

    constructor(
        private router: Router
    ) {
        this.returnUrl = this.router.routerState.snapshot.root.queryParamMap.get('returnUrl') || '';
    }

    ngOnInit(): void { }

    onLogin(success: boolean) {
        if (success) {
            this.router.navigateByUrl(this.returnUrl);
        }
    }

    toggleLogin() {
        this.showLogin = !this.showLogin;
    }
}
