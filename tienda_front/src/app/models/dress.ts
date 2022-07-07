export class Dress{
    constructor(
        public sex:string,
        public age:string,
        public subcategory:string|null,
        public brand:string,
        public model:string,
        public code:string,
        public size:string,
        public color:string,
        public stock:boolean,
        public price:number,
        public imagen:string,  //base 64
        public id?:number,
    ){}
}