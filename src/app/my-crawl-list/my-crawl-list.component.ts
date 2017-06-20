import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import {CrawlService} from '../crawl.service';
import { Router } from '@angular/router';
import {MyCrawl} from '../my-crawl.model';
import {Crawl} from '../crawl.model';

@Component({
  selector: 'app-my-crawl-list',
  templateUrl: './my-crawl-list.component.html',
  styleUrls: ['./my-crawl-list.component.css'],
  providers: [CrawlService]
})
export class MyCrawlListComponent implements OnInit {
    myCrawls: FirebaseListObservable<any[]>;
    crawls: FirebaseListObservable<any[]>;

  constructor(private router: Router, private crawlService: CrawlService) { }

  ngOnInit() {
    this.myCrawls = this.crawlService.getMyCrawls();
    this.crawls = this.crawlService.getCrawls();
    console.log(this.myCrawls)

  }

  goToDetailPage(clickedMyCrawl){
   this.router.navigate(['crawl-detail', clickedMyCrawl.crawlKey])
 }


}
