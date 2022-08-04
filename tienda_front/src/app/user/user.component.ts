import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { MatDialog, MatDialogConfig, _MatDialogBase } from '@angular/material/dialog'
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserLogin } from '../models/userLogin';
import { FavoritoService } from '../services/favorito.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form:FormGroup;
  id:string|null = '';
  hide:boolean = true;
  limit:number = 3;
  continue:boolean = false;

  constructor(
    private service: AuthenticationService,
    private builder: FormBuilder,
    private popi: MatDialog,
    private route: ActivatedRoute,
    private favservice:FavoritoService
  )
  {
    this.form = this.builder.group({
      username:['', [ Validators.required ]], 
      email:['', [ Validators.required, Validators.email]],
      confirm_email:['', [Validators.required, Validators.email]],
      password:['', [ Validators.required]],
      confirm_password:['', [ Validators.required ]],
      rol:this.builder.control('')
    });

  }

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  
  get password():AbstractControl {return this.form.controls['password'];}
  get confirm_password():AbstractControl {return this.form.controls['confirm_password'];}
  get username():AbstractControl {return this.form.controls['username'];}
  get email():AbstractControl {return this.form.controls['email'];}
  get confirm_email():AbstractControl {return this.form.controls['confirm_email'];}
  
  onPasswordChange():void{
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  onEmailChange():void{
    if (this.confirm_email.value == this.email.value) {
      this.confirm_email.setErrors(null);
    } else {
      this.confirm_email.setErrors({ mismatch: true });
    }
  }

  check():void{
      
      if(this.form.get('confirm_email')?.valid == false || this.form.get('email')?.valid == false){
        this.continue = false;
        return;
      }
      else{
        this.continue = true;
      }
    
  }

  send(nro:number):void{
    if(nro == 0){
      if(this.form.get('password')?.value !== this.form.get('confirm_password')?.value || this.form.get('username')?.value < this.limit){
        return;
      }
    }
    
    if(nro == -1){
      if(this.form.get('username')?.valid == false || this.form.get('password')?.valid == false){
        return;
      }
    }

    if(this.id == '1'){      //registro
      const usrname = this.form.get('username')?.value;
      const mail = this.form.get('email')?.value;
      const psw = this.form.get('password')?.value;
      const rol = this.form.get('rol')?.value;
      const usr = new User(usrname,psw,mail,rol);
      
      this.service.register(usr.getUsername(),usr.getEmail(),usr.getPassword(),usr.getRol()).subscribe({
        next: (obj) =>  {
          const popiConfig:MatDialogConfig = new MatDialogConfig();
            popiConfig.disableClose = true;
            //popiConfig.width = "100%";
            //popiConfig.height = "100%";
            //popiConfig.panelClass = 'no';
          const popiRef = this.popi.open(UserDialogComponent,popiConfig);
            popiRef.componentInstance.positive = true;

          if(obj.message == "User registered successfully!"){
              popiRef.componentInstance.reg = true;
            }
            popiRef.afterClosed().subscribe();
          },
        error: (objError) => {
          //imprimimos el aviso
          this.continue = false;

          const popiConfig:MatDialogConfig = new MatDialogConfig();
          popiConfig.disableClose = true;
          //popiConfig.width = '600px';
          //popiConfig.height = '400px';
          const popiRef = this.popi.open(UserDialogComponent,popiConfig);
          popiRef.componentInstance.positive = true;
          popiRef.componentInstance.reg = false;
          popiRef.afterClosed().subscribe();
        }
      });
    }
    else{               //login
      const usrname = this.form.get('username')?.value;
      const psw = this.form.get('password')?.value;
      this.service.login(usrname,psw).subscribe({
        next: (obj) => {
          const popiConfig:MatDialogConfig = new MatDialogConfig();
          popiConfig.disableClose = true;
          //popiConfig.width = "100%";
          //popiConfig.height = "100%";
          //popiConfig.panelClass = 'no';
          const popiRef = this.popi.open(UserDialogComponent,popiConfig);
          popiRef.componentInstance.positive = false;
          const usr:UserLogin = new UserLogin(obj.id,obj.username,obj.email,obj.rol,obj.token);
          this.service.setUsrLogged(new User(
            obj.username,
            "",
            obj.email,
            obj.rol,
            obj.id
          ));
          //imprimimos el aviso
          popiRef.componentInstance.log = true;
          popiRef.afterClosed().subscribe();
          this.favservice.restoreValues(this.service.getUsrLogged()!.id!).subscribe();
        },
        error: (objError) => {
          const popiConfig:MatDialogConfig = new MatDialogConfig();
          popiConfig.disableClose = true;
          //popiConfig.width = '600px';
          //popiConfig.height = '400px';
          
          const popiRef = this.popi.open(UserDialogComponent,popiConfig);
          popiRef.componentInstance.positive = false;
          //imprimimos el aviso
          popiRef.componentInstance.log = false;
          popiRef.afterClosed().subscribe();
        }
      });
    }
  }
}