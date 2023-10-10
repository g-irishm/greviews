import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
        const firebaseConfig = {
            apiKey: "AIzaSyCePs4wTttw05CrzUjq5MVVK0Ae4UvIyuA",
            authDomain: "greviews-dev.firebaseapp.com",
            databaseURL: "https://greviews-dev-default-rtdb.firebaseio.com",
            projectId: "greviews-dev",
            storageBucket: "greviews-dev.appspot.com",
            messagingSenderId: "714990806231",
            appId: "1:714990806231:web:f32d36114072d5fa8ebc92",
            measurementId: "G-4Y7THK0WS5"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        this.app = app;
    }

    /* Returns the firebase app object for global use
     * returns app { FirebaseApp }
    */
    getFirebaseApp() {
        return this.app;
    }
}
