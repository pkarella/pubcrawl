import { Injectable } from '@angular/core';
import { Crawl } from './crawl.model';
import { MyCrawl } from './my-crawl.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CrawlService {
  crawls: FirebaseListObservable<any[]>;
  myCrawls: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.crawls = database.list('crawls');
  this.myCrawls = database.list('myCrawls');
 }

 getCrawls(){
   return this.crawls;
 }
 getMyCrawls(){
   return this.myCrawls
 }

 addCrawl(newCrawl: Crawl){
   this.crawls.push(newCrawl);
 }

 getCrawlById(crawlId: string){
   return this.database.object('crawls/' + crawlId)
 }

 addMyCrawl(newMyCrawl: MyCrawl){
   this.myCrawls.push(newMyCrawl);
 }

}
