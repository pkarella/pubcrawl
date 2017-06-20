import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { FoursquareService } from '../foursquare.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  providers: [FoursquareService]
})
export class LocationListComponent implements OnInit {
  results;
  locationList: Location []= [];

  onClick() {
    var test = this.callApi();
  }

  callApi() {
    this.foursquareService.getVenue().subscribe(data => {this.results = data.response.groups[0].items;
    console.log(this.results.length);

    })
  }

  constructor(private router: Router, private foursquareService: FoursquareService) { }

  ngOnInit() {
  }

}
