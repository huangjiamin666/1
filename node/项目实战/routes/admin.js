const express = require("express");
var router = express.Router()

//引入模块
const user = require("./admin/user")
const login = require("./admin/login")
const nav = require("./admin/nav")
const man = require("./admin/man")
router.get("/",(req,res)=>{
   res.send("后台管理中心")
})
//挂载路由
router.use("/user",user)
router.use("/login",login)
router.use("/nav",nav)
router.use("/man",man)
module.exports = router