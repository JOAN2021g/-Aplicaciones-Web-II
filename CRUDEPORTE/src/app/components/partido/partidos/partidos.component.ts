import { Component } from '@angular/core';

import { partidosService } from '../../../services/partidos/partidos.service';
import { Ipartido,Ipartidos } from '../../../interfaces/Partidos';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class partidosComponent {

  datapartidos:Ipartidos = { sum:0, partidos:[] };
  title:string = 'partidos';

  constructor(private partidosService: partidosService){}

  ngOnInit() {
    this.partidosService.getpartidos()
     .subscribe(data => {
       this.datapartidos= data;
       console.log(data)
     })
  }
  submitData(value: Ipartido) {
    let body:Ipartido = {
      ID_Equipo_1: value.ID_Equipo_1,
      ID_Equipo_2: value.ID_Equipo_2,
      Observacion: value.Observacion,
      Goles_equipo_1: value.Goles_equipo_1,
      Goles_equipo_2: value.Goles_equipo_2,
      ID_Torneo: value.ID_Torneo
    }

    this.partidosService.createpartidos(body)
      .subscribe(response => {
        console.log(response)
      })
  }


}
