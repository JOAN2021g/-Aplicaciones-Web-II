//npmjs
const cors = require("cors");
const express = require("express");

//se crean una función para que retorne la conexion creada
function conexion() {
    //npmjs
    const servidor = express();
    const puerto = 8088;
    servidor.use(cors()).use(express.json())
    servidor.use('/public', express.static(__dirname+'/public'))
    return { servidor, puerto };
}
//Se expora los modulos
module.exports = { conexion };