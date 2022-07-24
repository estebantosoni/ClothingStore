import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  public positive?:boolean;

  public reg?:boolean;
  public log?:boolean;

  constructor(){
    
  }

  ngOnInit():void {}

}
