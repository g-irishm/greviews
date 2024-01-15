import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { SharedModule } from '../shared/shared.module';
import { ProfessionModule } from '../shared/profession.module';
import { UnlistedComponent } from 'src/app/components/dashboard/unlisted/unlisted.component';

@NgModule({
    declarations: [
        DashboardPage,
        UnlistedComponent
    ],
    imports: [
        DashboardRoutingModule,
        SharedModule,
        ProfessionModule
    ]
})
export class DashboardModule { }
