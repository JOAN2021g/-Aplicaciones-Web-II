import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';


import { Itorneo, ITorneos } from '../../interfaces/Torneos';



@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  // BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea1_2p/Futbol/sis';

  constructor(private http: HttpClient) { }

  gettorneo(): Observable<ITorneos> {
    return this.http.get<ITorneos>(`${this.BASE_URL}/torneos`);
  }
  // getpaciente(id: string):Observable<Ipaciente>{
  //   return this.http.get<Ipaciente>(`${this.BASE_URL}/paciente/${id}`);
  // }
  createtorneo(torneo:any):Observable<Itorneo>{
    return this.http.post<Itorneo>(`${this.BASE_URL}/torneos`, torneo);

  }
  deletetorneo(id: string):Observable<Itorneo>{
    return this.http.delete<Itorneo>(`${this.BASE_URL}/torneos/${id}`);
  }
  updatetorneoid(id: string, torneo:any):Observable<Itorneo>{
    return this.http.put<Itorneo>(`${this.BASE_URL}/torneos/${id}`, torneo);
  }
}
