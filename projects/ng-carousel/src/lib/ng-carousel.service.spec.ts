import { TestBed } from '@angular/core/testing';

import { NgCarouselService } from './ng-carousel.service';

describe('NgCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCarouselService = TestBed.get(NgCarouselService);
    expect(service).toBeTruthy();
  });
});
