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
  error:string = '';

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
      email:['', [ Validators.required ]],
      confirm_email:['', [ Validators.required ] ],
      password:['', [ Validators.required ]],
      confirm_password:['', [ Validators.required ] ],
      rol:this.builder.control('')
    });

  }

  ngOnInit(): void {
    //REVISAR SI ESTO ES CORRECTO AGREGARLO ACÁ
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  get password(): AbstractControl {return this.form.controls['password'];}
  get confirm_password(): AbstractControl {return this.form.controls['confirm_password'];}

  onEmailChange() {
    if (this.confirm_email.value == this.email.value) {
      this.confirm_email.setErrors(null);
    } else {
      this.confirm_email.setErrors({ mismatch: true });
    }
  }
  
  get email(): AbstractControl {return this.form.controls['email'];}
  get confirm_email(): AbstractControl {return this.form.controls['confirm_email'];}

  send(nro:number):void{
    if(nro == 0){
      if(this.form.get('email')?.value !== this.form.get('confirm_email')?.value || this.form.get('password')?.value !== this.form.get('confirm_password')?.value ){
        this.error = 'El email y/o contraseña no coinciden.';
        return;
      }
      else{
        this.error = '';
      }
    }

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
      const popiConfig:MatDialogConfig = new MatDialogConfig();
      const popiRef = this.popi.open(UserDialogComponent,popiConfig);
      popiRef.componentInstance.positive = false;
      popiConfig.disableClose = true;
      popiConfig.width = '600px';
      popiConfig.height = '400px';
      this.service.login(usrname,psw).subscribe({
        next: (obj) => {
        const usr:UserLogin = new UserLogin(obj.id,obj.username,obj.email,obj.roles[0],obj.token);
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
        //imprimimos el aviso
        popiRef.componentInstance.log = false;
        popiRef.afterClosed().subscribe();
        }
      });
    }
  }
}