const { response } = require('express');
const { Torneo } = require('../models');

//CONSULTAR torneo GENERAL
const getTorneos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, torneos ] = await Promise.all([
        Torneo.countDocuments(query),
        Torneo.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
    sum, 
    torneos
    })
}
//CONSULTA torneo por id
const getTorneo= async (req, res= response)=>{
    const {id} = req.params
    const torneos=  await Torneo.findById(id);
    res.json(torneos);
}
//INSERTAR NUEVOS torneos 
const createTorneos = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existTorneos =  await Torneo.findOne({descripcion: body.descripcion})

    if (existTorneos)
    {
        return res.status(400).json({
            msg:`Este torneo ${ existTorneos.descripcion } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre,
        descripcion: body.descripcion,
        

    }

    const torneos = new Torneo(data);

    const newTorneos =  await torneos.save();
    res.status(201).json(newTorneos);
}
//ACTUALIZAR toreno ubicando ID
const updateTorneo = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const categoryTorneo =  await Torneo.findByIdAndUpdate(id,data, {new: true} )
    res.json(categoryTorneo);
}
//ELIMINAR torneo ubicando ID
const deleteTorneo =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedtorneo =  await Torneo.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedtorneo);
}
//EXPORTAR
module.exports ={
    getTorneos,
    getTorneo,
    createTorneos,
    updateTorneo,
    deleteTorneo
}
