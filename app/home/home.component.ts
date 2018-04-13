import { Component, OnInit } from '@angular/core';
import {TomServiceService} from '../tom-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any[];
  constructor(private service: TomServiceService) { }

  ngOnInit() {
    this.data = this.service.GetData();
    console.log(this.data);
  }

}
