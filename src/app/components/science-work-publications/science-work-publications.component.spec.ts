import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceWorkPublicationsComponent } from './science-work-publications.component';

describe('ScienceWorkPublicationsComponent', () => {
  let component: ScienceWorkPublicationsComponent;
  let fixture: ComponentFixture<ScienceWorkPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceWorkPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceWorkPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
