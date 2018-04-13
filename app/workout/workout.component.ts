import { Component, OnInit } from '@angular/core';
import {IOefening} from './IOefening';
import {WorkOutPlan} from './WorkOutPlan';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  public Oefeningen:IOefening[];
  public ActieveOefening:IOefening;
  public RustOefening:IOefening;
  public isDone = false;
  public Plan:WorkOutPlan[];
  public selectedValue;

  constructor() { 

    this.Plan = [];//new WorkOutPlan();
    this.GenerateOefeningen();
    this.StartOefening();
    
  }

  ngOnInit() {
  }


  GenerateOefeningen(){
    this.Plan[0] = new WorkOutPlan();
    this.Plan[0].Naam = "Plan 1";
    this.Plan[0].Oefeningen = [{
      Titel:"Pompen",
      Beschrijving:"We gaan wat pompen",
      Tijdsduur:5

    },
    {
      Titel:"Situps",
      Beschrijving:"We gaan wat situppen",
      Tijdsduur:5

    },
    {
      Titel:"pullup",
      Beschrijving:"We gaan wat pulluppen",
      Tijdsduur:5

    },
    {
      Titel:"niks",
      Beschrijving:"We gaan wat niksen",
      Tijdsduur:5

    }
  ];

  this.Plan[0].RustOefening = {
    Titel:"Rust",
    Beschrijving:"We gaan Rusten",
    Tijdsduur:5
  }

  this.Plan[0].Oefeningen = this.Plan[0].Oefeningen.reverse();

  this.selectedValue = this.Plan[0];

  this.Plan[1] = new WorkOutPlan();
  this.Plan[1].Oefeningen = [{
    Titel:"oefening plan 2",
    Beschrijving:"We gaan wat pompen in plan 2",
    Tijdsduur:5

  },
  {
    Titel:"Situps",
    Beschrijving:"We gaan wat situppen in plan 2",
    Tijdsduur:5

  }];

  this.Plan[1].Naam = "Plan 2";
  this.Plan[2] = new WorkOutPlan();
  this.Plan[2].Naam = "Plan 3";
  this.Plan[3] = new WorkOutPlan();
  this.Plan[3].Naam = "Plan 4";
  

  }


  StartOefening(){
    console.log("selected value")
    console.log(this.selectedValue);
    if(this.Plan[0].Oefeningen.length > 0){
        if(this.ActieveOefening == null)    
        this.ActieveOefening = this.Plan[0].Oefeningen.pop();
        else{
      
          if(this.ActieveOefening.Titel != "Rust")
              this.ActieveOefening = this.RustOefening;
          else
            this.ActieveOefening = this.Plan[0].Oefeningen.pop();

        } 
      this.LoopOefeningen();
    }
  else{
    this.isDone = true;
    console.log("done")
  }
  }

  id:any;
  teller:number;
  LoopOefeningen(){
    
    this.teller = this.ActieveOefening.Tijdsduur;

    this.id = setInterval(() => {
      if(this.teller == 0){
        this.StopOefening();
      }
      this.teller--;
    }, 1000);
  }

  StopOefening(){
    console.log("stop")
    clearInterval(this.id);
    this.StartOefening();
  }

}
