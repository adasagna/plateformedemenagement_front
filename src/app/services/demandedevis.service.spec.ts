import { TestBed } from '@angular/core/testing';

import { DemandedevisService } from './demandedevis.service';

describe('DemandedevisService', () => {
  let service: DemandedevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandedevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
