// url.parse() 解析 
// URL url.format(urlObject) 是上面 url.parse() 操作的逆向操作 
// url.resolve(from, to) 添加或者替换地址
// url.resolve('http://examplecom/','/one')  =====>  'http://examplecom/one'



const url=require('url');

var api='http://www.itying.com?name=zhangsan&age=20';
console.log(url.parse(api));
// console.log(url.parse(api,true));

var getValue=url.parse(api,true).query;

console.log(getValue);

console.log(`姓名：${getValue.name}--年龄:${getValue.age}`);

// console.log(url.parse(api));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.itying.com',
//     port: null,
//     hostname: 'www.itying.com',
//     hash: null,
//     search: '?name=zhangsan&age=20',
//     query: 'name=zhangsan&age=20',
//     pathname: '/',
//     path: '/?name=zhangsan&age=20',
//     href: 'http://www.itying.com/?name=zhangsan&age=20'
//   }
// console.log(getValue);
//   [Object: null prototype] { name: 'zhangsan', age: '20' }
//  console.log(`姓名：${getValue.name}--年龄:${getValue.age}`);
//   姓名：zhangsan--年龄:20
  