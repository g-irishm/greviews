import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIcon } from 'src/app/icons/profile/profile.svg';
import { LogoutIcon } from 'src/app/icons/logout/logout.svg';
import { NavigationComponent } from 'src/app/components/shared/navigation/navigation.component';
import { MenuIcon } from 'src/app/icons/menu/menu.svg';


@NgModule({
    declarations: [
        NavigationComponent,
        ProfileIcon,
        LogoutIcon,
        MenuIcon
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
