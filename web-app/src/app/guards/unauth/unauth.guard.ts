import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, UrlSegmentGroup, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Injectable({
    providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
    router: Router

    constructor(
        router: Router,
        private authService: AuthService,
        private globalService: GlobalService
    ) {
        this.router = router;
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            return new Promise((resolve, reject) => {
                this.globalService.resolve().then(() => {
                    if (this.authService.isUserLoggedIn()) {
                        this.router.navigateByUrl('home');
                        reject(false);
                    }
                    resolve(true);
                })
            })
    }

}

