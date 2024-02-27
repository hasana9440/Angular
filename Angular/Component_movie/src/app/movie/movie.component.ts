import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
 
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  name ="hasana"
  @Input() img!:string;
  @Input() title!:string;
}
