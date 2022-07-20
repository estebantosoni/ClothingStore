import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Fragrance } from '../models/fragrance';

@Injectable({
  providedIn: 'root'
})
export class FraganceService {

  url:string = `${environment.backurl}/interface/fragrance`;

  constructor(private backend:HttpClient) {}

  getAll():Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${this.url}/all`);
  }
  getEverything():Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${this.url}/everything`)
  }
  getObj(who:string):Observable<Fragrance>{
    return this.backend.get<Fragrance>(`${this.url}/obj/${who}`);
  }
  getFromSub(which:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${this.url}/sub/${which}`);
  }
  getFromSex(who:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${this.url}/sex/${who}`);
  }
  getFromCountry(which:string):Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${this.url}/country/${which}`);
  }

  store(which:Fragrance):Observable<void>{
    return this.backend.post<void>(`${this.url}/save`,which);
  }

  update(which:Fragrance):Observable<void>{
    return this.backend.put<void>(`${this.url}/update`,which);
  }
}
