import { TestBed } from '@angular/core/testing';

import { CustomSearchBoxComponentService } from './custom-search-box-component.service';

describe('CustomSearchBoxComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomSearchBoxComponentService = TestBed.get(CustomSearchBoxComponentService);
    expect(service).toBeTruthy();
  });
});
