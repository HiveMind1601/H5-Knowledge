const Cate = require('../models/cate.model');

// 新
exports.create = function(req, res, next) {
  const cate = new Cate(req.body);
  cate.save().then(data => {
    res.json(data);
  });
};
//删
exports.remove = function(req, res, next) {
  var id = req.params.id;
  var ids=[];
  Cate.findOne({_id:id},function(err,doc){
    if(doc){
      ids=[doc._id];
      doc.getChildren(function(err,docs){
        for(var i=0;i<docs.length;i++){
          ids.push(docs[i]._id);
        };
        Cate.remove({_id:{$in:ids}}).then(data=>{
          res.json({message:'数据删除成功',status:200});
        });
      });
    };
  })
};

// 改
exports.update = function(req, res, next) {
  var id = req.params.id;
  Cate.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
    // 千万小心，这里的data是没有更新之前的数据
    res.json(data);
  });
};

exports.getData = function(req, res, next) {
  var id = req.params.id;
  Cate.findById(id).then(data => {
    res.json(data);
  });
};

function reverseTree(data, pid) {
  var result = [],
    temp;

  var data = JSON.parse(JSON.stringify(data)); // 将express的model转成js的object类型
  for (var i in data) {
    if (data[i].parentId === pid) {
      result.push(data[i]);

      temp = reverseTree(data, data[i]._id);
      if (temp.length > 0) {
        data[i].expand=true;
        data[i].children = temp;
      }
    }
  }
  return result;
}

exports.list = function(req, res, next) {
  var type = req.params.type;
  Cate.find({ type: type }).then(data => {
    var rpTree = reverseTree(data, null);
    res.json(rpTree);
  });
};
