本机安装地址 C:\Program Files\MongoDB\Server\6.0\data\
log地址 C:\Program Files\MongoDB\Server\6.0\log\

compass地址 mongodb://localhost:27017


配置环境变量 找到安装mongoDB的位置找到bin目录
            C:\Program Files\MongoDB\Server\6.0\bin

            此电脑=>高级系统设置=>高级=>环境变量
            找到系统变量=>添加path

打开cmd输入mongo查看是否安装成功


1、现在的情况是，已安装MongoDB，版本为6，但是在cmd中输入mongo，显示**“mongo不是内部或外部命令”**，下面步骤即可解决！

2、安装Mongoshell，MongoDB6之前shell是直接在里面的6之后需要单独下载

mongoDB6没有mong.exe和mongdb.exe，要想通过命令行启动mongoDB需要自己下载一个Mongoshell，下载地址https://www.mongodb.com/try/download/shell，直接下载即可

3、下载后解压，直接把这个解压后的文件复制到Mongo6的安装路径里面


4、配置bin目录到环境变量

5、打开cmd，输入mongosh，即可进入到mongodb
## 这里要注意cmd要在当前路径下打开，在当前bin下输入cmd按enter键
mongosh
1

6、退出mongo

quit()

总结：要善于百度