<template>
<!-- reactive方法和ref方法的对比 -->
    <p>{{objRet.num}}</p>
</template>

<script lang='ts'>
import { defineComponent,reactive,ref } from 'vue'
export default defineComponent({
  setup () {
    // ref 用来实现基础数据类型的响应式
    // reactive 用来实现复杂数据类型的响应式
    let obj = {
      num:20
    }
    let objRet=reactive(obj);
    console.log("objRet:",objRet);
    console.log(objRet.num);
    
    let obj2 = {
      num:30
    }
    let objRef = ref(obj2)
    console.log("objRef:",objRef.value);
    console.log(objRef.value.num);
    

    return {
      objRet
 
    }
  }
})
</script>
 
<style lang = "less" scoped>
  
</style>