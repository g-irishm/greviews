import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillForm } from 'src/app/forms/skill.form';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { TSkill } from 'types/skill/TSkill';

@Component({
    selector: 'app-new-skill',
    templateUrl: './new-skill.component.html',
    styleUrls: ['./new-skill.component.scss']
})
export class NewSkillComponent implements OnInit {

    @Output() success: EventEmitter<boolean> = new EventEmitter();
    skillForm: SkillForm;
    formError: string;

    constructor(
        private skillService: SkillsService
    ) {
        this.skillForm = new SkillForm();
        this.formError = '';
    }

    ngOnInit(): void {
    }

    addSkill(): void {
        if (this.skillForm.form.valid) {
            let formValues = this.skillForm.form.value;
            let skill: TSkill = this.parseSkill(formValues);

            this.formError = '';
            this.skillService.addSkill(skill)
            .then(resp => {
                this.success.emit(true);
            })
            .catch(error => {
                this.formError = error.errorMessage;
            });
        }
    }
    parseSkill(formValues: any): TSkill {
        return {
            title: formValues.basics.title,
            description: formValues.basics.description,
            price: Number(formValues.basics.price),
            id: '',
            createdAt: new Date().toISOString()
        } as TSkill;
    }
}
