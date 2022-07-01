import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usrLogged?:User;

  constructor(private backend: HttpClient) {}

//EN VEZ DE USAR USER-SERVICE, USAMOS AUTHENTICATION-SERVICE
/*
  checkUser(usr:User):Observable<boolean>{
    return this.backend.post<boolean>(`${environment.backurl}/interface/user`,usr);
  }
*/
}
