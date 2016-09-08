/**
 * Created by 24478 on 2016/9/7.
 */
var Article = require('../model').Article;

exports.fetch = function (_limit, _offset) {
    Article.find({}).sort({updateTime: -1 }).limit(_limit).offset(_offset);
};

exports.fetchAll = function() {
  Article.find({}).sort({updateTime: -1});
};