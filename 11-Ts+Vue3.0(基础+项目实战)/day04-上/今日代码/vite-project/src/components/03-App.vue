<template>
<!-- 匿名插槽和具名插槽， 插槽作用域-->
  <Child>
    <!-- <template v-slot:link> -->
    <template #link>
      <a href="#">a标签11</a>
    </template>
      
    <!-- <template v-slot:btn> -->
    <template #btn="scope">
    <!-- scope这个对象自定义的，但是一般都叫scope
      scope专门收集所对应的子组件内部的slot标签身上的标签属性，做为自己的属性(除了name属性)
    -->
        <button>按钮22、{{scope.title}}、{{scope.mynum}}</button>
    </template>
    <!-- 插槽作用域： 在父组件中的子组件标签内部，获取子组件的数据 -->
  </Child>
</template>

<script lang='ts' setup>
import Child from "./03-AppChild.vue"
import {  } from 'vue'

</script>
 
<style lang = "less" scoped>
  
</style>