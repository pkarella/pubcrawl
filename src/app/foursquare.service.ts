import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FoursquareService {

  constructor(private http: Http) { }
  getVenue(){
     var test= this.http.get('https://api.foursquare.com/v2/venues/explore?client_id=3CV2D24YSOPSEND5MYPPVQYZD2GU42JA41TZ5RQXIBDGTGZ3&client_secret=GEJBW1ZZUIYJNA2SZKAFX45DDXCWIUUY4UQB1T3WEUO5J2XD&v=20150815&near=Chicago&query=pizza').map(res => res.json());
     return test;

  }

}
