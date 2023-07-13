const mongoose = require('mongoose');

const cadenaConexion= "mongodb+srv://Joan:joan200210@cluster0.z8m72mf.mongodb.net/Futbol";


//Crear las entidades
( async ()=>{
    try {
        const stateConnection = await mongoose.connect(cadenaConexion);
              
        const Equipo = mongoose.model("Equipo",{Nombre: String, Descripcion:String, Serie: String});
      
        const Torneo = mongoose.model("Torneo",{Nombre: String , Descripciont:String});
 
        const Partido = mongoose.model("Partido", 
        {   Partido_Id:Number,
            //Relaciones con las tablas maestras.
            Torneo_Id:{ type: mongoose.Types.ObjectId , ref:"Torneo" },
            Equipo_Id_1: { type: mongoose.Types.ObjectId , ref:"Equipo" },
            Equipo_Id_2: { type: mongoose.Types.ObjectId , ref:"Equipo" },
            Goles_1:Number,
            Gole_2:Number,
            Observacion:String
        });   
        
        //Ingreso de datos a las tablas
        const Equipo_1 =  new Equipo({Nombre:'Boca Juniors', Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'});
        const save_equipo = await  Equipo_1.save();

        const Equipo_2 =  new Equipo({Nombre:'River', Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'});
        const save_equipo_2 = await  Equipo_2.save();

        const Equipo_3 =  new Equipo({Nombre:'Talleres', Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'});
        const save_equipo_3 = await  Equipo_3.save();

        const Equipo_4 =  new Equipo({Nombre:'Colon', Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'});
        const save_equipo_4 = await  Equipo_4.save();

        const Torneo_1 = new Torneo({Nombre:'Liga argentina', Descripciont: 'Liga profesional Argentina'});
        const save_torneo = await  Torneo_1.save();
        
        const Torneo_2 = new Torneo({Nombre:'Liga ecuatoriana', Descripciont: 'Liga profesional Ecuador'});
        const save_torneo2 = await  Torneo_2.save();
        
        const Torneo_3 = new Torneo({Nombre:'Liga Boliviana', Descripciont: 'Liga profesional Bolivia'});
        const save_torneo3 = await  Torneo_3.save();
    
        const Partido_1 = new Partido({
            Partido_Id:1,
            Torneo_Id: save_torneo._id,
            Equipo_Id_1: save_equipo._id,
            Equipo_Id_2: save_equipo_2._id,
            Goles_1:4,
            Gole_2:3,
            Observacion:'Público con Banderas gigantes',
        });
        const Partido_2 = new Partido({
            Partido_Id:2,
            Torneo_Id: save_torneo2._id,
            Equipo_Id_1: save_equipo_3._id,
            Equipo_Id_2: save_equipo_4._id,
            Goles_1:0,
            Gole_2:1,
            Observacion:'Hinchas entraron en la cancha',
        });
        const Partido_3 = new Partido({
            Partido_Id:3,
            Torneo_Id: save_torneo._id,
            Equipo_Id_1: save_equipo._id,
            Equipo_Id_2: save_equipo_2._id,
            Goles_1:2,
            Gole_2:1,
            Observacion:'Jugadores se agredieron',
        });
        const save_partido = await Partido_1.save();
        const save_partido2 = await Partido_2.save();
        const save_partido3 = await Partido_3.save();

        
        //Imprimir datos con los ciclos 
        const print_equipo = await Equipo.find();
        for(let i=0;i<print_equipo.length;i++){
         console.log("Nombre: ",print_equipo[i].Nombre,"/ Descripcion: ",print_equipo[i].Descripcion,"/ Serie: ",print_equipo[i].Serie);
        }
         //Imprimir datos con los ciclos 
        const print_torneo = await Torneo.find();
        let i=0;
        while(i<print_torneo.length){
         console.log("Nombre: ",print_torneo[i].Nombre,"/ Descripcion: ",print_torneo[i].Descripcion);
         i++;
        }
        
          
         //Imprimir datos con los ciclos 
const print_partido = await Partido.find().populate("Torneo_Id").populate("Equipo_Id_1").populate("Equipo_Id_2");
print_partido.forEach(Partido => {
  console.log(Partido.Partido_Id, "Torneo", Partido.Torneo_Id.Nombre, " / Equipo 1: ",Partido.Equipo_Id_1.Nombre, "/ Equipo 2: ",Partido.Equipo_Id_2.Nombre ," / Gol_1: ", Partido.Goles_1, "/ Gol_2: ", Partido.Gole_2, " / Observación:", Partido.Observacion);
});

    }
catch (error) {
    console.log(error.message);
}
})();

  
 


