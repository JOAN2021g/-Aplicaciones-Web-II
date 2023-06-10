const { response } = require('express');
const { equipo } = require('../models');


const getequipos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, equipo ] = await Promise.all([
        equipo.countDocuments(query),
        equipo.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      peliculas
    })
}

const getPelicula = async (req, res= response)=>{
    const {id} = req.params
    const pelicula=  await Pelicula.findById(id);
    res.json(pelicula);
}
const createPelicula = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existPelicula =  await Pelicula.findOne({nombre: body.nombre})

    if (existPelicula)
    {
        return res.status(400).json({
            msg:`La categoria ${ existePelicula.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre,
        categoria: body.categoria,
        actores: body.actores
    }

    const pelicula = new Pelicula(data);

    const newPelicula =  await pelicula.save();
    res.status(201).json(newPelicula);
}
const updatePelicula = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const peliculaUpdated =  await Pelicula.findByIdAndUpdate(id,data, {new: true} )
    res.json(peliculaUpdated);
}
const deletePelicula=  async (req, res= response)=>{
    const {id} = req.params;
    const deletedPelicula=  await Pelicula.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPelicula);
}

 module.exports ={
    createPelicula,
    getPelicula,
    getPeliculas,
    updatePelicula,
    deletePelicula
 }