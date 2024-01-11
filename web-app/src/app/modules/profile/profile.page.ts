import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { TUserProfile } from 'types/user/TUserProfile';

@Component({
    selector: 'page-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

    user: TUserProfile;
    editMode: boolean;

    constructor(
        private authService: AuthService
    ) {
        this.editMode = false;
        this.user = this.authService.getLoggedInUserData();
    }

    ngOnInit(): void { }
}
