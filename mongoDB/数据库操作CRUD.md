show dbs 查看数据库 admin config local为内置数据库，不要动
use 数据库名称，没有就是创建，有就是切换到这个数据库
<!-- Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite -->
db.user.insertOne({"username":"zhangshan"})    向当前数据库中插入数据此时user为该数据库下的集合（表）
show collections 查看当前数据库内集合

删除集合（表）
   db.集合名.drop()
删除数据库
    use 数据库名称=>db.dropDatabase()

    db.user.find() 查看表内数据
按条件查找(年龄为5岁的)：db.user.find({"age":5})
查找年龄大于5岁的 db.user.find({"age":{$gt:22}})
查找年龄小于5岁的 db.user.find({"age":{$lt:22}})
查找年龄大于等于5岁的 db.user.find({"age":{$gte:22}})
查找年龄小于等于5岁的 db.user.find({"age":{$lte:22}})
查找年龄大于等于23，小于等于26的 db.user.find({"age":{$gte:23,$lte:26}})

模糊查询 
    db.user.find({"name":/o/})（查找名字里有o的）
    db.user.find({"name":/^o/})（查找名字是o开头的）
    db.user.find({"name":/o$/})（查找名字是o结尾的）

查询结果只显示某个字段
     db.user.find({},{"name":1}) （查询结果的字段只显示name)
     db.user.find({"age":{$gt:5}},{"name":1}) （查询大于5岁的且只显示name)

查询按年龄升序 db.user.find().sort({age:1})
查询按年龄升序 db.user.find().sort({age:-1})
多个条件查具体的数据 db.user.find({"name":"zs","age":5})

<!-- 这两个结合起来用于分页 -->
查询前5条 db.user.find().limit(5)
查询10条以后的数据 db.user.find().skip(10)


一次新增100条数据(语句结束enter表示执行，没结束表示换行)
for(var i=0;i<100;++){
    db.admin.insert({
        "name":"zhangshan"+i,
        "age":i
    })
}
查看当前表有多少数据  db.user.find().count()

// 分页 db.user.find().skip((pageSize-1)*10).limit(10)


or 与查询 查找22岁或者25岁的
     db.user.find({$or:[{age:22},{age:25}]})

修改数据
  db.user.update({"name":"zhangshan25"},{$set:{age:58}})，

  更改所有匹配的数据
  db.user.update({"name":"zhangshan25"},{$set:{age:58}},{multi:true})

删除数据
 db.user.remove({"name":"zhangshan23"})