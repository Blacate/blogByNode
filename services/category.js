/**
 * Created by 24478 on 2016/9/7.
 */
var Category = require('../model').Category;

exports.fetchAll = function () {
    Category.find({}).sort({updateTime: -1});
};