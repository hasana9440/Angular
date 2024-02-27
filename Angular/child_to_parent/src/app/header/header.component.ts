import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() hasana = new EventEmitter()
  count = 0
  value!:string;
  value1!:string;
  value2!:string;
  send(){
    this.hasana.emit(this.value);
    this.hasana.emit(this.value1);
    this.hasana.emit(this.value2);
  }
    incr(){
      this.hasana.emit(this.count++);
    }
    decr(){
      this.hasana.emit(this.count--);
    }
    reset(){
      this.hasana.emit(this.count=0);
    }
}
