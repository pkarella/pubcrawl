import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {routing, appRoutingProviders} from './app.routing';
import {AuthService} from './auth.service';
import { CallbackComponent } from './callback/callback.component';
import {CrawlService} from './crawl.service';


import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CrawlListComponent } from './crawl-list/crawl-list.component';
import { NewCrawlComponent } from './new-crawl/new-crawl.component';
import { CrawlDetailComponent } from './crawl-detail/crawl-detail.component';
import { MyCrawlListComponent } from './my-crawl-list/my-crawl-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    CrawlListComponent,
    NewCrawlComponent,
    CrawlDetailComponent,
    MyCrawlListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule
  ],
  providers: [appRoutingProviders, AuthService, CrawlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
