import { TestBed } from '@angular/core/testing';

import { AerolabService } from './aerolab.service';

describe('AerolabService', () => {
  let service: AerolabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AerolabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
