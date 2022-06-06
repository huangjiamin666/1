<template>
<!-- ref方法(操作复杂类型数据) -->
    <p>{{objRef.num}}</p>
    <button @click="objRef.num++">按钮</button>
    <button @click="hdClick">按钮2</button>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    let obj = {
      num:31
    }

    let objRef = ref(obj);
    console.log(objRef.value);

    const hdClick = ()=>{
      objRef.value.num+=5
    }
    
    return {
      objRef,
      hdClick
    }
  },
  data(){
    return{
      aa:10,

    }
  }
})
</script>
 
<style lang = "less" scoped>
  
</style>