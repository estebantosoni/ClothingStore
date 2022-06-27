import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogConfig, _MatDialogBase } from '@angular/material/dialog'
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form:FormGroup;

  constructor(
    private service: UserService,
    private builder: FormBuilder,
    private popi: MatDialog
  ) {
    this.form = this.builder.group({username:[''],password:['']});
  }

  ngOnInit(): void {
  }

  send():void{
    const usrname = this.form.get('username')?.value;
    const psw = this.form.get('password')?.value;
    const usr = new User(usrname,psw);                          //HABRIA QUE AGREGAR EL RESTO DE ATRIBUTOS
    this.service.checkUser(usr).subscribe((valid:boolean) => {
      if(valid){
        this.service.usrLogged = usr;
      }
      //imprimimos el aviso
      const popiConfig:MatDialogConfig = new MatDialogConfig();
      popiConfig.disableClose = true;
      popiConfig.width = '600px';
      popiConfig.height = '400px';
      const popiRef = this.popi.open(UserDialogComponent,popiConfig);
      popiRef.componentInstance.positive = valid;
      popiRef.afterClosed().subscribe();
    });
  }
}