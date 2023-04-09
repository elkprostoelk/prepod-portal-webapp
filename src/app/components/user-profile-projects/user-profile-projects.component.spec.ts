import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileProjectsComponent } from './user-profile-projects.component';

describe('UserProfileProjectsComponent', () => {
  let component: UserProfileProjectsComponent;
  let fixture: ComponentFixture<UserProfileProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
