const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
materializedPlugin = require('mongoose-materialized');

var schema = new mongoose.Schema({ 
    type:Number,
    newname:String,
    title:String,
    city:String,
    author:String,
    content:String,
    newsdate:{type: Date, default: Date.now },
    belong:String
});

schema.plugin(mongoosePaginate);
schema.plugin(materializedPlugin);

var News = mongoose.model('News',  schema,'News'); // Model.paginate()

module.exports=News;