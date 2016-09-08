/**
 * Created by 24478 on 2016/9/7.
 */
var Schema = require('mongoose').Schema;

module.exports = new Schema({
    name: String

}).pre('save',function (next) {
    if (this.isNew) {
        this.createAt = Date.now();
    }
    next();
});