import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count=0;
  book1 = "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=626&ext=jpg&ga=GA1.1.1120660989.1707492254&semt=sph"
  title1 = "book1"
  book2="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?size=626&ext=jpg&ga=GA1.1.1120660989.1707492254&semt=sph"
  title2 = "book2"
  book3="https://img.freepik.com/premium-photo/stack-books-library-desk_23-2147845946.jpg?size=626&ext=jpg&ga=GA1.1.1120660989.1707492254&semt=sph"
  title3 = "book3"
  book4="https://img.freepik.com/premium-photo/book-pile-close-up-table-front-view-pile-book-stack-colorful-books-white-background_326694-62851.jpg?size=626&ext=jpg&ga=GA1.1.1120660989.1707492254&semt=sph"
  title4 = "book4"
  book5 = "https://img.freepik.com/free-photo/front-view-open-books-with-glasses_23-2148255840.jpg?size=626&ext=jpg&ga=GA1.1.1120660989.1707492254&semt=sph"
  title5 = "book5";
  incr(){
    this.count = this.count+1;
  }
  reset(){
    this.count=0;
  }
}
 