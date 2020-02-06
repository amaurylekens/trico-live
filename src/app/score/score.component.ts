import { Component, OnInit } from '@angular/core';

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
  logo_away: string = "assets/images/tricoteuses.png";;

  constructor() { }

  ngOnInit() {
  }

}
