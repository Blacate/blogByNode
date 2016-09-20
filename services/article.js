/**
 * Created by 24478 on 2016/9/7.
 */
var Article = require('../model').Article;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

exports.fetch = function (_limit, _offset) {
     return Article.find({}).sort({ updateTime: -1 }).limit(_limit).skip(_offset);
};

exports.fetchAll = function() {
    return Article.find({}).sort({updateTime: -1});
};

exports.add = function(data) {
    return new Article(data).save();
};

exports.get = function (articleId) {
    return Article.findByIdAndUpdate(articleId, {$inc: { reads: 1 }})
        .then(function () {
            return Article.findById(articleId).populate("tags");
        })
};