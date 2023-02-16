win+i =>应用=>


方法二：禁止电脑安装软件

　　1、通过快捷键“win+R”打开运行菜单，输入“gpedit.msc”并点击确定。
　2、依次展开“计算机配置”---“管理模板”---“Windows组件”---“Windows Installer”，然后双击打开“禁止用户安装”。
3、选择启用并“隐藏用户安装”，电脑就不会自动下载乱七八糟的软件了。



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