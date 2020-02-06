import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  times: number;
  minutes: number;
  seconds: number;
 
  constructor() { }
 
  ngOnInit() {
    const counter = Observable.interval(1000);
      counter.subscribe(
      (value) => {
        this.times = value;
        this.minutes = Math.round(this.times/60);
        this.seconds = this.times%60;
      })
  }

}
