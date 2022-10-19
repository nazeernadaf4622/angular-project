import { TestBed } from '@angular/core/testing';

import { DimensionApiService } from './dimension-api.service';

describe('DimensionApiService', () => {
  let service: DimensionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
