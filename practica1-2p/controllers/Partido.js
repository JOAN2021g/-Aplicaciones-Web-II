const { response } = require('express')
const { Partido } = require('../models')

//CONSULTAR partido
const getPartidos= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, partidos ] = await Promise.all([
        Partido.countDocuments(query),
        Partido.find(query)
        .populate('ID_Torneo','nombre status descripcion')
        .populate('ID_Equipo','nombre status descripcion serie')
        .skip(Number(since))
        .limit(Number(limit))
    ])

    res.json({
    sum, 
    partidos
    })
    
}
//Consutla por id
const getPartido= async (req, res =  response)=>{
    const {id} = req.params
    const partidos=  await Partido.findById(id).populate('ID_Torneo ID_Equipo_1 ID_Equipo_2');
    res.json(partidos);
}
//Crear
const createPartido= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const data = {
        ...body,
        ID_Equipo_1: body.ID_Equipo_1,
        ID_Equipo_2: body.ID_Equipo_2,
        ID_Torneo: body.ID_Torneo,
        goles_equipo_1: body.goles_equipo_1,
        goles_equipo_2: body.goles_equipo_2,
        observaciones: body.observaciones
        
    }

    const partidos = new Partido(data);

    const newPartido =  await partidos.save();
    res.status(201).json(newPartido);
}
//ACTUALIZAR PARTIDO
const updatePartido= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedPartido =  await Partido.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPartido);
}
//ELIMINAR pARTIDO
const deletePartido= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPartido =  await Partido.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPartido);
}
//EXPORTAR
module.exports = {
    getPartidos,
    getPartido,
    createPartido,
    updatePartido,
    deletePartido
};