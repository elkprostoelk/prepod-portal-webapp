import { TestBed } from '@angular/core/testing';

import { QualificationIncreaseService } from './qualification-increase.service';

describe('QualificationIncreaseService', () => {
  let service: QualificationIncreaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationIncreaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
