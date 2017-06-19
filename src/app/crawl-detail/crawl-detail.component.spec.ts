import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlDetailComponent } from './crawl-detail.component';

describe('CrawlDetailComponent', () => {
  let component: CrawlDetailComponent;
  let fixture: ComponentFixture<CrawlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
