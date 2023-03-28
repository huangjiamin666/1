const http = require('http');

// module.export导出的引入可以取其他名字也可以用导出的名字,这里用导出的
const app = require('./module/router')

//用routes替换http.createServer内的方法
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
//   response.end('Hello World');
// }).listen(3000);
http.createServer(app).listen(3000)
console.log('Server running at http://127.0.0.1:3000/');

// 配置路由
app.get('/login', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
  res.end('执行登录操作')
})
