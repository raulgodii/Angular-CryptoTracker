import { TestBed } from '@angular/core/testing';

import { FirestoreControlService } from './firestore-control.service';

describe('FirestoreControlService', () => {
  let service: FirestoreControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
