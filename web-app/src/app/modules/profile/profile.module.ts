import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { SharedModule } from '../shared/shared.module';
import { BasicsComponent } from 'src/app/components/profile/basics/basics.component';

@NgModule({
    declarations: [
        ProfilePage,
        BasicsComponent
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
