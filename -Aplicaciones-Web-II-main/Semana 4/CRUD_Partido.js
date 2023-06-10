const mongoose = require('mongoose');


const conexion = require('./Base_datos');
const Equipo = mongoose.model("Equipo",{Nombre: String, Descripcion:String, Serie: String});
      
const Torneo = mongoose.model("Torneo",{Nombre: String , Descripciont:String});
const Partido = mongoose.model("Partido",{Partido_Id:Number,
    //Aplicando relaciones de sus respectivos modelos apartir de sus ID.
    Torneo_Id:{ type: mongoose.Types.ObjectId , ref:"Torneo" },
    Equipo_Id_1: { type: mongoose.Types.ObjectId , ref:"Equipo" },
    Equipo_Id_2: { type: mongoose.Types.ObjectId , ref:"Equipo" },
    Goles_1:Number,
    Gole_2:Number,
    Observacion:String});
      
conexion();

//Crear partido
const crearpartido = async (newpartido) => {
    const partido = new Torneo(newpartido);
    await partido.save();
    console.log('Nuevo partido registrado con éxito');
}
  //Mostrar partidos
const Partidos = async () => {
  try {
      const partido = await partido.find();
      console.log('Partidos:');
      console.log('**************');
      console.log(partido);
      console.log('++++++++++++++');
  } catch (error) {
      console.error(error);
    }
}
  //Actualizar partido
async function actualizarpartido(id, datos) {
    try {
      const partido = await Partido.findByIdAndUpdate(id, datos, { new: true });
      console.log(`Partido actualizado: ${partido}`);
      return partido;
    } catch (error) {
      console.error(`Error al actualizar Partido: ${error.message}`);
    }
  }
    //Eliminar partido
const Droop_Partido= async (Partido_Id) => {
  try {
      const borrar_partido = await Partido.findByIdAndDelete(Partido_Id);
      if (borrar_partido) {
        console.log('Partido borrado correctamente');
      } else {
        console.log('No se pudo borrar');
      }
  } catch (error) {
      console.error(error);
    }
}

(async () => {
    //Creamos un nuevo partido
    await crearpartido({
        Partido_Id:3,
        Torneo_Id: '644f0e35bb679912828d9e14',
        Equipo_Id_1: '644f0e35bb679912828d9e10',
        Equipo_Id_2:  '644f0e35bb679912828d9e12',
        Goles_1:1,
        Gole_2:1,
        Observacion:'Técnicos insultando al arbitro',
    });


    //Mostramos los partidos
      await Partidos();

    
    //Actualizamos un partido
    const id = '644f1dd6a0d4c66478765a4f';
    const datos = { Partido_Id:1,
        Torneo_Id: '644f1dd6a0d4c66478765a4d',
        Equipo_Id_1: '644f1dd5a0d4c66478765a47',
        Equipo_Id_2: '644f1dd5a0d4c66478765a45',
        Goles_1:0,
        Gole_2:0,
        Observacion:'Público tirando objetos a la cancha', };
    await actualizarpartido(id, datos);

    await Partidos();
    //eliminamos un partido
      await Droop_Partido('644f1dd6a0d4c66478765a51');
      //ostrar partidos
      await Partidos();
    
      mongoose.connection.close();
})();