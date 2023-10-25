import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
