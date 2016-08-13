var express = require('express');
var router = express.Router();

var config = require('../config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { siteName: config.siteName });
});

module.exports = router;
