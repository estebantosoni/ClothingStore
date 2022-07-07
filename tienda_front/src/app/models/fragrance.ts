export class Fragrance{
    constructor(
        public volumen:number,
        public subcategory:string|null,
        public aroma:string,
        public originCountry:string,
        public sex:string,
        public brand:string,
        public model:string,
        public code:string,
        public stock:boolean,
        public price:number,
        public imagen:string,    //base 64
        public id?:number
    ){}

    
}