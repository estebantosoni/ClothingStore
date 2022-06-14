import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backend: HttpClient) { }

  checkUser(usr:User):Observable<Boolean>{
    return this.backend.post<Boolean>(`${environment.backurl}/user`,usr);
  }
}
