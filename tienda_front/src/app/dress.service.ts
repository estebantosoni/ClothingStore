import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dress } from './dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor(private backend:HttpClient) { }

  getAll():Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${environment.backurl}/dress`);
  }
  getFromSub(which:string):Observable<Dress[]>{
    return this.backend.post<Dress[]>(`${environment.backurl}/dress`,which);
  }
  getFromSex(which:string):Observable<Dress[]>{
    return this.backend.post<Dress[]>(`${environment.backurl}/dress`,which);
  }
  getFromAge(which:string):Observable<Dress[]>{
    return this.backend.post<Dress[]>(`${environment.backurl}/dress`,which);
  }
}
