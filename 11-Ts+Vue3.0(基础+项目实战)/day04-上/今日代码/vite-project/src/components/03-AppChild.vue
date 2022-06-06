<template>
    <slot name="btn" title="哈哈" :mynum="num"></slot>
    <p>子组件</p>
    <slot name="link" ></slot>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
let num = ref(30)
</script>
 
<style lang = "less" scoped>
  
</style>