import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twoway';
  val:any;
  name!:string;
  em!:string;
  x:any;
  fun(){
    const ele = document.getElementById("ip") as HTMLInputElement;
    this.val = ele.value;
    //alert(this.val);

  }
  sub(){
    if(this.name == undefined || this.em == undefined ){
        alert("Name and email should not be empty ")
    }
    else{
      alert("Form submitted successfully"+"\n Name : " + this.name+"\n Email :" + this.em)
  
    }

   }
}
