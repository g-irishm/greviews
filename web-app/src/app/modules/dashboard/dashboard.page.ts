import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'page-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

    isProfessional: boolean;

    constructor(
        private AuthService: AuthService
    ) {
        this.isProfessional = AuthService.getLoggedInUserData().isProfessional;
    }

    ngOnInit(): void { }
}
