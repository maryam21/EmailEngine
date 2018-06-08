var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

var instances;
var id;

router.get('/', function(req, res, next) {
  //deploy_instance();
  list_instances()
  res.render('table-datatable.handlebars', {instances: instances})
});

function deploy_instance(){
  request.post('http://109.236.88.80:3003/relays/deploy', (err, res, body) => {
  if(err){ return console.log(err); };
  instances = res.body;
  id = res.body.id})
};

function list_instances(){
  request.get('http://109.236.88.80:3003/relays/list', (err, res, body) => {
    if(err){ return console.log(err); };
    console.log(res.body);
  })
};

module.exports = router;