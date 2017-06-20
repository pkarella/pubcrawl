import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCrawlListComponent } from './my-crawl-list.component';

describe('MyCrawlListComponent', () => {
  let component: MyCrawlListComponent;
  let fixture: ComponentFixture<MyCrawlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCrawlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCrawlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
