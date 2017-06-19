import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlListComponent } from './crawl-list.component';

describe('CrawlListComponent', () => {
  let component: CrawlListComponent;
  let fixture: ComponentFixture<CrawlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
