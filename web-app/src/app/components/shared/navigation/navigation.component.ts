import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    userName: string;
    userLoggedIn: boolean;

    constructor(
        private authService: AuthService
    ) {
        this.userLoggedIn = this.authService.isUserLoggedIn();
        this.userName = this.authService.getLoggedInUserData().displayName.split(' ')[0];
    }

    ngOnInit(): void {
    }

    signOut() {
        this.authService.signOut();
    }

    showActions(event: any) {
        let classList = event.currentTarget.getElementsByClassName('actions')[0].classList;
        if (classList.contains('show')) {
            classList.replace('show', 'hide');
        } else {
            classList.replace('hide', 'show');
        }
    }

}
