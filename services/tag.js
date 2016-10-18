/**
 * Created by 24478 on 2016/9/7.
 */
var Tag = require('../model').Tag;

exports.fetchAll = function () {
    return Tag.find({});
};

exports.add = function (data) {
  return new Tag(data).save();
};

exports.find = function  (id) {
	return Tag.findById(id);
};