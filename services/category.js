/**
 * Created by 24478 on 2016/9/7.
 */
var Category = require('../model').Category;

exports.fetchAll = function () {
    return Category.find({});
};

exports.add = function (data) {
    return new Category(data).save();
};

exports.find = function (id) {
	return Category.findById(id);
}