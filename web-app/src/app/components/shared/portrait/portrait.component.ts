import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'app-portrait',
    templateUrl: './portrait.component.html',
    styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent {

    @Input() type: string;
    picture: string;

    constructor(
        private authService: AuthService
    ) {
        this.type = 'sm';
        this.picture = this.authService.getLoggedInUserData().photoURL;
    }
}
