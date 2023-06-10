const { model, Schema } = require('mongoose');
//ATRIBUTOS DE LOS torneo
const TorneoSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'el nombre del torneo es necesaria'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        descripcion:{
            type: String,
            required: [ true, 'la descripcion del torneo es necesaria'],
            unique:true
        },
    }
);

module.exports = model('Torneo', TorneoSchema );