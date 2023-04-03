// 执行查找，修改，删除，更新直接通过model操作，增加数据要实例化model， 创建一个document,然后调用.save方法

const mongoose = require('mongoose');
//如果有账户密码
// mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/eggcms');
mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('close', function () {
    console.log('数据库链接成功')
})


// 将mongoose.schema赋值给一个变量
var Schema = mongoose.Schema

// 创建schema（模式）对象
var stuSchema = new Schema({
    name: {
        type: String,
        trim: true    //定义 mongoose模式修饰符 去掉空格
    },
    age: Number,
    gender: {
        type: String,
        default: 'female'
    },
    address: String,
    redirect: {
        type: String,
        set(parmas) {   //增加数据的时候对redirect字段进行处理
            // parmas可以获取redirect的值 、    返回的数据就是redirect在数据库实际保存的值
            /*
             www.baidu.com              http://www.baidu.com
             http://www.baidu.com       http://www.baidu.com
            */
            if (!parmas) {
                return ''
            } else {
                if (parmas.indexOf('http://') != 0 && parmas.indexOf('https://') != 0) {

                    return 'http://' + parmas;
                }
                return parmas

            }

        }
    },
})

//  通过schema来创建model
// model代表的是数据库中的集合，通过model才能对数据库进行操作
// mongoose.model(modelName,schema)
// modelName就是要映射的集合名，mongooose会自动将集合名变成复数
var StuModel = mongoose.model("student", stuSchema) // 生成students集合
//      这里可以传第三个参数，表示生成要操作的表，不传的话这里就生成students集合
// 向数据库中插入一个文档
// model.create(doc,function(err){})
StuModel.create({
    name: '孙悟空',
    age: 18,
    gender: "male",
    address: '花果山',
    redirect: 'www.hgs.com'
}, (err) => {
    if (!err) {
        console.log('插入成功')
    }
})

/*
StuModel.create(
// 多个文档
[
    {
        name:'沙河尚',
        age:18,
        gender:"male",
        address:'沙河尚'
    },
    {
        name:'猪八戒',
        age:18,
        gender:"male",
        address:'猪八戒'
    }
]
,(err)=>{
if(!err){
    console.log('插入成功')
}
})
*/