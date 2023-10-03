import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.authService.isUserLoggedIn()) {
            let currentUrl = state.url;
            let urlTree = new UrlTree();
            urlTree.root = new UrlSegmentGroup([new UrlSegment("login", {})], {});
            urlTree.queryParams = {
                returnUrl: currentUrl
            }
            return urlTree;
        }

        return true;
    }

}

