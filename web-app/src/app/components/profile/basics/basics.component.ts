import { Component, Input } from '@angular/core';
import { ProfileForm } from 'src/app/forms/profile.form';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {

    @Input() editMode: boolean;
    profileForm: ProfileForm;
    formError: string;

    constructor(
        private authService: AuthService
    ) {
        this.editMode = true;
        this.formError = '';
        const user = this.authService.getLoggedInUserData();
        this.profileForm = new ProfileForm(
            user.displayName.split(' ')[0],
            user.displayName.split(' ')[1],
            user.email
        );
    }
}
