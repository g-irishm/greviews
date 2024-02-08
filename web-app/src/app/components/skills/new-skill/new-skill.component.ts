import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillForm } from 'src/app/forms/skill.form';

@Component({
    selector: 'app-new-skill',
    templateUrl: './new-skill.component.html',
    styleUrls: ['./new-skill.component.scss']
})
export class NewSkillComponent implements OnInit {

    @Output() success: EventEmitter<boolean> = new EventEmitter();
    skillForm: SkillForm;
    formError: string;

    constructor( ) {
        this.skillForm = new SkillForm();
        this.formError = '';
    }

    ngOnInit(): void {
    }

    addSkill(): void {
        
    }
}
