import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

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
                .then(async (userCredential) => {
                    // Signed in
                    if (auth.currentUser) {
                        await updateProfile(auth.currentUser, {
                            displayName: firstName + ' ' + lastName
                        });
                    }
                    resolve('');
                }).catch((error) => {
                    reject(this.getErrorObject(error));
                });
        });
    }

    getErrorObject(error: any): any {
        let errorCode = error.code;
        let errorMessage = 'Technical error, please try again.';

        switch(errorCode) {
            case 'auth/missing-email': errorMessage = 'Missing email address'; break;
            case 'auth/invalid-email': errorMessage = 'Invalid email address'; break;
            case 'auth/missing-password': errorMessage = 'Please enter your password'; break;
            case 'auth/invalid-login-credentials': errorMessage = 'The username or password don\'t match our database record'; break;
            case 'auth/weak-password': errorMessage = 'Weak password. Please enter a strong password'; break;
        }

        return {
            errorCode,
            errorMessage
        };
    }
}
