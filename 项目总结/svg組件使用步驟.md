vue中使用svg图片
1.安装依赖包 svg-sprite-loader

npm install svg-sprite-loader --save-dev
2.配置svg图片使用svg-sprite-loader来编译----在webpack.base.config.js中的配置修改

添加svg编译

{
test: /\.svg$/,
loader: 'svg-sprite-loader',
include: [resolve('src/icons')],
options: {
symbolId: 'icon-[name]'
}
},

取消原来的url-loader编译

exclude: [resolve('src/icons')],
 


3.新建svg的子组件。

在src下新建文件夹及文件SvgIcon/index.vue，index.vue中内容如下

<template>
<svg :class="svgClass" aria-hidden="true" v-on="$listeners">
<use :xlink:href="iconName"/>
</svg>
</template>

<script>
export default {
name: 'SvgIcon',
props: {
iconClass: {
type: String,
required: true
},
className: {
type: String,
default: ''
}
},
computed: {
iconName() {
return `#icon-${this.iconClass}`
},
svgClass() {
if (this.className) {
return 'svg-icon ' + this.className
} else {
return 'svg-icon'
}
}
}
}
</script>

<style scoped>
.svg-icon {
width: 1em;
height: 1em;
vertical-align: -0.15em;
fill: currentColor;
overflow: hidden;
}
</style>
 


4.新建导入svg的js文件 --在src下新建icons文件夹，及icons文件夹下svg文件夹、index.js文件， index.js文件内容如下

这个文件一方面可以把组件注册一下，另一方面按需加载目录下的所有svg图片

import Vue from 'vue'
import SvgIcon from '@/SvgIcon'// svg组件
  
// register globally
Vue.component('svg-icon', SvgIcon)
  
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
 

以上就配置好了

使用方法：

1.下载svg图片文件

阿里云提供的iconfont：https://www.iconfont.cn

2.下载svg格式的图片，将下载下来的图片放置到到项目中src下的icon中建的svg文件夹下

3.在使用的地方加上以下代码，期中test就是svg图片的名称

<svg-icon icon-class="test"></svg-icon>