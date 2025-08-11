import { TestBed } from '@angular/core/testing';

import { HousingService } from '../services/housing.service';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
