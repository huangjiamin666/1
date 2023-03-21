// 管道流   用于复制大文件
// 从一个流中获取数据并将数据传 递到另外一个流中

// const fs=require('fs');

// 创建一个可读流
// var readStream=fs.createReadStream('./aaa.jpg');

// 创建一个可写流
// var writeStream=fs.createWriteStream('./data/aaa.jpg');

// 管道读写操作
// 读取 ./aaa.jpg 文件内容，并将内容写入到 ./data/aaa.jpg 文件中
// readStream.pipe(writeStream);



const fs=require('fs');
var readStream=fs.createReadStream('./demo08.zip');

var writeStream=fs.createWriteStream('./data/demo.zip');

readStream.pipe(writeStream);