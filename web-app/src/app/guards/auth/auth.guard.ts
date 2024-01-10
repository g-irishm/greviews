import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private globalService: GlobalService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            return new Promise((resolve, reject) => {
                this.globalService.resolve().then(() => {
                    if (!this.authService.isUserLoggedIn()) {
                        let currentUrl = state.url;
                        let urlTree = new UrlTree();
                        urlTree.root = new UrlSegmentGroup([new UrlSegment("login", {})], {});
                        urlTree.queryParams = {
                            returnUrl: currentUrl
                        }
                        reject(urlTree);
                        // return urlTree;
                    }
                    resolve(true);
                    // return true;
                })
            })
    }

}

