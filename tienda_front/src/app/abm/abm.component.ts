import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

  //son importantes para que se muestre el bloque correcto en el front

  bit:boolean|null = null;      //para los botones principales
  addbit:boolean|null = null;   //para añadir producto
  callbit:boolean|null = null;  //para llamar los productos
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }

  //para la funcion de añadir
  group1(){
    this.bit = false;
  }
  
  //para la funcion de llamar
  group2(){
    this.bit = true;
  }

  addDress(){
    this.addbit = false;
  }

  addFragrance(){
    this.addbit = true;
  }

  //en esta funcion se devuelven los datos del back para dress
  callDress(){
    this.callbit = false;
  }

  //en esta funcion se devuelven los datos del back para fragrance
  callFragrance(){
    this.callbit = true;
  }

}
