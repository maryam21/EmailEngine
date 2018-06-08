var express = require('express');
var router = express.Router();

router.post('/', function(req, res){  
  console.log('ooooy');
});

module.exports = router;