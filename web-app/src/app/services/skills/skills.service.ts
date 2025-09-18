import { Injectable } from '@angular/core';
import { TSkill } from 'types/skill/TSkill';
import { DbService } from '../global/db.service';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {

    constructor(
        private DbService: DbService
    ) { }

    // get all existing listings of user
    getAllListings() {
        return [];
    }

    // add new skill
    addSkill(skillData: TSkill): Promise<any> {
        return new Promise((resolve, reject) => {
            // Simulate API call or Firebase logic here
            if (skillData && skillData.title) {
                let path = this.DbService.getSkillPath();

                this.DbService.writeData(path, skillData)
                    .then(() => resolve({ message: 'Skill added successfully' }))
                    .catch((error) => reject({ errorMessage: 'Error adding skill'}));
            } else {
                // Simulate error
                reject({ errorMessage: 'Skill data is invalid or missing title.' });
            }
        });
    }
}
