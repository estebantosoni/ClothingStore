import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogConfig, _MatDialogBase } from '@angular/material/dialog'
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from '../models/userLogin';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form:FormGroup;
  id:string|null = '';

  constructor(
    private service: AuthenticationService,
    private builder: FormBuilder,
    private popi: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  )
  {
    this.form = this.builder.group({username:[''],email:[''],password:[''],rol:['']});
    /*
    //si el usuario ya se logueó, lo devolvemos a la pagina principal
    if (this.service.currentUserValue) { 
      this.router.navigate(['/interface']);
    }
    */
  }

  ngOnInit(): void {
    
    //REVISAR SI ESTO ES CORRECTO AGREGARLO ACÁ
    this.id = this.route.snapshot.paramMap.get('id');
  }

  send():void{
    if(this.id == '1'){      //registro
      const usrname = this.form.get('username')?.value;
      const mail = this.form.get('email')?.value;
      const psw = this.form.get('password')?.value;
      const rol = this.form.get('rol')?.value;
      const usr = new User(usrname,psw,mail,rol);
      
      this.service.register(usr.getUsername(),usr.getEmail(),usr.getPassword(),usr.getRol()).subscribe((obj) =>{
        const popiConfig:MatDialogConfig = new MatDialogConfig();
        popiConfig.disableClose = true;
        popiConfig.width = '600px';
        popiConfig.height = '400px';

        const popiRef = this.popi.open(UserDialogComponent,popiConfig);
        popiRef.componentInstance.positive = true;
        if(obj.message == "User registered successfully!"){
          popiRef.componentInstance.reg = true;
        }else{
          popiRef.componentInstance.reg = false;
        }
        popiRef.afterClosed().subscribe();
      });

    }
    else{               //login
      const usrname = this.form.get('username')?.value;
      const psw = this.form.get('password')?.value;
      //const usr = new User(usrname,psw);                          //CREO QUE HABRIA QUE AGREGAR EL RESTO DE ATRIBUTOS
      
      this.service.login(usrname,psw).subscribe((obj) => {
        const usr:UserLogin = new UserLogin(obj.id,obj.username,obj.email,obj.rol,obj.token);
        this.service.usrLogged = usr;
        console.log(obj);
         //imprimimos el aviso
        const popiConfig:MatDialogConfig = new MatDialogConfig();
        popiConfig.disableClose = true;
        popiConfig.width = '600px';
        popiConfig.height = '400px';

        const popiRef = this.popi.open(UserDialogComponent,popiConfig);
        popiRef.componentInstance.positive = false;
        if(obj.id != undefined){
          popiRef.componentInstance.log = true;
        }else{
          popiRef.componentInstance.log = false;
        }
        popiRef.afterClosed().subscribe();
      });

    }
    
  }
}