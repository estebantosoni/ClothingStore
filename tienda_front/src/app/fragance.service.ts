import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Fragrance } from './fragrance';

@Injectable({
  providedIn: 'root'
})
export class FraganceService {

  constructor(private backend:HttpClient) { }

  getAll():Observable<Fragrance[]>{
    return this.backend.get<Fragrance[]>(`${environment.backurl}`);
  }
  getFromSub(which:string):Observable<Fragrance[]>{
    return this.backend.post<Fragrance[]>(`${environment.backurl}/fragrance`,which);
  }
  getFromSex(which:string):Observable<Fragrance[]>{
    return this.backend.post<Fragrance[]>(`${environment.backurl}/fragrance`,which);
  }
  getFromCountry(which:string):Observable<Fragrance[]>{
    return this.backend.post<Fragrance[]>(`${environment.backurl}/fragrance`,which);
  }
}
