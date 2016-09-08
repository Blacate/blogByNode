/**
 * Created by 24478 on 2016/9/7.
 */
var Tag = require('../model').Tag;

exports.fetchAll = function() {
    Tag.find({}).sort({updateTime: -1});
};