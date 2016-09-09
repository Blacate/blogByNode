/**
 * Created by 24478 on 2016/9/7.
 */
var Article = require('../services/article');
var Category = require('../services/category');
var Tag = require('../services/tag');

exports.fetchRecent = function () {
    return Article.fetch(5,0);
};

exports.fetchNumber = function () {
    var result = [];
     return Article.fetchAll()
         .then(function (articles) {
            result.articleNum = articles.length;
            return Category.fetchAll();
         })
         .then(function (categorys) {
            result.categoryNum = categorys.length;
            return Tag.fetchAll();
         })
         .then(function (tags) {
            result.tagNum = tags.length;
            return result;
         })
};

exports.fetchBody = function (limit, offset) {
    var result = [];
    return Article.fetchAll()
        .then(function (_result) {
            result.total = _result.length;
            return Article.fetch(limit, offset);
        })
        .then(function (_result) {
            result.articles = _result;
            return result;
    })
};
exports.addNew = function (data) {
    var article = {
        title: data.title,
        updateTime: Date.now(),
        belongs: data.belongs,
        tag: data.tag,
        description:data.description,
        body: data.body
    };
    return Article.add(article);
};