export class User{    
    constructor(
        private username:string,
        private password:string,
        private id?:number,
        private token?: string,     //CREO QUE SERIA PASSWORD, PERO NO ESTOY SEGURO
    ){}

    getToken():string | undefined {return this.token;}

    getUsername():string {return this.username;}

    getPassword():string {return this.password;}
}