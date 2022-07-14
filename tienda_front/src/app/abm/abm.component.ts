import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Dress } from '../models/dress';
import { Fragrance } from '../models/fragrance';
import { DressService } from '../services/dress.service';
import { FraganceService } from '../services/fragrance.service';

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
  bit_size:boolean = false; //para elegir valor del talle segun la prenda

  prendas:string[] = ['Remeras', 'Pantalones', 'Sweeters', 'Buzos', 'Camperas', 'Chalecos', 'Boxers', 'Zapatillas'];
  
  dresses$:Observable<Dress[]> = of([]);
  fragrances$:Observable<Fragrance[]> = of([]);
  dform:FormGroup;
  fform:FormGroup;
  imgAsSTR:string;

  constructor(
    private router:Router,
    private dservice:DressService,
    private fservice:FraganceService,
    private builder:FormBuilder
  ) {
    this.imgAsSTR = "";
    this.dform = this.builder.group({
      sexo:['',[ Validators.required ]],
      edad:['',[ Validators.required ]],
      subcategoria:['',[ Validators.required ]],
      marca:['',[ Validators.required ]],
      modelo:['',[ Validators.required ]],
      codigo:['',[ Validators.required ]],
      talle:['',[ Validators.required ]],
      color:['',[ Validators.required ]],
      stock:['',[ Validators.required ]],
      precio:['',[ Validators.required ]],
      imagen:['',[ Validators.required ]]
    });
    this.fform = this.builder.group({
      volumen:['',[ Validators.required ]],
      subcategoria:['',[ Validators.required ]],
      aroma:['',[ Validators.required ]],
      pais:['',[ Validators.required ]],
      sexo:['',[ Validators.required ]],
      marca:['',[ Validators.required ]],
      modelo:['',[ Validators.required ]],
      codigo:['',[ Validators.required ]],
      stock:['',[ Validators.required ]],
      precio:['',[ Validators.required ]],
      imagen:['',[ Validators.required ]]
    });
  }

  ngOnInit(): void {
  }

  public goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }

  //para la funcion de añadir
  group1():void{this.bit = false;}
  
  //para la funcion de llamar
  group2():void{this.bit = true;}

  addDress():void{this.addbit = false;}

  addFragrance():void{this.addbit = true;}

  callDress():void{
    this.callbit = false;
    this.dresses$ = this.dservice.getEverything();
  }

  callFragrance():void{
    this.callbit = true;
    this.fragrances$ = this.fservice.getEverything();
  }

  sendDress():void{
    var stock:boolean;
    if(this.dform.get('stock')?.value == "true"){
      stock = true;
    } else {
      stock = false;
    }
    if(!this.dform.valid)
      return;
    const storing = new Dress(
      this.dform.get('sexo')?.value,
      this.dform.get('edad')?.value,
      this.dform.get('subcategoria')?.value,
      this.dform.get('marca')?.value,
      this.dform.get('modelo')?.value,
      this.dform.get('codigo')?.value,
      this.dform.get('talle')?.value,
      this.dform.get('color')?.value,
      stock,
      this.dform.get('precio')?.value,
      this.imgAsSTR,
      true
    );
    this.dservice.storeDress(storing).subscribe();
  }

  sendFragrance():void{
    var stock:boolean;
    if(this.fform.get('stock')?.value == "true"){
      stock = true;
    } else {
      stock = false;
    }
    if(!this.fform.valid)
      return;
    const storing = new Fragrance(
      this.fform.get('volumen')?.value,
      this.fform.get('subcategoria')?.value,
      this.fform.get('aroma')?.value,
      this.fform.get('pais')?.value,
      this.fform.get('sexo')?.value,
      this.fform.get('marca')?.value,
      this.fform.get('modelo')?.value,
      this.fform.get('codigo')?.value,
      stock,
      this.fform.get('precio')?.value,
      this.imgAsSTR,
      true
    );
    this.fservice.storeFragrance(storing).subscribe();
  }

  enableDisableDress(id?:number|undefined){
    this.dservice.enableDisableDress(id).subscribe();
  }

  enableDisableFragrance(id?:number|undefined){
    this.fservice.enableDisableFragrance(id).subscribe();
  }

  encodeAsBase64(event:any):void{
    const MAXSZ:number = 235000;
    var file = event.target.files[0];
    var reader:FileReader = new FileReader();
    reader.onloadend = () => {
      if(file.size > MAXSZ){
        alert(`tamaño de imagen mayor a ${MAXSZ/1000} KB. pruebe con otra`);
        return;
      }
      const res = reader.result;
      if(typeof res === 'string')
        this.imgAsSTR = res;
      else
        this.imgAsSTR = "";
    };
    reader.readAsDataURL(file);
  }

  size(valor:string){
    if(valor == "Zapatillas"){
      this.bit_size = true;
      console.log(this.bit_size);
    }
    else{
      this.bit_size = false;
    }
  }

}
