import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SkillsComponent } from 'src/app/components/skills/skills/skills.component';

@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SkillsComponent,
        CommonModule
    ]
})
export class ProfessionModule { }
