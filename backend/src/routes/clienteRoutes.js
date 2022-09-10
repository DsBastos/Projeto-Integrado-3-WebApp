const express = require('express'); 
const router = express.Router(); 

const clienteController = require('../controllers/clienteController');

router.get('/listCliente', clienteController.cliente_list)

router.get('/list3Cliente', clienteController.cliente_list3)

router.get('/encontrarCLiente/:id', clienteController.cliente_encontrar)

router.post('/criarCliente', clienteController.cliente_criar)

module.exports = router;