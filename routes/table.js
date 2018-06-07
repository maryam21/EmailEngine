var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

router.get('/', function(req, res, next) {
  res.render('table-datatable.handlebars');
  deploy_instance();
});

function deploy_instance(){
  request.post('http://109.236.88.80:3003/relays/deploy', (err, res, body) => {
  if(err){ return console.log(err); }
  console.log(res.body);
})};

module.exports = router;