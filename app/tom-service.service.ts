import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RootObject} from './interfaces/WeerInterface';

@Injectable()
export class TomServiceService {

  data:any[];
  constructor(private http:HttpClient) {
    this.data = [{
      id:1,
      name:"Tom"},
      {id:2,
      name:"Mieke"},
      {id:3,name:"Hannes"},{id:4, name:"Arno"}];
   }

   GetData(){
    return this.data;
   }

   GetWeerBericht(){
     return this.http.get<RootObject>("http://api.openweathermap.org/data/2.5/weather?q=antwerpen&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53");
   }
  }