var User=require('../models/user.models');

//新
    exports.create= function(req,res,next){
        const user=new User(req.body);
        user.save().then(data =>{
            res.json(data);
        });
    };


//删
    exports.remove=function(req,res,next){
        var id =req.params.id;
        User.findByIdAndDelete(id,(err,data)=>{
            res.json(data);
        });
    };


//改
    exports.update=function(req,res,next){
        var id=req.params.id;
        User.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
            res.json(data);//返回更新前的数据
        })
    }

//查

exports.list=function(req,res,next){
    var page = req.body.page ? req.body.page : 1;
    var rows = req.body.rows ? req.body.rows: 5;

    var queryConditon={};

    if(req.body.name && req.body.name.trim().length>0){
        name = req.body.name;
        queryConditon = {
            name: new RegExp(name,'i')
        }
    };

    User.paginate(queryConditon, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
}


exports.getData = function(req, res, next) {
    var id = req.params.id;
    User.findById(id).then(data => {
      res.json(data);
    });
  };


exports.removes = function(req, res, next) {
    var ids = req.body.ids.split(',');
    User.remove({ _id: { $in: ids } }).then(data => {
        res.json({ message: '数据删除成功', status: 200 });
    });
};