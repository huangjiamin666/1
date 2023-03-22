var db=require('db');   
// nodejs默认会找node_module下对应模块里面的index.js
// 如何解决这个问题   npm init --yes  --yes表示强制生成   生成 package.json
// 找不到index.js会去找package.json的入口
db.add();