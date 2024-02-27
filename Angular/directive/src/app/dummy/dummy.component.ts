import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
 
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
 @Input() name:any;
 @Input() age:any;

}
