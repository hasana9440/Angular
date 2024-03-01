import { Component,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  constructor(private as : AuthService,private router:Router){}
  submit(){
    this.as.logout();
    console.log('logged out successfully')
    this.router.navigate(['/login']);
  }
}
