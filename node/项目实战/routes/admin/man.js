const express = require("express");
const managerModel = require("../../model/managerModel");

var router = express.Router()
    // 查询数据
router.get("/", async(req, res) => {
let result=await managerModel.find()
    res.send("我是查询到的数据"+result,)
})

// 插入数据
router.get("/add", (req, res) => {
    var result=new managerModel({
        name:'111',
        sn:'dfdf111111111111111',
        age:30,
        status:'success'
    }) 
    result.save(err=>{
        if(err){
            console.log(err)
        }
    })
    res.send(result)
})
module.exports = router