import { TestBed } from '@angular/core/testing';

import { RequestAJAXService } from './request-ajax.service';

describe('RequestAJAXService', () => {
  let service: RequestAJAXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestAJAXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
