import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { LocationObj } from '../location.model';
import { FoursquareService } from '../foursquare.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  providers: [FoursquareService]
})
export class LocationDetailComponent implements OnInit {
  locationId: string;
  locationToDisplay;
  outputs;

  detailInfo(id){
    console.log(id);
    this.foursquareService.getDetailOfBar(id).subscribe(data => {this.outputs = data.response;
    })
  }

  constructor(private route: ActivatedRoute, private location: Location, private foursquareService: FoursquareService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.locationId = urlParameters['id'];
    });
    this.locationToDisplay = this.foursquareService.getLocationById(this.locationId);
  }

}
