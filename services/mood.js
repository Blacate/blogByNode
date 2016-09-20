/**
 * Created by 24478 on 2016/9/10.
 */
var Mood = require('../model').Mood;
var mongoose = require('mongoose');

exports.fetch = function (_limit, _offset) {
    return Mood.find({}).sort({ updateTime: -1 }).limit(_limit).skip(_offset);
};

exports.fetchAll = function() {
    return Mood.find({}).sort({ updateTime: -1 });
};

exports.add = function(data) {
    return new Mood(data).save();
};