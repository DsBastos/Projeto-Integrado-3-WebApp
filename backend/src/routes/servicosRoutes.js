const express = require('express'); 
const router = express.Router(); 

const servicosController = require('../controllers/servicosController');

router.get('/listServicos', servicosController.servico_listar)

router.post('/updateServicos/:id', servicosController.servico_update)

module.exports = router;