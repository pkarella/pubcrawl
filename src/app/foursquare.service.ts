import { Injectable } from '@angular/core';
import { LocationObj } from './location.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FoursquareService {

  locations: FirebaseListObservable<any[]>;

  constructor(private http: Http, private database: AngularFireDatabase) { this.locations = database.list('locations')}


  getVenue(city, query){
    var test = this.http.get('https://api.foursquare.com/v2/venues/explore?client_id=3CV2D24YSOPSEND5MYPPVQYZD2GU42JA41TZ5RQXIBDGTGZ3&client_secret=GEJBW1ZZUIYJNA2SZKAFX45DDXCWIUUY4UQB1T3WEUO5J2XD&v=20150815&near=' + city + '&query=' + query).map(res => res.json());
     return test;
  }

  getDetailOfBar(id){
    var test = this.http.get('https://api.foursquare.com/v2/venues/'+ id + 'client_id=3CV2D24YSOPSEND5MYPPVQYZD2GU42JA41TZ5RQXIBDGTGZ3&client_secret=GEJBW1ZZUIYJNA2SZKAFX45DDXCWIUUY4UQB1T3WEUO5J2XD&v=20150815').map(res => res.json());
     return test;
  }

  getLocations() {
    return this.locations;
  }

  getLocationById(locationId: string){
    return this.database.object('locations/' + locationId);
  }

  addLocation(newLocation: LocationObj) {
    this.locations.push(newLocation);
  }

}
