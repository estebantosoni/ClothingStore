import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators }from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MiniPopiComponent } from '../mini-popi/mini-popi.component';
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
  addbit:boolean|null = null;   //para añadir producto
  callbit:boolean|null = null;  //para llamar los productos
  bit_size:boolean = false;     //para elegir valor del talle segun la prenda
  bit_temp:boolean = false;
  
  //para modificar productos
  iModify:boolean = false;
  modifyingCategory:string|null = null;
  modifyingDress:Dress|null = null;
  modifyingFragrance:Fragrance|null = null;
  
  //constantes
  prendas:string[] = ['remeras', 'pantalones', 'sweeters', 'buzos', 'camperas', 'chalecos', 'boxers', 'zapatillas'];
  talles: string[] = ['XS','S','M','L','XL','XXL','XXXL','XXXXL'];
  edades: string[] = ['niños','jovenes','adultos','ancianos'];
  perfumes: string[] = ['eau de toilette','colonias', 'infantiles'];
  
  zapas:string = 'zapatillas';

  //para el envío y recepción de productos con el backend
  dresses$:Observable<Dress[]> = of([]);
  fragrances$:Observable<Fragrance[]> = of([]);
  dform:FormGroup;
  fform:FormGroup;
  imgAsSTR:string;

  
  displayedColumnsDress: string[] = ['ID', 'SUBCATEGORIA', 'SEXO', 'EDAD','MARCA',
                                     'MODELO','CODIGO','TALLE','COLOR','STOCK',
                                     'PRECIO','IMAGEN','Configuracion'];
  displayedColumnsFragrance: string[] = ['ID','SUBCATEGORIA','SEXO','MARCA',
                                         'MODELO','CODIGO','VOLUMEN','AROMA','PAIS DE ORIGEN',
                                         'STOCK','PRECIO','IMAGEN','Configuracion'];


  constructor(
    private router:Router,
    private dservice:DressService,
    private fservice:FraganceService,
    private popi: MatDialog,
    private builder:FormBuilder
  ) {
    this.imgAsSTR = "";
    this.dform = this.builder.group({
      sexo:['',[Validators.required]],
      edad:['',[Validators.required]],
      subcategoria:['',[Validators.required]],
      marca:['',[Validators.required]],
      modelo:['',[Validators.required]],
      codigo:['',[Validators.required]],
      talle:['',[Validators.required]],
      color:['',[Validators.required]],
      stock:['',[Validators.required]],
      precio:['',[Validators.required]],
      imagen:['',[Validators.required]]
    });
    this.fform = this.builder.group({
      volumen:['',[Validators.required]],
      subcategoria:['',[Validators.required]],
      aroma:['',[Validators.required]],
      pais:['',[Validators.required]],
      sexo:['',[Validators.required]],
      marca:['',[Validators.required]],
      modelo:['',[Validators.required]],
      codigo:['',[Validators.required]],
      stock:['',[Validators.required]],
      precio:['',[Validators.required]],
      imagen:['',[Validators.required]]
    });
  }

  ngOnInit():void {}

  goTo(where:string){
    return this.router.navigate([`/${where}`]);
  }

  addDress():void{
    this.addbit = false; 
  }

  addFragrance():void{this.addbit = true;}

  call(i:any):void{
    if(i.index == 1){
      this.callDress();
    }
    else if(i.index == 2){
      this.callFragrance();
    }
  }

  callDress():void{
    this.callbit = false;
    this.dresses$ = this.dservice.getEverything();
  }

  callFragrance():void{
    this.callbit = true;
    this.fragrances$ = this.fservice.getEverything();
  }

  callPopi(status:boolean,error?:boolean,idOnCuestion?:number,category?:string):void{
    const popiConfig:MatDialogConfig = new MatDialogConfig();
    popiConfig.disableClose = true;

    const popiRef = this.popi.open(MiniPopiComponent,popiConfig);
    popiRef.componentInstance.block = status;
    if(error){
      if(idOnCuestion){       //error por código repetido
        popiRef.componentInstance.errorOnCode = error;
        popiRef.componentInstance.idOnCuestion = idOnCuestion;
        popiRef.componentInstance.category = category;
      }
      else {                  //error por abm de producto fallido
        popiRef.componentInstance.errorOnABM = true;
        return;
      }
    }
    
    popiRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  sendDress():void{
    var stock:boolean;
    if(this.dform.get('stock')?.value == "true"){
      stock = true;
    } else {
      stock = false;
    }
    if(!this.dform.valid){
      return;
    }
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
      this.dform.get('imagen')?.value,
      true,
      false
    );
    this.dservice.store(storing).subscribe({
      next: (obj) => {
        this.callPopi(true);
        console.log('holanda');
        this.dform.reset();
      },
      error: (objError) => {
        if(objError.error.message == "code used"){
          this.callPopi(true,true,objError.error.id,"prenda");
          console.log('holoroso');
          this.dform.get('codigo')?.reset();
        }
      }
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
    if(!this.dform.valid){
      this.callPopi(false,true);
      return;
    }
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
      this.dform.get('imagen')?.value,
      true,
      false,
      id
    );
    this.dservice.update(updating).subscribe();
    this.callPopi(false);
    this.callDress();
    this.dform.reset();
    
    this.bit_temp = false;
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
      this.fform.get('imagen')?.value,
      true,
      false
    );
    this.fservice.store(storing).subscribe({
      next: (obj) => {
        this.callPopi(true);
        this.fform.reset();
      },
      error: (objError) => {
        if(objError.error.message == "code used"){
          this.callPopi(true,true,objError.error.id,"fragancia");
          this.fform.get('codigo')?.reset();
        }
      }
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
    if(!this.fform.valid){
      console.log(
        this.fform.get('volumen')?.valid,
        this.fform.get('subcategoria')?.valid, 
        this.fform.get('aroma')?.valid, 
        this.fform.get('pais')?.valid, 
        this.fform.get('sexo')?.valid, 
        this.fform.get('marca')?.valid, 
        this.fform.get('modelo')?.valid, 
        this.fform.get('codigo')?.valid, 
        this.fform.get('stock')?.valid, 
        this.fform.get('precio')?.valid, 
        this.fform.get('imagen')?.valid
      );
      this.callPopi(false,true);
      return;
    }
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
      this.fform.get('imagen')?.value,
      true,
      false,
      id
    );
    this.fservice.update(updating).subscribe();
    this.callPopi(false);
    this.callFragrance();
    this.fform.reset();
    
    this.bit_temp = false;
  }
  
  configModify(product:Dress|Fragrance,category:string):void{
    this.bit_temp = true;
    
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
      if(this.modifyingDress.stock)
        this.dform.get('stock')?.setValue("true");
      else 
        this.dform.get('stock')?.setValue("false");
      this.dform.get('precio')?.setValue(this.modifyingDress.price);
      this.dform.get('imagen')?.setValue(this.modifyingDress.image);
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
      if(this.modifyingFragrance.stock)
        this.fform.get('stock')?.setValue("true");
      else 
        this.fform.get('stock')?.setValue("false");
      this.fform.get('precio')?.setValue(this.modifyingFragrance.price);
      this.fform.get('imagen')?.setValue(this.modifyingFragrance.image);
    }
  }

  enableDisableDress(updating:Dress):void{
    updating.enabled = !updating.enabled;
    this.dservice.update(updating).subscribe();
  }

  enableDisableFragrance(updating:Fragrance):void{
    updating.enabled = !updating.enabled;
    this.fservice.update(updating).subscribe();
  }

  encodeAsBase64(event:any,category:string):void{
    const MAXSZ:number = 235000;
    var file = event.target.files[0];
    var reader:FileReader = new FileReader();
    reader.onloadend = () => {
      if(file.size > MAXSZ){
        alert(`tamaño de imagen mayor a ${MAXSZ/1000} KB. pruebe con otra`);
        return;
      }
      const res = reader.result;
      if(typeof res === 'string'){
        if(category == "dress")
          this.dform.get('imagen')?.setValue(res);
        else if(category == "fragrance")
          this.fform.get('imagen')?.setValue(res);
      }
    };
    reader.readAsDataURL(file);
  }

  size(valor:string):void{
    if(valor === this.zapas){
      this.bit_size = true;
    }
    else{
      this.bit_size = false;
    }
  }

}
