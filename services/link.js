/**
 * Created by 24478 on 2016/9/7.
 */
var Link = require('../model').Link;

exports.fetch = function() {
  return  Link.find({}).sort({ updateTime: -1 });
};

exports.add = function (data) {
  return new Link(data).save();
};