const { conexion } = require("./conexion");
const { servidor, puerto } = conexion();

let equipo = []

//REST
//GET o CONSULTAR (TODO), apartado para poder mostrar los datos ingresados 
servidor.get('/',(req, res)=>{
    res.status(200).json(equipo)
})

//GET o CONSULTAR (INDIVIDUAL) permite la consulta individual
servidor.get('/:id',(req, res)=>{
    const {id} = req.params;
    const equiposelec = equipo.filter(p=> p.id === id)
    if (equiposelec.length>0)
    {
        return res.status(200).send(equiposelec[0])
    }
    res.status(404).send({
        message:"El identificador del equipo ingresado no existe."
    })
})

//POST o INSERTAR, permite insertar datos 
servidor.post('/e', (req, res)=>{

    const {body} = req; 
    equipo.push(body)
    res.status(200).send({
        message: 'Se ha insertado',
        response: body
    })
})

//PUT O PATCH - ACTUALIZAR, permite actualizar datos
servidor.put('/:id',(req, res)=>{
    const {id, Descripcion, Serie} = req.body
    const equipO = equipo.filter(p=>p.id === id) [0] || {}
    equipO.Descripcion = Descripcion;
    equipO.Serie = Serie;
    res.status(200).send({
        message: 'Se cambió con éxito',
        response: equipO
    })

})

//DELETE eliminar 
servidor.delete('/:id',(req, res)=>{
    const {id} = req.params;
    equipo = equipo.filter(p=> p.id !== id)
    res.status(200).send({
        message: `El equipo con identificador => ${id} se eliminó.`
    })
})
servidor.listen(puerto, ()=>{
    console.log(`Server running in http://localhost:${puerto}`);
})