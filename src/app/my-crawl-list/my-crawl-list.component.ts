import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import {CrawlService} from '../crawl.service';
import { Router } from '@angular/router';
import {MyCrawl} from '../my-crawl.model';
import {Crawl} from '../crawl.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-crawl-list',
  templateUrl: './my-crawl-list.component.html',
  styleUrls: ['./my-crawl-list.component.css'],
  providers: [CrawlService, AuthService]
})
export class MyCrawlListComponent implements OnInit {
    myCrawls: FirebaseListObservable<any[]>;
    crawls: FirebaseListObservable<any[]>;
    profile:any;

  constructor(private router: Router, private crawlService: CrawlService, private auth: AuthService) { }

  ngOnInit() {
    this.myCrawls = this.crawlService.getMyCrawls();
    this.crawls = this.crawlService.getCrawls();
    console.log(this.myCrawls)

    if (this.auth.userProfile) {
   this.profile = this.auth.userProfile;

   } else {
     this.auth.getProfile((err, profile) => {
       this.profile = profile;
     });
   }

  }

  goToDetailPage(clickedMyCrawl){
   this.router.navigate(['crawl-detail', clickedMyCrawl.crawlKey])
 }


}
