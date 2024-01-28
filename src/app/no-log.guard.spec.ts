import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noLogGuard } from './no-log.guard';

describe('noLogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noLogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
