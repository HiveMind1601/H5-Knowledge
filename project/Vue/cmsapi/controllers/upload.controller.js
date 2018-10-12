const Upload = require('../models/upload.model');
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

exports.uploadFile = function ( req,res, next) {
    //const cateId = req.params.cateId;
    var upload = multer({
        storage: storage
    }).single('avatar');
    upload(req, res, function (err) {   
        //console.log(typeof req.body.belong)
        //console.log(req.file)
        if(req.file){
           var hehe=Object.assign(req.file,{belong:req.body.belong})
            //console.log('------'+hehe)
            const uploadd = new Upload(hehe);
            uploadd.save().then(data=>{
                res.json(data);
            }) 
        }
        
    })

};

exports.remove=function(req,res,next){
    var id =req.params.id;
    Upload.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    });
};

exports.list=function(req,res,next){
    var page = req.body.page ? req.body.page : 1;
    var rows = req.body.rows ? req.body.rows: 10;

    var queryConditon={};

    if(req.body.id && req.body.id.trim().length>0){
        id = req.body.id;
        //console.log(id)
        queryConditon = {
            belong: new RegExp(id,'i')
        }
        
    };

    Upload.paginate(queryConditon, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
}