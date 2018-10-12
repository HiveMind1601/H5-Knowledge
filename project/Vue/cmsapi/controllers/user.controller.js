const User = require('../models/user.model');

// 新
exports.create = function(req, res, next) {
  const user = new User(req.body);
  user.save().then(data => {
    res.json(data);
  });
};
// 删
exports.remove = function(req, res, next) {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, data) => {
    res.json(data);
  });
};

exports.removes = function(req, res, next) {
  var ids = req.body.ids.split(',');
  User.remove({ _id: { $in: ids } }).then(data => {
    res.json({ message: '数据删除成功', status: 200 });
  });
};
// 改
exports.update = function(req, res, next) {
  var id = req.params.id;
  User.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
    // 千万小心，这里的data是没有更新之前的数据
    res.json(data);
  });
};

exports.getData = function(req, res, next) {
  var id = req.params.id;
  User.findById(id).then(data => {
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

  if (req.body.name) {
    console.log(req.body.name);
    name = req.body.name;
    queryCondition = {
      name: new RegExp(name, 'i')
    };
  }

  User.paginate(queryCondition, { page: +page, limit: +rows }, function(err, result) {
    result.rows = result.docs;
    delete result.docs;
    res.json(result);
  });
};


/* //登录验证
exports.login = function(req, res, next) {
  var queryCondition = {};
  if (req.body.name) {
    console.log(req.body.name);
    name = req.body.name;
    queryCondition = {
      name: new RegExp(name, 'i')
    };
  }
  
}; */