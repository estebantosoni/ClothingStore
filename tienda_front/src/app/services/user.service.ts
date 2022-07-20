import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
}
