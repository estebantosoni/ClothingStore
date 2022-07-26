export class User{    
    constructor(
        public username:string,
        private password:string,
        public email?:string,
        public rol?:string,
        public id?:number,
        private token?: string,
    ){}

    getToken():string | undefined {return this.token;}

    getUsername():string {return this.username;}

    getEmail():string | undefined {return this.email;}

    getPassword():string {return this.password;}

    getRol():string | undefined {return this.rol;}
}