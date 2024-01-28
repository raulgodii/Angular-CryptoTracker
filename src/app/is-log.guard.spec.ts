import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLogGuard } from './is-log.guard';

describe('isLogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
