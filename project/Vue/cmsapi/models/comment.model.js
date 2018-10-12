const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
    newsId: mongoose.Schema.ObjectId,
    title: String,
    content: String,
    time: { type: Date, default: Date.now },
    status: String
});
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Comment', schema);