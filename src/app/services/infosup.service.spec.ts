import { TestBed } from '@angular/core/testing';

import { InfosupService } from './infosup.service';

describe('InfosupService', () => {
  let service: InfosupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
