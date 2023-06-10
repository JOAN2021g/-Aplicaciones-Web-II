const { model, Schema } = require('mongoose');
//ATRIBUTOS DE partido
const PartidoSchema = Schema(
    {
        ID_Equipo_1: {
            type: Schema.Types.ObjectId,
            ref:'Partido',
            required: [ true, 'La identificacion del equipo#1 es obligatoria']
        },
        ID_Equipo_2: {
            type: Schema.Types.ObjectId,
            ref:'Partido',
            required: [ true, 'La identificacion del equipo#2 es obligatoria']
        },
        ID_Torneo: {
            type: Schema.Types.ObjectId,
            ref:'Partido',
            required: [ true, 'La identificacion del torneo es obligatoria']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        goles_equipo_1:{
            type: String,
            required: [ true, 'los goles del equipo 1 es obligatoria']
        },
        goles_equipo_2:{
            type:String,
            required: [ true, 'los goles del equipo 2 obligatoria']

        },
        observaciones:{
            type:String,
            required: [ true, 'Se debe ubicar la observación del partido']
        },
       
    }
);

PartidoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Partido', PartidoSchema );

