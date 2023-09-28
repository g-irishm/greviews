import { Component } from '@angular/core';
import { GlobalService } from './services/global/global.service';
import { AuthService } from './services/authentication/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'web-app';

    constructor(
        private globalService: GlobalService,
        private authServices: AuthService
    ) {
        globalService.initFirebase();

        if (!authServices.isUserLoggedIn()) {
            // TODO: redirect user to login page
            console.log("User not logged in, redirecting to loging page")
        }
    }
}
