<template>
<!-- 子组件 -->
    <p>{{num}}</p>
    <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>
import { defineProps,defineEmits } from 'vue'
    defineProps({
        num:{
            type:Number,
            default:30
        }
    })

    // 子传父的时候需要先定义好emit这个方法
    const emit = defineEmits<{
        (event: 'fn'): void
    }>()

    const hdClick = ()=>{
        // 以前通过$emit("自定义事件名", 参数)
        emit("fn")
    }
</script>
 
<style lang = "less" scoped>
  
</style>