/**
 * Created by 24478 on 2016/9/10.
 */
var Mood = require('../services/mood');

exports.fetchBody = function (limit, offset) {
    var result = [];
    return Mood.fetchAll()
        .then(function (_result) {
            result.total = _result.length;
            return Mood.fetch(limit, offset);
        })
        .then(function (_result) {
            result.moods = _result;
            return result;
        })
};

exports.addNew = function(data) {
    var mood = {
        body: data.mood,
        updateTime: Date.now()
    };
    return Mood.add(mood);
};
