import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

//esta variable tiene 3 valores y, por ende, 3 opciones
      //null: cuando recien entro a la pagina y no quiero q se muestre nada hasta que aprete un boton
      //false: si apreto para añadir usuario
      //true: si apreto para llamar a todos los usuarios

      //es importante para que se muestre el bloque correcto en el front

      bit:boolean|null = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }

  //funcion para añadir usuarios al back
  //hay que ver que utilidad puede tener teniendo en cuenta el metodo puesto en form (en el html)
  public addUser(){

    this.bit=false;

  }

  //funcion para llamar a los usuarios desde el back
  public callUsers(){
    
    this.bit=true;

  }

  

}
