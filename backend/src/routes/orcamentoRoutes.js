const express = require('express'); 
const router = express.Router(); 

const orcamentoController = require('../controllers/orcamentoController');

router.get('/listOrcamento', orcamentoController.orcamento_listar)

router.get('/encontrarOrcamento/:id', orcamentoController.orcamento_encontrar)

router.post('/criarOrcamento', orcamentoController.orcamento_criar)

router.post('/editarOrcamento/:orcamento_id', orcamentoController.orcamento_update)

module.exports = router;