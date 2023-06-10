const {Equipo, Torneo, Partido} = require ('./index');





function Lector_For (){

    for (const iterator of Partido) {
        EquipoAux= Equipo.find(e=> e.Id===iterator.Equipo_Id_1 ),
        EquipoA= Equipo.find(ver=> ver.Id==iterator.Equipo_Id_2),
        
        TorneoAux= Torneo.find(e=> e.Id===iterator.Torneo_Id)
        console.log(`El partido: ${iterator.Partido_Id} del Torneo: ${TorneoAux.Descripciont} entre el equipo: ${iterator.Equipo_Id_1}  ${EquipoAux.Descripcion} con ${iterator.Goles_1} goles y ${iterator.Equipo_Id_2}  ${EquipoA.Descripcion}  con ${iterator.Goles_1} goles  existieron las sisguientes ${iterator.Observacion}`);
        
    }

}


function Lector_while (){
    let i=0;
    while (i < Partido.length) {
      let partido = Partido[i];
         let EquipoAux= Equipo.find(e=> e.Id===partido.Equipo_Id_1 );
        let EquipoA= Equipo.find(ver=> ver.Id==partido.Equipo_Id_2);
        
        let TorneoAux= Torneo.find(e=> e.Id===partido.Torneo_Id);
        console.log(`El partido: ${partido.Partido_Id} del Torneo: ${TorneoAux.Descripciont} entre el equipo: ${partido.Equipo_Id_1}  ${EquipoAux.Descripcion} con ${partido.Goles_1} goles y ${partido.Equipo_Id_2}  ${EquipoA.Descripcion}  con ${partido.Goles_1} goles  existieron las sisguientes `);
         
      i++; 
    }


}

function Lector_each (){


  // Utilizando el método forEach
  Partido.forEach(function(Partido) {
    EquipoAux= Equipo.find(e=> e.Id===Partido.Equipo_Id_1 ),
    EquipoA= Equipo.find(ver=> ver.Id==Partido.Equipo_Id_2),
    
    TorneoAux= Torneo.find(e=> e.Id===Partido.Torneo_Id)
    console.log(`El partido: ${Partido.Partido_Id} del Torneo: ${TorneoAux.Descripciont} entre el equipo: ${Partido.Equipo_Id_1}  ${EquipoAux.Descripcion} con ${Partido.Goles_1} goles y ${Partido.Equipo_Id_2}  ${EquipoA.Descripcion}  con ${Partido.Goles_1} goles  existieron las sisguientes `);
  });

}






Lector_For();

Lector_each();
Lector_while();