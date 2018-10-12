var News=require('../models/news.models');

//新
    exports.create= function(req,res,next){
        const news=new News(req.body);
        news.save().then(data =>{
            res.json(data);
        });
    };


//删
    exports.remove=function(req,res,next){
        var id =req.params.id;
        News.findByIdAndDelete(id,(err,data)=>{
            res.json(data);
        });
    };


//改
    exports.update=function(req,res,next){
        var id=req.params.id;
        News.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
            res.json(data);//返回更新前的数据
        })
    }

//查

exports.getData = function(req, res, next) {
    var id = req.params.id;
    News.findById(id).then(data => {
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
        console.log(queryConditon)
    };

    if(req.body.title && req.body.title.trim().length>0){
        title = req.body.title;
        //console.log(id)
        queryConditon = Object.assign(queryConditon,{
            title: new RegExp(title,'i')
        })
        console.log(queryConditon)
    };

    News.paginate(queryConditon, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
}




exports.removes = function(req, res, next) {
    var ids = req.body.ids.split(',');
    News.remove({ _id: { $in: ids } }).then(data => {
        res.json({ message: '数据删除成功', status: 200 });
    });
};

