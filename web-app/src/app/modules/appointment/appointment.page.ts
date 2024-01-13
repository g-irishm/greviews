import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service'
import { TAllAppointments } from 'types/appointment/TAllAppointments';

@Component({
    selector: 'page-appointment',
    templateUrl: './appointment.page.html',
    styleUrls: ['./appointment.page.scss']
})
export class AppointmentPage implements OnInit {

    appointments: TAllAppointments;

    constructor(
        private AppointmentService: AppointmentService
    ) {
        this.appointments = AppointmentService.getAllAppointments();
    }

    ngOnInit(): void {
    }

}
