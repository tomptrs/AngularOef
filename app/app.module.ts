import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';
import {FormsModule} from "@angular/forms";


import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import {TomServiceService} from './tom-service.service';
import {SpotifyService} from './spotify.service';
import {DataService} from './data.service';
import { WeerComponent } from './weer/weer.component';
import { Weer2Component } from './weer2/weer2.component';
import { RandomComponent } from './random/random.component';
import { WorkoutComponent } from './workout/workout.component';
import {MusicComponent} from './music/music.component';
import {TomweerberichtenService} from './tomweerberichten.service';
import { AbcComponent } from './abc/abc.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

const routes:Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"test/:id",component:TestComponent},
  {path:"home",component:HomeComponent},
  {path:"weer",component:WeerComponent},
  {path:"weer2", component:Weer2Component},
  {path:"random", component:RandomComponent},
  {path:"workout", component:WorkoutComponent},
  {path:"music", component:MusicComponent},
  {path:"map", component:MapComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    WeerComponent,
    Weer2Component,
    RandomComponent,
    WorkoutComponent,
    MusicComponent,
    AbcComponent,
    MapComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{useHash:true}),
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcoOcJSd7KC1D4ChtVX_YXU3V6zbcnfkI'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [NavbarService,TomServiceService, DataService,SpotifyService,TomweerberichtenService],
  bootstrap: [AppComponent],
  exports: [ NavbarComponent, LinksComponent, LogoComponent],
})
export class AppModule {
}
