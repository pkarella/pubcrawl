import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrawlService } from '../crawl.service';
import {AuthService} from '../auth.service';
import { Crawl} from '../crawl.model';
import { MyCrawl} from '../my-crawl.model';

@Component({
  selector: 'app-crawl-detail',
  templateUrl: './crawl-detail.component.html',
  styleUrls: ['./crawl-detail.component.css'],
  providers: [CrawlService, AuthService]
})
export class CrawlDetailComponent implements OnInit {
  crawlId: string;
  crawlToDisplay;
  profile:any;

  constructor(private route: ActivatedRoute, private location: Location, private crawlService: CrawlService, private auth: AuthService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.crawlId = urlParameters['id'];

    });
    this.crawlService.getCrawlById(this.crawlId).subscribe(dataLastEmittedFromObserver => {
      this.crawlToDisplay = dataLastEmittedFromObserver;


    });
    if (this.auth.userProfile) {
   this.profile = this.auth.userProfile;


 } else {
   this.auth.getProfile((err, profile) => {
     this.profile = profile;

   });
 }
  }

  joinCrawl(username: string, joinerId: string, crawlKey: string, title: string, creator: string) {
    var newMyCrawl: MyCrawl = new MyCrawl(this.profile.name, this.profile.sub, this.crawlId, this.crawlToDisplay.title, this.crawlToDisplay.creator);
    this.crawlService.addMyCrawl(newMyCrawl);
     console.log(newMyCrawl);
  }
}
