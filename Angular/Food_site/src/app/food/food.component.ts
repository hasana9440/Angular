import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() img!:any;
  @Input() title!:any;
  name!:string;
  fun(){
    alert("You have selected : "+this.title)
  }
}
