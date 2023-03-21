const fs=require('fs');
// fs.createReadStream 从文件流中读取数 据
var readStream=fs.createReadStream('./data/input.txt');

var count=0;
var str='';
readStream.on('data',(data)=>{
    str+=data;
    count++;
})

readStream.on('end',()=>{
    // 读取的数据
    console.log(str);
    // 读取的次数
    console.log(count)
})

readStream.on('error',(err)=>{
    console.log(err);   
})