import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FraganceService } from '../services/fragrance.service';
import { Fragrance } from '../models/fragrance';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fragrance',
  templateUrl: './fragrance.component.html',
  styleUrls: ['./fragrance.component.css']
})
export class FragranceComponent implements OnInit {
  
  catSelected:string = "";
  fragrances$:Observable<Fragrance[]> = of([]);

  constructor(
    private service:FraganceService,
    private router: Router,
    ) {
    this.seeAll();
  }

  ngOnInit():void{}
  
  seeAll():void{
    this.fragrances$ = this.service.getAll();
    this.catSelected = "";
  }

  seeSub(subcategory:string){
    this.fragrances$ = this.service.getFromSub(subcategory);
    this.catSelected = subcategory;
  }
  seeSex(sex:string):void{
    this.fragrances$ = this.service.getFromSex(sex);
    this.catSelected = sex;
  }
  seeOriginCountry(country:string):void{
    this.fragrances$ = this.service.getFromCountry(country);
    this.catSelected = country;
  }

  goTo(where: string,code:string){
    return this.router.navigate([`/${where}/fragrance/${code}`]);
  }
}
