import { TestBed, inject } from '@angular/core/testing';

import { TomweerberichtenService } from './tomweerberichten.service';

describe('TomweerberichtenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TomweerberichtenService]
    });
  });

  it('should be created', inject([TomweerberichtenService], (service: TomweerberichtenService) => {
    expect(service).toBeTruthy();
  }));
});
