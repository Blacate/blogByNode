var express = require('express');
var router = express.Router();
var config = require('../config.js');
var articleController = require('../controllers/article');
var categoryController = require('../controllers/category');
var linkController = require('../controllers/link');
var tagController = require('../controllers/tag');
var moodController = require('../controllers/mood');

//site information
router.use(function (req, res, next) {
  res.locals.name = config.name;
  res.locals.declaration = config.declaration;
  res.locals.siteName = config.siteName;
  next();
});

//Num of blog
router.use(function (req, res, next) {
    articleController.fetchNumber()
        .then(function (result) {
            res.locals.articleNum = result.articleNum;
            res.locals.categoryNum = result.categoryNum;
            res.locals.tagNum = result.tagNum;
            next();
        });
});

//recent article
router.use(function (req, res, next) {
  articleController.fetchRecent()
      .then(function(result) {
        res.locals.recentArticles = result;
          next();
      });
});

//category
router.use(function (req, res, next) {
  categoryController.fetchAll()
      .then(function (result) {
        res.locals.categorys = result;next();
      });
});

//Tag
router.use(function (req, res, next) {
    tagController.fetchAll()
        .then(function (result) {
            res.locals.tags = result;
            next();
        });
});

//link
router.use(function (req, res, next) {
    linkController.fetchAll()
        .then(function (links) {
            res.locals.discounts = links.filter(function (link) {return link.category === 'discount'});
            next();
        });
});


/* GET home page. */
router.get('/', function(req, res) {
  var _pageId = 1;
  articleController.fetchBody(10, (_pageId-1)*10)
  .then(function (_result) {
    res.render('index', {
      result : _result,
      pageId: parseInt(_pageId, 10)
    });
  })
});

router.get('/page/:pageId', function(req, res) {
  var _pageId = req.params.pageId;
  articleController.fetchBody(10, (_pageId-1)*10)
      .then(function (_result) {
        res.render('index', {
          result : _result,
          pageId: parseInt(_pageId, 10)
        });
      })
});

//Mood
router.get('/mood', function (req,res) {
    var _pageId = 1;
    moodController.fetchBody(10, (_pageId-1)*10)
        .then(function (_result) {
            res.render('mood', {
                result : _result,
                pageId: parseInt(_pageId, 10)
            });
        })
});

router.get('/mood/:pageId', function(req, res) {
    var _pageId = req.params.pageId;
    moodController.fetchBody(10, (_pageId-1)*10)
        .then(function (_result) {
            res.render('mood', {
                result : _result,
                pageId : parseInt(_pageId, 10)
            });
        })
});

//article
router.get('/article/:articleId', function (req, res) {
    var _articleId = req.params.articleId;
    articleController.getArticle(_articleId)
    .then(function (result) {
        res.render('article', {
            article: result,
        })
    });
});

//articles
router.get('/articles', function (req, res) {
    articleController.fetchAll()
        .then(function (result) {
            res.render()
        })
});

//categories
router.get('/categories', function (req, res) {
    categoryController.fetchAll()
        .then(function (result) {
            res.render()
        })
});

//tags
router.get('/tags', function (req, res) {
    tagController.fetchAll()
        .then(function (result) {
            res.render()
        })
});

//category
router.get('/category/:id', function (req, res) {
    var categoryId = req.params.id;

});

//tag
router.get('/tag/:id', function (req, res) {
    var tagId = req.params.id;

});



module.exports = router;
