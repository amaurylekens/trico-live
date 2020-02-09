import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  time: number;
  minutes: number;
  seconds: number;

  dataRefresher: any;
 
  constructor(private httpClient: HttpClient) { }
 
  ngOnInit() {
    this.getData();
    this.refreshData()

  }

  getData(){
    this.httpClient
      .get<any[]>('https://trico-live-server.herokuapp.com/api/v1.0/chrono')
      .subscribe(
        (response) => {
          this.time = response['time'];
          this.minutes = Math.floor(this.time/60);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.getData();
        //Passing the false flag would prevent page reset to 1 and hinder user interaction
      }, 10000);  
  }

}
