// 官网  mongoosejs.com
// 下载安装mongoose
// npm i mongoose --save

// 在项目中引入mongoose
// var mongoose = require('mongoose')
// 链接MongoDB数据库
// mongoose.connect('mongodb://数据库的ip地址：端口号/数据库名');
// 如果端口号是默认端口号（27017）则可以不写

// 监听MongoDB数据库的链接状态
// 在mongoose对象中，有个属性叫connection,该对象表示的就是数据库链接通过监视该对象的状态
// 可以来监听数据库的链接与断开
// 链接
// mongoose.connection.once('open',function(){})
// 断开
// mongoose.connection.once('close',function(){})


// 断开数据库连接
// MongoDB数据库，一般情况下只需要连接一次，连接一次后，除非项目停止服务器关闭
// 否则一般不会断开
// mongoose.disconnect()







const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
mongoose.connection.once('open',function(){
    console.log('数据库链接成功')
})
mongoose.connection.once('close',function(){
    console.log('数据库链接成功')
})