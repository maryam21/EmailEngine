var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('table-datatable.handlebars');
});

module.exports = router;