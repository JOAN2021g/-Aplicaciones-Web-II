import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Ipartido, Ipartidos } from '../../interfaces/Partidos';



@Injectable({
  providedIn: 'root'
})
export class partidosService {

  //BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea1_2p/Futbol/sis';


  constructor(private http: HttpClient) { }

  getpartidos(): Observable<Ipartidos> {
    return this.http.get<Ipartidos>(`${this.BASE_URL}/partidos`);
  }
  createpartidos(Partidos:any):Observable<Ipartido>{
    return this.http.post<Ipartido>(`${this.BASE_URL}/partidos`, Partidos);

  }
  deletepartido(id: string):Observable<Ipartido>{
    return this.http.delete<Ipartido>(`${this.BASE_URL}/partidos/${id}`);
  }
  updatepartido(id: string, partidos:any):Observable<Ipartido>{
    return this.http.put<Ipartido>(`${this.BASE_URL}/partidos/${id}`, partidos);
  }

}
