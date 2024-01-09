import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIcon } from 'src/app/icons/profile/profile.svg';
import { LogoutIcon } from 'src/app/icons/logout/logout.svg';
import { NavigationComponent } from 'src/app/components/shared/navigation/navigation.component';
import { MenuIcon } from 'src/app/icons/menu/menu.svg';
import { HomeIcon } from 'src/app/icons/home/home.svg';
import { CalendarIcon } from 'src/app/icons/calendar/calendar.svg';

@NgModule({
    declarations: [
        NavigationComponent,
        ProfileIcon,
        LogoutIcon,
        MenuIcon,
        HomeIcon,
        CalendarIcon
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavigationComponent,
        ProfileIcon,
        LogoutIcon,
        MenuIcon,
        CommonModule
    ]
})
export class SharedModule { }
