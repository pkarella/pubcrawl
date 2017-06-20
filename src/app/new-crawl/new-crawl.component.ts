import { Component, OnInit } from '@angular/core';
import { Crawl } from '../crawl.model';
import { CrawlService} from '../crawl.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-new-crawl',
  templateUrl: './new-crawl.component.html',
  styleUrls: ['./new-crawl.component.css'],
  providers: [CrawlService, AuthService]
})
export class NewCrawlComponent implements OnInit {

  profile: any;

  constructor(private crawlService: CrawlService, private auth: AuthService) { }

    ngOnInit() {
      if (this.auth.userProfile) {
     this.profile = this.auth.userProfile;

   } else {
     this.auth.getProfile((err, profile) => {
       this.profile = profile;

     });
   }

  }

  submitForm(title: string, startingLocation: string, endingLocation: string, startingTime: string){
    var newCrawl: Crawl = new Crawl(this.profile.name, this.profile.sub, title, startingLocation, endingLocation, startingTime);
    this.crawlService.addCrawl(newCrawl);
    console.log(newCrawl)
  }

}
