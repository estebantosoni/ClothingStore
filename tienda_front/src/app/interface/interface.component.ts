import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor(
    private router: Router
    ){}

  ngOnInit(): void {
  }

  goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }

}
