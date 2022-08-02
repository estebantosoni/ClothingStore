import { Token } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Dress } from '../models/dress';
import { Favorito } from '../models/favorito';
import { Fragrance } from '../models/fragrance';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { DressService } from '../services/dress.service';
import { FavoritoService } from '../services/favorito.service';
import { FraganceService } from '../services/fragrance.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  itemF$:Observable<Fragrance> = of();
  itemD$:Observable<Dress> = of();
  item:Dress|Fragrance|null = null;
  talle$:Observable<Dress[]> = of([]);
  checkId:boolean = false;

  constructor(
    private servF:FraganceService,
    private servD:DressService,
    private servU:AuthenticationService,
    private servFav:FavoritoService,
    private route: ActivatedRoute
    ) {
    const id = this.route.snapshot.paramMap.get('id');

    if(id?.length == 4){                      //fragrance
      this.itemF$ = this.servF.getObj(id);
      this.itemF$.subscribe(item => {
        this.item = item;
      });
      this.checkId = true;
    }
    else if(id?.length == 7){                 //dress
      this.itemD$ = this.servD.getObj(id);
      this.itemD$.subscribe(item => {
        this.item = item;
      });
      this.talle$ = this.servD.getFromSize(id);
      this.checkId = false;
    }
  }

  ngOnInit():void {}

  checkStock():void {}

  get usrLogged():User|null{
    return this.servU.getUsrLogged();
  }

  doNecessary(event:any,category:string):void{
    if(event.target.checked){
      this.addToFavs(category);
    }
    else{
      this.removeFromFavs(category);
    }
  }
  
  addToFavs(category:string):void {
    this.item!.isOnFavs = true;
    const fav:Favorito = new Favorito(
      this.servU.getUsrLogged()?.id!,
      this.item?.id!,
      category
    );
    this.servFav.save(fav).subscribe();
    if(category == "dress")
      this.servD.update(this.item as Dress).subscribe();
    else
      this.servF.update(this.item as Fragrance).subscribe();
  }

  removeFromFavs(category:string):void{
    const fav:Favorito = new Favorito(
      this.servU.getUsrLogged()?.id!,
      this.item?.id!,
      category
    );
    this.item!.isOnFavs = false;
    this.servFav.remove(fav).subscribe();
    if(category == "dress")
      this.servD.update(this.item as Dress).subscribe();
    else
      this.servF.update(this.item as Fragrance).subscribe();
  }
}