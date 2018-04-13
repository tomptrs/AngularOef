import { Component, OnInit } from '@angular/core';
import  { IWeather } from './WeerInterface'
import { TomweerberichtenService } from '../tomweerberichten.service';

@Component({
  selector: 'app-weer2',
  templateUrl: './weer2.component.html',
  styleUrls: ['./weer2.component.scss']
})
export class Weer2Component implements OnInit {
/*
public isVisible:boolean = true;
 public temperature_max:string;

 berichten:IWeather[];
  constructor(private  weerberichtService:TomweerberichtenService) { 

      this.weerberichtService.Getberichten().subscribe(data=>{
        //console.log(data);
        this.temperature_max = data.main.temp_max;
        console.log((data);
      });
  
  }*/

  ngOnInit() {
  }

}
