import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/authentication/login/login.component';


@NgModule({
  declarations: [
    AuthPage,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
