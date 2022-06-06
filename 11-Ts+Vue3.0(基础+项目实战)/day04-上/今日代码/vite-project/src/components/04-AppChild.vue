<template>
    <table>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>操作</th>
      </tr>
      <tr v-for="item,index in arr2" :key="index">
      <!-- 让item 按照{name:string}这个类型来 展示/使用 
      <td>{{(item as {age:number}).age}}</td>
      -->
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>
          <slot name="btns" :index="index"></slot>
        </td>
      </tr>
    </table>
</template>

<script lang='ts' setup>
import {UserType} from "#/table"

let props = defineProps({
  arr:{
    type:Array,
    default:[]
  }
})


let arr2 = props.arr as UserType[]

</script>
 
<style scoped>
table{border-collapse: collapse;}
table,th,td{border: 1px solid #000;}
th,td{padding: 10px;}
</style>