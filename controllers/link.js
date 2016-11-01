/**
 * Created by 24478 on 2016/9/7.
 */
var Link = require('../services/link');

exports.fetchAll = function () {
    return Link.fetch();
};

exports.addNew = function (data) {
    var link = {
        name: data.name,
        category: data.category,
        link: data.link,
        updateTime: Date.now()
    };
    return Link.add(link);
};