import { TestBed } from '@angular/core/testing';

import { LoginiService } from './logini.service';

describe('LoginiService', () => {
  let service: LoginiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
