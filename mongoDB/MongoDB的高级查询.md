## 1 .MongoDB Aggregation 管道操作符与表达式 
管道操作 符 Description
 $project 增加、删除、重命名字段 
 $match 条件匹配。只满足条件的文档才能进入下 一阶段 
 $limit 限制结果的数量 
 $skip 跳过文档的数量 
 $sort 条件排序。 
 $group 条件组合结果 统计 
 $lookup $lookup 操作符 用以引入其它集合的数 据 （表关联查询）
## 常用表达式操作符 Description 
$addToSet 将文档指定字段的值去重 
$max 文档指定字段的最大值 
$min 文档指定字段的最小值 
$sum 文档指定字段求和 
$avg 文档指定字段求平均 
$gt 大于给定值 
$lt 小于给定值 
$eq 等于给定值


## $project 返回特定字段
要求查找 order 只返回文档中 trade_no 和 all_price 字段
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1 } } 
])
##  $match 查找符合条件的
用于过滤文档。用法类似于 find() 方法中的参数。 
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1 } }, 
    { $match:{"all_price":{$gte:90}} } 
])
##  $group  分组
将集合中的文档进行分组，可用于统计结果。 统计每个订单的订单数量，按照订单号分组 
当前订单的id:order_id 
当前订单的总数：num
db.order_item.aggregate( [
     { $group: {_id: "$order_id", total: {$sum: "$num"}} } ])

## $sort 排序
将集合中的文档进行排序。 
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1 } },
    { $match:{"all_price":{$gte:90}} }, 
    { $sort:{"all_price":-1} } 
])

## $limit 数据总数限制
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1 } }, 
    { $match:{"all_price":{$gte:90}} }, 
    { $sort:{"all_price":-1} }, { $limit:1 } 
])
## $skip 跳过
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1 } }, 
    { $match:{"all_price":{$gte:90}} }, 
    { $sort:{"all_price":-1} },
    { $skip:1 } 
])

## $lookup 表关联 
db.order.aggregate([ 
    { $lookup: 
      { 
        <!-- 关联的表 -->
        from: "order_item", 
        <!-- 主表要关联的id:localField -->
        localField: "order_id", 
        <!-- 另外一张表要关联的id -->
        foreignField: "order_id", 
        <!-- 关联的数据放在哪：as -->
        as: "items" 
       } 
    } 
])

例子order关联order_item,关联的数据放在items里面
<!-- [
	{
		Order_id:’1’,
		Trade_no:’’,
		Items:[
			{
				Title:’鼠标’，
				Price：20
			}，
			{
				Title:’键盘’，
				Price：20
			}

		]
	}，
	{
		Order_id:’2’,
		Trade_no:’’,
		Items:[
			{
				Title:’鼠标’，
				Price：20
			}，
			{
				Title:’键盘’，
				Price：20
			}

		]
	}
] -->


db.order.aggregate([ 
    { 
        $lookup:
           { 
              from: "order_item", 
              localField: "order_id", 
              foreignField: "order_id", 
              as: "items"
            } 
    }, 
    { 
        $match:{"all_price":{$gte:90}} 
    } 
])

db.order.aggregate([ 
    { 
        $lookup: 
          { 
            from: "order_item", 
            localField: "order_id", 
            foreignField: "order_id", 
            as: "items" 
           } 
    }, 
    { 
        $project:{ trade_no:1, all_price:1,items:1 } 
    }, 
    { 
        $match:{"all_price":{$gte:90}} 
    },
    { $sort:{"all_price":-1}}, 
])