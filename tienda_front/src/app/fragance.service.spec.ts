import { TestBed } from '@angular/core/testing';

import { FraganceService } from './fragance.service';

describe('FraganceService', () => {
  let service: FraganceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraganceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
