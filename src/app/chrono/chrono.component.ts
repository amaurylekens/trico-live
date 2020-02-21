import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/observable/interval';

import { Match } from '../../classes/match';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  @Input() match: Match = new Match('', {'home': 0, 'away':0}, {'home': "", 'away': ""},
                                   {'home': "", 'away': ""}, '', '', false);
 
  constructor(private httpClient: HttpClient) { }
 
  ngOnInit() {

  }

}
