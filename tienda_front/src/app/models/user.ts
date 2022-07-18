export class User{    
    constructor(
        private username:string,
        private password:string,
        private email?:string,
        private rol?:string,
        private id?:number,
        private token?: string,
    ){}

    getToken():string | undefined {return this.token;}

    getUsername():string {return this.username;}

    getEmail():string | undefined {return this.email;}

    getPassword():string {return this.password;}

    getRol():string | undefined {return this.rol;}
}