import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { GlobalService } from './services/global/global.service';
import { UnauthGuard } from './guards/unauth/unauth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        resolve: {
            data: GlobalService
        }
    },
    {
        path: 'login',
        canActivate: [UnauthGuard],
        loadChildren: () => import('./modules/authentication/auth.module').then(m => m.AuthModule),
        resolve: {
            data: GlobalService
        }
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'skills',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule)
    },
    {
        path: 'appointment',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
