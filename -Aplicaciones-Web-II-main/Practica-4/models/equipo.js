const { model, Schema } = require('mongoose');

const EquipoSchema = Schema(
    {
        descipcion:{
            type: String,
            required: [ true, 'La descripción del equipo es necesario'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        serie:{
            type: String,
            required: [ true, 'La serie del equipo es necesario'],
        },
    }
);


module.exports = model('equipo', EquipoSchema = Schema );
