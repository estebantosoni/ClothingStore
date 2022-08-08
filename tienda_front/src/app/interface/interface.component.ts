import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dress } from '../models/dress';
import { Fragrance } from '../models/fragrance';
import { Product } from '../models/product';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { FavoritoService } from '../services/favorito.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  
  public logged:boolean;
  public dressesFavs$:Observable<Dress[]> = of([]);
  public fragrancesFavs$:Observable<Fragrance[]> = of([]);
  
  constructor(
    private router: Router,
    private uservice:AuthenticationService,
    private favservice:FavoritoService
  ) {
    if(this.uservice.getUsrLogged()){
      this.logged = true;
      this.viewFavs();
    }
    else 
      this.logged = false;
  }

  ngOnInit():void{}

  goTo(where:string){
    const array:string[] = where.split('/');
    if(array[0] == 'user')
      return this.router.navigate([`/${array[0]}/${array[1]}`]);
    else
      return this.router.navigate([`/${where}`]);
  }

  quit():void{
    this.favservice.resetValues(this.uservice.getUsrLogged()!.id!).subscribe(() => {
      window.location.reload();
    });
    this.uservice.logout();
  }

  viewFavs():void{
    this.dressesFavs$ = this.favservice.getByUserID(this.uservice.getUsrLogged()!.id!,"dress") as Observable<Dress[]>;
    this.fragrancesFavs$ = this.favservice.getByUserID(this.uservice.getUsrLogged()!.id!,"fragrance") as Observable<Fragrance[]>;
  }

  get usrLogged():User|null{
    return this.uservice.getUsrLogged();
  }
}