import { TestBed, inject } from '@angular/core/testing';

import { TomServiceService } from './tom-service.service';

describe('TomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TomServiceService]
    });
  });

  it('should be created', inject([TomServiceService], (service: TomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
