import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import { Results, Artist } from '../interfaces/IMusic';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  angularLogo = 'https://lastfm-img2.akamaized.net/i/u/300x300/92c3ee08d83a4e57ce8dee9c18ae4fef.png';
  artists:Artist[];

  results:Results;
  constructor(private service:SpotifyService) { 
    this.artists = [];
  }

  ngOnInit() {
  }

 
  SearchMusic(str:string){
    console.log(str)
   /* this.service.SearchMusic(str).subscribe(data =>{
      this.artists = data.results.artistmatches;
      console.log(this.artists);
    })*/
    this.service.SearchMusic2(str).subscribe(data=>{
      this.results = data;
     console.log(this.results.results.artistmatches);
      this.artists = this.results.results.artistmatches;
      //console.log("test")
      //console.log(this.artists);
    })
  }

  Authorize(){
    this.service.Authorize().subscribe( data => {
      console.log(data);


    });
  }

}
