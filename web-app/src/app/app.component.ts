import { Component } from '@angular/core';
import { GlobalService } from './services/global/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Greviews';

    constructor(
        private globalService: GlobalService
    ) {
        globalService.initFirebase();
    }
}
