import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import {CrawlService} from '../crawl.service';
import { Router } from '@angular/router';
import {Crawl} from '../crawl.model';

@Component({
  selector: 'app-crawl-list',
  templateUrl: './crawl-list.component.html',
  styleUrls: ['./crawl-list.component.css'],
  providers: [CrawlService]
})
export class CrawlListComponent implements OnInit {
  crawls: FirebaseListObservable<any[]>;


  constructor(private router: Router, private crawlService: CrawlService) { }

  ngOnInit() {
    this.crawls = this.crawlService.getCrawls();
    
  }
  goToDetailPage(clickedCrawl){
   this.router.navigate(['crawl-detail', clickedCrawl.$key])
 }

}
