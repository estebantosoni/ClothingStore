import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dress } from '../models/dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {
  
  url:string = `${environment.backurl}/interface/dress`;

  constructor(private backend:HttpClient) {}

  getAll():Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/all`);
  }
  getEverything():Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/everything`);
  }
  getObj(who:string):Observable<Dress>{
    return this.backend.get<Dress>(`${this.url}/obj/${who}`);
  }
  getFromSub(which:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/sub/${which}`);
  }
  getFromSex(who:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/sex/${who}`);
  }
  getFromAge(which:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/age/${which}`);
  }
  getSizeFromCode(who:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${this.url}/size/${who}`);
  }

  store(which:Dress):Observable<any>{
    return this.backend.post<any>(`${this.url}/save`,which);
  }

  update(which:Dress):Observable<void>{
    return this.backend.put<void>(`${this.url}/update`,which);
  }
}