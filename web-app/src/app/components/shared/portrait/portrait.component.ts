import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
    selector: 'app-portrait',
    templateUrl: './portrait.component.html',
    styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

    @Input() type: string;
    picture: string;

    constructor(
        private authService: AuthService
    ) {
        this.picture = '';
        this.type = 'sm';
    }

    ngOnInit(): void {
        this.picture = this.authService.getLoggedInUserData().photoURL;
    }

}
