import { TestBed, inject } from '@angular/core/testing';

import { ApiConfigurationService } from './api-configuration.service';

describe('ApiConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConfigurationService]
    });
  });

  it('should be created', inject([ApiConfigurationService], (service: ApiConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
