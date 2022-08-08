export interface Product{
    enabled:boolean,
    subcategory:string|null,
    sex:string,
    brand:string,
    model:string,
    code:string,
    stock:boolean,
    price:number,
    image:string,
    isOnFavs:boolean,
    category?:string;
}