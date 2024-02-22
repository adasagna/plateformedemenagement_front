import { TestBed } from '@angular/core/testing';

import { DetailsdemandeclientService } from './detailsdemandeclient.service';

describe('DetailsdemandeclientService', () => {
  let service: DetailsdemandeclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsdemandeclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
