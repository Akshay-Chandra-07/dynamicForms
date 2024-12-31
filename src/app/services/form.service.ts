import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }
  apiURL = "http://localhost:3000/api/questions"
  addData(data:any){
    console.log(data);
    return this.http.post(`${this.apiURL}/post`,data)
  }
  getData(){
    return this.http.get(`${this.apiURL}/get`)
  }

}
