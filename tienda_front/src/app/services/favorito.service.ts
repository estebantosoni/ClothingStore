import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dress } from '../models/dress';
import { Favorito } from '../models/favorito';
import { Fragrance } from '../models/fragrance';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private url:string = `${environment.backurl}/interface/favoritos`;

  constructor(private backend:HttpClient) {}

  getByUserID(id:number,category:string):Observable<Dress[]|Fragrance[]>{
    return this.backend.get<Dress[]|Fragrance[]>(`${this.url}/byUserId/${category}/${id}`);
  }

  save(what:Favorito):Observable<void>{
    return this.backend.post<void>(`${this.url}/add`,what);
  }

  remove(what:Favorito):Observable<void>{
    const user:number = what.idUser;
    const product:number = what.idProduct;
    const category:string = what.category;
    return this.backend.delete<void>(`${this.url}/remove/${category}/${user}/${product}`);
  }

  resetValues(id:number):Observable<void>{
    return this.backend.delete<void>(`${this.url}/reset/${id}`);
  }

  restoreValues(id:number):Observable<void>{
    return this.backend.put<void>(`${this.url}/restore`,id);
  }
}