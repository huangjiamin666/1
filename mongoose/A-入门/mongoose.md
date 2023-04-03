Mongoose是一个对象文档模型（OMD)库，它对node原生的MongoDB模块进行了进一步的优化封装，
并提供了更多的功能

可以为文档创建一个模式结构(Schema)
可以对模型中的对象/文档进行验证
数据可以通过类型转换转换为对象模型
可以使用中间件来应用业务逻辑挂钩
比node原生的MongoDB驱动更容易

提供了几个新对象

Schema(模式对象)：约束了数据库中的文档结构
Model:相当于MongoDB数据库中的集合collection
Document: 表示集合中的具体文档，相当于集合中的一个具体的文档
<!--  官网  mongoosejs.com -->



// 执行查找，修改，删除，更新直接通过model操作，增加数据要实例化model， 创建一个document,然后调用.save方法
