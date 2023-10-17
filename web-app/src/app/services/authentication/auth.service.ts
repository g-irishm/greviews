import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { TUserProfile } from 'types/user/TUserProfile';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private router: Router
    ) { }

    /* Checks if user is authenticated currently in the firebase session
     * returns boolean
    */
    isUserLoggedIn() {
        const auth = getAuth();

        return auth.currentUser ? true : false;;
    }

    getLoggedInUserData(): TUserProfile {
        return JSON.parse(localStorage.getItem('user') || '{ displayName: "" }');
    }

    signOut() {
        const auth = getAuth();

        auth.signOut();
        localStorage.setItem('user', JSON.stringify({ displayName: ''}));
        this.router.navigate(['/login']);
    }
}
