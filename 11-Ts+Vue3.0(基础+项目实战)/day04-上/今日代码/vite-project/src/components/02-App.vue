<template>
  <!-- v-model的传值 -->
  <Child v-model:num="num"></Child>
</template>

<script lang='ts' setup>
import Child from "./02-AppChild.vue"
import { ref } from 'vue'
let num = ref(20)
</script>
 
<style lang = "less" scoped>
  
</style>