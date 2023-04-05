import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileMainInfoComponent } from './user-profile-main-info.component';

describe('UserProfileMainInfoComponent', () => {
  let component: UserProfileMainInfoComponent;
  let fixture: ComponentFixture<UserProfileMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileMainInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
