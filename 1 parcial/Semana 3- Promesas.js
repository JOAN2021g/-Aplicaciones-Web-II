//se importa datos del archivo donde están los arreglos
const {Equipo, Torneo, Partido} = require ('./datos');
//funcion para buscar elemento en el arreglo partido
function BuscarPartido(id){
    return new Promise((resolve, reject)=>{
        partido = Partido.find((partido)=> partido.Partido_Id===id );
        //en caso de no encontrar saldra un mensaje DE ERROR
        if (!partido)
        {
            const error= new Error();
            error.message="No existe el partido";
            reject(error);
        }
        resolve(partido);

    })

}
//funcion para buscar elemento en el arreglo torneo
function BuscarTorneo(id){
    return new Promise((resolve, reject)=>{
        torneo =  Torneo.find((torneo)=>{return torneo.Id===id; });
        //en caso de no encontrar  saldra un mensaje DE ERROR
        if (!torneo)
        {
            const error =  new Error();
            error.message="NO EXISTE EL Torneo";
            reject(error);
        }
      
        resolve(torneo);
    })
}



//en caso que no exista error se mostrará los siguientes mensajes
BuscarPartido(2)
.then((partido)=>{ 
    console.log(`El partido ${partido.Partido_Id} es del torneo con el identificador ${partido.Torneo_Id} `);
    return BuscarTorneo(partido.Torneo_Id) 
})
.then((torneo)=>{
    console.log('El torneo con sus datos correspondientes',torneo);
})

.catch((error)=>{
    console.log(error.message);
})

