import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { equiposComponent } from './components/equipo/equipos/equipos.component';
import { torneosComponent } from './components/torneo/torneos/torneos.component';
import { partidosComponent } from './components/partido/partidos/partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    equiposComponent,
    torneosComponent,
    partidosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
