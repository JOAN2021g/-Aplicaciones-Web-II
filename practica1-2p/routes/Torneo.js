const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    getTorneos,
    getTorneo,
    createTorneos,
    updateTorneo,
    deleteTorneo
    } = require('../controllers').Plato;

const { validateFields } = require('../middlewares')

const router = Router();


//CONSULTA GENERALL
router.get('/', getTorneos);

//CONSULTA INDIVIDUAL
router.get('/:id', [ 
    check('id', 'Este no es un ID correcto').isMongoId() 
 ]  , getTorneo);

//INSERTAR
router.post('/',[
    check('nombre', 'El nombre es necesario').not().isEmpty(),
    check('descripcion', 'La descripcion es necesaria').not().isEmpty(),
    validateFields
] , createTorneos)

//ACTUALIZAR
router.put('/:id', updateTorneo)

//ELIMINAR
router.delete('/:id',[
    check('id','Debe ser un id valido').isMongoId()
], deleteTorneo)

module.exports = router;