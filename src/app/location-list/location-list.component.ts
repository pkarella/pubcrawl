import { Component, OnInit } from '@angular/core';
import { LocationObj } from '../location.model';
import { FoursquareService } from '../foursquare.service'
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  providers: [FoursquareService]
})
export class LocationListComponent implements OnInit {
  results;
  locations: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  onClick(city: string, query: string) {
    var test = this.callApi(city, query);
  }

  callApi(city, query) {
    this.foursquareService.getVenue(city, query).subscribe(data => {this.results = data.response.groups[0].items;
    console.log(this.results.length);

    })
  }

  goToDetailPage(clickedLocation) {
    this.router.navigate(['locations', clickedLocation.$key]);
  }

  saveLocation(name: string, AddressOne: string, AddressTwo: string, url: string, id: string) {
    var newLocation: LocationObj = new LocationObj (name, AddressOne, AddressTwo, url, id);
    this.foursquareService.addLocation(newLocation);
  }

  viewLocations() {
    this.locations = this.foursquareService.getLocations();
  }

  constructor(private router: Router, private foursquareService: FoursquareService) {
  }

  ngOnInit() {
    this.locations = this.foursquareService.getLocations();
  }


}
