import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon-profile',
    templateUrl: './profile.svg.html',
    styleUrls: ['./profile.svg.scss']
})
export class ProfileIcon {
    @Input() type: string;

    TYPE_SM = 'sm'; // small
    TYPE_MD = 'md'; // medium
    TYPE_LG = 'lg'; // large

    constructor() {
        this.type = this.TYPE_SM;
    }
}
