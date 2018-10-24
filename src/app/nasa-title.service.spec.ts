import { TestBed } from '@angular/core/testing';

import { NasaTitleService } from './nasa-title.service';

describe('NasaTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaTitleService = TestBed.get(NasaTitleService);
    expect(service).toBeTruthy();
  });
});
