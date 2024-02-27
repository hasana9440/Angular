import { AfterContentChecked, AfterContentInit, Component,DoCheck,Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  @Input() count!:any;
  constructor(){
    console.log("construcre called child");
  }
}
