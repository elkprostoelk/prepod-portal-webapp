import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileScienceWorkComponent } from './user-profile-science-work.component';

describe('UserProfileScienceWorkComponent', () => {
  let component: UserProfileScienceWorkComponent;
  let fixture: ComponentFixture<UserProfileScienceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileScienceWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileScienceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
