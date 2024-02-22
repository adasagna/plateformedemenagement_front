import { TestBed } from '@angular/core/testing';

import { DetaildemandeService } from './detaildemande.service';

describe('DetaildemandeService', () => {
  let service: DetaildemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaildemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
