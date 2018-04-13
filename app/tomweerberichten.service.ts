import { Injectable } from '@angular/core';
import { IWeather } from './weer2/WeerInterface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TomweerberichtenService {

  private berichten:IWeather[];
  
  constructor(private http:HttpClient) {

    /*this.berichten  = [
      {
        Description:"het is zonnig",
        Location : "Antwerpen",
        SunRise: new Date("2018-03-01"),
        SunSet:new Date(),
        Temperature:20
      },
      {
        Description:"het is HEEL zonnig",
        Location : "Antwerpen",
        SunRise: new Date(),
        SunSet:new Date(),
        Temperature:24
      }
    ]*/

   }

   public Getberichten(){
     return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=antwerpen&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53");
   }

}
