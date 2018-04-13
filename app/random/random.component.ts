import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  private randomGetal:number;
  public gokGetal:number;
  public resultaat:number;
  constructor() { 
  this.GenerateGetal();
  }

  ngOnInit() {
  }

  GenerateGetal(){
    this.randomGetal = Math.round(Math.random()*1000);
  }

  Validate(){
    this.resultaat = Number(this.gokGetal)-this.randomGetal;
    
  }

  Opnieuw(){
    this.GenerateGetal();
  }

}
