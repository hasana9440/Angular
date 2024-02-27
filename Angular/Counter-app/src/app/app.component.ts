import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter-app';
  isDisable = false;
  count = 0;
  type = "Even Number";
  x =document.getElementById("bd");
  increment(){
      if(this.count >=20){
          this.isDisable = true;
      }
      else{
        this.count++;
        this.type = (this.count%2==0)?"Even number":"Odd Number";
      }
  }
  decrement(){
    if(this.count == 0){
      this.isDisable = true;
  }
  else{
    this.count--;
    this.type = (this.count%2==0)?"Even number":"Odd Number";
  }
  }
  reset(){
    this.count = 0;
    this.type = (this.count%2==0)?"Even number":"Odd Number";
  }
 
}
