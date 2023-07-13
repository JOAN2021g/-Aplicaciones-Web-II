import { Component } from '@angular/core';

import { TorneosService } from '../../../services/torneos/torneos.service';
import { ITorneos,Itorneo } from '../../../interfaces/Torneos';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class torneosComponent {
  
  datatorneos:ITorneos = { sum:0, torneos:[] };
  title:string = 'torneos';
  torneos: Itorneo[] = [];
  constructor(private TorneosService: TorneosService){}
   
  ngOnInit() {
    this.TorneosService.gettorneo()
     .subscribe(data => {
       this.datatorneos= data;
       this.torneos = data.torneos;
       console.log(data)
     })
  }
  submitData(value: Itorneo) {
    let body:Itorneo = {
      nombre: value.nombre,
      descripcion: value.descripcion,
     
    }

   

    this.TorneosService.createtorneo(body)
      .subscribe(response => {
        console.log(response)
      })

      this.TorneosService.deletetorneo(body.nombre).subscribe(response => {
        console.log(response)


        
  })
  }
  deletetorneo(nombre: string): void {
    this.TorneosService.deletetorneo(nombre).subscribe(
      response => {
        // Acciones después de eliminar el torneo
      },
      error => {
        // Manejo de errores
      }
    );
  }
  


}
