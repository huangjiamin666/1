/* 
 Document和集合中的文档是一样对应的，Docment是Model的实例
通过Model查询到的结果都是Document


执行查找，修改，删除，更新直接通过model操作，增加数据要实例化model， 创建一个document,然后调用.save方法
 */

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



//增加数据
// 创建一个Document
var stu =new StuModel({
    name:'ccccc',
    age:79,
    gender:"male",
    address:'深圳'
})

/*
document的方法
document#save([options],[fn])
*/
stu.save(function(err){
    if(!err){
        console.log('插入成功')
    }
})

StuModel.findOne({},function(err,doc){
    if(!err){
        /*
           update(update,[options],[callback])
           -修改对象
           remove([options])
        */
        // doc.update({$set:{age:60}},function(err){
        //     if(!err){
        //         console.log('修改成功')
        //     }
        // })
        // doc.age=18;
        // doc.save()

        //删除
        doc.remove(function(err){
            if(!err){
                console.log('删除成功')
            }
        })
/*

        get(name) 获取文档中指定的属性
        set(name,value)  设置文档的指定的属性值
        id 获取文档的_id属性值



        console.log(doc.get('age'))===========cosnole.log(doc.age)
        
        doc.set("name":'difhdif')
        doc.save()
        */
    }
})