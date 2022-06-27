import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dress } from '../models/dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor(private backend:HttpClient) {}

  getAll():Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${environment.backurl}/interface/dress/all`);
  }
  getObj(who:string):Observable<Dress>{
    return this.backend.get<Dress>(`${environment.backurl}/interface/dress/obj/${who}`);
  }
  getFromSub(which:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${environment.backurl}/interface/dress/sub/${which}`);
  }
  getFromSex(who:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${environment.backurl}/interface/dress/sex/${who}`);
  }
  getFromAge(which:string):Observable<Dress[]>{
    return this.backend.get<Dress[]>(`${environment.backurl}/interface/dress/age/${which}`);
  }
}
