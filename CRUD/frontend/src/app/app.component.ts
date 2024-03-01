import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 books:any[] = [];
 bookid!:number;
 bookname!:string;
 url!:string;
 showform = false;
 editMode = false;
 constructor(private ds:DataService){
    this.ds.getData().subscribe((data:any)=>{
        this.books = data;
    });
 }
 add(){
    this.showform = true;
    document.body.style.backgroundColor='rgba(0,0,0,0.4)';
 }

 stop(){
  this.showform = false;
  document.body.style.backgroundColor='white';
 }

 //submit button
 submit(){
  if(this.editMode){
    let newbook={
      id:this.bookid,
      title:this.bookname,
      image:this.url

    };//book details
    this.ds.putData(newbook,this.bookid).subscribe((data)=>{
      console.log('this is edit');
      console.log(data);
      window.location.reload();
      this.showform=false;
      
    })
  }
  else{
   
      let newbook={
      id:this.bookid,
      title:this.bookname,
      image:this.url

    };//book details
    this.ds.postData(newbook).subscribe((data)=>{
      console.log(data);
      console.log("this is submit1 ")
      window.location.reload();
      this.stop()
    });
    //console.log("this is submit ")
  }
 }
 remove(id:number){
   let d = confirm("are you sure ?");
   if(d){
    this.ds.deleteData(id).subscribe((data:any)=>{
      this.books=data;
     window.location.reload();
    })
   }
 }
 update(id:number){
  let msg = confirm("Are You sure want change ?");
  if(msg){
    console.log(id);
    this.editMode=true;
    this.showform=true;
  }
 }
}
