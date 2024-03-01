import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private as:AuthService,private router:Router){}
submit(email:any,pwd:any,form:any){
  //console.log(email.control.value,pwd.control.value)
  //this.as.signup(email.control.value,pwd.control.value);
  if(email.control.value.trim() == '' || pwd.control.value.trim() == ''){
    alert("Enter proper values");
  }
  else{
    this.as.signup(email.control.value,pwd.control.value).then((val)=>{
      console.log(val);
      this.router.navigate(['/login']);  
    })

  }
}
}
