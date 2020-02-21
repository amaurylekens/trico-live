export class Team {

    public static fromJson(json: Object): Team {
        return new Team(
            json['filename']
        );
    }

    filename: string;

    constructor(filename: string) {
      this.filename = filename;
    }

}


