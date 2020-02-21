export class Player {

    public static fromJson(json: Object): Player {
        return new Player(
            json['id'],
            json['firstname'],
            json['lastname'],
            json['number']
        );
    }

    id: string;
    firstname: string;
    lastname: string;
    number: string;

    constructor(id: string, 
                firstname: string,
    	        lastname: string, 
    	        number: string) {

    	this.id = id;
        this.firstname = firstname;
    	this.lastname = lastname;
    	this.number = number;
    }
}