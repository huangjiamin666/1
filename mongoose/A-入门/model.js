// 执行查找，修改，删除，更新直接通过model操作，增加数据要实例化model， 创建一个document,然后调用.save方法
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('close',function(){
    console.log('数据库链接成功')
})
var Schema=mongoose.Schema
var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})

var StuModel=mongoose.model("student",stuSchema)
/*
 有了model，就可以对数据库进行增删改查的操作了


添加
 model.create(doc(s),[callback])
  -用来创建一个或多个文档并添加到数据库中
  -参数：
       -doc(s)可以是一个文档对象，也可以是一个文档对象的数组
       callback,当回调成功时返回的函数


查询：
  Model.find(conditioons,[projection],[options],[callback])
  -查询所有符合条件的文档  ===>Array
  Model.findById(id,[projection],[options],[callback])
  -根据文档id查
  Model.findOne(conditioons,[projection],[options],[callback])
  -查询符合条件的第一个文档 ===>Object
        conditioons 查询条件
        projection 投影
        -两种方式
        {name:1,_id:0} ==========>查询结果带name,不带id
        "name -id" ==========>查询结果带name,不带id
        options 查询选项
        callback 回调函数，查询结果会通过回调函数返回 (必传)
*/


 StuModel.find({name:'孙悟空'},function(err,docs){
     if(!err){
      console.log(docs,docs[0].name,111111111111111)
/*返回
 [
    {
      _id: new ObjectId("62efa512a5a3f91fde02e0f1"),
      name: '孙悟空',
      age: 18,
      gender: 'male',
      address: '花果山',
      __v: 0
    }
  ] 孙悟空
  */
  
    }
 })


 
 
 StuModel.findOne({},function(err,doc){
    if(!err){
     console.log(doc,doc.name,'findone%%%%%%%%%%%')
   }
})
StuModel.findById('62efa512a5a3f91fde02e0f1',function(err,doc){
    if(!err){
     console.log(doc,doc.name,'findById%%%%%%%%%%%')
     // Document是Model的实例
     console.log(doc instanceof StuModel)
   }
})
// 查询结果带名字不带id
StuModel.find({},{name:1,_id:0},function(err,docs){
    if(!err){
      console.log(docs,2222222222) 
       // [ { name: '孙悟空' }, { name: '沙河尚' }, { name: '猪八戒' } ]
    }
})
// 查询结果带名字带id
StuModel.find({},"name ag _id",function(err,docs){
    if(!err){
      console.log(docs,3333333333)
      /**
       [
        { _id: new ObjectId("62efa512a5a3f91fde02e0f1"), name: '孙悟空' },
        { _id: new ObjectId("62efa851300396b238a5a5b3"), name: '沙河尚' },
        { _id: new ObjectId("62efa851300396b238a5a5b4"), name: '猪八戒' }
       ]

       */
    }
})
// 查询结果带名字不带id带年龄
StuModel.find({},"name age -_id",function(err,docs){
    if(!err){
      console.log(docs,"^^^^^^^^^^^^")
      /**
       [
  { name: '孙悟空', age: 18 },
  { name: '沙河尚', age: 18 },
  { name: '猪八戒', age: 18 }
] 

       */
    }
})

// 跳过第一个
StuModel.find({},"name age -_id",{skip:1},function(err,docs){
    if(!err){
      console.log(docs,'&&&&&&&&&&&&&&')
      /**
       [ { name: '沙河尚', age: 18 }, { name: '猪八戒', age: 18 } ] 

       */
    }
})
// 跳过第一个
StuModel.find({},"name age -_id",{skip:1,limit:1},function(err,docs){
    if(!err){
      console.log('**********',docs,'**********')
      /** 
          [ { name: '沙河尚', age: 18 } ] 
       */
    }
})



/*
 修改
Model.update(conditions,doc,[options],[callback])
Model.updateMany(conditions,doc,[options],[callback])
Model.updateOne(conditions,doc,[options],[callback])
用来修改一个或者多个文档
参数 
  conditions 查询条件
  doc 修改后的对象
  options 配置参数
  callback 回调函数
*/

// 修改孙悟空的年龄为20
StuModel.updateOne({name:'孙悟空'},{$set:{age:20}},function(err){
    if(!err){
        console.log('修改成功')
    }
})

//删除
// Model.remove(conditions,[callback])
// Model.deleteOne(conditions,[callback])
// Model.deleteMany(conditions,[callback])
// 统计文档数量
StuModel.count({},function(err,count){
    if(!err){
        console.log(count)// 3
    }
})