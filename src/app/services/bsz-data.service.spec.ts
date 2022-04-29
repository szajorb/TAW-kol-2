import { TestBed } from '@angular/core/testing';

import { BszService } from './bsz-data.service';

describe('BszService', () => {
  let service: BszService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BszService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
