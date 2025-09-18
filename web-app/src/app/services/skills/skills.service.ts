import { Injectable } from '@angular/core';
import { TSkill } from 'types/skill/TSkill';

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
    addSkill(skillData: TSkill): Promise<any> {
        return new Promise((resolve, reject) => {
            // Simulate API call or Firebase logic here
            if (skillData && skillData.title) {
                // Simulate success
                resolve({ message: 'Skill added successfully' });
            } else {
                // Simulate error
                reject({ errorMessage: 'Skill data is invalid or missing title.' });
            }
        });
    }
}
