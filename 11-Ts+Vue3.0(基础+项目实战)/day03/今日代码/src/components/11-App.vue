<template>
<!-- 父组件 -->
    <Child :num="num" @fn="chanNum"></Child>
</template>

<script lang='ts' setup>
// 组件只需要引入就可以使用
import Child from "./11-AppChild.vue"
import { ref } from 'vue'
let num = ref(20);
const chanNum = ()=>{
  num.value++
}
</script>
 
<style lang = "less" scoped>
  
</style>