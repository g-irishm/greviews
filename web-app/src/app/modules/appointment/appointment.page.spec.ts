import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPage } from './appointment.page';

describe('AppointmentPage', () => {
  let component: AppointmentPage;
  let fixture: ComponentFixture<AppointmentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
