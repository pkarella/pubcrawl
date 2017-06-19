import { Component, OnInit } from '@angular/core';
import { Crawl } from '../crawl.model';
import { CrawlService} from '../crawl.service';

@Component({
  selector: 'app-new-crawl',
  templateUrl: './new-crawl.component.html',
  styleUrls: ['./new-crawl.component.css'],
  providers: [CrawlService]
})
export class NewCrawlComponent implements OnInit {

  constructor(private crawlService: CrawlService) { }

  ngOnInit() {
  }

  submitForm(title: string, creator: string, startingLocation: string, endingLocation: string, startingTime: string){
    var newCrawl: Crawl = new Crawl(title, creator, startingLocation, endingLocation, startingTime);
    this.crawlService.addCrawl(newCrawl);
  }

}
