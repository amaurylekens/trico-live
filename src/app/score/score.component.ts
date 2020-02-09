import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score_home: string = "1";
  score_away: string = "0";

  name_home: string = "AC AZU.";
  name_away: string = "FC TRI."

  logo_home: string = "assets/images/azur.png";
  logo_away: string = "assets/images/tricoteuses.png";

  dataRefresher: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getData();
    this.refreshData();
  }

  getData(){
    this.httpClient
      .get<any[]>('https://trico-live-server.herokuapp.com/api/v1.0/score')
      .subscribe(
        (response) => {
          this.score_home = response['score_home'];
          this.score_away = response['score_away'];
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
      }, 5000);  
  }

}
