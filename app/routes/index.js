var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req, res, next) {
  axios.get('http://localhost:9000/api/teams')
    .then(dados => res.render('index', {dados: dados.data}))
    .catch(e => res.render('error', {error: e}));
})

router.get('/team/:id',function(req,res,next){
	axios.get('http://localhost:9000/api/teams/' +req.params.id)
	  .then(dados => res.render('team', {lista: dados.data}))
	  .catch(e => res.render('error', {error: e}));
  })
    

module.exports = router;
