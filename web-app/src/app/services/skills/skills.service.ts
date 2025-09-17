import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {

    constructor() { }

    // get all existing listings of user
    getAllListings() {
        return [];
    }

    // add new skill
    addSkill(skillData: any): Promise<any> {
        return new Promise((resolve, reject) => {
            // Simulate API call or Firebase logic here
            // Replace with actual implementation as needed
            if (skillData && skillData.name) {
                // Simulate success
                resolve({ message: 'Skill added successfully' });
            } else {
                // Simulate error
                reject({ errorMessage: 'Skill data is invalid or missing name.' });
            }
        });
    }
}
