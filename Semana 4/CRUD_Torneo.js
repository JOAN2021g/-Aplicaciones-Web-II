const mongoose = require('mongoose');


const conexion = require('./Base_datos');

const Torneo = mongoose.model("Torneo",{Nombre: String , Descripciont:String});
      
conexion();

//Para crear torneo
const creartorneo = async (newtorneo) => {
    const torneo = new Torneo(newtorneo);
    await torneo.save();
    console.log('Nuevo Torneo registrado con éxito');
}
  //MOstrar torneos que estén registrados
const Torneos = async () => {
  try {
      const torneo = await Torneo.find();
      console.log('Torneos:');
      console.log('**************');
      console.log(torneo);
      console.log('++++++++++++++');
  } catch (error) {
      console.error(error);
    }
}
  //Aactuliazar torneos
async function actualizarTorneo(id, datos) {
    try {
      const torneo = await Torneo.findByIdAndUpdate(id, datos, { new: true });
      console.log(`Torneo actualizado: ${torneo}`);
      return torneo;
    } catch (error) {
      console.error(`Error al actualizar torneo: ${error.message}`);
    }
  }
  //Eliminar torneos
const Droop_Torneo= async (Nombre) => {
  try {
      const borrar_torneo = await Torneo.findByIdAndDelete(Nombre);
      if (borrar_torneo) {
        console.log('Torneo borrado correctamente');
      } else {
        console.log('No se pudo borrar');
      }
  } catch (error) {
      console.error(error);
    }
}

(async () => {
    //Creamos un torneo
    await creartorneo({
      Nombre:'Liga Colombiana', Descripciont: 'Liga profesional de Colombia'
    });


    //Mostramos los torneos
      await Torneos();

    
    //Actualizamos algun partido
    const id = '644f0e35bb679912828d9e14';
    const datos = { Nombre:'Liga ecuatoriana', Descripciont: 'Liga profesional de Ecuador' };
    await actualizarTorneo(id, datos);

    await Torneos();
    //Borramos un partido ya registrado
      await Droop_Torneo('644f0e99e2b25226dfa04ea4');
      //MOstramos torneos registrados
      await Torneos();
    
      mongoose.connection.close();
})();