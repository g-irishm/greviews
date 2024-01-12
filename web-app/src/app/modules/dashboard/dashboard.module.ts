import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DashboardPage,
    ],
    imports: [
        DashboardRoutingModule,
        SharedModule
    ]
})
export class DashboardModule { }
