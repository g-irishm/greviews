import { Component, Input, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    @Input() quickView: boolean;

    listings: Array<any>

    constructor(
        private skillsService: SkillsService
    ) {
        this.quickView = false;
        this.listings = this.skillsService.getAllListings()
    }

    ngOnInit(): void {
    }

}
