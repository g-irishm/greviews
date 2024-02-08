import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsPage } from './addSkills.page';

describe('AddSkillsPage', () => {
  let component: AddSkillsPage;
  let fixture: ComponentFixture<AddSkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkillsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
