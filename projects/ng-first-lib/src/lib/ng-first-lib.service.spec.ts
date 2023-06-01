import { TestBed } from '@angular/core/testing';

import { NgFirstLibService } from './ng-first-lib.service';

describe('NgFirstLibService', () => {
  let service: NgFirstLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFirstLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
