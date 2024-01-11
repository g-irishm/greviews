import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { ProfileIcon } from 'src/app/icons/profile/profile.svg';
import { LogoutIcon } from 'src/app/icons/logout/logout.svg';
import { MenuIcon } from 'src/app/icons/menu/menu.svg';
import { HomeIcon } from 'src/app/icons/home/home.svg';
import { CalendarIcon } from 'src/app/icons/calendar/calendar.svg';
import { DashboardIcon } from 'src/app/icons/dasboard/dashboard.svg';

// Components
import { NavigationComponent } from 'src/app/components/shared/navigation/navigation.component';
import { PortraitComponent } from 'src/app/components/shared/portrait/portrait.component';

@NgModule({
    declarations: [
        NavigationComponent,
        PortraitComponent,
        ProfileIcon,
        LogoutIcon,
        MenuIcon,
        HomeIcon,
        CalendarIcon,
        DashboardIcon
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavigationComponent,
        PortraitComponent,
        ProfileIcon,
        LogoutIcon,
        MenuIcon,
        DashboardIcon,
        CommonModule
    ]
})
export class SharedModule { }
