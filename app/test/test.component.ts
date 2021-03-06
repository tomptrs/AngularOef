import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      console.log(params["id"])
    })
  }

}
