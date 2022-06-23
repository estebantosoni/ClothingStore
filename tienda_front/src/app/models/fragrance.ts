export class Fragrance{
    //public imagen:ni idea;

    constructor(
        public volumen:number,
        public subcategory:string,
        public aroma:string,
        public originCountry:string,
        public sex:string,
        public brand:string,
        private code:string,
        public stock:boolean,
        public price:number
    ){}

    
}