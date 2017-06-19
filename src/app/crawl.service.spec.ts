import { TestBed, inject } from '@angular/core/testing';

import { CrawlService } from './crawl.service';

describe('CrawlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawlService]
    });
  });

  it('should ...', inject([CrawlService], (service: CrawlService) => {
    expect(service).toBeTruthy();
  }));
});
