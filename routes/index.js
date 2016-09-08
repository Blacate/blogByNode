var express = require('express');
var router = express.Router();
var config = require('../config.js');
var articleController = require('../controllers/article');
var categoryController = require('../controllers/category');
var linkController = require('../controllers/link');
var tagController = require('../controllers/tag')

//site information
router.use(function (req, res, next) {
  res.locals.name = config.name;
  res.locals.declaration = config.declaration;
  res.locals.siteName = config.siteName;
  next();
});

//data of blog
router.use(function (req, res, next) {
  articleController.fetchNumber()
      .then(function (result) {
        res.locals.article = result.articleNum;
        res.locals.category = result.categoryNum;
        res.locals.tag = result.tagNum;
      });

  next();
});

//recent article
router.use(function (req, res, next) {
  articleController.fetchRecent()
      .then(function(result) {
        res.locals.recentArticles = result;
      });
  next();
});

//category
router.use(function (req, res, next) {
  tagController.fetchAll()
      .then(function (result) {
        res.locals.categorys = result;
      });
  next();
});


/* GET home page. */
router.get('/', function(req, res) {
  var _pageId = 1;
  Article.fetchBody(10, (_pageId-1)*10)
  .then(function (_result) {
    res.render('index', {
      result : _result,
      pageId: _pageId
    });
  })
});

router.get('/page/:pageId', function(req, res) {
  var _pageId = req.params.pageId;
  Article.fetchBody(10, (_pageId-1)*10)
      .then(function (_result) {
        res.render('index', {
          result : _result,
          pageId: _pageId
        });
      })
});

module.exports = router;
