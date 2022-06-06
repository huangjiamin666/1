<template>
<!-- setup 语法糖 -->
    <p>{{num}}</p>
    <button @click="num++">按钮</button>
</template>

<script lang='ts' setup>
// setup 语法糖加上之后，script之间的代码会被Vue内部自动添加到原先的setup方法中 
import { reactive,toRefs } from 'vue'

let obj = {
  num:20
}
let objRet = reactive(obj);
let {num} = toRefs(objRet);

</script>
 
<style lang = "less" scoped>
  
</style>