const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
  name: String,
  age: Number,
  sex:String,
  date:{type: Date, default: Date.now },
  email:String,
  address:String,
  phone:Number,
  hobby:Array,
  city: String,
  desc:String
});
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', schema);
