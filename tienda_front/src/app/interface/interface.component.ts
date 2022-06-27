import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  
  public logged:boolean;
  public usrLogged?:User;

  constructor(private router: Router,private uservice:UserService) {
    if(this.uservice.usrLogged){
      this.logged = true;
      this.usrLogged = this.uservice.usrLogged;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {}

  public goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }
}
