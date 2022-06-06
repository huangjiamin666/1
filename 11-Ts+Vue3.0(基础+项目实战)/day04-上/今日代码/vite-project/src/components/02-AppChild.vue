<template>
  <p>子组件 {{num}}</p>
  <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>

let props = defineProps({
  num:{
    type:Number,
    default:100
  }
})

const emit = defineEmits<{
  // update: 固定写法， 后面的变量是父组件中v-model:后面的这个变量
  (event: 'update:num',n:number): void
}>()

let n = props.num
const hdClick = () =>{
  n++
  // emit(上面的event的值, 要修改成的值)
  emit('update:num',n)
}
</script>
 
<style lang = "less" scoped>
  
</style>