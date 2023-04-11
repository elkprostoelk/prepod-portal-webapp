import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceWorkConferencesComponent } from './science-work-conferences.component';

describe('ScienceWorkConferencesComponent', () => {
  let component: ScienceWorkConferencesComponent;
  let fixture: ComponentFixture<ScienceWorkConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceWorkConferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceWorkConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
