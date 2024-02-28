import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  output(value:any,value1:any,value3:any,value4:any){
    alert('subbmited')
  }
}
