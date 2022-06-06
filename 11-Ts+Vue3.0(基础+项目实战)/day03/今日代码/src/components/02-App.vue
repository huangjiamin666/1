<template>
<!-- ref方法(操作基本类型数据) -->
  <div>
      <p>{{num}}</p>
      <button @click="num++">按钮1</button>
      <button @click="hdClick">按钮2</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,Ref } from "vue"
export default defineComponent({
  setup () {

    // let num:number = 20;  // 这样子定义的数据不是响应式数据(做不到双向数据绑定，做不到影响界面的变化)
    let num = ref(20);  // 这个num是Vue内部封装的一个响应式对象数据  
    // num.value才能真正拿到20这个数据
    // 所以，以后在js中要操作这种响应式数据， 需要 .value
    // 但是模板上依旧使用 {{num}} 原因是Vue在编译模板的时候已经帮我们用.value获取一次了
    console.log(num.value);
    
    const hdClick = ()=>{
      num.value++;
      console.log(num.value);
    }

    

    return {
      num,
      hdClick
 
    }
  }
})
</script>
 
<style lang = "less" scoped>
  
</style>