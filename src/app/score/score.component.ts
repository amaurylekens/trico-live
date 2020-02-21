import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Match } from '../../classes/match';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() match: Match = new Match('', {'home': 0, 'away':0}, {'home': "", 'away': ""},
                                   {'home': "", 'away': ""}, '', '', false);


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

}
