const mongoose = require('mongoose');
//Conexion a base de datos de mongodb
async function conexion () {
  try {
    await mongoose.connect('mongodb+srv://Joan:joan200210@cluster0.z8m72mf.mongodb.net/Futbol', {
    });

    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
  }
};
module.exports=conexion;