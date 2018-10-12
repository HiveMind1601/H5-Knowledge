const Comment = require('../models/comment.model.js');
var http = require('http');
var multiparty = require('multiparty');
var fs = require('fs');

// 新
exports.create = function(req, res, next) {
    const comment = new Comment(req.body);
    comment.save().then(data => {
        res.json(data);

    });
};
// 删
exports.remove = function(req, res, next) {
    var id = req.params.id;
    Comment.findByIdAndDelete(id, (err, data) => {
        res.json(data);
    });
};

exports.removes = function(req, res, next) {
    var ids = req.body.ids.split(',');
    Comment.remove({ _id: { $in: ids } }).then(data => {
        res.json({ message: '数据删除成功', status: 200 });
    });
};



exports.update=function(req, res, next){
    var id = req.params.id;
    Comment.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
        // 千万小心，这里的data是没有更新之前的数据
        res.json(data);
    });
}
exports.getData = function(req, res, next) {
    //console.log(req.params.id)
    var id = req.params.id;
    Comment.findById(id).then(data => {
        //console.log(data)
      res.json(data);
    });
  };

//审核
exports.updates = function(req, res, next) {
    var ids = req.body.ids.split(',');
    Comment.update({ _id: { $in: ids } }, { status: '通过' }, { multi: true }).then(data => {
        res.json({ message: '审核通过', status: 200 });
    });
};
exports.unupdates = function(req, res, next) {
    var ids = req.body.ids.split(',');
    Comment.update({ _id: { $in: ids } }, { status: '不通过' }, { multi: true }).then(data => {
        res.json({ message: '审核通过', status: 200 });
    });
};

//查
exports.list = function(req, res, next) {
    // page
    // limit
    var page = req.body.page ? req.body.page : 1;
    var rows = req.body.rows ? req.body.rows : 10;
    var type = req.body.type ? req.body.type : '';

    var queryCondition = {};
    if (type == 1) {
        queryCondition['status'] = '通过';
    } else if (type == 2) {
        queryCondition['status'] = '不通过';
    } else if (type == 3) {
        queryCondition['status'] = '未审核';
    }
    if (req.body.id) {
        id = req.body.id;
        queryCondition['newsid'] = new RegExp(id, 'i')

    }
    if (req.body.title) {
        console.log(req.body.title);
        title = req.body.title;
        queryCondition = {
            title: new RegExp(title, 'i')
        };
    }

    Comment.paginate(queryCondition, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
};