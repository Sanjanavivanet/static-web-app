import { TestBed } from '@angular/core/testing';

import { ResponseFormService } from './response-form.service';

describe('ResponseFormService', () => {
  let service: ResponseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
