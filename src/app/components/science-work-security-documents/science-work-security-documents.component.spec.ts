import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceWorkSecurityDocumentsComponent } from './science-work-security-documents.component';

describe('ScienceWorkSecurityDocumentsComponent', () => {
  let component: ScienceWorkSecurityDocumentsComponent;
  let fixture: ComponentFixture<ScienceWorkSecurityDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceWorkSecurityDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceWorkSecurityDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
