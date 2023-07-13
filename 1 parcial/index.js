let Equipo =[
    {Id: 1, Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'},
    {Id: 2, Descripcion: 'Equipo de la liga profesional Ecuatoriana', Serie: 'A'},
    {Id: 3, Descripcion: 'Equipo de la liga profesional Argentina ', Serie: 'A'},
    {Id: 4, Descripcion: 'Equipo de la liga profesional Ecuatoriana B', Serie: 'B'},
    {Id: 5, Descripcion: 'Equipo de la liga profesional Ecuatoriana B', Serie:'B'},
    
]
const Torneo=[
  {Id: 1, Descripciont: "Liga profesional Argentina"} ,
  {Id: 2, Descripciont: "Liga profesional Ecuatoriana"}, 
  {Id: 3, Descripciont: "Copa Argentina"} ,
  {Id: 4, Descripciont: "Liga profesional Ecuatoriana B"},  
  {Id: 5, Descripciont: "Copa Ecuador"}, 
]


const Partido=[
  {Partido_Id: 1, Torneo_Id: 1, Equipo_Id_1: 1, Equipo_Id_2: 3, Goles_1: 2, Gole_2: 1, Observacion:"Público con Banderas gigantes"},
  {Partido_Id: 2, Torneo_Id: 4, Equipo_Id_1: 4, Equipo_Id_2: 5, Goles_1: 3, Gole_2: 1, Observacion:"Técnico del equipo 1 con insultos"},
  {Partido_Id: 3, Torneo_Id: 3, Equipo_Id_1: 3, Equipo_Id_2: 1, Goles_1: 2, Gole_2: 2, Observacion:"Cancha en mal estado para jugar"},
  {Partido_Id: 4, Torneo_Id: 2, Equipo_Id_1: 4, Equipo_Id_2: 5, Goles_1: 4, Gole_2: 1, Observacion:"Hinchas dentro de la cancha"},
  {Partido_Id: 5, Torneo_Id: 5, Equipo_Id_1: 2, Equipo_Id_2: 5, Goles_1: 3, Gole_2: 3, Observacion:"Problemas con los comunicadores de arbitros"},
  
]



module.exports={Equipo, Torneo, Partido};