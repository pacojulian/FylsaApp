import { TestBed, inject } from '@angular/core/testing';

import { StadisticsService } from './stadistics.service';

describe('StadisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StadisticsService]
    });
  });

  it('should be created', inject([StadisticsService], (service: StadisticsService) => {
    expect(service).toBeTruthy();
  }));
});
