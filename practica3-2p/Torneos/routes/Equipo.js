const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getEquipo,
    getequipo,
    createEquipos,
    updateEquipo,
    deleteEquipo
} = require('../controllers').Equipo;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getEquipo );


router.get('/:id'
,check('id', 'Este no es un ID valido').isMongoId()
 , getequipo );


 router.post('/',[
    check('nombre', 'El nombre del equipo es necesario').not().isEmpty(),
    check('descripcion', 'La descripcion es necesaria').not().isEmpty(),
    check('serie', 'la serie del equipo es necesario').not().isEmpty(),
    validateFields
], createEquipos);


 router.put('/:id', updateEquipo);


 router.delete('/:id',[
    check('id','Debe ser un id valido').isMongoId()
], deleteEquipo);

module.exports = router;