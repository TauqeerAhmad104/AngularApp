import { TestBed } from '@angular/core/testing';

import { DBconnectionService } from './dbconnection.service';

describe('DBconnectionService', () => {
  let service: DBconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
