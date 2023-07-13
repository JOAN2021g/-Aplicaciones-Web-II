//se importa datos del archivo donde están los arreglos
const {Equipo, Torneo, Partido} = require ('./datos');
//Async para buscar el dato ingresado
async function BuscarPartido(id){
    partido = Partido.find((partido)=> partido.Partido_Id===id );
   //en caso de no encontrar saldra un mensaje DE ERROR
    if (!partido)
    {
        const error= new Error();
        error.message="No existe el partido";
        reject(error);
    }
    return partido;

}
//Async para buscar elemento en el arreglo torneo
async function BuscarTorneo(id){
    
        torneo =  Torneo.find((torneo)=>{return torneo.Id===id; });
       //en caso de no encontrar saldra un mensaje DE ERROR
        if (!torneo)
        {
            const error =  new Error();
            error.message="NO EXISTE EL Torneo";
            reject(error);
        }
    return torneo;
}
(async ()=>{
    try
    {  //LLAMAR FUNCIONES Y ENVIAR DATOS
        const partido  =   await BuscarPartido(1);
        const torneo =   await  BuscarTorneo(partido.Torneo_Id);
        partido.Torneo_Id = torneo;
        //MOSTRAR MENSAJES EN MODO CONSOLA LOS DATOS BUSCADOS EN LAS ANTERIORES FUNCIONES
        console.log(`El partido ${partido.Partido_Id} es del torneo con el identificador ${partido.Torneo_Id} `)
        console.log('El torneo con sus datos correspondientes',torneo);
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
