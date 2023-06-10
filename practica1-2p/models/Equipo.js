const { model, Schema } = require('mongoose');

//ATRIBUTOS DE equipo
const EquipoSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del equipo es necesario'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        descripcion:{
            type: String,
            required: [ true, 'La descripción del equipo es necesario'],
            unique:true,
        },
        serie:{
            type: String,
            required: [ true, 'La serie del equipo es necesario'],
            unique:true,
        },
        
        
    }
);

module.exports = model('Equipo', EquipoSchema );