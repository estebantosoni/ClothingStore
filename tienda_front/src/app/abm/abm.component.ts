import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  //para seleccion de bloque
  bit:boolean|null = null;      //para los botones principales
  addbit:boolean|null = null;   //para añadir producto
  callbit:boolean|null = null;  //para llamar los productos
  bit_size:boolean = false;     //para elegir valor del talle segun la prenda
  //para modificar productos
  iModify:boolean = false;
  modifyingCategory:string|null = null;
  modifyingDress:Dress|null = null;
  modifyingFragrance:Fragrance|null = null;
  //constantes
  prendas:string[] = ['Remeras', 'Pantalones', 'Sweeters', 'Buzos', 'Camperas', 'Chalecos', 'Boxers', 'Zapatillas'];
  //para el envío y recepción de productos con el backend
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
      //imagen:['',[ Validators.required ]]
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
      //imagen:['',[ Validators.required ]]
    });
  }

  ngOnInit():void {}

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
    this.dservice.store(storing).subscribe(() => {
      //HACER POPUP
      this.dform.reset();
    });
  }

  updateDress(id?:number):void{
    this.iModify = false;
    var stock:boolean;
    if(this.dform.get('stock')?.value == "true"){
      stock = true;
    } else {
      stock = false;
    }
    if(!this.dform.valid)
      return;
    const updating = new Dress(
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
      true,
      id
    );
    this.dservice.update(updating).subscribe();
    this.callDress();
    this.dform.reset();
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
    this.fservice.store(storing).subscribe(() => {
      //HACER POPUP
      this.fform.reset();
    });
  }

  updateFragrance(id?:number):void{
    this.iModify = false;
    var stock:boolean;
    if(this.fform.get('stock')?.value == "true"){
      stock = true;
    } else {
      stock = false;
    }
    if(!this.fform.valid)
      return;
    const updating = new Fragrance(
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
      true,
      id
    );
    this.fservice.update(updating).subscribe();
    this.callFragrance();
    this.fform.reset();
  }
  
  configModify(product:Dress|Fragrance,category:string):void{
    this.iModify = true;
    if(category == "dress"){
      this.modifyingCategory = "dress";
      this.modifyingDress = product as Dress;
      this.modifyingFragrance = null;
      //seteo los valores del producto que se está modificando en el formulario
      this.dform.get('sexo')?.setValue(this.modifyingDress.sex);
      this.dform.get('edad')?.setValue(this.modifyingDress.age);
      this.dform.get('subcategoria')?.setValue(this.modifyingDress.subcategory);
      this.dform.get('marca')?.setValue(this.modifyingDress.brand);
      this.dform.get('modelo')?.setValue(this.modifyingDress.model);
      this.dform.get('codigo')?.setValue(this.modifyingDress.code);
      this.dform.get('talle')?.setValue(this.modifyingDress.size);
      this.dform.get('color')?.setValue(this.modifyingDress.color);
      this.dform.get('stock')?.setValue(this.modifyingDress.stock);
      this.dform.get('precio')?.setValue(this.modifyingDress.price);
    }
    else {
      this.modifyingCategory = "fragrance";
      this.modifyingFragrance = product as Fragrance;
      this.modifyingDress = null;

      this.fform.get('volumen')?.setValue(this.modifyingFragrance.volumen);
      this.fform.get('subcategoria')?.setValue(this.modifyingFragrance.subcategory);
      this.fform.get('aroma')?.setValue(this.modifyingFragrance.aroma);
      this.fform.get('pais')?.setValue(this.modifyingFragrance.originCountry);
      this.fform.get('sexo')?.setValue(this.modifyingFragrance.sex);
      this.fform.get('marca')?.setValue(this.modifyingFragrance.brand);
      this.fform.get('modelo')?.setValue(this.modifyingFragrance.model);
      this.fform.get('codigo')?.setValue(this.modifyingFragrance.code);
      this.fform.get('stock')?.setValue(this.modifyingFragrance.stock);
      this.fform.get('precio')?.setValue(this.modifyingFragrance.price);
    }
  }

  enableDisableDress(updating:Dress){
    updating.enabled = !updating.enabled;
    this.dservice.update(updating).subscribe();
  }

  enableDisableFragrance(updating:Fragrance){
    updating.enabled = !updating.enabled;
    this.fservice.update(updating).subscribe();
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
