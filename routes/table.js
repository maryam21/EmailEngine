var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

var instances;

router.get('/', function(req, res, next) {
  var promise = list_instances();
  promise.then(function(result){
    instances = result;
    //console.log(instances);
  }, function(err){
    console.log(err);
  })
  res.render('table-datatable.handlebars', {instances: instances})
});

function deploy_instance(){
  request.post('http://109.236.88.80:3003/relays/deploy', (err, res, body) => {
  if(err){ return console.log(err); };
  })
};

function list_instances(){
  return new Promise(function(resolve, reject){
    request.get('http://109.236.88.80:3003/relays/list', (err, res, body) => {
      if(err){ reject(err); 
      }else { resolve(JSON.parse(body)); }
      //console.log(res.body);
    })
   });
};

router.post('/', function(req, res){  
  request.post({ url: 'http://109.236.88.80:3003/relays/c3cb09ae-3a3d-4c46-bcd6-c1c8d80bea8d/setup/dns/hostname', 
                 headers: { "domain": "myinstance220.com"} }, (err, res, body) => {
    if(err){ return console.log(err); };
    console.log(JSON.parse(body));
  });
  res.redirect('/table');
});

module.exports = router;