import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  profile:any;

  constructor(private auth: AuthService){

  }

  ngOnInit() {
    if (this.auth.userProfile) {
   this.profile = null;

 } else {
   this.auth.getProfile((err, profile) => {
     this.profile = profile;

   });
 }

  }

}
