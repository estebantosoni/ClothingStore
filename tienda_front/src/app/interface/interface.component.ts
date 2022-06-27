import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  
  public logged:boolean;

  constructor(private router: Router) {
    this.logged = false;
  }

  ngOnInit(): void {}

  public goTo(where:string){
    if(where == "user"){
      
    }
    return this.router.navigate([`/${where}`]);
  }
}
