import { TestBed } from '@angular/core/testing';

import { OpenaccService } from './openacc.service';

describe('OpenaccService', () => {
  let service: OpenaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
