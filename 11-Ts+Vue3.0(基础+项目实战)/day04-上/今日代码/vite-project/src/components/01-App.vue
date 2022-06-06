<template>
<!-- 全选/全不选 案例讲解 -->
  <input type="checkbox" v-model="checkAll"> 全选/全不选
  <ul>
    <li v-for="item,index in list" :key="index">
        <input type="checkbox" v-model="checkList[index]">{{item}}
    </li>
  </ul>
  <div>
    
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
// let {list,num,a} = toRefs(reactive({
//   list:[10,20,30,40],
//   num:20,
//   a:{
    
//   }
// }))
let data = reactive<DataTypes>({
  list:[10,20,30,40],
  checkList:[],
  // 一个数据，如果在视图上有使用到，就需要写到toRefs解构里面去，如果只是在js环境临时用，视图不需要用到，那么就不需要参与解构。
});
data.checkList=data.list.map(()=>false);

let {list,checkList} = toRefs(data);

let checkAll = computed({
  get(){
    // checkAll受checkList这个数组的影响
    // checkList包含有一个false，就应该返回false
    return !data.checkList.includes(false);
  },
  set(newVal:boolean){
    console.log("checkAll被修改的时候执行set的代码",newVal);
    // 把checkList的所有的值都改成newVal
    data.checkList=data.checkList.map(()=>newVal);
  }
})

</script>
 
<style lang = "less" scoped>
  
</style>