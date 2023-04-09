import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileScientificReportsComponent } from './user-profile-scientific-reports.component';

describe('UserProfileScientificReportsComponent', () => {
  let component: UserProfileScientificReportsComponent;
  let fixture: ComponentFixture<UserProfileScientificReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileScientificReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileScientificReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
