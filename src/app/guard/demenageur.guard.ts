import { CanActivateFn } from '@angular/router';

export const demenageurGuard: CanActivateFn = (route, state) => {
  return true;
};
