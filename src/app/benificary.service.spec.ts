import { TestBed } from '@angular/core/testing';

import { BenificaryService } from './benificary.service';

describe('BenificaryService', () => {
  let service: BenificaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenificaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
