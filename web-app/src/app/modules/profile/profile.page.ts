import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'page-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

    userName: string;

    constructor(
        private authService: AuthService
    ) {
        this.userName = this.authService.getLoggedInUserData().displayName;
    }

    ngOnInit(): void {
    }

    signOut() {
        this.authService.signOut();
    }
}
