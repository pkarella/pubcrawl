import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrawlService } from '../crawl.service';
import { Crawl} from '../crawl.model';

@Component({
  selector: 'app-crawl-detail',
  templateUrl: './crawl-detail.component.html',
  styleUrls: ['./crawl-detail.component.css'],
  providers: [CrawlService]
})
export class CrawlDetailComponent implements OnInit {
  crawlId: string;
  crawlToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private crawlService: CrawlService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.crawlId = urlParameters['id'];
    });
    this.crawlToDisplay = this.crawlService.getCrawlById(this.crawlId);
  }

}
