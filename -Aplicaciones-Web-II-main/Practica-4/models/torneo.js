const { model, Schema } = require('mongoose');

const TorneoSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'La descripción del torneo es necesaria'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },

    }
);


module.exports = model('torneo', TorneoSchema );
