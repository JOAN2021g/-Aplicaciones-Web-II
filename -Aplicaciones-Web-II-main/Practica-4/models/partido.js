const { model, Schema } = require('mongoose');

const PartidoSchema = Schema(
    {
        id_equipo: {
            type: Schema.Types.ObjectId,
            ref:'equipo',
            required: [ true, 'La identificación del equipo debe ser necesaria']
        },
        id_torneo: {
            type: Schema.Types.ObjectId,
            ref:'Premio',
            required: [ true, 'La identificación del tonero debe ser necesario']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        goles_equipo_1:{
            type: Number,
            required: [ true, 'Los goles del primer equipo son necesarios'],
        },
        goles_equipo_2:{
            type: Number,
            required: [ true, 'Los goles del segundo equipo son necesarios'],
        },
        observacion:{
            type: String,
            required: [ true, 'La observación del partido es necesaria'],
        },
        
    }
);

PartidoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('partido', PartidoSchema );
