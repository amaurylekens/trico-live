import { Player } from './player';

export class Goal {

    public static fromJson(json: Object): Goal {

        let scorer = Player.fromJson(json['scorer']);
        let assister = Player.fromJson(json['assister'])
        return new Goal(
            json['id'],
            json['score'],
            json['team'],
            scorer,
            assister,
            json['minute']
        );
    }

    id: string;
    score: any;
    team: string;
    scorer: Player;
    assister: Player;
    minute: number;

    constructor(id: string, score: any, team: string, 
                scorer: Player, assister: Player, minute: number) {

    	this.id = id;
    	this.score = score;
    	this.team = team;
        this.scorer = scorer;
        this.assister = assister;
        this.minute = minute;
    }

}