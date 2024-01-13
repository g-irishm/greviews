import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppointmentPage } from './appointment.page';
import { AppointmentRoutingModule } from './appointment-routing.module';



@NgModule({
  declarations: [
    AppointmentPage
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule
  ]
})
export class AppointmentModule { }
