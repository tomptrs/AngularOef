import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Results} from './interfaces/IMusic'
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

export class MusicData{
    url:string;
    name:string;
  }

@Injectable()
export class SpotifyService {

   client_id:string = '707cb126db0947bc868599bfcedfa2e4'; // Your client id
  client_secret:string = 'ed74690b7c06405ca99ca96d4831a034'; // Your secret
   redirect_uri = 'REDIRECT_URI'; // Your redirect uri
  
   constructor(private http:HttpClient) { 

   }

   Authorize(){
   //  return this.http.get<any>("https://accounts.spotify.com/authorize/?client_id=707cb126db0947bc868599bfcedfa2e4&response_type=code&redirect_uri=http://localhost:4200");

     var scopes = 'user-read-private user-read-email';
 return this.http.get("https://accounts.spotify.com/authorize&client_id=707cb126db0947bc868599bfcedfa2e4");
   }


   SearchMusic(str:string){
        let searchURL:string = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+str+"&api_key=8115e09b4393083aae687372880de7fe&format=json";
        return this.http.get(searchURL);
    

   }

   SearchMusic2(str:string){
    let searchURL:string = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+str+"&api_key=8115e09b4393083aae687372880de7fe&format=json";
    return this.http.get<Results>(searchURL);


}
   

}
