var express = require('express');
var router = express.Router();
const Teams = require('../controllers/teams')

router.get('/teams', function(req, res) {
  Teams.listar()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/teams/:id', function(req, res) {
  Teams.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/teams/:id/members/:id', function(req, res) {
  Teams.membro()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.post('/teams', function(req, res){
  Teams.inserir(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: e}))
})

router.delete('/teams/:id', function(req, res) {
  Teams.remover(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;