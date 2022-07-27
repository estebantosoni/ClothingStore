import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-popi',
  templateUrl: './mini-popi.component.html',
  styleUrls: ['./mini-popi.component.css']
})
export class MiniPopiComponent implements OnInit {

  public block?:boolean;  //  true es para añadir / false es para modificar
  public errorOnCode?:boolean;
  public idOnCuestion?:number;
  public category?:string;

  constructor() {}

  ngOnInit():void {}

}
