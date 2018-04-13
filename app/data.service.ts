import { Injectable } from '@angular/core';
import {User} from './interfaces/User';

@Injectable()
export class DataService {

  public user:User;

  constructor() { 
      this.user = new User();
      this.user.Naam = "Peeters";
      this.user.Voornaam = "Tom";
      console.log("Datservice");
      console.log(this.user);

  }

}
