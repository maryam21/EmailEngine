var express = require('express');
var router = express.Router();
var html_dir = './html/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EmailEngine' });
  //res.sendFile('index.html', { root: './public' })
});

module.exports = router;
