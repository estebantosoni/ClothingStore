export class UserLogin{    
    
    constructor(
        private id:number,
        private username:string,
        private email:string,
        private rol:string,
        private token: string
    ){}
    
    getId():number {return this.id;}
    getUsername():string {return this.username;}
    getEmail():string {return this.email;}
    getRol():string {return this.rol;}
    getToken():string {return this.token;}
    

}