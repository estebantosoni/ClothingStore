import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form:FormGroup;
  private validUser:any;

  constructor(private service: UserService,private builder: FormBuilder) {
    this.form = this.builder.group({username:[''],password:['']});
    this.validUser = undefined;
  }

  ngOnInit(): void {
  }

  send():void{
    const usrname = this.form.get('username')?.value;
    const psw = this.form.get('password')?.value;
    const usr = new User(usrname,psw);
    this.service.checkUser(usr).subscribe((valid:Boolean) => {
      this.validUser = valid;
      console.log("observable returns " + valid);
    });
  }
}
