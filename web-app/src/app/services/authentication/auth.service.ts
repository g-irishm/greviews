import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    /* Checks if user is authenticated currently in the firebase session
     * returns boolean
    */
    isUserLoggedIn() {
        const auth = getAuth();

        return auth.currentUser ? true : false;
    }
}
