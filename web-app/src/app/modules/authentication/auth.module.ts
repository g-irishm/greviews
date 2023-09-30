import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { LoginComponent } from 'src/app/components/authentication/login/login.component';


@NgModule({
  declarations: [
    AuthPage,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
