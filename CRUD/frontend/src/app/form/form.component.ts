import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  book : any[] = [];
  bookid:any;
  bookname:any;
  bookurl:any;
  done(val:any){
    console.log(val.form.value);
  }
}
