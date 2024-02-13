import { TestBed } from '@angular/core/testing';

import { DemanderecuService } from './demanderecu.service';

describe('DemanderecuService', () => {
  let service: DemanderecuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemanderecuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
