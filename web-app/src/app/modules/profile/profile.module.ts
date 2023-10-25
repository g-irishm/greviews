import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProfilePage
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
