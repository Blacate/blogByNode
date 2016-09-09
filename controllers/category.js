/**
 * Created by 24478 on 2016/9/7.
 */
var Category = require('../services/category');

exports.fetchAll = function () {
    return Category.fetchAll();
};

exports.addNew = function (data) {
    var category = {
        name: data.name,
    };
    return Category.add(data);
};