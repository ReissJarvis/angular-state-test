import { TestBed } from '@angular/core/testing';

import { StateV2Service } from './state-v2.service';

describe('StateServiceV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateV2Service = TestBed.get(StateV2Service);
    expect(service).toBeTruthy();
  });
});
