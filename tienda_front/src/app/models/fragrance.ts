import { Product } from "./product";

export class Fragrance implements Product{
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
        public image:string,    //base 64
        public enabled:boolean,
        public isOnFavs:boolean,
        public id?:number
    ){}

    
}