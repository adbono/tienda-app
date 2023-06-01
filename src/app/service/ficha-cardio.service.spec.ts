import { TestBed } from '@angular/core/testing';

import { FichaCardioService } from './ficha-cardio.service';

describe('FichaCardioService', () => {
  let service: FichaCardioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaCardioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
