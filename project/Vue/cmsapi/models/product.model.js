const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
  class: String,
  proname: String,
  commonprice:Number,
  holidayprice:Number,
  doubleoneprice:Number,
  doubletwoprice:Number,
  phopinfo:String,
  address:String,
  date:{type: Date, default: Date.now },
  belong:String
});
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', schema);
