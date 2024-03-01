import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { demenageurGuard } from './demenageur.guard';

describe('demenageurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demenageurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
