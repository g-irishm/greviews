import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/authentication/login/login.component';
import { SignupComponent } from 'src/app/components/authentication/signup/signup.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthPage,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
