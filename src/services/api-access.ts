import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Goal } from '../classes/goal';
import { Match } from '../classes/match';
import { Team } from '../classes/team';
import { Player } from '../classes/player';


export class ApiAccess {

  url: string;


  constructor(private httpClient: HttpClient) {

    this.url = "https://trico-live-server.herokuapp.com/api/v1.0/";
  }

  public getMatch(match_id): Observable<Match>{
    return this.httpClient.get(this.url + 'match/' + match_id).pipe(
      map(
        (data: any[]) => {
          console.log(data);
          data = data['match']
          let match: Match = Match.fromJson(data)
          
          if (match.running){
            match.start()
          }
          match.score = {'home': 0, 'away':0};
          let goals: Goal[] = []; 
          for (let goal_item of data['goals']){
            let goal = Goal.fromJson(goal_item);
            match.addGoal(goal.team, goal);
          }
          return match;
        }
      )
    );
  }
}