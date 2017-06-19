import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrawlComponent } from './new-crawl.component';

describe('NewCrawlComponent', () => {
  let component: NewCrawlComponent;
  let fixture: ComponentFixture<NewCrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCrawlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
