import { NgModule } from '@angular/core';

import { SkillsRoutingModule } from './skills-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ProfessionModule } from '../shared/profession.module';

// Page
import { SkillsPage } from './skills.page';

// Components
import { NewSkillComponent } from 'src/app/components/skills/new-skill/new-skill.component';


@NgModule({
    declarations: [
        SkillsPage,
        NewSkillComponent
    ],
    imports: [
        SkillsRoutingModule,
        SharedModule,
        ProfessionModule
    ]
})
export class SkillsModule { }
