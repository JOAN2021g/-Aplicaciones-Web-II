import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  equiposComponent} from './components/equipo/equipos/equipos.component';
import {  torneosComponent} from './components/torneo/torneos/torneos.component';
import {  partidosComponent} from './components/partido/partidos/partidos.component';


const routes: Routes = [
  {
    path:'equipos',
    component:equiposComponent
  },
  {
    path:'torneos',
    component:torneosComponent
  },
  {
    path:'partidos',
    component:partidosComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
