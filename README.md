1.Number.isInteger(value) // 判断value是否为整数

2.0-100的数，包括两位小数
 var reg = /^(?:0|[1-9][0-9]?|100)(\.[0-9]{0,2})?$/;
      if (!value.match(reg)) {
        return 0;
      } else {
        return value;
      }

3.左侧菜单高亮
<el-menu :default-active="activeMenu"></el-menu>
computed:{
    activeMenu(){
        const {meta,path}=this.$route
        if(meta.activeMenu)return meta.activeMenu;
        return path
    }
}

router.js中

{
    path:'/111',
    chiildren:[
        {
            path:'222',
            meta:{activeMenu:'/111'}
        }
    ]
}

4.<el-popover placement="bottom" popper-class="wrap" trigger="hover"></el-popover>