<template>
  <div class="container">
      我是ref响应数据
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. name数据
    const name = ref('ls')
    console.log(name)
    const updateName = () => {
      name.value = 'zs'
    }
    // 2. age数据
    const age = ref(10)

    // ref常用定义简单数据类型的响应式数据
    // 其实也可以定义复杂数据类型的响应式数据
    // 对于数据未知的情况下 ref 是最适用的
    // const data = ref(null)
    // setTimeout(()=>{
    //   data.value = res.data
    // },1000)

    return {name, age, updateName}
  }
}
// ref函数，常用于简单数据类型定义为响应式数据
// 再修改值，获取值的时候，需要.value
// 在模板中使用ref申明的响应式数据，可以省略.value

// 使用场景：两大类，reactive,ref,其中toref，torefs只是reactive中的辅助函数

// 当你明确知道需要的是一个响应式数据 对象 那么就使用 reactive 即可
// 其他情况使用ref
</script>