import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dress } from '../models/dress';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  dresses$:Observable<Dress[]> = of([]);

  constructor(
    private service:DressService,
    private router: Router,
    ) {
    this.dresses$ = this.service.getAll();
  }

  ngOnInit():void{}

  seeSub(subcategory:string){
    this.dresses$ = this.service.getFromSub(subcategory);
  }
  seeSex(sex:string):void{
    this.dresses$ = this.service.getFromSex(sex);
  }
  seeAge(age:string):void{
    this.dresses$ = this.service.getFromAge(age);
  }

  goTo(where:string,code:string){
    return this.router.navigate([`/${where}/${code}`]);
  }

}
