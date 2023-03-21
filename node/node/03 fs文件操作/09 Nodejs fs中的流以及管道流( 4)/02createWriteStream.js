const fs=require('fs');
var str = '';
// fs.createWriteStream 写入文件
for(var i=0;i<500;i++){

    str+='我是从数据库获取的数据，我要保存起来1111\n';
}


var writeStream=fs.createWriteStream('./data/output.txt');


// 异步方法
writeStream.write(str);

//标记文件末尾 加上这个方法才会促发finish事件
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})