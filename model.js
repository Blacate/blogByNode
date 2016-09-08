/**
 * Created by 24478 on 2016/9/7.
 */
var mongoose = require('mongoose');
var config = require('./config');
mongoose.Promise = require('promise');

var connection = mongoose.createConnection(config.mongodb);
var Article = connection.model('article', require('./schemas/article'));
var Category = connection.model('category', require('./schemas/category'));
var Link = connection.model('link', require('./schemas/link'));
var Tag = connection.model('tag', require('./schemas/tag'));

module.exports = {
    Article,
    Category,
    Link,
    Tag
};