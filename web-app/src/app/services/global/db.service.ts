import { Injectable } from '@angular/core';
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class DbService {

    constructor() { }

    writeData(path: string, data: any): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const db = getDatabase();
                set(ref(db, path), data)
                    .then(() => resolve())
                    .catch((error) => reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }

    getSkillPath(): string {
        const auth = getAuth();
        if (!auth.currentUser) {
            console.error("User is not logged in");
            return "";
        }
        
        const db = getDatabase();
        const uid = auth.currentUser.uid;

        // Reference to user's block: /users/{uid}/items
        const itemsRef = ref(db, `users/${uid}/items`);

        // Generate a unique reference with push()
        const newItemRef = push(itemsRef);

        // Get the generated ID
        const generatedId = newItemRef.key;

        return 'users/' + uid + '/skills/' + generatedId + '/';
    }
}
