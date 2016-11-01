/**
 * Created by 24478 on 2016/9/10.
 */
var Schema = require('mongoose').Schema;

module.exports = new Schema({
    updateTime: {type: Date, default: Date.now},
    body: String
}).pre('save',function (next) {
    if (this.isNew) {
        this.createAt = Date.now();
    }
    next();
});