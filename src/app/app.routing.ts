import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CallbackComponent} from './callback/callback.component';
import {ProfileComponent} from './profile/profile.component';
import {CrawlListComponent} from './crawl-list/crawl-list.component';
import {NewCrawlComponent} from './new-crawl/new-crawl.component';
import {CrawlDetailComponent} from './crawl-detail/crawl-detail.component';
import { LocationListComponent } from "./location-list/location-list.component";

const appRoutes: Routes=[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
  path: 'profile',
  component: ProfileComponent
  },
  {
    path: 'crawl-list',
    component: CrawlListComponent
  },
  {
    path: 'new-crawl',
    component: NewCrawlComponent
  },
  {
    path: 'crawl-detail/:id',
    component: CrawlDetailComponent
  },
  {
    path:'location-list',
    component: LocationListComponent
  }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
