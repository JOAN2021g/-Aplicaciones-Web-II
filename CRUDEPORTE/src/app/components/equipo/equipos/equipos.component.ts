import { Component } from '@angular/core';

import { equiposService } from '../../../services/equipos/equipos.service';
import { Iequipo,IEquipos } from '../../../interfaces/Equipos';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class equiposComponent {

  dataequipos:IEquipos = { sum:0, equipos:[] };
  title:string = 'equipo';

  constructor(private equiposService: equiposService){}

  ngOnInit() {
    this.equiposService.getequipos()
     .subscribe(data => {
       this.dataequipos= data;
     })
  }
  submitData(value: Iequipo) {
    let body:Iequipo = {
      nombre: value.nombre,
      descripcion: value.descripcion,
      serie:value.serie
    }

    this.equiposService.createquipos(body)
      .subscribe(response => {
        console.log(response)
      })
  }
  deleteequipo(nombre: string): void {
    this.equiposService.deletequipo(nombre).subscribe(
      response => {
        // Acciones después de eliminar el torneo
      },
      error => {
        // Manejo de errores
      }
    );
  }
  

}
