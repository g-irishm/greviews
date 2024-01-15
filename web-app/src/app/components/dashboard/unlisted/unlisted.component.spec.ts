import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlistedComponent } from './unlisted.component';

describe('UnlistedComponent', () => {
  let component: UnlistedComponent;
  let fixture: ComponentFixture<UnlistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlistedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
