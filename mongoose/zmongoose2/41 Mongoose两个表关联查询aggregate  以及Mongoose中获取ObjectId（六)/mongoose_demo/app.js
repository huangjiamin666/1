/*
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

*/

/*查询order_item，找出商品名称是酸奶的商品，酸奶这个商品对应的订单的订单号以及订单的总价格*/


var OrderItemModel=require('./model/order_item.js');

var OrderModel=require('./model/order.js');

var mongoose=require('mongoose');

//mongoose中获取ObjectId           mongoose.Types.ObjectId

OrderItemModel.aggregate([

    {
      $lookup:
        {
          from: "order",
          localField: "order_id",
          foreignField: "order_id",
          as: "order_info"
        }
   },{
    $match:{_id: mongoose.Types.ObjectId('5b743da92c327f8d1b360546')}

   }

],function(err,docs){

        if(err){

            console.log(err)
            return;
        }

        console.log(JSON.stringify(docs))


})