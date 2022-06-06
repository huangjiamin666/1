<template>
  <!-- watch的写法 -->
  <p>{{num}}</p>
  <button @click="num++">按钮</button>
</template>

<script lang='ts' setup>
import { ref, watch,reactive,toRefs } from 'vue'
// let num = ref(20);

// watch(要监听的响应式数据，数据更新的时候执行的回调函数)
// watch(num,(newVal,oldVal)=>{
//   console.log(newVal,oldVal);
// })

let obj ={
  num:30
}

let objRet = reactive(obj);
let {num} = toRefs(objRet);
watch(num,(newVal,oldVal)=>{
   console.log(newVal,oldVal);
})

</script>
 
<style lang = "less" scoped>
  
</style>