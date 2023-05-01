const mongoose = require('mongoose');


const conexion = require('./Base_datos');

const Equipo = mongoose.model("Equipo",{Nombre: String, Descripcion:String, Serie: String});
      
conexion();

//Crear equipo
const crearequipo = async (newequipo) => {
    const equipo = new Equipo(newequipo);
    await equipo.save();
    console.log('Nuevo equipo registrado con éxito');
}
  //mostrar equipos
const Equipos = async () => {
  try {
      const equipo = await Equipo.find();
      console.log('Equipos:');
      console.log('**************');
      console.log(equipo);
      console.log('++++++++++++++');
  } catch (error) {
      console.error(error);
    }
}
  //actualizar equipo por medio de una funcion async
async function actualizarEquipo(id, datos) {
    try {
      const equipo = await Equipo.findByIdAndUpdate(id, datos, { new: true });
      console.log(`Equipo actualizado: ${equipo}`);
      return equipo;
    } catch (error) {
      console.error(`Error al actualizar equipo: ${error.message}`);
    }
  }
  //eliminar equipo
const Droop_Equipo= async (Nombre) => {
  try {
      const borrar_equipo = await Equipo.findByIdAndDelete(Nombre);
      if (borrar_equipo) {
        console.log('Equipo borrado correctamente');
      } else {
        console.log('No se pudo borrar');
      }
  } catch (error) {
      console.error(error);
    }
}

(async () => {
    //Creamos una nueva pelicula
     

    //Mostramos los equipos que tenemos
      await Equipos();

    
    //Actualizamos equipos
    const id = '644f0774b44d9d18119572d3';
    const datos = { Nombre: 'Talleres', Descripcion: 'Club Atlético River Plate' };
    await actualizarEquipo(id, datos);

    await Equipos();
    //Eliminamos equipos
      await Droop_Equipo('644f05ce6965a284b94da198');
      //volvemos a listar
      await Equipos();
    
      mongoose.connection.close();
})();