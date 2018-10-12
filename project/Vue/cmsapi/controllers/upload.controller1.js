const Uploads = require("../models/upload.model");
var multer  = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

//上传
exports.uploadFile=function(req,res,next){
  var upload = multer({ dest: './uploads/' });
  var upload = multer({ storage: storage }).single('avatar');
  //console.log(upload);
  upload(req,res,function(err){
    //console.log(req.file)//对象包含上传文件的信息，用来完成模型
    const uploads=new Uploads(req.file);
    uploads.save().then(data => {
      res.json(data);
    });
  })
}

// 删
exports.remove = function(req, res, next) {
  var id = req.params.id;
  Upload.findByIdAndDelete(id, (err, data) => {
    res.json(data);
  });
};

exports.removes = function(req, res, next) {
  console.log(req.body.ids)
  var ids = req.body.ids.split(",");
  Upload.remove({ _id: { $in: ids } }).then(data => {
    res.json({ message: "数据删除成功", status: 200 });
  });
};
// 改
exports.update = function(req, res, next) {
  var id = req.params.id;
  Upload.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(
    data => {
      // 千万小心，这里的data是没有更新之前的数据
      res.json(data);
    }
  );
};

exports.getData = function(req, res, next) {
  var id = req.params.id;
  Upload.findById(id).then(data => {
    res.json(data);
  });
};

//查
exports.list = function(req, res, next) {
  // page
  // limit
  var page = req.body.page ? req.body.page : 1;
  var rows = req.body.rows ? req.body.rows : 10;

  var queryCondition = {};

  if (req.body.id && req.body.id.trim().length > 0) {
    id = req.body.id;
    //console.log(id)
    queryCondition = {
      belong: new RegExp(id, "i"),
    };
    //console.log(queryCondition);
  }

  if (req.body.class && req.body.class.trim().length > 0) {
    queryCondition = Object.assign(queryCondition,{
      class: new RegExp(req.body.class, "i")
    });
  }

  Upload.paginate(queryCondition, { page: +page, limit: +rows }, function(
    err,
    result
  ) {
    result.rows = result.docs;
    delete result.docs;
    res.json(result);
  });
};
