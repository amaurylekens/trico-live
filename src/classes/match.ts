import { Chrono } from './chrono';
import { Goal } from './goal';

export class Match {

    public static fromJson(json: Object): Match {
        
        let running: boolean;

        if (json['running'] == 'False'){
            running = false;
        }
        else{
            running = true;
        }

        return new Match(
            json['id'],
            json['score'],
            json['team_names'],
            json['team_logos'],
            json['date'],
            json['state'],
            running, 
            json['offset']
        );
    }

    id: string; 
    score: any;
    team_names: any ;
    team_logos: any ;
    date: string = '';
    goals: {'home': Goal[], 'away': Goal[]} = {'home':[], 'away':[]};
    state: string = '';
    running: boolean;

    chrono: Chrono = new Chrono(0);

    constructor(id: string, score: any, team_names: any, 
    	        team_logos: any, date: string, state: string,
                running: boolean, offset: number = 0) {
    	this.id = id;
        this.score = score;
        // to be sure the score is a number
        this.score['home'] = Number(this.score['home']);
        this.score['away'] = Number(this.score['away']);
        this.team_names = team_names;
        this.team_logos = team_logos;
        this.date = date;
        this.chrono = new Chrono(offset);
        this.state = state;
        // to_play, 1H, HT, 2H, played
        this.running = running;
    }

    addGoal(team: string, goal: Goal) {
        this.score[team] = this.score[team] + 1;
        this.goals[team].push(goal);
    }

    deleteGoal(team: string, goal_id: string) {
        this.score[team] = this.score[team] - 1;
        let goals_id = [];
        for (let goal of this.goals[team]){
          goals_id.push(goal.id);
        }
        const index: number = goals_id.indexOf(goal_id);
        if (index !== -1) {
           this.goals[team].splice(index, 1);
        } 
    }

    start(){
    	this.chrono.start()
        this.running = true;
    }

    stop(){
    	this.chrono.stop();
        this.running = false;
    }

    clear(){
    	this.chrono.clear();
    	this.score = {'home': 0, 'away':0}
    	this.goals = {'home':[], 'away':[]};
        this.running = false;
    }

    getChrono(){
        let minutes: number;
        let seconds: number;

        if (this.state == '1H'){
            minutes = this.chrono.minutes;
            seconds = this.chrono.seconds;
        }
        else if (this.state == '2H'){
            minutes = this.chrono.minutes + 35;
            seconds = this.chrono.seconds;
        }
        else{
            minutes = 0;
            seconds = 0;
        }

        return {'minutes': minutes, 'seconds': seconds}
    }
}