/**
 * Created by 24478 on 2016/9/7.
 */
var Schema = require('mongoose').Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({
    title: String,
    updateTime: {type: Date, default: Date.now},
    belongs: {type: ObjectId, ref: 'category'},
    tags:[{type: ObjectId, ref: 'tag'}],
    description: String,
    body: String,
    reads: {type: Number, default: 0 }
}).pre('save',function (next) {
    if (this.isNew) {
        this.createAt = Date.now();
    }
    next();
});