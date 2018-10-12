const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({ 
    name: String,
    age: Number,
    sex:String,
    birth:{type: Date, default: Date.now },
    email:String,
    address:String,
    qq:Number,
    phone:Number,
    hobby:String,
    education: String,  
});
schema.plugin(mongoosePaginate);

var User = mongoose.model('User',  schema,'User');

module.exports=User;