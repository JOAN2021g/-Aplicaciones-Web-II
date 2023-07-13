import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Iequipo, IEquipos } from '../../interfaces/Equipos';

@Injectable({
  providedIn: 'root'
})
export class equiposService {

  //BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea1_2p/Futbol/sis';


  constructor(private http: HttpClient) { }

  getequipos(): Observable<IEquipos> {
    return this.http.get<IEquipos>(`${this.BASE_URL}/equipos`);
  }
  createquipos(equipos:any):Observable<Iequipo>{
    return this.http.post<Iequipo>(`${this.BASE_URL}/equipos`, equipos);

  }
  deletequipo(id: string):Observable<Iequipo>{
    return this.http.delete<Iequipo>(`${this.BASE_URL}/equipos/${id}`);
  }
  updatequipo(id: string, equipos:any):Observable<Iequipo>{
    return this.http.put<Iequipo>(`${this.BASE_URL}/equipos/${id}`, equipos);
  }

}
