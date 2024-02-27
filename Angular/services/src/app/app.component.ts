import { Component } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
  jokes :any[]=[];
  constructor(private p:JokesService){
    this.p.getDate().subscribe((data:any)=>{

    });
  }
}
