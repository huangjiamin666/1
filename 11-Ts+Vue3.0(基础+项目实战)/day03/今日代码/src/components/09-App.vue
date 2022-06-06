<template>
  <!-- watch的其他写法和 watchEffect的使用 -->
  <p>{{objRet.num}}</p>
  <button @click="objRet.num++">按钮</button>
</template>

<script lang='ts' setup>
import { ref, watch,reactive,toRefs, watchEffect } from 'vue'


let obj ={
  num:50
}

let objRet = reactive(obj);

// watch(()=>objRet.num,(newVal,oldVal)=>{
//    console.log(newVal,oldVal);
// })

// 写成数组，可监听多个数据
// watch([()=>objRet.num],(newVal,oldVal)=>{
//    console.log(newVal,oldVal);
// })

// 在页面刷新的时候就立即监听，数据从 undefined 变成有值的过程也能监听到
watchEffect(()=>{
  // 凡是写在这里的数据，只要发生变化，都会触发这里的代码执行
  console.log(objRet.num);
})
</script>
 
<style lang = "less" scoped>
  
</style>