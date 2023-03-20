1. 在package.json复制一个命令并添加一个参数
  例如 {
        "script":{
            "build":"node build/build.js",
            "buildSit":"node build/build.js sit"
        }
      }
2. 在prod.env文件同级新建sit.env文件，将需要使用到的参数按相同格式大写添加,webpack.prod.conf.js中获取该参数
   const args=process.argv.splice(2)
   let type=args[0]
   let env=require('../config/prod.env') 
   if(type=='sit'){
    <!-- 这里默认使用NODE_ENV:production即可，只是需要修改其他变量 -->
    env=require('../config/sit.env')
   }
3. 此时就添加好了不同的sit打包环境
   通过plugins保存在项目中，需要使用时引入即可
   plugins:[
    new webpack.DefinePlugin({
        'process.env':env
    })
   ]
 