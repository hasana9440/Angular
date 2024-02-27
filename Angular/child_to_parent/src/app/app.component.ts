import { Component, viewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'child_to_parent';
  val!:string;
  @ViewChild(HeaderComponent) hc!:HeaderComponent
  recive(str:string){
    console.log(str)
  }
}
