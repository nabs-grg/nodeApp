var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Saved = new Schema({
    joke: String
});

module.exports = mongoose.model('saved', Saved);
