const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        //PATHS
        this.paths = {
           
            partidos: 'c',
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/tarea1_2p/Futbol', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    //CONFIGURACION DE RUTAS
    routes(){
        
        this.app.use(this.paths.partidos, require('./routes/Partido')   )
        
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}

module.exports = Server;