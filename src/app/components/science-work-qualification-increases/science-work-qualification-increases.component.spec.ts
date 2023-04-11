import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceWorkQualificationIncreasesComponent } from './science-work-qualification-increases.component';

describe('ScienceWorkQualificationIncreasesComponent', () => {
  let component: ScienceWorkQualificationIncreasesComponent;
  let fixture: ComponentFixture<ScienceWorkQualificationIncreasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceWorkQualificationIncreasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceWorkQualificationIncreasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
