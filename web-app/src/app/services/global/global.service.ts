import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Resolve } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GlobalService implements Resolve<any> {
    app: FirebaseApp | undefined;

    constructor() { }

    /* Initialize firebase app with project configuration.
     * Save the app object for global use.
    */
    initFirebase() {
        const app = initializeApp(environment.firebaseConfig);
        const analytics = getAnalytics(app);

        this.app = app;
    }

    resolve(): Promise<any>|any {
        return new Promise<void>((resolve, reject) => {
            // Initialize Firebase
            this.initFirebase();

            const auth = getAuth(this.app);
            onAuthStateChanged(auth, () => {
                resolve();
            });
        });
    }

    /* Returns the firebase app object for global use
     * returns app { FirebaseApp }
    */
    getFirebaseApp() {
        return this.app;
    }
}
