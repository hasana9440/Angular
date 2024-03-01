import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private as:AuthService,private router:Router){}
  em:any
  pass:any
  submit(email:any,pwd:any){
    this.pass = pwd.control.value;
    this.em = email.control.value;
    if(email.control.value.trim()==''||pwd.control.value.trim()==''){
      alert('Please Enter proper values');
    }
    else{
          this.as.login(email.control.value,pwd.control.value).then((val)=>{
          this.router.navigate(['/Data']);
        })
    }
  }
}
