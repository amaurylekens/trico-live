import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/interval';

import { HttpClient } from '@angular/common/http';

import { Match } from '../classes/match';
import { ApiAccess } from '../services/api-access';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  match: Match = new Match('', {'home': 0, 'away':0}, {'home': "", 'away': ""},
                          {'home': "", 'away': ""}, '', '', false);
  apiAccess: ApiAccess;

  dataRefresher: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.apiAccess = new ApiAccess(this.httpClient);
    this.getData();
    this.refreshData();
  }

  getData(){
    this.apiAccess.getMatch('96f9eb34-5563-11ea-b53f-2cf0ee2d2352').subscribe((match) => {
      this.match = match;
      console.log(match)
    });
  }

  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.getData();
        //Passing the false flag would prevent page reset to 1 and hinder user interaction
      }, 5000);  
  }
}
