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
  fragrances$:Observable<Fragrance[]> = of([]);

  constructor(
    private service:FraganceService,
    private router: Router,
    ) {
    this.fragrances$ = this.service.getAll();
  }

  ngOnInit():void{}
  
  seeSub(subcategory:string){
    this.fragrances$ = this.service.getFromSub(subcategory);
  }
  seeSex(sex:string):void{
    this.fragrances$ = this.service.getFromSex(sex);
  }
  seeOriginCountry(country:string):void{
    this.fragrances$ = this.service.getFromCountry(country);
  }

  goTo(where: string,code:string){
    return this.router.navigate([`/${where}/${code}`]);
  }

}
