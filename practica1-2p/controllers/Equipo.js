const { response } = require('express');
const { Equipo } = require('../models');

//CONSULTAR EQUIPO
const getEquipo = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, equipos ] = await Promise.all([
        Equipo.countDocuments(query),
        Equipo.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      equipos
    })
}
//CONSULTA POR ID
const getequipo = async (req, res= response)=>{
    const {id} = req.params
    const equipos=  await Equipo.findById(id);
    res.json(equipos);
}
//INSERTAR 
const createEquipos = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existEquipos =  await Equipo.findOne({nombre: body.nombre})

    if (existEquipos)
    {
        return res.status(400).json({
            msg:`El equipo ${ exist.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre,
        descripcion: body.descripcion,
        serie: body.serie,
    }

    const equipos = new Equipo(data);

    const newequipo =  await equipos.save();
    res.status(201).json(newequipo);
}
//ACTUALIZAR 
const updateEquipo = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const categoryEquipo=  await Equipo.findByIdAndUpdate(id,data, {new: true} )
    res.json(categoryEquipo);
}
//ELIMINAR 
const deleteEquipo =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedEquipo =  await Equipo.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedEquipo);
}
//EXPORTAR
module.exports ={
    getEquipo,
    getequipo,
    createEquipos,
    updateEquipo,
    deleteEquipo
}