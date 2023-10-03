import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
                    const user = userCredential.user;
                    resolve('success');
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    reject('fail');
                });
        })
    }
}
