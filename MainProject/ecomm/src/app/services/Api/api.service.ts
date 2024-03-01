import { Injectable } from '@angular/core';
import {API_URL} from '../../Envirnoments/envirnoment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc:HttpClient ) { }
  getproducts(){
    return this.hc.get(`${API_URL}`)
  }
  getproduct(id:number){
    return this.hc.get(`${API_URL}/${id}`)
  }
}
