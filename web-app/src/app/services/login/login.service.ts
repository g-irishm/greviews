import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { TUserProfile } from 'types/user/TUserProfile';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor() { }

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in

                    this.saveCurrentUserToSession({
                        displayName: auth.currentUser?.displayName || ''
                    });

                    resolve('');
                }).catch((error) => {
                    reject(this.getErrorObject(error));
                });
        });
    }

    signup(firstName: string, lastName: string, email: string, password: string) {
        return new Promise((resolve, reject) => {
            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    if (auth.currentUser) {
                        updateProfile(auth.currentUser, {
                            displayName: firstName + ' ' + lastName
                        });

                        this.saveCurrentUserToSession({
                            displayName: firstName + ' ' + lastName
                        });
                    }
                    resolve('');
                }).catch((error) => {
                    reject(this.getErrorObject(error));
                });
        });
    }

    saveCurrentUserToSession(user: TUserProfile): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getErrorObject(error: any): any {
        let errorCode = error.code;
        let errorMessage = 'Technical error, please try again.';

        switch(error.code) {
            case 'auth/missing-email': errorMessage = 'Missing email address'; break;
            case 'auth/invalid-email': errorMessage = 'Invalid email address'; break;
            case 'auth/missing-password': errorMessage = 'Please enter your password'; break;
            case 'auth/invalid-login-credentials': errorMessage = 'The username or password don\'t match our database record'; break;
        }

        return {
            errorCode,
            errorMessage
        };
    }
}
