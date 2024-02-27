import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { idummy } from "../dummy";
import { Observable } from "rxjs";
@Injectable()
export class dummyservice{
    constructor(private http:HttpClient){

    }
    private url:string = "/assets/Data/dummydata.json"
    getdummy(): Observable<idummy[]>{
        return
            this.http.get<idummy[]>(this.url);
           
    }
}