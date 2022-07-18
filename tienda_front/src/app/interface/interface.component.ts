import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  
  public logged:boolean;
  public usrLogged?:User;
  constructor(private router: Router,private uservice:AuthenticationService) {
    if(this.uservice.usrLogged){
      this.logged = true;
      console.log(this.logged);
      this.usrLogged = this.uservice.usrLogged;
    } else {
      this.logged = false;
      console.log(this.logged);
    }
  }

  ngOnInit(): void {}

  public goTo(where:string){
    var array = where.split('/');
    if(array[0]=='user'){
      return this.router.navigate([`/${array[0]}/${array[1]}`]);
    }else{
      return this.router.navigate([`/${where}`]);
    }
    
  }
}
