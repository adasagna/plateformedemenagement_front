import { TestBed } from '@angular/core/testing';

import { DemenageurService } from './demenageur.service';

describe('DemenageurService', () => {
  let service: DemenageurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemenageurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
