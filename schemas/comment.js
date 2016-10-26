/**
 * Created by 24478 on 2016/9/7.
 */
var Schema = require('mongoose').Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({
    article: {type: ObjectId, ref: 'article'},
    content: String,
    nickname: String,
    email: String,
    website: String,
    notice: String,
}).pre('save',function (next) {
    if (this.isNew) {
        this.createAt = Date.now();
    }
    next();
});