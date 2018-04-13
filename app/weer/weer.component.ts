import { Component, OnInit } from '@angular/core';
import { TomServiceService } from '../tom-service.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-weer',
  templateUrl: './weer.component.html',
  styleUrls: ['./weer.component.scss']
})
export class WeerComponent implements OnInit {

  ngOnInit() {
    
  }
  /*public BoolTest:boolean = true;
  public getallen:number[];
  public username:string;

  constructor(private service:TomServiceService, private dataService:DataService) {
    this.getallen = [5,3,1,5,2,3,9,9,2];
    this.username = this.dataService.user.Voornaam + " " + this.dataService.user.Naam;
   console.log(this.dataService);
  }

  ngOnInit() {
    this.service.GetWeerBericht().subscribe((data)=>{
      console.log(data.weather);
    });
  }

  ChangeBool(){
    this.BoolTest = !this.BoolTest;
    console.log(this.BoolTest);
  }
*/
}
