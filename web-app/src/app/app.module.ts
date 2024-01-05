import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './services/global/global.service';
import { AuthService } from './services/authentication/auth.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        GlobalService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
