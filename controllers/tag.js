/**
 * Created by 24478 on 2016/9/7.
 */
var Tag = require('../services/tag');

exports.fetchAll= function () {
    return Tag.fetchAll();
};

exports.addNew = function (_name) {
    var tag = {
        name:_name
    };
    return Tag.add(tag);
};