<template>
<!-- 插槽作用域案例 -->
<!-- 能够把里面的标签传送到指定标签的最后的位置 -->
  <Teleport to="body">
    <p>这是一个p标签</p>
  </Teleport>
  
  <Table :arr="state.arr" >
  <!--let {index} = scope  -->
    <template #btns="{index}"> 
      <!-- 需求：点击这个按钮，获取这一行的数据 -->
      <button @click="hdClick(index)">编辑</button>
    </template>
  </Table>
  <!-- <div id="aaa"></div> -->
  <Table :arr="state.arr" >
    <template #btns>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </Table>

  <!-- <div class="mask">
    <Teleport to="#app">
      <div class="login-box"></div>
    </Teleport>
  </div> -->
</template>

<script lang='ts' setup>
import Table from "@/components/04-AppChild.vue"
import { reactive } from 'vue'
let state = reactive({
  arr:[{
    name:"小明",
    age:28
  },{
    name:"小红",
    age:20
  }]
})

const hdClick = (index:number)=>{
  console.log(state.arr[index]);
}

console.log(globalVar,globalObj);
fn('')
$("#app");
$.ajax();
</script>
 
<style lang = "less" scoped>
  
</style>