const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');

var schema = new mongoose.Schema({
  title: String,
  type: Number
});

schema.plugin(materializedPlugin);

module.exports = mongoose.model('Cate', schema);
