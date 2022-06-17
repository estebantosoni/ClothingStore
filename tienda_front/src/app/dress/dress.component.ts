import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dress } from '../dress';
import { DressService } from '../dress.service';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  dresses$:Observable<Dress[]> = of([]);

  constructor(private service:DressService) { }

  ngOnInit():void{
    this.dresses$ = this.service.getAll();
  }
  seeSub(subcategory:string){
    this.dresses$ = this.service.getFromSub(`subcategory ${subcategory}`);
  }
  seeSex(sex:string):void{
    this.dresses$ = this.service.getFromSex(`sexo ${sex}`);
  }
  seeAge(age:string):void{
    this.dresses$ = this.service.getFromAge(`age ${age}`);
  }
}
