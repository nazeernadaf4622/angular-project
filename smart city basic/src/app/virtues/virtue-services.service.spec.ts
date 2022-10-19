import { TestBed } from '@angular/core/testing';

import { VirtueServicesService } from './virtue-services.service';

describe('VirtueServicesService', () => {
  let service: VirtueServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtueServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
