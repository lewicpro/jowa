import { TestBed, inject } from '@angular/core/testing';

import { RestframeworkService } from './restframework.service';

describe('RestframeworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestframeworkService]
    });
  });

  it('should be created', inject([RestframeworkService], (service: RestframeworkService) => {
    expect(service).toBeTruthy();
  }));
});
