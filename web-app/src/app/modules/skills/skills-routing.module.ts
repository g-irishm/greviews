import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPage } from './skills.page';
import { AddSkillsPage } from './addSkill/addSkills.page';

const routes: Routes = [
    {
        path: '',
        component: SkillsPage
    },
    {
        path: 'add',
        component: AddSkillsPage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
