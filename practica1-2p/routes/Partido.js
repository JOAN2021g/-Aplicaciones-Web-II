const { Router } = require('express')
const { check } =  require('express-validator')

const { getRegistros,
    getPartidos,
    getPartido,
    createPartido,
    updatePartido,
    deletePartido
    } = require('../controllers').Registro;

const { validateFields } = require('../middlewares')

const router = Router();
//CONSULTA INDIVIDULA
router.get('/', getPartidos);

//CONSULTA ID
router.get('/:id', [ 
    check('id', 'no es correcto').isMongoId() 
 ]  , getPartido);

//INSERTAR DATOS
router.post('/',[
    check('ID_Equipo_1', 'id no valido de equipo_1').not().isEmpty(),
    check('ID_Equipo_2', 'id no valido de equipo_2').not().isEmpty(),
    check('ID_Torneo', 'id no valido de paciente').not().isEmpty(),
    check('goles_equipo_1', 'goles de equipo 1 no valido').not().isEmpty(),
    check('goles_equipo_1', 'goles de equipo 1 no valido').not().isEmpty(),
    check('observaciones', 'observaciones no valida').not().isEmpty(),
    
    validateFields
] , createPartido)

//ACTUALIZAR
router.put('/:id', updatePartido)

//ELIMINAR
router.delete('/:id',[
    check('id','no valido').isMongoId()
], deletePartido)

module.exports = router;