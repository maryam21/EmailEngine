var express = require('express');
var router = express.Router();
var request = require('request');
var domains = '';

router.post('/', function(req, res){  
  request.post('http://109.236.88.80:3003/relays/c3cb09ae-3a3d-4c46-bcd6-c1c8d80bea8d/setup/dns/hostname', (err, res, body) => {
    if(err){ return console.log(err); };
    console.log(res.body);
    domains = res.body;
  });
  res.redirect('/table');
});

module.exports = router;