
mongodb數据库有用户名密码认证的参考下面命令
都要重新开个终端
<!-- mongodb数据库导出备份语法:
  127.0.0.1 (ip地址)  如: 127.0.0.1, 当然也可以指定端口号: 127.0.0.1:27017
  runoob(数据库名称)
  F:\BaiduNetdiskDownload\db(要导出的路径) 拖拽该文件夹到cmd就有路径了不用手写
  ##### 用户名和密码需要与要备份的数据库对应。例如：在admin库中的设置的“用户”不能操作test库进行备份
  本地 mongodump -h 127.0.0.1 -u newUser -p 123456 -d runoob -o F:\BaiduNetdiskDownload\db
-->




删除数据库  切换到该数据库下执行 db.dropDatabase()
mongodb数据库恢复导入语法:，

mongorestore -h 127.0.0.1 -u newUser -p 123456 -d runoob F:\BaiduNetdiskDownload\db\runoob