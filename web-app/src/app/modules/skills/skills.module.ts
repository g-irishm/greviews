import { NgModule } from '@angular/core';


// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsRoutingModule } from './skills-routing.module';
import { ProfessionModule } from '../shared/profession.module';
import { SharedModule } from '../shared/shared.module';

// Page
import { SkillsPage } from './skills.page';
import { AddSkillsPage } from './addSkill/addSkills.page';

// Components
import { NewSkillComponent } from 'src/app/components/skills/new-skill/new-skill.component';


@NgModule({
    declarations: [
        SkillsPage,
        AddSkillsPage,
        NewSkillComponent
    ],
    imports: [
        SkillsRoutingModule,
        SharedModule,
        ProfessionModule,
        ReactiveFormsModule
    ]
})
export class SkillsModule { }
