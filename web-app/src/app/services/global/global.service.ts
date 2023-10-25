import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    app: FirebaseApp | undefined;

    constructor() { }

    /* Initialize firebase app with project configuration.
     * Save the app object for global use.
    */
    initFirebase() {
        // Initialize Firebase
        const app = initializeApp(environment.firebaseConfig);
        const analytics = getAnalytics(app);

        const auth = getAuth(app);
        (async () => {
            await setPersistence(auth, browserLocalPersistence);
        })();

        this.app = app;
    }

    /* Returns the firebase app object for global use
     * returns app { FirebaseApp }
    */
    getFirebaseApp() {
        return this.app;
    }
}
