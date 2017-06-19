import { Injectable } from '@angular/core';
import { Crawl } from './crawl.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CrawlService {
  crawls: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.crawls = database.list('crawls');
 }

 getCrawls(){
   return this.crawls;
 }

 addCrawl(newCrawl: Crawl){
   this.crawls.push(newCrawl);
 }

 getCrawlById(crawlId: string){
   return this.database.object('crawls/' + crawlId)
 }

}
