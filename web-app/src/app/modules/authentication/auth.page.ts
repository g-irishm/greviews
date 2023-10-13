import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
        private router: Router,
        private meta: Meta,
        private title: Title
    ) {
        this.returnUrl = this.router.routerState.snapshot.root.queryParamMap.get('returnUrl') || '';
        this.meta.updateTag({
            name: 'title',
            content: 'Greviews | Login',
        }, 'name="title"');
        this.title.setTitle('Greviews | Login');
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
