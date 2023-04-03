show users查看当前有哪些用户
db.dropUser('user')删除某个用户

## MongoDB数据库角色
1.数据库用户角色：read、readWrite; 
2.数据库管理角色：dbAdmin、dbOwner、userAdmin；
 3.集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager； 
 4.备份恢复角色：backup、restore； 
 5.所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、 dbAdminAnyDatabase 
 6.超级用户角色：root

1、第一步创建超级管理用户 
<!-- 本地admin已经设置了  mongo admin -u admin -p 123456 -->
use admin 
show users （查看是否有用户）
db.createUser({ 
    user:'admin', 
    pwd:'123456', 
    roles:[{role:'root',db:'admin'}]
})

2、第二步修改 Mongodb 数据库配置文件 路径：C:\Program Files\MongoDB\Server\4.0\bin\mongod.cfg 
配置： security: authorization: enabled

3.win+r输入services.msc重启mongoDB服务

4.链接服务
本地 mongo 数据库名称 -u 用户名 -p 密码
远程 mongo 192.168.1.200:27017/数据库名称 -u user -p password



## ##############################例子：给某个人某个库的权限

use 数据库名称

db.createUser({ 
    user:'newUser', 
    pwd:'123456', 
    roles:[{role:'给的权限',db:'数据库名字'}]
})
成功返回=======>
Successfully added user: {
        "user" : "newUser",
        "roles" : [
                {
                        "role" : "dbOwner",
                        "db" : "runoob"
                }
        ]
}


查看
> show users
{
        "_id" : "runoob.newUser",
        "userId" : UUID("1712f6e0-aed6-4bdc-9f81-f601f81a01ff"),
        "user" : "newUser",
        "db" : "runoob",
        "roles" : [
                {
                        "role" : "dbOwner",
                        "db" : "runoob"
                }
        ],
        "mechanisms" : [
                "SCRAM-SHA-1",
                "SCRAM-SHA-256"
        ]
}


链接服务
C:\Users\Administrator>mongo runoob -u newUser -p 123456
MongoDB shell version v4.2.5
connecting to: mongodb://127.0.0.1:27017/runoob?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("a1b809e6-3102-48ff-9519-2659a6b34e57") }
MongoDB server version: 4.2.5
> show dbs
runoob  0.000GB
>
## ##############################



## 删除某个用户的权限
1.切换到当前数据库 use 数据库名称

2 db.dropUser('user')删除某个用户
## Mongodb 账户权限配置中常用的命令
1、show users; #查看当前库下的用户 
2、db.dropUser("eggadmin") #删除用户 
3、db.updateUser( "admin",{pwd:"password"}); #修改用户密码 
4、
mongo admin
db.auth("admin","password"); #密码认证(这种方法也可以连数据库)

## nodejs中连接数据库的时候需要配置账户密码 
   const url = 'mongodb://admin:123456@localhost:27017/';

<!-- 修改用户角色 -->
切换到该权限下给这个用户权限
<!-- show dbs
use runoob 要改权限的数据库
newUser用户名 -->
   db.updateUser("newUser",
  { 
    pwd: "123456",  
    roles: [ 
        {"role":"dbAdmin",db:'runoob'},
         {"role":"readWrite",db:'runoob'}
        ]
  }
)
