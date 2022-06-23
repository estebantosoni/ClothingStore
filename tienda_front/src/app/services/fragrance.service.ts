import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Fragrance } from '../models/fragrance';

@Injectable({
  providedIn: 'root'
})
export class FraganceService {

  constructor(private backend:HttpClient) {}

  getAll():Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${environment.backurl}/interface/fragrance/all`);
  }
  getFromSub(which:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${environment.backurl}/interface/fragrance/sub/${which}`);
  }
  getFromSex(who:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${environment.backurl}/interface/fragrance/sex/${who}`);
  }
  getFromCountry(which:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${environment.backurl}/interface/fragrance/country/${which}`);
  }
}
