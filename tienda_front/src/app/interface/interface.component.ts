import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
  public prodsFavs$:Observable<Product[]> = of([]);
  
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
    var array = where.split('/');
    if(array[0]=='user')
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
    this.prodsFavs$ = this.favservice.getByUserID(this.uservice.getUsrLogged()!.id!);
  }

  get usrLogged():User|null{
    return this.uservice.getUsrLogged();
  }
}
