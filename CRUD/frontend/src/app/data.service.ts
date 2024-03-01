import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(`http://localhost:3000/books`);
  }
  deleteData(id:number){
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }
  postData(data:any){
      return this.http.post(`http://localhost:3000/books`,data);
  }
  putData(data:any,id:number){
      return this.http.put(`http://localhost:3000/books/${id}`,data);
  }
}
