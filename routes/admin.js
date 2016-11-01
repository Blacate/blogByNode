var express = require('express');
var router = express.Router();
var articleController = require('../controllers/article');
var categoryController = require('../controllers/category');
var linkController = require('../controllers/link');
var tagController = require('../controllers/tag');
var moodController = require('../controllers/mood');

/* GET admin listing. */
router.get('/', function(req, res) {
  res.send('admin page');
});

router.post('/tag', function (req, res) {
  var tagName = req.body.name;
  tagController.addNew(tagName)
      .then(function(){
        res.send(204);
      })
      .catch(function(err){
        res.send(400, err);
      });
});

router.post('/category', function (req, res) {
    var category = req.body;
    categoryController.addNew(category)
        .then(function () {
            res.send(204);
        })
        .catch(function (err) {
            res.send(400,err);
        })
});

router.post('/link', function (req, res) {
    var link = req.body;
    linkController.addNew(link)
        .then(function () {
            res.send(204);
        })
        .catch(function (err) {
            res.send(400, err);
        })
});

router.post('/article', function (req, res) {
    var article = req.body;
    articleController.addNew(article)
        .then(function () {
            res.send(204);
        })
        .catch(function (err) {
            res.send(400,err);
        })
});

router.post('/mood', function (req, res) {
    var mood= req.body;
    moodController.addNew(mood)
        .then(function () {
            res.send(204);
        })
        .catch(function (err) {
            res.send(400, err);
        })
});

module.exports = router;
