import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from './dsw-json/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }


  getProductJson(){
   return this.http.get("../../assets/product.json");
  }

}
