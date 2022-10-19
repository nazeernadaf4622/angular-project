import { TestBed } from '@angular/core/testing';

import { UploadApiServicesService } from './upload-api-services.service';

describe('UploadApiServicesService', () => {
  let service: UploadApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
