const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
  cateId:mongoose.Schema.ObjectId,//分类的ID
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
  belong:String
});
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('upload', schema);