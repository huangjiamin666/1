// 1 cnpm install mongodb --save

//2、引入mongodb
const { MongoClient } = require('mongodb');

//3、定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017';

//4、定义要操作的数据库
const dbName = 'itying';

//5、连接数据库 查找

MongoClient.connect(url, { useUnifiedTopology: true },(err,client)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");

    let db = client.db(dbName);

  //1、查找数据
    db.collection("user").find({"age":13}).toArray((err,data)=>{
       if(err){ 
            console.log(err);
            return;
        }
        console.log(data);       
        //操作数据库完毕以后一定要 关闭数据库连接
        client.close();
    })

})

//6、连接数据库 增加

MongoClient.connect(url, { useUnifiedTopology: true },(err,client)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");

    let db = client.db(dbName);

    //   增加数据
    db.collection("user").insertOne({"username":"nodejs操作mongodb","age":10},(err,result)=>{
        if(err){ //增加失败
            console.log(err);
            return;
        }
        console.log("增加成功");
        console.log(result);
          //操作数据库完毕以后一定要 关闭数据库连接
         client.close();

    })

})

